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
  Flame,
  Award,
  Ship,
  Sun,
  Compass,
} from 'lucide-react';
import { DevDeepawaliInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Dev Deepawali Varanasi 2026: Official Date, Ghats Schedule, Boat Price & Kashi Guide 🪔✨',
  description:
    'Complete master guide to Dev Deepawali Varanasi 2026 on Kartik Purnima (Nov 28, 2026). Over 15 lakh diyas across 84 ghats, Dashashwamedh Maha Aarti timings, Ganga Bajra & motor boat booking prices, Chet Singh Ghat laser show, hotel booking tips & Kashi tour packages @ ₹8,999.',
  keywords: [
    'dev deepawali 2026 dates',
    'varanasi dev deepawali boat booking price',
    'dev deepawali ganga aarti timings 2026',
    'kashi dev deepawali tour package',
    'kartik purnima varanasi 2026',
    'dashashwamedh ghat aarti dev deepawali',
    'assighat dev deepawali celebration',
    'chet singh ghat laser show timings',
    'dev deepawali bajra cruise cost',
    'varanasi holiday package from delhi mumbai',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide',
  },
  openGraph: {
    title: 'Dev Deepawali Varanasi 2026: Official Date, Boat Booking & Guide 🪔✨',
    description:
      'Experience the City of Light during Dev Deepawali 2026. Official Kartik Purnima date, Ganga boat prices, Maha Aarti schedule & verified Kashi packages.',
    url: 'https://www.tripcustomizer.com/blog/varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide',
    images: ['https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Deepawali Varanasi 2026 Guide | Trip Customizer',
    description:
      'Official dates, boat ticket rates, Chet Singh laser show timings, and customized Kashi Vishwanath tour packages.',
    images: ['https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function DevDeepawali2026GuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dev Deepawali Varanasi 2026: Official Date, Ghats Schedule, Boat Price & Kashi Guide 🪔✨',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Spiritual Expeditions Editorial',
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
    datePublished: '2026-11-04',
    dateModified: '2026-11-04',
    description:
      'The comprehensive master guide to Dev Deepawali in Varanasi in 2026. Official Kartik Purnima date, boat booking rates, ghat-wise lighting schedule, and complete Kashi-Ayodhya-Prayagraj tour packages.',
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
        name: 'Dev Deepawali Varanasi 2026 Guide',
        item: 'https://www.tripcustomizer.com/blog/varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the exact official date of Dev Deepawali in Varanasi in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dev Deepawali is celebrated on Kartik Purnima (the full moon day of Kartik month, exactly 15 days after Diwali). In 2026, Dev Deepawali will be celebrated on Saturday, November 28, 2026. Millions of earthen diyas are lit across all 84 ghats from Ravidas Ghat to Rajghat as dusk descends.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a Ganga boat booking cost on Dev Deepawali evening?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Due to extreme demand, boat rates surge significantly. Shared motor boat seats range from ₹2,500 to ₹4,000 per person. A private small motor boat (4-8 passengers) costs ₹18,000 to ₹35,000, while a luxury double-decker Bajra or cruise with catering costs ₹60,000 to ₹1,50,000+ for groups. Advance booking 2 to 4 weeks early is mandatory.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is the best ghat to watch Dev Deepawali celebrations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dashashwamedh Ghat is the epicenter for the grand Maha Aarti with 21 priests and Conch shell recitals. Chet Singh Ghat is famous for the 3D projection laser light and sound show depicting Kashi history, while Assi Ghat and Namo Ghat host grand cultural performances.',
        },
      },
      {
        '@type': 'Question',
        name: 'What time do the diyas light up and when does the laser show start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Diyas are lit simultaneously across the 84 ghats starting at 5:15 PM as twilight sets in. The Grand Maha Aarti at Dashashwamedh Ghat begins at 6:00 PM, followed by the Chet Singh Ghat 3D Laser Show from 7:00 PM to 8:30 PM with green fireworks display across the sandbanks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Dev Deepawali be combined with Ayodhya Ram Mandir and Prayagraj?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer offers a popular 4-Day / 3-Night and 5-Day / 4-Night circuit: Day 1 Arrival in Varanasi & Kashi Vishwanath darshan, Day 2 Dev Deepawali Ganga Boat & Maha Aarti, Day 3 Ayodhya Ram Mandir VIP Darshan & Sarayu Aarti, and Day 4 Prayagraj Triveni Sangam holy bath and return drop.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dev Deepawali Varanasi 2026 Master Guide',
    url: 'https://www.tripcustomizer.com/blog/varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const boatTiers = [
    {
      category: 'Shared Motor Boat (Per Seat)',
      capacity: '20 to 30 Passengers',
      price: '₹2,500 – ₹3,800 / seat',
      timing: '4:30 PM to 8:30 PM (4 Hours)',
      route: 'Assi Ghat ➔ Dashashwamedh ➔ Manikarnika ➔ Chet Singh Laser Show',
      badge: 'Budget Traveler',
    },
    {
      category: 'Private Small Motor Boat',
      capacity: 'Up to 6-8 Persons (Exclusive)',
      price: '₹22,000 – ₹32,000 / boat',
      timing: '4:00 PM to 9:00 PM (5 Hours)',
      route: 'Covers all 84 illuminated ghats with front-row mooring for Dashashwamedh Maha Aarti',
      badge: 'Family & Couples',
    },
    {
      category: 'Heritage Luxury Bajra / Double-Decker Cruise',
      capacity: '25 to 50 Persons',
      price: '₹85,000 – ₹1,60,000 / group',
      timing: '4:00 PM to 9:30 PM (Full Evening)',
      route: 'VIP upper viewing deck, Benarasi live Shehnai music, pure vegetarian snacks & tea service',
      badge: 'VIP & Group Yatra',
    },
    {
      category: 'Hand-Rowed Traditional Wooden Shikara Boat',
      capacity: '2 to 4 Persons',
      price: '₹14,000 – ₹18,000 / boat',
      timing: '4:30 PM to 8:00 PM',
      route: 'Peaceful intimate cruise gliding right alongside floating diyas on the sacred Ganga',
      badge: 'Romantic & Authentic',
    },
  ];

  const ghatHighlights = [
    {
      ghat: 'Dashashwamedh Ghat',
      event: 'Maha Ganga Aarti & 21 Vedic Priests',
      time: '6:00 PM – 7:30 PM',
      highlight: 'The grandest visual spectacle on earth with multi-tiered brass oil lamps, conch shells, flower petals, and patriotic military band salutes.',
    },
    {
      ghat: 'Chet Singh Ghat',
      event: '3D Projection Laser Light & Sound Show',
      time: '7:00 PM & 8:15 PM (Two Shows)',
      highlight: 'Mesmerizing visual mapping projected onto the historic 18th-century Chet Singh Fort walls narrating Lord Shiva’s cosmic dance and Kashi history.',
    },
    {
      ghat: 'Assi Ghat',
      event: 'Subah-e-Banaras Cultural Stage & 1 Lakh Diyas',
      time: '5:15 PM – 9:00 PM',
      highlight: 'Classical Dhrupad and Sitar concerts, morning sunrise Maha Aarti, and unbroken chain of golden clay lamps lining the southern bend of the river.',
    },
    {
      ghat: 'Namo Ghat & Rajghat',
      event: 'Grand Sculptures & Eco-Friendly Fireworks',
      time: '5:30 PM – 8:30 PM',
      highlight: 'Spectacular giant Namaste sculptures illuminated by modern dynamic lighting and wide sandbanks hosting sky-illuminating fireworks display.',
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
      <header className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-orange-950 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container className="relative z-10 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400 font-medium truncate">Dev Deepawali Varanasi 2026 Guide</span>
          </nav>

          {/* Trending Seasonal Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold mb-4">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>KARTIK PURNIMA 2026 • SATURDAY, NOVEMBER 28 • PRIORITY BOAT BOOKINGS OPEN</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
            Dev Deepawali Varanasi 2026: Official Date, Ghats Schedule, Boat Price &amp; Kashi Guide 🪔✨
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-8">
            Behold the celestial Festival of the Gods in Varanasi. Over 15 lakh clay oil lamps illuminating all 84 ghats along the sacred Ganges, the legendary Dashashwamedh Maha Aarti, Chet Singh Ghat 3D laser shows, and private boat booking secrets.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Dev Deepawali Date: Nov 28, 2026 (Kartik Purnima)</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>8 Min Read</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Kashi Pilgrimage Partner</span>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content Container */}
      <Container className="py-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Column */}
          <article className="lg:col-span-8 space-y-10">
            {/* Quick Answer AEO Box */}
            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-amber-950 uppercase tracking-wide flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-amber-600" />
                <span>Dev Deepawali 2026 Quick Facts &amp; Direct Answer</span>
              </h2>
              <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                <p className="speakable-content aeo-answer font-medium">
                  <strong>Dev Deepawali in Varanasi takes place on Saturday, November 28, 2026 (Kartik Purnima).</strong> Celebrated 15 days after Diwali to commemorate Lord Shiva’s victory over the demon Tripurasura, all 84 riverfront ghats are lit with over 15 lakh earthen diyas starting at 5:15 PM, followed by the world-famous 21-priest Maha Aarti at Dashashwamedh Ghat and a 3D laser projection on Chet Singh Fort.
                </p>
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-amber-200">
                    <span className="text-slate-500 block">Diyas Lit</span>
                    <strong className="text-slate-900 font-bold">15+ Lakh Diyas</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-amber-200">
                    <span className="text-slate-500 block">Ghats Covered</span>
                    <strong className="text-slate-900 font-bold">All 84 Ghats</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-amber-200">
                    <span className="text-slate-500 block">Maha Aarti</span>
                    <strong className="text-slate-900 font-bold">6:00 PM Sharp</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-amber-200">
                    <span className="text-slate-500 block">Laser Show</span>
                    <strong className="text-slate-900 font-bold">Chet Singh Ghat</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: Boat Booking Tariff Comparison */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Ship className="w-7 h-7 text-amber-600" />
                <span>Varanasi Dev Deepawali Boat Booking Tariff &amp; Types (2026)</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Witnessing Dev Deepawali from a boat in the middle of the holy Ganges is the single most breathtaking perspective. The reflections of millions of shimmering golden lamps against the dark river currents cannot be seen from the overcrowded ghat steps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {boatTiers.map((b, idx) => (
                  <Card key={idx} className="p-5 border-slate-200 rounded-2xl flex flex-col justify-between hover:shadow-md transition">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                          {b.badge}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{b.capacity}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">{b.category}</h3>
                      <div className="text-xl font-extrabold text-amber-600 mb-2">{b.price}</div>
                      <p className="text-xs text-slate-600 mb-3">{b.route}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      <strong>Cruise Timing:</strong> {b.timing}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 2: Ghats Schedule & Major Events */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Flame className="w-7 h-7 text-amber-600" />
                <span>84 Ghats Schedule &amp; Top Viewing Locations (Nov 28, 2026)</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over 5 lakh visitors converge on the ghats. Here is the exact timeline and prime viewing locations for the major events throughout Dev Deepawali evening:
              </p>

              <div className="space-y-3 pt-2">
                {ghatHighlights.map((g, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 text-base">{g.ghat}</h3>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {g.time}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-700 mb-1">{g.event}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{g.highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Booking Hacks & Sold-Out Solutions */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Sparkles className="w-7 h-7 text-amber-600" />
                <span>5 Insider Travel Hacks for Dev Deepawali 2026</span>
              </h2>

              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1. Board Your Boat Before 4:15 PM</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Local administration halts vehicle movement into Godowlia and Assi crossing after 3:00 PM. Arrive at your designated boat ghat by 4:00 PM to avoid getting stuck in pedestrian gridlocks.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2. Book Hotels 4-6 Weeks Ahead</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ghat-side heritage hotels (like BrijRama Palace, Guleria Kothi, and Suryauday Haveli) reach 100% occupancy 2 months before Kartik Purnima. Staying near Varanasi Cantt Station or Shivpur offers cleaner roads and easy cab access.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3. Kashi Vishwanath Sugam Darshan Pass</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    General queue lines for Kashi Vishwanath Corridor stretch up to 4 to 6 hours on Kartik Purnima. Pre-book an online VIP Sugam Darshan pass (₹300 per person) through our pilgrimage package to complete holy sparsh darshan in under 45 minutes.
                  </p>
                </div>
              </div>
            </section>

            {/* Package Banner */}
            <Card className="p-6 bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 text-white rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">All-Inclusive Spiritual Circuit</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">Dev Deepawali Varanasi + Ayodhya Ram Mandir (4D/3N)</h3>
                  <p className="text-sm text-slate-200 max-w-lg">
                    Includes guaranteed Dev Deepawali Ganga Boat slot, 3 Nights 4-Star hotels, private AC cab, Kashi Vishwanath VIP Darshan &amp; Ayodhya Ram Mandir excursion.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-amber-400">₹8,999<span className="text-xs text-slate-300 font-normal"> / person</span></span>
                  <Link href="/holidays/varanasi" className="mt-3">
                    <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shadow-md">
                      View Kashi Packages <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* FAQs Section with AEO Microformats */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-amber-600" />
                <span>Frequently Asked Questions (Varanasi Dev Deepawali 2026)</span>
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
              <DevDeepawaliInquiryForm />

              {/* Direct Call Concierge Card */}
              <Card className="mt-6 p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-lg text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base mb-1">Need Urgent Boat &amp; Hotel Slots?</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Speak directly with our Varanasi local pilgrimage concierge for confirmed boat permits and darshan passes.
                </p>
                <a
                  href="tel:+917408763401"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 7408763401</span>
                </a>
              </Card>

              {/* Related Seasonal Collections */}
              <Card className="mt-6 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900 mb-3 uppercase tracking-wider text-slate-500">
                  Trending Winter &amp; Festival Getaways
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Pushkar Mela Camel Fair 2026</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Rann Utsav Kutch 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/top-10-new-year-2027-travel-packages-india-abroad-guide"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Top 10 New Year 2027 Packages</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/dubai-shopping-festival-2026-dates-flight-packages-guide"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Dubai Shopping Festival 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/top-10-best-winter-destinations-2026"
                      className="text-slate-700 hover:text-amber-600 flex items-center justify-between font-medium group"
                    >
                      <span>Top 10 Winter Destinations 2026-2027</span>
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
