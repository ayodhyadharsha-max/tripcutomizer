#!/usr/bin/env node

/**
 * TripCustomizer Guardrail: Git Tracked Files Protection
 * Ensures no database files, local env files, or private keys are tracked by Git.
 */

const { execSync } = require('child_process');

const FORBIDDEN_TRACKED_PATTERNS = [
  { name: 'Database file (*.db, *.sqlite)', regex: /\.(db|sqlite|sqlite3|db-wal|db-shm|db-journal)$/i },
  { name: 'Environment file (.env*)', regex: /(^|\/)\.env(\.[a-zA-Z0-9]+)?$/ },
  { name: 'Private Key/Certificate (*.pem, *.key, *.p12, *.pfx)', regex: /\.(pem|key|p12|pfx|pkcs12)$/i },
  { name: 'Customer/Local data backup (data/*.json)', regex: /^data\/.*\.json$/i }
];

function run() {
  console.log('🔍 [GUARDRAIL] Checking Git tracked files for forbidden databases, keys, or .env files...');
  let trackedFiles = [];

  try {
    const stdout = execSync('git ls-files', { encoding: 'utf-8' });
    trackedFiles = stdout.split('\n').filter(Boolean);
  } catch (err) {
    console.error('⚠️ Could not run git ls-files. Skipping tracked files check.');
    process.exit(0);
  }

  const violations = [];

  for (const file of trackedFiles) {
    // .env.example is explicitly allowed
    if (file === '.env.example' || file.endsWith('/.env.example')) continue;

    for (const pattern of FORBIDDEN_TRACKED_PATTERNS) {
      if (pattern.regex.test(file)) {
        violations.push({ file, rule: pattern.name });
      }
    }
  }

  if (violations.length === 0) {
    console.log('✅ [GUARDRAIL] Tracked Files Check Passed: 0 forbidden files tracked in Git.\n');
    process.exit(0);
  } else {
    console.error('\n🚨 [GUARDRAIL] FORBIDDEN FILES ARE TRACKED IN GIT:');
    console.error('========================================================================');
    violations.forEach((v) => {
      console.error(`- Tracked file: "${v.file}" matches forbidden pattern: ${v.rule}`);
    });
    console.error('========================================================================');
    console.error('Action Required: Run "git rm --cached <file>" to untrack it and check .gitignore.\n');
    process.exit(1);
  }
}

run();
