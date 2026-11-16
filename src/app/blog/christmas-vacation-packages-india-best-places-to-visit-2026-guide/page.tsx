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
  Gift,
  TreePine,
  Sun,
  Award,
} from 'lucide-react';
import { ChristmasInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 10 Places to Celebrate Christmas in India (2026): Snow, Beaches & Long Weekend Packages 🎄❄️',
  description:
    'Plan your Christmas 2026 long weekend getaway in India (Dec 25–27, 2026). White Christmas in Gulmarg & Manali snowfall, Goa beach midnight mass, Kerala backwaters, Pondicherry French churches & family holiday packages starting @ ₹11,999.',
  keywords: [
    'christmas vacation packages in india 2026',
    'best places to visit for christmas in india',
    'christmas holiday in goa 2026 midnight mass',
    'white christmas snowfall kashmir gulmarg',
    'manali christmas snow tour package',
    'kerala christmas holiday packages',
    'pondicherry christmas celebration churches',
    'christmas long weekend getaway 2026',
    'christmas tour packages with flight',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/christmas-vacation-packages-india-best-places-to-visit-2026-guide',
  },
  openGraph: {
    title: 'Top 10 Places to Celebrate Christmas in India 2026 🎄❄️',
    description:
      'Discover where to celebrate Christmas 2026 in India. White snow in Gulmarg & Manali, beach parties in Goa, backwaters in Kerala & verified packages.',
    url: 'https://www.tripcustomizer.com/blog/christmas-vacation-packages-india-best-places-to-visit-2026-guide',
    images: ['https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christmas Vacation Packages India 2026 | Trip Customizer',
    description:
      'Friday Dec 25 long weekend travel guide: snow wonderlands, beach carnivals & family holiday packages.',
    images: ['https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function Christmas2026GuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Places to Celebrate Christmas in India (2026): Snow, Beaches & Long Weekend Packages 🎄❄️',
    image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Festive Travel Editorial',
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
    datePublished: '2026-11-16',
    dateModified: '2026-11-16',
    description:
      'The comprehensive master guide to Christmas 2026 vacations in India. Dec 25 Friday long weekend schedule, top 10 ranked snow and beach destinations, midnight mass locations, and verified packages.',
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
        name: 'Christmas Vacation Packages 2026 Guide',
        item: 'https://www.tripcustomizer.com/blog/christmas-vacation-packages-india-best-places-to-visit-2026-guide',
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 10 Christmas Destinations in India 2026',
    description: 'Ranked list of the 10 best places to celebrate Christmas in India in 2026.',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Goa (Midnight Mass, Beach Shacks & Christmas Dinners)' },
      { '@type': 'ListItem', position: 2, name: 'Gulmarg, Kashmir (True White Christmas & Snow Skiing)' },
      { '@type': 'ListItem', position: 3, name: 'Manali, Himachal Pradesh (Snowfall, Solang & Bonfires)' },
      { '@type': 'ListItem', position: 4, name: 'Kerala (Kochi Santa Fest & Alleppey Houseboats)' },
      { '@type': 'ListItem', position: 5, name: 'Pondicherry (French Quarter & Basilicas)' },
      { '@type': 'ListItem', position: 6, name: 'Shillong, Meghalaya (Rock Concerts & Cathedral of Mary)' },
      { '@type': 'ListItem', position: 7, name: 'Kolkata, West Bengal (Park Street Christmas Carnival)' },
      { '@type': 'ListItem', position: 8, name: 'Shimla, Himachal Pradesh (Christ Church & Ridge Fest)' },
      { '@type': 'ListItem', position: 9, name: 'Rann of Kutch, Gujarat (White Desert Full Moon Christmas)' },
      { '@type': 'ListItem', position: 10, name: 'Auli, Uttarakhand (Ski Slopes & Nanda Devi Panoramas)' },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is Christmas 2026 an ideal 3-Day Long Weekend for a vacation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In 2026, Christmas Day falls on Friday, December 25. Together with Saturday (Dec 26) and Sunday (Dec 27), travelers enjoy an automatic 3-day long weekend without taking leave. Adding just 2 days off (Monday and Tuesday) bridges smoothly into New Year 2027.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which place in India is best for experiencing a White Christmas with snowfall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gulmarg in Kashmir is the undisputed #1 destination for a real White Christmas with deep powdery snow, fir trees draped in white, and the operational Gondola cable car up to Apharwat Peak at 13,057 ft. Solang Valley and Atal Tunnel in Manali also receive consistent Christmas snowfall.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the most festive Christmas celebration held in Goa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Old Goa hosts midnight mass at the 400-year-old Basilica of Bom Jesus and Se Cathedral with illuminated nativity cribs, brass band carols, and village festivity. North Goa beaches (Calangute, Anjuna, Baga) offer lively Christmas Eve beach dinners, fireworks, and live music.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a typical 4-Day Christmas vacation package cost in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All-inclusive Christmas holiday packages range from ₹11,999 to ₹18,500 per person for domestic destinations (Goa, Manali, Kerala) including 3 Nights 4-star accommodation, daily breakfast, private AC cab transfers, and Christmas dinner perks. Kashmir winter packages start at ₹14,999 per person.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I book Christmas 2026 flights and hotel packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Due to peak holiday demand, flight airfares to Goa, Srinagar, and Cochin rise by 250% by early December. Booking in mid-November guarantees confirmed seats, early bird room allotments, and avoids last-minute mandatory hotel surge fees.',
        },
      },
    ],
  };

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Top 10 Places to Celebrate Christmas in India 2026 Guide',
    url: 'https://www.tripcustomizer.com/blog/christmas-vacation-packages-india-best-places-to-visit-2026-guide',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const christmasDestinations = [
    {
      rank: 1,
      name: 'Goa (Midnight Mass & Beach Celebrations)',
      tag: '🏖️ Sun, Sand & Midnight Carols',
      price: '₹ 12,999 / person',
      duration: '4 Days / 3 Nights',
      highlights: 'Midnight Mass at Basilica of Bom Jesus, traditional Goan Christmas fruit cakes, illuminated beach shacks & private cab sightseeing.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/goa',
      badge: 'Best Festive Atmosphere',
    },
    {
      rank: 2,
      name: 'Gulmarg, Kashmir (True White Christmas)',
      tag: '❄️ Snow-Draped Pines & Skiing',
      price: '₹ 15,999 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Snowfall in Gulmarg bowl, Apharwat Peak Gondola cable car ride, Dal Lake heated houseboat stay & cozy wood-stove bukhari heating.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kashmir',
      badge: 'Snowfall Guaranteed',
    },
    {
      rank: 3,
      name: 'Manali, Himachal Pradesh (Snow Valley & Mall Road)',
      tag: '🏔️ Solang Snowmobiles & Bonfire Nights',
      price: '₹ 11,999 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Atal Tunnel snow views, Solang Valley winter sports, heated luxury cottage stays, DJ bonfire party & Mall Road Christmas lights.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/himachal',
      badge: 'Family Snow Favorite',
    },
    {
      rank: 4,
      name: 'Kerala (Kochi Carnival & Backwaters)',
      tag: '🛶 Tropical Backwaters & Santa Fest',
      price: '₹ 14,500 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Fort Kochi Santa Claus street parade, Saint Francis Church midnight service, Alleppey private luxury houseboat & Munnar tea hills.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kerala',
      badge: 'Cultural Serenity',
    },
    {
      rank: 5,
      name: 'Pondicherry (French Colonial Heritage)',
      tag: '🥐 French Cafes & Gilded Basilicas',
      price: '₹ 10,999 / person',
      duration: '4 Days / 3 Nights',
      highlights: 'Midnight mass at Basilica of the Sacred Heart of Jesus, Promenade beach strolls, French patisseries & Auroville peace retreats.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays',
      badge: 'Charming European Vibe',
    },
    {
      rank: 6,
      name: 'Shillong, Meghalaya (Rock Capital Caroling)',
      tag: '🎸 Live Music & Hills of Joy',
      price: '₹ 16,999 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Cathedral of Mary Help of Christians choir, live acoustic rock concerts, Umiam Lake boat rides & Cherrapunji mist waterfalls.',
      image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays',
      badge: 'Musical Magic',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-red-950 via-slate-900 to-emerald-950 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container className="relative z-10 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/blog" className="hover:text-red-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-red-400 font-medium truncate">Christmas 2026 Vacation Guide</span>
          </nav>

          {/* Trending Seasonal Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-400/40 text-red-300 text-xs md:text-sm font-semibold mb-4">
            <Gift className="w-4 h-4 text-red-400 animate-bounce" />
            <span>DECEMBER 25 (FRIDAY) • 3-DAY CHRISTMAS LONG WEEKEND BOOKING WINDOW LIVE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
            Top 10 Places to Celebrate Christmas in India (2026): Snow, Beaches &amp; Long Weekend Packages 🎄❄️
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-8">
            Celebrate the magical Christmas long weekend (Dec 25–27, 2026). Whether you seek a snowy White Christmas in Gulmarg, midnight mass on Goan beaches, or backwater serenades in Kerala, here are 2026’s verified packages starting @ ₹11,999.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-400" />
              <span>Christmas: Friday, Dec 25, 2026</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>8 Min Read</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified 4-Star Hotels &amp; Flight Guarantee</span>
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
            <div className="p-6 bg-gradient-to-r from-red-50 to-emerald-50 border-2 border-red-300 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-red-950 uppercase tracking-wide flex items-center gap-2 mb-3">
                <TreePine className="w-5 h-5 text-emerald-600" />
                <span>Christmas 2026 Long Weekend Travel Snapshot</span>
              </h2>
              <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                <p className="speakable-content aeo-answer font-medium">
                  <strong>Christmas 2026 falls on Friday, December 25</strong>, offering a natural 3-day long weekend (Dec 25 to 27) without taking leaves from work. Top trending destinations are divided into <strong>Live Snowfall Escapes</strong> (Gulmarg Kashmir and Manali Himachal) and <strong>Beach &amp; Carnival Hubs</strong> (Goa and Kerala). Early booking by late November saves up to 40% on surging flight tickets.
                </p>
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-red-200">
                    <span className="text-slate-500 block">Dates</span>
                    <strong className="text-slate-900 font-bold">Dec 25 – 27, 2026</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-red-200">
                    <span className="text-slate-500 block">Long Weekend</span>
                    <strong className="text-slate-900 font-bold">Fri / Sat / Sun</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-red-200">
                    <span className="text-slate-500 block">Best Snow</span>
                    <strong className="text-slate-900 font-bold">Gulmarg Kashmir</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-red-200">
                    <span className="text-slate-500 block">Best Parties</span>
                    <strong className="text-slate-900 font-bold">Goa &amp; Kochi</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Destinations List */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Award className="w-7 h-7 text-red-600" />
                <span>Top Ranked Places to Spend Christmas 2026 in India</span>
              </h2>

              <div className="space-y-6">
                {christmasDestinations.map((d) => (
                  <Card key={d.rank} className="overflow-hidden border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-56 w-full bg-slate-100">
                      <Image src={d.image} alt={d.name} fill className="object-cover" />
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                        Rank #{d.rank}
                      </div>
                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                        {d.badge}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-100 pb-3">
                        <div>
                          <h3 className="text-xl font-black text-slate-900">{d.name}</h3>
                          <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                            Duration: <strong className="text-red-700">{d.duration}</strong> • {d.tag}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Package Starts</span>
                          <span className="text-lg font-black text-red-600">{d.price}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        <strong>Key Inclusions:</strong> {d.highlights}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" /> 4★ Hotel + Breakfast + Sightseeing Included
                        </span>
                        <Link href={d.packageUrl}>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs">
                            View Christmas Package →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Christmas Midnight Mass Schedule */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Sparkles className="w-7 h-7 text-amber-600" />
                <span>Historic Churches &amp; Midnight Mass Timings (Christmas Eve, Dec 24)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">Basilica of Bom Jesus</h3>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Old Goa</span>
                  </div>
                  <p className="text-xs text-slate-600">Carols begin at 11:15 PM, followed by solemn Midnight Mass at 12:00 AM on the open church lawns under fairy lights.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">Christ Church</h3>
                    <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">Shimla Ridge</span>
                  </div>
                  <p className="text-xs text-slate-600">Illuminated stained glass windows, brass church bells ringing across the snowy valley, and Christmas Eve service at 11:30 PM.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">St. Paul’s Cathedral</h3>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">Kolkata</span>
                  </div>
                  <p className="text-xs text-slate-600">Gothic arches, Park Street Christmas carnival lights, Midnight Mass from 11:00 PM with grand pipe organ recital.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">Basilica of Sacred Heart</h3>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Pondicherry</span>
                  </div>
                  <p className="text-xs text-slate-600">French Gothic architecture, Tamil &amp; French bilingual carols, open nativity scene, and midnight blessing.</p>
                </div>
              </div>
            </section>

            {/* FAQs Section with AEO Microformats */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-red-600" />
                <span>Frequently Asked Questions (Christmas 2026 Holidays)</span>
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
              <ChristmasInquiryForm />

              {/* Direct Call Concierge Card */}
              <Card className="mt-6 p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-lg text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-3">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base mb-1">Lock Christmas 2026 Flights Early</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Speak directly with our festive travel desk for early bird hotel bookings &amp; confirmed flight seats.
                </p>
                <a
                  href="tel:+917408763401"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm transition-colors"
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
                      href="/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide"
                      className="text-slate-700 hover:text-red-600 flex items-center justify-between font-medium group"
                    >
                      <span>Sunburn Goa 2026 Festival Pass</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/top-10-new-year-2027-travel-packages-india-abroad-guide"
                      className="text-slate-700 hover:text-red-600 flex items-center justify-between font-medium group"
                    >
                      <span>Top 10 New Year 2027 Packages</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide"
                      className="text-slate-700 hover:text-red-600 flex items-center justify-between font-medium group"
                    >
                      <span>Gulmarg Gondola &amp; Kashmir Snow</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/dubai-shopping-festival-2026-dates-flight-packages-guide"
                      className="text-slate-700 hover:text-red-600 flex items-center justify-between font-medium group"
                    >
                      <span>Dubai Shopping Festival 2026-2027</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide"
                      className="text-slate-700 hover:text-red-600 flex items-center justify-between font-medium group"
                    >
                      <span>Dev Deepawali Varanasi 2026</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
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
