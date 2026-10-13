import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import getSupabaseServer from '@/lib/supabaseServer';
import { checkRateLimit, sanitizeInput } from '@/lib/security/sanitizer';

export async function POST(req: Request) {
  try {
    const forwarded = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const clientIp = forwarded.split(',')[0].trim();

    // 1. Rate Limiting: Max 10 order creations per minute per IP
    const rateLimit = checkRateLimit(`order_create_${clientIp}`, 10, 60000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many payment requests. Please try again shortly.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { amount, currency = 'INR', receipt, packageName, customerName, customerEmail, customerPhone } = body;

    // 2. Server Environment Credentials (FAIL SAFELY IF MISSING)
    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error('[Payment Gateway Error]: Server Razorpay credentials missing from environment variables.');
      return NextResponse.json(
        { success: false, error: 'Payment gateway configuration is missing on server.' },
        { status: 500 }
      );
    }

    // 3. Amount Validation
    let amountInPaise = amount;
    if (typeof amount === 'number' && amount < 100) {
      amountInPaise = Math.round(amount * 100);
    } else if (typeof amount === 'number') {
      amountInPaise = Math.round(amount);
    }

    if (!amountInPaise || amountInPaise < 100) {
      return NextResponse.json(
        { success: false, error: 'Amount must be at least 100 paise (₹1)' },
        { status: 400 }
      );
    }

    // Razorpay maximum transaction safeguard (₹15,00,000 max single transaction)
    if (amountInPaise > 150000000) {
      return NextResponse.json(
        { success: false, error: 'Transaction exceeds maximum permitted single order limit.' },
        { status: 400 }
      );
    }

    const cleanCustomerName = sanitizeInput(customerName || 'Traveler');
    const cleanCustomerEmail = sanitizeInput(customerEmail || '');
    const cleanCustomerPhone = sanitizeInput(customerPhone || '');
    const cleanPackageName = sanitizeInput(packageName || 'Custom Package');

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const orderOptions = {
      amount: amountInPaise,
      currency: currency || 'INR',
      receipt: receipt || `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      notes: {
        customer_name: cleanCustomerName,
        customer_email: cleanCustomerEmail,
        customer_phone: cleanCustomerPhone,
        package_name: cleanPackageName,
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
          customer_name: cleanCustomerName,
          customer_email: cleanCustomerEmail,
          customer_phone: cleanCustomerPhone,
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
    console.error('[Razorpay Create Order Error]:', err?.message || err);
    return NextResponse.json(
      {
        success: false,
        error: err?.error?.description || err.message || 'Unable to create payment order. Please try again.',
      },
      { status: 500 }
    );
  }
}
