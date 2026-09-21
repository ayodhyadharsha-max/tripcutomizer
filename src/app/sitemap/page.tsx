'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, MapPin, ShieldCheck, HelpCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function SitemapPage() {
  const sections = [
    {
      title: 'Popular International Destinations',
      links: [
        { label: 'Dubai Tour Packages', href: '/holidays/dubai' },
        { label: 'Bali Honeymoon Packages', href: '/holidays/bali' },
        { label: 'Thailand Beach Holidays', href: '/holidays/thailand' },
        { label: 'Singapore & Sentosa', href: '/holidays/singapore' },
        { label: 'Maldives Overwater Villas', href: '/holidays/maldives' },
        { label: 'Switzerland Alps Tour', href: '/holidays/switzerland' },
        { label: 'Vietnam Ha Long Cruise', href: '/holidays/vietnam' },
      ],
    },
    {
      title: 'Top India Destinations',
      links: [
        { label: 'Char Dham Sacred Yatra', href: '/char-dham' },
        { label: 'Kashmir Paradise Tour', href: '/holidays/kashmir' },
        { label: 'Kerala Backwaters & Houseboat', href: '/holidays/kerala' },
        { label: 'Ladakh Overland Biking', href: '/holidays/ladakh' },
        { label: 'Ayodhya & Varanasi Temple Tour', href: '/holidays/ayodhya-varanasi' },
        { label: 'Andaman Beach & Scuba', href: '/holidays/andaman' },
      ],
    },
    {
      title: 'Company & Support',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Customer Support', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Travel Gift Cards', href: '/gift-cards' },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="bg-gradient-to-r from-slate-900 via-brand-900 to-slate-900 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Website Index
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Trip Customizer HTML Sitemap
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
              Complete directory of holiday package categories, domestic/international destinations, and customer support pages.
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-10 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <h2 className="font-black text-slate-900 text-sm border-b border-slate-100 pb-3">{sec.title}</h2>
              <ul className="space-y-2 text-xs text-slate-600 font-semibold">
                {sec.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-brand-600 hover:underline transition-colors block py-0.5">
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
