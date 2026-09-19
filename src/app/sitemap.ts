import { MetadataRoute } from 'next';
import { DEMO_PACKAGES } from '@/data/packagesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tripcustomizer.com';
  const currentDate = new Date().toISOString();

  // 1. Static Core Pages
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
      priority: 0.95,
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
      priority: 0.8,
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
      priority: 0.8,
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

  // 2. Destination Landing Pages (Including 22 International + 43 Spiritual Yatra Target Keywords)
  const targetIntlKeywords = [
    'turkey', 'singapore', 'malaysia', 'bali', 'dubai', 'mauritius',
    'maldives', 'vietnam', 'cambodia', 'seychelles', 'australia', 'europe',
    'south-africa', 'egypt', 'spain', 'usa', 'japan', 'thailand',
    'azerbaijan', 'baku', 'georgia', 'kazakhstan'
  ];
  const targetSpiritualKeywords = [
    'ayodhya', 'varanasi', 'kedarnath', 'char-dham', 'badrinath', 'amarnath',
    'dwarka-somnath', 'mathura-vrindavan', 'amritsar', 'puri', 'rameshwaram',
    'tirupati', 'shirdi', 'vaishno-devi', 'kailash-mansarovar', 'do-dham',
    'haridwar', 'rishikesh', 'prayagraj', 'ujjain', 'omkareshwar', 'kumbh-mela',
    'bodhgaya', 'bhubaneswar', 'konark', 'madurai', 'kanchipuram', 'kumbakonam',
    'sabrimala', 'velankanni', 'ajmer', 'pushkar', 'guptkashi', 'dharamsala',
    'khajuraho', 'maheshwar', 'mandu', 'tawang', 'somnath', 'dwarka', 'mathura', 'spiritual'
  ];
  const demoSlugs = DEMO_PACKAGES.map((p) => p.destinationSlug);
  const destinationSlugs = Array.from(new Set([...targetIntlKeywords, ...targetSpiritualKeywords, ...demoSlugs]));

  const destinationPages: MetadataRoute.Sitemap = destinationSlugs.map((slug) => ({
    url: `${baseUrl}/holidays/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // 3. Package Detail Pages
  const packagePages: MetadataRoute.Sitemap = DEMO_PACKAGES.map((pkg) => ({
    url: `${baseUrl}/holidays/${pkg.destinationSlug}/${pkg.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticPages, ...destinationPages, ...packagePages];
}
