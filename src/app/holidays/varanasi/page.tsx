import React from 'react';
import type { Metadata } from 'next';
import { getAllCatalogPackages } from '@/data/packageCatalog';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Varanasi Luxury Ganga Aarti Ghat Tour Package',
  description:
    'Book 3N/4D Varanasi spiritual tour package featuring Dashashwamedh Ghat Ganga Aarti VIP boat view, Kashi Vishwanath Temple VIP darshan & 4-star hotel stay.',
  keywords: [
    'varanasi luxury ganga aarti ghat tour',
    'varanasi tour package',
    'kashi vishwanath vip darshan package',
    'sarnath tour package',
    'varanasi spiritual tour india',
    'Trip Customizer Varanasi',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/varanasi',
  },
  openGraph: {
    title: 'Varanasi Luxury Ganga Aarti Ghat Tour Package | Trip Customizer',
    description:
      'Book 3N/4D Varanasi spiritual tour package featuring Dashashwamedh Ghat Ganga Aarti VIP boat view, Kashi Vishwanath Temple VIP darshan & 4-star hotel stay.',
    url: 'https://www.tripcustomizer.com/holidays/varanasi',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://www.tripcustomizer.com/destinations/verified/varanasi-ganga-aarti.jpg',
        width: 1200,
        height: 630,
        alt: 'Varanasi Luxury Ganga Aarti Ghat Tour Package',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varanasi Luxury Ganga Aarti Ghat Tour Package | Trip Customizer',
    description:
      'Book 3N/4D Varanasi spiritual tour package featuring Dashashwamedh Ghat Ganga Aarti VIP boat view, Kashi Vishwanath Temple VIP darshan & 4-star hotel stay.',
    images: ['https://www.tripcustomizer.com/destinations/verified/varanasi-ganga-aarti.jpg'],
  },
};

export default function VaranasiPage() {
  const matchedPackages = getAllCatalogPackages().filter(
    (p) =>
      !p.isInternational &&
      (p.destinationSlug.toLowerCase().includes('varanasi') ||
        p.destinationSlug.toLowerCase().includes('kashi') ||
        p.name.toLowerCase().includes('varanasi') ||
        p.name.toLowerCase().includes('kashi'))
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the Varanasi Luxury Ganga Aarti Ghat Tour Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Varanasi Package includes Shri Kashi Vishwanath Corridor VIP Darshan, Subah-e-Banaras Morning Boat Ride, Dashashwamedh Ghat Evening Ganga Aarti from Reserved Boat, Sarnath Buddhist Stupa excursion, and 4-star hotel accommodation with private AC transport.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we add Ayodhya and Prayagraj to the Varanasi tour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer offers customized 5-Day and 7-Day Varanasi – Ayodhya Ram Mandir – Prayagraj Sangam heritage circuit packages.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HolidayListingView
        title="Varanasi Luxury Ganga Aarti Ghat Tour Package"
        subtitle="Experience Shri Kashi Vishwanath Temple VIP Darshan, Reserved Ganga Aarti boat view, Morning Subah-e-Banaras & Sarnath."
        defaultDestinationSlug="varanasi"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : getAllCatalogPackages().slice(0, 3)}
      />
    </>
  );
}
