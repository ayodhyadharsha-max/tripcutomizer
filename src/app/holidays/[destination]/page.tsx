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

    if (
      (rawSlug === 'europe' || rawSlug === 'switzerland' || rawSlug === 'uk') &&
      (country.includes('europe') || dest.includes('europe') || name.includes('europe') || p.isInternational)
    ) {
      return true;
    }

    return false;
  });

  // Never fall back to ALL packages (Ayodhya) if slug doesn't match
  const displayPackages = matchedPackages;

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
