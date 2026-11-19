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
  // 1. Hotel Room Rate (User B2B Benchmarks)
  const isHill = ['kashmir', 'himachal', 'uttarakhand', 'ladakh', 'sikkim', 'darjeeling', 'spiti'].includes(sector.destinationSlug);
  const isPilgrimage = ['ayodhya', 'varanasi', 'char-dham', 'mathura', 'tirupati', 'ujjain', 'dwarka', 'puri', 'shirdi'].includes(sector.destinationSlug);

  // Default meal plan: Hill stations use MAP (Breakfast + Dinner), others use CP (Room + Breakfast)
  let roomNightRate = 3200; // 3 Star CP
  if (hotelTier === '3 Star') {
    roomNightRate = isHill ? 4000 : 3200;
  } else if (hotelTier === '4 Star') {
    roomNightRate = isHill ? 7200 : 5800;
  } else if (hotelTier === '5 Star') {
    roomNightRate = isHill ? 14000 : 11000;
  }

  // Pilgrimage high-demand circuit adjustment (+10%)
  if (isPilgrimage) {
    roomNightRate = Math.round(roomNightRate * 1.10);
  }

  // Special experience supplement per booking (Houseboats, Desert Safari Tents, Ferries, Safaris)
  let specialStay = 0;
  if (sector.destinationSlug === 'kashmir') {
    specialStay = 7500; // 1N Dal Lake Luxury 4★ Houseboat (MAP)
  } else if (sector.destinationSlug === 'kerala') {
    specialStay = 11500; // 1N Alleppey 1-Bedroom Private Houseboat (All Meals)
  } else if ((sector.destinationSlug === 'rajasthan' || sector.destinationSlug === 'jaisalmer') && pkgIndex % 2 === 0) {
    specialStay = 4500; // 1N Jaisalmer Desert Camp (Swiss Tent + Camel + Folk Dance + Dinner)
  } else if (sector.destinationSlug === 'andaman') {
    specialStay = 10400; // Makruzz / Nautika Private Cruise Ferry for 2 pax (PB -> Havelock -> Neil -> PB)
  } else if (['corbett', 'ranthambore', 'sasan-gir', 'kaziranga'].includes(sector.destinationSlug)) {
    specialStay = 7500; // Dedicated Jungle Jeep Safari (Permit + Gypsy + Guide)
  }

  const totalHotelCost = (nights * roomNightRate) + specialStay;

  // 2. Outstation Cab Rate (User B2B Cab Rate Card)
  let cabRatePerDay = 2800; // Plains Sedan Outstation Rate
  if (isHill) {
    cabRatePerDay = ['ladakh', 'spiti'].includes(sector.destinationSlug) ? 7200 : 3500; // Hill Sedan / 4x4
  } else if (sector.isInternational) {
    cabRatePerDay = 3500; // International airport & private transfers
  }

  const totalCabCost = days * cabRatePerDay;

  // Net Cost for 2 Adults (Twin Sharing 1 Room + 1 Dedicated Outstation Cab)
  const netCostForTwo = totalHotelCost + totalCabCost;

  // 20% Guaranteed Agency Profit Margin
  const sellingPriceForTwo = netCostForTwo * 1.20;

  // Base per-person starting rate (twin sharing)
  const startingPrice = Math.round((sellingPriceForTwo / 2) / 100) * 100;

  // MRP Strike-through price (25% higher teaser discount)
  const discountPrice = Math.round((startingPrice * 1.25) / 100) * 100;

  return { startingPrice, discountPrice };
}

