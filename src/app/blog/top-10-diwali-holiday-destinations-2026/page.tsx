import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Calendar,
  User,
  Clock,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Globe2,
  Flame,
  ArrowRight,
  HelpCircle,
  Thermometer,
  Zap,
} from 'lucide-react';
import { DiwaliBlogInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 10 Best Diwali Holiday Destinations in 2026: Dubai, Rajasthan, Bali, Goa & Kashmir 🪔✨',
  description:
    'Celebrate Diwali vacation 2026 in style! Explore top 10 domestic and international festive getaways: Udaipur royal palaces, Dubai fireworks, Bali pool villas, Goa beaches & Varanasi Dev Deepawali. Packages starting @ ₹12,999.',
  keywords: [
    'diwali holiday destinations 2026',
    'best places to visit in diwali vacation',
    'diwali tour packages for family',
    'dubai diwali holiday package',
    'rajasthan diwali tour package',
    'goa diwali holiday packages',
    'bali diwali packages for couple',
    'varanasi dev deepawali tour',
    'kashmir autumn diwali tour',
    'andaman diwali tour packages',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-diwali-holiday-destinations-2026',
  },
  openGraph: {
    title: 'Top 10 Best Diwali Holiday Destinations in 2026 🪔✨ | Trip Customizer',
    description:
      'Plan your ultimate 2026 Diwali festive vacation. 4-star verified resorts, private cabs, festive dining, and instant 10-minute quotes.',
    url: 'https://www.tripcustomizer.com/blog/top-10-diwali-holiday-destinations-2026',
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Best Diwali Holiday Destinations 2026 | Trip Customizer',
    description: 'Explore top Diwali getaways: Dubai, Rajasthan, Bali, Goa & Varanasi with customized festive itineraries.',
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralDiwaliHolidayDestinationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Best Diwali Holiday Destinations in 2026: Dubai, Rajasthan, Bali, Goa & Kashmir 🪔✨',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Senior Travel Editorial',
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
    datePublished: '2026-10-12',
    dateModified: '2026-10-12',
    description:
      'The definitive 2026 master guide to top Diwali vacation getaways across India and international retreats, complete with festive itineraries, flight hacks, and transparent package pricing.',
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
        name: 'Blog',
        item: 'https://www.tripcustomizer.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Top 10 Diwali Holiday Destinations 2026',
        item: 'https://www.tripcustomizer.com/blog/top-10-diwali-holiday-destinations-2026',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which are the best Diwali holiday destinations in India for families in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rajasthan (Udaipur & Jaipur), Varanasi (for Dev Deepawali ghat lighting), Goa (for beachside celebrations), and Kashmir (golden autumn Chinar foliage) are the most popular domestic Diwali holiday destinations in India.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which international destinations celebrate Diwali with grand fireworks and events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dubai (UAE) hosts spectacular Diwali fireworks at Dubai Festival City and Al Seef with deep shopping discounts. Bali (Indonesia) and Singapore (Little India deepavali light-up) are also top international festive choices.',
        },
      },
      {
        '@type': 'Question',
        name: 'How early should I book Diwali 2026 holiday packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Because Diwali is peak travel season in India, flight tickets and premium resort rooms increase by 40-70% within 2 weeks of the festival. Booking 3 to 4 weeks in advance guarantees confirmed flights and best resort room allocations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trip Customizer provide private cabs and customizable meal plans for Diwali tours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All Trip Customizer festive packages include dedicated sanitized private cabs, handpicked 4-star/5-star hotels, daily festive breakfasts, and 24x7 travel concierge support.',
        },
      },
    ],
  };

  const diwaliDestinations = [
    {
      rank: '01',
      name: 'Rajasthan — Royal Palaces of Light',
      sub: 'Jaipur, Udaipur Lake City & Jodhpur Forts',
      temp: '20°C to 28°C (Pleasant Autumn)',
      price: '₹ 17,999.00',
      duration: '5 Days / 4 Nights',
      bestFor: 'Families, Heritage Lovers & Royal Celebrations',
      highlights:
        'Witness Jaipur pink city illuminated by millions of earthen diyas and heritage lights, private boat cruise on Lake Pichola in Udaipur, City Palace illumination, and luxury haveli stays.',
      packageUrl: '/holidays/rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Arrival Jaipur & Johari Bazaar lights tour | Day 2: Amer Fort & Hawa Mahal | Day 3: Scenic drive to Udaipur | Day 4: Lake Pichola boat ride & City Palace | Day 5: Saheliyon-ki-Bari & departure',
    },
    {
      rank: '02',
      name: 'Dubai, UAE — Grand City Fireworks',
      sub: 'Burj Khalifa, Desert Safari & Dubai Festival City',
      temp: '24°C to 31°C (Perfect Outdoor Weather)',
      price: '₹ 39,999.00',
      duration: '5 Days / 4 Nights',
      bestFor: 'Couples & Families Seeking International Glamour',
      highlights:
        'World-famous Diwali fireworks at Al Seef and Dubai Festival City, 124th floor Burj Khalifa observation deck, dune bashing 4x4 desert safari with live BBQ feast, and Mega Diwali shopping sale.',
      packageUrl: '/holidays/dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Dubai arrival & Marina Dhow Cruise dinner | Day 2: Half-day city tour & Burj Khalifa 124th floor | Day 3: Red Dune Desert Safari & Tanoura show | Day 4: Miracle Garden & Festival City Diwali Fireworks | Day 5: Gold Souk & return',
    },
    {
      rank: '03',
      name: 'Varanasi — Divine Dev Deepawali Ghats',
      sub: 'Kashi Vishwanath, Dashashwamedh Ghat & Sarnath',
      temp: '19°C to 28°C',
      price: '₹ 13,500.00',
      duration: '4 Days / 3 Nights',
      bestFor: 'Spiritual Seekers & Unforgettable Visual Wonder',
      highlights:
        'The ultimate festival of lights on Earth: 1 Million+ earthen oil lamps (diyas) floating on the sacred Ganga River across 84 ghats, grand Maha Ganga Aarti, and VIP darshan at Kashi Vishwanath corridor.',
      packageUrl: '/destinations/varanasi',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Varanasi arrival & evening Dashashwamedh Ganga Aarti boat ride | Day 2: Kashi Vishwanath VIP corridor & Sarnath Buddhist stupa | Day 3: Sunrise boat ride on Assi Ghat & local silk saree shopping | Day 4: Departure',
    },
    {
      rank: '04',
      name: 'Bali, Indonesia — Tropical Island Sanctuary',
      sub: 'Ubud Rice Terraces, Seminyak Villas & Nusa Penida',
      temp: '26°C to 30°C',
      price: '₹ 24,999.00',
      duration: '6 Days / 5 Nights',
      bestFor: 'Couples, Honeymooners & Beach Lovers',
      highlights:
        'Private pool villa with floating breakfast, scenic swing overlooking Tegalalang rice terraces, Tanah Lot temple sunset, and full-day speedboat excursion to Nusa Penida island.',
      packageUrl: '/holidays/bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Denpasar arrival & private pool villa check-in | Day 2: Ubud Art Market & Tegalalang terraces | Day 3: Nusa Penida West Island tour | Day 4: Benoa watersports & Uluwatu Kecak fire dance | Day 5: Seminyak beach club | Day 6: Departure',
    },
    {
      rank: '05',
      name: 'Goa — Festive Beachside Celebrations',
      sub: 'North Beach Nightlife & South Beach Luxury Resorts',
      temp: '24°C to 31°C',
      price: '₹ 12,999.00',
      duration: '4 Days / 3 Nights',
      bestFor: 'Young Professionals, Friends & Relaxation',
      highlights:
        'Unique Goan Narakasura effigy burning tradition on Diwali eve, seaside beach shack seafood feasts, Mandovi River luxury sunset cruise, and 4-star beach resort relaxation.',
      packageUrl: '/holidays/goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Goa arrival & North Goa beach check-in | Day 2: Fort Aguada, Calangute & Narakasura festive street viewing | Day 3: South Goa Dudhsagar waterfall or Mandovi river cruise | Day 4: Flea market shopping & departure',
    },
    {
      rank: '06',
      name: 'Kashmir — Golden Autumn Foliage',
      sub: 'Srinagar, Gulmarg & Pahalgam Valley',
      temp: '8°C to 20°C (Crisp Mountain Autumn)',
      price: '₹ 18,999.00',
      duration: '6 Days / 5 Nights',
      bestFor: 'Couples & Nature Enthusiasts',
      highlights:
        'Witness Chinar trees turning blazing fiery orange across Mughal Gardens, romantic Shikara ride on misty Dal Lake, Gulmarg Gondola snow peaks, and cozy cedarwood luxury houseboat stay.',
      packageUrl: '/holidays/kashmir',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Srinagar arrival & sunset Dal Lake Shikara ride | Day 2: Gulmarg Gondola Cable Car phase 1 & 2 | Day 3: Pahalgam drive along saffron fields | Day 4: Betaab & Aru Valley | Day 5: Mughal Gardens & Houseboat stay | Day 6: Departure',
    },
    {
      rank: '07',
      name: 'Kerala — Tranquil Backwaters & Tea Hills',
      sub: 'Munnar Tea Estates & Alleppey Private Houseboat',
      temp: '22°C to 29°C',
      price: '₹ 16,500.00',
      duration: '5 Days / 4 Nights',
      bestFor: 'Family Escapes & Rejuvenation',
      highlights:
        'Rolling emerald green tea carpets in Munnar, Eravikulam National Park, fragrant spice plantations in Thekkady, and overnight private wooden houseboat cruise with traditional Kerala feast.',
      packageUrl: '/holidays/kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Cochin arrival & drive to Munnar Cheeyappara waterfalls | Day 2: Munnar Tea Museum & Mattupetty Dam | Day 3: Thekkady Periyar wildlife boat ride | Day 4: Alleppey private luxury houseboat | Day 5: Cochin drop',
    },
    {
      rank: '08',
      name: 'Thailand — Tropical Islands & Bangkok Shopping',
      sub: 'Phuket, Krabi & Bangkok City',
      temp: '25°C to 31°C',
      price: '₹ 19,999.00',
      duration: '5 Days / 4 Nights',
      bestFor: 'Budget International Festive Vacation',
      highlights:
        'Phi Phi Island speedboat excursion, Maya Bay snorkeling, Bangkok Grand Palace, Chao Phraya dinner cruise, and duty-free festive shopping with instant visa exemption for Indians.',
      packageUrl: '/holidays/thailand',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Phuket arrival & beach resort check-in | Day 2: Phi Phi & Maya Bay speedboat tour | Day 3: Fly to Bangkok & evening Chao Phraya dinner cruise | Day 4: Safari World & Pratunam shopping | Day 5: Departure',
    },
    {
      rank: '09',
      name: 'Vietnam — Lantern City & Golden Bridge',
      sub: 'Da Nang, Hoi An Lanterns & Ba Na Hills',
      temp: '23°C to 28°C',
      price: '₹ 22,500.00',
      duration: '6 Days / 5 Nights',
      bestFor: 'Photographers, Culture & Foodies',
      highlights:
        'Hoi An Ancient Town lit with thousands of colorful handcrafted silk lanterns, Ba Na Hills world-famous Golden Bridge held by stone hands, and 5-star Ha Long Bay luxury cruise.',
      packageUrl: '/holidays/vietnam',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Hanoi arrival | Day 2: Ha Long Bay overnight cruise | Day 3: Fly to Da Nang & My Khe beach | Day 4: Ba Na Hills Golden Bridge | Day 5: Hoi An Ancient Lantern town boat ride | Day 6: Departure',
    },
    {
      rank: '10',
      name: 'Andaman Islands — Pristine Coral Beaches',
      sub: 'Port Blair, Havelock Island & Radhanagar Beach',
      temp: '24°C to 30°C',
      price: '₹ 24,500.00',
      duration: '5 Days / 4 Nights',
      bestFor: 'Island Lovers, Scuba Divers & Peace Seekers',
      highlights:
        'Radhanagar Beach (voted best beach in Asia), high-speed Makruzz catamaran cruise, scuba diving at Elephant Beach, and historic Cellular Jail light and sound show.',
      packageUrl: '/destinations/andaman',
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Port Blair arrival & Cellular Jail light & sound | Day 2: Cruise to Havelock & Radhanagar sunset | Day 3: Elephant Beach water sports & snorkeling | Day 4: Return to Port Blair & local souvenir shopping | Day 5: Departure',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 text-slate-900 font-sans">
      {/* Structured Data Scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Container>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/blog" className="hover:text-brand-600">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-bold truncate">Top 10 Diwali Holiday Destinations 2026</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 text-slate-900 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-slate-950" /> DIWALI 2026 FESTIVE SPECIAL
            </span>
            <span className="bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Fireworks, Palaces & Beachside Retreats
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight max-w-4xl">
            Top 10 Best Diwali Holiday Destinations in 2026:{' '}
            <span className="text-amber-600 font-black">Dubai, Rajasthan, Bali, Goa & Kashmir 🪔✨</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed font-medium">
            Make this Diwali long weekend truly unforgettable! Whether you desire the royal palace illuminations of Rajasthan, world-class fireworks in Dubai, peaceful backwaters in Kerala, or private pool villas in Bali, here is your definitive festive holiday planner with day-by-day itineraries and verified 4-star packages.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500 font-semibold">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-600" />
              <span className="text-slate-900 font-bold">Trip Customizer Senior Travel Editorial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Published: Oct 12, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>8 Min Read</span>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative h-72 sm:h-96 lg:h-[480px] w-full rounded-3xl overflow-hidden mb-10 shadow-xl border border-slate-200">
          <Image
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop"
            alt="Diwali Palace Lights Rajasthan Tour 2026"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-xl">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-1">
                Festive Long Weekend Planner 2026
              </span>
              <p className="text-sm sm:text-lg font-bold">
                Experience heritage palace lighting, grand fireworks, and 4-star boutique stays across India & top overseas hotspots.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-lg border border-amber-600/40">
          <h2 className="text-lg sm:text-2xl font-black text-amber-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" /> Quick Glance: Top Diwali Deals 2026
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4 text-center">
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-amber-200">#1 Rajasthan</p>
              <p className="text-base font-black text-white">from ₹17,999</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-amber-200">#2 Dubai</p>
              <p className="text-base font-black text-white">from ₹39,999</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-amber-200">#3 Varanasi</p>
              <p className="text-base font-black text-white">from ₹13,500</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-amber-200">#4 Bali</p>
              <p className="text-base font-black text-white">from ₹24,999</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-amber-200">#5 Goa</p>
              <p className="text-base font-black text-white">from ₹12,999</p>
            </div>
          </div>
        </div>

        {/* Main Content & Destination Cards */}
        <div className="space-y-12">
          {diwaliDestinations.map((dest) => (
            <Card
              key={dest.rank}
              className="p-6 sm:p-8 bg-white border-slate-200 shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 font-black text-sm px-3 py-1 rounded-full border border-amber-400/40">
                    Rank {dest.rank}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-amber-950/90 text-white font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                    <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                    <span>Avg Temp: {dest.temp.split('(')[0]}</span>
                  </div>
                </div>

                {/* Destination Editorial */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                        {dest.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-amber-700 mt-0.5">{dest.sub}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-slate-500 block">Festive Package From</span>
                      <span className="text-lg sm:text-xl font-black text-emerald-600">{dest.price}</span>
                      <span className="text-[10px] text-slate-400 block font-medium">per person</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <div>
                      <span className="text-slate-500 font-medium">Duration: </span>
                      <strong className="text-slate-900">{dest.duration}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Ideal For: </span>
                      <strong className="text-slate-900">{dest.bestFor}</strong>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Key Highlights & Festive Experiences
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {dest.highlights}
                    </p>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-950">
                    <strong className="font-bold text-amber-900 block mb-0.5">Recommended Diwali Itinerary:</strong>
                    <span className="leading-relaxed">{dest.itinerarySnippet}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link href={dest.packageUrl} className="flex-1 min-w-[200px]">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2">
                        <span>View {dest.name.split('—')[0].trim()} Tour Packages</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <a
                      href="https://wa.me/917408763401?text=Hello%20Trip%20Customizer%2C%20I%20am%20interested%20in%20Diwali%202026%20package%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>WhatsApp Expert</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Instant Callback Inquiry Form */}
        <div className="my-14">
          <DiwaliBlogInquiryForm defaultDestination="Rajasthan Royal Heritage (Jaipur & Udaipur) 5D/4N" />
        </div>

        {/* 4 Expert Tips for Diwali Travel */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-3xl font-black text-slate-950 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-amber-600" />
            4 Golden Rules for Booking Your Diwali 2026 Holiday
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 1. Lock Flight Tickets 3 Weeks Before
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Domestic and international flights during Diwali week face heavy surge pricing. Booking before the last 15-day rush secures standard airline fares and confirmed group seating.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 2. Reserve Dev Deepawali Boats in Varanasi Early
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Private boats on the Ganges for Dev Deepawali in Varanasi are in extreme demand worldwide. Trip Customizer pre-books verified motorboats and bajras in advance for our guests.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 3. Opt for 4-Star Resort Packages with Inclusions
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                During festive dates, independent hotel walk-in tariffs increase drastically. Our curated packages bundle daily breakfast, private cabs, and sightseeing with zero hidden surcharges.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 4. Enjoy Visa-Free International Travel
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Planning last minute? Fly to Thailand, Bali, Malaysia, or Sri Lanka without tedious visa appointments. Get stamped instantly on arrival with our verified hotel vouchers.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-3xl font-black text-slate-950 mb-6 flex items-center gap-2">
            <HelpCircle className="w-7 h-7 text-amber-600" />
            Frequently Asked Questions (Diwali Holidays 2026)
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                Which are the best Diwali holiday destinations in India for families in 2026?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Rajasthan (Udaipur & Jaipur), Varanasi (for Dev Deepawali ghat lighting), Goa (for beachside celebrations), and Kashmir (golden autumn Chinar foliage) are the most popular domestic Diwali holiday destinations in India.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                Which international destinations celebrate Diwali with grand fireworks and events?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Dubai (UAE) hosts spectacular Diwali fireworks at Dubai Festival City and Al Seef with deep shopping discounts. Bali (Indonesia) and Singapore (Little India deepavali light-up) are also top international festive choices.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                How early should I book Diwali 2026 holiday packages?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Because Diwali is peak travel season in India, flight tickets and premium resort rooms increase by 40-70% within 2 weeks of the festival. Booking 3 to 4 weeks in advance guarantees confirmed flights and best resort room allocations.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                Does Trip Customizer provide private cabs and customizable meal plans for Diwali tours?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Yes! All Trip Customizer festive packages include dedicated sanitized private cabs, handpicked 4-star/5-star hotels, daily festive breakfasts, and 24x7 travel concierge support.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black mb-3">
            Celebrate a Grand Diwali with Your Loved Ones! 🪔✨
          </h2>
          <p className="text-xs sm:text-base text-amber-100 max-w-2xl mx-auto mb-6">
            Get personalized day-by-day itineraries with 4-star handpicked hotels, private sanitized cabs, festive dining, and 24x7 ground support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/customize-trip">
              <Button className="bg-slate-950 hover:bg-slate-900 text-amber-400 font-black text-sm px-8 py-3 rounded-2xl shadow-lg">
                Build My Custom Diwali Trip Now
              </Button>
            </Link>
            <Link href="/holidays">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold text-sm px-8 py-3 rounded-2xl">
                Browse All Holiday Packages
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
