import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Trip Customizer',
  description: 'Read the privacy policy of Trip Customizer detailing how we safeguard your personal data, payment info, and booking details.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/privacy',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
