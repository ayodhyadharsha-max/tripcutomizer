'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { CheckCircle2, ShieldCheck, ChevronRight, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';

export default function BookingCheckoutPage() {
  const { user, login } = useAuth();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [travellerData, setTravellerData] = useState({
    title: 'Mr',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passportNo: '',
    addOnInsurance: true,
  });

  const [createdBooking, setCreatedBooking] = useState<CustomerBooking | null>(null);

  // Auto pre-fill from persistent Auth Context
  useEffect(() => {
    if (user) {
      const parts = (user.name || '').split(' ');
      setTravellerData((prev) => ({
        ...prev,
        firstName: prev.firstName || parts[0] || '',
        lastName: prev.lastName || parts.slice(1).join(' ') || '',
        email: prev.email || user.email || '',
        phone: prev.phone || user.phone || '',
      }));
    }
  }, [user]);

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');

  const basePrice = 48990 * 2; // 2 Adults
  const insurancePrice = travellerData.addOnInsurance ? 1200 : 0;
  const grandTotal = basePrice + insurancePrice;

  const handleSimulatePayment = () => {
    // 1. Ensure Persistent User Session
    const fullName = `${travellerData.firstName} ${travellerData.lastName}`.trim();
    login(travellerData.email, travellerData.phone, fullName);

    // 2. Save Booking to Cloud DB
    const newBooking = cloudStore.saveBooking({
      customerName: fullName || 'Valued Traveler',
      customerEmail: travellerData.email,
      customerPhone: travellerData.phone,
      packageName: 'Dazzling Dubai & Abu Dhabi Extravaganza',
      destination: 'Dubai',
      travelDates: '15 Oct 2026 - 20 Oct 2026',
      travelersCount: 2,
      totalAmount: grandTotal,
      status: 'Confirmed',
      paymentStatus: 'Paid',
    });

    setCreatedBooking(newBooking);
    setStep(4);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-4xl">
        {/* Stepper Header Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex items-center justify-around text-xs font-bold text-slate-700">
          <div className={`flex items-center space-x-1.5 ${step >= 1 ? 'text-brand-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-brand-500 text-white' : 'bg-slate-200'}`}>1</span>
            <span>Traveller Details</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step >= 2 ? 'text-brand-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-brand-500 text-white' : 'bg-slate-200'}`}>2</span>
            <span>Review & Add-ons</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step >= 3 ? 'text-brand-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-brand-500 text-white' : 'bg-slate-200'}`}>3</span>
            <span>Mock Payment</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step === 4 ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 4 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>4</span>
            <span>Invoice & Cloud Voucher</span>
          </div>
        </div>

        {/* Step 1: Traveller Details */}
        {step === 1 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">
                Enter Lead Traveller Information
              </h2>
              {user && (
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> Auto-filled from Profile
                </span>
              )}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Title</label>
                  <select
                    value={travellerData.title}
                    onChange={(e) => setTravellerData({ ...travellerData, title: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold text-slate-800"
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">First Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter First Name"
                    value={travellerData.firstName}
                    onChange={(e) => setTravellerData({ ...travellerData, firstName: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Last Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Last Name"
                    value={travellerData.lastName}
                    onChange={(e) => setTravellerData({ ...travellerData, lastName: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={travellerData.email}
                    onChange={(e) => setTravellerData({ ...travellerData, email: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 9876543210"
                    value={travellerData.phone}
                    onChange={(e) => setTravellerData({ ...travellerData, phone: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                  />
                </div>
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 mt-4">
                CONTINUE TO REVIEW & ADD-ONS →
              </Button>
            </form>
          </Card>
        )}

        {/* Step 2: Review & Add-ons */}
        {step === 2 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              Review Trip Details & Add-ons
            </h2>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Dazzling Dubai & Abu Dhabi Extravaganza</h3>
              <p className="text-slate-600">5 Nights / 6 Days • 2 Adults • 15 Oct - 20 Oct 2026</p>
              <p className="text-slate-700 font-semibold">
                Lead Traveller: {travellerData.title} {travellerData.firstName} {travellerData.lastName} ({travellerData.email})
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-xs flex items-center justify-between">
              <div>
                <h4 className="font-bold text-purple-950">Add Overseas Travel Insurance Coverage (+₹1,200)</h4>
                <p className="text-purple-700">$50,000 USD Medical Emergency & Loss of Passport Protection.</p>
              </div>
              <input
                type="checkbox"
                checked={travellerData.addOnInsurance}
                onChange={(e) => setTravellerData({ ...travellerData, addOnInsurance: e.target.checked })}
                className="w-5 h-5 accent-purple-600 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-slate-100 rounded-2xl flex justify-between items-center text-sm font-black text-slate-900">
              <span>Total Payable Amount:</span>
              <span className="text-xl text-brand-700">{formatCurrency(grandTotal)}</span>
            </div>

            <div className="flex space-x-3">
              <Button onClick={() => setStep(1)} variant="outline" size="lg" className="w-1/3">
                ← Back
              </Button>
              <Button onClick={() => setStep(3)} variant="accent" size="lg" className="w-2/3 font-black py-3 text-slate-950">
                PROCEED TO PAYMENT →
              </Button>
            </div>
          </Card>
        )}

        {/* Step 3: Mock Payment Gateway */}
        {step === 3 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Secure Payment Gateway</h2>
              <span className="text-xs font-bold text-slate-400">Total: {formatCurrency(grandTotal)}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1 rounded-xl text-xs font-bold text-center">
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`py-2 rounded-lg cursor-pointer ${paymentMethod === 'upi' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'}`}
              >
                UPI / QR Code
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                className={`py-2 rounded-lg cursor-pointer ${paymentMethod === 'card' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'}`}
              >
                Credit / Debit Card
              </button>
              <button
                onClick={() => setPaymentMethod('netbanking')}
                className={`py-2 rounded-lg cursor-pointer ${paymentMethod === 'netbanking' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'}`}
              >
                Net Banking
              </button>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-4 text-xs">
              <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto" />
              <p className="font-bold text-slate-900 text-sm">Cloud Sync Enabled — Live Booking Database</p>
              <p className="text-slate-500">Your profile and booking will be saved in Cloud DB & available on Admin Panel instantly.</p>

              <Button
                onClick={handleSimulatePayment}
                variant="accent"
                size="lg"
                className="w-full max-w-sm mx-auto font-black py-3 text-slate-950 text-sm shadow-xl"
              >
                SIMULATE PAYMENT & SAVE TO CLOUD ({formatCurrency(grandTotal)})
              </Button>
            </div>
          </Card>
        )}

        {/* Step 4: Confirmed Invoice & Voucher */}
        {step === 4 && createdBooking && (
          <Card className="p-8 bg-white rounded-3xl shadow-2xl border border-slate-200 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="bg-brand-50 text-brand-700 font-extrabold text-xs px-3.5 py-1 rounded-full inline-block">
              Booking Ref: {createdBooking.referenceNo}
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Booking Saved to Cloud!</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Thank you {travellerData.firstName}! Your booking has been registered in the cloud. Details are available in your account and sent to the tripcustomizer Admin team.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs border border-slate-200 space-y-2 max-w-md mx-auto">
              <p className="font-bold text-slate-900">Booking Summary ({createdBooking.referenceNo})</p>
              <div className="flex justify-between text-slate-600">
                <span>{createdBooking.packageName}:</span>
                <span className="font-bold text-slate-800">{formatCurrency(createdBooking.totalAmount)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Customer Email:</span>
                <span className="font-semibold text-slate-800">{createdBooking.customerEmail}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Mobile:</span>
                <span className="font-semibold text-slate-800">{createdBooking.customerPhone}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Status:</span>
                <span className="font-bold text-emerald-600">{createdBooking.status}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/account">
                <Button variant="accent" size="lg" className="font-bold text-slate-950 px-6">
                  VIEW IN MY ACCOUNT →
                </Button>
              </Link>
              <Link href="/holidays">
                <Button variant="outline" size="lg" className="font-bold text-slate-800 px-6">
                  EXPLORE MORE PACKAGES →
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </Container>
    </div>
  );
}
