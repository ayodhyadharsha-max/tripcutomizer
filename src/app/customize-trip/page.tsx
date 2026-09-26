import React from 'react';
import type { Metadata } from 'next';
import { BuildTripWizard } from '@/components/homepage/BuildTripWizard';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Custom Trip Architect Wizard: Design Your Customized Tour Package | Trip Customizer',
  description:
    'Tailor-make your dream vacation in 60 seconds. Choose destination, 4-star hotels, flights, and sightseeing vouchers with instant pricing & 24x7 expert support.',
  keywords: [
    'custom trip planner',
    'build custom tour package',
    'customize international trip',
    'customized holiday itinerary',
    'custom trip wizard',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/customize-trip',
  },
  openGraph: {
    title: 'Custom Trip Architect Wizard: Design Your Customized Tour Package | Trip Customizer',
    description: 'Build your customized holiday package in 60 seconds with instant itinerary PDF & 24x7 travel desk support.',
    url: 'https://www.tripcustomizer.com/customize-trip',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function CustomizeTripPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Trip Architect & Itinerary Builder',
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      logo: 'https://www.tripcustomizer.com/logo-square.png',
    },
    serviceType: 'Travel Package Customization',
    areaServed: ['IN', 'US', 'AE', 'GB', 'CA', 'AU', 'SG'],
    description: 'Tailor-make custom international and domestic holiday packages with flights, 4-star hotels, airport transfers, and sightseeing.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.tripcustomizer.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Customize Trip',
        item: 'https://www.tripcustomizer.com/customize-trip',
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-black text-slate-900">Custom Trip Architect Wizard</h1>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Build your own tailored holiday package with custom hotel tiers, flight preferences, and sightseeing vouchers in 60 seconds.
          </p>
        </div>

        <BuildTripWizard />
      </Container>
    </div>
  );
}
