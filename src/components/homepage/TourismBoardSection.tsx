'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Building, Globe, ArrowRight } from 'lucide-react';

export const TourismBoardSection: React.FC = () => {
  const boards = [
    {
      name: 'Dubai Economy & Tourism',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      desc: 'Experience luxury shopping, desert safaris, theme parks and architectural marvels.',
      slug: 'dubai',
    },
    {
      name: 'Switzerland Tourism',
      country: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
      desc: 'Explore scenic alpine train rides, snow peaks, crystal lakes & fairytale villages.',
      slug: 'switzerland',
    },
    {
      name: 'Singapore Tourism Board',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop',
      desc: 'Discover futuristic Gardens by the Bay, Sentosa Island & world-class dining.',
      slug: 'singapore',
    },
    {
      name: 'Incredible India Tourism',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
      desc: 'Immerse in timeless heritage, spiritual retreats, backwaters and royal palaces.',
      slug: 'kerala',
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1.5 text-brand-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Globe className="w-4 h-4 text-brand-500" />
              <span>Official Partners</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Tourism Board Recommends
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boards.map((board) => (
            <Card key={board.name} hoverable className="border-slate-200 group">
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image src={board.image} alt={board.name} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[10px] font-bold bg-brand-500/80 px-2 py-0.5 rounded text-white mb-1 inline-block">
                    {board.country}
                  </span>
                  <h3 className="font-bold text-sm text-white">{board.name}</h3>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{board.desc}</p>
                <Link
                  href={`/holidays/${board.slug}`}
                  className="inline-flex items-center text-xs font-bold text-brand-500 hover:text-brand-600 group-hover:underline"
                >
                  <span>Explore Recommended Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
