'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DEMO_PACKAGES, HolidayPackage } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Play,
  Sparkles,
  Compass,
  SlidersHorizontal,
  Star,
  MapPin,
  Clock,
  CheckCircle2,
  Heart,
  PhoneCall,
  Mail,
  User,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Headphones,
  Instagram,
  ChevronDown,
  Quote,
  ThumbsUp
} from 'lucide-react';

export function tripcustomizerHolidayView() {
  // State for Trending Destinations toggle
  const [trendingCategory, setTrendingCategory] = useState<'INTERNATIONAL' | 'INDIA'>('INTERNATIONAL');

  // State for Best Selling Packages toggle
  const [bestSellingCategory, setBestSellingCategory] = useState<'INTERNATIONAL' | 'INDIA'>('INTERNATIONAL');

  // State for International Holiday Region Tab
  const [intlRegionTab, setIntlRegionTab] = useState<'Europe' | 'Asia' | 'Oceania' | 'Middle East' | 'Africa' | 'America'>('Europe');

  // State for India & Around Region Tab
  const [indiaRegionTab, setIndiaRegionTab] = useState<'North' | 'South' | 'East' | 'West' | 'Around'>('North');

  // State for Hero search input
  const [heroSearch, setHeroSearch] = useState('');

  // State for Specials Banner Slide
  const [specialsSlide, setSpecialsSlide] = useState(0);

  // Filter view toggle (Show all 50+ packages with filters vs tripcustomizer homepage layout)
  const [activeTab, setActiveTab] = useState<'HOME' | 'ALL_PACKAGES'>('HOME');

  // FAQ Active Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // SEO Directory Category Active
  const [seoCategory, setSeoCategory] = useState(0);

  // Lead Form State
  const [leadForm, setLeadForm] = useState({
    name: '',
    mobile: '',
    email: '',
    productType: 'Domestic',
    destination: 'Ayodhya & Varanasi',
    agree: true,
  });

  // Trending Oval Destinations Data
  const internationalTrending = [
    { name: 'EUROPE', image: '/destinations/europe.jpg', slug: 'europe' },
    { name: 'AUSTRALIA', image: '/destinations/australia.jpg', slug: 'australia' },
    { name: 'JAPAN', image: '/destinations/japan.jpg', slug: 'japan' },
    { name: 'VIETNAM', image: '/destinations/vietnam.jpg', slug: 'vietnam' },
    { name: 'NEW ZEALAND', image: '/destinations/new-zealand.jpg', slug: 'new-zealand' },
    { name: 'ANTARCTICA', image: '/destinations/antarctica.jpg', slug: 'antarctica' },
  ];

  const indiaTrending = [
    { name: 'KASHMIR', image: '/destinations/kashmir.jpg', slug: 'kashmir' },
    { name: 'KERALA', image: '/destinations/kerala.jpg', slug: 'kerala' },
    { name: 'RAJASTHAN', image: '/destinations/rajasthan.jpg', slug: 'rajasthan' },
    { name: 'LADAKH', image: '/destinations/ladakh.jpg', slug: 'ladakh' },
    { name: 'AYODHYA & KASHI', image: '/destinations/ayodhya-varanasi.jpg', slug: 'ayodhya-varanasi' },
    { name: 'ANDAMAN', image: '/destinations/andaman.jpg', slug: 'andaman' },
  ];

  const currentTrending = trendingCategory === 'INTERNATIONAL' ? internationalTrending : indiaTrending;

  // Best Selling Packages Data
  const bestSellingIntl = DEMO_PACKAGES.filter((p) => p.isInternational).slice(0, 3);
  const bestSellingIndia = DEMO_PACKAGES.filter((p) => !p.isInternational).slice(0, 3);
  const currentBestSelling = bestSellingCategory === 'INTERNATIONAL' ? bestSellingIntl : bestSellingIndia;

  // International Holiday Region Cards
  const intlRegionCards: Record<string, { title: string; price: number; image: string; slug: string }[]> = {
    Europe: [
      { title: 'Switzerland', price: 137200, image: '/destinations/switzerland.jpg', slug: 'switzerland' },
      { title: 'France', price: 80200, image: '/destinations/france.jpg', slug: 'france' },
      { title: 'United Kingdom', price: 89800, image: '/destinations/uk.jpg', slug: 'uk' },
    ],
    Asia: [
      { title: 'Singapore', price: 37800, image: '/destinations/singapore.jpg', slug: 'singapore' },
      { title: 'Bali & Indonesia', price: 42500, image: '/destinations/bali.jpg', slug: 'bali' },
      { title: 'Japan & Cherry Blossom', price: 125000, image: '/destinations/japan.jpg', slug: 'japan' },
    ],
    Oceania: [
      { title: 'Australia Extravaganza', price: 185000, image: '/destinations/australia.jpg', slug: 'australia' },
      { title: 'New Zealand Adventure', price: 167300, image: '/destinations/new-zealand.jpg', slug: 'new-zealand' },
    ],
    'Middle East': [
      { title: 'Dubai & Abu Dhabi', price: 34500, image: '/destinations/dubai.jpg', slug: 'dubai' },
      { title: 'Turkey & Cappadocia', price: 78000, image: '/destinations/turkey.jpg', slug: 'turkey' },
    ],
    Africa: [
      { title: 'South Africa Safari', price: 115000, image: '/destinations/south-africa.jpg', slug: 'south-africa' },
      { title: 'Egypt Pyramids & Nile', price: 88000, image: '/destinations/egypt.jpg', slug: 'egypt' },
    ],
    America: [
      { title: 'USA East Coast & West Coast', price: 245000, image: '/destinations/usa.jpg', slug: 'usa' },
    ],
  };

  // India & Around Region Cards
  const indiaRegionCards: Record<string, { title: string; price: number; image: string; slug: string }[]> = {
    North: [
      { title: 'Kashmir', price: 16300, image: '/destinations/kashmir.jpg', slug: 'kashmir' },
      { title: 'Himachal Pradesh', price: 15200, image: '/destinations/himachal.jpg', slug: 'himachal' },
      { title: 'Uttarakhand', price: 12100, image: '/destinations/uttarakhand.jpg', slug: 'uttarakhand' },
      { title: 'Uttar Pradesh (Kashi)', price: 14300, image: '/destinations/up.jpg', slug: 'ayodhya-varanasi' },
    ],
    South: [
      { title: 'Kerala Backwaters', price: 14500, image: '/destinations/kerala.jpg', slug: 'kerala' },
      { title: 'Coorg & Wayanad', price: 13200, image: '/destinations/coorg.jpg', slug: 'coorg' },
      { title: 'Tamil Nadu Temples', price: 15800, image: '/destinations/tamilnadu.jpg', slug: 'rameshwaram' },
    ],
    East: [
      { title: 'Sikkim & Darjeeling', price: 18500, image: '/destinations/sikkim.jpg', slug: 'sikkim' },
      { title: 'Meghalaya Scotland of East', price: 17200, image: '/destinations/meghalaya.jpg', slug: 'meghalaya' },
      { title: 'Puri Jagannath Odisha', price: 12900, image: '/destinations/puri.jpg', slug: 'puri' },
    ],
    West: [
      { title: 'Rajasthan Forts & Palaces', price: 19000, image: '/destinations/rajasthan.jpg', slug: 'rajasthan' },
      { title: 'Goa Beaches & Watersports', price: 11500, image: '/destinations/goa.jpg', slug: 'goa' },
      { title: 'Gujarat Rann of Kutch', price: 16800, image: '/destinations/gujarat.jpg', slug: 'kutch' },
    ],
    Around: [
      { title: 'Bhutan Dragon Kingdom', price: 48000, image: '/destinations/bhutan.jpg', slug: 'bhutan' },
      { title: 'Nepal Kathmandu & Pokhara', price: 24500, image: '/destinations/nepal.jpg', slug: 'nepal' },
      { title: 'Sri Lanka Coastal Paradise', price: 32000, image: '/destinations/sri-lanka.jpg', slug: 'sri-lanka' },
    ],
  };

  // Special Banner items
  const specialBanners = [
    {
      title: 'Singapore',
      subtitle: 'Feel the Magic, Live the Adventure.',
      price: 37800,
      image: '/destinations/singapore.jpg',
      slug: 'singapore',
    },
    {
      title: 'Rajasthan',
      subtitle: 'Grandeur, Reimagined.',
      price: 19000,
      image: '/destinations/rajasthan.jpg',
      slug: 'rajasthan',
    },
  ];

  // Themes data
  const themeCards = [
    {
      title: 'Spiritual',
      description: 'Discover sacred destinations that calm the soul.',
      image: '/destinations/spiritual.jpg',
      tags: ['Ayodhya', 'Jyotirling', 'Char Dham', 'Kailash'],
      slug: 'ayodhya-varanasi',
    },
    {
      title: 'Honeymoon',
      description: 'Celebrate love with dreamy honeymoon getaways',
      image: '/destinations/honeymoon.jpg',
      tags: ['Sunset Dinner Cruise', 'Shikara Ride', 'Floating Breakfast', 'Couple Spa'],
      slug: 'kerala',
    },
    {
      title: 'Luxury',
      description: 'Where comfort, class, and exclusivity come together.',
      image: '/destinations/luxury.jpg',
      tags: ['5 Star Stays', 'Private Transfers', 'Unique Experiences', 'Taj Specials'],
      slug: 'goa',
    },
    {
      title: 'Adventure',
      description: 'Adventures that push limits and create stories.',
      image: '/destinations/adventure.jpg',
      tags: ['Funicular Ride', 'Snorkelling', 'Desert Safari', 'Helicopter ride'],
      slug: 'ladakh',
    },
    {
      title: 'Wildlife',
      description: 'Experience nature in its purest form.',
      image: '/destinations/wildlife.jpg',
      tags: ['Game Drive', 'African penguins', 'National Parks', 'Migration'],
      slug: 'corbett',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Kanan Nanavati',
      date: 'June, 2025',
      text: 'We completed our Chardham Yatra by helicopter on 6th June 2025 as a group of six. Despite initial weather challenges, the travel team ensured smooth darshan and timely return to Dehradun.',
    },
    {
      name: 'Geetha Guruswamy',
      date: 'January, 2026',
      text: 'It was a pleasure traveling with this brand again—first Europe, now Vietnam—both trips were fantastic! We loved the hotels, itinerary, food, and especially our Tour Manager.',
    },
    {
      name: 'Lawrence Yesudass',
      date: 'December, 2025',
      text: 'My family and I enjoyed a wonderful Europe holiday last Christmas. The entire trip was well-planned, seamless, and truly memorable with smooth visa assistance.',
    },
  ];

  // FAQs
  const faqs = [
    {
      q: 'What are the best holiday packages offered by tripcustomizer?',
      a: 'We offer a complete list of holiday packages, including India spiritual tours, international trip packages, and honeymoon escapes. Popular picks include Kerala backwaters, Bali beach holidays, and Dubai family tours.',
    },
    {
      q: 'How to book holiday packages in India with tripcustomizer?',
      a: 'You can easily browse packages on our website, select your preferred travel dates, and request an instant callback or complete your booking online with our travel experts.',
    },
    {
      q: 'Can I customise my holiday package?',
      a: 'Yes! All our packages are 100% customizable. You can adjust flights, upgrade hotel star ratings, add private cab transfers, or include local sightseeing activities.',
    },
    {
      q: 'What is included in a typical package holiday?',
      a: 'A standard holiday package includes hotel accommodations, daily breakfast/meals, airport & city cab transfers, sightseeing passes, and 24x7 customer support.',
    },
    {
      q: 'Are there couples vacation packages available?',
      a: 'Yes, we offer specialized Romantic Honeymoon & Couples packages with candlelit dinners, flower bed decorations, private yacht cruises, and luxury beach resort stays.',
    },
  ];

  // SEO Categories Matrix
  const seoCategories = [
    'Trending International Tour Packages',
    'Most Popular Spiritual Tour Packages',
    'Trending Destinations in India',
    'Trending International Honeymoon Packages',
    'Trending India Honeymoon Packages',
    'Trending Travel Themes',
    'Most Popular India Tourism',
    'Most Popular International Tourism',
  ];

  const seoTags = [
    'Turkey tour packages', 'Singapore tour packages', 'Malaysia tour packages', 'Bali tour packages',
    'Dubai tour packages', 'Mauritius tour packages', 'Maldives tour packages', 'Vietnam tour packages',
    'Cambodia tour packages', 'Seychelles tour packages', 'Australia tour packages', 'Europe tour packages',
    'South Africa tour packages', 'Egypt tour packages', 'Spain tour packages', 'USA tour packages',
    'Japan tour packages', 'Thailand tour packages', 'Azerbaijan tour packages', 'Baku tour packages',
    'Georgia tour packages', 'Kazakhstan tour packages'
  ];

  if (activeTab === 'ALL_PACKAGES') {
    return (
      <div>
        <div className="bg-slate-900 text-white py-3 border-b border-slate-800">
          <Container className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300">Showing All 50+ Pan-India & Global Packages with Filters</span>
            <button
              onClick={() => setActiveTab('HOME')}
              className="bg-brand-600 hover:bg-brand-500 text-white px-3 py-1 rounded-full font-bold transition-all"
            >
              ← Back to Featured Showcase View
            </button>
          </Container>
        </div>
        <HolidayListingView
          initialPackages={DEMO_PACKAGES}
          title="Holiday Tour Packages & Destinations"
          subtitle="Discover 50+ curated international and domestic India tour itineraries with flights, luxury hotels & private transfers."
          badgeText="50+ Verified Tour Packages"
          defaultCategory="ALL"
          defaultRegion="ALL"
        />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SECTION 1: HERO BANNER (Full-width cliff/beach ocean backdrop with centered search) */}
      <div className="relative w-full h-[380px] sm:h-[480px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image
          src="/destinations/hero-holidays.jpg"
          alt="Perfect Holidays"
          fill
          priority
          className="object-cover opacity-65 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full inline-block mb-4 tracking-wider uppercase">
            YOUR JOURNEY, OUR EXPERTISE
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 font-serif drop-shadow-md">
            Perfect Holidays, Crafted Just for You
          </h1>
          <p className="text-slate-200 text-sm sm:text-lg font-medium mb-8 drop-shadow-sm">
            Explore 50+ curated tour packages across India & worldwide destinations
          </p>

          {/* Large Search Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (heroSearch.trim()) {
                window.location.href = `/holidays?search=${encodeURIComponent(heroSearch)}`;
              }
            }}
            className="bg-white p-2 pl-6 rounded-full shadow-2xl max-w-2xl mx-auto flex items-center justify-between border border-slate-100"
          >
            <input
              type="text"
              placeholder='Search "Australia, Kashmir, Dubai, Kerala..."'
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
              className="w-full text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none bg-transparent pr-4"
            />
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-700 text-white p-3 sm:px-6 sm:py-3.5 rounded-full font-bold text-xs flex items-center space-x-2 shrink-0 shadow-md transition-all"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>
        </div>
      </div>

      <Container className="py-12 space-y-16">
        {/* SECTION 2: TRENDING HOLIDAY DESTINATIONS (Signature Oval Pills) */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Trending Holiday Destinations
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Handpicked popular vacation spots for your next big trip
              </p>
            </div>

            {/* Pill Toggle */}
            <div className="bg-slate-200/70 p-1 rounded-full flex space-x-1 shrink-0">
              <button
                onClick={() => setTrendingCategory('INTERNATIONAL')}
                className={`text-xs font-extrabold px-5 py-2 rounded-full transition-all ${
                  trendingCategory === 'INTERNATIONAL'
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                International
              </button>
              <button
                onClick={() => setTrendingCategory('INDIA')}
                className={`text-xs font-extrabold px-5 py-2 rounded-full transition-all ${
                  trendingCategory === 'INDIA'
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                India & Around
              </button>
            </div>
          </div>

          {/* Oval Capsule Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {currentTrending.map((dest, idx) => (
              <Link
                key={idx}
                href={`/holidays/${dest.slug}`}
                className="group relative h-64 sm:h-72 rounded-[50px] sm:rounded-[65px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/60 block bg-slate-900"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80" />

                <div className="absolute top-6 inset-x-0 text-center px-2">
                  <span className="text-white font-black text-sm sm:text-base tracking-wider drop-shadow-md group-hover:text-accent-400 transition-colors uppercase">
                    {dest.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={trendingCategory === 'INTERNATIONAL' ? '/holidays/international' : '/holidays/india'}
              className="bg-brand-700 hover:bg-brand-800 text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md inline-flex items-center space-x-2 transition-all"
            >
              <span>Explore Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* SECTION 3: BEST SELLING PACKAGES */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-slate-200 pb-4 gap-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Best Selling Packages
            </h2>

            {/* Tab underline toggle */}
            <div className="flex space-x-6 text-sm font-extrabold">
              <button
                onClick={() => setBestSellingCategory('INTERNATIONAL')}
                className={`pb-2 transition-all ${
                  bestSellingCategory === 'INTERNATIONAL'
                    ? 'border-b-2 border-brand-700 text-brand-700'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                International
              </button>
              <button
                onClick={() => setBestSellingCategory('INDIA')}
                className={`pb-2 transition-all ${
                  bestSellingCategory === 'INDIA'
                    ? 'border-b-2 border-brand-700 text-brand-700'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                India & Around
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBestSelling.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900 border border-slate-200"
              >
                <Image
                  src={pkg.heroImage}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-5 left-5 right-16 z-10 text-white">
                  <h3 className="font-extrabold text-base sm:text-lg line-clamp-1 group-hover:text-amber-300 transition-colors mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-semibold">
                    Starting at <span className="text-amber-400 font-black text-sm">{formatCurrency(pkg.startingPrice)}</span>
                  </p>
                </div>

                {/* Yellow Action Arrow Button */}
                <Link
                  href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`}
                  className="absolute bottom-4 right-4 z-20 bg-amber-400 hover:bg-amber-300 text-slate-950 p-3.5 rounded-full shadow-lg transition-transform group-hover:scale-110 flex items-center justify-center"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: INTERNATIONAL HOLIDAY SECTION */}
        <div className="bg-amber-50/40 border border-amber-100 p-8 sm:p-10 rounded-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-amber-200/60 pb-4 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                International Holiday
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Curated vacations across continents with flights & visa support
              </p>
            </div>

            {/* Region Sub-tabs */}
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500">
              {(['Europe', 'Asia', 'Oceania', 'Middle East', 'Africa', 'America'] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => setIntlRegionTab(reg)}
                  className={`pb-1 transition-all ${
                    intlRegionTab === reg
                      ? 'border-b-2 border-brand-700 text-brand-700 font-extrabold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(intlRegionCards[intlRegionTab] || intlRegionCards['Europe']).map((card, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-slate-900 border border-slate-200"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute bottom-5 left-5 right-16 z-10 text-white">
                  <h3 className="font-black text-lg group-hover:text-amber-300 transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-semibold">
                    Starting at <span className="text-amber-400 font-black text-sm">{formatCurrency(card.price)}</span>
                  </p>
                </div>

                <Link
                  href={`/holidays/${card.slug}`}
                  className="absolute bottom-4 right-4 z-20 bg-amber-400 hover:bg-amber-300 text-slate-950 p-3.5 rounded-full shadow-md transition-transform group-hover:scale-110 flex items-center justify-center"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: INDIA & AROUND HOLIDAY SECTION */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-slate-200 pb-4 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                India & Around Holiday
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Explore majestic mountains, serene backwaters & sacred heritage trails
              </p>
            </div>

            {/* Region Sub-tabs */}
            <div className="flex space-x-6 text-xs font-bold text-slate-500">
              {(['North', 'South', 'East', 'West', 'Around'] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => setIndiaRegionTab(reg)}
                  className={`pb-1 transition-all ${
                    indiaRegionTab === reg
                      ? 'border-b-2 border-brand-700 text-brand-700 font-extrabold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(indiaRegionCards[indiaRegionTab] || indiaRegionCards['North']).map((card, idx) => (
              <div
                key={idx}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-slate-900 border border-slate-200"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute bottom-5 left-5 right-14 z-10 text-white">
                  <h3 className="font-black text-lg group-hover:text-amber-300 transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-semibold">
                    Starting at <span className="text-amber-400 font-black text-sm">{formatCurrency(card.price)}</span>
                  </p>
                </div>

                <Link
                  href={`/holidays/${card.slug}`}
                  className="absolute bottom-4 right-4 z-20 bg-amber-400 hover:bg-amber-300 text-slate-950 p-3 rounded-full shadow-md transition-transform group-hover:scale-110 flex items-center justify-center"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: HONEYMOON PARADISE HERO BANNER */}
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[350px] sm:h-[420px] bg-slate-900 flex items-center justify-center text-center">
          <Image
            src="/destinations/honeymoon-hero.jpg"
            alt="Honeymoon Escape"
            fill
            className="object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40" />

          <div className="relative z-10 px-6 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight leading-tight">
              Escape to paradise with our exclusive honeymoon packages
            </h2>
            <Link
              href="/honeymoon/india"
              className="inline-flex items-center space-x-2 border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-950 text-amber-300 font-extrabold text-sm px-8 py-3.5 rounded-full transition-all shadow-xl"
            >
              <span>View All Packages</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>
        </div>

        {/* SECTION 7: THOMAS COOK SPECIALS (BRAND SPECIALS) */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-extrabold text-brand-600 uppercase tracking-wider block mb-1">CURATED EXPERIENCES</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                tripcustomizer Specials
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('ALL_PACKAGES')}
              className="hidden sm:flex items-center space-x-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs px-4 py-2 rounded-xl transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Browse All 50+ Packages with Filters →</span>
            </button>
          </div>

          {/* Top Row Grid (2 Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Left Card: Char Dham By Helicopter */}
            <div className="lg:col-span-5 relative h-72 rounded-3xl overflow-hidden bg-slate-900 text-white p-7 flex flex-col justify-between shadow-xl group">
              <Image
                src="/destinations/char-dham.jpg"
                alt="Char Dham By Helicopter"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-900/40" />

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1">
                    Char Dham By Helicopter
                  </h3>
                  <p className="text-slate-300 text-xs font-semibold">Plan your journey Now</p>
                </div>
                <span className="bg-amber-400/90 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Bhakti Special
                </span>
              </div>

              <div className="relative z-10">
                <p className="text-xs text-slate-300 font-bold mb-3">
                  Starting at <span className="text-amber-400 font-black text-lg">₹ 1,48,500.00</span>
                </p>
                <Link
                  href="/holidays/char-dham/complete-char-dham-yatra-9n10d"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs px-4 py-2.5 rounded-full inline-flex items-center space-x-1.5 shadow-md transition-all"
                >
                  <span>View More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card: Featured Banner Slider */}
            <div className="lg:col-span-7 relative h-72 rounded-3xl overflow-hidden bg-brand-900 text-white p-7 flex flex-col justify-between shadow-xl group">
              <Image
                src={specialBanners[specialsSlide].image}
                alt={specialBanners[specialsSlide].title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-900/50" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {specialBanners[specialsSlide].title}
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm font-medium">
                  {specialBanners[specialsSlide].subtitle}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-300 font-bold mb-3">
                    Starting at <span className="text-amber-400 font-black text-lg">{formatCurrency(specialBanners[specialsSlide].price)}</span>
                  </p>
                  <Link
                    href={`/holidays/${specialBanners[specialsSlide].slug}`}
                    className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs px-5 py-2.5 rounded-full inline-flex items-center space-x-1.5 shadow-md transition-all"
                  >
                    <span>View More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Slider Dots */}
                <div className="flex space-x-2">
                  {specialBanners.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSpecialsSlide(i)}
                      className={`h-2 rounded-full transition-all ${
                        specialsSlide === i ? 'w-6 bg-amber-400' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row Grid (3 Column Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bottom Card 1: Video Card */}
            <div className="relative h-64 rounded-3xl overflow-hidden bg-slate-950 text-white p-6 flex flex-col justify-between shadow-lg group border border-slate-800">
              <Image
                src="/destinations/dubai.jpg"
                alt="Book your holiday in minutes"
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/40" />

              <div className="relative z-10">
                <h4 className="font-extrabold text-sm sm:text-base leading-snug text-white">
                  Book your holiday in minutes just the way you want
                </h4>
                <p className="text-[11px] text-slate-300 mt-1">tripcustomizer</p>
              </div>

              {/* YouTube Play Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-2xl shadow-2xl transition-transform group-hover:scale-110 cursor-pointer">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span>Watch on YouTube</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Bottom Card 2: Build Your Own Itinerary! */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden h-64">
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  CUSTOMIZE TRIP
                </span>
                <h4 className="font-black text-xl text-slate-900 mb-1">
                  Build Your Own Itinerary!
                </h4>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  Customize your flights, hotels & sightseeing in just 10 minutes
                </p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <Link
                  href="/customize-trip"
                  className="bg-brand-700 hover:bg-brand-800 text-white p-3 rounded-full shadow-md transition-transform hover:scale-105"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </Link>
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src="/destinations/singapore.jpg"
                    alt="Build Itinerary"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Card 3: New Zealand / Special Destination */}
            <div className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-brand-950 text-white p-6 flex flex-col justify-between shadow-lg group border border-slate-800">
              <Image
                src="/destinations/new-zealand.jpg"
                alt="New Zealand"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="relative z-10">
                <h4 className="font-black text-xl text-white">New Zealand</h4>
                <p className="text-xs text-slate-200 font-medium mt-1">Your Greatest Adventure Awaits.</p>
              </div>

              <div className="relative z-10">
                <p className="text-xs text-slate-300 font-bold mb-3">
                  Starting at <span className="text-amber-400 font-black text-base">₹ 1,67,300.00</span>
                </p>
                <Link
                  href="/holidays/new-zealand"
                  className="bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs px-4 py-2 rounded-full inline-flex items-center space-x-1.5 shadow-md transition-all"
                >
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 8: NEED HELP CHOOSING YOUR DESTINATION? (LEAD FORM BANNER) */}
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
          <Image
            src="/destinations/lead-form-hero.jpg"
            alt="Need Help Choosing Destination"
            fill
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

          <div className="relative z-10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-white space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black font-serif tracking-tight leading-tight">
                Need help choosing your destination?
              </h2>
              <p className="text-slate-200 text-base sm:text-xl font-medium max-w-lg">
                Speak to our travel expert for a trip tailored just for you.
              </p>
            </div>

            {/* Right Callback Form Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you ${leadForm.name}! Our travel expert will call you on ${leadForm.mobile} shortly.`);
                }}
                className="space-y-4 text-xs font-semibold"
              >
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Enter Name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="flex space-x-2">
                  <span className="bg-slate-100 border border-slate-200 rounded-xl px-3 py-3 font-bold text-slate-600 flex items-center">
                    +91
                  </span>
                  <input
                    required
                    type="tel"
                    placeholder="Enter Mobile No."
                    value={leadForm.mobile}
                    onChange={(e) => setLeadForm({ ...leadForm, mobile: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <input
                    required
                    type="email"
                    placeholder="Enter Mail ID"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 block mb-1.5">Select Product Type</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="radio"
                        name="productType"
                        value="Domestic"
                        checked={leadForm.productType === 'Domestic'}
                        onChange={(e) => setLeadForm({ ...leadForm, productType: e.target.value })}
                        className="accent-brand-600"
                      />
                      <span>Domestic</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="radio"
                        name="productType"
                        value="International"
                        checked={leadForm.productType === 'International'}
                        onChange={(e) => setLeadForm({ ...leadForm, productType: e.target.value })}
                        className="accent-brand-600"
                      />
                      <span>International</span>
                    </label>
                  </div>
                </div>

                <div>
                  <select
                    value={leadForm.destination}
                    onChange={(e) => setLeadForm({ ...leadForm, destination: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Ayodhya & Varanasi">Ayodhya & Varanasi Special</option>
                    <option value="Kashmir">Kashmir Paradise</option>
                    <option value="Kerala">Kerala Backwaters</option>
                    <option value="Char Dham Yatra">Char Dham Yatra by Heli</option>
                    <option value="Rajasthan">Royal Rajasthan</option>
                    <option value="Dubai">Dubai & UAE</option>
                    <option value="Europe">Europe Special</option>
                  </select>
                </div>

                <div className="flex items-start space-x-2 text-[11px] text-slate-500">
                  <input
                    type="checkbox"
                    checked={leadForm.agree}
                    onChange={(e) => setLeadForm({ ...leadForm, agree: e.target.checked })}
                    className="mt-0.5 accent-brand-600 rounded"
                  />
                  <span>I accept the Privacy Policy and authorize travel experts to contact me with details.</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-700 hover:bg-brand-800 text-white font-black text-sm py-3.5 rounded-full shadow-lg flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Request a Callback</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SECTION 9: EXPLORE THEMES THAT INSPIRE TRAVEL */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Explore Themes that Inspire Travel
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Find itineraries tailored to your unique travel style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {themeCards.map((theme, i) => (
              <Link
                key={i}
                href={`/holidays/${theme.slug}`}
                className="group relative h-[380px] rounded-[36px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900 border border-slate-200 block"
              >
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Top Tags Pills */}
                <div className="absolute top-4 left-4 right-12 z-10 flex flex-wrap gap-1.5">
                  {theme.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/20 backdrop-blur-md text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Top Right Arrow */}
                <div className="absolute top-4 right-4 z-20 bg-amber-400 group-hover:bg-amber-300 text-slate-950 p-2.5 rounded-full shadow-md transition-transform group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                  <h3 className="font-black text-2xl group-hover:text-amber-300 transition-colors mb-1">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-slate-200 font-medium leading-snug line-clamp-2">
                    {theme.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SECTION 10: WHY THOMAS COOK ? (AIRPORT LOUNGE FAMILY BACKDROP & 5 CARDS) */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Why tripcustomizer ?
          </h2>

          <div className="relative rounded-[40px] overflow-hidden shadow-xl min-h-[380px] sm:h-[420px] bg-slate-900 p-6 sm:p-10 flex flex-col justify-end">
            <Image
              src="/destinations/why-thomas-cook.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* 5 Bottom Overlay Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-gradient-to-b from-orange-500/90 to-amber-600/90 backdrop-blur-md p-5 rounded-3xl text-white shadow-lg">
                <h3 className="font-black text-base mb-1">Trusted Advisor</h3>
                <p className="text-xs text-orange-100 leading-snug">Trusted Since 1881, Designed for Modern Journeys.</p>
              </div>

              <div className="bg-gradient-to-b from-orange-600/90 to-rose-600/90 backdrop-blur-md p-5 rounded-3xl text-white shadow-lg">
                <h3 className="font-black text-base mb-1">Customized Holidays</h3>
                <p className="text-xs text-orange-100 leading-snug">Offers the ability to personalize your holidays according to your needs.</p>
              </div>

              <div className="bg-gradient-to-b from-blue-600/90 to-indigo-600/90 backdrop-blur-md p-5 rounded-3xl text-white shadow-lg">
                <h3 className="font-black text-base mb-1">Wide Varieties of Holidays</h3>
                <p className="text-xs text-blue-100 leading-snug">From adventure trips to romantic honeymoon getaways, we have your back.</p>
              </div>

              <div className="bg-gradient-to-b from-cyan-600/90 to-blue-600/90 backdrop-blur-md p-5 rounded-3xl text-white shadow-lg">
                <h3 className="font-black text-base mb-1">Seamless Booking</h3>
                <p className="text-xs text-cyan-100 leading-snug">Book from a wide selection of travel plans with easy online payments.</p>
              </div>

              <div className="bg-gradient-to-b from-amber-400 to-yellow-500 text-slate-950 p-5 rounded-3xl shadow-lg">
                <h3 className="font-black text-base mb-1">Convenient Holidays</h3>
                <p className="text-xs text-slate-900 font-medium leading-snug">All-in-one travel plans featuring accommodations, flights, activities, and meals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 11: WHY CUSTOMERS LOVE THOMAS COOK (LEGACY STATS & TESTIMONIALS) */}
        <div className="bg-amber-50/50 border border-amber-200/60 rounded-[40px] p-8 sm:p-12 shadow-sm text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-amber-950 font-serif mb-10">
            Why Customers Love tripcustomizer
          </h2>

          {/* Stat Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-amber-200/80 pb-10">
            <div>
              <span className="text-3xl sm:text-5xl font-black text-amber-900 block mb-1">140+</span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Years of legacy</span>
            </div>
            <div className="border-l border-amber-200">
              <span className="text-3xl sm:text-5xl font-black text-amber-900 block mb-1">4,000+</span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Tours</span>
            </div>
            <div className="border-l border-amber-200">
              <span className="text-3xl sm:text-5xl font-black text-amber-900 block mb-1">1M+</span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Happy Travelers</span>
            </div>
            <div className="border-l border-amber-200">
              <span className="text-3xl sm:text-5xl font-black text-amber-900 block mb-1">50+</span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Awards</span>
            </div>
          </div>

          {/* Testimonial Cards Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-amber-100 shadow-md flex flex-col justify-between space-y-4">
                <div>
                  <Quote className="w-8 h-8 text-amber-400 mb-2" />
                  <p className="text-xs text-slate-600 font-medium leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center space-x-3 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 bg-brand-100 text-brand-700 font-black rounded-full flex items-center justify-center text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{t.name}</h4>
                    <span className="text-[10px] text-slate-400">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 12: INSTA MOMENTS THAT TELL A STORY (REELS REEL CAROUSEL) */}
        <div className="bg-slate-900 text-white rounded-[40px] p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 border border-rose-400/50 bg-rose-500/10 text-rose-300 font-bold text-xs px-3.5 py-1 rounded-full mb-3">
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow Us @tripcustomizerIndia</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-serif">
                Insta Moments That Tell a Story
              </h2>
            </div>
            <div className="flex space-x-2">
              <button className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-md">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="bg-brand-600 hover:bg-brand-500 text-white p-3 rounded-full shadow-md">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-3xl overflow-hidden bg-slate-950 shadow-lg group border border-slate-800">
              <Image src="/destinations/insta-reel-1.jpg" alt="Insta Reel 1" fill className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white shadow-xl cursor-pointer">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white">
                Antarctica Expedition & Penguins
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden bg-slate-950 shadow-lg group border border-slate-800">
              <Image src="/destinations/insta-reel-2.jpg" alt="Insta Reel 2" fill className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white shadow-xl cursor-pointer">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white">
                Snow Corridors High Altitude Pass
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden bg-slate-950 shadow-lg group border border-slate-800">
              <Image src="/destinations/insta-reel-3.jpg" alt="Insta Reel 3" fill className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white shadow-xl cursor-pointer">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-xs font-bold font-serif italic text-white text-center">
                "Where every step is a prayer"
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 13: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        <div className="bg-white border border-slate-200 rounded-[40px] p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all border ${
                    isOpen
                      ? 'bg-brand-600 text-white border-brand-600 shadow-md p-6'
                      : 'bg-slate-50 text-slate-800 border-slate-200 p-5 hover:border-brand-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-extrabold text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-brand-50 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 14: SEO DIRECTORY & QUICK LINKS MATRIX */}
        <div className="bg-slate-100/70 border border-slate-200 rounded-[40px] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Category List */}
            <div className="lg:col-span-4 space-y-2 border-r border-slate-200 pr-6">
              {seoCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSeoCategory(idx)}
                  className={`w-full text-left text-xs font-bold py-2.5 px-4 rounded-xl transition-all ${
                    seoCategory === idx
                      ? 'bg-white text-brand-700 border-l-4 border-brand-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Blue Pill Tag Matrix */}
            <div className="lg:col-span-8 flex flex-wrap gap-2.5 items-start">
              {seoTags.map((tag, idx) => (
                <Link
                  key={idx}
                  href={`/holidays?search=${encodeURIComponent(tag.split(' ')[0])}`}
                  className="bg-white hover:bg-brand-50 text-brand-700 hover:text-brand-800 border border-brand-200 text-xs font-bold px-4 py-2 rounded-full transition-all shadow-2xs"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 15: EXPLORE ALL 50+ PACKAGES WITH FILTERS BANNER */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-accent-400/20 text-accent-400 border border-accent-400/30 text-xs font-bold px-3 py-1 rounded-full inline-block">
              COMPLETE TOUR DIRECTORY
            </span>
            <h3 className="text-2xl sm:text-4xl font-black">Looking for all 50+ Packages & Filters?</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Filter packages by price, hotel star rating, duration, and theme using our complete interactive sidebar filter.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('ALL_PACKAGES')}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all shrink-0"
          >
            BROWSE ALL 50+ PACKAGES →
          </button>
        </div>
      </Container>
    </div>
  );
}

export const ThomasCookHolidayView = tripcustomizerHolidayView;
