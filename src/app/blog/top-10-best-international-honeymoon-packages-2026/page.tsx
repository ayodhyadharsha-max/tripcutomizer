import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Heart, Sparkles, MapPin, Calendar, CheckCircle2, ArrowRight, Star, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 Best International Honeymoon Packages 2026: Bali, Maldives, Dubai & Europe | Trip Customizer',
  description: 'Book customized international honeymoon tour packages across 40+ countries. 4-Star hotels, private pool villas, flights, visa assistance, 5% GST compliance, and 24x7 travel desk support.',
  keywords: [
    'customized bali honeymoon package with private pool villa',
    'maldives luxury water villa honeymoon package price',
    'dubai 5 days luxury package with desert safari price',
    'budget thailand tour package for couple under 50k',
    'vietnam customized itinerary 7 days package',
    'baku azerbaijan 5 days tour package from delhi',
    'europe tour packages 10 days customized',
    'best international honeymoon packages 2026',
    'Trip Customizer honeymoon deals',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-best-international-honeymoon-packages-2026',
  },
  openGraph: {
    title: 'Top 10 Best International Honeymoon Packages 2026 | Trip Customizer',
    description: 'Explore romantic honeymoon itineraries for Bali, Maldives, Dubai, Vietnam & Europe with private pool villas & candle light dinners.',
    url: 'https://www.tripcustomizer.com/blog/top-10-best-international-honeymoon-packages-2026',
    siteName: 'Trip Customizer',
    images: [{ url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop' }],
    type: 'article',
  },
};

export default function HoneymoonPackagesBlogPage() {
  const honeymoonPackages = [
    {
      name: 'Customized Bali Honeymoon Package with Private Pool Villa',
      slug: 'bali',
      price: '₹34,500',
      duration: '6 Days / 5 Nights',
      highlights: ['Private Pool Villa in Ubud', 'Romantic Candlelight Dinner on Jimbaran Beach', 'Floating Breakfast & Water Sports', 'Sunset Tanah Lot Temple Tour'],
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      tag: '🔥 #1 Trending Choice',
    },
    {
      name: 'Maldives Luxury Water Villa Honeymoon Extravaganza',
      slug: 'maldives',
      price: '₹68,000',
      duration: '5 Days / 4 Nights',
      highlights: ['Overwater Bungalow Stay with Ocean Access', 'All-Inclusive Meals & Premium Drinks', 'Sunset Dolphin Cruise & Snorkeling', 'Couple Spa Session & Floating Tray'],
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop',
      tag: '💎 Pure Luxury',
    },
    {
      name: 'Dubai 5 Days Luxury Package with Desert Safari',
      slug: 'dubai',
      price: '₹34,500',
      duration: '5 Days / 4 Nights',
      highlights: ['4-Star Deluxe Skyline Hotel Stay', 'VIP Desert Safari with BBQ Dinner & Belly Dance', 'Burj Khalifa 124th Floor Observation Deck', 'Marina Dhow Dinner Cruise with Transfers'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      tag: '✨ Best Seller',
    },
    {
      name: 'Budget Thailand Tour Package for Couple Under 50k',
      slug: 'thailand',
      price: '₹22,999',
      duration: '5 Days / 4 Nights',
      highlights: ['Phuket Beach Resort & Krabi Island Hopping', 'Phi Phi Islands Speedboat Tour with Lunch', 'Phuket Fantasea Show & Night Markets', 'Visa-Free Entry Assistance'],
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
      tag: '🏷️ High ROI Budget',
    },
    {
      name: 'Vietnam Customized Itinerary 7 Days Romantic Package',
      slug: 'vietnam',
      price: '₹38,500',
      duration: '7 Days / 6 Nights',
      highlights: ['Ha Long Bay Luxury Overnight Cruise Stay', 'Hanoi Old Quarter & Ninh Binh Bamboo Boat', 'Da Nang Golden Bridge & Ba Na Hills Cable Car', 'Romantic Lantern Boat Ride in Hoi An'],
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop',
      tag: '🌿 Trending 2026',
    },
    {
      name: 'Azerbaijan Baku 5 Days Tour Package from Delhi',
      slug: 'baku',
      price: '₹28,500',
      duration: '5 Days / 4 Nights',
      highlights: ['Baku Old City (Icherisheher) & Flame Towers', 'Gobustan Mud Volcanoes & Fire Mountain (Yanar Dag)', 'Shahdag Mountain Resort Cable Car Ride', 'Nizami Street Shopping & Café Crawl'],
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop',
      tag: '🏔️ European Vibe Under Budget',
    },
    {
      name: 'Europe Tour Packages 10 Days Customized Romance',
      slug: 'europe',
      price: '₹1,25,000',
      duration: '10 Days / 9 Nights',
      highlights: ['Paris Seine River Cruise & Eiffel Tower Visit', 'Swiss Alps & Mt. Titlis Cable Car with Snow Fun', 'Venice Gondola Ride & Rome Colosseum Tour', 'Eurail Pass Included & Schengen Visa Desk'],
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
      tag: '🏰 Ultimate Grand Romance',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best international honeymoon destination under 50k for couples from India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bali, Thailand, and Vietnam are the top international honeymoon destinations under ₹50,000 per couple. Trip Customizer offers 5-day Thailand packages starting @ ₹22,999 and 6-day Bali packages with private pool villas starting @ ₹34,500 per person with 5% GST tax compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the Bali honeymoon package with private pool villa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trip Customizer Bali honeymoon packages include 4-star resort stay with private pool villa in Ubud, Jimbaran beach candlelight dinner, floating breakfast, Kintamani volcano tour, Tanah Lot temple sunset visit, and 24x7 travel desk support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are flight tickets and visa assistance included in international honeymoon packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All Trip Customizer international honeymoon packages offer optional flight inclusions, 100% visa assistance (including visa-free & visa-on-arrival guidance for Thailand, Bali, Vietnam, Azerbaijan & Maldives), 4-star hotel stays, and private airport transfers.',
        },
      },
    ],
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Top 10 Best International Honeymoon Packages 2026: Bali, Maldives, Dubai & Europe',
    description: 'Book customized international honeymoon tour packages across 40+ countries with 4-star hotels, private pool villas, flights, and 24x7 travel desk support.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    author: { '@type': 'Organization', name: 'Trip Customizer Travel Desk' },
    publisher: {
      '@type': 'Organization',
      name: 'Trip Customizer',
      logo: { '@type': 'ImageObject', url: 'https://www.tripcustomizer.com/logo.png' },
    },
    datePublished: '2026-09-24',
    dateModified: '2026-09-24',
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14 shadow-lg">
        <Container>
          <div className="max-w-3xl space-y-3">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider inline-block">
              💑 Ultimate Couples Guide 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Top 10 Best International Honeymoon Packages for 2026
            </h1>
            <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed">
              Plan your dream romantic getaway across Bali, Maldives, Dubai, Vietnam, Baku & Europe. 4-Star luxury hotel stays, private pool villas, candlelit dinners & 100% GST compliance.
            </p>
            <div className="flex items-center space-x-4 pt-2 text-xs text-slate-400 font-semibold">
              <span>By Trip Customizer Senior Travel Desk</span>
              <span>•</span>
              <span>Updated: Sept 24, 2026</span>
              <span>•</span>
              <span className="text-amber-400 font-bold">⭐ 4.9/5 Rating (1,240+ Couples Reviews)</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content Grid */}
      <Container className="mt-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Top Honeymoon Packages */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Why Book International Honeymoon Packages with Trip Customizer?</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Your honeymoon should be a once-in-a-lifetime experience without budgeting stress. <strong>Trip Customizer</strong> provides 100% transparent pricing, 5% Govt. Tour Service GST compliance, 24x7 personal concierge desk, and guaranteed 4-Star & 5-Star resort stays with private pool options.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs font-bold pt-2">
                <div className="p-3 bg-brand-50 rounded-2xl border border-brand-100 text-brand-900">
                  <span className="block text-lg font-black text-brand-600">40+</span>
                  <span className="text-[10px]">Destinations</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-900">
                  <span className="block text-lg font-black text-emerald-600">5%</span>
                  <span className="text-[10px]">GST Tax Compliant</span>
                </div>
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 text-amber-900">
                  <span className="block text-lg font-black text-amber-600">24x7</span>
                  <span className="text-[10px]">Concierge Support</span>
                </div>
                <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-purple-900">
                  <span className="block text-lg font-black text-purple-600">100%</span>
                  <span className="text-[10px]">Customizable</span>
                </div>
              </div>
            </div>

            {/* Package Cards List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Featured International Romantic Itineraries
              </h2>

              {honeymoonPackages.map((pkg, idx) => (
                <Card key={idx} className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-slate-100">
                    <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-amber-400 text-xs font-black px-3 py-1 rounded-full border border-amber-400/30">
                      {pkg.tag}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 leading-snug">{pkg.name}</h3>
                      <p className="text-xs text-slate-500 font-semibold mt-1 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-brand-600" />
                        <span>{pkg.duration}</span>
                        <span>•</span>
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span className="capitalize">{pkg.slug}</span>
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Starting @</span>
                      <span className="text-xl font-black text-brand-700">{pkg.price}</span>
                      <span className="text-[9px] text-emerald-600 font-bold block">per person</span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5 text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-1">Package Highlights:</span>
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link href={`/holidays/${pkg.slug}`}>
                      <Button variant="accent" size="md" className="font-black text-xs text-slate-950 px-5">
                        BOOK THIS PACKAGE →
                      </Button>
                    </Link>
                    <Link href={`/booking/checkout?slug=${pkg.slug}&price=${pkg.price.replace(/[^\d]/g, '')}`} className="text-xs font-bold text-brand-600 hover:underline">
                      Customize Itinerary →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="text-xl font-black text-slate-900">Frequently Asked Questions (Honeymoon Packages 2026)</h2>
              <div className="space-y-4 text-xs md:text-sm text-slate-700">
                <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Q1. Which is the best international honeymoon destination under 50k?</h3>
                  <p className="text-slate-600">
                    Bali, Thailand, and Vietnam are the top choices under ₹50,000 per couple. Trip Customizer offers 5-day Thailand packages starting @ ₹22,999 and 6-day Bali packages with private pool villas starting @ ₹34,500.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Q2. What is included in the Bali Honeymoon Private Pool Villa Package?</h3>
                  <p className="text-slate-600">
                    Our Bali package includes 4-star resort stay with private pool villa in Ubud, Jimbaran beach candlelight dinner, floating breakfast, Kintamani volcano tour, and 24x7 travel desk support.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Q3. How can I book with 5% GST compliance and instant Razorpay payment?</h3>
                  <p className="text-slate-600">
                    You can book directly on our website via Razorpay Standard Checkout (UPI, GPay, Credit/Debit Cards, NetBanking). All transactions receive an instant GST invoice and e-voucher.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Booking Form & Lead Capture */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <Card className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-lg space-y-4">
              <div className="text-center space-y-1">
                <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full inline-block uppercase tracking-wider">
                  24x7 Custom Honeymoon Desk
                </span>
                <h3 className="text-lg font-black text-slate-900">Get Free Custom Quote</h3>
                <p className="text-xs text-slate-500">Instant response within 15 minutes on WhatsApp</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl space-y-3 text-xs">
                <div className="flex items-center space-x-2 text-slate-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Travel Architects</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-800 font-bold">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>4.9/5 Rating (1,240+ Couples)</span>
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=917408763401&text=Hi%20Trip%20Customizer%2C%20I%20want%20to%20book%20a%20Customized%20International%20Honeymoon%20Package."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 rounded-2xl flex items-center justify-center space-x-2 text-xs shadow-md transition-all block text-center"
              >
                <span>💬 CHAT ON WHATSAPP (+91 7408763401)</span>
              </a>

              <Link href="/booking/checkout" className="block">
                <Button variant="accent" size="lg" className="w-full font-black py-3.5 text-xs text-slate-950">
                  BOOK DIRECTLY ON CHECKOUT →
                </Button>
              </Link>
            </Card>

            <div className="p-6 bg-gradient-to-br from-slate-900 to-brand-950 rounded-3xl text-white space-y-3 text-xs shadow-md">
              <h4 className="font-black text-sm text-amber-300">🔒 Official PCI DSS & Razorpay Partner</h4>
              <p className="text-slate-300 leading-relaxed font-medium">
                Trip Customizer is an authorized travel commerce platform compliant with 5% Govt. Tour Service GST guidelines and PCI-DSS 256-Bit SSL payment security standards.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
