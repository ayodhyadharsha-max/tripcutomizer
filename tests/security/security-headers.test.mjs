import fs from 'fs';
import path from 'path';

export async function testSecurityHeaders() {
  console.log('🧪 Testing Next.js Security Headers Configuration...');

  const configPath = path.join(process.cwd(), 'next.config.mjs');
  const configContent = fs.readFileSync(configPath, 'utf-8');

  const REQUIRED_HEADERS = [
    'Strict-Transport-Security',
    'X-Frame-Options',
    'X-Content-Type-Options',
    'Referrer-Policy',
    'Permissions-Policy',
    'Content-Security-Policy'
  ];

  for (const header of REQUIRED_HEADERS) {
    if (!configContent.includes(header)) {
      throw new Error(`SECURITY REGRESSION: Missing required security header "${header}" in next.config.mjs!`);
    }
  }

  // Verify CSP includes critical domains
  if (!configContent.includes('checkout.razorpay.com')) {
    throw new Error('SECURITY REGRESSION: Razorpay checkout is missing from Content-Security-Policy!');
  }

  console.log('  ✅ Security headers (HSTS, CSP, X-Frame-Options, nosniff, Referrer-Policy) verified.');
  return true;
}
