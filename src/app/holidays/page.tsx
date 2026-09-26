import React from 'react';
import type { Metadata } from 'next';
import { ThomasCookHolidayView } from '@/components/holidays/ThomasCookHolidayView';

export const metadata: Metadata = {
  title: 'Customized Tour Packages 2026: Domestic & International Holidays | Trip Customizer',
  description:
    'Book customized international & domestic tour packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 expert travel desk support.',
  keywords: [
    'tour packages 2026',
    'customized holiday packages',
    'international tour packages from india',
    'domestic holiday packages india',
    'bali tour packages',
    'thailand holiday package',
    'dubai tour packages',
    'ayodhya ram mandir package',
    'char dham yatra package',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays',
  },
  openGraph: {
    title: 'Customized Tour Packages 2026: Domestic & International Holidays | Trip Customizer',
    description: 'Book customized tour packages to Bali, Thailand, Europe, Dubai, Maldives & Ayodhya with flights and 4-star hotels.',
    url: 'https://www.tripcustomizer.com/holidays',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function HolidayListingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Trip Customizer Global Tour Packages Catalog 2026',
    url: 'https://www.tripcustomizer.com/holidays',
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      logo: 'https://www.tripcustomizer.com/logo-square.png',
    },
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'International Honeymoon Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/international',
        description: 'Customized international honeymoon packages to Bali, Maldives, Switzerland, and Paris.',
      },
      {
        '@type': 'Offer',
        name: 'Spiritual & Pilgrimage Tour Packages',
        url: 'https://www.tripcustomizer.com/holidays/ayodhya',
        description: 'Sacred spiritual yatras to Ayodhya Ram Mandir, Char Dham, Kashi, Kedarnath & Badrinath.',
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
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ThomasCookHolidayView />
    </>
  );
}
