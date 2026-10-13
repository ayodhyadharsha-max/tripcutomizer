import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HTML Sitemap & Quick Destination Index | Trip Customizer',
  description: 'Complete directory of all domestic, international, spiritual, and honeymoon travel destinations on Trip Customizer.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/sitemap',
  },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
