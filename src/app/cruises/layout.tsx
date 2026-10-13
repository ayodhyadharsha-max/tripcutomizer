import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Ocean & River Cruise Packages 2026 | Trip Customizer',
  description: 'Book luxury ocean liners, Cordelia cruises, Singapore Genting Dream cruises, and European river sailings with all-inclusive meals & entertainment.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/cruises',
  },
};

export default function CruisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
