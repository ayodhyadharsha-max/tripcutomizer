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
  ArrowRight,
  HelpCircle,
  Snowflake,
  Mountain,
  Award,
  Compass,
  AlertTriangle,
} from 'lucide-react';
import { AuliInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Auli Skiing & Tour Packages 2026–2027: Joshimath Ropeway Booking, Snow Dates & 5-Day Delhi Itinerary ❄️⛷️',
  description:
    'Complete Auli winter tour guide 2026-2027: Joshimath to Auli ropeway ticket booking status, skiing equipment cost, 4x4 snow taxi rates, Gorson Bugyal snow trek & 5D/4N packages starting @ ₹12,499 with verified GMVN & private stays.',
  keywords: [
    'auli tour packages 2026 2027',
    'joshimath to auli ropeway ticket booking online',
    'auli skiing packages price for beginners',
    'delhi to auli 5 days winter tour package',
    'best time for snowfall in auli uttarakhand',
    'auli chair car timings and rates 2026 2027',
    'gorson bugyal winter snow trek guide',
    'joshimath to auli 4x4 snow taxi fare',
    'gmvn auli skiing course booking',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/auli-skiing-tour-packages-ropeway-ticket-booking-winter-guide',
  },
  openGraph: {
    title: 'Auli Skiing & Tour Packages 2026–2027: Ropeway, Snow Dates & Itinerary ❄️⛷️',
    description:
      'Explore India’s skiing capital in Uttarakhand. Cable car tickets, skiing lessons, Nanda Devi mountain views, 4x4 snow cabs & 5-day Delhi packages.',
    url: 'https://www.tripcustomizer.com/blog/auli-skiing-tour-packages-ropeway-ticket-booking-winter-guide',
    images: ['https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auli Skiing & Winter Packages 2026–2027 | Trip Customizer',
    description:
      'Joshimath ropeway updates, beginner ski equipment rates, snow forecast & 5-day custom itineraries.',
    images: ['https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function AuliSkiingMasterGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Auli Skiing & Tour Packages 2026–2027: Joshimath Ropeway Booking, Snow Dates & 5-Day Delhi Itinerary ❄️⛷️',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Uttarakhand Winter Editorial Desk',
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
    datePublished: '2026-11-17',
    dateModified: '2026-11-17',
    description:
      'The definitive authoritative winter guide to Auli Skiing, Joshimath Cable Car, 4x4 snow taxi logistics, Nanda Devi viewpoints, and verified 5-day holiday itineraries for 2026-2027.',
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
        name: 'Auli Skiing & Ropeway Guide 2026-2027',
        item: 'https://www.tripcustomizer.com/blog/auli-skiing-tour-packages-ropeway-ticket-booking-winter-guide',
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 5 Highlights of Auli Winter Vacation 2026-2027',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Joshimath to Auli Ropeway & Chairlift',
        description: 'Asia’s highest and longest cable car (4.15 km) offering panoramic views of Nanda Devi, Kamet & Trishul peaks.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Beginner & Certified Skiing on Natural Slopes',
        description: 'Powder snow skiing with certified instructors and gear rentals starting @ ₹1,500/day at GMVN ski slope.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Gorson Bugyal Snow Trek (3,056 m)',
        description: 'A picturesque 3 km alpine meadow snow trek through dense oak and deodar forests with 360-degree Himalayan views.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Artificial Lake & Snow Guns Panorama',
        description: 'The world’s highest man-made lake built to provide snow guns with water for international ski competitions.',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Panoramic Sunset over Nanda Devi Peak (7,816 m)',
        description: 'Golden alpenglow sunset lighting up India’s second-highest mountain peak right from your balcony.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best time for snowfall in Auli in 2026-2027?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time for guaranteed snowfall and thick skiable snow in Auli is from late December to late February. January and early February offer the deepest powder snow (3 to 6 feet) ideal for professional skiing, snowboarding, and winter photography.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Joshimath to Auli ropeway operational in 2026-2027?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ropeway operations run during good weather conditions. When ropeway maintenance or safety pauses occur, travelers travel from Joshimath to Auli via 4x4 snow cabs with chained tires (14 km mountain road, approx 45 minutes). The internal chairlift at Tower 8 to Tower 10 also operates for skiers.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does skiing cost in Auli for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Beginner skiing in Auli costs between ₹1,500 and ₹2,500 per person per day. This includes ski boots, skis, poles, and a dedicated local ski instructor for 2 to 3 hours of basic balance and sliding lessons. Certified 7-day courses by GMVN range between ₹18,000 and ₹24,000 including food and stay.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to reach Auli from Delhi in winter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From Delhi, take a direct overnight train (Vande Bharat / Jan Shatabdi) to Haridwar/Rishikesh or a flight to Dehradun (Jolly Grant Airport). From Rishikesh or Haridwar, take a pre-booked private cab along NH-7 via Devprayag, Srinagar, Rudraprayag, and Chamoli to Joshimath (9 to 10 hours), followed by ropeway or 4x4 cab to Auli.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a 4x4 vehicle to reach Auli from Joshimath?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Once heavy snow blankets the 14 km winding road between Joshimath and Auli, standard 2WD hatchbacks and sedans are not allowed by local police due to slippery black ice. Only 4x4 Maruti Gypsys, Mahindras, or vehicles fitted with metal tire chains are permitted.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Auli safe for family and senior citizens in winter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Auli is very safe for families and kids. However, temperature drops to -4°C to -8°C at night, so high-altitude thermal wear, waterproof snow boots, and windcheaters are essential. For senior citizens, taking the cable car or staying in heated cliffside resorts in Joshimath/Auli is recommended.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    xpath: ['/html/head/title', '/html/head/meta[@name="description"]/@content'],
    cssSelector: ['.aeo-answer', '.speakable-content', 'h1', 'h2.aeo-question'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      <article className="min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-sky-500 selection:text-slate-950">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-900/90 border-b border-slate-800 text-xs py-3">
          <Container>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-sky-400 font-medium truncate">Auli Skiing &amp; Ropeway Guide 2026-2027</span>
            </nav>
          </Container>
        </div>

        {/* Hero Section */}
        <header className="relative pt-12 pb-16 overflow-hidden border-b border-slate-800/80">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop"
              alt="Auli Snow Clad Slopes and Nanda Devi Mountain Range"
              fill
              priority
              className="object-cover object-center filter saturate-125 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs sm:text-sm font-black uppercase tracking-wider">
                <Snowflake className="w-4 h-4 text-sky-400 animate-pulse" />
                Uttarakhand Winter Season 2026–2027 Official Travel Guide
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Auli Skiing &amp; Tour Packages <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-200">2026–2027</span>: Ropeway Booking, Snow Slopes &amp; Delhi Itinerary
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                Everything you need to plan India’s ultimate winter wonderland holiday: Joshimath-Auli ropeway status, skiing instructor tariffs, 4x4 snow tire chains, Gorson Bugyal snow trek, and verified 5-day packages.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sky-400" /> Updated: November 17, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" /> 8 Min Read
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" /> Fact-Checked by GMVN &amp; Local Guides
                </span>
              </div>
            </div>
          </Container>
        </header>

        {/* Main Content Layout */}
        <Container className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">

              {/* AEO Direct Answer Snapshot */}
              <section className="bg-slate-900 border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative">
                <div className="flex items-center gap-2 mb-3 text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Quick AI Direct Answer • Auli Winter 2026-2027 Snapshot
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 aeo-question">
                  When is the Best Time to Visit Auli for Snowfall &amp; Skiing in 2026–2027?
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed aeo-answer speakable-content">
                  <p>
                    <strong>Peak Snowfall Window:</strong> The best time for heavy snowfall and powder skiing in Auli is from <strong>December 20, 2026 to February 25, 2027</strong>. During this window, snow depth reaches between 3 to 6 feet across Tower 8 and Tower 10 ski slopes.
                  </p>
                  <p>
                    <strong>Joshimath to Auli Ropeway:</strong> Asia’s second longest cable car (4.15 km) connects Joshimath directly to Auli in 22 minutes (Ticket: ₹1,000 round trip). If ropeway is paused due to high winds, local 4x4 snow cabs with metal tire chains operate via the 14 km mountain road (approx ₹1,500 to ₹2,500 per cab).
                  </p>
                  <p>
                    <strong>Beginner Skiing Cost:</strong> 1-day beginner ski lesson with certified instructors, ski boots, poles, and gear rental costs ₹1,500 to ₹2,500 per person.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800 text-center">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Altitude</span>
                    <strong className="text-sm sm:text-base text-sky-400 font-bold">2,800m – 3,050m</strong>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Winter Temp</span>
                    <strong className="text-sm sm:text-base text-cyan-300 font-bold">-8°C to 7°C</strong>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Nearest Airport</span>
                    <strong className="text-sm sm:text-base text-amber-300 font-bold">Dehradun (280 km)</strong>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">5D/4N Package</span>
                    <strong className="text-sm sm:text-base text-emerald-400 font-bold">From ₹12,499</strong>
                  </div>
                </div>
              </section>

              {/* Section 1: Cable Car & Chairlift Master Guide */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <Mountain className="w-6 h-6 text-sky-400" /> Joshimath to Auli Ropeway &amp; Chairlift Guide 2026–2027
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  The Joshimath to Auli Cable Car is India’s most celebrated ropeway. Spanning 4.15 km across 10 steel towers, it climbs from 1,900 meters in Joshimath to over 3,020 meters at Tower 10 in Auli, showcasing mesmerizing 180-degree panoramas of Nanda Devi (7,816 m), Mana Parvat, and Dunagiri.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 text-xs sm:text-sm">
                    <thead className="bg-slate-800 text-sky-300 font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="p-3.5 border-b border-slate-700">Service Type</th>
                        <th className="p-3.5 border-b border-slate-700">Operating Route</th>
                        <th className="p-3.5 border-b border-slate-700">Approx. Tariff</th>
                        <th className="p-3.5 border-b border-slate-700">Timings &amp; Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      <tr>
                        <td className="p-3.5 font-bold text-white">Main Cable Car (Ropeway)</td>
                        <td className="p-3.5">Joshimath to Auli (Tower 10)</td>
                        <td className="p-3.5 text-emerald-400 font-bold">₹1,000 (Round Trip)</td>
                        <td className="p-3.5 text-slate-400">9:00 AM – 4:30 PM (25 mins one-way)</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">Chairlift (Open Cable)</td>
                        <td className="p-3.5">GMVN Complex to Auli Lake / Slopes</td>
                        <td className="p-3.5 text-emerald-400 font-bold">₹500 (Round Trip)</td>
                        <td className="p-3.5 text-slate-400">9:30 AM – 4:00 PM (Quick ski slope transit)</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">Private 4x4 Snow Cab</td>
                        <td className="p-3.5">Joshimath to Auli Top (Road)</td>
                        <td className="p-3.5 text-emerald-400 font-bold">₹1,800 – ₹2,500 (One-Way)</td>
                        <td className="p-3.5 text-slate-400">Required when road has ice; metal tire chains</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-950/40 border border-amber-600/40 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Crucial Winter Travel Tip:</strong> Ropeway tickets cannot be booked weeks in advance online on state portals due to daily weather clearances. Our team books tickets on-ground early morning for our package guests so you bypass the 2-hour queue.
                  </div>
                </div>
              </section>

              {/* Section 2: Skiing Equipment & Beginner Lessons */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <Snowflake className="w-6 h-6 text-sky-400" /> Auli Skiing Lessons, Equipment Rental &amp; Courses
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Auli is certified by the International Ski Federation (FIS). The slopes here are wide, gradual, and free of jagged boulders, making them safe for first-time skiers while offering high-adrenaline steeps for intermediate snowboarders.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="bg-slate-900 border-slate-800 p-5 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Tier 1 • Discovery</span>
                    <h3 className="text-lg font-bold text-white">1-Day Beginner Trial</h3>
                    <p className="text-2xl font-black text-emerald-400">₹1,500 – ₹2,000</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800">
                      <li>✓ Professional ski boots &amp; skis</li>
                      <li>✓ Ski poles &amp; safety goggles</li>
                      <li>✓ 2.5 hours personal instructor</li>
                      <li>✓ Snow gliding &amp; braking basics</li>
                    </ul>
                  </Card>

                  <Card className="bg-slate-900 border-sky-500/40 p-5 rounded-xl space-y-2 relative shadow-lg">
                    <span className="absolute top-3 right-3 bg-sky-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Most Popular</span>
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Tier 2 • Weekend</span>
                    <h3 className="text-lg font-bold text-white">3-Day Ski Crash Course</h3>
                    <p className="text-2xl font-black text-emerald-400">₹6,500 – ₹8,000</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800">
                      <li>✓ Unlimited daily equipment usage</li>
                      <li>✓ 4 hours instructor coaching daily</li>
                      <li>✓ Snowplough turns &amp; slope descent</li>
                      <li>✓ Basic slalom gate navigation</li>
                    </ul>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 p-5 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Tier 3 • Certified</span>
                    <h3 className="text-lg font-bold text-white">7-Day GMVN Ski Course</h3>
                    <p className="text-2xl font-black text-emerald-400">₹18,500 – ₹24,000</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800">
                      <li>✓ Official GMVN government certificate</li>
                      <li>✓ Full board lodging &amp; all meals</li>
                      <li>✓ Advanced parallel turns coaching</li>
                      <li>✓ Slalom competition eligibility</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 3: Verified 5D/4N Delhi to Auli Itinerary */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <Compass className="w-6 h-6 text-sky-400" /> Ideal 5-Day / 4-Night Delhi to Auli Winter Itinerary
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Because Auli sits deep in Garhwal Himalayas (approx 500 km from Delhi), rushing the trip causes mountain fatigue. Here is the field-tested route recommended by our senior planners:
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 border border-sky-400/30 text-sm">
                      D1
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 1: Delhi / Dehradun to Rishikesh / Devprayag</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Catch early morning Vande Bharat train from Delhi to Haridwar or flight to Dehradun. Drive through Rishikesh and marvel at the holy confluence of Bhagirathi and Alaknanda rivers at Devprayag. Overnight stay at scenic riverside hotel in Srinagar or Rudraprayag.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 border border-sky-400/30 text-sm">
                      D2
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 2: Rudraprayag to Joshimath &amp; Auli Cable Car Ascent</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Scenic drive along Alaknanda river via Karnaprayag and Chamoli to Joshimath. Board the grand ropeway to Auli or take 4x4 cab to your cliffside resort. Watch the spectacular crimson sunset over Nanda Devi peak. Overnight stay in Auli.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 border border-sky-400/30 text-sm">
                      D3
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 3: Full Day Skiing &amp; Artificial Lake Photography</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Morning ski lessons with certified instructor at Tower 8. Practice balance, sliding, and carving on soft powder snow. In the afternoon, stroll around the turquoise Auli Artificial Lake. Evening hot cocoa around the bonfire.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 border border-sky-400/30 text-sm">
                      D4
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 4: Gorson Bugyal Snow Trek &amp; Descent to Rishikesh</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Morning 3 km gentle snow trek to Gorson Bugyal (3,056 m) surrounded by towering deodar forests and unmatched Himalayan peaks. Descend to Joshimath via ropeway and drive to Rishikesh. Attend the sacred Triveni Ghat Ganga Aarti.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 border border-sky-400/30 text-sm">
                      D5
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 5: Rishikesh Cafe Culture &amp; Return to Delhi</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Explore Laxman Jhula cafes, try river rafting (if water levels permit), and take the evening Vande Bharat Express or cab back to Delhi NCR.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: What to Pack for Auli in Winter */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" /> Essential Winter Packing List for Auli (-8°C)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                    <h4 className="font-bold text-sky-300">Clothing &amp; Layering</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• 2 pairs of thermal base layers (Merino wool preferred)</li>
                      <li>• Fleece or down jacket rated down to -10°C</li>
                      <li>• Waterproof, windproof ski jacket &amp; pants</li>
                      <li>• Woollen beanies, balaclava, and neck gaiters</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                    <h4 className="font-bold text-sky-300">Footwear &amp; Gear</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Waterproof high-ankle snow boots with deep rubber grips</li>
                      <li>• UV400 polarized sunglasses (essential against snow blindness)</li>
                      <li>• Heavy insulated waterproof snow gloves</li>
                      <li>• High-SPF sunscreen (50+) &amp; cold-weather lip balm</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Frequently Asked Questions (FAQ) */}
              <section className="space-y-4 pt-6 border-t border-slate-800">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-amber-400" /> Frequently Asked Questions: Auli Winter &amp; Skiing
                </h2>

                <div className="space-y-3">
                  {faqJsonLd.mainEntity.map((faq, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                      <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2 aeo-question">
                        <span className="text-sky-400">Q:</span> {faq.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed aeo-answer speakable-content">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Internal Linking & Related Winter Guides */}
              <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" /> Explore More Winter 2026–2027 Holiday Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <Link
                    href="/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-sky-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Gulmarg Gondola &amp; Kashmir Snow Guide</span>
                    <ArrowRight className="w-4 h-4 text-sky-400 shrink-0" />
                  </Link>
                  <Link
                    href="/blog/christmas-vacation-packages-india-best-places-to-visit-2026-guide"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-red-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Christmas 2026 Long Weekend Packages</span>
                    <ArrowRight className="w-4 h-4 text-red-400 shrink-0" />
                  </Link>
                  <Link
                    href="/blog/top-10-new-year-2027-travel-packages-india-abroad-guide"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-rose-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>New Year 2027 Vacation Hotspots</span>
                    <ArrowRight className="w-4 h-4 text-rose-400 shrink-0" />
                  </Link>
                  <Link
                    href="/blog/top-10-best-winter-destinations-2026"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Top 10 Winter Snow Destinations 2026</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </Link>
                </div>
              </section>

            </div>

            {/* Right Sidebar Form (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <AuliInquiryForm />

                {/* Quick Trust Signals */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs text-slate-300">
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" /> Trip Customizer Winter Guarantee
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Dedicated 4x4 snow vehicles with experienced mountain drivers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Pre-arranged ropeway queue management for package guests.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Certified ski instructors with clean, sanitized winter gear.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>24x7 real-time road condition and snow forecast hotline.</span>
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-800 text-center">
                    <a
                      href="https://wa.me/917408763401"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> WhatsApp Desk: +91 7408763401
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}
