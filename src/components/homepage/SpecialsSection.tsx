'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ArrowUpRight } from 'lucide-react';

interface SpecialSlide {
  title: string;
  subtitle: string;
  price?: string;
  href: string;
  image: string;
  tagline?: string;
}

// Original 4 Destination Specials for Top Carousel
const topDestinationSlides: SpecialSlide[] = [
  {
    title: 'Your Spiritual Journey Starts Here',
    subtitle: 'Explore divine destinations in India',
    price: '3★ Starting at ₹ 18,999.00',
    href: '/char-dham',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Australia',
    subtitle: 'Wonder Without Limits',
    price: '3★ Starting at ₹ 61,499.00',
    href: '/holidays/australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Char Dham Yatra',
    subtitle: 'Serenity Among the Sacred Mountains',
    price: '3★ Starting at ₹ 18,999.00',
    href: '/char-dham',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Vietnam',
    subtitle: 'Where Culture Breathes Landscape',
    price: '3★ Starting at ₹ 17,999.00',
    href: '/holidays/vietnam',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
  },
];

// Original Flights & Honeymoon Specials for Bottom Carousel
const bottomSpecialSlides: SpecialSlide[] = [
  {
    title: 'Looking for Flights?',
    subtitle: 'Find Your Best Fare Here!',
    tagline: 'Fly More, Pay Less – Book Now ✈️',
    href: '/flights',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Honeymoon & Romantic Escapes',
    subtitle: 'Handpicked luxury resorts & water villas',
    tagline: 'Private pool villas, candle-light dinners & couple spas 💍',
    href: '/honeymoon',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
  },
];

export const SpecialsSection: React.FC = () => {
  const [activeTopIndex, setActiveTopIndex] = useState(0);
  const [activeBottomIndex, setActiveBottomIndex] = useState(0);

  // Auto rotate top slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTopIndex((prev) => (prev + 1) % topDestinationSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto rotate bottom slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBottomIndex((prev) => (prev + 1) % bottomSpecialSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTop = topDestinationSlides[activeTopIndex];
  const currentBottom = bottomSpecialSlides[activeBottomIndex];

  return (
    <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
      <Container className="space-y-4 sm:space-y-8">
        <div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trip Customizer Specials
          </h2>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW (Compact, space-saving format matching photo)    */}
        {/* ============================================================ */}
        <div className="block md:hidden space-y-3.5">
          {/* 1. Top Full-Width Slider Card (Destinations) */}
          <div className="relative h-52 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900 group">
            {topDestinationSlides.map((slide, idx) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === activeTopIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/70" />
                <div className="absolute top-4 left-4 right-4 z-20 space-y-1">
                  <h3 className="font-extrabold text-white text-lg tracking-tight leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-white/90 font-medium">
                    {slide.subtitle}
                  </p>
                  {slide.price && (
                    <p className="text-xs text-amber-300 font-bold pt-0.5">
                      {slide.price}
                    </p>
                  )}
                  <div className="pt-2">
                    <Link
                      href={slide.href}
                      className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm hover:bg-amber-400 transition-colors"
                    >
                      <span>View More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Dots Indicator */}
            <div className="absolute bottom-3 left-4 z-30 flex items-center space-x-1.5 pointer-events-auto">
              {topDestinationSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTopIndex(i)}
                  className={`h-1.5 transition-all rounded-full ${
                    i === activeTopIndex ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/70'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 2. Escorted Tour By Partners Banner */}
          <Link
            href="/holidays"
            className="relative h-52 rounded-2xl overflow-hidden shadow-sm group border border-slate-100 bg-slate-900 block"
          >
            <Image
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop"
              alt="Escorted Tour By Partners"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/70" />
            <div className="absolute top-4 left-4 right-4 z-10 space-y-1">
              <h3 className="font-extrabold text-white text-lg tracking-tight leading-tight">
                Escorted Tour By Partners
              </h3>
              <p className="text-[11px] text-white/90 font-medium">
                Europamundo | Cosmos | Globus | Trafalgar & More..
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm group-hover:bg-amber-400 transition-colors">
                  <span>View More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* 3. 2-Card Side-by-Side Grid (Build Itinerary & Custom Packages) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Card 3A: Build Your Own Itinerary! */}
            <Link
              href="/customize-trip"
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-3 pb-1">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-brand-600 transition-colors">
                  Build Your Own Itinerary!
                </h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-1 line-clamp-2">
                  Customize your flights, hotels & sightseeing in just 10 minutes
                </p>
                <div className="mt-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xs group-hover:bg-brand-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
              <div className="relative h-24 w-full mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
                  alt="Build Your Own Itinerary"
                  fill
                  sizes="200px"
                  loading="lazy"
                  className="object-cover rounded-b-2xl"
                />
              </div>
            </Link>

            {/* Card 3B: Customized Holiday Packages */}
            <Link
              href="/customize-trip"
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-3 pb-1">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-brand-600 transition-colors">
                  Customized Holiday Packages
                </h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-1 line-clamp-2">
                  Tailored itineraries with 24x7 Dedicated Travel Assistance
                </p>
                <div className="mt-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xs group-hover:bg-brand-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
              <div className="relative h-24 w-full mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
                  alt="Customized Holiday Packages"
                  fill
                  sizes="200px"
                  loading="lazy"
                  className="object-cover rounded-b-2xl"
                />
              </div>
            </Link>
          </div>

          {/* 4. Bottom Full-Width Slider Card (Flights & Honeymoon) */}
          <div className="relative h-52 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900 group">
            {bottomSpecialSlides.map((slide, idx) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === activeBottomIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Link href={slide.href} className="absolute inset-0 block">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/75" />
                  <div className="absolute top-4 left-4 right-4 z-20 space-y-1">
                    <h3 className="font-extrabold text-white text-lg tracking-tight leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-white font-bold">
                      {slide.subtitle}
                    </p>
                    {slide.tagline && (
                      <p className="text-[11px] text-sky-200">
                        {slide.tagline}
                      </p>
                    )}
                    <div className="pt-2">
                      <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm hover:bg-amber-400 transition-colors">
                        <span>View More</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {/* Bottom Slider Dots Indicator */}
            <div className="absolute bottom-3 left-4 z-30 flex items-center space-x-1.5 pointer-events-auto">
              {bottomSpecialSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBottomIndex(i)}
                  className={`h-1.5 transition-all rounded-full ${
                    i === activeBottomIndex ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/70'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW (Original 3x3 Grid Preserved 100%)               */}
        {/* ============================================================ */}
        <div className="hidden md:block space-y-6">
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                  Your Spiritual Journey Starts Here
                </h3>
                <p className="text-xs text-slate-300">Explore divine destinations in India</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-amber-300">3★ Starting at ₹ 18,999.00</span>
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                  Australia
                </h3>
                <p className="text-xs text-slate-300">Wonder Without Limits</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-amber-300">3★ Starting at ₹ 61,499.00</span>
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                  Char Dham Yatra
                </h3>
                <p className="text-xs text-slate-300">Serenity Among the Sacred Mountains</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-amber-300">3★ Starting at ₹ 18,999.00</span>
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
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
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-teal-300 transition-colors">
                  Vietnam
                </h3>
                <p className="text-xs text-slate-300">Where Culture Breathes Landscape</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-amber-300">3★ Starting at ₹ 17,999.00</span>
                  <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-teal-400 transition-colors">
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
