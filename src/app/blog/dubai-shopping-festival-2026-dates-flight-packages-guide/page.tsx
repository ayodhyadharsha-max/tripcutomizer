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
  ShoppingBag,
  ArrowRight,
  HelpCircle,
  Camera,
  Compass,
  Zap,
  Ticket,
  Flame,
  Award,
} from 'lucide-react';
import { DubaiDSFInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Dubai Shopping Festival (DSF) 2026-2027: Dates, Mega Sales, Flight Packages & Guide 🛍️✨',
  description:
    'Complete master guide to Dubai Shopping Festival (DSF) 2026-2027. Official dates, mega raffle prizes, 90% discount sales, flight packages from Ahmedabad, Mumbai & Delhi, 5D/4N itinerary, visa assistance & packages starting @ ₹34,999.',
  keywords: [
    'dubai shopping festival 2026 dates',
    'dubai tour packages from ahmedabad with flight',
    'dubai tour packages from mumbai emirates',
    'delhi to dubai tour package with flight',
    'dsf 2026 mega raffle prizes gold discounts',
    'dubai 5 days tour itinerary price for couple',
    'dubai new year shopping festival 2026',
    'burj khalifa desert safari dubai mall packages',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/dubai-shopping-festival-2026-dates-flight-packages-guide',
  },
  openGraph: {
    title: 'Dubai Shopping Festival (DSF) 2026-2027: Dates, Flight Packages & Guide 🛍️✨',
    description:
      'Plan your dream Dubai holiday during DSF 2026-2027! Round-trip flights from Ahmedabad, Mumbai & Delhi, 4-star hotel stays, desert safari, Burj Khalifa tickets & visa.',
    url: 'https://www.tripcustomizer.com/blog/dubai-shopping-festival-2026-dates-flight-packages-guide',
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Shopping Festival 2026-2027 Master Travel Guide | Trip Customizer',
    description:
      'Official DSF dates, flight deals from Ahmedabad, Mumbai, Delhi, hotel packages, and 5D/4N custom itinerary.',
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function DubaiShoppingFestivalGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dubai Shopping Festival (DSF) 2026-2027: Dates, Mega Sales, Flight Packages & Guide 🛍️✨',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer International Editorial Desk',
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
      'The definitive guide to Dubai Shopping Festival (DSF) 2026-2027. Official dates, mega raffle promotions, round-trip flight connections from Ahmedabad, Mumbai, and Delhi, 4-star hotels, and customized 5D/4N tour itineraries.',
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
        name: 'Dubai Shopping Festival Guide 2026-2027',
        item: 'https://www.tripcustomizer.com/blog/dubai-shopping-festival-2026-dates-flight-packages-guide',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the official dates for Dubai Shopping Festival (DSF) 2026-2027?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Dubai Shopping Festival (DSF) 2026-2027 officially runs from early December 2026 through mid-January 2027 across all major malls including Dubai Mall, Mall of the Emirates, City Centre Deira, and Gold Souk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a Dubai tour package with flight cost during DSF?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A customized 5 Days / 4 Nights Dubai tour package during DSF typically starts from ₹34,999 to ₹42,999 per person, including round-trip flights from Ahmedabad or Mumbai, 4-star deluxe hotel stays, daily breakfast, desert safari with BBQ dinner, Burj Khalifa tickets, and airport transfers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which airlines offer the best flight connectivity to Dubai from India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Emirates, flydubai, Air India, and IndiGo operate multiple daily non-stop flights from Ahmedabad (AMD), Mumbai (BOM), and Delhi (DEL) directly into Dubai International Airport (DXB).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is visa required for Indians traveling to Dubai for DSF?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indian passport holders require a 30-day UAE tourist visa, which is processed in just 48 to 72 hours with valid passport scans. Trip Customizer provides 100% end-to-end visa assistance with guaranteed departure vouchers.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dubai Shopping Festival 2026-2027 Master Guide',
    url: 'https://www.tripcustomizer.com/blog/dubai-shopping-festival-2026-dates-flight-packages-guide',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Book and Plan a Dubai Shopping Festival Trip from India',
    description: 'Step-by-step guide to booking flights, securing 4-star hotels, and planning a 5D/4N Dubai itinerary during DSF.',
    totalTime: 'PT15M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Select Departure City with Direct Flights',
        text: 'Choose direct non-stop flights departing from Ahmedabad (AMD), Mumbai (BOM), or Delhi (DEL) to save transit time.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Hotel Location Near Metro or Shopping Hubs',
        text: 'Book verified 4-star accommodations in Bur Dubai, Deira, or Downtown near Dubai Mall for effortless shopping access.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Pre-book Desert Safari and Burj Khalifa Tickets',
        text: 'Reserve skip-the-line Burj Khalifa 124th floor slots and evening Desert Safari with Tanoura shows.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Obtain UAE Tourist Visa with 5% GST Invoice',
        text: 'Receive 30-day e-Visa approval within 48 hours and confirmed hotel vouchers from Trip Customizer.',
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <Container className="py-3">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/blog" className="hover:text-blue-600 transition">Travel Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-semibold truncate">Dubai Shopping Festival 2026-2027</span>
          </nav>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>International Mega Event • Dec 2026 – Jan 2027</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Dubai Shopping Festival (DSF) 2026-2027: Official Dates, Mega Discounts, Flight Packages &amp; Complete Guide 🛍️✨
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Get ready for 38+ days of jaw-dropping discounts up to 90%, daily gold raffles, luxury car giveaways, drone light shows, and world-class celebrity concerts. Here is everything you need to book your dream Dubai trip from Ahmedabad, Mumbai, or Delhi.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Updated Oct 30, 2026</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>7 Min Read • 100% Verified</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Emirates &amp; IndiGo Direct Flights</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Layout */}
      <Container className="py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content */}
          <main className="lg:col-span-8 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
                alt="Dubai Shopping Festival Burj Khalifa Skyline"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  World’s #1 Shopping &amp; Entertainment Festival
                </div>
                <div className="text-lg sm:text-xl font-black">
                  Dubai Skyline, Gold Souk &amp; Burj Khalifa Lake
                </div>
              </div>
            </div>

            {/* AEO Quick Answer Snapshot Card (Featured Snippet Position #0 Target) */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>DSF 2026-2027 Key Facts at a Glance</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Official 2026 Data
                </span>
              </div>

              {/* Direct Q1: Dates */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70">
                <h2 className="aeo-question text-base sm:text-lg font-extrabold text-slate-950 mb-2">
                  When is the Dubai Shopping Festival (DSF) 2026-2027?
                </h2>
                <p className="speakable-content aeo-answer text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  The Dubai Shopping Festival (DSF) 2026-2027 officially takes place from <strong>early December 2026 to mid-January 2027</strong>. Over 800 participating luxury brands across 3,500 retail outlets in Dubai Mall, Mall of the Emirates, City Centre Deira, and the Gold Souk offer promotions ranging from 25% to 90% off, accompanied by nightly drone shows, fireworks at The Beach JBR, and daily Nissan and Infiniti mega raffles.
                </p>
              </div>

              {/* Direct Q2: Package Cost from India */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70">
                <h2 className="aeo-question text-base sm:text-lg font-extrabold text-slate-950 mb-2">
                  How much does a Dubai tour package cost from India during DSF?
                </h2>
                <p className="speakable-content aeo-answer text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  A customized 5 Days / 4 Nights Dubai holiday package during DSF starts at <strong>₹34,999 to ₹42,999 per person</strong> with confirmed round-trip flights from Ahmedabad, Mumbai, or Delhi. The package includes 4-star hotel accommodations with daily buffet breakfast, desert safari with BBQ dinner, Burj Khalifa 124th floor tickets, a Marina Dhow dinner cruise, private airport transfers, and 24x7 senior concierge assistance.
                </p>
              </div>
            </section>

            {/* Direct Flights & Departure Cities Comparison Table */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-600" />
                <span>Dubai Tour Packages &amp; Flight Departures from India (2026-2027)</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Compare flight durations, starting package prices, and partner airline carriers departing from your closest Indian international airport:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-extrabold uppercase tracking-wider">
                      <th className="p-3.5">Departure City</th>
                      <th className="p-3.5">Flight Duration</th>
                      <th className="p-3.5">Partner Airlines</th>
                      <th className="p-3.5">Package Price (5D/4N)</th>
                      <th className="p-3.5">Direct Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Ahmedabad (AMD)</td>
                      <td className="p-3.5 whitespace-nowrap">3 Hrs 20 Mins (Direct)</td>
                      <td className="p-3.5">Emirates, IndiGo, SpiceJet</td>
                      <td className="p-3.5 font-extrabold text-emerald-600">₹36,999</td>
                      <td className="p-3.5">
                        <Link href="/packages/dubai-tour-package-from-ahmedabad" className="text-brand-600 font-bold hover:underline">
                          View Itinerary &rarr;
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Mumbai (BOM)</td>
                      <td className="p-3.5 whitespace-nowrap">3 Hrs 10 Mins (Direct)</td>
                      <td className="p-3.5">Emirates, Air India, IndiGo</td>
                      <td className="p-3.5 font-extrabold text-emerald-600">₹38,999</td>
                      <td className="p-3.5">
                        <Link href="/packages/dubai-tour-package-from-mumbai" className="text-brand-600 font-bold hover:underline">
                          View Itinerary &rarr;
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Delhi (DEL)</td>
                      <td className="p-3.5 whitespace-nowrap">3 Hrs 45 Mins (Direct)</td>
                      <td className="p-3.5">Emirates, flydubai, Air India</td>
                      <td className="p-3.5 font-extrabold text-emerald-600">₹37,999</td>
                      <td className="p-3.5">
                        <Link href="/packages/dubai-tour-package-from-delhi" className="text-brand-600 font-bold hover:underline">
                          View Itinerary &rarr;
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Bangalore (BLR)</td>
                      <td className="p-3.5 whitespace-nowrap">4 Hrs 15 Mins (Direct)</td>
                      <td className="p-3.5">Emirates, IndiGo</td>
                      <td className="p-3.5 font-extrabold text-emerald-600">₹39,500</td>
                      <td className="p-3.5">
                        <Link href="/holidays/dubai" className="text-brand-600 font-bold hover:underline">
                          View Itinerary &rarr;
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5-Day Recommended DSF Itinerary */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                Perfect 5 Days / 4 Nights Dubai Shopping Festival Itinerary
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center justify-between">
                    <span>Day 1: Arrival in Dubai &amp; Marina Dhow Dinner Cruise</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">Welcome Day</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Arrive at Dubai International Airport (DXB). Private AC transfer to your verified 4-star hotel in Bur Dubai or Downtown. Relax and freshen up. In the evening, board a luxury wooden Dhow Cruise along Dubai Marina featuring an international buffet dinner, live Tanoura dance, and illuminated skyscraper views.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center justify-between">
                    <span>Day 2: Half-Day Dubai City Tour &amp; Burj Khalifa 124th Floor</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">Iconic Sightseeing</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Explore Dubai Creek, traditional Abra ride, and Jumeirah Mosque. In the afternoon, visit the legendary Dubai Mall for massive DSF promotions. Ascend to the 124th and 125th floor observation decks of Burj Khalifa for 360-degree views, followed by the mesmerizing Dubai Fountain sound-and-light show.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center justify-between">
                    <span>Day 3: Desert Safari with Dune Bashing, Camel Rides &amp; BBQ Dinner</span>
                    <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">Thrill &amp; Culture</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Morning leisure for shopping at Mall of the Emirates. At 3:00 PM, hop into a 4x4 Land Cruiser for adrenaline-pumping dune bashing across the Lahbab red dunes. Enjoy sunset photography, sandboarding, camel rides, and a traditional Arabian desert camp with live belly dancing, fire shows, and a lavish BBQ buffet.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center justify-between">
                    <span>Day 4: Gold Souk, Spice Souk &amp; Global Village Extravaganza</span>
                    <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold">DSF Mega Deals</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Experience tax-free gold shopping at Deira Gold Souk with special DSF gold raffle entry passes. Later in the evening, visit Global Village featuring 90+ national pavilions, international street food, handicrafts, and cultural carnival rides.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center justify-between">
                    <span>Day 5: Souvenir Shopping &amp; Departure Flight</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Farewell Dubai</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Enjoy a relaxed hotel breakfast and complete last-minute duty-free shopping. Private transfer to Dubai International Airport for your return direct flight back to India with unforgettable holiday memories.
                  </p>
                </div>
              </div>
            </section>

            {/* Lead Inquiry Form Embedded in Content */}
            <div id="book-dsf">
              <DubaiDSFInquiryForm />
            </div>

            {/* Top FAQs Section for Voice & Featured Snippet Optimization */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span>Frequently Asked Questions About Dubai Shopping Festival</span>
              </h2>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-extrabold text-slate-900 mb-1">
                    What can you buy on discount during Dubai Shopping Festival?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    DSF offers discounts ranging from 25% to 90% on electronics (smartphones, laptops, cameras), 18K/22K gold jewellery, luxury perfumes, designer fashion brands, branded watches, and home appliances.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-extrabold text-slate-900 mb-1">
                    What is the currency and best way to pay in Dubai?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    The local currency is the UAE Dirham (AED). Indian credit cards or zero-markup multi-currency Forex cards (like Niyo or Scapia) are widely accepted across all malls, restaurants, and taxis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-extrabold text-slate-900 mb-1">
                    Can I customize my Dubai DSF tour with flights from my city?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Yes, 100%. Trip Customizer offers complete flexibility to choose your departure airport (Ahmedabad, Mumbai, Delhi, Bangalore, Kolkata, Pune), hotel star rating, travel dates, and optional additions like Ferrari World or Atlantis Aquaventure.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sticky Sidebar: Quick Actions, Trust Badges & Direct WhatsApp */}
          <aside className="lg:col-span-4 sticky top-6 space-y-6">
            {/* Quick Pricing Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Starting Price Per Person
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                  FLIGHT INCLUDED
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-950">₹36,999</span>
                <span className="text-xs text-slate-400 line-through">₹46,000</span>
                <span className="text-xs text-emerald-600 font-bold ml-auto">Save 20%</span>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Return Flights (AMD / BOM / DEL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>4-Star Deluxe Hotel with Breakfast</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Desert Safari with BBQ Buffet Dinner</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Burj Khalifa 124th Floor Entry Tickets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Marina Dhow Dinner Cruise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>30-Day UAE Tourist Visa &amp; Insurance</span>
                </li>
              </ul>

              <a
                href="#book-dsf"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all block text-center"
              >
                Inquire &amp; Book DSF Package &rarr;
              </a>

              <a
                href="https://wa.me/917408763401?text=Hi%20TripCustomizer%20Team,%20I%20am%20interested%20in%20Dubai%20Shopping%20Festival%20package%20with%20flights."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold text-xs py-3 rounded-xl transition-all block text-center"
              >
                Chat on WhatsApp (+91 7408763401)
              </a>
            </div>

            {/* Related Departure City Tour Packages */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md space-y-3">
              <h3 className="text-base font-bold text-amber-300">
                Popular City Departures for Dubai
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click your home city to view detailed itineraries with confirmed direct flights:
              </p>
              <div className="space-y-2 pt-1">
                <Link
                  href="/packages/dubai-tour-package-from-ahmedabad"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-xs font-semibold"
                >
                  <span>Dubai from Ahmedabad (AMD)</span>
                  <span className="text-amber-400 font-bold">₹36,999 &rarr;</span>
                </Link>
                <Link
                  href="/packages/dubai-tour-package-from-mumbai"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-xs font-semibold"
                >
                  <span>Dubai from Mumbai (BOM)</span>
                  <span className="text-amber-400 font-bold">₹38,999 &rarr;</span>
                </Link>
                <Link
                  href="/packages/dubai-tour-package-from-delhi"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-xs font-semibold"
                >
                  <span>Dubai from Delhi (DEL)</span>
                  <span className="text-amber-400 font-bold">₹37,999 &rarr;</span>
                </Link>
                <Link
                  href="/holidays/dubai"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-xs font-semibold"
                >
                  <span>All Dubai Holiday Packages</span>
                  <span className="text-amber-400 font-bold">View 15+ &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">100% Verified OTA Operator</div>
                  <div className="text-[11px] text-slate-500">Official GST Invoicing &amp; Guaranteed Stays</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">4.9 / 5 Star Rating</div>
                  <div className="text-[11px] text-slate-500">Over 12,480+ happy travelers served</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
