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

function generateSynthesizedPackage(
  sector: SectorDefinition,
  sectorIndex: number,
  pkgIndex: number
): HolidayPackage {
  const city = sector.cities[pkgIndex % sector.cities.length];
  const themeObj = THEMES_CONFIG[pkgIndex % THEMES_CONFIG.length];
  const durObj = DURATIONS_CONFIG[pkgIndex % DURATIONS_CONFIG.length];
  const hotelTier = HOTEL_TIERS[pkgIndex % HOTEL_TIERS.length];

  const count = sector.count;
  const step = (sector.maxPrice - sector.minPrice) / Math.max(1, count - 1);
  const startingPrice = Math.round(sector.minPrice + pkgIndex * step);
  const discountMultiplier = 1.15 + ((pkgIndex % 5) * 0.05);
  const discountPrice = Math.round(startingPrice * discountMultiplier);

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

  const itinerary: ItineraryDay[] = [];
  for (let d = 1; d <= durObj.days; d++) {
    if (d === 1) {
      itinerary.push({
        dayNumber: 1,
        title: 'Arrival in ' + city + ' & Hotel Check-in',
        description: 'Arrive at the destination. Meet our local tour representative for a private transfer to your hotel. Complete check-in formalities and spend the evening relaxing or exploring nearby local markets at leisure.',
        meals: ['Dinner'],
        activities: ['Airport / Station Meet & Greet', 'Private Hotel Transfer', 'Evening Leisure Walk'],
        hotel: city + ' Grand Palace Hotel & Suites',
        transfers: 'Private AC Cab Transfer'
      });
    } else if (d === durObj.days) {
      itinerary.push({
        dayNumber: d,
        title: 'Breakfast & Departure Transfers from ' + city,
        description: 'Enjoy a hearty breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping before your private transfer to the airport or railway station.',
        meals: ['Breakfast'],
        activities: ['Souvenir Shopping', 'Hotel Check-out', 'Departure Airport / Station Transfer'],
        hotel: 'Check-out completed',
        transfers: 'Private AC Cab Transfer'
      });
    } else {
      itinerary.push({
        dayNumber: d,
        title: 'Day ' + d + ': ' + city + ' Full Day Guided Sightseeing & Exploration',
        description: 'After breakfast, embark on a comprehensive guided tour of ' + city + ' premier attractions, scenic viewpoints, cultural monuments, and top photography stops with your private chauffeur.',
        meals: ['Breakfast'],
        activities: ['Monument Visits', 'Scenic Highlights & Photography', 'Local Food & Artisan Market Tour'],
        hotel: city + ' Grand Palace Hotel & Suites',
        transfers: 'Full Day Private AC Vehicle'
      });
    }
  }

  const hotels = [
    {
      name: city + ' Grand Palace Hotel & Suites',
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

  // 2. TIER 2: Synthesize the 4,800+ OTA catalog (3,470 domestic + 1,980 international = 5,450 packages)
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
