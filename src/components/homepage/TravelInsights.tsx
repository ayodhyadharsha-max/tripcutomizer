'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';

interface InstaReel {
  id: string;
  title: string;
  badge?: string;
  location: string;
  image: string;
}

export const TravelInsights: React.FC = () => {
  const reels: InstaReel[] = [
    {
      id: 'reel-1',
      title: 'Fjords & Nordic Glaciers',
      location: 'Norway Fjords Cruise',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'reel-2',
      title: 'Helicopter Darshan Yatra',
      badge: '5 रातें / 6 दिन',
      location: 'Kedarnath Temple, Uttarakhand',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'reel-3',
      title: 'Historic Colonial Heritage',
      location: 'St. Francis Church, Kochi',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/20 to-white border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Left Title & Instagram Follow Button Column */}
          <div className="space-y-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 border border-rose-400/60 text-rose-600 bg-rose-50 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-rose-100 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow us</span>
            </a>

            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight leading-tight">
              Insta Moments That Tell a Story
            </h2>

            <div className="flex items-center space-x-2 pt-2">
              <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-md hover:bg-brand-700 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 3 Vertical Reel Video Cards Column */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="group relative h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-white"
              >
                <Image src={reel.image} alt={reel.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

                {/* Top Badge */}
                {reel.badge && (
                  <div className="absolute top-4 inset-x-0 text-center">
                    <span className="bg-sky-600 text-white font-extrabold text-xs px-4 py-1 rounded-md shadow-md uppercase">
                      {reel.badge}
                    </span>
                  </div>
                )}

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-brand-600 transition-all">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                {/* Bottom Location Label */}
                <div className="absolute bottom-5 inset-x-4 text-center">
                  <span className="font-extrabold text-white text-base tracking-tight drop-shadow">
                    {reel.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
