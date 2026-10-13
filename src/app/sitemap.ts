import { MetadataRoute } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { getAllProgrammaticSlugs } from '@/data/programmaticPackages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tripcustomizer.com';
  const currentDate = new Date().toISOString();

  // 1. Static Core & Category Hub Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/holidays`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/holidays/india`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/holidays/international`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/honeymoon`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/honeymoon/india`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/honeymoon/international`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/customize-trip`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/flights`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hotels`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/visa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/travel-insurance`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/corporate-travel`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/mice`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/gift-cards`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-diwali-holiday-destinations-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-honeymoon-destinations-in-india-under-30k`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-summer-holiday-destinations-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-visa-on-arrival-countries-for-indians-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-international-tour-packages-under-25k-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-best-winter-destinations-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-visa-free-countries-for-indians-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-best-international-honeymoon-packages-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/blog/top-7-spiritual-yatras-in-india-2026`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/top-10-budget-international-trips-under-30k`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/store-locator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // 2. Destination Landing Pages (Holidays)
  const targetIntlKeywords = [
    'turkey', 'singapore', 'malaysia', 'bali', 'dubai', 'mauritius',
    'maldives', 'vietnam', 'cambodia', 'seychelles', 'australia', 'europe',
    'south-africa', 'egypt', 'spain', 'usa', 'japan', 'thailand',
    'azerbaijan', 'baku', 'georgia', 'kazakhstan', 'bhutan', 'nepal', 'sri-lanka'
  ];

  const targetSpiritualKeywords = [
    'ayodhya', 'varanasi', 'kedarnath', 'char-dham', 'badrinath', 'amarnath',
    'dwarka-somnath', 'mathura-vrindavan', 'amritsar', 'puri', 'rameshwaram',
    'tirupati', 'shirdi', 'vaishno-devi', 'kailash-mansarovar', 'do-dham',
    'haridwar', 'rishikesh', 'prayagraj', 'ujjain', 'omkareshwar', 'kumbh-mela',
    'bodhgaya', 'bhubaneswar', 'konark', 'madurai', 'kanchipuram', 'kumbakonam',
    'sabrimala', 'velankanni', 'ajmer', 'pushkar', 'guptkashi', 'dharamsala',
    'khajuraho', 'maheshwar', 'mandu', 'tawang', 'somnath', 'dwarka', 'mathura', 'spiritual',
    'kerala', 'kashmir', 'himachal', 'rajasthan', 'andaman', 'ladakh', 'goa', 'uttarakhand', 'sikkim'
  ];

  const demoSlugs = DEMO_PACKAGES.map((p) => p.destinationSlug);
  const destinationSlugs = Array.from(new Set([...targetIntlKeywords, ...targetSpiritualKeywords, ...demoSlugs]));

  const holidayDestinationPages: MetadataRoute.Sitemap = destinationSlugs.map((slug) => ({
    url: `${baseUrl}/holidays/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // 3. Honeymoon Destination Landing Pages
  const honeymoonSlugs = [
    'maldives', 'bali', 'switzerland', 'paris', 'mauritius', 'seychelles',
    'dubai', 'thailand', 'kerala', 'kashmir', 'andaman', 'manali',
    'goa', 'udaipur', 'coorg', 'sri-lanka', 'europe', 'greece'
  ];

  const honeymoonDestinationPages: MetadataRoute.Sitemap = honeymoonSlugs.map((slug) => ({
    url: `${baseUrl}/honeymoon/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.88,
  }));

  // 4. Destination Travel Guide Pages
  const guideSlugs = [
    'goa', 'kerala', 'kashmir', 'dubai', 'bali', 'thailand',
    'singapore', 'vietnam', 'maldives', 'switzerland', 'azerbaijan',
    'bhutan', 'andaman', 'himachal', 'rajasthan', 'ladakh'
  ];

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${baseUrl}/destinations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.82,
  }));

  // 5. Package Detail Pages
  const packagePages: MetadataRoute.Sitemap = DEMO_PACKAGES.map((pkg) => ({
    url: `${baseUrl}/holidays/${pkg.destinationSlug}/${pkg.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 6. Programmatic SEO Landing Pages (/packages/[slug])
  const programmaticPackagePages: MetadataRoute.Sitemap = getAllProgrammaticSlugs().map((slug) => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...holidayDestinationPages,
    ...honeymoonDestinationPages,
    ...guidePages,
    ...packagePages,
    ...programmaticPackagePages,
  ];
}
