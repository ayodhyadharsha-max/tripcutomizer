import React from 'react';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export default function InternationalHolidaysPage() {
  const intlPackages = DEMO_PACKAGES.filter((p) => p.isInternational);

  return (
    <HolidayListingView
      initialPackages={intlPackages}
      title="International Tour Packages"
      subtitle="Explore Europe, Dubai, Bali, Singapore, Maldives, Thailand & Japan with flights, visas, 4-star hotels & Indian meals."
      badgeText="Worldwide Destinations"
      defaultCategory="INTERNATIONAL"
      defaultRegion="International"
    />
  );
}
