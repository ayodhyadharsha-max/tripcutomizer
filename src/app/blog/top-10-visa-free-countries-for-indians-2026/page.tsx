import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, ChevronRight, Compass, Sparkles, ShieldCheck, CheckCircle2, PhoneCall, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 Visa-Free Countries for Indian Passport Holders in 2026 (Full Guide) 🛂✈️ | Trip Customizer',
  description:
    'Explore top 10 visa-free and visa-on-arrival countries for Indian travelers in 2026: Thailand, Vietnam, Bali, Malaysia, Sri Lanka, Kazakhstan, Mauritius & Seychelles. Budget packages starting @ ₹14,999.',
  keywords: [
    'visa free countries for indians 2026',
    'visa on arrival for indians 2026',
    'thailand visa free for indians',
    'malaysia visa free 2026',
    'vietnam e visa for indians',
    'bali visa on arrival cost',
    'sri lanka free visa for indians',
    'kazakhstan visa free 14 days',
    'best foreign trip without visa from India',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-visa-free-countries-for-indians-2026',
  },
  openGraph: {
    title: 'Top 10 Visa-Free Countries for Indian Passport Holders in 2026 🛂✈️',
    description: 'Travel hassle-free to Thailand, Vietnam, Bali, Malaysia, Sri Lanka & Kazakhstan without visa paperwork! Customized packages with 4-star hotels & flights.',
    url: 'https://www.tripcustomizer.com/blog/top-10-visa-free-countries-for-indians-2026',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralVisaFreeCountriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Visa-Free Countries for Indian Passport Holders in 2026: Complete Budget & Travel Guide 🛂✈️',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
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
        url: 'https://www.tripcustomizer.com/logo-header.png',
      },
    },
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    description: 'Comprehensive 2026 guide detailing 10 top visa-free and visa-on-arrival international destinations for Indian travelers with budget estimates and tour packages.',
  };

  const visaFreeDestinations = [
    {
      name: '1. Thailand (Phuket, Krabi & Bangkok)',
      visaPolicy: '✅ 100% Visa-Free Entry (Exemption Extended)',
      stayDuration: '30 Days Permitted Stay',
      startingPrice: '₹ 18,999.00 / person',
      bestTime: 'November to April',
      highlights: 'Phi Phi Island Speedboat Cruise, Maya Bay, Alcazar Cabaret Show & Patong Nightlife',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/thailand',
    },
    {
      name: '2. Malaysia (Kuala Lumpur & Genting)',
      visaPolicy: '✅ 100% Visa-Free Entry for Indians',
      stayDuration: '30 Days Permitted Stay',
      startingPrice: '₹ 19,500.00 / person',
      bestTime: 'Year-Round (Best Nov - March)',
      highlights: 'Petronas Twin Towers, Batu Caves Golden Statue, Genting Highlands Cable Car & Sunway Lagoon',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/malaysia',
    },
    {
      name: '3. Bali, Indonesia',
      visaPolicy: '🛂 Visa On Arrival (VoA) - 100% Instant Approval',
      stayDuration: '30 Days (Extendable by 30 days)',
      startingPrice: '₹ 24,999.00 / person',
      bestTime: 'April to October',
      highlights: 'Private Pool Beach Villas, Kintamani Volcano View, Nusa Penida Angel Billabong & Sacred Monkey Forest',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/bali',
    },
    {
      name: '4. Vietnam (Da Nang, Hanoi & Ha Long Bay)',
      visaPolicy: '⚡ 24-Hour E-Visa (90-Day Multiple Entry)',
      stayDuration: '90 Days E-Visa',
      startingPrice: '₹ 22,500.00 / person',
      bestTime: 'February to August',
      highlights: 'Bana Hills Golden Hand Bridge, Ha Long Bay 5★ Luxury Cruise & Hoi An Lantern Town',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/vietnam',
    },
    {
      name: '5. Sri Lanka (Colombo, Kandy & Bentota)',
      visaPolicy: '✅ Free ETA Visa Waiver Scheme',
      stayDuration: '30 Days Permitted Stay',
      startingPrice: '₹ 16,999.00 / person',
      bestTime: 'December to April',
      highlights: 'Sigiriya Rock Fortress, Bentota Water Sports, Kandy Tooth Relic Temple & Galle Fort',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/sri-lanka',
    },
    {
      name: '6. Kazakhstan (Almaty)',
      visaPolicy: '✅ 100% Visa-Free Entry (14 Days)',
      stayDuration: '14 Days Per Visit',
      startingPrice: '₹ 29,999.00 / person',
      bestTime: 'May to October & Winter Skiing (Dec - Feb)',
      highlights: 'Shymbulak Mountain Resort Cable Car, Kok Tobe Hill, Charyn Canyon & Big Almaty Lake',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/kazakhstan',
    },
    {
      name: '7. Mauritius',
      visaPolicy: '🛂 Visa On Arrival (Free of Cost)',
      stayDuration: '60 Days Permitted Stay',
      startingPrice: '₹ 42,500.00 / person',
      bestTime: 'May to December',
      highlights: 'Ile Aux Cerfs Island Cruise, Chamarel Seven Colored Earth, North Island Tour & Beach Resorts',
      image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/mauritius',
    },
    {
      name: '8. Seychelles',
      visaPolicy: '✅ Visitor Permit On Arrival (Free)',
      stayDuration: '30 Days Permitted Stay',
      startingPrice: '₹ 55,000.00 / person',
      bestTime: 'April to May & October to November',
      highlights: 'Anse Source d\'Argent Granite Beach, Mahe Island Tour & Praslin Giant Coco-de-Mer Palms',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/seychelles',
    },
    {
      name: '9. Nepal (Kathmandu, Pokhara & Chitwan)',
      visaPolicy: '✅ No Visa Needed (Freedom of Movement)',
      stayDuration: 'Unlimited (Aadhaar / Passport Entry)',
      startingPrice: '₹ 14,999.00 / person',
      bestTime: 'September to November & March to May',
      highlights: 'Pashupatinath Temple, Phewa Lake Boating Pokhara, Annapurna Himalayan Mountain View & Cable Car',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/nepal',
    },
    {
      name: '10. Bhutan (Thimphu, Paro & Punakha)',
      visaPolicy: '✅ Entry Permit On Arrival (No Prior Visa)',
      stayDuration: '7 - 14 Days Permit',
      startingPrice: '₹ 22,000.00 / person',
      bestTime: 'March to May & September to November',
      highlights: 'Tiger\'s Nest Monastery Hike, Punakha Dzong, Buddha Dordenma Statue & Scenic Himalayan Drives',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
      packageUrl: '/holidays/bhutan',
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
          <span className="text-slate-900 font-bold truncate">Top 10 Visa-Free Countries for Indians 2026</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-10 border border-brand-800">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              🔥 VIRAL GUIDE 2026
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5" /> 60+ Visa-Free Destinations
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-4xl">
            Top 10 Visa-Free Countries for Indian Passport Holders in 2026: Complete Budget & Travel Guide 🛂✈️
          </h1>

          <p className="text-slate-300 text-xs sm:text-base mt-4 max-w-3xl leading-relaxed">
            Planning your next international trip without tedious visa paperwork? From Thailand’s white sand beaches to Bali’s private pool villas, Vietnam’s Golden Bridge, and Kazakhstan’s alpine mountains — here is the ultimate 2026 visa-free guide for Indians with prices starting @ ₹14,999!
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-800 text-xs text-slate-300 font-medium">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-400" />
              <span>Trip Customizer Senior Travel Desk</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Updated: Sept 25, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>6 Min Read</span>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-8">

            {/* Intro Highlight Card */}
            <Card className="p-6 bg-white border-brand-200 shadow-sm rounded-2xl">
              <h2 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" /> Why Travel Visa-Free in 2026?
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Zero Visa Processing Delay:</strong> Book your flight ticket today and fly tomorrow without waiting for embassy appointments or VFS queues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Save Up to ₹8,000 Per Person:</strong> Avoid expensive visa application fees and agent service surcharges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Instant Package Customization:</strong> Trip Customizer provides 4-star hotel vouchers, flights, airport transfers, and 24x7 WhatsApp support instantly.</span>
                </li>
              </ul>
            </Card>

            {/* 10 Visa-Free Destinations Detailed List */}
            <div className="space-y-6">
              {visaFreeDestinations.map((d, idx) => (
                <Card key={idx} className="overflow-hidden border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-56 w-full bg-slate-100">
                    <Image src={d.image} alt={d.name} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                      {d.visaPolicy}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <h3 className="text-xl font-black text-slate-900">{d.name}</h3>
                        <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                          Allowed Stay: <strong className="text-brand-700">{d.stayDuration}</strong> | Best Time: <strong className="text-slate-800">{d.bestTime}</strong>
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Package Starts</span>
                        <span className="text-lg font-black text-brand-600">{d.startingPrice}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      <strong>Top Highlights:</strong> {d.highlights}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> Includes 4★ Hotel + Flights + Sightseeing
                      </span>
                      <Link href={d.packageUrl}>
                        <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs">
                          Customize Package →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Practical Travel Requirements Card */}
            <Card className="p-6 bg-amber-50/70 border-amber-200 rounded-2xl">
              <h2 className="text-lg font-black text-amber-950 mb-3 flex items-center gap-2">
                📌 Essential Documents Required for Indian Travelers (2026 Checklist)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs">
                  <strong>1. Valid Passport:</strong> Minimum 6 months validity from return travel date with at least 2 blank pages.
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs">
                  <strong>2. Return Flight Ticket:</strong> Confirmed round-trip air ticket copy required at immigration desk.
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs">
                  <strong>3. Hotel Accommodation:</strong> Hotel booking vouchers for all travel nights (provided by Trip Customizer).
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs">
                  <strong>4. Sufficient Forex/Card:</strong> Cash ($500 USD equivalent) or Multi-Currency Forex Card for daily expenses.
                </div>
              </div>
            </Card>

          </div>

          {/* Sidebar CTA & Lead Form Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sticky Lead Form Card */}
            <div className="sticky top-24 space-y-6">
              <Card className="p-6 bg-gradient-to-br from-white to-sky-50 border-brand-200 shadow-xl rounded-2xl text-slate-900">
                <div className="flex items-center space-x-2 text-brand-600 text-xs font-black uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" />
                  <span>100% Customized Trips</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">
                  Get Free Custom Quote & Itinerary PDF 📄
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Connect directly with our Senior Travel Desk on WhatsApp or call for customized quotes within 2 hours.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200 mt-4">
                  <a
                    href="https://wa.me/917408763401?text=Hi%20Trip%20Customizer,%20I%20want%20to%20plan%20a%20visa-free%20international%20trip."
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

                <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500 font-bold block">
                    ✓ 5% GST Compliant | 4-Star Hotel Guarantee | 24x7 Assistance
                  </span>
                </div>
              </Card>

              {/* Tourism Board Badges */}
              <Card className="p-5 bg-white border-slate-200 rounded-2xl shadow-sm text-center space-y-2">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">Official Partners</span>
                <p className="text-xs text-slate-700 font-bold">
                  Recommended by Thailand Tourism, Dubai Economy & Tourism, Switzerland Tourism & Singapore Tourism Board.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
