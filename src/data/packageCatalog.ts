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
  },
  {
    region: 'Andhra Pradesh & Hyderabad',
    destinationSlug: 'andhra-pradesh',
    country: 'India',
    regionCategory: 'South India',
    isInternational: false,
    cities: ['Hyderabad', 'Ramoji Film City', 'Golconda', 'Charminar', 'Secunderabad', 'Tirupati'],
    count: 150,
    minPrice: 14999,
    maxPrice: 42000,
    heroImage: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop'
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

export const HYDERABAD_PREMIUM_PACKAGE: HolidayPackage = {
  id: 'pkg-mmt-andhra-pradesh-premium-hyderabad-getaway-3n4d-4d3n-mmt-5',
  slug: 'andhra-pradesh-premium-hyderabad-getaway-3n4d-4d3n-mmt-5',
  name: 'Premium Hyderabad Getaway (3N/4D)',
  destination: 'Andhra Pradesh',
  destinationSlug: 'andhra-pradesh',
  state: 'Andhra Pradesh & Telangana',
  stateSlug: 'andhra-pradesh',
  country: 'India',
  region: 'South India',
  isInternational: false,
  durationDays: 4,
  durationNights: 3,
  startingPrice: 19999,
  discountPrice: 24999,
  rating: 4.9,
  reviewsCount: 168,
  heroImage: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80&fm=webp&fit=crop',
  ],
  highlights: [
    'Handpicked 5-Star Luxury Accommodations at Courtyard by Marriott Hyderabad',
    'Exclusive VIP Guided Charminar, Mecca Masjid & Chowmahalla Palace Heritage Walk',
    'Full-Day Ramoji Film City Grand Studio Experience with Express Passes',
    'Golconda Fort Sound & Light Show & Royal Qutb Shahi Tombs Tour',
    'Private AC Sedan Cab reserved exclusively for your travel group',
    'Daily Lavish Buffet Breakfast & Chef-Crafted Multi-Cuisine Dinners',
  ],
  inclusions: [
    '3 Nights accommodation in 5-Star Luxury Hotel (Courtyard by Marriott Hyderabad)',
    'Daily Lavish Buffet Breakfast and Chef-Crafted Dinners (MAP Plan)',
    'Private AC Sedan vehicle for all airport/station transfers and scheduled sightseeing',
    'Full-day excursion to Ramoji Film City with entry tickets included',
    'Evening heritage boat cruise at Hussain Sagar Lake with Buddha statue views',
    'All toll taxes, parking charges, interstate permits, fuel, and driver allowances',
    'Dedicated 24x7 Trip Customizer on-trip concierge assistance',
  ],
  exclusions: [
    'Airfare or train tickets (available upon request at actual flight rates)',
    'Monument camera fees, joy rides, and personal adventure activities',
    'Personal expenses such as laundry, room service, alcoholic beverages, and tips',
    'Any services or meals not explicitly mentioned in the inclusions list',
  ],
  itinerary: [
    {
      dayNumber: 1,
      title: 'Arrival in Hyderabad & Iconic Charminar & Chowmahalla Palace Heritage Tour',
      description: 'Arrive at Rajiv Gandhi International Airport (HYD) or Hyderabad / Secunderabad Railway Station. Meet our private chauffeur and transfer to your luxury hotel. After refreshment, proceed on an enchanting heritage tour covering the world-famous Charminar, historic Mecca Masjid, the perfume and bangle lanes of Laad Bazaar, and the royal Chowmahalla Palace of the Nizams. In the evening, savor authentic Hyderabadi cuisine.',
      meals: ['Dinner'],
      activities: [
        'Private Airport / Railway Station Pickup & Luxury Hotel Check-in',
        'Charminar & Historic Mecca Masjid Heritage Walk',
        'Chowmahalla Palace Nizam State Rooms & Vintage Car Gallery',
        'Laad Bazaar Traditional Choodi & Ittar Shopping Walk',
      ],
      hotel: 'Courtyard by Marriott Hyderabad',
      transfers: 'Private AC Cab Airport / Station Pickup & City Sightseeing',
    },
    {
      dayNumber: 2,
      title: 'Full-Day Ramoji Film City Grand Studio Tour & Thematic Shows',
      description: 'Begin the day with an indulgent buffet breakfast at the hotel. Board your private vehicle for a full-day excursion to Ramoji Film City—the Guinness World Record holder as the world’s largest integrated film studio complex. Explore magnificent film sets, the Japanese Garden, action stunt shows, live dance performances at Eureka, the Action Studio, and cinematic illusions. Return to the hotel by evening for dinner and leisure.',
      meals: ['Breakfast', 'Dinner'],
      activities: [
        'Full-Day Excursion to Ramoji Film City with Guided Studio Tour',
        'Live Action Stunt Shows & Eureka Cultural Performances',
        'Film Set Explorations (Bahubali Sets, London Street & Mughal Gardens)',
        'Eco-Zone Bird Park & Butterfly Garden Exploration',
      ],
      hotel: 'Courtyard by Marriott Hyderabad',
      transfers: 'Private AC Cab for Full-Day Ramoji Film City Excursion',
    },
    {
      dayNumber: 3,
      title: 'Golconda Fort, Royal Qutb Shahi Tombs, Salar Jung Museum & Hussain Sagar Sunset',
      description: 'After morning breakfast, head to the majestic Golconda Fort—a legendary medieval citadel renowned for its acoustic engineering and diamond vaults (once home to the Koh-i-Noor). Continue to the nearby Qutb Shahi Tombs with their grand domed architecture. Next, visit the world-famous Salar Jung Museum, housing extraordinary rare artifacts and the Veiled Rebecca statue. Finish the day with a serene boat ride on Hussain Sagar Lake offering panoramic sunset views of the monolithic Buddha Statue and Birla Mandir on Naubat Pahad.',
      meals: ['Breakfast', 'Dinner'],
      activities: [
        'Golconda Fort Citadel Tour with Acoustic Clapping Portico & Royal Pavilions',
        'Qutb Shahi Royal Tombs & Garden Monuments Tour',
        'Salar Jung Museum Artifacts & Musical Clock Viewing',
        'Hussain Sagar Lake Scenic Sunset Boat Cruise to Buddha Statue',
        'Birla Mandir White Marble Temple Visit on Naubat Pahad',
      ],
      hotel: 'Courtyard by Marriott Hyderabad',
      transfers: 'Private AC Cab for Full-Day Heritage & Lake Sightseeing',
    },
    {
      dayNumber: 4,
      title: 'Shilparamam Cultural Village & Airport / Station Departure Transfer',
      description: 'Savor a leisurely buffet breakfast at your hotel. Complete hotel check-out formalities. Depending on your flight or train schedule, visit Shilparamam Arts & Crafts Village to shop for authentic handlooms, pearls, and brass artifacts, or explore Hitec City Cyber Towers. Your chauffeur will provide a smooth transfer to Rajiv Gandhi International Airport (HYD) or Railway Station for your onward journey with unforgettable memories.',
      meals: ['Breakfast'],
      activities: [
        'Morning Buffet Breakfast & Smooth Luxury Hotel Check-out',
        'Shilparamam Cultural Arts & Crafts Village Handloom Shopping',
        'Private AC Vehicle Drop to Airport / Railway Station',
      ],
      hotel: 'Check-out completed (Departure Day)',
      transfers: 'Private AC Cab Departure Airport / Railway Station Drop',
    },
  ],
  hotels: [
    {
      name: 'Courtyard by Marriott Hyderabad',
      city: 'Hyderabad',
      rating: '4.9',
      nights: 3,
    },
  ],
  faqs: [
    {
      question: 'Is Premium Hyderabad Getaway 100% customizable?',
      answer: 'Yes! You can customize your hotel tier between 4-Star Deluxe and 5-Star Luxury, adjust night stays, add extra sightseeing (like Snow World or Wonderla), or include flight bookings.',
    },
    {
      question: 'Which hotels are provided in 4-Star Deluxe and 5-Star Luxury tiers?',
      answer: 'For 5-Star Luxury, accommodations are provided at Courtyard by Marriott Hyderabad with complimentary lavish buffet breakfast. For 4-Star Deluxe, stays are arranged at Grand Continent Premier Banjara Hills.',
    },
    {
      question: 'Are Ramoji Film City entry tickets included in this tour package?',
      answer: 'Yes, full-day Ramoji Film City entry tickets with studio tours and live entertainment shows are included in this package along with private round-trip vehicle transfers.',
    },
    {
      question: 'Is airport pickup and drop included in the package?',
      answer: 'Yes, dedicated round-trip private AC cab transfers from Rajiv Gandhi International Airport (HYD) or Secunderabad/Hyderabad Railway Station are fully included.',
    },
  ],
  theme: 'Luxury Getaway',
  hotelCategory: '5-Star Luxury',
  mealPlan: 'Daily Buffet Breakfast & Dinner',
  flightsIncluded: false,
  transfersIncluded: true,
  departureCity: 'Flexible Origin / Hyderabad Pickup',
  batch_source: 'mmt_sync',
};

