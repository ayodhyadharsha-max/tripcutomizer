import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MICE Travel: Meetings, Incentives, Conferences & Events | Trip Customizer',
  description: 'Full-service MICE management for domestic and international corporate conventions, annual offsites, leadership retreats, and exhibitions.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/mice',
  },
};

export default function MiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
