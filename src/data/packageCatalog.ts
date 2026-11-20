import { DEMO_PACKAGES, HolidayPackage, ItineraryDay } from './packagesData';

export interface SectorDefinition {
  region: string;
  destinationSlug: string;
  country: string;
  regionCategory: string;
  isInternational: boolean;
  cities: string[];
  count: number;
  minPrice: number;
  maxPrice: number;
  heroImage: string;
}

export const OTA_DOMESTIC_SECTORS: SectorDefinition[] = [
  {
    region: 'Kerala',
    destinationSlug: 'kerala',
    country: 'India',
    regionCategory: 'South India',
    isInternational: false,
    cities: ['Munnar', 'Alleppey', 'Cochin', 'Thekkady', 'Kovalam', 'Wayanad', 'Kumarakom'],
    count: 320,
    minPrice: 9999,
    maxPrice: 45000,
    heroImage: '/destinations/kerala.jpg'
  },
  {
    region: 'Kashmir',
    destinationSlug: 'kashmir',
    country: 'India',
    regionCategory: 'North India',
    isInternational: false,
    cities: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Yusmarg'],
    count: 280,
    minPrice: 12999,
    maxPrice: 65000,
    heroImage: '/destinations/kashmir.jpg'
  },
  {
    region: 'Himachal Pradesh',
    destinationSlug: 'himachal',
    country: 'India',
    regionCategory: 'North India',
    isInternational: false,
    cities: ['Shimla', 'Manali', 'Dharamshala', 'Dalhousie', 'Kasol', 'Spiti'],
    count: 350,
    minPrice: 7999,
    maxPrice: 48000,
    heroImage: '/destinations/himachal.jpg'
  },
  {
    region: 'Goa',
    destinationSlug: 'goa',
    country: 'India',
    regionCategory: 'West India',
    isInternational: false,
    cities: ['North Goa', 'South Goa', 'Panaji', 'Calangute', 'Dudhsagar'],
    count: 280,
    minPrice: 6999,
    maxPrice: 35000,
    heroImage: '/destinations/goa.jpg'
  },
  {
    region: 'Rajasthan',
    destinationSlug: 'rajasthan',
    country: 'India',
    regionCategory: 'West India',
    isInternational: false,
    cities: ['Jaipur', 'Udaipur', 'Jaisalmer', 'Jodhpur', 'Bikaner', 'Mount Abu', 'Pushkar'],
    count: 320,
    minPrice: 8999,
    maxPrice: 55000,
    heroImage: '/destinations/rajasthan.jpg'
  },
  {
    region: 'Uttarakhand',
    destinationSlug: 'uttarakhand',
    country: 'India',
    regionCategory: 'North India',
    isInternational: false,
    cities: ['Nainital', 'Mussoorie', 'Jim Corbett', 'Rishikesh', 'Auli', 'Chopta', 'Haridwar'],
    count: 260,
    minPrice: 6500,
    maxPrice: 38000,
    heroImage: '/destinations/uttarakhand.jpg'
  },
  {
    region: 'Andaman & Nicobar',
    destinationSlug: 'andaman',
    country: 'India',
    regionCategory: 'South India',
    isInternational: false,
    cities: ['Port Blair', 'Havelock Island', 'Neil Island', 'Baratang'],
    count: 120,
    minPrice: 16999,
    maxPrice: 75000,
    heroImage: '/destinations/andaman.jpg'
  },
  {
    region: 'Ladakh',
    destinationSlug: 'ladakh',
    country: 'India',
    regionCategory: 'North India',
    isInternational: false,
    cities: ['Leh', 'Nubra Valley', 'Pangong Lake', 'Tso Moriri', 'Kargil'],
    count: 150,
    minPrice: 18999,
    maxPrice: 68000,
    heroImage: '/destinations/ladakh.jpg'
  },
  {
    region: 'Sikkim & Darjeeling',
    destinationSlug: 'sikkim',
    country: 'India',
    regionCategory: 'East India',
    isInternational: false,
    cities: ['Gangtok', 'Pelling', 'Lachen', 'Lachung', 'Darjeeling'],
    count: 180,
    minPrice: 12500,
    maxPrice: 42000,
    heroImage: '/destinations/sikkim.jpg'
  },
  {
    region: 'North East India',
    destinationSlug: 'north-east',
    country: 'India',
    regionCategory: 'East India',
    isInternational: false,
    cities: ['Shillong', 'Cherrapunji', 'Kaziranga', 'Guwahati', 'Tawang'],
    count: 160,
    minPrice: 14500,
    maxPrice: 48000,
    heroImage: '/destinations/north-east.jpg'
  },
  {
    region: 'Char Dham & Religious',
    destinationSlug: 'char-dham',
    country: 'India',
    regionCategory: 'Spiritual',
    isInternational: false,
    cities: ['Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri', 'Tirupati', 'Shirdi', 'Puri', 'Dwarka'],
    count: 200,
    minPrice: 4999,
    maxPrice: 85000,
    heroImage: '/destinations/spiritual.jpg'
  },
  {
    region: 'Ayodhya & Ram Janmabhoomi',
    destinationSlug: 'ayodhya',
    country: 'India',
    regionCategory: 'Spiritual',
    isInternational: false,
    cities: ['Ram Janmabhoomi', 'Hanuman Garhi', 'Kanak Bhawan', 'Saryu Ghat', 'Ram Ki Paidi', 'Surya Kund', 'Nageshwarnath', 'Guptar Ghat'],
    count: 120,
    minPrice: 5999,
    maxPrice: 35000,
    heroImage: '/destinations/verified/ayodhya-ram-mandir.jpg'
  },
  {
    region: 'Varanasi & Kashi Vishwanath',
    destinationSlug: 'varanasi',
    country: 'India',
    regionCategory: 'Spiritual',
    isInternational: false,
    cities: ['Kashi Vishwanath', 'Dashashwamedh Ghat', 'Assi Ghat', 'Sarnath', 'Manikarnika', 'Ramnagar Fort'],
    count: 120,
    minPrice: 6999,
    maxPrice: 38000,
    heroImage: '/destinations/verified/varanasi-ganga-aarti.jpg'
  },
  {
    region: 'Karnataka & Coorg',
    destinationSlug: 'coorg',
    country: 'India',
    regionCategory: 'South India',
    isInternational: false,
    cities: ['Coorg', 'Mysore', 'Kabini', 'Chikmagalur', 'Hampi', 'Gokarna'],
    count: 180,
    minPrice: 7999,
    maxPrice: 38000,
    heroImage: '/destinations/coorg.jpg'
  },
  {
    region: 'Tamil Nadu & Ooty',
    destinationSlug: 'tamilnadu',
    country: 'India',
    regionCategory: 'South India',
    isInternational: false,
    cities: ['Ooty', 'Kodaikanal', 'Madurai', 'Rameshwaram', 'Kanyakumari', 'Mahabalipuram'],
    count: 180,
    minPrice: 7500,
    maxPrice: 35000,
    heroImage: '/destinations/tamilnadu.jpg'
  },
  {
    region: 'Gujarat & Kutch',
    destinationSlug: 'gujarat',
    country: 'India',
    regionCategory: 'West India',
    isInternational: false,
    cities: ['Rann of Kutch', 'Statue of Unity', 'Dwarka', 'Somnath', 'Gir Safari', 'Ahmedabad'],
    count: 170,
    minPrice: 8500,
    maxPrice: 36000,
    heroImage: '/destinations/gujarat.jpg'
  },
  {
    region: 'Madhya Pradesh',
    destinationSlug: 'wildlife',
    country: 'India',
    regionCategory: 'North India',
    isInternational: false,
    cities: ['Pachmarhi', 'Khajuraho', 'Kanha Safari', 'Bandhavgarh', 'Ujjain', 'Gwalior'],
    count: 140,
    minPrice: 7500,
    maxPrice: 38000,
    heroImage: '/destinations/wildlife.jpg'
  },
  {
    region: 'Maharashtra Getaways',
    destinationSlug: 'maharashtra',
    country: 'India',
    regionCategory: 'West India',
    isInternational: false,
    cities: ['Lonavala', 'Mahabaleshwar', 'Alibaug', 'Matheran', 'Shirdi', 'Nashik'],
    count: 110,
    minPrice: 5999,
    maxPrice: 28000,
    heroImage: '/destinations/hero-beach.jpg'
  }
];

export const OTA_INTERNATIONAL_SECTORS: SectorDefinition[] = [
  {
    region: 'Thailand',
    destinationSlug: 'thailand',
    country: 'Thailand',
    regionCategory: 'Southeast Asia',
    isInternational: true,
    cities: ['Bangkok', 'Pattaya', 'Phuket', 'Krabi', 'Chiang Mai'],
    count: 220,
    minPrice: 17999,
    maxPrice: 65000,
    heroImage: '/destinations/thailand.jpg'
  },
  {
    region: 'Dubai & UAE',
    destinationSlug: 'dubai',
    country: 'United Arab Emirates',
    regionCategory: 'Middle East',
    isInternational: true,
    cities: ['Dubai City', 'Abu Dhabi', 'Desert Safari', 'Yas Island'],
    count: 210,
    minPrice: 26999,
    maxPrice: 110000,
    heroImage: '/destinations/dubai.jpg'
  },
  {
    region: 'Bali (Indonesia)',
    destinationSlug: 'bali',
    country: 'Indonesia',
    regionCategory: 'Southeast Asia',
    isInternational: true,
    cities: ['Ubud', 'Kuta', 'Seminyak', 'Nusa Penida'],
    count: 180,
    minPrice: 21999,
    maxPrice: 85000,
    heroImage: '/destinations/bali.jpg'
  },
  {
    region: 'Maldives',
    destinationSlug: 'maldives',
    country: 'Maldives',
    regionCategory: 'Island Getaways',
    isInternational: true,
    cities: ['Male Atoll', 'South Male Resort', 'Ari Atoll Overwater Villa'],
    count: 120,
    minPrice: 34999,
    maxPrice: 250000,
    heroImage: '/destinations/maldives.jpg'
  },
  {
    region: 'Singapore & Malaysia',
    destinationSlug: 'singapore',
    country: 'Singapore',
    regionCategory: 'Southeast Asia',
    isInternational: true,
    cities: ['Singapore City', 'Sentosa', 'Kuala Lumpur', 'Genting Highlands'],
    count: 180,
    minPrice: 28999,
    maxPrice: 95000,
    heroImage: '/destinations/singapore.jpg'
  },
  {
    region: 'Vietnam & Cambodia',
    destinationSlug: 'vietnam',
    country: 'Vietnam',
    regionCategory: 'Southeast Asia',
    isInternational: true,
    cities: ['Hanoi', 'Halong Bay', 'Da Nang', 'Hoi An', 'Siem Reap'],
    count: 150,
    minPrice: 24500,
    maxPrice: 78000,
    heroImage: '/destinations/vietnam.jpg'
  },
  {
    region: 'Europe Grand Tours',
    destinationSlug: 'europe',
    country: 'France',
    regionCategory: 'Europe',
    isInternational: true,
    cities: ['Paris', 'Lucerne', 'Rome', 'Venice', 'Amsterdam', 'Barcelona', 'Prague', 'Vienna'],
    count: 250,
    minPrice: 89999,
    maxPrice: 350000,
    heroImage: '/destinations/europe.jpg'
  },
  {
    region: 'Sri Lanka',
    destinationSlug: 'sri-lanka',
    country: 'Sri Lanka',
    regionCategory: 'Island Getaways',
    isInternational: true,
    cities: ['Colombo', 'Kandy', 'Nuwara Eliya', 'Bentota', 'Sigiriya'],
    count: 110,
    minPrice: 16500,
    maxPrice: 52000,
    heroImage: '/destinations/sri-lanka.jpg'
  },
  {
    region: 'Mauritius & Seychelles',
    destinationSlug: 'mauritius',
    country: 'Mauritius',
    regionCategory: 'Island Getaways',
    isInternational: true,
    cities: ['North Island', 'South Island', 'Ile Aux Cerfs', 'Mahé Island'],
    count: 90,
    minPrice: 39999,
    maxPrice: 145000,
    heroImage: '/destinations/hero-beach.jpg'
  },
  {
    region: 'Turkey & Egypt',
    destinationSlug: 'turkey',
    country: 'Turkey',
    regionCategory: 'Middle East',
    isInternational: true,
    cities: ['Istanbul', 'Cappadocia', 'Pamukkale', 'Cairo', 'Nile Cruise'],
    count: 120,
    minPrice: 52000,
    maxPrice: 165000,
    heroImage: '/destinations/turkey.jpg'
  },
  {
    region: 'Nepal & Bhutan',
    destinationSlug: 'nepal',
    country: 'Nepal',
    regionCategory: 'Southeast Asia',
    isInternational: true,
    cities: ['Kathmandu', 'Pokhara', 'Chitwan', 'Thimphu', 'Paro'],
    count: 110,
    minPrice: 11999,
    maxPrice: 62000,
    heroImage: '/destinations/nepal.jpg'
  },
  {
    region: 'Central Asia (Almaty/Baku/Tbilisi)',
    destinationSlug: 'baku',
    country: 'Azerbaijan',
    regionCategory: 'Central Asia',
    isInternational: true,
    cities: ['Almaty', 'Baku', 'Tbilisi', 'Tashkent', 'Samarkand'],
    count: 100,
    minPrice: 29999,
    maxPrice: 78000,
    heroImage: '/destinations/azerbaijan.jpg'
  },
  {
    region: 'Australia & New Zealand',
    destinationSlug: 'australia',
    country: 'Australia',
    regionCategory: 'Island Getaways',
    isInternational: true,
    cities: ['Sydney', 'Melbourne', 'Gold Coast', 'Auckland', 'Queenstown'],
    count: 90,
    minPrice: 125000,
    maxPrice: 380000,
    heroImage: '/destinations/australia.jpg'
  },
  {
    region: 'USA & Canada',
    destinationSlug: 'usa',
    country: 'United States',
    regionCategory: 'International',
    isInternational: true,
    cities: ['New York', 'Las Vegas', 'San Francisco', 'Orlando', 'Niagara', 'Toronto', 'Banff'],
    count: 70,
    minPrice: 155000,
    maxPrice: 420000,
    heroImage: '/destinations/usa.jpg'
  }
];

const THEMES_CONFIG = [
  { raw: 'Honeymoon Special', theme: 'Honeymoon', suffix: 'Romantic Getaway' },
  { raw: 'Family Package', theme: 'Family & Kids', suffix: 'Family Vacation Special' },
  { raw: 'Budget Explorer', theme: 'Budget Explorer', suffix: 'Value Super Saver' },
  { raw: 'Luxury Escape', theme: 'Luxury & Resorts', suffix: '5-Star Luxury Retreat' },
  { raw: 'Adventure & Treks', theme: 'Adventure & Wildlife', suffix: 'Outdoor Explorer' },
  { raw: 'Pilgrimage Yatra', theme: 'Spiritual / Pilgrimage', suffix: 'Sacred Teerth Yatra' },
  { raw: 'Wildlife Safari', theme: 'Adventure & Wildlife', suffix: 'Jungle Safari Tour' },
  { raw: 'Weekend Gateway', theme: 'Family & Kids', suffix: 'Quick City Break' },
  { raw: 'All-Inclusive Resort', theme: 'Luxury & Resorts', suffix: 'All-Inclusive Escape' }
];

const DURATIONS_CONFIG = [
  { label: '2N/3D', days: 3, nights: 2 },
  { label: '3N/4D', days: 4, nights: 3 },
  { label: '4N/5D', days: 5, nights: 4 },
  { label: '5N/6D', days: 6, nights: 5 },
  { label: '6N/7D', days: 7, nights: 6 },
  { label: '7N/8D', days: 8, nights: 7 },
  { label: '9N/10D', days: 10, nights: 9 },
  { label: '11N/12D', days: 12, nights: 11 }
];

const HOTEL_TIERS = [
  '4-Star Deluxe',
  '3-Star Standard',
  '5-Star Luxury',
  '4-Star Premium',
  'Boutique Resort'
];

const HIGHLIGHTS_MAP: Record<string, string[]> = {
  Honeymoon: [
    'Candlelight Dinner & Flower Bed Setup',
    'Private Cab with Chauffeur for All Tours',
    'Scenic Sunset Cruise / Viewpoint Entry Included'
  ],
  'Family & Kids': [
    'Spacious Interconnecting Family Rooms',
    'Private AC Innova/Sedan for Sightseeing',
    'Kids Friendly Attractions & Buffer Time'
  ],
  'Budget Explorer': [
    'Clean Centrally Located 3-Star Hotels',
    'Daily Buffet Breakfast Included',
    'Complete Guided Sightseeing in Private Cab'
  ],
  'Luxury & Resorts': [
    '5-Star Resort Stay with Welcome Drinks',
    'Private Luxury Airport Transfers Included',
    'Personalized Concierge & Spa Credits Included'
  ],
  'Adventure & Wildlife': [
    'Certified Wilderness Guide & Jungle Permits',
    'Morning & Evening Safari / Trek Slots',
    'Bonfire Evening & Traditional Cultural Show'
  ],
  'Spiritual / Pilgrimage': [
    'VIP Fast-Track Darshan Passes Included',
    'Ganga/Saryu Aarti Front-Row Boat Slots',
    'Dedicated English/Hindi Speaking Yatra Guide'
  ]
};

