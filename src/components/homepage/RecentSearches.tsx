'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { History, ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';

export const RecentSearches: React.FC = () => {
  const { user, isLoggedIn } = useAuth();
  const [userPendingBooking, setUserPendingBooking] = useState<CustomerBooking | null>(null);

  useEffect(() => {
    if (isLoggedIn && user) {
      const bookings = cloudStore.getBookings();
      const pending = bookings.find(
        (b) =>
          b.status === 'Pending' &&
          (b.customerEmail.toLowerCase() === user.email.toLowerCase() || b.customerPhone === user.phone)
      );
      setUserPendingBooking(pending || null);
    } else {
      setUserPendingBooking(null);
    }
  }, [isLoggedIn, user]);

  const recentSearchesList = [
    { query: 'Dubai 5 Days Package', date: 'Popular', href: '/holidays/dubai' },
    { query: 'Bali Honeymoon Package', date: 'Trending', href: '/holidays/bali' },
    { query: 'Char Dham Sacred Yatra', date: 'Popular', href: '/char-dham' },
    { query: 'Delhi to Singapore Flights', date: 'Best Fares', href: '/flights?to=Singapore' },
  ];

  return (
    <div className="bg-slate-100/70 border-b border-slate-200/60 py-2.5 text-xs">
      <Container className="space-y-2">
        {/* Dynamic Active Booking Progress Bar - Only shown if logged-in user has a pending booking */}
        {userPendingBooking && (
          <div className="bg-gradient-to-r from-brand-800 to-brand-900 text-white rounded-2xl p-4 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center shrink-0">
                TC
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                  Active Booking Flow ({userPendingBooking.referenceNo})
                </span>
                <p className="font-bold text-sm text-white">{userPendingBooking.packageName}</p>
              </div>
            </div>

            {/* Stepper Progress */}
            <div className="flex items-center space-x-2 text-slate-300 font-semibold">
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold">
                <span>1. Traveller Details</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-brand-700">
                <span>2. Payment</span>
              </div>
            </div>

            <Link
              href="/booking/checkout"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-4 py-2 rounded-xl shadow transition-colors shrink-0"
            >
              Resume Booking →
            </Link>
          </div>
        )}

        {/* Recent Searches Pills - Exactly 2 columns per line on phone screens */}
        <div className="space-y-1.5 text-slate-600">
          <div className="flex items-center space-x-1.5 font-bold text-slate-800 text-[11px] sm:text-xs">
            <History className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500 shrink-0" />
            <span>Popular & Recent Searches:</span>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
            {recentSearchesList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white border border-slate-200/90 hover:border-brand-500 hover:text-brand-600 px-2.5 py-1.5 rounded-xl font-semibold shadow-2xs transition-all flex items-center justify-between text-[11px] sm:text-xs leading-tight w-full sm:w-auto"
              >
                <span className="truncate">{item.query}</span>
                <span className="text-[10px] text-slate-400 font-normal ml-1 shrink-0">({item.date})</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
