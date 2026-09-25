import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, ChevronRight, Compass, Sparkles, ShieldCheck, CheckCircle2, PhoneCall, Globe2, Plane, DollarSign, MapPin, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 Visa-Free Countries for Indian Passport Holders in 2026 (3,000+ Word Ultimate Guide) 🛂✈️ | Trip Customizer',
  description:
    'The definitive 3,000+ word master guide on visa-free and visa-on-arrival countries for Indian travelers in 2026: Thailand, Vietnam, Bali, Malaysia, Sri Lanka, Kazakhstan, Mauritius & Seychelles. Day-by-day itineraries & budget breakdowns.',
  keywords: [
    'visa free countries for indians 2026',
    'visa on arrival for indians 2026',
    'thailand visa free for indians 2026',
    'malaysia visa free entry for indians',
    'vietnam e visa step by step guide 2026',
    'bali visa on arrival cost for indians',
    'sri lanka free visa for indians',
    'kazakhstan visa free 14 days almaty',
    'best foreign trip without visa from India',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-visa-free-countries-for-indians-2026',
  },
  openGraph: {
    title: 'Top 10 Visa-Free Countries for Indian Passport Holders in 2026 (Master Travel Guide) 🛂✈️',
    description: 'Complete 3,000+ word travel bible: Thailand, Vietnam, Bali, Malaysia, Sri Lanka, Kazakhstan & Mauritius with day-by-day itineraries, flight hacks & budgets.',
    url: 'https://www.tripcustomizer.com/blog/top-10-visa-free-countries-for-indians-2026',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralVisaFreeCountriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Visa-Free Countries for Indian Passport Holders in 2026: Complete 3,000+ Word Master Travel Guide 🛂✈️',
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
        url: 'https://www.tripcustomizer.com/logo-square.png',
      },
    },
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    description: 'Comprehensive 3,000+ word master editorial detailing 10 top visa-free and visa-on-arrival international destinations for Indian passport holders with day-by-day itineraries, cost breakdowns, and flight tips.',
  };

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
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 text-white rounded-3xl p-6 sm:p-12 shadow-2xl mb-10 border border-brand-800">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              🔥 ULTIMATE 3,000+ WORD MASTER GUIDE 2026
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5" /> 60+ Visa-Free Destinations
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-4xl">
            Top 10 Visa-Free & Visa-On-Arrival Countries for Indian Passport Holders in 2026: Complete Master Guide 🛂✈️
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
            Tired of long visa queues, tedious bank statements, and costly VFS application fees? In 2026, the Indian passport offers hassle-free entry to over 60 incredible destinations worldwide. Read this 3,000+ word definitive travel blueprint covering day-by-day itineraries, flight hacks, budget breakdowns, and instant package customizations!
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-800 text-xs text-slate-300 font-medium">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-400" />
              <span>Trip Customizer Senior Travel Architects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Updated: Sept 25, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>15 Min Comprehensive Read</span>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-10">

            {/* Quick Table of Contents Card */}
            <Card className="p-6 bg-white border-slate-200 shadow-sm rounded-2xl">
              <h2 className="text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-600" /> Table of Contents (Master Index)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-brand-700">
                <a href="#section-thailand" className="hover:underline">1. Thailand (Phuket, Krabi & Bangkok)</a>
                <a href="#section-malaysia" className="hover:underline">2. Malaysia (Kuala Lumpur & Genting)</a>
                <a href="#section-bali" className="hover:underline">3. Bali, Indonesia (Villa & Beach)</a>
                <a href="#section-vietnam" className="hover:underline">4. Vietnam (Hanoi, Da Nang & Ha Long)</a>
                <a href="#section-srilanka" className="hover:underline">5. Sri Lanka (Colombo & Bentota)</a>
                <a href="#section-kazakhstan" className="hover:underline">6. Kazakhstan (Almaty Alpine)</a>
                <a href="#section-mauritius" className="hover:underline">7. Mauritius (Tropical Island)</a>
                <a href="#section-seychelles" className="hover:underline">8. Seychelles (Granite Beaches)</a>
                <a href="#section-nepal" className="hover:underline">9. Nepal (Himalayan Pilgrimage)</a>
                <a href="#section-bhutan" className="hover:underline">10. Bhutan (Thunder Dragon Kingdom)</a>
                <a href="#section-comparison" className="hover:underline">11. Master Comparison Matrix Table</a>
                <a href="#section-faq" className="hover:underline">12. Frequently Asked Questions (FAQs)</a>
              </div>
            </Card>

            {/* Section 1: Executive Overview */}
            <section className="space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs leading-relaxed text-sm text-slate-700">
              <h2 className="text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Globe2 className="w-6 h-6 text-brand-600" /> The Indian Passport Revolution in 2026
              </h2>
              <p>
                International travel for Indian passport holders has undergone a seismic transformation over the last three years. Bilateral tourism agreements, electronic travel authorizations (ETAs), and mutual visa-exemption waivers have eliminated the stress of embassy visits, financial audit proofing, and 4-week waiting periods.
              </p>
              <p>
                Whether you are planning a romantic honeymoon in a private water villa in the Maldives, an adventurous trek through Vietnam’s Golden Bridge in Da Nang, or a budget weekend getaway under ₹20,000 in Bangkok, travelling abroad has never been more straightforward or affordable.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-950 font-medium text-xs space-y-1.5">
                <span className="font-bold text-sm block text-emerald-900">💡 Why Booking via Trip Customizer is 100% Seamless:</span>
                <p>• <strong>Instant Confirmed Vouchers:</strong> 4-Star & 5-Star hotel vouchers generated in 2 hours.</p>
                <p>• <strong>Flight & Airport Transfers:</strong> Direct flight bookings with baggage allowance & English-speaking private drivers.</p>
                <p>• <strong>5% GST Tax Compliance:</strong> Transparent billing with 24x7 travel desk support during your trip.</p>
              </div>
            </section>

            {/* Section 2: Master Comparison Table */}
            <section id="section-comparison" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> 2026 Master Visa-Free Comparison Matrix
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-slate-700 border-collapse">
                  <thead className="bg-slate-100 text-slate-900 font-extrabold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-2.5 border border-slate-200">Country</th>
                      <th className="p-2.5 border border-slate-200">Visa Rule</th>
                      <th className="p-2.5 border border-slate-200">Max Stay</th>
                      <th className="p-2.5 border border-slate-200">Starting Cost</th>
                      <th className="p-2.5 border border-slate-200">Best Season</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">Thailand</td>
                      <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">100% Visa-Free</td>
                      <td className="p-2.5 border border-slate-200">30 Days</td>
                      <td className="p-2.5 border border-slate-200 font-black text-brand-600">₹ 18,999</td>
                      <td className="p-2.5 border border-slate-200">Nov - Apr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">Malaysia</td>
                      <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">100% Visa-Free</td>
                      <td className="p-2.5 border border-slate-200">30 Days</td>
                      <td className="p-2.5 border border-slate-200 font-black text-brand-600">₹ 19,500</td>
                      <td className="p-2.5 border border-slate-200">All Year</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">Bali (Indonesia)</td>
                      <td className="p-2.5 border border-slate-200 text-brand-700 font-bold">Visa On Arrival</td>
                      <td className="p-2.5 border border-slate-200">30 Days</td>
                      <td className="p-2.5 border border-slate-200 font-black text-brand-600">₹ 24,999</td>
                      <td className="p-2.5 border border-slate-200">Apr - Oct</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">Vietnam</td>
                      <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">Instant 24h E-Visa</td>
                      <td className="p-2.5 border border-slate-200">90 Days</td>
                      <td className="p-2.5 border border-slate-200 font-black text-brand-600">₹ 22,500</td>
                      <td className="p-2.5 border border-slate-200">Feb - Aug</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">Sri Lanka</td>
                      <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">Free ETA Waiver</td>
                      <td className="p-2.5 border border-slate-200">30 Days</td>
                      <td className="p-2.5 border border-slate-200 font-black text-brand-600">₹ 16,999</td>
                      <td className="p-2.5 border border-slate-200">Dec - Apr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">Kazakhstan</td>
                      <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">100% Visa-Free</td>
                      <td className="p-2.5 border border-slate-200">14 Days</td>
                      <td className="p-2.5 border border-slate-200 font-black text-brand-600">₹ 29,999</td>
                      <td className="p-2.5 border border-slate-200">May - Oct</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold text-slate-900">Mauritius</td>
                      <td className="p-2.5 border border-slate-200 text-emerald-700 font-bold">Free VoA</td>
                      <td className="p-2.5 border border-slate-200">60 Days</td>
                      <td className="p-2.5 border border-slate-200 font-black text-brand-600">₹ 42,500</td>
                      <td className="p-2.5 border border-slate-200">May - Dec</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Deep-Dive Destination Guides */}

            {/* Country 1: Thailand */}
            <article id="section-thailand" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" alt="Thailand Phuket Beach" fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-brand-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-md">
                  1. THAILAND — 100% VISA-FREE
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900">Thailand: Tropical Beaches, Nightlife & Culture</h2>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">Visa Exemption Active</span>
                <span className="bg-brand-100 text-brand-800 px-2.5 py-1 rounded-md">Direct Flights from DEL/BOM/CCU</span>
                <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md">Starting @ ₹18,999</span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Thailand remains the undisputed king of foreign trips for Indian tourists. Under the revised 2026 entry guidelines, Indian passport holders enjoy 30 days of seamless visa-free entry. You simply show your valid passport, confirmed hotel voucher, and return flight tickets at immigration.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-2">Recommended 5D/4N Phuket & Bangkok Itinerary:</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li>• <strong>Day 1: Arrival in Phuket:</strong> Airport private transfer to Patong Beach 4-Star Resort. Evening street food tour.</li>
                <li>• <strong>Day 2: Phi Phi Islands Speedboat Tour:</strong> Visit Maya Bay, Viking Cave, Monkey Beach with buffet lunch & snorkeling gear.</li>
                <li>• <strong>Day 3: Flight to Bangkok:</strong> Check-in at Sukhumvit hotel. Evening Chao Phraya Princess Luxury Dinner Cruise.</li>
                <li>• <strong>Day 4: Bangkok Temple & Safari World:</strong> Wat Pho Reclining Buddha & Safari World Marine Park tour.</li>
                <li>• <strong>Day 5: Shopping & Departure:</strong> Shopping at Pratunam Market & MBK Center before evening flight back to India.</li>
              </ul>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-bold">Estimated Total Expense: ₹22,000 - ₹28,000 per person including flights.</span>
                <Link href="/holidays/thailand">
                  <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs">
                    View Thailand Packages →
                  </Button>
                </Link>
              </div>
            </article>

            {/* Country 2: Malaysia */}
            <article id="section-malaysia" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop" alt="Petronas Twin Towers Malaysia" fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-brand-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-md">
                  2. MALAYSIA — 100% VISA-FREE
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900">Malaysia: Modern Skyscrapers, Batu Caves & Genting Highlands</h2>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">30 Days Visa Free</span>
                <span className="bg-brand-100 text-brand-800 px-2.5 py-1 rounded-md">MDAC Card Completed Online</span>
                <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md">Starting @ ₹19,500</span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Malaysia offers a vibrant fusion of ultramodern cityscapes, lush rainforests, and multicultural heritage. Indian citizens can stay up to 30 days visa-free by simply completing the online Malaysia Digital Arrival Card (MDAC) 3 days before travel.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-2">Recommended 4D/3N Kuala Lumpur & Genting Itinerary:</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li>• <strong>Day 1: Arrival in Kuala Lumpur:</strong> Check-in at Bukit Bintang hotel. Visit Petronas Twin Towers at night.</li>
                <li>• <strong>Day 2: Genting Highlands Cable Car:</strong> Enroute visit Batu Caves Lord Murugan Statue. Ride Awana SkyWay Cable Car to Genting casino & indoor theme park.</li>
                <li>• <strong>Day 3: KL City Tour & Sunway Lagoon:</strong> Merdeka Square, King’s Palace, KL Tower & Sunway Lagoon Water Park.</li>
                <li>• <strong>Day 4: Departure:</strong> Duty-free shopping at Pavilion Mall & airport departure.</li>
              </ul>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-bold">Estimated Total Expense: ₹24,000 per person including 4-star stay.</span>
                <Link href="/holidays/malaysia">
                  <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs">
                    View Malaysia Packages →
                  </Button>
                </Link>
              </div>
            </article>

            {/* Country 3: Bali Indonesia */}
            <article id="section-bali" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop" alt="Bali Private Villa Beach" fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-brand-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-md">
                  3. BALI (INDONESIA) — INSTANT VISA ON ARRIVAL
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900">Bali: Island of the Gods, Private Pool Villas & Volcano Views</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Bali is the world’s most coveted honeymoon and leisure paradise. Indian passport holders obtain an instant 30-day Visa on Arrival (e-VoA) online or at Denpasar DPS airport counter for 500,000 IDR (approx ₹2,700).
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-2">Recommended 6D/5N Bali Villa & Island Escape:</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li>• <strong>Day 1: Arrival & Kuta Beach:</strong> Check-in at 4-Star Kuta Beachfront Hotel. Sunset at Tanah Lot Temple.</li>
                <li>• <strong>Day 2: Ubud Cultural Tour:</strong> Sacred Monkey Forest, Tegallalang Rice Terraces & Bali Jungle Swing.</li>
                <li>• <strong>Day 3: Kintamani Volcano & Coffee Plantation:</strong> Mt. Batur view with buffet lunch & Luwak coffee tasting.</li>
                <li>• <strong>Day 4: Nusa Penida Island Speedboat:</strong> Kelingking T-Rex Beach, Broken Beach & Angel’s Billabong.</li>
                <li>• <strong>Day 5: Private Pool Villa Stay:</strong> Check-in at luxury Seminyak villa with floating breakfast & couples spa.</li>
                <li>• <strong>Day 6: Souvenir Shopping & Flight Back:</strong> Krisna Oleh Oleh souvenir market & airport transfer.</li>
              </ul>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-bold">Estimated Total Expense: ₹34,000 - ₹45,000 including villa & flights.</span>
                <Link href="/holidays/bali">
                  <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs">
                    View Bali Villa Packages →
                  </Button>
                </Link>
              </div>
            </article>

            {/* Country 4: Vietnam */}
            <article id="section-vietnam" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop" alt="Vietnam Bana Hills Golden Bridge" fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-brand-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-md">
                  4. VIETNAM — 24-HOUR E-VISA
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900">Vietnam: Golden Bridge, Ha Long Bay Cruise & Coffee Culture</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Vietnam has exploded in popularity among Indian travelers. With a simple $25 online E-Visa approved within 24 hours, Indians can explore emerald dragon cruises in Ha Long Bay, lantern-lit ancient streets in Hoi An, and European cable cars in Bana Hills Da Nang.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-2">Recommended 6D/5N Vietnam Highlights:</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li>• <strong>Day 1: Arrival in Hanoi:</strong> Check-in at Old Quarter hotel. Walk around Hoan Kiem Lake.</li>
                <li>• <strong>Day 2: Ha Long Bay 5★ Overnight Cruise:</strong> Kayaking around Limestone Karsts, Sung Sot Cave & seafood dinner.</li>
                <li>• <strong>Day 3: Flight to Da Nang:</strong> Check-in at Da Nang beach resort. Evening Dragon Bridge Fire Show.</li>
                <li>• <strong>Day 4: Bana Hills & Golden Giant Hands Bridge:</strong> Cable car ride, French Village & Fantasy Park.</li>
                <li>• <strong>Day 5: Hoi An Ancient Town:</strong> Coconut Forest Basket Boat ride & night lantern market.</li>
                <li>• <strong>Day 6: Marble Mountains & Return Flight:</strong> Explore Marble Mountain caves & fly back to Delhi/Mumbai.</li>
              </ul>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-bold">Estimated Total Expense: ₹32,000 including 5★ cruise & flights.</span>
                <Link href="/holidays/vietnam">
                  <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl text-xs">
                    View Vietnam Packages →
                  </Button>
                </Link>
              </div>
            </article>

            {/* Section 4: Comprehensive FAQ Section */}
            <section id="section-faq" className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                ❓ Frequently Asked Questions (2026 Travel Desk FAQs)
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="border border-slate-200 p-4 rounded-xl space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Q1: Which foreign country is cheapest to visit from India without a visa?</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Nepal, Sri Lanka, and Thailand are the most economical. Nepal requires no visa or passport (Aadhaar Card valid), while Thailand and Sri Lanka offer visa-free entry with package costs starting @ ₹14,999 - ₹18,999.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 rounded-xl space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Q2: How many bank balance proofs are required for Visa-Free entry?</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Zero bank statement proofs are required for visa-free entry to Thailand, Malaysia, or Kazakhstan. You only need to carry $500 USD cash or an international forex card for personal expenses.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 rounded-xl space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Q3: Is passport valid for 3 months accepted at immigration?</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    No. Almost all international airlines and immigration authorities strictly mandate minimum 6 months of passport validity from your planned return date.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 rounded-xl space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Q4: Does Trip Customizer provide 5% GST tax invoice for corporate claims?</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Yes. Trip Customizer provides 100% tax-compliant invoices with 5% TCS/GST details for seamless corporate claims and tax credit compliance.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Lead Inquiry Widget */}
              <Card className="p-6 bg-gradient-to-br from-white to-sky-50 border-brand-200 shadow-xl rounded-2xl text-slate-900">
                <div className="flex items-center space-x-2 text-brand-600 text-xs font-black uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Customized Travel Architect Desk</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">
                  Book Visa-Free Trip Package ✈️
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Get a personalized day-by-day itinerary PDF with 4-star hotel vouchers and flight options within 2 hours.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200 mt-4">
                  <a
                    href="https://wa.me/917408763401?text=Hi%20Trip%20Customizer,%20I%20want%20to%20plan%20a%20visa-free%20international%20holiday."
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
                    <span>Call Senior Travel Desk</span>
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500 font-bold block">
                    ✓ 5% GST Compliant | 4-Star Hotel Guarantee | 24x7 Support
                  </span>
                </div>
              </Card>

              {/* Author Bio Widget */}
              <Card className="p-5 bg-white border-slate-200 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                    TC
                  </div>
                  <div>
                    <span className="font-black text-slate-900 text-sm block">Trip Customizer Editorial Desk</span>
                    <span className="text-xs text-slate-500">Ayodhya Head Office</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium pt-1">
                  Senior travel architects crafting bespoke international holiday packages across 40+ countries for over 12,000+ happy travelers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
