import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const c = params.country.toLowerCase().trim();
  const name = c.charAt(0).toUpperCase() + c.slice(1);
  return {
    title: `${name} Visa Application & Express Assistance 2026 | Trip Customizer`,
    description: `Apply for ${name} tourist visa online with document pre-check, appointment scheduling, and 99.4% approval track record.`,
    alternates: {
      canonical: `https://www.tripcustomizer.com/visa/${c}`,
    },
  };
}

export default function VisaCountryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
