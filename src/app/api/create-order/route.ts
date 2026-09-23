import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import getSupabaseServer from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { amount, currency = 'INR', receipt, packageName, customerName, customerEmail, customerPhone } = body;

    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json({ success: false, error: 'Razorpay API credentials not configured' }, { status: 401 });
    }

    // Convert to paise if amount is provided in rupees
    let amountInPaise = amount;
    if (typeof amount === 'number' && amount < 100) {
      amountInPaise = Math.round(amount * 100);
    } else if (typeof amount === 'number') {
      amountInPaise = Math.round(amount);
    }

    if (!amountInPaise || amountInPaise < 100) {
      return NextResponse.json({ success: false, error: 'Amount must be at least 100 paise (₹1)' }, { status: 400 });
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const orderOptions = {
      amount: amountInPaise,
      currency: currency || 'INR',
      receipt: receipt || `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      notes: {
        customer_name: customerName || 'Traveler',
        customer_email: customerEmail || '',
        customer_phone: customerPhone || '',
        package_name: packageName || 'Custom Package',
      },
    };

    const order = await razorpay.orders.create(orderOptions);

    // Save order record to Supabase payments table if configured
    try {
      const supabase = getSupabaseServer();
      if (supabase) {
        await supabase.from('payments').insert({
          order_id: order.id,
          amount: amountInPaise / 100,
          currency: order.currency,
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
      order_id: order.id,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: keyId,
      keyId: keyId,
      receipt: order.receipt,
    });
  } catch (err: any) {
    console.error('[Razorpay Create Order Error]:', err);
    return NextResponse.json(
      { success: false, error: err?.error?.description || err.message || 'Razorpay order creation failed' },
      { status: 500 }
    );
  }
}
