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
  },
  {
    region: 'Mathura & Vrindavan',
    destinationSlug: 'mathura',
    country: 'India',
    regionCategory: 'Spiritual',
    isInternational: false,
    cities: ['Mathura', 'Vrindavan', 'Govardhan', 'Barsana', 'Gokul', 'Agra'],
    count: 140,
    minPrice: 5499,
    maxPrice: 32000,
    heroImage: '/destinations/mathura-vrindavan.jpg'
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
  },
  {
    region: 'Japan & South Korea',
    destinationSlug: 'japan',
    country: 'Japan',
    regionCategory: 'East Asia',
    isInternational: true,
    cities: ['Tokyo', 'Mount Fuji', 'Kyoto', 'Osaka', 'Nara', 'Hakone'],
    count: 110,
    minPrice: 95000,
    maxPrice: 285000,
    heroImage: '/destinations/japan.jpg'
  },
  {
    region: 'Switzerland Alpine Wonders',
    destinationSlug: 'switzerland',
    country: 'Switzerland',
    regionCategory: 'Europe',
    isInternational: true,
    cities: ['Zurich', 'Lucerne', 'Mount Titlis', 'Interlaken', 'Jungfraujoch', 'Bern'],
    count: 130,
    minPrice: 92000,
    maxPrice: 295000,
    heroImage: '/destinations/switzerland.jpg'
  },
  {
    region: 'South Africa & Safari',
    destinationSlug: 'south-africa',
    country: 'South Africa',
    regionCategory: 'Africa',
    isInternational: true,
    cities: ['Cape Town', 'Table Mountain', 'Cape Point', 'Boulders Beach', 'Kruger Safari', 'Johannesburg'],
    count: 85,
    minPrice: 85000,
    maxPrice: 265000,
    heroImage: '/destinations/south-africa.jpg'
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
  ],
  mathura: [
    '/destinations/mathura-vrindavan.jpg',
    '/destinations/verified/ayodhya-ram-mandir.jpg',
    '/destinations/spiritual.jpg',
  ],
  switzerland: [
    '/destinations/switzerland.jpg',
    '/destinations/verified/europe-jungfrau.jpg',
    '/destinations/europe.jpg',
  ],
  'south-africa': [
    '/destinations/south-africa.jpg',
    '/destinations/hero-holidays.jpg',
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

function getThemeRank(rawTheme: string, themeName: string): number {
  const t = (rawTheme + ' ' + themeName).toLowerCase();
  if (t.includes('budget')) return 0;
  if (t.includes('pilgrimage') || t.includes('spiritual')) return 1;
  if (t.includes('weekend')) return 2;
  if (t.includes('standard') || t.includes('holiday explorer')) return 3;
  if (t.includes('family')) return 4;
  if (t.includes('adventure') || t.includes('trek')) return 5;
  if (t.includes('wildlife') || t.includes('safari')) return 6;
  if (t.includes('honeymoon')) return 7;
  if (t.includes('luxury')) return 8;
  return 3;
}

function computeB2BPackagePricing(
  sector: SectorDefinition,
  themeObj: { raw: string; theme: string; suffix: string },
  nights: number,
  days: number,
  pkgIndex: number,
  durIndex: number
): { startingPrice: number; discountPrice: number } {
  const slug = sector.destinationSlug.toLowerCase();
  
  // 1. Destination Category & Base Room Night Rate (Per Room / Night for 2 Adults in 3★ / Standard)
  let baseRoomRate = 3400;
  let baseCabDaily = 3000;

  if (sector.isInternational) {
    if (['thailand', 'vietnam', 'nepal', 'sri-lanka'].includes(slug)) {
      baseRoomRate = 4800;
      baseCabDaily = 3800;
    } else if (['bali', 'indonesia', 'malaysia'].includes(slug)) {
      baseRoomRate = 5400;
      baseCabDaily = 4200;
    } else if (['dubai', 'uae', 'turkey', 'egypt', 'baku'].includes(slug)) {
      baseRoomRate = 7800;
      baseCabDaily = 4800;
    } else if (['singapore'].includes(slug)) {
      baseRoomRate = 9200;
      baseCabDaily = 5400;
    } else if (['maldives', 'mauritius'].includes(slug)) {
      baseRoomRate = 18000;
      baseCabDaily = 2500;
    } else if (['europe', 'switzerland'].includes(slug)) {
      baseRoomRate = 19500;
      baseCabDaily = 7800;
    } else if (['japan', 'south-africa'].includes(slug)) {
      baseRoomRate = 17000;
      baseCabDaily = 7200;
    } else if (['australia', 'usa'].includes(slug)) {
      baseRoomRate = 22000;
      baseCabDaily = 8800;
    } else {
      baseRoomRate = 6800;
      baseCabDaily = 4600;
    }
  } else {
    // Domestic India Categories
    // Budget/Plains & Spiritual: UP, Rajasthan, Gujarat, MP (₹3,200 – ₹4,200 per night)
    const isPlainsOrPilgrim = ['ayodhya', 'varanasi', 'mathura', 'rajasthan', 'gujarat', 'wildlife', 'maharashtra'].includes(slug);
    // Hill Stations & Backwaters: Himachal, Uttarakhand, Kerala, Coorg/Ooty (₹3,800 – ₹4,800 per night)
    const isHillOrBackwaters = ['himachal', 'uttarakhand', 'kerala', 'coorg', 'tamilnadu', 'goa'].includes(slug);
    // High-Cost / Island / Remote Circuits: Kashmir, Andaman, Ladakh, Sikkim/North-East (₹4,500 – ₹6,000 per night)
    const isRemoteOrIsland = ['kashmir', 'andaman', 'ladakh', 'sikkim', 'north-east', 'char-dham'].includes(slug);

    if (slug === 'ladakh') {
      baseRoomRate = 5600;
      baseCabDaily = 7200; // High mountain passes 4x4 heavy SUV
    } else if (slug === 'andaman') {
      baseRoomRate = 5200;
      baseCabDaily = 4000;
    } else if (isRemoteOrIsland) {
      baseRoomRate = 4800;
      baseCabDaily = 4200;
    } else if (isHillOrBackwaters) {
      baseRoomRate = 4200;
      baseCabDaily = 3800;
    } else if (isPlainsOrPilgrim) {
      baseRoomRate = 3400;
      baseCabDaily = 3000;
    } else {
      baseRoomRate = 3400;
      baseCabDaily = 3000;
    }
  }

  // Surcharges for specialized experiences (per person twin-sharing basis)
  let specialSupplement = 0;
  if (slug === 'kashmir') {
    specialSupplement = 2500; // Dal Lake Houseboat stay & Shikara
  } else if (slug === 'kerala') {
    specialSupplement = 4000; // Private Alleppey Houseboat with full board
  } else if (slug === 'rajasthan') {
    specialSupplement = 2000; // Jaisalmer Desert Camp with Camel Safari
  } else if (slug === 'andaman') {
    specialSupplement = 5000; // Catamaran cruise ferries
  } else if (['wildlife', 'corbett', 'kaziranga', 'south-africa'].includes(slug)) {
    specialSupplement = slug === 'south-africa' ? 7000 : 3500; // Dedicated 4x4 Jeep Safari
  } else if (slug === 'switzerland' || slug === 'europe') {
    specialSupplement = 7000; // Mt. Titlis Rotair Cable Car & Jungfraujoch
  } else if (slug === 'japan') {
    specialSupplement = 6000; // Shinkansen Bullet Train & Fuji Cruise
  }

  const pNight = baseRoomRate / 2;
  const pCab = baseCabDaily / 2;
  const rawStep = (pNight + pCab) * 1.22;
  
  // Ensure duration step is at least 5000 for domestic, and rounded to nearest 500
  // So the 9 themes of 500 span (0 to 4000) fit strictly inside the duration gap
  const durStep = Math.max(5000, Math.round(rawStep / 500) * 500);

  // Baseline for 3N/4D (durIndex 0)
  const base3N = Math.round(((3 * pNight) + (4 * pCab) + specialSupplement) * 1.22 / 500) * 500;
  
  // Duration tier base
  const durationBase = base3N + (durIndex * durStep);

  // Theme offset
  const themeRank = getThemeRank(themeObj.raw, themeObj.theme);
  const themeOffset = themeRank * 500;

  // Final psychological starting price (e.g. 14999, 18499, 22999)
  let finalStartingPrice = durationBase + themeOffset - 1;
  if (finalStartingPrice < 4999) finalStartingPrice = 4999;

  // Strikethrough price: strictly 15% to 22% higher than starting price
  const targetPct = 0.175 + ((pkgIndex % 4) * 0.009); // 17.5% to 20.2%
  let finalDiscountPrice = Math.round((finalStartingPrice * (1 + targetPct)) / 500) * 500 - 1;
  const diffPct = ((finalDiscountPrice - finalStartingPrice) / finalStartingPrice) * 100;
  if (diffPct < 15.0 || diffPct > 22.0) {
    finalDiscountPrice = Math.round((finalStartingPrice * 1.185) / 100) * 100 - 1;
  }

  return { startingPrice: finalStartingPrice, discountPrice: finalDiscountPrice };
}

function generateSynthesizedPackage(
  sector: SectorDefinition,
  sectorIndex: number,
  pkgIndex: number,
  durObj: { label: string; days: number; nights: number },
  themeObj: { raw: string; theme: string; suffix: string },
  durIdx?: number
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

  const effectiveDurIndex = durIdx ?? DURATIONS_CONFIG.findIndex(d => d.label === durObj.label);

  const { startingPrice, discountPrice } = computeB2BPackagePricing(
    sector,
    themeObj,
    durObj.nights,
    durObj.days,
    pkgIndex,
    effectiveDurIndex >= 0 ? effectiveDurIndex : 0
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
    batch_source: 'legacy',
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
    let durIdx = 0;
    for (const durObj of DURATIONS_CONFIG) {
      for (const themeObj of THEMES_CONFIG) {
        const pkg = generateSynthesizedPackage(sector, sIdx, pkgSeq, durObj, themeObj, durIdx);
        all.push(pkg);
        lookup.set(pkg.id.toLowerCase(), pkg);
        lookup.set(pkg.slug.toLowerCase(), pkg);
        lookup.set('pkg-' + pkg.slug.toLowerCase(), pkg);
        lookup.set(pkg.id.toLowerCase().replace(/^pkg-/, ''), pkg);
        pkgSeq++;
      }
      durIdx++;
    }
  });

  OTA_INTERNATIONAL_SECTORS.forEach((sector, sIdx) => {
    let durIdx = 0;
    for (const durObj of DURATIONS_CONFIG) {
      for (const themeObj of THEMES_CONFIG) {
        const pkg = generateSynthesizedPackage(
          sector,
          sIdx + OTA_DOMESTIC_SECTORS.length,
          pkgSeq,
          durObj,
          themeObj,
          durIdx
        );
        all.push(pkg);
        lookup.set(pkg.id.toLowerCase(), pkg);
        lookup.set(pkg.slug.toLowerCase(), pkg);
        lookup.set('pkg-' + pkg.slug.toLowerCase(), pkg);
        lookup.set(pkg.id.toLowerCase().replace(/^pkg-/, ''), pkg);
        pkgSeq++;
      }
      durIdx++;
    }
  });

  _memoizedAllCatalog = all;
  _memoizedLookupMap = lookup;

  return { all, lookup };
}

