import React from 'react';
import { getAllCatalogPackages } from '@/data/packageCatalog';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export default function IndiaHolidaysPage() {
  const indiaPackages = getAllCatalogPackages().filter((p) => !p.isInternational);

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
