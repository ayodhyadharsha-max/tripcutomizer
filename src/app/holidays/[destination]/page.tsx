import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCatalogPackages } from '@/data/packageCatalog';
import { getAllProgrammaticPackages } from '@/data/programmaticPackages';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';
import { AEODirectAnswerBox } from '@/components/holidays/AEODirectAnswerBox';

export async function generateMetadata({ params }: { params: { destination: string } }): Promise<Metadata> {
  const rawSlug = params.destination.toLowerCase().trim();
  const destName = rawSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const allCatalog = getAllCatalogPackages();
  const matched = allCatalog.filter((p) => {
    const dSlug = p.destinationSlug.toLowerCase();
    const dest = p.destination.toLowerCase();
    return (
      dSlug === rawSlug ||
      dSlug.includes(rawSlug) ||
      dest.includes(rawSlug) ||
      (p.citySlugs && p.citySlugs.includes(rawSlug)) ||
      (p.stateSlug && p.stateSlug === rawSlug) ||
      (p.coveredCities && p.coveredCities.some((c) => c.toLowerCase().includes(rawSlug)))
    );
  });

  const minPrice = matched.length > 0
    ? Math.min(...matched.map((p) => Math.min(p.startingPrice || 14999, p.discountPrice || p.startingPrice || 14999)))
    : 14999;

  const heroImg = matched[0]?.heroImage || 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg';
  const title = `${destName} Tour Packages 2026: Starting @ ₹${minPrice.toLocaleString('en-IN')} | Trip Customizer`;
  const description = `Book customized ${destName} holiday packages with 4-star hotels, flights, private transfers, visa assistance, and 24x7 expert desk support. Best verified deals starting @ ₹${minPrice.toLocaleString('en-IN')}.`;
  const canonicalUrl = `https://www.tripcustomizer.com/holidays/${rawSlug}`;

  return {
    title,
    description,
    keywords: [
      `${destName} tour packages`,
      `${destName} holiday package`,
      `${destName} tourism 2026`,
      `${destName} honeymoon packages`,
      `customized ${destName} itinerary`,
      'Trip Customizer',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Trip Customizer',
      type: 'website',
      images: [
        {
          url: heroImg,
          width: 1200,
          height: 630,
          alt: `${destName} Holiday Packages`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [heroImg],
    },
  };
}

export default function DestinationListingPage({ params }: { params: { destination: string } }) {
  const rawSlug = params.destination.toLowerCase().trim();

  const isIntlSlug = [
    'international', 'europe', 'switzerland', 'france', 'uk', 'london', 'united-kingdom',
    'germany', 'austria', 'belgium', 'netherlands', 'italy', 'vatican', 'dubai', 'uae',
    'cairo', 'egypt', 'bali', 'indonesia', 'thailand', 'phuket', 'singapore', 'maldives',
    'georgia', 'tbilisi', 'batumi', 'japan', 'tokyo', 'osaka', 'kyoto', 'malaysia',
    'kuala-lumpur', 'nepal', 'kathmandu', 'pokhara', 'muktinath', 'armenia', 'yerevan',
    'azerbaijan', 'baku', 'gabala', 'almaty', 'kazakhstan'
  ].some((s) => rawSlug.includes(s));

  const isDomesticSlug = [
    'india', 'auli', 'chopta', 'tungnath', 'nainital', 'manali', 'shimla', 'kashmir',
    'leh', 'ladakh', 'ayodhya', 'varanasi', 'kedarnath', 'badrinath', 'char-dham',
    'rajasthan', 'jaipur', 'udaipur', 'jaisalmer', 'goa', 'kerala', 'coorg', 'munnar',
    'meghalaya', 'shillong', 'kaziranga', 'sikkim', 'darjeeling', 'kutch', 'dwarka',
    'somnath', 'amritsar', 'puri', 'rameshwaram', 'tirupati', 'shirdi', 'vaishno-devi',
    'himachal', 'uttarakhand', 'gujarat', 'up', 'uttar-pradesh', 'north-east', 'himalayas'
  ].some((s) => rawSlug.includes(s));

  const allCatalog = getAllCatalogPackages();
  const matchedPackages = allCatalog.filter((p) => {
    // Strictly isolate international vs domestic routes
    if (isIntlSlug && !p.isInternational) return false;
    if (isDomesticSlug && p.isInternational) return false;

    const dSlug = p.destinationSlug.toLowerCase();
    const dest = p.destination.toLowerCase();
    const name = p.name.toLowerCase();
    const region = p.region.toLowerCase();
    const country = p.country.toLowerCase();

    // Direct Category match
    if (rawSlug === 'international' && p.isInternational) return true;
    if (rawSlug === 'india' && !p.isInternational) return true;

    // Direct Destination / Country / Multi-City Circuit Match
    if (
      dSlug === rawSlug ||
      dSlug.includes(rawSlug) ||
      dest.includes(rawSlug) ||
      country.includes(rawSlug) ||
      (p.citySlugs && p.citySlugs.includes(rawSlug)) ||
      (p.stateSlug && (p.stateSlug === rawSlug || p.stateSlug.includes(rawSlug))) ||
      (p.coveredCities && p.coveredCities.some((c) => c.toLowerCase().includes(rawSlug)))
    ) {
      return true;
    }

    // Match region only if not conflicting
    if (region.includes(rawSlug)) {
      return true;
    }

    // Name match ONLY if route type aligns
    if (name.includes(rawSlug) && (p.isInternational ? isIntlSlug : isDomesticSlug)) {
      return true;
    }

    // Regional & State aliases for mega menu links
    if (
      rawSlug === 'himachal' &&
      (dest.includes('manali') ||
        dest.includes('shimla') ||
        dest.includes('spiti') ||
        dest.includes('dharamshala') ||
        dest.includes('kasol') ||
        name.includes('himachal'))
    ) {
      return true;
    }

    if (
      rawSlug === 'uttarakhand' &&
      (dest.includes('nainital') ||
        dest.includes('mussoorie') ||
        dest.includes('rishikesh') ||
        dest.includes('corbett') ||
        dest.includes('auli') ||
        dest.includes('char dham') ||
        name.includes('uttarakhand'))
    ) {
      return true;
    }

    if (
      rawSlug === 'rajasthan' &&
      (dest.includes('jaisalmer') ||
        dest.includes('khatu') ||
        dest.includes('ranthambore') ||
        dest.includes('mount abu') ||
        dest.includes('rajasthan') ||
        name.includes('rajasthan'))
    ) {
      return true;
    }

    if (
      rawSlug === 'kerala' &&
      (dSlug === 'kerala' ||
        dest.includes('kerala') ||
        name.includes('kerala'))
    ) {
      return true;
    }

    if (
      (rawSlug === 'north-east' || rawSlug === 'northeast' || rawSlug === 'sikkim') &&
      (dest.includes('meghalaya') ||
        dest.includes('kaziranga') ||
        dest.includes('tawang') ||
        dest.includes('sikkim') ||
        dest.includes('darjeeling') ||
        dest.includes('north east') ||
        region.includes('north-east'))
    ) {
      return true;
    }

    if (
      (rawSlug === 'gujarat' || rawSlug === 'kutch') &&
      (dest.includes('kutch') ||
        dest.includes('dwarka') ||
        dest.includes('statue') ||
        dest.includes('gir') ||
        dest.includes('gujarat'))
    ) {
      return true;
    }

    if (
      (rawSlug === 'up' || rawSlug === 'uttar-pradesh' || rawSlug === 'ayodhya') &&
      (dest.includes('ayodhya') || dest.includes('varanasi') || dest.includes('lucknow') || dest.includes('mathura'))
    ) {
      return true;
    }

    // Additional international aliases
    if (
      (rawSlug === 'dubai' || rawSlug === 'uae') && p.isInternational &&
      (dest.includes('dubai') || dest.includes('uae') || name.includes('dubai') || p.id === 'pkg-intl-dubai')
    ) return true;

    if (
      (rawSlug === 'bali' || rawSlug === 'indonesia') && p.isInternational &&
      (dest.includes('bali') || dest.includes('indonesia') || name.includes('bali') || p.id === 'pkg-intl-bali')
    ) return true;

    if (
      rawSlug === 'thailand' && p.isInternational &&
      (dest.includes('thailand') || name.includes('thailand') || p.id === 'pkg-intl-thailand')
    ) return true;

    if (
      rawSlug === 'singapore' && p.isInternational &&
      (dest.includes('singapore') || name.includes('singapore') || p.id === 'pkg-intl-singapore')
    ) return true;

    if (
      rawSlug === 'maldives' && p.isInternational &&
      (dest.includes('maldives') || name.includes('maldives') || p.id === 'pkg-intl-maldives')
    ) return true;

  });

  if (matchedPackages.length === 0) {
    notFound();
  }

  const displayPackages = matchedPackages;

  const allProgPackages = getAllProgrammaticPackages();
  const destinationProgPackages = allProgPackages.filter(
    (p) =>
      p.destinationSlug === rawSlug ||
      rawSlug.includes(p.destinationSlug) ||
      p.slug.includes(rawSlug) ||
      (rawSlug === 'dubai' && p.slug.startsWith('dubai-')) ||
      (rawSlug === 'kashmir' && p.slug.startsWith('kashmir-')) ||
      (rawSlug === 'bali' && p.slug.startsWith('bali-')) ||
      (rawSlug === 'thailand' && p.slug.startsWith('thailand-')) ||
      (rawSlug === 'ayodhya' && p.slug.startsWith('ayodhya-')) ||
      (rawSlug === 'char-dham' && p.slug.startsWith('char-dham-')) ||
      (rawSlug === 'goa' && p.slug.startsWith('goa-')) ||
      (rawSlug === 'kerala' && p.slug.startsWith('kerala-'))
  );

  const destName = rawSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

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
        name: 'Holidays',
        item: 'https://www.tripcustomizer.com/holidays',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${destName} Tour Packages`,
        item: `https://www.tripcustomizer.com/holidays/${rawSlug}`,
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${destName} Holiday Tour Packages 2026`,
    numberOfItems: displayPackages.length,
    itemListElement: displayPackages.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.name,
      url: `https://www.tripcustomizer.com/holidays/${p.destinationSlug}/${p.slug}`,
    })),
  };

  const minPrice = displayPackages.length > 0
    ? Math.min(...displayPackages.map((p) => Math.min(p.startingPrice || 14999, p.discountPrice || p.startingPrice || 14999)))
    : 14999;
  const maxPrice = displayPackages.length > 0
    ? Math.max(...displayPackages.map((p) => Math.max(p.startingPrice || 55000, p.discountPrice || 55000)))
    : 55000;
  const recommendedDays = displayPackages.length > 0
    ? Math.round(displayPackages.reduce((acc, p) => acc + (p.durationDays || 5), 0) / displayPackages.length)
    : 5;

  const speakableWebPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${destName} Tour Packages 2026: Customized Holiday & Travel Guide`,
    url: `https://www.tripcustomizer.com/holidays/${rawSlug}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Book and Customize a ${destName} Tour Package`,
    description: `Step-by-step guide to customizing and booking an all-inclusive ${destName} holiday package with flights, 4-star hotels, and transfers from India.`,
    totalTime: 'PT10M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Select Departure City and Travel Dates',
        text: 'Choose your preferred departure airport (Delhi, Mumbai, Ahmedabad, Bangalore, Kolkata, Pune) and travel dates.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Hotel Category',
        text: 'Select 3-Star comfort, 4-Star deluxe, or 5-Star luxury resort accommodations with daily breakfast.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Personalize Sightseeing and Activities',
        text: 'Add private sightseeing tours, island excursions, desert safaris, or temple darshans according to your preferences.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Confirm with 5% GST Invoice',
        text: 'Receive your transparent quotation with guaranteed departure vouchers and 24x7 dedicated travel desk support.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does a ${destName} tour package cost from India?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `A customized ${destName} tour package from India typically costs between ₹${minPrice.toLocaleString('en-IN')} to ₹${maxPrice.toLocaleString('en-IN')} per person for a ${recommendedDays} Days vacation. This price includes verified 4-star deluxe hotel accommodations, daily breakfast and dinner, private AC airport transfers, guided sightseeing excursions, and 24x7 dedicated travel desk support.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the best time to visit ${destName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The peak travel season for ${destName} is during pleasant weather months with clear skies suitable for outdoor sightseeing. Booking your holiday package 30 to 45 days in advance guarantees early-bird airfare discounts, preferred flight timings, and guaranteed room availability at top-rated 4-star and 5-star properties.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are flights and visa assistance included in ${destName} packages?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, all ${destName} tour packages booked on Trip Customizer can be bundled with confirmed round-trip flights departing from major Indian airports (Delhi, Mumbai, Ahmedabad, Kolkata, Bangalore). International itineraries include step-by-step visa assistance with 5% GST tax compliant invoicing.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I customize my ${destName} tour itinerary?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, 100% of our ${destName} packages can be tailored to your preferred travel dates, duration, hotel rating, and custom sightseeing preferences via our 24x7 travel desk on WhatsApp at +91 7408763401.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-slate-900 py-20 text-center text-white font-bold">Loading holiday packages...</div>}>
        <HolidayListingView
          initialPackages={displayPackages}
          title={`${destName} Tour Packages`}
          subtitle={`Explore handcrafted ${destName} holiday packages with flights, luxury hotels, private cabs & 24x7 travel support.`}
          badgeText={`${destName} Verified Itineraries`}
          defaultDestinationSlug={rawSlug}
        />
      </Suspense>

      {/* Server-Side Rendered Crawlable HTML Section for Googlebot Indexing & AI Search */}
      <section className="bg-slate-100 py-12 border-t border-slate-200 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">
              {destName} Tour Packages 2026: Customized Holiday & Travel Guide
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
              Plan your dream vacation to {destName} with Trip Customizer. Our handcrafted {destName} holiday packages include 4-star deluxe hotel stays, daily breakfast & dinner, private AC airport transfers, guided sightseeing tours, and 24x7 travel desk support.
            </p>
          </header>

          {/* AEO Direct Answer Box (Optimized for Featured Snippets Position 0 & Voice Search) */}
          <AEODirectAnswerBox
            destName={destName}
            destinationSlug={rawSlug}
            isInternational={isIntlSlug}
            minPrice={minPrice}
            maxPrice={maxPrice}
            recommendedDays={recommendedDays}
          />

          {/* Pricing Table for Featured Snippets */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8 overflow-x-auto">
            <h2 className="text-lg font-bold text-slate-950 mb-4">
              Best Selling {destName} Tour Packages & Starting Price List 2026
            </h2>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-extrabold uppercase tracking-wider">
                  <th className="p-3">Package Name</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Hotel Category</th>
                  <th className="p-3">Starting Price</th>
                  <th className="p-3">Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {displayPackages.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-bold text-slate-900">{p.name}</td>
                    <td className="p-3 whitespace-nowrap">{p.durationDays}D / {p.durationNights}N</td>
                    <td className="p-3 whitespace-nowrap">{p.hotelCategory || '4-Star Deluxe'}</td>
                    <td className="p-3 font-extrabold text-emerald-600 whitespace-nowrap">₹{(Math.min(p.startingPrice || 14999, p.discountPrice || p.startingPrice || 14999)).toLocaleString('en-IN')}</td>
                    <td className="p-3">{p.inclusions ? p.inclusions.slice(0, 3).join(', ') : 'Hotels, Breakfast, Cabs'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* City Departures & Programmatic Hub Links for Internal Link Equity */}
          {destinationProgPackages.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Popular City Departures for {destName} Tour Packages 2026
              </h2>
              <p className="text-xs text-slate-600 mb-4">
                Explore customized itineraries with direct flights, private airport transfers, and 4-star hotel stays departing from your city:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {destinationProgPackages.map((prog) => (
                  <Link
                    key={prog.slug}
                    href={`/packages/${prog.slug}`}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 transition-all group block text-left shadow-2xs"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-700">
                      <span>{prog.departureCity.city} Departure</span>
                      <span className="text-emerald-600">₹{(Math.min(prog.startingPrice, prog.discountPrice || prog.startingPrice)).toLocaleString('en-IN')}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-1 font-medium">{prog.h1}</p>
                    <span className="text-[10px] text-brand-600 font-bold mt-1.5 inline-block group-hover:underline">View Itinerary & Book &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Travel Guide & FAQs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <h2 className="text-base font-bold text-slate-950">
                Key Highlights & Sightseeing in {destName}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Whether you are traveling for a romantic honeymoon, a family vacation, or a spiritual pilgrimage, {destName} offers iconic landmarks, cultural heritage, and scenic landscapes. Customize your daily itinerary with our senior travel desk.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 font-medium">
                <li>Customized day-by-day itineraries tailored to your budget</li>
                <li>Private AC cabs for airport transfers and local sightseeing</li>
                <li>Flexible booking policy with 5% GST tax compliance invoice</li>
                <li>24/7 dedicated travel manager support throughout the tour</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <h2 className="text-base font-bold text-slate-950">
                Frequently Asked Questions (FAQs) - {destName} Travel
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900">What is the best time to visit {destName}?</h3>
                  <p className="text-slate-600 text-xs mt-0.5">The peak travel season is during pleasant weather months. Contact our desk for month-by-month climate recommendations.</p>
                </div>
                <div className="border-t border-slate-100 pt-2">
                  <h3 className="font-bold text-slate-900">Are flights and meals included in {destName} packages?</h3>
                  <p className="text-slate-600 text-xs mt-0.5">Yes, all packages offer customizable options including round-trip flight bookings, daily breakfast, and dinner buffet options.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
