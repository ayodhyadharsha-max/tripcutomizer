'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Search, FileText, CheckCircle2, AlertTriangle, Phone, Mail, Printer } from 'lucide-react';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';
import { useAuth } from '@/context/AuthContext';

export default function ManageBookingPage() {
  const { user } = useAuth();
  const [bookingRef, setBookingRef] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [searchedBooking, setSearchedBooking] = useState<CustomerBooking | null>(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (user) {
      setEmailOrPhone(user.email || user.phone || '');
      // Auto find most recent booking if user logged in
      const bookings = cloudStore.getBookings();
      const userMatch = bookings.find(
        (b) => b.customerEmail.toLowerCase() === user.email.toLowerCase() || b.customerPhone === user.phone
      );
      if (userMatch) {
        setBookingRef(userMatch.referenceNo);
        setSearchedBooking(userMatch);
      }
    }
  }, [user]);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setNotFound(false);
    const bookings = cloudStore.getBookings();
    const match = bookings.find(
      (b) =>
        (bookingRef && b.referenceNo.toLowerCase() === bookingRef.trim().toLowerCase()) ||
        (emailOrPhone && (b.customerEmail.toLowerCase() === emailOrPhone.trim().toLowerCase() || b.customerPhone === emailOrPhone.trim()))
    );

    if (match) {
      setSearchedBooking(match);
    } else {
      setSearchedBooking(null);
      setNotFound(true);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Manage Your Booking & Tax Invoice</h1>
          <p className="text-xs text-slate-500 mt-1">
            Retrieve official GST tax invoice bills, download e-vouchers, or verify booking status using your reference number.
          </p>
        </div>

        {/* Lookup Card */}
        <Card className="p-6 bg-white rounded-3xl shadow-xl border border-slate-200 mb-8">
          <form onSubmit={handleLookup} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Booking Reference No.</label>
              <input
                type="text"
                placeholder="e.g. TC-BK-89421"
                value={bookingRef}
                onChange={(e) => setBookingRef(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Registered Email or Phone</label>
              <input
                type="text"
                placeholder="your.email@example.com / Mobile"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="font-bold py-2.5">
              <Search className="w-4 h-4 mr-1.5" /> RETRIEVE BOOKING
            </Button>
          </form>

          {notFound && (
            <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>No booking found matching these details. Please check your reference number or phone.</span>
            </div>
          )}
        </Card>

        {/* Result Voucher Card */}
        {searchedBooking && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="bg-brand-50 text-brand-700 font-extrabold text-xs px-3 py-1 rounded-full inline-block mb-1">
                  Reference: {searchedBooking.referenceNo}
                </span>
                <h2 className="text-xl font-black text-slate-900">{searchedBooking.packageName}</h2>
                <p className="text-xs text-slate-500">{searchedBooking.destination} • {searchedBooking.travelDates}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full ${
                    searchedBooking.status === 'Confirmed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  ✓ {searchedBooking.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Lead Traveler</span>
                <span className="font-extrabold text-slate-900 text-sm">{searchedBooking.customerName}</span>
                <span className="block text-slate-500 mt-1"><Phone className="w-3 h-3 inline mr-1" /> {searchedBooking.customerPhone}</span>
                <span className="block text-slate-500"><Mail className="w-3 h-3 inline mr-1" /> {searchedBooking.customerEmail}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Travelers & Dates</span>
                <span className="font-bold text-slate-800 text-sm block">{searchedBooking.travelersCount} Travelers</span>
                <span className="text-slate-600 font-semibold block mt-1">{searchedBooking.travelDates}</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Total Price</span>
                <span className="font-black text-brand-700 text-lg block">{formatCurrency(searchedBooking.totalAmount)}</span>
                <span className="text-emerald-600 font-extrabold text-xs block mt-1">Payment Status: {searchedBooking.paymentStatus}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100 text-xs">
              <Button
                onClick={() => setShowInvoiceModal(true)}
                variant="accent"
                size="md"
                className="font-bold flex items-center gap-1.5 cursor-pointer text-slate-950"
              >
                <FileText className="w-4 h-4" /> View Full Tax Invoice Bill 📄
              </Button>
              <Link href="/account">
                <Button variant="primary" size="sm" className="font-bold">
                  GO TO MY ACCOUNT →
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </Container>

      {/* Tax Invoice Modal */}
      {showInvoiceModal && searchedBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 shadow-2xl border border-slate-200 relative my-8">
            <button
              onClick={() => setShowInvoiceModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-base cursor-pointer"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b-2 border-slate-200 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-700 text-white font-black text-sm px-2 py-0.5 rounded-lg">TC</div>
                  <span className="font-black text-xl text-brand-900 tracking-tight">tripcustomizer</span>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Official GST Tax Invoice Bill</p>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-bold text-slate-400 block uppercase">Invoice No.</span>
                <span className="font-black text-brand-700 text-sm">INV-{searchedBooking.referenceNo}</span>
                <span className="block text-[10px] text-slate-400 font-semibold mt-0.5">Issued: {new Date(searchedBooking.createdAt).toLocaleDateString('en-IN')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
              <div className="space-y-1">
                <span className="font-extrabold text-slate-400 uppercase text-[10px] block">Issued By</span>
                <p className="font-black text-slate-900 text-sm">tripcustomizer Travels Pvt. Ltd.</p>
                <p className="text-slate-600">GSTIN: 07AAAAA0000A1Z5</p>
                <p className="text-slate-600">Toll Free: 1800-2099-100</p>
              </div>
              <div className="space-y-1 sm:border-l sm:border-slate-200 sm:pl-4">
                <span className="font-extrabold text-slate-400 uppercase text-[10px] block">Billed To Customer</span>
                <p className="font-black text-slate-900 text-sm">{searchedBooking.customerName}</p>
                <p className="text-slate-600 font-semibold"><Phone className="w-3 h-3 inline mr-1 text-brand-500" /> {searchedBooking.customerPhone}</p>
                <p className="text-slate-600 font-semibold"><Mail className="w-3 h-3 inline mr-1 text-brand-500" /> {searchedBooking.customerEmail}</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-100 text-slate-700 font-extrabold text-[10px] uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Description</th>
                    <th className="py-2.5 px-3">Dates</th>
                    <th className="py-2.5 px-3">Pax</th>
                    <th className="py-2.5 px-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  <tr>
                    <td className="py-3 px-3">
                      <span className="font-extrabold text-slate-900 block">{searchedBooking.packageName}</span>
                      <span className="text-[10px] text-slate-500">{searchedBooking.destination}</span>
                    </td>
                    <td className="py-3 px-3 font-semibold">{searchedBooking.travelDates}</td>
                    <td className="py-3 px-3 font-semibold">{searchedBooking.travelersCount} Adults</td>
                    <td className="py-3 px-3 text-right font-black text-slate-900">{formatCurrency(searchedBooking.totalAmount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between text-slate-600">
                <span>Base Tour Fare:</span>
                <span className="font-bold text-slate-900">{formatCurrency(searchedBooking.totalAmount * 0.95)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>GST (5% Tour Operator Service Tax):</span>
                <span className="font-bold text-slate-900">{formatCurrency(searchedBooking.totalAmount * 0.05)}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-slate-900">
                <span className="font-black text-sm">Grand Total Paid:</span>
                <span className="text-xl font-black text-emerald-700">{formatCurrency(searchedBooking.totalAmount)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Button
                onClick={handlePrint}
                variant="accent"
                size="md"
                className="font-bold flex items-center gap-1.5 cursor-pointer text-slate-950"
              >
                <Printer className="w-4 h-4" /> Print / Save Tax Invoice PDF 🖨️
              </Button>
              <Button
                onClick={() => setShowInvoiceModal(false)}
                variant="outline"
                size="md"
                className="font-bold cursor-pointer"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
