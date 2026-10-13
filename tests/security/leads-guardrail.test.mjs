import fs from 'fs';
import path from 'path';

export async function testLeadsGuardrail() {
  console.log('🧪 Testing Leads Route Guardrails...');

  const leadsRoutePath = path.join(process.cwd(), 'src/app/api/leads/route.ts');
  const routeContent = fs.readFileSync(leadsRoutePath, 'utf-8');

  // 1. Verify verifyAdminRequest is enforced on GET
  if (!routeContent.includes('verifyAdminRequest(req)')) {
    throw new Error('SECURITY REGRESSION: /api/leads does not check verifyAdminRequest!');
  }

  // 2. Verify anonymous GET is rejected with 401
  const getSection = routeContent.slice(routeContent.indexOf('export async function GET'));
  if (!getSection.includes('status: 401')) {
    throw new Error('SECURITY REGRESSION: GET /api/leads does not return 401 for unauthorized calls!');
  }

  // 3. Verify PATCH is protected with 401
  const patchSection = routeContent.slice(routeContent.indexOf('export async function PATCH'));
  if (!patchSection.includes('status: 401')) {
    throw new Error('SECURITY REGRESSION: PATCH /api/leads does not return 401 for unauthorized calls!');
  }

  // 4. Verify no hardcoded customer PII in memoryLeads
  if (routeContent.includes('rj906906@gmail.com') || routeContent.includes('8881299358')) {
    throw new Error('SECURITY REGRESSION: Real customer PII found hardcoded in /api/leads/route.ts!');
  }

  // 5. Verify rate limiting is called
  if (!routeContent.includes('checkRateLimit')) {
    throw new Error('SECURITY REGRESSION: /api/leads does not use checkRateLimit!');
  }

  // 6. Verify input sanitization is called
  if (!routeContent.includes('sanitizeInput')) {
    throw new Error('SECURITY REGRESSION: /api/leads does not sanitize user inputs!');
  }

  console.log('  ✅ Leads API authorization, sanitization, and PII protection passed.');
  return true;
}
