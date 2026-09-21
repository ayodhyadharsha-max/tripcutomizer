import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Bali Honeymoon Package with Private Pool Villa (5N/6D) | Trip Customizer',
  description:
    'Book customized Bali honeymoon package featuring private pool villa, floating breakfast, Nusa Penida island tour, couples spa treatment & airport transfers.',
  keywords: [
    'Bali honeymoon package',
    'Bali private pool villa package',
    'Bali 5N/6D tour package',
    'Bali floating breakfast couples package',
    'Nusa Penida island tour Bali',
    'Trip Customizer Bali',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/bali',
  },
  openGraph: {
    title: 'Bali Honeymoon Package with Private Pool Villa (5N/6D) | Trip Customizer',
    description:
      'Book customized Bali honeymoon package featuring private pool villa, floating breakfast, Nusa Penida island tour, couples spa treatment & airport transfers.',
    url: 'https://www.tripcustomizer.com/holidays/bali',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Bali Honeymoon Package with Private Pool Villa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Honeymoon Package with Private Pool Villa (5N/6D) | Trip Customizer',
    description:
      'Book customized Bali honeymoon package featuring private pool villa, floating breakfast, Nusa Penida island tour, couples spa treatment & airport transfers.',
    images: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function BaliPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('bali') || p.name.toLowerCase().includes('bali')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the Bali Honeymoon Package with Private Pool Villa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 5N/6D Bali Honeymoon Package includes luxury stay in a private pool villa, daily floating breakfast, romantic candlelit dinner, Nusa Penida Island Speedboat Day Tour, Kintamani Volcano tour, couples Balinese spa, and airport transfers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Visa on Arrival available for Indian travelers in Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Indian passport holders get hassle-free Visa on Arrival (VoA) at Ngurah Rai International Airport (Denpasar, Bali).',
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
        title="Bali Honeymoon Package with Private Pool Villa (5N/6D)"
        subtitle="Enjoy private pool villa luxury, floating breakfasts, Nusa Penida island speedboat tour, and candlelit dinners."
        defaultDestinationSlug="bali"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
