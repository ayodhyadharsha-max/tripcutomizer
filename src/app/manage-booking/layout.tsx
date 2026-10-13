import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Your Booking & Download E-Tickets | Trip Customizer',
  description: 'Retrieve your booking, view hotel vouchers, update traveler details, and download tax invoices using your booking reference.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/manage-booking',
  },
};

export default function ManageBookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
