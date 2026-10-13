import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Deals, Discount Coupons & Seasonal Offers | Trip Customizer',
  description: 'Unlock exclusive festive discounts, credit card flight offers, zero-convenience fee coupons, and flash deals on holiday packages.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/offers',
  },
};

export default function OffersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
