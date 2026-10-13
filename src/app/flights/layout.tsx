import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flight Ticket Booking 2026: Domestic & International Cheap Flights | Trip Customizer',
  description: 'Search and book cheap domestic & international flights with zero convenience fee, instant PNR confirmation, and 24x7 customer support.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/flights',
  },
  openGraph: {
    title: 'Flight Ticket Booking 2026 | Trip Customizer',
    description: 'Book domestic & international flights with instant confirmation.',
    url: 'https://www.tripcustomizer.com/flights',
  },
};

export default function FlightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
