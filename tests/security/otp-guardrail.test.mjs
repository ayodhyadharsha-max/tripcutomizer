import fs from 'fs';
import path from 'path';

export async function testOtpGuardrail() {
  console.log('🧪 Testing OTP Authentication Guardrails...');

  // 1. Verify login page has no master bypass code
  const loginPath = path.join(process.cwd(), 'src/app/login/page.tsx');
  const loginContent = fs.readFileSync(loginPath, 'utf-8');

  if (loginContent.includes('969696') || loginContent.includes('123456')) {
    throw new Error('SECURITY REGRESSION: Master bypass OTP code (969696 / 123456) detected in login page!');
  }

  // 2. Verify send-otp route does not return OTP in production response
  const sendOtpPath = path.join(process.cwd(), 'src/app/api/send-otp/route.ts');
  const sendOtpContent = fs.readFileSync(sendOtpPath, 'utf-8');

  // Verify rate limiting in send-otp
  if (!sendOtpContent.includes('checkRateLimit')) {
    throw new Error('SECURITY REGRESSION: /api/send-otp does not implement rate limiting!');
  }

  // Verify OTP is not unconditionally sent in JSON response
  if (sendOtpContent.includes('otp,') || sendOtpContent.includes('otp: generatedOtp')) {
    // Only allowed if strictly guarded by development check
    if (!sendOtpContent.includes("NODE_ENV === 'development'")) {
      throw new Error('SECURITY REGRESSION: OTP is leaked in API response body!');
    }
  }

  console.log('  ✅ OTP route rate limiting, master code removal, and secret hygiene passed.');
  return true;
}
