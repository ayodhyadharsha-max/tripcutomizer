import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
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
    canonical: 'https://www.tripcustomizer.com/holidays/char-dham',
  },
  openGraph: {
    title: 'Char Dham Yatra Sacred Tour Package 2026 (Ayodhya & Delhi Departure) | Trip Customizer',
    description:
      'Book 10N/11D Char Dham Yatra divine tour package covering Yamunotri, Gangotri, Kedarnath & Badrinath. Includes AC transport, hotel stays, puja assistance & meals.',
    url: 'https://www.tripcustomizer.com/holidays/char-dham',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
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
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function HolidaysCharDhamPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HolidayListingView
        title="Char Dham Yatra Sacred Tour Package 2026 (Ayodhya & Delhi Departure)"
        subtitle="Embark on the holy 10N/11D yatra covering Yamunotri, Gangotri, Kedarnath & Badrinath with AC transport, hotel stays, and puja assistance."
        defaultDestinationSlug="char-dham"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
