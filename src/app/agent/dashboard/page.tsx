'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { cloudStore, CustomerBooking, CustomerLead } from '@/lib/cloudStore';
import { Users, FileText, Send, CheckCircle2, TrendingUp, DollarSign, Award, Plus, Search, Eye, Phone, Mail, User } from 'lucide-react';

export default function AgentDashboardPage() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'leads' | 'quotes' | 'onbehalf'>('bookings');
  const [bookingsList, setBookingsList] = useState<CustomerBooking[]>([]);
  const [leadsList, setLeadsList] = useState<CustomerLead[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<CustomerBooking | null>(null);

  useEffect(() => {
    setBookingsList(cloudStore.getBookings());
    setLeadsList(cloudStore.getLeads());
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen py-8">
      <Container>
        {/* Agent Header Card */}
        <Card className="p-6 bg-brand-900 text-white rounded-3xl mb-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="bg-accent-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                Agent Desk: Senior Travel Specialist
              </span>
              <span className="text-xs text-emerald-400 font-bold">ID: AGENT-102</span>
            </div>
            <h1 className="text-2xl font-black text-white">Rahul Sharma — Agent Workplace</h1>
          </div>

          <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/15 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Monthly Targets</span>
              <span className="font-black text-white text-sm">₹14.2L / ₹20L</span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-accent-500 flex items-center justify-center font-bold text-[11px] text-white">
              71%
            </div>
          </div>
        </Card>

        {/* Dashboard Tabs & Action Buttons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 text-xs font-bold shadow-2xs">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 rounded-xl cursor-pointer transition-all ${activeTab === 'bookings' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Live Customer Bookings ({bookingsList.length})
            </button>
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-xl cursor-pointer transition-all ${activeTab === 'leads' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Customer Leads ({leadsList.length})
            </button>
            <button
              onClick={() => setActiveTab('quotes')}
              className={`px-4 py-2 rounded-xl cursor-pointer transition-all ${activeTab === 'quotes' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Quotation Generator
            </button>
            <button
              onClick={() => setActiveTab('onbehalf')}
              className={`px-4 py-2 rounded-xl cursor-pointer transition-all ${activeTab === 'onbehalf' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              On-Behalf Booking Desk
            </button>
          </div>
        </div>

        {/* 1. LIVE BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <Card className="p-6 bg-white border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-base font-black text-slate-900">
                Real-Time Customer Bookings Database
              </h2>
              <span className="text-xs font-bold text-slate-500">
                Total Bookings: {bookingsList.length}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                    <th className="py-3 px-2">Ref No.</th>
                    <th className="py-3 px-2">Customer Name</th>
                    <th className="py-3 px-2">Contact Info</th>
                    <th className="py-3 px-2">Package & Destination</th>
                    <th className="py-3 px-2">Pax</th>
                    <th className="py-3 px-2">Amount</th>
                    <th className="py-3 px-2">Status</th>
                    <th className="py-3 px-2 text-right">Passenger Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                  {bookingsList.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-400 font-medium">
                        No customer bookings recorded yet.
                      </td>
                    </tr>
                  ) : (
                    bookingsList.map((bk) => (
                      <tr key={bk.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-2 font-black text-brand-700">{bk.referenceNo}</td>
                        <td className="py-3.5 px-2 font-black text-slate-900">{bk.customerName}</td>
                        <td className="py-3.5 px-2 text-slate-600">
                          <div>{bk.customerPhone}</div>
                          <div className="text-[10px] text-slate-400">{bk.customerEmail}</div>
                        </td>
                        <td className="py-3.5 px-2 max-w-[180px] truncate">{bk.packageName}</td>
                        <td className="py-3.5 px-2 font-bold">{bk.passengersList?.length || bk.travelersCount} Pax</td>
                        <td className="py-3.5 px-2 font-black text-brand-700">{formatCurrency(bk.totalAmount)}</td>
                        <td className="py-3.5 px-2">
                          <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                            {bk.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-2 text-right">
                          <Button
                            onClick={() => setSelectedBooking(bk)}
                            variant="outline"
                            size="sm"
                            className="text-[11px] font-bold cursor-pointer hover:bg-brand-50"
                          >
                            <Eye className="w-3.5 h-3.5 mr-1 text-brand-600" /> View Passenger List
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* 2. LEADS TAB */}
        {activeTab === 'leads' && (
          <Card className="p-6 bg-white border-slate-200 space-y-4 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              Customer Lead Queue & Status Follow-up
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                    <th className="py-2">Lead ID</th>
                    <th className="py-2">Customer Name</th>
                    <th className="py-2">Destination</th>
                    <th className="py-2">Phone</th>
                    <th className="py-2">Budget</th>
                    <th className="py-2">Pipeline Status</th>
                    <th className="py-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                  {leadsList.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50">
                      <td className="py-3 font-bold text-brand-600">{lead.id}</td>
                      <td className="py-3 font-bold text-slate-900">{lead.name}</td>
                      <td className="py-3">{lead.destination}</td>
                      <td className="py-3">{lead.phone}</td>
                      <td className="py-3 font-bold">{lead.budget || 'Custom'}</td>
                      <td className="py-3">
                        <span className="bg-brand-50 text-brand-700 font-bold px-2 py-0.5 rounded text-[10px]">
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => alert(`Sending quote for ${lead.name}`)}
                          className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] cursor-pointer"
                        >
                          Send Quote
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* 3. QUOTATION GENERATOR */}
        {activeTab === 'quotes' && (
          <Card className="p-6 bg-white border-slate-200 space-y-4 max-w-2xl text-xs shadow-xs">
            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              Build Custom Quotation PDF
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Quotation PDF generated & emailed to customer.'); }} className="space-y-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Customer Name</label>
                <input required type="text" placeholder="Vikram Sethi" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Destination & Package</label>
                <input required type="text" placeholder="Dubai 5N/6D Package" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Quoted Price (INR)</label>
                <input required type="number" placeholder="48990" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <Button type="submit" variant="primary" size="md" className="w-full font-bold py-2.5">
                GENERATE & SEND QUOTATION
              </Button>
            </form>
          </Card>
        )}

        {/* 4. ON BEHALF BOOKING DESK */}
        {activeTab === 'onbehalf' && (
          <Card className="p-6 bg-white border-slate-200 space-y-4 max-w-2xl text-xs shadow-xs">
            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              Book On-Behalf of Customer
            </h2>
            <p className="text-slate-500">Book holidays or forex cards on behalf of walk-in store customers using agent commission code.</p>
            <Link href="/holidays" className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold px-4 py-2.5 rounded-xl">
              Launch Agent Booking Engine →
            </Link>
          </Card>
        )}
      </Container>

      {/* PASSENGER MANIFEST MODAL FOR AGENT */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-black text-brand-600 uppercase block">Ref: {selectedBooking.referenceNo}</span>
                <h3 className="font-black text-slate-900 text-base">{selectedBooking.customerName}</h3>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1 bg-slate-100 rounded-lg"
              >
                Close ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <p className="font-bold text-slate-800">Package: {selectedBooking.packageName}</p>
                <p className="text-slate-600 flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-brand-500" /> Phone: {selectedBooking.customerPhone}</p>
                <p className="text-slate-600 flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-brand-500" /> Email: {selectedBooking.customerEmail}</p>
                <p className="font-black text-brand-700 pt-1">Total Paid: {formatCurrency(selectedBooking.totalAmount)}</p>
              </div>

              <div className="p-3 bg-brand-50/70 border border-brand-100 rounded-xl space-y-2">
                <span className="font-black text-brand-900 uppercase text-[10px] block">
                  👥 Full Confirmed Passenger Manifest ({selectedBooking.passengersList?.length || selectedBooking.travelersCount} Pax)
                </span>
                <div className="space-y-1.5">
                  {selectedBooking.passengersList && selectedBooking.passengersList.length > 0 ? (
                    selectedBooking.passengersList.map((p, idx) => (
                      <div key={idx} className="bg-white p-2.5 rounded-lg border border-brand-200 flex items-center justify-between text-xs font-bold text-slate-800">
                        <span>{p.type?.includes('Child') ? '👶' : '👤'} {p.name}</span>
                        <span className="text-slate-500 font-semibold text-[10px]">
                          {p.type || 'Passenger'} {p.age ? `(${p.age}y)` : ''} {p.gender ? `• ${p.gender}` : ''}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white p-2.5 rounded-lg border border-brand-200 text-xs font-bold text-slate-800">
                      👤 {selectedBooking.customerName} (Lead Passenger)
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2 text-right">
              <Button onClick={() => setSelectedBooking(null)} variant="primary" size="sm" className="font-bold cursor-pointer">
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
