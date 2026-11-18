'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { ArrowUpRight } from 'lucide-react';

interface TopSpecialSlide {
  title: string;
  subtitle: string;
  price: string;
  href: string;
  image: string;
}

interface FlightSlide {
  title: string;
  subtitle: string;
  tagline: string;
  href: string;
}

const topSpecialSlides: TopSpecialSlide[] = [
  {
    title: 'Andaman & Nicobar',
    subtitle: 'Discover Your Island Story',
    price: 'Starting at ₹ 17 300.00',
    href: '/holidays/andaman',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Kashmir Paradise',
    subtitle: 'Experience Snow Valleys & Dal Lake Houseboats',
    price: 'Starting at ₹ 12 999.00',
    href: '/holidays/kashmir',
    image: '/destinations/kashmir.jpg',
  },
  {
    title: 'Bali Island Escapes',
    subtitle: 'Private Pool Villas & Tropical Sunset Beaches',
    price: 'Starting at ₹ 35 500.00',
    href: '/holidays/bali',
    image: '/destinations/bali.jpg',
  },
];

const flightSlides: FlightSlide[] = [
  {
    title: 'Looking for Flights?',
    subtitle: 'Find Your Best Fare Here!',
    tagline: 'Fly More, Pay Less – Book Your Flight Now ✈️',
    href: '/flights',
  },
  {
    title: 'Domestic Flights From ₹1,499',
    subtitle: 'Direct Flights to Delhi, Mumbai & Goa!',
    tagline: 'Zero Convenience Fee with Special Bank Offers ✈️',
    href: '/flights',
  },
  {
    title: 'Dubai Direct Flights',
    subtitle: 'Starting @ ₹ 18,999 Roundtrip',
    tagline: 'Emirates, IndiGo & Air India Express Non-Stop ✈️',
    href: '/flights',
  },
];

