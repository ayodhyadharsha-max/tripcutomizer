export interface ProgrammaticItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  meals: string;
  hotel: string;
  activities: string[];
}

export interface ProgrammaticDepartureCity {
  city: string;
  code: string;
  airport: string;
  flightType: string;
  airlines: string[];
  terminalNotes: string;
}

export interface ProgrammaticPackage {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  destination: string;
  destinationSlug: string;
  country: string;
  region: string;
  theme: string;
  isInternational: boolean;
  durationDays: number;
  durationNights: number;
  startingPrice: number;
  discountPrice: number;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  departureCity: ProgrammaticDepartureCity;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ProgrammaticItineraryDay[];
  hotels: { name: string; category: string; city: string; nights: number }[];
  faqs: { question: string; answer: string }[];
}

export const DEPARTURE_CITIES: Record<string, ProgrammaticDepartureCity> = {
  ahmedabad: {
    city: 'Ahmedabad',
    code: 'AMD',
    airport: 'Sardar Vallabhbhai Patel International Airport (AMD)',
    flightType: 'Direct Flights & 1-Stop Connections',
    airlines: ['Emirates', 'IndiGo', 'SpiceJet', 'Air India'],
    terminalNotes: 'Terminal 2 for International departures and Terminal 1 for Domestic routes. Dedicated airport concierge available.',
  },
  mumbai: {
    city: 'Mumbai',
    code: 'BOM',
    airport: 'Chhatrapati Shivaji Maharaj International Airport (BOM)',
    flightType: 'Daily Non-Stop Flights',
    airlines: ['Air India', 'IndiGo', 'Emirates', 'Vistara'],
    terminalNotes: 'Departs from Terminal 2 (T2). Fast-track security and dedicated luggage check-in.',
  },
  delhi: {
    city: 'Delhi',
    code: 'DEL',
    airport: 'Indira Gandhi International Airport (DEL)',
    flightType: 'High-Frequency Direct Flights',
    airlines: ['Air India', 'IndiGo', 'Emirates', 'SpiceJet'],
    terminalNotes: 'Terminal 3 (T3) for international and T1/T2/T3 for domestic. 24x7 boarding concierge support.',
  },
  bangalore: {
    city: 'Bangalore',
    code: 'BLR',
    airport: 'Kempegowda International Airport (BLR)',
    flightType: 'Direct & Rapid Connections',
    airlines: ['IndiGo', 'Air India', 'Akasa Air', 'Emirates'],
    terminalNotes: 'Terminal 2 (Garden Terminal) for international and domestic sectors with DigiYatra contactless entry.',
  },
  kolkata: {
    city: 'Kolkata',
    code: 'CCU',
    airport: 'Netaji Subhash Chandra Bose International Airport (CCU)',
    flightType: 'Direct Non-Stop & Rapid Flights',
    airlines: ['IndiGo', 'Air India', 'Thai Airways', 'SpiceJet'],
    terminalNotes: 'Integrated Terminal Building with designated tour group check-in desks.',
  },
  chennai: {
    city: 'Chennai',
    code: 'MAA',
    airport: 'Chennai International Airport (MAA)',
    flightType: 'Direct Coastal & Island Connections',
    airlines: ['IndiGo', 'Air India', 'Singapore Airlines', 'Emirates'],
    terminalNotes: 'New Integrated Terminal T2. Round-the-clock ground assistance.',
  },
  pune: {
    city: 'Pune',
    code: 'PNQ',
    airport: 'Pune International Airport (PNQ)',
    flightType: 'Direct Flights & Express Connect',
    airlines: ['IndiGo', 'Air India', 'SpiceJet'],
    terminalNotes: 'New Integrated Terminal Building with spacious boarding gates and swift baggage collection.',
  },
  lucknow: {
    city: 'Lucknow',
    code: 'LKO',
    airport: 'Chaudhary Charan Singh International Airport (LKO)',
    flightType: 'Direct Flights & Highway Connectivity',
    airlines: ['IndiGo', 'Air India Express', 'Flydubai'],
    terminalNotes: 'Terminal 3 (T3) with direct expressway connectivity to Ayodhya and Varanasi.',
  },
};

// Base Destination Blueprints
interface DestinationBlueprint {
  destination: string;
  destinationSlug: string;
  country: string;
  region: string;
  theme: string;
  isInternational: boolean;
  durationDays: number;
  durationNights: number;
  startingPrice: number;
  discountPrice: number;
  heroImage: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ProgrammaticItineraryDay[];
  hotels: { name: string; category: string; city: string; nights: number }[];
  faqs: { question: string; answer: string }[];
}

