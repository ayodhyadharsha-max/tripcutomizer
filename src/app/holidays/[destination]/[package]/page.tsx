'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DEMO_PACKAGES, HolidayPackage } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import {
  Star, Clock, MapPin, CheckCircle2, ChevronRight, ChevronDown, ChevronUp,
  Hotel, Plane, Utensils, ShieldCheck, MessageCircle, Share2, Download,
  PhoneCall, Sparkles, Tag, Check, Cross, X, Car, Info, Users, ArrowRight,
  Sparkle, CheckCircle, XCircle, FileText
} from 'lucide-react';

export default function PackageDetailPage({ params }: { params: { destination: string; package: string } }) {
  const router = useRouter();
  const { user, login } = useAuth();

  // Resolve package data or fallback
  const pkg: HolidayPackage = DEMO_PACKAGES.find((p) => p.slug === params.package) || DEMO_PACKAGES[0];

  // Active Main Sub-Tab State
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'summary' | 'highlights'>('itinerary');

  // Itinerary Tab State
  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [activeDayFilter, setActiveDayFilter] = useState<number | 'all'>('all');

  // Inclusions Tab Filter
  const [inclusionCategory, setInclusionCategory] = useState<'all' | 'hotels' | 'sightseeing' | 'meals' | 'transfers' | 'exclusions'>('all');

  // Pricing & Tier State
  const [tourTier, setTourTier] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');
  const [selectedTravellers, setSelectedTravellers] = useState(2);

  // Callback Form State
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  // Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [custName, setCustName] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [custPhone, setCustPhone] = useState('');

  // Toast / Share State
  const [shareToast, setShareToast] = useState(false);

  useEffect(() => {
    if (user) {
      setCustName(user.name || '');
      setCustEmail(user.email || '');
      setCustPhone(user.phone || '');
    }
  }, [user]);

  // Pricing calculations based on tier
  const tierMultiplier = tourTier === 'standard' ? 0.9 : tourTier === 'deluxe' ? 1.0 : 1.25;
  const basePricePerPerson = Math.round(pkg.startingPrice * tierMultiplier);
  const originalPricePerPerson = pkg.discountPrice ? Math.round(pkg.discountPrice * tierMultiplier) : Math.round(basePricePerPerson * 1.18);
  const discountPercent = Math.round(((originalPricePerPerson - basePricePerPerson) / originalPricePerPerson) * 100);
  const totalPrice = basePricePerPerson * selectedTravellers;
  const rewardPoints = Math.round(basePricePerPerson * 0.01);

  // Fallback Gallery Images for 4-image grid
  const galleryImages = [
    pkg.heroImage,
    pkg.gallery?.[0] || '/destinations/kashmir.jpg',
    pkg.gallery?.[1] || '/destinations/ayodhya-varanasi.jpg',
    pkg.gallery?.[2] || '/destinations/rajasthan.jpg',
  ];

  // Day toggle handler
  const toggleDay = (dayNum: number) => {
    if (openDays.includes(dayNum)) {
      setOpenDays(openDays.filter((d) => d !== dayNum));
    } else {
      setOpenDays([...openDays, dayNum]);
    }
  };

  const expandAllDays = () => {
    setOpenDays(pkg.itinerary.map((item) => item.dayNumber));
  };

  const collapseAllDays = () => {
    setOpenDays([]);
  };

  // Handle Callback Request
  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone) return;
    setCallbackSuccess(true);
    setTimeout(() => {
      setCallbackSuccess(false);
      setCallbackName('');
      setCallbackPhone('');
    }, 5000);
  };

  // Handle Booking Modal Submit
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (custEmail && custPhone) {
      login(custEmail, custPhone, custName);
    }
    setIsBookingModalOpen(false);
    router.push(`/booking/checkout?slug=${pkg.slug}&pax=${selectedTravellers}&tier=${tourTier}`);
  };

  // Handle Share Click
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pkg.name,
        text: `Check out this holiday package: ${pkg.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 3000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 pb-24 text-slate-800">
      <Container>
        {/* Toast Notification */}
        {shareToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Link copied to clipboard!</span>
          </div>
        )}

        {/* 1. BREADCRUMB NAVIGATION */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center space-x-2 text-xs text-slate-500 mb-4 font-medium">
          <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/holidays" className="hover:text-brand-600 transition-colors">Holidays</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href={`/holidays?region=${encodeURIComponent(pkg.region || 'India')}`} className="hover:text-brand-600 transition-colors">
            {pkg.country} Tour Packages
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href={`/holidays/${pkg.destinationSlug}`} className="hover:text-brand-600 transition-colors">
            {pkg.destination} Packages
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-bold text-slate-800 line-clamp-1">{pkg.name}</span>
        </nav>

        {/* 2. HEADER TOP INFO & BADGES */}
        <div className="mb-6 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-slate-900 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {pkg.durationNights}N / {pkg.durationDays}D
            </span>
            <span className="bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs px-3 py-1 rounded-full flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-600 fill-amber-500" />
              <span>Customized Tour</span>
            </span>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs px-3 py-1 rounded-full flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Instant Confirmation Available</span>
            </span>
          </div>

          {/* Title and Reviews Card Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {pkg.name}
              </h1>
              {/* Hotel / City Night Breakdown Pill */}
              {pkg.hotels && pkg.hotels.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 mt-2">
                  {pkg.hotels.map((h, idx) => (
                    <span key={idx} className="flex items-center space-x-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3 h-3 text-brand-600" />
                      <span>{h.nights}N {h.city}</span>
                      {idx < pkg.hotels.length - 1 && <span className="text-slate-300 ml-1">|</span>}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Review Badge Card */}
            <div className="shrink-0 bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black text-base flex items-center justify-center shadow-xs">
                {pkg.rating}
              </div>
              <div>
                <div className="flex items-center space-x-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">
                  Verified Ratings ({pkg.reviewsCount}+ Reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Key Inclusion Icons Bar */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Flights</span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {pkg.flightsIncluded ? '✓ Included' : 'Optional / Add-on'}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Hotel className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Hotels Stay</span>
                <span className="text-[10px] font-semibold text-slate-500">{pkg.hotelCategory} Category</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Meals Plan</span>
                <span className="text-[10px] font-semibold text-slate-500">{pkg.mealPlan}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Transfers</span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {pkg.transfersIncluded ? '✓ Private AC Cab' : 'Standard Cab'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 4-IMAGE GRID GALLERY */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-3xl overflow-hidden shadow-md">
          {/* Main Hero Image (Left 8 cols) */}
          <div className="lg:col-span-8 relative h-72 sm:h-96 lg:h-[400px] w-full bg-slate-200 group overflow-hidden">
            <Image
              src={galleryImages[0]}
              alt={pkg.name}
              fill
              unoptimized
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Destination Photography</span>
            </div>
          </div>

          {/* Right 3 Stacked Grid Images (Right 4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-3 h-36 lg:h-[400px]">
            {galleryImages.slice(1, 4).map((imgUrl, i) => (
              <div key={i} className="relative h-full w-full bg-slate-200 overflow-hidden group">
                <Image
                  src={imgUrl}
                  alt={`${pkg.name} view ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {i === 2 && (
                  <button
                    onClick={handleShare}
                    className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] hover:bg-slate-950/50 transition-colors flex flex-col items-center justify-center text-white p-2 text-center"
                  >
                    <Sparkles className="w-5 h-5 mb-1 text-amber-400" />
                    <span className="font-black text-xs">View Full Gallery</span>
                    <span className="text-[10px] text-slate-200">+{pkg.highlights.length * 3} Photos</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. MAIN CONTENT LAYOUT: TABS & DETAILS (LEFT) vs STICKY SIDEBAR (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTAINER (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* SUB-NAVIGATION TAB BAR */}
            <div className="sticky top-16 z-30 bg-white border border-slate-200/80 rounded-2xl shadow-sm p-1.5 flex items-center justify-between overflow-x-auto scrollbar-none">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'itinerary'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  🗺️ Detailed Itinerary
                </button>

                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'inclusions'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  ✅ Inclusions & Exclusions
                </button>

                <button
                  onClick={() => setActiveTab('summary')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'summary'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  📋 Tour Summary
                </button>

                <button
                  onClick={() => setActiveTab('highlights')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'highlights'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  ⭐ Key Highlights
                </button>
              </div>

              {/* Action Buttons: Share & Download */}
              <div className="hidden sm:flex items-center space-x-2 pl-2 border-l border-slate-200">
                <button
                  onClick={handleShare}
                  title="Share Package"
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => window.print()}
                  title="Download Itinerary"
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: ITINERARY */}
            {activeTab === 'itinerary' && (
              <div className="space-y-6 animate-in fade-in">
                {/* Header Controls for Itinerary */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">Day by Day Itinerary</h2>
                    <p className="text-xs text-slate-500">Explore complete daily plan with stays, transfers & meals</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold">
                    <button
                      onClick={expandAllDays}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Expand All
                    </button>
                    <button
                      onClick={collapseAllDays}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* Itinerary Layout: Left Day Selector Sidebar + Accordion Cards */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Day Numbers Selector */}
                  <div className="md:col-span-3 space-y-2">
                    <div className="bg-white p-3 rounded-2xl border border-slate-200/80 sticky top-36 space-y-1">
                      <span className="text-[10px] font-extrabold text-slate-400 block uppercase tracking-wider mb-2 px-2">
                        Select Day
                      </span>

                      <button
                        onClick={() => setActiveDayFilter('all')}
                        className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                          activeDayFilter === 'all'
                            ? 'bg-slate-900 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>View All Days</span>
                        <span className="text-[10px] opacity-75">{pkg.itinerary.length} Days</span>
                      </button>

                      {pkg.itinerary.map((item) => (
                        <button
                          key={item.dayNumber}
                          onClick={() => {
                            setActiveDayFilter(item.dayNumber);
                            if (!openDays.includes(item.dayNumber)) {
                              setOpenDays([...openDays, item.dayNumber]);
                            }
                          }}
                          className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                            activeDayFilter === item.dayNumber
                              ? 'bg-brand-600 text-white shadow-xs'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <span className={`w-5 h-5 rounded-md text-[10px] font-black flex items-center justify-center shrink-0 ${
                              activeDayFilter === item.dayNumber ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                            }`}>
                              D{item.dayNumber}
                            </span>
                            <span className="truncate">{item.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Accordion Day Cards */}
                  <div className="md:col-span-9 space-y-4">
                    {pkg.itinerary
                      .filter((item) => activeDayFilter === 'all' || activeDayFilter === item.dayNumber)
                      .map((dayItem) => {
                        const isOpen = openDays.includes(dayItem.dayNumber);
                        return (
                          <Card key={dayItem.dayNumber} className="bg-white border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all">
                            {/* Card Header Header */}
                            <button
                              onClick={() => toggleDay(dayItem.dayNumber)}
                              className="w-full p-4 sm:p-5 flex items-start justify-between text-left hover:bg-slate-50/80 transition-colors cursor-pointer"
                            >
                              <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 text-brand-700 font-black text-xs flex flex-col items-center justify-center shrink-0">
                                  <span>DAY</span>
                                  <span className="text-sm leading-none">{dayItem.dayNumber}</span>
                                </div>
                                <div className="space-y-1">
                                  <h3 className="font-black text-sm sm:text-base text-slate-900">
                                    {dayItem.title}
                                  </h3>
                                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500">
                                    <span className="flex items-center space-x-1">
                                      <Hotel className="w-3.5 h-3.5 text-brand-600" />
                                      <span>Stay: {dayItem.hotel || '3/4 Star Resort'}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                                      <span>Meals: {dayItem.meals?.join(', ') || 'Breakfast & Dinner'}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="pl-2 pt-1 text-slate-400">
                                {isOpen ? <ChevronUp className="w-5 h-5 text-brand-600" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </button>

                            {/* Card Content Body */}
                            {isOpen && (
                              <div className="px-5 pb-5 pt-3 border-t border-slate-100 bg-slate-50/40 text-xs text-slate-600 space-y-4">
                                <p className="leading-relaxed text-slate-700">{dayItem.description}</p>

                                {/* Activity / Highlights Bullets */}
                                {dayItem.activities && dayItem.activities.length > 0 && (
                                  <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200/80">
                                    <span className="font-bold text-slate-900 text-xs block">Key Activities & Sightseeing:</span>
                                    <ul className="space-y-1.5">
                                      {dayItem.activities.map((act, actIdx) => (
                                        <li key={actIdx} className="flex items-start space-x-2 text-slate-700">
                                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                          <span>{act}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Stay & Transfer Details Badge */}
                                <div className="flex flex-wrap items-center gap-4 text-slate-800 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                                  <div className="flex items-center space-x-1.5 font-bold">
                                    <Hotel className="w-4 h-4 text-emerald-700" />
                                    <span>Hotel Check-in: {dayItem.hotel || 'Premium Stay'}</span>
                                  </div>
                                  <div className="flex items-center space-x-1.5 font-bold">
                                    <Car className="w-4 h-4 text-emerald-700" />
                                    <span>Transfers: {dayItem.transfers || 'Private AC Vehicle'}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Card>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: INCLUSIONS & EXCLUSIONS */}
            {activeTab === 'inclusions' && (
              <div className="space-y-6 animate-in fade-in">
                {/* Inclusion Category Filter Tabs */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
                  {[
                    { id: 'all', label: 'All Inclusions' },
                    { id: 'hotels', label: '🏨 Hotel Details' },
                    { id: 'sightseeing', label: '🏛️ Sightseeing' },
                    { id: 'meals', label: '🍽️ Meals & Transfers' },
                    { id: 'exclusions', label: '❌ Exclusions' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setInclusionCategory(cat.id as any)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        inclusionCategory === cat.id
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Accommodations Card Details */}
                {(inclusionCategory === 'all' || inclusionCategory === 'hotels') && (
                  <Card className="p-5 bg-white border-slate-200/80 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h3 className="font-black text-slate-900 text-base flex items-center space-x-2">
                        <Hotel className="w-5 h-5 text-brand-600" />
                        <span>Included Hotels & Accommodations</span>
                      </h3>
                      <Badge variant="blue">{pkg.hotelCategory} Category</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.hotels && pkg.hotels.length > 0 ? (
                        pkg.hotels.map((h, i) => (
                          <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-black text-sm text-slate-900">{h.name}</span>
                              <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-md">
                                {h.rating}
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 flex items-center space-x-2">
                              <span>📍 {h.city}</span>
                              <span>•</span>
                              <span>🌙 {h.nights} Nights Stay</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                          <span className="font-bold text-slate-900 text-xs">Premium 3/4-Star Deluxe Resorts</span>
                          <p className="text-xs text-slate-500">Handpicked comfortable stays with modern amenities and daily breakfast.</p>
                        </div>
                      )}
                    </div>
                  </Card>
                )}

                {/* What your tour price includes (BLUE BOX WITH GREEN CHECKMARKS) */}
                {(inclusionCategory === 'all' || inclusionCategory === 'sightseeing' || inclusionCategory === 'meals') && (
                  <div className="p-6 bg-blue-50/70 border border-blue-200 rounded-3xl space-y-4">
                    <h3 className="font-black text-blue-950 text-base flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>What your tour price includes?</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-blue-100 text-slate-800 font-semibold shadow-2xs">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What your tour price does NOT include (ORANGE BOX WITH RED CROSSMARKS) */}
                {(inclusionCategory === 'all' || inclusionCategory === 'exclusions') && (
                  <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-3xl space-y-4">
                    <h3 className="font-black text-amber-950 text-base flex items-center space-x-2">
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span>What your tour price does not include?</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {pkg.exclusions.map((exc, i) => (
                        <div key={i} className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-amber-100 text-slate-700 font-semibold shadow-2xs">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 3: SUMMARY */}
            {activeTab === 'summary' && (
              <Card className="p-6 bg-white border-slate-200/80 rounded-3xl space-y-6 animate-in fade-in">
                <div className="space-y-2">
                  <h3 className="font-black text-lg text-slate-900">Tour Summary & Overview</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Experience an unforgettable journey across {pkg.destination}. Designed specifically for family travel, couples, and heritage enthusiasts with 100% verified hotels, private cabs, and dedicated tour manager support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Departure City</span>
                    <span className="font-bold text-sm text-slate-900">{pkg.departureCity || 'Multiple Departure Cities'}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Theme</span>
                    <span className="font-bold text-sm text-slate-900">{pkg.theme}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Meal Plan</span>
                    <span className="font-bold text-sm text-slate-900">{pkg.mealPlan}</span>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="p-4 bg-slate-100 rounded-2xl text-xs space-y-2">
                  <span className="font-bold text-slate-900 flex items-center space-x-1">
                    <Info className="w-4 h-4 text-brand-600" />
                    <span>Important Information & Guidelines:</span>
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li>Government approved photo ID proof is mandatory at check-in.</li>
                    <li>Flexible booking options with low initial token deposit available.</li>
                    <li>24/7 dedicated local assistance line provided upon booking confirmation.</li>
                  </ul>
                </div>
              </Card>
            )}

            {/* TAB CONTENT 4: HIGHLIGHTS */}
            {activeTab === 'highlights' && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="font-black text-lg text-slate-900">Key Highlights of this Tour</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.highlights.map((hl, i) => (
                    <Card key={i} className="p-5 bg-white border-slate-200/80 rounded-2xl flex items-start space-x-3 shadow-xs">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center shrink-0">
                        #{i + 1}
                      </div>
                      <div>
                        <span className="font-black text-sm text-slate-900 block mb-1">{hl}</span>
                        <p className="text-xs text-slate-500">Includes guided assistance and pre-arranged entry tickets.</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT CONTAINER: STICKY SIDEBAR PRICING & ENQUIRY CARD (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-white rounded-3xl border-slate-200/80 shadow-xl sticky top-20 space-y-5">
              
              {/* Tour Tier Selector */}
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold text-slate-400 block uppercase tracking-wider">
                  Select Hotel & Package Tier
                </span>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => setTourTier('standard')}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      tourTier === 'standard' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    3★ Standard
                  </button>
                  <button
                    onClick={() => setTourTier('deluxe')}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      tourTier === 'deluxe' ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    4★ Deluxe
                  </button>
                  <button
                    onClick={() => setTourTier('luxury')}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      tourTier === 'luxury' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    5★ Luxury
                  </button>
                </div>
              </div>

              {/* Price Display Block */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-400 line-through font-semibold">
                    {formatCurrency(originalPricePerPerson)}
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                    {discountPercent}% OFF
                  </span>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-black text-brand-700">{formatCurrency(basePricePerPerson)}</span>
                  <span className="text-xs text-slate-500 font-semibold">/ adult</span>
                </div>
                <span className="text-[10px] text-slate-400 block font-medium">Inclusive of all taxes & fees</span>
              </div>

              {/* Traveller Counter */}
              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-slate-700 flex justify-between">
                  <span>Number of Adults</span>
                  <span className="text-slate-500 font-normal">Min 1 Person</span>
                </label>
                <div className="flex items-center space-x-3 bg-slate-50 p-2 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setSelectedTravellers(Math.max(1, selectedTravellers - 1))}
                    className="w-8 h-8 rounded-lg bg-white border font-bold text-slate-700 shadow-xs cursor-pointer hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-slate-900">{selectedTravellers} Adults</span>
                  <button
                    onClick={() => setSelectedTravellers(selectedTravellers + 1)}
                    className="w-8 h-8 rounded-lg bg-white border font-bold text-slate-700 shadow-xs cursor-pointer hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="p-3.5 bg-slate-50 rounded-2xl text-xs space-y-1.5 border border-slate-200">
                <div className="flex justify-between text-slate-600">
                  <span>Total Base Price ({selectedTravellers} Pax):</span>
                  <span className="font-bold text-slate-900">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST & Taxes:</span>
                  <span className="font-bold text-emerald-600">INCLUDED</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-slate-900 font-black">
                  <span>Total Payable:</span>
                  <span className="text-lg text-brand-700">{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              {/* Deal Promo Badge */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-amber-600" />
                  <div>
                    <span className="font-black text-amber-900 block">Promo Code: TCTAJ10</span>
                    <span className="text-[10px] text-amber-700 font-medium">Extra 10% instant discount</span>
                  </div>
                </div>
                <Badge variant="gold">Applied</Badge>
              </div>

              {/* Reward Points Badge */}
              <div className="flex items-center space-x-2 text-[11px] text-indigo-700 bg-indigo-50/70 p-2.5 rounded-xl border border-indigo-100 font-bold">
                <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-400" />
                <span>Earn {rewardPoints} tripcustomizer Rewards Points</span>
              </div>

              {/* Primary CTA Buttons */}
              <div className="space-y-2 pt-1">
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  variant="accent"
                  size="lg"
                  className="w-full font-black py-3.5 text-slate-950 text-sm shadow-md cursor-pointer hover:scale-[1.01] transition-transform"
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
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>

              {/* "Want us to call you?" Callback Form Widget */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-brand-600" />
                  <span className="font-black text-xs text-slate-900">Want us to call you back?</span>
                </div>

                {callbackSuccess ? (
                  <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl font-semibold border border-emerald-200">
                    ✓ Request received! Our travel expert will call you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-2 text-xs">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold focus:outline-none focus:border-brand-500"
                    />
                    <div className="flex space-x-2">
                      <input
                        required
                        type="tel"
                        placeholder="Mobile Number"
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold focus:outline-none focus:border-brand-500"
                      />
                      <button
                        type="submit"
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-3 py-2 rounded-xl transition-colors shrink-0 cursor-pointer"
                      >
                        Call Me
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* BOOKING CHECKOUT MODAL */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="max-w-lg w-full p-6 bg-white rounded-3xl shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-sm cursor-pointer p-1"
            >
              ✕
            </button>

            <span className="text-[10px] bg-brand-50 text-brand-700 font-black px-2.5 py-0.5 rounded-full inline-block mb-2 uppercase tracking-wider">
              Booking Confirmation
            </span>
            <h3 className="font-black text-lg text-slate-900 mb-1">{pkg.name}</h3>
            <p className="text-xs text-slate-500 mb-4">{selectedTravellers} Adults • {tourTier.toUpperCase()} Tier • Total: {formatCurrency(totalPrice)}</p>

            <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Lead Traveller Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter full name"
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
                <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-xs cursor-pointer">
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
