import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Booking & Checkout | Trip Customizer',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
