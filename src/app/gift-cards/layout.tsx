import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Gift Cards & Vouchers | Trip Customizer',
  description: 'Gift memorable vacations, honeymoon stays, and flight vouchers to loved ones with instant digital Trip Customizer gift cards.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/gift-cards',
  },
};

export default function GiftCardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
