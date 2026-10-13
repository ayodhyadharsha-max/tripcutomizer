import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eurail & Swiss Rail Passes: Book Online from India | Trip Customizer',
  description: 'Official Eurail Global Pass and Swiss Travel Pass agent. Unlimited train travel across 33 European countries with instant mobile pass delivery.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com/eurail',
  },
};

export default function EurailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
