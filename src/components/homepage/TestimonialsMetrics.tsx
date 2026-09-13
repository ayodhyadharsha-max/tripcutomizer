'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsMetrics: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const metrics = [
    { label: 'Years of legacy', value: '15+' },
    { label: 'Tours Conducted', value: '4,000+' },
    { label: 'Happy Travelers', value: '1M+' },
    { label: 'Awards Won', value: '50+' },
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

  const faqs = [
    {
      q: 'What services does tripcustomizer offer?',
      a: 'tripcustomizer is a leading travel solutions provider offering a wide range of services including international and domestic holiday packages, flight bookings, hotel bookings, customized tour itineraries, and corporate travel management.',
    },
    {
      q: 'How to book holiday packages in India with tripcustomizer?',
      a: 'You can search for holiday packages on our website by selecting your destination, travel dates, and preferences. Once you select a package, click on "Book Now" or use "Customize Trip" to connect with our travel experts.',
    },
    {
      q: 'Do tripcustomizer offer customizable tour packages?',
      a: 'Yes, we specialize in fully customized tour packages! You can use our "Customize Trip" wizard or speak with our senior travel architects to tailor flights, hotels, activities, and duration to your exact preferences.',
    },
    {
      q: 'What are the best holiday packages offered by tripcustomizer?',
      a: 'Our top-rated packages include European Highlights, Exotic Bali Escapes, Char Dham Yatra, Kerala Serenade, Kashmir Paradise, and Luxury Maldives Honeymoon Resorts.',
    },
    {
      q: 'Can I book flights and hotels together?',
      a: 'Yes, our platform supports seamless flight + hotel bundle bookings with exclusive package discounts.',
    },
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 4);

  return (
    <div className="bg-amber-50/20 border-b border-slate-200">
      {/* 1. Why Customers Love Us & Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50/40 to-white">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-amber-900 tracking-tight">
              Why Customers Love tripcustomizer
            </h2>
          </div>

          {/* 4 Stats Metrics Row with Vertical Dividers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-12 border-y border-amber-200/60 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className={`space-y-1 ${idx !== 0 ? 'md:border-l md:border-amber-200/60' : ''}`}>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 block">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-amber-800">
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
                    <Image src={t.avatar} alt={t.name} fill unoptimized className="object-cover" />
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

      {/* 2. Frequently Asked Questions Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <Container className="max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {visibleFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all border overflow-hidden ${
                    isOpen
                      ? 'bg-brand-500 text-white border-brand-500 shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0 text-slate-400" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-blue-50 leading-relaxed font-normal border-t border-white/20 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {!showAllFaqs && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllFaqs(true)}
                className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold px-8 py-3 rounded-full shadow-md shadow-brand-500/20 transition-all hover:scale-105"
              >
                Show More
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
