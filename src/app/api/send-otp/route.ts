import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { phone, otp } = await req.json().catch(() => ({}));

    if (!phone) {
      return NextResponse.json(
        { success: false, error: 'Mobile phone number is required.' },
        { status: 400 }
      );
    }

    const generatedOtp = otp || Math.floor(1000 + Math.random() * 9000).toString();
    const cleanPhone = phone.replace(/\D/g, '');

    // 1. Fast2SMS Integration (India SMS Gateway)
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
        return NextResponse.json({
          success: true,
          gateway: 'Fast2SMS',
          message: 'OTP SMS sent successfully via Fast2SMS',
          otp: process.env.NODE_ENV === 'development' ? generatedOtp : undefined,
        });
      } catch (err: any) {
        console.warn('Fast2SMS gateway error:', err);
      }
    }

    // 2. Twilio Integration (Global SMS Gateway)
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_PHONE_NUMBER;

    if (twilioAccountSid && twilioAuthToken && twilioFrom) {
      try {
        const auth = Buffer.from(`${twilioAccountSid}:${twilioAuthToken}`).toString('base64');
        const body = new URLSearchParams({
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
            body: body.toString(),
          }
        );
        const data = await response.json();
        return NextResponse.json({
          success: true,
          gateway: 'Twilio',
          message: 'OTP SMS sent successfully via Twilio',
          otp: process.env.NODE_ENV === 'development' ? generatedOtp : undefined,
        });
      } catch (err: any) {
        console.warn('Twilio gateway error:', err);
      }
    }

    // 3. Fallback / Test SMS Gateway Mode
    return NextResponse.json({
      success: true,
      gateway: 'Simulation / Test OTP',
      message: `OTP code generated for ${cleanPhone}`,
      otp: generatedOtp,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
