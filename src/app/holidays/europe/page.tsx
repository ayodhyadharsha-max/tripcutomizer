import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Europe Tour Packages 10 Days Customized | Trip Customizer',
  description:
    'Book 9N/10D customized Europe tour package covering Paris, Swiss Alps, Mt Titlis, Venice & Rome with 4-star hotel stay, Schengen visa & flight options.',
  keywords: [
    'europe tour packages 10 days customized',
    'europe holiday package',
    'paris switzerland tour package',
    'schengen visa assistance india',
    'europe grand tour india',
    'Trip Customizer Europe',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/europe',
  },
  openGraph: {
    title: 'Europe Tour Packages 10 Days Customized | Trip Customizer',
    description:
      'Book 9N/10D customized Europe tour package covering Paris, Swiss Alps, Mt Titlis, Venice & Rome with 4-star hotel stay, Schengen visa & flight options.',
    url: 'https://www.tripcustomizer.com/holidays/europe',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Europe Tour Packages 10 Days Customized',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Europe Tour Packages 10 Days Customized | Trip Customizer',
    description:
      'Book 9N/10D customized Europe tour package covering Paris, Swiss Alps, Mt Titlis, Venice & Rome with 4-star hotel stay, Schengen visa & flight options.',
    images: ['https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function EuropePage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('europe') ||
    p.destinationSlug.toLowerCase().includes('switzerland') ||
    p.destinationSlug.toLowerCase().includes('paris') ||
    p.name.toLowerCase().includes('europe') ||
    p.name.toLowerCase().includes('switzerland')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which countries are covered in the 10 Days Customized Europe Tour Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 10 Days Europe Tour Package covers France (Paris Eiffel Tower & Seine Cruise), Switzerland (Zurich, Lucerne, Mt. Titlis cable car & Swiss Alps), and Italy (Venice Gondola Ride & Rome Colosseum).',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trip Customizer assist with Schengen Visa documentation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Trip Customizer provides complete end-to-end Schengen Visa documentation, VFS appointment booking, flight reservations, and cover letter support.',
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
        title="Europe Tour Packages 10 Days Customized"
        subtitle="Explore Paris, Swiss Alps, Mt. Titlis, Venice & Rome with 4-star hotel stay, Eurail train passes & Schengen visa guidance."
        defaultDestinationSlug="europe"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
