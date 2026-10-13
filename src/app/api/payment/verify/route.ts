import { NextResponse } from 'next/server';
import crypto from 'crypto';
import getSupabaseServer from '@/lib/supabaseServer';
import { checkRateLimit, sanitizeInput } from '@/lib/security/sanitizer';

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting (Prevent brute-force signature guessing)
    const forwardedFor = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const clientIp = forwardedFor.split(',')[0].trim();
    const rateCheck = checkRateLimit(`payment_verify_${clientIp}`, 15, 60000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many verification attempts. Please wait.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = body;

    // Strict validation: Required fields must be provided
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Missing required payment verification fields' },
        { status: 400 }
      );
    }

    if (
      typeof razorpay_order_id !== 'string' ||
      typeof razorpay_payment_id !== 'string' ||
      typeof razorpay_signature !== 'string'
    ) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment parameters format' },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.error('[API payment/verify] RAZORPAY_KEY_SECRET missing from environment');
      return NextResponse.json(
        { success: false, error: 'Payment gateway configuration is missing on server' },
        { status: 500 }
      );
    }

    // 2. Strict HMAC-SHA256 signature calculation with constant-time equality check
    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const expectedBuf = Buffer.from(generatedSignature, 'utf-8');
    const actualBuf = Buffer.from(razorpay_signature, 'utf-8');

    const isValidSignature =
      expectedBuf.length === actualBuf.length &&
      crypto.timingSafeEqual(expectedBuf, actualBuf);

    if (!isValidSignature) {
      console.warn(`[API payment/verify] Signature verification failed for order ${razorpay_order_id}`);
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature. Verification failed.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const pnrVoucher = `TC-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    const safeCustomerName = sanitizeInput(bookingData?.customerName || 'Valued Traveler');
    const safeCustomerEmail = sanitizeInput(bookingData?.customerEmail || '');
    const safeCustomerPhone = sanitizeInput(bookingData?.customerPhone || '');
    const safePackageName = sanitizeInput(bookingData?.packageName || '');
    const safeDestination = sanitizeInput(bookingData?.destination || '');
    const safeTotalAmount = Number(bookingData?.totalAmount) || 0;

    // 3. Log verified payment to database
    try {
      const supabase = getSupabaseServer();
      if (supabase) {
        await supabase.from('payments').upsert({
          order_id: razorpay_order_id,
          payment_id: razorpay_payment_id,
          amount: safeTotalAmount,
          customer_name: safeCustomerName,
          customer_email: safeCustomerEmail,
          customer_phone: safeCustomerPhone,
          pnr_voucher: pnrVoucher,
          status: 'SUCCESS',
          updated_at: timestamp,
        });
      }
    } catch (dbErr) {
      console.warn('[API payment/verify] Supabase payment logging info:', dbErr);
    }

    // 4. Send booking confirmation notification via Web3Forms if configured
    try {
      const apiKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (apiKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: apiKey,
            subject: `🚨 CONFIRMED RAZORPAY PAYMENT & BOOKING (PNR: ${pnrVoucher}): ${razorpay_order_id} - ${safeCustomerName}`,
            from_name: 'Trip Customizer Razorpay PG',
            to_email: 'tripcustomizer@gmail.com',
            pnr_voucher: pnrVoucher,
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id,
            customer_name: safeCustomerName,
            customer_phone: safeCustomerPhone,
            customer_email: safeCustomerEmail,
            package_name: safePackageName,
            destination: safeDestination,
            total_amount: `₹${safeTotalAmount.toLocaleString('en-IN')}`,
            payment_method: 'Razorpay Standard Checkout',
            status: 'PAID & VERIFIED',
            timestamp: timestamp,
          }),
        });
      }
    } catch (emailErr) {
      console.warn('[API payment/verify] Web3Forms email info:', emailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      pnrVoucher,
      pnr_voucher: pnrVoucher,
      razorpay_order_id,
      razorpay_payment_id,
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      status: 'PAID',
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
