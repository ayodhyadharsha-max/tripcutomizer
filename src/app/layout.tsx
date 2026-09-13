import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { ClientProviders } from '@/components/providers/ClientProviders';

export const metadata: Metadata = {
  title: 'tripcustomizer — Holidays, Forex, Flights, Hotels, Visa & Travel Insurance',
  description: 'Book international & domestic India holidays, buy/sell forex, currency cards, university fee remittance, flights, hotels, visa assistance & travel insurance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased">
        {/* WCAG 2.1 Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl"
        >
          Skip to main content
        </a>
        <ClientProviders>
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