export const SpecialsSection: React.FC = () => {
  const [activeTopSlide, setActiveTopSlide] = useState(0);
  const [activeFlightSlide, setActiveFlightSlide] = useState(0);

  // Auto-rotate top banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTopSlide((prev) => (prev + 1) % topSpecialSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate flight banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlightSlide((prev) => (prev + 1) % flightSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
      <Container className="space-y-4 sm:space-y-8">
        <div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            tripcustomizer Specials
          </h2>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW (Pixel-Perfect match to reference screenshot) */}
        {/* ============================================================ */}
        <div className="block md:hidden space-y-3.5">
          {/* 1. Top Banner Card (Andaman & Nicobar Carousel) */}
          <div className="relative h-52 rounded-2xl overflow-hidden shadow-sm group border border-slate-100 bg-slate-900">
            {topSpecialSlides.map((slide, idx) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === activeTopSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                  <p className="text-xs text-white font-bold pt-0.5">
                    {slide.price}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={slide.href}
                      className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm hover:bg-slate-100 transition-colors"
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
              {topSpecialSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTopSlide(i)}
                  className={`h-1.5 transition-all rounded-full ${
                    i === activeTopSlide ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/70'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 2. Escorted Tour By Partners Banner */}
          <Link
            href="/holidays/europe"
            className="relative h-52 rounded-2xl overflow-hidden shadow-sm group border border-slate-100 bg-slate-900 block"
          >
            <Image
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop"
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

          {/* 3. Row of 2 Square Cards (Build Itinerary & Forex/Rewards) */}
          <div className="grid grid-cols-2 gap-3">
            {/* 3A: Build Your Own Itinerary! */}
            <Link
              href="/customize-trip"
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-3 pb-1">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-brand-600 transition-colors">
                  Build Your Own Itinerary!
                </h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">
                  Customize your flights,hotels & sightseeing in just 10 minutes
                </p>
                <div className="mt-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xs group-hover:bg-brand-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
              <div className="relative h-24 w-full mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                  alt="Build Your Own Itinerary"
                  fill
                  sizes="200px"
                  loading="lazy"
                  className="object-cover rounded-b-2xl"
                />
              </div>
            </Link>

            {/* 3B: Buy Forex & Earn Travel Rewards */}
            <Link
              href="/offers"
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-3 pb-1">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-brand-600 transition-colors">
                  Buy Forex & Earn Travel Rewards
                </h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-1">
                  Up to ₹ 3000.00 worth of Loyalty Points
                </p>
                <div className="mt-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xs group-hover:bg-brand-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
              <div className="relative h-24 w-full mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop"
                  alt="Buy Forex & Travel Rewards"
                  fill
                  sizes="200px"
                  loading="lazy"
                  className="object-cover rounded-b-2xl"
                />
              </div>
            </Link>
          </div>

          {/* 4. Bottom Banner Card (Looking for Flights?) */}
          <div className="relative h-52 rounded-2xl overflow-hidden shadow-sm group border border-slate-100 bg-blue-950">
            <Link href={flightSlides[activeFlightSlide].href} className="absolute inset-0 z-10 block">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
                alt="Looking for Flights"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/40 to-blue-950/80" />
              <div className="absolute top-4 left-4 right-4 z-20 space-y-1">
                <h3 className="font-extrabold text-white text-lg tracking-tight leading-tight">
                  {flightSlides[activeFlightSlide].title}
                </h3>
                <p className="text-xs text-white font-bold">
                  {flightSlides[activeFlightSlide].subtitle}
                </p>
                <p className="text-[11px] text-sky-200">
                  {flightSlides[activeFlightSlide].tagline}
                </p>
              </div>
            </Link>

            {/* Flight Slider Dots Indicator */}
            <div className="absolute bottom-3 left-4 z-30 flex items-center space-x-1.5 pointer-events-auto">
              {flightSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFlightSlide(i)}
                  className={`h-1.5 transition-all rounded-full ${
                    i === activeFlightSlide ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/70'
                  }`}
                  aria-label={`Go to flight slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP / TABLET VIEW (Comprehensive 3x3 Grid)               */}
        {/* ============================================================ */}
        <div className="hidden md:block space-y-6">
          {/* Row 1: Top Specials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Andaman & Nicobar */}
            <Link
              href="/holidays/andaman"
              className="relative h-64 rounded-3xl overflow-hidden shadow-md group border border-slate-100 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop"
                alt="Andaman & Nicobar"
                fill
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                  Andaman & Nicobar
                </h3>
                <p className="text-xs text-slate-300">Discover Your Island Story</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-amber-300">Starting at ₹ 17 300.00</span>
                  <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full group-hover:bg-amber-400 transition-colors">
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2: Escorted Tour By Partners */}
            <Link
              href="/holidays/europe"
              className="relative h-64 rounded-3xl overflow-hidden shadow-md group border border-slate-100 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop"
                alt="Escorted Tour By Partners"
                fill
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                  Escorted Tour By Partners
                </h3>
                <p className="text-xs text-slate-300">Europamundo | Cosmos | Globus | Trafalgar & More..</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-amber-300">Guaranteed Departures</span>
                  <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full group-hover:bg-amber-400 transition-colors">
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3: Char Dham Yatra */}
            <Link
              href="/char-dham"
              className="relative h-64 rounded-3xl overflow-hidden shadow-md group border border-slate-100 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src="/destinations/char-dham.jpg"
                alt="Char Dham"
                fill
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                  Char Dham Yatra 2026
                </h3>
                <p className="text-xs text-slate-300">Serenity Among the Sacred Mountains with VIP Darshan</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-amber-300">Starting at ₹ 24,500.00</span>
                  <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full group-hover:bg-amber-400 transition-colors">
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Row 2: Build Itinerary, Forex & Honeymoon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Build Your Own Itinerary */}
            <Link
              href="/customize-trip"
              className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-sky-50 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
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
                  <span>Start Customizing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Buy Forex & Earn Travel Rewards */}
            <Link
              href="/offers"
              className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 bg-amber-50 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop"
                alt="Buy Forex & Travel Rewards"
                fill
                sizes="(max-width: 1200px) 33vw, 400px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <h3 className="font-extrabold text-lg leading-tight group-hover:text-amber-300 transition-colors">
                  Buy Forex & Earn Travel Rewards
                </h3>
                <p className="text-xs text-slate-300">Up to ₹ 3000.00 worth of Loyalty Points & currency cashback</p>
                <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-amber-400 transition-colors mt-2">
                  <span>Explore Offers</span>
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
                src="/destinations/bali.jpg"
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
                <p className="text-xs text-slate-300">Handpicked luxury resorts, private pool villas & candle-light dinners</p>
                <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-full group-hover:bg-rose-500 group-hover:text-white transition-colors mt-2">
                  <span>View More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Row 3: Flights, Custom Packages & Australia */}
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
                  <span>View Flights</span>
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

            {/* Australia */}
            <Link
              href="/holidays/australia"
              className="relative h-72 rounded-3xl overflow-hidden shadow-md group border border-slate-100 block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src="/destinations/australia.jpg"
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
                  <span className="text-xs font-bold text-amber-300">Starting at ₹ 59,800.00</span>
                  <span className="inline-flex items-center space-x-1 bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full group-hover:bg-amber-400 transition-colors">
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
