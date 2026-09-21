import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import getSupabaseServer from '@/lib/supabaseServer';

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

// In-memory fallback cache so serverless / dev instance retains state in memory
let memoryBookings: ServerBooking[] = [
  {
    id: 'bk-classic-heritage-sample',
    referenceNo: 'TC-BK-65378',
    customerName: 'Mr rishabh jais',
    customerPhone: '8881299358',
    customerEmail: 'rj906906@gmail.com',
    packageName: 'Ayodhya – Varanasi – Prayagraj Classic Heritage',
    destination: 'Ayodhya – Varanasi – Prayagraj',
    travelDates: '15 Oct 2026 - 20 Oct 2026',
    travelersCount: 2,
    hotelCategory: '4-Star Deluxe Hotel & Resort',
    basePrice: 23225,
    gstAmount: 4180,
    totalAmount: 27405,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    createdAt: '2026-09-13T10:00:00.000Z',
    passengersList: [
      { name: 'Mr rishabh jais', age: 34, gender: 'Male', type: 'Lead Adult' },
      { name: 'Mrs khushi jais', age: 33, gender: 'Female', type: 'Adult' }
    ]
  }
];

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

export async function GET() {
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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const existing = loadBookingsFromFile();

    const total = Number(body.totalAmount) || 0;
    const computedBase = Number(body.basePrice) || Math.round(total / 1.05);
    const computedGst = Number(body.gstAmount) || Math.round(total - computedBase);
    const refNum = body.referenceNo || `TC-BK-${Math.floor(10000 + Math.random() * 90000)}`;

    const newBooking: ServerBooking = {
      id: body.id || `bk-${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      referenceNo: refNum,
      userId: body.userId || '',
      customerName: body.customerName || 'Valued Traveler',
      customerPhone: body.customerPhone || '',
      customerEmail: body.customerEmail || '',
      packageName: body.packageName || 'Custom Holiday Package',
      destination: body.destination || 'India / International',
      travelDates: body.travelDates || 'Upcoming Dates',
      travelersCount: Number(body.travelersCount) || 1,
      hotelCategory: body.hotelCategory || '4-Star Premium Deluxe Hotel & Resort',
      basePrice: computedBase,
      gstAmount: computedGst,
      discountAmount: Number(body.discountAmount) || 0,
      couponApplied: body.couponApplied || '',
      paymentMethod: body.paymentMethod || 'Online PG (Cashfree / UPI)',
      transactionId: body.transactionId || `CF_TXN_${Date.now()}`,
      specialRequests: body.specialRequests || '',
      totalAmount: total,
      status: body.status || 'Confirmed',
      paymentStatus: body.paymentStatus || 'Paid',
      createdAt: body.createdAt || new Date().toISOString(),
      notes: body.notes || '',
      passengersList: body.passengersList || []
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
          status: newBooking.status || 'Confirmed',
          payment_status: newBooking.paymentStatus || 'Paid',
          passengers_list: newBooking.passengersList || [],
          notes: newBooking.notes || null,
          created_at: newBooking.createdAt,
        });
      }
    } catch (supaErr) {
      console.warn('[API Bookings POST] Supabase sync info:', supaErr);
    }

    // 2. Instant Email Notification to tripcustomizer@gmail.com via Web3Forms
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
          subject: `🚨 INSTANT BOOKING ALERT: ${newBooking.referenceNo} - ${newBooking.customerName}`,
          from_name: 'tripcustomizer Platform Alert',
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
    } catch (emailErr) {
      console.warn('[API Bookings POST] Email alert info:', emailErr);
    }

    return NextResponse.json({ success: true, booking: newBooking, bookings: updated });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;
    const existing = loadBookingsFromFile();
    const updated = existing.map(b => (b.id === id ? { ...b, status } : b));
    saveBookingsToFile(updated);
    return NextResponse.json({ success: true, bookings: updated });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
