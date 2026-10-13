#!/usr/bin/env node

/**
 * TripCustomizer Guardrail: Automated Secret Scanner
 * Scans code repository for exposed secrets, API keys, credentials, and backdoors.
 * NEVER prints secret values in output.
 */

const fs = require('fs');
const path = require('path');

const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  'coverage',
  '.vercel'
]);

const IGNORED_FILES = new Set([
  '.env.example',
  '.env',
  '.env.local',
  '.env.development.local',
  '.env.test.local',
  '.env.production.local',
  'package-lock.json',
  'masterPackagesUnified.ts',
  'unifiedPackageList.ts',
  'masterPackagesUnified.js'
]);

const SECRET_PATTERNS = [
  {
    name: 'Razorpay Live Key ID',
    regex: /\brzp_live_[a-zA-Z0-9]{14,}\b/,
    risk: 'CRITICAL'
  },
  {
    name: 'Razorpay Secret Key',
    regex: /(?:RAZORPAY_KEY_SECRET|razorpay_secret|key_secret)\s*[:=]\s*['"][a-zA-Z0-9]{16,}['"]/i,
    risk: 'CRITICAL'
  },
  {
    name: 'Generic sk_live Secret Key',
    regex: /\bsk_live_[a-zA-Z0-9]{16,}\b/,
    risk: 'CRITICAL'
  },
  {
    name: 'RSA/EC/PGP Private Key',
    regex: /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/,
    risk: 'CRITICAL'
  },
  {
    name: 'Database Connection String with Credentials',
    regex: /(?:postgres|postgresql|mysql|mongodb(?:\+srv)?):\/\/[^:\s'"]+:[^@\s'"]+@/i,
    risk: 'CRITICAL'
  },
  {
    name: 'Hardcoded Admin Password Assignment',
    regex: /(?:password|adminPassword)\s*===?\s*['"](?:admin|admin123|89421|root|pass123)['"]/i,
    risk: 'CRITICAL'
  },
  {
    name: 'Hardcoded Master OTP Bypass',
    regex: /(?:otp|enteredOtp|code)\s*===?\s*['"](?:969696|123456|000000|111111|999999)['"]/i,
    risk: 'CRITICAL'
  },
  {
    name: 'Razorpay Payment Signature Bypass (order_TC_ backdoor)',
    regex: /isFallbackOrder|startsWith\(['"]order_TC_['"]\)\s*\|\|\s*isValidSignature\s*=\s*true/i,
    risk: 'CRITICAL'
  },
  {
    name: 'Web3Forms Hardcoded UUID in source',
    regex: /['"]c542ca79-b08a-4352-bf3e-1045518a0486['"]/,
    risk: 'HIGH'
  },
  {
    name: 'AWS Access Key ID',
    regex: /\b(AKIA[0-9A-Z]{16})\b/,
    risk: 'HIGH'
  },
  {
    name: 'High-Entropy Secret in assignment',
    regex: /(?:secret_key|api_secret|access_secret|jwt_secret)\s*[:=]\s*['"][a-zA-Z0-9_\-]{24,}['"]/i,
    risk: 'HIGH'
  }
];

function scanDirectory(dir, violations) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        scanDirectory(path.join(dir, entry.name), violations);
      }
    } else if (entry.isFile()) {
      if (IGNORED_FILES.has(entry.name)) continue;
      // Skip guardrail scripts and test files that define these rules
      if (dir.includes('scripts/security') || dir.includes('tests/security')) continue;
      if (entry.name.includes('test-security') || entry.name === 'scan-secrets.js') continue;

      const ext = path.extname(entry.name).toLowerCase();
      const textExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs', '.cjs', '.env', '.yaml', '.yml', '.sql', '.md'];
      if (!textExtensions.includes(ext) && !entry.name.startsWith('.env')) continue;

      const filePath = path.join(dir, entry.name);
      scanFile(filePath, violations);
    }
  }
}

function scanFile(filePath, violations) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, lineIndex) => {
      for (const pattern of SECRET_PATTERNS) {
        if (pattern.regex.test(line)) {
          // Never print the actual secret value!
          violations.push({
            file: path.relative(process.cwd(), filePath),
            line: lineIndex + 1,
            name: pattern.name,
            risk: pattern.risk
          });
        }
      }
    });
  } catch (err) {
    // Ignore unreadable binary or permission issues
  }
}

function run() {
  console.log('🔍 [GUARDRAIL] Running Secret & Backdoor Scanner across repository...');
  const violations = [];
  scanDirectory(process.cwd(), violations);

  if (violations.length === 0) {
    console.log('✅ [GUARDRAIL] Secret Scan Passed: 0 exposed secrets or backdoors found.\n');
    process.exit(0);
  } else {
    console.error('\n🚨 [GUARDRAIL] SECRET SCAN FAILED! Exposed secrets or backdoors detected:');
    console.error('========================================================================');
    violations.forEach((v) => {
      console.error(`- [${v.risk}] ${v.name} in ${v.file}:${v.line}`);
    });
    console.error('========================================================================');
    console.error('Action Required: Remove credentials and move them to environment variables.\n');
    process.exit(1);
  }
}

run();
