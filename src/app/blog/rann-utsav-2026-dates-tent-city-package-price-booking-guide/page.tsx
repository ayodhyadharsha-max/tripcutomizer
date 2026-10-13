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
  Tent,
  Moon,
  ArrowRight,
  HelpCircle,
  FileCheck2,
  Camera,
  Compass,
  Zap,
} from 'lucide-react';
import { RannUtsavInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Rann Utsav 2026-2027: Official Dates, Tent City Price, Full Moon Schedule & Booking Guide 🎪',
  description:
    'Complete official guide to Rann Utsav 2026-2027 Kutch White Desert. Official dates (Nov 1, 2026 – Feb 28, 2027), Tent City Dhordo tariff rates, Full Moon calendar, online permit process, Bhuj to Dhordo itinerary & packages starting @ ₹14,500.',
  keywords: [
    'rann utsav 2026 dates',
    'rann utsav tent city booking',
    'rann of kutch full moon dates 2026 2027',
    'rann utsav package price',
    'rann utsav dhordo tent rates',
    'kutch festival tour package',
    'white desert permit online',
    'bhuj to rann utsav itinerary',
    'rann utsav family package',
    'rann utsav couple tent price',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide',
  },
  openGraph: {
    title: 'Rann Utsav 2026-2027: Dates, Tent City Rates, Full Moon Schedule & Guide 🎪',
    description:
      'Plan your trip to the world-renowned White Desert of Kutch. Tent City Dhordo packages, Full Moon schedule, permits, and curated itineraries.',
    url: 'https://www.tripcustomizer.com/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide',
    images: ['https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rann Utsav 2026-2027 Master Booking Guide | Trip Customizer',
    description:
      'Official dates, Dhordo Tent City tariffs, Full Moon dates, online permits, and customized Kutch holiday packages.',
    images: ['https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function RannUtsav2026GuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rann Utsav 2026-2027: Official Dates, Tent City Price, Full Moon Schedule & Booking Guide 🎪',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Cultural Expeditions Editorial',
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
      'Complete planning and booking guide for Rann Utsav 2026-2027. Official dates, full moon nights, Tent City Dhordo tariff comparison, online permit rules, and customized tour packages.',
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
        name: 'Rann Utsav 2026-2027 Booking Guide',
        item: 'https://www.tripcustomizer.com/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the official dates for Rann Utsav 2026-2027?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rann Utsav 2026-2027 officially opens on November 1, 2026, and concludes on February 28, 2027. Peak visiting months are November, December (Christmas and New Year), and January.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the best time to visit Rann Utsav for the Full Moon experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time is during the Full Moon nights (Purnima) plus 2 days before and 2 days after, when the white salt desert glows silver under the moonlit sky. Key Full Moon dates are in mid-November 2026, mid-December 2026, mid-January 2027, and mid-February 2027.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the package price for Tent City Dhordo at Rann Utsav?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tent City Dhordo packages start from ₹14,500 to ₹18,000 per person for 1 Night / 2 Days in Deluxe AC Tents, ₹24,000 to ₹32,000 per person for 2 Nights / 3 Days in Premium AC Tents, and up to ₹55,000+ for Darbar Suites, inclusive of all Kutchi meals, cultural events, and White Desert transfers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a permit required to visit the White Rann of Kutch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, because of proximity to the Indo-Pak international border, Indian and foreign visitors require an entry permit. Indian citizens can obtain permits online via the Gujarat Police portal (portal.rannpermit.com) or at the Bhirandiyara / Dhordo check-post with a valid Government ID (Aadhaar / Voter ID / Passport) for ₹100 per adult.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I reach Rann Utsav Dhordo from Bhuj?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bhuj (Airport and Railway Station) is the closest transit gateway, situated 85 km (approximately 1.5 to 2 hours drive) from Tent City Dhordo. Regular AC private tourist cabs, package shuttles, and state buses operate directly between Bhuj and Dhordo.',
        },
      },
    ],
  };

  const fullMoonCalendar = [
    { month: 'November 2026', dates: 'Nov 23 - Nov 26, 2026', highlight: 'Kartik Purnima Festival & Opening Spike' },
    { month: 'December 2026', dates: 'Dec 22 - Dec 26, 2026', highlight: 'Winter Peak & Pre-Christmas Magic' },
    { month: 'January 2027', dates: 'Jan 21 - Jan 25, 2027', highlight: 'Makar Sankranti & Crisp Clear Skies' },
    { month: 'February 2027', dates: 'Feb 19 - Feb 23, 2027', highlight: 'Season Finale & Pleasant Desert Evenings' },
  ];

  const tentCategories = [
    {
      category: 'Darbar Suite (Presidential Luxury)',
      space: 'Ultra-spacious living room, master bedroom, private dining lounge & verandah',
      price2N: '₹65,000 – ₹78,000 / couple',
      bestFor: 'VIP travelers, luxury couples & celebratory anniversaries',
      badge: 'Royal Heritage',
    },
    {
      category: 'Rajwadi Suite (Royal AC Tent)',
      space: 'Luxurious wooden flooring, plush sitting lounge, handcrafted Kutchi art decor',
      price2N: '₹48,000 – ₹55,000 / couple',
      bestFor: 'Couples seeking supreme comfort & curated hospitality',
      badge: 'Best Seller',
    },
    {
      category: 'Premium AC Tent',
      space: 'Spacious climate-controlled tent, twin/king beds, en-suite bathroom with running hot water',
      price2N: '₹28,500 – ₹34,000 / couple',
      bestFor: 'Families & couples looking for authentic desert glamping',
      badge: 'Most Popular',
    },
    {
      category: 'Deluxe AC Tent / Non-AC Tent',
      space: 'Cozy traditional Kutchi ambiance, attached western bath, charging docks',
      price2N: '₹19,500 – ₹24,000 / couple',
      bestFor: 'Budget-conscious travelers, friends & photography groups',
      badge: 'Budget Friendly',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container className="relative z-10 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400 font-medium truncate">Rann Utsav 2026-2027 Master Guide</span>
          </nav>

          {/* Trending Seasonal Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>SEASON OFFICIALLY STARTING NOV 1, 2026 • BOOKINGS LIVE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
            Rann Utsav 2026–2027: Official Dates, Tent City Price, Full Moon Schedule &amp; Complete Booking Guide 🎪
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-8">
            Step into the magical infinity of the White Desert. From Dhordo Tent City tariffs, permit rules, and full moon calendar to day-wise itineraries — here is everything you need to plan your Kutch getaway with verified pricing.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Season Dates: Nov 1, 2026 – Feb 28, 2027</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>9 Min Read</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Gujarat Tourism Partner Guidance</span>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content Layout */}
      <Container className="py-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-10">
            {/* Lead Image & Caption */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop"
                alt="White Desert Rann of Kutch during sunset with camel carts"
                width={1200}
                height={680}
                className="w-full h-[320px] sm:h-[420px] object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs sm:text-sm">
                The surreal salt desert of Dhordo, Kutch turning rose-gold during the legendary Rann Utsav sunset.
              </div>
            </div>

            {/* Quick Summary Highlights Box */}
            <Card className="p-6 bg-amber-50/70 border border-amber-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5 text-amber-900 font-bold text-lg mb-3">
                <Zap className="w-5 h-5 text-amber-600" />
                <span>Rann Utsav 2026-2027 Quick Facts at a Glance</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Festival Duration:</strong> 1st Nov 2026 to 28th Feb 2027 (120 Days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Prime Attraction:</strong> Full Moon White Desert Night Walks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Starting Tariff:</strong> ₹14,500/person (1N/2D All Meals Included)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Gateway Station:</strong> Bhuj Airport/Station (85 km from Dhordo)</span>
                </li>
              </ul>
            </Card>

            {/* Section 1: What is Rann Utsav */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Tent className="w-7 h-7 text-amber-600" />
                <span>Why Rann Utsav is India’s Most Awaited Winter Spectacle</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Every winter, the Great Rann of Kutch—one of the world’s largest salt deserts spanning over 7,500 square kilometers—transforms into a breathtaking, shimmering white plain under the bright Gujarat sun. Between November and February, when the monsoon waters evaporate leaving behind crystallised mineral salts, the government of Gujarat and Tent City host <strong>Rann Utsav</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                Over 400 luxurious tents arise on the desert fringes at <strong>Dhordo village</strong>. The festival blends traditional Kutchi folk music, fiery Sufi ballads, energetic Garba circles, camel safari rides, paramotoring, and world-famous Kutchi Rogan art and handicraft stalls.
              </p>
            </section>

            {/* Section 2: Full Moon Schedule */}
            <section className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Moon className="w-7 h-7 text-indigo-600" />
                <span>Official Full Moon Dates 2026–2027 (Purnima Calendar)</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Witnessing the White Desert under a full moon is universally hailed as a bucket-list memory. The pure white crystalline salt reflects 100% of the moonlight, bathing the entire horizon in a surreal silver luminescence where shadows disappear.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Month</th>
                      <th className="py-3 px-4">Full Moon Window (Ideal Travel)</th>
                      <th className="py-3 px-4">Why Travel This Window?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {fullMoonCalendar.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">{row.month}</td>
                        <td className="py-3.5 px-4 font-mono font-medium text-amber-700">{row.dates}</td>
                        <td className="py-3.5 px-4 text-slate-600">{row.highlight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                *Tip: Full Moon slots sell out 45 to 60 days in advance. Always reserve your tents early if your dates coincide with Purnima.
              </p>
            </section>

            {/* Section 3: Tent City Dhordo Categories & Prices */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-amber-500" />
                <span>Tent City Dhordo Package Tariffs (2 Nights / 3 Days)</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Accommodation during Rann Utsav is divided between <strong>The Tent City (Dhordo)</strong> and <strong>White Rann Resort</strong>. All official tent packages are curated as all-inclusive experiences, including accommodation, all meals (Kutchi &amp; continental buffets), pickup/drop from Bhuj, White Desert transfers, and cultural entertainment.
              </p>

              <div className="space-y-4">
                {tentCategories.map((tent, index) => (
                  <Card key={index} className="p-5 border border-slate-200 hover:border-amber-400 transition-all rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          {tent.badge}
                        </span>
                        <h3 className="font-bold text-slate-900 text-lg">{tent.category}</h3>
                      </div>
                      <span className="font-bold text-base sm:text-lg text-emerald-700">{tent.price2N}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{tent.space}</p>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-amber-500" />
                      <span>Recommended for: {tent.bestFor}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 4: White Desert Permits Online Guide */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <FileCheck2 className="w-7 h-7 text-emerald-600" />
                <span>How to Get the White Rann Entry Permit (Online &amp; Offline)</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Because Dhordo is located close to the border, every Indian and international traveler must obtain a mandatory entry permit to enter the salt desert.
              </p>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-sm text-slate-700">
                <h4 className="font-bold text-slate-900">Step-by-Step Online Permit Method:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Visit the official Gujarat Police portal: <code>portal.rannpermit.com</code></li>
                  <li>Click on &quot;Get Permit&quot; and select your date of visit and number of travelers.</li>
                  <li>Upload a copy of a valid photo ID (Aadhaar Card, Voter ID, Driving License, or Passport).</li>
                  <li>Pay the entry fee: <strong>₹100 per adult (above 12 yrs)</strong>, ₹50 for children (5-12 yrs), and ₹50 per four-wheeler vehicle entry.</li>
                  <li>Download the digital PDF permit with barcode. Present it at the Bhirandiyara / Dhordo BSF check-post.</li>
                </ol>
                <div className="p-3 bg-emerald-50 text-emerald-900 rounded-lg text-xs font-medium">
                  💡 Note: When you book an all-inclusive Trip Customizer Rann Utsav Package, our concierge arranges your permits in advance with zero queue hassle!
                </div>
              </div>
            </section>

            {/* Section 5: Perfect 3D/2N Itinerary */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Camera className="w-7 h-7 text-indigo-600" />
                <span>The Perfect 3 Days / 2 Nights Rann Utsav Itinerary</span>
              </h2>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="border-l-4 border-amber-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 1: Arrival at Bhuj ➔ Welcome at Tent City Dhordo ➔ Sunset at White Desert</h4>
                  <p className="mt-1">
                    Arrive at Bhuj Railway Station or Airport. Board the AC vehicle transfer to Dhordo Tent City (85 km). Receive a traditional Kutchi welcome with dhol drums and arti. Check in to your AC tent, enjoy a grand Gujarati/Kutchi thali lunch. In the late afternoon, proceed to the White Desert in open camel carts to watch the breathtaking crimson sunset. Return for folk dances and live Sufi musical night.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 2: Kalo Dungar (Black Hill) ➔ Magnetic Hill ➔ Gandhi Nu Gam Craft Village</h4>
                  <p className="mt-1">
                    After breakfast, travel to Kalo Dungar (highest point in Kutch at 462m) for panoramic views of the great salt basin. Visit the sacred Dattatreya Temple where jackals are fed prasad. Stop by the Magnetic Hill where vehicles roll uphill against gravity! On the return, explore Gandhi Nu Gam (Ludiya village) to interact with master weavers and copper bell artisans. Return for evening stargazing on the salt flats.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 3: Sunrise at Salt Desert ➔ Bhujodi Craft Village ➔ Aina Mahal ➔ Departure</h4>
                  <p className="mt-1">
                    Early morning sunrise excursion on the White Rann when the desert is crisp and tranquil. Enjoy breakfast and check out from Tent City. Drive back to Bhuj to visit the 18th-century Aina Mahal (Hall of Mirrors), Prag Mahal, and the Hiralaxmi Memorial Craft Park at Bhujodi. Drop at Bhuj Airport/Station for onward journey.
                  </p>
                </div>
              </div>
            </section>

            {/* Deep Link Package Banner */}
            <Card className="p-6 bg-gradient-to-r from-amber-900 to-indigo-950 text-white rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Verified Tour Package</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">Rann of Kutch &amp; Coastal Gujarat Special (4D/3N)</h3>
                  <p className="text-sm text-slate-200 max-w-lg">
                    Includes 2 Nights Tent City Dhordo glamping + 1 Night Bhuj luxury heritage stay, private AC sedan, all meals, full moon safari, and instant permit assistance.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-amber-400">₹14,999<span className="text-xs text-slate-300 font-normal"> / person</span></span>
                  <Link href="/holidays/kutch/rann-of-kutch-white-desert-coastal-special" className="mt-3">
                    <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shadow-md">
                      View Tour Itinerary <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Section 6: FAQs */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-amber-600" />
                <span>Frequently Asked Questions (Rann Utsav 2026-2027)</span>
              </h2>

              <div className="space-y-3">
                {faqJsonLd.mainEntity.map((faq, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-1.5">{faq.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Sticky Inquiry Form Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <RannUtsavInquiryForm defaultTentCategory="Premium AC Tent (Dhordo Tent City) 3D/2N" />

              {/* Direct Call Concierge Card */}
              <Card className="mt-6 p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-lg text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base mb-1">Need Urgent Full Moon Dates Booking?</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Speak directly with our dedicated Gujarat &amp; Rann Utsav travel specialist for custom tent allocation.
                </p>
                <a
                  href="tel:+918882003355"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 88820 03355</span>
                </a>
              </Card>

              {/* Related Seasonal Collections */}
              <Card className="mt-6 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900 mb-3 uppercase tracking-wider text-slate-500">
                  Trending Winter Festivals
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/blog/top-10-diwali-holiday-destinations-2026"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Diwali Holiday Getaways 2026</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/holidays/rajasthan"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Royal Rajasthan Heritage Holidays</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/holidays/kashmir"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Kashmir Autumn &amp; Snow Tour Packages</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
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
