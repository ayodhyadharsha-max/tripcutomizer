import { NextResponse } from 'next/server';
import crypto from 'crypto';
import getSupabaseServer from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = body;

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    let isValidSignature = true;

    // Verify signature if Razorpay secret is present
    if (keySecret && razorpay_signature && razorpay_order_id && razorpay_payment_id) {
      const generatedSignature = crypto
        .createHmac('sha256', keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      isValidSignature = generatedSignature === razorpay_signature;
    }

    if (!isValidSignature) {
      return NextResponse.json({ success: false, error: 'Invalid payment signature' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const orderId = razorpay_order_id || `order_${Date.now()}`;
    const paymentId = razorpay_payment_id || `pay_${Date.now()}`;

    // 1. Log Payment into Central Database (Supabase)
    try {
      const supabase = getSupabaseServer();
      if (supabase) {
        await supabase.from('payments').upsert({
          order_id: orderId,
          payment_id: paymentId,
          amount: bookingData?.totalAmount || 0,
          customer_name: bookingData?.customerName || 'Valued Traveler',
          customer_email: bookingData?.customerEmail || '',
          customer_phone: bookingData?.customerPhone || '',
          status: 'SUCCESS',
          updated_at: timestamp,
        });
      }
    } catch (dbErr) {
      console.warn('[API payment verify] Supabase payment logging info:', dbErr);
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
          subject: `🚨 CONFIRMED PAYMENT & BOOKING: ${orderId} - ${bookingData?.customerName}`,
          from_name: 'tripcustomizer PG System',
          to_email: 'tripcustomizer@gmail.com',
          order_id: orderId,
          payment_id: paymentId,
          customer_name: bookingData?.customerName,
          customer_phone: bookingData?.customerPhone,
          customer_email: bookingData?.customerEmail,
          package_name: bookingData?.packageName,
          destination: bookingData?.destination,
          total_amount: `₹${bookingData?.totalAmount?.toLocaleString('en-IN')}`,
          payment_method: bookingData?.paymentMethod || 'Online Payment Gateway',
          passengers_list: JSON.stringify(bookingData?.passengersList || []),
          status: 'PAID & CONFIRMED',
          timestamp: timestamp,
        }),
      });
    } catch (emailErr) {
      console.warn('[API payment verify] Web3Forms email info:', emailErr);
    }

    return NextResponse.json({
      success: true,
      orderId: orderId,
      paymentId: paymentId,
      status: 'PAID',
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
