import crypto from 'crypto';
import { NextResponse } from 'next/server';

const COOKIE_NAME = 'tc_admin_token';
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

function getSessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.RAZORPAY_KEY_SECRET ||
    'tc_internal_admin_hmac_secret_2026_prod'
  );
}

export function validateAdminCredentials(email: string, password: string): boolean {
  const targetEmail = (process.env.ADMIN_EMAIL || 'admin@tripcustomizer.com').toLowerCase().trim();
  const targetPassword = process.env.ADMIN_PASSWORD || 'TripCustomizer@Admin2026!';

  if (!email || !password) return false;

  const inputEmail = email.toLowerCase().trim();
  if (inputEmail !== targetEmail) return false;

  // Constant-time comparison to prevent timing attacks
  const targetBuffer = Buffer.from(targetPassword, 'utf-8');
  const inputBuffer = Buffer.from(password, 'utf-8');

  if (targetBuffer.length !== inputBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(targetBuffer, inputBuffer);
}

export function createAdminSessionToken(email: string): string {
  const secret = getSessionSecret();
  const payload = {
    email: email.toLowerCase().trim(),
    role: 'SUPER_ADMIN',
    iat: Date.now(),
    exp: Date.now() + SESSION_TTL_MS,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', secret)
    .update(payloadB64)
    .digest('base64url');

  return `${payloadB64}.${signature}`;
}

export function verifyAdminSessionToken(token: string | null | undefined): boolean {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payloadB64, signature] = parts;
  const secret = getSessionSecret();

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payloadB64)
    .digest('base64url');

  const sigBuffer = Buffer.from(signature, 'utf-8');
  const expectedSigBuffer = Buffer.from(expectedSignature, 'utf-8');

  if (sigBuffer.length !== expectedSigBuffer.length) {
    return false;
  }

  if (!crypto.timingSafeEqual(sigBuffer, expectedSigBuffer)) {
    return false;
  }

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf-8'));
    if (!payload || typeof payload.exp !== 'number') return false;
    if (Date.now() > payload.exp) return false; // Expired
    return true;
  } catch {
    return false;
  }
}

export function verifyAdminRequest(req: Request): boolean {
  // 1. Try reading cookie header
  const cookieHeader = req.headers.get('cookie') || '';
  const cookies = cookieHeader.split(';').map((c) => c.trim());
  const tokenCookie = cookies.find((c) => c.startsWith(`${COOKIE_NAME}=`));

  if (tokenCookie) {
    const token = tokenCookie.substring(`${COOKIE_NAME}=`.length);
    if (verifyAdminSessionToken(token)) return true;
  }

  // 2. Try Authorization Bearer header
  const authHeader = req.headers.get('authorization') || '';
  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    if (verifyAdminSessionToken(token)) return true;
  }

  return false;
}

export function setAdminSessionCookie(res: NextResponse, token: string): void {
  const isProd = process.env.NODE_ENV === 'production';
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
    path: '/',
  });
}

export function clearAdminSessionCookie(res: NextResponse): void {
  res.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });
}
