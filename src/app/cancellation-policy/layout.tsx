import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation Policy | Trip Customizer',
  description: 'Detailed cancellation terms and slab-wise penalty breakdown for holiday packages, hotels, flights, and activities.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/cancellation-policy',
  },
};

export default function CancellationPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
