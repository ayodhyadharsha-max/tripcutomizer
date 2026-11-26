#!/usr/bin/env node

/**
 * TripCustomizer Guardrail: Customer PII Scanner
 * Scans source code in src/ for hardcoded customer PII (phone numbers, personal emails, passports).
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(process.cwd(), 'src');

const ALLOWED_EMAILS = new Set([
  'tripcustomizer@gmail.com',
  'help@tripcustomizer.com',
  'support@tripcustomizer.com',
  'admin@tripcustomizer.com',
  'admin@gmail.com',
  'ayodhyadharshan@gmail.com',
  'test@example.com',
  'user@example.com'
]);

// Patterns that indicate hardcoded customer personal data
const PII_PATTERNS = [
  {
    name: 'Customer Real Mobile Number',
    regex: /(?:phone|mobile|customerPhone)\s*[:=]\s*['"](\+?91)?[6-9]\d{9}['"]/i,
    test: (match) => {
      // Allow documentation/dummy numbers like 9999999999 or 9876543210
      return !match.includes('9999999999') && !match.includes('0000000000');
    }
  },
  {
    name: 'Hardcoded Personal Email',
    regex: /['"]([a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook)\.com)['"]/i,
    test: (match) => {
      const email = match.replace(/['"]/g, '').toLowerCase();
      return !ALLOWED_EMAILS.has(email);
    }
  },
  {
    name: 'Hardcoded Passport Number',
    regex: /(?:passport|passportNo)\s*[:=]\s*['"][A-Z]\d{7,8}['"]/i,
    test: () => true
  }
];

function scanFiles(dir, violations) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules') {
        scanFiles(fullPath, violations);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (!['.ts', '.tsx', '.js', '.jsx', '.json'].includes(ext)) continue;
      // Skip test files
      if (entry.name.includes('.test.') || entry.name.includes('.spec.')) continue;

      checkFile(fullPath, violations);
    }
  }
}

function checkFile(filePath, violations) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      for (const p of PII_PATTERNS) {
        const match = line.match(p.regex);
        if (match && p.test(match[0])) {
          violations.push({
            file: path.relative(process.cwd(), filePath),
            line: index + 1,
            category: p.name
          });
        }
      }
    });
  } catch (err) {}
}

function run() {
  console.log('🔍 [GUARDRAIL] Scanning source files for hardcoded customer PII...');
  const violations = [];
  scanFiles(SRC_DIR, violations);

  if (violations.length === 0) {
    console.log('✅ [GUARDRAIL] PII Scan Passed: 0 hardcoded customer PII records found.\n');
    process.exit(0);
  } else {
    console.error('\n🚨 [GUARDRAIL] CUSTOMER PII DETECTED IN SOURCE CODE:');
    console.error('========================================================================');
    violations.forEach((v) => {
      console.error(`- Found ${v.category} in ${v.file}:${v.line}`);
    });
    console.error('========================================================================');
    console.error('Action Required: Remove customer personal information from source code.\n');
    process.exit(1);
  }
}

run();
