import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Calendar,
  User,
  Clock,
  ChevronRight,
  Globe2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  FileText,
  DollarSign,
  ArrowRight,
  HelpCircle,
  AlertCircle,
  Zap,
} from 'lucide-react';
import { VoaBlogInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 10 Visa on Arrival Countries for Indian Passport Holders in 2026: Rules, Fees & Packages 🛂✈️',
  description:
    'Complete 2026 guide to Visa on Arrival (VoA) countries for Indians: Bali, Thailand, Sri Lanka, Maldives, Seychelles, Mauritius, Kenya & Qatar. Accurate visa fees, document checklist, and customized holiday packages.',
  keywords: [
    'visa on arrival countries for indians 2026',
    'bali visa on arrival cost 2026',
    'thailand visa on arrival rules',
    'sri lanka eta on arrival for indians',
    'maldives visa free on arrival',
    'seychelles visitor permit indians',
    'mauritius visa on arrival',
    'instant visa international trips from india',
    'budget voa packages 2026',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-visa-on-arrival-countries-for-indians-2026',
  },
  openGraph: {
    title: 'Top 10 Visa on Arrival Countries for Indian Passport Holders in 2026 🛂✈️',
    description:
      'Travel abroad without embassy appointments! Discover 10 top Visa on Arrival destinations for Indians with 2026 fees, document requirements, and 4-star packages.',
    url: 'https://www.tripcustomizer.com/blog/top-10-visa-on-arrival-countries-for-indians-2026',
    images: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Visa on Arrival Countries for Indians 2026 | Trip Customizer',
    description: 'Fly abroad with zero embassy hassle. Complete 2026 fees, documents & top holiday packages.',
    images: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralVisaOnArrivalCountriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Visa on Arrival Countries for Indian Passport Holders in 2026: Rules, Fees & Packages 🛂✈️',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Trip Customizer Senior Visa & International Desk',
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
    datePublished: '2026-10-07',
    dateModified: '2026-10-07',
    description:
      'The comprehensive 2026 guide for Indian passport holders traveling on Visa on Arrival (VoA), detailing fees, required paperwork, airport procedures, and curated 4-star vacation packages.',
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
        name: 'Top 10 Visa on Arrival Countries for Indians 2026',
        item: 'https://www.tripcustomizer.com/blog/top-10-visa-on-arrival-countries-for-indians-2026',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the cost of Visa on Arrival for Bali (Indonesia) for Indians in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Indonesia Visa on Arrival (B213) costs 500,000 IDR (~₹2,650 / $35 USD). It can be paid by international credit card or cash upon landing at Ngurah Rai Airport in Denpasar, or applied online via the official e-VoA portal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is visa completely free for Indian tourists in the Maldives?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Indian passport holders receive a complimentary 30-day Tourist Visa on Arrival in the Maldives with zero visa fee. You only need a confirmed resort voucher, return flight tickets, and a submitted IMUGA health declaration.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required for Visa on Arrival at international immigration desks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The universal checklist includes: (1) Passport with minimum 6 months validity from travel date, (2) Confirmed return flight ticket to India or onward destination, (3) Hotel reservation vouchers for entire stay duration, and (4) Proof of sufficient funds (around $50-$100 per day or an active international Forex card).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Visa-Free entry and Visa on Arrival?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visa-Free entry allows you to enter the foreign country directly at immigration with only your passport stamped at zero charge. Visa on Arrival requires you to stop at a dedicated counter before immigration to pay a visa processing fee and present entry vouchers.',
        },
      },
    ],
  };

  const voaDestinations = [
    {
      rank: '01',
      name: 'Bali (Indonesia)',
      type: '30-Day VoA (Extendable once for 30 more days)',
      fee: '500,000 IDR (~₹ 2,650)',
      processingTime: '10 to 15 Minutes at Denpasar Airport',
      stayLimit: '30 Days',
      packagePrice: '₹ 24,999.00',
      highlights:
        'Pay with card or cash at the VoA counter, or apply for an e-VoA beforehand. Private pool villa stays in Seminyak, Ubud monkey forest, and Nusa Penida island speedboat tours.',
      packageUrl: '/holidays/bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '02',
      name: 'Thailand',
      type: 'Visa Exemption / 15-Day VoA Facility',
      fee: 'Free (Under Exemption) / 2,000 THB (~₹ 4,700) for Fast-Track',
      processingTime: 'Instant Entry / 20 mins fast-track',
      stayLimit: '30 to 60 Days',
      packagePrice: '₹ 18,999.00',
      highlights:
        'Thailand continues its historic Indian tourist-friendly entry. Experience Bangkok rooftop dining, Pattaya coral islands, Phuket Phi Phi islands, and world-class street shopping.',
      packageUrl: '/holidays/thailand',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '03',
      name: 'Maldives',
      type: '30-Day Free Tourist Visa on Arrival',
      fee: 'FREE ($0 USD)',
      processingTime: '5 to 10 Minutes at Male Velana Airport',
      stayLimit: '30 Days',
      packagePrice: '₹ 49,999.00',
      highlights:
        'Zero visa fee for all Indian passport holders. Requires confirmed luxury water villa or private resort booking, return flights, and online IMUGA traveler declaration form 96 hours before arrival.',
      packageUrl: '/holidays/maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '04',
      name: 'Sri Lanka',
      type: 'Electronic Travel Authorization (ETA) / VoA',
      fee: 'US $20 to $25 (Fee waivers often announced)',
      processingTime: 'Immediate upon landing at Colombo BIA',
      stayLimit: '30 Days',
      packagePrice: '₹ 21,999.00',
      highlights:
        'Just 1.5 hours flight from Chennai or Bengaluru. Explore Sigiriya Rock Fortress, Nuwara Eliya tea hills, Bentota water sports, and historic Ramayana Trail temples.',
      packageUrl: '/holidays/sri-lanka',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '05',
      name: 'Seychelles',
      type: 'Visitor’s Permit Issued on Arrival',
      fee: 'FREE (Mandatory Env Fee applies)',
      processingTime: '10 Minutes at Mahe Airport',
      stayLimit: 'Up to 30 Days',
      packagePrice: '₹ 59,999.00',
      highlights:
        'Zero visa fee! Indian tourists receive a visitor permit stamp at Mahe International Airport. Experience giant Aldabra tortoises, Anse Source d’Argent granite beaches, and crystal waters.',
      packageUrl: '/holidays/international',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '06',
      name: 'Mauritius',
      type: 'Tourist Visa on Arrival',
      fee: 'FREE ($0 USD)',
      processingTime: '10 to 15 Minutes at Sir Seewoosagur Airport',
      stayLimit: 'Up to 60 Days',
      packagePrice: '₹ 42,500.00',
      highlights:
        'Free 60-day visa on arrival for Indian citizens traveling for holiday. Enjoy scenic catamaran cruises to Ile aux Cerfs, Chamarel Seven Coloured Earth, and luxury beach resort stays.',
      packageUrl: '/destinations/mauritius',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '07',
      name: 'Baku, Azerbaijan',
      type: 'Instant ASAN Visa / Airport VoA for Select Nationalities',
      fee: '$26 USD (~₹ 2,200)',
      processingTime: '15 Minutes via terminal ASAN kiosks',
      stayLimit: '30 Days',
      packagePrice: '₹ 28,999.00',
      highlights:
        'Known as the "Paris of the Caucasus". Seamless terminal e-visa kiosks at Heydar Aliyev Airport. Marvel at Flame Towers, Shahdag snow resort, fire temples, and Caspian Sea boulevards.',
      packageUrl: '/destinations/baku',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '08',
      name: 'Kenya (East Africa)',
      type: 'Electronic Travel Authorisation (eTA) on Arrival',
      fee: 'US $35 (~₹ 2,900)',
      processingTime: 'Instant with confirmed eTA reference',
      stayLimit: '90 Days',
      packagePrice: '₹ 68,500.00',
      highlights:
        'Kenya replaced traditional visas with a simplified digital travel authorization. Witness the Great Migration in the Maasai Mara, Amboseli elephant herds, and Mount Kilimanjaro vistas.',
      packageUrl: '/holidays/international',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '09',
      name: 'Oman (Sultanate of Oman)',
      type: '10-Day Unsponsored Tourist Visa / VoA for GCC or US/UK/Schengen visa holders',
      fee: '5 OMR (~₹ 1,100) to 20 OMR',
      processingTime: '15 Minutes at Muscat International Airport',
      stayLimit: '10 to 30 Days',
      packagePrice: '₹ 38,999.00',
      highlights:
        'Discover Grand Sultan Qaboos Mosque, dramatic desert wadis of Bimmah Sinkhole, Wahiba Sands luxury desert camping, and dolphin-watching yacht cruises.',
      packageUrl: '/holidays/international',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    },
    {
      rank: '10',
      name: 'Qatar',
      type: '30-Day Free Visa Waiver on Arrival',
      fee: 'FREE ($0 USD)',
      processingTime: '10 Minutes at Hamad International Airport (Doha)',
      stayLimit: '30 Days',
      packagePrice: '₹ 34,500.00',
      highlights:
        'Free 30-day visa waiver upon arrival with confirmed hotel reservation via Discover Qatar / approved partner. Explore Souq Waqif, Museum of Islamic Art, and inland sea desert safaris.',
      packageUrl: '/holidays/international',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 text-slate-900 font-sans">
      {/* Structured Data Scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Container>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/blog" className="hover:text-brand-600">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-bold truncate">Top 10 Visa on Arrival Countries for Indians 2026</span>
        </div>

        {/* Hero Article Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 text-slate-900 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-emerald-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
              🛂 COMPLETE 2026 VOA DIRECTORY
            </span>
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" /> Hassle-Free International Travel
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight max-w-4xl">
            Top 10 Visa on Arrival Countries for Indian Passport Holders in 2026:{' '}
            <span className="text-emerald-600 font-black">Fees, Rules & Packages 🛂✈️</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed font-medium">
            Planning a last-minute international holiday without weeks of embassy paperwork? In 2026, Indian citizens can land and get stamped right at the airport in some of the world’s most desirable destinations. Here is your definitive checklist for Visa on Arrival fees, document prerequisites, and customized 4-star holiday packages!
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500 font-semibold">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-900 font-bold">Trip Customizer Visa & Immigration Desk</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Published: Oct 07, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>8 Min Read</span>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative h-72 sm:h-96 lg:h-[480px] w-full rounded-3xl overflow-hidden mb-10 shadow-xl border border-slate-200">
          <Image
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1400&auto=format&fit=crop"
            alt="Bali Indonesia Visa on Arrival for Indians 2026"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-xl">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-1">
                Zero Embassy Hassle 2026
              </span>
              <p className="text-sm sm:text-lg font-bold">
                Land at Bali, Male, Colombo, or Bangkok and complete immigration in under 15 minutes with verified vouchers.
              </p>
            </div>
          </div>
        </div>

        {/* Universal VoA Document Checklist */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-lg border border-indigo-700/50">
          <h2 className="text-lg sm:text-2xl font-black text-emerald-400 mb-2 flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-400" /> Universal Document Checklist for Visa on Arrival
          </h2>
          <p className="text-xs text-slate-300 mb-6">
            Keep these 4 physical documents printed in your carry-on luggage before boarding your flight from India:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs border border-white/10 space-y-1">
              <div className="text-emerald-400 font-black text-sm">1. Valid Passport</div>
              <p className="text-slate-300">Minimum 6 months validity from return date + 2 blank pages.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs border border-white/10 space-y-1">
              <div className="text-emerald-400 font-black text-sm">2. Return Air Tickets</div>
              <p className="text-slate-300">Confirmed departure ticket back to India or next international stop.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs border border-white/10 space-y-1">
              <div className="text-emerald-400 font-black text-sm">3. Hotel Vouchers</div>
              <p className="text-slate-300">Printed confirmed hotel reservations for all nights of stay.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs border border-white/10 space-y-1">
              <div className="text-emerald-400 font-black text-sm">4. Sufficient Funds</div>
              <p className="text-slate-300">Forex card or international debit card + $300-$500 cash in USD.</p>
            </div>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="space-y-12">
          {voaDestinations.map((dest) => (
            <Card
              key={dest.rank}
              className="p-6 sm:p-8 bg-white border-slate-200 shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-emerald-400 font-black text-sm px-3 py-1 rounded-full border border-emerald-400/40">
                    Rank {dest.rank}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-emerald-950/90 text-white font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Fee: {dest.fee.split('(')[0]}</span>
                  </div>
                </div>

                {/* Country Editorial */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                        {dest.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-0.5">{dest.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-slate-500 block">Package Starting At</span>
                      <span className="text-lg sm:text-xl font-black text-brand-600">{dest.packagePrice}</span>
                      <span className="text-[10px] text-slate-400 block font-medium">per person</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <div>
                      <span className="text-slate-500 font-medium">Processing Time: </span>
                      <strong className="text-slate-900">{dest.processingTime}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Permitted Stay: </span>
                      <strong className="text-slate-900">{dest.stayLimit}</strong>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Travel & Visa Insights
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {dest.highlights}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link href={dest.packageUrl} className="flex-1 min-w-[200px]">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2">
                        <span>Explore {dest.name.split('(')[0].trim()} Packages</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20Trip%20Customizer%2C%20I%20want%20help%20with%20Visa%20on%20Arrival%20and%20international%20tour%20package"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>WhatsApp Help</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Inquiry Form */}
        <div className="my-14">
          <VoaBlogInquiryForm defaultDestination="Bali Indonesia (30-Day VoA) 6D/5N" />
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-3xl font-black text-slate-950 mb-6 flex items-center gap-2">
            <HelpCircle className="w-7 h-7 text-emerald-600" />
            Frequently Asked Questions (Visa on Arrival 2026)
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                What is the cost of Visa on Arrival for Bali (Indonesia) for Indians in 2026?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                The Indonesia Visa on Arrival (B213) costs 500,000 IDR (~₹2,650 / $35 USD). It can be paid by international credit card or cash upon landing at Ngurah Rai Airport in Denpasar, or applied online via the official e-VoA portal.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                Is visa completely free for Indian tourists in the Maldives?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Yes! Indian passport holders receive a complimentary 30-day Tourist Visa on Arrival in the Maldives with zero visa fee. You only need a confirmed resort voucher, return flight tickets, and a submitted IMUGA health declaration.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                What documents are required for Visa on Arrival at international immigration desks?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                The universal checklist includes: (1) Passport with minimum 6 months validity from travel date, (2) Confirmed return flight ticket to India or onward destination, (3) Hotel reservation vouchers for entire stay duration, and (4) Proof of sufficient funds (around $50-$100 per day or an active international Forex card).
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-black text-sm text-slate-900">
                What is the difference between Visa-Free entry and Visa on Arrival?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Visa-Free entry allows you to enter the foreign country directly at immigration with only your passport stamped at zero charge. Visa on Arrival requires you to stop at a dedicated counter before immigration to pay a visa processing fee and present entry vouchers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black mb-3">
            Fly to Bali, Sri Lanka or Thailand This Month! 🛂
          </h2>
          <p className="text-xs sm:text-base text-emerald-100 max-w-2xl mx-auto mb-6">
            Get your instant Visa on Arrival assistance package complete with flight tickets, 4-star hotel vouchers, airport transfers, and 24x7 support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/holidays/international">
              <Button className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm px-8 py-3 rounded-2xl shadow-lg">
                View All International Packages
              </Button>
            </Link>
            <Link href="/visa">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold text-sm px-8 py-3 rounded-2xl">
                Check Country-Wise Visa Guide
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
