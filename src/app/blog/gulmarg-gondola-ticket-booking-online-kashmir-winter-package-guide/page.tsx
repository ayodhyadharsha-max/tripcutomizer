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
  Snowflake,
  Mountain,
  ArrowRight,
  HelpCircle,
  Camera,
  Compass,
  Zap,
  Ticket,
  AlertTriangle,
} from 'lucide-react';
import { KashmirGondolaInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Gulmarg Gondola Ticket Booking Online 2026: Phase 1 & 2 Rates, Timings & Kashmir Winter Guide ❄️🚠',
  description:
    'Complete official guide to Gulmarg Gondola online ticket booking 2026. Phase 1 (Kongdoori @ ₹800) and Phase 2 (Apharwat @ ₹1,050) booking hacks, ticket availability alert, snow season dates, Srinagar to Gulmarg taxi fares & Kashmir winter packages starting @ ₹12,999.',
  keywords: [
    'gulmarg gondola ticket booking online 2026',
    'gulmarg gondola phase 1 and phase 2 price',
    'gulmarg gondola ticket sold out what to do',
    'kashmir snow season dates 2026',
    'gulmarg cable car timings and rules',
    'kashmir winter tour package with houseboat',
    'srinagar to gulmarg cab fare',
    'apharwat peak snow ticket booking',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
  },
  openGraph: {
    title: 'Gulmarg Gondola Ticket Booking Online 2026: Rates, Hacks & Kashmir Tour Guide ❄️🚠',
    description:
      'Plan your dream Kashmir snow trip. Gulmarg Gondola Phase 1 & 2 tickets, slot booking hacks, winter season calendar, Srinagar houseboats & packages.',
    url: 'https://www.tripcustomizer.com/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
    images: ['https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gulmarg Gondola Online Booking & Kashmir Winter Guide 2026 | Trip Customizer',
    description:
      'Official rates, Phase 1 & 2 booking guidelines, snow timeline, and customized Kashmir winter holiday packages.',
    images: ['https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function GulmargGondola2026GuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gulmarg Gondola Ticket Booking Online 2026: Phase 1 & 2 Rates, Timings & Kashmir Winter Guide ❄️🚠',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Himalayan Expeditions Editorial',
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
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    description:
      'The comprehensive master guide to booking Gulmarg Gondola cable car tickets online in 2026. Phase 1 vs Phase 2 tariff rates, sold-out ticket solutions, snow seasons in Kashmir, and complete 5D/4N holiday itineraries.',
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
        name: 'Gulmarg Gondola & Kashmir Winter Guide',
        item: 'https://www.tripcustomizer.com/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a Gulmarg Gondola ticket cost for Phase 1 and Phase 2 in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The official ticket tariff for Gulmarg Gondola is ₹800 per person for Phase 1 (Gulmarg to Kongdoori) and ₹1,050 per person for Phase 2 (Kongdoori to Apharwat Peak). A combined round-trip ticket for both phases costs ₹1,850 per adult. Children under 3 years travel free without a ticket.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if Gulmarg Gondola tickets are sold out online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Offline tickets are no longer sold at the Gulmarg counter to prevent black marketing. If tickets are sold out on the official JKCCC portal for your exact date, check the portal daily at 12:00 AM midnight for cancellations, look for morning slots between 8:30 AM and 10:00 AM, or book a verified Kashmir holiday package through Trip Customizer which includes pre-allocated priority Gondola activity slots.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does snowfall start in Gulmarg and Kashmir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First snowfall usually blankets Apharwat Peak and higher reaches in late October to mid-November. Gulmarg bowl receives heavy snowfall starting December, with peak winter snow and skiing season running from late December to late February during the 40-day Chillai Kalan period.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Phase 2 open for tourists during winter snowfall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Phase 2 (Apharwat Peak at 13,057 ft) remains open during winter depending on clear weather and wind velocity. In the event of high blizzards or severe weather, Phase 2 may be temporarily delayed or suspended for safety reasons, and Phase 1 will operate normally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need special snow chains for cabs going from Srinagar to Gulmarg?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard cabs operate smoothly from Srinagar to Tangmarg (38 km). From Tangmarg uphill to Gulmarg (12 km), local administration mandates vehicles with tyre snow-chains or 4x4 drive during snowfall. Local union 4x4 vehicles charge between ₹1,500 and ₹2,500 for the round trip.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Gulmarg Gondola & Kashmir Winter Guide 2026',
    url: 'https://www.tripcustomizer.com/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const gondolaPhases = [
    {
      phase: 'Phase 1: Gulmarg to Kongdoori Valley',
      altitude: '2,600 m (8,530 ft)',
      price: '₹800 / person (Round Trip)',
      rideTime: '9 to 10 Minutes',
      highlights: 'Lush pine forest aerial views, snow sledging, ski nursery slopes, snow cafe restaurants & snowmobile rentals.',
      badge: 'Family & Beginner Friendly',
    },
    {
      phase: 'Phase 2: Kongdoori to Apharwat Peak',
      altitude: '3,980 m (13,057 ft)',
      price: '₹1,050 / person (Round Trip)',
      rideTime: '12 Minutes',
      highlights: 'High-altitude alpine terrain, panoramic vistas of Nanga Parbat and Pir Panjal peaks, heavy year-round powder snow.',
      badge: 'Adventure & Snow Lovers',
    },
    {
      phase: 'Chairlift: Kongdoori to Mary Shoulder',
      altitude: '3,050 m (10,000 ft)',
      price: '₹300 / person (Round Trip)',
      rideTime: '8 Minutes',
      highlights: 'Open-air chairlift ideal for intermediate and professional skiers with direct access to pristine powdery drops.',
      badge: 'Skiers & Snowboarders',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container className="relative z-10 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-sky-400 font-medium truncate">Gulmarg Gondola &amp; Kashmir Winter Guide 2026</span>
          </nav>

          {/* Trending Seasonal Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs md:text-sm font-semibold mb-4">
            <Snowflake className="w-4 h-4 text-sky-400 animate-spin" />
            <span>KASHMIR WINTER &amp; SNOW SEASON BOOKING WINDOW LIVE (2026–2027)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
            Gulmarg Gondola Ticket Booking Online 2026: Phase 1 &amp; 2 Rates, Timings &amp; Kashmir Winter Guide ❄️🚠
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-8">
            Ride Asia’s highest and longest cable car to Apharwat Peak at 13,057 ft. Here is the ultimate official guide to booking Phase 1 &amp; Phase 2 tickets, slot availability hacks, snow seasons, Srinagar houseboats &amp; 5-day Kashmir itineraries.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <Ticket className="w-4 h-4 text-sky-400" />
              <span>Gondola Round Trip: ₹1,850</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Winter Snow Peak: Dec 2026 – Feb 2027</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>9 Min Read</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>JK Tourism Guidelines Verified</span>
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
                src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
                alt="Gulmarg Gondola cable car gliding over snow covered pine trees in Kashmir winter"
                width={1200}
                height={680}
                className="w-full h-[320px] sm:h-[420px] object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs sm:text-sm">
                The iconic yellow cabins of the Gulmarg Gondola ascending towards snow-carpeted Apharwat Peak at 13,057 ft.
              </div>
            </div>

            {/* Quick Summary Highlights Box */}
            <Card className="p-6 bg-sky-50/70 border border-sky-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5 text-sky-950 font-bold text-lg mb-3">
                <Zap className="w-5 h-5 text-sky-600" />
                <span>Gulmarg Gondola 2026 Official Facts at a Glance</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Phase 1 Ticket (Kongdoori):</strong> ₹800 per person round trip</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Phase 2 Ticket (Apharwat):</strong> ₹1,050 per person round trip</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Booking Portal:</strong> 100% Online on JKCCC Portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Operational Hours:</strong> 9:00 AM to 5:00 PM (Daily, Weather Permitting)</span>
                </li>
              </ul>
            </Card>

            {/* Section 1: Phase Breakdown & Tariffs */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Mountain className="w-7 h-7 text-sky-600" />
                <span>Gulmarg Gondola Phases, Altitudes &amp; Official Tariffs (2026)</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Operated by the Jammu &amp; Kashmir Cable Car Corporation (JKCCC) in joint technical venture with French company POMAGALSKI, the <strong>Gulmarg Gondola</strong> is the world’s second highest operating cable car. It ferries up to 600 passengers per hour across two magnificent alpine tiers:
              </p>

              <div className="space-y-4">
                {gondolaPhases.map((phase, index) => (
                  <Card key={index} className="p-5 border border-slate-200 hover:border-sky-400 transition-all rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                          {phase.badge}
                        </span>
                        <h3 className="font-bold text-slate-900 text-lg">{phase.phase}</h3>
                      </div>
                      <span className="font-bold text-base sm:text-lg text-emerald-700">{phase.price}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                      <span><strong>Altitude:</strong> {phase.altitude}</span>
                      <span>•</span>
                      <span><strong>Ride Duration:</strong> {phase.rideTime}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{phase.highlights}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 2: Online Booking Process & Sold-Out Hacks */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Ticket className="w-7 h-7 text-indigo-600" />
                <span>How to Book Online &amp; What to Do When Tickets are Sold Out</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                To eliminate unauthorized touts and black marketing, the J&amp;K Government abolished offline physical counters at the Gulmarg boarding base. <strong>100% of tickets must now be booked online in advance.</strong>
              </p>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-sm text-slate-700">
                <h4 className="font-bold text-slate-900 text-base">Step-by-Step Online Booking Steps:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Visit the official government booking website: <code>jammukashmircablecar.com</code></li>
                  <li>Click on &quot;Book Gondola Ticket&quot; and enter your Indian mobile number to generate an OTP.</li>
                  <li>Select your intended travel date, boarding time slot (morning slots recommended between 9:00 AM – 10:30 AM), and number of passengers.</li>
                  <li>Enter the full government ID proof (Aadhaar Card, Passport or Voter ID) for each traveler.</li>
                  <li>Pay the amount via UPI, NetBanking or Credit/Debit card. Download and save the digital PDF ticket on your mobile.</li>
                </ol>
              </div>

              {/* Warning Alert: The Sold Out Solution */}
              <div className="p-5 bg-amber-50 rounded-xl border border-amber-300 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Crucial Hacks When Tickets Show &quot;Sold Out&quot;:</span>
                </div>
                <ul className="text-xs sm:text-sm text-amber-900 space-y-1.5 pl-7 list-disc">
                  <li><strong>The Midnight Cancellation Refresh:</strong> JKCCC releases cancelled and unconfirmed tickets on the portal at 12:00 AM midnight. Check between 12:00 AM and 12:30 AM for sudden availability!</li>
                  <li><strong>Book 25–30 Days Ahead:</strong> Phase 2 slots open 30 days in advance and usually sell out within 48 hours for peak weekend dates.</li>
                  <li><strong>Verified Package Partner Allocation:</strong> Booking a comprehensive Kashmir package through Trip Customizer gives you access to pre-allocated priority activity slots without the hassle of refreshing portals.</li>
                </ul>
              </div>
            </section>

            {/* Section 3: Kashmir Winter & Snow Timeline */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Calendar className="w-7 h-7 text-sky-600" />
                <span>Kashmir Snow &amp; Autumn Seasons Timeline (2026–2027)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-amber-700">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Autumn Chinar Season (Oct – Nov)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Golden rust Chinar leaves across Srinagar Mughal Gardens, crisp sunny blue skies, pleasant daytime temperatures (12°C to 18°C), and early snow on Apharwat Peak.
                  </p>
                </Card>

                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-sky-700">
                    <Snowflake className="w-4 h-4 text-sky-600" />
                    First Snow &amp; Festive Rush (Dec)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fresh snow showers begin in Gulmarg and Pahalgam. Christmas and New Year see fairy-tale white landscapes, snow sledging, and roaring wooden bukharis (heaters) in hotel rooms.
                  </p>
                </Card>

                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-blue-700">
                    <Mountain className="w-4 h-4 text-blue-600" />
                    Chillai Kalan Deep Winter (Dec 21 – Jan 31)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The legendary 40-day deep freeze of Kashmir. Heavy powdery snowfall reaches 4 to 8 feet in Gulmarg. Temperatures drop to -8°C. Best time for international heli-skiing and snowboarding.
                  </p>
                </Card>

                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-emerald-700">
                    <Compass className="w-4 h-4 text-emerald-600" />
                    Sunny Spring Snow (Feb – March)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thick snow carpet with bright, warm sunshine. Moderate chill during the day, perfect for snow photography, cable car rides, and romantic couple walks without extreme sub-zero winds.
                  </p>
                </Card>
              </div>
            </section>

            {/* Section 4: 5D/4N Master Kashmir Itinerary */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Camera className="w-7 h-7 text-indigo-600" />
                <span>The Ultimate 5 Days / 4 Nights Kashmir Winter Itinerary</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="border-l-4 border-sky-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 1: Arrival at Srinagar Airport ➔ Luxury Houseboat Check-In ➔ Dal Lake Sunset Shikara</h4>
                  <p className="mt-1">
                    Arrive at Sheikh ul-Alam International Airport, Srinagar. Transfer to a handcrafted cedarwood luxury houseboat on Dal Lake or Nigeen Lake. Savor traditional steaming saffron Kahwa with crushed almonds. Evening 1-hour sunset Shikara ride across the floating vegetable market and Char Chinar. Candlelight Wazwan dinner on the water.
                  </p>
                </div>

                <div className="border-l-4 border-sky-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 2: Srinagar to Gulmarg ➔ Gondola Phase 1 &amp; Phase 2 ➔ Snow Adventure</h4>
                  <p className="mt-1">
                    Drive 52 km through snow-draped pine woods to Gulmarg bowl. Board the Gondola cable car to Kongdoori Valley (Phase 1) and Apharwat Peak (Phase 2). Enjoy snow sledging, ATV snow biking, and snowball fights. Warm up with Maggi and hot Kashmiri tea at high-altitude cafes. Overnight stay in a luxury heated resort in Gulmarg.
                  </p>
                </div>

                <div className="border-l-4 border-sky-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 3: Gulmarg to Pahalgam ➔ Saffron Fields of Pampore ➔ Lidder River</h4>
                  <p className="mt-1">
                    Drive towards the valley of shepherds, Pahalgam (140 km). En route, stop at the legendary purple saffron fields of Pampore and dry fruit plantations. Visit the ancient 9th-century Awantipora temple ruins. Check into your river-facing luxury hotel along the roaring, emerald Lidder River.
                  </p>
                </div>

                <div className="border-l-4 border-sky-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 4: Pahalgam Sightseeing ➔ Betaab Valley, Aru Valley &amp; Mini Switzerland (Baisaran)</h4>
                  <p className="mt-1">
                    Hire a local tourist cab to explore Betaab Valley (named after the hit Bollywood movie) with crystal clear mountain streams, and the serene village of Aru. Enjoy a scenic pony ride up to Baisaran meadow, known as &quot;Mini Switzerland of India&quot;. Return to Srinagar by evening for hotel check-in.
                  </p>
                </div>

                <div className="border-l-4 border-sky-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 5: Mughal Gardens (Nishat &amp; Shalimar Bagh) ➔ Lal Chowk Shopping ➔ Airport Drop</h4>
                  <p className="mt-1">
                    Morning visit to the UNESCO-listed Mughal Gardens: Nishat Bagh (Garden of Bliss) and Shalimar Bagh (Abode of Love) overlooking Dal Lake. Pick up authentic Kashmiri Pashmina shawls, walnut wood carvings, and pure saffron at Lal Chowk before your transfer to Srinagar Airport.
                  </p>
                </div>
              </div>
            </section>

            {/* Deep Link Package Banner */}
            <Card className="p-6 bg-gradient-to-r from-sky-950 via-slate-900 to-blue-950 text-white rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-wider">All-Inclusive Winter Package</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">Kashmir Winter Magic with Gulmarg &amp; Pahalgam (5D/4N)</h3>
                  <p className="text-sm text-slate-200 max-w-lg">
                    Includes 1 Night Dal Lake Luxury Houseboat + 3 Nights 4-Star Heated Hotels, private AC/Heated sedan, daily breakfast &amp; dinner, 1-hour complimentary Shikara ride &amp; Gondola slot assistance.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-sky-400">₹12,999<span className="text-xs text-slate-300 font-normal"> / person</span></span>
                  <Link href="/holidays/kashmir" className="mt-3">
                    <Button className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shadow-md">
                      View Kashmir Packages <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Section 5: FAQs */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-sky-600" />
                <span>Frequently Asked Questions (Gulmarg Gondola &amp; Kashmir 2026)</span>
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

          {/* Sticky Inquiry Form Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <KashmirGondolaInquiryForm defaultPackageCategory="Kashmir Winter Special: Gulmarg + Pahalgam + Srinagar Houseboat (5D/4N)" />

              {/* Direct Call Concierge Card */}
              <Card className="mt-6 p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-lg text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base mb-1">Need Kashmir Winter Slots Fast?</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Speak directly with our Srinagar &amp; Gulmarg local destination manager for custom dates &amp; houseboat stays.
                </p>
                <a
                  href="tel:+917408763401"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-sm transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 7408763401</span>
                </a>
              </Card>

              {/* Related Seasonal Collections */}
              <Card className="mt-6 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900 mb-3 uppercase tracking-wider text-slate-500">
                  Trending Winter &amp; New Year Getaways
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
