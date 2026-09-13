'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { CheckCircle2, ShieldCheck, CreditCard, Lock, ArrowRight, ChevronRight, User } from 'lucide-react';

export default function BookingCheckoutPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [travellerData, setTravellerData] = useState({
    title: 'Mr',
    firstName: 'Rishabh',
    lastName: 'Jaiswal',
    email: 'rishabh@example.com',
    phone: '+91 9876543210',
    passportNo: 'Z9841029',
    addOnInsurance: true,
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');

  const basePrice = 48990 * 2; // 2 Adults
  const insurancePrice = travellerData.addOnInsurance ? 1200 : 0;
  const grandTotal = basePrice + insurancePrice;
  const bookingRef = 'TB-984210';

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
            <span>Invoice & Voucher</span>
          </div>
        </div>

        {/* Step 1: Traveller Details */}
        {step === 1 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              Enter Lead Traveller Information
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Title</label>
                  <select
                    value={travellerData.title}
                    onChange={(e) => setTravellerData({ ...travellerData, title: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold"
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
                    value={travellerData.firstName}
                    onChange={(e) => setTravellerData({ ...travellerData, firstName: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Last Name *</label>
                  <input
                    required
                    type="text"
                    value={travellerData.lastName}
                    onChange={(e) => setTravellerData({ ...travellerData, lastName: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email ID *</label>
                  <input
                    required
                    type="email"
                    value={travellerData.email}
                    onChange={(e) => setTravellerData({ ...travellerData, email: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    value={travellerData.phone}
                    onChange={(e) => setTravellerData({ ...travellerData, phone: e.target.value })}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Passport Number (Optional for domestic)</label>
                <input
                  type="text"
                  placeholder="e.g. Z9841029"
                  value={travellerData.passportNo}
                  onChange={(e) => setTravellerData({ ...travellerData, passportNo: e.target.value })}
                  className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold uppercase"
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm">
                CONTINUE TO REVIEW & ADD-ONS →
              </Button>
            </form>
          </Card>
        )}

        {/* Step 2: Review Booking & Add-ons */}
        {step === 2 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              Review Trip Details & Add-ons
            </h2>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Dazzling Dubai & Abu Dhabi Extravaganza</h3>
              <p className="text-slate-600">5 Nights / 6 Days • 2 Adults • 15 Oct - 20 Oct 2026</p>
              <p className="text-slate-700 font-semibold">Lead Traveller: {travellerData.title} {travellerData.firstName} {travellerData.lastName} ({travellerData.email})</p>
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
                PROCEED TO MOCK PAYMENT →
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
              <p className="font-bold text-slate-900 text-sm">Mock Razorpay / Stripe Gateway Integration Active</p>
              <p className="text-slate-500">Server-side price recalculation verified. Click below to simulate instant payment success.</p>

              <Button
                onClick={() => setStep(4)}
                variant="accent"
                size="lg"
                className="w-full max-w-sm mx-auto font-black py-3 text-slate-950 text-sm shadow-xl"
              >
                SIMULATE SUCCESSFUL PAYMENT ({formatCurrency(grandTotal)})
              </Button>
            </div>
          </Card>
        )}

        {/* Step 4: Confirmed Invoice & Voucher */}
        {step === 4 && (
          <Card className="p-8 bg-white rounded-3xl shadow-2xl border border-slate-200 text-center space-y-6 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="bg-brand-50 text-brand-700 font-extrabold text-xs px-3 py-1 rounded-full inline-block">
              Booking Ref: {bookingRef}
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Booking & Payment Confirmed!</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Thank you {travellerData.firstName}! A confirmation email and tax invoice PDF have been sent to {travellerData.email}.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs border border-slate-200 space-y-2 max-w-md mx-auto">
              <p className="font-bold text-slate-900">Tax Invoice Summary (#INV-984210)</p>
              <div className="flex justify-between text-slate-600">
                <span>Dazzling Dubai 5N/6D (2 Pax):</span>
                <span className="font-bold">{formatCurrency(basePrice)}</span>
              </div>
              {travellerData.addOnInsurance && (
                <div className="flex justify-between text-slate-600">
                  <span>Overseas Travel Insurance:</span>
                  <span className="font-bold">{formatCurrency(insurancePrice)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-slate-200 flex justify-between font-black text-slate-900 text-sm">
                <span>Total Amount Paid:</span>
                <span className="text-brand-700">{formatCurrency(grandTotal)}</span>
              </div>
            </div>

            <div className="flex justify-center space-x-3 text-xs">
              <Link href="/account" className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-5 py-3 rounded-xl shadow-sm">
                Go to My Account Dashboard
              </Link>
              <Link href="/manage-booking" className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl">
                Manage Booking →
              </Link>
            </div>
          </Card>
        )}
      </Container>
    </div>
  );
}