const SECTOR_IMAGE_POOLS: Record<string, string[]> = {
  dubai: [
    '/destinations/verified/dubai-burj-khalifa.jpg',
    '/destinations/verified/dubai-desert-safari.jpg',
    '/destinations/verified/dubai-marina.jpg',
    '/destinations/verified/dubai-palm-jumeirah.jpg',
    '/destinations/verified/dubai-atlantis.jpg',
    '/destinations/verified/dubai-burj-al-arab.jpg',
    '/destinations/verified/dubai-sheikh-zayed-mosque.jpg',
    '/destinations/verified/dubai-miracle-garden.jpg',
    '/destinations/verified/dubai-yas-island.jpg',
    '/destinations/verified/dubai-frame-exterior.jpg',
    '/destinations/verified/dubai-creek.jpg',
    '/destinations/verified/dubai-ferrari-world.jpg',
    '/destinations/dubai/dubai-creek-abra.jpg',
    '/destinations/dubai/dubai-frame.jpg',
    '/destinations/dubai/dubai-marina-skyscrapers.jpg',
    '/destinations/dubai.jpg',
  ],
  ayodhya: [
    '/destinations/verified/ayodhya-ram-mandir.jpg',
    '/destinations/verified/ayodhya-saryu-ghat.jpg',
    '/destinations/verified/ayodhya-hanuman-garhi.jpg',
    '/destinations/verified/ayodhya-kanak-bhawan.jpg',
    '/destinations/ayodhya-varanasi.jpg',
    '/destinations/spiritual.jpg',
  ],
  varanasi: [
    '/destinations/verified/varanasi-ganga-aarti.jpg',
    '/destinations/verified/varanasi-kashi-vishwanath.jpg',
    '/destinations/verified/prayagraj-triveni-sangam.jpg',
    '/destinations/ayodhya-varanasi.jpg',
  ],
  bali: [
    '/destinations/verified/bali-kelingking.jpg',
    '/destinations/verified/bali-tegallalang.jpg',
    '/destinations/verified/bali-tanah-lot.jpg',
    '/destinations/verified/bali-uluwatu.jpg',
    '/destinations/verified/bali-besakih.jpg',
    '/destinations/bali.jpg',
    '/destinations/hero-beach.jpg',
  ],
  thailand: [
    '/destinations/verified/thailand-phi-phi.jpg',
    '/destinations/verified/thailand-railay.jpg',
    '/destinations/verified/thailand-wat-arun.jpg',
    '/destinations/verified/thailand-grand-palace.jpg',
    '/destinations/verified/thailand-sanctuary-truth.jpg',
    '/destinations/verified/thailand-pattaya.jpg',
    '/destinations/verified/thailand-james-bond.jpg',
  ],
  kashmir: [
    '/destinations/verified/kashmir-dal-lake.jpg',
    '/destinations/verified/kashmir-gulmarg.jpg',
    '/destinations/verified/kashmir-pahalgam.jpg',
    '/destinations/verified/kashmir-sonamarg.jpg',
    '/destinations/kashmir.jpg',
  ],
  kerala: [
    '/destinations/verified/kerala-alleppey.jpg',
    '/destinations/verified/kerala-munnar.jpg',
    '/destinations/verified/kerala-kochi.jpg',
    '/destinations/verified/kerala-athirappilly.jpg',
    '/destinations/verified/kerala-varkala.jpg',
  ],
  goa: [
    '/destinations/verified/goa-palolem.jpg',
    '/destinations/verified/goa-calangute.jpg',
    '/destinations/verified/goa-dudhsagar.jpg',
    '/destinations/verified/goa-bom-jesus.jpg',
    '/destinations/goa.jpg',
  ],
  vietnam: [
    '/destinations/verified/vietnam-halong-bay.jpg',
    '/destinations/verified/vietnam-bana-hills.jpg',
    '/destinations/verified/vietnam-danang.jpg',
    '/destinations/verified/vietnam-ho-chi-minh.jpg',
    '/destinations/verified/vietnam-sapa.jpg',
    '/destinations/verified/vietnam-phu-quoc.jpg',
    '/destinations/vietnam.jpg',
  ],
  europe: [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    '/destinations/verified/europe-colosseum.jpg',
    '/destinations/verified/europe-jungfrau.jpg',
    '/destinations/verified/europe-amsterdam-canals.jpg',
    '/destinations/verified/europe-tower-bridge.jpg',
  ],
  'sri-lanka': [
    '/destinations/verified/srilanka-sigiriya.jpg',
    '/destinations/verified/srilanka-nine-arch.jpg',
    '/destinations/verified/srilanka-kandy.jpg',
    '/destinations/verified/srilanka-galle.jpg',
    '/destinations/verified/srilanka-yala.jpg',
  ],
  'char-dham': [
    '/destinations/verified/chardham-kedarnath.jpg',
    '/destinations/verified/chardham-badrinath.jpg',
    '/destinations/verified/chardham-gangotri.jpg',
  ],
  rajasthan: [
    '/destinations/rajasthan.jpg',
  ],
  himachal: [
    '/destinations/verified/india-manali.jpg',
    '/destinations/himachal.jpg',
  ],
  uttarakhand: [
    '/destinations/verified/india-auli.jpg',
    '/destinations/uttarakhand.jpg',
  ],
  baku: [
    '/destinations/verified/baku-flame-towers.jpg',
    '/destinations/azerbaijan.jpg',
  ],
  egypt: [
    '/destinations/verified/egypt-pyramids.jpg',
    '/destinations/verified/egypt-alexandria.jpg',
    '/destinations/verified/egypt-luxor-nile.jpg',
    '/destinations/egypt.jpg',
  ],
  nepal: [
    '/destinations/verified/nepal-swayambhunath.jpg',
    '/destinations/verified/nepal-bhaktapur.jpg',
    '/destinations/verified/nepal-pokhara.jpg',
    '/destinations/verified/nepal-muktinath.jpg',
    '/destinations/nepal.jpg',
  ],
  japan: [
    '/destinations/verified/japan-mount-fuji.jpg',
    '/destinations/verified/japan-fushimi-inari.jpg',
    '/destinations/verified/japan-osaka-castle.jpg',
    '/destinations/verified/japan-sapporo.jpg',
    '/destinations/verified/japan-tokyo-tower.jpg',
    '/destinations/japan.jpg',
  ],
  malaysia: [
    '/destinations/verified/malaysia-petronas-towers.jpg',
    '/destinations/verified/malaysia-batu-caves.jpg',
    '/destinations/verified/malaysia-cameron-highlands.jpg',
    '/destinations/malaysia.jpg',
  ]
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function computeB2BPackagePricing(
  sector: SectorDefinition,
  hotelTier: string,
  nights: number,
  days: number,
  pkgIndex: number
): { startingPrice: number; discountPrice: number } {
  // 1. Hotel Room Rate with Real Indian B2B Seasonal Rates
  const isHill = ['kashmir', 'himachal', 'uttarakhand', 'ladakh', 'sikkim', 'darjeeling', 'spiti'].includes(sector.destinationSlug);
  const isPilgrim = ['ayodhya', 'varanasi', 'char-dham', 'mathura', 'tirupati', 'ujjain', 'dwarka', 'puri', 'shirdi'].includes(sector.destinationSlug);
  const isLeisure = ['goa', 'kerala', 'rajasthan', 'andaman', 'jaisalmer', 'jaipur', 'udaipur', 'jodhpur'].includes(sector.destinationSlug);

  // Base Room Night Rate (Per Room / Night for 2 Adults)
  let roomNightRate = 3200;
  if (hotelTier === '3 Star') {
    // 3-Star: Pilgrimage MAP ₹3,800, Hill MAP ₹4,200, Winter Peak Leisure ₹4,000, Plains ₹3,200
    roomNightRate = isPilgrim ? 3800 : isHill ? 4200 : isLeisure ? 4000 : 3200;
  } else if (hotelTier === '4 Star') {
    // 4-Star: Pilgrimage MAP ₹6,800, Hill MAP ₹7,800, Winter Peak Leisure ₹7,500, Plains ₹5,800
    roomNightRate = isPilgrim ? 6800 : isHill ? 7800 : isLeisure ? 7500 : 5800;
  } else {
    // 5-Star (Commercial 5★): Pilgrimage ₹13,000, Hill ₹15,000, Winter Peak Leisure ₹14,500, Plains ₹11,500
    roomNightRate = isPilgrim ? 13000 : isHill ? 15000 : isLeisure ? 14500 : 11500;
  }

  // Special experience supplement per booking (Houseboats, Desert Safari Tents, Ferries, Safaris)
  let specialStay = 0;
  if (sector.destinationSlug === 'kashmir') {
    specialStay = hotelTier === '3 Star' ? 5000 : hotelTier === '4 Star' ? 7500 : 10000; // Dal Lake Houseboat
  } else if (sector.destinationSlug === 'kerala') {
    specialStay = hotelTier === '3 Star' ? 8500 : hotelTier === '4 Star' ? 12000 : 16000; // Alleppey Private Houseboat
  } else if ((sector.destinationSlug === 'rajasthan' || sector.destinationSlug === 'jaisalmer') && pkgIndex % 2 === 0) {
    specialStay = hotelTier === '3 Star' ? 3500 : hotelTier === '4 Star' ? 5000 : 7500; // Jaisalmer Desert Camp
  } else if (sector.destinationSlug === 'andaman') {
    specialStay = 5200 * 2; // Makruzz / Nautika Cruise Ferry for 2 pax (PB -> Havelock -> Neil -> PB)
  } else if (['corbett', 'ranthambore', 'sasan-gir', 'kaziranga'].includes(sector.destinationSlug)) {
    specialStay = 7500; // Dedicated Jungle Jeep Safari (Permit + Gypsy + Guide)
  }

  const totalHotelCost = (nights * roomNightRate) + specialStay;

  // 2. Outstation Cab Rate by Vehicle and Tier (Multi-day 250 km running)
  let cabRatePerDay = 3000;
  if (hotelTier === '3 Star') {
    cabRatePerDay = isHill ? (['ladakh', 'spiti'].includes(sector.destinationSlug) ? 7500 : 3800) : 3000; // Sedan
  } else if (hotelTier === '4 Star') {
    cabRatePerDay = isHill ? (['ladakh', 'spiti'].includes(sector.destinationSlug) ? 8500 : 5000) : 4200; // Ertiga / Innova Std
  } else {
    cabRatePerDay = isHill ? (['ladakh', 'spiti'].includes(sector.destinationSlug) ? 9500 : 6500) : 5800; // Innova Crysta
  }

  if (sector.isInternational) {
    cabRatePerDay = 3500; // International airport & private transfers
  }

  // Sightseeing Entry, Tolls & Buffer
  const bufferCost = (hotelTier === '3 Star' ? 1200 : hotelTier === '4 Star' ? 1800 : 2500) * 2;
  const totalCabCost = days * cabRatePerDay;

  // Net Cost for 2 Adults (Twin Sharing 1 Room + 1 Dedicated Outstation Cab + Buffer)
  const netCostForTwo = totalHotelCost + totalCabCost + bufferCost;

  // 22% Guaranteed Agency Profit Margin
  const sellingPriceForTwo = netCostForTwo * 1.22;

  // Base per-person starting rate (twin sharing)
  const startingPrice = Math.round((sellingPriceForTwo / 2) / 100) * 100;

  // MRP Strike-through price (25% higher teaser discount)
  const discountPrice = Math.round((startingPrice * 1.25) / 100) * 100;

  return { startingPrice, discountPrice };
}

const DESTINATION_ITINERARY_FLOWS: Record<string, { title: string; desc: string; acts: string[] }[]> = {
  ayodhya: [
    { title: "Arrival in Holy Ayodhya Dham, Saryu Ghat & Ram Ki Paidi Maha Aarti", desc: "Arrive at Ayodhya Dham Airport (AYJ) / Railway Station. Meet our tour chauffeur for a private AC transfer to your hotel. Complete check-in and relax. In the evening, visit Ram Ki Paidi and witness the divine Saryu Maha Aarti with hundreds of floating diyas and Vedic chanting.", acts: ["Airport / Station Meet & Greet", "Hotel Check-in", "Ram Ki Paidi Leisure Walk", "Saryu River Evening Aarti"] },
    { title: "Shri Ram Janmabhoomi VIP Darshan, Hanumangarhi & Kanak Bhawan", desc: "Early morning VIP Darshan of Ram Lalla at the grand Shri Ram Janmabhoomi Mandir. Climb the 76 steps to ancient Hanumangarhi temple for blessings, followed by visits to Kanak Bhawan, Dashrath Mahal, and Sita Ki Rasoi.", acts: ["Ram Janmabhoomi VIP Darshan", "Hanumangarhi Temple Pooja", "Kanak Bhawan Darshan", "Dashrath Mahal Tour"] },
    { title: "Guptar Ghat, Surya Kund & Sacred Panchkosi Parikrama Trail", desc: "Visit sacred Guptar Ghat on River Saryu where Lord Rama entered Jal Samadhi. Explore newly restored Surya Kund with musical laser fountain and ancient temples, followed by Mani Parbat and Sugriva Qila.", acts: ["Guptar Ghat Boating & Darshan", "Surya Kund Heritage Complex", "Mani Parbat Sightseeing", "Sugriva Qila Visit"] },
    { title: "Chooda Mani & Sacred Sweet Shopping, Ayodhya Souvenirs & Airport Drop", desc: "Enjoy morning pooja and breakfast. Visit Ayodhya local bazaars for authentic Peda prasad, sacred brass murtis, and Ramayana souvenirs. Private transfer to Ayodhya Dham Airport or Railway Station for onward journey.", acts: ["Morning Temple Prayers", "Ayodhya Peda & Souvenir Shopping", "Airport / Station Departure Drop"] }
  ],
  varanasi: [
    { title: "Arrival in Kashi, Hotel Check-in & Dashashwamedh Ghat Ganga Aarti", desc: "Arrive at Lal Bahadur Shastri Airport (VNS) / Varanasi Cantt Station. Private transfer to your hotel. In the evening, witness the world-famous Ganga Aarti at Dashashwamedh Ghat from a reserved private boat on holy River Ganges.", acts: ["Varanasi Airport / Station Pickup", "Hotel Check-in Formalities", "Dashashwamedh Ghat Private Boat Ride", "Evening Ganga Aarti Darshan"] },
    { title: "Kashi Vishwanath Jyotirlinga VIP Darshan, Annapurna & Manikarnika Ghat", desc: "Early morning VIP Darshan at the grand Shri Kashi Vishwanath Golden Temple Corridor. Visit Maa Annapurna Mandir, Vishalakshi Temple, Manikarnika Ghat, and the guardian deity Kaal Bhairav temple.", acts: ["Kashi Vishwanath Jyotirlinga VIP Darshan", "Maa Annapurna & Kaal Bhairav Darshan", "Ghat Heritage Walk", "Manikarnika Ghat View"] },
    { title: "Subah-e-Banaras Dawn Boat Ride, Sarnath Buddhist Stupa & Silk Weaving", desc: "Experience the sublime Subah-e-Banaras sunrise boat tour across 84 ghats. Afternoon excursion to Sarnath where Lord Buddha gave his first sermon. Explore Dhamek Stupa, Ashoka Pillar, and the Archaeological Museum.", acts: ["Dawn Ganges Sunrise Boat Cruise", "Sarnath Buddhist Monasteries & Museum", "Banarasi Silk Weaving Center Tour"] },
    { title: "Banaras Local Food Trail, Sacred Souvenir Shopping & Airport Drop", desc: "Savor famous Banarasi kachori-jalebi breakfast. Complete check-out. Pick up authentic Banarasi silk sarees, brass lamps, and Kashi prasad before your private chauffeur transfers you to the airport or railway station.", acts: ["Kachori & Malaiyo Food Trail", "Banarasi Silk Saree Shopping", "Airport Departure Drop"] }
  ],
  "ayodhya-varanasi": [
    { title: "Arrival in Ayodhya Dham, Saryu Ghat & Ram Ki Paidi Maha Aarti", desc: "Arrive at Ayodhya Dham Airport / Station. Private AC transfer to hotel. In the evening, visit Ram Ki Paidi and experience the divine Saryu Maha Aarti with hundreds of floating earthen diyas and sacred Vedic chanting.", acts: ["Ayodhya Airport / Station Pickup", "Hotel Check-in", "Ram Ki Paidi Stroll", "Saryu River Maha Aarti"] },
    { title: "Ram Janmabhoomi VIP Darshan, Hanumangarhi & Drive to Varanasi", desc: "VIP Darshan of Ram Lalla at Shri Ram Janmabhoomi Mandir. Visit Hanumangarhi, Kanak Bhawan, and Dashrath Mahal. Afternoon scenic private AC highway drive to Varanasi. Evening Dashashwamedh Ghat Ganga Aarti from private boat.", acts: ["Ram Janmabhoomi VIP Darshan", "Hanumangarhi & Kanak Bhawan Visit", "Highway Drive to Varanasi", "Dashashwamedh Ghat Evening Aarti"] },
    { title: "Kashi Vishwanath Jyotirlinga VIP Darshan, Kaal Bhairav & Sarnath Excursion", desc: "Morning VIP Darshan at Shri Kashi Vishwanath Corridor and Annapurna Temple. Visit Kaal Bhairav and Manikarnika Ghat. Afternoon excursion to historical Sarnath (Dhamek Stupa & Archaeological Museum) followed by silk weaving tour.", acts: ["Kashi Vishwanath Corridor VIP Darshan", "Maa Annapurna & Kaal Bhairav Darshan", "Sarnath Buddhist Stupa & Museum Tour", "Banarasi Silk Heritage Trail"] },
    { title: "Subah-e-Banaras Boat Ride, Drive to Prayagraj & Triveni Sangam Holy Dip", desc: "Sunrise boat cruise on River Ganges. Drive to sacred Prayagraj. Private boat ride to holy Triveni Sangam (confluence of Ganga, Yamuna & Saraswati) for sacred dip. Visit Bade Hanuman Ji Mandir, Anand Bhawan, and Alopi Devi Shaktipeeth.", acts: ["Subah-e-Banaras Sunrise Boat Ride", "Scenic Highway Drive to Prayagraj", "Triveni Sangam Holy Dip & Boat Ride", "Bade Hanuman Ji Temple Darshan", "Anand Bhawan Visit"] },
    { title: "Prayagraj Souvenir Shopping & Departure Airport Transfer", desc: "Enjoy breakfast. Visit local markets for authentic Sangam Gangajal and religious keepsakes. Complete check-out. Board your private AC transfer to Prayagraj (IXD) or Varanasi (VNS) Airport / Railway Station for onward journey.", acts: ["Hotel Breakfast & Check-out", "Sacred Brass & Souvenir Shopping", "Airport / Railway Station Departure Drop"] }
  ],
  "char-dham": [
    { title: "Arrival in Haridwar / Rishikesh & Holy Ganga Aarti at Har Ki Pauri", desc: "Arrive in Haridwar / Dehradun. Meet our mountain chauffeur for a transfer to your hotel. In the evening, witness the breathtaking Ganga Aarti at world-renowned Har Ki Pauri with glowing diyas and temple bells.", acts: ["Haridwar Meet & Greet", "Hotel Check-in", "Har Ki Pauri Evening Ganga Aarti"] },
    { title: "Haridwar to Barkot via Mussoorie & Kempty Falls", desc: "Scenic mountain drive to Barkot (220 km) along the Yamuna valley via hill station Mussoorie. Stop at Kempty Falls. Enjoy panoramic views of the Bandarpoonch peak and acclimatize for the Yamunotri trek.", acts: ["Mussoorie & Kempty Falls Sightseeing", "Yamuna Valley Drive", "Bandarpoonch Peak Views", "Barkot Camp Check-in"] },
    { title: "Barkot to Yamunotri Dham Trek, Holy Surya Kund Dip & Temple Darshan", desc: "Drive to Janki Chatti. Trek 6 km (by foot, pony, or doli) to sacred Yamunotri Dham. Cook rice in boiling water of Surya Kund, offer pooja at Divya Shila, and have divine darshan of Goddess Yamuna.", acts: ["6 km Yamunotri Mountain Trek", "Surya Kund Holy Hot Spring Dip", "Yamunotri Temple Darshan", "Return to Barkot Resort"] },
    { title: "Barkot to Uttarkashi & Kashi Vishwanath Temple Darshan", desc: "Picturesque drive to Uttarkashi (100 km) on the banks of Bhagirathi River. Check in to your hotel. In the evening, visit the ancient Kashi Vishwanath Temple and the massive 6-meter Shakti Temple bronze trident.", acts: ["Scenic Bhagirathi River Highway Drive", "Kashi Vishwanath Temple Darshan", "Shakti Temple Bronze Trident Visit", "Uttarkashi Stay"] },
    { title: "Uttarkashi to Gangotri Dham Temple Darshan via Harsil Valley", desc: "Drive through the breathtaking apple-orchard valley of Harsil to Gangotri Dham (3,048m). Take a holy dip in the icy Bhagirathi river, attend the sacred Gangotri temple darshan, and visit Bhagirath Shila.", acts: ["Harsil Valley Apple Orchard Stop", "Gangotri Temple VIP Darshan", "Bhagirath Shila Pooja", "Scenic Return to Uttarkashi"] },
    { title: "Uttarkashi to Guptkashi / Phata via Tilwara & Mandakini River", desc: "Scenic trans-Garhwal drive to Guptkashi (220 km) along the turquoise Mandakini River. Pass through Tilwara and Agastyamuni. Check in at your luxury Himalayan Swiss camps in Guptkashi / Phata.", acts: ["Mandakini River Highway Drive", "Tilwara Scenic Viewpoints", "Guptkashi Vishwanath Temple Visit", "Acclimatization for Kedarnath"] },
    { title: "Guptkashi to Kedarnath Dham by Trek or Helicopter & Evening Aarti", desc: "Transfer to Sonprayag / Helipad. Trek 16 km along the Mandakini valley or take a thrilling helicopter ride to sacred Kedarnath Dham (3,583m). Check in at GMVN / temple guesthouse. Witness evening Aarti amidst snow peaks.", acts: ["Kedarnath Trek / Helicopter Flight", "Mandakini Valley Mountain Trail", "Shri Kedarnath Jyotirlinga VIP Darshan", "Evening Temple Aarti amidst Snow Peaks"] },
    { title: "Kedarnath Morning Temple Pooja & Return to Guptkashi / Joshimath", desc: "Early morning Abhishek pooja at Shri Kedarnath Jyotirlinga. Marvel at panoramic views of the towering Kedar Dome peak. Descend to Sonprayag / Helipad and drive to Pipalkoti / Joshimath for an overnight stay.", acts: ["Kedarnath Morning Abhishek Darshan", "Kedar Dome Scenic Photography", "Descent to Sonprayag / Helipad", "Drive to Pipalkoti / Joshimath"] },
    { title: "Joshimath to Badrinath Dham, Tapt Kund & Mana First Indian Village", desc: "Scenic mountain drive to sacred Badrinath Dham (3,133m). Take a holy bath in the natural sulphur Tapt Kund hot spring before VIP darshan of Lord Badri Vishal. Visit Mana (first Indian village), Bhim Pul, and Vyas Gufa.", acts: ["Tapt Kund Natural Hot Spring Dip", "Shri Badrinath Temple VIP Darshan", "Mana First Village of India Walk", "Bhim Pul & Vyas Gufa Exploration"] },
    { title: "Badrinath to Rishikesh / Dehradun Departure via Devprayag Sangam", desc: "Drive back along the Alaknanda highway. Stop at Devprayag to witness the spectacular sacred confluence of Alaknanda and Bhagirathi rivers forming holy River Ganga. Transfer to Dehradun Airport or Haridwar Station.", acts: ["Devprayag Alaknanda-Bhagirathi Sangam View", "Rishikesh Ram Jhula Walk", "Dehradun / Haridwar Departure Drop"] }
  ],
  thailand: [
    { title: "Arrival in Bangkok & Scenic Private Chauffeur Transfer to Pattaya", desc: "Arrive at Suvarnabhumi Airport (BKK). Meet our friendly local tour representative for a comfortable private highway transfer to coastal Pattaya. Check in at your beach resort and spend the evening enjoying Pattaya beach promenade.", acts: ["Bangkok Airport Meet & Greet", "Private Highway Transfer to Pattaya", "Resort Check-in & Welcome Drink", "Pattaya Beach Promenade Leisure Walk"] },
    { title: "Coral Island (Koh Larn) Speedboat Adventure with Watersports & Lunch", desc: "Board a shared speedboat to Coral Island (Koh Larn). Enjoy turquoise waters, white sand beaches, and thrilling watersports like parasailing, sea walking, and banana boat rides. Savor a delicious Indian buffet lunch on the island.", acts: ["Speedboat Cruise to Coral Island", "Parasailing & Watersports Experience", "Beachside Indian Buffet Lunch", "Evening Leisure at Pattaya Beach Road"] },
    { title: "Nong Nooch Tropical Botanical Gardens & Alcazar Cabaret Show", desc: "Visit world-renowned Nong Nooch Tropical Botanical Garden spanning 500 acres. Marvel at French gardens and cultural elephant shows. In the evening, enjoy VIP seats at the legendary Alcazar Cabaret theatrical show.", acts: ["Nong Nooch Botanical Gardens Tour", "Cultural Elephant Talent Show", "Alcazar Cabaret VIP Show", "Night Market Exploration"] },
    { title: "Pattaya to Bangkok, Gems Gallery & Chao Phraya Dinner Cruise", desc: "Drive back to Bangkok with a stop at world-famous Gems Gallery. Check in at your city hotel. In the evening, board the luxurious Chao Phraya Princess river cruise for a live-music international buffet dinner.", acts: ["Scenic Highway Transfer to Bangkok", "Gems Gallery World Tour", "Chao Phraya Princess Luxury Cruise", "Live Music International Buffet Dinner"] },
    { title: "Bangkok Golden Buddha, Wat Pho, Wat Arun & Gems Heritage Tour", desc: "Morning guided temple and city tour of Bangkok. Visit Wat Traimit (Golden Buddha of 5.5 tons of solid gold), Wat Pho (Reclining Buddha), and marvel at the majestic spires of Wat Arun along the Chao Phraya river.", acts: ["Wat Traimit Golden Buddha Temple", "Wat Pho Giant Reclining Buddha", "Wat Arun Temple Landmark Visit", "Bangkok City Scenic Highlights"] },
    { title: "Safari World & Marine Park Full Day Excursion with Buffet Lunch", desc: "Full-day excursion to Safari World and Marine Park. Drive through the open safari wilderness observing lions, zebras, and giraffes. Enjoy world-class dolphin, sea lion, and Hollywood cowboy stunt shows with buffet lunch.", acts: ["Open Safari Wilderness Drive", "Dolphin & Sea Lion Shows", "Hollywood Cowboy Stunt Show", "International Buffet Lunch"] },
    { title: "Pratunam Shopping, Souvenirs & Suvarnabhumi Airport Departure", desc: "Savor your final Thai buffet breakfast. Visit Platinum Fashion Mall or MBK Center for authentic Thai silk, dried fruits, and souvenir shopping. Private chauffeur transfer to Suvarnabhumi Airport (BKK) for flight home.", acts: ["Hotel Buffet Breakfast & Check-out", "Platinum & MBK Souvenir Shopping", "Private Airport Departure Drop"] }
  ],
  dubai: [
    { title: "Arrival at Dubai International Airport & Luxury Marina Dhow Cruise Dinner", desc: "Arrive at Dubai International Airport (DXB). Private luxury transfer to your hotel. In the evening, board a traditional Arabian wooden Dhow Cruise along Dubai Marina with open-air upper deck dining, Tanoura dance, and skyline views.", acts: ["Airport Meet & Greet", "Private Hotel Transfer", "Dubai Marina Dhow Cruise", "Tanoura Dance & 5-Star International Buffet"] },
    { title: "Half-Day Guided Dubai City Tour & Burj Khalifa 124th Floor Sunset View", desc: "Panoramic city tour covering Dubai Creek, Al Fahidi Historical Neighborhood, Jumeirah Mosque, and Burj Al Arab photo stop. In the evening, visit Dubai Mall and ascend Burj Khalifa 124th & 125th floors for breathtaking sunset views.", acts: ["Guided Dubai City Tour", "Jumeirah Beach & Burj Al Arab Photo Stop", "Dubai Mall & Aquarium View", "Burj Khalifa 124th Floor Observation Deck", "Dubai Fountain Musical Water Show"] },
    { title: "Luxury Red Dunes Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner", desc: "Afternoon thrilling 4x4 Land Cruiser desert safari across Lehbab red dunes. Experience dune bashing, sandboarding, and camel riding at sunset. Enjoy an authentic Bedouin desert camp with belly dance, fire show, and BBQ dinner.", acts: ["4x4 Lehbab Red Dunes Bashing", "Sandboarding & Camel Ride", "Henna Painting & Arabian Costumes", "Live Belly Dance & Fire Show", "Barbecue Dinner Buffet"] },
    { title: "Dubai Frame, Miracle Garden & Global Village Multicultural Carnival", desc: "Visit the iconic 150-meter Dubai Frame with glass skywalk. Explore Dubai Miracle Garden featuring 150 million blooming flowers in full bloom. Evening visit to Global Village exploring 90+ country cultural pavilions.", acts: ["Dubai Frame Skywalk Experience", "Miracle Garden Floral Sculptures", "Global Village Cultural Pavilions", "International Street Food Tasting"] },
    { title: "Abu Dhabi Full Day Tour: Sheikh Zayed Grand Mosque & Ferrari World", desc: "Full-day private excursion to UAE capital Abu Dhabi. Tour the breathtaking Sheikh Zayed Grand Mosque with pure white marble courtyards. Drive along Abu Dhabi Corniche and visit Ferrari World on Yas Island.", acts: ["Sheikh Zayed Grand Mosque Tour", "Abu Dhabi Corniche Drive", "Emirates Palace Photo Stop", "Ferrari World Theme Park Entry"] },
    { title: "Gold & Spice Souks Shopping, Dubai Mall Souvenirs & Airport Drop", desc: "Enjoy breakfast. Take an Abra boat ride across Dubai Creek to explore the Gold Souk and Spice Souk for saffron and perfumes. Private chauffeur transfer to Dubai International Airport (DXB) for your onward flight.", acts: ["Dubai Creek Abra Ride", "Gold Souk & Spice Souk Shopping", "Hotel Check-out Formalities", "Private Airport Departure Drop"] }
  ],
  bali: [
    { title: "Arrival at Denpasar International Airport & Kuta / Seminyak Beach Check-in", desc: "Arrive at Ngurah Rai International Airport (DPS) in Denpasar. Traditional Balinese flower garland welcome by your private chauffeur. Transfer to your beachfront resort. Spend the evening relaxing by the pool or exploring Seminyak.", acts: ["Denpasar Airport Meet & Greet", "Balinese Flower Garland Welcome", "Resort Check-in & Welcome Drink", "Seminyak Beach Sunset Walk"] },
    { title: "Tanjung Benoa Watersports & Uluwatu Cliff Temple Sunset with Kecak Dance", desc: "Morning watersports at Tanjung Benoa (Banana Boat, Parasailing & Jet Ski). In the evening, visit stunning Uluwatu Temple perched 70 meters high on sea cliffs. Witness dramatic sunset Kecak Fire Dance over the Indian Ocean.", acts: ["Tanjung Benoa Watersports", "Padang Padang Beach Visit", "Uluwatu Cliff Temple Tour", "Sunset Kecak & Fire Dance Show"] },
    { title: "Kintamani Batur Volcano, Tegalalang Rice Terraces & Bali Jungle Swing", desc: "Scenic drive through art villages of Celuk and Mas. Marvel at panoramic views of Mount Batur active volcano and Lake Batur in Kintamani. Visit Tegalalang Rice Terraces, ride the famous Bali Jungle Swing, and taste Luwak coffee.", acts: ["Mount Batur Volcano Viewpoint", "Tegalalang Rice Terraces Walk", "Aloha Bali Jungle Swing Experience", "Luwak Coffee Plantation Tour"] },
    { title: "Full-Day Nusa Penida West Island Tour: Kelingking T-Rex & Broken Beach", desc: "Board a fast boat to exotic Nusa Penida island. Visit iconic Kelingking Beach (T-Rex shaped cliff), Angel Billabong natural infinity pool, Broken Beach, and crystal-clear waters of Crystal Bay with private lunch.", acts: ["Fast Boat Ride to Nusa Penida", "Kelingking T-Rex Cliff View", "Angel Billabong Natural Pool", "Broken Beach & Crystal Bay Swim"] },
    { title: "Ubud Monkey Forest, Royal Palace & Traditional Balinese Spa Massage", desc: "Explore Ubud Sacred Monkey Forest Sanctuary inhabited by 1,000+ playful long-tailed macaques. Visit Ubud Royal Palace and artisan markets. Indulge in an authentic 60-minute Balinese Aromatherapy massage at a luxury spa.", acts: ["Sacred Monkey Forest Sanctuary", "Ubud Royal Palace & Art Market", "60-Min Balinese Aromatherapy Spa", "Café Organic Dining in Ubud"] },
    { title: "FINNS Beach Club VIP Experience, Canggu Sunset & Beachfront Dining", desc: "Spend a stylish day at world-famous FINNS Beach Club in Canggu or Potato Head Beach Club. Relax on oceanfront daybeds, swim in infinity pools, and enjoy DJ sunset sessions overlooking the surf breaks.", acts: ["FINNS Beach Club Entry", "Oceanfront Daybed Relaxation", "Canggu Surf Watching & Sunset", "Seafood Dinner in Jimbaran Bay"] },
    { title: "Krisna Oleh-Oleh Souvenirs, Rattan Handicrafts & Airport Departure Drop", desc: "Enjoy your final tropical breakfast. Visit Krisna Oleh-Oleh for authentic Balinese rattan bags, aromatherapy oils, and coffee gifts. Complete check-out before your private chauffeur transfers you to DPS Airport for flight home.", acts: ["Hotel Buffet Breakfast & Check-out", "Krisna Oleh-Oleh Souvenir Shopping", "Denpasar Airport Departure Drop"] }
  ],
  singapore: [
    { title: "Arrival at Changi Airport, Jewel Rain Vortex & Night Safari Tram Ride", desc: "Arrive at world-renowned Changi Airport (SIN). Marvel at the 40-meter indoor waterfall at Jewel Rain Vortex. Transfer to your hotel. In the evening, visit the world's first nocturnal wildlife park, Singapore Night Safari.", acts: ["Changi Airport Meet & Greet", "Jewel Changi Rain Vortex View", "Hotel Check-in Formalities", "Singapore Night Safari Tram Ride"] },
    { title: "Gardens by the Bay, Marina Bay Sands SkyPark & Merlion Park Tour", desc: "Explore Gardens by the Bay visiting the futuristic Flower Dome and Cloud Forest with indoor waterfall. In the evening, ascend to Marina Bay Sands SkyPark Observation Deck for 360-degree skyline views and visit Merlion Park.", acts: ["Gardens by the Bay Flower Dome", "Cloud Forest Indoor Waterfall", "Marina Bay Sands SkyPark Deck", "Merlion Park & Marina Bay Stroll"] },
    { title: "Sentosa Island Cable Car, Universal Studios Singapore & Wings of Time", desc: "Ride the scenic Singapore Cable Car into Sentosa Island. Spend an exhilarating day at Universal Studios Singapore experiencing thrilling rollercoasters like Battlestar Galactica. Evening Wings of Time multi-sensory laser show.", acts: ["Singapore Cable Car Scenic Ride", "Universal Studios Singapore All-Day Pass", "S.E.A. Aquarium Visit", "Wings of Time Laser & Firework Show"] },
    { title: "Singapore Flyer, Chinatown Heritage & Little India Cultural Walk", desc: "Ride the giant 165-meter Singapore Flyer observation wheel. Stroll through vibrant historic districts of Chinatown and Little India visiting Buddha Tooth Relic Temple and Sri Veeramakaliamman Temple.", acts: ["Singapore Flyer Giant Observation Wheel", "Buddha Tooth Relic Temple Visit", "Chinatown & Little India Heritage Walk", "Clarke Quay Riverfront Evening"] },
    { title: "Orchard Road Shopping, Kaya Toast Breakfast & Changi Airport Departure", desc: "Savor traditional Kaya Toast and local kopi breakfast. Visit luxury shopping malls along Orchard Road for electronics and fashion. Complete check-out. Private transfer to Changi Airport for flight home.", acts: ["Traditional Kaya Toast Breakfast", "Orchard Road Mall Shopping", "Private Changi Airport Transfer Drop"] }
  ],
  vietnam: [
    { title: "Arrival in Hanoi, French Quarter Cyclo Tour & Hoan Kiem Lake Sunset", desc: "Arrive at Noi Bai International Airport (HAN) in Hanoi. Private transfer to your hotel in the Old Quarter. Enjoy a traditional cyclo rickshaw tour through 36 ancient artisan guild streets and walk around picturesque Hoan Kiem Lake.", acts: ["Hanoi Airport Meet & Greet", "Old Quarter Hotel Check-in", "Traditional Cyclo Rickshaw Tour", "Hoan Kiem Lake & Ngoc Son Temple"] },
    { title: "Hanoi to Halong Bay Luxury Overnight Cruise & Sung Sot Cave", desc: "Scenic limousine drive through Red River Delta to UNESCO World Heritage Halong Bay. Board a luxury wooden junk cruise ship. Sail past limestone karst islands, kayak through emerald waters, and explore massive Sung Sot Cave.", acts: ["Halong Bay Luxury Cruise Boarding", "Limestone Karst Islands Sailing", "Sung Sot (Surprise) Cave Walking", "Sunset Cocktail Party on Sundeck"] },
    { title: "Halong Bay Sunrise Tai Chi, Flight to Da Nang & Hoi An Ancient Town", desc: "Early morning Tai Chi session on sundeck as sun rises over Halong Bay. Cruise back to harbor, transfer to Hanoi airport and fly to Da Nang. Transfer to UNESCO-listed Hoi An Ancient Town glowing with silk lanterns at night.", acts: ["Sunrise Tai Chi Session on Sundeck", "Flight to Da Nang Airport", "Hoi An Silk Lantern Night Walk", "Japanese Covered Bridge Visit"] },
    { title: "Ba Na Hills Cable Car, Golden Giant Hand Bridge & Fantasy Park", desc: "Take the world's longest single-rope cable car up to Ba Na Hills (1,487m). Walk across the world-famous Golden Bridge held by two giant stone hands. Explore French Village architecture and indoor Fantasy Park.", acts: ["World Record Ba Na Hills Cable Car", "Golden Giant Hand Bridge Walk", "French Village Architecture", "Linh Ung Pagoda Darshan"] },
    { title: "Da Nang to Ho Chi Minh City (Saigon) & Cu Chi Tunnels Historical Tour", desc: "Fly to vibrant Ho Chi Minh City (Saigon). Private excursion to historical Cu Chi Tunnels. Crawl through underground secret tunnel networks used during the Vietnam War, followed by War Remnants Museum and Notre Dame Cathedral.", acts: ["Flight to Ho Chi Minh City", "Cu Chi Tunnels Underground Exploration", "War Remnants Museum Tour", "Notre Dame Cathedral Photo Stop"] },
    { title: "Mekong Delta River Cruise, Ben Tre Coconut Candy & Departure Drop", desc: "Day excursion to fertile Mekong Delta. Cruise on traditional sampan boats through palm-shaded canals. Visit local coconut candy workshops and taste tropical fruits. Return to Ho Chi Minh City for airport departure drop.", acts: ["Mekong Delta Sampan Boat Cruise", "Coconut Candy Workshop Visit", "Ben Thanh Market Shopping", "Tan Son Nhat Airport Departure Drop"] }
  ],
  baku: [
    { title: "Arrival in Baku, Hotel Check-in & Flame Towers Sunset Panorama", desc: "Arrive at Heydar Aliyev International Airport (GYD) in Baku. Private transfer to your hotel. In the evening, visit Highland Park (Dagustu Park) for breathtaking panoramic sunset views of Baku Bay and illuminated Flame Towers.", acts: ["Baku Airport Meet & Greet", "Hotel Check-in Formalities", "Highland Park Sunset Viewpoint", "Flame Towers Illumination Photo Stop"] },
    { title: "Old City (Icherisheher) Walking Tour, Maiden Tower & Shirvanshahs Palace", desc: "Guided walking tour through UNESCO-listed Old City (Icherisheher). Explore 12th-century Maiden Tower, magnificent Palace of the Shirvanshahs, ancient Caravanserais, and the world's only Museum of Miniature Books.", acts: ["Icherisheher Old City Walk", "Maiden Tower Exploration", "Palace of the Shirvanshahs", "Museum of Miniature Books", "Nizami Street Evening Stroll"] },
    { title: "Absheron Peninsula Fire Tour: Ateshgah Temple & Yanardag Burning Mountain", desc: "Excursion to the legendary Absheron Peninsula. Visit Ateshgah Fire Temple, a sacred place of worship for ancient Zoroastrians and Hindu pilgrims. Marvel at Yanardag (Burning Mountain) where natural gas flames burn continuously.", acts: ["Ateshgah Zoroastrian Fire Temple", "Yanardag Burning Mountain Phenomenon", "Heydar Aliyev Center Architecture Photo", "Baku Boulevard Caspian Promenade"] },
    { title: "Full-Day Alpine Gabala Mountain Resort & Tufandag Cable Car", desc: "Scenic mountain drive to alpine resort town Gabala (220 km) in the Greater Caucasus. Ride Tufandag Mountain Cable Car up to snow-capped peaks. Visit serene Nohur Lake and scenic 7 Gozal (Seven Beauties) Waterfall.", acts: ["Caucasus Mountain Highway Drive", "Tufandag Ropeway Cable Car Ride", "Nohur Lake Serene Walk", "Seven Beauties Waterfall Stop"] },
    { title: "Gobustan Mud Volcanoes, 3D Interactive Museum & Rock Art Petroglyphs", desc: "Explore Gobustan National Park featuring 6,000+ ancient rock petroglyphs dating back 40,000 years. Visit interactive 3D museum and ride Soviet Lada taxis to bubbling mud volcanoes erupting natural mineral mud.", acts: ["Gobustan UNESCO Rock Petroglyphs", "Interactive Gobustan Museum", "Bubbling Mud Volcanoes Safari", "Bibi-Heybat Mosque Visit"] },
    { title: "Baku Bazaar Caviar & Silk Shopping, Deniz Mall & Airport Drop", desc: "Enjoy breakfast. Visit Yashil Bazaar (Green Market) for authentic Caspian caviar, Azerbaijani dried fruits, nuts, and handwoven kelaghayi silk scarves. Private transfer to Heydar Aliyev Airport for departure flight.", acts: ["Yashil Bazaar Local Food Shopping", "Deniz Mall Caspian Seafront Visit", "Airport Departure Chauffeur Drop"] }
  ],
  europe: [
    { title: "Arrival in Paris, Hotel Check-in & Seine River Illuminated Sunset Cruise", desc: "Arrive at Paris Charles de Gaulle Airport (CDG). Private transfer to your hotel. In the evening, embark on a glass-canopy Bateaux Mouches cruise along the River Seine admiring illuminated monuments including Notre Dame.", acts: ["Paris Airport Meet & Greet", "Hotel Check-in", "Bateaux Mouches Seine River Cruise", "Illuminated Eiffel Tower Viewing"] },
    { title: "Paris Guided City Highlights, Louvre Museum & Eiffel Tower Summit", desc: "Guided city tour covering Arc de Triomphe, Champs-Élysées, Concorde, and Opera Garnier. Explore world-famous Louvre Museum to see the Mona Lisa. Ascend to the top deck of Eiffel Tower for 360-degree views of Paris.", acts: ["Paris Grand Monuments City Tour", "Louvre Museum Mona Lisa Highlights", "Eiffel Tower Summit Observation Deck", "Montmartre & Sacré-Cœur Walk"] },
    { title: "Paris to Central Switzerland via Scenic TGV High-Speed Train", desc: "Board high-speed TGV train crossing French countryside into Switzerland. Arrive in lakeside Lucerne or Interlaken. Stroll across the 14th-century wooden Chapel Bridge and admire the dying Lion Monument.", acts: ["High-Speed TGV Train to Switzerland", "Swiss Hotel Check-in", "Lucerne Chapel Bridge & Water Tower", "Lake Lucerne Promenade Walk"] },
    { title: "Mount Titlis Rotair Cable Car, Ice Flyer & Cliff Walk Suspension Bridge", desc: "Ascend Mount Titlis (3,020m) on the world's first revolving Titlis Rotair cable car. Walk through the natural Glacier Cave, ride the thrilling Ice Flyer chairlift over crevasses, and cross Europe's highest suspension bridge.", acts: ["Titlis Rotair Revolving Cable Car", "Glacier Cave Ice Carvings", "Titlis Cliff Walk Suspension Bridge", "Ice Flyer Snow Sledging Experience"] },
    { title: "Jungfraujoch Top of Europe High-Alpine Train Expedition", desc: "Full-day expedition to Jungfraujoch (3,454m) aboard the modern Eiger Express tricable gondola and historic cogwheel railway. Marvel at Aletsch Glacier (longest in Europe), visit Ice Palace sculptures, and Alpine Sensation.", acts: ["Eiger Express Tricable Gondola", "Cogwheel Mountain Railway Ride", "Jungfraujoch Sphinx Observation Deck", "Aletsch Glacier Ice Palace Walk"] },
    { title: "Black Forest Germany, Cuckoo Clocks, Rhine Falls & Swiss Departure", desc: "Cross into Germany's Black Forest. Witness traditional cuckoo clock craftsmanship and taste authentic Black Forest cherry cake. Marvel at Rhine Falls (largest waterfall in Europe) before transfer to Zurich Airport (ZRH).", acts: ["Black Forest Cuckoo Clock Workshop", "Rhine Falls Roaring Waterfalls Boat", "Zurich Airport Departure Transfer Drop"] }
  ],
  maldives: [
    { title: "Arrival at Velana International Airport & Speedboat / Seaplane Transfer", desc: "Arrive at Velana International Airport (MLE) in Male. Meet your luxury resort concierge for a scenic speedboat or seaplane transfer across turquoise lagoons. Check in to your luxury beachfront or overwater villa.", acts: ["Male Airport Luxury Meet & Greet", "Scenic Lagoon Speedboat / Seaplane Ride", "Overwater Villa Check-in", "Sunset Welcome Cocktail on Private Deck"] },
    { title: "House Reef Snorkeling with Sea Turtles, Manta Rays & Coral Garden", desc: "Morning guided snorkeling expedition along the vibrant resort house reef. Encounter colorful reef fish, gentle sea turtles, and baby blacktip reef sharks. Afternoon relax with stand-up paddleboarding or ocean kayaking.", acts: ["Guided Coral House Reef Snorkeling", "Sea Turtle & Marine Life Spotting", "Paddleboarding & Ocean Kayaking", "Beachfront Sunset Relaxation"] },
    { title: "Sunset Dolphin Watching Cruise & Romantic 5-Star Beachfront Dinner", desc: "Spend a leisurely morning on powder-soft white sand beaches. In the late afternoon, board a traditional wooden Dhoni boat for a sunset cruise watching pods of spinner dolphins jumping. Candlelight dinner under the stars.", acts: ["Dhoni Boat Dolphin Watching Cruise", "Champagne Sunset Watching", "5-Star Candlelight Beachfront Dinner", "Stargazing over the Indian Ocean"] },
    { title: "Rejuvenating Overwater Spa Treatment & Water Sports Adventures", desc: "Indulge in a 60-minute relaxing aromatherapy massage in an overwater glass-floor spa pavilion. Try thrilling motorized water sports including jet ski safari, parasailing, or Seabob underwater scooter rides.", acts: ["Overwater Spa Glass-Floor Massage", "Jet Ski Safari Lagoon Tour", "Parasailing over Turquoise Atolls", "Private Sunken Deck Relaxation"] },
    { title: "Floating Champagne Breakfast, Island Souvenirs & Speedboat Departure", desc: "Enjoy a world-famous floating breakfast in your private plunge pool. Take final memorable photos across white sandbanks. Complete check-out before your speedboat / seaplane transfer back to Male Airport for flight home.", acts: ["Floating Pool Champagne Breakfast", "Sandbank Photography Walk", "Speedboat Transfer to Male Airport", "International Flight Departure Drop"] }
  ],
  sikkim: [
    { title: "Arrival at Bagdogra Airport / NJP Station & Scenic Drive to Gangtok", desc: "Arrive at Bagdogra Airport (IXB) or New Jalpaiguri (NJP). Meet our mountain chauffeur for a picturesque drive (125 km) along the roaring Teesta River to Gangtok (1,650m). Check in to your hotel and explore MG Marg promenade.", acts: ["Bagdogra / NJP Meet & Greet", "Scenic Teesta River Highway Drive", "Gangtok Hotel Check-in", "MG Marg Pedestrian Street Walk"] },
    { title: "Sacred Tsomgo Lake (12,400 ft) & Baba Harbhajan Singh Mandir Tour", desc: "High-altitude excursion to sacred oval-shaped Tsomgo (Changu) Lake surrounded by snow-covered peaks. Enjoy colorfully decorated Yak rides. Visit Baba Harbhajan Singh memorial temple and optional Nathula Pass (Indo-China border).", acts: ["Tsomgo Glacial Lake Visit", "Yak Ride along Lake Shores", "Baba Harbhajan Singh Shrine Darshan", "Scenic Kyongnosla Waterfall Stop"] },
    { title: "Gangtok Local Monasteries, Cable Car Ropeway & Ban Jhakri Falls", desc: "Full-day sightseeing covering Rumtek Monastery, Do Drul Chorten Stupa, Namgyal Institute of Tibetology, Gangtok Ropeway Cable Car for valley views, Ban Jhakri Waterfalls, and Directorate of Handicrafts.", acts: ["Rumtek Monastery Buddhist Murals", "Do Drul Chorten & Tibetology Tour", "Gangtok Ropeway Cable Car Ride", "Ban Jhakri Waterfall Garden"] },
    { title: "Gangtok to Pelling via Ravangla Buddha Park (130 ft Statue)", desc: "Scenic drive to Pelling (130 km) via Ravangla. Visit the magnificent Tathagata Tsal (Buddha Park) featuring a 130-foot consecrated statue of Lord Buddha against Mount Kanchenjunga backdrop. Check in at Pelling resort.", acts: ["Ravangla 130-ft Buddha Park Visit", "Panoramic Kanchenjunga Views", "Pelling Mountain Resort Check-in", "Evening Peaceful Ridge Walk"] },
    { title: "Pelling Skywalk, Chenrezig Statue, Khecheopalri Sacred Lake & Darjeeling", desc: "Walk across India's first glass skywalk facing the giant 137-foot Chenrezig statue. Visit sacred wish-fulfilling Khecheopalri Lake and roaring Rimbi Waterfall. Continue scenic tea-garden drive to colonial Darjeeling.", acts: ["Pelling Glass Skywalk Experience", "Chenrezig Giant Statue View", "Khecheopalri Holy Lake Visit", "Scenic Drive to Darjeeling"] },
    { title: "Tiger Hill Kanchenjunga Sunrise, Batasia Loop & Bagdogra Departure", desc: "Early 4:00 AM excursion to Tiger Hill (2,590m) to witness golden sunrise over Kanchenjunga and Mount Everest. Visit Ghoom Monastery and Batasia Loop. After breakfast, transfer to Bagdogra Airport (IXB) for departure flight.", acts: ["Tiger Hill Golden Sunrise Viewing", "Batasia Loop War Memorial", "Ghoom Monastery Giant Maitreya Buddha", "Bagdogra Airport Departure Drop"] }
  ],
  gujarat: [
    { title: "Arrival in Ahmedabad, Sabarmati Ashram & Akshardham Laser Show", desc: "Arrive at Ahmedabad Airport / Station. Visit Mahatma Gandhi's historic Sabarmati Ashram on the riverfront. Explore Adalaj Stepwell (intricate 5-story stepwell) and witness the grand Sat-Chit-Anand water laser show at Gandhinagar Akshardham.", acts: ["Ahmedabad Airport / Station Pickup", "Sabarmati Gandhi Ashram Visit", "Adalaj Stepwell Intricate Architecture", "Gandhinagar Akshardham Water Show"] },
    { title: "Ahmedabad to Kevadia: World's Tallest Statue of Unity (182m)", desc: "Drive to Kevadia (200 km). Marvel at the 182-meter Statue of Unity dedicated to Sardar Vallabhbhai Patel. Visit the 153-meter Viewing Gallery inside the statue chest, Valley of Flowers, Sardar Patel Museum, and laser sound show.", acts: ["Statue of Unity High-Speed Elevator", "Viewing Gallery Panoramic Narmada View", "Valley of Flowers Walking Tour", "Statue of Unity Evening Laser Light Show"] },
    { title: "Kevadia to Sasan Gir Lion National Park & Wilderness Safari", desc: "Scenic drive to Sasan Gir National Park, the last natural sanctuary of the Asiatic Lion. Check in to your jungle lodge. Embark on an exciting open-jeep jungle safari through dry deciduous forests tracking lions, leopards, and deer.", acts: ["Scenic Drive to Sasan Gir", "Jungle Resort Check-in", "Open-Jeep Asiatic Lion Safari", "Tribal Siddi Folk Dance Experience"] },
    { title: "Gir to Somnath Jyotirlinga Temple & Evening Sound & Light Show", desc: "Morning drive to coastal sacred city Somnath. Visit the first of the twelve sacred Shiva Jyotirlingas, Shri Somnath Temple on the Arabian Sea shores. Witness the grand evening Aarti and the captivating Sound & Light Show.", acts: ["Shri Somnath Jyotirlinga VIP Darshan", "Triveni Sangam Somnath Holy Dip", "Bhalka Tirth Krishna Shrine", "Evening Somnath Sound & Light Show"] },
    { title: "Somnath to Dwarka: Shri Dwarkadhish Mandir & Gomti River Ghat", desc: "Coastal drive to holy Dwarka (230 km), the ancient golden kingdom of Lord Krishna. Check in to your hotel. Attend divine evening Sandhya Aarti at the 2,500-year-old Shri Dwarkadhish Jagat Mandir and walk along Gomti Ghat.", acts: ["Scenic Saurashtra Coastal Drive", "Shri Dwarkadhish Jagat Mandir Darshan", "Gomti River Holy Ghat Walk", "Sudama Setu Suspension Bridge"] },
    { title: "Bet Dwarka Island, Nageshwar Jyotirlinga & Jamnagar / Rajkot Departure", desc: "Take a scenic boat ride to Bet Dwarka island. Visit Nageshwar Jyotirlinga (giant Shiva statue), Rukmini Devi Temple, and Gopi Talav. Private chauffeur transfer to Jamnagar or Rajkot Airport / Station for your onward journey.", acts: ["Bet Dwarka Sacred Island Boat Ride", "Nageshwar Jyotirlinga Temple Darshan", "Rukmini Devi Temple Architecture", "Jamnagar / Rajkot Airport Departure Drop"] }
  ],
  tamilnadu: [
    { title: "Arrival in Chennai & Coastal Heritage Drive to Mahabalipuram", desc: "Arrive at Chennai Airport (MAA). Private transfer to UNESCO World Heritage site Mahabalipuram (Mamallapuram). Visit the 8th-century Shore Temple overlooking Bay of Bengal, Arjuna Penance rock relief, and Krishna Butter Ball.", acts: ["Chennai Airport Meet & Greet", "Shore Temple Oceanfront Architecture", "Arjuna Penance Giant Bas-Relief", "Krishna Butter Ball Photo Stop"] },
    { title: "Mahabalipuram to Pondicherry French Colony & Promenade Walk", desc: "Scenic East Coast Road (ECR) drive to French colonial town Pondicherry. Visit Sri Aurobindo Ashram and the utopian township of Auroville with golden Matrimandir dome. In the evening, stroll along the French Quarter Promenade.", acts: ["Scenic East Coast Road Drive", "Sri Aurobindo Ashram Visit", "Auroville Matrimandir Meditation Dome", "French White Town Heritage Walk"] },
    { title: "Pondicherry to Tanjore (Thanjavur) UNESCO Brihadeeswarar Temple", desc: "Drive to Thanjavur (Tanjore) in Cauvery delta. Visit the colossal 11th-century Brihadeeswarar Temple (Big Temple) built by Raja Raja Chola I. Marvel at the 80-tonne granite monolithic dome and the Thanjavur Royal Palace.", acts: ["Scenic Cauvery Delta Drive", "UNESCO Brihadeeswarar Big Temple Tour", "80-Tonne Monolithic Granite Vimana", "Thanjavur Royal Palace & Art Gallery"] },
    { title: "Thanjavur to Madurai: Meenakshi Amman Temple Golden Towers", desc: "Drive to ancient temple city Madurai. Check in to your hotel. In the evening, visit the world-renowned Madurai Meenakshi Amman Temple with 14 towering multi-tiered gopurams. Attend the sacred night ceremony putting deities to sleep.", acts: ["Madurai Hotel Check-in", "Meenakshi Amman Temple VIP Darshan", "1,000-Pillar Hall Sculptures", "Sacred Night Temple Bed Chamber Ceremony"] },
    { title: "Madurai to Rameswaram: Pamban Sea Bridge & Ramanathaswamy Temple", desc: "Drive across the iconic Pamban Sea Bridge over the turquoise ocean to sacred island Rameswaram. Take holy bath at Agni Theertham sea and 22 sacred temple wells inside Shri Ramanathaswamy Temple featuring the longest pillared corridor in the world.", acts: ["Pamban Sea Bridge Ocean Drive", "Agni Theertham Sacred Sea Bath", "22 Sacred Kund Well Baths inside Temple", "Ramanathaswamy Longest Pillared Corridor"] },
    { title: "Rameswaram to Kanyakumari Sunset at Southernmost Tip of India", desc: "Drive to Kanyakumari (300 km), the southernmost tip where Indian Ocean, Arabian Sea, and Bay of Bengal merge. Take a ferry to Vivekananda Rock Memorial and 133-ft Thiruvalluvar Statue. Witness unforgettable sunset over triple seas.", acts: ["Ferry to Vivekananda Rock Memorial", "Thiruvalluvar Giant 133-ft Stone Statue", "Triveni Sangam Three Seas Point", "Panoramic Indian Ocean Sunset Watching"] },
    { title: "Kanyakumari Sunrise, Suchindram Temple & Trivandrum Airport Drop", desc: "Witness breathtaking sunrise over the ocean. Visit Suchindram Thanumalayan Temple dedicated to Trinity (Brahma-Vishnu-Shiva) with musical pillars. Private chauffeur transfer to Trivandrum Airport (TRV) for your onward flight.", acts: ["Kanyakumari Ocean Sunrise Photography", "Suchindram Musical Pillars Temple", "Scenic Drive to Trivandrum", "Trivandrum Airport Departure Drop"] }
  ],
  andaman: [
    { title: "Arrival in Port Blair & Historic Cellular Jail Light and Sound Show", desc: "Arrive at Veer Savarkar International Airport (IXZ) in Port Blair. Meet our representative for a private transfer to your hotel. In the evening, visit the historic Cellular Jail (Kala Pani) and attend the moving Light & Sound Show narrating freedom struggle.", acts: ["Port Blair Airport Meet & Greet", "Hotel Check-in Formalities", "Cellular Jail National Memorial", "Cellular Jail Sound & Light Show"] },
    { title: "Port Blair to Havelock Island (Swaraj Dweep) by Luxury High-Speed Catamaran", desc: "Board Makruzz or Green Ocean luxury high-speed catamaran ferry to Havelock Island. Check in at your tropical beach resort. In the afternoon, visit world-famous Radhanagar Beach (Asia's Best Beach) for turquoise waves and sunset.", acts: ["Luxury High-Speed Catamaran Ferry", "Havelock Island Beach Resort Check-in", "Radhanagar Beach Soft Sand Walk", "Breathtaking Andaman Ocean Sunset"] },
    { title: "Elephant Beach Snorkeling, Water Sports & Coral Reef Exploration", desc: "Speedboat ride to Elephant Beach. Indulge in complimentary guided snorkeling session over colorful coral reefs. Enjoy thrilling watersports like banana boat rides, jet skiing, and sea walking in crystal-clear Andaman waters.", acts: ["Speedboat Ride to Elephant Beach", "Complimentary Guided Coral Snorkeling", "Jet Ski & Water Sports Adventures", "Shaded Rainforest Beach Walk"] },
    { title: "Havelock to Neil Island (Shaheed Dweep) Natural Coral Bridge & Sunset", desc: "Catamaran cruise to peaceful Neil Island. Check in to your resort. Explore Laxmanpur Beach sunset point, Bharatpur Beach for coral viewing, and the fascinating Natural Rock Formation (Howrah Bridge carved by ocean waves).", acts: ["Catamaran Cruise to Neil Island", "Natural Rock Formation Coral Bridge", "Bharatpur Beach Coral Viewing", "Laxmanpur Beach White Sand Sunset"] },
    { title: "Neil Island to Port Blair Return & Chidiya Tapu Sunset Viewpoint", desc: "Cruise back to Port Blair by catamaran. Visit Chidiya Tapu (Bird Island) surrounded by lush mangroves and primeval forests. Experience one of the most stunning sunset panoramas over the Bay of Bengal.", acts: ["Catamaran Cruise to Port Blair", "Hotel Check-in & Relaxation", "Chidiya Tapu Mangrove Drive", "Sunset Point Panoramic Photography"] },
    { title: "Breakfast, Souvenir Keepsakes & Airport Departure Drop", desc: "Enjoy your last island breakfast. Complete check-out. Pick up authentic shell handicrafts and pearls before your private chauffeur transfers you to Port Blair Airport for your onward flight.", acts: ["Hotel Check-out", "Pearl Souvenir Shopping", "Airport Departure Drop"] }
  ],
  ladakh: [
    { title: "Arrival in Leh Airport, Acclimatization & Shanti Stupa Sunset", desc: "Fly into Leh Airport (3,500m). Transfer to your hotel. Complete rest for acclimatization. In the evening, visit Shanti Stupa for panoramic 360-degree views of Leh town and Leh Palace.", acts: ["Airport Meet & Greet", "Complete Acclimatization Rest", "Shanti Stupa Sunset"] },
    { title: "Sham Valley Tour: Hall of Fame, Magnetic Hill & Indus-Zanskar Sangam", desc: "Scenic drive along Indus Highway. Visit Kargil war memorial Hall of Fame, gravity-defying Magnetic Hill, sacred Gurudwara Pathar Sahib, and the dramatic confluence of Indus and Zanskar rivers.", acts: ["Hall of Fame Museum", "Magnetic Hill Experience", "Sangam Confluence View"] },
    { title: "Leh to Nubra Valley via Khardung La Pass (Highest Motorroad)", desc: "Cross legendary Khardung La Pass (18,380 ft). Descend into the picturesque Nubra Valley. Check in at deluxe Swiss camps in Hunder. Ride double-humped Bactrian camels across white sand dunes.", acts: ["Khardung La Pass Crossing", "Hunder Sand Dunes Walk", "Bactrian Camel Safari"] },
    { title: "Nubra Valley Diskit Monastery to Pangong Tso Lake via Shyok River", desc: "Visit the 106-foot Maitreya Buddha statue at Diskit Monastery. Scenic drive along Shyok River to world-famous Pangong Tso Lake (14,270 ft). Marvel at shifting turquoise and azure shades at sunset.", acts: ["Diskit Monastery Statue", "Shyok River Route", "Pangong Tso Sunset View"] },
    { title: "Pangong Lake Sunrise & Return to Leh via Chang La Pass", desc: "Capture unforgettable sunrise reflections over Pangong Lake. Journey back to Leh crossing Chang La Pass (17,590 ft). Enroute visit Hemis and Thiksey monasteries.", acts: ["Pangong Sunrise Photography", "Chang La Pass Crossing", "Thiksey Monastery Darshan"] },
    { title: "Breakfast, Leh Main Bazaar Pashmina Shopping & Airport Drop", desc: "Enjoy breakfast in the trans-Himalayan morning sun. Visit Leh Main Bazaar for authentic Ladakhi apricots and certified Pashmina shawls before your early morning airport departure drop.", acts: ["Leh Bazaar Shopping", "Pashmina & Apricot Buying", "Airport Transfer Drop"] }
  ],
  kashmir: [
    { title: "Arrival in Srinagar & Dal Lake Shikara Ride", desc: "Arrive at Srinagar Airport. Meet our chauffeur and transfer to your luxury Dal Lake Houseboat. In the evening, enjoy a romantic Shikara ride through floating gardens and Char Chinar.", acts: ["Airport Pickup", "Dal Lake Shikara Ride", "Houseboat Check-in"] },
    { title: "Srinagar to Gulmarg Meadow of Flowers & Gondola Cable Car", desc: "Drive to Gulmarg (50 km). Ascend Apharwat Peak on the world-famous Gulmarg Gondola Cable Car (Phase 1 & 2). Marvel at snow-clad Himalayan peaks, explore the golf course and historic St. Mary Church.", acts: ["Gulmarg Gondola Ride", "Snow Activities at Apharwat Peak", "Golf Course Stroll"] },
    { title: "Srinagar to Pahalgam Valley of Shepherds via Saffron Fields", desc: "Scenic drive through Pampore saffron fields and Awantipora ruins to Pahalgam (2,130m). Check in at your riverside hotel along the Lidder River. Visit scenic Betaab Valley, Aru Valley, and Chandanwari.", acts: ["Pampore Saffron Fields Visit", "Betaab Valley & Aru Valley Tour", "Lidder River Relaxation"] },
    { title: "Pahalgam Pine Valley Horse Riding, Baisaran Mini Switzerland & Srinagar Return", desc: "Enjoy pony riding through pine forests to Baisaran meadow (Mini Switzerland). Return to Srinagar in the afternoon. Visit Mughal Gardens: Nishat Bagh and Shalimar Bagh.", acts: ["Baisaran Valley Horse Ride", "Nishat Bagh & Shalimar Bagh Tour", "Chashme Shahi Natural Spring"] },
    { title: "Srinagar to Sonamarg Meadow of Gold & Thajiwas Glacier", desc: "Day trip to Sonamarg (80 km) in the Sindh Valley. Ride ponies to the foot of Thajiwas Glacier where snow remains year-round. Enjoy trout fishing and panoramic mountain passes before returning to Srinagar.", acts: ["Sindh Valley Scenic Drive", "Thajiwas Glacier Pony Trek", "Snow Sledging Fun", "Return to Srinagar"] },
    { title: "Breakfast, Kashmiri Pashmina Shopping & Srinagar Airport Drop", desc: "Enjoy breakfast overlooking Dal Lake. Visit government arts emporium for certified Kashmiri saffron, walnut wood carvings, and Pashmina shawls before your airport departure transfer.", acts: ["Saffron & Pashmina Buying", "Walnut Woodcraft Shopping", "Srinagar Airport Drop"] }
  ],
  kerala: [
    { title: "Arrival in Cochin & Scenic Hill Highway Drive to Munnar", desc: "Arrive at Cochin Airport (COK). Scenic private transfer through cascading Valara and Cheeyappara waterfalls up to misty Munnar (1,600m). Check in at your tea estate resort and enjoy the cool mountain air.", acts: ["Airport Meet & Greet", "Cheeyappara Waterfall Photo Stop", "Tea Estate Resort Check-in", "Misty Mountain Stroll"] },
    { title: "Munnar Tea Gardens, Eravikulam National Park & Mattupetty Dam", desc: "Visit Eravikulam National Park home to the endangered Nilgiri Tahr mountain goat. Explore Tata Tea Museum, Mattupetty Dam for speed boating, Echo Point, and Kundala Lake amidst lush rolling tea carpet hills.", acts: ["Eravikulam National Park Safari", "Tata Tea Museum & Tea Tasting", "Mattupetty Dam Speedboating", "Echo Point Photography"] },
    { title: "Munnar to Thekkady Spice Plantations & Periyar Wildlife Sanctuary", desc: "Drive to Thekkady (100 km). Guided walking tour through aromatic cardamom, cinnamon, and pepper spice plantations. In the evening, watch authentic Kathakali classical dance and Kalaripayattu martial arts shows.", acts: ["Scenic Western Ghats Drive", "Guided Spice Plantation Tour", "Kathakali Classical Dance Show", "Kalaripayattu Martial Arts Performance"] },
    { title: "Thekkady to Alleppey Backwaters & Private Houseboat Cruise", desc: "Drive to Alleppey (Alappuzha), the Venice of the East. Board your traditional Kerala Kettuvallam luxury private houseboat. Cruise through narrow palm-fringed canals, paddy fields, and lakes with authentic Kerala meals.", acts: ["Houseboat Check-in & Welcome Drink", "Backwater Palm Canal Cruise", "Authentic Kerala Karimeen Meals", "Sunset over Vembanad Lake"] },
    { title: "Alleppey to Kovalam Beach via Trivandrum Padmanabhaswamy Temple", desc: "Cruise through morning village life. Check out and drive to crescent-shaped Kovalam Beach. Enroute visit the richest temple in the world, Sree Padmanabhaswamy Temple in Trivandrum. Enjoy sunset at Lighthouse Beach.", acts: ["Sree Padmanabhaswamy Temple Darshan", "Kovalam Beach Resort Check-in", "Lighthouse Beach Walk", "Sunset Arabian Sea Views"] },
    { title: "Buffet Breakfast, Banana Chips & Spices Shopping, Trivandrum Airport Drop", desc: "Savor South Indian breakfast. Complete check-out. Pick up authentic Kerala banana chips and fresh plantation spices before your private transfer to Trivandrum Airport (TRV) / Cochin for your flight home.", acts: ["Hotel Breakfast & Check-out", "Authentic Kerala Spices Shopping", "Airport Departure Chauffeur Drop"] }
  ],
  himachal: [
    { title: "Arrival in Chandigarh / Delhi & Scenic Himalayan Drive to Shimla", desc: "Meet your chauffeur in Chandigarh or Delhi. Drive up through the Shivalik foothills to colonial summer capital Shimla (2,276m). Check in at your mountain hotel. Spend the evening strolling along the famous pedestrian Mall Road.", acts: ["Airport / Station Meet & Greet", "Pinjore Garden Highway Stop", "Hotel Check-in Formalities", "Mall Road & Ridge Stroll"] },
    { title: "Kufri Snow Adventure, Himalayan Nature Park & Jakhoo Temple", desc: "Excursion to Kufri (2,622m). Enjoy horse riding, yak photography, and adventure rides at Kufri Fun World. Visit Himalayan Nature Park. Return to Shimla and take the ropeway to sacred Jakhoo Temple featuring 108-ft Lord Hanuman statue.", acts: ["Kufri Snow & Adventure Park", "Yak & Horse Riding", "Jakhoo Ropeway & Hanuman Statue", "Christ Church Photography"] },
    { title: "Shimla to Manali Valley of Gods via Pandoh Dam & Kullu Rafting", desc: "Scenic mountain drive along Beas River to Manali (260 km). Enroute stop at Pandoh Dam and Kullu Valley. Experience thrilling white water river rafting in Beas River and visit authentic Kullu shawl weaving factories.", acts: ["Beas River Scenic Valley Drive", "Pandoh Dam Viewpoint", "Kullu Beas River Rafting", "Kullu Shawl Factory Tour"] },
    { title: "Solang Valley Snow Adventure & Atal Tunnel Rohtang Expedition", desc: "Drive to Solang Valley for thrilling adventures: paragliding, zorbing, and quad biking. Cross the engineering marvel Atal Tunnel (9.02 km at 10,000 ft) into Sissu waterfall in Lahaul Valley amidst towering glaciers.", acts: ["Solang Valley Adventure Sports", "Atal Tunnel World Record Drive", "Sissu Waterfall Lahaul Valley Tour", "Snow Sledging Fun"] },
    { title: "Manali Local Heritage: Hadimba Temple, Vashisht Hot Springs & Old Manali", desc: "Explore 500-year-old wooden Hadimba Devi Temple amidst giant cedar pine forests. Visit Manu Temple, Vashisht natural sulphur hot water springs, Tibetan Monastery, and charming cafes of Old Manali.", acts: ["Hadimba Devi Temple Darshan", "Vashisht Sulphur Hot Springs Dip", "Old Manali Artisan Cafes Stroll", "Tibetan Monastery Heritage"] },
    { title: "Breakfast, Fresh Apples & Woolen Shopping, Chandigarh Departure Drop", desc: "Enjoy your morning buffet breakfast. Complete check-out. Pick up fresh Himachal apples, apricot jams, and woolen sweaters before your private chauffeur transfers you to Chandigarh (IXC) / Delhi Airport for flight home.", acts: ["Hotel Buffet Breakfast & Check-out", "Himachal Apples & Jam Shopping", "Private Scenic Airport Drop"] }
  ],
  rajasthan: [
    { title: "Arrival in Jaipur Pink City, Hotel Check-in & Chokhi Dhani Village", desc: "Arrive at Jaipur Airport (JAI) or Railway Station. Warm Rajasthani welcome with private transfer to your heritage hotel. In the evening, visit Chokhi Dhani ethnic resort for folk dance, puppet shows, camel rides, and authentic Dal Baati Churma feast.", acts: ["Jaipur Airport Meet & Greet", "Heritage Hotel Check-in", "Chokhi Dhani Ethnic Village Tour", "Rajasthani Cultural Feast"] },
    { title: "Amer Fort Elephant/Jeep Ride, Hawa Mahal & City Palace Royal Tour", desc: "Ascend hillside Amer Fort on a royal decorated jeep. Explore Sheesh Mahal (Mirror Palace). Photo stop at iconic Hawa Mahal (Palace of Winds). Tour City Palace complex, Chandra Mahal, and UNESCO-listed Jantar Mantar observatory.", acts: ["Amer Fort & Sheesh Mahal Tour", "Hawa Mahal Photography Stop", "City Palace Royal Museum", "Jantar Mantar Astronomical Observatory"] },
    { title: "Jaipur to Jodhpur Blue City via Ajmer Dargah & Pushkar Brahma Temple", desc: "Drive across Thar highway to Jodhpur (330 km). Enroute visit world-famous Ajmer Sharif Dargah and holy Pushkar Lake with the world's only sacred Lord Brahma Temple. Arrive in Jodhpur and check in at heritage haveli hotel.", acts: ["Ajmer Sharif Dargah Visit", "Pushkar Lake & Brahma Temple", "Scenic Thar Desert Highway Drive", "Blue City Heritage Haveli Check-in"] },
    { title: "Mehrangarh Fort Panorama, Jaswant Thada & Drive to Udaipur Lake City", desc: "Visit imposing Mehrangarh Fort perched 400 ft above the Blue City. Tour Jaswant Thada royal marble cenotaphs. Drive through Aravalli hills to romantic city Udaipur (260 km). Check in at your lakeside hotel overlooking Lake Pichola.", acts: ["Mehrangarh Fort Museum & Palaces", "Jaswant Thada White Marble Memorial", "Aravalli Hills Scenic Drive", "Udaipur Lakeside Hotel Check-in"] },
    { title: "Udaipur City Palace, Jagdish Temple & Lake Pichola Royal Boat Cruise", desc: "Tour grand Udaipur City Palace, the largest royal complex in Rajasthan. Visit 17th-century Jagdish Temple, Saheliyon-ki-Bari (Courtyard of Maidens), and enjoy a romantic sunset boat cruise on Lake Pichola past Lake Palace.", acts: ["City Palace Royal Galleries", "Jagdish Temple Sculptures", "Saheliyon-ki-Bari Fountains Walk", "Lake Pichola Sunset Boat Cruise"] },
    { title: "Rajasthani Bandhani & Miniature Painting Shopping, Udaipur Airport Drop", desc: "Savor lavish breakfast overlooking Lake Pichola. Visit local artisan markets for Bandhani dupattas, Mojari leather shoes, and miniature paintings before your private transfer to Udaipur Airport (UDR) for flight home.", acts: ["Hotel Buffet Breakfast & Check-out", "Bandhani & Miniature Art Shopping", "Udaipur Airport Departure Drop"] }
  ],
  goa: [
    { title: "Arrival in Goa Airport, Warm Welcome & Beach Resort Check-in", desc: "Arrive at Goa International Airport (Dabolim / Mopa). Meet our private chauffeur for a transfer to your coastal resort. Complete check-in formalities and spend the evening relaxing by the beach or sipping feni at beachfront shacks.", acts: ["Airport Meet & Greet", "Beach Resort Check-in", "Evening Beach Sunset Walk", "Beachfront Shack Dining"] },
    { title: "North Goa Heritage: Aguada Fort, Calangute, Baga & Anjuna Beach Tour", desc: "Full-day North Goa tour covering 17th-century Portuguese Fort Aguada and lighthouse with Arabian Sea views. Relax on world-famous Calangute Beach, explore water sports at Baga Beach, and enjoy sunset at rocky Anjuna Beach.", acts: ["Fort Aguada Portuguese Fortress", "Calangute & Baga Beach Walk", "Parasailing & Jet Ski at Baga", "Anjuna Beach Sunset & Night Bazaar"] },
    { title: "South Goa Culture: Basilica of Bom Jesus, Mangueshi Temple & Cruise", desc: "Explore UNESCO World Heritage Old Goa churches: Basilica of Bom Jesus (holding relics of St. Francis Xavier) and Se Cathedral. Visit historic Mangueshi Temple, spice plantation with Goan buffet lunch, and Mandovi River sunset cruise.", acts: ["Basilica of Bom Jesus UNESCO Tour", "Se Cathedral Heritage Visit", "Goan Spice Farm Tour with Lunch", "Mandovi River Sunset Cruise"] },
    { title: "Dudhsagar Waterfalls Jungle Safari or Grand Island Snorkeling Tour", desc: "Choice of thrilling 4x4 open-jeep jungle safari through Mollem National Park to the 4-tiered Dudhsagar Waterfalls with natural pool swimming, OR a catamaran cruise to Grand Island for dolphin watching and snorkeling.", acts: ["Dudhsagar Waterfalls 4x4 Jeep Safari", "Natural Freshwater Pool Swim", "Spice Plantation Goan Buffet", "Dolphin Spotting along Coast"] },
    { title: "Breakfast, Cashew & Feni Shopping, Goa Airport Departure Drop", desc: "Enjoy your morning tropical breakfast by the pool. Complete check-out. Visit local Panaji markets for authentic Goan cashews, bebinca sweets, and spices before your private transfer to Goa Airport for flight home.", acts: ["Hotel Buffet Breakfast & Check-out", "Goan Cashews & Bebinca Shopping", "Private Airport Departure Drop"] }
  ],
  uttarakhand: [
    { title: "Arrival in Dehradun / Haridwar & Scenic Mountain Drive to Mussoorie", desc: "Arrive at Dehradun Airport (DED) or Haridwar Station. Scenic drive climbing to Mussoorie (2,005m), the Queen of Hills. Check in at your mountain resort and enjoy sunset stroll along the historic pedestrian Mall Road.", acts: ["Dehradun / Haridwar Meet & Greet", "Mussoorie Mountain Scenic Drive", "Resort Check-in Formalities", "Mall Road & Camel Back Road Walk"] },
    { title: "Kempty Falls, Gun Hill Cable Car & Company Garden Floral Walk", desc: "Visit cascading Kempty Falls. Ride the Gun Hill Ropeway cable car to Mussoorie's second-highest peak for 360-degree views of the Great Himalayan range. Explore colorful Company Garden and municipal flower park.", acts: ["Kempty Falls Splash & Photography", "Gun Hill Ropeway Cable Car Ride", "Company Garden Floral Walk", "Lal Tibba Telescope Viewpoint"] },
    { title: "Mussoorie to Rishikesh Yoga Capital & Holy Har Ki Pauri Ganga Aarti", desc: "Drive down to world yoga capital Rishikesh on the banks of holy River Ganga. Cross suspension bridges Ram Jhula and Lakshman Jhula. Visit Beatles Ashram. In the evening, witness divine Ganga Aarti at Triveni Ghat.", acts: ["Scenic Mountain Descent to Rishikesh", "Ram Jhula & Lakshman Jhula Stroll", "Beatles Ashram Graffiti Exploration", "Triveni Ghat Evening Ganga Aarti"] },
    { title: "Rishikesh White Water River Rafting & Cliff Jumping Adventure", desc: "Exciting 16 km white water river rafting on holy Ganges navigating Class III & IV rapids like Roller Coaster and Golf Course. Try thrilling cliff jumping and body surfing with certified river rescue guides.", acts: ["16 km Ganges White Water Rafting", "Thrilling Cliff Jumping into River", "Body Surfing & Rapid Navigation", "Riverside Cafe Evening Relaxation"] },
    { title: "Breakfast, Himalayan Herbal Tea Shopping, Dehradun Airport Drop", desc: "Enjoy a riverside breakfast. Complete check-out. Pick up authentic Himalayan honey, herbal teas, and wooden carvings before your private chauffeur transfers you to Dehradun Airport (DED) / Haridwar Station for flight home.", acts: ["Riverside Breakfast & Check-out", "Himalayan Herbal Tea Shopping", "Dehradun Airport Departure Drop"] }
  ],
  "north-east": [
    { title: "Arrival in Guwahati, Brahmaputra Sunset Cruise & Umananda Temple", desc: "Arrive at Lokpriya Gopinath Bordoloi Airport (GAU) in Guwahati. Meet our representative for private transfer to hotel. In the evening, visit Umananda Peacock Island temple via ferry and enjoy a breathtaking sunset cruise on holy Brahmaputra River.", acts: ["Guwahati Airport Meet & Greet", "Hotel Check-in & Refresh", "Umananda Island Ferry", "Brahmaputra Sunset Cruise"] },
    { title: "Maa Kamakhya VIP Darshan & Scenic Drive to Shillong (Scotland of the East)", desc: "Early morning VIP Darshan at the revered Maa Kamakhya Shaktipeeth on Nilachal Hill. After breakfast, scenic highway drive to Shillong (100 km). Enroute stop at tranquil Umiam Lake (Barapani) for watersports and photography. Check in at Shillong hotel and explore Police Bazar.", acts: ["Maa Kamakhya Temple Darshan", "Scenic Highway Drive to Shillong", "Umiam Lake Watersports & Photography", "Police Bazar Cultural Leisure Walk"] },
    { title: "Shillong Sightseeing: Elephant Falls, Shillong Peak & Laitlum Canyons", desc: "Visit multi-tiered Elephant Falls, panoramic Shillong Peak, Don Bosco Indigenous Museum, and Lady Hydari Park. In the afternoon, head to the dramatic windswept gorges of Laitlum Grand Canyons with mist-covered valleys.", acts: ["Elephant Falls Walk", "Shillong Peak Viewpoint", "Don Bosco Museum Tour", "Laitlum Canyons Photography"] },
    { title: "Shillong to Cherrapunji (Sohra) via Nohkalikai Falls & Mawsmai Cave", desc: "Drive to Cherrapunji (Sohra), the rainfall capital of the world. Witness India's tallest plunge waterfall Nohkalikai Falls, explore prehistoric limestone formations inside Mawsmai Cave, and view Seven Sisters Falls and Eco Park.", acts: ["Nohkalikai Waterfall Viewpoint", "Mawsmai Cave Exploration", "Seven Sisters Falls Photo Stop", "Cherrapunji Eco-Resort Check-in"] },
    { title: "Double Decker Living Root Bridge Trek & Crystal Clear Dawki River Boating", desc: "Trek through lush subtropical rainforest to the UNESCO-famed Double Decker Living Root Bridges in Nongriat. Drive towards Indo-Bangladesh border at Dawki and experience boating on the transparent glass-like waters of Umngot River.", acts: ["Living Root Bridge Forest Trek", "Natural Rock Pool Dip", "Dawki Umngot River Boating", "Shnongpdeng Riverside Camp / Resort"] },
    { title: "Mawlynnong Cleanest Village in Asia & Guwahati Departure Drop", desc: "Explore Mawlynnong, awarded the Cleanest Village in Asia. Walk along flower-lined paths, bamboo dustbins, and visit the single-tier Living Root Bridge in Riwai. Enjoy local Khasi organic lunch before private transfer to Guwahati Airport.", acts: ["Mawlynnong Village Heritage Walk", "Riwai Single Root Bridge Visit", "Sky Walk Bamboo Machan View", "Guwahati Airport Departure Drop"] }
  ],
  coorg: [
    { title: "Arrival in Bangalore & Scenic Drive to Heritage City Mysore", desc: "Arrive at Kempegowda International Airport (BLR) / Bangalore City Station. Board your private AC cab for a highway drive to royal Mysore. Check in to your hotel and visit the magnificent illuminated Mysore Palace and Chamundeshwari Temple atop Chamundi Hills.", acts: ["Airport / Station Pickup", "Scenic Highway Drive to Mysore", "Mysore Palace Royal Tour", "Chamundi Hills Temple Darshan"] },
    { title: "Mysore to Coorg (Kodagu) via Dubare Elephant Camp & Golden Temple", desc: "Drive to Coorg, the Scotland of India (120 km). Enroute visit Namdroling Monastery (Tibetan Golden Temple) in Bylakuppe with 40-foot gilded Buddha statues. Visit Dubare Elephant Camp on Cauvery River for elephant bathing and feeding.", acts: ["Namdroling Golden Temple Monastery", "Dubare Elephant Camp Experience", "Cauvery River Coracle Ride", "Coorg Coffee Plantation Resort Check-in"] },
    { title: "Coorg Coffee Estate Tour, Abbey Falls, Raja's Seat & Madikeri Fort", desc: "Wake up to aromatic aromas of fresh Arabica and Robusta beans. Take a guided walking tour through lush coffee and spice plantations. Visit roaring Abbey Falls, historical Madikeri Fort, and Omkareshwara Temple. Catch sunset from Raja's Seat.", acts: ["Guided Coffee & Pepper Estate Walk", "Abbey Falls Hanging Bridge View", "Madikeri Fort & Omkareshwara Temple", "Raja's Seat Musical Sunset Garden"] },
    { title: "Talacauvery Origin of River Cauvery & Bhagamandala Temple Excursion", desc: "Drive to Brahmagiri Hills to visit sacred Talacauvery, the holy birthplace of River Cauvery. Climb Brahmagiri Peak steps for panoramic Western Ghats views. Visit Triveni Sangam and Bhagandeshwara Temple in Bhagamandala.", acts: ["Talacauvery Holy Kund & Temple", "Brahmagiri Peak Steps Trek", "Bhagamandala Triveni Sangam Dip", "Coffee, Homemade Chocolates & Spices Shopping"] },
    { title: "Scenic Western Ghats Drive & Bangalore / Mangalore Departure Transfer", desc: "Savor a traditional Kodava breakfast. Check out from your resort. Pick up estate-fresh Coorg filter coffee powder, organic honey, and homemade spices before your private chauffeur transfers you to Mangalore (IXE) or Bangalore (BLR) Airport.", acts: ["Resort Breakfast & Check-out", "Coorg Spices & Chocolates Shopping", "Scenic Western Ghats Highway Drive", "Airport Departure Drop"] }
  ],
  wildlife: [
    { title: "Arrival in Delhi & Scenic Private Transfer to Jim Corbett / Ranthambore", desc: "Arrive in Delhi. Meet our chauffeur for a comfortable private AC highway transfer to your wilderness jungle resort. Arrive and check in amidst nature. Spend a relaxing evening by the campfire with naturalist briefings and wildlife documentaries.", acts: ["Airport / Station Pickup", "Scenic Highway Transfer to Jungle Resort", "Resort Welcome Drink & Check-in", "Campfire & Naturalist Wildlife Talk"] },
    { title: "Exclusive Morning Jungle Safari: Tiger Tracking, Wild Elephants & Birdwatching", desc: "Early morning open 4x4 Gypsy safari into core tiger territory with expert forest trackers. Track Bengal tigers, wild Asian elephants, spotted deer, and rare avifauna. Return to resort for breakfast and spend the afternoon by the pool.", acts: ["Open 4x4 Gypsy Core Safari", "Bengal Tiger Tracking Experience", "Wild Elephant & Sambar Spotting", "Resort Poolside Leisure & High Tea"] },
    { title: "Afternoon Buffer Zone Jeep Safari & Scenic Forest River Trail", desc: "Embark on an afternoon safari through picturesque sal forests and riverine grasslands. Spot marsh crocodiles, leopards, and over 500 migratory bird species along the riverbanks. Evening folk dance performances at resort.", acts: ["Afternoon 4x4 Wilderness Safari", "Gharial & Mugger Crocodile Spotting", "Birdwatching Trail with Naturalist", "Tribal Folk Dance & Barbecue Dinner"] },
    { title: "Nature Walk, Souvenir Shopping & Private Departure Transfer", desc: "Enjoy a morning nature walk along the resort periphery listening to Himalayan bird calls. Savor a hearty buffet breakfast, complete check-out, and board your private AC transfer back to Delhi / nearest airport for your return journey.", acts: ["Guided Nature & Birding Walk", "Resort Buffet Breakfast & Check-out", "Handicrafts & Wildlife Souvenir Shopping", "Airport Departure Drop"] }
  ],
  maharashtra: [
    { title: "Arrival in Mumbai / Pune & Scenic Western Ghats Drive to Lonavala", desc: "Arrive at Mumbai (BOM) / Pune (PNQ) Airport. Private AC transfer ascending through lush Sahyadri hills to Lonavala. Check in at your luxury resort. In the evening, visit Bhushi Dam, Tiger's Leap, and enjoy sunset at Lion's Point.", acts: ["Airport / Station Meet & Greet", "Scenic Khandala Ghat Highway Drive", "Resort Check-in & Leisure", "Lion's Point Sunset & Tiger's Leap View"] },
    { title: "Karla & Bhaja Buddhist Caves, Lonavala to Mahabaleshwar Strawberry Valley", desc: "Explore ancient 2nd-century BC Karla and Bhaja rock-cut Buddhist caves. Drive towards strawberry capital Mahabaleshwar (180 km) via scenic Panchgani. Stop at Table Land plateau and Mapro Garden for strawberry treats.", acts: ["Karla Buddhist Rock Caves Tour", "Scenic Western Ghats Highway Drive", "Panchgani Table Land Viewpoint", "Mapro Garden Strawberry Tasting"] },
    { title: "Mahabaleshwar Sightseeing: Arthur's Seat, Elephant's Head & Venna Lake", desc: "Visit Arthur's Seat (Queen of Points), needle-hole rock Elephant's Head Point, Kate's Point, and historical Pratapgad Fort of Chhatrapati Shivaji Maharaj. In the evening, enjoy peaceful pedal boating on tranquil Venna Lake.", acts: ["Arthur's Seat & Echo Point Sightseeing", "Pratapgad Fort Historical Walk", "Venna Lake Evening Boat Ride", "Mahabaleshwar Bazaar Strawberry Shopping"] },
    { title: "Shirdi Sai Baba VIP Samadhi Darshan, Dwarkamai & Departure Transfer", desc: "Drive to sacred Shirdi (or return to Mumbai/Pune). Experience divine VIP Samadhi Darshan of Shri Sai Baba, visit sacred Dwarkamai mosque, Gurusthan, and Chavadi. Board your private chauffeur transfer to Mumbai / Pune Airport.", acts: ["Shirdi Sai Baba VIP Darshan", "Dwarkamai & Chavadi Sacred Visits", "Prasad & Religious Keepsakes Shopping", "Airport Departure Drop"] }
  ],
  "sri-lanka": [
    { title: "Arrival in Colombo & Scenic Drive to Cultural Capital Kandy", desc: "Arrive at Bandaranaike International Airport (CMB) in Colombo. Meet your chauffeur guide and drive towards the UNESCO royal city of Kandy. Enroute visit Pinnawala Elephant Orphanage to watch herds bathing in the river. Check in at Kandy hotel.", acts: ["Airport Meet & Greet", "Pinnawala Elephant Orphanage Visit", "Kandy Hotel Check-in", "Kandyan Cultural Dance Show"] },
    { title: "Sacred Temple of the Tooth Relic, Peradeniya Botanical Gardens & Kandy Lake", desc: "Visit the sacred Sri Dalada Maligawa (Temple of the Sacred Tooth Relic of Buddha). Stroll through royal Peradeniya Botanical Gardens featuring over 4,000 plant species. Enjoy an evening walk around picturesque Kandy Lake.", acts: ["Temple of the Sacred Tooth Relic Pooja", "Royal Botanical Gardens Tour", "Kandy Gem Lapidary & Silk Showroom", "Kandy Lake Scenic Walk"] },
    { title: "Kandy to Nuwara Eliya 'Little England' via Ramboda Falls & Tea Factory", desc: "Breathtaking mountain drive past cascading waterfalls including Ramboda Falls. Tour a working Ceylon tea plantation and factory with tea tasting session. Explore colonial Nuwara Eliya, Gregory Lake, and Victoria Park.", acts: ["Ramboda Waterfalls Photo Stop", "Ceylon Tea Plantation & Factory Tasting", "Gregory Lake Boat Ride / Pony Ride", "Nuwara Eliya Colonial Town Walk"] },
    { title: "Nuwara Eliya to Coastal Bentota / Galle Fort & Turtle Hatchery", desc: "Descend to southwestern golden beaches of Bentota. Visit Kosgoda Turtle Hatchery, take a thrilling mangrove boat safari on Madu River with fish therapy, and explore the 17th-century Dutch colonial Galle Fort.", acts: ["Madu River Mangrove Boat Safari", "Kosgoda Sea Turtle Conservation Center", "UNESCO Galle Dutch Fort Walking Tour", "Bentota Beachfront Resort Check-in"] },
    { title: "Bentota Watersports, Colombo City Tour & Airport Departure Transfer", desc: "Enjoy beach relaxation and optional jet ski or banana rides. Drive to capital Colombo. Guided city tour visiting Gangaramaya Buddhist Temple, Independence Square, and Pettah bazaar before your transfer to Colombo Airport.", acts: ["Bentota Beach Leisure & Watersports", "Colombo City & Temple Tour", "Ceylon Tea & Cashew Shopping", "Bandaranaike Airport Departure Drop"] }
  ],
  mauritius: [
    { title: "Arrival in Tropical Mauritius, Beach Resort Check-in & Coastal Sunset", desc: "Arrive at Sir Seewoosagur Ramgoolam Airport (MRU). Meet our island representative for private transfer to your luxury beachfront resort. Sip a tropical welcome cocktail, relax on powdery white sands, and marvel at the Indian Ocean sunset.", acts: ["Airport Meet & Greet", "Luxury Resort Private Transfer", "Resort Welcome Drink & Check-in", "Sunset Beachfront Relaxation"] },
    { title: "North Island Heritage: Port Louis Capital, Citadel & Caudan Waterfront", desc: "Full-day guided tour of North Mauritius. Explore historical Port Louis, climb Fort Adelaide (Citadel) for panoramic harbour views, stroll through the vibrant Caudan Waterfront, and visit the giant water lilies at Pamplemousses Botanical Garden.", acts: ["Port Louis Capital Guided Tour", "Fort Adelaide Panoramic Citadel", "Pamplemousses Botanical Garden", "Caudan Waterfront Shopping & Dining"] },
    { title: "South Island Scenic Wonders: Chamarel 7-Colored Earth & Grand Bassin", desc: "Discover South Mauritius geological wonders. Visit dormant volcanic crater Trou aux Cerfs, sacred crater lake Grand Bassin (Ganga Talao) with majestic Shiva statue, Black River Gorges, and the surreal Chamarel Seven Colored Earths and Waterfall.", acts: ["Trou aux Cerfs Volcanic Crater", "Grand Bassin Sacred Lake & Shiva Statue", "Black River Gorges Viewpoint", "Chamarel Seven Colored Earth & Waterfall"] },
    { title: "Full Day Catamaran Cruise to Ile Aux Cerfs with Barbecue Lunch & Parasailing", desc: "Board a catamaran cruise across turquoise lagoons to the tropical paradise of Ile Aux Cerfs. Swim, snorkel among coral reefs, indulge in an onboard grilled seafood/chicken barbecue lunch with local rum, and enjoy parasailing.", acts: ["Lagoon Catamaran Cruise", "Snorkeling at Coral Reefs", "Onboard Barbecue Lunch with Tropical Drinks", "Ile Aux Cerfs Watersports & Beach Leisure"] },
    { title: "Beachfront Spa, Duty-Free Souvenir Shopping & Airport Departure Transfer", desc: "Indulge in a relaxing morning beachfront breakfast or Ayurvedic spa session. Pick up authentic Mauritian sugar, rum, and handcrafted dodo souvenirs before your private transfer to the airport for your return flight.", acts: ["Resort Buffet Breakfast & Beach Leisure", "Mauritian Rum & Vanilla Tea Shopping", "Private Airport Transfer", "Flight Departure"] }
  ],
  turkey: [
    { title: "Arrival in Historic Istanbul, Bosphorus Strait & Hotel Check-in", desc: "Arrive at Istanbul Airport (IST). Meet our tour chauffeur for private transfer to your hotel. Relax and enjoy an evening stroll along Istiklal Street in Taksim or take an optional sunset yacht cruise on the sparkling Bosphorus Strait separating Europe and Asia.", acts: ["Airport Meet & Greet", "Private Hotel Transfer & Check-in", "Taksim Square & Istiklal Street Walk", "Bosphorus Evening Views"] },
    { title: "Istanbul Old City Classical Highlights: Hagia Sophia, Blue Mosque & Grand Bazaar", desc: "Guided walking tour through UNESCO-listed Sultanahmet. Marvel at 6th-century Hagia Sophia, the 6-minaret Blue Mosque, Roman Hippodrome, and opulent Topkapi Palace of Ottoman Sultans. Get lost in the bustling 4,000-shop Grand Bazaar.", acts: ["Hagia Sophia Architectural Masterpiece", "Sultan Ahmed Blue Mosque Visit", "Topkapi Palace Imperial Treasury", "Grand Bazaar Turkish Delight Shopping"] },
    { title: "Fly to Cappadocia, Fairy Chimneys, Underground City & Cave Hotel Stay", desc: "Morning domestic flight to Cappadocia. Check into a traditional luxury cave hotel carved out of volcanic rock. Explore Kaymakli / Derinkuyu multi-level underground city, Pasabag Monk Valley fairy chimneys, and Devrent Imagination Valley.", acts: ["Domestic Flight to Cappadocia", "Cave Hotel Check-in Experience", "Underground City Subterranean Tour", "Pasabag Fairy Chimneys & Devrent Valley"] },
    { title: "Sunrise Hot Air Balloon Flight over Cappadocia & Goreme Open Air Museum", desc: "Once-in-a-lifetime sunrise hot air balloon flight drifting gracefully over Cappadocia's surreal lunar landscape and volcanic canyons. Visit UNESCO Goreme Open Air Museum rock-cut churches and Uchisar Castle viewpoint.", acts: ["Sunrise Hot Air Balloon Flight Experience", "Champagne Toast & Flight Certificate", "Goreme Rock-cut Churches & Byzantine Frescoes", "Uchisar Rock Castle Sunset Vista"] },
    { title: "Fly to Izmir / Denizli, Pamukkale Cotton Castle Thermal Travertines & Hierapolis", desc: "Short flight to Denizli. Visit world-famous Pamukkale (Cotton Castle) glistening with tiered white travertine thermal terraces. Bathe in Cleopatra Antique Thermal Pool and explore the sprawling Greco-Roman ruins of ancient Hierapolis.", acts: ["Pamukkale White Calcium Travertines Walk", "Cleopatra Antique Thermal Pool Bath", "Hierapolis Amphitheatre & Necropolis", "Denizli / Kusadasi Resort Check-in"] },
    { title: "Ephesus Ancient City, Temple of Artemis & Istanbul Departure Transfer", desc: "Tour world-renowned classical metropolis Ephesus. Walk marble streets to Library of Celsus, Great Theatre, and ruins of Temple of Artemis (one of the Seven Ancient Wonders). Transfer to Izmir / Istanbul Airport for departure.", acts: ["Ephesus Classical Ruins Guided Tour", "Celsus Library & Grand Theatre Walk", "Turkish Pottery & Leather Artisan Workshop", "Airport Departure Drop"] }
  ],
  nepal: [
    { title: "Arrival in Kathmandu Valley, Pashupatinath Temple & Boudhanath Stupa", desc: "Arrive at Tribhuvan International Airport (KTM) in Kathmandu. Meet our Sherpa representative for a private transfer to your hotel. Visit the sacred Hindu shrine Shri Pashupatinath Temple on holy Bagmati River and circumambulate the colossal Boudhanath Stupa.", acts: ["Kathmandu Airport Meet & Greet", "Hotel Check-in & Welcome Drink", "Pashupatinath Temple Maha Aarti", "Boudhanath Giant Stupa Prayer Wheels"] },
    { title: "Kathmandu Valley Heritage: Swayambhunath (Monkey Temple) & Patan Durbar Square", desc: "Climb to hilltop Swayambhunath Stupa with panoramic valley views. Explore the exquisite Newari stone and wood architecture of UNESCO Patan Durbar Square, Krishna Mandir, and the Golden Temple. Afternoon free for Thamel gear shopping.", acts: ["Swayambhunath Hilltop Stupa", "Patan Durbar Square Royal Palaces", "Krishna Mandir Stone Carvings", "Thamel Bazaar Trekking Gear Shopping"] },
    { title: "Scenic Highway Drive to Pokhara Valley along Trishuli River", desc: "Scenic mountain drive to picturesque Pokhara (200 km) along the roaring Trishuli and Marsyangdi rivers with Himalayan foothills views. Arrive in Pokhara flanked by the snow-capped Annapurna and Machhapuchhre (Fishtail) peaks. Check in at Lakeside hotel.", acts: ["Trishuli River Valley Highway Drive", "Riverside Lunch Stop", "Pokhara Lakefront Hotel Check-in", "Phewa Lake Evening Boating & Barahi Temple"] },
    { title: "Sarangkot Sunrise over Annapurna Range, Davis Fall & Gupteshwor Mahadev Cave", desc: "Early morning drive to Sarangkot ridge for sunrise illuminating Annapurna I, Dhaulagiri, and Fishtail peaks in golden hues. Visit Davis Falls where water disappears underground, Gupteshwor Mahadev cave temple, and Peace Pagoda.", acts: ["Sarangkot Himalayan Sunrise Spectacle", "Davis Falls Rushing Water Chasm", "Gupteshwor Mahadev Subterranean Cave", "World Peace Pagoda Stupa Viewpoint"] },
    { title: "Pokhara to Chitwan National Park Tiger & Rhino Wildlife Reserve", desc: "Drive to subtropical Terai plains of Chitwan National Park. Check into your jungle safari lodge. In the evening, enjoy a sunset riverside stroll spotting wild rhinos and enjoy a traditional Tharu tribal stick dance performance.", acts: ["Scenic Drive to Terai Lowlands", "Chitwan Jungle Lodge Check-in", "Rapti River Sunset & Birdwatching", "Tharu Cultural Stick Dance Show"] },
    { title: "Chitwan Elephant / Jeep Safari, Canoe Ride & Kathmandu Departure Drop", desc: "Thrilling early morning Jeep safari in Chitwan to track endangered One-horned Rhinoceros, Royal Bengal Tigers, and sloth bears. Take a tranquil dugout canoe ride along Rapti River spotting Gharials before driving to Kathmandu Airport.", acts: ["Chitwan 4x4 Core Jungle Safari", "One-Horned Rhino & Tiger Tracking", "Rapti River Dugout Canoe Safari", "Kathmandu Airport Departure Drop"] }
  ],
  australia: [
    { title: "Arrival in Sydney, Harbour Bridge & Iconic Opera House Walk", desc: "Arrive at Kingsford Smith Airport (SYD) in Sydney. Private AC transfer to your downtown hotel. Spend the afternoon exploring Circular Quay, walking around the world-famous Sydney Opera House, and walking across Sydney Harbour Bridge.", acts: ["Airport Meet & Greet", "Hotel Check-in", "Sydney Opera House Architectural Tour", "Circular Quay & The Rocks Historical Walk"] },
    { title: "Blue Mountains National Park, Three Sisters & Scenic World Cable Car", desc: "Full-day excursion to UNESCO Blue Mountains. Marvel at ancient eucalyptus valleys from Echo Point viewing the Three Sisters rock formation. Ride the steepest passenger railway in the world and Scenic Skyway glass-floor cable car at Scenic World.", acts: ["Blue Mountains National Park Drive", "Echo Point & Three Sisters Viewpoint", "Scenic World Railway & Skyway Cableway", "Leura Mountain Village Artisan Lunch"] },
    { title: "Bondi Beach Coastal Walk, Sydney Tower Eye & Sunset Harbour Dinner Cruise", desc: "Take the scenic cliffside coastal walk from Bondi to Bronte Beach. Ascend Sydney Tower Eye for 360-degree skyline views. In the evening, board a luxury 3-course dinner cruise on Sydney Harbour with stunning illumination of city landmarks.", acts: ["Bondi Beach Surfing & Coastal Walk", "Sydney Tower Eye Observation Deck", "Luxury Sydney Harbour Sunset Cruise", "3-Course International Dinner on Board"] },
    { title: "Fly to Melbourne, Laneways Street Art Tour & Yarra River Evening", desc: "Morning flight to cultural capital Melbourne. Check in at your CBD hotel. Join a guided walking tour through Melbourne's iconic graffiti laneways (Hosier Lane) and vintage arcade cafes. Spend the evening strolling along the bustling Southbank promenade.", acts: ["Flight to Melbourne & Transfer", "Hosier Lane & Street Art Walking Tour", "Flinders Street Station & Federation Square", "Yarra River Southbank Dining Promenade"] },
    { title: "Great Ocean Road Spectacular Scenic Coastal Drive & Twelve Apostles", desc: "Full-day road trip along one of the world's most spectacular coastal highways. Wind through surf beaches, ancient rainforests, and spot wild koalas in Kennett River. Arrive at Port Campbell to witness the colossal limestone Twelve Apostles sea stacks.", acts: ["Great Ocean Road Ocean Drive", "Wild Koala Spotting at Kennett River", "Twelve Apostles & Loch Ard Gorge Formations", "Shipwreck Coast Sunset Photography"] },
    { title: "Fly to Gold Coast / Cairns, Great Barrier Reef Catamaran Cruise & Departure", desc: "Fly north to Cairns / Gold Coast. Board a luxury high-speed catamaran cruise to the Outer Great Barrier Reef. Snorkel among vibrant coral gardens, tropical fish, and marine turtles with marine biologists before your airport departure transfer.", acts: ["Outer Great Barrier Reef Catamaran Cruise", "Snorkeling at UNESCO Coral Formations", "Semi-Submersible Coral Viewing Tour", "Airport Departure Drop"] }
  ],
  usa: [
    { title: "Arrival in New York City, Manhattan Skyline & Times Square", desc: "Arrive at John F. Kennedy Airport (JFK) / Newark (EWR). Private luxury SUV transfer to your Midtown Manhattan hotel. In the evening, step out into the electric neon glow of Times Square and Broadway theatre district.", acts: ["Airport Meet & Greet", "Private Manhattan Hotel Transfer", "Times Square Neon Walking Tour", "Rockefeller Center & Broadway Avenue"] },
    { title: "Statue of Liberty Ferry, Wall Street, Central Park & Summit One Vanderbilt", desc: "Board the ferry to Liberty Island to stand beneath the Statue of Liberty and visit Ellis Island National Museum. Walk past Wall Street Charging Bull and 9/11 Memorial. In the afternoon, explore Central Park and ascend Summit One Vanderbilt glass observatory.", acts: ["Statue of Liberty & Ellis Island Ferry", "Wall Street & 9/11 Memorial Reflection Pools", "Central Park Bethesda Fountain Stroll", "Summit One Vanderbilt Immersive Skyline Views"] },
    { title: "Fly to Washington D.C., Capitol Hill, Lincoln Memorial & Smithsonian Museums", desc: "Short flight or Amtrak train to the nation's capital Washington D.C. Tour Capitol Hill, the White House exterior, Lincoln Memorial, Washington Monument, and explore the National Air and Space Smithsonian Museum with moon landing modules.", acts: ["Capitol Hill & Supreme Court Tour", "The White House Exterior Photo Stop", "Lincoln Memorial & Reflecting Pool", "Smithsonian Air & Space Museum Exploration"] },
    { title: "Fly to Las Vegas, The Strip Boulevard & Fountains of Bellagio Spectacle", desc: "Morning flight across America to dazzling Las Vegas in Nevada. Check into your luxury casino resort on the Las Vegas Strip. In the evening, witness the choreographed musical Bellagio Fountains, Mirage volcano, and explore Venetian gondola canals.", acts: ["Flight to Las Vegas & Hotel Check-in", "Las Vegas Strip World Landmark Walk", "Fountains of Bellagio Water Show", "The Venetian Indoor Gondola Ride"] },
    { title: "Grand Canyon West Rim Skywalk & Hoover Dam Engineering Marvel", desc: "Full-day excursion to the majestic Grand Canyon West Rim. Stop at Hoover Dam holding back Lake Mead. Walk on the cantilever glass Grand Canyon Skywalk projecting 4,000 feet above the Colorado River canyon floor with Hualapai tribal guides.", acts: ["Hoover Dam Engineering Landmark Stop", "Joshua Tree Forest Scenic Drive", "Grand Canyon Skywalk Glass Bridge Walk", "Guano Point & Eagle Point Panoramic Views"] },
    { title: "Fly to San Francisco, Golden Gate Bridge, Fisherman's Wharf & Departure Drop", desc: "Fly to coastal San Francisco. Visit iconic orange towers of Golden Gate Bridge, historic cable car lines, Lombard Street crooked curves, and sea lions at Fisherman's Wharf Pier 39 before your private chauffeur transfer to San Francisco Airport (SFO).", acts: ["Golden Gate Bridge Vista Point", "Fisherman's Wharf Pier 39 Sea Lions", "Historic Cable Car Scenic Ride", "San Francisco Airport Departure Drop"] }
  ]
};

function getBrandedHotelName(city: string, hotelTier: string): string {
  if (hotelTier === '5 Star' || hotelTier === 'Luxury Resort') {
    return city + ' Radisson Blu / Courtyard by Marriott (5★ Commercial Luxury)';
  }
  if (hotelTier === '4 Star') {
    return city + ' Park Inn by Radisson / Lemon Tree Premier (4★ Deluxe)';
  }
  return city + ' Treebo Trend / Ginger Hotel (3★ Standard)';
}

function buildSectorDayItinerary(
  sectorSlug: string,
  city: string,
  dayNumber: number,
  totalDays: number,
  hotelName: string
): ItineraryDay {
  const flows = DESTINATION_ITINERARY_FLOWS[sectorSlug];
  if (flows && flows.length > 0) {
    if (dayNumber === 1) {
      const day1 = flows[0];
      return {
        dayNumber: 1,
        title: day1.title,
        description: day1.desc,
        meals: ['Dinner'],
        activities: day1.acts,
        hotel: hotelName,
        transfers: 'Private AC Cab Airport / Station Meet & Greet'
      };
    }
    if (dayNumber === totalDays) {
      const lastDay = flows[flows.length - 1];
      return {
        dayNumber: totalDays,
        title: lastDay.title,
        description: lastDay.desc,
        meals: ['Breakfast'],
        activities: lastDay.acts,
        hotel: 'Check-out completed',
        transfers: 'Private AC Cab Departure Airport / Station Transfer'
      };
    }
    const midIndex = 1 + ((dayNumber - 2) % Math.max(1, flows.length - 2));
    const midDay = flows[midIndex] || flows[1] || flows[0];
    return {
      dayNumber,
      title: midDay.title,
      description: midDay.desc,
      meals: ['Breakfast'],
      activities: midDay.acts,
      hotel: hotelName,
      transfers: 'Full Day Dedicated Private AC Vehicle with Chauffeur'
    };
  }

  // Fallback for sectors without custom flow
  if (dayNumber === 1) {
    return {
      dayNumber: 1,
      title: 'Arrival in ' + city + ' & Hotel Check-in',
      description: 'Arrive at ' + city + '. Meet our friendly tour representative for a private transfer to your hotel. Complete check-in formalities and spend the evening relaxing or exploring nearby local bazaars and food streets at leisure.',
      meals: ['Dinner'],
      activities: ['Airport / Station Meet & Greet', 'Private Hotel Transfer', 'Evening Leisure Walk'],
      hotel: hotelName,
      transfers: 'Private AC Cab Transfer'
    };
  }
  if (dayNumber === totalDays) {
    return {
      dayNumber: totalDays,
      title: 'Breakfast & Departure Transfers from ' + city,
      description: 'Enjoy a hearty buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute souvenir shopping before your private transfer to the airport or railway station.',
      meals: ['Breakfast'],
      activities: ['Souvenir Shopping', 'Hotel Check-out', 'Departure Airport / Station Transfer'],
      hotel: 'Check-out completed',
      transfers: 'Private AC Cab Transfer'
    };
  }
  return {
    dayNumber,
    title: 'Day ' + dayNumber + ': ' + city + ' Premier Landmarks & Sightseeing Tour',
    description: 'After breakfast, embark on a full-day guided sightseeing tour of ' + city + ' premier cultural landmarks, scenic viewpoints, historic monuments, and artisan craft markets with your private chauffeur.',
    meals: ['Breakfast'],
    activities: ['Monument Visits', 'Scenic Highlights & Photography', 'Local Artisan Market Tour'],
    hotel: hotelName,
    transfers: 'Full Day Private AC Vehicle'
  };
}

function generateSynthesizedPackage(
  sector: SectorDefinition,
  sectorIndex: number,
  pkgIndex: number
): HolidayPackage {
  const city = sector.cities[pkgIndex % sector.cities.length];
  const themeObj = THEMES_CONFIG[pkgIndex % THEMES_CONFIG.length];
  const durObj = DURATIONS_CONFIG[pkgIndex % DURATIONS_CONFIG.length];
  // All package cards across the catalog strictly default to 3-Star Standard baseline pricing
  const hotelTier = '3-Star Standard';

  const { startingPrice, discountPrice } = computeB2BPackagePricing(
    sector,
    '3 Star',
    durObj.nights,
    durObj.days,
    pkgIndex
  );

  const ratings = [4.7, 4.8, 4.9, 4.85, 4.95];
  const rating = ratings[pkgIndex % ratings.length];
  const reviewsCount = 85 + ((pkgIndex * 13) % 240);

  const prefix = sector.isInternational ? 'int' : 'dom';
  const id = 'pkg-ota-' + prefix + '-' + (sectorIndex + 1) + '-' + (pkgIndex + 1);
  const name = sector.region + ' – ' + city + ' ' + themeObj.raw + ' (' + durObj.label + ')';
  const slug = sector.destinationSlug + '-' + slugify(city) + '-' + slugify(themeObj.raw) + '-' + durObj.days + 'd' + durObj.nights + 'n-' + (sectorIndex + 1) + '-' + (pkgIndex + 1);

  const highlights = HIGHLIGHTS_MAP[themeObj.theme] || [
    'Private Sightseeing Cab with Chauffeur',
    'Daily Complimentary Breakfast at Hotel',
    'Dedicated 24x7 TripCustomizer Support Desk'
  ];

  const hotelName = getBrandedHotelName(city, hotelTier);
  const itinerary: ItineraryDay[] = [];
  for (let d = 1; d <= durObj.days; d++) {
    itinerary.push(buildSectorDayItinerary(sector.destinationSlug, city, d, durObj.days, hotelName));
  }

  const hotels = [
    {
      name: hotelName,
      city: city,
      rating: hotelTier,
      nights: durObj.nights
    }
  ];

  const faqs = [
    {
      question: 'What is included in this ' + sector.region + ' package?',
      answer: 'This tour package includes ' + hotelTier + ' accommodation, daily breakfast, full private AC vehicle transfers and sightseeing as per itinerary, driver allowances, toll charges, and 24x7 customer support.'
    },
    {
      question: 'Can I customize the hotel category or duration?',
      answer: 'Yes, 100%! All TripCustomizer packages can be tailored to your exact dates, preferred departure city, hotel tier upgrades, and custom sightseeing requests.'
    },
    {
      question: 'How does the payment and booking confirmation work?',
      answer: 'You can secure your booking with an initial advance token payment. The remaining balance can be settled closer to your departure date via Razorpay, Net Banking, or UPI with instant vouchers.'
    }
  ];

  const sectorPool = SECTOR_IMAGE_POOLS[sector.destinationSlug] || [sector.heroImage];
  const assignedHeroImage = sectorPool[pkgIndex % sectorPool.length];
  const gallerySecondary = sectorPool[(pkgIndex + 1) % sectorPool.length] || assignedHeroImage;
  const galleryTertiary = sectorPool[(pkgIndex + 2) % sectorPool.length] || assignedHeroImage;

  return {
    id,
    name,
    slug,
    destination: city + ', ' + sector.region,
    destinationSlug: sector.destinationSlug,
    country: sector.country,
    region: sector.regionCategory,
    isInternational: sector.isInternational,
    durationDays: durObj.days,
    durationNights: durObj.nights,
    startingPrice,
    discountPrice,
    rating,
    reviewsCount,
    heroImage: assignedHeroImage,
    gallery: [
      assignedHeroImage,
      gallerySecondary,
      galleryTertiary
    ],
    highlights,
    inclusions: [
      'Handpicked ' + hotelTier + ' Accommodation (' + durObj.nights + ' Nights)',
      'Daily Buffet Breakfast at Hotel',
      'Private AC Cab for Complete Airport & Sightseeing Transfers',
      'All Sightseeing Excursions Covered as Per Day-wise Plan',
      'Driver Allowances, State Entry Permits & Highway Tolls Included'
    ],
    exclusions: [
      'Flight / Train Tickets (Can be added on request during booking)',
      'Entry tickets for monuments, camera fees, and optional sports',
      'Personal expenses such as laundry, phone calls, and alcoholic drinks',
      'Local Taxi Union vehicles (e.g. Pahalgam Aru/Betaab Valley, Gulmarg Phase 2, Rohtang Pass, Nathula Pass) as per local government mandate payable on actuals',
      'Wildlife Jeep Safari permits (non-refundable upon booking as per Forest Dept rules)',
      'Dec 20 – Jan 5 Christmas/New Year Gala Dinner & peak supplements as mandated by resorts',
      '5% GST Government Tax (Calculated transparently at checkout)'
    ],
    theme: themeObj.theme,
    hotelCategory: hotelTier,
    mealPlan: 'Breakfast Included',
    flightsIncluded: false,
    transfersIncluded: true,
    departureCity: 'Ex-Delhi / Flexible Origin',
    itinerary,
    hotels,
    faqs
  };
}

let _memoizedAllCatalog: HolidayPackage[] | null = null;
let _memoizedLookupMap: Map<string, HolidayPackage> | null = null;

function initializeCatalog(): { all: HolidayPackage[]; lookup: Map<string, HolidayPackage> } {
  if (_memoizedAllCatalog && _memoizedLookupMap) {
    return { all: _memoizedAllCatalog, lookup: _memoizedLookupMap };
  }

  const lookup = new Map<string, HolidayPackage>();
  const all: HolidayPackage[] = [];

  // 1. TIER 1: Add existing 130 detailed packages first (top priority)
  for (const pkg of DEMO_PACKAGES) {
    all.push(pkg);
    lookup.set(pkg.id.toLowerCase(), pkg);
    lookup.set(pkg.slug.toLowerCase(), pkg);
    lookup.set('pkg-' + pkg.slug.toLowerCase(), pkg);
    lookup.set(pkg.id.toLowerCase().replace(/^pkg-/, ''), pkg);
  }

  // 2. TIER 2: Synthesize complete verified OTA packages per sector (Full 5,500+ pan-India & global inventory)
  OTA_DOMESTIC_SECTORS.forEach((sector, sIdx) => {
    for (let pIdx = 0; pIdx < sector.count; pIdx++) {
      const pkg = generateSynthesizedPackage(sector, sIdx, pIdx);
      all.push(pkg);
      lookup.set(pkg.id.toLowerCase(), pkg);
      lookup.set(pkg.slug.toLowerCase(), pkg);
    }
  });

  OTA_INTERNATIONAL_SECTORS.forEach((sector, sIdx) => {
    for (let pIdx = 0; pIdx < sector.count; pIdx++) {
      const pkg = generateSynthesizedPackage(sector, sIdx + OTA_DOMESTIC_SECTORS.length, pIdx);
      all.push(pkg);
      lookup.set(pkg.id.toLowerCase(), pkg);
      lookup.set(pkg.slug.toLowerCase(), pkg);
    }
  });

  _memoizedAllCatalog = all;
  _memoizedLookupMap = lookup;

  return { all, lookup };
}

export function getAllCatalogPackages(): HolidayPackage[] {
  return initializeCatalog().all;
}

export function getCatalogPackageCount(): number {
  return initializeCatalog().all.length;
}

export function findCatalogPackage(
  destinationParam?: string,
  packageParam?: string
): HolidayPackage | undefined {
  const { lookup, all } = initializeCatalog();
  const decodedPkg = decodeURIComponent(packageParam || '').toLowerCase().trim();
  const decodedDest = decodeURIComponent(destinationParam || '').toLowerCase().trim();

  if (!decodedPkg && !decodedDest) return all[0];

  // 1. Exact ID match in DEMO_PACKAGES (Tier 1 Handcrafted priority)
  let matched = DEMO_PACKAGES.find((p) => p.id.toLowerCase() === decodedPkg);
  if (matched) return matched;

  // 2. Exact slug match in DEMO_PACKAGES
  matched = DEMO_PACKAGES.find((p) => p.slug.toLowerCase() === decodedPkg);
  if (matched) return matched;

  // 3. Match ID with pkg- prefix added or stripped
  if (decodedPkg) {
    matched = DEMO_PACKAGES.find((p) => p.id.toLowerCase() === 'pkg-' + decodedPkg);
    if (matched) return matched;

    const stripped = decodedPkg.replace(/^pkg-/, '');
    matched = DEMO_PACKAGES.find(
      (p) => p.slug.toLowerCase() === stripped || p.id.toLowerCase().replace(/^pkg-/, '') === stripped
    );
    if (matched) return matched;
  }

  // 4. Exact match in full catalog lookup map (O(1) for all 5,450 OTA packages)
  if (decodedPkg) {
    const direct = lookup.get(decodedPkg);
    if (direct) return direct;

    const stripped = decodedPkg.replace(/^pkg-/, '');
    const strippedMatch = lookup.get(stripped);
    if (strippedMatch) return strippedMatch;

    const withPrefix = lookup.get('pkg-' + decodedPkg);
    if (withPrefix) return withPrefix;
  }

  // 5. Substring match in DEMO_PACKAGES
  if (decodedPkg) {
    matched = DEMO_PACKAGES.find(
      (p) =>
        p.slug.toLowerCase().includes(decodedPkg) ||
        decodedPkg.includes(p.slug.toLowerCase()) ||
        p.name.toLowerCase().includes(decodedPkg)
    );
    if (matched) return matched;
  }

  // 6. Substring match in all OTA packages
  if (decodedPkg) {
    const otaSubstr = all.find(
      (p) =>
        p.slug.toLowerCase().includes(decodedPkg) ||
        decodedPkg.includes(p.slug.toLowerCase()) ||
        p.name.toLowerCase().includes(decodedPkg)
    );
    if (otaSubstr) return otaSubstr;
  }

  // 7. Destination match fallback
  if (decodedDest) {
    const destMatch = all.find(
      (p) =>
        p.destinationSlug.toLowerCase() === decodedDest ||
        p.destination.toLowerCase().includes(decodedDest)
    );
    if (destMatch) return destMatch;
  }

  return all[0];
}

export function getCatalogPackagesByDestination(destinationSlug: string): HolidayPackage[] {
  const all = getAllCatalogPackages();
  const target = destinationSlug.toLowerCase().trim();
  return all.filter((p) => p.destinationSlug.toLowerCase() === target || p.destination.toLowerCase().includes(target));
}
