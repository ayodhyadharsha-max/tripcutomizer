import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & Job Openings | Trip Customizer',
  description: 'Explore exciting career opportunities in travel architecture, operations, sales, and software engineering at Trip Customizer.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/careers',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
