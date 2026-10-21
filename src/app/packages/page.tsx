import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { getAllProgrammaticPackages } from '@/data/programmaticPackages';
import { MapPin, Plane, Clock, Star, Sparkles, ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const revalidate = 86400; // 24 Hours ISR

export const metadata: Metadata = {
  title: 'City-Wise Tour Packages 2026: Flights & 4-Star Hotels Included | Trip Customizer',
  description:
    'Browse 50+ verified city-to-city holiday packages departing from Delhi, Mumbai, Ahmedabad, Bangalore, Pune, and Kolkata. Includes round-trip flights, 4-star stays, desert safaris, houseboats, and 24x7 expert support.',
  keywords: [
    'tour packages with flight',
    'dubai tour package from ahmedabad with flight',
    'dubai tour package from mumbai with flight',
    'kashmir tour package from delhi with flight',
    'bali honeymoon package with flight',
    'thailand tour package from pune with flight',
    'ayodhya ram mandir tour packages',
    'char dham yatra package from delhi',
    'Trip Customizer packages directory',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/packages',
  },
  openGraph: {
    title: 'City-Wise Tour Packages 2026 (Flights & 4-Star Hotels) | Trip Customizer',
    description:
      'Verified domestic & international packages with flights and 4-star hotels from major Indian cities.',
    url: 'https://www.tripcustomizer.com/packages',
    type: 'website',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'City-Wise Tour Packages 2026 | Trip Customizer',
    description: 'Explore all-inclusive packages departing from your nearest airport.',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function PackagesDirectoryPage() {
  const allPackages = getAllProgrammaticPackages();

  // Unique departure cities
  const cities = Array.from(new Set(allPackages.map((p) => p.departureCity.city))).sort();

  // Unique destinations
  const destinations = Array.from(new Set(allPackages.map((p) => p.destination))).sort();

  const canonicalUrl = 'https://www.tripcustomizer.com/packages';

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'City-Wise Tour Packages Directory 2026',
    description: 'All-inclusive domestic and international tour packages departing from major Indian cities.',
    url: canonicalUrl,
    hasPart: allPackages.map((pkg) => ({
      '@type': 'TouristTrip',
      name: pkg.h1,
      url: `https://www.tripcustomizer.com/packages/${pkg.slug}`,
      offers: {
        '@type': 'Offer',
        price: pkg.discountPrice,
        priceCurrency: 'INR',
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: 'Tour Packages Directory',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Tour Packages Directory</span>
        </div>

        {/* Master Hero Banner */}
        <div className="bg-gradient-to-r from-brand-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Handcrafted 2026–2027 City Departures
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              City-Wise Tour Packages with Flights & 4-Star Hotels
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Skip the hassle of coordinating flights and hotels separately. Every itinerary below includes round-trip airfare from your home airport, verified 4-star accommodations, private AC sightseeing transfers, 5% GST tax compliance, and 24x7 travel desk support.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Tailor-Made
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Hidden Charges
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Visa & Forex Assistance
              </span>
            </div>
          </div>
        </div>

        {/* Departure City Quick Jump Links */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 mb-10">
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
            <Plane className="w-4 h-4 text-brand-600" /> Explore By Your Departure City
          </h2>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <a
                key={city}
                href={`#city-${city.toLowerCase()}`}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-700 transition border border-slate-200/60"
              >
                Departing from {city}
              </a>
            ))}
          </div>
        </div>

        {/* All Packages Grouped By City */}
        <div className="space-y-12">
          {cities.map((city) => {
            const cityPackages = allPackages.filter((p) => p.departureCity.city === city);
            if (cityPackages.length === 0) return null;

            return (
              <section key={city} id={`city-${city.toLowerCase()}`} className="scroll-mt-24">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-brand-600" /> Tour Packages from {city} ({cityPackages[0].departureCity.code})
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      {cityPackages[0].departureCity.airport} • {cityPackages[0].departureCity.flightType}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                    {cityPackages.length} Packages Available
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cityPackages.map((pkg) => (
                    <Card
                      key={pkg.slug}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 rounded-3xl bg-white flex flex-col group"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={pkg.heroImage}
                          alt={pkg.h1}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 font-bold text-[11px] px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-600" />
                          {pkg.durationDays}D / {pkg.durationNights}N
                        </span>
                        <span className="absolute top-3 right-3 bg-brand-600 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-md">
                          ★ {pkg.rating} ({pkg.reviewsCount})
                        </span>
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="text-[10px] font-bold text-accent-400 uppercase tracking-wider block">
                            {pkg.theme}
                          </span>
                          <h3 className="text-white font-extrabold text-sm line-clamp-1">
                            {pkg.destination}
                          </h3>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm mb-2 line-clamp-2 group-hover:text-brand-600 transition">
                            {pkg.h1}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                            {pkg.metaDescription}
                          </p>

                          <div className="space-y-1.5 mb-4 text-[11px] text-slate-600">
                            {pkg.highlights.slice(0, 2).map((h, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span className="line-clamp-1">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Starting From</span>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-lg font-black text-brand-600">
                                ₹{pkg.discountPrice.toLocaleString('en-IN')}
                              </span>
                              <span className="text-xs text-slate-400 line-through">
                                ₹{pkg.startingPrice.toLocaleString('en-IN')}
                              </span>
                            </div>
                          </div>

                          <Link
                            href={`/packages/${pkg.slug}`}
                            className="inline-flex items-center gap-1 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-sm group-hover:shadow-md"
                          >
                            <span>View Deal</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
