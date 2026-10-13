import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCatalogPackages } from '@/data/packageCatalog';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

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

  if (matchedPackages.length === 0) {
    notFound();
  }

  const displayPackages = matchedPackages;

  const destName = rawSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
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
  );
}