const DESTINATION_BLUEPRINTS: Record<string, DestinationBlueprint> = {
  dubai: {
    destination: 'Dubai, UAE',
    destinationSlug: 'dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    theme: 'International Luxury Holiday',
    isInternational: true,
    durationDays: 5,
    durationNights: 4,
    startingPrice: 34500,
    discountPrice: 41000,
    heroImage: '/destinations/verified/dubai-burj-khalifa.jpg',
    highlights: [
      'At The Top Burj Khalifa (124th & 125th floor) with Dubai Mall fountain view',
      '4x4 Dune Bashing Desert Safari with BBQ dinner & belly dance show',
      'Marina Dhow Cruise dinner with live Tanoura performance',
      'Abu Dhabi Day Tour: Sheikh Zayed Grand Mosque & BAPS Hindu Mandir',
      'Express 30-day UAE tourist visa and OK to Board clearance included',
    ],
    inclusions: [
      '4 Nights in 4-Star Bur Dubai/Deira hotel',
      'Daily international buffet breakfast',
      'Roundtrip airport transfers from Dubai International Airport (DXB)',
      'Desert Safari with dune bashing, camel ride & BBQ buffet',
      'Burj Khalifa 124th Floor entry ticket',
      'Dhow Cruise Dinner in Dubai Marina',
      'UAE tourist visa + COVID medical insurance',
      '5% GST compliance with all hotel municipality taxes',
    ],
    exclusions: ['Tourism Dirham Fee payable at hotel', 'Personal expenses & tips', 'Lunch unless specified'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Dubai ➔ Marina Dhow Cruise Dinner',
        description: 'Airport meet & greet, transfer to your 4-star hotel. Evening boarding on a luxury Marina Dhow Cruise for a 2-hour illuminated dinner cruise with live entertainment.',
        meals: 'Dinner',
        hotel: '4-Star Citymax Bur Dubai or similar',
        activities: ['Airport Meet & Greet', 'Marina Dhow Cruise Dinner'],
      },
      {
        dayNumber: 2,
        title: 'Dubai City Tour ➔ Burj Khalifa 124th Floor',
        description: 'Morning guided city tour covering Dubai Frame, Zabeel Palace, and Jumeirah Beach. Afternoon entry to At The Top Burj Khalifa (124th Floor) followed by Dubai Fountain show.',
        meals: 'Breakfast',
        hotel: '4-Star Citymax Bur Dubai or similar',
        activities: ['City Sightseeing Tour', 'Burj Khalifa Observation Deck'],
      },
      {
        dayNumber: 3,
        title: 'Leisure Morning ➔ 4x4 Desert Safari with BBQ Dinner',
        description: 'Morning free for shopping at Gold Souk and Meena Bazaar. At 3:00 PM, 4x4 Land Cruiser pickup for high-dune bashing, sandboarding, camel rides, and Arabic BBQ dinner with fire shows.',
        meals: 'Breakfast, BBQ Dinner',
        hotel: '4-Star Citymax Bur Dubai or similar',
        activities: ['4x4 Dune Bashing', 'Camel Ride', 'Belly Dance Show'],
      },
      {
        dayNumber: 4,
        title: 'Abu Dhabi Day Trip: Sheikh Zayed Mosque & BAPS Mandir',
        description: 'Full-day excursion to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque and the historic BAPS Hindu Mandir Abu Dhabi before returning to Dubai.',
        meals: 'Breakfast',
        hotel: '4-Star Citymax Bur Dubai or similar',
        activities: ['Sheikh Zayed Mosque', 'BAPS Hindu Mandir Abu Dhabi'],
      },
      {
        dayNumber: 5,
        title: 'Souvenir Shopping ➔ Return Flight',
        description: 'Buffet breakfast, last-minute shopping at Dubai Mall or Deira souks, and private transfer to airport for your flight home.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Shopping', 'Airport Transfer'],
      },
    ],
    hotels: [
      { name: 'Citymax Hotel Bur Dubai', category: '4-Star', city: 'Dubai', nights: 4 },
      { name: 'Grand Excelsior Hotel Deira', category: '4-Star', city: 'Dubai', nights: 4 },
    ],
    faqs: [
      {
        question: 'Are vegetarian and Jain meals readily available in Dubai?',
        answer: 'Yes! Bur Dubai, Karama, and Deira have hundreds of authentic Indian, Gujarati, and Jain restaurants. Our meal vouchers are curated accordingly.',
      },
      {
        question: 'How fast is the UAE visa issued?',
        answer: 'UAE tourist e-visas are processed in 24 to 48 working hours with passport front/back copy and photograph.',
      },
    ],
  },

  kashmir: {
    destination: 'Kashmir, India',
    destinationSlug: 'kashmir',
    country: 'India',
    region: 'North India',
    theme: 'Himalayan Romance & Snow',
    isInternational: false,
    durationDays: 5,
    durationNights: 4,
    startingPrice: 14999,
    discountPrice: 19500,
    heroImage: '/destinations/verified/kashmir-dal-lake.jpg',
    highlights: [
      '1 Night in Handcrafted Luxury Cedarwood Houseboat on Dal Lake',
      'Complimentary 1-Hour Sunset Shikara Ride with floral photo session',
      'Gulmarg Gondola ride with Apharwat Peak snow vista assistance',
      'Pahalgam Lidder River valley & Betaab Valley romantic excursion',
      'Special Honeymoon Inclusions: Candlelight dinner, floral bed decor & Kashmiri Kahwa',
      'Dedicated private heated AC sedan for all 5 days transfers',
    ],
    inclusions: [
      '1 Night in Super Deluxe Houseboat (Dal/Nigeen Lake)',
      '3 Nights in 4-Star Heated Hotels (Gulmarg, Pahalgam & Srinagar)',
      'Daily breakfast and dinner (including traditional Wazwan meal)',
      'Private AC Etios/Dzire cab with experienced local Kashmiri chauffeur',
      '1-Hour sunset Shikara ride on Dal Lake',
      'Toll tax, parking, driver allowances, and 5% GST included',
    ],
    exclusions: ['Gondola tickets', 'Pony/Horse rides', 'Aru/Betaab valley local union taxi'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Srinagar ➔ Houseboat Check-in ➔ Sunset Shikara',
        description: 'Airport arrival, traditional Kashmiri Kahwa welcome, and transfer to a luxury cedarwood houseboat on Dal Lake. Evening 1-hour sunset Shikara ride across floating gardens.',
        meals: 'Dinner',
        hotel: 'Deluxe Royal Heritage Houseboat',
        activities: ['Houseboat Check-In', 'Dal Lake Sunset Shikara'],
      },
      {
        dayNumber: 2,
        title: 'Srinagar to Gulmarg ➔ Gondola Cable Car Snow Excursion',
        description: 'Scenic 52 km drive through snow-draped pine woods to Gulmarg. Proceed to the Gondola cable car station for Apharwat snow vistas and snow sledging.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star Royal Park Hotel Gulmarg',
        activities: ['Drive to Gulmarg', 'Gondola Cable Car Ride'],
      },
      {
        dayNumber: 3,
        title: 'Gulmarg to Pahalgam ➔ Saffron Fields of Pampore',
        description: 'Drive towards Pahalgam (140 km). En route, walk through purple saffron fields in Pampore. Check into your river-facing luxury hotel along the Lidder River.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star Pine N Peak Pahalgam',
        activities: ['Pampore Saffron Farms', 'Lidder River Walk'],
      },
      {
        dayNumber: 4,
        title: 'Pahalgam (Betaab Valley / Aru) ➔ Srinagar Mughal Gardens',
        description: 'Morning excursion to Betaab Valley or Aru Village. Afternoon drive back to Srinagar to explore Mughal Gardens: Nishat Bagh and Shalimar Bagh.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star Hotel Grand Mumtaz Srinagar',
        activities: ['Betaab Valley Tour', 'Mughal Gardens'],
      },
      {
        dayNumber: 5,
        title: 'Lal Chowk Souvenirs ➔ Departure from Srinagar Airport',
        description: 'Breakfast, shopping for authentic Kashmiri Pashmina shawls, saffron, and dry fruits, followed by airport drop.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Pashmina Shopping', 'Airport Transfer'],
      },
    ],
    hotels: [
      { name: 'Royal Heritage Luxury Houseboat', category: 'Super Deluxe', city: 'Srinagar Dal Lake', nights: 1 },
      { name: 'Hotel Royal Park Gulmarg', category: '4-Star Heated', city: 'Gulmarg', nights: 1 },
      { name: 'Pine N Peak Resort', category: '4-Star Luxury', city: 'Pahalgam', nights: 1 },
      { name: 'Grand Mumtaz Resort', category: '4-Star Deluxe', city: 'Srinagar', nights: 1 },
    ],
    faqs: [
      {
        question: 'Are Gulmarg Gondola tickets included in this package?',
        answer: 'Gondola tickets can be added at official JKCCC portal rates (₹800 Phase 1 / ₹1,050 Phase 2) with priority slot guidance.',
      },
      {
        question: 'Is Kashmir safe for families and honeymooners?',
        answer: 'Yes, Kashmir receives thousands of families and couple travelers daily and has dedicated tourist police and hospitable locals.',
      },
    ],
  },

  ayodhya: {
    destination: 'Ayodhya & Varanasi, India',
    destinationSlug: 'ayodhya-varanasi',
    country: 'India',
    region: 'North India',
    theme: 'Sacred Pilgrimage & Teerth',
    isInternational: false,
    durationDays: 4,
    durationNights: 3,
    startingPrice: 11999,
    discountPrice: 15500,
    heroImage: '/destinations/verified/ayodhya-ram-mandir.jpg',
    highlights: [
      'Ram Janmabhoomi Mandir VIP Darshan & Hanumangarhi Temple in Ayodhya',
      'Evening Saryu Aarti with floating deepdaan at Ram Ki Paidi',
      'Holy dip at Triveni Sangam (Ganga, Yamuna & Saraswati) in Prayagraj',
      'Kashi Vishwanath Corridor VIP Sugam Darshan & Annapurna Temple in Varanasi',
      'Private boat ride at Dashashwamedh Ghat for the grand evening Ganga Aarti',
      'Dedicated AC vehicle throughout the entire 4-day pilgrimage',
    ],
    inclusions: [
      '1 Night in Ayodhya 4-Star Hotel + 2 Nights in Varanasi 4-Star Hotel',
      'Daily sattvik breakfast and dinner',
      'Private AC tourist vehicle for all transfers and inter-city travel',
      'Private evening boat ride on River Ganga in Varanasi',
      'Local temple priest guide assistance for smooth puja & rituals',
      'All toll taxes, parking fees, driver allowances & 5% GST',
    ],
    exclusions: ['Special puja dakshina / personal offerings', 'Flight/Train tickets', 'Monument entry fees'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Ayodhya ➔ Ram Mandir VIP Darshan ➔ Saryu Aarti',
        description: 'Pickup from Ayodhya/Lucknow. Check in to hotel. VIP Darshan at the grand Ram Janmabhoomi Temple and Hanumangarhi. Evening witness the divine Saryu Maha Aarti at Ram Ki Paidi.',
        meals: 'Dinner',
        hotel: '4-Star Royal Heritage Ayodhya',
        activities: ['Ram Mandir VIP Darshan', 'Hanumangarhi Temple', 'Saryu River Aarti'],
      },
      {
        dayNumber: 2,
        title: 'Ayodhya to Prayagraj (Sangam Snan) ➔ Varanasi Arrival',
        description: 'Morning drive to Prayagraj. Visit Triveni Sangam on an engine boat for holy snan and puja. Darshan of Bade Hanumanji and drive onward to Kashi Varanasi.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star Hotel Surya Varanasi',
        activities: ['Triveni Sangam Snan', 'Bade Hanumanji Darshan', 'Drive to Kashi'],
      },
      {
        dayNumber: 3,
        title: 'Kashi Vishwanath Sugam Darshan ➔ Evening Ganga Aarti Boat',
        description: 'Early morning VIP Sugam Darshan at Kashi Vishwanath Jyotirlinga. In the evening, private decorated boat cruise to Dashashwamedh Ghat for the grand Ganga Aarti.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star Hotel Surya Varanasi',
        activities: ['Kashi Vishwanath Corridor', 'Ganga Aarti Boat View'],
      },
      {
        dayNumber: 4,
        title: 'Sarnath Buddhist Stupa ➔ Departure from Varanasi',
        description: 'Visit Sarnath where Lord Buddha gave his first sermon. Shop for authentic Banarasi silk sarees before transfer to Varanasi Airport or Railway Station.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Sarnath Stupa Tour', 'Banarasi Silk Shopping', 'Airport Drop'],
      },
    ],
    hotels: [
      { name: 'Royal Heritage Resort Ayodhya', category: '4-Star', city: 'Ayodhya', nights: 1 },
      { name: 'Hotel Surya Kaiser Palace', category: '4-Star Heritage', city: 'Varanasi', nights: 2 },
    ],
    faqs: [
      {
        question: 'How is VIP Darshan arranged at Ram Mandir Ayodhya?',
        answer: 'Our ground coordinators assist with scheduled Temple Trust passes to minimize queuing for senior citizens and families.',
      },
      {
        question: 'Can this tour start from Lucknow or Ayodhya Airport?',
        answer: 'Yes! We arrange pickups from both Ayodhya Maharishi Valmiki Airport (AYJ) and Lucknow Airport (LKO).',
      },
    ],
  },

  bali: {
    destination: 'Bali, Indonesia',
    destinationSlug: 'bali',
    country: 'Indonesia',
    region: 'Southeast Asia',
    theme: 'Romantic Island Retreat',
    isInternational: true,
    durationDays: 6,
    durationNights: 5,
    startingPrice: 38500,
    discountPrice: 47000,
    heroImage: '/destinations/verified/bali-kelingking.jpg',
    highlights: [
      '2 Nights in Luxury Private Pool Villa in Seminyak / Ubud',
      'Instagram-famous Floating Breakfast & flower pool decoration',
      'Nusa Penida Island Tour: Kelingking T-Rex Beach & Angel Billabong',
      'Traditional 90-Minute Balinese Couple Aromatherapy Spa',
      'Uluwatu Sunset Temple cliff-top Kecak Fire Dance performance',
      'Fast-track Bali e-VoA and tourist tax concierge support',
    ],
    inclusions: [
      '3 Nights in 4-Star Beach Resort in Seminyak',
      '2 Nights in Private Pool Villa with plunge pool',
      'Daily breakfast including 1 floating breakfast',
      'Nusa Penida Day Tour with shared fast boat tickets & island lunch',
      'Private AC car for all transfers and excursions',
      'Uluwatu Temple entry tickets and Kecak dance show',
      '5% GST compliance and 24x7 WhatsApp concierge',
    ],
    exclusions: ['Bali Visa on Arrival ($35 USD)', 'Bali Tourist Tax ($10 USD)', 'Water sports charges'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Bali ➔ Private Villa Check-In ➔ Candlelight Dinner',
        description: 'Chauffeur pickup from Denpasar Ngurah Rai Airport (DPS) and transfer to your luxury private pool villa. Unwind with romantic candlelit dinner.',
        meals: 'Dinner',
        hotel: 'The Uma Villa Seminyak',
        activities: ['Airport Private Transfer', 'Candlelight Dinner'],
      },
      {
        dayNumber: 2,
        title: 'Floating Breakfast ➔ Kintamani Volcano ➔ Bali Swing',
        description: 'Floating breakfast in your pool. Visit Kintamani volcano, Tegallalang rice terraces, try the Bali Jungle Swing, and swim at Tegenungan Waterfall.',
        meals: 'Breakfast',
        hotel: 'The Uma Villa Seminyak',
        activities: ['Floating Breakfast', 'Bali Swing', 'Kintamani Volcano'],
      },
      {
        dayNumber: 3,
        title: 'Nusa Penida Island Speedboat Cruise ➔ Kelingking Beach',
        description: 'Speedboat to Nusa Penida island. Visit Kelingking T-Rex cliff, Angel Billabong natural infinity pool, and Broken Beach with lunch.',
        meals: 'Breakfast, Lunch',
        hotel: 'Courtyard by Marriott Seminyak',
        activities: ['Nusa Penida Speedboat', 'Kelingking Cliff'],
      },
      {
        dayNumber: 4,
        title: 'Balinese Couple Spa ➔ Uluwatu Cliff Temple & Kecak Dance',
        description: '90-minute Balinese couple aromatherapy massage. Afternoon drive to cliff-top Uluwatu Temple to watch the sunset Kecak fire dance drama.',
        meals: 'Breakfast',
        hotel: 'Courtyard by Marriott Seminyak',
        activities: ['Couple Aromatherapy Spa', 'Uluwatu Temple & Kecak Dance'],
      },
      {
        dayNumber: 5,
        title: 'Tanah Lot Sea Temple ➔ Beach Club Sunset',
        description: 'Visit iconic Tanah Lot Temple resting on a sea rock. Spend the afternoon at Finns or Potato Head beach club.',
        meals: 'Breakfast',
        hotel: 'Courtyard by Marriott Seminyak',
        activities: ['Tanah Lot Sea Temple', 'Beach Club Sunset'],
      },
      {
        dayNumber: 6,
        title: 'Krisna Souvenirs ➔ Return Flight',
        description: 'Breakfast and check-out. Shop at Krisna Oleh Oleh market before transfer to Denpasar Airport for flight home.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Souvenir Shopping', 'Airport Transfer'],
      },
    ],
    hotels: [
      { name: 'The Uma Seminyak Luxury Pool Villa', category: '5-Star Private Villa', city: 'Seminyak', nights: 2 },
      { name: 'Courtyard by Marriott Bali', category: '4-Star Resort', city: 'Seminyak', nights: 3 },
    ],
    faqs: [
      {
        question: 'Do Indian passport holders need a visa for Bali?',
        answer: 'Indian travelers get a 30-day Visa on Arrival (VoA) online or on arrival at Denpasar Airport for approx ₹2,900 ($35 USD).',
      },
      {
        question: 'Is Indian food available in Bali?',
        answer: 'Yes, Seminyak, Kuta, and Ubud have dozens of popular Indian restaurants serving North Indian, South Indian, and Jain vegetarian cuisines.',
      },
    ],
  },

  thailand: {
    destination: 'Thailand (Bangkok & Pattaya)',
    destinationSlug: 'thailand',
    country: 'Thailand',
    region: 'Southeast Asia',
    theme: 'Budget International Holiday',
    isInternational: true,
    durationDays: 5,
    durationNights: 4,
    startingPrice: 24999,
    discountPrice: 29999,
    heroImage: '/destinations/verified/thailand-phi-phi.jpg',
    highlights: [
      'Coral Island speedboat excursion with water sports & Indian lunch',
      'VIP tickets to the world-renowned Alcazar Cabaret Show in Pattaya',
      'Chao Phraya Princess luxury dinner cruise with live international jazz',
      'Bangkok City & Temple Tour: Golden Buddha & Marble Temple',
      'Visa-Free entry for Indian passport holders (zero embassy visa fee)',
    ],
    inclusions: [
      '2 Nights in 4-Star Pattaya Beach Hotel',
      '2 Nights in 4-Star Central Bangkok Hotel',
      'Daily international buffet breakfast',
      'Coral Island tour by private speedboat with Indian buffet lunch',
      'Alcazar Cabaret Show VIP seating passes',
      'Chao Phraya River luxury dinner cruise ticket',
      'All airport, inter-city and sightseeing transfers in AC coach',
      '5% GST compliance with English/Hindi tour escort',
    ],
    exclusions: ['Water sports activities at Coral Island', 'Personal expenses & tips'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Bangkok ➔ Drive to Pattaya ➔ Alcazar Cabaret Show',
        description: 'Airport arrival, 2-hour AC coach drive to Pattaya. Check in to your 4-star hotel. Evening attend the famous Alcazar Cabaret show.',
        meals: 'Dinner',
        hotel: '4-Star Best Western Plus Pattaya',
        activities: ['Drive to Pattaya', 'Alcazar Cabaret VIP Show'],
      },
      {
        dayNumber: 2,
        title: 'Coral Island Speedboat Safari ➔ Indian Lunch',
        description: 'Speedboat cruise to Coral Island (Koh Larn). Enjoy white sand beaches and optional parasailing. Return for hot Indian buffet lunch.',
        meals: 'Breakfast, Lunch',
        hotel: '4-Star Best Western Plus Pattaya',
        activities: ['Speedboat to Coral Island', 'Indian Lunch'],
      },
      {
        dayNumber: 3,
        title: 'Pattaya to Bangkok ➔ Chao Phraya Dinner Cruise',
        description: 'Drive to Bangkok. Check into central hotel. Evening boarding on Chao Phraya Princess Cruise for grand buffet dinner along Wat Arun.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star Hotel Clover Asoke Bangkok',
        activities: ['Drive to Bangkok', 'Chao Phraya Dinner Cruise'],
      },
      {
        dayNumber: 4,
        title: 'Bangkok Golden Buddha Temple ➔ Platinum Mall Shopping',
        description: 'Visit Wat Traimit (Solid Gold Buddha) and Marble Temple. Afternoon shopping at Platinum Fashion Mall and CentralWorld.',
        meals: 'Breakfast',
        hotel: '4-Star Hotel Clover Asoke Bangkok',
        activities: ['Temple Tour', 'Shopping Extravaganza'],
      },
      {
        dayNumber: 5,
        title: 'Souvenir Shopping ➔ Return Flight',
        description: 'Breakfast, leisure shopping, and private transfer to Bangkok Airport for flight home.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Airport Transfer'],
      },
    ],
    hotels: [
      { name: 'Best Western Plus Pattaya', category: '4-Star', city: 'Pattaya', nights: 2 },
      { name: 'Hotel Clover Asoke Bangkok', category: '4-Star', city: 'Bangkok', nights: 2 },
    ],
    faqs: [
      {
        question: 'Do Indians need a visa for Thailand?',
        answer: 'Indian passport holders enjoy Visa-Free entry into Thailand for tourist stays up to 30 days! No prior fee or paperwork required.',
      },
      {
        question: 'Is Indian food readily available in Pattaya and Bangkok?',
        answer: 'Yes! Both cities have hundreds of authentic Indian restaurants on walking street and central avenues.',
      },
    ],
  },

  chardham: {
    destination: 'Uttarakhand Char Dham, India',
    destinationSlug: 'char-dham',
    country: 'India',
    region: 'North India',
    theme: 'Sacred Himalayan Pilgrimage',
    isInternational: false,
    durationDays: 10,
    durationNights: 9,
    startingPrice: 28500,
    discountPrice: 34000,
    heroImage: '/destinations/verified/chardham-kedarnath.jpg',
    highlights: [
      'Complete Holy Yatra: Yamunotri, Gangotri, Kedarnath & Badrinath',
      'Haridwar Ganga Aarti & Rishikesh Ram Jhula sightseeing',
      'Night halt at Kedarnath near temple for early morning Maha Abhishek',
      'Badrinath Tapt Kund holy bath and Mana Village (Last Indian Village)',
      'Official Uttarakhand Char Dham Biometric Registration assistance',
      'Pushback luxury AC coach / private vehicle with expert hill driver',
    ],
    inclusions: [
      '9 Nights accommodation in clean verified pilgrim hotels & camps',
      'Daily sattvik breakfast and pure vegetarian dinner',
      'All transfers and sightseeing by dedicated AC vehicle (AC off on hills)',
      'Haridwar Har Ki Pauri Ganga Aarti boat/ghat assistance',
      'Char Dham biometric registration portal assistance',
      'Driver allowances, toll tax, parking & 5% GST included',
    ],
    exclusions: ['Helicopter tickets for Kedarnath', 'Pony/Doli charges', 'Personal puja dakshina'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival ➔ Haridwar Har Ki Pauri Ganga Aarti',
        description: 'Drive to Haridwar. Check in to hotel. Evening attend the grand Ganga Aarti at Har Ki Pauri.',
        meals: 'Dinner',
        hotel: '3-Star Hotel Ganga Lahari Haridwar',
        activities: ['Har Ki Pauri Ganga Aarti'],
      },
      {
        dayNumber: 2,
        title: 'Haridwar to Barkot via Mussoorie',
        description: 'Drive along scenic Yamuna valley to Barkot (215 km). Rest and prepare for Yamunotri trek next morning.',
        meals: 'Breakfast, Dinner',
        hotel: 'Camp/Hotel Barkot',
        activities: ['Scenic Hill Drive'],
      },
      {
        dayNumber: 3,
        title: 'Barkot ➔ Yamunotri Dham Darshan ➔ Return to Barkot',
        description: 'Trek 6 km to Yamunotri Dham. Cook rice in Surya Kund hot springs, offer prayers at Divya Shila, and darshan of Maa Yamuna.',
        meals: 'Breakfast, Dinner',
        hotel: 'Camp/Hotel Barkot',
        activities: ['Yamunotri Trek', 'Surya Kund Snan'],
      },
      {
        dayNumber: 4,
        title: 'Barkot to Uttarkashi ➔ Kashi Vishwanath Temple',
        description: 'Drive to holy town of Uttarkashi along Bhagirathi River. Visit ancient Kashi Vishwanath Temple with Shakti Trishul.',
        meals: 'Breakfast, Dinner',
        hotel: 'Hotel Shivalik Uttarkashi',
        activities: ['Kashi Vishwanath Temple Darshan'],
      },
      {
        dayNumber: 5,
        title: 'Uttarkashi ➔ Gangotri Dham ➔ Return to Uttarkashi',
        description: 'Drive through Harshil valley to Gangotri Dham. Take holy snan in Bhagirathi river and attend Ganga Puja at temple.',
        meals: 'Breakfast, Dinner',
        hotel: 'Hotel Shivalik Uttarkashi',
        activities: ['Gangotri Darshan', 'Bhagirathi Holy Dip'],
      },
      {
        dayNumber: 6,
        title: 'Uttarkashi to Guptkashi / Sonprayag',
        description: 'Scenic mountain drive to Guptkashi along Mandakini river. Visit ancient Ardhanareshwar Temple.',
        meals: 'Breakfast, Dinner',
        hotel: 'Hotel Kedar Valley Guptkashi',
        activities: ['Mandakini River Drive'],
      },
      {
        dayNumber: 7,
        title: 'Sonprayag to Kedarnath Dham ➔ Evening Aarti',
        description: 'Trek 16 km up to holy Kedarnath Dham at 11,755 ft. Attend the soul-stirring evening Aarti at Baba Kedar Temple.',
        meals: 'Breakfast, Dinner',
        hotel: 'GMVN Camp near Kedarnath Temple',
        activities: ['Kedarnath Trek', 'Evening Maha Aarti'],
      },
      {
        dayNumber: 8,
        title: 'Morning Kedarnath Darshan ➔ Trek Down ➔ Pipalkoti',
        description: 'Morning Rudra Abhishek at Kedarnath Temple. Trek down to Gaurikund and drive to Pipalkoti for night halt.',
        meals: 'Breakfast, Dinner',
        hotel: 'Hotel Comfort Inn Pipalkoti',
        activities: ['Morning Darshan', 'Trek Down'],
      },
      {
        dayNumber: 9,
        title: 'Pipalkoti to Badrinath Dham ➔ Tapt Kund & Mana Village',
        description: 'Drive to Badrinath. Holy bath in Tapt Kund. Darshan of Lord Badri Vishal. Visit Mana Village (Last Indian Village).',
        meals: 'Breakfast, Dinner',
        hotel: 'Hotel Snow Crest Badrinath',
        activities: ['Tapt Kund Snan', 'Badrinath Darshan', 'Mana Village'],
      },
      {
        dayNumber: 10,
        title: 'Badrinath to Rishikesh ➔ Return Drop',
        description: 'Drive down through Devprayag Sangam. Stop at Rishikesh Ram Jhula before final drop.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Devprayag Sangam', 'Rishikesh Ram Jhula', 'Return Drop'],
      },
    ],
    hotels: [
      { name: 'Hotel Ganga Lahari', category: '3-Star', city: 'Haridwar', nights: 1 },
      { name: 'Barkot Himalayan Camp', category: 'Deluxe Camp', city: 'Barkot', nights: 2 },
      { name: 'Shivalik Resort', category: '3-Star', city: 'Uttarkashi', nights: 2 },
      { name: 'Kedar Valley Camp', category: 'Deluxe', city: 'Guptkashi', nights: 1 },
      { name: 'Kedarnath Temple Guest House', category: 'Pilgrim Stay', city: 'Kedarnath', nights: 1 },
      { name: 'Pipalkoti Inn', category: 'Deluxe', city: 'Pipalkoti', nights: 1 },
      { name: 'Snow Crest Resort', category: '3-Star', city: 'Badrinath', nights: 1 },
    ],
    faqs: [
      {
        question: 'How do you arrange biometric registration for Char Dham Yatra?',
        answer: 'Our team registers each pilgrim in advance on the official Uttarakhand Tourism Char Dham portal and provides confirmed QR-code passes before your journey.',
      },
      {
        question: 'Can Kedarnath helicopter tickets be booked?',
        answer: 'Yes, helicopter tickets from Phata, Sersi, or Guptkashi to Kedarnath can be booked through official IRCTC HeliYatra portal with our concierge assistance.',
      },
    ],
  },

  goa: {
    destination: 'Goa, India',
    destinationSlug: 'goa',
    country: 'India',
    region: 'West India',
    theme: 'Beach Vacation & Nightlife',
    isInternational: false,
    durationDays: 4,
    durationNights: 3,
    startingPrice: 9999,
    discountPrice: 13500,
    heroImage: '/destinations/verified/goa-palolem.jpg',
    highlights: [
      '3 Nights in 4-Star Beachfront Resort with Swimming Pool',
      'Mandovi River Sunset Catamaran Cruise with Goan folk dance',
      'Water sports package at Calangute: parasailing, jet-ski & banana ride',
      'Old Goa UNESCO Churches: Basilica of Bom Jesus & Se Cathedral',
      'Dedicated private AC cab for airport transfers & all 4 days sightseeing',
    ],
    inclusions: [
      '3 Nights stay in 4-Star North Goa Beach Resort',
      'Daily breakfast buffet at resort',
      'Private AC cab for airport pickup/drop and full day sightseeing',
      'Mandovi River Sunset Cruise entry tickets',
      'All toll taxes, parking, driver allowances & 5% GST',
    ],
    exclusions: ['Water sports ride charges', 'Personal bar bills and night club cover charges'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Goa ➔ Resort Check-In ➔ Anjuna Beach Sunset',
        description: 'Chauffeur pickup from MOPA or Dabolim Airport. Check into your 4-star resort. Relax by the pool. Evening sunset cocktails and live music at Anjuna rocky beach shacks.',
        meals: 'Dinner',
        hotel: '4-Star Whispering Palms Beach Resort',
        activities: ['Airport Pickup', 'Anjuna Beach Sunset'],
      },
      {
        dayNumber: 2,
        title: 'North Goa Beaches ➔ Chapora Fort ➔ Water Sports',
        description: 'Morning water sports at Calangute and Baga. Visit historic Chapora Fort overlooking the coastline. Evening explore Tito’s Lane nightlife.',
        meals: 'Breakfast',
        hotel: '4-Star Whispering Palms Beach Resort',
        activities: ['Water Sports', 'Chapora Fort', 'Baga Beach'],
      },
      {
        dayNumber: 3,
        title: 'Old Goa Heritage Churches ➔ Mandovi River Cruise',
        description: 'Visit the 400-year-old Basilica of Bom Jesus and Se Cathedral. In the evening, board a 1-hour Mandovi River sunset cruise with live Goan folk music and DJ.',
        meals: 'Breakfast',
        hotel: '4-Star Whispering Palms Beach Resort',
        activities: ['Basilica of Bom Jesus', 'Mandovi Sunset Cruise'],
      },
      {
        dayNumber: 4,
        title: 'Flea Market Souvenirs ➔ Airport Drop',
        description: 'Breakfast, shopping for Goan cashews, feni, and beachwear, before private cab transfer to airport for your flight home.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Souvenir Shopping', 'Airport Transfer'],
      },
    ],
    hotels: [
      { name: 'Whispering Palms Beach Resort', category: '4-Star Beachfront', city: 'Candolim', nights: 3 },
    ],
    faqs: [
      {
        question: 'Which airport is closer for this package?',
        answer: 'Both Manohar International Airport MOPA (GOX) and Dabolim Airport (GOI) are supported with private cab transfers included in the package.',
      },
      {
        question: 'Can private pool villas be upgraded in this package?',
        answer: 'Yes! We offer private 2BHK/3BHK luxury pool villas in Candolim and Anjuna with dedicated butler service on request.',
      },
    ],
  },

  kerala: {
    destination: 'Kerala, India',
    destinationSlug: 'kerala',
    country: 'India',
    region: 'South India',
    theme: 'Backwaters & Lush Hills',
    isInternational: false,
    durationDays: 5,
    durationNights: 4,
    startingPrice: 12999,
    discountPrice: 16500,
    heroImage: '/destinations/verified/kerala-alleppey.jpg',
    highlights: [
      '1 Night in Private Luxury Houseboat cruising Alleppey backwaters',
      '2 Nights in Munnar mist-covered tea garden mountain resort',
      'Cheeyappara & Valara Waterfalls photo stops',
      'Kathakali Classical Dance & Kalaripayattu Martial Arts cultural show',
      'Dedicated private AC sedan with English/Hindi speaking driver',
    ],
    inclusions: [
      '2 Nights in Munnar 4-Star Hill Resort',
      '1 Night in Thekkady 4-Star Resort',
      '1 Night in Alleppey Private AC Deluxe Houseboat',
      'All meals on houseboat (Lunch, Evening Tea, Dinner, Breakfast)',
      'Daily breakfast at hotels',
      'Private AC sedan for all transfers and sightseeing',
      'Toll tax, parking, driver allowances & 5% GST included',
    ],
    exclusions: ['Spice plantation entry fee', 'Periyar Lake boat ticket', 'Personal tips'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Cochin Arrival ➔ Drive to Munnar ➔ Waterfalls',
        description: 'Pickup from Cochin Airport / Ernakulam Railway Station. Scenic drive to Munnar passing Cheeyappara and Valara waterfalls and endless rolling tea plantations.',
        meals: 'Dinner',
        hotel: '4-Star Tea County Munnar',
        activities: ['Cheeyappara Waterfalls', 'Munnar Tea Hills Drive'],
      },
      {
        dayNumber: 2,
        title: 'Munnar Tea Gardens ➔ Eravikulam National Park ➔ Mattupetty Dam',
        description: 'Visit Eravikulam National Park (home to endangered Nilgiri Tahr), Tata Tea Museum, Mattupetty Dam, and Echo Point.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star Tea County Munnar',
        activities: ['Eravikulam Park', 'Tata Tea Museum', 'Mattupetty Dam'],
      },
      {
        dayNumber: 3,
        title: 'Munnar to Thekkady ➔ Periyar Wildlife & Spice Plantation',
        description: 'Drive to Thekkady (90 km). Stroll through aromatic cardamom, cinnamon, and pepper spice plantations. Attend martial arts show.',
        meals: 'Breakfast, Dinner',
        hotel: '4-Star The Elephant Court Thekkady',
        activities: ['Spice Plantation Tour', 'Kalaripayattu Show'],
      },
      {
        dayNumber: 4,
        title: 'Thekkady to Alleppey ➔ Luxury Backwater Houseboat Cruise',
        description: 'Drive to Alleppey. Board your private luxury houseboat at 12:00 PM. Cruise along emerald palm-fringed canals with traditional Kerala meals.',
        meals: 'Breakfast, Lunch, Dinner',
        hotel: 'Deluxe Private AC Houseboat',
        activities: ['Alleppey Backwaters Cruise', 'Village Canal Views'],
      },
      {
        dayNumber: 5,
        title: 'Alleppey to Cochin ➔ Fort Kochi ➔ Departure',
        description: 'Breakfast on the water, disembark houseboat at 9:00 AM. Visit Fort Kochi Chinese Fishing Nets before drop at Cochin Airport.',
        meals: 'Breakfast',
        hotel: 'Check-out',
        activities: ['Fort Kochi Chinese Nets', 'Airport Drop'],
      },
    ],
    hotels: [
      { name: 'Tea County Resort', category: '4-Star', city: 'Munnar', nights: 2 },
      { name: 'The Elephant Court', category: '4-Star', city: 'Thekkady', nights: 1 },
      { name: 'Alleppey Deluxe Houseboat', category: 'Private AC', city: 'Alleppey', nights: 1 },
    ],
    faqs: [
      {
        question: 'Are meals included on the Alleppey houseboat?',
        answer: 'Yes! All meals on the houseboat (traditional lunch, evening snacks & tea, dinner, and breakfast) are freshly prepared by an onboard private chef.',
      },
      {
        question: 'Is the houseboat completely private for our group/couple?',
        answer: 'Yes, we provide 100% private houseboats with private bedrooms, dining lounge, and sundeck exclusively for you.',
      },
    ],
  },
};

