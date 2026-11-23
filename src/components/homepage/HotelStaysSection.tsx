'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HotelCity {
  city: string;
  image: string;
}

export const HotelStaysSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hotelCities: HotelCity[] = [
    { city: 'Agra', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop' },
    { city: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop' },
    { city: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop' },
    { city: 'Bangkok', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop' },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / (clientWidth * 0.76));
      setActiveIndex(Math.max(0, Math.min(index, hotelCities.length - 1)));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth * 0.78;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-14 bg-amber-50/40 border-b border-amber-100/60 relative overflow-hidden">
      <Container>
        {/* Header with Title and Mobile Slider Arrow Controls */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Hotel Stays
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Handpicked luxury resorts, heritage havelis &amp; premium city hotels
            </p>
          </div>

          {/* Slider Arrow Controls (Strictly on mobile) */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Stay"
              className="w-8 h-8 rounded-full border border-amber-200 bg-white hover:bg-amber-400 hover:text-slate-950 text-slate-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next Stay"
              className="w-8 h-8 rounded-full border border-amber-200 bg-white hover:bg-amber-400 hover:text-slate-950 text-slate-700 flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Track: Horizontal Slider strictly on Mobile, Multi-column Grid on Tablet/Desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible scroll-smooth pb-3 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 no-scrollbar snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {hotelCities.map((h) => (
            <Link
              key={h.city}
              href={`/hotels?location=${encodeURIComponent(h.city)}`}
              className="group relative h-80 sm:h-96 w-[78vw] max-w-[300px] sm:w-full shrink-0 flex-none sm:flex-initial snap-start rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform sm:hover:-translate-y-1 border-4 border-white"
            >
              <Image
                src={h.image}
                alt={h.city}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 300px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Bottom Details: City Name & Yellow Expandable Button */}
              <div className="absolute bottom-5 inset-x-5 flex items-center justify-between">
                <span className="font-black text-white text-xl sm:text-2xl tracking-tight drop-shadow-md">
                  {h.city}
                </span>

                {/* Yellow Action Pill / Button */}
                <div className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3.5 py-1.5 rounded-full font-bold text-xs flex items-center space-x-1 shadow-lg transition-all transform group-hover:scale-105">
                  <span className="inline sm:hidden group-hover:inline">Explore</span>
                  <ArrowUpRight className="w-4 h-4 font-extrabold" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel Pagination Indicator Dots */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 mt-3">
          {hotelCities.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!scrollContainerRef.current) return;
                const cardWidth = scrollContainerRef.current.clientWidth * 0.78;
                scrollContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-amber-500' : 'w-1.5 bg-amber-200'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
