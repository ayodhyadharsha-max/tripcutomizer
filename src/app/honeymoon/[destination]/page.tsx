import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCatalogPackages } from '@/data/packageCatalog';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';
import { AEODirectAnswerBox } from '@/components/holidays/AEODirectAnswerBox';

interface HoneymoonPageProps {
  params: {
    destination: string;
  };
}

export async function generateMetadata({ params }: HoneymoonPageProps): Promise<Metadata> {
  const rawSlug = params.destination.toLowerCase().trim();
  const destName = rawSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const title = `${destName} Honeymoon Packages 2026 | Best Romantic Couple Deals - TripCustomizer`;
  const description = `Book exclusive ${destName} Honeymoon Tour Packages with luxury resorts, candlelight dinners, private transfers, and special couple inclusions. 24x7 support & best rates guaranteed.`;
  const canonicalUrl = `https://www.tripcustomizer.com/honeymoon/${rawSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
    },
  };
}

export default function HoneymoonDestinationPage({ params }: HoneymoonPageProps) {
  const rawSlug = params.destination.toLowerCase().trim();
  const isIndia = rawSlug === 'india';
  const isIntl = rawSlug === 'international';
  const allCatalog = getAllCatalogPackages();

  // Filter packages matching destination or category with strict Honeymoon theme
  const matchedPackages = allCatalog.filter((p) => {
    // Strict honeymoon theme classification
    if (!(p.theme || '').toLowerCase().includes('honeymoon')) return false;

    // Category match
    if (isIndia && !p.isInternational) return true;
    if (isIntl && p.isInternational) return true;

    const dSlug = (p.destinationSlug || '').toLowerCase();
    const dest = (p.destination || '').toLowerCase();
    const name = (p.name || '').toLowerCase();
    const region = (p.region || '').toLowerCase();
    const country = (p.country || '').toLowerCase();

    // Direct match
    if (
      dSlug === rawSlug ||
      dSlug.includes(rawSlug) ||
      dest.includes(rawSlug) ||
      name.includes(rawSlug) ||
      region.includes(rawSlug) ||
      country.includes(rawSlug)
    ) {
      return true;
    }

    // Regional & State aliases
    if (
      rawSlug === 'himachal' &&
      (dest.includes('manali') ||
        dest.includes('shimla') ||
        dest.includes('spiti') ||
        dest.includes('dharamshala') ||
        dest.includes('kasol') ||
        name.includes('himachal'))
    ) return true;

    if (
      rawSlug === 'uttarakhand' &&
      (dest.includes('nainital') ||
        dest.includes('mussoorie') ||
        dest.includes('rishikesh') ||
        dest.includes('corbett') ||
        dest.includes('auli') ||
        dest.includes('char dham') ||
        name.includes('uttarakhand'))
    ) return true;

    if (
      rawSlug === 'rajasthan' &&
      (dest.includes('jaisalmer') ||
        dest.includes('khatu') ||
        dest.includes('ranthambore') ||
        dest.includes('mount abu') ||
        dest.includes('rajasthan') ||
        name.includes('rajasthan'))
    ) return true;

    if (
      rawSlug === 'kerala' &&
      (dest.includes('kerala') ||
        dest.includes('coorg') ||
        dest.includes('wayanad') ||
        dest.includes('munnar') ||
        name.includes('kerala'))
    ) return true;

    if (
      (rawSlug === 'north-east' || rawSlug === 'northeast' || rawSlug === 'sikkim') &&
      (dest.includes('meghalaya') ||
        dest.includes('kaziranga') ||
        dest.includes('tawang') ||
        dest.includes('sikkim') ||
        dest.includes('darjeeling') ||
        dest.includes('north east') ||
        region.includes('north-east'))
    ) return true;

    if (
      (rawSlug === 'kashmir' || rawSlug === 'ladakh') &&
      (dest.includes('srinagar') ||
        dest.includes('gulmarg') ||
        dest.includes('leh') ||
        dest.includes('ladakh') ||
        dest.includes('kashmir'))
    ) return true;

    if (
      rawSlug === 'bali' &&
      (dest.includes('bali') || name.includes('bali') || country.includes('indonesia'))
    ) return true;

    if (
      rawSlug === 'dubai' &&
      (dest.includes('dubai') || name.includes('dubai') || country.includes('united arab emirates'))
    ) return true;

    if (
      rawSlug === 'thailand' &&
      (dest.includes('thailand') || name.includes('thailand'))
    ) return true;

    if (
      rawSlug === 'maldives' &&
      (dest.includes('maldives') || name.includes('maldives'))
    ) return true;

    if (
      rawSlug === 'europe' &&
      (p.isInternational && (region.includes('europe') || country.includes('europe') || dest.includes('switzerland') || dest.includes('paris') || dest.includes('italy') || dest.includes('lucerne')))
    ) return true;

    if (
      rawSlug === 'switzerland' &&
      (p.isInternational && (dest.includes('switzerland') || dest.includes('lucerne') || dest.includes('zurich') || name.includes('swiss') || name.includes('switzerland')))
    ) return true;

    return false;
  });

  const destName = rawSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Gracefully fallback to main destination if no strict honeymoon filter matched
  const fallbackPackages = matchedPackages.length > 0
    ? matchedPackages
    : allCatalog.filter((p) => {
        const dSlug = (p.destinationSlug || '').toLowerCase();
        const dest = (p.destination || '').toLowerCase();
        return dSlug === rawSlug || dSlug.includes(rawSlug) || dest.includes(rawSlug);
      });

  if (fallbackPackages.length === 0) {
    notFound();
  }

  const displayPackages = fallbackPackages;
  const canonicalUrl = `https://www.tripcustomizer.com/honeymoon/${rawSlug}`;

  const minPrice = displayPackages.length > 0
    ? Math.min(...displayPackages.map((p) => (p.discountPrice || p.startingPrice || 18999)))
    : 18999;
  const maxPrice = displayPackages.length > 0
    ? Math.max(...displayPackages.map((p) => (p.startingPrice || p.discountPrice || 65000)))
    : 65000;
  const recommendedDays = displayPackages.length > 0
    ? Math.round(displayPackages.reduce((acc, p) => acc + (p.durationDays || 5), 0) / displayPackages.length)
    : 6;

  const speakableWebPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${destName} Honeymoon Packages 2026`,
    url: canonicalUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2.aeo-question', '.speakable-content', '.aeo-answer'],
    },
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
        name: 'Honeymoon Packages',
        item: 'https://www.tripcustomizer.com/honeymoon',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${destName} Honeymoon Packages`,
        item: canonicalUrl,
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${destName} Honeymoon Tour Packages 2026`,
    numberOfItems: displayPackages.length,
    itemListElement: displayPackages.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.name,
      url: `https://www.tripcustomizer.com/holidays/${p.destinationSlug}/${p.slug}`,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does a ${destName} honeymoon tour package cost?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `A customized ${destName} honeymoon package starts from ₹${minPrice.toLocaleString('en-IN')} to ₹${maxPrice.toLocaleString('en-IN')} per couple. This package includes verified 4-star/5-star honeymoon suites, candlelight dinners, private sightseeing cabs, and 24x7 trip concierge.`,
        },
      },
      {
        '@type': 'Question',
        name: `What makes ${destName} a great honeymoon destination?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${destName} offers scenic romance, luxury couple accommodations, secluded viewpoints, and private dining experiences perfectly tailored for newlyweds.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can we customize ${destName} honeymoon packages with private cabs and flights?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, all ${destName} honeymoon packages can be booked with round-trip flights from your nearest city, private AC cabs, 4-star/5-star honeymoon suites, and special candlelit dinners.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-slate-900 py-20 text-center text-white font-bold">Loading Honeymoon Packages...</div>}>
        <HolidayListingView
          initialPackages={displayPackages.slice(0, 12)}
          title={`${destName} Honeymoon Packages`}
          subtitle={`Romantic Couple Escapes in ${destName} with luxury resorts, candlelight dinners, private cabs & 24x7 honeymoon support.`}
          badgeText={`${destName} Couple Specials & Honeymoon Offers`}
          defaultCategory={isIndia ? 'INDIA' : isIntl ? 'INTERNATIONAL' : 'ALL'}
          defaultDestinationSlug={isIndia || isIntl ? undefined : rawSlug}
          defaultTheme="Honeymoon"
        />
      </Suspense>

      {/* Crawlable HTML Section for Search Bots & Voice AEO */}
      <section className="bg-slate-100 py-12 border-t border-slate-200 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">
              {destName} Honeymoon Packages 2026: Romantic Couple Escapes
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
              Celebrate your love with Trip Customizer&apos;s handcrafted {destName} honeymoon packages. Enjoy luxury romantic resorts, candlelit dinners, couple spa sessions, private airport transfers, and 24x7 senior concierge support.
            </p>
          </header>

          <AEODirectAnswerBox
            destName={`${destName} Honeymoon`}
            destinationSlug={rawSlug}
            isInternational={isIntl}
            minPrice={minPrice}
            maxPrice={maxPrice}
            recommendedDays={recommendedDays}
          />
        </div>
      </section>
    </>
  );
}
