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
  Heart,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Flame,
  ArrowRight,
  HelpCircle,
  Thermometer,
  Zap,
} from 'lucide-react';
import { HoneymoonBlogInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 10 Best Honeymoon Destinations in India Under ₹30,000 in 2026: Kashmir, Kerala, Manali & Goa 💑🏔️',
  description:
    'Plan your dream romantic honeymoon under ₹30,000 in India! Discover top 10 budget-friendly couple escapes: Kashmir houseboats, Kerala backwaters, Manali snow valleys & Goa beach resorts. Includes free candlelight dinner & private cab.',
  keywords: [
    'honeymoon destinations in india under 30000',
    'budget honeymoon packages india 2026',
    'kashmir honeymoon package under 30k',
    'kerala honeymoon under 25k',
    'manali couple tour package',
    'goa honeymoon package price',
    'udaipur romantic couple tour',
    'ooty honeymoon tour package',
    'andaman budget honeymoon',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-honeymoon-destinations-in-india-under-30k',
  },
  openGraph: {
    title: 'Top 10 Best Honeymoon Destinations in India Under ₹30,000 (2026 Guide) 💑🏔️',
    description:
      'Romantic couple getaways with 4-star stays, private sanitized cabs, free candlelight dinner & flower bed decor starting @ ₹12,999.',
    url: 'https://www.tripcustomizer.com/blog/top-10-honeymoon-destinations-in-india-under-30k',
    images: ['https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Best Honeymoon Destinations in India Under ₹30,000 💑 | Trip Customizer',
    description: 'Explore affordable luxury honeymoon spots in India: Kashmir, Kerala, Manali & Goa with custom romantic packages.',
    images: ['https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralHoneymoonUnder30kPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Best Honeymoon Destinations in India Under ₹30,000 in 2026: Kashmir, Kerala, Manali & Goa 💑🏔️',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Senior Romance & Honeymoon Editorial',
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
      'The comprehensive 2026 honeymoon budget guide for Indian newly-weds, reviewing 10 top romantic destinations under ₹30,000 with private cabs, 4-star boutique resorts, and complimentary couple experiences.',
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
        name: 'Top 10 Honeymoon Destinations Under ₹30,000',
        item: 'https://www.tripcustomizer.com/blog/top-10-honeymoon-destinations-in-india-under-30k',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the cheapest and most romantic honeymoon destination in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Goa (South Goa beach resorts), Manali (Himachal Pradesh), and Ooty/Coonoor (Tamil Nadu) are the most economical honeymoon getaways in India, offering 4-day to 5-day romantic couple packages starting at just ₹12,999 to ₹14,999 per person.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a Kashmir honeymoon package be booked under ₹30,000 for a couple?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer offers a 6-day Kashmir Romantic package for ₹18,999 per person, which includes Dal Lake Shikara ride, Gulmarg Gondola transfers, Pahalgam Betaab Valley excursion, 4-star hotel stays, and 1 night in a luxury cedarwood houseboat with flower bed decor.',
        },
      },
      {
        '@type': 'Question',
        name: 'What couple special inclusions are provided in Trip Customizer honeymoon packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All Trip Customizer honeymoon packages come with complimentary couple surprises: 1 romantic candlelight dinner, honeymoon celebration cake, flower bed decoration in houseboat/resort, daily breakfast, and a dedicated private sanitized cab for complete privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should we book our winter 2026-2027 honeymoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time to book a November to February honeymoon is 4 to 6 weeks in advance to secure confirmed flight fares and romantic suite rooms before peak wedding season surges.',
        },
      },
    ],
  };

  const honeymoonDestinations = [
    {
      rank: '01',
      name: 'Kashmir — Romance in the Snow & Lakes',
      sub: 'Srinagar, Gulmarg Gondola & Dal Lake Houseboat',
      temp: '10°C to 20°C (Pleasant Autumn / Early Snow)',
      price: '₹ 18,999.00',
      duration: '6 Days / 5 Nights',
      romanticHighlight: 'Overnight in a hand-carved cedarwood luxury houseboat on Dal Lake with Shikara sunset cruise.',
      packageUrl: '/honeymoon/kashmir',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Srinagar airport pickup & Shikara ride | Day 2: Gulmarg snow peaks & Gondola Phase 1 | Day 3: Drive along Lidder River to Pahalgam | Day 4: Betaab Valley & Aru Valley | Day 5: Mughal Gardens & luxury Houseboat stay with flower decor | Day 6: Departure',
    },
    {
      rank: '02',
      name: 'Kerala — Backwaters & Misty Tea Estates',
      sub: 'Munnar Hill Station & Alleppey Private Houseboat',
      temp: '19°C to 28°C',
      price: '₹ 16,999.00',
      duration: '5 Days / 4 Nights',
      romanticHighlight: 'Private wooden houseboat cruise gliding through tranquil canals with live candlelit dining.',
      packageUrl: '/honeymoon/kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Cochin to Munnar drive past Cheeyappara waterfalls | Day 2: Munnar Tea Museum, Mattupetty lake & Echo Point | Day 3: Thekkady Periyar boat safari & spice plantation walk | Day 4: Alleppey private luxury houseboat cruise | Day 5: Cochin airport drop',
    },
    {
      rank: '03',
      name: 'Himachal Pradesh — Alpine Cozy Manali',
      sub: 'Manali, Solang Valley Snow & Riverside Cafes',
      temp: '12°C to 21°C',
      price: '₹ 14,999.00',
      duration: '5 Days / 4 Nights',
      romanticHighlight: 'Cozy wooden chalet mountain view stays, paragliding in Solang, and riverside bonfires.',
      packageUrl: '/destinations/manali',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Delhi to Manali transfer & hotel check-in | Day 2: Hadimba Devi temple & Old Manali European cafes | Day 3: Solang Valley snow sports & Atal Tunnel road trip | Day 4: Naggar Castle & Kasol Parvati Valley drive | Day 5: Departure',
    },
    {
      rank: '04',
      name: 'Goa — Serene South Goa Beach Romance',
      sub: 'Palolem Beach, Sunset Catamaran & Beachfront Dinners',
      temp: '24°C to 30°C',
      price: '₹ 12,999.00',
      duration: '4 Days / 3 Nights',
      romanticHighlight: 'Barefoot candlelight beach dining under the stars with waves lapping your feet.',
      packageUrl: '/holidays/goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Goa arrival & 4-star South Goa resort check-in | Day 2: Palolem beach, butterfly beach boat ride & beach dinner | Day 3: Mandovi river sunset catamaran cruise & dolphin spotting | Day 4: Heritage Latin Quarter walk & airport drop',
    },
    {
      rank: '05',
      name: 'Udaipur, Rajasthan — The Venice of the East',
      sub: 'Lake Pichola, City Palace & Romantic Rooftops',
      temp: '18°C to 27°C',
      price: '₹ 15,500.00',
      duration: '4 Days / 3 Nights',
      romanticHighlight: 'Private sunset boat cruise on Lake Pichola with views of illuminated Taj Lake Palace.',
      packageUrl: '/destinations/udaipur',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Udaipur arrival & rooftop lake-view dinner | Day 2: City Palace grand museum & Saheliyon-ki-Bari | Day 3: Jag Mandir island boat cruise & Sajjangarh Monsoon Palace sunset | Day 4: Local handicraft shopping & departure',
    },
    {
      rank: '06',
      name: 'Ooty & Coonoor — Queen of Nilgiri Hills',
      sub: 'Nilgiri Toy Train, Tea Plantations & Botanical Haven',
      temp: '13°C to 20°C',
      price: '₹ 12,999.00',
      duration: '4 Days / 3 Nights',
      romanticHighlight: 'UNESCO historic heritage toy train ride through tunnels and verdant eucalyptus forests.',
      packageUrl: '/destinations/ooty',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Coimbatore pickup & scenic drive to Ooty | Day 2: Ooty lake boating, Botanical Garden & Rose Garden | Day 3: UNESCO Toy train to Coonoor, Sim’s Park & Dolphin’s Nose | Day 4: Homemade chocolate tasting & departure',
    },
    {
      rank: '07',
      name: 'Meghalaya — Scotland of the East',
      sub: 'Shillong, Living Root Bridges & Dawki Glass River',
      temp: '15°C to 22°C',
      price: '₹ 19,500.00',
      duration: '5 Days / 4 Nights',
      romanticHighlight: 'Boating on the crystal-clear glass waters of Umngot River in Dawki where boats appear floating in mid-air.',
      packageUrl: '/holidays/india',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Guwahati to Shillong drive past Umiam Lake | Day 2: Cherrapunji waterfalls, Mawsmai Cave & Eco Park | Day 3: Living Root Bridge trek | Day 4: Dawki crystal river boat ride & cleanest village Mawlynnong | Day 5: Departure',
    },
    {
      rank: '08',
      name: 'Auli & Rishikesh — Snowy Glades & River Luxury',
      sub: 'Himalayan Cable Car & Luxury Riverside Camps',
      temp: '8°C to 18°C',
      price: '₹ 13,999.00',
      duration: '5 Days / 4 Nights',
      romanticHighlight: 'Riding India’s highest ropeway cable car overlooking 23,000 ft Nanda Devi snow peaks.',
      packageUrl: '/destinations/auli',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Haridwar/Dehradun to Rishikesh luxury camp | Day 2: Ganga Aarti & scenic mountain drive to Joshimath | Day 3: Auli cable car ropeway ride & snow meadow walk | Day 4: Return drive to Rishikesh & riverside cafe dining | Day 5: Departure',
    },
    {
      rank: '09',
      name: 'Coorg, Karnataka — Coffee Blossom Heaven',
      sub: 'Coffee Estate Bungalows, Abbey Falls & Raja’s Seat',
      temp: '17°C to 25°C',
      price: '₹ 13,500.00',
      duration: '4 Days / 3 Nights',
      romanticHighlight: 'Staying in a secluded colonial coffee estate bungalow surrounded by cardamom trails and birdsong.',
      packageUrl: '/destinations/coorg',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Bangalore/Mangalore to Coorg estate transfer | Day 2: Abbey Falls, Raja’s Seat sunset point & coffee plantation tour | Day 3: Dubare Elephant camp & Golden Temple Tibetan monastery | Day 4: Spice shopping & departure',
    },
    {
      rank: '10',
      name: 'Darjeeling & Gangtok — Majestic Kanchenjunga',
      sub: 'Tiger Hill Sunrise, Toy Train & Tsomgo Lake',
      temp: '11°C to 19°C',
      price: '₹ 18,500.00',
      duration: '5 Days / 4 Nights',
      romanticHighlight: 'Catching the golden sunrise over Mt. Kanchenjunga from Tiger Hill wrapped in a warm blanket together.',
      packageUrl: '/destinations/darjeeling',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
      itinerarySnippet:
        'Day 1: Bagdogra to Darjeeling scenic tea garden drive | Day 2: Early morning Tiger Hill sunrise, Batasia Loop & Himalayan Zoo | Day 3: Transfer to Gangtok & MG Marg walk | Day 4: Tsomgo alpine Lake & Baba Mandir | Day 5: Departure',
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
          <span className="text-slate-900 font-bold truncate">Top 10 Honeymoon Destinations Under ₹30,000</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 text-slate-900 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-rose-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-white fill-current" /> HONEYMOON SPECIAL 2026
            </span>
            <span className="bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" /> Romantic Escapes Under ₹30,000
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight max-w-4xl">
            Top 10 Best Honeymoon Destinations in India Under ₹30,000 in 2026:{' '}
            <span className="text-rose-600 font-black">Kashmir, Kerala, Manali & Goa 💑🏔️</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed font-medium">
            You don’t need to spend lakhs of rupees to experience a fairytale honeymoon! In 2026, newly married couples can enjoy 4-star boutique stays, private sanitized cabs, candlelit dinners, and breathtaking mountain and beach vistas across India for less than ₹30,000. Here is your definitive romantic guide!
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500 font-semibold">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-600" />
              <span className="text-slate-900 font-bold">Trip Customizer Senior Romance Travel Concierge</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-rose-500" />
              <span>Published: Oct 12, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>9 Min Read</span>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative h-72 sm:h-96 lg:h-[480px] w-full rounded-3xl overflow-hidden mb-10 shadow-xl border border-slate-200">
          <Image
            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1400&auto=format&fit=crop"
            alt="Romantic Kashmir Dal Lake Shikara Honeymoon 2026"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-xl">
              <span className="text-rose-400 font-bold text-xs uppercase tracking-widest block mb-1">
                2026 Couple Vacation Handbook
              </span>
              <p className="text-sm sm:text-lg font-bold">
                Handpicked private pool stays, cozy snow chalets, and intimate candlelit dinners crafted specifically for newly-weds.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-lg border border-rose-600/40">
          <h2 className="text-lg sm:text-2xl font-black text-rose-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-rose-400" /> Best Couple Packages Under ₹30,000
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4 text-center">
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-rose-200">#1 Kashmir</p>
              <p className="text-base font-black text-white">from ₹18,999</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-rose-200">#2 Kerala</p>
              <p className="text-base font-black text-white">from ₹16,999</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-rose-200">#3 Manali</p>
              <p className="text-base font-black text-white">from ₹14,999</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-rose-200">#4 Goa</p>
              <p className="text-base font-black text-white">from ₹12,999</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-xs">
              <p className="text-xs text-rose-200">#5 Udaipur</p>
              <p className="text-base font-black text-white">from ₹15,500</p>
            </div>
          </div>
        </div>

        {/* Main Content & Destination Cards */}
        <div className="space-y-12">
          {honeymoonDestinations.map((dest) => (
            <Card
              key={dest.rank}
              className="p-6 sm:p-8 bg-white border-slate-200 shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-rose-400 font-black text-sm px-3 py-1 rounded-full border border-rose-400/40">
                    Rank {dest.rank}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-rose-950/90 text-white font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                    <Thermometer className="w-3.5 h-3.5 text-rose-400" />
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
                      <p className="text-xs sm:text-sm font-semibold text-rose-700 mt-0.5">{dest.sub}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-slate-500 block">Package Starting At</span>
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
                      <span className="text-slate-500 font-medium">Cab: </span>
                      <strong className="text-emerald-700">Dedicated Private Cab</strong>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1 flex items-center gap-1">
                      <Heart className="w-3 h-3 text-rose-600 fill-current" /> Signature Romantic Highlight
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {dest.romanticHighlight}
                    </p>
                  </div>

                  <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-3 text-xs text-rose-950">
                    <strong className="font-bold text-rose-900 block mb-0.5">Recommended Couple Itinerary:</strong>
                    <span className="leading-relaxed">{dest.itinerarySnippet}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link href={dest.packageUrl} className="flex-1 min-w-[200px]">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2">
                        <span>Explore {dest.name.split('—')[0].trim()} Honeymoon Packages</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20Trip%20Customizer%2C%20I%20am%20interested%20in%20Honeymoon%20package%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>WhatsApp Romance Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Instant Callback Inquiry Form */}
        <div className="my-14">
          <HoneymoonBlogInquiryForm defaultDestination="Kashmir (Dal Lake Houseboat & Gulmarg) 6D/5N" />
        </div>

        {/* Complimentary Inclusions Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-3xl font-black text-slate-950 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-rose-600" />
            Every Trip Customizer Honeymoon Package Includes:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 1. Complimentary Candlelight Dinner
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                A specially curated 3-course dinner set up with candles, fresh roses, and scenic lake or mountain backdrop.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 2. Traditional Flower Bed Decoration
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Fresh aromatic jasmine, marigold, or rose petal decoration in your private houseboat suite or boutique hotel on arrival night.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 3. Dedicated Private Sanitized Cab
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Zero shared bus or coach travel. Enjoy 100% privacy with a dedicated chauffeur for all sightseeing and airport transfers.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 4. 24x7 Romance Travel Concierge
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                A dedicated senior travel architect on direct WhatsApp for instant itinerary changes, photo spot recommendations, and flight assistance.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-3xl font-black text-slate-950 mb-6 flex items-center gap-2">
            <HelpCircle className="w-7 h-7 text-rose-600" />
            Frequently Asked Questions (Honeymoon Under ₹30k)
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                Which is the cheapest and most romantic honeymoon destination in India?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Goa (South Goa beach resorts), Manali (Himachal Pradesh), and Ooty/Coonoor (Tamil Nadu) are the most economical honeymoon getaways in India, offering 4-day to 5-day romantic couple packages starting at just ₹12,999 to ₹14,999 per person.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                Can a Kashmir honeymoon package be booked under ₹30,000 for a couple?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Yes! Trip Customizer offers a 6-day Kashmir Romantic package for ₹18,999 per person, which includes Dal Lake Shikara ride, Gulmarg Gondola transfers, Pahalgam Betaab Valley excursion, 4-star hotel stays, and 1 night in a luxury cedarwood houseboat with flower bed decor.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                What couple special inclusions are provided in Trip Customizer honeymoon packages?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                All Trip Customizer honeymoon packages come with complimentary couple surprises: 1 romantic candlelight dinner, honeymoon celebration cake, flower bed decoration in houseboat/resort, daily breakfast, and a dedicated private sanitized cab for complete privacy.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                When should we book our winter 2026-2027 honeymoon?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                The best time to book a November to February honeymoon is 4 to 6 weeks in advance to secure confirmed flight fares and romantic suite rooms before peak wedding season surges.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-pink-800 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black mb-3">
            Start Your Journey of a Lifetime Together! 💑
          </h2>
          <p className="text-xs sm:text-base text-rose-100 max-w-2xl mx-auto mb-6">
            Get personalized day-by-day honeymoon itineraries with 4-star handpicked hotels, private sanitized cabs, free candlelight dinner & 24x7 concierge support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/honeymoon">
              <Button className="bg-white hover:bg-rose-50 text-rose-900 font-black text-sm px-8 py-3 rounded-2xl shadow-lg">
                View All Honeymoon Packages
              </Button>
            </Link>
            <Link href="/customize-trip">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold text-sm px-8 py-3 rounded-2xl">
                Build My Custom Couple Trip
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
