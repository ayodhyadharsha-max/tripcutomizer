import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Account & Bookings | Trip Customizer',
  description: 'Manage your bookings, traveler profiles, and travel preferences.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
