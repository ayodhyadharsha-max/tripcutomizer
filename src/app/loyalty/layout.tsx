import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequent Traveler Rewards & Loyalty Club | Trip Customizer',
  description: 'Earn travel reward coins on every package, hotel, and flight booking. Redeem points for free airport lounge passes and room upgrades.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/loyalty',
  },
};

export default function LoyaltyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
