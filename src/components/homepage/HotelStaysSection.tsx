'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ArrowUpRight } from 'lucide-react';

interface HotelCity {
  city: string;
  image: string;
}

export const HotelStaysSection: React.FC = () => {
  const hotelCities: HotelCity[] = [
    { city: 'Agra', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop' },
    { city: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop' },
    { city: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop' },
    { city: 'Bangkok', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="py-14 bg-amber-50/40 border-b border-amber-100/60 relative overflow-hidden">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Hotel Stays
          </h2>
        </div>

        {/* 4 Large Vertical Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelCities.map((h) => (
            <Link
              key={h.city}
              href={`/hotels?location=${encodeURIComponent(h.city)}`}
              className="group relative h-96 w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 border-white"
            >
              <Image src={h.image} alt={h.city} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Bottom Details: City Name & Yellow Expandable Button */}
              <div className="absolute bottom-5 inset-x-5 flex items-center justify-between">
                <span className="font-black text-white text-xl sm:text-2xl tracking-tight drop-shadow-md">
                  {h.city}
                </span>

                {/* Yellow Action Pill / Button */}
                <div className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3.5 py-1.5 rounded-full font-bold text-xs flex items-center space-x-1 shadow-lg transition-all transform group-hover:scale-105">
                  <span className="hidden sm:inline group-hover:inline">Explore More</span>
                  <ArrowUpRight className="w-4 h-4 font-extrabold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
