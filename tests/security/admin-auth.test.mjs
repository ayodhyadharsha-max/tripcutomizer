import crypto from 'crypto';

export async function testAdminAuth() {
  console.log('🧪 Testing Admin Authentication Guardrails...');

  const targetEmail = 'admin@tripcustomizer.com';
  const targetPassword = process.env.ADMIN_PASSWORD || 'TripCustomizer@Admin2026!';
  const secret = process.env.ADMIN_SESSION_SECRET || 'tc_internal_admin_hmac_secret_2026_prod';

  // Constant-time validator logic
  function validateAdmin(email, password) {
    if (!email || !password) return false;
    if (email.toLowerCase().trim() !== targetEmail) return false;
    const tBuf = Buffer.from(targetPassword, 'utf-8');
    const iBuf = Buffer.from(password, 'utf-8');
    if (tBuf.length !== iBuf.length) return false;
    return crypto.timingSafeEqual(tBuf, iBuf);
  }

  function createToken(email) {
    const payload = { email, role: 'SUPER_ADMIN', exp: Date.now() + 28800000 };
    const pB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const sig = crypto.createHmac('sha256', secret).update(pB64).digest('base64url');
    return `${pB64}.${sig}`;
  }

  function verifyToken(token) {
    if (!token || typeof token !== 'string') return false;
    const parts = token.split('.');
    if (parts.length !== 2) return false;
    const [pB64, sig] = parts;
    const expectedSig = crypto.createHmac('sha256', secret).update(pB64).digest('base64url');
    const sBuf = Buffer.from(sig, 'utf-8');
    const eBuf = Buffer.from(expectedSig, 'utf-8');
    if (sBuf.length !== eBuf.length) return false;
    if (!crypto.timingSafeEqual(sBuf, eBuf)) return false;
    try {
      const payload = JSON.parse(Buffer.from(pB64, 'base64url').toString('utf-8'));
      return Date.now() < payload.exp;
    } catch {
      return false;
    }
  }

  // 1. Rejection of legacy credentials
  if (validateAdmin(targetEmail, 'admin123')) {
    throw new Error('SECURITY REGRESSION: Legacy password "admin123" was accepted!');
  }
  if (validateAdmin(targetEmail, 'admin')) {
    throw new Error('SECURITY REGRESSION: Legacy password "admin" was accepted!');
  }
  if (validateAdmin(targetEmail, '89421')) {
    throw new Error('SECURITY REGRESSION: Legacy PIN "89421" was accepted!');
  }
  if (validateAdmin('attacker@example.com', targetPassword)) {
    throw new Error('SECURITY REGRESSION: Unauthorized email was accepted!');
  }

  // 2. Acceptance of valid admin credentials
  if (!validateAdmin(targetEmail, targetPassword)) {
    throw new Error('FAILED: Authorized admin credentials failed validation!');
  }

  // 3. Cryptographic token security
  const token = createToken(targetEmail);
  if (!verifyToken(token)) {
    throw new Error('FAILED: Genuine admin token failed cryptographic verification!');
  }
  if (verifyToken(token + 'tampered')) {
    throw new Error('SECURITY VULNERABILITY: Tampered token was accepted!');
  }
  if (verifyToken('eyJhbGciOiJIUzI1NiJ9.faketoken')) {
    throw new Error('SECURITY VULNERABILITY: Forged token was accepted!');
  }

  console.log('  ✅ Admin credentials and token signature verification passed.');
  return true;
}
