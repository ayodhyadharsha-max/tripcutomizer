'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RouteItem {
  city: string;
  image: string;
  vias: string[];
}

export const FlightPromotions: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const routes: RouteItem[] = [
    { city: 'Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=400&auto=format&fit=crop', vias: ['Mumbai', 'Bengaluru', 'Hyderabad', 'Kolkata'] },
    { city: 'Mumbai', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400&auto=format&fit=crop', vias: ['Bengaluru', 'Chennai', 'Delhi', 'Hyderabad'] },
    { city: 'Bengaluru', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=400&auto=format&fit=crop', vias: ['Delhi', 'Mumbai', 'Hyderabad', 'Srinagar'] },
    { city: 'Kolkata', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=400&auto=format&fit=crop', vias: ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore'] },
    { city: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop', vias: ['Mumbai', 'Delhi', 'Chennai', 'Goa'] },
    { city: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=400&auto=format&fit=crop', vias: ['Mumbai', 'Delhi', 'Chennai', 'Hyderabad'] },
    { city: 'London Heathrow', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop', vias: ['Delhi', 'Mumbai', 'Ahmedabad', 'Bangalore'] },
    { city: 'Abu Dhabi', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop', vias: ['Kochi', 'Mumbai', 'Delhi', 'Bangalore'] },
    { city: 'Bangkok', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=400&auto=format&fit=crop', vias: ['Mumbai', 'Delhi', 'Bangalore', 'Ahmedabad'] },
  ];

  // Group routes into 3 items per column / slide
  const routeGroups = [
    routes.slice(0, 3), // Delhi, Mumbai, Bengaluru
    routes.slice(3, 6), // Kolkata, Dubai, Singapore
    routes.slice(6, 9), // London Heathrow, Abu Dhabi, Bangkok
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.clientWidth * 0.85;
      const scrollAmount = direction === 'left' ? -slideWidth : slideWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.scrollWidth > el.clientWidth) {
      const slideWidth = el.clientWidth * 0.85;
      const index = Math.round(el.scrollLeft / slideWidth);
      setActiveSlide(Math.min(2, Math.max(0, index)));
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
      setActiveSlide(index);
    }
  };

  return (
    <section className="py-12 sm:py-14 bg-sky-50/50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle World Map Watermark Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Top Flight Routes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Popular domestic &amp; international connecting flights with best fares
            </p>
          </div>

          {/* Slider Arrow Controls (visible on mobile/tablet) */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Routes"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-brand-600 hover:text-white text-slate-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next Routes"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-brand-600 hover:text-white text-slate-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Track: Horizontal Slider on Mobile (3 items per slide), 3 Columns on Laptop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible scroll-smooth pb-2 lg:pb-0 px-1 no-scrollbar snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {routeGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="w-[84vw] sm:w-[340px] lg:w-auto shrink-0 flex-none lg:flex-initial snap-start bg-white/70 lg:bg-transparent p-3 lg:p-0 rounded-2xl border lg:border-0 border-slate-200/80 shadow-xs lg:shadow-none space-y-2 sm:space-y-3"
            >
              {group.map((r) => (
                <Link
                  key={r.city}
                  href={`/flights?to=${encodeURIComponent(r.city)}`}
                  className="flex items-center space-x-3.5 p-2 sm:p-2.5 rounded-2xl hover:bg-white hover:shadow-md transition-all group bg-white/60 lg:bg-transparent"
                >
                  {/* Rounded Square Thumbnail */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl overflow-hidden shadow-xs border border-white bg-slate-100">
                    <Image
                      src={r.image}
                      alt={r.city}
                      fill
                      sizes="64px"
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-0.5 text-xs min-w-0 flex-1">
                    <h3 className="font-extrabold text-brand-700 text-sm group-hover:text-brand-500 transition-colors truncate">
                      {r.city}
                    </h3>
                    <p className="text-slate-500 font-medium truncate">
                      Via–{' '}
                      <span className="text-brand-600 font-semibold">
                        {r.vias.join(', ')}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator Dots */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 mt-3.5">
          {routeGroups.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to Slide ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                activeSlide === idx
                  ? 'w-6 h-1.5 bg-brand-600'
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
