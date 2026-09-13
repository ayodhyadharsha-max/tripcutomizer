'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { DollarSign, Upload, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

export default function BuyForexPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(1000);
  const [purpose, setPurpose] = useState('Holiday / Personal Travel');
  const [deliveryMode, setDeliveryMode] = useState<'DOORSTEP' | 'STORE_PICKUP'>('DOORSTEP');
  const [travelDate, setTravelDate] = useState('2026-10-15');

  // Customer Details
  const [name, setName] = useState('Rishabh Jaiswal');
  const [email, setEmail] = useState('rishabh@example.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [panNo, setPanNo] = useState('ABCDE1234F');
  const [passportUploaded, setPassportUploaded] = useState(true);
  const [panUploaded, setPanUploaded] = useState(true);

  const rate = 84.45; // USD Rate
  const baseInr = amount * rate;
  const serviceFee = 250;
  const gst = 45;
  const grandTotal = baseInr + serviceFee + gst;

  const [orderRef, setOrderRef] = useState('FX-894102');
  const [orderStatus, setOrderStatus] = useState('PAID');

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/forex" className="hover:text-brand-500">Forex</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Buy Forex Cash & Cards</span>
        </div>

        {/* Stepper Header */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex items-center justify-around text-xs font-bold text-slate-700">
          <div className={`flex items-center space-x-1.5 ${step >= 1 ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>1</span>
            <span>Select Forex</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step >= 2 ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>2</span>
            <span>KYC Documents</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step >= 3 ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>3</span>
            <span>Payment</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step === 4 ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 4 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>4</span>
            <span>Order Confirmed</span>
          </div>
        </div>

        {/* Step 1: Currency & Amount */}
        {step === 1 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              Buy Foreign Currency Cash & Forex Card
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Currency</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-bold"
                  >
                    <option value="USD">USD — US Dollar (84.45 INR)</option>
                    <option value="EUR">EUR — Euro (92.10 INR)</option>
                    <option value="GBP">GBP — British Pound (109.80 INR)</option>
                    <option value="AED">AED — UAE Dirham (23.10 INR)</option>
                    <option value="SGD">SGD — Singapore Dollar (64.60 INR)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Foreign Amount</label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Purpose of Travel</label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold"
                  >
                    <option value="Holiday / Personal Travel">Holiday / Personal Travel</option>
                    <option value="Education / Study Abroad">Education / Study Abroad</option>
                    <option value="Business Travel">Business Travel</option>
                    <option value="Medical Treatment">Medical Treatment</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Delivery Option</label>
                  <select
                    value={deliveryMode}
                    onChange={(e) => setDeliveryMode(e.target.value as any)}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold"
                  >
                    <option value="DOORSTEP">Doorstep Delivery (48 Hours)</option>
                    <option value="STORE_PICKUP">Pick up at Nearest Store</option>
                  </select>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Conversion ({amount} {currency} @ ₹{rate}):</span>
                  <span className="font-bold text-slate-900">{formatCurrency(baseInr)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery & Service Fee + GST:</span>
                  <span className="font-bold text-slate-900">{formatCurrency(serviceFee + gst)}</span>
                </div>
                <div className="pt-2 border-t border-emerald-200 flex justify-between font-black text-slate-900 text-sm">
                  <span>Total Payable:</span>
                  <span className="text-emerald-700 text-base">{formatCurrency(grandTotal)}</span>
                </div>
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm">
                CONTINUE TO KYC DOCUMENTS →
              </Button>
            </form>
          </Card>
        )}

        {/* Step 2: KYC Documents Upload */}
        {step === 2 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              RBI Mandatory KYC Document Verification
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Customer Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">PAN Card Number *</label>
                  <input type="text" required value={panNo} onChange={(e) => setPanNo(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold uppercase" />
                </div>
              </div>

              {/* Upload Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-center space-y-2">
                  <Upload className="w-6 h-6 text-brand-500 mx-auto" />
                  <p className="font-bold text-slate-800">Upload Passport Front & Back</p>
                  <span className="text-[10px] text-emerald-600 font-bold block">✓ Passport Attached</span>
                </div>

                <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-center space-y-2">
                  <Upload className="w-6 h-6 text-brand-500 mx-auto" />
                  <p className="font-bold text-slate-800">Upload Airline Ticket Copy</p>
                  <span className="text-[10px] text-emerald-600 font-bold block">✓ Ticket Attached</span>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button onClick={() => setStep(1)} variant="outline" size="lg" className="w-1/3">
                  ← Back
                </Button>
                <Button type="submit" variant="accent" size="lg" className="w-2/3 font-black py-3 text-slate-950">
                  PROCEED TO PAYMENT →
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 text-center space-y-6">
            <h2 className="text-lg font-black text-slate-900">Forex Payment ({formatCurrency(grandTotal)})</h2>
            <p className="text-xs text-slate-500">Pay via NetBanking, UPI, or Debit Card to lock exchange rate instantly.</p>

            <Button
              onClick={() => setStep(4)}
              variant="accent"
              size="lg"
              className="w-full font-black py-3 text-slate-950 text-sm shadow-xl"
            >
              PAY {formatCurrency(grandTotal)} NOW →
            </Button>
          </Card>
        )}

        {/* Step 4: Order Confirmed & Tracker */}
        {step === 4 && (
          <Card className="p-8 bg-white rounded-3xl shadow-2xl border border-slate-200 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="bg-emerald-50 text-emerald-700 font-extrabold text-xs px-3 py-1 rounded-full inline-block">
              Order Ref: {orderRef}
            </span>

            <h2 className="text-2xl font-black text-slate-900">Forex Order Placed Successfully!</h2>

            <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs border border-slate-200 space-y-2 max-w-md mx-auto">
              <p className="font-bold text-slate-900">Order Summary ({amount} {currency})</p>
              <div className="flex justify-between text-slate-600">
                <span>Current Status:</span>
                <span className="font-bold text-emerald-600">DISPATCHED (Doorstep Delivery)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Total INR Paid:</span>
                <span className="font-bold text-slate-900">{formatCurrency(grandTotal)}</span>
              </div>
            </div>

            <Link href="/account" className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md">
              View Forex Order Status in Account →
            </Link>
          </Card>
        )}
      </Container>
    </div>
  );
}
