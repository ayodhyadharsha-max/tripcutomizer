import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Vietnam Customized Itinerary 7 Days Package | Trip Customizer',
  description:
    'Book 6N/7D customized Vietnam tour package. Includes Hanoi, Ha Long Bay luxury cruise, Da Nang, Ba Na Hills Golden Bridge, Hoi An & e-visa assistance.',
  keywords: [
    'vietnam customized itinerary 7 days package',
    'vietnam tour package',
    'ha long bay cruise package',
    'ba na hills golden bridge tour',
    'vietnam 7 days itinerary india',
    'Trip Customizer Vietnam',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/vietnam',
  },
  openGraph: {
    title: 'Vietnam Customized Itinerary 7 Days Package | Trip Customizer',
    description:
      'Book 6N/7D customized Vietnam tour package. Includes Hanoi, Ha Long Bay luxury cruise, Da Nang, Ba Na Hills Golden Bridge, Hoi An & e-visa assistance.',
    url: 'https://www.tripcustomizer.com/holidays/vietnam',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Vietnam Customized Itinerary 7 Days Package',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vietnam Customized Itinerary 7 Days Package | Trip Customizer',
    description:
      'Book 6N/7D customized Vietnam tour package. Includes Hanoi, Ha Long Bay luxury cruise, Da Nang, Ba Na Hills Golden Bridge, Hoi An & e-visa assistance.',
    images: ['https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function VietnamPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('vietnam') || p.name.toLowerCase().includes('vietnam')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What highlights are included in the 7 Days Vietnam Customized Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 7 Days Vietnam Package covers Hanoi Old Quarter, Overnight Ha Long Bay Luxury Cruise with Kayaking, Da Nang Beach, Ba Na Hills & Golden Bridge Cable Car, and Ancient Hoi An Lantern Town.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trip Customizer handle Vietnam e-Visa for Indian travelers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer processes official 30-day single/multiple entry Vietnam e-visas with guaranteed approval.',
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
        title="Vietnam Customized Itinerary 7 Days Package"
        subtitle="Discover Hanoi, Ha Long Bay overnight cruise, Ba Na Hills Golden Bridge, Hoi An & express e-visa."
        defaultDestinationSlug="vietnam"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
