import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Ayodhya Ram Mandir VIP Darshan Tour Package | Trip Customizer',
  description:
    'Book customized Ayodhya spiritual tour package including Ram Janmabhoomi VIP darshan, Saryu Aarti, local AC transport & 4-star hotel stay.',
  keywords: [
    'ayodhya ram mandir vip darshan tour package',
    'ayodhya tour package',
    'ram janmabhoomi tour',
    'saryu aarti tour ayodhya',
    'ayodhya 4 star hotel package',
    'best travel agency for custom holiday packages ayodhya delhi',
    'Trip Customizer Ayodhya',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/ayodhya',
  },
  openGraph: {
    title: 'Ayodhya Ram Mandir VIP Darshan Tour Package | Trip Customizer',
    description:
      'Book customized Ayodhya spiritual tour package including Ram Janmabhoomi VIP darshan, Saryu Aarti, local AC transport & 4-star hotel stay.',
    url: 'https://www.tripcustomizer.com/holidays/ayodhya',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Ayodhya Ram Mandir VIP Darshan Tour Package',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayodhya Ram Mandir VIP Darshan Tour Package | Trip Customizer',
    description:
      'Book customized Ayodhya spiritual tour package including Ram Janmabhoomi VIP darshan, Saryu Aarti, local AC transport & 4-star hotel stay.',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function AyodhyaPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('ayodhya') ||
    p.name.toLowerCase().includes('ayodhya')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the Ayodhya Ram Mandir VIP Darshan Tour Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Ayodhya package includes Ram Janmabhoomi VIP Darshan Pass assistance, Hanuman Garhi visit, evening Saryu River Aarti, 4-star heritage hotel stay, daily breakfast, and private AC cab transfers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we combine Ayodhya with Varanasi and Prayagraj?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer offers customized 5-Day and 7-Day Ayodhya – Varanasi – Prayagraj Triveni Sangam heritage circuit packages.',
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
        title="Ayodhya Ram Mandir VIP Darshan Tour Package"
        subtitle="Experience Ram Janmabhoomi VIP Darshan, Hanuman Garhi, Saryu River Aarti, 4-star accommodation, and private AC transfers."
        defaultDestinationSlug="ayodhya"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
