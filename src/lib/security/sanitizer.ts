/**
 * Security Hardening Helper: Input Sanitization & In-Memory Rate Limiting
 */

/**
 * XSS HTML Sanitizer
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Passport & PAN Number Format Sanitizer
 */
export function sanitizePassportNumber(passport: string): string {
  return passport.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 9);
}

export function sanitizePANNumber(pan: string): string {
  return pan.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
}

/**
 * In-Memory Sliding Window Rate Limiter (for API routes & form submissions)
 */
interface RateLimitBucket {
  count: number;
  resetTime: number;
}

const ipBuckets = new Map<string, RateLimitBucket>();

export function checkRateLimit(
  ip: string,
  limit: number = 10,
  windowMs: number = 60000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);

  if (!bucket || now > bucket.resetTime) {
    ipBuckets.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (bucket.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  bucket.count += 1;
  return { allowed: true, remaining: limit - bucket.count };
}