// Top 52 Programmatic Combinations Matrix
interface MatrixEntry {
  slug: string;
  blueprintKey: string;
  cityKey: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  priceModifier?: number;
  heroImage?: string;
}

const MATRIX_ENTRIES: MatrixEntry[] = [
  // Dubai Hubs
  {
    slug: 'dubai-tour-package-from-ahmedabad',
    blueprintKey: 'dubai',
    cityKey: 'ahmedabad',
    h1: 'Dubai Tour Package from Ahmedabad (Flight + 4-Star Hotel)',
    metaTitle: 'Dubai Tour Package from Ahmedabad: 5D/4N with Desert Safari @ ₹34,500',
    metaDescription: 'Book all-inclusive Dubai tour package from Ahmedabad. Direct flights from SVPI Airport, 4-star hotel, Burj Khalifa tickets, Desert Safari BBQ & visa.',
  },
  {
    slug: 'dubai-tour-package-from-mumbai',
    blueprintKey: 'dubai',
    cityKey: 'mumbai',
    h1: 'Dubai Tour Package from Mumbai (Direct Flight + 4-Star Hotel)',
    metaTitle: 'Dubai Tour Package from Mumbai: 5D/4N Luxury Tour with Desert Safari @ ₹34,500',
    metaDescription: 'Book Dubai holiday package from Mumbai with non-stop flights from BOM T2. Includes Burj Khalifa 124th floor, Desert Safari, Marina Dhow Cruise & UAE visa.',
  },
  {
    slug: 'dubai-tour-package-from-delhi',
    blueprintKey: 'dubai',
    cityKey: 'delhi',
    h1: 'Dubai Tour Package from Delhi (Direct Flight + 4-Star Hotel)',
    metaTitle: 'Dubai Tour Package from Delhi: 5D/4N with Burj Khalifa & Desert Safari @ ₹34,500',
    metaDescription: 'Book 5-Day Dubai vacation package from Delhi with non-stop flights from IGI T3. Includes 4-star Bur Dubai hotel, Abu Dhabi Mosque, Desert Safari & visa.',
  },
  {
    slug: 'dubai-tour-package-from-bangalore',
    blueprintKey: 'dubai',
    cityKey: 'bangalore',
    h1: 'Dubai Tour Package from Bangalore (Flight + 4-Star Hotel)',
    metaTitle: 'Dubai Tour Package from Bangalore: 5D/4N All-Inclusive Holiday @ ₹35,999',
    metaDescription: 'Book Dubai tour package from Bangalore Kempegowda Airport. Includes 4-star hotel stay, Burj Khalifa tickets, Desert Safari BBQ, Marina cruise & visa.',
  },
  {
    slug: 'dubai-5-days-luxury-family-tour',
    blueprintKey: 'dubai',
    cityKey: 'delhi',
    h1: 'Dubai 5 Days Luxury Family Tour (Burj Khalifa + Desert Safari + Dhow Cruise)',
    metaTitle: 'Dubai 5 Days Luxury Family Tour Package: 4-Star Hotels & Visa @ ₹34,500',
    metaDescription: 'Complete 5-Day Dubai luxury family vacation package. Includes Burj Khalifa 124th floor, 4x4 Desert Safari BBQ, Marina Dhow Cruise, Abu Dhabi tour & visa.',
  },

  // Kashmir Hubs
  {
    slug: 'kashmir-5-days-honeymoon-package',
    blueprintKey: 'kashmir',
    cityKey: 'delhi',
    h1: 'Kashmir Honeymoon Package 5 Days (Dal Lake Houseboat + Gulmarg Snow)',
    metaTitle: 'Kashmir Honeymoon Package 5 Days: Srinagar, Gulmarg & Pahalgam @ ₹14,999',
    metaDescription: 'Book romantic 5-Day Kashmir honeymoon tour package. Includes Dal Lake cedar houseboat, 1-hour Shikara ride, Gulmarg Gondola snow, Pahalgam valleys & candlelight dinner.',
  },
  {
    slug: 'kashmir-tour-package-from-delhi',
    blueprintKey: 'kashmir',
    cityKey: 'delhi',
    h1: 'Kashmir Tour Package from Delhi (Direct Flight + Houseboat Stay)',
    metaTitle: 'Kashmir Tour Package from Delhi: 5D/4N Srinagar, Gulmarg & Pahalgam @ ₹14,999',
    metaDescription: 'Book customized Kashmir holiday package from Delhi. Direct flights to Srinagar, Dal Lake luxury houseboat, sunset Shikara, Gulmarg snow slopes & private cab.',
  },
  {
    slug: 'kashmir-tour-package-from-mumbai',
    blueprintKey: 'kashmir',
    cityKey: 'mumbai',
    h1: 'Kashmir Tour Package from Mumbai (Flight + Houseboat + Private Cab)',
    metaTitle: 'Kashmir Tour Package from Mumbai: 5D/4N Gulmarg & Srinagar @ ₹16,500',
    metaDescription: 'Book Kashmir vacation package from Mumbai. Includes Dal Lake luxury houseboat, Gulmarg Gondola slot guidance, Pahalgam Lidder valley & private heated car.',
  },
  {
    slug: 'kashmir-tour-package-from-ahmedabad',
    blueprintKey: 'kashmir',
    cityKey: 'ahmedabad',
    h1: 'Kashmir Tour Package from Ahmedabad (Flight + Houseboat + Hotels)',
    metaTitle: 'Kashmir Tour Package from Ahmedabad: 5D/4N Snow & Dal Lake @ ₹15,999',
    metaDescription: 'Book Kashmir tour package from Ahmedabad. Dal Lake houseboat, Shikara ride, Gulmarg snow slopes, Pahalgam valleys with pure vegetarian and Jain meals.',
  },
  {
    slug: 'kashmir-tour-package-from-pune',
    blueprintKey: 'kashmir',
    cityKey: 'pune',
    h1: 'Kashmir Tour Package from Pune (Flight + Houseboat + Sightseeing)',
    metaTitle: 'Kashmir Tour Package from Pune: 5D/4N Gulmarg & Pahalgam Holiday @ ₹16,999',
    metaDescription: 'Book scenic Kashmir holiday from Pune. Includes Srinagar luxury houseboat, 1-hour Shikara, Gulmarg Gondola, Pahalgam river valley & private sedan.',
  },

  // Ayodhya & Varanasi Hubs
  {
    slug: 'ayodhya-ram-mandir-vip-darshan-tour',
    blueprintKey: 'ayodhya',
    cityKey: 'lucknow',
    h1: 'Ayodhya Ram Mandir VIP Darshan Tour (Ram Janmabhoomi + Saryu Aarti)',
    metaTitle: 'Ayodhya Ram Mandir VIP Darshan Tour Package: Saryu Aarti & 4-Star Stay @ ₹9,999',
    metaDescription: 'Book sacred Ayodhya Ram Mandir VIP Darshan tour. Includes Ram Janmabhoomi, Hanumangarhi, Saryu Maha Aarti at Ram Ki Paidi, 4-star hotel & private cab.',
  },
  {
    slug: 'ayodhya-varanasi-prayagraj-4-days-tour',
    blueprintKey: 'ayodhya',
    cityKey: 'lucknow',
    h1: 'Ayodhya Varanasi Prayagraj 4 Days Tour (VIP Darshan + Ganga Aarti)',
    metaTitle: 'Ayodhya Varanasi Prayagraj 4 Days Tour Package: Sacred Teerth @ ₹11,999',
    metaDescription: 'Book 4-Day Ayodhya, Varanasi & Prayagraj divine tour package. Includes Ram Mandir VIP Darshan, Saryu Aarti, Triveni Sangam Snan, Kashi Vishwanath & Dashashwamedh Ganga Aarti.',
  },
  {
    slug: 'ayodhya-tour-package-from-delhi',
    blueprintKey: 'ayodhya',
    cityKey: 'delhi',
    h1: 'Ayodhya Tour Package from Delhi (Vande Bharat / Flight + VIP Darshan)',
    metaTitle: 'Ayodhya Tour Package from Delhi: Ram Mandir Darshan & Saryu Aarti @ ₹11,999',
    metaDescription: 'Book Ayodhya spiritual yatra from Delhi. Vande Bharat Express or direct flight to Ayodhya Maharishi Valmiki Airport, Ram Janmabhoomi VIP Darshan & 4-star stay.',
  },
  {
    slug: 'ayodhya-tour-package-from-mumbai',
    blueprintKey: 'ayodhya',
    cityKey: 'mumbai',
    h1: 'Ayodhya Tour Package from Mumbai (Direct Flight + Ram Mandir Darshan)',
    metaTitle: 'Ayodhya Tour Package from Mumbai: Ram Mandir, Varanasi & Prayagraj @ ₹13,500',
    metaDescription: 'Book Ayodhya tour package from Mumbai with direct flights. Ram Janmabhoomi VIP Darshan, Kashi Vishwanath Jyotirlinga, Triveni Sangam holy snan & 4-star hotels.',
  },
  {
    slug: 'ayodhya-tour-package-from-lucknow',
    blueprintKey: 'ayodhya',
    cityKey: 'lucknow',
    h1: 'Ayodhya Tour Package from Lucknow (Expressway Cab + VIP Darshan)',
    metaTitle: 'Ayodhya Tour Package from Lucknow: Same Day & 2D/1N Ram Mandir Tour @ ₹6,999',
    metaDescription: 'Book convenient Ayodhya tour from Lucknow Airport / Charbagh Station via Purvanchal Expressway. Includes Ram Janmabhoomi VIP Darshan & private AC vehicle.',
  },

  // Bali Hubs
  {
    slug: 'bali-honeymoon-package-from-mumbai',
    blueprintKey: 'bali',
    cityKey: 'mumbai',
    h1: 'Bali Honeymoon Package from Mumbai (Private Pool Villa + Flights)',
    metaTitle: 'Bali Honeymoon Package from Mumbai: 6D/5N Private Pool Villa @ ₹38,500',
    metaDescription: 'Book romantic Bali honeymoon package from Mumbai. Includes 2 Nights luxury private pool villa in Seminyak, floating breakfast, Nusa Penida island tour & transfers.',
  },
  {
    slug: 'bali-honeymoon-package-from-delhi',
    blueprintKey: 'bali',
    cityKey: 'delhi',
    h1: 'Bali Honeymoon Package from Delhi (Private Pool Villa + Nusa Penida)',
    metaTitle: 'Bali Honeymoon Package from Delhi: 6D/5N Villa & Floating Breakfast @ ₹38,500',
    metaDescription: 'Book Bali couple honeymoon package from Delhi. Includes private pool villa, floating breakfast, Nusa Penida T-Rex cliff, Uluwatu sunset Kecak dance & visa support.',
  },
  {
    slug: 'bali-honeymoon-package-from-bangalore',
    blueprintKey: 'bali',
    cityKey: 'bangalore',
    h1: 'Bali Honeymoon Package from Bangalore (Pool Villa + Speedboat Cruise)',
    metaTitle: 'Bali Honeymoon Package from Bangalore: 6D/5N Couple Retreat @ ₹38,500',
    metaDescription: 'Book Bali honeymoon package from Bangalore BLR Airport. Includes Seminyak pool villa, couple aromatherapy spa, Nusa Penida island cruise & private chauffeur.',
  },
  {
    slug: 'bali-6-days-private-pool-villa-honeymoon',
    blueprintKey: 'bali',
    cityKey: 'mumbai',
    h1: 'Bali 6 Days Private Pool Villa Honeymoon (Floating Breakfast + Nusa Penida)',
    metaTitle: 'Bali 6 Days Private Pool Villa Honeymoon Package: Couple Retreat @ ₹38,500',
    metaDescription: 'Book ultimate 6-Day Bali honeymoon package. 2 Nights Seminyak pool villa, floating breakfast, Nusa Penida speedboat tour, Balinese spa & Tanah Lot temple.',
  },

  // Thailand Hubs
  {
    slug: 'thailand-tour-package-from-delhi',
    blueprintKey: 'thailand',
    cityKey: 'delhi',
    h1: 'Thailand Tour Package from Delhi (Bangkok + Pattaya 5 Days)',
    metaTitle: 'Thailand Tour Package from Delhi: 5D/4N Bangkok & Pattaya @ ₹24,999',
    metaDescription: 'Book budget Thailand tour package from Delhi. Includes Coral Island speedboat tour, Alcazar Cabaret Show, Chao Phraya luxury river cruise & 4-star hotels.',
  },
  {
    slug: 'thailand-tour-package-from-mumbai',
    blueprintKey: 'thailand',
    cityKey: 'mumbai',
    h1: 'Thailand Tour Package from Mumbai (Bangkok + Pattaya Beach 5 Days)',
    metaTitle: 'Thailand Tour Package from Mumbai: 5D/4N with Coral Island & Cruise @ ₹24,999',
    metaDescription: 'Book Thailand holiday package from Mumbai BOM T2. Non-stop flight options, Coral Island speedboat safari, Alcazar show, Chao Phraya dinner cruise & hotels.',
  },
  {
    slug: 'thailand-tour-package-from-kolkata',
    blueprintKey: 'thailand',
    cityKey: 'kolkata',
    h1: 'Thailand Tour Package from Kolkata (Short 2.5 Hr Direct Flight)',
    metaTitle: 'Thailand Tour Package from Kolkata: 5D/4N Bangkok & Pattaya @ ₹22,999',
    metaDescription: 'Book budget Thailand tour from Kolkata with rapid 2.5 hr direct flight. Includes Coral Island, Alcazar cabaret show, Chao Phraya cruise & 4-star hotels.',
  },
  {
    slug: 'thailand-5-days-bangkok-pattaya-budget-tour',
    blueprintKey: 'thailand',
    cityKey: 'delhi',
    h1: 'Thailand 5 Days Bangkok & Pattaya Budget Tour (Coral Island + Alcazar)',
    metaTitle: 'Thailand 5 Days Bangkok & Pattaya Budget Tour Package @ ₹24,999',
    metaDescription: 'Book 5-Day Thailand vacation package. Coral Island speedboat tour, Alcazar Cabaret, Chao Phraya River Princess dinner cruise, Golden Buddha & 4-star stays.',
  },

  // Char Dham Hubs
  {
    slug: 'char-dham-yatra-package-from-delhi',
    blueprintKey: 'chardham',
    cityKey: 'delhi',
    h1: 'Char Dham Yatra Package from Delhi (Yamunotri, Gangotri, Kedarnath, Badrinath)',
    metaTitle: 'Char Dham Yatra Package from Delhi 2026: 10D/9N Complete Yatra @ ₹28,500',
    metaDescription: 'Book sacred Char Dham Yatra 2026 tour package from Delhi. Includes Yamunotri, Gangotri, Kedarnath & Badrinath with Haridwar pickup, 4-star hotels, puja support & AC bus/cab.',
  },
  {
    slug: 'char-dham-yatra-package-from-ahmedabad',
    blueprintKey: 'chardham',
    cityKey: 'ahmedabad',
    h1: 'Char Dham Yatra Package from Ahmedabad (Flight / Train Connect + Hotels)',
    metaTitle: 'Char Dham Yatra Package from Ahmedabad 2026: 10D/9N Teerth @ ₹29,999',
    metaDescription: 'Book Char Dham Yatra from Ahmedabad. Complete darshan of Yamunotri, Gangotri, Kedarnath & Badrinath with pure Gujarati and Jain food, biometric pass assistance.',
  },
  {
    slug: 'char-dham-yatra-10-days-complete-yatra',
    blueprintKey: 'chardham',
    cityKey: 'delhi',
    h1: 'Char Dham Yatra 10 Days Complete Sacred Yatra (All 4 Dhams)',
    metaTitle: 'Char Dham Yatra 10 Days Complete Yatra Package 2026 @ ₹28,500',
    metaDescription: 'Complete 10-Day Char Dham Himalayan Yatra covering Yamunotri, Gangotri, Kedarnath and Badrinath with Haridwar Ganga Aarti, verified stays & local transport.',
  },

  // Goa Hubs
  {
    slug: 'goa-beach-holiday-package-from-bangalore',
    blueprintKey: 'goa',
    cityKey: 'bangalore',
    h1: 'Goa Beach Holiday Package from Bangalore (Direct Flights + 4-Star Resort)',
    metaTitle: 'Goa Beach Holiday Package from Bangalore: 4D/3N Resort & Cab @ ₹9,999',
    metaDescription: 'Book Goa beach vacation from Bangalore. 1-hour direct flight, 4-star North Goa beach resort, Mandovi river cruise, water sports & private cab.',
  },
  {
    slug: 'goa-beach-holiday-package-from-mumbai',
    blueprintKey: 'goa',
    cityKey: 'mumbai',
    h1: 'Goa Beach Holiday Package from Mumbai (Flight / Tejas Express + Resort)',
    metaTitle: 'Goa Beach Holiday Package from Mumbai: 4D/3N Beachfront Resort @ ₹9,999',
    metaDescription: 'Book Goa holiday package from Mumbai. Includes 4-star resort stay with swimming pool, private cab for sightseeing, Mandovi River cruise & beach shacks.',
  },
  {
    slug: 'goa-beach-holiday-package-from-delhi',
    blueprintKey: 'goa',
    cityKey: 'delhi',
    h1: 'Goa Beach Holiday Package from Delhi (Direct Non-Stop Flights + Cab)',
    metaTitle: 'Goa Beach Holiday Package from Delhi: 4D/3N 4-Star Resort & Cruise @ ₹11,500',
    metaDescription: 'Book Goa holiday package from Delhi with non-stop flights to MOPA/Dabolim. 4-star beachfront resort, private cab, water sports & Mandovi cruise.',
  },
  {
    slug: 'goa-4-days-beach-party-resort-package',
    blueprintKey: 'goa',
    cityKey: 'mumbai',
    h1: 'Goa 4 Days Beach Party & Resort Package (Water Sports + Sunset Cruise)',
    metaTitle: 'Goa 4 Days Beach Party & 4-Star Resort Package @ ₹9,999',
    metaDescription: 'Book 4-Day Goa beach getaway. Includes 4-star North Goa resort with pool, Mandovi river sunset catamaran cruise, Baga water sports & private cab.',
  },

  // Kerala Hubs
  {
    slug: 'kerala-5-days-munnar-alleppey-houseboat-package',
    blueprintKey: 'kerala',
    cityKey: 'bangalore',
    h1: 'Kerala 5 Days Munnar & Alleppey Houseboat Package (Tea Gardens + Cruise)',
    metaTitle: 'Kerala 5 Days Munnar & Alleppey Houseboat Tour Package @ ₹12,999',
    metaDescription: 'Book 5-Day Kerala tour package. Includes 2 Nights Munnar tea hills, 1 Night Thekkady wildlife, 1 Night private Alleppey houseboat & private AC cab.',
  },
  {
    slug: 'kerala-tour-package-from-delhi',
    blueprintKey: 'kerala',
    cityKey: 'delhi',
    h1: 'Kerala Tour Package from Delhi (Direct Flight + Private Houseboat)',
    metaTitle: 'Kerala Tour Package from Delhi: 5D/4N Munnar & Alleppey @ ₹13,999',
    metaDescription: 'Book customized Kerala holiday from Delhi. Includes Cochin pickup, Munnar tea hills, Thekkady spices, private Alleppey backwater houseboat & meals.',
  },
  {
    slug: 'kerala-tour-package-from-mumbai',
    blueprintKey: 'kerala',
    cityKey: 'mumbai',
    h1: 'Kerala Tour Package from Mumbai (Flight + Houseboat + Private Cab)',
    metaTitle: 'Kerala Tour Package from Mumbai: 5D/4N Munnar & Backwaters @ ₹13,500',
    metaDescription: 'Book Kerala holiday package from Mumbai. Includes 2 Nights Munnar resort, Thekkady spice plantation, private Alleppey AC houseboat cruise & transfers.',
  },
  {
    slug: 'kerala-tour-package-from-bangalore',
    blueprintKey: 'kerala',
    cityKey: 'bangalore',
    h1: 'Kerala Tour Package from Bangalore (Direct Flights / Train + Houseboat)',
    metaTitle: 'Kerala Tour Package from Bangalore: 5D/4N Munnar & Alleppey @ ₹12,999',
    metaDescription: 'Book Kerala tour package from Bangalore. Visit misty Munnar hills, Eravikulam National Park, Thekkady and private luxury Alleppey houseboat cruise.',
  },
  {
    slug: 'dubai-tour-package-from-pune',
    blueprintKey: 'dubai',
    cityKey: 'pune',
    h1: 'Dubai Tour Package from Pune (Flight + Desert Safari + Burj Khalifa)',
    metaTitle: 'Dubai Tour Package from Pune: 5D/4N 4-Star Hotel & Sightseeing @ ₹36,999',
    metaDescription: 'Book all-inclusive Dubai holiday package from Pune. Includes flights, 4-star Deira/Bur Dubai hotel, Burj Khalifa 124th floor, Desert Safari BBQ dinner & Marina Dhow cruise.',
  },
  {
    slug: 'dubai-tour-package-from-kolkata',
    blueprintKey: 'dubai',
    cityKey: 'kolkata',
    h1: 'Dubai Tour Package from Kolkata (Flight + Marina Dhow Cruise + Desert Safari)',
    metaTitle: 'Dubai Tour Package from Kolkata: 5D/4N Luxury Tour Package @ ₹37,500',
    metaDescription: 'Book customized Dubai tour package from Kolkata (CCU to DXB). 4-star luxury stay, Burj Khalifa ticket, Desert Safari dune bashing, Dubai Frame & UAE tourist visa.',
  },
  {
    slug: 'dubai-tour-package-from-chennai',
    blueprintKey: 'dubai',
    cityKey: 'chennai',
    h1: 'Dubai Tour Package from Chennai (Direct Non-Stop Flight + 4-Star Hotel)',
    metaTitle: 'Dubai Tour Package from Chennai: 5D/4N Desert Safari & City Tour @ ₹35,999',
    metaDescription: 'Book Dubai holiday package from Chennai. Direct flights, 4-star hotel with breakfast, Burj Khalifa observation deck, luxury Desert Safari & airport transfers.',
  },
  {
    slug: 'kashmir-tour-package-from-kolkata',
    blueprintKey: 'kashmir',
    cityKey: 'kolkata',
    h1: 'Kashmir Tour Package from Kolkata (Flight + Dal Lake Houseboat + Snow Valleys)',
    metaTitle: 'Kashmir Tour Package from Kolkata: 5D/4N Houseboat & Gulmarg @ ₹15,500',
    metaDescription: 'Book Kashmir holiday tour package from Kolkata (CCU to SXR). Luxury Dal Lake houseboat stay, Gulmarg Gondola ride, Pahalgam & private chauffeur transfers.',
  },
  {
    slug: 'bali-tour-package-from-ahmedabad',
    blueprintKey: 'bali',
    cityKey: 'ahmedabad',
    h1: 'Bali Tour Package from Ahmedabad (Flight + Private Pool Villa + Nusa Penida)',
    metaTitle: 'Bali Tour Package from Ahmedabad: 6D/5N Private Pool Villa @ ₹32,999',
    metaDescription: 'Book luxury Bali tour package from Ahmedabad (AMD). Includes 2 Nights Seminyak pool villa, Ubud jungle resort, Nusa Penida speed boat tour, Kintamani volcano & visa.',
  },
  {
    slug: 'bali-tour-package-from-bangalore',
    blueprintKey: 'bali',
    cityKey: 'bangalore',
    h1: 'Bali Tour Package from Bangalore (Direct Connections + Private Pool Villa)',
    metaTitle: 'Bali Tour Package from Bangalore: 6D/5N Villa & Nusa Penida @ ₹31,999',
    metaDescription: 'Book Bali holiday package from Bangalore (BLR to DPS). 4-star private pool villa, Nusa Penida island excursion, Uluwatu sunset temple & Bali swing.',
  },
  {
    slug: 'bali-tour-package-from-kolkata',
    blueprintKey: 'bali',
    cityKey: 'kolkata',
    h1: 'Bali Tour Package from Kolkata (Flights + Private Villa + Nusa Penida)',
    metaTitle: 'Bali Tour Package from Kolkata: 6D/5N Pool Villa & Island Tour @ ₹32,500',
    metaDescription: 'Book customized Bali holiday from Kolkata (CCU). Includes Seminyak pool villa, Ubud cultural tour, Nusa Penida Kelingking beach & sunset dinner cruise.',
  },
  {
    slug: 'thailand-tour-package-from-ahmedabad',
    blueprintKey: 'thailand',
    cityKey: 'ahmedabad',
    h1: 'Thailand Tour Package from Ahmedabad (Flight + Bangkok + Pattaya Coral Island)',
    metaTitle: 'Thailand Tour Package from Ahmedabad: 5D/4N Coral Island & Hotel @ ₹21,999',
    metaDescription: 'Book Thailand holiday package from Ahmedabad (AMD to BKK). Includes Pattaya beach resort, Coral Island speedboat, Chao Phraya dinner cruise & transfers.',
  },
  {
    slug: 'thailand-tour-package-from-pune',
    blueprintKey: 'thailand',
    cityKey: 'pune',
    h1: 'Thailand Tour Package from Pune (Flight + Bangkok + Pattaya Coral Island)',
    metaTitle: 'Thailand Tour Package from Pune: 5D/4N Coral Island & Hotel @ ₹21,500',
    metaDescription: 'Book Thailand vacation package from Pune (PNQ). Includes flights, Pattaya beach hotel, Coral Island speed boat tour with lunch, and Bangkok temple tour.',
  },
  {
    slug: 'thailand-tour-package-from-bangalore',
    blueprintKey: 'thailand',
    cityKey: 'bangalore',
    h1: 'Thailand Tour Package from Bangalore (Direct Flights + Bangkok + Pattaya)',
    metaTitle: 'Thailand Tour Package from Bangalore: 5D/4N Coral Island Tour @ ₹20,999',
    metaDescription: 'Book Thailand vacation from Bangalore (BLR). Includes direct flights, Pattaya beach hotel, Coral Island speed boat with Indian buffet, and Bangkok city tour.',
  },
  {
    slug: 'ayodhya-tour-package-from-ahmedabad',
    blueprintKey: 'ayodhya',
    cityKey: 'ahmedabad',
    h1: 'Ayodhya Tour Package from Ahmedabad (Direct Flight + Ram Mandir VIP Darshan)',
    metaTitle: 'Ayodhya Tour Package from Ahmedabad: 3D/2N Ram Mandir Darshan @ ₹10,999',
    metaDescription: 'Book Ayodhya tour package from Ahmedabad (AMD to AYJ). Direct flight, Ram Mandir VIP darshan assistance, Saryu River Aarti, Hanuman Garhi & AC cab.',
  },
  {
    slug: 'ayodhya-tour-package-from-pune',
    blueprintKey: 'ayodhya',
    cityKey: 'pune',
    h1: 'Ayodhya Tour Package from Pune (Flight + Ram Mandir VIP Darshan + Saryu Aarti)',
    metaTitle: 'Ayodhya Tour Package from Pune: 3D/2N Ram Janmabhoomi Darshan @ ₹11,500',
    metaDescription: 'Book Ayodhya pilgrimage from Pune. Includes flight connections, Ram Janmabhoomi VIP darshan, Hanuman Garhi, Saryu river boat ride & certified guide.',
  },
  {
    slug: 'ayodhya-tour-package-from-kolkata',
    blueprintKey: 'ayodhya',
    cityKey: 'kolkata',
    h1: 'Ayodhya Tour Package from Kolkata (Flight / Train + Ram Mandir VIP Darshan)',
    metaTitle: 'Ayodhya Tour Package from Kolkata: 3D/2N Ram Mandir & Saryu Aarti @ ₹10,500',
    metaDescription: 'Book Ayodhya pilgrimage package from Kolkata. Ram Mandir VIP darshan, Kanak Bhawan, Hanuman Garhi, evening Saryu Maha Aarti & verified 3-star stay.',
  },
  {
    slug: 'ayodhya-tour-package-from-bangalore',
    blueprintKey: 'ayodhya',
    cityKey: 'bangalore',
    h1: 'Ayodhya Tour Package from Bangalore (Direct Flight + Ram Mandir Darshan)',
    metaTitle: 'Ayodhya Tour Package from Bangalore: 3D/2N Ram Mandir Yatra @ ₹11,999',
    metaDescription: 'Book Ayodhya tour package from Bangalore (BLR to AYJ). Direct non-stop flight, Ram Mandir VIP darshan, Hanuman Garhi, Saryu river cruise & private AC cab.',
  },
  {
    slug: 'goa-beach-holiday-package-from-ahmedabad',
    blueprintKey: 'goa',
    cityKey: 'ahmedabad',
    h1: 'Goa Beach Holiday Package from Ahmedabad (Direct Flights + 4-Star Resort)',
    metaTitle: 'Goa Beach Holiday Package from Ahmedabad: 4D/3N Resort & Cab @ ₹10,500',
    metaDescription: 'Book Goa holiday package from Ahmedabad. Direct flights to Goa, 4-star North Goa resort with pool, Mandovi river cruise, water sports & private cab.',
  },
  {
    slug: 'goa-beach-holiday-package-from-pune',
    blueprintKey: 'goa',
    cityKey: 'pune',
    h1: 'Goa Beach Holiday Package from Pune (Scenic Road Trip / Flight + 4-Star Resort)',
    metaTitle: 'Goa Beach Holiday Package from Pune: 4D/3N Beachfront Resort @ ₹9,499',
    metaDescription: 'Book Goa tour package from Pune. Choice of express luxury cab / flight, 4-star resort stay, Calangute water sports, Mandovi sunset cruise & beach parties.',
  },
  {
    slug: 'goa-beach-holiday-package-from-kolkata',
    blueprintKey: 'goa',
    cityKey: 'kolkata',
    h1: 'Goa Beach Holiday Package from Kolkata (Direct Flights + 4-Star Resort)',
    metaTitle: 'Goa Beach Holiday Package from Kolkata: 4D/3N Beach Resort & Cruise @ ₹11,999',
    metaDescription: 'Book Goa holiday package from Kolkata. Direct flight, 4-star resort with swimming pool, North & South Goa sightseeing, Mandovi cruise & private transfers.',
  },
  {
    slug: 'kerala-tour-package-from-ahmedabad',
    blueprintKey: 'kerala',
    cityKey: 'ahmedabad',
    h1: 'Kerala Tour Package from Ahmedabad (Flight + Munnar Tea Hills + Houseboat)',
    metaTitle: 'Kerala Tour Package from Ahmedabad: 5D/4N Munnar & Backwaters @ ₹13,999',
    metaDescription: 'Book Kerala holiday package from Ahmedabad (AMD to COK). Visit Munnar tea gardens, Thekkady wildlife, private Alleppey houseboat cruise & AC cab.',
  },
  {
    slug: 'kerala-tour-package-from-pune',
    blueprintKey: 'kerala',
    cityKey: 'pune',
    h1: 'Kerala Tour Package from Pune (Flight + Munnar Hills + Alleppey Houseboat)',
    metaTitle: 'Kerala Tour Package from Pune: 5D/4N Munnar & Alleppey Cruise @ ₹13,499',
    metaDescription: 'Book Kerala tour package from Pune. Direct flight connectivity, Munnar 4-star resort stay, Thekkady spice tour, private Alleppey backwater houseboat & transfers.',
  },
];

