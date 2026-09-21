import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export const metadata: Metadata = {
  title: 'Dubai 5 Days Luxury Tour Package with Desert Safari @ ₹34,500 | Trip Customizer',
  description:
    'Book 5N/6D Dubai luxury desert & skyline extravaganza package. Includes 4-star hotel stay, dune bashing, Burj Khalifa entry tickets, Dhow cruise dinner & visa.',
  keywords: [
    'Dubai tour package',
    'Dubai 5 days luxury package',
    'Dubai desert safari package',
    'Burj Khalifa entry ticket package',
    'Dubai holiday packages India',
    'Trip Customizer Dubai',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/holidays/dubai',
  },
  openGraph: {
    title: 'Dubai 5 Days Luxury Tour Package with Desert Safari @ ₹34,500 | Trip Customizer',
    description:
      'Book 5N/6D Dubai luxury desert & skyline extravaganza package. Includes 4-star hotel stay, dune bashing, Burj Khalifa entry tickets, Dhow cruise dinner & visa.',
    url: 'https://www.tripcustomizer.com/holidays/dubai',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Dubai 5 Days Luxury Tour Package',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai 5 Days Luxury Tour Package with Desert Safari @ ₹34,500 | Trip Customizer',
    description:
      'Book 5N/6D Dubai luxury desert & skyline extravaganza package. Includes 4-star hotel stay, dune bashing, Burj Khalifa entry tickets, Dhow cruise dinner & visa.',
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function DubaiPage() {
  const matchedPackages = DEMO_PACKAGES.filter((p) =>
    p.destinationSlug.toLowerCase().includes('dubai') || p.name.toLowerCase().includes('dubai')
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the 5 Days Dubai Luxury Tour Package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The package includes 4-star luxury hotel stay with daily breakfast, Airport Transfers, Premium Desert Safari with Dune Bashing & BBQ Dinner, Burj Khalifa 124th Floor Observation Deck Tickets, and Marina Dhow Cruise Dinner.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trip Customizer assist with UAE Tourist Visa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Trip Customizer provides 100% express UAE tourist visa assistance with standard 24-48 hour approval turnaround time.',
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
        title="Dubai 5 Days Luxury Tour Package with Desert Safari"
        subtitle="Experience 4-Star luxury stay, dune bashing, Burj Khalifa 124th floor view, Marina Dhow Cruise, and express UAE visa."
        defaultDestinationSlug="dubai"
        initialPackages={matchedPackages.length > 0 ? matchedPackages : DEMO_PACKAGES.slice(0, 3)}
      />
    </>
  );
}
