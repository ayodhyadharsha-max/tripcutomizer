import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Budget Thailand Tour Package for Couple Under 30k | Trip Customizer',
  description:
    'Book 5N/6D budget Thailand honeymoon & couple tour package under ₹30,000. Includes Bangkok, Pattaya, Coral Island speedboat tour, 4-star hotel stay & transfers.',
  keywords: [
    'budget thailand tour package for couple under 30k',
    'thailand tour package',
    'thailand honeymoon package under 30000',
    'bangkok pattaya tour package',
    'thailand travel package india',
    'Trip Customizer Thailand',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/thailand',
  },
  openGraph: {
    title: 'Budget Thailand Tour Package for Couple Under 30k | Trip Customizer',
    description:
      'Book 5N/6D budget Thailand honeymoon & couple tour package under ₹30,000. Includes Bangkok, Pattaya, Coral Island speedboat tour, 4-star hotel stay & transfers.',
    url: 'https://www.tripcustomizer.com/holidays/thailand',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Budget Thailand Tour Package for Couple Under 30k',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Thailand Tour Package for Couple Under 30k | Trip Customizer',
    description:
      'Book 5N/6D budget Thailand honeymoon & couple tour package under ₹30,000. Includes Bangkok, Pattaya, Coral Island speedboat tour, 4-star hotel stay & transfers.',
    images: ['https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function ThailandPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('thailand') || p.name.toLowerCase().includes('thailand')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the Budget Thailand Tour Package for Couples under 30k?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The package includes 5 Nights / 6 Days stay (3N Pattaya + 2N Bangkok) in 4-star hotels, daily breakfast, Coral Island Speedboat Tour with Lunch, Alcazar Show, Bangkok City & Temple Tour, and airport transfers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do Indian passport holders get Visa on Arrival in Thailand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Indian citizens currently enjoy Visa Exemption / Visa on Arrival in Thailand for easy, hassle-free travel.',
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
        title="Budget Thailand Tour Package for Couple Under 30k"
        subtitle="Explore Bangkok & Pattaya with 4-star hotel stay, Coral Island speedboat tour, temple visits, and airport transfers."
        defaultDestinationSlug="thailand"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
