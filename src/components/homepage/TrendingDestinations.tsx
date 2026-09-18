'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface DestinationCard {
  name: string;
  slug: string;
  image: string;
  startingPrice: number;
  textColor?: string;
  fontStyle?: string;
}

const internationalDestinations: DestinationCard[] = [
  {
    name: 'Azerbaijan',
    slug: 'azerbaijan',
    image: '/destinations/azerbaijan.jpg',
    startingPrice: 42500,
    textColor: 'text-amber-200',
    fontStyle: 'font-sans font-black tracking-wider uppercase',
  },
  {
    name: 'Bhutan',
    slug: 'bhutan',
    image: '/destinations/bhutan.jpg',
    startingPrice: 38000,
    textColor: 'text-amber-100',
    fontStyle: 'font-serif font-bold',
  },
  {
    name: 'Bali',
    slug: 'bali',
    image: '/destinations/bali.jpg',
    startingPrice: 35500,
    textColor: 'text-emerald-950',
    fontStyle: 'font-serif font-bold',
  },
  {
    name: 'Sri Lanka',
    slug: 'sri-lanka',
    image: '/destinations/sri-lanka.jpg',
    startingPrice: 26900,
    textColor: 'text-teal-100',
    fontStyle: 'font-serif italic font-bold',
  },
  {
    name: 'Vietnam',
    slug: 'vietnam',
    image: '/destinations/vietnam.jpg',
    startingPrice: 38900,
    textColor: 'text-white',
    fontStyle: 'font-serif italic font-bold',
  },
  {
    name: 'MALAYSIA',
    slug: 'malaysia',
    image: '/destinations/malaysia.jpg',
    startingPrice: 29800,
    textColor: 'text-amber-300',
    fontStyle: 'font-sans font-black tracking-widest uppercase',
  },
  {
    name: 'Singapore',
    slug: 'singapore',
    image: '/destinations/singapore.jpg',
    startingPrice: 37900,
    textColor: 'text-blue-950',
    fontStyle: 'font-serif italic font-bold',
  },
  {
    name: 'UAE',
    slug: 'uae',
    image: '/destinations/dubai.jpg',
    startingPrice: 32500,
    textColor: 'text-amber-300',
    fontStyle: 'font-sans font-black tracking-widest uppercase',
  },
  {
    name: 'Nepal',
    slug: 'nepal',
    image: '/destinations/nepal.jpg',
    startingPrice: 19900,
    textColor: 'text-rose-100',
    fontStyle: 'font-serif font-black',
  },
  {
    name: 'Thailand',
    slug: 'thailand',
    image: '/destinations/hero-beach.jpg',
    startingPrice: 24900,
    textColor: 'text-yellow-100',
    fontStyle: 'font-sans font-bold',
  },
];

const indiaDestinations: DestinationCard[] = [
  {
    name: 'Char Dham',
    slug: 'char-dham',
    image: '/destinations/char-dham.jpg',
    startingPrice: 22500,
    textColor: 'text-amber-200',
    fontStyle: 'font-serif font-black',
  },
  {
    name: 'North East',
    slug: 'north-east',
    image: '/destinations/north-east.jpg',
    startingPrice: 28900,
    textColor: 'text-emerald-200',
    fontStyle: 'font-sans font-bold',
  },
  {
    name: 'Andaman & Nicobar',
    slug: 'andaman',
    image: '/destinations/andaman.jpg',
    startingPrice: 32000,
    textColor: 'text-cyan-100',
    fontStyle: 'font-serif italic font-bold',
  },
  {
    name: 'Kerala',
    slug: 'kerala',
    image: '/destinations/kerala.jpg',
    startingPrice: 24500,
    textColor: 'text-green-100',
    fontStyle: 'font-serif font-bold',
  },
  {
    name: 'Kashmir',
    slug: 'kashmir',
    image: '/destinations/kashmir.jpg',
    startingPrice: 18100,
    textColor: 'text-sky-100',
    fontStyle: 'font-sans font-black',
  },
  {
    name: 'Uttarakhand',
    slug: 'uttarakhand',
    image: '/destinations/uttarakhand.jpg',
    startingPrice: 15500,
    textColor: 'text-orange-200',
    fontStyle: 'font-serif font-bold',
  },
  {
    name: 'Mathura Vrindavan',
    slug: 'mathura-vrindavan',
    image: '/destinations/mathura-vrindavan.jpg',
    startingPrice: 12900,
    textColor: 'text-yellow-200',
    fontStyle: 'font-serif font-black uppercase text-center',
  },
  {
    name: 'Ayodhya Varanasi',
    slug: 'ayodhya-varanasi',
    image: '/destinations/ayodhya-varanasi.jpg',
    startingPrice: 14500,
    textColor: 'text-amber-300',
    fontStyle: 'font-serif font-black uppercase text-center',
  },
  {
    name: 'Nainital',
    slug: 'nainital',
    image: '/destinations/uttarakhand.jpg',
    startingPrice: 13800,
    textColor: 'text-teal-200',
    fontStyle: 'font-sans font-bold',
  },
  {
    name: 'Ladakh',
    slug: 'ladakh',
    image: '/destinations/ladakh.jpg',
    startingPrice: 26500,
    textColor: 'text-sky-200',
    fontStyle: 'font-sans font-black uppercase tracking-wider',
  },
];

export const TrendingDestinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'international' | 'india'>('international');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentList = activeTab === 'international' ? internationalDestinations : indiaDestinations;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-white">
      <Container>
        {/* Header with Title & International/India Toggle Pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 px-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trending Destinations
          </h2>

          {/* Toggle Pills */}
          <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200">
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'international'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              International
            </button>
            <button
              onClick={() => setActiveTab('india')}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'india'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              India & Around
            </button>
          </div>
        </div>

        {/* Carousel Container with Side Arrow Controls */}
        <div className="relative group px-1">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Horizontal Scrollable Slider */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto custom-scrollbar scroll-smooth py-4 px-2 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentList.map((item) => (
              <Link
                key={item.slug}
                href={`/holidays/${item.slug}`}
                className="group/card relative flex-none w-[140px] sm:w-[165px] lg:w-[180px] aspect-[9/14] rounded-[65px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border-3 border-white bg-slate-100"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Light/Dark Top Mask for Text Legibility */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10" />

                {/* Destination Name Overlay on Top */}
                <div className="absolute top-4 sm:top-5 inset-x-0 text-center px-2 z-20">
                  <span
                    className={`text-base sm:text-lg tracking-tight drop-shadow-md block ${
                      item.fontStyle || 'font-sans font-black uppercase'
                    } ${item.textColor || 'text-white'}`}
                  >
                    {item.name}
                  </span>
                </div>

                {/* Hover Reveal Bottom Mask & Price with Yellow Round Arrow Button */}
                <div className="absolute inset-x-0 bottom-0 py-4 px-2 flex flex-col items-center justify-end text-center z-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <span className="text-[11px] font-medium text-slate-200 uppercase tracking-wider block drop-shadow">
                    Starting at
                  </span>
                  <span className="text-white font-black text-base sm:text-lg tracking-tight block drop-shadow mb-2">
                    ₹ {item.startingPrice.toLocaleString('en-IN')}.00
                  </span>

                  {/* Yellow Round Button with Arrow ↗ */}
                  <div className="w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Central Explore Now Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/holidays"
            className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore Now</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
