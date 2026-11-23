import { HolidayPackage, ItineraryDay } from './packagesData';
import { getSectorCircuit } from './catalogCircuits';

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
    cities: ['Ayodhya', 'Varanasi', 'Prayagraj', 'Lucknow', 'Hanuman Garhi', 'Kanak Bhawan'],
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
    cities: ['Varanasi', 'Prayagraj', 'Ayodhya', 'Sarnath', 'Dashashwamedh Ghat', 'Assi Ghat'],
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

function generateSynthesizedPackage(
  sector: SectorDefinition,
  sectorIndex: number,
  pkgIndex: number,
  durObj: { label: string; days: number; nights: number },
  themeObj: { raw: string; theme: string; suffix: string }
): HolidayPackage {
  // All package cards across the catalog strictly default to 3-Star Standard baseline pricing
  const hotelTier = '3-Star Standard';

  const circuit = getSectorCircuit(
    sector,
    durObj.days,
    durObj.nights,
    pkgIndex,
    hotelTier
  );

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
  const id = 'pkg-ota-' + prefix + '-' + (sectorIndex + 1) + '-' + pkgIndex;
  const name = sector.region + ' – ' + circuit.circuitTitle + ' ' + themeObj.raw + ' (' + durObj.label + ')';
  const slug = sector.destinationSlug + '-' + slugify(circuit.entryCity) + '-' + slugify(themeObj.raw) + '-' + durObj.days + 'd' + durObj.nights + 'n-' + (sectorIndex + 1) + '-' + pkgIndex;

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

  // Build clean night-stay breakdown string for the package card (e.g. 2N Munnar • 1N Thekkady • 1N Alleppey Houseboat • 1N Kovalam)
  const stayBreakdown = circuit.hotels.map((h) => `${h.nights}N ${h.city}`).join(' • ');

  // Theme-specific tailored highlight
  const themeHighlights = HIGHLIGHTS_MAP[themeObj.theme] || [];
  const combinedHighlights = [
    stayBreakdown,
    ...circuit.highlights.slice(0, 3),
    ...themeHighlights.slice(0, 1)
  ];

  return {
    id,
    name,
    slug,
    destination: circuit.entryCity + ', ' + sector.region,
    destinationSlug: sector.destinationSlug,
    state: sector.region,
    stateSlug: sector.destinationSlug,
    coveredCities: circuit.coveredCities,
    citySlugs: circuit.citySlugs,
    entryCity: circuit.entryCity,
    exitCity: circuit.exitCity,
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
    highlights: combinedHighlights,
    inclusions: circuit.inclusions,
    exclusions: circuit.exclusions,
    theme: themeObj.theme,
    hotelCategory: hotelTier,
    mealPlan: 'Breakfast Included',
    flightsIncluded: false,
    transfersIncluded: true,
    departureCity: 'Ex-Delhi / Flexible Origin',
    itinerary: circuit.itinerary,
    hotels: circuit.hotels,
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

  // Generate 100% clean, non-duplicate master packages (Industry Standard Architecture)
  let pkgSeq = 1;
  OTA_DOMESTIC_SECTORS.forEach((sector, sIdx) => {
    for (const durObj of DURATIONS_CONFIG) {
      for (const themeObj of THEMES_CONFIG) {
        const pkg = generateSynthesizedPackage(sector, sIdx, pkgSeq, durObj, themeObj);
        all.push(pkg);
        lookup.set(pkg.id.toLowerCase(), pkg);
        lookup.set(pkg.slug.toLowerCase(), pkg);
        lookup.set('pkg-' + pkg.slug.toLowerCase(), pkg);
        lookup.set(pkg.id.toLowerCase().replace(/^pkg-/, ''), pkg);
        pkgSeq++;
      }
    }
  });

  OTA_INTERNATIONAL_SECTORS.forEach((sector, sIdx) => {
    for (const durObj of DURATIONS_CONFIG) {
      for (const themeObj of THEMES_CONFIG) {
        const pkg = generateSynthesizedPackage(
          sector,
          sIdx + OTA_DOMESTIC_SECTORS.length,
          pkgSeq,
          durObj,
          themeObj
        );
        all.push(pkg);
        lookup.set(pkg.id.toLowerCase(), pkg);
        lookup.set(pkg.slug.toLowerCase(), pkg);
        lookup.set('pkg-' + pkg.slug.toLowerCase(), pkg);
        lookup.set(pkg.id.toLowerCase().replace(/^pkg-/, ''), pkg);
        pkgSeq++;
      }
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

  // 1. Exact match in full catalog lookup map (O(1))
  if (decodedPkg) {
    const direct = lookup.get(decodedPkg);
    if (direct) return direct;

    const stripped = decodedPkg.replace(/^pkg-/, '');
    const strippedMatch = lookup.get(stripped);
    if (strippedMatch) return strippedMatch;

    const withPrefix = lookup.get('pkg-' + decodedPkg);
    if (withPrefix) return withPrefix;
  }

  // 2. Substring match in all verified packages
  if (decodedPkg) {
    const otaSubstr = all.find(
      (p) =>
        p.slug.toLowerCase().includes(decodedPkg) ||
        decodedPkg.includes(p.slug.toLowerCase()) ||
        p.name.toLowerCase().includes(decodedPkg)
    );
    if (otaSubstr) return otaSubstr;
  }

  // 3. Destination match fallback
  if (decodedDest) {
    const destMatch = all.find(
      (p) =>
        p.destinationSlug.toLowerCase() === decodedDest ||
        (p.citySlugs && p.citySlugs.includes(decodedDest)) ||
        (p.stateSlug && p.stateSlug.toLowerCase() === decodedDest) ||
        p.destination.toLowerCase().includes(decodedDest)
    );
    if (destMatch) return destMatch;
  }

  return all[0];
}

export function getCatalogPackagesByDestination(destinationSlug: string): HolidayPackage[] {
  const all = getAllCatalogPackages();
  const target = destinationSlug.toLowerCase().trim();
  return all.filter(
    (p) =>
      p.destinationSlug.toLowerCase() === target ||
      (p.stateSlug && p.stateSlug.toLowerCase() === target) ||
      (p.citySlugs && p.citySlugs.includes(target)) ||
      (p.coveredCities && p.coveredCities.some((c) => slugify(c) === target || c.toLowerCase().includes(target))) ||
      p.destination.toLowerCase().includes(target)
  );
}
