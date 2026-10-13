import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Char Dham Yatra 2026: Kedarnath, Badrinath, Gangotri & Yamunotri | Trip Customizer',
  description: 'Book divine Char Dham Yatra packages from Haridwar & Delhi. Verified hotels, VIP darshan passes, helicopter tickets, and experienced mountain drivers.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/char-dham',
  },
};

export default function CharDhamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
