#!/usr/bin/env node

/**
 * TripCustomizer Git Pre-Commit Hook
 * Blocks commits containing secrets, database files, certificates, or customer PII.
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔒 [PRE-COMMIT] Validating staged files for security compliance...');

let stagedFiles = [];
try {
  const stdout = execSync('git diff --cached --name-status', { encoding: 'utf-8' });
  const lines = stdout.split('\n').map((s) => s.trim()).filter(Boolean);
  stagedFiles = lines
    .filter((l) => !l.startsWith('D\t'))
    .map((l) => l.split('\t').pop())
    .filter(Boolean);
} catch (err) {
  // If not in a git repo or no staged files, exit safely
  process.exit(0);
}

if (stagedFiles.length === 0) {
  process.exit(0);
}

const FORBIDDEN_FILE_RULES = [
  { name: 'Database file (*.db, *.sqlite)', regex: /\.(db|sqlite|sqlite3|db-wal|db-shm|db-journal)$/i },
  { name: 'Environment file (.env*)', regex: /(^|\/)\.env(\.[a-zA-Z0-9]+)?$/ },
  { name: 'Private Key/Certificate (*.pem, *.key, *.p12, *.pfx)', regex: /\.(pem|key|p12|pfx)$/i },
  { name: 'Customer Data JSON Dump (data/*.json)', regex: /^data\/.*\.json$/i }
];

const fileViolations = [];

for (const file of stagedFiles) {
  if (file === '.env.example' || file.endsWith('/.env.example')) continue;
  // If the file does not exist on disk, it is a deletion (removing forbidden files is encouraged)
  if (!fs.existsSync(file)) continue;

  for (const rule of FORBIDDEN_FILE_RULES) {
    if (rule.regex.test(file)) {
      fileViolations.push({ file, rule: rule.name });
    }
  }
}

if (fileViolations.length > 0) {
  console.error('\n❌ [PRE-COMMIT BLOCKED] Forbidden files staged for commit:');
  console.error('========================================================================');
  fileViolations.forEach((v) => {
    console.error(`- "${v.file}" matches forbidden pattern: ${v.rule}`);
  });
  console.error('========================================================================');
  console.error('Action: Run "git reset HEAD <file>" to unstage. These files must never be committed.\n');
  process.exit(1);
}

// Check staged content diff for credentials or secrets (excluding regression test suites and documentation)
let stagedDiff = '';
try {
  stagedDiff = execSync("git diff --cached -- ':(exclude)tests/**' ':(exclude)docs/**' ':(exclude)scripts/**'", {
    encoding: 'utf-8',
    maxBuffer: 10 * 1024 * 1024,
  });
} catch (err) {}

const SECRET_PATTERNS = [
  { name: 'Razorpay Live Key', regex: /\+.*\brzp_live_[a-zA-Z0-9]{14,}\b/ },
  { name: 'Razorpay Secret Key', regex: /\+.*(?:RAZORPAY_KEY_SECRET|key_secret)\s*[:=]\s*['"][a-zA-Z0-9]{16,}['"]/i },
  { name: 'Private Key', regex: /\+.*-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/ },
  { name: 'Hardcoded Admin Password', regex: /\+.*(?:password|adminPassword)\s*===?\s*['"](?:admin|admin123|89421)['"]/i },
  { name: 'Master OTP Code', regex: /\+.*(?:otp|code)\s*===?\s*['"](?:969696|123456)['"]/i },
  { name: 'order_TC_ Payment Bypass', regex: /\+.*(?:isFallbackOrder|order_TC_)/i }
];

const diffViolations = [];
for (const sp of SECRET_PATTERNS) {
  if (sp.regex.test(stagedDiff)) {
    diffViolations.push(sp.name);
  }
}

if (diffViolations.length > 0) {
  console.error('\n❌ [PRE-COMMIT BLOCKED] Staged changes contain sensitive patterns:');
  console.error('========================================================================');
  diffViolations.forEach((name) => {
    console.error(`- Detected: ${name}`);
  });
  console.error('========================================================================');
  console.error('Action: Remove the secret or backdoor from your changes before committing.\n');
  process.exit(1);
}

console.log('✅ [PRE-COMMIT] Security validation passed. Staged files are clean.\n');
process.exit(0);
