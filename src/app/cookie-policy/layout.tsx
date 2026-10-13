import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Trip Customizer',
  description: 'Learn how Trip Customizer uses cookies and local browser storage to personalize and secure your travel booking experience.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/cookie-policy',
  },
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
