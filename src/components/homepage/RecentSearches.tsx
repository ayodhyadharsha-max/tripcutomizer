'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { History, Clock, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';

export const RecentSearches: React.FC = () => {
  const [searches, setSearches] = useState([
    { query: 'Dubai 5 Days Package', date: '2 hours ago', href: '/holidays/dubai' },
    { query: 'Bali 6 Days Honeymoon Package', date: 'Yesterday', href: '/holidays/bali' },
    { query: 'Delhi to Singapore Flights', date: '3 days ago', href: '/flights?to=Singapore' },
  ]);

  const [activeBookingProgress, setActiveBookingProgress] = useState<{
    bookingRef: string;
    step: 'details' | 'confirmation' | 'payment';
    destination: string;
  } | null>({
    bookingRef: 'TB-984210',
    step: 'details',
    destination: 'European Delight 7N/8D',
  });

  return (
    <div className="bg-slate-100/70 border-b border-slate-200/60 py-4 text-xs">
      <Container className="space-y-3">
        {/* Active Booking Progress Indicator */}
        {activeBookingProgress && (
          <div className="bg-gradient-to-r from-brand-800 to-brand-900 text-white rounded-2xl p-4 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-accent-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                TB
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent-400 uppercase tracking-wider block">Active Booking Flow ({activeBookingProgress.bookingRef})</span>
                <p className="font-bold text-sm text-white">{activeBookingProgress.destination}</p>
              </div>
            </div>

            {/* Stepper Progress */}
            <div className="flex items-center space-x-2 text-slate-300 font-semibold">
              <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${activeBookingProgress.step === 'details' ? 'bg-accent-500 text-slate-950 font-bold' : 'bg-brand-700'}`}>
                <span>1. Traveller Details</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${activeBookingProgress.step === 'confirmation' ? 'bg-accent-500 text-slate-950 font-bold' : 'bg-brand-700'}`}>
                <span>2. Confirmation</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${activeBookingProgress.step === 'payment' ? 'bg-accent-500 text-slate-950 font-bold' : 'bg-brand-700'}`}>
                <span>3. Payment</span>
              </div>
            </div>

            <Link
              href="/manage-booking"
              className="bg-accent-500 hover:bg-accent-600 text-slate-950 font-bold px-4 py-1.5 rounded-xl shadow transition-colors shrink-0"
            >
              Resume Booking →
            </Link>
          </div>
        )}

        {/* Recent Searches Pills */}
        <div className="flex flex-wrap items-center space-x-3 text-slate-600">
          <div className="flex items-center space-x-1.5 font-bold text-slate-800 shrink-0">
            <History className="w-4 h-4 text-brand-500" />
            <span>Recent Searches:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {searches.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-600 px-3 py-1 rounded-full font-medium shadow-xs transition-colors flex items-center space-x-1.5"
              >
                <span>{item.query}</span>
                <span className="text-[10px] text-slate-400">({item.date})</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
