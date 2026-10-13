import React from 'react';
import type { Metadata } from 'next';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'International Tour Packages 2026: 2,080+ Curated Worldwide Trips',
  description:
    'Book from 2,080+ curated international holiday packages across Europe, Dubai, Bali, Singapore, Maldives, Thailand & Japan. Includes flights, visa assistance, 4-star hotels & 24x7 expert support.',
  keywords: [
    'International tour packages',
    'international holiday packages from india',
    'dubai tour packages',
    'bali tour packages',
    'europe tour packages',
    'singapore holiday package',
    'maldives tour packages',
    'thailand holiday package',
    'japan tour package',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/international',
  },
  openGraph: {
    title: 'International Tour Packages 2026: 2,080+ Curated Worldwide Trips | Trip Customizer',
    description:
      'Book customized international tour packages across Europe, Dubai, Bali, Singapore, Maldives & Thailand with flights, visas, and 4-star hotels.',
    url: 'https://www.tripcustomizer.com/holidays/international',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Tour Packages 2026 | Trip Customizer',
    description: 'Book worldwide holiday packages with flights, visas, and 4-star hotels.',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function InternationalHolidaysPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'International Worldwide Tour Packages Catalog 2026',
    url: 'https://www.tripcustomizer.com/holidays/international',
    numberOfItems: 2080,
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      logo: 'https://www.tripcustomizer.com/logo-square.png',
    },
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Europe Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/europe',
        description: 'Switzerland, France, Italy, and UK scenic tours with Schengen visa guidance.',
      },
      {
        '@type': 'Offer',
        name: 'Dubai & UAE Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/dubai',
        description: 'Burj Khalifa, Desert Safari, Marina Dhow Cruise, and Abu Dhabi luxury tours.',
      },
      {
        '@type': 'Offer',
        name: 'Bali Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/bali',
        description: 'Private pool villas, Ubud cultural tours, and Nusa Penida island excursions.',
      },
      {
        '@type': 'Offer',
        name: 'Singapore Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/singapore',
        description: 'Marina Bay Sands, Universal Studios, and Gardens by the Bay family tours.',
      },
    ],
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
        name: 'Holidays',
        item: 'https://www.tripcustomizer.com/holidays',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'International Tour Packages',
        item: 'https://www.tripcustomizer.com/holidays/international',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HolidayListingView
        title="International Tour Packages"
        subtitle="Explore Europe, Dubai, Bali, Singapore, Maldives, Thailand & Japan with flights, visas, 4-star hotels & Indian meals."
        badgeText="Worldwide Destinations"
        defaultCategory="INTERNATIONAL"
        defaultRegion="ALL"
      />
    </>
  );
}
