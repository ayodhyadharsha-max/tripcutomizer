'use client';

import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, CheckCircle2, Clock, XCircle, FileText, Download, Eye } from 'lucide-react';

interface BookingRecord {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  type: 'Holiday Package' | 'Flight' | 'Hotel' | 'Forex Card' | 'Visa';
  details: string;
  amount: number;
  paymentStatus: 'PAID' | 'PENDING' | 'REFUNDED' | 'FAILED';
  bookingStatus: 'CONFIRMED' | 'PROCESSING' | 'CANCELLED';
  date: string;
  pnr: string;
}

const mockBookings: BookingRecord[] = [
  { id: 'BK-98421', customerName: 'Rajesh Sharma', email: 'rajesh.s@example.com', phone: '+91 98765 43210', type: 'Holiday Package', details: 'European Magic Grand Tour (10D/9N)', amount: 379998, paymentStatus: 'PAID', bookingStatus: 'CONFIRMED', date: '2026-09-12', pnr: 'TC-EUR-4821' },
  { id: 'BK-98422', customerName: 'Priya Patel', email: 'priya.p@example.com', phone: '+91 98123 45678', type: 'Flight', details: 'DEL -> SIN (Singapore Airlines SQ-403)', amount: 48500, paymentStatus: 'PAID', bookingStatus: 'CONFIRMED', date: '2026-09-12', pnr: 'PNR-SQ892A' },
  { id: 'BK-98423', customerName: 'Vikram Sengupta', email: 'vikram.s@example.com', phone: '+91 99887 76655', type: 'Forex Card', details: 'Borderless Multicurrency Card ($3,000 USD)', amount: 252000, paymentStatus: 'PAID', bookingStatus: 'PROCESSING', date: '2026-09-11', pnr: 'FX-ORD-7741' },
  { id: 'BK-98424', customerName: 'Ananya Roy', email: 'ananya.r@example.com', phone: '+91 97112 33445', type: 'Visa', details: 'Schengen Business Tourist Express Visa', amount: 14500, paymentStatus: 'PENDING', bookingStatus: 'PROCESSING', date: '2026-09-11', pnr: 'VSA-SCH-1092' },
  { id: 'BK-98425', customerName: 'Amitabh Verma', email: 'averma@example.com', phone: '+91 98220 11223', type: 'Hotel', details: 'Taj Mahal Palace Mumbai (Luxury Sea View)', amount: 72000, paymentStatus: 'PAID', bookingStatus: 'CONFIRMED', date: '2026-09-10', pnr: 'HTL-TAJ-992' },
  { id: 'BK-98426', customerName: 'Sunita Reddy', email: 'sunita.r@example.com', phone: '+91 94400 55667', type: 'Holiday Package', details: 'Kerala Serenade & Houseboat Stay (6D/5N)', amount: 64998, paymentStatus: 'REFUNDED', bookingStatus: 'CANCELLED', date: '2026-09-09', pnr: 'TC-KER-3312' }
];

export default function AdminBookingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const [selectedBooking, setSelectedBooking] = useState<BookingRecord | null>(null);

  const filteredBookings = mockBookings.filter((b) => {
    const matchesSearch =
      b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.pnr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || b.bookingStatus === statusFilter;
    const matchesType = typeFilter === 'ALL' || b.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-brand-600" />
            Bookings & Reservations Operations Desk
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Monitor real-time reservations, confirm fulfillments, issue tax invoices, and process refunds.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3 py-1.5 rounded-lg font-bold">
            Total Revenue Today: ₹8,31,996
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search Booking ID, Customer or PNR..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
            <Filter className="w-3.5 h-3.5" /> Filter Status:
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 font-medium"
          >
            <option value="ALL">All Statuses</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="PROCESSING">Processing</option>
            <option value="CANCELLED">Cancelled</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 font-medium"
          >
            <option value="ALL">All Product Types</option>
            <option value="Holiday Package">Holiday Package</option>
            <option value="Flight">Flight</option>
            <option value="Hotel">Hotel</option>
            <option value="Forex Card">Forex Card</option>
            <option value="Visa">Visa</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Booking Ref & PNR</th>
                <th className="py-3.5 px-4">Customer Details</th>
                <th className="py-3.5 px-4">Product Category</th>
                <th className="py-3.5 px-4">Details</th>
                <th className="py-3.5 px-4">Amount</th>
                <th className="py-3.5 px-4">Payment</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4">
                    <span className="font-extrabold text-slate-900 block">{b.id}</span>
                    <span className="text-[10px] text-slate-400 font-mono">PNR: {b.pnr}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-900 block">{b.customerName}</span>
                    <span className="text-[10px] text-slate-500 block">{b.email}</span>
                    <span className="text-[10px] text-slate-500">{b.phone}</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    <span className="inline-block bg-slate-100 border border-slate-200 rounded px-2 py-0.5 text-[10px] font-bold">
                      {b.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium max-w-xs text-slate-800 line-clamp-1">
                    {b.details}
                  </td>
                  <td className="py-3.5 px-4 font-black text-slate-900">
                    ₹{b.amount.toLocaleString('en-IN')}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        b.paymentStatus === 'PAID'
                          ? 'bg-emerald-100 text-emerald-800'
                          : b.paymentStatus === 'PENDING'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {b.paymentStatus}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        b.bookingStatus === 'CONFIRMED'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : b.bookingStatus === 'PROCESSING'
                          ? 'bg-blue-50 text-blue-700 border border-blue-300'
                          : 'bg-rose-50 text-rose-700 border border-rose-300'
                      }`}
                    >
                      {b.bookingStatus}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <button
                      onClick={() => setSelectedBooking(b)}
                      className="p-1.5 text-slate-600 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition-colors"
                      title="View Invoice & Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => alert(`Issuing PDF Tax Invoice for ${b.id}...`)}
                      className="p-1.5 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Download Tax Invoice"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Detail Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">Tax Invoice & Fulfill Summary</h3>
                <p className="text-xs text-slate-500">Booking Ref: {selectedBooking.id}</p>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-slate-400 hover:text-slate-700 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-500">Customer:</span>
                  <span className="text-slate-900">{selectedBooking.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Email & Phone:</span>
                  <span className="text-slate-800">{selectedBooking.email} | {selectedBooking.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Date:</span>
                  <span className="text-slate-800">{selectedBooking.date}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-slate-500">PNR / Vendor Ref:</span>
                  <span className="text-brand-600 font-mono">{selectedBooking.pnr}</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 space-y-2">
                <p className="font-extrabold text-slate-900 text-sm">{selectedBooking.details}</p>
                <div className="flex justify-between pt-2 border-t text-slate-800">
                  <span>Base Amount:</span>
                  <span>₹{(selectedBooking.amount * 0.85).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-800">
                  <span>GST / Tax (15%):</span>
                  <span>₹{(selectedBooking.amount * 0.15).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-black text-sm text-slate-900 pt-2 border-t">
                  <span>Total Amount Paid:</span>
                  <span className="text-emerald-700">₹{selectedBooking.amount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedBooking(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Emailing invoice to ${selectedBooking.email}`);
                  setSelectedBooking(null);
                }}
                className="px-4 py-2 text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 rounded-xl"
              >
                Send Invoice Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
