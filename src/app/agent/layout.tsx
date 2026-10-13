import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Agent Portal | Trip Customizer',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
