import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { ClientProviders } from '@/components/providers/ClientProviders';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tripcustomizer.com'),
  title: {
    default: 'Trip Customizer™ | Book Customized Holiday Packages, Flights & 4-Star Hotels',
    template: '%s | Trip Customizer',
  },
  description:
    'Book customized international & domestic tour packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 expert travel desk support.',
  keywords: [
    'Trip Customizer',
    'trip customizer',
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
    'spiritual journey in india kailash mansarovar yatra package',
    'dwarka somnath tour package',
    'mathura vrindavan tour package',
    'Amarnath Tour Packages',
    'Amritsar Tour Packages',
    'Ayodhya Tour Packages',
    'Badrinath Tour Packages',
    'Bhubaneswar Tour Packages',
    'Bodhgaya Tour Packages',
    'Char Dham Tour Packages',
    'Dharamsala Tour Packages',
    'Do Dham Tour Packages',
    'Dwarka Tour Packages',
    'Guptkashi Tour Packages',
    'Haridwar Tour Packages',
    'Kanchipuram Tour Packages',
    'Kedarnath Tour Packages',
    'Khajuraho Tour Packages',
    'Konark Tour Packages',
    'Kumbakonam Tour Packages',
    'Kumbh Mela Tour Packages',
    'Madurai Tour Packages',
    'Maheshwar Tour Packages',
    'Mandu Tour Packages',
    'Ajmer Tour Packages',
    'Mathura Tour Packages',
    'omkareshwar Tour Packages',
    'Prayagraj Tour Packages',
    'Puri Tour Packages',
    'Pushkar Tour Packages',
    'Rameshwaram Tour Packages',
    'Rishikesh Tour Packages',
    'Sabrimala Tour Packages',
    'Shirdi Tour Packages',
    'Somnath Tour Packages',
    'Spiritual Tour Packages',
    'Tawang Tour Packages',
    'Tirupati Tour Packages',
    'Ujjain Tour Packages',
    'Vaishno Devi Tour Packages',
    'Varanasi Tour Packages',
    'Velankanni Tour Packages',
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
  authors: [{ name: 'Trip Customizer Senior Travel Desk' }],
  creator: 'Trip Customizer',
  publisher: 'Trip Customizer',
  alternates: {
    canonical: 'https://www.tripcustomizer.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Trip Customizer™ — Tailor-Made Holidays, Flights & 4-Star Hotels',
    description:
      'Book customized international & domestic holiday packages with flights, 4-star hotels, visas & 24x7 expert travel assistance.',
    url: 'https://www.tripcustomizer.com',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
        width: 1200,
        height: 630,
        alt: 'Trip Customizer Global Holiday Packages',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Customizer™ — Tailor-Made Holidays, Flights & 4-Star Hotels',
    description:
      'Book customized international & domestic holiday packages with flights, 4-star hotels, visas & 24x7 expert travel assistance.',
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
  const jsonLdSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      image: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
      '@id': 'https://www.tripcustomizer.com',
      url: 'https://www.tripcustomizer.com',
      telephone: '+91 7408763401',
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
      hasOfferCatalog: [
        {
          '@type': 'OfferCatalog',
          name: 'Trending International Tour Packages',
          itemListElement: [
            { '@type': 'Offer', name: 'Turkey tour packages', url: 'https://www.tripcustomizer.com/holidays/turkey' },
            { '@type': 'Offer', name: 'Singapore tour packages', url: 'https://www.tripcustomizer.com/holidays/singapore' },
            { '@type': 'Offer', name: 'Malaysia tour packages', url: 'https://www.tripcustomizer.com/holidays/malaysia' },
            { '@type': 'Offer', name: 'Bali tour packages', url: 'https://www.tripcustomizer.com/holidays/bali' },
            { '@type': 'Offer', name: 'Dubai tour packages', url: 'https://www.tripcustomizer.com/holidays/dubai' },
            { '@type': 'Offer', name: 'Mauritius tour packages', url: 'https://www.tripcustomizer.com/holidays/mauritius' },
            { '@type': 'Offer', name: 'Maldives tour packages', url: 'https://www.tripcustomizer.com/holidays/maldives' },
            { '@type': 'Offer', name: 'Vietnam tour packages', url: 'https://www.tripcustomizer.com/holidays/vietnam' },
            { '@type': 'Offer', name: 'Cambodia tour packages', url: 'https://www.tripcustomizer.com/holidays/cambodia' },
            { '@type': 'Offer', name: 'Seychelles tour packages', url: 'https://www.tripcustomizer.com/holidays/seychelles' },
            { '@type': 'Offer', name: 'Australia tour packages', url: 'https://www.tripcustomizer.com/holidays/australia' },
            { '@type': 'Offer', name: 'Europe tour packages', url: 'https://www.tripcustomizer.com/holidays/europe' },
            { '@type': 'Offer', name: 'South Africa tour packages', url: 'https://www.tripcustomizer.com/holidays/south-africa' },
            { '@type': 'Offer', name: 'Egypt tour packages', url: 'https://www.tripcustomizer.com/holidays/egypt' },
            { '@type': 'Offer', name: 'Spain tour packages', url: 'https://www.tripcustomizer.com/holidays/spain' },
            { '@type': 'Offer', name: 'USA tour packages', url: 'https://www.tripcustomizer.com/holidays/usa' },
            { '@type': 'Offer', name: 'Japan tour packages', url: 'https://www.tripcustomizer.com/holidays/japan' },
            { '@type': 'Offer', name: 'Thailand tour packages', url: 'https://www.tripcustomizer.com/holidays/thailand' },
            { '@type': 'Offer', name: 'Azerbaijan tour packages', url: 'https://www.tripcustomizer.com/holidays/azerbaijan' },
            { '@type': 'Offer', name: 'Baku tour packages', url: 'https://www.tripcustomizer.com/holidays/baku' },
            { '@type': 'Offer', name: 'Georgia tour packages', url: 'https://www.tripcustomizer.com/holidays/georgia' },
            { '@type': 'Offer', name: 'Kazakhstan tour packages', url: 'https://www.tripcustomizer.com/holidays/kazakhstan' },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Spiritual & Pilgrimage Tour Packages India',
          itemListElement: [
            { '@type': 'Offer', name: 'Ayodhya Tour Packages', url: 'https://www.tripcustomizer.com/holidays/ayodhya' },
            { '@type': 'Offer', name: 'Varanasi Tour Packages', url: 'https://www.tripcustomizer.com/holidays/varanasi' },
            { '@type': 'Offer', name: 'Char Dham Tour Packages', url: 'https://www.tripcustomizer.com/holidays/char-dham' },
            { '@type': 'Offer', name: 'Kedarnath Tour Packages', url: 'https://www.tripcustomizer.com/holidays/kedarnath' },
            { '@type': 'Offer', name: 'Badrinath Tour Packages', url: 'https://www.tripcustomizer.com/holidays/badrinath' },
            { '@type': 'Offer', name: 'Amarnath Tour Packages', url: 'https://www.tripcustomizer.com/holidays/amarnath' },
            { '@type': 'Offer', name: 'Dwarka Somnath tour package', url: 'https://www.tripcustomizer.com/holidays/dwarka-somnath' },
            { '@type': 'Offer', name: 'Mathura Vrindavan tour package', url: 'https://www.tripcustomizer.com/holidays/mathura-vrindavan' },
            { '@type': 'Offer', name: 'Amritsar Tour Packages', url: 'https://www.tripcustomizer.com/holidays/amritsar' },
            { '@type': 'Offer', name: 'Puri Tour Packages', url: 'https://www.tripcustomizer.com/holidays/puri' },
            { '@type': 'Offer', name: 'Rameshwaram Tour Packages', url: 'https://www.tripcustomizer.com/holidays/rameshwaram' },
            { '@type': 'Offer', name: 'Tirupati Tour Packages', url: 'https://www.tripcustomizer.com/holidays/tirupati' },
            { '@type': 'Offer', name: 'Shirdi Tour Packages', url: 'https://www.tripcustomizer.com/holidays/shirdi' },
            { '@type': 'Offer', name: 'Vaishno Devi Tour Packages', url: 'https://www.tripcustomizer.com/holidays/vaishno-devi' },
            { '@type': 'Offer', name: 'Kailash Mansarovar Yatra package', url: 'https://www.tripcustomizer.com/holidays/kailash-mansarovar' },
          ],
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.tripcustomizer.com/holidays?search={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
      logo: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 7408763401',
        contactType: 'customer service',
        areaServed: ['IN', 'US', 'AE', 'GB', 'CA', 'AU', 'SG'],
        availableLanguage: ['English', 'Hindi'],
      },
      email: 'tripcustomizer@gmail.com',
      sameAs: [
        'https://www.facebook.com/tripcustomizer',
        'https://www.instagram.com/tripcustomizer',
        'https://twitter.com/tripcustomizer',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Trip Customizer offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trip Customizer is a premier travel agency offering tailor-made international and domestic holiday packages, 4-star & 5-star hotel bookings, flights, visa assistance, and 24/7 expert travel support.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to book customized holiday packages on Trip Customizer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit TripCustomizer.com, select your target destination or fill out the 1-Minute Custom Trip Wizard with your budget and travel dates. Our senior travel specialists will send a complete day-by-day itinerary and quote within 2 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the top spiritual and pilgrimage tour packages available on Trip Customizer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trip Customizer offers specialized pilgrimage tours including Char Dham Yatra, Kedarnath, Badrinath, Ayodhya Ram Mandir VIP Darshan, Varanasi Heritage Ghats, Kailash Mansarovar, Dwarka Somnath, and Mathura Vrindavan.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to contact Trip Customizer customer support directly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact Trip Customizer 24x7 via WhatsApp or Phone at +91 7408763401, email at tripcustomizer@gmail.com, or visit our head office on Ram Path, Ayodhya.',
          },
        },
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
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
