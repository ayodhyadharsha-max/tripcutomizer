import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Trip Customizer',
  description: 'Understand refund processing timelines, bank crediting schedules, and eligible booking refund policies on Trip Customizer.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/refund-policy',
  },
};

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
