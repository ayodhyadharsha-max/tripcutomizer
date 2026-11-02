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
  Compass,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Snowflake,
  Sun,
  HelpCircle,
  ArrowRight,
  MapPin,
  Flame,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 Best Winter Holiday Destinations 2026-2027: Kashmir, Dubai, Goa, Manali & Kutch ❄️🌴',
  description:
    'Discover the top 10 winter holiday destinations for 2026-2027. Explore snowy Kashmir Gulmarg skiing, Dubai Shopping Festival, Sunburn Goa, Manali snowfall, Rann Utsav Kutch, Vietnam beaches & Kerala backwaters. Packages starting @ ₹14,999.',
  keywords: [
    'best winter holiday destinations 2026',
    'top winter travel destinations india abroad 2026 2027',
    'kashmir snow tour packages gulmarg',
    'dubai winter shopping festival packages',
    'goa winter beach packages sunburn',
    'manali snowfall holiday package',
    'rann utsav kutch tent city package',
    'rajasthan winter royal tour package',
    'vietnam winter tour package',
    'bali winter honeymoon packages',
    'kerala winter backwater tour',
    'andaman winter holiday packages',
    'best places to visit in december 2026',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-best-winter-destinations-2026',
  },
  openGraph: {
    title: 'Top 10 Best Winter Holiday Destinations 2026-2027 ❄️🌴',
    description:
      'Plan your perfect winter & year-end vacation to Kashmir, Dubai, Goa, Manali, Kutch, Bali & Kerala with 4-star hotels, verified flights & 24x7 travel desk support.',
    url: 'https://www.tripcustomizer.com/blog/top-10-best-winter-destinations-2026',
    images: ['https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Winter Destinations 2026-2027 | Trip Customizer',
    description:
      'Official winter travel rankings: Kashmir, Dubai, Goa, Manali, Rann of Kutch, Vietnam, Bali, Kerala & Andaman.',
    images: ['https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralWinterDestinationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Best Winter Holiday Destinations 2026-2027: Kashmir, Dubai, Goa, Manali & Kutch ❄️🌴',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
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
    datePublished: '2026-09-27',
    dateModified: '2026-11-02',
    description:
      'Definitive 2026-2027 winter holiday travel rankings covering domestic snow wonderlands, desert glamping festivals, and tropical beach escapes with curated itineraries and package prices.',
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
        name: 'Top 10 Best Winter Destinations 2026-2027',
        item: 'https://www.tripcustomizer.com/blog/top-10-best-winter-destinations-2026',
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 10 Winter Destinations 2026-2027',
    description: 'Ranked list of the top 10 winter vacation destinations for Indian travelers in 2026-2027.',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Kashmir (Gulmarg, Pahalgam & Srinagar)' },
      { '@type': 'ListItem', position: 2, name: 'Dubai (UAE) - DSF & Desert Safari' },
      { '@type': 'ListItem', position: 3, name: 'Goa (Sunburn Festival & North Beach Nightlife)' },
      { '@type': 'ListItem', position: 4, name: 'Himachal Pradesh (Manali Snowfall & Solang Valley)' },
      { '@type': 'ListItem', position: 5, name: 'Rann of Kutch (White Desert Rann Utsav Glamping)' },
      { '@type': 'ListItem', position: 6, name: 'Rajasthan (Udaipur Lake Palaces & Jaisalmer Dunes)' },
      { '@type': 'ListItem', position: 7, name: 'Vietnam (Da Nang Golden Bridge & Ha Long Cruise)' },
      { '@type': 'ListItem', position: 8, name: 'Bali (Indonesia) - Private Pool Villas & Nusa Penida' },
      { '@type': 'ListItem', position: 9, name: 'Kerala (Munnar Tea Gardens & Alleppey Houseboat)' },
      { '@type': 'ListItem', position: 10, name: 'Andaman & Nicobar (Havelock Radhanagar Beach)' },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best place to experience live snowfall in India during winter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gulmarg in Kashmir is the undisputed #1 destination for heavy powder snowfall and skiing in India, with peak snow running from December to February during the 40-day Chillai Kalan. Solang Valley and Atal Tunnel in Manali, Himachal Pradesh, are also prime snowfall hotspots accessible by road.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cheapest international winter trip from India in 2026-2027?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vietnam and Thailand are the most cost-effective international winter getaways from India, with comprehensive 5-day holiday packages starting at ₹22,500 to ₹28,000 per person including flights, 4-star hotels, daily breakfast, and sightseeing.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the best time to visit Dubai for the Dubai Shopping Festival (DSF)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time is between December 15, 2026, and January 29, 2027, during the 38-day Dubai Shopping Festival. Winter daytime temperatures in Dubai hover around a pleasant 24°C to 26°C, perfect for Desert Safaris and Burj Khalifa observation decks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should I book winter and Christmas/New Year packages 6 to 8 weeks in advance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'December 20 to January 5 is super-peak holiday season across Goa, Dubai, Kashmir, and Kutch. Flight airfares surge by 200% to 300% and top 4-star hotels sell out completely. Booking early locks in confirmed seats, early bird discounts, and guaranteed Gondola or Tent City slots.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all-inclusive winter packages available with direct flights from major Indian cities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer provides all-inclusive customized winter packages with confirmed flights departing directly from Delhi (DEL), Mumbai (BOM), Ahmedabad (AMD), Bangalore (BLR), Pune (PNQ), and Kolkata (CCU) with dedicated airport concierge and private cabs.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Top 10 Best Winter Holiday Destinations 2026-2027 Master Guide',
    url: 'https://www.tripcustomizer.com/blog/top-10-best-winter-destinations-2026',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const winterDestinations = [
    {
      rank: 1,
      name: 'Kashmir (Gulmarg, Pahalgam & Srinagar)',
      type: '❄️ Snow & Skiing Paradise',
      startingPrice: '₹ 19,999 / person',
      duration: '6 Days / 5 Nights',
      highlights: 'Gulmarg Gondola Phase 1 & 2 Cable Car Ride, Shikara Ride on Dal Lake, Pahalgam Betaab Valley & 1 Night Dal Lake Luxury Houseboat Stay.',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kashmir',
      guideUrl: '/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
    },
    {
      rank: 2,
      name: 'Dubai (UAE) - Shopping Festival & Desert Safari',
      type: '🏙️ Luxury Shopping & Megastructures',
      startingPrice: '₹ 34,500 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Burj Khalifa 124th Floor tickets, 4x4 Dune Bashing Desert Safari BBQ Dinner, Dubai Marina Dhow Cruise, Miracle Garden & 30-day UAE tourist visa.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/dubai',
      guideUrl: '/blog/dubai-shopping-festival-2026-dates-flight-packages-guide',
    },
    {
      rank: 3,
      name: 'Goa (Sunburn Festival & North Beach Parties)',
      type: '🏖️ Sun, Sand, Nightlife & Music Festivals',
      startingPrice: '₹ 13,999 / person',
      duration: '4 Days / 3 Nights',
      highlights: '4-Star Beachfront Resort in Calangute/Candolim, Mandovi River Sunset Catamaran Cruise, water sports, and Sunburn 2026 festival passes.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/goa',
      guideUrl: '/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
    },
    {
      rank: 4,
      name: 'Himachal Pradesh (Manali, Solang Valley & Shimla)',
      type: '🏔️ Snowfall & Mountain Adventure',
      startingPrice: '₹ 14,999 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Atal Tunnel Rohtang Snow View, Solang Valley Snowmobiles & Paragliding, Mall Road Shopping, Hadimba Temple & heated resort stays.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/himachal',
      guideUrl: '/holidays/himachal',
    },
    {
      rank: 5,
      name: 'Rann of Kutch, Gujarat (White Desert Rann Utsav)',
      type: '🎪 Salt Desert Glamping & Cultural Fair',
      startingPrice: '₹ 14,500 / person',
      duration: '4 Days / 3 Nights',
      highlights: 'Dhordo Tent City luxury AC tents, moonlight walk on the glowing white salt desert, Kutchi folk dances, Bhuj palaces & instant permit clearance.',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kutch',
      guideUrl: '/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide',
    },
    {
      rank: 6,
      name: 'Rajasthan (Udaipur Lake Palaces & Jaisalmer Dunes)',
      type: '🏰 Royal Heritage, Haveli & Desert Camps',
      startingPrice: '₹ 16,999 / person',
      duration: '6 Days / 5 Nights',
      highlights: 'Lake Pichola sunset boat ride, Jaisalmer Sam Sand Dunes camel safari, Mehrangarh Fort Jodhpur, Rajasthani thali dinners & heritage stays.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/rajasthan',
      guideUrl: '/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
    },
    {
      rank: 7,
      name: 'Vietnam (Da Nang, Ha Long Bay & Phu Quoc)',
      type: '🌴 Tropical Sun & Golden Bridge Vista',
      startingPrice: '₹ 22,500 / person',
      duration: '6 Days / 5 Nights',
      highlights: 'Bana Hills Golden Bridge, Ha Long Bay 5★ overnight luxury cruise, Hoi An ancient lantern town & Phu Quoc Starfish Beach.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/vietnam',
      guideUrl: '/holidays/vietnam',
    },
    {
      rank: 8,
      name: 'Bali (Indonesia) - Private Pool Villas & Nusa Penida',
      type: '🌺 Island Luxury & Romantic Sunsets',
      startingPrice: '₹ 24,999 / person',
      duration: '6 Days / 5 Nights',
      highlights: 'Seminyak/Ubud Private Pool Villa with floating breakfast, Kintamani Mount Batur volcano view, Nusa Penida Kelingking cliff speedboat tour & couple spa.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/bali',
      guideUrl: '/holidays/bali',
    },
    {
      rank: 9,
      name: 'Kerala (Munnar Tea Gardens & Alleppey Houseboat)',
      type: '🛶 Serene Backwaters & Mist-Covered Hills',
      startingPrice: '₹ 16,500 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Alleppey Deluxe Private Houseboat overnight cruise with all meals, Munnar aromatic tea gardens, Eravikulam National Park & Kathakali cultural show.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kerala',
      guideUrl: '/holidays/kerala',
    },
    {
      rank: 10,
      name: 'Andaman & Nicobar (Havelock Radhanagar Beach)',
      type: '🌊 Crystal Waters, Coral Reefs & Scuba Diving',
      startingPrice: '₹ 21,999 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Asia’s best Radhanagar Beach sunset, Elephant Beach coral reef boat ride, Scuba diving / Sea walk, Cellular Jail Light & Sound show & private Makruzz ferry.',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/andaman',
      guideUrl: '/holidays/andaman',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 text-slate-900 font-sans">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-bold truncate">Top 10 Winter Destinations 2026-2027</span>
        </nav>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-10 overflow-hidden relative">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Snowflake className="w-3.5 h-3.5 text-slate-950 animate-spin" /> WINTER &amp; YEAR-END SPECIAL 2026–2027
              </span>
              <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Snow, Sand &amp; Glamping Escapes
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl">
              Top 10 Best Winter Holiday Destinations 2026–2027: <span className="text-sky-400 font-black">Kashmir, Dubai, Goa &amp; Manali ❄️🌴</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed font-normal">
              Planning your year-end or winter vacation? From Gulmarg’s snowy slopes and Dubai’s mega shopping festival to Goa’s beach festivals and the glowing white salt desert of Kutch, discover the top 10 ranked winter destinations with 4-star hotels, verified flights &amp; 24x7 expert support starting @ ₹13,999!
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-800 text-xs text-slate-300 font-semibold">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-sky-400" />
                <span className="text-white font-bold">Trip Customizer Senior Travel Editorial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Updated: November 2, 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>9 Min Comprehensive Read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Ranked by Search Popularity &amp; Value</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Body Column */}
          <article className="lg:col-span-8 space-y-8">
            {/* Quick Summary AEO Box */}
            <div className="p-6 bg-sky-50 border border-sky-200 rounded-2xl">
              <h2 className="text-base font-bold text-sky-950 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Compass className="w-5 h-5 text-sky-600" />
                <span>Winter 2026-2027 Travel Snapshot at a Glance</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed speakable-content aeo-answer">
                Winter travel in 2026-2027 is divided into three prime categories: <strong>Live Snow &amp; Skiing</strong> (Gulmarg Kashmir and Manali Himachal), <strong>Winter Festivals &amp; Desert Glamping</strong> (Dubai Shopping Festival, Sunburn Goa, Pushkar Mela, and Rann Utsav Kutch), and <strong>Tropical Beach Holidays</strong> (Vietnam, Bali, Kerala, and Andaman). Early bird bookings lock in up to 35% savings on peak December airfares.
              </p>
            </div>

            {/* Destinations List */}
            <div className="space-y-6">
              {winterDestinations.map((d) => (
                <Card key={d.rank} className="overflow-hidden border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-60 w-full bg-slate-100">
                    <Image src={d.image} alt={d.name} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-full border border-white/20">
                      Rank #{d.rank}
                    </div>
                    <div className="absolute top-3 right-3 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {d.type}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <h3 className="text-xl font-black text-slate-900">{d.name}</h3>
                        <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                          Duration: <strong className="text-brand-700">{d.duration}</strong>
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Package Starts</span>
                        <span className="text-lg font-black text-brand-600">{d.startingPrice}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      <strong>Key Inclusions:</strong> {d.highlights}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> 4★ Hotel + Flights + Transfers Included
                      </span>
                      <div className="flex items-center gap-2">
                        {d.guideUrl && (
                          <Link href={d.guideUrl}>
                            <Button size="sm" variant="outline" className="border-slate-300 hover:bg-slate-100 text-slate-800 font-bold rounded-xl text-xs">
                              Read Guide
                            </Button>
                          </Link>
                        )}
                        <Link href={d.packageUrl}>
                          <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs">
                            View Packages →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* FAQs Section with AEO Microformats */}
            <section className="space-y-4 pt-6 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-sky-600" />
                <span>Frequently Asked Questions (Winter 2026-2027 Holidays)</span>
              </h2>

              <div className="space-y-3">
                {faqJsonLd.mainEntity.map((faq, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="aeo-question font-bold text-slate-900 text-base mb-1.5">{faq.name}</h3>
                    <p className="speakable-content aeo-answer text-sm text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar CTA & Lead Form Column */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Concierge Lead Card */}
              <Card className="p-6 bg-gradient-to-br from-white to-sky-50 border-sky-200 shadow-xl rounded-2xl text-slate-900">
                <div className="flex items-center space-x-2 text-sky-600 text-xs font-black uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Winter Holiday Architect</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">
                  Get Free Winter Quote &amp; Itinerary PDF 📄
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Connect directly with our Senior Travel Desk on WhatsApp or call for customized quotes with confirmed flights within 2 hours.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200 mt-4">
                  <a
                    href="https://wa.me/917408763401?text=Hi%20TripCustomizer,%20I%20want%20to%20plan%20a%20Winter%202026-2027%20Holiday%20package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black py-3 px-4 rounded-xl shadow-md transition-all text-sm w-full"
                  >
                    <span>💬 Chat on WhatsApp (+91 7408763401)</span>
                  </a>

                  <a
                    href="tel:+917408763401"
                    className="flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-900 text-white font-black py-3 px-4 rounded-xl shadow-md transition-all text-sm w-full"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>Call Travel Desk (+91 7408763401)</span>
                  </a>
                </div>
              </Card>

              {/* Related Seasonal Pillar Guides */}
              <Card className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                  Trending Winter Editorial Guides
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/blog/dubai-shopping-festival-2026-dates-flight-packages-guide"
                      className="text-slate-700 hover:text-sky-600 flex items-center justify-between font-medium group"
                    >
                      <span>Dubai Shopping Festival 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/top-10-new-year-2027-travel-packages-india-abroad-guide"
                      className="text-slate-700 hover:text-sky-600 flex items-center justify-between font-medium group"
                    >
                      <span>Top 10 New Year 2027 Packages</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide"
                      className="text-slate-700 hover:text-sky-600 flex items-center justify-between font-medium group"
                    >
                      <span>Sunburn Goa 2026 Festival Pass</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide"
                      className="text-slate-700 hover:text-sky-600 flex items-center justify-between font-medium group"
                    >
                      <span>Gulmarg Gondola &amp; Kashmir Snow</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide"
                      className="text-slate-700 hover:text-sky-600 flex items-center justify-between font-medium group"
                    >
                      <span>Rann Utsav Kutch 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide"
                      className="text-slate-700 hover:text-sky-600 flex items-center justify-between font-medium group"
                    >
                      <span>Pushkar Mela Camel Fair 2026</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    </Link>
                  </li>
                </ul>
              </Card>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
