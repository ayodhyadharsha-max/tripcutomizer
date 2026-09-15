import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
  const bookings = loadBookingsFromFile();
  return NextResponse.json({ success: true, bookings });
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
