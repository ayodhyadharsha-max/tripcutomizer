import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import getSupabaseServer from '@/lib/supabaseServer';
import { verifyAdminRequest } from '@/lib/security/adminAuth';
import { checkRateLimit, sanitizeInput } from '@/lib/security/sanitizer';

export interface ServerBooking {
  id: string;
  referenceNo: string;
  userId?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  packageName: string;
  destination: string;
  travelDates: string;
  travelersCount: number;
  hotelCategory?: string;
  basePrice?: number;
  gstAmount?: number;
  discountAmount?: number;
  couponApplied?: string;
  paymentMethod?: string;
  transactionId?: string;
  specialRequests?: string;
  totalAmount: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  paymentStatus: 'Paid' | 'Partial' | 'Pending';
  createdAt: string;
  notes?: string;
  passengersList?: Array<{ name: string; age?: number | string; gender?: string; type?: string }>;
}

// In-memory cache for runtime (initialized empty, NO hardcoded customer PII)
let memoryBookings: ServerBooking[] = [];

const getDataFilePath = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch (e) {}
  }
  return path.join(dataDir, 'bookings.json');
};

const loadBookingsFromFile = (): ServerBooking[] => {
  try {
    const filePath = getDataFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.trim()) {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryBookings = parsed;
          return parsed;
        }
      }
    }
  } catch (e) {
    console.warn('[API Bookings] File read info:', e);
  }
  return memoryBookings;
};

const saveBookingsToFile = (bookings: ServerBooking[]) => {
  memoryBookings = bookings;
  try {
    const filePath = getDataFilePath();
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2), 'utf-8');
  } catch (e) {
    console.warn('[API Bookings] File write info:', e);
  }
};

/**
 * GET /api/bookings
 * Secured: Requires valid Admin authentication session.
 */
export async function GET(req: Request) {
  const isAdmin = verifyAdminRequest(req);
  if (!isAdmin) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized: Admin authentication required to access bookings data' },
      { status: 401 }
    );
  }

  let fileBookings = loadBookingsFromFile();
  let supabaseBookings: ServerBooking[] = [];

  try {
    const supabaseServer = getSupabaseServer();
    if (supabaseServer) {
      const { data, error } = await supabaseServer
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data) && data.length > 0) {
        supabaseBookings = data.map((b: any) => ({
          id: b.id || `bk-${Date.now()}`,
          referenceNo: b.reference_no || b.referenceNo || b.ref_no || `TC-BK-${(b.id || '').slice(0, 5)}`,
          userId: b.user_id || b.userId || '',
          customerName: b.customer_name || b.customerName || b.name || b.full_name || 'Valued Traveler',
          customerPhone: b.customer_phone || b.customerPhone || b.phone || b.mobile || '',
          customerEmail: b.customer_email || b.customerEmail || b.email || '',
          packageName: b.package_name || b.packageName || b.destination || b.tour_name || 'Holiday Tour',
          destination: b.destination || 'India',
          travelDates: b.travel_dates || b.travelDates || b.dates || 'Upcoming',
          travelersCount: Number(b.travelers_count || b.travelersCount || b.pax || 1),
          hotelCategory: b.hotel_category || b.hotelCategory || '4-Star Premium Deluxe Hotel & Resort',
          basePrice: Number(b.base_price || b.basePrice || 0),
          gstAmount: Number(b.gst_amount || b.gstAmount || 0),
          discountAmount: Number(b.discount_amount || b.discountAmount || 0),
          couponApplied: b.coupon_applied || b.couponApplied || '',
          paymentMethod: b.payment_method || b.paymentMethod || 'Online PG (Cashfree / UPI)',
          transactionId: b.transaction_id || b.transactionId || '',
          specialRequests: b.special_requests || b.specialRequests || '',
          totalAmount: Number(b.total_amount || b.totalAmount || b.amount || b.price || 0),
          status: b.status || 'Confirmed',
          paymentStatus: b.payment_status || b.paymentStatus || 'Paid',
          createdAt: b.created_at || b.createdAt || new Date().toISOString(),
          notes: b.notes || '',
          passengersList: b.passengers_list || b.passengersList || []
        }));
      }
    }
  } catch (err) {
    console.warn('[API Bookings] Supabase GET info:', err);
  }

  const bookingMap = new Map<string, ServerBooking>();
  fileBookings.forEach((b) => bookingMap.set(b.id, b));
  supabaseBookings.forEach((b) => bookingMap.set(b.id, b));

  const merged = Array.from(bookingMap.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json({ success: true, bookings: merged });
}

