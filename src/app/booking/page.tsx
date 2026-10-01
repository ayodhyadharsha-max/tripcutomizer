import React, { Suspense } from 'react';
import BookingCheckoutPage from '@/app/booking/checkout/page';

export default function DedicatedBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 py-20 text-center text-white font-bold">Loading Secure Booking Gateway...</div>}>
      <BookingCheckoutPage />
    </Suspense>
  );
}
