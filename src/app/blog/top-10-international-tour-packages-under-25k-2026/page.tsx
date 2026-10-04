import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, ChevronRight, Compass, Sparkles, ShieldCheck, CheckCircle2, PhoneCall, Zap, Award, Star } from 'lucide-react';
import { ViralBlogInquiryForm } from './BlogInquiryForm';

export const metadata: Metadata = {
  title: 'Top 10 Best International Tour Packages Under ₹25,000 (Visa-Free for Indians 2026) ✈️',
  description:
    'Discover 10 foreign trips under ₹25,000 from India! Includes Thailand, Bali, Vietnam, Malaysia, Dubai, Baku Azerbaijan & Sri Lanka with 4-star hotels, flights, visa support & 24x7 travel desk.',
  keywords: [
    'international tour packages under 25000',
    'visa free countries for indians 2026',
    'thailand tour packages from india',
    'bali honeymoon packages under 25k',
    'vietnam tour package for indians',
    'malaysia tour packages',
    'dubai winter tour packages',
    'baku azerbaijan packages under 30k',
    'sri lanka budget tour',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog/top-10-international-tour-packages-under-25k-2026',
  },
  openGraph: {
    title: 'Top 10 Best International Tour Packages Under ₹25,000 (Visa-Free 2026) ✈️',
    description: 'Book customized foreign trips to Bali, Thailand, Vietnam, Malaysia & Dubai starting @ ₹14,999 with 4-star hotels & flights.',
    url: 'https://www.tripcustomizer.com/blog/top-10-international-tour-packages-under-25k-2026',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function ViralInternationalTripsUnder25kPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Best International Tour Packages Under ₹25,000 (Visa-Free for Indians 2026) ✈️',
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
    datePublished: '2026-10-04',
    dateModified: '2026-10-04',
    description: 'The definitive 2026 guide to foreign holidays under ₹25,000 for Indian passport holders with 4-star hotels, flights, and instant lead inquiry desk.',
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
        name: 'Top 10 International Tour Packages Under ₹25,000',
        item: 'https://www.tripcustomizer.com/blog/top-10-international-tour-packages-under-25k-2026',
      },
    ],
  };

  const destinations = [
    {
      name: '1. Thailand (Phuket, Krabi & Bangkok)',
      price: '₹ 18,999.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Phi Phi Island Speedboat, James Bond Island, Alcazar Show & 4-Star Beach Resort',
      visaStatus: 'Visa-Free Entry for Indian Passport Holders',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      slug: 'thailand',
    },
    {
      name: '2. Bali, Indonesia (Ubud & Seminyak)',
      price: '₹ 24,999.00',
      duration: '6 Days / 5 Nights',
      highlights: 'Private Pool Villa, Kintamani Volcano, Tanah Lot Temple & Nusa Penida Island Cruise',
      visaStatus: 'Visa On Arrival (30 Days Instant)',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      slug: 'bali',
    },
    {
      name: '3. Vietnam (Hanoi, Ha Long Bay & Da Nang)',
      price: '₹ 22,500.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Bana Hills Golden Bridge, Ha Long Bay Luxury Overnight Cruise & Hoi An Lantern Town',
      visaStatus: 'Instant E-Visa (Approved in 24 Hours)',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
      slug: 'vietnam',
    },
    {
      name: '4. Malaysia (Kuala Lumpur & Genting Highlands)',
      price: '₹ 19,500.00',
      duration: '4 Days / 3 Nights',
      highlights: 'Petronas Twin Towers, Batu Caves Temple & Skyway Cable Car to Genting Resort',
      visaStatus: 'Visa-Free Entry for Indians',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop',
      slug: 'malaysia',
    },
    {
      name: '5. Dubai & Abu Dhabi (UAE Winter Sale)',
      price: '₹ 27,500.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Burj Khalifa 124th Floor, Desert Safari BBQ Dinner & Marina Dhow Cruise',
      visaStatus: 'Easy Express E-Visa Assistance',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      slug: 'dubai',
    },
    {
      name: '6. Baku, Azerbaijan (Land of Fire)',
      price: '₹ 28,999.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Flame Towers, Ateshgah Fire Temple, Yanar Dag Burning Mountain & Shahdag Ski Resort',
      visaStatus: 'Instant 3-Day E-Visa',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop',
      slug: 'azerbaijan',
    },
    {
      name: '7. Sri Lanka (Colombo, Kandy & Bentota)',
      price: '₹ 21,999.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Pinnawala Elephant Sanctuary, Temple of Tooth Relic & Bentota Water Sports',
      visaStatus: 'Free ETA Visa for Indians',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop',
      slug: 'sri-lanka',
    },
    {
      name: '8. Kazakhstan (Almaty Snow & Charyn Canyon)',
      price: '₹ 29,500.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Shymbulak Ski Resort, Medeu Ice Rink & Charyn Grand Canyon Tour',
      visaStatus: '14-Day Visa-Free Entry for Indians',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800&auto=format&fit=crop',
      slug: 'kazakhstan',
    },
    {
      name: '9. Nepal (Kathmandu, Pokhara & Nagarkot)',
      price: '₹ 14,999.00',
      duration: '5 Days / 4 Nights',
      highlights: 'Pashupatinath Temple, Phewa Lake Boating & Annapurna Mountain Sunset View',
      visaStatus: 'No Visa Required for Indian Citizens',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      slug: 'nepal',
    },
    {
      name: '10. Bhutan (Paro, Thimphu & Punakha)',
      price: '₹ 23,500.00',
      duration: '6 Days / 5 Nights',
      highlights: "Tiger's Nest Monastery Trek, Punakha Dzong Palace & Buddha Dordenma Statue",
      visaStatus: 'SDF Permit & Entry Pass Assistance',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=800&auto=format&fit=crop',
      slug: 'bhutan',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-slate-50 min-h-screen py-8">
        <Container className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/blog" className="hover:text-brand-600">Blog</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800 line-clamp-1">Top 10 International Tour Packages Under ₹25,000</span>
          </div>

          {/* Editorial Header */}
          <div className="mb-6 space-y-3">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>🔥 2026 Viral Travel Guide</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Top 10 Best International Tour Packages Under ₹25,000 (Visa-Free for Indians 2026) ✈️🌴
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center space-x-1">
                <User className="w-3.5 h-3.5 text-brand-600" />
                <span>Trip Customizer Senior Travel Desk</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Updated Oct 04, 2026</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-brand-600" />
                <span>8 Min Read</span>
              </span>
              <span className="flex items-center space-x-1 text-emerald-600 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>5% GST Tax Compliant</span>
              </span>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-8 shadow-xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              alt="Top 10 Budget International Holiday Packages Under 25k"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs sm:text-sm font-semibold max-w-xl">
                Customized foreign trips with 4-star hotels, daily breakfast, airport transfers, flights & 24x7 expert desk support.
              </p>
            </div>
          </div>

          {/* Embedded High-Converting Lead Form #1 */}
          <ViralBlogInquiryForm defaultDestination="Thailand (Phuket & Bangkok)" />

          {/* Article Summary Box */}
          <Card className="p-6 bg-white border-slate-200 mb-8 rounded-3xl shadow-sm">
            <h2 className="font-extrabold text-slate-900 text-lg mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-600" />
              <span>Why 2026 is the Best Time for Budget Foreign Travel from India</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Traveling abroad no longer requires spending lakhs of rupees. Thanks to bilateral visa-free agreements, low-cost flight routes, and 4-star luxury hotel packages, Indian travelers can explore exotic tropical beaches, futuristic skylines, and snow-capped mountain ranges starting at just <strong>₹14,999 to ₹24,999 per person</strong>!
            </p>
          </Card>

          {/* Destination Showcase Grid */}
          <div className="space-y-8 mb-10">
            {destinations.map((d, index) => (
              <Card key={index} className="bg-white border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative h-56 md:h-auto min-h-[220px]">
                    <Image src={d.image} alt={d.name} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-brand-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {d.duration}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-emerald-600/95 text-white text-[10px] font-black px-2.5 py-1 rounded-md flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{d.visaStatus}</span>
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">VERIFIED 2026 PACKAGE</span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>4.9 (150+ Reviews)</span>
                        </div>
                      </div>

                      <h3 className="font-black text-slate-950 text-xl mt-1">{d.name}</h3>

                      <p className="text-xs text-slate-600 mt-2 font-medium">
                        <strong>Package Highlights:</strong> {d.highlights}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block uppercase">Starting Price</span>
                        <span className="text-xl font-black text-brand-600">{d.price}</span>
                        <span className="text-[10px] text-slate-500 font-medium block">/ person (incl. GST)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link href={`/holidays/${d.slug}`}>
                          <Button variant="primary" size="sm" className="font-bold text-xs">
                            View Itinerary →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Embedded High-Converting Lead Form #2 */}
          <ViralBlogInquiryForm defaultDestination="Bali Indonesia Private Villa" />

          {/* FAQ Section */}
          <Card className="p-8 bg-white border-slate-200 rounded-3xl mb-8">
            <h3 className="text-xl font-black text-slate-950 mb-4">Frequently Asked Questions (FAQs)</h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-bold text-slate-900">Q1. Are flights and 4-star hotels included in packages under ₹25,000?</h4>
                <p className="text-slate-600 mt-1">Yes! All Trip Customizer international packages include 4-star hotel stays with daily breakfast, private AC airport transfers, sightseeing tours, and flight booking assistance.</p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <h4 className="font-bold text-slate-900">Q2. Which foreign countries are completely visa-free for Indian passport holders in 2026?</h4>
                <p className="text-slate-600 mt-1">Thailand, Malaysia, Nepal, Sri Lanka (ETA), and Kazakhstan offer visa-free entry or free electronic travel authorizations for Indian travelers.</p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <h4 className="font-bold text-slate-900">Q3. How can I get a customized day-by-day itinerary quote?</h4>
                <p className="text-slate-600 mt-1">Simply fill out the 1-minute inquiry form above or call our senior travel desk at +91 7408763401 for an instant customized quote within 10 minutes.</p>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
}
