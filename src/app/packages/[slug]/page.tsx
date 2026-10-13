import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllProgrammaticSlugs,
  getAllProgrammaticPackages,
  getProgrammaticPackageBySlug,
  ProgrammaticPackage,
} from '@/data/programmaticPackages';
import { PackageActionButtons } from './PackageActionButtons';
import {
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Plane,
  CheckCircle2,
  XCircle,
  Building,
  Calendar,
  Compass,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Phone,
  Award,
  ChevronRight,
} from 'lucide-react';

export const revalidate = 86400; // ISR 24 Hours

export async function generateStaticParams() {
  const slugs = getAllProgrammaticSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pkg = getProgrammaticPackageBySlug(params.slug);

  if (!pkg) {
    return {
      title: 'Tour Package Not Found',
      description: 'The requested tour package could not be found.',
    };
  }

  const canonicalUrl = `https://www.tripcustomizer.com/packages/${pkg.slug}`;

  return {
    title: pkg.metaTitle,
    description: pkg.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pkg.metaTitle,
      description: pkg.metaDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Trip Customizer',
      images: [
        {
          url: pkg.heroImage,
          width: 1200,
          height: 630,
          alt: pkg.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pkg.metaTitle,
      description: pkg.metaDescription,
      images: [pkg.heroImage],
    },
  };
}

export default function ProgrammaticPackagePage({
  params,
}: {
  params: { slug: string };
}) {
  const pkg = getProgrammaticPackageBySlug(params.slug);

  if (!pkg) {
    notFound();
  }

  // Get sibling packages for cross-linking
  const allPackages = getAllProgrammaticPackages();
  const relatedPackages = allPackages
    .filter((p) => p.slug !== pkg.slug && (p.destination === pkg.destination || p.departureCity.code === pkg.departureCity.code))
    .slice(0, 4);

  // Structured Data (JSON-LD)
  const canonicalUrl = `https://www.tripcustomizer.com/packages/${pkg.slug}`;

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.h1,
    description: pkg.metaDescription,
    image: pkg.heroImage,
    url: canonicalUrl,
    touristType: pkg.theme,
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: pkg.itinerary.length,
      itemListElement: pkg.itinerary.map((day, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `Day ${day.dayNumber}: ${day.title}`,
        description: day.description,
      })),
    },
    offers: {
      '@type': 'Offer',
      price: pkg.discountPrice,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      url: canonicalUrl,
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      telephone: '+91-9876543210',
      priceRange: '₹₹',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.h1,
    image: pkg.heroImage,
    description: pkg.metaDescription,
    brand: {
      '@type': 'Brand',
      name: 'Trip Customizer',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: pkg.rating,
      reviewCount: pkg.reviewsCount,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      '@type': 'Offer',
      price: pkg.discountPrice,
      priceCurrency: 'INR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: canonicalUrl,
    },
  };

  const breadcrumbsSchema = {
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
        name: 'Holidays',
        item: 'https://www.tripcustomizer.com/holidays',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pkg.destination,
        item: `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: pkg.h1,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pkg.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/holidays" className="hover:text-blue-600 transition">
              Holidays
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href={`/holidays/${pkg.destinationSlug}`}
              className="hover:text-blue-600 transition capitalize"
            >
              {pkg.destination}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-semibold truncate max-w-[240px] sm:max-w-none">
              Ex-{pkg.departureCity.city}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="bg-white border-b border-slate-200 pt-6 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              {pkg.theme}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              <Plane className="w-3.5 h-3.5 text-emerald-600" />
              Departs from {pkg.departureCity.city} ({pkg.departureCity.code})
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              {pkg.rating} ({pkg.reviewsCount} verified reviews)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {pkg.durationDays} Days / {pkg.durationNights} Nights
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {pkg.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed">
            {pkg.metaDescription}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Itinerary, Flight Details, Highlights, Hotels, FAQs */}
          <main className="lg:col-span-8 space-y-8">
            {/* Hero Image & Quick Banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/9] bg-slate-100">
              <Image
                src={pkg.heroImage}
                alt={pkg.h1}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-1">
                  {pkg.region} • {pkg.country}
                </div>
                <div className="text-xl sm:text-2xl font-bold">
                  {pkg.destination} Holiday Package
                </div>
              </div>
            </div>

            {/* Departure City Airport & Flight Notes (Essential for Programmatic Value) */}
            <section className="bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-white rounded-2xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Departure Airport & Flight Assistance: {pkg.departureCity.city}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Seamless transit and airport transfers included in this tour
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/90 rounded-xl p-4 border border-blue-100/60">
                  <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                    Origin Airport
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {pkg.departureCity.airport}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    {pkg.departureCity.flightType}
                  </div>
                </div>

                <div className="bg-white/90 rounded-xl p-4 border border-blue-100/60">
                  <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                    Partner Airlines & Connectivity
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {pkg.departureCity.airlines.join(', ')}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Flexible flight timings & baggage allowance options
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/70 rounded-xl border border-blue-100 text-xs text-slate-600 leading-relaxed">
                <strong>Terminal Guidance:</strong> {pkg.departureCity.terminalNotes}
              </div>
            </section>

            {/* Package Highlights */}
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Curated Tour Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pkg.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-Day Curated Itinerary */}
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Day-by-Day Detailed Itinerary
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {pkg.durationDays} Days / {pkg.durationNights} Nights comprehensive travel plan
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100">
                  Customizable Pace
                </span>
              </div>

              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="relative pl-6 sm:pl-8 border-l-2 border-blue-500 pb-6 last:pb-0"
                  >
                    {/* Timeline bullet */}
                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                      D{day.dayNumber}
                    </div>

                    <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-200 transition">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {day.title}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                          Meals: {day.meals}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {day.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200/60 text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-semibold text-slate-700">
                          <Building className="w-3.5 h-3.5 text-blue-600" />
                          Stay: {day.hotel}
                        </span>
                      </div>

                      {day.activities && day.activities.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {day.activities.map((act, actIdx) => (
                            <span
                              key={actIdx}
                              className="px-2.5 py-1 bg-white rounded-lg text-[11px] font-medium text-slate-600 border border-slate-200 shadow-2xs"
                            >
                              • {act}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                What&apos;s Included &amp; Excluded
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                  <h3 className="text-base font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-rose-50/50 rounded-2xl p-5 border border-rose-100">
                  <h3 className="text-base font-bold text-rose-900 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-rose-600" />
                    Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Hotel Accommodations */}
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Handpicked Hotel Stays
              </h2>
              <p className="text-xs text-slate-500 mb-5">
                Verified sanitization, prime locations, and complimentary breakfast
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.hotels.map((hotel, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        {hotel.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {hotel.nights} Night{hotel.nights > 1 ? 's' : ''} Stay
                      </span>
                    </div>
                    <div className="font-bold text-sm text-slate-900 mb-1">
                      {hotel.name}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hotel.city}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Common traveler inquiries regarding bookings from {pkg.departureCity.city}
              </p>

              <div className="space-y-4">
                {pkg.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200/80 p-4 transition open:bg-white open:shadow-xs"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="ml-2 text-blue-600 font-semibold group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Departure City Packages */}
            {relatedPackages.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Explore More Packages from {pkg.departureCity.city} &amp; {pkg.destination}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPackages.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/packages/${rel.slug}`}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition bg-slate-50/50"
                    >
                      <div className="text-xs font-semibold text-blue-600 mb-1">
                        Ex-{rel.departureCity.city} • {rel.durationDays}D/{rel.durationNights}N
                      </div>
                      <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition line-clamp-2 mb-2">
                        {rel.h1}
                      </div>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                        <span className="text-slate-500">Starting at</span>
                        <span className="font-bold text-slate-900">
                          ₹{rel.discountPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Right Column: Sticky Booking Card & Trust Signals */}
          <aside className="lg:col-span-4 sticky top-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Limited Period Offer
              </div>

              {/* Pricing Box */}
              <div className="mb-6">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                  Starting Price Per Person
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    ₹{pkg.discountPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-base text-slate-400 line-through">
                    ₹{pkg.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">
                  Save ₹{(pkg.startingPrice - pkg.discountPrice).toLocaleString('en-IN')} per couple
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  *Taxes &amp; GST as applicable. Twin sharing basis.
                </div>
              </div>

              {/* Package Action Buttons (Client Component) */}
              <PackageActionButtons pkg={pkg} />

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">100% Verified OTA Operator</div>
                    <div className="text-slate-500">Ministry of Tourism registered travel agent</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Best Price Guarantee</div>
                    <div className="text-slate-500">Direct contracted hotel &amp; cab rates</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">24x7 Trip Concierge</div>
                    <div className="text-slate-500">Dedicated local trip manager on call</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destination Hub Link Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
              <h3 className="text-base font-bold mb-2">
                Need more options for {pkg.destination}?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Explore our complete directory of all holiday itineraries, city guides, and hotel deals.
              </p>
              <Link
                href={`/holidays/${pkg.destinationSlug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 group"
              >
                Browse All {pkg.destination} Holidays
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
