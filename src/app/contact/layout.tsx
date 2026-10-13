import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & 24x7 Travel Support | Trip Customizer',
  description: 'Connect with Trip Customizer senior travel architects for instant customized trip quotes, flight updates, visa help, and emergency assistance.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/contact',
  },
  openGraph: {
    title: 'Contact Us & 24x7 Travel Support | Trip Customizer',
    description: 'Connect with Trip Customizer travel architects for custom quotes & support.',
    url: 'https://www.tripcustomizer.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
