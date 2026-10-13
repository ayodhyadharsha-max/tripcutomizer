import React from 'react';
import type { Metadata } from 'next';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'India Tour Packages 2026: 3,500+ Curated Domestic Holiday Trips',
  description:
    'Explore 3,500+ curated India tour packages. Handcrafted holiday trips across Kerala, Kashmir, Himachal, Rajasthan, Uttarakhand, Andaman & Char Dham with 4-star hotels, cabs & 24x7 desk support.',
  keywords: [
    'India tour packages',
    'domestic holiday packages india',
    'kerala tour packages',
    'kashmir tour packages',
    'himachal tour packages',
    'rajasthan holiday packages',
    'char dham yatra packages',
    'andaman tour packages',
    'ayodhya tour packages',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/india',
  },
  openGraph: {
    title: 'India Tour Packages 2026: 3,500+ Curated Domestic Holiday Trips | Trip Customizer',
    description:
      'Explore 3,500+ curated India holiday packages with 4-star hotels, private cabs, breakfasts & 24x7 expert support.',
    url: 'https://www.tripcustomizer.com/holidays/india',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Tour Packages 2026 | Trip Customizer',
    description: 'Book customized domestic holiday packages across 30+ destinations in India.',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function IndiaHolidaysPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'India Domestic Tour Packages Catalog 2026',
    url: 'https://www.tripcustomizer.com/holidays/india',
    numberOfItems: 3500,
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      logo: 'https://www.tripcustomizer.com/logo-square.png',
    },
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Kerala Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/kerala',
        description: 'Munnar tea hills, Alleppey houseboats, and Kovalam beaches with 4-star resort stays.',
      },
      {
        '@type': 'Offer',
        name: 'Kashmir Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/kashmir',
        description: 'Srinagar Dal Lake shikara, Gulmarg snow gondola, and Pahalgam valley tours.',
      },
      {
        '@type': 'Offer',
        name: 'Char Dham Yatra Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/char-dham',
        description: 'Sacred pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath with VIP darshan assistance.',
      },
      {
        '@type': 'Offer',
        name: 'Rajasthan Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/rajasthan',
        description: 'Jaipur, Jodhpur, and Udaipur royal palace tours with heritage hotel stays.',
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
        name: 'India Tour Packages',
        item: 'https://www.tripcustomizer.com/holidays/india',
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
        title="India Tour Packages"
        subtitle="Explore Kerala, Himachal, Kashmir, Rajasthan, Uttarakhand, Andaman & Char Dham Yatra tours with private cars & resort stays."
        badgeText="Incredible Domestic Destinations"
        defaultCategory="INDIA"
        defaultRegion="ALL"
      />
    </>
  );
}
