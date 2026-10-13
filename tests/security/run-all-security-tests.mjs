#!/usr/bin/env node

/**
 * TripCustomizer Master Security Guardrail Test Runner
 * Executes all automated security unit and regression tests.
 */

import { testAdminAuth } from './admin-auth.test.mjs';
import { testBookingsGuardrail } from './bookings-guardrail.test.mjs';
import { testLeadsGuardrail } from './leads-guardrail.test.mjs';
import { testOtpGuardrail } from './otp-guardrail.test.mjs';
import { testPaymentGuardrail } from './payment-guardrail.test.mjs';
import { testSecurityHeaders } from './security-headers.test.mjs';
import { testRateLimit } from './rate-limit.test.mjs';

async function main() {
  console.log('\n======================================================');
  console.log('🛡️  TRIPCUSTOMIZER AUTOMATED SECURITY TEST SUITE');
  console.log('======================================================\n');

  const testSuites = [
    { name: 'Admin Authentication', fn: testAdminAuth },
    { name: 'Bookings Route Guardrail', fn: testBookingsGuardrail },
    { name: 'Leads Route Guardrail', fn: testLeadsGuardrail },
    { name: 'OTP & Login Guardrail', fn: testOtpGuardrail },
    { name: 'Payment Verification Guardrail', fn: testPaymentGuardrail },
    { name: 'Security Headers Configuration', fn: testSecurityHeaders },
    { name: 'Rate Limiter Behavior', fn: testRateLimit }
  ];

  let passed = 0;
  let failed = 0;

  for (const suite of testSuites) {
    try {
      await suite.fn();
      passed++;
    } catch (err) {
      console.error(`\n❌ [FAILED] ${suite.name}: ${err.message}\n`);
      failed++;
    }
  }

  console.log('\n======================================================');
  console.log(`📊 SECURITY TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('======================================================\n');

  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

main();
