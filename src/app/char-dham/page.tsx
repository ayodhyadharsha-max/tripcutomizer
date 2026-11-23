import React from 'react';
import type { Metadata } from 'next';
import { getAllCatalogPackages } from '@/data/packageCatalog';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Char Dham Yatra Sacred Tour Package 2026 (Ayodhya & Delhi Departure) | Trip Customizer',
  description:
    'Book 10N/11D Char Dham Yatra divine tour package covering Yamunotri, Gangotri, Kedarnath & Badrinath. Includes AC transport, hotel stays, puja assistance & meals.',
  keywords: [
    'Char Dham Yatra package 2026',
    'Char Dham tour package Ayodhya departure',
    'Char Dham tour package Delhi departure',
    'Kedarnath Badrinath Yatra package',
    'Yamunotri Gangotri Kedarnath Badrinath tour',
    'Trip Customizer Char Dham',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/char-dham',
  },
  openGraph: {
    title: 'Char Dham Yatra Sacred Tour Package 2026 (Ayodhya & Delhi Departure) | Trip Customizer',
    description:
      'Book 10N/11D Char Dham Yatra divine tour package covering Yamunotri, Gangotri, Kedarnath & Badrinath. Includes AC transport, hotel stays, puja assistance & meals.',
    url: 'https://www.tripcustomizer.com/char-dham',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://www.tripcustomizer.com/destinations/verified/chardham-kedarnath.jpg',
        width: 1200,
        height: 630,
        alt: 'Char Dham Yatra Sacred Tour Package 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Sacred Tour Package 2026 (Ayodhya & Delhi Departure) | Trip Customizer',
    description:
      'Book 10N/11D Char Dham Yatra divine tour package covering Yamunotri, Gangotri, Kedarnath & Badrinath. Includes AC transport, hotel stays, puja assistance & meals.',
    images: ['https://www.tripcustomizer.com/destinations/verified/chardham-kedarnath.jpg'],
  },
};

export default function CharDhamPage() {
  const allCatalog = getAllCatalogPackages();
  const matchedPackages = allCatalog.filter((p) =>
    p.destinationSlug.toLowerCase().includes('char-dham') ||
    p.destinationSlug.toLowerCase().includes('kedarnath') ||
    p.name.toLowerCase().includes('char dham') ||
    p.name.toLowerCase().includes('kedarnath')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What temples are covered in the 10N/11D Char Dham Yatra Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Char Dham Yatra package covers all four holy shrines of Uttarakhand: Yamunotri, Gangotri, Kedarnath Ji, and Badrinath Ji, along with Haridwar Ganga Aarti and Rishikesh.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are helicopter tickets and biometric registration included in the package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trip Customizer handles complete mandatory Uttarakhand Char Dham Yatra biometric registration and offers optional Kedarnath Helicopter ticket add-ons.',
        },
      },
    ],
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
        name: 'Char Dham Yatra',
        item: 'https://www.tripcustomizer.com/char-dham',
      },
    ],
  };

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Char Dham Yatra Sacred Tour Package 2026',
    description: 'Divine 10N/11D Char Dham pilgrimage covering Yamunotri, Gangotri, Kedarnath and Badrinath with VIP darshan and AC transport.',
    touristType: ['Pilgrims', 'Families', 'Senior Citizens'],
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      telephone: '+91-7408763401',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HolidayListingView
        title="Char Dham Yatra Sacred Tour Package 2026 (Ayodhya & Delhi Departure)"
        subtitle="Embark on the holy 10N/11D yatra covering Yamunotri, Gangotri, Kedarnath & Badrinath with AC transport, hotel stays, and puja assistance."
        defaultDestinationSlug="char-dham"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : allCatalog.slice(0, 3)}
      />
    </>
  );
}
