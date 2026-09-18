import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { ClientProviders } from '@/components/providers/ClientProviders';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tripcustomizer.com'),
  title: {
    default: 'TripCustomizer — Tailor-Made Holidays, Flights, Hotels, Visas & Travel Insurance',
    template: '%s | TripCustomizer',
  },
  description:
    'Book customized international & domestic holiday packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 travel desk support.',
  keywords: [
    'tripcustomizer',
    'customized tour packages',
    'holiday packages india',
    'international tour packages',
    // 1. Trending International Honeymoon Packages
    'Maldives honeymoon packages',
    'Bali honeymoon packages',
    'Mauritius honeymoon packages',
    'Greece honeymoon packages',
    'Switzerland honeymoon packages',
    'Paris honeymoon packages',
    'Thailand honeymoon packages',
    'Seychelles honeymoon packages',
    // 2. Trending Destinations in India
    'Kerala tour packages',
    'Kashmir tour packages',
    'Goa tour packages',
    'Himachal tour packages',
    'Ladakh tour packages',
    'Andaman tour packages',
    'Rajasthan tour packages',
    'North East tour packages',
    'Sikkim Darjeeling packages',
    'Uttarakhand tour packages',
    'Coorg Ooty packages',
    'Manali tour packages',
    // 3. Trending India Honeymoon Packages
    'Kerala honeymoon packages',
    'Kashmir honeymoon packages',
    'Manali honeymoon packages',
    'Goa honeymoon packages',
    'Coorg honeymoon packages',
    'Udaipur honeymoon packages',
    'Andaman honeymoon packages',
    // 4. Most Popular Spiritual Tour Packages
    'Char Dham Yatra packages',
    'Kedarnath tour packages',
    'Badrinath tour packages',
    'Do Dham Yatra packages',
    'Varanasi Kashi tour',
    'Rameswaram Temple tour',
    'Tirupati Balaji Darshan',
    'Amarnath Yatra packages',
    'Shirdi Sai Baba package',
    'Golden Temple Amritsar package',
    'Vaishno Devi Yatra',
    'Dwarka Somnath package',
    // 5. Trending International Tour Packages
    'Turkey tour packages',
    'Singapore tour packages',
    'Malaysia tour packages',
    'Bali tour packages',
    'Dubai tour packages',
    'Mauritius tour packages',
    'Maldives tour packages',
    'Vietnam tour packages',
    'Cambodia tour packages',
    'Seychelles tour packages',
    'Australia tour packages',
    'Europe tour packages',
    'South Africa tour packages',
    'Egypt tour packages',
    'Spain tour packages',
    'USA tour packages',
    'Japan tour packages',
    'Thailand tour packages',
    'Azerbaijan tour packages',
    'Baku tour packages',
    'Georgia tour packages',
    'Kazakhstan tour packages',
    // 6. Trending Travel Themes
    'Luxury Cruise packages',
    'Escorted Group Tours',
    'Adventure & Trekking',
    'Beach Escapes',
    'Wildlife Safari packages',
    'Heritage & Cultural tours',
    'Self-Drive Holidays',
    'Winter Snow Tours',
    // 7. Most Popular India Tourism
    'Gods Own Country Kerala',
    'Paradise on Earth Kashmir',
    'Golden Triangle India',
    'Royal Rajasthan Heritage',
    'Spiritual Varanasi Ghats',
    'Lakes & Palaces Udaipur',
    'Snow Slopes Gulmarg',
    // 8. Most Popular International Tourism
    'Europe Tourism',
    'Thailand Tourism',
    'Dubai Tourism',
    'Singapore Tourism',
    'Bali Tourism',
    'Maldives Tourism',
    'Vietnam Tourism',
    'Australia Tourism',
    // 9. Trending International Flights Routes
    'Delhi to Dubai Flights',
    'Mumbai to Singapore Flights',
    'Bengaluru to London Flights',
    'Delhi to Bangkok Flights',
    'Mumbai to Abu Dhabi Flights',
    'Kolkata to Dubai Flights',
    // 10. Trending Domestic Flights Routes
    'Delhi to Mumbai Flights',
    'Bengaluru to Delhi Flights',
    'Mumbai to Goa Flights',
    'Delhi to Srinagar Flights',
    'Kolkata to Bengaluru Flights',
    'Chennai to Delhi Flights',
  ],
  authors: [{ name: 'tripcustomizer Senior Travel Desk' }],
  creator: 'tripcustomizer',
  publisher: 'tripcustomizer',
  alternates: {
    canonical: 'https://www.tripcustomizer.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/logo.png' },
    ],
  },
  openGraph: {
    title: 'tripcustomizer — Tailor-Made Holidays & Global Travel Solutions',
    description:
      'Book customized international & domestic holiday packages with flights, 4-star hotels, visas & 24x7 expert support.',
    url: 'https://www.tripcustomizer.com',
    siteName: 'tripcustomizer',
    images: [
      {
        url: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
        width: 1200,
        height: 630,
        alt: 'tripcustomizer Global Holiday Packages',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tripcustomizer — Tailor-Made Holidays & Global Travel Solutions',
    description:
      'Book customized international & domestic holiday packages with flights, 4-star hotels, visas & 24x7 expert support.',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'tripcustomizer',
    image: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
    '@id': 'https://www.tripcustomizer.com',
    url: 'https://www.tripcustomizer.com',
    telephone: '+91 8881299358',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ram Path, Near Ram Janmabhoomi Complex',
      addressLocality: 'Ayodhya',
      addressRegion: 'Uttar Pradesh',
      postalCode: '224123',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.7922,
      longitude: 82.1998,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/tripcustomizer',
      'https://www.instagram.com/tripcustomizer',
      'https://twitter.com/tripcustomizer',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '12480',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
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
