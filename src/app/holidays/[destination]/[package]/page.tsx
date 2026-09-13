'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import {
  Star, Clock, MapPin, CheckCircle2, XCircle, ChevronRight, ChevronDown, ChevronUp,
  Hotel, Plane, Utensils, Calendar, ShieldCheck, MessageCircle, Phone, Send, Info
} from 'lucide-react';

export default function PackageDetailPage({ params }: { params: { destination: string; package: string } }) {
  const pkg = DEMO_PACKAGES.find((p) => p.slug === params.package) || DEMO_PACKAGES[0];

  const [openDay, setOpenDay] = useState<number | null>(1);
  const [selectedTravellers, setSelectedTravellers] = useState(2);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const totalPrice = pkg.startingPrice * selectedTravellers;

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
              <span>{pkg.rating} ({pkg.reviewsCount} verified reviews)</span>
            </span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <div className="md:col-span-2 relative h-72 sm:h-96 bg-slate-200">
            <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover" />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-3">
            {pkg.gallery.slice(0, 2).map((img, i) => (
              <div key={i} className="relative h-full w-full bg-slate-200">
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Layout (Itinerary & Details + Sticky Pricing Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Details, Highlights, Itinerary, Hotels */}
          <div className="lg:col-span-8 space-y-8">
            {/* Key Highlights */}
            <Card className="p-6 border-slate-200 bg-white">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Key Trip Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Inclusions & Exclusions */}
            <Card className="p-6 border-slate-200 bg-white">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Package Inclusions & Exclusions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                {/* Inclusions */}
                <div>
                  <h3 className="font-bold text-emerald-700 uppercase tracking-wider mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start space-x-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div>
                  <h3 className="font-bold text-rose-700 uppercase tracking-wider mb-3">What's Excluded</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start space-x-2 text-slate-500">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Day-Wise Expandable Timeline Itinerary */}
            <Card className="p-6 border-slate-200 bg-white">
              <h2 className="text-base font-bold text-slate-900 mb-2">
                Day-by-Day Detailed Itinerary
              </h2>
              <p className="text-xs text-slate-500 mb-6">Click on any day to view activities, meals, transfers and stay info.</p>

              <div className="space-y-3">
                {pkg.itinerary.map((day) => {
                  const isOpen = openDay === day.dayNumber;
                  return (
                    <div
                      key={day.dayNumber}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? null : day.dayNumber)}
                        className={`w-full p-4 text-left flex items-center justify-between transition-colors cursor-pointer ${
                          isOpen ? 'bg-brand-50/70 border-b border-brand-100' : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="bg-brand-500 text-white text-xs font-black px-3 py-1 rounded-xl">
                            Day {day.dayNumber}
                          </span>
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">{day.title}</span>
                        </div>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-brand-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>

                      {isOpen && (
                        <div className="p-5 bg-white space-y-4 text-xs">
                          <p className="text-slate-600 leading-relaxed">{day.description}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl font-semibold text-slate-700">
                            <div className="flex items-center space-x-2">
                              <Utensils className="w-4 h-4 text-brand-500" />
                              <span>Meals: {day.meals.join(', ')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Hotel className="w-4 h-4 text-accent-500" />
                              <span>Hotel: {day.hotel}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Plane className="w-4 h-4 text-emerald-500" />
                              <span>Transfers: {day.transfers}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Hotel Accommodation Specs */}
            <Card className="p-6 border-slate-200 bg-white">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Hotel Stays Included
              </h2>
              <div className="space-y-3">
                {pkg.hotels.map((h, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{h.name}</h3>
                      <p className="text-slate-500 mt-0.5">{h.city} • {h.rating}</p>
                    </div>
                    <span className="bg-brand-50 text-brand-700 font-bold px-3 py-1 rounded-xl">
                      {h.nights} Nights Stay
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* FAQs */}
            <Card className="p-6 border-slate-200 bg-white">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {pkg.faqs.map((faq, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-xs">
                    <p className="font-bold text-slate-900">Q: {faq.question}</p>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Sticky Pricing & Booking Box */}
          <div className="lg:col-span-4">
            <Card className="p-6 border-slate-200 bg-white sticky top-24 shadow-xl space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs text-slate-400 font-bold block uppercase">Starting Price</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-black text-brand-700">{formatCurrency(pkg.startingPrice)}</span>
                  <span className="text-xs text-slate-500 font-medium">/ person</span>
                </div>
                {pkg.discountPrice && (
                  <p className="text-xs text-emerald-600 font-bold mt-1">
                    Special Offer: Save {formatCurrency(pkg.discountPrice - pkg.startingPrice)} per person!
                  </p>
                )}
              </div>

              {/* Travellers Counter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">Number of Travellers</label>
                <div className="flex items-center space-x-3 bg-slate-50 p-2 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setSelectedTravellers(Math.max(1, selectedTravellers - 1))}
                    className="w-8 h-8 rounded-lg bg-white border font-bold text-slate-700 shadow-xs"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-slate-900">{selectedTravellers} Adults</span>
                  <button
                    onClick={() => setSelectedTravellers(selectedTravellers + 1)}
                    className="w-8 h-8 rounded-lg bg-white border font-bold text-slate-700 shadow-xs"
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
                  <span>Taxes & Fees:</span>
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
                  BOOK THIS HOLIDAY NOW
                </Button>

                <a
                  href="https://wa.me/918291901377"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Booking initiated! Reference: TB-${Math.floor(100000 + Math.random() * 900000)}. Proceeding to payment phase.`);
                setIsBookingModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Lead Traveller Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:outline-none" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+91 9876543210" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:outline-none" />
                </div>
              </div>

              <div className="p-3 bg-brand-50 text-brand-800 rounded-xl font-medium text-[11px]">
                Payment will be processed via secure payment gateway in Phase 4.
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 mt-2">
                CONFIRM & PROCEED TO BOOKING →
              </Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
