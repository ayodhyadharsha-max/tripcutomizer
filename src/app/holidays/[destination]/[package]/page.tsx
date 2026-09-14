'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { cloudStore } from '@/lib/cloudStore';
import {
  Star, Clock, MapPin, CheckCircle2, ChevronRight, ChevronDown, ChevronUp,
  Hotel, Plane, Utensils, Calendar, ShieldCheck, MessageCircle, Phone, User
} from 'lucide-react';

export default function PackageDetailPage({ params }: { params: { destination: string; package: string } }) {
  const router = useRouter();
  const { user, login } = useAuth();
  const pkg = DEMO_PACKAGES.find((p) => p.slug === params.package) || DEMO_PACKAGES[0];

  const [openDay, setOpenDay] = useState<number | null>(1);
  const [selectedTravellers, setSelectedTravellers] = useState(2);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Form State in Modal
  const [custName, setCustName] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [custPhone, setCustPhone] = useState('');

  useEffect(() => {
    if (user) {
      setCustName(user.name || '');
      setCustEmail(user.email || '');
      setCustPhone(user.phone || '');
    }
  }, [user]);

  const totalPrice = pkg.startingPrice * selectedTravellers;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 1. Login/Save Customer Profile
    login(custEmail, custPhone, custName);

    // 2. Save Booking to Cloud DB
    cloudStore.saveBooking({
      customerName: custName,
      customerEmail: custEmail,
      customerPhone: custPhone,
      packageName: pkg.name,
      destination: pkg.destination,
      travelDates: 'Flexible / Dates to be confirmed',
      travelersCount: selectedTravellers,
      totalAmount: totalPrice,
      status: 'Pending',
      paymentStatus: 'Pending',
    });

    setIsBookingModalOpen(false);
    // 3. Navigate to Checkout or Account Page
    router.push('/booking/checkout');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 pb-24">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/holidays" className="hover:text-brand-500">Holidays</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href={`/holidays/${pkg.destinationSlug}`} className="hover:text-brand-500">{pkg.destination}</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800 line-clamp-1">{pkg.name}</span>
        </div>

        {/* Top Header Title & Quick Badges */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="blue">{pkg.theme}</Badge>
            <Badge variant="gray">{pkg.hotelCategory}</Badge>
            <span className="text-xs text-emerald-600 font-bold flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Instant Confirmation Available</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            {pkg.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold mt-2">
            <span className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>{pkg.destination}, {pkg.country}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
            </span>
            <span className="flex items-center space-x-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{pkg.rating} ({pkg.reviewsCount} Customer Reviews)</span>
            </span>
          </div>
        </div>

        {/* Main Grid: Images & Itinerary vs Pricing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Photos & Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Image Gallery */}
            <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg bg-slate-200">
              <Image
                src={pkg.heroImage}
                alt={pkg.name}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full">
                📸 Verified Package Photography
              </div>
            </div>

            {/* Inclusions Highlights */}
            <Card className="p-6 bg-white rounded-3xl border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-black text-slate-900">Key Inclusions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center space-x-2">
                  <Hotel className="w-5 h-5 text-brand-600" />
                  <div>
                    <span className="font-bold text-slate-900 block">Accommodations</span>
                    <span className="text-[10px] text-slate-500">{pkg.hotelCategory} Hotels</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center space-x-2">
                  <Utensils className="w-5 h-5 text-brand-600" />
                  <div>
                    <span className="font-bold text-slate-900 block">Meals Included</span>
                    <span className="text-[10px] text-slate-500">Daily Breakfast & Dinners</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center space-x-2">
                  <Plane className="w-5 h-5 text-brand-600" />
                  <div>
                    <span className="font-bold text-slate-900 block">Transfers</span>
                    <span className="text-[10px] text-slate-500">Private Cab & Sightseeing</span>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-brand-600" />
                  <div>
                    <span className="font-bold text-slate-900 block">24/7 Support</span>
                    <span className="text-[10px] text-slate-500">Dedicated Tour Manager</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Day-wise Detailed Itinerary */}
            <div className="space-y-4">
              <h2 className="text-xl font-black text-slate-900">Day-wise Detailed Itinerary</h2>
              <div className="space-y-3">
                {pkg.itinerary.map((dayItem) => {
                  const isOpen = openDay === dayItem.dayNumber;
                  return (
                    <Card key={dayItem.dayNumber} className="bg-white border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                      <button
                        onClick={() => setOpenDay(isOpen ? null : dayItem.dayNumber)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 rounded-xl bg-brand-50 text-brand-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                            Day {dayItem.dayNumber}
                          </span>
                          <span className="font-bold text-sm text-slate-900">{dayItem.title}</span>
                        </div>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 space-y-2">
                          <p>{dayItem.description}</p>
                          <div className="flex gap-3 text-[11px] font-semibold text-brand-700 pt-1">
                            <span>🏨 Stay: {dayItem.hotel || '4-Star Resort'}</span>
                            <span>🍽️ Meals: {dayItem.meals?.join(', ') || 'Breakfast & Dinner'}</span>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Booking Widget */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-white rounded-3xl border-slate-200 shadow-xl sticky top-24 space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Starting Price</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-black text-slate-900">{formatCurrency(pkg.startingPrice)}</span>
                  <span className="text-xs text-slate-500 font-medium">/ person</span>
                </div>
              </div>

              {/* Traveller Quantity Counter */}
              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-slate-700 block">Number of Adults</label>
                <div className="flex items-center space-x-3 bg-slate-50 p-2 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setSelectedTravellers(Math.max(1, selectedTravellers - 1))}
                    className="w-8 h-8 rounded-lg bg-white border font-bold text-slate-700 shadow-xs cursor-pointer"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-slate-900">{selectedTravellers} Adults</span>
                  <button
                    onClick={() => setSelectedTravellers(selectedTravellers + 1)}
                    className="w-8 h-8 rounded-lg bg-white border font-bold text-slate-700 shadow-xs cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Calculation Total */}
              <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5 text-xs border border-slate-200">
                <div className="flex justify-between text-slate-600">
                  <span>Base Price ({selectedTravellers} Pax):</span>
                  <span className="font-semibold text-slate-900">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Taxes & GST:</span>
                  <span className="font-semibold text-emerald-600">INCLUDED</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-slate-900">
                  <span className="font-bold">Total Payable:</span>
                  <span className="text-lg font-black text-brand-700">{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="space-y-2 pt-2">
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  variant="accent"
                  size="lg"
                  className="w-full font-black py-3 text-slate-950 text-sm shadow-md"
                >
                  BOOK THIS HOLIDAY NOW →
                </Button>

                <a
                  href="https://wa.me/918291901377"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-slate-400 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Refundable terms option available</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* Booking Checkout Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="max-w-lg w-full p-6 bg-white rounded-3xl shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-sm"
            >
              ✕
            </button>

            <span className="text-[10px] bg-brand-50 text-brand-700 font-bold px-2.5 py-0.5 rounded-full inline-block mb-2">
              Booking Checkout
            </span>
            <h3 className="font-black text-lg text-slate-900 mb-1">{pkg.name}</h3>
            <p className="text-xs text-slate-500 mb-4">{selectedTravellers} Adults • Total Amount: {formatCurrency(totalPrice)}</p>

            <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Lead Traveller Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold text-slate-800"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={custEmail}
                    onChange={(e) => setCustEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold text-slate-800"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 9876543210"
                    value={custPhone}
                    onChange={(e) => setCustPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold text-slate-800"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-xs">
                  PROCEED TO PAYMENT & CHECKOUT →
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
