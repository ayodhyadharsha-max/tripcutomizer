import { NextResponse } from 'next/server';
import crypto from 'crypto';
import getSupabaseServer from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, currency = 'INR', packageName, customerName, customerEmail, customerPhone } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json({ success: false, error: 'Invalid amount' }, { status: 400 });
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Convert amount to paise for Razorpay
    const amountInPaise = Math.round(amount * 100);
    const receipt = `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    let orderId = `order_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

    // If Razorpay API credentials exist, create official order via Razorpay API
    if (keyId && keySecret && !keyId.includes('mock')) {
      try {
        const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');
        const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authHeader,
          },
          body: JSON.stringify({
            amount: amountInPaise,
            currency: currency,
            receipt: receipt,
            notes: {
              customer_name: customerName || 'Traveler',
              customer_email: customerEmail || '',
              package_name: packageName || 'Custom Package',
            },
          }),
        });

        if (rzpRes.ok) {
          const rzpOrder = await rzpRes.json();
          orderId = rzpOrder.id;
        } else {
          console.warn('[Razorpay API] Order creation returned non-200, fallback to orderId:', orderId);
        }
      } catch (rzpErr) {
        console.warn('[Razorpay API] Network error, using fallback orderId:', rzpErr);
      }
    }

    // Save order record to Supabase payments table if configured
    try {
      const supabase = getSupabaseServer();
      if (supabase) {
        await supabase.from('payments').insert({
          order_id: orderId,
          amount: amount,
          currency: currency,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
          status: 'CREATED',
          created_at: new Date().toISOString(),
        });
      }
    } catch (dbErr) {
      console.warn('[API create-order] Supabase save warning:', dbErr);
    }

    return NextResponse.json({
      success: true,
      orderId: orderId,
      amount: amountInPaise,
      currency: currency,
      keyId: keyId || 'rzp_test_tc_default',
      receipt: receipt,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
