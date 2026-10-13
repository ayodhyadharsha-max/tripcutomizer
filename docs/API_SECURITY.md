# TripCustomizer API Security Inventory

> **Policy**: Every API endpoint under `/api/*` MUST be registered in this document. Any new endpoint added without documented security controls and automated test coverage will fail CI review.

---

## Endpoint Inventory

| Endpoint | Method | Access Level | Rate Limit | Input Validation | PII Exposed | Payment Access | Security Controls & Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/api/admin/login` | `POST` | **PUBLIC** | 5 req / min / IP | Email & Password | None | No | Constant-time HMAC comparison (`crypto.timingSafeEqual`). Issues signed HTTP-only `tc_admin_token` cookie (8h TTL). |
| `/api/admin/session` | `GET` | **ADMIN** | Unthrottled | None | Email only | No | Verifies cryptographic HMAC-SHA256 signature of `tc_admin_token` cookie. Returns 401 if unauthorized. |
| `/api/admin/logout` | `POST` | **ADMIN** | Unthrottled | None | None | No | Clears `tc_admin_token` HTTP-only cookie with `maxAge: 0`. |
| `/api/bookings` | `GET` | **ADMIN** | Unthrottled | None | Full Bookings & Pax | No | Enforces `verifyAdminRequest(req)`. Rejects anonymous requests with HTTP 401. |
| `/api/bookings` | `POST` | **PUBLIC** | 10 req / min / IP | Strict Sanitization | Traveler Details | Yes (Audit) | Sliding window rate limiting. Sanitizes all strings (`sanitizeInput`). Defaults `paymentStatus` to `Pending` unless verified. |
| `/api/bookings` | `PATCH` | **ADMIN** | Unthrottled | Status enum | None | No | Enforces `verifyAdminRequest(req)`. Rejects anonymous requests with HTTP 401. Updates booking status. |
| `/api/leads` | `GET` | **ADMIN** | Unthrottled | None | Client Leads | No | Enforces `verifyAdminRequest(req)`. Rejects anonymous requests with HTTP 401. |
| `/api/leads` | `POST` | **PUBLIC** | 10 req / min / IP | Strict Sanitization | Client Contacts | No | Sliding window rate limiting. Input sanitization. Prevents automated lead submission flooding. |
| `/api/leads` | `PATCH` | **ADMIN** | Unthrottled | Status enum | None | No | Enforces `verifyAdminRequest(req)`. Rejects anonymous requests with HTTP 401. Updates lead status. |
| `/api/create-order` | `POST` | **PUBLIC** | 10 req / min / IP | Amount & Currency | Customer Name/Email | Yes (Order creation) | Reads `RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET` from server env. Fails safely (500) if unconfigured. Never falls back to test/hardcoded keys. |
| `/api/payment/create-order` | `POST` | **PUBLIC** | 10 req / min / IP | Amount & Currency | Customer Name/Email | Yes (Order creation) | Server-side Razorpay order creation. Input sanitization on notes. Rate limited. |
| `/api/verify-payment` | `POST` | **PUBLIC** | 15 req / min / IP | Signature, Order & Pay ID | Customer Name/Email | Yes (Verification) | Computes HMAC-SHA256 digest on server. Uses `crypto.timingSafeEqual`. Eliminates all `order_TC_` signature bypasses. |
| `/api/payment/verify` | `POST` | **PUBLIC** | 15 req / min / IP | Signature, Order & Pay ID | Customer Name/Email | Yes (Verification) | Mirror endpoint with identical strict cryptographic signature validation and rate limiting. |
| `/api/send-otp` | `POST` | **PUBLIC** | 5 req / 10m (IP)<br>3 req / 10m (Phone) | Indian Mobile (10 digits) | Phone number | No | Multi-tier rate limiting (by IP and phone). Never returns OTP in response body in production. Prevents SMS exhaustion. |
| `/api/download-app` | `GET` | **PUBLIC** | Unthrottled | None | None | No | Redirects to static APK download. |

---

## Security Access Levels

1. **PUBLIC**: Open to website visitors. Must implement IP rate limiting and strict payload sanitization.
2. **USER**: Accessible only to authenticated customers via session.
3. **ADMIN**: Restricted strictly to authorized administrators via verified HTTP-only `tc_admin_token` cookie.
4. **SERVER ONLY**: Internal server functions that must never be exposed via client-side code.
