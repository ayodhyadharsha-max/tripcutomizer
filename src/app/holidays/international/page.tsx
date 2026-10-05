import React from 'react';
import { HolidayListingView } from '@/components/holidays/HolidayListingView';

export default function InternationalHolidaysPage() {
  return (
    <HolidayListingView
      title="International Tour Packages"
      subtitle="Explore Europe, Dubai, Bali, Singapore, Maldives, Thailand & Japan with flights, visas, 4-star hotels & Indian meals."
      badgeText="Worldwide Destinations"
      defaultCategory="INTERNATIONAL"
      defaultRegion="ALL"
    />
  );
}
