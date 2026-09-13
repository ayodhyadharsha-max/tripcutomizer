import React from 'react';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export default function IndiaHolidaysPage() {
  const indiaPackages = DEMO_PACKAGES.filter((p) => !p.isInternational);

  return (
    <HolidayListingView
      initialPackages={indiaPackages}
      title="India Tour Packages"
      subtitle="Explore Kerala, Himachal, Kashmir, Rajasthan, Uttarakhand, Andaman & Char Dham Yatra tours with private cars & resort stays."
      badgeText="Incredible Domestic Destinations"
      defaultCategory="INDIA"
      defaultRegion="ALL"
    />
  );
}
