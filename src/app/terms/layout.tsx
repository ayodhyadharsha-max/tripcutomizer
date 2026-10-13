import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Trip Customizer',
  description: 'Review the terms and conditions for booking holiday packages, flights, hotels, and custom travel itineraries on Trip Customizer.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/terms',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
