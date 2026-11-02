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
  Camera,
  Compass,
  Zap,
  Flame,
} from 'lucide-react';
import { PushkarMelaInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Pushkar Mela 2026: Official Dates, Full Schedule, Luxury Tent Price & Booking Guide 🐪🎪',
  description:
    'Complete guide to Pushkar Camel Fair 2026 (Pushkar Mela). Official dates (Nov 20 – Nov 28, 2026), Kartik Purnima Maha Aarti schedule, luxury Swiss tent camp prices, hot air balloon rides, camel races, and Jaipur/Pushkar holiday packages starting @ ₹11,999.',
  keywords: [
    'pushkar mela 2026 dates',
    'pushkar fair 2026 schedule',
    'pushkar camel fair camp booking',
    'kartik purnima pushkar 2026',
    'pushkar tent camp price',
    'hot air balloon pushkar fair price',
    'pushkar tour package from delhi',
    'pushkar mela luxury tent',
    'pushkar brahma temple festival',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
  },
  openGraph: {
    title: 'Pushkar Mela 2026: Dates, Schedule, Luxury Camps & Booking Guide 🐪🎪',
    description:
      'Plan your trip to the world’s largest camel fair in Pushkar, Rajasthan. Dates, Kartik Purnima schedule, luxury desert camps, hot air balloons & verified packages.',
    url: 'https://www.tripcustomizer.com/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
    images: ['https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pushkar Mela 2026 Master Booking Guide | Trip Customizer',
    description:
      'Official dates, day-wise schedule, desert camps, hot air balloon rates, and customized Rajasthan holiday packages.',
    images: ['https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function PushkarMela2026GuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pushkar Mela 2026: Official Dates, Full Schedule, Luxury Tent Price & Booking Guide 🐪🎪',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Rajasthan Heritage Editorial',
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
      'The comprehensive master guide to Pushkar Camel Fair 2026 in Rajasthan. Official festival schedule, Kartik Purnima bathing dates, desert camp tariff comparison, hot air balloon safaris, and verified packages.',
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
        name: 'Pushkar Mela 2026 Guide',
        item: 'https://www.tripcustomizer.com/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the official dates for Pushkar Mela 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pushkar Mela 2026 is scheduled from November 20 to November 28, 2026. The initial days (Nov 20 - Nov 24) are centered around cattle trading, camel beauty contests, and rural sports, while the final days (Nov 25 - Nov 28) culminate in religious rituals and the grand Kartik Purnima holy dip.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the date for Kartik Purnima Holy Bath at Pushkar Lake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The sacred Kartik Purnima Maha Snan falls on the final day of the festival, November 28, 2026. Pilgrims take holy dips across the 52 ghats of Pushkar Sarovar and offer deepdaan (floating oil lamps) accompanied by Vedic chanting.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a luxury tent camp cost in Pushkar during the Fair?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'During Pushkar Fair peak season, luxury Swiss AC tents pitched in the sand dunes range from ₹12,000 to ₹22,000 per night for a couple, including all meals, cultural folk entertainment, and desert camel cart transfers. Heritage suites and luxury glamping can reach ₹35,000 per night.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is hot air ballooning available at Pushkar Mela 2026 and what is the cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, international hot air ballooning flights take place at sunrise and sunset over the desert dunes and fairgrounds. Commercial flights cost between ₹12,000 and ₹15,000 per person for an unforgettable 45 to 60-minute aerial vista of 50,000+ camels and the sacred lake.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to reach Pushkar from Delhi and Jaipur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pushkar is located 145 km from Jaipur International Airport (approx. 2.5 to 3 hours drive via NH48). The nearest railway station is Ajmer Junction (14 km), which connects to Delhi via Shatabdi and Vande Bharat Express in just 4.5 hours.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pushkar Mela 2026 Master Booking Guide',
    url: 'https://www.tripcustomizer.com/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const scheduleEvents = [
    { dates: 'Nov 20 – Nov 22, 2026', title: 'Cattle & Camel Trading', desc: 'Over 50,000 camels and horses arrive from across the Thar Desert. Best time for authentic rural photography and trading portraits.' },
    { dates: 'Nov 23 – Nov 24, 2026', title: 'Folk Competitions & Camel Sports', desc: 'Famous Gorbandh (Camel Decoration) pageant, Camel Dance contests, Matka Phod, Tug-of-War, and Longest Moustache contest.' },
    { dates: 'Nov 25 – Nov 27, 2026', title: 'Cultural Extravaganza & Harmony', desc: 'Kalbelia and Ghoomar performances by master Rajasthani folk artists, Maha Aarti at Brahma Ghat, and international fusion concerts.' },
    { dates: 'Nov 28, 2026 (Kartik Purnima)', title: 'Maha Snan & Deepdaan Finale', desc: 'Lakhs of pilgrims take sacred baths in holy Pushkar Lake under the full moon, lighting thousands of earthen lamps across 52 ghats.' },
  ];

  const campOptions = [
    {
      name: 'Royal Heritage Swiss AC Camp',
      location: 'Pushkar Mela Fairground Dunes',
      price: '₹14,500 – ₹18,000 / night',
      features: 'King-size bedding, attached private washroom with geyser, buffet Rajasthani meals, nightly Kalbelia dance by bonfire',
      badge: 'Most Popular',
    },
    {
      name: 'Ultra-Luxury Dune Glamping Suite',
      location: 'Exclusive Private Desert Ridge',
      price: '₹24,000 – ₹32,000 / night',
      features: 'Wooden deck, luxury handcrafted furnishings, private dining, dedicated butler, complimentary camel safari and sunset high tea',
      badge: 'Luxury VIP',
    },
    {
      name: 'Traditional Standard AC Tent',
      location: 'Fairground Perimeter',
      price: '₹9,500 – ₹12,000 / night',
      features: 'Clean cozy tent, twin beds, attached washroom, breakfast & dinner buffet, proximity to cattle trading fields',
      badge: 'Value Pick',
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
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container className="relative z-10 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400 font-medium truncate">Pushkar Mela 2026 Master Guide</span>
          </nav>

          {/* Trending Seasonal Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs md:text-sm font-semibold mb-4">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>NOV 20 – NOV 28, 2026 • KARTIK PURNIMA PEAK BOOKING WINDOW</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
            Pushkar Mela 2026: Official Dates, Full Schedule, Luxury Tent Price &amp; Booking Guide 🐪🎪
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-8">
            Experience the vibrant colors of Rajasthan at the world’s largest camel fair. From luxury Swiss camps in the sand dunes and hot air balloon safaris to Kartik Purnima Maha Aarti timings and Jaipur packages.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Fair Dates: Nov 20 – Nov 28, 2026</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>8 Min Read</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Rajasthan Tourism Verified Partner</span>
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
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                alt="Pushkar Camel Fair decorated camels in Thar desert sand dunes during sunset"
                width={1200}
                height={680}
                className="w-full h-[320px] sm:h-[420px] object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs sm:text-sm">
                Spectacular decorated camels and desert glamping camps at the Pushkar Fairgrounds in Rajasthan.
              </div>
            </div>

            {/* Quick Summary Highlights Box */}
            <Card className="p-6 bg-orange-50/70 border border-orange-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5 text-orange-950 font-bold text-lg mb-3">
                <Zap className="w-5 h-5 text-orange-600" />
                <span>Pushkar Mela 2026 Key Highlights</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Official Dates:</strong> 20th November to 28th November 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Kartik Purnima Snan:</strong> 28th November 2026 (Full Moon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Camps Starting:</strong> ₹9,500/night with All Meals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Transit Hub:</strong> Ajmer Junction (14 km) / Jaipur Airport (145 km)</span>
                </li>
              </ul>
            </Card>

            {/* Section 1: The Magic of Pushkar Fair */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Tent className="w-7 h-7 text-orange-600" />
                <span>What Makes Pushkar Mela an Unmissable Global Sensation</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Nestled at the edge of the Thar Desert beside the sacred Pushkar Lake and the world’s only prominent <strong>Lord Brahma Temple</strong>, the ancient holy town of Pushkar erupts into an unbelievable carnival every November.
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                Pushkar Mela is a rare, intoxicating fusion of two worlds: on one hand, it is the world&apos;s grandest livestock and camel trading congregation where pastoral communities trade over 50,000 camels, Marwari horses, and cattle. On the other hand, it is an auspicious Hindu pilgrimage where lakhs of sadhus, royalty, and devotees gather on the ghats to take holy baths during the sacred Kartik month.
              </p>
            </section>

            {/* Section 2: Day-by-Day Schedule */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Calendar className="w-7 h-7 text-amber-600" />
                <span>Official Pushkar Mela 2026 Schedule &amp; Event Phases</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                To get the most out of your visit, plan according to the two distinct phases of the fair:
              </p>

              <div className="space-y-4">
                {scheduleEvents.map((evt, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-orange-300 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="font-bold text-slate-900 text-base">{evt.title}</h4>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 self-start sm:self-auto">
                        {evt.dates}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{evt.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Luxury Camps in the Dunes */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-amber-500" />
                <span>Pushkar Fair Luxury Desert Camps &amp; Glamping Tariffs</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                Because hotels in Pushkar town are quickly booked months in advance, staying in a luxury Swiss tent camp set against the sand dunes is the quintessential Pushkar experience. These camps provide 5-star amenities in the desert including running hot water, climate control, royal Rajasthani buffets, and private cultural performances.
              </p>

              <div className="space-y-4">
                {campOptions.map((camp, index) => (
                  <Card key={index} className="p-5 border border-slate-200 hover:border-orange-400 transition-all rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800">
                          {camp.badge}
                        </span>
                        <h3 className="font-bold text-slate-900 text-lg">{camp.name}</h3>
                      </div>
                      <span className="font-bold text-base sm:text-lg text-emerald-700">{camp.price}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{camp.features}</p>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      <span>Location: {camp.location}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 4: Hot Air Balloon & Activities */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <Compass className="w-7 h-7 text-indigo-600" />
                <span>Top Experiences: Hot Air Ballooning, Camel Safaris &amp; Holy Ghats</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    Hot Air Balloon Safari
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Float 1,500 feet above the desert at sunrise. Marvel at the sprawling tent city, the camel herds, and the Aravalli hills. Cost: ₹12,000 – ₹15,000 / person for a 60-minute ride.
                  </p>
                </Card>

                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-orange-500" />
                    Camel Cart Dune Safaris
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ride in colorfully decorated camel carts into the undulating Thar dunes during sunset. Witness folk musicians playing ravanhatha against the golden dusk.
                  </p>
                </Card>

                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-indigo-500" />
                    Pushkar Lake Maha Aarti
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Attend the evening Maha Aarti at Varaha Ghat and Brahma Ghat. Hundreds of bronze multi-tier brass lamps illuminate the sacred waters accompanied by conch shells.
                  </p>
                </Card>

                <Card className="p-4 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-500" />
                    Kartik Purnima Maha Snan
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Join pilgrims for the sacred full moon dip that purifies lifetime karma. Explore the bustling colorful bazaars selling silver jewelry, rose water, and tie-dye bandhani.
                  </p>
                </Card>
              </div>
            </section>

            {/* Deep Link Package Banner */}
            <Card className="p-6 bg-gradient-to-r from-orange-950 via-amber-900 to-stone-900 text-white rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Curated Rajasthan Holiday</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">Pushkar Fair &amp; Royal Jaipur Heritage Tour (4D/3N)</h3>
                  <p className="text-sm text-slate-200 max-w-lg">
                    Includes 2 Nights Luxury Swiss Tent at Pushkar Dunes + 1 Night Jaipur 4-star heritage palace hotel, private AC cab, camel cart ride, daily breakfast &amp; dinner.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-amber-400">₹11,999<span className="text-xs text-slate-300 font-normal"> / person</span></span>
                  <Link href="/holidays/rajasthan" className="mt-3">
                    <Button className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shadow-md">
                      View Rajasthan Packages <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Section 5: FAQs */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-orange-600" />
                <span>Frequently Asked Questions (Pushkar Mela 2026)</span>
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
              <PushkarMelaInquiryForm defaultCampCategory="Royal Swiss AC Tent Camp (Pushkar Fair Grounds)" />

              {/* Direct Call Concierge Card */}
              <Card className="mt-6 p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-lg text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base mb-1">Need Urgent Camp &amp; Balloon Booking?</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Speak directly with our Rajasthan cultural holiday desk for fairground tent allocation.
                </p>
                <a
                  href="tel:+917408763401"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold rounded-xl text-sm transition-colors"
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
                      href="/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide"
                      className="text-slate-700 hover:text-orange-600 flex items-center justify-between font-medium group"
                    >
                      <span>Rann Utsav Kutch 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/dubai-shopping-festival-2026-dates-flight-packages-guide"
                      className="text-slate-700 hover:text-orange-600 flex items-center justify-between font-medium group"
                    >
                      <span>Dubai Shopping Festival 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/top-10-new-year-2027-travel-packages-india-abroad-guide"
                      className="text-slate-700 hover:text-orange-600 flex items-center justify-between font-medium group"
                    >
                      <span>Top 10 New Year 2027 Packages</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide"
                      className="text-slate-700 hover:text-orange-600 flex items-center justify-between font-medium group"
                    >
                      <span>Sunburn Goa 2026 Festival Pass</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/holidays/rajasthan"
                      className="text-slate-700 hover:text-orange-600 flex items-center justify-between font-medium group"
                    >
                      <span>Rajasthan Royal Palaces &amp; Forts</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
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
