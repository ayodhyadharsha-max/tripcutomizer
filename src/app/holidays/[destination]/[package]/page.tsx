import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DEMO_PACKAGES, HolidayPackage } from '@/data/packagesData';
import { findCatalogPackage } from '@/data/packageCatalog';
import { PackageDetailClientView } from '@/components/holidays/PackageDetailClientView';

function getMatchedPackage(destinationParam: string, packageParam: string): HolidayPackage | null {
  const decodedPkgParam = decodeURIComponent(packageParam || '').toLowerCase().trim();
  const decodedDestParam = decodeURIComponent(destinationParam || '').toLowerCase().trim();

  // Multi-tier package lookup (Exact match first across DEMO and 3,690+ catalog packages)
  return (
    findCatalogPackage(decodedDestParam, decodedPkgParam) ||
    DEMO_PACKAGES.find((p) => p.slug.toLowerCase() === decodedPkgParam || p.id.toLowerCase() === decodedPkgParam) ||
    null
  );
}

export async function generateMetadata({
  params,
}: {
  params: { destination: string; package: string };
}): Promise<Metadata> {
  const pkg = getMatchedPackage(params.destination, params.package);
  if (!pkg) {
    return {
      title: 'Tour Package Not Found',
      description: 'The requested tour package could not be found.',
      robots: { index: false, follow: false },
    };
  }
  const price = Math.min(pkg.startingPrice || 0, pkg.discountPrice || pkg.startingPrice || 0) || pkg.startingPrice || 14999;
  const duration = `${pkg.durationDays}D / ${pkg.durationNights}N`;

  const title = `${pkg.name} (${duration}) — ₹${price.toLocaleString('en-IN')} | Trip Customizer`;
  const overviewText = pkg.highlights && pkg.highlights.length > 0 ? pkg.highlights.join('. ') : pkg.name;
  const description = `${overviewText.slice(0, 155)}. Book customized ${pkg.destination} tour packages with 4-star hotels, flights, breakfast, private cabs & 24x7 support.`;
  const canonicalUrl = `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}/${pkg.slug}`;
  const imageUrl = pkg.heroImage || 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg';

  return {
    title,
    description,
    keywords: [
      pkg.name,
      `${pkg.destination} tour package`,
      `${pkg.destination} holiday package`,
      `${pkg.destination} itinerary`,
      `${duration} ${pkg.destination} tour`,
      'Trip Customizer',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Trip Customizer',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pkg.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function ServerPackageDetailPage({
  params,
}: {
  params: { destination: string; package: string };
}) {
  const pkg = getMatchedPackage(params.destination, params.package);
  if (!pkg) {
    notFound();
  }
  const price = Math.min(pkg.startingPrice || 0, pkg.discountPrice || pkg.startingPrice || 0) || pkg.startingPrice || 14999;
  const overviewText = pkg.highlights && pkg.highlights.length > 0 ? pkg.highlights.join('. ') : pkg.name;

  // 1. Product & Offer Schema
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.name,
    image: [pkg.heroImage || 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
    description: overviewText,
    sku: pkg.id,
    brand: {
      '@type': 'Brand',
      name: 'Trip Customizer',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}/${pkg.slug}`,
      priceCurrency: 'INR',
      price: price,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'TravelAgency',
        name: 'Trip Customizer',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: pkg.rating || 4.9,
      reviewCount: pkg.reviewsCount || 150,
    },
  };

  // 2. TouristTrip Schema
  const touristTripJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.name,
    description: overviewText,
    touristType: pkg.isInternational ? 'International Travelers' : 'Domestic Travelers',
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
    },
    itinerary: pkg.itinerary.map((day) => ({
      '@type': 'City',
      name: `Day ${day.dayNumber}: ${day.title}`,
      description: day.description,
    })),
  };

  // 3. BreadcrumbList Schema
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
        name: 'Holidays',
        item: 'https://www.tripcustomizer.com/holidays',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pkg.destination,
        item: `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: pkg.name,
        item: `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}/${pkg.slug}`,
      },
    ],
  };

  // 4. FAQPage Schema (if package faqs exist)
  const faqJsonLd = pkg.faqs && pkg.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pkg.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <PackageDetailClientView params={params} />
    </>
  );
}
