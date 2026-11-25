import { NextResponse } from 'next/server';
import {
  validateAdminCredentials,
  createAdminSessionToken,
  setAdminSessionCookie,
} from '@/lib/security/adminAuth';
import { checkRateLimit } from '@/lib/security/sanitizer';

export async function POST(req: Request) {
  try {
    const forwarded = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const clientIp = forwarded.split(',')[0].trim();

    // Rate limit: 30 login attempts per minute per IP
    const rateLimit = checkRateLimit(`admin_login_${clientIp}`, 30, 60000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many login attempts. Please wait 30 seconds.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Admin Email and Password are required.' },
        { status: 400 }
      );
    }

    const isValid = validateAdminCredentials(email, password);
    if (!isValid) {
      // Artificial delay to prevent timing and fast brute-forcing
      await new Promise((r) => setTimeout(r, 600));
      return NextResponse.json(
        { success: false, error: 'Invalid admin credentials.' },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken(email);
    const response = NextResponse.json({
      success: true,
      user: email,
      role: 'Super Admin',
    });

    setAdminSessionCookie(response, token);
    return response;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Internal server error during authentication.' },
      { status: 500 }
    );
  }
}
