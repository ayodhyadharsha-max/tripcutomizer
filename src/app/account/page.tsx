'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { User, FileText, Heart, Users, CreditCard, ShieldCheck, Award, LogOut, Download, Clock } from 'lucide-react';

export default function AccountDashboardPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'wishlist' | 'travellers' | 'invoices' | 'documents'>('bookings');

  // Mock User Data
  const user = {
    name: 'Rishabh Jaiswal',
    email: 'rishabh@example.com',
    phone: '+91 9876543210',
    loyaltyPoints: 4500,
    memberTier: 'Gold Partner',
  };

  // Mock Bookings Data
  const bookings = [
    {
      id: 'TB-984210',
      packageName: 'Dazzling Dubai & Abu Dhabi Extravaganza',
      destination: 'Dubai, UAE',
      dates: '15 Oct - 20 Oct 2026',
      amount: 97980,
      travellers: '2 Adults',
      status: 'CONFIRMED',
      paymentStatus: 'PAID',
    },
    {
      id: 'TB-412093',
      packageName: 'Multi-Currency Forex Card (USD 1,000)',
      destination: 'United States',
      dates: '02 Sept 2026',
      amount: 84450,
      travellers: 'Self',
      status: 'DELIVERED',
      paymentStatus: 'PAID',
    },
  ];

  // Mock Travellers Vault
  const travellersVault = [
    { name: 'Rishabh Jaiswal', dob: '14 May 1994', passport: 'Z9841029', expiry: '2031-08-20' },
    { name: 'Ananya Jaiswal', dob: '22 Aug 1996', passport: 'P4810293', expiry: '2032-11-15' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        {/* User Profile Header Card */}
        <Card className="p-6 bg-brand-900 text-white rounded-3xl mb-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-accent-500 text-slate-950 font-black text-2xl flex items-center justify-center border-2 border-white shrink-0">
              RJ
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">{user.name}</h1>
                <span className="bg-accent-500/20 text-accent-400 border border-accent-400/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {user.memberTier}
                </span>
              </div>
              <p className="text-xs text-slate-300">{user.email} • {user.phone}</p>
            </div>
          </div>

          {/* Loyalty Points Counter */}
          <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-center shrink-0">
            <span className="text-[10px] text-accent-400 font-bold uppercase tracking-wider block">Loyalty Points</span>
            <span className="text-2xl font-black text-white">{user.loyaltyPoints} PTS</span>
            <p className="text-[10px] text-slate-300">Worth ₹4,500 on next booking</p>
          </div>
        </Card>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-3">
            <Card className="p-3 bg-white border-slate-200 space-y-1">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'bookings' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>My Bookings</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'profile' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Personal Profile</span>
              </button>

              <button
                onClick={() => setActiveTab('travellers')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'travellers' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Travellers Vault</span>
              </button>

              <button
                onClick={() => setActiveTab('invoices')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'invoices' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Invoices & Payments</span>
              </button>

              <button
                onClick={() => setActiveTab('documents')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'documents' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Saved Documents</span>
              </button>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/login"
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </Link>
              </div>
            </Card>
          </div>

          {/* Main Dashboard Content Area */}
          <div className="lg:col-span-9">
            {activeTab === 'bookings' && (
              <Card className="p-6 bg-white border-slate-200 space-y-6">
                <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Your Active & Past Bookings
                </h2>

                <div className="space-y-4">
                  {bookings.map((b) => (
                    <div key={b.id} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold block uppercase">Booking Reference</span>
                          <span className="text-sm font-black text-brand-700">{b.id}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="green">{b.status}</Badge>
                          <Badge variant="blue">{b.paymentStatus}</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 font-semibold">
                        <div>
                          <p className="text-slate-400 text-[10px]">Product</p>
                          <p className="font-bold text-slate-900">{b.packageName}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">Dates</p>
                          <p className="font-bold text-slate-900">{b.dates}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px]">Total Paid</p>
                          <p className="font-black text-brand-700">{formatCurrency(b.amount)}</p>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end space-x-3 text-xs">
                        <Link href={`/manage-booking?ref=${b.id}`} className="font-bold text-brand-500 hover:underline">
                          View Itinerary Voucher →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === 'travellers' && (
              <Card className="p-6 bg-white border-slate-200 space-y-6">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h2 className="text-base font-bold text-slate-900">Saved Travellers Vault</h2>
                  <Button variant="outline" size="sm" className="text-xs">
                    + Add New Co-Traveller
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {travellersVault.map((t, i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
                      <h3 className="font-bold text-slate-900 text-sm">{t.name}</h3>
                      <p className="text-slate-500">DOB: {t.dob}</p>
                      <p className="text-slate-700 font-semibold">Passport: {t.passport} (Exp: {t.expiry})</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === 'profile' && (
              <Card className="p-6 bg-white border-slate-200 space-y-4 text-xs">
                <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-500 block">Full Name</label>
                    <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                  </div>
                  <div>
                    <label className="font-bold text-slate-500 block">Email Address</label>
                    <p className="font-bold text-slate-900 text-sm">{user.email}</p>
                  </div>
                  <div>
                    <label className="font-bold text-slate-500 block">Phone Number</label>
                    <p className="font-bold text-slate-900 text-sm">{user.phone}</p>
                  </div>
                </div>
              </Card>
            )}

            {(activeTab === 'invoices' || activeTab === 'documents') && (
              <Card className="p-6 bg-white border-slate-200 space-y-4 text-xs">
                <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                  {activeTab === 'invoices' ? 'Tax Invoices & Receipts' : 'Saved Passport & Visa KYC Documents'}
                </h2>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">Tax Invoice #INV-984210.pdf</p>
                    <p className="text-[10px] text-slate-400">Issued 15 Sept 2026 • GST Registered</p>
                  </div>
                  <button className="bg-brand-50 hover:bg-brand-500 hover:text-white text-brand-600 font-bold px-3 py-1.5 rounded-xl transition-colors flex items-center space-x-1">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
