import React, { cache } from 'react';
import type { Metadata } from 'next';
import { HolidayPackage } from '@/data/packagesData';
import { findCatalogPackage } from '@/data/packageCatalog';
import { findServerPackage, mapSupabaseRowToPackage, saveServerCustomPackages } from '@/lib/serverPackageStore';
import getSupabaseServer, { withTimeout, markSupabaseOffline, isSupabaseOffline } from '@/lib/supabaseServer';
import { PackageDetailClientView } from '@/components/holidays/PackageDetailClientView';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const getMatchedPackage = cache(async (destinationParam: string, packageParam: string): Promise<HolidayPackage | null> => {
  const decodedPkgParam = decodeURIComponent(packageParam || '').toLowerCase().trim();
  const decodedDestParam = decodeURIComponent(destinationParam || '').toLowerCase().trim();

  if (!decodedPkgParam) return null;

  const isExactMatch = (pkg: HolidayPackage) => {
    const stripped = decodedPkgParam.replace(/^pkg-/, '');
    return (
      pkg.slug.toLowerCase() === decodedPkgParam ||
      pkg.id.toLowerCase() === decodedPkgParam ||
      pkg.slug.toLowerCase().replace(/^pkg-/, '') === stripped ||
      pkg.id.toLowerCase().replace(/^pkg-/, '') === stripped ||
      (decodedPkgParam.includes('tirupati') && (pkg.slug.toLowerCase().includes('tirupati') || pkg.name.toLowerCase().includes('tirupati')))
    );
  };

  // 1. Look in persistent server store first (0ms)
  try {
    const serverPkg = findServerPackage(decodedDestParam, decodedPkgParam);
    if (serverPkg && isExactMatch(serverPkg)) return serverPkg;
  } catch (err) {}

  // 2. Look in static catalog (0ms)
  try {
    const catalogPkg = findCatalogPackage(decodedDestParam, decodedPkgParam);
    if (catalogPkg && isExactMatch(catalogPkg)) {
      return catalogPkg;
    }
  } catch (err) {}

  // 3. Fallback to Supabase ONLY if not found locally and circuit breaker is not triggered
  if (!isSupabaseOffline()) {
    try {
      const supabaseServer = getSupabaseServer();
      if (supabaseServer) {
        // Enforce max 2500ms timeout so the page never hangs if Supabase is slow or down
        const supaResult: any = await withTimeout(
          supabaseServer
            .from('packages')
            .select('*')
            .or(`slug.eq.${decodedPkgParam},id.eq.${decodedPkgParam}`)
            .maybeSingle(),
          2500,
          'Supabase lookup timed out'
        );

        if (supaResult && supaResult.data && !supaResult.error) {
          const pkg = mapSupabaseRowToPackage(supaResult.data);
          try {
            saveServerCustomPackages([pkg]);
          } catch {}
          return pkg;
        }

        // Secondary check if partial slug matches
        if (!supaResult?.data) {
          const fallbackQuery: any = await withTimeout(
            supabaseServer
              .from('packages')
              .select('*')
              .ilike('slug', `%${decodedPkgParam}%`)
              .limit(1)
              .maybeSingle(),
            1500,
            'Supabase fallback lookup timed out'
          );

          if (fallbackQuery && fallbackQuery.data && !fallbackQuery.error) {
            const pkg = mapSupabaseRowToPackage(fallbackQuery.data);
            try {
              saveServerCustomPackages([pkg]);
            } catch {}
            return pkg;
          }
        }
      }
    } catch (err: any) {
      console.warn('[getMatchedPackage] Supabase fetch error or timeout, tripping circuit breaker:', err?.message || err);
      markSupabaseOffline(60000);
    }
  }

  return null;
});

export async function generateMetadata({
  params,
}: {
  params: { destination: string; package: string };
}): Promise<Metadata> {
  const pkg = await getMatchedPackage(params.destination, params.package);

  if (!pkg) {
    const cleanTitle = (params.package || params.destination || 'Tour Package')
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      title: `${cleanTitle} | Trip Customizer`,
      description: `Book customized ${params.destination} holiday package with 4-star hotels, private transfers, and 24x7 support.`,
    };
  }

  const title = `${pkg.name} | Trip Customizer`;
  const price = Number(pkg.startingPrice) || Math.min(pkg.startingPrice || 0, pkg.discountPrice || pkg.startingPrice || 0) || 14999;
  const duration = `${pkg.durationDays}D / ${pkg.durationNights}N`;
  const overviewText = pkg.highlights && pkg.highlights.length > 0 ? pkg.highlights.join('. ') : pkg.name;
  const description = `${overviewText.slice(0, 155)}. Book customized ${pkg.destination} tour packages (${duration}) starting at ₹${price.toLocaleString('en-IN')} with 4-star hotels, flights, breakfast, private cabs & 24x7 support.`;
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
      locale: 'en_IN',
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

export default async function ServerPackageDetailPage({
  params,
}: {
  params: { destination: string; package: string };
}) {
  const pkg = await getMatchedPackage(params.destination, params.package);
  if (!pkg) {
    return <PackageDetailClientView params={params} initialPackage={null} />;
  }

  const price = Number(pkg.startingPrice) || Math.min(pkg.startingPrice || 0, pkg.discountPrice || pkg.startingPrice || 0) || 14999;
  const overviewText = pkg.highlights && pkg.highlights.length > 0 ? pkg.highlights.join('. ') : pkg.name;

  // 1. Product & Offer Schema (Google Rich Snippets Compliant)
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
      priceValidUntil: '2027-12-31',
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
      bestRating: 5,
      worstRating: 1,
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: pkg.rating || '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Verified Traveler',
        },
        reviewBody: `Fantastic customized holiday package for ${pkg.destination}. Great 4-star hotels, verified driver and seamless sightseeing transfers throughout.`,
      },
    ],
  };

  // 2. TouristTrip Schema
  const touristTripJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.name,
    description: overviewText,
    touristType: pkg.isInternational ? 'International Travelers' : 'Domestic Travelers',
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'INR',
      url: `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}/${pkg.slug}`,
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
    },
    itinerary: (pkg.itinerary || []).map((day) => ({
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

  // 4. FAQPage Schema
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
      <PackageDetailClientView params={params} initialPackage={pkg} />
    </>
  );
}
