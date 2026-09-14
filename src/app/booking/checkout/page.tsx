'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { CheckCircle2, ShieldCheck, ChevronRight, User, Tag, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';
import { DEMO_PACKAGES } from '@/data/packagesData';

export default function BookingCheckoutPage() {
  const { user, login } = useAuth();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Dynamic Selected Package Info
  const [pkgInfo, setPkgInfo] = useState({
    name: 'Ayodhya – Varanasi – Prayagraj Classic Heritage',
    destination: 'Ayodhya & Varanasi',
    duration: '5 Days / 4 Nights',
    pricePerPerson: 14500,
    travelersCount: 2,
  });

  // Extract URL Params on Client Side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get('slug') || params.get('package') || params.get('destination');
      const title = params.get('title') || params.get('name');
      const priceStr = params.get('price');
      const paxStr = params.get('pax');
      const dest = params.get('dest') || params.get('location');

      let matched = DEMO_PACKAGES.find((p) => {
        if (!slug) return false;
        const s = slug.toLowerCase();
        return (
          p.slug.toLowerCase() === s ||
          p.destinationSlug.toLowerCase() === s ||
          p.destination.toLowerCase().includes(s) ||
          p.name.toLowerCase().includes(s)
        );
      });

      if (!matched && title) {
        matched = DEMO_PACKAGES.find((p) => p.name.toLowerCase().includes(title.toLowerCase()));
      }

      const tierParam = params.get('tier') || 'deluxe';
      const tierMultiplier = tierParam === 'standard' ? 0.9 : tierParam === 'super_deluxe' ? 1.25 : 1.0;

      if (matched) {
        setPkgInfo({
          name: matched.name,
          destination: matched.destination,
          duration: `${matched.durationDays} Days / ${matched.durationNights} Nights`,
          pricePerPerson: Math.round(matched.startingPrice * tierMultiplier),
          travelersCount: paxStr ? Math.max(1, parseInt(paxStr, 10)) : 2,
        });
      } else if (title || priceStr) {
        setPkgInfo({
          name: title || 'Customized Holiday Package',
          destination: dest || 'India',
          duration: '5 Days / 4 Nights',
          pricePerPerson: priceStr ? parseInt(priceStr, 10) : 14500,
          travelersCount: paxStr ? Math.max(1, parseInt(paxStr, 10)) : 2,
        });
      }

      const urlCoupon = params.get('coupon');
      const urlDiscount = params.get('discount');
      if (urlCoupon && urlDiscount) {
        setAppliedCouponName(urlCoupon);
        setCouponDiscount(parseInt(urlDiscount, 10) || 0);
        setCouponCode(urlCoupon);
      }

      const paxDataRaw = params.get('paxData');
      if (paxDataRaw) {
        try {
          const parsedPax = JSON.parse(decodeURIComponent(paxDataRaw));
          const list = Object.values(parsedPax)
            .filter((p: any) => p && p.fullName && p.fullName.trim() !== '')
            .map((p: any, idx: number) => ({
              name: `${p.title ? p.title + ' ' : ''}${p.fullName.trim()}`,
              age: p.age || 25,
              gender: p.gender || 'Male',
              type: idx === 0 ? 'Lead Adult' : p.age && parseInt(String(p.age), 10) < 12 ? 'Child' : 'Adult',
            }));

          if (list.length > 0) {
            setParsedPassengersList(list);
            cloudStore.syncPassengersToCoTravellers(
              list.map((l) => ({ fullName: l.name, age: l.age, gender: l.gender })),
              user?.uid
            );
          }
        } catch (e) {
          console.error('Error parsing paxData in checkout:', e);
        }
      }
    }
  }, [user]);

  const [parsedPassengersList, setParsedPassengersList] = useState<{ name: string; age?: number | string; gender?: string; type?: string }[]>([]);

  // Checkout Interactive Coupon State
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCouponName, setAppliedCouponName] = useState('');
  const [checkoutCouponError, setCheckoutCouponError] = useState('');

  const subtotal = pkgInfo.pricePerPerson * pkgInfo.travelersCount;
  const gstTax = Math.round(subtotal * 0.05); // 5% Govt. Tour Service Tax
  const grossTotalWithGst = subtotal + gstTax;

  const handleApplyCheckoutCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'TCTAJ10') {
      const disc = Math.round(grossTotalWithGst * 0.10);
      setCouponDiscount(disc);
      setAppliedCouponName('TCTAJ10');
      setCheckoutCouponError('');
    } else if (code === 'FESTIVE15') {
      const disc = Math.round(grossTotalWithGst * 0.15);
      setCouponDiscount(disc);
      setAppliedCouponName('FESTIVE15');
      setCheckoutCouponError('');
    } else if (code === 'EUROPE15K') {
      const disc = Math.min(grossTotalWithGst, 15000);
      setCouponDiscount(disc);
      setAppliedCouponName('EUROPE15K');
      setCheckoutCouponError('');
    } else if (code === 'AZER10K' || code === 'BALI10K') {
      const disc = Math.min(grossTotalWithGst, 10000);
      setCouponDiscount(disc);
      setAppliedCouponName(code);
      setCheckoutCouponError('');
    } else if (code === 'THAI5K' || code === 'HOLIDAY5000') {
      const disc = Math.min(grossTotalWithGst, 5000);
      setCouponDiscount(disc);
      setAppliedCouponName(code);
      setCheckoutCouponError('');
    } else if (code === 'EARLYBIRD') {
      const disc = Math.min(grossTotalWithGst, 2000);
      setCouponDiscount(disc);
      setAppliedCouponName('EARLYBIRD');
      setCheckoutCouponError('');
    } else if (code.length >= 3) {
      // Dynamic fallback for any valid coupon code entered by user
      const disc = Math.round(grossTotalWithGst * 0.10);
      setCouponDiscount(disc);
      setAppliedCouponName(code);
      setCheckoutCouponError('');
    } else {
      setCheckoutCouponError(`Invalid coupon code. Try TCTAJ10, EUROPE15K, FESTIVE15, or EARLYBIRD.`);
    }
  };

  const handleRemoveCheckoutCoupon = () => {
    setAppliedCouponName('');
    setCouponDiscount(0);
    setCouponCode('');
    setCheckoutCouponError('');
  };

  let appliedDiscountAmount = couponDiscount;
  if (appliedCouponName && couponDiscount === 0) {
    if (appliedCouponName === 'TCTAJ10') {
      appliedDiscountAmount = Math.round(grossTotalWithGst * 0.10);
    } else if (appliedCouponName === 'EUROPE15K') {
      appliedDiscountAmount = Math.min(grossTotalWithGst, 15000);
    } else if (appliedCouponName === 'AZER10K' || appliedCouponName === 'BALI10K') {
      appliedDiscountAmount = Math.min(grossTotalWithGst, 10000);
    } else if (appliedCouponName === 'THAI5K' || appliedCouponName === 'HOLIDAY5000') {
      appliedDiscountAmount = Math.min(grossTotalWithGst, 5000);
    }
  }

  const grandTotal = Math.max(0, grossTotalWithGst - appliedDiscountAmount);

  // Form State
  const [travellerData, setTravellerData] = useState({
    title: 'Mr',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passportNo: '',
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
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleSimulatePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      // 1. Ensure Persistent User Session
      const fullName = `${travellerData.firstName} ${travellerData.lastName}`.trim();
      const loggedUser = login(travellerData.email, travellerData.phone, fullName);

      const finalPassengersList = parsedPassengersList.length > 0
        ? parsedPassengersList
        : [{ name: fullName || 'Lead Traveller', type: 'Lead Adult' }];

      const passengersToSync = finalPassengersList.map((p) => ({
        fullName: p.name,
        age: p.age,
        gender: p.gender,
      }));

      if (passengersToSync.length > 0) {
        cloudStore.syncPassengersToCoTravellers(passengersToSync, loggedUser.uid);
      }

      // 2. Save Booking to Database
      const newBooking = cloudStore.saveBooking({
        customerName: fullName || 'Valued Traveler',
        customerEmail: travellerData.email,
        customerPhone: travellerData.phone,
        packageName: pkgInfo.name,
        destination: pkgInfo.destination,
        travelDates: '15 Oct 2026 - 20 Oct 2026',
        travelersCount: pkgInfo.travelersCount,
        totalAmount: grandTotal,
        status: 'Confirmed',
        paymentStatus: 'Paid',
        passengersList: finalPassengersList,
      });

      setCreatedBooking(newBooking);
      setStep(4);
      setIsProcessingPayment(false);
    }, 800);
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
            <span>Review Trip Details</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step >= 3 ? 'text-brand-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-brand-500 text-white' : 'bg-slate-200'}`}>3</span>
            <span>Secure Payment</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step === 4 ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 4 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>4</span>
            <span>Invoice & E-Voucher</span>
          </div>
        </div>

        {/* Step 1: Traveller Details */}
        {step === 1 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            {/* Selected Package Header Banner */}
            <div className="p-4 bg-brand-50/80 rounded-2xl border border-brand-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 block">Selected Booking Package</span>
                <h3 className="text-base font-black text-slate-900">{pkgInfo.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{pkgInfo.destination} • {pkgInfo.duration}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-semibold">{pkgInfo.travelersCount} Travelers</span>
                <span className="text-lg font-black text-brand-700">{formatCurrency(grandTotal)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-slate-100 pt-2">
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
                CONTINUE TO REVIEW DETAILS →
              </Button>
            </form>
          </Card>
        )}

        {/* Step 2: Review Trip Details */}
        {step === 2 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              Review Trip Details
            </h2>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <h3 className="font-bold text-slate-900 text-base">{pkgInfo.name}</h3>
              <p className="text-slate-600">{pkgInfo.destination} • {pkgInfo.duration} • {pkgInfo.travelersCount} Travelers</p>
              <p className="text-slate-700 font-semibold pt-1">
                Lead Traveller: {travellerData.title} {travellerData.firstName} {travellerData.lastName} ({travellerData.email})
              </p>
            </div>

            {/* Interactive Coupon Box in Checkout */}
            <div className="p-4 bg-amber-50/90 rounded-2xl border border-amber-200 text-xs space-y-3">
              <div className="flex items-center justify-between font-bold text-amber-950">
                <span className="flex items-center space-x-1.5">
                  <Tag className="w-4 h-4 text-amber-600" />
                  <span>Apply Promo Code / Coupon</span>
                </span>
                {appliedCouponName && (
                  <button
                    type="button"
                    onClick={handleRemoveCheckoutCoupon}
                    className="text-rose-600 hover:underline cursor-pointer text-[10px]"
                  >
                    Remove Coupon
                  </button>
                )}
              </div>

              {appliedCouponName ? (
                <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-950 flex items-center justify-between font-bold">
                  <div>
                    <span className="block text-emerald-900 font-extrabold">✓ Coupon "{appliedCouponName}" Applied!</span>
                    <span className="text-[11px] text-emerald-800 font-medium">Discount: -{formatCurrency(couponDiscount)}</span>
                  </div>
                  <Badge variant="gold">Saved {formatCurrency(couponDiscount)}</Badge>
                </div>
              ) : (
                <form onSubmit={handleApplyCheckoutCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code (e.g. TCTAJ10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 bg-white border border-amber-300 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider focus:outline-none"
                  />
                  <Button type="submit" variant="primary" size="sm" className="font-bold cursor-pointer px-4">
                    Apply Code
                  </Button>
                </form>
              )}

              {checkoutCouponError && (
                <p className="text-[11px] text-rose-600 font-bold">{checkoutCouponError}</p>
              )}
            </div>

            <div className="p-4 bg-slate-100 rounded-2xl space-y-2 text-xs text-slate-900">
              <div className="flex justify-between font-medium text-slate-600">
                <span>Subtotal Package Fare ({pkgInfo.travelersCount} Pax):</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between font-medium text-slate-700">
                <span>GST (5% Govt. Tour Service Tax):</span>
                <span className="text-emerald-700 font-bold">+{formatCurrency(gstTax)}</span>
              </div>
              {appliedDiscountAmount > 0 && (
                <div className="flex justify-between font-bold text-emerald-700">
                  <span>Coupon Savings ({appliedCouponName}):</span>
                  <span>-{formatCurrency(appliedDiscountAmount)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-black text-slate-900">
                <span>Final Total Amount (Incl. 5% GST):</span>
                <span className="text-2xl text-brand-700 font-black">{formatCurrency(grandTotal)}</span>
              </div>
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

        {/* Step 3: Payment Gateway */}
        {step === 3 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-black text-slate-900">Secure Payment Gateway</h2>
                <p className="text-xs text-slate-500 font-medium">Powered by Razorpay & Paytm SSL Payments</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Payable Total</span>
                <span className="text-xl font-black text-brand-700">{formatCurrency(grandTotal)}</span>
              </div>
            </div>

            {/* Gateway Selection Tabs */}
            <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold text-center">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`py-2.5 rounded-xl cursor-pointer transition-all ${paymentMethod === 'upi' ? 'bg-white text-brand-700 shadow-sm font-black' : 'text-slate-600 hover:text-slate-900'}`}
              >
                UPI / QR (GooglePay/PhonePe)
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-2.5 rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'bg-white text-brand-700 shadow-sm font-black' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Credit / Debit Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('netbanking')}
                className={`py-2.5 rounded-xl cursor-pointer transition-all ${paymentMethod === 'netbanking' ? 'bg-white text-brand-700 shadow-sm font-black' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Net Banking
              </button>
            </div>

            {/* Payment Method Details Box */}
            <div className="p-6 bg-slate-50 border border-slate-200/90 rounded-2xl space-y-4 text-xs">
              {paymentMethod === 'upi' && (
                <div className="space-y-3 text-center">
                  <span className="bg-emerald-100 text-emerald-800 font-bold text-[11px] px-3 py-1 rounded-full inline-block">
                    Instant 0% Convenience Fee via UPI
                  </span>
                  <div className="max-w-xs mx-auto space-y-2">
                    <label className="block text-left font-bold text-slate-700">Enter UPI VPA ID</label>
                    <input
                      type="text"
                      placeholder="e.g. mobile@upi or name@okaxis"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">Supported: PhonePe, Google Pay, Paytm, BHIM, Cred UPI</p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="space-y-3 max-w-md mx-auto">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 8921"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-hidden"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="08/28"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">CVV / CVC</label>
                      <input
                        type="password"
                        maxLength={4}
                        placeholder="•••"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="space-y-3 max-w-md mx-auto">
                  <label className="block font-bold text-slate-700">Select Bank</label>
                  <select className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold">
                    <option value="HDFC">HDFC Bank</option>
                    <option value="ICICI">ICICI Bank</option>
                    <option value="SBI">State Bank of India (SBI)</option>
                    <option value="AXIS">Axis Bank</option>
                    <option value="KOTAK">Kotak Mahindra Bank</option>
                  </select>
                </div>
              )}

              <div className="pt-3 border-t border-slate-200 flex items-center justify-center space-x-2 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>256-Bit SSL Encrypted Payment Authorization</span>
              </div>

              <Button
                onClick={handleSimulatePayment}
                disabled={isProcessingPayment}
                variant="accent"
                size="lg"
                className="w-full max-w-md mx-auto font-black py-3.5 text-slate-950 text-sm shadow-xl cursor-pointer disabled:opacity-75 flex items-center justify-center gap-2"
              >
                {isProcessingPayment ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                    <span>Authorizing Payment & Syncing Lead...</span>
                  </>
                ) : (
                  `PAY & CONFIRM BOOKING (${formatCurrency(grandTotal)})`
                )}
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

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Booking & Payment Confirmed!</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Thank you {travellerData.firstName}! Your booking for {createdBooking.packageName} has been confirmed. Confirmation vouchers and invoice are available in your account.
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
