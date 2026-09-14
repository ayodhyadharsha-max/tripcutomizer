'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Train, Globe, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

import { cloudStore } from '@/lib/cloudStore';

export default function EurailPage() {
  const [passType, setPassType] = useState('Global Pass (33 Countries)');
  const [duration, setDuration] = useState('7 Days in 1 Month');
  const [travelClass, setTravelClass] = useState('1st Class');
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const price = travelClass === '1st Class' ? 38500 : 29500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cloudStore.saveLead({
      name: contactName || 'Eurail Traveler',
      phone: contactPhone,
      email: '',
      destination: `Eurail ${passType} (${duration})`,
      budget: `₹${price.toLocaleString('en-IN')}`,
      status: 'New',
      source: 'Eurail Pass Page',
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Eurail Passes</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-brand-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Train className="w-4 h-4 text-brand-400" />
            <span>Official Eurail Pass Partner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Eurail Rail Passes for Europe</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Travel seamlessly across 33 European countries with unlimited train travel on high-speed rails like TGV, Eurostar & Glacier Express.
          </p>
        </div>

        {/* Pass Selector Form */}
        <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 mb-10 space-y-6">
          <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
            Select Your Eurail Pass & Reserve Seat
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-slate-900 text-base">Eurail Pass Reserved!</h3>
              <p className="text-xs text-slate-600">Your pass request for {passType} ({duration}) has been confirmed. E-Pass mobile ticket link sent to your email.</p>
              <Link href="/account" className="inline-block font-bold text-xs text-brand-600 hover:underline pt-2">View E-Pass in Account</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mobile No *</label>
                  <input
                    required
                    type="tel"
                    placeholder="Enter Mobile No."
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Pass Type</label>
                  <select value={passType} onChange={(e) => setPassType(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold">
                    <option value="Global Pass (33 Countries)">Global Pass (33 Countries)</option>
                    <option value="One Country Pass (Switzerland)">One Country Pass (Switzerland)</option>
                    <option value="One Country Pass (Italy)">One Country Pass (Italy)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Duration & Validity</label>
                  <select value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold">
                    <option value="7 Days in 1 Month">7 Days Flexi in 1 Month</option>
                    <option value="10 Days in 2 Months">10 Days Flexi in 2 Months</option>
                    <option value="15 Days Continuous">15 Days Continuous</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Seating Class</label>
                  <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-bold">
                    <option value="1st Class">1st Class (Panoramic & Spacious)</option>
                    <option value="2nd Class">2nd Class (Standard)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-brand-50 rounded-2xl flex justify-between items-center text-slate-900 font-bold">
                <span>Total Eurail Pass Tariff:</span>
                <span className="text-xl text-brand-700">{formatCurrency(price)}</span>
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm">
                BUY EURAIL E-PASS NOW →
              </Button>
            </form>
          )}
        </Card>
      </Container>
    </div>
  );
}
