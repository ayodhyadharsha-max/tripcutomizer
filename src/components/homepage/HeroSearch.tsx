'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface HeroSlide {
  id: number;
  bgImage: string;
  taglineHeading?: string;
  mainTitle: string;
  subtitle: string;
  priceTag: string;
  badgeType: 'hdfc' | 'coupon' | 'discount';
  couponCode?: string;
  couponText?: string;
  discountBadgeText?: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    bgImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2000&auto=format&fit=crop',
    taglineHeading: 'CHASE THE AURORA. CRUISE THE COAST. MEET SANTA CLAUS.',
    mainTitle: 'Experience Europe Beyond the Postcards',
    subtitle: 'Packages starting @ ₹ 2,33,000.00',
    priceTag: '₹ 2,33,000.00',
    badgeType: 'hdfc',
  },
  {
    id: 2,
    bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
    mainTitle: 'Unforgettable Taj experiences across India',
    subtitle: 'Holiday packages starting at ₹ 20,700.00',
    priceTag: '₹ 20,700.00',
    badgeType: 'coupon',
    couponCode: 'TCTAJ10',
    couponText: 'Unlock an Extra 10% OFF',
  },
  {
    id: 3,
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop',
    taglineHeading: 'EXOTIC TROPICAL ISLAND ESCAPES',
    mainTitle: 'Luxury Overwater Villa Resorts & Beach Holidays',
    subtitle: 'Holiday packages starting at ₹ 35,500.00',
    priceTag: '₹ 35,500.00',
    badgeType: 'discount',
    discountBadgeText: 'Flat 25% OFF on Early Bird Maldives & Bali Packages',
  },
];

const searchPlaceholders = [
  'Search "Andaman"',
  'Search "Europe"',
  'Search "Japan"',
  'Search "Taj Hotels"',
  'Search "Kerala"',
  'Search "Dubai"',
  'Search "Maldives"',
  'Search "Kashmir"',
];

export const HeroSearch: React.FC = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Auto slide rotation
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  // Placeholder rotation interval
  useEffect(() => {
    const placeholderTimer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(placeholderTimer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/holidays?destination=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      // Default fallback search
      const currentHint = searchPlaceholders[placeholderIndex].replace(/Search "|"$/g, '');
      router.push(`/holidays?destination=${encodeURIComponent(currentHint)}`);
    }
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
      {/* Banner Carousel Box */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center bg-slate-900 group">
        {/* Background Image Carousel with Fade Animation */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          >
            {/* Dark overlay gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-950/50" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 z-30 p-3 rounded-full bg-black/40 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm opacity-80 hover:opacity-100 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNextSlide}
          aria-label="Next Slide"
          className="absolute right-4 z-30 p-3 rounded-full bg-black/40 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm opacity-80 hover:opacity-100 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Content */}
        <div className="relative z-20 text-center text-white px-6 sm:px-12 max-w-4xl mx-auto pb-20">
          {/* Tagline / Subtitle */}
          {activeSlide.taglineHeading && (
            <h2 className="text-sm sm:text-base lg:text-lg font-black tracking-widest uppercase text-amber-300 drop-shadow-md mb-2 font-sans">
              {activeSlide.taglineHeading}
            </h2>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-lg mb-4">
            {activeSlide.mainTitle}
          </h1>

          {/* Price Badge / Subtitle */}
          <div className="inline-block bg-black/50 backdrop-blur-md border border-amber-400/80 rounded-2xl px-6 py-2 mb-6">
            <span className="text-lg sm:text-xl font-bold text-amber-300">
              {activeSlide.subtitle}
            </span>
          </div>

          {/* Special Offer Badges */}
          <div className="flex justify-center items-center mt-2">
            {activeSlide.badgeType === 'hdfc' && (
              <div className="inline-flex items-center gap-3 bg-white/95 text-slate-900 px-5 py-2.5 rounded-2xl shadow-xl border border-white/40">
                <div className="flex items-center gap-1.5 font-bold text-blue-900 border-r border-slate-300 pr-3">
                  <span className="bg-blue-900 text-white font-black text-xs px-1.5 py-0.5 rounded">
                    HDFC
                  </span>
                  <span className="text-xs uppercase tracking-wider font-extrabold">
                    BANK
                  </span>
                </div>
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  FESTIVE TREATS
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                  Up to <strong className="text-blue-900">₹12,000 Instant Discount*</strong> with HDFC Bank Cards
                </span>
              </div>
            )}

            {activeSlide.badgeType === 'coupon' && (
              <div className="inline-flex items-center bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/50">
                <div className="px-5 py-3 border-r-2 border-dashed border-slate-300 text-center">
                  <span className="block text-xs font-bold text-slate-600 uppercase">
                    Unlock an Extra
                  </span>
                  <span className="text-xl font-black text-blue-900">
                    10% OFF
                  </span>
                </div>
                <div className="px-5 py-3 bg-blue-50 text-center">
                  <span className="block text-[11px] font-bold text-slate-500 uppercase">
                    Apply Code
                  </span>
                  <span className="text-xl font-black text-blue-800 tracking-wider">
                    {activeSlide.couponCode}
                  </span>
                </div>
              </div>
            )}

            {activeSlide.badgeType === 'discount' && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-2xl shadow-xl font-bold text-xs sm:text-sm">
                <span>✨</span>
                <span>{activeSlide.discountBadgeText}</span>
              </div>
            )}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Floating Search Bar (Centered at Bottom) */}
        <div className="absolute bottom-5 z-30 w-full max-w-xl px-4">
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between border border-slate-100 hover:shadow-brand-500/20 transition-all"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholders[placeholderIndex]}
              className="w-full text-slate-800 text-base sm:text-lg font-medium placeholder-slate-400 bg-transparent outline-none pr-4"
            />
            <button
              type="submit"
              aria-label="Search"
              className="bg-brand-600 hover:bg-brand-700 text-white rounded-full p-3.5 flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