const DESTINATION_ITINERARY_FLOWS: Record<string, { title: string; desc: string; acts: string[] }[]> = {
  kashmir: [
    { title: "Arrival in Srinagar & Dal Lake Shikara Ride", desc: "Arrive at Srinagar Airport. Meet our chauffeur and transfer to your luxury Dal Lake Houseboat. In the evening, enjoy a romantic Shikara ride through floating gardens and Char Chinar.", acts: ["Airport Pickup", "Dal Lake Shikara Ride", "Houseboat Check-in"] },
    { title: "Srinagar to Gulmarg Meadow of Flowers & Gondola Cable Car", desc: "Drive to Gulmarg (50 km). Ascend Apharwat Peak on the world-famous Gulmarg Gondola Cable Car (Phase 1 & 2). Marvel at snow-clad Himalayan peaks, explore the golf course and historic St. Mary Church.", acts: ["Gulmarg Gondola Ride", "Snow Activities at Apharwat Peak", "Golf Course View"] },
    { title: "Gulmarg to Pahalgam Valley of Shepherds via Saffron Fields", desc: "Journey to scenic Pahalgam (140 km). Enroute witness Pampore saffron fields and Awantipora temple ruins. Check in at your riverside hotel with views of the rushing Lidder River.", acts: ["Pampore Saffron Farms", "Awantipora Ruins", "Riverside Leisure"] },
    { title: "Pahalgam Exploration: Betaab Valley, Aru Valley & Chandanwari", desc: "Embark on an excursion to breathtaking Betaab Valley, scenic Aru Valley, and Chandanwari snow point. Capture stunning photography and enjoy a serene walk along pine forests.", acts: ["Betaab Valley Sightseeing", "Aru Valley Exploration", "Lidder River Walk"] },
    { title: "Pahalgam to Sonamarg Meadow of Gold & Thajiwas Glacier", desc: "Day trip to Sonamarg flanked by soaring Himalayan glaciers. Visit Thajiwas Glacier by pony or foot, explore the Sindh river valley, and return to Srinagar for hotel stay.", acts: ["Thajiwas Glacier Trek", "Sindh River View", "Srinagar Hotel Check-in"] },
    { title: "Mughal Gardens Heritage Tour & Srinagar Airport Departure Drop", desc: "Visit Shalimar Bagh, Nishat Bagh, and the sacred Shankaracharya Hill Temple. Pick up authentic Kashmiri saffron and dry fruits at Lal Chowk before your transfer to Srinagar Airport.", acts: ["Shalimar & Nishat Bagh", "Shankaracharya Temple", "Airport Drop"] }
  ],
  kerala: [
    { title: "Arrival in Kochi & Scenic Drive to Munnar Tea Country", desc: "Arrive at Kochi Airport. Board your private cab for the scenic drive to Munnar. Enroute, witness the cascading Cheeyappara and Valara waterfalls amidst lush spice plantations.", acts: ["Airport Pickup", "Cheeyappara Waterfalls", "Munnar Resort Check-in"] },
    { title: "Munnar Tea Gardens, Eravikulam National Park & Mattupetty Dam", desc: "Visit Eravikulam National Park to spot the rare Nilgiri Tahr. Explore Mattupetty Dam, Echo Point, Kundala Lake, and the Tata Tea Museum with tea tasting session.", acts: ["Eravikulam Tahr Spotting", "Mattupetty Dam Boating", "Tea Museum Tour"] },
    { title: "Munnar to Thekkady Spice Plantations & Periyar Boat Safari", desc: "Scenic mountain drive to Thekkady. Tour organic cardamom, cinnamon, and pepper spice plantations. In the afternoon, enjoy a boat safari on Periyar Lake inside the tiger reserve.", acts: ["Spice Plantation Tour", "Periyar Boat Safari", "Kathakali Cultural Show"] },
    { title: "Thekkady to Alleppey: Private Backwater Houseboat Cruise", desc: "Drive to Alleppey backwaters. Board your private AC Houseboat. Cruise through palm-fringed canals, Vembanad Lake, and paddy fields while enjoying fresh traditional Kerala meals.", acts: ["Houseboat Check-in", "Backwater Cruise", "Traditional Kerala Meals"] },
    { title: "Alleppey to Kovalam Beach Promenade & Lighthouse Sunset", desc: "Disembark from the houseboat and drive to Kovalam. Check in at your beach resort. Spend a relaxing afternoon at Lighthouse Beach and Hawa Beach watching the Arabian Sea sunset.", acts: ["Kovalam Beach Promenade", "Lighthouse Sunset View", "Seafood Tasting"] },
    { title: "Kochi Fort Heritage Walk, Chinese Fishing Nets & Airport Drop", desc: "Transfer to Kochi. Visit historic Fort Kochi, St. Francis Church, Dutch Palace, and witness the iconic Chinese Fishing Nets in action before your return airport transfer.", acts: ["Fort Kochi Heritage", "Chinese Fishing Nets", "Airport Departure"] }
  ],
  himachal: [
    { title: "Arrival in Shimla & Evening Leisure on The Ridge & Mall Road", desc: "Arrive at Chandigarh / Kalka and drive to Shimla queen of hills. Check in at your hotel. In the evening, stroll along the pedestrian-only Mall Road, Scandal Point, and Christ Church.", acts: ["Scenic Hill Drive", "Mall Road Promenade", "Christ Church Visit"] },
    { title: "Kufri Snow Viewpoint, Green Valley & Jakhoo Temple", desc: "Full day excursion to Kufri. Enjoy panoramic Himalayan snow peak views from Mahasu Peak, visit Himalayan Nature Park, and take blessings at the hilltop Jakhoo Hanuman Temple.", acts: ["Kufri Snow Excursion", "Green Valley Photography", "Jakhoo Ropeway"] },
    { title: "Scenic Mountain Drive from Shimla to Manali via Kullu Valley", desc: "Picturesque journey to Manali. Enroute visit Pandoh Dam, Hanogi Mata Temple, and a traditional Kullu Shawl weaving factory. Check in at your riverside Manali resort.", acts: ["Kullu Valley Drive", "Pandoh Dam Stopover", "Manali Check-in"] },
    { title: "Solang Valley Adventure & Atal Tunnel Snow Expedition", desc: "Excursion to Solang Valley for paragliding and zorbing. Drive through the historic engineering marvel Atal Tunnel into Sissu Lahaul Valley for pristine snow photography.", acts: ["Solang Valley Adventure", "Atal Tunnel Drive", "Sissu Waterfall View"] },
    { title: "Manali Local Heritage: Hadimba Temple, Vashisht & Old Manali", desc: "Visit the 500-year-old wooden Hadimba Devi Temple amidst giant deodars, Club House, Tibetan Monastery, and the natural sulphur hot springs of Vashisht Village.", acts: ["Hadimba Temple Darshan", "Vashisht Hot Springs", "Old Manali Cafes"] },
    { title: "Breakfast, Souvenir Shopping on Mall Road & Departure Drop", desc: "Enjoy a hearty breakfast. Complete hotel check-out. Pick up fresh Himachal apples, jams, and warm woollens from Mall Road before your chauffeur drops you at the departure terminal.", acts: ["Mall Road Shopping", "Hotel Check-out", "Airport / Station Drop"] }
  ],
  rajasthan: [
    { title: "Arrival in Jaipur Pink City & Chokhi Dhani Cultural Evening", desc: "Arrive at Jaipur Airport/Station. Check in at your heritage hotel. In the evening, visit Birla Mandir and experience authentic Rajasthani village culture and cuisine at Chokhi Dhani.", acts: ["Airport Pickup", "Birla Mandir Visit", "Chokhi Dhani Cultural Show"] },
    { title: "Jaipur Forts & Palaces: Amber Fort, Hawa Mahal & City Palace", desc: "Ascend the majestic Amber Fort by jeep. Stop at Jal Mahal for photographs. Tour the City Palace museum, Maharaja observatory at Jantar Mantar, and the iconic facade of Hawa Mahal.", acts: ["Amber Fort Jeep Ride", "Hawa Mahal Photography", "City Palace Museum"] },
    { title: "Jaipur to Jodhpur Blue City via Ajmer Sharif & Pushkar", desc: "Drive to Jodhpur. Enroute pay respects at Ajmer Dargah Sharif and the sacred Brahma Temple & Holy Lake in Pushkar. Check in at your Jodhpur heritage property.", acts: ["Ajmer Dargah Ziyarat", "Pushkar Lake Darshan", "Jodhpur Check-in"] },
    { title: "Mehrangarh Fort Grandeur & Drive to Jaisalmer Golden Sand Dunes", desc: "Tour the imposing Mehrangarh Fort towering above the blue city, and Jaswant Thada marble cenotaphs. Drive into the Thar Desert to Jaisalmer Sam Sand Dunes luxury Swiss camps.", acts: ["Mehrangarh Fort Tour", "Jaswant Thada Cenotaphs", "Desert Camp Check-in"] },
    { title: "Jaisalmer Fort (Sonar Qila), Patwon Ki Haveli & Camel Sunset Safari", desc: "Explore the living golden fortress of Jaisalmer, Jain Temples, and intricate carvings of Patwon Ki Haveli. In the evening, enjoy a thrilling camel safari and Rajasthani folk dance.", acts: ["Sonar Qila Walking Tour", "Patwon Haveli Carvings", "Camel Dunes Safari"] },
    { title: "Drive to Udaipur City of Lakes, Lake Pichola Boat Ride & Departure", desc: "Scenic drive to romantic Udaipur. Visit the grand City Palace complex, Saheliyon Ki Bari fountain gardens, and enjoy an enchanting boat ride on Lake Pichola past Jag Mandir before departure drop.", acts: ["Udaipur City Palace", "Lake Pichola Boat Cruise", "Airport Drop"] }
  ],
  goa: [
    { title: "Arrival in Goa, Coastal Resort Check-in & Beach Sunset Leisure", desc: "Arrive at Goa Airport. Private AC transfer to your beach resort. Spend a relaxing evening watching the sunset at Calangute Beach or enjoying beach shack dining with fresh seafood.", acts: ["Airport Meet & Greet", "Resort Welcome", "Sunset Beach Leisure"] },
    { title: "North Goa Forts & Beaches: Fort Aguada, Baga & Water Sports", desc: "Visit 17th-century Portuguese Fort Aguada with panoramic views of the Arabian Sea. Head to Baga and Anjuna beach for optional parasailing, jet ski, and bumper rides.", acts: ["Fort Aguada Lighthouse", "Baga Beach Promenade", "Water Sports Activities"] },
    { title: "South Goa Heritage: Old Goa Churches, Mangueshi & Miramar Beach", desc: "Tour UNESCO World Heritage churches in Old Goa including Basilica of Bom Jesus and Se Cathedral. Visit Mangueshi Temple and Dona Paula viewpoint.", acts: ["Bom Jesus Basilica", "Se Cathedral Tour", "Dona Paula Viewpoint"] },
    { title: "Dudhsagar Waterfalls Jeep Safari & Mandovi River Luxury Cruise", desc: "Thrilling morning 4x4 Jeep Safari through Bhagwan Mahavir Wildlife Sanctuary to the majestic Dudhsagar Waterfalls. In the evening, enjoy a 1-hour Mandovi River sunset cruise with Goan folk music.", acts: ["Dudhsagar Jeep Safari", "Jungle Stream Snorkeling", "Mandovi Sunset Cruise"] },
    { title: "Breakfast, Souvenir Shopping in Panaji Latin Quarter & Airport Drop", desc: "Enjoy breakfast at the resort. Take a stroll through Fontainhas (Panaji colourful Latin Quarter) to shop for Goan feni, cashews, and handicrafts before your private transfer to the airport.", acts: ["Fontainhas Heritage Walk", "Cashew & Souvenir Shopping", "Airport Departure"] }
  ],
  uttarakhand: [
    { title: "Arrival in Haridwar / Dehradun & Evening Ganga Aarti", desc: "Arrive at Dehradun Airport or Haridwar Railway Station. Private transfer to your hotel. In the evening, witness the divine Ganga Aarti at Har Ki Pauri with thousands of floating earthen lamps.", acts: ["Station / Airport Pickup", "Hotel Check-in", "Har Ki Pauri Ganga Aarti"] },
    { title: "Rishikesh White Water Rafting, Ram Jhula & Beatles Ashram", desc: "Drive to Rishikesh adventure capital. Experience thrilling grade-III white water rafting from Shivpuri to Rishikesh. Walk across suspension bridges Ram Jhula and Laxman Jhula, and visit the historic Beatles Ashram.", acts: ["White Water Rafting", "Ram Jhula Walk", "Beatles Ashram Tour"] },
    { title: "Scenic Drive to Mussoorie Queen of Hills via Kempty Falls", desc: "Drive up the winding hills to Mussoorie. Stop at cascading Kempty Falls. Check in at your hill resort. Spend the evening strolling along Camel Back Road and Mall Road.", acts: ["Kempty Falls Excursion", "Mall Road Promenade", "Camel Back Road Sunset"] },
    { title: "Mussoorie to Nainital Lake District via Corbett Foothills", desc: "Scenic mountain journey to charming Nainital. Check in at your lakeview hotel. Enjoy a serene evening pedal boat ride on emerald Naini Lake and visit sacred Naina Devi Temple.", acts: ["Naini Lake Boating", "Naina Devi Temple Darshan", "Tibetan Market Shopping"] },
    { title: "Nainital Lake Tour: Bhimtal, Naukuchiatal & Snow View Point", desc: "Explore the surrounding lake district: Bhimtal with its island aquarium, Naukuchiatal nine-cornered lake, and take the aerial ropeway cable car up to Snow View Point for Himalayan vistas.", acts: ["Bhimtal Island Tour", "Naukuchiatal Exploration", "Aerial Ropeway View"] },
    { title: "Jim Corbett Safari Morning Slot & Delhi / Dehradun Departure Drop", desc: "Morning open Jeep Safari into Jim Corbett National Park to spot wild elephants, deer, and the elusive Royal Bengal Tiger. Breakfast at resort followed by private departure transfer.", acts: ["Corbett Jeep Safari", "Wildlife Photography", "Departure Airport Drop"] }
  ],
  andaman: [
    { title: "Arrival in Port Blair, Cellular Jail & Light and Sound Show", desc: "Arrive at Veer Savarkar Airport Port Blair. Transfer to your hotel. Visit Cellular Jail National Memorial to witness the poignant Sound & Light Show recounting India freedom struggle.", acts: ["Airport Pickup", "Cellular Jail Visit", "Sound & Light Show"] },
    { title: "Private Cruise Ferry (Makruzz) to Havelock Island & Radhanagar Sunset", desc: "Board high-speed luxury catamaran ferry Makruzz to Havelock Island. Check in at your beachfront resort. In the afternoon, visit Radhanagar Beach (Beach No. 7) for a mesmerizing sunset.", acts: ["Makruzz Catamaran Cruise", "Havelock Resort Check-in", "Radhanagar Beach Sunset"] },
    { title: "Elephant Beach Coral Reef Expedition & Marine Water Sports", desc: "Speedboat ride to Elephant Beach renowned for vibrant coral reefs. Enjoy included snorkeling session and optional scuba diving, sea walking, or glass-bottom boat rides.", acts: ["Elephant Beach Speedboat", "Snorkeling Coral Session", "Marine Watersports"] },
    { title: "Inter-Island Ferry to Neil Island: Bharatpur & Natural Rock Bridge", desc: "Cruise to tranquil Neil Island. Explore the white sands of Bharatpur Beach, visit the geological marvel Natural Living Coral Bridge, and witness the golden sunset at Laxmanpur Beach.", acts: ["Neil Island Cruise", "Natural Bridge Photography", "Laxmanpur Sunset"] },
    { title: "Neil Island to Port Blair Return & Chidiya Tapu Sunset", desc: "Morning return ferry to Port Blair. Afternoon excursion to Chidiya Tapu (Bird Island), known for lush mangrove forests and the finest sunset panorama in south Andaman.", acts: ["Return Ferry to PB", "Chidiya Tapu Excursion", "Sagarika Emporium Shopping"] },
    { title: "Breakfast, Souvenir Keepsakes & Airport Departure Drop", desc: "Enjoy your last island breakfast. Complete check-out. Pick up authentic shell handicrafts and pearls before your private chauffeur transfers you to Port Blair Airport for your onward flight.", acts: ["Hotel Check-out", "Pearl Souvenir Shopping", "Airport Departure Drop"] }
  ],
  ladakh: [
    { title: "Arrival in Leh Airport, Acclimatization & Shanti Stupa Sunset", desc: "Fly into Leh Airport (3,500m). Transfer to your hotel. Complete rest for acclimatization. In the evening, visit Shanti Stupa for panoramic 360-degree views of Leh town and Leh Palace.", acts: ["Airport Meet & Greet", "Complete Acclimatization Rest", "Shanti Stupa Sunset"] },
    { title: "Sham Valley Tour: Hall of Fame, Magnetic Hill & Indus-Zanskar Sangam", desc: "Scenic drive along Indus Highway. Visit Kargil war memorial Hall of Fame, gravity-defying Magnetic Hill, sacred Gurudwara Pathar Sahib, and the dramatic confluence of Indus and Zanskar rivers.", acts: ["Hall of Fame Museum", "Magnetic Hill Experience", "Sangam Confluence View"] },
    { title: "Leh to Nubra Valley via Khardung La Pass (Highest Motorroad)", desc: "Cross legendary Khardung La Pass (18,380 ft). Descend into the picturesque Nubra Valley. Check in at deluxe Swiss camps in Hunder. Ride double-humped Bactrian camels across white sand dunes.", acts: ["Khardung La Pass Crossing", "Hunder Sand Dunes Walk", "Bactrian Camel Safari"] },
    { title: "Nubra Valley Diskit Monastery to Pangong Tso Lake via Shyok River", desc: "Visit the 106-foot Maitreya Buddha statue at Diskit Monastery. Scenic drive along Shyok River to world-famous Pangong Tso Lake (14,270 ft). Marvel at shifting turquoise and azure shades at sunset.", acts: ["Diskit Monastery Statue", "Shyok River Route", "Pangong Tso Sunset View"] },
    { title: "Pangong Lake Sunrise & Return to Leh via Chang La Pass", desc: "Capture unforgettable sunrise reflections over Pangong Lake. Journey back to Leh crossing Chang La Pass (17,590 ft). Enroute visit Hemis and Thiksey monasteries.", acts: ["Pangong Sunrise Photography", "Chang La Pass Crossing", "Thiksey Monastery Darshan"] },
    { title: "Breakfast, Leh Main Bazaar Pashmina Shopping & Airport Drop", desc: "Enjoy breakfast in the trans-Himalayan morning sun. Visit Leh Main Bazaar for authentic Ladakhi apricots and certified Pashmina shawls before your early morning airport departure drop.", acts: ["Leh Bazaar Shopping", "Pashmina & Apricot Buying", "Airport Transfer Drop"] }
  ]
};

function getBrandedHotelName(city: string, hotelTier: string): string {
  if (hotelTier === '5 Star' || hotelTier === 'Luxury Resort') {
    return city + ' Radisson Blu / Grand Marriott Palace Resort';
  }
  if (hotelTier === '4 Star') {
    return city + ' Lemon Tree Premier / The Fern Resort & Suites';
  }
  return city + ' Sarovar Portico / Treebo Prime Comfort Inn';
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
  const hotelTier = HOTEL_TIERS[pkgIndex % HOTEL_TIERS.length];

  const { startingPrice, discountPrice } = computeB2BPackagePricing(
    sector,
    hotelTier,
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
