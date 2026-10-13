#!/usr/bin/env node

/**
 * TripCustomizer Guardrail: Client-Side Secret Leakage Checker
 * Ensures server secrets are NEVER referenced in client components or exposed via NEXT_PUBLIC_
 */

const fs = require('fs');
const path = require('path');

const FORBIDDEN_SERVER_SECRETS = [
  'RAZORPAY_KEY_SECRET',
  'SUPABASE_SERVICE_ROLE_KEY',
  'ADMIN_PASSWORD',
  'ADMIN_SESSION_SECRET',
  'DATABASE_URL'
];

const FORBIDDEN_PUBLIC_PATTERNS = [
  /NEXT_PUBLIC_.*SECRET.*/i,
  /NEXT_PUBLIC_.*PASSWORD.*/i,
  /NEXT_PUBLIC_.*SERVICE_ROLE.*/i,
  /NEXT_PUBLIC_.*PRIVATE_KEY.*/i
];

function checkEnvExample(violations) {
  const envExamplePath = path.join(process.cwd(), '.env.example');
  if (!fs.existsSync(envExamplePath)) return;

  const content = fs.readFileSync(envExamplePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const [key, val] = trimmed.split('=');
    const varName = key ? key.trim() : '';

    // Check if any value is committed in .env.example
    if (val && val.trim().length > 0) {
      violations.push({
        file: '.env.example',
        line: index + 1,
        rule: `Real value committed to .env.example for "${varName}". Values must remain empty.`
      });
    }

    // Check if NEXT_PUBLIC_ contains secret keywords
    for (const pat of FORBIDDEN_PUBLIC_PATTERNS) {
      if (pat.test(varName)) {
        violations.push({
          file: '.env.example',
          line: index + 1,
          rule: `Forbidden NEXT_PUBLIC_ variable "${varName}" contains secret/password keywords.`
        });
      }
    }
  });
}

function scanClientFiles(dir, violations) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        scanClientFiles(fullPath, violations);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext)) continue;

      const content = fs.readFileSync(fullPath, 'utf-8');
      const isClientComponent = content.includes("'use client'") || content.includes('"use client"');

      if (isClientComponent) {
        FORBIDDEN_SERVER_SECRETS.forEach((secret) => {
          if (content.includes(secret)) {
            violations.push({
              file: path.relative(process.cwd(), fullPath),
              rule: `Client component ('use client') references server-only secret "${secret}"`
            });
          }
        });
      }
    }
  }
}

function run() {
  console.log('🔍 [GUARDRAIL] Checking client components and environment policies for secret exposure...');
  const violations = [];

  checkEnvExample(violations);
  scanClientFiles(path.join(process.cwd(), 'src'), violations);

  if (violations.length === 0) {
    console.log('✅ [GUARDRAIL] Client-Side Secret Leakage Check Passed: 0 leaks found.\n');
    process.exit(0);
  } else {
    console.error('\n🚨 [GUARDRAIL] CLIENT-SIDE SECRET EXPOSURE DETECTED:');
    console.error('========================================================================');
    violations.forEach((v) => {
      console.error(`- In ${v.file}${v.line ? `:${v.line}` : ''}: ${v.rule}`);
    });
    console.error('========================================================================');
    console.error('Action Required: Move server secrets to server-only routes / remove from client bundle.\n');
    process.exit(1);
  }
}

run();
