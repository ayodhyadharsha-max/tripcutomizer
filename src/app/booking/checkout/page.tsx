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
import { sendWeb3FormLead } from '@/lib/web3forms';
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
      setCheckoutCouponError(`Invalid coupon code. Try FESTIVE15, EUROPE15K, or EARLYBIRD.`);
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

  const [paymentMethod, setPaymentMethod] = useState<'razorpay'>('razorpay');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const loadRazorpaySDK = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') return resolve(false);
      if ((window as any).Razorpay) return resolve(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSimulatePayment = async () => {
    const fullName = `${travellerData.firstName} ${travellerData.lastName}`.trim();
    if (!fullName || !travellerData.phone || !travellerData.email) {
      alert('Please fill in your Name, Phone Number, and Email Address to proceed.');
      return;
    }

    if (grandTotal <= 0) {
      alert('Invalid booking total. Amount must be at least ₹1 (100 paise).');
      return;
    }

    setIsProcessingPayment(true);

    try {
      // 1. Create Payment Order on Backend API Route (/api/create-order)
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(grandTotal * 100), // amount in paise
          currency: 'INR',
          packageName: pkgInfo.name,
          customerName: fullName,
          customerEmail: travellerData.email,
          customerPhone: travellerData.phone,
          receipt: `rcpt_${Date.now()}`,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success) {
        alert(`Order Creation Failed: ${orderData.error || 'Unable to create Razorpay order'}`);
        setIsProcessingPayment(false);
        return;
      }

      const orderId = orderData.order_id || orderData.orderId;
      const razorpayKeyId = orderData.key_id || orderData.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_TfNoGuhXf8yXWP';

      // 2. Load Razorpay Web Checkout JS SDK dynamically
      const isSDKLoaded = await loadRazorpaySDK();

      if (!isSDKLoaded || !(window as any).Razorpay) {
        alert('Razorpay Checkout SDK failed to load. Please check your internet connection.');
        setIsProcessingPayment(false);
        return;
      }

      const completeBookingAndVerify = async (paymentId: string, signature?: string) => {
        // Verify payment signature on backend (/api/verify-payment)
        const verifyRes = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            razorpay_order_id: orderId,
            razorpay_payment_id: paymentId,
            razorpay_signature: signature || '',
            bookingData: {
              customerName: fullName,
              customerEmail: travellerData.email,
              customerPhone: travellerData.phone,
              packageName: pkgInfo.name,
              destination: pkgInfo.destination,
              totalAmount: grandTotal,
            },
          }),
        });

        const verifyData = await verifyRes.json();

        if (!verifyRes.ok || !verifyData.success) {
          alert(`Payment Verification Failed: ${verifyData.error || 'Signature mismatch'}`);
          setIsProcessingPayment(false);
          return;
        }

        // Signature verified successfully -> Save Booking & Login User
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

        const searchParams = new URLSearchParams(window.location.search);
        const tierParam = searchParams.get('tier') || 'deluxe';
        const selectedHotelCategory =
          tierParam === 'standard'
            ? '3-Star Standard Hotel'
            : tierParam === 'super_deluxe'
            ? '5-Star Luxury Heritage Resort'
            : '4-Star Deluxe Hotel & Resort';

        const newBooking = cloudStore.saveBooking({
          customerName: fullName || 'Valued Traveler',
          customerEmail: travellerData.email,
          customerPhone: travellerData.phone,
          packageName: pkgInfo.name,
          destination: pkgInfo.destination,
          travelDates: '15 Oct 2026 - 20 Oct 2026',
          travelersCount: pkgInfo.travelersCount,
          hotelCategory: selectedHotelCategory,
          basePrice: subtotal,
          gstAmount: gstTax,
          discountAmount: appliedDiscountAmount,
          couponApplied: appliedCouponName,
          paymentMethod: 'Razorpay Standard Checkout',
          transactionId: paymentId,
          totalAmount: grandTotal,
          status: 'Confirmed',
          paymentStatus: 'Paid',
          passengersList: finalPassengersList,
        });

        sendWeb3FormLead({
          subject: `[Trip Customizer] 🎉 NEW CONFIRMED BOOKING! Ref: ${newBooking.referenceNo}`,
          name: fullName,
          email: travellerData.email,
          phone: travellerData.phone,
          referenceNo: newBooking.referenceNo,
          package: pkgInfo.name,
          destination: pkgInfo.destination,
          amountPaid: `₹${grandTotal.toLocaleString()}`,
          passengers: JSON.stringify(finalPassengersList),
        });

        setCreatedBooking(newBooking);
        setStep(4);
        setIsProcessingPayment(false);

        // Redirect to official success voucher page
        window.location.href = `/booking/success?order_id=${orderId}&ref=${newBooking.referenceNo}`;
      };

      // 3. Launch Razorpay Standard Web Checkout Modal
      const rzpOptions = {
        key: razorpayKeyId,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'Trip Customizer',
        description: pkgInfo.name,
        order_id: orderId,
        prefill: {
          name: fullName,
          email: travellerData.email,
          contact: travellerData.phone,
        },
        theme: {
          color: '#0f172a',
        },
        handler: async function (response: any) {
          await completeBookingAndVerify(
            response.razorpay_payment_id,
            response.razorpay_signature
          );
        },
        modal: {
          ondismiss: function () {
            setIsProcessingPayment(false);
            console.log('Razorpay payment modal closed by user.');
          },
        },
      };

      const rzp = new (window as any).Razorpay(rzpOptions);
      rzp.on('payment.failed', function (response: any) {
        setIsProcessingPayment(false);
        alert(`Payment Failed: ${response.error?.description || 'Transaction declined by bank'}`);
      });
      rzp.open();
    } catch (err: any) {
      console.error('Razorpay Checkout exception:', err);
      alert(`Payment Error: ${err.message || 'An unexpected error occurred'}`);
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className={step === 3 ? "max-w-6xl" : "max-w-4xl"}>
        {/* Mobile Top Fare Summary Header Bar (Instantly visible on phone screens without scrolling) */}
        {step < 4 && (
          <div className="md:hidden bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white p-4 rounded-2xl mb-4 border border-brand-800 shadow-md flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] text-amber-400 font-black uppercase tracking-wider block">Booking Fare Summary</span>
              <h4 className="text-xs font-black text-white truncate max-w-[190px]">{pkgInfo.name}</h4>
              <p className="text-[10px] text-slate-300 font-semibold">{pkgInfo.travelersCount} Travelers • {pkgInfo.destination}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-bold block">Total Amount</span>
              <span className="text-base font-black text-amber-300">{formatCurrency(grandTotal)}</span>
              <span className="text-[9px] text-emerald-400 font-extrabold block">Incl. 5% GST</span>
            </div>
          </div>
        )}

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
                    placeholder="Enter coupon code (e.g. FESTIVE15)"
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

        {/* Step 3: MakeMyTrip Style Razorpay Payment Gateway */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top MakeMyTrip Style Safe Header */}
            <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-black text-rose-600 tracking-tighter uppercase">
                  trip <span className="text-slate-900">customizer</span>
                </span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px]">✓</span>
                <span className="tracking-wider text-slate-600 uppercase text-[11px]">SAFE & SECURED</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Left 2 Columns: Guest Info, Offers & Payment Options Accordion */}
              <div className="lg:col-span-2 space-y-5">
                {/* Card 1: Booking & Guest Summary Box */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{pkgInfo.name}</h3>
                      <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-2">
                        <span>📅 15 Oct'26 - 20 Oct'26</span>
                        <span>•</span>
                        <span>🛏️ {pkgInfo.duration} | {pkgInfo.travelersCount} Adults</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-bold text-amber-600 hover:underline cursor-pointer uppercase flex items-center gap-1"
                    >
                      VIEW DETAILS <span className="text-[9px]">▼</span>
                    </button>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                    <span>👤 <span className="font-bold text-slate-800">{travellerData.firstName} {travellerData.lastName}</span> (Primary)</span>
                    <span>✉️ {travellerData.email}</span>
                    <span>📱 {travellerData.phone}</span>
                  </div>
                </div>

                {/* Card 2: Gift Cards Row */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">👛</span>
                    <h4 className="text-sm font-bold text-slate-900">Gift Cards</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-amber-600 hover:underline cursor-pointer uppercase flex items-center gap-1"
                  >
                    VIEW ALL <span className="text-[9px]">▼</span>
                  </button>
                </div>

                {/* Card 3: Payment Options Box */}
                <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
                  <div className="p-4 border-b border-slate-100">
                    <h3 className="text-base font-bold text-slate-900">Payment Options</h3>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {/* 1. UPI Options */}
                    <div
                      onClick={handleSimulatePayment}
                      className="p-5 hover:bg-slate-50 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-orange-600">UPI</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600">UPI Options</h4>
                          <p className="text-xs text-slate-500 mt-0.5">Pay Directly From Your Bank Account</p>
                        </div>
                      </div>
                      <span className="text-amber-600 font-bold text-lg group-hover:translate-x-1 transition-transform">›</span>
                    </div>

                    {/* 2. Credit & Debit Cards */}
                    <div
                      onClick={handleSimulatePayment}
                      className="p-5 hover:bg-slate-50 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-rose-600">💳</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600">Credit & Debit Cards</h4>
                          <p className="text-xs text-slate-500 mt-0.5">Visa, Mastercard, Amex, Rupay and more</p>
                        </div>
                      </div>
                      <span className="text-amber-600 font-bold text-lg group-hover:translate-x-1 transition-transform">›</span>
                    </div>

                    {/* 3. Pay Later */}
                    <div
                      onClick={handleSimulatePayment}
                      className="p-5 hover:bg-slate-50 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-amber-600">⏰</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600">Pay Later</h4>
                          <p className="text-xs text-slate-500 mt-0.5">Lazypay, Amazon</p>
                        </div>
                      </div>
                      <span className="text-amber-600 font-bold text-lg group-hover:translate-x-1 transition-transform">›</span>
                    </div>

                    {/* 4. Net Banking */}
                    <div
                      onClick={handleSimulatePayment}
                      className="p-5 hover:bg-slate-50 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-blue-600">🏦</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600">Net Banking</h4>
                          <p className="text-xs text-slate-500 mt-0.5">40+ Banks Available</p>
                        </div>
                      </div>
                      <span className="text-amber-600 font-bold text-lg group-hover:translate-x-1 transition-transform">›</span>
                    </div>

                    {/* 5. Gift Cards & e-wallets */}
                    <div
                      onClick={handleSimulatePayment}
                      className="p-5 hover:bg-slate-50 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-indigo-600">👛</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600">Gift Cards & e-wallets</h4>
                          <p className="text-xs text-slate-500 mt-0.5">Trip Customizer Gift cards & Amazon Pay</p>
                        </div>
                      </div>
                      <span className="text-amber-600 font-bold text-lg group-hover:translate-x-1 transition-transform">›</span>
                    </div>

                    {/* 6. EMI */}
                    <div
                      onClick={handleSimulatePayment}
                      className="p-5 hover:bg-slate-50 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-emerald-600">⚡</span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600">EMI</h4>
                            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full uppercase">NO COST EMI</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">Credit/Bajaj Card and Cardless EMI available</p>
                        </div>
                      </div>
                      <span className="text-amber-600 font-bold text-lg group-hover:translate-x-1 transition-transform">›</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Fare Breakdown & Scan to Pay QR Box */}
              <div className="space-y-5 lg:sticky lg:top-24">
                {/* Total Due Card */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs space-y-4">
                  <div className="flex items-baseline justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">Total Due</h3>
                    <span className="text-2xl font-black text-teal-600">₹ {grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Package Fare</span>
                      <span className="font-semibold text-slate-800">₹ {subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Service Charge</span>
                      <span className="font-semibold text-slate-800">₹ {gstTax.toLocaleString('en-IN')}</span>
                    </div>
                    {appliedDiscountAmount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>Discount Applied</span>
                        <span>-₹ {appliedDiscountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Scan to Pay QR Card */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs space-y-3 text-center">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 text-left">Scan to Pay</h4>
                    <p className="text-xs text-slate-500 text-left mt-0.5">Instant Refund & High Success Rate</p>
                  </div>

                  {/* Brand Logos Row */}
                  <div className="flex items-center justify-start space-x-1.5 pt-1">
                    <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[10px] font-black">BHIM</span>
                    <span className="bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded text-[10px] font-bold">G Pay</span>
                    <span className="bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded text-[10px] font-bold">Paytm</span>
                    <span className="bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded text-[10px] font-bold">PhonePe</span>
                    <span className="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[10px] font-bold">CRED</span>
                  </div>

                  {/* QR Code Container displaying the exact uploaded UPI QR Code */}
                  <div
                    onClick={handleSimulatePayment}
                    className="relative p-2.5 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-orange-500 transition-all max-w-[210px] mx-auto group shadow-2xs"
                  >
                    <div className="w-40 h-40 bg-white rounded-lg mx-auto p-1.5 flex items-center justify-center relative overflow-hidden border border-slate-100">
                      <img
                        src="/upi-qr-code.png"
                        alt="Scan UPI QR Code to Pay"
                        className="w-full h-full object-contain rounded"
                      />
                      <div className="absolute inset-x-3 bottom-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-black text-xs py-1.5 rounded-lg shadow-md group-hover:scale-105 transition-transform text-center">
                        VIEW QR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Trust Bar */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center space-x-2 shrink-0">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs">✓</div>
                <div>
                  <span className="font-extrabold text-slate-800 tracking-tight block">TRIPCUSTOMIZER IS SECURED</span>
                  <span className="text-[11px] text-slate-500 font-medium">100% RBI Compliant</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 shrink-0">
                <span className="bg-slate-200/60 px-2 py-0.5 rounded">PCI DSS</span>
                <span className="bg-slate-200/60 px-2 py-0.5 rounded">Verified by VISA</span>
                <span className="bg-slate-200/60 px-2 py-0.5 rounded">MasterCard SecureCode</span>
                <span className="bg-slate-200/60 px-2 py-0.5 rounded">SafeKey</span>
              </div>
              <p className="text-[10px] text-slate-400 max-w-xs text-right leading-tight font-medium">
                By continuing to pay, I understand and agree with the{' '}
                <Link href="/terms" className="underline hover:text-amber-600 font-bold">Terms of Use</Link>,{' '}
                <Link href="/refund-policy" className="underline hover:text-amber-600 font-bold">Refund Policy</Link>,{' '}
                <Link href="/cancellation-policy" className="underline hover:text-amber-600 font-bold">Cancellation Policy</Link>, and{' '}
                <Link href="/privacy" className="underline hover:text-amber-600 font-bold">Privacy Policy</Link> of Trip Customizer.
              </p>
            </div>
          </div>
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
