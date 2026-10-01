import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export async function generateMetadata({ params }: { params: { destination: string } }): Promise<Metadata> {
  const rawSlug = params.destination.toLowerCase().trim();
  const destName = rawSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const title = `${destName} Tour Packages 2026 | Trip Customizer`;
  const description = `Book customized ${destName} holiday packages with 4-star hotels, flights, private transfers, visa assistance, and 24x7 expert desk support. Best prices starting @ ₹14,999.`;
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
          url: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
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
      images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
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

  const matchedPackages = DEMO_PACKAGES.filter((p) => {
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

    // Direct Destination / Country Match
    if (dSlug === rawSlug || dSlug.includes(rawSlug) || dest.includes(rawSlug) || country.includes(rawSlug)) {
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
      (dest.includes('kerala') ||
        dest.includes('coorg') ||
        dest.includes('wayanad') ||
        dest.includes('munnar') ||
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

    return false;
  });

  // Fail-safe fallback: If specific slug match is empty, show relevant category packages so 0 packages is NEVER displayed
  const displayPackages = matchedPackages.length > 0
    ? matchedPackages
    : DEMO_PACKAGES.filter((p) => {
        const isIntlSlug = [
          'dubai', 'uae', 'bali', 'thailand', 'singapore', 'maldives', 'switzerland',
          'vietnam', 'japan', 'australia', 'azerbaijan', 'bhutan', 'sri-lanka', 'malaysia',
          'nepal', 'europe', 'international'
        ].some((s) => rawSlug.includes(s));
        return isIntlSlug ? p.isInternational : !p.isInternational;
      });

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
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
    </>
  );
}
