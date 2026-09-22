import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Azerbaijan Baku 5 Days Tour Package from Delhi | Trip Customizer',
  description:
    'Book 4N/5D Baku Azerbaijan tour package from Delhi. Includes Flame Towers, Ateshgah Fire Temple, Gobustan mud volcanoes, 4-star hotel stay & visa.',
  keywords: [
    'azerbaijan baku 5 days tour package from delhi',
    'baku tour package',
    'azerbaijan tour package india',
    'flame towers baku travel package',
    'baku 4-star hotel package',
    'Trip Customizer Baku',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/baku',
  },
  openGraph: {
    title: 'Azerbaijan Baku 5 Days Tour Package from Delhi | Trip Customizer',
    description:
      'Book 4N/5D Baku Azerbaijan tour package from Delhi. Includes Flame Towers, Ateshgah Fire Temple, Gobustan mud volcanoes, 4-star hotel stay & visa.',
    url: 'https://www.tripcustomizer.com/holidays/baku',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Azerbaijan Baku 5 Days Tour Package from Delhi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azerbaijan Baku 5 Days Tour Package from Delhi | Trip Customizer',
    description:
      'Book 4N/5D Baku Azerbaijan tour package from Delhi. Includes Flame Towers, Ateshgah Fire Temple, Gobustan mud volcanoes, 4-star hotel stay & visa.',
    images: ['https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function BakuPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('baku') ||
    p.destinationSlug.toLowerCase().includes('azerbaijan') ||
    p.name.toLowerCase().includes('baku') ||
    p.name.toLowerCase().includes('azerbaijan')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What attractions are included in the 5 Days Baku Azerbaijan Tour Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 5 Days Baku Tour Package includes Old City (Icherisheher) walking tour, Flame Towers, Heydar Aliyev Center, Ateshgah Fire Temple, Yanar Dag (Burning Mountain), Gobustan Rock Art & Mud Volcanoes, and 4-star hotel stay with daily breakfast.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to get Azerbaijan ASAN e-Visa for Indian citizens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trip Customizer provides 100% express ASAN e-visa processing for Azerbaijan, delivered directly to your email within 3 business days.',
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
        title="Azerbaijan Baku 5 Days Tour Package from Delhi"
        subtitle="Explore Old City Baku, Flame Towers, Ateshgah Fire Temple, Gobustan Mud Volcanoes & express e-Visa assistance."
        defaultDestinationSlug="baku"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
