import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Trip Customizer',
  description: 'Official legal disclaimer and website liability terms for Trip Customizer travel booking services.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/disclaimer',
  },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
