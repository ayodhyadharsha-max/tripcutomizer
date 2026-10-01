import React from 'react';
import type { Metadata } from 'next';
import { DEMO_PACKAGES, HolidayPackage } from '@/data/packagesData';
import { PackageDetailClientView } from '@/components/holidays/PackageDetailClientView';

function getMatchedPackage(destinationParam: string, packageParam: string): HolidayPackage {
  const decodedPkgParam = decodeURIComponent(packageParam || '').toLowerCase().trim();
  const decodedDestParam = decodeURIComponent(destinationParam || '').toLowerCase().trim();

  // Multi-tier package lookup:
  // 1. Exact slug match
  let matchedPkg = DEMO_PACKAGES.find((p) => p.slug.toLowerCase() === decodedPkgParam);

  // 2. Exact ID match (e.g., "pkg-up-1" or "pkg-dubai-winter-sale-4n5d")
  if (!matchedPkg) {
    matchedPkg = DEMO_PACKAGES.find((p) => p.id.toLowerCase() === decodedPkgParam);
  }

  // 3. Match ID with "pkg-" prefix added
  if (!matchedPkg) {
    matchedPkg = DEMO_PACKAGES.find((p) => p.id.toLowerCase() === `pkg-${decodedPkgParam}`);
  }

  // 4. Match slug or ID with "pkg-" prefix stripped
  if (!matchedPkg) {
    const strippedParam = decodedPkgParam.replace(/^pkg-/, '');
    matchedPkg = DEMO_PACKAGES.find(
      (p) => p.slug.toLowerCase() === strippedParam || p.id.toLowerCase().replace(/^pkg-/, '') === strippedParam
    );
  }

  // 5. Substring match on slug, name, or ID
  if (!matchedPkg) {
    matchedPkg = DEMO_PACKAGES.find(
      (p) =>
        p.slug.toLowerCase().includes(decodedPkgParam) ||
        decodedPkgParam.includes(p.slug.toLowerCase()) ||
        p.name.toLowerCase().includes(decodedPkgParam)
    );
  }

  // 6. Destination match fallback: match first package of target destination
  if (!matchedPkg && decodedDestParam) {
    matchedPkg = DEMO_PACKAGES.find(
      (p) =>
        p.destinationSlug.toLowerCase() === decodedDestParam ||
        p.destination.toLowerCase().includes(decodedDestParam) ||
        decodedDestParam.includes(p.destinationSlug.toLowerCase()) ||
        p.name.toLowerCase().includes(decodedDestParam)
    );
  }

  // 7. Guaranteed non-null fallback
  return matchedPkg || DEMO_PACKAGES[0];
}

export async function generateMetadata({
  params,
}: {
  params: { destination: string; package: string };
}): Promise<Metadata> {
  const pkg = getMatchedPackage(params.destination, params.package);
  const price = pkg.discountPrice || pkg.startingPrice;
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
  const price = pkg.discountPrice || pkg.startingPrice;
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
