'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Filter, CheckCircle2, Clock, XCircle, Eye, RefreshCw, Phone, Mail } from 'lucide-react';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';
import { formatCurrency } from '@/lib/utils';

export default function AdminBookingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [bookings, setBookings] = useState<CustomerBooking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<CustomerBooking | null>(null);

  const loadBookings = () => {
    setBookings(cloudStore.getBookings());
  };

  useEffect(() => {
    loadBookings();
    // Listen for cloud storage updates across tabs
    const handleStorageChange = () => loadBookings();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleUpdateStatus = (id: string, status: CustomerBooking['status']) => {
    cloudStore.updateBookingStatus(id, status);
    loadBookings();
    if (selectedBooking && selectedBooking.id === id) {
      setSelectedBooking({ ...selectedBooking, status });
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.referenceNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.customerPhone.includes(searchTerm) ||
      b.packageName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = bookings.reduce((sum, b) => (b.status !== 'Cancelled' ? sum + b.totalAmount : sum), 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-brand-600" />
              Cloud Live Bookings Operations Desk
            </h1>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Cloud DB Live
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Realtime stream of customer package bookings, contact details, payment statuses, and instant confirmation control.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={loadBookings}
            className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-white border border-slate-300 px-3 py-2 rounded-xl hover:bg-slate-50 cursor-pointer shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh Cloud Data
          </button>
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3 py-2 rounded-xl font-bold">
            Total Confirmed Value: {formatCurrency(totalRevenue)}
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search Reference No, Customer Name, Phone, Email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800 font-medium"
          />
        </div>

        <div className="flex items-center gap-2 text-xs font-bold">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-slate-500">Filter Status:</span>
          {['ALL', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg cursor-pointer transition-all ${
                statusFilter === st ? 'bg-brand-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase text-[10px]">
              <tr>
                <th className="py-3 px-4">Ref No & Date</th>
                <th className="py-3 px-4">Customer Info</th>
                <th className="py-3 px-4">Package / Destination</th>
                <th className="py-3 px-4">Travelers & Dates</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400 font-semibold">
                    No bookings found matching filters.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-extrabold text-brand-700 block">{b.referenceNo}</span>
                      <span className="text-[10px] text-slate-400">{new Date(b.createdAt).toLocaleDateString('en-IN')}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-extrabold text-slate-900">{b.customerName}</div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-slate-400" /> {b.customerPhone}
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Mail className="w-3 h-3 text-slate-400" /> {b.customerEmail}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-bold text-slate-800 truncate">{b.packageName}</div>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                        {b.destination}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-800">{b.travelersCount} Travelers</div>
                      <div className="text-[11px] text-slate-500">{b.travelDates}</div>
                    </td>
                    <td className="py-3.5 px-4 font-black text-slate-900 text-sm">
                      {formatCurrency(b.totalAmount)}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          b.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : b.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : b.status === 'Completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {b.status === 'Confirmed' && <CheckCircle2 className="w-3 h-3" />}
                        {b.status === 'Pending' && <Clock className="w-3 h-3" />}
                        {b.status === 'Cancelled' && <XCircle className="w-3 h-3" />}
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {b.status === 'Pending' && (
                          <button
                            onClick={() => handleUpdateStatus(b.id, 'Confirmed')}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg cursor-pointer"
                          >
                            Confirm
                          </button>
                        )}
                        {b.status === 'Confirmed' && (
                          <button
                            onClick={() => handleUpdateStatus(b.id, 'Completed')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg cursor-pointer"
                          >
                            Complete
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedBooking(b)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-800 p-1.5 rounded-lg cursor-pointer"
                          title="View Full Booking Voucher"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Detail View */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-brand-600">{selectedBooking.referenceNo}</span>
                <h3 className="text-lg font-black text-slate-900">{selectedBooking.packageName}</h3>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <p className="font-extrabold text-slate-900 text-sm">{selectedBooking.customerName}</p>
                <p className="text-slate-600 flex items-center gap-1"><Phone className="w-3 h-3 text-brand-500" /> Phone: {selectedBooking.customerPhone}</p>
                <p className="text-slate-600 flex items-center gap-1"><Mail className="w-3 h-3 text-brand-500" /> Email: {selectedBooking.customerEmail}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl">
                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Travel Dates</span>
                  <span className="font-bold text-slate-800">{selectedBooking.travelDates}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Total Travelers</span>
                  <span className="font-bold text-slate-800">{selectedBooking.passengersList?.length || selectedBooking.travelersCount} Pax</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Total Amount</span>
                  <span className="font-black text-brand-700 text-sm">{formatCurrency(selectedBooking.totalAmount)}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Booking Status</span>
                  <span className="font-bold text-slate-800">{selectedBooking.status}</span>
                </div>
              </div>

              {/* All Confirmed Passenger Names */}
              <div className="p-3 bg-brand-50/60 border border-brand-100 rounded-xl space-y-1.5">
                <span className="font-extrabold text-brand-900 uppercase text-[10px] block">
                  👥 Confirmed Passengers Manifest ({selectedBooking.passengersList?.length || selectedBooking.travelersCount} Pax)
                </span>
                <div className="space-y-1">
                  {selectedBooking.passengersList && selectedBooking.passengersList.length > 0 ? (
                    selectedBooking.passengersList.map((p, pIdx) => (
                      <div key={pIdx} className="bg-white p-2 rounded-lg border border-brand-200 flex items-center justify-between text-[11px] font-bold text-slate-800">
                        <span>{p.type?.includes('Child') ? '👶' : '👤'} {p.name}</span>
                        <span className="text-slate-500 font-semibold text-[10px]">
                          {p.type || 'Passenger'} {p.age ? `(${p.age}y)` : ''} {p.gender ? `• ${p.gender}` : ''}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white p-2 rounded-lg border border-brand-200 text-[11px] font-bold text-slate-800">
                      👤 {selectedBooking.customerName} (Lead Passenger)
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdateStatus(selectedBooking.id, 'Confirmed')}
                  className="bg-emerald-600 text-white font-bold text-xs px-3 py-1.5 rounded-xl hover:bg-emerald-700 cursor-pointer"
                >
                  Mark Confirmed
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedBooking.id, 'Cancelled')}
                  className="bg-rose-600 text-white font-bold text-xs px-3 py-1.5 rounded-xl hover:bg-rose-700 cursor-pointer"
                >
                  Cancel Booking
                </button>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="bg-slate-100 text-slate-700 font-bold text-xs px-4 py-1.5 rounded-xl hover:bg-slate-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
