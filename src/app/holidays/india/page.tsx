import React from 'react';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export default function IndiaHolidaysPage() {
  return (
    <HolidayListingView
      title="India Tour Packages"
      subtitle="Explore Kerala, Himachal, Kashmir, Rajasthan, Uttarakhand, Andaman & Char Dham Yatra tours with private cars & resort stays."
      badgeText="Incredible Domestic Destinations"
      defaultCategory="INDIA"
      defaultRegion="ALL"
    />
  );
}
