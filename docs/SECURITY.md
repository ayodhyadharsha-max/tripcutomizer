# TripCustomizer Security Architecture & Guidelines

This document details the permanent security policies, secret management architecture, and coding guardrails for the TripCustomizer platform.

---

## 1. Secret Management Policy

### Environment Separation
- **Local Development**: Stored strictly in `.env.local` (ignored by Git).
- **Vercel Environments**: Configured via the Vercel Dashboard under **Project Settings > Environment Variables** with strict environment separation:
  - `Development`
  - `Preview`
  - `Production`

### Server Secrets vs. Public Client Variables

| Variable Type | Prefix | Target Runtime | Example |
| :--- | :--- | :--- | :--- |
| **Server-Only Secret** | `NONE` | Node.js Serverless runtime only | `RAZORPAY_KEY_SECRET`, `ADMIN_PASSWORD` |
| **Client-Safe Public** | `NEXT_PUBLIC_` | Inlined into client JS bundle | `NEXT_PUBLIC_RAZORPAY_KEY_ID`, `NEXT_PUBLIC_SUPABASE_URL` |

> [!CAUTION]
> **Strict Rule**: NEVER prefix secrets with `NEXT_PUBLIC_`. Variables containing `SECRET`, `PASSWORD`, `SERVICE_ROLE`, or `PRIVATE_KEY` with `NEXT_PUBLIC_` are blocked automatically by CI guardrails.

---

## 2. Admin Authentication Architecture

- **No Client Passwords**: Admin passwords (`admin123`, `89421`, etc.) are prohibited in client bundles.
- **Constant-Time Verification**: Server uses `crypto.timingSafeEqual` to validate credentials.
- **Signed HTTP-Only Cookies**: Authenticated admins receive a tamper-proof HMAC-SHA256 token in a secure, HTTP-only cookie (`tc_admin_token`) with an 8-hour expiry.
- **Server API Protection**: All sensitive API routes (`GET /api/bookings`, `GET /api/leads`, etc.) call `verifyAdminRequest(req)` and return HTTP 401 if unauthorized.

---

## 3. Payment Security & Integrity

- **Server-Only Key Secrets**: `RAZORPAY_KEY_SECRET` is never exposed or delivered to the browser.
- **No Signature Bypasses**: Fallbacks such as `order_TC_` or `pay_TC_` are prohibited. Every payment must have a valid cryptographic HMAC-SHA256 signature calculated on the server using `crypto.timingSafeEqual`.
- **Fail-Safe Server Policy**: If gateway credentials are not present in `process.env`, the API fails safely with HTTP 500. It never falls back to hardcoded or dummy credentials.

---

## 4. Customer PII Protection

- **No Hardcoded PII**: Source files must never contain real customer names, phone numbers, emails, or passport numbers.
- **Sanitization**: All user-submitted text fields are processed through `sanitizeInput()` to eliminate XSS injection vectors.
- **Rate Limiting**: Public endpoints enforce sliding window rate limiting via `checkRateLimit()` to mitigate brute force attacks and SMS exhaustion.

---

## 5. Database & Asset Protection

- Database files (`*.db`, `*.sqlite`, `*.db-wal`) and private keys (`*.key`, `*.pem`, `*.p12`) are permanently ignored in `.gitignore`.
- CI strictly validates `git ls-files` to ensure no database or credential dumps are tracked.

---

## 6. How to Run Local Security Checks

Run the automated security suite locally before pushing any changes:

```bash
# Run comprehensive security health check
npm run security:check

# Run security unit & regression tests
npm run test:security

# Run TypeScript type validation
npx tsc --noEmit
```
