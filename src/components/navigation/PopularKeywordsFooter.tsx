import React from 'react';
import Link from 'next/link';
import { Globe2, MapPin, Compass, Sparkles } from 'lucide-react';

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  icon: React.ReactNode;
  links: FooterLinkItem[];
}

const FOOTER_DESTINATIONS: FooterColumn[] = [
  {
    title: 'Top International Destinations',
    icon: <Globe2 className="w-4 h-4 text-amber-400 shrink-0" />,
    links: [
      { label: 'Dubai Tour Packages', href: '/holidays/dubai' },
      { label: 'Bali Honeymoon Packages', href: '/holidays/bali' },
      { label: 'Thailand Holiday Packages', href: '/holidays/thailand' },
      { label: 'Singapore Tour Packages', href: '/holidays/singapore' },
      { label: 'Maldives Luxury Packages', href: '/holidays/maldives' },
      { label: 'Vietnam Tour Packages', href: '/holidays/vietnam' },
      { label: 'Europe Vacation Packages', href: '/holidays/europe' },
    ],
  },
  {
    title: 'Popular Domestic Holidays',
    icon: <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />,
    links: [
      { label: 'Kashmir Tour Packages', href: '/holidays/kashmir' },
      { label: 'Goa Holiday Packages', href: '/holidays/goa' },
      { label: 'Kerala Backwater Packages', href: '/holidays/kerala' },
      { label: 'Himachal Tour Packages', href: '/holidays/himachal' },
      { label: 'Andaman Island Packages', href: '/holidays/andaman' },
      { label: 'Rajasthan Heritage Tours', href: '/holidays/rajasthan' },
      { label: 'Ladakh Bike & Tour Packages', href: '/holidays/ladakh' },
    ],
  },
  {
    title: 'Sacred Pilgrimages & Yatras',
    icon: <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />,
    links: [
      { label: 'Ayodhya Ram Mandir Darshan', href: '/holidays/ayodhya' },
      { label: 'Varanasi Kashi Ganga Aarti', href: '/holidays/varanasi' },
      { label: 'Char Dham Yatra 2026', href: '/holidays/char-dham' },
      { label: 'Kedarnath Badrinath Tour', href: '/holidays/kedarnath' },
      { label: 'Dwarka Somnath Gujarat Tour', href: '/holidays/dwarka' },
      { label: 'Tirupati Balaji Darshan', href: '/holidays/tirupati' },
      { label: 'Shirdi Sai Baba Temple Tour', href: '/holidays/shirdi' },
    ],
  },
  {
    title: 'Travel Styles & Themes',
    icon: <Compass className="w-4 h-4 text-sky-400 shrink-0" />,
    links: [
      { label: 'Honeymoon Specials', href: '/honeymoon' },
      { label: 'Domestic Family Packages', href: '/holidays/india' },
      { label: 'International Holiday Packages', href: '/holidays/international' },
      { label: 'All Customized Packages', href: '/holidays' },
      { label: 'Flight Bookings', href: '/flights' },
      { label: 'Tourist Visa Assistance', href: '/visa' },
      { label: 'Custom Trip Architect', href: '/customize-trip' },
    ],
  },
];

export const PopularKeywordsFooter: React.FC = () => {
  return (
    <nav
      aria-label="Popular Destinations and Holiday Themes"
      className="bg-brand-950 text-slate-300 py-12 border-t border-brand-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOOTER_DESTINATIONS.map((column, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2 pb-1 border-b border-brand-800/60">
                {column.icon}
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {column.title}
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
