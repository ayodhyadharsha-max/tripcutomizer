import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Travel Platform & Customer Desk | Trip Customizer',
  description: 'Trip Customizer is 100% digital online travel platform. Book packages, download vouchers, and access 24/7 live assistance directly online.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/store-locator',
  },
  openGraph: {
    title: 'Digital Travel Platform | Trip Customizer',
    description: '100% Digital online travel booking platform with 24x7 support.',
    url: 'https://www.tripcustomizer.com/store-locator',
  },
};

export default function StoreLocatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
