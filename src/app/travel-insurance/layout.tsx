import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprehensive Travel Insurance Plans | Trip Customizer',
  description: 'Protect your journey with comprehensive domestic & international travel insurance covering medical emergencies, trip delays, and baggage loss.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/travel-insurance',
  },
};

export default function TravelInsuranceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
