import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Kedarnath Badrinath Divine Yatra Package Price 2026 | Trip Customizer',
  description:
    'Book 5N/6D Kedarnath Badrinath Do Dham Yatra divine tour package. Includes Haridwar Ganga Aarti, Sonprayag transport, VIP Puja assistance & 4-star hotel stay.',
  keywords: [
    'kedarnath badrinath divine yatra package price',
    'kedarnath tour package 2026',
    'do dham yatra package haridwar',
    'kedarnath helicopter ticket package',
    'badrinath dham yatra',
    'Trip Customizer Kedarnath',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/kedarnath',
  },
  openGraph: {
    title: 'Kedarnath Badrinath Divine Yatra Package Price 2026 | Trip Customizer',
    description:
      'Book 5N/6D Kedarnath Badrinath Do Dham Yatra divine tour package. Includes Haridwar Ganga Aarti, Sonprayag transport, VIP Puja assistance & 4-star hotel stay.',
    url: 'https://www.tripcustomizer.com/holidays/kedarnath',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Kedarnath Badrinath Divine Yatra Package Price 2026',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Badrinath Divine Yatra Package Price 2026 | Trip Customizer',
    description:
      'Book 5N/6D Kedarnath Badrinath Do Dham Yatra divine tour package. Includes Haridwar Ganga Aarti, Sonprayag transport, VIP Puja assistance & 4-star hotel stay.',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function KedarnathPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('kedarnath') ||
    p.destinationSlug.toLowerCase().includes('char-dham') ||
    p.name.toLowerCase().includes('kedarnath')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the 5N/6D Kedarnath Badrinath Do Dham Yatra Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Do Dham Yatra Package covers Haridwar, Guptkashi, Sonprayag, Kedarnath Ji Darshan, Badrinath Ji Darshan, Mana Village (India’s first village), and Rishikesh with private AC cab transfers, hotel stays, and biometric registration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can helicopter tickets be added for Kedarnath trek?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer offers optional Kedarnath Helicopter Shuttle booking from Phata / Sirsi / Guptkashi helipads.',
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
        title="Kedarnath Badrinath Divine Yatra Package Price 2026"
        subtitle="Perform sacred Do Dham Yatra covering Kedarnath Ji & Badrinath Ji with private AC transport, hotel stays & registration assistance."
        defaultDestinationSlug="kedarnath"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
