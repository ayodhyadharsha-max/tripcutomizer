import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Travel Blog & Destination Guides 2026 | Trip Customizer',
  description:
    'Expert travel guides, visa-free destinations for Indians, winter getaways, budget international trips under ₹25k, and romantic honeymoon ideas for 2026.',
  keywords: [
    'travel blog india',
    'gulmarg gondola ticket booking online 2026',
    'sunburn goa 2026 dates tickets venue',
    'rann utsav 2026 dates tent city price',
    'pushkar mela 2026 schedule luxury camps',
    'diwali holiday destinations 2026',
    'honeymoon destinations in india under 30000',
    'summer holiday destinations 2026',
    'visa on arrival countries for indians 2026',
    'international tour guides 2026',
    'visa free countries for indians 2026',
    'budget international trips under 25k',
    'best winter destinations 2026',
    'honeymoon guides 2026',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/blog',
  },
  openGraph: {
    title: 'Travel Blog & Destination Guides 2026 | Trip Customizer',
    description: 'Expert travel guides, Gulmarg Gondola tickets, Sunburn Goa 2026, Rann Utsav Kutch, Pushkar Camel Fair, Diwali packages, and honeymoon deals.',
    url: 'https://www.tripcustomizer.com/blog',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Blog & Guides 2026 | Trip Customizer',
    description: 'Curated travel advice, destination guides, and budget tips.',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function BlogHubPage() {
  const blogs = [
    {
      slug: 'thailand-visa-free-for-indians-tour-packages-itinerary-2026-guide',
      title: 'Thailand Visa-Free for Indians (2026–2027): 60-Day Rules, Entry Requirements, Packages Under ₹25k & 5-Day Itinerary 🌴✈️',
      category: '🌴 60-Day Visa Exemption',
      author: 'Southeast Asia Travel Desk',
      date: 'Nov 18, 2026',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      summary: 'Zero visa fee! 60-day entry stamp for Indian passport holders. Phuket Phi Phi island speedboat, Bangkok shopping, Krabi 4-island tour & holiday packages starting @ ₹21,999.',
    },
    {
      slug: 'auli-skiing-tour-packages-ropeway-ticket-booking-winter-guide',
      title: 'Auli Skiing & Tour Packages 2026–2027: Joshimath Ropeway Booking, Snow Dates & 5-Day Delhi Itinerary ❄️⛷️',
      category: '🎿 Skiing & Snow Special (Dec–Feb)',
      author: 'Uttarakhand Winter Editorial Desk',
      date: 'Nov 17, 2026',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
      summary: 'Explore India’s skiing capital in Uttarakhand! Asia’s 4.15 km cable car tickets, beginner ski instructors, 4x4 snow tire chains, Nanda Devi views, Gorson Bugyal snow trek & 5D/4N packages @ ₹12,499.',
    },
    {
      slug: 'varanasi-dev-deepawali-2026-dates-boat-booking-ganga-aarti-guide',
      title: 'Dev Deepawali Varanasi 2026: Official Date, Ghats Schedule, Boat Price & Kashi Guide 🪔✨',
      category: '🪔 Sacred Festival of Gods (Nov 28)',
      author: 'Spiritual Expeditions Desk',
      date: 'Nov 04, 2026',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600&auto=format&fit=crop',
      summary: 'Dates: Nov 28, 2026! Over 15 lakh clay diyas across 84 ghats, Dashashwamedh Maha Aarti with 21 priests, Chet Singh laser show, Ganga boat booking rates & Kashi tour packages @ ₹8,999.',
    },
    {
      slug: 'christmas-vacation-packages-india-best-places-to-visit-2026-guide',
      title: 'Top 10 Places to Celebrate Christmas in India (2026): Snow, Beaches & Long Weekend Packages 🎄❄️',
      category: '🎄 Christmas Long Weekend (Dec 25)',
      author: 'Festive Travel Editorial',
      date: 'Nov 16, 2026',
      image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600&auto=format&fit=crop',
      summary: 'Friday Dec 25 3-day long weekend! White Christmas in Gulmarg & Manali snowfall, Old Goa midnight mass, Kerala backwaters & family vacation packages starting @ ₹11,999.',
    },
    {
      slug: 'dubai-shopping-festival-2026-dates-flight-packages-guide',
      title: 'Dubai Shopping Festival (DSF) 2026-2027: Official Dates, Mega Sales, Flight Packages & Guide 🛍️✨',
      category: '🛍️ International Mega Festival',
      author: 'International Editorial Desk',
      date: 'Oct 30, 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      summary: 'Dates: Dec 2026 – Jan 2027! Over 90% discount sales, direct Emirates/IndiGo flights from Ahmedabad, Mumbai & Delhi, 4-star hotels, desert safari, Burj Khalifa & packages @ ₹34,999.',
    },
    {
      slug: 'top-10-new-year-2027-travel-packages-india-abroad-guide',
      title: 'Top 10 Best Places to Celebrate New Year 2027 in India & Abroad: Budget Holiday Packages 🎆🍾',
      category: '🎆 New Year 2027 Countdown',
      author: 'Festive Travel Editorial',
      date: 'Oct 30, 2026',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
      summary: 'Celebrate 2027 in Goa, Dubai, Thailand, Kashmir, Bali & Manali! Early-bird airfares, 4-star stays, beach parties & winter snow getaways starting @ ₹9,999.',
    },
    {
      slug: 'top-10-best-winter-destinations-2026',
      title: 'Top 10 Best Winter Holiday Destinations 2026-2027: Kashmir, Dubai, Goa, Manali & Kutch ❄️🌴',
      category: '❄️ Winter 2026–2027 Master Guide',
      author: 'Senior Travel Editorial',
      date: 'Nov 02, 2026',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=600&auto=format&fit=crop',
      summary: 'Explore 2026-2027 winter wonderlands and tropical beach escapes! Kashmir Gulmarg skiing, Dubai shopping festival, Sunburn Goa, Manali snow, Rann Utsav Kutch, Vietnam & Kerala starting @ ₹13,999.',
    },
    {
      slug: 'gulmarg-gondola-ticket-booking-online-kashmir-winter-package-guide',
      title: 'Gulmarg Gondola Ticket Booking Online 2026: Phase 1 & 2 Rates, Timings & Kashmir Winter Guide ❄️🚠',
      category: '❄️ Kashmir Snow Special',
      author: 'Himalayan Expeditions Desk',
      date: 'Oct 13, 2026',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
      summary: 'Complete guide to booking Gondola Phase 1 (₹800) and Phase 2 (₹1,050) tickets, sold-out hacks, snow seasons, Srinagar houseboats & packages starting @ ₹12,999.',
    },
    {
      slug: 'sunburn-goa-2026-dates-tickets-christmas-new-year-package-guide',
      title: 'Sunburn Goa 2026: Official Dates, Tickets, Venue, Christmas & New Year Beach Guide 🏖️🎉',
      category: '🏖️ Goa Beach Carnival',
      author: 'Beach & Nightlife Desk',
      date: 'Oct 13, 2026',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop',
      summary: 'Festival dates (Dec 28–31), ticket prices (GA @ ₹3,500, VIP @ ₹7,500), venue details, North vs South Goa stays, Christmas midnight mass & packages @ ₹9,999.',
    },
    {
      slug: 'rann-utsav-2026-dates-tent-city-package-price-booking-guide',
      title: 'Rann Utsav 2026-2027: Official Dates, Tent City Price, Full Moon Schedule & Booking Guide 🎪',
      category: '🎪 White Desert Special (Live)',
      author: 'Cultural Travel Desk',
      date: 'Oct 12, 2026',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=600&auto=format&fit=crop',
      summary: 'Season starting Nov 1, 2026! Complete guide to Tent City Dhordo tariffs, Full Moon night schedule, online border permits & Kutch tour packages starting @ ₹14,500.',
    },
    {
      slug: 'pushkar-mela-2026-dates-schedule-luxury-camps-booking-guide',
      title: 'Pushkar Mela 2026: Official Dates, Full Schedule, Luxury Tent Price & Booking Guide 🐪🎪',
      category: '🐪 Royal Rajasthan Fair',
      author: 'Rajasthan Heritage Desk',
      date: 'Oct 12, 2026',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop',
      summary: 'Dates: Nov 20–28, 2026! World’s largest camel fair, Kartik Purnima Maha Aarti on Pushkar lake, luxury Swiss desert camps & hot air balloon safaris starting @ ₹11,999.',
    },
    {
      slug: 'top-10-diwali-holiday-destinations-2026',
      title: 'Top 10 Best Diwali Holiday Destinations in 2026: Dubai, Rajasthan, Bali, Goa & Kashmir 🪔✨',
      category: '🪔 Diwali Special 2026',
      author: 'Senior Travel Desk',
      date: 'Oct 12, 2026',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop',
      summary: 'Make this Diwali long weekend unforgettable! Royal Rajasthan palaces, Dubai fireworks, Bali pool villas, Goa beaches & Varanasi Dev Deepawali starting @ ₹12,999.',
    },
    {
      slug: 'top-10-honeymoon-destinations-in-india-under-30k',
      title: 'Top 10 Best Honeymoon Destinations in India Under ₹30,000 for Couples in 2026: Kashmir, Kerala & Goa 💑🏔️',
      category: '💑 Honeymoon Under 30k',
      author: 'Romance Travel Concierge',
      date: 'Oct 12, 2026',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      summary: 'Fairytale honeymoon on a budget! Kashmir cedar houseboats, Kerala backwaters, Manali snow valleys & Goa beach resorts with free candlelight dinner & private cab.',
    },
    {
      slug: 'top-10-summer-holiday-destinations-2026',
      title: 'Top 10 Best Summer Holiday Destinations in 2026: Kashmir, Ladakh, Bali, Switzerland & Manali ☀️🏔️',
      category: '☀️ Trending Summer 2026',
      author: 'Senior Travel Desk',
      date: 'Oct 07, 2026',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop',
      summary: 'Beat the heat in summer 2026! Discover Kashmir Gulmarg, Ladakh bike tours, Manali hill stations, Bali private pool villas & Swiss Alps starting @ ₹12,999.',
    },
    {
      slug: 'top-10-visa-on-arrival-countries-for-indians-2026',
      title: 'Top 10 Visa on Arrival Countries for Indian Passport Holders in 2026: Rules, Fees & Packages 🛂✈️',
      category: '🛂 VoA Master Guide',
      author: 'Senior Visa Desk',
      date: 'Oct 07, 2026',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      summary: 'Fly abroad without embassy visits! Bali, Thailand, Sri Lanka, Maldives, Seychelles, Mauritius & Kenya with accurate 2026 visa fees, required documents & packages.',
    },
    {
      slug: 'top-10-international-tour-packages-under-25k-2026',
      title: 'Top 10 Best International Tour Packages Under ₹25,000 (Visa-Free for Indians 2026) ✈️🌴',
      category: '🔥 Viral 2026 Hotspot',
      author: 'Senior Travel Desk',
      date: 'Oct 04, 2026',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      summary: 'Explore 10 foreign destinations under ₹25,000! Thailand, Bali, Vietnam, Malaysia, Dubai, Baku Azerbaijan & Sri Lanka with 4-star hotels, flights & 10-min quote desk.',
    },
    {
      slug: 'top-10-visa-free-countries-for-indians-2026',
      title: 'Top 10 Visa-Free Countries for Indian Passport Holders in 2026: Complete Travel & Budget Guide 🛂✈️',
      category: '🔥 Viral Guide 2026',
      author: 'Senior Travel Desk',
      date: 'Sept 25, 2026',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      summary: 'Hassle-free international trips without visa paperwork! Discover Thailand, Vietnam, Bali, Malaysia, Sri Lanka, Kazakhstan & Mauritius starting @ ₹14,999.',
    },
    {
      slug: 'top-10-best-international-honeymoon-packages-2026',
      title: 'Top 10 Best International Honeymoon Packages for Couples 2026: Bali, Maldives, Dubai & Europe 💑',
      category: '💑 Honeymoon Special 2026',
      author: 'Senior Travel Desk',
      date: 'Sept 24, 2026',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
      summary: 'Customized international honeymoon tour packages across 40+ countries. 4-Star private pool villas, flights, visa assistance, 5% GST tax compliance & 24x7 travel desk support.',
    },
    {
      slug: 'top-7-spiritual-yatras-in-india-2026',
      title: 'Top 7 Spiritual Yatras in India 2026: Char Dham, Ayodhya Ram Mandir & Kashi 🕉️',
      category: '🕉️ Divine Guide 2026',
      author: 'Trip Customizer Spiritual Desk',
      date: 'Sept 23, 2026',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
      summary: 'Explore the top 7 sacred spiritual yatras in India for 2026. Complete travel guide for Char Dham, Ayodhya Ram Mandir VIP Darshan, Kashi, Kedarnath & Badrinath.',
    },
    {
      slug: 'top-10-budget-international-trips-under-30k',
      title: 'Top 10 Budget International Holiday Packages Under ₹30,000 (Visa-Free for Indians) ✈️',
      category: '🔥 Viral Deal 2026',
      author: 'Senior Travel Desk',
      date: 'Sept 20, 2026',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      summary: 'From Bali & Thailand to Vietnam, Malaysia & Baku Azerbaijan — discover 10 incredible foreign trips starting @ ₹16,500 with 4-star hotels & flights.',
    },
    {
      slug: 'top-10-things-to-do-in-dubai-2026',
      title: 'Top 10 Unmissable Experiences in Dubai for 2026',
      category: 'Destination Guide',
      author: 'Aanya Sharma',
      date: 'Sept 10, 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
      summary: 'From scaling Burj Khalifa to dune bashing & visiting the Museum of the Future, here is your definitive Dubai itinerary.',
    },
    {
      slug: 'how-to-choose-the-right-forex-card',
      title: 'How to Choose the Best Multi-Currency Forex Card for Overseas Trips',
      category: 'Forex & Finance',
      author: 'Vikram Sengupta',
      date: 'Sept 04, 2026',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
      summary: 'Avoid hefty 3.5% credit card cross-currency markups. Discover why Forex Cards are the smartest way to spend abroad.',
    },
    {
      slug: 'ultimate-guide-to-switzerland-by-train',
      title: 'The Ultimate Guide to Exploring Switzerland via Eurail Scenic Trains',
      category: 'Europe Travel',
      author: 'Rohan Kapoor',
      date: 'Aug 28, 2026',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop',
      summary: 'Discover Glacier Express, Bernina Express & Mt. Titlis ropeway passes for an alpine trip of a lifetime.',
    },
  ];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.tripcustomizer.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Travel Blog & Destination Guides',
        item: 'https://www.tripcustomizer.com/blog',
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trip Customizer Travel Guides & Articles',
    numberOfItems: blogs.length,
    itemListElement: blogs.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.title,
      url: `https://www.tripcustomizer.com/blog/${b.slug}`,
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Container>
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-md border border-slate-200 text-slate-900">
          <div className="flex items-center space-x-2 text-brand-600 font-bold text-xs uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-brand-600" />
            <span>Expert Travel Editorial</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
            Travel Guides & <span className="text-brand-600">Destination Insights</span>
          </h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl font-medium">
            Curated travel stories, forex advice, visa tips and day-by-day itinerary blueprints written by senior travel architects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <Card key={b.slug} hoverable className="border-slate-200 bg-white group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image src={b.image} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-brand-800/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {b.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-4 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3 text-brand-500" />
                      <span>{b.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{b.date}</span>
                    </span>
                  </div>

                  <h2 className="font-bold text-slate-900 text-base group-hover:text-brand-500 transition-colors line-clamp-2">
                    {b.title}
                  </h2>

                  <p className="text-xs text-slate-500 line-clamp-2">{b.summary}</p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/blog/${b.slug}`}
                  prefetch={true}
                  className="text-xs font-bold text-brand-500 hover:underline inline-flex items-center"
                >
                  Read Full Article →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
