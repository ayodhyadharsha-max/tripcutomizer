import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, ChevronRight, Compass, Sparkles, ShieldCheck, CheckCircle2, PhoneCall, Globe2, Snowflake, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 Best Winter Holiday Destinations 2026: Kashmir, Dubai, Vietnam, Bali & Manali ❄️🌴 | Trip Customizer',
  description:
    'Discover the top 10 winter getaway destinations for 2026. Explore snowy Kashmir Gulmarg skiing, Dubai Shopping Festival, Vietnam beaches, Bali villas & Kerala backwaters. Packages starting @ ₹14,999.',
  keywords: [
    'best winter holiday destinations 2026',
    'kashmir snow tour packages gulmarg',
    'dubai winter shopping festival packages',
    'vietnam winter tour package',
    'manali snowfall holiday package',
    'kerala winter backwater tour',
    'bali winter honeymoon packages',
    'best places to visit in december 2026',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-best-winter-destinations-2026',
  },
  openGraph: {
    title: 'Top 10 Best Winter Holiday Destinations 2026 ❄️🌴',
    description: 'Plan your perfect winter & year-end vacation to Kashmir, Dubai, Vietnam, Manali, Bali & Kerala with 4-star hotels & flights.',
    url: 'https://www.tripcustomizer.com/blog/top-10-best-winter-destinations-2026',
    images: ['https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralWinterDestinationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Best Winter Holiday Destinations 2026: Kashmir, Dubai, Vietnam, Bali & Manali ❄️🌴',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Senior Travel Desk',
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
    dateModified: '2026-09-27',
    description: 'Definitive 2026 winter holiday travel guide covering domestic snow wonderlands and tropical beach escapes with itineraries and package prices.',
  };

  const winterDestinations = [
    {
      name: '1. Kashmir (Gulmarg, Pahalgam & Srinagar)',
      type: '❄️ Snow & Skiing Paradise',
      startingPrice: '₹ 19,999.00 / person',
      duration: '6 Days / 5 Nights',
      highlights: 'Gulmarg Gondola Cable Car Ride, Shikara Ride on Dal Lake, Pahalgam Betaab Valley & Houseboat Stay',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kashmir',
    },
    {
      name: '2. Dubai (UAE)',
      type: '🏙️ Shopping Festival & Desert Safari',
      startingPrice: '₹ 45,500.00 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Burj Khalifa 124th Floor, Desert Safari BBQ Dinner, Miracle Garden & Dhow Cruise Dinner',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/dubai',
    },
    {
      name: '3. Vietnam (Da Nang & Phu Quoc)',
      type: '🌴 Tropical Sun & Golden Bridge',
      startingPrice: '₹ 22,500.00 / person',
      duration: '6 Days / 5 Nights',
      highlights: 'Bana Hills Golden Bridge, Ha Long Bay 5★ Luxury Cruise & Phu Quoc Starfish Beach',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/vietnam',
    },
    {
      name: '4. Himachal Pradesh (Manali & Shimla)',
      type: '🏔️ Snowfall & Solang Valley Sports',
      startingPrice: '₹ 14,999.00 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Atal Tunnel Rohtang Snow View, Solang Valley Paragliding & Mall Road Shopping',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/himachal',
    },
    {
      name: '5. Bali (Indonesia)',
      type: '🌺 Beach Villa & Floating Breakfast',
      startingPrice: '₹ 24,999.00 / person',
      duration: '6 Days / 5 Nights',
      highlights: 'Private Pool Villa, Kintamani Volcano View & Nusa Penida Island Speedboat Tour',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/bali',
    },
    {
      name: '6. Kerala (Munnar & Alleppey)',
      type: '🛶 Backwaters & Tea Gardens',
      startingPrice: '₹ 16,500.00 / person',
      duration: '5 Days / 4 Nights',
      highlights: 'Alleppey Deluxe Houseboat Overnight Cruise, Munnar Tea Plantations & Eravikulam National Park',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kerala',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 text-slate-900 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Container>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-bold truncate">Top 10 Winter Destinations 2026</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 text-slate-900 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
              ❄️ WINTER & YEAR-END SPECIAL 2026
            </span>
            <span className="bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Snowflake className="w-3.5 h-3.5 text-brand-600" /> Snow & Sun Escapes
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight max-w-4xl">
            Top 10 Best Winter Holiday Destinations 2026: <span className="text-brand-600 font-black">Kashmir, Dubai, Vietnam & Manali ❄️🌴</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed font-medium">
            Looking for the ultimate winter escape? Whether you crave Gulmarg’s snowy slopes, Dubai’s futuristic shopping festivals, or Bali’s warm tropical beaches, explore 2026’s top winter destinations with 4-star hotels, flights & 24x7 expert support starting @ ₹14,999!
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500 font-semibold">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-600" />
              <span className="text-slate-900 font-bold">Trip Customizer Senior Travel Architects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Updated: Sept 27, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>8 Min Comprehensive Read</span>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              {winterDestinations.map((d, idx) => (
                <Card key={idx} className="overflow-hidden border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-56 w-full bg-slate-100">
                    <Image src={d.image} alt={d.name} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
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
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> 4★ Hotel + Flights + Sightseeing Included
                      </span>
                      <Link href={d.packageUrl}>
                        <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs">
                          Customize Winter Package →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar CTA & Lead Form Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              <Card className="p-6 bg-gradient-to-br from-white to-sky-50 border-brand-200 shadow-xl rounded-2xl text-slate-900">
                <div className="flex items-center space-x-2 text-brand-600 text-xs font-black uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Winter Holiday Architect</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">
                  Get Free Winter Quote & Itinerary PDF 📄
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Connect directly with our Senior Travel Desk on WhatsApp or call for customized quotes within 2 hours.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200 mt-4">
                  <a
                    href="https://wa.me/917408763401?text=Hi%20Trip%20Customizer,%20I%20want%20to%20plan%20a%20Winter%20Holiday%20package."
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
