import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, ChevronRight, Compass, Sparkles, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { BlogInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 10 Budget International Holiday Packages Under ₹30,000 (Visa-Free for Indians) ✈️ | Trip Customizer',
  description:
    'Discover the top 10 international destinations under ₹30,000 for Indian travelers. Includes Thailand, Bali, Vietnam, Malaysia, Baku Azerbaijan & Dubai with flights, 4-star hotels & 24x7 expert support.',
  keywords: [
    'Thailand tour packages under 30000',
    'Bali honeymoon package under 30k',
    'Vietnam tour packages for indians',
    'Malaysia holiday package',
    'Dubai tour packages from India',
    'Baku Azerbaijan tour packages',
    'budget international trip from India',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-budget-international-trips-under-30k',
  },
  openGraph: {
    title: 'Top 10 Budget International Holiday Packages Under ₹30,000 ✈️',
    description: 'Book customized international trips to Bali, Thailand, Vietnam, Malaysia & Dubai starting @ ₹16,500 with Trip Customizer.',
    url: 'https://www.tripcustomizer.com/blog/top-10-budget-international-trips-under-30k',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralBudgetTripPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Budget International Holiday Packages Under ₹30,000 (Visa-Free for Indians) ✈️',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    author: {
      '@type': 'Person',
      name: 'Senior Travel Desk',
      url: 'https://www.tripcustomizer.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trip Customizer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tripcustomizer.com/logo.png',
      },
    },
    datePublished: '2026-09-20',
    dateModified: '2026-09-20',
    description: 'Definitive 2026 guide for budget international holidays under ₹30,000 from India with 4-star hotels, flights, and instant lead inquiry desk.',
  };

  const destinations = [
    {
      name: '1. Thailand (Phuket & Bangkok)',
      price: '₹ 18,999.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Phi Phi Island Speedboat Tour, Alcazar Show & 4-Star Beach Resort',
      visaStatus: 'Visa-Free Entry for Indians',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      slug: 'thailand',
    },
    {
      name: '2. Bali, Indonesia',
      price: '₹ 24,999.00',
      duration: '6 Days / 5 Nights',
      highlights: 'Private Pool Villa, Kintamani Volcano & Nusa Penida Island Speedboat',
      visaStatus: 'Visa On Arrival (30 Days)',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      slug: 'bali',
    },
    {
      name: '3. Vietnam (Hanoi & Da Nang)',
      price: '₹ 22,500.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Bana Hills Golden Hand Bridge & Ha Long Bay Overnight Cruise',
      visaStatus: 'Instant E-Visa (24 Hours)',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
      slug: 'vietnam',
    },
    {
      name: '4. Malaysia (Kuala Lumpur & Genting)',
      price: '₹ 19,500.00',
      duration: '4 Days / 3 Nights',
      highlights: 'Petronas Twin Towers, Batu Caves & Cable Car Ride to Genting Highlands',
      visaStatus: 'Visa-Free Entry for Indians',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop',
      slug: 'malaysia',
    },
    {
      name: '5. Baku, Azerbaijan',
      price: '₹ 28,999.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Flame Towers, Ateshgah Fire Temple & Shahdag Mountain Cable Car',
      visaStatus: 'Easy ASAN E-Visa',
      image: '/destinations/azerbaijan.jpg',
      slug: 'azerbaijan',
    },
    {
      name: '6. Dubai, UAE',
      price: '₹ 27,500.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Burj Khalifa 124th Floor, Desert Safari with BBQ & Dhow Dinner Cruise',
      visaStatus: 'Express E-Visa in 48 Hours',
      image: '/destinations/dubai.jpg',
      slug: 'dubai',
    },
    {
      name: '7. Sri Lanka (Colombo & Kandy)',
      price: '₹ 21,000.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Sigiriya Rock Fortress, Pinnawala Elephant Orphanage & Bentota Beach',
      visaStatus: 'Free ETA Tourist Visa',
      image: '/destinations/sri-lanka.jpg',
      slug: 'sri-lanka',
    },
    {
      name: '8. Bhutan (Paro & Thimphu)',
      price: '₹ 26,000.00',
      duration: '5 Days / 4 Nights',
      highlights: "Tiger's Nest Monastery Trek, Punakha Dzong & Himalayan Valleys",
      visaStatus: 'SDF Entry Permit Included',
      image: '/destinations/bhutan.jpg',
      slug: 'bhutan',
    },
    {
      name: '9. Nepal (Kathmandu & Pokhara)',
      price: '₹ 16,500.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Pashupatinath Darshan, Fewa Lake Boating & Mt. Annapurna Sunrise',
      visaStatus: 'No Visa Required for Indian Citizens',
      image: '/destinations/nepal.jpg',
      slug: 'nepal',
    },
    {
      name: '10. Kazakhstan (Almaty Mountain Escape)',
      price: '₹ 29,999.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Shymbulak Ski Resort, Kok-Tobe Hill & Medeu High-Altitude Ice Rink',
      visaStatus: 'Visa-Free Entry (14 Days)',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop',
      slug: 'kazakhstan',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="max-w-4xl">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Budget International Trips Under 30k</span>
        </div>

        {/* Viral Article Header */}
        <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-2xl relative overflow-hidden border border-brand-800/80">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
              <span>VIRAL TRAVEL SPECIAL • 2026 EDITION</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Top 10 Budget International Holiday Packages Under ₹30,000 (Visa-Free for Indians) ✈️
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-medium leading-relaxed">
              Looking for a dream international trip without breaking the bank? Here is the complete curated list of top foreign destinations under ₹30k featuring 4-star luxury hotels, flights, meals & 24x7 travel assistance.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-semibold pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-amber-400" /> Senior Travel Desk</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-amber-400" /> Sept 20, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> 5 Min Read</span>
            </div>
          </div>
        </div>

        {/* Instant Inquiry Lead Capture Box */}
        <div className="mb-10">
          <BlogInquiryForm />
        </div>

        {/* Top 10 Destination Listings */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            10 Unmissable Foreign Destinations Under ₹30,000
          </h2>

          {destinations.map((item, idx) => (
            <Card key={idx} hoverable className="p-6 bg-white rounded-3xl border-slate-200 shadow-md space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 relative h-52 w-full rounded-2xl overflow-hidden shadow-inner">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-emerald-600 text-white font-black text-[10px] px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {item.visaStatus}
                  </div>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                    <span className="text-xs bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-lg">{item.duration}</span>
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-xs text-slate-400 font-bold uppercase">Starting From</span>
                    <span className="text-2xl font-black text-brand-700">{item.price}</span>
                    <span className="text-[10px] text-slate-500 font-medium">/ person</span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <strong className="text-slate-800">Trip Highlights:</strong> {item.highlights}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <Link href={`/holidays/${item.slug}`} className="flex-1">
                      <Button variant="accent" size="sm" className="w-full font-bold text-xs py-2.5">
                        VIEW ITINERARY & PRICE →
                      </Button>
                    </Link>
                    <a
                      href={`https://wa.me/918291901377?text=Hi%20Trip%20Customizer%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(item.name)}%20package.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all shrink-0"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>WhatsApp Lead</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Book With Us Banner */}
        <div className="mt-12 bg-amber-400 text-slate-950 rounded-3xl p-8 shadow-xl space-y-4 text-center">
          <ShieldCheck className="w-10 h-10 mx-auto text-slate-950" />
          <h3 className="text-2xl font-black">Ready to Book Your International Trip?</h3>
          <p className="text-xs font-bold max-w-xl mx-auto leading-relaxed">
            Get personalized day-by-day itineraries, flight options & hotel upgrades tailored to your exact budget in less than 2 hours.
          </p>
          <div className="pt-2">
            <Link href="/customize-trip">
              <Button variant="primary" size="lg" className="font-extrabold text-sm px-8 py-3.5 bg-slate-950 hover:bg-slate-900 text-white rounded-full shadow-lg">
                CUSTOMIZE MY TRIP IN 1 MINUTE 🚀
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
