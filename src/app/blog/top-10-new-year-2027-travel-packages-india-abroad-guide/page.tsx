import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Calendar,
  Clock,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Plane,
  Palmtree,
  ArrowRight,
  HelpCircle,
  Flame,
  Star,
  Award,
  Music,
} from 'lucide-react';
import { NewYear2027InquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 10 Best Places to Celebrate New Year 2027 in India & Abroad: Budget Packages 🎆🍾',
  description:
    'Best Christmas and New Year 2027 holiday destinations! Official guide to Goa Sunburn, Dubai Burj Khalifa fireworks, Thailand beach parties, Kashmir snow, Bali pool villas & Rajasthan royal palaces with packages starting @ ₹9,999.',
  keywords: [
    'new year 2027 travel packages',
    'best places to celebrate new year 2027 in india',
    'christmas new year holiday packages with flight',
    'goa sunburn new year packages 2027',
    'dubai new year packages from mumbai ahmedabad delhi',
    'thailand new year party package for couple',
    'kashmir snowfall gulmarg package new year',
    'cheap international trips for new year 2027',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-new-year-2027-travel-packages-india-abroad-guide',
  },
  openGraph: {
    title: 'Top 10 Places to Celebrate New Year 2027: India & International Packages 🎆🍾',
    description:
      'Plan an epic New Year 2027 countdown! Compare Goa beach shacks, Dubai fireworks, Thailand island parties, and Kashmir winter snow with confirmed 4-star hotels and flights.',
    url: 'https://www.tripcustomizer.com/blog/top-10-new-year-2027-travel-packages-india-abroad-guide',
    images: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 New Year 2027 Holiday Destinations & Packages | Trip Customizer',
    description:
      'Curated countdown to the best Christmas & New Year 2027 vacation spots with flights, parties, and luxury stays.',
    images: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function NewYear2027TravelGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Best Places to Celebrate New Year 2027 in India & Abroad: Budget Packages 🎆🍾',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Festive Travel Editorial',
      url: 'https://www.tripcustomizer.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trip Customizer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tripcustomizer.com/logo-square.png',
      },
    },
    datePublished: '2026-10-30',
    dateModified: '2026-10-30',
    description:
      'Comprehensive countdown of the top 10 Christmas and New Year 2027 travel destinations across India, Southeast Asia, and the Middle East, with starting package prices, flight connectivity, and booking hacks.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.tripcustomizer.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Travel Blog',
        item: 'https://www.tripcustomizer.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Top 10 New Year 2027 Destinations',
        item: 'https://www.tripcustomizer.com/blog/top-10-new-year-2027-travel-packages-india-abroad-guide',
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 10 Places to Celebrate New Year 2027',
    numberOfItems: 10,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Goa (Sunburn & Beach Fireworks)', url: 'https://www.tripcustomizer.com/holidays/goa' },
      { '@type': 'ListItem', position: 2, name: 'Dubai (Burj Khalifa Mega Fireworks & DSF)', url: 'https://www.tripcustomizer.com/holidays/dubai' },
      { '@type': 'ListItem', position: 3, name: 'Thailand (Bangkok & Pattaya Neon Countdown)', url: 'https://www.tripcustomizer.com/holidays/thailand' },
      { '@type': 'ListItem', position: 4, name: 'Kashmir (Gulmarg Powder Snow & Houseboats)', url: 'https://www.tripcustomizer.com/holidays/kashmir' },
      { '@type': 'ListItem', position: 5, name: 'Bali (Seminyak Beach Clubs & Ubud Villas)', url: 'https://www.tripcustomizer.com/holidays/bali' },
      { '@type': 'ListItem', position: 6, name: 'Manali & Solang Valley (Winter Snowfall)', url: 'https://www.tripcustomizer.com/holidays/himachal' },
      { '@type': 'ListItem', position: 7, name: 'Kerala (Alleppey Houseboat & Varkala Cliff)', url: 'https://www.tripcustomizer.com/holidays/kerala' },
      { '@type': 'ListItem', position: 8, name: 'Rajasthan (Udaipur Lake Palaces & Jaisalmer Camp)', url: 'https://www.tripcustomizer.com/holidays/rajasthan' },
      { '@type': 'ListItem', position: 9, name: 'Vietnam (Hanoi, Halong Bay & Da Nang Fireworks)', url: 'https://www.tripcustomizer.com/holidays/vietnam' },
      { '@type': 'ListItem', position: 10, name: 'Singapore (Marina Bay Countdown & Sentosa Parties)', url: 'https://www.tripcustomizer.com/holidays/singapore' },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is the best place to celebrate New Year 2027 in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Goa is the top-ranked destination in India for nightlife, beach parties, and Sunburn Festival, while Gulmarg (Kashmir) and Manali offer magical winter snowfall and bonfire celebrations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which international destination is best for New Year 2027 under budget?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thailand (Pattaya and Bangkok) and Bali (Indonesia) are the most budget-friendly international destinations for Indians, with all-inclusive 5-day packages starting from ₹28,999 to ₹34,999 with flights and visa on arrival.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I book Christmas and New Year 2027 holiday packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Travelers should book between October and mid-November to avoid the 100% to 150% peak season surge on airfares and hotel room tariffs. Booking 45 days in advance guarantees early-bird discounts.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Top 10 New Year 2027 Travel Guide',
    url: 'https://www.tripcustomizer.com/blog/top-10-new-year-2027-travel-packages-india-abroad-guide',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const destinations = [
    {
      rank: 1,
      name: 'Goa (North & South Beaches)',
      vibe: 'Beach Parties, Sunburn & Shacks',
      duration: '4 Days / 3 Nights',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/goa',
      highlight: 'Sunburn Festival passes, Anjuna & Vagator beach party tickets, candlelit seafood beach shacks, and midnight fireworks.',
    },
    {
      rank: 2,
      name: 'Dubai & UAE (Burj Khalifa Mega Show)',
      vibe: 'Luxury Skyline, Fireworks & DSF',
      duration: '5 Days / 4 Nights',
      price: '₹36,999',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/dubai',
      highlight: 'Burj Khalifa midnight light-and-sound fireworks, Dubai Shopping Festival discounts, Desert Safari BBQ, and Marina yacht parties.',
    },
    {
      rank: 3,
      name: 'Thailand (Bangkok & Pattaya)',
      vibe: 'Tropical Islands & Nightlife',
      duration: '5 Days / 4 Nights',
      price: '₹28,999',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/thailand',
      highlight: 'CentralWorld Bangkok mega countdown, Pattaya Walking Street clubs, Coral Island speedboat rides, and visa-free travel for Indians.',
    },
    {
      rank: 4,
      name: 'Kashmir (Gulmarg & Dal Lake)',
      vibe: 'Powder Snow & Houseboat Romance',
      duration: '6 Days / 5 Nights',
      price: '₹14,999',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/kashmir',
      highlight: 'Gulmarg Gondola Phase 2 snow rides, cozy cedar houseboats with Kangri heaters, snow skiing, and winter mountain bonfires.',
    },
    {
      rank: 5,
      name: 'Bali (Seminyak & Ubud)',
      vibe: 'Beach Clubs, Pool Villas & Sunset',
      duration: '6 Days / 5 Nights',
      price: '₹32,999',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/bali',
      highlight: 'Finns and Atlas Beach Club New Year celebrations, private pool villa romantic dinners, Nusa Penida island hopping, and Bali swing.',
    },
    {
      rank: 6,
      name: 'Himachal (Manali & Solang Valley)',
      vibe: 'Snowflakes, Pine Valleys & Cafes',
      duration: '4 Days / 3 Nights',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/himachal',
      highlight: 'Atal Tunnel snow excursions, Mall Road midnight celebrations, cozy riverside wooden cottages, and Solang snowmobiles.',
    },
    {
      rank: 7,
      name: 'Kerala (Alleppey & Munnar)',
      vibe: 'Backwaters, Tea Hills & Serenity',
      duration: '5 Days / 4 Nights',
      price: '₹11,999',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/kerala',
      highlight: 'Private deluxe houseboat cruise across Vembanad Lake, foggy Munnar tea plantation strolls, and Cochin carnival festivities.',
    },
    {
      rank: 8,
      name: 'Rajasthan (Udaipur & Jaisalmer)',
      vibe: 'Royal Palaces & Desert Dunes',
      duration: '5 Days / 4 Nights',
      price: '₹13,500',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/rajasthan',
      highlight: 'Thar desert Swiss tent gala dinner with Kalbelia folk dance, Udaipur Lake Pichola fireworks, and heritage haveli stays.',
    },
    {
      rank: 9,
      name: 'Vietnam (Hanoi, Halong Bay & Da Nang)',
      vibe: 'Limestone Bays, Street Food & Lanterns',
      duration: '6 Days / 5 Nights',
      price: '₹34,999',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/vietnam',
      highlight: 'Halong Bay luxury overnight cruise, Golden Bridge Ba Na Hills, Hoi An ancient lantern countdown, and effortless e-visa.',
    },
    {
      rank: 10,
      name: 'Singapore (Marina Bay Sands)',
      vibe: 'Futuristic Skyline & Fireworks',
      duration: '5 Days / 4 Nights',
      price: '₹44,999',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=600&auto=format&fit=crop',
      slug: '/holidays/singapore',
      highlight: 'Spectacular Marina Bay countdown light projections and fireworks, Universal Studios Sentosa, and Gardens by the Bay.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <Container className="py-3">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/blog" className="hover:text-blue-600 transition">Travel Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-semibold truncate">Top 10 New Year 2027 Destinations</span>
          </nav>
        </Container>
      </div>

      {/* Hero Header */}
      <section className="bg-brand-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Festive Countdown • New Year 2027 Special</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Top 10 Best Places to Celebrate New Year 2027 in India &amp; Abroad: Budget Holiday Packages 🎆🍾
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Bid farewell to 2026 and welcome 2027 in style! From crazy beach parties in Goa and neon nightlife in Thailand to snow bonfires in Gulmarg and luxury fireworks in Dubai, here is your ultimate travel guide with verified package costs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-rose-400" />
                <span>Updated Oct 30, 2026</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>8 Min Read • 100% Verified</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Early Bird Slots Open</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Layout */}
      <Container className="py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Area */}
          <main className="lg:col-span-8 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
                alt="New Year 2027 Celebration Fireworks"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                  Global Countdown Hotspots
                </div>
                <div className="text-lg sm:text-xl font-black">
                  Fireworks, Beaches, Mountain Snow &amp; Festive Feasts
                </div>
              </div>
            </div>

            {/* AEO Quick Direct Answer Block */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 text-rose-800 font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                  <Flame className="w-3.5 h-3.5 text-rose-600" />
                  <span>AEO Quick Answer: Best New Year 2027 Trips</span>
                </div>
                <span className="text-xs text-slate-500 font-semibold">Verified by Trip Customizer</span>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70">
                <h2 className="aeo-question text-base sm:text-lg font-extrabold text-slate-950 mb-2">
                  What are the best places to celebrate New Year 2027 for Indian travelers?
                </h2>
                <p className="speakable-content aeo-answer text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  The top places to celebrate New Year 2027 are <strong>Goa, Dubai, Thailand (Bangkok &amp; Pattaya), Kashmir (Gulmarg), and Bali</strong>. Budget domestic packages start from <strong>₹9,999 to ₹14,999 per person</strong>, while international packages with round-trip flights start from <strong>₹28,999 to ₹36,999</strong>, including verified 4-star hotels, airport transfers, and festive dinners.
                </p>
              </div>
            </section>

            {/* 10 Destinations Detailed Breakdown */}
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-slate-950">
                Top 10 Destinations Ranked by Experience, Vibe &amp; Cost
              </h2>

              <div className="space-y-6">
                {destinations.map((dest) => (
                  <div
                    key={dest.rank}
                    className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-brand-500 transition-all shadow-sm flex flex-col md:flex-row gap-6 items-center"
                  >
                    <div className="relative w-full md:w-56 h-48 md:h-40 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 240px"
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-black px-2.5 py-1 rounded-xl">
                        #{dest.rank}
                      </div>
                    </div>

                    <div className="flex-1 space-y-2.5 text-left w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-black text-slate-900">
                          {dest.name}
                        </h3>
                        <span className="text-sm font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          Starting {dest.price}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">{dest.duration}</span>
                        <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md">{dest.vibe}</span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {dest.highlight}
                      </p>

                      <div className="pt-2">
                        <Link
                          href={dest.slug}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
                        >
                          <span>Explore Verified Packages &rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Embedded Lead Capture Form */}
            <div id="book-new-year">
              <NewYear2027InquiryForm />
            </div>

            {/* FAQs for Search Snippets */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-rose-600" />
                <span>New Year 2027 Travel FAQs</span>
              </h2>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-extrabold text-slate-900 mb-1">
                    Is Sunburn Goa tickets included in Goa New Year packages?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Yes, Trip Customizer provides options that bundle General Admission (GA) or VIP Sunburn Festival passes with hotel stays in North Goa and private scooter or car rentals.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-extrabold text-slate-900 mb-1">
                    Can families travel to Thailand or Dubai for New Year?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Absolutely! Both Dubai and Thailand are world-class family holiday destinations featuring theme parks, shopping festivals, desert safaris, and beach resorts suitable for all age groups.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sticky Sidebar */}
          <aside className="lg:col-span-4 sticky top-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  New Year Holiday Specials
                </span>
                <span className="bg-rose-100 text-rose-800 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                  LIMITED SLOTS
                </span>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4 text-xs text-slate-600">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-bold text-slate-900">Goa Sunburn (4D/3N)</span>
                  <span className="font-extrabold text-emerald-600">₹12,999</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-bold text-slate-900">Dubai DSF Flights (5D/4N)</span>
                  <span className="font-extrabold text-emerald-600">₹36,999</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-bold text-slate-900">Thailand (5D/4N)</span>
                  <span className="font-extrabold text-emerald-600">₹28,999</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-bold text-slate-900">Gulmarg Snow (5D/4N)</span>
                  <span className="font-extrabold text-emerald-600">₹14,999</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-bold text-slate-900">Bali Pool Villa (6D/5N)</span>
                  <span className="font-extrabold text-emerald-600">₹32,999</span>
                </div>
              </div>

              <a
                href="#book-new-year"
                className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all block text-center"
              >
                Claim New Year Early Bird Discount &rarr;
              </a>

              <a
                href="https://wa.me/917408763401?text=Hi%20TripCustomizer%20Team,%20I%20am%20looking%20for%20New%20Year%202027%20holiday%20packages."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold text-xs py-3 rounded-xl transition-all block text-center"
              >
                WhatsApp Concierge (+91 7408763401)
              </a>
            </div>

            {/* Quick Sitelinks */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md space-y-3">
              <h3 className="text-base font-bold text-amber-300">
                Explore More Vacation Portals
              </h3>
              <div className="space-y-2 pt-1 text-xs font-semibold">
                <Link
                  href="/holidays"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between"
                >
                  <span>All Holiday Packages</span>
                  <span className="text-amber-400">&rarr;</span>
                </Link>
                <Link
                  href="/honeymoon"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between"
                >
                  <span>Honeymoon Specials</span>
                  <span className="text-amber-400">&rarr;</span>
                </Link>
                <Link
                  href="/packages"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between"
                >
                  <span>Packages by City</span>
                  <span className="text-amber-400">&rarr;</span>
                </Link>
                <Link
                  href="/char-dham"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between"
                >
                  <span>Spiritual Yatras</span>
                  <span className="text-amber-400">&rarr;</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
