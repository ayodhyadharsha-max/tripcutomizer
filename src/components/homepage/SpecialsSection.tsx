'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ArrowUpRight } from 'lucide-react';

export const SpecialsSection: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <Container className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            tripcustomizer Specials
          </h2>
        </div>

        {/* Row 1: Top Specials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Spiritual */}
          <Link
            href="/char-dham"
            className="relative h-64 rounded-3xl overflow-hidden shadow-md group border border-slate-100 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
              alt="Spiritual Journey"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                Your Spiritual Journey Starts Here
              </h3>
              <p className="text-xs text-slate-300">Explore divine destinations in India</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-amber-300">Starting at ₹ 13,400.00</span>
                <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full group-hover:bg-amber-400 transition-colors">
                  <span>View More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: Australia */}
          <Link
            href="/holidays/australia"
            className="relative h-64 rounded-3xl overflow-hidden shadow-md group border border-slate-100 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop"
              alt="Australia"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                Australia
              </h3>
              <p className="text-xs text-slate-300">Wonder Without Limits</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-amber-300">Starting at ₹ 59,800.00</span>
                <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full group-hover:bg-amber-400 transition-colors">
                  <span>View More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3: Char Dham */}
          <Link
            href="/char-dham"
            className="relative h-64 rounded-3xl overflow-hidden shadow-md group border border-slate-100 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
              alt="Char Dham"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                Char Dham Yatra
              </h3>
              <p className="text-xs text-slate-300">Serenity Among the Sacred Mountains</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-amber-300">Starting at ₹ 50,500.00</span>
                <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full group-hover:bg-amber-400 transition-colors">
                  <span>View More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Row 2: 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Partner Escorted */}
          <Link
            href="/holidays"
            className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-amber-50 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop"
              alt="Escorted Tour"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                Escorted Tour By Partners
              </h3>
              <p className="text-xs text-slate-300">Europamundo | Cosmos | Globus | Trafalgar & More..</p>
              <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-brand-500 group-hover:text-white transition-colors mt-2">
                <span>View More</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Build Your Own Itinerary */}
          <Link
            href="/customize-trip"
            className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-sky-50 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
              alt="Build Itinerary"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-sky-300 transition-colors">
                Build Your Own Itinerary!
              </h3>
              <p className="text-xs text-slate-300">Customize your flights, hotels & sightseeing in just 10 minutes</p>
              <span className="inline-flex items-center space-x-1 bg-brand-600 text-white font-bold text-xs px-4 py-2 rounded-full group-hover:bg-brand-700 transition-colors mt-2">
                <span>Explore More</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Honeymoon Escapes */}
          <Link
            href="/honeymoon"
            className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-rose-50 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop"
              alt="Honeymoon Escapes"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-rose-300 transition-colors">
                Honeymoon & Romantic Escapes
              </h3>
              <p className="text-xs text-slate-300">Handpicked luxury resorts, water villas & candle-light dinners</p>
              <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-rose-500 group-hover:text-white transition-colors mt-2">
                <span>View More</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>

        {/* Row 3: 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Looking for Flights */}
          <Link
            href="/flights"
            className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-blue-900 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
              alt="Flights"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-blue-300 transition-colors">
                Looking for Flights?
              </h3>
              <p className="text-xs text-slate-300">Find Your Best Fare Here! Fly More, Pay Less – Book Now ✈️</p>
              <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-brand-500 group-hover:text-white transition-colors mt-2">
                <span>View More</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Custom Holiday Packages */}
          <Link
            href="/customize-trip"
            className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-amber-900 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
              alt="Custom Packages"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                Customized Holiday Packages
              </h3>
              <p className="text-xs text-slate-300">Tailored itineraries with 24x7 Dedicated Travel Assistance</p>
              <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-amber-400 transition-colors mt-2">
                <span>Explore Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Vietnam */}
          <Link
            href="/holidays/vietnam"
            className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-teal-900 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop"
              alt="Vietnam"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
              <h3 className="font-extrabold text-lg leading-tight group-hover:text-teal-300 transition-colors">
                Vietnam
              </h3>
              <p className="text-xs text-slate-300">Where Culture Breathes Landscape</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-amber-300">Starting at ₹ 35,500.00</span>
                <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-teal-400 transition-colors">
                  <span>View More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};
