import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Travel Management & Business Trips | Trip Customizer',
  description: 'Enterprise corporate travel desk solutions, business flight bookings, GST invoice compliance, and volume group stay rates.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/corporate-travel',
  },
};

export default function CorporateTravelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
