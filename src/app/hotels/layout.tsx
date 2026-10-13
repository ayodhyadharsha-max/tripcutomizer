import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Booking 2026: 4-Star Resorts & Luxury Stays | Trip Customizer',
  description: 'Book verified 4-star hotels, luxury resorts, pool villas, and heritage homestays across 40+ countries with best price guarantee.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/hotels',
  },
  openGraph: {
    title: 'Hotel Booking 2026 | Trip Customizer',
    description: 'Book verified 4-star hotels and luxury resorts worldwide.',
    url: 'https://www.tripcustomizer.com/hotels',
  },
};

export default function HotelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
