import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.tripcustomizer.com';

  const disallowList = [
    '/admin/',
    '/agent/',
    '/api/',
    '/checkout',
    '/booking/checkout',
    '/booking/success',
    '/login',
    '/register',
    '/manage-booking',
  ];

  const aiBots = [
    'GPTBot',
    'PerplexityBot',
    'ClaudeBot',
    'Google-Extended',
    'Bytespider',
    'CCBot',
    'Applebot-Extended',
    'Cohere-ai',
    'OAI-SearchBot',
    'Diffbot',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowList,
      },
      ...aiBots.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: disallowList,
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
