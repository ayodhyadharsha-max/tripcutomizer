import { NextResponse } from 'next/server';
import crypto from 'crypto';
import getSupabaseServer from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Missing required payment verification fields' },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET || 'gvYHUjt68ufGQTNdLF51wkva';

    // HMAC-SHA256 signature verification (order_id + "|" + payment_id)
    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValidSignature = generatedSignature === razorpay_signature;

    if (!isValidSignature) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature. Signature mismatch.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // 1. Log Payment into Central Database (Supabase)
    try {
      const supabase = getSupabaseServer();
      if (supabase) {
        await supabase.from('payments').upsert({
          order_id: razorpay_order_id,
          payment_id: razorpay_payment_id,
          amount: bookingData?.totalAmount || 0,
          customer_name: bookingData?.customerName || 'Valued Traveler',
          customer_email: bookingData?.customerEmail || '',
          customer_phone: bookingData?.customerPhone || '',
          status: 'SUCCESS',
          updated_at: timestamp,
        });
      }
    } catch (dbErr) {
      console.warn('[API verify-payment] Supabase payment logging info:', dbErr);
    }

    // 2. Trigger Instant Email Alert to tripcustomizer@gmail.com via Web3Forms API
    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'c542ca79-b08a-4352-bf3e-1045518a0486';
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `🚨 CONFIRMED RAZORPAY PAYMENT & BOOKING: ${razorpay_order_id} - ${bookingData?.customerName}`,
          from_name: 'Trip Customizer Razorpay PG',
          to_email: 'tripcustomizer@gmail.com',
          order_id: razorpay_order_id,
          payment_id: razorpay_payment_id,
          customer_name: bookingData?.customerName,
          customer_phone: bookingData?.customerPhone,
          customer_email: bookingData?.customerEmail,
          package_name: bookingData?.packageName,
          destination: bookingData?.destination,
          total_amount: `₹${bookingData?.totalAmount?.toLocaleString('en-IN')}`,
          payment_method: 'Razorpay Standard Checkout',
          status: 'PAID & VERIFIED',
          timestamp: timestamp,
        }),
      });
    } catch (emailErr) {
      console.warn('[API verify-payment] Web3Forms email info:', emailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      status: 'PAID',
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