const PROGRAMMATIC_HERO_IMAGES: Record<string, string> = {
  // Dubai Routes
  'dubai-tour-package-from-ahmedabad': '/destinations/verified/dubai-burj-khalifa.jpg',
  'dubai-tour-package-from-mumbai': '/destinations/verified/dubai-marina.jpg',
  'dubai-tour-package-from-delhi': '/destinations/verified/dubai-desert-safari.jpg',
  'dubai-tour-package-from-bangalore': '/destinations/verified/dubai-palm-jumeirah.jpg',
  'dubai-5-days-luxury-family-tour': '/destinations/verified/dubai-atlantis.jpg',
  'dubai-tour-package-from-pune': '/destinations/verified/dubai-burj-al-arab.jpg',
  'dubai-tour-package-from-kolkata': '/destinations/verified/dubai-creek.jpg',
  'dubai-tour-package-from-chennai': '/destinations/verified/dubai-frame-exterior.jpg',

  // Kashmir Routes
  'kashmir-5-days-honeymoon-package': '/destinations/verified/kashmir-dal-lake.jpg',
  'kashmir-tour-package-from-delhi': '/destinations/verified/kashmir-gulmarg.jpg',
  'kashmir-tour-package-from-mumbai': '/destinations/verified/kashmir-pahalgam.jpg',
  'kashmir-tour-package-from-ahmedabad': '/destinations/verified/kashmir-sonamarg.jpg',
  'kashmir-tour-package-from-pune': '/destinations/kashmir.jpg',
  'kashmir-tour-package-from-kolkata': '/destinations/verified/kashmir-dal-lake.jpg',

  // Ayodhya & Varanasi Routes
  'ayodhya-ram-mandir-vip-darshan-tour': '/destinations/verified/ayodhya-ram-mandir.jpg',
  'ayodhya-varanasi-prayagraj-4-days-tour': '/destinations/verified/varanasi-ganga-aarti.jpg',
  'ayodhya-tour-package-from-delhi': '/destinations/verified/ayodhya-saryu-ghat.jpg',
  'ayodhya-tour-package-from-mumbai': '/destinations/verified/ayodhya-hanuman-garhi.jpg',
  'ayodhya-tour-package-from-lucknow': '/destinations/verified/ayodhya-kanak-bhawan.jpg',
  'ayodhya-tour-package-from-ahmedabad': '/destinations/verified/varanasi-kashi-vishwanath.jpg',
  'ayodhya-tour-package-from-pune': '/destinations/verified/prayagraj-triveni-sangam.jpg',
  'ayodhya-tour-package-from-kolkata': '/destinations/verified/ayodhya-ram-mandir.jpg',
  'ayodhya-tour-package-from-bangalore': '/destinations/verified/varanasi-ganga-aarti.jpg',

  // Bali Routes
  'bali-honeymoon-package-from-mumbai': '/destinations/verified/bali-kelingking.jpg',
  'bali-honeymoon-package-from-delhi': '/destinations/verified/bali-uluwatu.jpg',
  'bali-honeymoon-package-from-bangalore': '/destinations/verified/bali-tanah-lot.jpg',
  'bali-6-days-private-pool-villa-honeymoon': '/destinations/verified/bali-tegallalang.jpg',
  'bali-tour-package-from-ahmedabad': '/destinations/verified/bali-besakih.jpg',
  'bali-tour-package-from-bangalore': '/destinations/bali.jpg',
  'bali-tour-package-from-kolkata': '/destinations/verified/bali-kelingking.jpg',

  // Thailand Routes
  'thailand-tour-package-from-delhi': '/destinations/verified/thailand-phi-phi.jpg',
  'thailand-tour-package-from-mumbai': '/destinations/verified/thailand-railay.jpg',
  'thailand-tour-package-from-kolkata': '/destinations/verified/thailand-wat-arun.jpg',
  'thailand-5-days-bangkok-pattaya-budget-tour': '/destinations/verified/thailand-grand-palace.jpg',
  'thailand-tour-package-from-ahmedabad': '/destinations/verified/thailand-sanctuary-truth.jpg',
  'thailand-tour-package-from-pune': '/destinations/verified/thailand-pattaya.jpg',
  'thailand-tour-package-from-bangalore': '/destinations/verified/thailand-james-bond.jpg',

  // Char Dham Routes
  'char-dham-yatra-package-from-delhi': '/destinations/verified/chardham-kedarnath.jpg',
  'char-dham-yatra-package-from-ahmedabad': '/destinations/verified/chardham-badrinath.jpg',
  'char-dham-yatra-10-days-complete-yatra': '/destinations/verified/chardham-gangotri.jpg',

  // Goa Routes
  'goa-beach-holiday-package-from-bangalore': '/destinations/verified/goa-palolem.jpg',
  'goa-beach-holiday-package-from-mumbai': '/destinations/verified/goa-calangute.jpg',
  'goa-beach-holiday-package-from-delhi': '/destinations/verified/goa-dudhsagar.jpg',
  'goa-4-days-beach-party-resort-package': '/destinations/verified/goa-bom-jesus.jpg',
  'goa-beach-holiday-package-from-ahmedabad': '/destinations/goa.jpg',
  'goa-beach-holiday-package-from-pune': '/destinations/verified/goa-palolem.jpg',
  'goa-beach-holiday-package-from-kolkata': '/destinations/verified/goa-calangute.jpg',

  // Kerala Routes
  'kerala-5-days-munnar-alleppey-houseboat-package': '/destinations/verified/kerala-alleppey.jpg',
  'kerala-tour-package-from-delhi': '/destinations/verified/kerala-munnar.jpg',
  'kerala-tour-package-from-mumbai': '/destinations/verified/kerala-kochi.jpg',
  'kerala-tour-package-from-bangalore': '/destinations/verified/kerala-athirappilly.jpg',
  'kerala-tour-package-from-ahmedabad': '/destinations/verified/kerala-varkala.jpg',
  'kerala-tour-package-from-pune': '/destinations/verified/kerala-alleppey.jpg',
};

