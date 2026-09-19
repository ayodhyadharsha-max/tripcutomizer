'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Trip Customizer?
          </h2>
        </div>

        {/* Large Feature Banner Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[440px] flex flex-col justify-end p-6 sm:p-8 border border-slate-100">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
            alt="Why Trip Customizer"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* 5 Card Overlay Row */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Card 1 */}
            <div className="bg-amber-50/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-md text-slate-900 flex flex-col justify-between">
              <h3 className="font-extrabold text-amber-700 text-sm sm:text-base mb-2">Trusted Advisor</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Trusted Since 2010, Designed for Modern Journeys.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-orange-500/95 text-white backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-md flex flex-col justify-between">
              <h3 className="font-extrabold text-white text-sm sm:text-base mb-2">Customized Holidays</h3>
              <p className="text-xs text-orange-50 font-medium leading-relaxed">
                Offers the ability to personalize your holidays according to your needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-600/95 text-white backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-md flex flex-col justify-between">
              <h3 className="font-extrabold text-white text-sm sm:text-base mb-2">Wide Varieties of Holidays</h3>
              <p className="text-xs text-blue-50 font-medium leading-relaxed">
                From adventure trips to romantic honeymoon getaways, we have your back.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-md text-slate-900 flex flex-col justify-between">
              <h3 className="font-extrabold text-brand-700 text-sm sm:text-base mb-2">Seamless Booking</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Book from a wide selection of travel plans with easy online payments.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-amber-50/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-md text-slate-900 flex flex-col justify-between">
              <h3 className="font-extrabold text-amber-800 text-sm sm:text-base mb-2">Convenient Holidays</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                All-in-one travel plans featuring accommodations, flights, activities, meals, and more.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
