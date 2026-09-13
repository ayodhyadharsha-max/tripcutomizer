'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

interface RouteItem {
  city: string;
  image: string;
  vias: string[];
}

export const FlightPromotions: React.FC = () => {
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

  return (
    <section className="py-14 bg-sky-50/50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle World Map Watermark Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />

      <Container className="relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Top Flight Routes
          </h2>
        </div>

        {/* 3x3 Grid of Top Flight Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((r) => (
            <Link
              key={r.city}
              href={`/flights?to=${encodeURIComponent(r.city)}`}
              className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all group"
            >
              {/* Rounded Square Thumbnail */}
              <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-white">
                <Image src={r.image} alt={r.city} fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Details */}
              <div className="space-y-0.5 text-xs">
                <h3 className="font-extrabold text-brand-700 text-sm group-hover:text-brand-500 transition-colors">
                  {r.city}
                </h3>
                <p className="text-slate-500 font-medium">
                  Via–{' '}
                  <span className="text-brand-600 font-semibold">
                    {r.vias.join(', ')}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
