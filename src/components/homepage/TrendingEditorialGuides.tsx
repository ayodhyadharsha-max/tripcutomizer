'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Sparkles, ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export const TrendingEditorialGuides: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const editorialGuides = [
    {
      slug: 'thailand-visa-free-for-indians-tour-packages-itinerary-2026-guide',
      title: 'Thailand Visa-Free 2026–2027: 60-Day Rules, Phuket & Bangkok Packages Under ₹25k',
      badge: 'Visa-Free • 60 Days',
      badgeColor: 'bg-emerald-600 text-white font-bold',
      location: 'Phuket, Krabi, Bangkok & Pattaya',
      duration: '5D / 4N',
      price: '₹21,999',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'auli-skiing-tour-packages-ropeway-ticket-booking-winter-guide',
      title: 'Auli Skiing & Tour Packages 2026–2027: Joshimath Ropeway, Snow Slopes & Delhi Itinerary',
      badge: 'Ski Season • Dec–Feb',
      badgeColor: 'bg-cyan-600 text-white font-bold',
      location: 'Auli & Joshimath, Uttarakhand',
      duration: '5D / 4N',
      price: '₹12,499',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'christmas-vacation-packages-india-best-places-to-visit-2026-guide',
      title: 'Christmas Vacation 2026: 7 Best Places to Celebrate Dec 25 Long Weekend in India',
      badge: 'Christmas Weekend • Dec 25',
      badgeColor: 'bg-emerald-600 text-white font-bold',
      location: 'Goa, Gulmarg, Manali & Kerala',
      duration: '3D to 5D',
      price: '₹10,999',
      image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'dubai-shopping-festival-2026-dates-flight-packages-guide',
      title: 'Dubai Shopping Festival (DSF) 2026-2027: Dates, Mega Sales & Direct Flight Packages',
      badge: 'DSF 2026-2027 Live',
      badgeColor: 'bg-amber-500 text-slate-950 font-black',
      location: 'Dubai & UAE (Direct Flights)',
      duration: '5D / 4N',
      price: '₹36,999',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'top-10-new-year-2027-travel-packages-india-abroad-guide',
      title: 'Top 10 Places to Celebrate New Year 2027: Goa, Dubai, Thailand, Kashmir & Bali',
      badge: 'New Year 2027 Peak',
      badgeColor: 'bg-rose-600 text-white font-bold',
      location: 'India & International Hotspots',
      duration: '4D to 6D',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
      title: 'Gulmarg Gondola Booking 2026: Phase 1 & 2 Rates, Snow Dates & Kashmir Tour Guide',
      badge: 'Snow Season • Dec–Feb',
      badgeColor: 'bg-sky-600 text-white',
      location: 'Gulmarg & Srinagar, Kashmir',
      duration: '5D / 4N',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
      title: 'Sunburn Goa 2026: Official Dates, Tickets, Venue, Christmas & New Year Beach Guide',
      badge: 'Festive Peak • Dec 28–31',
      badgeColor: 'bg-emerald-600 text-white',
      location: 'Vagator & North Goa Beaches',
      duration: '4D / 3N',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'rann-utsav-2026-dates-tent-city-package-price-booking-guide',
      title: 'Rann Utsav 2026–2027: Official Dates, Tent City Price & Full Moon Schedule',
      badge: 'Season Live • Nov 1',
      badgeColor: 'bg-amber-600 text-white',
      location: 'Dhordo White Desert, Kutch',
      duration: '4D / 3N',
      price: '₹14,500',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
      title: 'Pushkar Mela 2026: Official Dates, Event Schedule & Luxury Tent Camp Rates',
      badge: 'Trending • Nov 20–28',
      badgeColor: 'bg-orange-600 text-white',
      location: 'Pushkar Fairgrounds, Rajasthan',
      duration: '4D / 3N',
      price: '₹11,999',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'top-10-best-winter-destinations-2026',
      title: 'Top 10 Best Winter Holiday Destinations 2026–2027: Kashmir, Dubai, Goa & Manali',
      badge: 'Winter 2026–2027 • Top 10',
      badgeColor: 'bg-sky-600 text-white font-bold',
      location: 'Domestic Snow & Tropical Escapes',
      duration: '5D to 6D',
      price: '₹13,999',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=600&auto=format&fit=crop',
    },
    {
      slug: 'varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide',
      title: 'Dev Deepawali Varanasi 2026: Official Date, Ghats Schedule & Ganga Boat Booking',
      badge: 'Kartik Purnima • Nov 28',
      badgeColor: 'bg-amber-600 text-white font-bold',
      location: 'Varanasi Ghats, Uttar Pradesh',
      duration: '3D / 4N',
      price: '₹8,999',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3 px-1">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Trending Festivals &amp; Peak Seasonal Guides</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trending Travel Stories &amp; Festival Guides
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            <Link
              href="/blog"
              prefetch={true}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors mr-1 group"
            >
              <span>View All ({editorialGuides.length})</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous Stories"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 bg-white hover:bg-amber-500 hover:text-white text-slate-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next Stories"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 bg-white hover:bg-amber-500 hover:text-white text-slate-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider Track with Side Floating Arrows */}
        <div className="relative group/slider px-1">
          {/* Left Floating Arrow on Desktop */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white hover:bg-amber-500 hover:text-white text-slate-800 border border-slate-200 shadow-xl items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Floating Arrow on Desktop */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white hover:bg-amber-500 hover:text-white text-slate-800 border border-slate-200 shadow-xl items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Horizontal Scroll Track - Guaranteed Single Row (No Wrapping) */}
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto scroll-smooth py-2 px-1 no-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {editorialGuides.map((guide, idx) => (
              <div
                key={idx}
                className="w-[260px] sm:w-[290px] lg:w-[310px] flex-none shrink-0 snap-start"
              >
                <Card
                  className="group/card h-full overflow-hidden rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
                >
                  {/* Compact Thumbnail (h-36) */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 290px, 310px"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider ${guide.badgeColor}`}>
                        {guide.badge}
                      </span>
                    </div>

                    {/* Price Pill */}
                    <div className="absolute bottom-2.5 right-2.5 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                      From {guide.price}
                    </div>
                  </div>

                  {/* Compact Body */}
                  <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
                        <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                        <span className="truncate">{guide.location}</span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover/card:text-amber-700 transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                    </div>

                    <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-500">{guide.duration}</span>
                      <Link
                        href={`/blog/${guide.slug}`}
                        prefetch={true}
                        className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800"
                      >
                        <span>Read &rarr;</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