export const HYDERABAD_CITYSCAPE_PACKAGE: HolidayPackage = {
  id: 'pkg-mmt-andhra-pradesh-hyderabad-cityscape-escape-4n5d-5d4n-mmt-1',
  slug: 'andhra-pradesh-hyderabad-cityscape-escape-4n5d-5d4n-mmt-1',
  name: 'Hyderabad Cityscape Escape (4N/5D)',
  destination: 'Andhra Pradesh',
  destinationSlug: 'andhra-pradesh',
  state: 'Andhra Pradesh & Telangana',
  stateSlug: 'andhra-pradesh',
  country: 'India',
  region: 'South India',
  isInternational: false,
  durationDays: 5,
  durationNights: 4,
  startingPrice: 14999,
  discountPrice: 18999,
  rating: 4.8,
  reviewsCount: 142,
  heroImage: 'https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=1200&q=80&fm=webp&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80&fm=webp&fit=crop',
  ],
  highlights: [
    'Full-Day Ramoji Film City studio tour & Snow World indoor snow park',
    'Nizam Heritage Trail: Charminar, Mecca Masjid & Chowmohalla Palace',
    'World-famous Salarjung Museum & Hyderabadi pearl shopping',
    'Hussain Sagar Lake boat cruise to monolithic Buddha statue',
    'Verified Stay at The Cent Hotel Hyderabad (3★ Standard)',
    'Private AC Sedan Cab reserved exclusively for your travel group',
  ],
  inclusions: [
    '4 Nights stay in verified 3-Star Standard hotel (The Cent Hotel Hyderabad)',
    'Daily Breakfast & Dinner Included (MAP Plan)',
    'Private AC Sedan vehicle for all airport/station transfers and scheduled sightseeing',
    'Full-day Ramoji Film City tour excursion with entry passes included',
    'Hussain Sagar Lake boat cruise ticket to monolithic Buddha statue',
    'All toll taxes, parking fees, driver allowance, and 5% GST included',
    '24x7 Trip Customizer on-trip phone assistance',
  ],
  exclusions: [
    'Airfare or train tickets (available upon request at live rates)',
    'Monument camera tickets, joy rides, and personal adventure activities',
    'Personal expenses like laundry, room service, alcoholic drinks, and driver tips',
    'Any meals or beverages not explicitly listed in package inclusions',
  ],
  itinerary: [
    {
      dayNumber: 1,
      title: 'Arrival in Hyderabad & Historic Charminar & Laad Bazaar Walk',
      description: 'Arrive at Rajiv Gandhi International Airport (HYD) or Hyderabad / Secunderabad Railway Station. Meet our private chauffeur and transfer to your verified 3-Star hotel. After check-in and leisure, proceed to the iconic Charminar, Mecca Masjid, Chowmahalla Palace, and Laad Bazaar famous for lacquer bangles and pearls.',
      meals: ['Breakfast'],
      activities: [
        'Private Airport / Railway Station Pickup & Hotel Check-in',
        'Charminar & Mecca Masjid Heritage Walk',
        'Chowmahalla Palace Nizami Architecture Visit',
        'Laad Bazaar Traditional Choodi & Pearl Shopping',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab Airport / Station Pickup & City Sightseeing',
    },
    {
      dayNumber: 2,
      title: 'Full-Day Ramoji Film City Cinematic Tour & Studio Shows',
      description: 'Enjoy delicious morning breakfast at hotel. Embark on a full-day private excursion to the world-famous Ramoji Film City. Discover the magical film sets, live stunt shows, Action Studio, Eureka cultural performances, and thematic Mughal & Japanese gardens. Return to hotel in the evening.',
      meals: ['Breakfast'],
      activities: [
        'Full-Day Excursion to Ramoji Film City Studio Tour',
        'Live Action Stunt Shows & Eureka Dance Performances',
        'Film Set Explorations & Action Studio Illusions',
        'Eco-Zone Bird Park & Butterfly Garden Walk',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab Full-Day Ramoji Film City Sightseeing',
    },
    {
      dayNumber: 3,
      title: 'Golconda Fort, Royal Qutb Shahi Tombs & Salar Jung Museum',
      description: 'Morning breakfast at hotel. Head to the legendary medieval Golconda Fort, known for its acoustic clapping portico and royal palaces. Visit the nearby Qutb Shahi Tombs set within landscaped gardens. Continue to the renowned Salar Jung Museum housing rare antiquities and the Veiled Rebecca sculpture.',
      meals: ['Breakfast'],
      activities: [
        'Golconda Fort Citadel Tour with Clapping Portico & Royal Pavilions',
        'Qutb Shahi Royal Tombs & Garden Monuments Tour',
        'Salar Jung Museum Rare Antiquities & Musical Clock Viewing',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab for Full-Day Heritage Sightseeing',
    },
    {
      dayNumber: 4,
      title: 'Birla Mandir, Hussain Sagar Boat Cruise, Lumbini Park & NTR Gardens',
      description: 'After morning breakfast, visit the pristine white marble Birla Mandir perched atop Naubat Pahad overlooking the city. Take a scenic boat cruise on Hussain Sagar Lake to the monolithic Buddha Statue. In the evening, explore Lumbini Park with its musical dancing fountain and relax at NTR Gardens.',
      meals: ['Breakfast'],
      activities: [
        'Birla Mandir White Marble Temple Visit on Naubat Pahad',
        'Hussain Sagar Lake Scenic Boat Ride to Buddha Statue',
        'Lumbini Park Musical Dancing Fountain Show',
        'NTR Gardens Leisure Walk & Scenic Viewpoints',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab for Lake & Temple Sightseeing',
    },
    {
      dayNumber: 5,
      title: 'Shilparamam Arts & Crafts Village & Departure Transfer',
      description: 'Enjoy breakfast at hotel and complete check-out formalities. Depending on your departure flight or train timing, visit Shilparamam Arts & Crafts Village for traditional handloom textiles and handicrafts. Chauffeur transfer to Hyderabad Airport or Railway Station for your return journey.',
      meals: ['Breakfast'],
      activities: [
        'Morning Breakfast & Hotel Check-out',
        'Shilparamam Cultural Arts & Crafts Village Shopping',
        'Private AC Vehicle Drop to Airport / Railway Station',
      ],
      hotel: 'Check-out completed (Departure Day)',
      transfers: 'Private AC Cab Departure Airport / Railway Station Drop',
    },
  ],
  hotels: [
    {
      name: 'The Cent Hotel Hyderabad',
      city: 'Hyderabad',
      rating: '4.8',
      nights: 4,
    },
  ],
  faqs: [
    {
      question: 'What hotel category is provided in this package?',
      answer: 'This package includes verified 3-Star Standard accommodations (The Cent Hotel Hyderabad) with clean, hygienic AC rooms, attached bath, and daily breakfast. You can upgrade to 4-Star Deluxe or 5-Star Luxury anytime.',
    },
    {
      question: 'Is Ramoji Film City entry ticket included in this tour?',
      answer: 'Yes, full-day Ramoji Film City general entry tickets with studio tour and live entertainment shows are included with private cab transfers.',
    },
    {
      question: 'Can this Hyderabad tour package be customized?',
      answer: 'Yes! All travel dates, hotel choices (3★, 4★, or 5★), vehicle type, and sightseeing spots are 100% customizable.',
    },
  ],
  theme: 'Cityscape Escape',
  hotelCategory: '3-Star Standard',
  mealPlan: 'Breakfast & Dinner Included',
  flightsIncluded: false,
  transfersIncluded: true,
  departureCity: 'Flexible Origin / Hyderabad Pickup',
  batch_source: 'mmt_sync',
};

export const HYDERABAD_EXCITING_RAMOJI_PACKAGE: HolidayPackage = {
  id: 'pkg-mmt-andhra-pradesh-exciting-hyderabad-with-ramoji-film-city-3n4d-4d3n-mmt-3',
  slug: 'andhra-pradesh-exciting-hyderabad-with-ramoji-film-city-3n4d-4d3n-mmt-3',
  name: 'Exciting Hyderabad with Ramoji Film City (3N/4D)',
  destination: 'Andhra Pradesh',
  destinationSlug: 'andhra-pradesh',
  state: 'Andhra Pradesh & Telangana',
  stateSlug: 'andhra-pradesh',
  country: 'India',
  region: 'South India',
  isInternational: false,
  durationDays: 4,
  durationNights: 3,
  startingPrice: 12999,
  discountPrice: 16999,
  rating: 4.8,
  reviewsCount: 135,
  heroImage: 'https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=1200&q=80&fm=webp&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80&fm=webp&fit=crop',
  ],
  highlights: [
    'Verified Stay at The Cent Hotel Hyderabad (3★ Standard)',
    'Full-Day Excursion to Ramoji Film City with Guided Studio Passes Included',
    'Heritage Walk: Charminar, Mecca Masjid & Chowmahalla Palace',
    'Acoustic Golconda Fort & Royal Qutb Shahi Tombs Tour',
    'Evening Hussain Sagar Lake Boat Cruise with Monolithic Buddha Views',
    'Private AC Sedan Cab reserved exclusively for all transfers & sightseeing',
  ],
  inclusions: [
    '3 Nights accommodation at The Cent Hotel Hyderabad (3★ Standard)',
    'Daily Breakfast & Dinner Included (MAP Plan)',
    'Private AC Sedan vehicle for all airport/station transfers and scheduled sightseeing',
    'Full-day Ramoji Film City tour excursion with entry tickets included',
    'Hussain Sagar Lake boat cruise ticket to monolithic Buddha statue',
    'All toll taxes, parking fees, driver allowance, and 5% GST included',
    '24x7 Trip Customizer on-trip dedicated concierge support',
  ],
  exclusions: [
    'Airfare or train tickets (available upon request at live rates)',
    'Monument camera fees, joy rides, and personal adventure activities',
    'Personal expenses like laundry, room service, alcoholic drinks, and tips',
    'Any services or meals not explicitly mentioned in package inclusions',
  ],
  itinerary: [
    {
      dayNumber: 1,
      title: 'Arrival in Hyderabad & Historic Charminar & Laad Bazaar Walk',
      description: 'Arrive at Rajiv Gandhi International Airport (HYD) or Hyderabad / Secunderabad Railway Station. Meet our private chauffeur and transfer to The Cent Hotel Hyderabad. After check-in and leisure, proceed to the iconic Charminar, Mecca Masjid, Chowmahalla Palace, and Laad Bazaar famous for lacquer bangles and pearls.',
      meals: ['Dinner'],
      activities: [
        'Private Airport / Railway Station Pickup & Check-in at The Cent Hotel Hyderabad',
        'Charminar & Historic Mecca Masjid Heritage Walk',
        'Chowmahalla Palace Nizami Architecture Visit',
        'Laad Bazaar Traditional Choodi & Pearl Shopping Walk',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab Airport / Station Pickup & City Sightseeing',
    },
    {
      dayNumber: 2,
      title: 'Full-Day Ramoji Film City Studio Tour & Live Shows',
      description: 'Enjoy delicious morning breakfast at hotel. Embark on a full-day private excursion to the world-famous Ramoji Film City. Discover magical film sets, live stunt shows, Action Studio, Eureka cultural performances, and thematic gardens. Return to The Cent Hotel Hyderabad in the evening.',
      meals: ['Breakfast', 'Dinner'],
      activities: [
        'Full-Day Excursion to Ramoji Film City Studio Tour',
        'Live Action Stunt Shows & Eureka Dance Performances',
        'Film Set Explorations & Action Studio Illusions',
        'Eco-Zone Bird Park & Butterfly Garden Walk',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab Full-Day Ramoji Film City Sightseeing',
    },
    {
      dayNumber: 3,
      title: 'Golconda Fort, Qutb Shahi Tombs, Salar Jung Museum & Hussain Sagar Sunset',
      description: 'Morning breakfast at hotel. Head to the legendary medieval Golconda Fort, known for its acoustic clapping portico and royal palaces. Visit the nearby Qutb Shahi Tombs. Continue to Salar Jung Museum. Finish with a scenic sunset boat cruise on Hussain Sagar Lake.',
      meals: ['Breakfast', 'Dinner'],
      activities: [
        'Golconda Fort Citadel Tour with Clapping Portico & Royal Pavilions',
        'Qutb Shahi Royal Tombs & Garden Monuments Tour',
        'Salar Jung Museum Rare Antiquities & Musical Clock Viewing',
        'Hussain Sagar Lake Scenic Sunset Boat Cruise to Buddha Statue',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab for Full-Day Heritage & Lake Sightseeing',
    },
    {
      dayNumber: 4,
      title: 'Birla Mandir & Airport / Station Departure Transfer',
      description: 'After breakfast, check out of The Cent Hotel Hyderabad. Visit the serene white marble Birla Mandir atop Naubat Pahad offering panoramic vistas of the twin cities. Chauffeur transfer to Hyderabad Airport or Railway Station for your return journey.',
      meals: ['Breakfast'],
      activities: [
        'Birla Mandir White Marble Temple Visit on Naubat Pahad',
        'Leisure Pearl & Handicraft Shopping in Abids / Banjara Hills',
        'Private AC Vehicle Drop to Airport / Railway Station',
      ],
      hotel: 'Check-out completed (Departure Day)',
      transfers: 'Private AC Cab Departure Airport / Railway Station Drop',
    },
  ],
  hotels: [
    {
      name: 'The Cent Hotel Hyderabad',
      city: 'Hyderabad',
      rating: '4.8',
      nights: 3,
    },
  ],
  faqs: [
    {
      question: 'Which hotels are provided in this Ramoji Film City package?',
      answer: 'This package includes verified 3-Star accommodations at The Cent Hotel Hyderabad with attached bath, clean AC rooms, and daily meals. Upgrades to Grand Continent Premier Banjara Hills (4★ Deluxe) and Courtyard by Marriott Hyderabad (5★ Luxury) are available.',
    },
    {
      question: 'Are Ramoji Film City tickets included?',
      answer: 'Yes! Full-day general entry tickets with guided studio tours and live entertainment shows are included with private vehicle transfers.',
    },
  ],
  theme: 'Entertainment & Heritage',
  hotelCategory: '3-Star Standard',
  mealPlan: 'Breakfast & Dinner Included',
  flightsIncluded: false,
  transfersIncluded: true,
  departureCity: 'Flexible Origin / Hyderabad Pickup',
  batch_source: 'mmt_sync',
};

export const HYDERABAD_WEEKEND_SPECIAL_PACKAGE: HolidayPackage = {
  id: 'pkg-mmt-andhra-pradesh-hyderabad-getaway-weekend-special-2n3d-3d2n-mmt-4',
  slug: 'andhra-pradesh-hyderabad-getaway-weekend-special-2n3d-3d2n-mmt-4',
  name: 'Hyderabad Getaway Weekend Special (2N/3D)',
  destination: 'Andhra Pradesh',
  destinationSlug: 'andhra-pradesh',
  state: 'Andhra Pradesh & Telangana',
  stateSlug: 'andhra-pradesh',
  country: 'India',
  region: 'South India',
  isInternational: false,
  durationDays: 3,
  durationNights: 2,
  startingPrice: 9499,
  discountPrice: 12999,
  rating: 4.8,
  reviewsCount: 118,
  heroImage: 'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=1200&q=80&fm=webp&fit=crop',
  ],
  highlights: [
    'Verified Stay at The Cent Hotel Hyderabad (3★ Standard)',
    'Charminar, Mecca Masjid, Laad Bazaar Pearl Market Heritage Tour',
    'Golconda Fort Sound & Light Evening Extravaganza',
    'Salar Jung Museum Antiquities & Veiled Rebecca Sculpture',
    'Hussain Sagar Lake Boat Ride & Lumbini Park Musical Fountain',
    'Private AC Sedan Cab for Station/Airport Transfers & Sightseeing',
  ],
  inclusions: [
    '2 Nights accommodation at The Cent Hotel Hyderabad (3★ Standard)',
    'Daily Breakfast & Dinner Included (MAP Plan)',
    'Private AC Sedan vehicle for all airport/station transfers and scheduled sightseeing',
    'Hussain Sagar Lake boat cruise ticket to monolithic Buddha statue',
    'All toll taxes, parking fees, driver allowance, and 5% GST included',
    '24x7 Trip Customizer on-trip dedicated concierge support',
  ],
  exclusions: [
    'Airfare or train tickets (available upon request at live rates)',
    'Monument camera fees, joy rides, and personal adventure activities',
    'Personal expenses like laundry, room service, alcoholic drinks, and tips',
    'Any services or meals not explicitly mentioned in package inclusions',
  ],
  itinerary: [
    {
      dayNumber: 1,
      title: 'Arrival in Hyderabad & Charminar Heritage Trail',
      description: 'Morning pickup from Hyderabad Airport or Railway Station. Check-in at The Cent Hotel Hyderabad. Visit the historic Charminar, Mecca Masjid, Chowmahalla Palace, and shop for pearls in Laad Bazaar. Evening visit to Golconda Fort for the Sound & Light show.',
      meals: ['Dinner'],
      activities: [
        'Private Pickup & Check-in at The Cent Hotel Hyderabad',
        'Charminar & Mecca Masjid Walk',
        'Chowmahalla Palace Nizam State Rooms',
        'Golconda Fort Sound & Light Evening Show',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab Station/Airport Pickup & Heritage Sightseeing',
    },
    {
      dayNumber: 2,
      title: 'Salar Jung Museum, Birla Mandir & Hussain Sagar Lake Cruise',
      description: 'Morning breakfast. Tour the legendary Salar Jung Museum. Afternoon visit to the hilltop white marble Birla Mandir. In the evening, enjoy a boat cruise on Hussain Sagar Lake with breathtaking views of the monolithic Buddha statue and Lumbini Park laser fountain.',
      meals: ['Breakfast', 'Dinner'],
      activities: [
        'Salar Jung Museum Artifacts & Musical Clock',
        'Birla Mandir Hilltop Views & Darshan',
        'Hussain Sagar Boat Ride to Buddha Statue',
        'Lumbini Park Musical Fountain Show',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab City Sightseeing',
    },
    {
      dayNumber: 3,
      title: 'Shilparamam Crafts Village & Airport / Station Departure Drop',
      description: 'Breakfast at hotel and check-out. Visit Shilparamam Arts & Crafts Village for traditional Hyderabadi souvenirs and handlooms. Chauffeur transfer to Hyderabad Airport or Railway Station for onward journey.',
      meals: ['Breakfast'],
      activities: [
        'Breakfast & Check-out Formalities',
        'Shilparamam Arts & Crafts Village Shopping',
        'Private AC Vehicle Drop to Airport / Railway Station',
      ],
      hotel: 'Check-out completed (Departure Day)',
      transfers: 'Private AC Cab Departure Airport / Railway Station Drop',
    },
  ],
  hotels: [
    {
      name: 'The Cent Hotel Hyderabad',
      city: 'Hyderabad',
      rating: '4.8',
      nights: 2,
    },
  ],
  faqs: [
    {
      question: 'Which hotels are included in this weekend getaway?',
      answer: 'This package includes verified 3-Star accommodations at The Cent Hotel Hyderabad. Upgrades to Grand Continent Premier Banjara Hills (4★ Deluxe) and Courtyard by Marriott Hyderabad (5★ Luxury) can be selected on request.',
    },
  ],
  theme: 'Weekend Getaway',
  hotelCategory: '3-Star Standard',
  mealPlan: 'Breakfast & Dinner Included',
  flightsIncluded: false,
  transfersIncluded: true,
  departureCity: 'Flexible Origin / Hyderabad Pickup',
  batch_source: 'mmt_sync',
};

export const HYDERABAD_SRISAILAM_PACKAGE: HolidayPackage = {
  id: 'pkg-mmt-andhra-pradesh-hyderabad-with-srisailam-temple-visit-3n4d-4d3n-mmt-1',
  slug: 'andhra-pradesh-hyderabad-with-srisailam-temple-visit-3n4d-4d3n-mmt-1',
  name: 'Hyderabad with Srisailam Temple Visit (3N/4D)',
  destination: 'Andhra Pradesh',
  destinationSlug: 'andhra-pradesh',
  state: 'Andhra Pradesh & Telangana',
  stateSlug: 'andhra-pradesh',
  country: 'India',
  region: 'South India',
  isInternational: false,
  durationDays: 4,
  durationNights: 3,
  startingPrice: 13999,
  discountPrice: 17999,
  rating: 4.9,
  reviewsCount: 145,
  heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80&fm=webp&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1605007493699-ce65834f8a00?w=1200&q=80&fm=webp&fit=crop',
    'https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=1200&q=80&fm=webp&fit=crop',
  ],
  highlights: [
    'Verified Stay at The Cent Hotel Hyderabad (3★ Standard)',
    'Holy Srisailam Mallikarjuna Swamy Jyotirlinga Darshan & Bhramaramba Devi Shakti Peeth',
    'Scenic Nallamala Forest Drive & Srisailam Dam Krishna River Viewpoint',
    'Patala Ganga Ropeway & Pavanadhara Boat Ride Experience',
    'Hyderabad Nizam Heritage: Charminar & Salar Jung Museum',
    'Private Dedicated AC Sedan Cab from Hyderabad Pickup to Drop',
  ],
  inclusions: [
    '2 Nights stay at The Cent Hotel Hyderabad & 1 Night stay at Hotel Haritha Srisailam (3★ Standard)',
    'Daily Breakfast & Dinner Included (MAP Plan)',
    'Private AC Sedan vehicle from Hyderabad pickup to Srisailam and return with all sightseeing',
    'Assistance with special Srisailam temple darshan queues',
    'All toll taxes, forest entry permits, parking fees, driver allowance, and 5% GST included',
    '24x7 Trip Customizer on-trip dedicated concierge support',
  ],
  exclusions: [
    'Airfare or train tickets (available upon request at live rates)',
    'Special pooja/abhishekam tickets at Srisailam temple',
    'Camera tickets, ropeway rides, and personal adventure activities',
    'Personal expenses like room service, laundry, extra snacks, and tips',
    'Any services or meals not explicitly mentioned in package inclusions',
  ],
  itinerary: [
    {
      dayNumber: 1,
      title: 'Arrival in Hyderabad & City Heritage Exploration',
      description: 'Morning pickup from Hyderabad Airport or Railway Station. Check-in at The Cent Hotel Hyderabad. Visit Charminar, Mecca Masjid, Chowmahalla Palace, and Salar Jung Museum. Evening boat ride at Hussain Sagar Lake.',
      meals: ['Dinner'],
      activities: [
        'Private Pickup & Check-in at The Cent Hotel Hyderabad',
        'Charminar & Mecca Masjid Walk',
        'Salar Jung Museum Rare Antiquities Tour',
        'Hussain Sagar Lake Sunset Boat Cruise',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab Station/Airport Pickup & City Sightseeing',
    },
    {
      dayNumber: 2,
      title: 'Scenic Drive to Srisailam via Nallamala Hills & Mallikarjuna Darshan',
      description: 'Early morning breakfast and drive to Srisailam (approx. 215 km / 5 hrs) winding through scenic Nallamala Tiger Reserve forests. En route visit Srisailam Dam on the Krishna River. Check-in at Hotel Haritha Srisailam. Proceed for sacred darshan of Mallikarjuna Swamy (one of the 12 sacred Jyotirlingas) and Goddess Bhramaramba Devi (Shakti Peeth). Overnight stay in Srisailam.',
      meals: ['Breakfast', 'Dinner'],
      activities: [
        'Scenic Drive through Nallamala Forest Tiger Reserve',
        'Srisailam Krishna Dam Viewpoint Stopover',
        'Mallikarjuna Swamy Jyotirlinga Sacred Darshan',
        'Bhramaramba Devi Shakti Peeth Visit & Evening Aarti',
      ],
      hotel: 'Hotel Haritha Srisailam',
      transfers: 'Private AC Cab Hyderabad to Srisailam with En-route Sightseeing',
    },
    {
      dayNumber: 3,
      title: 'Patala Ganga, Sakshi Ganapathi & Return Drive to Hyderabad',
      description: 'Morning visit to Patala Ganga via scenic ropeway with a peaceful boat ride on Krishna River. Visit Sakshi Ganapathi temple where Lord Ganesha notes every pilgrim’s visit. After breakfast, embark on the picturesque drive back to Hyderabad. Check-in at The Cent Hotel Hyderabad for dinner and rest.',
      meals: ['Breakfast', 'Dinner'],
      activities: [
        'Patala Ganga Ropeway & Krishna River Boat Ride',
        'Sakshi Ganapathi & Paladhara Panchadhara Visit',
        'Picturesque Return Drive through Forest Hills to Hyderabad',
        'Evening Leisure at The Cent Hotel Hyderabad',
      ],
      hotel: 'The Cent Hotel Hyderabad',
      transfers: 'Private AC Cab Srisailam to Hyderabad Return Transfer',
    },
    {
      dayNumber: 4,
      title: 'Birla Mandir & Airport / Station Departure Transfer',
      description: 'Enjoy breakfast at hotel and complete check-out. Visit the hilltop white marble Birla Mandir for panoramic city views. Chauffeur drop to Hyderabad Airport or Railway Station for onward return journey.',
      meals: ['Breakfast'],
      activities: [
        'Birla Mandir White Marble Temple & Panoramic Viewpoint',
        'Hyderabad Pearl & Bangle Shopping Time',
        'Private AC Vehicle Drop to Airport / Railway Station',
      ],
      hotel: 'Check-out completed (Departure Day)',
      transfers: 'Private AC Cab Departure Airport / Railway Station Drop',
    },
  ],
  hotels: [
    {
      name: 'The Cent Hotel Hyderabad',
      city: 'Hyderabad',
      rating: '4.8',
      nights: 2,
    },
    {
      name: 'Hotel Haritha Srisailam',
      city: 'Srisailam',
      rating: '4.7',
      nights: 1,
    },
  ],
  faqs: [
    {
      question: 'Which hotels are included in this Hyderabad & Srisailam package?',
      answer: 'This package includes verified 3-Star accommodations at The Cent Hotel Hyderabad (2 nights) and Hotel Haritha Srisailam (1 night). Upgrades in Hyderabad to Grand Continent Premier Banjara Hills (4★ Deluxe) and Courtyard by Marriott Hyderabad (5★ Luxury) are available.',
    },
    {
      question: 'Is Srisailam temple darshan assistance included?',
      answer: 'Yes! Our chauffeur and local coordinators assist with temple protocol, timings, and queuing guidance for smooth Mallikarjuna Jyotirlinga darshan.',
    },
  ],
  theme: 'Pilgrimage & Heritage',
  hotelCategory: '3-Star Standard',
  mealPlan: 'Breakfast & Dinner Included',
  flightsIncluded: false,
  transfersIncluded: true,
  departureCity: 'Flexible Origin / Hyderabad Pickup',
  batch_source: 'mmt_sync',
};

export const ARAKU_VALLEY_BLISS_PACKAGE: HolidayPackage = {
  id: 'pkg-mmt-andhra-pradesh-araku-valley-bliss-1n2d-2d1n-mmt-2',
  slug: 'andhra-pradesh-araku-valley-bliss-1n2d-2d1n-mmt-2',
  name: 'Araku Valley Bliss (1N/2D)',
  destination: 'Andhra Pradesh',
  destinationSlug: 'andhra-pradesh',
  state: 'Andhra Pradesh',
  stateSlug: 'andhra-pradesh',
  country: 'India',
  region: 'South India',
  isInternational: false,
  durationDays: 2,
  durationNights: 1,
  startingPrice: 7999,
  discountPrice: 9999,
  rating: 4.8,
  reviewsCount: 115,
  heroImage: '/packages/araku/araku-valley-card.webp',
  gallery: [
    '/packages/araku/araku-valley-card.webp',
    '/packages/araku/ananthagiri-hills.avif',
    '/packages/araku/borra-caves.avif',
    '/packages/araku/katiki-waterfalls.avif',
    '/packages/araku/chaparai-waterfalls.avif',
    '/packages/araku/padmapuram-gardens.avif',
    '/packages/araku/coffee-museum.avif',
    '/packages/araku/tribal-museum.avif',
  ],
  highlights: [
    'Stay at scenic Vana Resort Araku (Standard Room for 3★ / Deluxe Room for 4★)',
    'Scenic drive from Visakhapatnam to Araku Valley through Eastern Ghats & Ananthagiri Hills',
    'Explore million-year-old Borra Caves with stalactite & stalagmite formations',
    'Visit Padmapuram Botanical Gardens & traditional Tribal Museum',
    'Aromatic Organic Araku Coffee Plantation Tour & Coffee Museum Tasting',
    'Chaparai Water Cascade & Katiki Waterfalls Nature Stopover',
    'Dedicated Private AC Sedan Cab from Vizag pickup to drop',
  ],
  inclusions: [
    '1 Night stay at Vana Resort Araku (Standard Room for 3★ Standard / Deluxe Room for 4★ Deluxe)',
    'Daily Breakfast & Dinner Included (MAP Plan)',
    'Private AC Sedan vehicle for all transfers from Visakhapatnam and Araku sightseeing',
    'Entry tickets to Borra Caves, Padmapuram Botanical Gardens & Tribal Museum',
    'All toll taxes, parking fees, driver allowance, and 5% GST included',
    '24x7 Trip Customizer on-trip dedicated concierge support',
  ],
  exclusions: [
    'Train or flight tickets to / from Visakhapatnam (available on request)',
    'Camera fees, personal adventure sports, and joy rides',
    'Personal expenses like room service, laundry, extra snacks, and tips',
    'Any services or meals not explicitly mentioned in package inclusions',
  ],
  itinerary: [
    {
      dayNumber: 1,
      title: 'Visakhapatnam to Araku Valley via Borra Caves, Ananthagiri & Coffee Museum',
      description: 'Morning pickup from Visakhapatnam Airport or Railway Station by our private chauffeur. Embark on a scenic drive climbing through the Eastern Ghats. Stop at the spectacular million-year-old Borra Caves and Katiki Waterfalls. Drive through lush green Ananthagiri hills and visit organic coffee plantations and the Araku Coffee Museum. Check-in to Vana Resort Araku. In the afternoon, visit the Araku Tribal Museum showcasing indigenous heritage. Savor delicious chef-cooked dinner and enjoy overnight stay at Vana Resort Araku.',
      meals: ['Dinner'],
      activities: [
        'Private Pickup from Visakhapatnam Airport / Railway Station',
        'Scenic Eastern Ghats & Ananthagiri Hills Drive',
        'Guided Exploration of Borra Caves & Katiki Waterfalls',
        'Araku Coffee Museum & Tribal Museum Visit',
        'Check-in at Vana Resort Araku & Relaxing Valley Evening',
      ],
      hotel: 'Vana Resort Araku (Standard Room)',
      transfers: 'Private AC Cab Vizag to Araku with En-route Sightseeing',
    },
    {
      dayNumber: 2,
      title: 'Padmapuram Gardens, Chaparai Waterfalls & Drop to Visakhapatnam',
      description: 'Wake up to the misty hill breeze and enjoy a wholesome breakfast at Vana Resort Araku. Check out and head to the historic Padmapuram Botanical Gardens, famous for its hanging tree cottages and rare orchids. Next, visit the picturesque Chaparai Water Cascade surrounded by dense forests. Begin your scenic descent toward Visakhapatnam. Transfer to Visakhapatnam Airport or Railway Station for your return journey.',
      meals: ['Breakfast'],
      activities: [
        'Resort Breakfast & Check-out Formalities',
        'Padmapuram Botanical Gardens & Tree Hut Tour',
        'Chaparai Water Cascade & Forest Stream Exploration',
        'Scenic Valley Descent toward Visakhapatnam',
        'Private AC Vehicle Drop to Vizag Airport / Railway Station',
      ],
      hotel: 'Check-out completed (Departure Day)',
      transfers: 'Private AC Cab Sightseeing & Visakhapatnam Drop',
    },
  ],
  hotels: [
    {
      name: 'Vana Resort Araku (Standard Room)',
      city: 'Araku Valley',
      rating: '4.8',
      nights: 1,
    },
  ],
  faqs: [
    {
      question: 'Which hotel is provided in this Araku Valley package?',
      answer: 'This package includes verified stays at Vana Resort Araku (Standard Room for 3★ Standard at ₹7,999 pp, or Deluxe Room for 4★ Deluxe at ₹10,999 pp) with attached modern bath and daily breakfast & dinner included.',
    },
    {
      question: 'Is transportation from Visakhapatnam included?',
      answer: 'Yes! A dedicated private AC Sedan cab is provided exclusively for your group, picking you up from Visakhapatnam Airport or Railway Station, handling all Araku sightseeing, and dropping you back.',
    },
    {
      question: 'Can this package be customized for Vistadome train tickets?',
      answer: 'Yes! We can arrange Vistadome train tickets between Vizag and Araku on request, subject to IRCTC availability.',
    },
  ],
  theme: 'Nature & Hill Station',
  hotelCategory: '3-Star Standard',
  mealPlan: 'Breakfast & Dinner Included',
  flightsIncluded: false,
  transfersIncluded: true,
  departureCity: 'Visakhapatnam Pickup & Drop',
  batch_source: 'mmt_sync',
};

export const CURATED_CUSTOM_PACKAGES: HolidayPackage[] = [
  HYDERABAD_PREMIUM_PACKAGE,
  HYDERABAD_CITYSCAPE_PACKAGE,
  HYDERABAD_EXCITING_RAMOJI_PACKAGE,
  HYDERABAD_WEEKEND_SPECIAL_PACKAGE,
  HYDERABAD_SRISAILAM_PACKAGE,
  ARAKU_VALLEY_BLISS_PACKAGE,
];

function initializeCatalog(): { all: HolidayPackage[]; lookup: Map<string, HolidayPackage> } {
  if (_memoizedAllCatalog && _memoizedLookupMap) {
    return { all: _memoizedAllCatalog, lookup: _memoizedLookupMap };
  }

  const lookup = new Map<string, HolidayPackage>();
  const all: HolidayPackage[] = [];

  // Register Curated Custom Packages First
  CURATED_CUSTOM_PACKAGES.forEach((pkg) => {
    all.push(pkg);
    lookup.set(pkg.id.toLowerCase(), pkg);
    lookup.set(pkg.slug.toLowerCase(), pkg);
    lookup.set('pkg-' + pkg.slug.toLowerCase(), pkg);
    lookup.set(pkg.id.toLowerCase().replace(/^pkg-/, ''), pkg);
  });

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

      // Curated map to override stale localStorage items
      const curatedMap = new Map<string, HolidayPackage>();
      CURATED_CUSTOM_PACKAGES.forEach((cp) => {
        curatedMap.set(cp.id.toLowerCase(), cp);
        curatedMap.set(cp.slug.toLowerCase(), cp);
      });

      let hasUpdates = false;
      const sanitizedCustom = customPackages.map((cp) => {
        const cur = curatedMap.get(cp.id.toLowerCase()) || curatedMap.get(cp.slug.toLowerCase());
        if (cur) {
          hasUpdates = true;
          return { ...cp, ...cur };
        }
        return cp;
      });

      if (hasUpdates) {
        try {
          localStorage.setItem('tc_cloud_custom_packages_v1', JSON.stringify(sanitizedCustom));
        } catch {}
      }

      // Avoid duplicates between sanitizedCustom and baseCatalog
      const customIds = new Set(
        sanitizedCustom.map((p) => p.id.toLowerCase()).concat(sanitizedCustom.map((p) => p.slug.toLowerCase()))
      );
      const nonDuplicateBase = baseCatalog.filter(
        (p) => !customIds.has(p.id.toLowerCase()) && !customIds.has(p.slug.toLowerCase())
      );

      const activeLegacy = isLegacyDeleted ? [] : nonDuplicateBase;
      return [...sanitizedCustom, ...activeLegacy];
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

  // If p2 (package slug/id) is provided, ONLY search for that specific package.
  // NEVER fall back to p1 (destination) as a package slug/id!
  if (p2) {
    const stripped = p2.replace(/^pkg-/, '');

    // Direct lookup map match
    const direct = lookup.get(p2) || lookup.get(stripped) || lookup.get('pkg-' + p2);
    if (direct) return direct;

    // Exact match across all packages (including custom MMT Sync packages)
    const exactMatch = all.find(
      (p) =>
        p.slug.toLowerCase() === p2 ||
        p.id.toLowerCase() === p2 ||
        p.slug.toLowerCase().replace(/^pkg-/, '') === stripped ||
        p.id.toLowerCase().replace(/^pkg-/, '') === stripped
    );
    if (exactMatch) return exactMatch;

    // Specific slug was requested but not found in catalog; DO NOT fall back to destination!
    return undefined;
  }

  // Destination match fallback: ONLY performed if no specific package slug (p2) was requested
  if (p1) {
    const destMatch = all.find(
      (p) =>
        p.destinationSlug.toLowerCase() === p1 ||
        (p.citySlugs && p.citySlugs.includes(p1)) ||
        (p.stateSlug && p.stateSlug.toLowerCase() === p1) ||
        p.destination.toLowerCase() === p1
    );
    if (destMatch) return destMatch;
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