// Generate programmatic package object by combining blueprint + departure city
function buildProgrammaticPackage(entry: MatrixEntry): ProgrammaticPackage {
  const bp = DESTINATION_BLUEPRINTS[entry.blueprintKey] || DESTINATION_BLUEPRINTS.dubai;
  const city = DEPARTURE_CITIES[entry.cityKey] || DEPARTURE_CITIES.delhi;
  const priceMod = entry.priceModifier || 0;

  return {
    slug: entry.slug,
    h1: entry.h1,
    metaTitle: entry.metaTitle,
    metaDescription: entry.metaDescription,
    destination: bp.destination,
    destinationSlug: bp.destinationSlug,
    country: bp.country,
    region: bp.region,
    theme: bp.theme,
    isInternational: bp.isInternational,
    durationDays: bp.durationDays,
    durationNights: bp.durationNights,
    startingPrice: bp.startingPrice + priceMod,
    discountPrice: bp.discountPrice + priceMod,
    rating: 4.9,
    reviewsCount: 380 + (entry.slug.length * 7) % 150,
    heroImage: entry.heroImage || PROGRAMMATIC_HERO_IMAGES[entry.slug] || bp.heroImage,
    departureCity: city,
    highlights: bp.highlights,
    inclusions: bp.inclusions,
    exclusions: bp.exclusions,
    itinerary: bp.itinerary,
    hotels: bp.hotels,
    faqs: bp.faqs,
  };
}

export const PROGRAMMATIC_PACKAGES_MAP: Map<string, ProgrammaticPackage> = new Map(
  MATRIX_ENTRIES.map((entry) => [entry.slug, buildProgrammaticPackage(entry)])
);

export function getAllProgrammaticPackages(): ProgrammaticPackage[] {
  return Array.from(PROGRAMMATIC_PACKAGES_MAP.values());
}

export function getProgrammaticPackageBySlug(slug: string): ProgrammaticPackage | undefined {
  return PROGRAMMATIC_PACKAGES_MAP.get(slug.toLowerCase().trim());
}

export function getAllProgrammaticSlugs(): string[] {
  return Array.from(PROGRAMMATIC_PACKAGES_MAP.keys());
}
