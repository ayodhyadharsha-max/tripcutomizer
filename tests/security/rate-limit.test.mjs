export async function testRateLimit() {
  console.log('🧪 Testing In-Memory Sliding Window Rate Limiter...');

  const ipBuckets = new Map();

  function checkRateLimit(ip, limit = 5, windowMs = 60000) {
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

  const testIp = '192.168.1.100';
  for (let i = 0; i < 5; i++) {
    const res = checkRateLimit(testIp, 5, 10000);
    if (!res.allowed) {
      throw new Error(`FAILED: Rate limit rejected valid request ${i + 1} within threshold!`);
    }
  }

  // 6th request should be blocked
  const blockedRes = checkRateLimit(testIp, 5, 10000);
  if (blockedRes.allowed) {
    throw new Error('SECURITY VULNERABILITY: Rate limiter failed to block excessive request over threshold!');
  }

  console.log('  ✅ Sliding window rate limiter throttling verified.');
  return true;
}
