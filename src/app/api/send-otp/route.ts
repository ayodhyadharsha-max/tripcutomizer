import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/sanitizer';

export async function POST(req: Request) {
  try {
    const forwarded = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const clientIp = forwarded.split(',')[0].trim();

    // 1. IP Rate Limiting: Max 5 OTP requests per 10 minutes per IP
    const ipLimit = checkRateLimit(`otp_ip_${clientIp}`, 5, 10 * 60 * 1000);
    if (!ipLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many OTP requests from this device. Please wait 10 minutes.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { phone } = body;

    if (!phone || typeof phone !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Valid mobile phone number is required.' },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      return NextResponse.json(
        { success: false, error: 'Invalid mobile phone number format.' },
        { status: 400 }
      );
    }

    // 2. Phone Rate Limiting: Max 3 OTP requests per 10 minutes per Phone
    const phoneLimit = checkRateLimit(`otp_phone_${cleanPhone}`, 3, 10 * 60 * 1000);
    if (!phoneLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many OTP requests for this number. Please wait 10 minutes.' },
        { status: 429 }
      );
    }

    // 3. Generate Cryptographically Strong 6-digit OTP
    const crypto = await import('crypto');
    const generatedOtp = crypto.randomInt(100000, 999999).toString();

    // 4. Fast2SMS Integration (India SMS Gateway)
    const fast2smsApiKey = process.env.FAST2SMS_API_KEY;
    if (fast2smsApiKey) {
      try {
        const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
          method: 'POST',
          headers: {
            authorization: fast2smsApiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            route: 'otp',
            variables_values: generatedOtp,
            numbers: cleanPhone.slice(-10),
          }),
        });
        const data = await response.json();
        if (data.return) {
          return NextResponse.json({
            success: true,
            message: 'OTP SMS sent successfully.',
          });
        }
      } catch (err: any) {
        console.warn('Fast2SMS gateway error:', err?.message || err);
      }
    }

    // 5. Twilio Integration (Global SMS Gateway)
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_PHONE_NUMBER;

    if (twilioAccountSid && twilioAuthToken && twilioFrom) {
      try {
        const auth = Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64');
        const twilioBody = new URLSearchParams({
          To: phone.startsWith('+') ? phone : `+${phone}`,
          From: twilioFrom,
          Body: `Your Trip Customizer OTP verification code is ${generatedOtp}. Valid for 10 minutes.`,
        });

        const response = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
          {
            method: 'POST',
            headers: {
              Authorization: `Basic ${auth}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: twilioBody.toString(),
          }
        );
        const data = await response.json();
        if (response.ok && data.sid) {
          return NextResponse.json({
            success: true,
            message: 'OTP SMS sent successfully.',
          });
        }
      } catch (err: any) {
        console.warn('Twilio gateway error:', err?.message || err);
      }
    }

    // 6. Explicit Dev-Only Mock (NEVER active in production)
    const isExplicitDevMock =
      process.env.NODE_ENV === 'development' && process.env.OTP_TEST_MODE === 'true';

    if (isExplicitDevMock) {
      return NextResponse.json({
        success: true,
        message: 'Development OTP simulated.',
        otp: generatedOtp,
      });
    }

    // 7. Production Fail-Safe: Never leak the OTP when no gateway is configured
    return NextResponse.json(
      {
        success: false,
        error:
          'SMS service is temporarily unavailable. Please use WhatsApp support at +91 7408763401 for instant verification.',
      },
      { status: 503 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Internal server error processing OTP.' },
      { status: 500 }
    );
  }
}