export function getAllCatalogPackages(): HolidayPackage[] {
  const baseCatalog = initializeCatalog().all;

  // In browser runtime, seamlessly merge user uploaded MMT Sync packages and honor legacy delete
  if (typeof window !== 'undefined') {
    try {
      const rawLegacyDeleted = localStorage.getItem('tc_cloud_legacy_deleted_v1');
      const isLegacyDeleted = rawLegacyDeleted ? JSON.parse(rawLegacyDeleted) : false;

      const rawCustom = localStorage.getItem('tc_cloud_custom_packages_v1');
      const customPackages: HolidayPackage[] = rawCustom ? JSON.parse(rawCustom) : [];

      const activeLegacy = isLegacyDeleted ? [] : baseCatalog;
      return [...customPackages, ...activeLegacy];
    } catch (e) {
      return baseCatalog;
    }
  }

  return baseCatalog;
}

export function getCatalogPackageCount(): number {
  return getAllCatalogPackages().length;
}

export function findCatalogPackage(
  param1?: string,
  param2?: string
): HolidayPackage | undefined {
  const all = getAllCatalogPackages();
  const { lookup } = initializeCatalog();
  const p1 = decodeURIComponent(param1 || '').toLowerCase().trim();
  const p2 = decodeURIComponent(param2 || '').toLowerCase().trim();

  if (!p1 && !p2) return all[0];

  // Candidates to test for exact package ID or slug match:
  // If p2 is provided, test p2 first (standard signature: findCatalogPackage(destination, packageSlug))
  const pkgCandidates = p2 ? [p2, p1] : [p1];

  for (const candidate of pkgCandidates) {
    if (!candidate) continue;

    // Direct lookup map match
    const direct = lookup.get(candidate);
    if (direct) return direct;

    const stripped = candidate.replace(/^pkg-/, '');
    const strippedMatch = lookup.get(stripped);
    if (strippedMatch) return strippedMatch;

    const withPrefix = lookup.get('pkg-' + candidate);
    if (withPrefix) return withPrefix;

    // Exact match across all packages (including custom MMT Sync packages)
    const exactMatch = all.find(
      (p) =>
        p.slug.toLowerCase() === candidate ||
        p.id.toLowerCase() === candidate ||
        candidate === p.slug.toLowerCase().replace(/^pkg-/, '') ||
        candidate === p.id.toLowerCase().replace(/^pkg-/, '')
    );
    if (exactMatch) return exactMatch;

    // Substring / Slug match across all packages
    const otaMatch = all.find(
      (p) =>
        p.slug.toLowerCase().includes(candidate) ||
        candidate.includes(p.slug.toLowerCase()) ||
        p.name.toLowerCase().includes(candidate)
    );
    if (otaMatch) return otaMatch;
  }

  // Destination match fallback: ONLY performed if no specific package slug (p2) was requested
  if (!p2) {
    const destCandidates = [p1];
    for (const dest of destCandidates) {
      if (!dest) continue;
      const destMatch = all.find(
        (p) =>
          p.destinationSlug.toLowerCase() === dest ||
          (p.citySlugs && p.citySlugs.includes(dest)) ||
          (p.stateSlug && p.stateSlug.toLowerCase() === dest) ||
          p.destination.toLowerCase().includes(dest)
      );
      if (destMatch) return destMatch;
    }
    return all[0];
  }

  return undefined;
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
