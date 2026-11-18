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
      const scrollAmount = direction === 'left' ? -360 : 360;
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
      duration: '5 Days / 4 Nights',
      price: '₹21,999',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      summary: 'Zero visa fee! Direct flights from DEL, BOM, BLR. Phi Phi island speedboat, 4-star beach resorts & Indian meals.',
    },
    {
      slug: 'auli-skiing-tour-packages-ropeway-ticket-booking-winter-guide',
      title: 'Auli Skiing & Tour Packages 2026–2027: Joshimath Ropeway, Snow Slopes & Delhi Itinerary',
      badge: 'Ski Season • Dec–Feb',
      badgeColor: 'bg-cyan-600 text-white font-bold',
      location: 'Auli & Joshimath, Uttarakhand',
      duration: '5 Days / 4 Nights',
      price: '₹12,499',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
      summary: 'Asia’s 4.15 km cable car tickets, beginner ski instructors, Nanda Devi views, 4x4 snow tire chains & GMVN stays.',
    },
    {
      slug: 'christmas-vacation-packages-india-best-places-to-visit-2026-guide',
      title: 'Christmas Vacation 2026: 7 Best Places to Celebrate Dec 25 Long Weekend in India',
      badge: 'Christmas Long Weekend • Dec 25',
      badgeColor: 'bg-emerald-600 text-white font-bold',
      location: 'Goa, Gulmarg, Manali, Kerala & Pondicherry',
      duration: '3 to 5 Days',
      price: '₹10,999',
      image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600&auto=format&fit=crop',
      summary: 'Dec 25 Friday long weekend escapes: Goa beach parties & midnight mass, Gulmarg snow wonderland, Manali & Kerala backwaters.',
    },
    {
      slug: 'dubai-shopping-festival-2026-dates-flight-packages-guide',
      title: 'Dubai Shopping Festival (DSF) 2026-2027: Dates, Mega Sales & Direct Flight Packages',
      badge: 'DSF 2026-2027 Live',
      badgeColor: 'bg-amber-500 text-slate-950 font-black',
      location: 'Dubai & UAE (AMD, BOM, DEL Flights)',
      duration: '5 Days / 4 Nights',
      price: '₹36,999',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      summary: 'Up to 90% discount sales, Emirates & IndiGo direct flights, desert safari, Burj Khalifa & 4-star verified stays.',
    },
    {
      slug: 'top-10-new-year-2027-travel-packages-india-abroad-guide',
      title: 'Top 10 Places to Celebrate New Year 2027: Goa, Dubai, Thailand, Kashmir & Bali',
      badge: 'New Year 2027 Peak',
      badgeColor: 'bg-rose-600 text-white font-bold',
      location: 'India & International Hotspots',
      duration: '4 to 6 Days',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
      summary: 'Goa Sunburn countdown, Dubai Burj Khalifa fireworks, Thailand beach parties, Kashmir snow & early-bird rates.',
    },
    {
      slug: 'gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
      title: 'Gulmarg Gondola Booking 2026: Phase 1 & 2 Rates, Snow Dates & Kashmir Tour Guide',
      badge: 'Snow Season • Dec–Feb',
      badgeColor: 'bg-sky-600 text-white',
      location: 'Gulmarg & Srinagar, Kashmir',
      duration: '5 Days / 4 Nights',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
      summary: 'Gondola online tickets, Apharwat Peak snow, Dal Lake houseboats, ski slopes & 5D/4N holiday itineraries.',
    },
    {
      slug: 'sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
      title: 'Sunburn Goa 2026: Official Dates, Tickets, Venue, Christmas & New Year Beach Guide',
      badge: 'Festive Peak • Dec 28–31',
      badgeColor: 'bg-emerald-600 text-white',
      location: 'Vagator & North Goa Beaches',
      duration: '4 Days / 3 Nights',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      summary: 'Early bird festival passes, Christmas midnight mass in Old Goa, beach shacks, fireworks & resort deals.',
    },
    {
      slug: 'rann-utsav-2026-dates-tent-city-package-price-booking-guide',
      title: 'Rann Utsav 2026–2027: Official Dates, Tent City Price & Full Moon Schedule',
      badge: 'Season Live • Nov 1',
      badgeColor: 'bg-amber-600 text-white',
      location: 'Dhordo White Desert, Kutch, Gujarat',
      duration: '4 Days / 3 Nights',
      price: '₹14,500',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=600&auto=format&fit=crop',
      summary: 'Dhordo Tent City booking, full moon Purnima calendar, online border permits & Kutch tour itineraries.',
    },
    {
      slug: 'pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
      title: 'Pushkar Mela 2026: Official Dates, Event Schedule & Luxury Tent Camp Rates',
      badge: 'Trending • Nov 20–28',
      badgeColor: 'bg-orange-600 text-white',
      location: 'Pushkar Fairgrounds, Rajasthan',
      duration: '4 Days / 3 Nights',
      price: '₹11,999',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop',
      summary: 'World’s biggest camel fair, Kartik Purnima Maha Aarti at Pushkar Lake, luxury Swiss camps & hot air balloons.',
    },
    {
      slug: 'top-10-best-winter-destinations-2026',
      title: 'Top 10 Best Winter Holiday Destinations 2026–2027: Kashmir, Dubai, Goa & Manali',
      badge: 'Winter 2026–2027 • Top 10',
      badgeColor: 'bg-sky-600 text-white font-bold',
      location: 'Domestic Snow & Tropical Escapes',
      duration: '5 to 6 Days',
      price: '₹13,999',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=600&auto=format&fit=crop',
      summary: 'Kashmir Gulmarg skiing, Dubai Shopping Festival, Sunburn Goa, Manali snowfall & Rann Utsav Kutch glamping.',
    },
    {
      slug: 'varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide',
      title: 'Dev Deepawali Varanasi 2026: Official Date, Ghats Schedule & Ganga Boat Booking',
      badge: 'Kartik Purnima • Nov 28',
      badgeColor: 'bg-amber-600 text-white font-bold',
      location: 'Varanasi Ghats, Uttar Pradesh',
      duration: '3 to 4 Days',
      price: '₹8,999',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
      summary: '15+ lakh diyas across 84 ghats, Dashashwamedh Maha Aarti, Chet Singh 3D laser show & private boat slots.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden">
      <Container>
        {/* Section Header with Slider Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 px-1">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Trending Festivals &amp; Peak Seasonal Guides</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trending Travel Stories &amp; Festival Guides
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl">
              Handpicked travel guides for destinations whose travel seasons are commencing right now. Get verified itineraries, hotel rates, and insider hacks.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <Link
              href="/blog"
              prefetch={true}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors mr-2 group"
            >
              <span>View All Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous Stories"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-amber-50 hover:border-amber-400 text-slate-700 hover:text-amber-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next Stories"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-amber-50 hover:border-amber-400 text-slate-700 hover:text-amber-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth py-3 px-1 no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {editorialGuides.map((guide, idx) => (
              <div
                key={idx}
                className="w-[285px] sm:w-[325px] lg:w-[360px] flex-none shrink-0 snap-start"
              >
                <Card
                  className="group/card h-full overflow-hidden rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 640px) 285px, (max-width: 1024px) 325px, 360px"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] sm:text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider ${guide.badgeColor}`}>
                        {guide.badge}
                      </span>
                    </div>

                    {/* Price Pill */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      From {guide.price}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{guide.location}</span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover/card:text-amber-700 transition-colors line-clamp-2">
                        {guide.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {guide.summary}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-500">{guide.duration}</span>
                      <Link
                        href={`/blog/${guide.slug}`}
                        prefetch={true}
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 transition-transform" />
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
