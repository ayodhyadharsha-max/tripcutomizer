'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Quote } from 'lucide-react';

export const TestimonialsMetrics: React.FC = () => {
  const metrics = [
    { label: 'Years of legacy', value: '7+' },
    { label: 'Tours Conducted', value: '500+' },
    { label: 'Happy Travelers', value: '1.2L+' },
  ];

  const testimonials = [
    {
      name: 'Kanan Nanavati',
      date: 'June, 2026',
      review: 'We completed our Chardham Yatra by helicopter on 6th June 2026 as a group of six. Despite weather challenges, the team ensured smooth darshan and timely return to Dehradun.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    },
    {
      name: 'Geetha Guruswamy',
      date: 'January, 2026',
      review: 'It was a pleasure traveling again—first Europe, now Vietnam—both trips were fantastic! We loved the hotels, itinerary, food, and especially Tour Manager guidance.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    },
    {
      name: 'Lawrence Yesudass',
      date: 'December, 2025',
      review: 'My family and I enjoyed a wonderful Europe holiday last Christmas. The entire trip was well-planned, seamless, and truly memorable. We appreciate the smooth execution.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-amber-50/20 border-b border-slate-200">
      {/* Why Customers Love Us & Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50/40 to-white">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-amber-900 tracking-tight">
              Why Customers Love Trip Customizer
            </h2>
          </div>

          {/* 3 Stats Metrics Row: Always 3 Equal Columns on Mobile & Desktop */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 py-8 mb-12 border-y border-amber-200/60 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className={`space-y-1 flex flex-col items-center justify-center ${idx !== 0 ? 'border-l border-amber-200/60' : ''}`}>
                <span className="text-xl sm:text-4xl lg:text-5xl font-black text-amber-950 block">
                  {m.value}
                </span>
                <span className="text-[10px] sm:text-sm font-semibold text-amber-800 uppercase tracking-wider">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial Quote Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-amber-300 fill-amber-100 rotate-180" />
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {t.review}
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-3 border-t border-slate-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-300">
                    <Image src={t.avatar} alt={t.name} fill sizes="40px" loading="lazy" className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900">{t.name}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
