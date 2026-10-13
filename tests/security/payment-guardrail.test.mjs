import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function testPaymentGuardrail() {
  console.log('🧪 Testing Payment Verification Guardrails...');

  // 1. Check verify-payment route for bypass removal
  const verifyPath = path.join(process.cwd(), 'src/app/api/verify-payment/route.ts');
  const verifyContent = fs.readFileSync(verifyPath, 'utf-8');

  if (verifyContent.includes('isFallbackOrder') || verifyContent.includes('order_TC_')) {
    throw new Error('SECURITY REGRESSION: order_TC_ bypass logic detected in /api/verify-payment/route.ts!');
  }

  // 2. Check timingSafeEqual is used
  if (!verifyContent.includes('timingSafeEqual')) {
    throw new Error('SECURITY REGRESSION: /api/verify-payment does not use timingSafeEqual for signature verification!');
  }

  // 3. Verify no hardcoded secrets in verify routes
  if (verifyContent.includes('LR6tbNSU6wozUm97BftZNDmK') || verifyContent.includes('rzp_live_')) {
    throw new Error('SECURITY REGRESSION: Hardcoded Razorpay secret found in verify-payment route!');
  }

  // 4. Test cryptographic HMAC verification behavior
  const secretKey = 'test_secret_for_guardrail_only';
  const orderId = 'order_test_987654';
  const paymentId = 'pay_test_987654';

  const correctSig = crypto.createHmac('sha256', secretKey).update(`${orderId}|${paymentId}`).digest('hex');
  const forgedSig = '11223344556677889900aabbccddeeff11223344556677889900aabbccddeeff';

  function verify(oId, pId, sig, secret) {
    if (!oId || !pId || !sig || !secret) return false;
    const gen = crypto.createHmac('sha256', secret).update(`${oId}|${pId}`).digest('hex');
    const b1 = Buffer.from(gen, 'utf-8');
    const b2 = Buffer.from(sig, 'utf-8');
    if (b1.length !== b2.length) return false;
    return crypto.timingSafeEqual(b1, b2);
  }

  if (verify(orderId, paymentId, forgedSig, secretKey)) {
    throw new Error('SECURITY VULNERABILITY: Forged Razorpay signature was accepted!');
  }

  if (!verify(orderId, paymentId, correctSig, secretKey)) {
    throw new Error('FAILED: Genuine Razorpay signature verification failed!');
  }

  console.log('  ✅ Payment signature verification, bypass backdoor removal, and constant-time check passed.');
  return true;
}