/**
 * POST /api/bookings
 * Creates a new booking with rate limiting and input sanitization.
 */
export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const clientIp = forwardedFor.split(',')[0].trim();
    const rateCheck = checkRateLimit(`booking_post_${clientIp}`, 10, 60000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many booking requests. Please wait a moment.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const existing = loadBookingsFromFile();

    const rawTotal = Number(body.totalAmount) || 0;
    if (rawTotal < 0 || rawTotal > 50000000) {
      return NextResponse.json({ success: false, error: 'Invalid booking amount' }, { status: 400 });
    }

    const computedBase = Number(body.basePrice) || Math.round(rawTotal / 1.05);
    const computedGst = Number(body.gstAmount) || Math.round(rawTotal - computedBase);
    const refNum = body.referenceNo ? sanitizeInput(String(body.referenceNo)).slice(0, 30) : `TC-BK-${Math.floor(10000 + Math.random() * 90000)}`;

    const safeCustomerName = sanitizeInput(String(body.customerName || 'Valued Traveler')).slice(0, 100);
    const safeCustomerPhone = sanitizeInput(String(body.customerPhone || '')).replace(/[^0-9+\s-]/g, '').slice(0, 20);
    const safeCustomerEmail = sanitizeInput(String(body.customerEmail || '')).slice(0, 100);
    const safePackageName = sanitizeInput(String(body.packageName || 'Custom Holiday Package')).slice(0, 150);
    const safeDestination = sanitizeInput(String(body.destination || 'India / International')).slice(0, 100);
    const safeTravelDates = sanitizeInput(String(body.travelDates || 'Upcoming Dates')).slice(0, 80);
    const safeHotelCategory = sanitizeInput(String(body.hotelCategory || '4-Star Premium Deluxe Hotel & Resort')).slice(0, 80);
    const safePaymentMethod = sanitizeInput(String(body.paymentMethod || 'Online PG')).slice(0, 60);
    const safeTransactionId = sanitizeInput(String(body.transactionId || '')).slice(0, 100);
    const safeSpecialRequests = sanitizeInput(String(body.specialRequests || '')).slice(0, 500);
    const safeNotes = sanitizeInput(String(body.notes || '')).slice(0, 500);

    // Sanitize passengers list
    const sanitizedPassengers = Array.isArray(body.passengersList)
      ? body.passengersList.slice(0, 30).map((p: any) => ({
          name: sanitizeInput(String(p?.name || '')).slice(0, 80),
          age: typeof p?.age === 'number' ? Math.min(Math.max(p.age, 0), 120) : sanitizeInput(String(p?.age || '')).slice(0, 10),
          gender: sanitizeInput(String(p?.gender || '')).slice(0, 20),
          type: sanitizeInput(String(p?.type || '')).slice(0, 30),
        }))
      : [];

    // Verified payment check
    const isVerifiedPaid = Boolean(body.paymentStatus === 'Paid' && safeTransactionId);
    const paymentStatus: ServerBooking['paymentStatus'] = isVerifiedPaid ? 'Paid' : 'Pending';
    const status: ServerBooking['status'] = isVerifiedPaid ? 'Confirmed' : (body.status === 'Cancelled' ? 'Cancelled' : 'Pending');

    const newBooking: ServerBooking = {
      id: body.id ? sanitizeInput(String(body.id)).slice(0, 50) : `bk-${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      referenceNo: refNum,
      userId: body.userId ? sanitizeInput(String(body.userId)).slice(0, 64) : '',
      customerName: safeCustomerName,
      customerPhone: safeCustomerPhone,
      customerEmail: safeCustomerEmail,
      packageName: safePackageName,
      destination: safeDestination,
      travelDates: safeTravelDates,
      travelersCount: Math.min(Math.max(Number(body.travelersCount) || 1, 1), 50),
      hotelCategory: safeHotelCategory,
      basePrice: computedBase,
      gstAmount: computedGst,
      discountAmount: Number(body.discountAmount) || 0,
      couponApplied: sanitizeInput(String(body.couponApplied || '')).slice(0, 30),
      paymentMethod: safePaymentMethod,
      transactionId: safeTransactionId,
      specialRequests: safeSpecialRequests,
      totalAmount: rawTotal,
      status,
      paymentStatus,
      createdAt: new Date().toISOString(),
      notes: safeNotes,
      passengersList: sanitizedPassengers
    };

    // Prepend new booking so it appears at top
    const updated = [newBooking, ...existing.filter(b => b.id !== newBooking.id)];
    saveBookingsToFile(updated);

    // 1. Sync to Supabase Central Database (Server Side)
    try {
      const supabaseServer = getSupabaseServer();
      if (supabaseServer) {
        await supabaseServer.from('bookings').upsert({
          id: newBooking.id,
          reference_no: newBooking.referenceNo,
          user_id: newBooking.userId || null,
          customer_name: newBooking.customerName,
          customer_phone: newBooking.customerPhone,
          customer_email: newBooking.customerEmail || null,
          package_name: newBooking.packageName,
          destination: newBooking.destination,
          travel_dates: newBooking.travelDates,
          travelers_count: newBooking.travelersCount || 1,
          hotel_category: newBooking.hotelCategory || null,
          base_price: newBooking.basePrice || 0,
          gst_amount: newBooking.gstAmount || 0,
          discount_amount: newBooking.discountAmount || 0,
          coupon_applied: newBooking.couponApplied || null,
          payment_method: newBooking.paymentMethod || null,
          transaction_id: newBooking.transactionId || null,
          special_requests: newBooking.specialRequests || null,
          total_amount: newBooking.totalAmount || 0,
          status: newBooking.status,
          payment_status: newBooking.paymentStatus,
          passengers_list: newBooking.passengersList || [],
          notes: newBooking.notes || null,
          created_at: newBooking.createdAt,
        });
      }
    } catch (supaErr) {
      console.warn('[API Bookings POST] Supabase sync info:', supaErr);
    }

    // 2. Email Notification to tripcustomizer@gmail.com via Web3Forms if configured
    try {
      const apiKey =
        process.env.WEB3FORMS_ACCESS_KEY ||
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        '';
      if (apiKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: apiKey,
            subject: `🚨 INSTANT BOOKING ALERT: ${newBooking.referenceNo} - ${newBooking.customerName}`,
            from_name: 'Trip Customizer Platform Alert',
            to_email: 'tripcustomizer@gmail.com',
            reference_number: newBooking.referenceNo,
            customer_name: newBooking.customerName,
            phone_number: newBooking.customerPhone,
            email_address: newBooking.customerEmail || 'Not Provided',
            package_name: newBooking.packageName,
            destination: newBooking.destination,
            travel_dates: newBooking.travelDates,
            total_amount: `₹${newBooking.totalAmount.toLocaleString('en-IN')}`,
            passengers_count: newBooking.travelersCount,
            hotel_category: newBooking.hotelCategory,
            payment_status: newBooking.paymentStatus,
            transaction_id: newBooking.transactionId,
            submitted_at: newBooking.createdAt,
          }),
        });
      }
    } catch (emailErr) {
      console.warn('[API Bookings POST] Email alert info:', emailErr);
    }

    return NextResponse.json({ success: true, booking: newBooking, referenceNo: newBooking.referenceNo });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}

/**
 * PATCH /api/bookings
 * Secured: Requires Admin authentication to update booking status.
 */
export async function PATCH(req: Request) {
  const isAdmin = verifyAdminRequest(req);
  if (!isAdmin) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized: Admin authentication required to update booking' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { id, status } = body;
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'id and status are required' }, { status: 400 });
    }

    const validStatuses = ['Pending', 'Confirmed', 'Completed', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ success: false, error: 'Invalid status' }, { status: 400 });
    }

    const existing = loadBookingsFromFile();
    const updated = existing.map(b => (b.id === id ? { ...b, status } : b));
    saveBookingsToFile(updated);

    try {
      const supabaseServer = getSupabaseServer();
      if (supabaseServer) {
        await supabaseServer.from('bookings').update({ status }).eq('id', id);
      }
    } catch (e) {}

    return NextResponse.json({ success: true, bookings: updated });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
