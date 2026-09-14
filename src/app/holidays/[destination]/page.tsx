import React from 'react';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export default function DestinationListingPage({ params }: { params: { destination: string } }) {
  const rawSlug = params.destination.toLowerCase().trim();

  const matchedPackages = DEMO_PACKAGES.filter((p) => {
    const dSlug = p.destinationSlug.toLowerCase();
    const dest = p.destination.toLowerCase();
    const name = p.name.toLowerCase();
    const region = p.region.toLowerCase();
    const country = p.country.toLowerCase();

    // Category match
    if (rawSlug === 'international' && p.isInternational) return true;
    if (rawSlug === 'india' && !p.isInternational) return true;

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

    // Regional & State aliases for mega menu links
    if (
      rawSlug === 'himachal' &&
      (dest.includes('manali') ||
        dest.includes('shimla') ||
        dest.includes('spiti') ||
        dest.includes('dharamshala') ||
        dest.includes('kasol') ||
        name.includes('himachal'))
    ) {
      return true;
    }

    if (
      rawSlug === 'uttarakhand' &&
      (dest.includes('nainital') ||
        dest.includes('mussoorie') ||
        dest.includes('rishikesh') ||
        dest.includes('corbett') ||
        dest.includes('auli') ||
        dest.includes('char dham') ||
        name.includes('uttarakhand'))
    ) {
      return true;
    }

    if (
      rawSlug === 'rajasthan' &&
      (dest.includes('jaisalmer') ||
        dest.includes('khatu') ||
        dest.includes('ranthambore') ||
        dest.includes('mount abu') ||
        dest.includes('rajasthan') ||
        name.includes('rajasthan'))
    ) {
      return true;
    }

    if (
      rawSlug === 'kerala' &&
      (dest.includes('kerala') ||
        dest.includes('coorg') ||
        dest.includes('wayanad') ||
        dest.includes('munnar') ||
        name.includes('kerala'))
    ) {
      return true;
    }

    if (
      (rawSlug === 'north-east' || rawSlug === 'northeast' || rawSlug === 'sikkim') &&
      (dest.includes('meghalaya') ||
        dest.includes('kaziranga') ||
        dest.includes('tawang') ||
        dest.includes('sikkim') ||
        dest.includes('darjeeling') ||
        dest.includes('north east') ||
        region.includes('north-east'))
    ) {
      return true;
    }

    if (
      (rawSlug === 'gujarat' || rawSlug === 'kutch') &&
      (dest.includes('kutch') ||
        dest.includes('dwarka') ||
        dest.includes('statue') ||
        dest.includes('gir') ||
        dest.includes('gujarat'))
    ) {
      return true;
    }

    if (
      (rawSlug === 'up' || rawSlug === 'uttar-pradesh' || rawSlug === 'ayodhya') &&
      (dest.includes('ayodhya') || dest.includes('varanasi') || dest.includes('lucknow') || dest.includes('mathura'))
    ) {
      return true;
    }

    // Additional international aliases
    if (
      (rawSlug === 'dubai' || rawSlug === 'uae') &&
      (dest.includes('dubai') || dest.includes('uae') || name.includes('dubai') || p.id === 'pkg-intl-dubai')
    ) return true;

    if (
      (rawSlug === 'bali' || rawSlug === 'indonesia') &&
      (dest.includes('bali') || dest.includes('indonesia') || name.includes('bali') || p.id === 'pkg-intl-bali')
    ) return true;

    if (
      rawSlug === 'thailand' &&
      (dest.includes('thailand') || name.includes('thailand') || p.id === 'pkg-intl-thailand')
    ) return true;

    if (
      rawSlug === 'singapore' &&
      (dest.includes('singapore') || name.includes('singapore') || p.id === 'pkg-intl-singapore')
    ) return true;

    if (
      rawSlug === 'maldives' &&
      (dest.includes('maldives') || name.includes('maldives') || p.id === 'pkg-intl-maldives')
    ) return true;

    return false;
  });

  // Fail-safe fallback: If specific slug match is empty, show relevant category packages so 0 packages is NEVER displayed
  const displayPackages = matchedPackages.length > 0
    ? matchedPackages
    : DEMO_PACKAGES.filter((p) => {
        const isIntlSlug = [
          'dubai', 'uae', 'bali', 'thailand', 'singapore', 'maldives', 'switzerland',
          'vietnam', 'japan', 'australia', 'azerbaijan', 'bhutan', 'sri-lanka', 'malaysia',
          'nepal', 'europe', 'international'
        ].some((s) => rawSlug.includes(s));
        return isIntlSlug ? p.isInternational : !p.isInternational;
      });

  const destName = rawSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <HolidayListingView
      initialPackages={displayPackages}
      title={`${destName} Tour Packages`}
      subtitle={`Explore handcrafted ${destName} holiday packages with flights, luxury hotels, private cabs & 24x7 travel support.`}
      badgeText={`${destName} Verified Itineraries`}
      defaultDestinationSlug={rawSlug}
    />
  );
}
