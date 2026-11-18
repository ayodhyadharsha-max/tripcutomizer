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
  Palmtree,
  Plane,
  Award,
  Compass,
  FileCheck2,
  AlertCircle,
  SunMedium,
} from 'lucide-react';
import { ThailandInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Thailand Visa-Free for Indians (2026–2027): 60-Day Rules, Entry Requirements, Packages Under ₹25k & 5-Day Itinerary 🌴✈️',
  description:
    'Official 2026-2027 Thailand 60-day visa exemption guide for Indian passport holders. Immigration entry requirements, required funds, Bangkok, Pattaya, Phuket & Krabi 5D/4N packages starting @ ₹21,999 with 4-star hotels & flights.',
  keywords: [
    'thailand visa free for indians 2026',
    'thailand 60 days visa exemption indian passport rules',
    'documents required for thailand immigration for indian tourists',
    'thailand tour packages for couple under 30k with flight',
    'phuket krabi bangkok 5 days itinerary price from delhi mumbai',
    'best time to visit thailand in winter 2026 2027',
    'phi phi island speed boat tour ticket cost',
    'bangkok pattaya holiday packages with flight',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/thailand-visa-free-for-indians-tour-packages-itinerary-2026-guide',
  },
  openGraph: {
    title: 'Thailand Visa-Free for Indians 2026–2027: 60-Day Entry Rules & Packages 🌴✈️',
    description:
      'Complete guide to Thailand 60-day visa exemption for Indian travelers. Immigration checklist, Phuket Phi Phi islands, Bangkok temples & budget packages starting @ ₹21,999.',
    url: 'https://www.tripcustomizer.com/blog/thailand-visa-free-for-indians-tour-packages-itinerary-2026-guide',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thailand Visa-Free Tour Guide 2026–2027 | Trip Customizer',
    description:
      'Zero visa fee! 60-day entry stamp for Indian passport holders. Phuket, Krabi & Bangkok 5D/4N holiday itineraries.',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ThailandVisaFreeGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Thailand Visa-Free for Indians (2026–2027): 60-Day Rules, Entry Requirements, Packages Under ₹25k & 5-Day Itinerary 🌴✈️',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Southeast Asia Travel Desk',
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
    datePublished: '2026-11-18',
    dateModified: '2026-11-18',
    description:
      'Authoritative master guide to Thailand 60-day visa exemption for Indian citizens in 2026-2027. Airport immigration checklist, Bangkok, Pattaya, Phuket, and Krabi circuits, daily cost estimates, and verified tour packages.',
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
        name: 'Thailand Visa-Free Guide 2026-2027',
        item: 'https://www.tripcustomizer.com/blog/thailand-visa-free-for-indians-tour-packages-itinerary-2026-guide',
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 4 Thailand Travel Circuits for Indian Tourists (2026–2027)',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Phuket & Krabi (Tropical Beaches & Phi Phi Speedboat)',
        description: 'Limestone karsts, Maya Bay, 4-Island tour, Bangla Road nightlife, and romantic sunset cruises.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bangkok & Pattaya (City Skyline, Shopping & Coral Island)',
        description: 'Wat Arun, Grand Palace, floating markets, Chao Phraya dinner cruise, and Coral Island parasailing.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Koh Samui & Koh Phangan (Luxury Pool Villas & Full Moon)',
        description: 'Pristine palm-fringed private beaches, luxury cliffside pool villas, and bohemian beach clubs.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Chiang Mai & Northern Highlands (Culture, Elephants & Mist)',
        description: 'Ancient Buddhist temples, ethical elephant sanctuaries, night bazaars, and scenic misty hill retreats.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Thailand visa-free for Indian citizens in 2026–2027?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! The Government of Thailand grants a 60-day visa exemption for Indian passport holders traveling for tourism. Indian citizens can enter Thailand without applying for a prior visa or paying the 2,000 THB Visa-on-Arrival fee. You receive a 60-day entry stamp directly at Bangkok (BKK/DMK), Phuket (HKT), or Chiang Mai (CNX) airports.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required at Thailand immigration for Indian tourists?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To clear Thailand immigration smoothly under the 60-day visa exemption, you need: 1) Original Indian Passport with minimum 6 months validity, 2) Confirmed return or onward flight ticket within 60 days, 3) Confirmed hotel booking voucher, 4) Proof of funds (minimum 10,000 THB per person or 20,000 THB per family in cash, Forex card, or mobile banking), and 5) Completed TM6 arrival card (or digital entry registration where applicable).',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a 5-day Thailand trip cost from India for a couple?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A comfortable 5-Day / 4-Night Thailand package for a couple costs approximately ₹24,999 to ₹34,999 per person (₹50,000 to ₹70,000 per couple). This includes round-trip direct flights (ex-Delhi/Mumbai/Kolkata), 4-star hotel stays with daily breakfast, airport transfers, and excursions like Phi Phi Island speedboat or Coral Island water sports.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is better for first-time Indian travelers: Bangkok-Pattaya or Phuket-Krabi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For budget travelers, bachelors, and shoppers, Bangkok + Pattaya is best due to economical 4-star hotels, massive shopping malls (MBK, Platinum), and lively nightlife. For honeymooners, couples, and nature lovers, Phuket + Krabi is significantly superior due to turquoise waters, dramatic limestone cliffs, scuba diving, and world-famous Phi Phi Islands.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the 60-day Thailand visa exemption be extended in Thailand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, travelers entering under the 60-day visa exemption scheme can extend their stay for an additional 30 days by applying at any local Thai Immigration Office (e.g., Chaengwattana in Bangkok or Phuket Immigration) for a standard official fee of 1,900 THB, allowing up to 90 total days in Thailand.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are pure vegetarian and Jain meals easily available in Thailand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Major Thai tourist hubs including Bangkok (Sukhumvit, Pratunam, Silom), Pattaya (Walking Street, Beach Road), and Phuket (Patong Beach) have hundreds of verified pure vegetarian, North Indian, South Indian, and Jain restaurants. All Trip Customizer Thailand packages include Indian dinner arrangements on request.',
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

      <article className="min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-emerald-500 selection:text-slate-950">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-900/90 border-b border-slate-800 text-xs py-3">
          <Container>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-emerald-400 font-medium truncate">Thailand 60-Day Visa-Free Guide 2026-2027</span>
            </nav>
          </Container>
        </div>

        {/* Hero Section */}
        <header className="relative pt-12 pb-16 overflow-hidden border-b border-slate-800/80">
          <div className="absolute inset-0 z-0 opacity-35">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
              alt="Phuket Phi Phi Islands Thailand Turquoise Waters and Longtail Boats"
              fill
              priority
              className="object-cover object-center filter saturate-125 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-black uppercase tracking-wider">
                <Palmtree className="w-4 h-4 text-emerald-400 animate-pulse" />
                Official 60-Day Visa Exemption Policy for Indian Passport Holders
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Thailand Visa-Free for Indians <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-sky-300">2026–2027</span>: 60-Day Rules, Entry Checklist &amp; 5-Day Packages
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                Save ₹2,000+ visa fees and skip long embassy lines! Complete immigration rules, required funds, Phuket Phi Phi speedboats, Bangkok luxury shopping, and packages starting @ ₹21,999.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" /> Updated: November 18, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" /> 7 Min Read
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-400" /> Verified by Tourism Authority of Thailand (TAT)
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
              <section className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative">
                <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Quick AI Direct Answer • Thailand 2026-2027 Travel Rules
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 aeo-question">
                  Can Indian Passport Holders Travel to Thailand Without a Visa in 2026–2027?
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed aeo-answer speakable-content">
                  <p>
                    <strong>Yes, Thailand is 100% Visa-Free for Indians:</strong> Indian citizens enjoy a <strong>60-day visa exemption</strong> upon arrival at all international airports (Bangkok Suvarnabhumi, Don Mueang, Phuket, and Chiang Mai). You do not need to apply for any prior e-visa or pay the 2,000 THB Visa-on-Arrival fee.
                  </p>
                  <p>
                    <strong>Immigration Requirement Checklist:</strong> You must present a valid passport with at least 6 months validity, a confirmed return flight ticket within 60 days, hotel accommodation vouchers, and proof of funds (minimum 10,000 THB or approx ₹24,000 per person in cash or digital bank balance).
                  </p>
                  <p>
                    <strong>Package Pricing:</strong> A complete 5-day / 4-night Thailand tour (Bangkok + Pattaya or Phuket + Krabi) starts at <strong>₹21,999 to ₹29,999 per person</strong> including 4-star hotels, transfers, and sightseeing.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800 text-center">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Visa Status</span>
                    <strong className="text-sm sm:text-base text-emerald-400 font-bold">Visa-Free (60 Days)</strong>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Visa Fee</span>
                    <strong className="text-sm sm:text-base text-amber-300 font-bold">₹0 (Free Stamp)</strong>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Flight Duration</span>
                    <strong className="text-sm sm:text-base text-sky-400 font-bold">2.5h (CCU) – 4.5h (DEL)</strong>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Starting Package</span>
                    <strong className="text-sm sm:text-base text-teal-300 font-bold">From ₹21,999</strong>
                  </div>
                </div>
              </section>

              {/* Section 1: Official Immigration Entry Checklist */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <FileCheck2 className="w-6 h-6 text-emerald-400" /> Thailand Immigration Entry Checklist: What to Carry
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  While Thailand’s visa exemption makes entry frictionless, Thai immigration officers conduct spot checks. To ensure zero delays at Bangkok (BKK) or Phuket (HKT) passport control, keep the following printed documents in your carry-on folder:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 text-xs sm:text-sm">
                    <thead className="bg-slate-800 text-emerald-300 font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="p-3.5 border-b border-slate-700">Document / Item</th>
                        <th className="p-3.5 border-b border-slate-700">Official Requirement</th>
                        <th className="p-3.5 border-b border-slate-700">Status &amp; Verification Tip</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      <tr>
                        <td className="p-3.5 font-bold text-white">Original Indian Passport</td>
                        <td className="p-3.5">Minimum 6 months validity from date of entry</td>
                        <td className="p-3.5 text-emerald-400 font-semibold">Mandatory (at least 2 blank pages)</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">Confirmed Return Flight Ticket</td>
                        <td className="p-3.5">Departing Thailand within 60 days</td>
                        <td className="p-3.5 text-emerald-400 font-semibold">Checked by airline at Indian check-in counter</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">Hotel Booking Vouchers</td>
                        <td className="p-3.5">Confirmed reservation for your entire stay</td>
                        <td className="p-3.5 text-emerald-400 font-semibold">Included in all Trip Customizer packages</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">Proof of Living Expenses</td>
                        <td className="p-3.5">10,000 THB/person (~₹24,000) or 20,000 THB/family</td>
                        <td className="p-3.5 text-slate-300">Cash (THB or USD), Forex card, or banking app</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">Travel Insurance</td>
                        <td className="p-3.5">Recommended (medical coverage minimum $10,000)</td>
                        <td className="p-3.5 text-sky-400 font-semibold">Highly recommended for peace of mind</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-950/40 border border-emerald-600/40 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pro Travel Tip:</strong> If your flight lands at Suvarnabhumi Airport (BKK), head straight to the regular Foreign Passport queue. Do NOT join the Visa-on-Arrival queue, saving you 45 to 90 minutes of standing in line!
                  </div>
                </div>
              </section>

              {/* Section 2: Top Thailand Holiday Circuits Compared */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <Compass className="w-6 h-6 text-emerald-400" /> Phuket vs Bangkok vs Krabi: Which Circuit to Choose?
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Depending on whether you are traveling as a couple, bachelor group, or family, Thailand offers distinct vacation vibes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="bg-slate-900 border-slate-800 p-5 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Circuit 1 • Beach &amp; Islands</span>
                    <h3 className="text-lg font-bold text-white">Phuket &amp; Krabi</h3>
                    <p className="text-2xl font-black text-emerald-400">₹27,999</p>
                    <p className="text-xs text-slate-400">5 Days / 4 Nights • Couple &amp; Honeymoon</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800">
                      <li>✓ Phi Phi Island speedboat with buffet lunch</li>
                      <li>✓ Krabi 4-Island tour (Poda, Chicken, Tub islands)</li>
                      <li>✓ Patong Beach &amp; Bangla Road nightlife</li>
                      <li>✓ 4-Star beachfront resort with pool</li>
                    </ul>
                  </Card>

                  <Card className="bg-slate-900 border-emerald-500/40 p-5 rounded-xl space-y-2 relative shadow-lg">
                    <span className="absolute top-3 right-3 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Best Budget</span>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Circuit 2 • Shopping &amp; Fun</span>
                    <h3 className="text-lg font-bold text-white">Bangkok &amp; Pattaya</h3>
                    <p className="text-2xl font-black text-emerald-400">₹21,999</p>
                    <p className="text-xs text-slate-400">5 Days / 4 Nights • Friends &amp; Family</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800">
                      <li>✓ Coral Island speedboat tour with parasailing</li>
                      <li>✓ Chao Phraya Princess luxury dinner cruise</li>
                      <li>✓ Golden Buddha &amp; Marble Temple tour</li>
                      <li>✓ Pratunam &amp; MBK mega market shopping</li>
                    </ul>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 p-5 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Circuit 3 • Ultra Luxury</span>
                    <h3 className="text-lg font-bold text-white">Koh Samui Escapes</h3>
                    <p className="text-2xl font-black text-emerald-400">₹44,999</p>
                    <p className="text-xs text-slate-400">5 Days / 4 Nights • Luxury Honeymoon</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800">
                      <li>✓ Private pool villa overlooking Chaweng Bay</li>
                      <li>✓ Ang Thong National Marine Park yacht sail</li>
                      <li>✓ Candlelight beach dinner with wine</li>
                      <li>✓ 60-Minute signature Thai herbal spa</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Section 3: Verified 5-Day Phuket & Krabi Itinerary */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-400" /> Verified 5-Day / 4-Night Phuket &amp; Krabi Itinerary
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Here is the battle-tested, high-satisfaction day-by-day plan designed for Indian travelers:
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 border border-emerald-400/30 text-sm">
                      D1
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 1: Direct Flight to Phuket &amp; Patong Sunset</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Board direct flight from Delhi, Mumbai, or Bangalore to Phuket (HKT). Clear 60-day visa-free immigration in 15 minutes. Private AC transfer to your 4-star Patong Beach resort. Evening walk along Patong Beach, followed by dinner at Indian restaurant.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 border border-emerald-400/30 text-sm">
                      D2
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 2: Full-Day Phi Phi Islands Speedboat &amp; Maya Bay</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Morning speedboat cruise to the world-famous Phi Phi Don and Phi Phi Leh. Marvel at emerald-green Maya Bay (from The Beach movie), snorkel among colorful coral reefs at Pileh Lagoon, visit Monkey Beach, and enjoy Indian buffet lunch at beachfront restaurant.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 border border-emerald-400/30 text-sm">
                      D3
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 3: Scenic Transfer to Krabi via Phang Nga Bay</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Drive through lush tropical limestone countryside to Krabi (Ao Nang). Stop at James Bond Island (Koh Tapu) for canoeing through limestone sea caves. Check into your cliffside Ao Nang resort. Relax at Ao Nang night market.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 border border-emerald-400/30 text-sm">
                      D4
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 4: Krabi 4-Island Speedboat &amp; Railay Beach</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Visit Koh Poda, Chicken Island, Tub Island (famous sandbar where you can walk across the sea during low tide), and the sacred Phra Nang Cave Beach in Railay. Evening romantic sunset dinner overlooking the Andaman Sea.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 border border-emerald-400/30 text-sm">
                      D5
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">Day 5: Souvenir Shopping &amp; Return Flight to India</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Enjoy a hearty tropical breakfast. Pick up Thai silk, aromatic balm, and dried fruits. Private transfer to Krabi or Phuket International Airport for your return flight home.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Best Time to Visit & Weather */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <SunMedium className="w-6 h-6 text-amber-400" /> Best Time to Visit Thailand: Weather &amp; Seasons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-900 border border-emerald-500/40 p-4 rounded-xl space-y-2">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Peak Winter (Nov – Feb)</span>
                    <h4 className="font-bold text-white text-base">Cool &amp; Dry Season</h4>
                    <p className="text-slate-300">24°C – 31°C. Calm turquoise seas, minimal rain, perfect for island hopping, snorkeling, and Christmas/New Year parties.</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Hot Season (Mar – May)</span>
                    <h4 className="font-bold text-white text-base">Summer &amp; Songkran</h4>
                    <p className="text-slate-300">30°C – 36°C. Excellent beach weather and world-famous Songkran Water Festival (April 13–15). Great hotel discounts.</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">Monsoon (Jun – Oct)</span>
                    <h4 className="font-bold text-white text-base">Green Low Season</h4>
                    <p className="text-slate-300">26°C – 32°C. Short afternoon showers, lush rainforest waterfalls, and ultra-cheap 5-star pool villa tariffs.</p>
                  </div>
                </div>
              </section>

              {/* Section 5: Frequently Asked Questions (FAQ) */}
              <section className="space-y-4 pt-6 border-t border-slate-800">
                <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-amber-400" /> Frequently Asked Questions: Thailand Visa-Free Travel
                </h2>

                <div className="space-y-3">
                  {faqJsonLd.mainEntity.map((faq, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                      <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2 aeo-question">
                        <span className="text-emerald-400">Q:</span> {faq.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed aeo-answer speakable-content">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Internal Linking & Related Guides */}
              <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" /> Explore More International &amp; Seasonal Holiday Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <Link
                    href="/holidays/thailand"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Browse All Thailand Tour Packages</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                  </Link>
                  <Link
                    href="/blog/dubai-shopping-festival-2026-dates-flight-packages-guide"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Dubai Shopping Festival 2026 Guide</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                  </Link>
                  <Link
                    href="/blog/christmas-vacation-packages-india-best-places-to-visit-2026-guide"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-red-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Christmas 2026 Vacation Packages</span>
                    <ArrowRight className="w-4 h-4 text-red-400 shrink-0" />
                  </Link>
                  <Link
                    href="/blog/top-10-new-year-2027-travel-packages-india-abroad-guide"
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-rose-500 text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Top 10 New Year 2027 Vacation Hotspots</span>
                    <ArrowRight className="w-4 h-4 text-rose-400 shrink-0" />
                  </Link>
                </div>
              </section>

            </div>

            {/* Right Sidebar Form (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <ThailandInquiryForm />

                {/* Trust Signals */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs text-slate-300">
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Trip Customizer Thailand Guarantee
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Zero visa hassle — 60-day visa-free stamp assistance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Verified 4-star beach hotels with swimming pool &amp; breakfast.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Pure veg &amp; Jain Indian meals curated on all tours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>24x7 local Thai + Hindi/English on-ground emergency support.</span>
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
