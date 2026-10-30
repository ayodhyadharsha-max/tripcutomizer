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
  Music,
  Palmtree,
  ArrowRight,
  HelpCircle,
  Camera,
  Compass,
  Zap,
  Ticket,
  Flame,
} from 'lucide-react';
import { GoaSunburnInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Sunburn Goa 2026: Official Dates, Tickets, Venue, Christmas & New Year Beach Guide 🏖️🎉',
  description:
    'Complete guide to Sunburn Festival Goa 2026 and December beach holiday. Official dates (Dec 28–31), ticket prices (GA @ ₹3,500, VIP @ ₹7,500), venue details, North vs South Goa stays, Christmas midnight mass, New Year shacks & packages starting @ ₹9,999.',
  keywords: [
    'sunburn goa 2026 dates tickets venue',
    'goa new year party packages 2026',
    'goa christmas holiday packages',
    'sunburn festival passes price early bird',
    'north goa vs south goa december',
    'goa beach resorts with private pool december',
    'goa package from mumbai delhi bangalore',
    'sunburn goa line up 2026',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
  },
  openGraph: {
    title: 'Sunburn Goa 2026: Dates, Tickets, Venue & New Year Beach Party Guide 🏖️🎉',
    description:
      'Plan your ultimate Goa December vacation! Sunburn 2026 festival tickets, early bird passes, Christmas church mass, New Year’s Eve beach parties & verified holiday packages.',
    url: 'https://www.tripcustomizer.com/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
    images: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunburn Goa 2026 & New Year Party Master Guide | Trip Customizer',
    description:
      'Official festival dates, ticket pricing, beach resort booking, and customized Goa holiday packages.',
    images: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function SunburnGoa2026GuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sunburn Goa 2026: Official Dates, Tickets, Venue, Christmas & New Year Beach Guide 🏖️🎉',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Beach & Nightlife Editorial',
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
      'The comprehensive master guide to Sunburn Festival Goa 2026, Christmas and New Year Eve vacations. Early bird ticket pricing, venue details, North vs South Goa hotel comparisons, and 4D/3N beach holiday itineraries.',
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
        name: 'Sunburn Goa 2026 & Festive Holiday Guide',
        item: 'https://www.tripcustomizer.com/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the official dates for Sunburn Goa 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sunburn Goa 2026 takes place across four explosive days from December 28 to December 31, 2026, culminating in a colossal New Year Eve countdown celebration on December 31 midnight.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do Sunburn Goa 2026 tickets and passes cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Early Bird General Access (GA) passes start from ₹3,500 for single-day entry and ₹7,500 to ₹9,500 for a 4-day festival festival pass. VIP passes start at ₹7,500 per day or ₹14,000 for the full festival, granting elevated viewing deck access, dedicated bars, and fast-track entry.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the Sunburn Goa 2026 venue located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The festival is traditionally hosted on the scenic coastal cliffs of Vagator / Anjuna in North Goa, just 45 minutes from Manohar International Airport (MOPA) and 1 hour from Dabolim Airport.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I stay in North Goa or South Goa in December?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose North Goa (Baga, Calangute, Anjuna, Vagator) if you want high-energy beach parties, nightclubs, Sunburn proximity, and water sports. Choose South Goa (Colva, Benaulim, Palolem) if you seek serene uncrowded white sand beaches, 5-star luxury heritage resorts, and peaceful romantic sunsets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should I book Goa December hotels and flights in October?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'December is peak super-season in Goa. By November, flight airfares from Delhi, Mumbai, and Bangalore surge by 200% to 300%, and top 4-star beachfront resorts become 100% sold out or implement mandatory expensive New Year Eve gala dinner charges. Booking in October locks early bird discounts and guaranteed rooms.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sunburn Goa 2026 Master Travel Guide',
    url: 'https://www.tripcustomizer.com/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const ticketTiers = [
    {
      tier: 'General Access (GA) - Single Day',
      price: '₹3,500 – ₹4,500',
      access: 'Access to all main stages, festival village, food stalls & general dance arenas.',
      badge: 'Budget Music Lovers',
    },
    {
      tier: 'General Access (GA) - 4-Day Season Pass',
      price: '₹7,999 – ₹9,500',
      access: 'Full 4-day unlimited entry (Dec 28-31) including New Year Eve midnight countdown.',
      badge: 'Best Value',
    },
    {
      tier: 'VIP Festival Pass (4-Day All Access)',
      price: '₹14,000 – ₹16,500',
      access: 'Elevated VIP viewing decks, express entry lanes, exclusive bars, premium air-conditioned washrooms & lounge seating.',
      badge: 'Most Popular VIP',
    },
    {
      tier: 'VVIP Table & Cabana (Groups of 6-10)',
      price: '₹1,50,000+',
      access: 'Private raised cabana, dedicated butler, premium champagne service, security escort & backstage artist access.',
      badge: 'Celebrity & Ultra Luxury',
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
      <header className="relative bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container className="relative z-10 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-emerald-400 font-medium truncate">Sunburn Goa 2026 &amp; New Year Guide</span>
          </nav>

          {/* Trending Seasonal Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs md:text-sm font-semibold mb-4">
            <Flame className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>DECEMBER 2026 SUPER-PEAK RUSH • EARLY BIRD STAYS &amp; TICKETS LIVE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
            Sunburn Goa 2026: Official Dates, Tickets, Venue, Christmas &amp; New Year Beach Guide 🏖️🎉
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-8">
            Get ready for India’s grandest year-end beach carnival. Everything you need to know about Sunburn 2026 ticket tiers, North vs South Goa stays, Christmas midnight mass, New Year fireworks &amp; curated holiday packages starting @ ₹9,999.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Festival Dates: Dec 28 – Dec 31, 2026</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Vagator / Anjuna, North Goa</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>8 Min Read</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Goa Tourism Certified Partner</span>
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
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"
                alt="Goa beach illuminated with palm trees, beach shacks and festive celebrations during sunset"
                width={1200}
                height={680}
                className="w-full h-[320px] sm:h-[420px] object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs sm:text-sm">
                Sun-kissed beaches, illuminated shacks, and electric nightlife during Goa’s famous December festive month.
              </div>
            </div>

            {/* Quick Summary Highlights Box */}
            <Card className="p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5 text-emerald-950 font-bold text-lg mb-3">
                <Zap className="w-5 h-5 text-emerald-600" />
                <span>Goa December 2026 Key Highlights at a Glance</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Sunburn Festival:</strong> 28th to 31st December 2026 (4 Days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Christmas Mass:</strong> 24th Dec Midnight (Basilica of Bom Jesus)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Package Starting Rate:</strong> ₹9,999/person with 4-Star Resort &amp; Cab</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Direct Airports:</strong> MOPA Airport (North) &amp; Dabolim Airport (South)</span>
                </li>
              </ul>
            </Card>

            {/* Section 1: The Sunburn 2026 Sensation */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Music className="w-7 h-7 text-emerald-600" />
                <span>Sunburn Festival Goa 2026: Asia’s Grandest EDM Carnival</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Ranked consistently among the world’s top 3 music festivals alongside Tomorrowland and Ultra, <strong>Sunburn Goa</strong> attracts over 300,000 music enthusiasts from more than 50 countries every December. With colossal multi-story stages, laser pyrotechnics, and top international DJs (past headliners include Martin Garrix, Dimitri Vegas &amp; Like Mike, David Guetta, and Hardwell), it is the ultimate way to ring in the New Year.
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                The 2026 edition promises 5 distinct stages spanning EDM, Techno, Psy-trance, and Deep House, plus food villages, flea markets, and bungee jumping on the Vagator cliffs.
              </p>
            </section>

            {/* Section 2: Ticket Tiers & Pricing */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Ticket className="w-7 h-7 text-teal-600" />
                <span>Official Ticket Passes &amp; Early Bird Rates (2026)</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Tickets are released in phases (Early Bird, Phase 1, Phase 2, and On-Ground). Buying during October locks in the lowest possible early bird tariffs before prices double in December:
              </p>

              <div className="space-y-4">
                {ticketTiers.map((ticket, index) => (
                  <Card key={index} className="p-5 border border-slate-200 hover:border-emerald-400 transition-all rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {ticket.badge}
                        </span>
                        <h3 className="font-bold text-slate-900 text-lg">{ticket.tier}</h3>
                      </div>
                      <span className="font-bold text-base sm:text-lg text-emerald-700">{ticket.price}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{ticket.access}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 3: Christmas Celebrations & New Year Eve */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Palmtree className="w-7 h-7 text-emerald-600" />
                <span>Christmas Traditions &amp; New Year’s Eve Beach Fireworks</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-rose-700">
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    Portuguese Christmas Magic (Dec 24–25)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Attend the midnight mass at the 400-year-old Basilica of Bom Jesus and Se Cathedral in Old Goa. Savor traditional Bebinca and Dodol, while streets in Panaji and Fontainhas glow with fairy lights and giant paper stars.
                  </p>
                </Card>

                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-teal-700">
                    <Flame className="w-4 h-4 text-teal-600" />
                    New Year Eve Midnight Spectacle (Dec 31)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Watch the Arabian Sea horizon explode with synchronised fireworks along Baga, Calangute, and Anjuna beaches. Join beach bonfires, live percussionists, and open-air barbecues under starry skies.
                  </p>
                </Card>
              </div>
            </section>

            {/* Section 4: North vs South Goa */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Compass className="w-7 h-7 text-indigo-600" />
                <span>North Goa vs South Goa in December: Which One Should You Pick?</span>
              </h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Feature</th>
                      <th className="py-3 px-4">North Goa (Baga, Anjuna, Vagator)</th>
                      <th className="py-3 px-4">South Goa (Colva, Cavelossim, Palolem)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-semibold text-slate-900">Vibe &amp; Crowd</td>
                      <td className="py-3 px-4 text-emerald-700 font-medium">High energy, buzzing parties, music festivals</td>
                      <td className="py-3 px-4 text-slate-600">Peaceful, relaxed, pristine nature, quiet beaches</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Best Suited For</td>
                      <td className="py-3 px-4 text-slate-700">Youth, friends groups, party goers, Sunburn attendees</td>
                      <td className="py-3 px-4 text-slate-700">Honeymoon couples, luxury seekers, family reunions</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 font-semibold text-slate-900">Stays &amp; Resorts</td>
                      <td className="py-3 px-4 text-slate-700">Boutique hotels, beach clubs, pool villas, hostels</td>
                      <td className="py-3 px-4 text-slate-700">5-star sprawling beachfront luxury resorts (Taj, Leela, Alila)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Perfect 4D/3N Goa Itinerary */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Camera className="w-7 h-7 text-teal-600" />
                <span>The Perfect 4 Days / 3 Nights Festive Goa Itinerary</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 1: Arrival in Goa ➔ 4-Star Beach Resort Check-In ➔ Sunset at Anjuna / Curlies</h4>
                  <p className="mt-1">
                    Arrive at MOPA or Dabolim Airport. Private AC cab transfer to your 4-star resort in North Goa. Relax by the swimming pool. In the evening, head to the iconic rocky cliffs of Anjuna Beach for sunset cocktails, live acoustic music, and fresh seafood shacks.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 2: Water Sports at Calangute ➔ Chapora Fort (Dil Chahta Hai) ➔ Sunburn / Nightclub</h4>
                  <p className="mt-1">
                    Morning parasailing, jet-skiing, and banana boat rides at Calangute Beach. Afternoon hike up to Chapora Fort for sweeping views of the Vagator coastline. In the evening, enter the Sunburn festival grounds or dance the night away at Tito&apos;s Lane and Club Cubana.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 3: Heritage Fontainhas Latin Quarter ➔ Mandovi River Sunset Luxury Cruise</h4>
                  <p className="mt-1">
                    Explore Panaji&apos;s colorful Latin Quarter of Fontainhas with Portuguese architecture and cozy bakeries. In the evening, board a luxury catamaran sunset cruise on the Mandovi River with Goan folk dances, DJ music, and dinner.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-bold text-slate-900 text-base">Day 4: Beachside Breakfast ➔ Souvenir Shopping at Flea Market ➔ Airport Transfer</h4>
                  <p className="mt-1">
                    Leisurely breakfast overlooking the Arabian Sea. Shop for Goan cashews, feni, spice plantation products, and boho clothing at Arpora or Calangute market before your private cab transfer to the airport.
                  </p>
                </div>
              </div>
            </section>

            {/* Deep Link Package Banner */}
            <Card className="p-6 bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Curated Beach Holiday</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">Goa Festive Blast with 4-Star Resort &amp; Cab (4D/3N)</h3>
                  <p className="text-sm text-slate-200 max-w-lg">
                    Includes 3 Nights 4-Star Beach Resort with swimming pool + private AC cab for airport transfers &amp; sightseeing, daily breakfast, Mandovi River cruise &amp; Sunburn ticket support.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-emerald-400">₹9,999<span className="text-xs text-slate-300 font-normal"> / person</span></span>
                  <Link href="/holidays/goa" className="mt-3">
                    <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shadow-md">
                      View Goa Packages <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Section 6: FAQs */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-600" />
                <span>Frequently Asked Questions (Sunburn &amp; Goa Festive 2026)</span>
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
              <GoaSunburnInquiryForm defaultPackageCategory="Sunburn VIP + 4-Star North Goa Beach Resort (4D/3N)" />

              {/* Direct Call Concierge Card */}
              <Card className="mt-6 p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-lg text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base mb-1">Planning a Goa Group or Couple Trip?</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Speak directly with our Goa beach holiday desk for early bird resort lock-in &amp; Sunburn passes.
                </p>
                <a
                  href="tel:+917408763401"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-colors"
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
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span className="font-bold text-amber-700">Dubai Shopping Festival (DSF) Flights</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/top-10-new-year-2027-travel-packages-india-abroad-guide"
                      className="text-slate-700 hover:text-rose-600 flex items-center justify-between font-medium group"
                    >
                      <span className="font-bold text-rose-700">Top 10 New Year 2027 Trips</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide"
                      className="text-slate-700 hover:text-emerald-600 flex items-center justify-between font-medium group"
                    >
                      <span>Gulmarg Gondola &amp; Kashmir Snow</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide"
                      className="text-slate-700 hover:text-emerald-600 flex items-center justify-between font-medium group"
                    >
                      <span>Rann Utsav Kutch 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
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
