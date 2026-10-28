/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ],
  },
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://*.googleapis.com https://apis.google.com https://www.googletagmanager.com https://connect.facebook.net;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: blob: https://images.unsplash.com https://via.placeholder.com https://*.razorpay.com https://*.google-analytics.com https://*.googletagmanager.com https://www.facebook.com;
      font-src 'self' data: https://fonts.gstatic.com;
      connect-src 'self' https://api.razorpay.com https://lumberjack.razorpay.com https://*.firebaseio.com https://*.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://*.supabase.co wss://*.supabase.co https://api.web3forms.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.facebook.com;
      frame-src 'self' https://api.razorpay.com https://checkout.razorpay.com https://*.firebaseapp.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/TripCustomizer.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="TripCustomizer.apk"',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
      {
        source: '/destinations/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/hero-banner.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/destinations/:slug*-tour-package',
        destination: '/holidays/:slug*',
        permanent: true,
      },
      {
        source: '/destinations/:slug*-tour-packages',
        destination: '/holidays/:slug*',
        permanent: true,
      },
      {
        source: '/destinations/:slug*-package',
        destination: '/holidays/:slug*',
        permanent: true,
      },
      {
        source: '/destinations/:slug*-packages',
        destination: '/holidays/:slug*',
        permanent: true,
      },
      {
        source: '/destination/:path*',
        destination: '/destinations/:path*',
        permanent: true,
      },
      {
        source: '/custom-trip',
        destination: '/customize-trip',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
