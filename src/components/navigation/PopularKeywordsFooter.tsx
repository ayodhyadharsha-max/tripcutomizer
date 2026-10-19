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

        {/* Trending City-Wise Package Routes for Direct Internal Link Equity */}
        <div className="mt-10 pt-8 border-t border-brand-800/80">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trending City-Wise Tour Packages
            </h4>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <Link href="/packages/dubai-tour-package-from-ahmedabad" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Dubai Package from Ahmedabad
            </Link>
            <Link href="/packages/dubai-tour-package-from-mumbai" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Dubai Package from Mumbai
            </Link>
            <Link href="/packages/dubai-tour-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Dubai Package from Delhi
            </Link>
            <Link href="/packages/dubai-tour-package-from-bangalore" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Dubai Package from Bangalore
            </Link>
            <Link href="/packages/kashmir-5-days-honeymoon-package" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Kashmir Honeymoon 5 Days
            </Link>
            <Link href="/packages/kashmir-tour-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Kashmir Package from Delhi
            </Link>
            <Link href="/packages/kashmir-tour-package-from-mumbai" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Kashmir Package from Mumbai
            </Link>
            <Link href="/packages/kashmir-tour-package-from-ahmedabad" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Kashmir Package from Ahmedabad
            </Link>
            <Link href="/packages/ayodhya-varanasi-prayagraj-4-days-tour" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Ayodhya Varanasi Prayagraj 4 Days
            </Link>
            <Link href="/packages/ayodhya-ram-mandir-vip-darshan-tour" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Ayodhya VIP Darshan Tour
            </Link>
            <Link href="/packages/ayodhya-tour-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Ayodhya Tour from Delhi
            </Link>
            <Link href="/packages/ayodhya-tour-package-from-mumbai" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Ayodhya Tour from Mumbai
            </Link>
            <Link href="/packages/char-dham-yatra-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Char Dham Yatra from Delhi
            </Link>
            <Link href="/packages/char-dham-yatra-package-from-ahmedabad" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Char Dham from Ahmedabad
            </Link>
            <Link href="/packages/bali-honeymoon-package-from-mumbai" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Bali Honeymoon from Mumbai
            </Link>
            <Link href="/packages/bali-honeymoon-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Bali Honeymoon from Delhi
            </Link>
            <Link href="/packages/bali-6-days-private-pool-villa-honeymoon" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Bali Pool Villa Honeymoon
            </Link>
            <Link href="/packages/thailand-tour-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Thailand Package from Delhi
            </Link>
            <Link href="/packages/thailand-tour-package-from-mumbai" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Thailand Package from Mumbai
            </Link>
            <Link href="/packages/kerala-5-days-munnar-alleppey-houseboat-package" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Kerala Munnar Houseboat Tour
            </Link>
            <Link href="/packages/kerala-tour-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Kerala Package from Delhi
            </Link>
            <Link href="/packages/goa-beach-holiday-package-from-mumbai" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Goa Beach Package from Mumbai
            </Link>
            <Link href="/packages/goa-beach-holiday-package-from-delhi" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Goa Beach Package from Delhi
            </Link>
            <Link href="/packages/goa-beach-holiday-package-from-bangalore" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Goa Package from Bangalore
            </Link>
          </div>
        </div>

        {/* Trending Festival & Seasonal Travel Guides */}
        <div className="mt-8 pt-6 border-t border-brand-800/80">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trending Festival & Seasonal Travel Guides (2026–2027)
            </h4>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <Link href="/blog/sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide" className="bg-brand-900/80 hover:bg-brand-800 text-amber-300 hover:text-white px-3 py-1 rounded-full border border-amber-800/60 transition">
              Sunburn Goa 2026 Dates & Tickets
            </Link>
            <Link href="/blog/gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide" className="bg-brand-900/80 hover:bg-brand-800 text-sky-300 hover:text-white px-3 py-1 rounded-full border border-sky-800/60 transition">
              Gulmarg Gondola Booking & Snow Packages
            </Link>
            <Link href="/blog/rann-utsav-2026-dates-tent-city-package-price-booking-guide" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Rann Utsav Kutch Tent City Guide
            </Link>
            <Link href="/blog/pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide" className="bg-brand-900/80 hover:bg-brand-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-brand-800 transition">
              Pushkar Mela Luxury Camps & Dates
            </Link>
            <Link href="/blog/top-10-honeymoon-destinations-in-india-under-30k" className="bg-brand-900/80 hover:bg-brand-800 text-pink-300 hover:text-white px-3 py-1 rounded-full border border-pink-800/60 transition">
              Top 10 Honeymoon in India Under 30K
            </Link>
            <Link href="/blog/top-10-diwali-holiday-destinations-2026" className="bg-brand-900/80 hover:bg-brand-800 text-amber-300 hover:text-white px-3 py-1 rounded-full border border-amber-800/60 transition">
              Top 10 Diwali Holiday Destinations
            </Link>
            <Link href="/blog/top-10-visa-on-arrival-countries-for-indians-2026" className="bg-brand-900/80 hover:bg-brand-800 text-emerald-300 hover:text-white px-3 py-1 rounded-full border border-emerald-800/60 transition">
              Visa on Arrival Countries for Indians
            </Link>
            <Link href="/blog/top-7-spiritual-yatras-in-india-2026" className="bg-brand-900/80 hover:bg-brand-800 text-amber-300 hover:text-white px-3 py-1 rounded-full border border-amber-800/60 transition">
              Top 7 Sacred Spiritual Yatras
            </Link>
            <Link href="/blog/top-10-best-winter-destinations-2026" className="bg-brand-900/80 hover:bg-brand-800 text-cyan-300 hover:text-white px-3 py-1 rounded-full border border-cyan-800/60 transition">
              Best Winter Snow Destinations
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
