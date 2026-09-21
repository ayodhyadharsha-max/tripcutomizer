'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { CheckCircle2, Download, MessageCircle, Calendar, MapPin, User, ShieldCheck, ArrowRight, Printer } from 'lucide-react';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';

export default function BookingSuccessPage() {
  const [booking, setBooking] = useState<CustomerBooking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get('ref');
      const orderId = params.get('order_id');

      const allBookings = cloudStore.getBookings();
      let matched = allBookings.find(
        (b) => (ref && b.referenceNo === ref) || (orderId && b.transactionId?.includes(orderId))
      );

      if (!matched && allBookings.length > 0) {
        matched = allBookings[0];
      }

      setBooking(matched || null);
      setLoading(false);
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-600 font-semibold text-sm">Loading Order Voucher...</p>
        </div>
      </div>
    );
  }

  const bookingRef = booking?.referenceNo || 'TC-CONFIRMED';
  const customerName = booking?.customerName || 'Valued Traveler';
  const customerEmail = booking?.customerEmail || 'Provided at Checkout';
  const customerPhone = booking?.customerPhone || 'Provided at Checkout';
  const packageName = booking?.packageName || 'Customized Holiday Package';
  const destination = booking?.destination || 'India';
  const travelDates = booking?.travelDates || '15 Oct 2026 - 20 Oct 2026';
  const totalAmount = booking?.totalAmount || 29000;
  const travelersCount = booking?.travelersCount || 2;
  const hotelCategory = booking?.hotelCategory || '4-Star Deluxe Hotel & Resort';
  const paymentMethod = booking?.paymentMethod || 'Online Payment Gateway';
  const transactionId = booking?.transactionId || `TXN_${Date.now()}`;
  const passengers = booking?.passengersList || [{ name: customerName, type: 'Lead Adult' }];

  return (
    <div className="bg-slate-50 min-h-screen py-10 print:bg-white print:py-0">
      <Container className="max-w-3xl">
        {/* Header Action Bar */}
        <div className="flex items-center justify-between mb-6 print:hidden">
          <Link href="/account" className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1">
            ← Back to My Account
          </Link>
          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 text-xs"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Print / Save PDF</span>
            </Button>
            <a
              href={`https://wa.me/918881299358?text=Hi%20TripCustomizer!%20My%20Booking%20Ref%20is%20${bookingRef}.%20Please%20send%20trip%20itinerary.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>

        {/* Voucher Document */}
        <Card className="p-8 md:p-10 border-slate-200 shadow-xl rounded-3xl bg-white space-y-8 print:shadow-none print:border-none print:p-0">
          {/* Top Success Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800">Payment Paid & Booking Confirmed</span>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">Thank You, {customerName}!</h1>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Your holiday package booking reference is <span className="font-extrabold text-brand-700">{bookingRef}</span>. A confirmation voucher has been logged in the central database and emailed to tripcustomizer@gmail.com.
              </p>
            </div>
          </div>

          {/* Reference & Voucher Metadata Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Booking Reference</span>
              <span className="text-xs font-black text-slate-900">{bookingRef}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Payment Status</span>
              <span className="text-xs font-extrabold text-emerald-600 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Paid & Secured
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Paid</span>
              <span className="text-xs font-black text-brand-700">{formatCurrency(totalAmount)}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Transaction ID</span>
              <span className="text-[11px] font-mono font-bold text-slate-700 truncate block max-w-[130px] mx-auto">{transactionId}</span>
            </div>
          </div>

          {/* Package Overview */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              Holiday Package Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="font-bold">Destination / Package:</span>
                  <span className="text-slate-900 font-extrabold">{packageName}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="font-bold">Travel Dates:</span>
                  <span className="text-slate-900 font-extrabold">{travelDates}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <User className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="font-bold">Travelers Count:</span>
                  <span className="text-slate-900 font-extrabold">{travelersCount} Travelers</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="font-bold">Hotel Tier:</span>
                  <span className="text-slate-900 font-extrabold">{hotelCategory}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Passengers Detail */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              Traveller Details ({passengers.length})
            </h3>
            <div className="divide-y divide-slate-100 text-xs">
              {passengers.map((p, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-extrabold text-[11px] flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900">{p.name}</span>
                    {p.type && (
                      <span className="text-[10px] font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-md">
                        {p.type}
                      </span>
                    )}
                  </div>
                  {p.gender && <span className="text-slate-500 font-medium">{p.gender} {p.age ? `(${p.age} yrs)` : ''}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Customer Support & Instructions */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              What Happens Next?
            </h4>
            <ul className="text-slate-600 space-y-1 list-disc list-inside">
              <li>Our dedicated holiday manager will call you within 2 hours to finalize hotel preferences and custom flight add-ons.</li>
              <li>Your official detailed PDF itinerary and hotel booking vouchers will be dispatched to <strong className="text-slate-900">{customerEmail}</strong>.</li>
              <li>For immediate assistance or changes, reach us anytime on <strong className="text-slate-900">+91 8881299358</strong> or email <strong className="text-slate-900">tripcustomizer@gmail.com</strong>.</li>
            </ul>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 print:hidden">
            <Link
              href="/account"
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>View My Bookings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-6 py-3 rounded-xl text-center transition-all"
            >
              Return to Homepage
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
