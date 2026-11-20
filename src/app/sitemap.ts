import { MetadataRoute } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { getAllCatalogPackages } from '@/data/packageCatalog';
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
      url: `${baseUrl}/packages`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
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
      url: `${baseUrl}/blog/thailand-visa-free-for-indians-tour-packages-itinerary-2026-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/auli-skiing-tour-packages-ropeway-ticket-booking-winter-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/christmas-vacation-packages-india-best-places-to-visit-2026-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/dubai-shopping-festival-2026-dates-flight-packages-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/blog/top-10-new-year-2027-travel-packages-india-abroad-guide`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.99,
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
      url: `${baseUrl}/char-dham`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/offers`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cruises`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/eurail`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
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
    {
      url: `${baseUrl}/loyalty`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cancellation-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // 2. Destination Landing Pages (Holidays) - 100% Verified Valid Routes
  const targetIntlKeywords = [
    'singapore', 'malaysia', 'bali', 'dubai', 'mauritius',
    'maldives', 'vietnam', 'cambodia', 'seychelles', 'australia', 'europe',
    'egypt', 'usa', 'japan', 'thailand',
    'azerbaijan', 'baku', 'bhutan', 'nepal', 'sri-lanka'
  ];

  const targetSpiritualKeywords = [
    'ayodhya', 'varanasi', 'kedarnath', 'char-dham', 'badrinath',
    'puri', 'rameshwaram', 'tirupati', 'shirdi',
    'haridwar', 'rishikesh', 'prayagraj', 'ujjain', 'pushkar',
    'somnath', 'dwarka',
    'kerala', 'kashmir', 'himachal', 'rajasthan', 'andaman', 'ladakh', 'goa', 'uttarakhand', 'sikkim',
    'manali', 'shimla', 'auli', 'nainital', 'mussoorie', 'udaipur', 'jaipur', 'jaisalmer', 'munnar', 'coorg', 'kutch'
  ];

  const allCatalog = getAllCatalogPackages();
  const demoSlugs = DEMO_PACKAGES.map((p) => p.destinationSlug);
  const catalogDestSlugs = allCatalog.map((p) => p.destinationSlug);
  const destinationSlugs = Array.from(new Set([...targetIntlKeywords, ...targetSpiritualKeywords, ...demoSlugs, ...catalogDestSlugs]));

  const holidayDestinationPages: MetadataRoute.Sitemap = destinationSlugs.map((slug) => ({
    url: `${baseUrl}/holidays/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // 3. Honeymoon Destination Landing Pages - Verified 200 OK
  const honeymoonSlugs = [
    'maldives', 'bali', 'paris', 'mauritius', 'seychelles',
    'dubai', 'thailand', 'kerala', 'kashmir', 'andaman', 'manali',
    'goa', 'udaipur', 'coorg', 'sri-lanka', 'europe'
  ];

  const honeymoonDestinationPages: MetadataRoute.Sitemap = honeymoonSlugs.map((slug) => ({
    url: `${baseUrl}/honeymoon/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.88,
  }));

  // 5. Package Detail Pages (All Verified Packages in Catalog with Strict Deduplication)
  const seenUrls = new Set<string>();
  const packagePages: MetadataRoute.Sitemap = [];

  for (const pkg of allCatalog) {
    const url = `${baseUrl}/holidays/${pkg.destinationSlug}/${pkg.slug}`;
    if (!seenUrls.has(url)) {
      seenUrls.add(url);
      packagePages.push({
        url,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  }

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
    ...packagePages,
    ...programmaticPackagePages,
  ];
}
