'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { Search, FileText, CheckCircle2, Download, AlertTriangle, MessageCircle, Phone } from 'lucide-react';

export default function ManageBookingPage() {
  const [bookingRef, setBookingRef] = useState('TB-984210');
  const [emailOrPhone, setEmailOrPhone] = useState('demo@tripcustomizer.com');
  const [searchedBooking, setSearchedBooking] = useState<{
    id: string;
    packageName: string;
    destination: string;
    dates: string;
    amount: number;
    travellers: string;
    status: string;
    paymentStatus: string;
  } | null>({
    id: 'TB-984210',
    packageName: 'Dazzling Dubai & Abu Dhabi Extravaganza',
    destination: 'Dubai, United Arab Emirates',
    dates: '15 Oct 2026 - 20 Oct 2026',
    amount: 97980,
    travellers: '2 Adults (Rishabh Jaiswal, Ananya Jaiswal)',
    status: 'CONFIRMED',
    paymentStatus: 'PAID',
  });

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedBooking({
      id: bookingRef.toUpperCase(),
      packageName: 'Dazzling Dubai & Abu Dhabi Extravaganza',
      destination: 'Dubai, United Arab Emirates',
      dates: '15 Oct 2026 - 20 Oct 2026',
      amount: 97980,
      travellers: '2 Adults',
      status: 'CONFIRMED',
      paymentStatus: 'PAID',
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Manage Your Booking</h1>
          <p className="text-xs text-slate-500 mt-1">Retrieve vouchers, download tax invoices, request date modifications or cancellation</p>
        </div>

        {/* Lookup Card */}
        <Card className="p-6 bg-white rounded-3xl shadow-xl border border-slate-200 mb-8">
          <form onSubmit={handleLookup} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Booking Reference ID *</label>
              <input
                type="text"
                required
                placeholder="e.g. TB-984210"
                value={bookingRef}
                onChange={(e) => setBookingRef(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 font-bold uppercase focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Email ID or Mobile Number *</label>
              <input
                type="text"
                required
                placeholder="Registered email or phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <Button type="submit" variant="primary" size="md" className="w-full font-bold py-2.5 text-xs shadow-md">
              <Search className="w-4 h-4 mr-1.5" /> RETRIEVE BOOKING
            </Button>
          </form>
        </Card>

        {/* Retrieved Booking Detail */}
        {searchedBooking && (
          <Card className="p-8 bg-white rounded-3xl shadow-2xl border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-100 gap-3">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Booking Reference</span>
                <h2 className="text-2xl font-black text-brand-700">{searchedBooking.id}</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="green">{searchedBooking.status}</Badge>
                <Badge variant="blue">{searchedBooking.paymentStatus}</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                <p className="text-slate-400 font-bold text-[10px]">Tour Package</p>
                <p className="font-black text-slate-900 text-sm">{searchedBooking.packageName}</p>
                <p className="text-slate-600">{searchedBooking.destination}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                <p className="text-slate-400 font-bold text-[10px]">Travel Dates & Travellers</p>
                <p className="font-bold text-slate-900">{searchedBooking.dates}</p>
                <p className="text-slate-600">{searchedBooking.travellers}</p>
              </div>
            </div>

            {/* Action Buttons Desk */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <button
                onClick={() => alert(`Downloading Itinerary Voucher for ${searchedBooking.id}`)}
                className="bg-brand-50 hover:bg-brand-500 hover:text-white text-brand-700 font-bold p-3 rounded-xl transition-colors flex items-center justify-center space-x-2 border border-brand-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Travel Voucher</span>
              </button>

              <button
                onClick={() => alert('Modification request submitted to support desk.')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold p-3 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Date Change</span>
              </button>

              <button
                onClick={() => alert('Cancellation request initiated. Terms apply.')}
                className="bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold p-3 rounded-xl transition-colors flex items-center justify-center space-x-2 border border-rose-200"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Cancel Booking</span>
              </button>
            </div>
          </Card>
        )}
      </Container>
    </div>
  );
}
