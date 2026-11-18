import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import {
  Compass,
  Heart,
  Plane,
  Sparkles,
  Tag,
  ArrowRight,
  Layers,
} from 'lucide-react';

interface SitelinkCard {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  href: string;
  ctaText: string;
  icon: React.ComponentType<{ className?: string }>;
  subLinks: { label: string; href: string }[];
}

const SITELINK_HUBS: SitelinkCard[] = [
  {
    title: 'Holidays & Tour Packages',
    badge: '500+ Packages',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Explore verified international and domestic holiday packages with 4-star hotels, daily meals, flights, and private sightseeing.',
    href: '/holidays',
    ctaText: 'Explore Holiday Packages',
    icon: Compass,
    subLinks: [
      { label: 'Dubai Packages', href: '/holidays/dubai' },
      { label: 'Thailand Holidays', href: '/holidays/thailand' },
      { label: 'Bali Getaways', href: '/holidays/bali' },
      { label: 'Kashmir Tours', href: '/holidays/kashmir' },
    ],
  },
  {
    title: 'Honeymoon Specials',
    badge: 'Romantic Escapes',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    description: 'Handcrafted romantic honeymoon packages featuring luxury pool villas, candlelight dinners, couple spa sessions, and private cabs.',
    href: '/honeymoon',
    ctaText: 'Browse Honeymoon Deals',
    icon: Heart,
    subLinks: [
      { label: 'Maldives Honeymoon', href: '/honeymoon/maldives' },
      { label: 'Bali Couple Specials', href: '/honeymoon/bali' },
      { label: 'Kashmir Honeymoon', href: '/honeymoon/kashmir' },
      { label: 'Kerala Backwaters', href: '/honeymoon/kerala' },
    ],
  },
  {
    title: 'Char Dham & Spiritual Yatras',
    badge: 'VIP Darshan',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    description: 'Sacred pilgrimage packages with VIP temple darshan, verified AC cabs, experienced yatra guides, and comfortable hotel stays.',
    href: '/char-dham',
    ctaText: 'View Spiritual Yatras',
    icon: Sparkles,
    subLinks: [
      { label: 'Char Dham Yatra', href: '/char-dham' },
      { label: 'Kedarnath Badrinath', href: '/holidays/kedarnath' },
      { label: 'Ayodhya Ram Mandir', href: '/holidays/ayodhya' },
      { label: 'Varanasi Heritage', href: '/holidays/varanasi' },
    ],
  },
  {
    title: 'City Departure Packages',
    badge: 'With Flights',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Seamless travel packages departing directly from your home airport with confirmed flights and private airport pickup and drop.',
    href: '/packages',
    ctaText: 'Explore City Departures',
    icon: Plane,
    subLinks: [
      { label: 'Dubai from Ahmedabad', href: '/packages/dubai-tour-package-from-ahmedabad' },
      { label: 'Dubai from Delhi', href: '/packages/dubai-tour-package-from-delhi' },
      { label: 'Dubai from Mumbai', href: '/packages/dubai-tour-package-from-mumbai' },
      { label: 'Thailand from Pune', href: '/packages/thailand-tour-package-from-pune' },
    ],
  },
  {
    title: '1-Minute Custom Trip Wizard',
    badge: 'Instant Quote',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Design your dream personalized itinerary in 60 seconds. Choose hotel ratings, travel dates, and get a quote on WhatsApp within 2 hours.',
    href: '/customize-trip',
    ctaText: 'Start Customizing Now',
    icon: Layers,
    subLinks: [
      { label: 'Custom International', href: '/customize-trip?type=international' },
      { label: 'Custom Domestic India', href: '/customize-trip?type=india' },
      { label: 'Corporate Group Travel', href: '/corporate-travel' },
      { label: 'WhatsApp Concierge', href: 'https://wa.me/917408763401' },
    ],
  },
  {
    title: 'Exclusive Offers & Deals',
    badge: 'Save up to ₹15,000',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    description: 'Unlock limited-period early bird discounts, festival holiday deals, complimentary flight ticket upgrades, and seasonal package rebates.',
    href: '/offers',
    ctaText: 'Check Exclusive Deals',
    icon: Tag,
    subLinks: [
      { label: 'Early Bird 2026 Deals', href: '/offers#early-bird' },
      { label: 'Family Vacation Offers', href: '/offers#family' },
      { label: 'Weekend Escapes', href: '/holidays/goa' },
      { label: 'Luxury Cruises', href: '/cruises' },
    ],
  },
];

export const SitelinksDirectory: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200" id="explore-categories">
      <Container>
        {/* Sitelinks Hub Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200/70 text-brand-700 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5 text-brand-600" />
            <span>Official Travel Portal Navigation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Trip Customizer <span className="text-brand-600">Categories &amp; Hubs</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Quickly navigate our verified holiday portals, romantic honeymoon collections, sacred spiritual yatras, and city-to-city flight packages.
          </p>
        </div>

        {/* 6-Card Primary Corporate Sitelinks Grid */}
        <nav aria-label="Explore Trip Customizer Sitelinks" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITELINK_HUBS.map((hub) => {
            const Icon = hub.icon;
            return (
              <div
                key={hub.title}
                className="group bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-brand-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 shadow-xs group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${hub.badgeColor}`}>
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    <Link href={hub.href}>{hub.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                    {hub.description}
                  </p>

                  {/* Sublinks for Search Engine Deep Crawl */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-200/70">
                    {hub.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="text-[11px] font-semibold text-slate-700 bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-600 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={hub.href}
                  className="inline-flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700 pt-3 border-t border-slate-200/60"
                >
                  <span>{hub.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </nav>
      </Container>
    </section>
  );
};
