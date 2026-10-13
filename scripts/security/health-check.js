#!/usr/bin/env node

/**
 * TripCustomizer Master Security Health Check
 * Single command (npm run security:check) to validate all security guardrails.
 */

const { execSync } = require('child_process');

console.log('\n========================================================================');
console.log('🛡️  TRIPCUSTOMIZER COMPREHENSIVE SECURITY HEALTH CHECK');
console.log('========================================================================\n');

const checks = [
  {
    name: '1. Secret & Backdoor Scanner',
    cmd: 'node scripts/security/scan-secrets.js'
  },
  {
    name: '2. Tracked Files & Database Protection',
    cmd: 'node scripts/security/check-tracked-files.js'
  },
  {
    name: '3. Customer PII In Source Code',
    cmd: 'node scripts/security/scan-pii.js'
  },
  {
    name: '4. Client-Side Secret Exposure & Env Policy',
    cmd: 'node scripts/security/check-client-secrets.js'
  },
  {
    name: '5. TypeScript Compilation (Strict Mode)',
    cmd: 'npx tsc --noEmit'
  },
  {
    name: '6. Automated Security Guardrail Unit Tests',
    cmd: 'node tests/security/run-all-security-tests.mjs'
  }
];

let allPassed = true;
const results = [];

for (const check of checks) {
  process.stdout.write(`⏳ Running ${check.name}... `);
  try {
    execSync(check.cmd, { stdio: 'pipe' });
    console.log('PASSED ✅');
    results.push({ name: check.name, status: 'PASSED' });
  } catch (err) {
    console.log('FAILED ❌');
    allPassed = false;
    results.push({
      name: check.name,
      status: 'FAILED',
      error: err.stderr ? err.stderr.toString().trim() : err.stdout ? err.stdout.toString().trim() : err.message
    });
  }
}

console.log('\n========================================================================');
if (allPassed) {
  console.log('🎉 SECURITY CHECK PASSED: All 6 Security Guardrails are 100% Verified!');
  console.log('========================================================================\n');
  process.exit(0);
} else {
  console.error('🚨 SECURITY CHECK FAILED: One or more security guardrails failed!');
  console.error('========================================================================');
  results
    .filter((r) => r.status === 'FAILED')
    .forEach((r) => {
      console.error(`\nFailed Check: ${r.name}`);
      console.error(r.error);
    });
  console.error('\n========================================================================\n');
  process.exit(1);
}
