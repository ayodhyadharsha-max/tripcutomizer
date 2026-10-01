export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  meals: string[];
  activities: string[];
  hotel: string;
  transfers: string;
}

export interface HolidayPackage {
  id: string;
  name: string;
  slug: string;
  destination: string;
  destinationSlug: string;
  country: string;
  region: string;
  isInternational: boolean;
  durationDays: number;
  durationNights: number;
  startingPrice: number;
  discountPrice?: number;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  theme: string;
  hotelCategory: string;
  mealPlan: string;
  flightsIncluded: boolean;
  transfersIncluded: boolean;
  departureCity: string;
  itinerary: ItineraryDay[];
  hotels: { name: string; city: string; rating: string; nights: number }[];
  faqs: { question: string; answer: string }[];
}

export const DEMO_PACKAGES: HolidayPackage[] = [
  {
    "id": "pkg-up-1",
    "name": "Ayodhya \u2013 Varanasi \u2013 Prayagraj Classic Heritage",
    "slug": "ayodhya-varanasi-prayagraj-classic-heritage",
    "destination": "Ayodhya Varanasi",
    "destinationSlug": "ayodhya-varanasi",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 14500,
    "discountPrice": 18500,
    "rating": 4.9,
    "reviewsCount": 230,
    "heroImage": "/destinations/ayodhya-varanasi.jpg",
    "gallery": [
      "/destinations/ayodhya-varanasi.jpg"
    ],
    "highlights": [
      "1N Ayodhya Ram Mandir VIP Darshan",
      "2N Varanasi Kashi Vishwanath & Ganga Aarti",
      "1N Prayagraj Triveni Sangam & Sarnath"
    ],
    "inclusions": [
      "AC Private Innova Cab",
      "3-Star Hotel Stay with Meals",
      "VIP Aarti Boat Pass"
    ],
    "exclusions": [
      "Airfare/Train Tickets"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Varanasi",
    "hotels": [
      {
        "name": "Hotel Ramayana Ayodhya",
        "city": "Ayodhya",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Kashi Heritage Hotel",
        "city": "Varanasi",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ayodhya Arrival & Ram Mandir",
        "description": "Ram Janmabhoomi VIP Darshan & Saryu Aarti.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Ram Mandir"
        ],
        "hotel": "Hotel Ramayana",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Is VIP Ganga Aarti included?",
        "answer": "Yes, private boat front view seats included."
      }
    ]
  },
  {
    "id": "pkg-up-2",
    "name": "Mathura \u2013 Vrindavan \u2013 Gokul \u2013 Barsana Weekend Bliss",
    "slug": "mathura-vrindavan-gokul-barsana-weekend-bliss",
    "destination": "Mathura Vrindavan",
    "destinationSlug": "mathura-vrindavan",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 12900,
    "discountPrice": 15900,
    "rating": 4.9,
    "reviewsCount": 185,
    "heroImage": "/destinations/mathura-vrindavan.jpg",
    "gallery": [
      "/destinations/mathura-vrindavan.jpg"
    ],
    "highlights": [
      "Delhi Pickup in Private Cab",
      "Banke Bihari VIP Darshan & Prem Mandir Light Show",
      "Govardhan E-Parikrama Pass"
    ],
    "inclusions": [
      "Private AC Cab",
      "2N Hotel Stay",
      "Govardhan E-Rickshaw",
      "Meals"
    ],
    "exclusions": [
      "Personal temple donations"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Nidhivan Sarovar Portico",
        "city": "Vrindavan",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Mathura Krishna Janmabhoomi",
        "description": "Janmabhoomi & Vishram Ghat Aarti.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Janmabhoomi"
        ],
        "hotel": "Nidhivan Portico",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "E-Rickshaw included?",
        "answer": "Yes, battery rickshaw pass included for Parikrama."
      }
    ]
  },
  {
    "id": "pkg-up-3",
    "name": "Agra & Fatehpur Sikri Mughal Heritage",
    "slug": "agra-fatehpur-sikri-mughal-heritage",
    "destination": "Agra",
    "destinationSlug": "agra",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 2,
    "durationNights": 1,
    "startingPrice": 8500,
    "discountPrice": 10500,
    "rating": 4.7,
    "reviewsCount": 140,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "Taj Mahal Sunrise Tour with Historian Guide",
      "Agra Fort & Sunset Mehtab Bagh",
      "Fatehpur Sikri"
    ],
    "inclusions": [
      "1N 4-Star Taj View Hotel",
      "Guide Fees",
      "Express Highway Cab"
    ],
    "exclusions": [
      "Monument Entry Tickets"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Courtyard Marriott Agra",
        "city": "Agra",
        "rating": "4 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Agra Fort & Mehtab Bagh",
        "description": "Taj Mahal sunset view from Mehtab Bagh.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Agra Fort"
        ],
        "hotel": "Marriott",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Is Taj Mahal closed on Friday?",
        "answer": "Yes, Taj Mahal is closed on Fridays."
      }
    ]
  },
  {
    "id": "pkg-up-4",
    "name": "Lucknow \u2013 Naimisharanya \u2013 Ayodhya Pilgrimage",
    "slug": "lucknow-naimisharanya-ayodhya-pilgrimage",
    "destination": "Lucknow",
    "destinationSlug": "lucknow",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 15800,
    "discountPrice": 18900,
    "rating": 4.8,
    "reviewsCount": 110,
    "heroImage": "/destinations/ayodhya-varanasi.jpg",
    "gallery": [],
    "highlights": [
      "Naimisharanya Chakra Tirtha Dip",
      "Lucknow Food Walk & Imambara",
      "Ayodhya Ram Janmabhoomi"
    ],
    "inclusions": [
      "3N Hotel Stay",
      "Innova Cab",
      "Vedic Pandit Coordination"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Spiritual",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Lucknow",
    "hotels": [
      {
        "name": "Clarks Avadh",
        "city": "Lucknow",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Lucknow Food Walk",
        "description": "Explore Awadh culture & cuisine.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Food Walk"
        ],
        "hotel": "Clarks Avadh",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Naimisharanya distance?",
        "answer": "2 hours drive from Lucknow."
      }
    ]
  },
  {
    "id": "pkg-up-5",
    "name": "Varanasi \u2013 Vindhyachal \u2013 Chitrakoot Shaktipeeth Trail",
    "slug": "varanasi-vindhyachal-chitrakoot-trail",
    "destination": "Varanasi",
    "destinationSlug": "varanasi",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 16500,
    "discountPrice": 19500,
    "rating": 4.8,
    "reviewsCount": 95,
    "heroImage": "/destinations/ayodhya-varanasi.jpg",
    "gallery": [],
    "highlights": [
      "Vindhyavasini Ropeway VIP Darshan",
      "Chitrakoot Ramghat Aarti & Kamadgiri",
      "Gupt Godavari Caves"
    ],
    "inclusions": [
      "3N Hotel Stay",
      "Ropeway Passes",
      "Private Cab"
    ],
    "exclusions": [
      "Panda fee"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Varanasi",
    "hotels": [
      {
        "name": "Chitrakoot Bungalow",
        "city": "Chitrakoot",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Vindhyavasini Ropeway",
        "description": "Shaktipeeth Darshan & Chitrakoot drive.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Ropeway"
        ],
        "hotel": "Chitrakoot Bungalow",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Ropeway included?",
        "answer": "Yes, VIP ropeway passes included."
      }
    ]
  },
  {
    "id": "pkg-up-6",
    "name": "Bodh Gaya \u2013 Rajgir \u2013 Nalanda \u2013 Patna Glass Skywalk Trail",
    "slug": "bodh-gaya-rajgir-nalanda-patna-trail",
    "destination": "Bodh Gaya",
    "destinationSlug": "bodh-gaya",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 18900,
    "discountPrice": 22500,
    "rating": 4.9,
    "reviewsCount": 160,
    "heroImage": "/destinations/north-east.jpg",
    "gallery": [],
    "highlights": [
      "Mahabodhi UNESCO Tree & Buddha Statue",
      "Rajgir Glass Skywalk & Vishwa Shanti Stupa",
      "Nalanda University Ruins"
    ],
    "inclusions": [
      "3N 4-Star Stay",
      "Glass Skywalk Tickets",
      "Private Cab"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Spiritual",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Gaya",
    "hotels": [
      {
        "name": "Lotus Nikko Bodh Gaya",
        "city": "Bodh Gaya",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Mahabodhi Temple",
        "description": "UNESCO Bodhi tree & Great Buddha statue.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Mahabodhi Temple"
        ],
        "hotel": "Lotus Nikko",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Glass Skywalk pass included?",
        "answer": "Yes, VIP entry tickets included."
      }
    ]
  },
  {
    "id": "pkg-uk-7",
    "name": "Complete Char Dham Yatra 9N/10D (Kedarnath - Badrinath)",
    "slug": "complete-char-dham-yatra-9n10d",
    "destination": "Char Dham",
    "destinationSlug": "char-dham",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 10,
    "durationNights": 9,
    "startingPrice": 22500,
    "discountPrice": 27500,
    "rating": 4.9,
    "reviewsCount": 310,
    "heroImage": "/destinations/char-dham.jpg",
    "gallery": [
      "/destinations/char-dham.jpg"
    ],
    "highlights": [
      "Yamunotri, Gangotri, Kedarnath & Badrinath",
      "Haridwar Pickup in Innova",
      "Kedarnath Swiss Camp Allocation & Heli Assist"
    ],
    "inclusions": [
      "9N Accommodation",
      "Meals",
      "Registration",
      "Transfers"
    ],
    "exclusions": [
      "Heli Ticket Fee"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Haridwar",
    "hotels": [
      {
        "name": "Sarovar Portico Badrinath",
        "city": "Badrinath",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Haridwar to Barkot",
        "description": "Drive along Yamuna river.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Mountain Drive"
        ],
        "hotel": "Yamuna Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Heli ticket support?",
        "answer": "Yes, IRCTC heli slot assistance provided."
      }
    ]
  },
  {
    "id": "pkg-uk-8",
    "name": "Nainital \u2013 Bhimtal \u2013 Mukteshwar \u2013 Ranikhet Lake District",
    "slug": "nainital-bhimtal-mukteshwar-ranikhet-tour",
    "destination": "Nainital",
    "destinationSlug": "nainital",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 13800,
    "discountPrice": 16500,
    "rating": 4.8,
    "reviewsCount": 210,
    "heroImage": "/destinations/uk.jpg",
    "gallery": [],
    "highlights": [
      "2N Nainital Naini Lake Boating & Mall Road",
      "1N Mukteshwar Orchard Homestay",
      "Bhimtal & Sattal Kayaking"
    ],
    "inclusions": [
      "3N Resort Stay",
      "Boating & Ropeway Voucher",
      "Cab"
    ],
    "exclusions": [
      "Personal shopping"
    ],
    "theme": "Family",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "The Vikram Vantage Park Nainital",
        "city": "Nainital",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Delhi to Nainital",
        "description": "Check in hotel & evening Naini Lake boat ride.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Naini Lake Boat"
        ],
        "hotel": "Vikram Vantage",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Boating passes included?",
        "answer": "Yes, complimentary Naini Lake boating included."
      }
    ]
  },
  {
    "id": "pkg-uk-9",
    "name": "Dehradun \u2013 Mussoorie \u2013 Dhanaulti Queen of Hills",
    "slug": "dehradun-mussoorie-dhanaulti-queen-of-hills",
    "destination": "Mussoorie",
    "destinationSlug": "mussoorie",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 15500,
    "discountPrice": 18500,
    "rating": 4.7,
    "reviewsCount": 190,
    "heroImage": "/destinations/uttarakhand.jpg",
    "gallery": [],
    "highlights": [
      "1N Dehradun Robber's Cave",
      "2N Mussoorie Kempty Falls & Mall Road",
      "Dhanaulti Eco Park & Camp Bonfire"
    ],
    "inclusions": [
      "3N Hotel Stay",
      "Private Cab",
      "Meals"
    ],
    "exclusions": [
      "Adventure rides"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Jaypee Residency Manor Mussoorie",
        "city": "Mussoorie",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Dehradun Robber's Cave",
        "description": "Explore Dehradun & Mussoorie drive.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Robber's Cave"
        ],
        "hotel": "Jaypee Manor",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Dhanaulti distance?",
        "answer": "1 hour scenic drive from Mussoorie."
      }
    ]
  },
  {
    "id": "pkg-uk-10",
    "name": "Haridwar \u2013 Rishikesh Ganga Aarti & Rafting Combo",
    "slug": "haridwar-rishikesh-ganga-aarti-rafting-combo",
    "destination": "Rishikesh",
    "destinationSlug": "rishikesh",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 9800,
    "discountPrice": 12500,
    "rating": 4.8,
    "reviewsCount": 240,
    "heroImage": "/destinations/uttarakhand.jpg",
    "gallery": [],
    "highlights": [
      "Har Ki Pauri Evening Ganga Aarti VIP Spot",
      "16km Shivpuri River Rafting & Cliff Jump",
      "Riverside Jungle Camp Stay"
    ],
    "inclusions": [
      "2N Riverside Camp/Hotel",
      "16km Rafting Voucher",
      "All Meals"
    ],
    "exclusions": [
      "Bungee Jumping Ticket"
    ],
    "theme": "Group",
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Rishikesh Riverside Resort",
        "city": "Rishikesh",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Haridwar Ganga Aarti",
        "description": "Har Ki Pauri Aarti & drive to Rishikesh camp.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Ganga Aarti"
        ],
        "hotel": "Riverside Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Rafting age limit?",
        "answer": "14 years and above for 16km rafting."
      }
    ]
  },
  {
    "id": "pkg-uk-11",
    "name": "Jim Corbett Jungle Safari & Wildlife Retreat",
    "slug": "jim-corbett-jungle-safari-wildlife-retreat",
    "destination": "Corbett",
    "destinationSlug": "corbett",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 14200,
    "discountPrice": 17500,
    "rating": 4.8,
    "reviewsCount": 175,
    "heroImage": "/destinations/south-africa.jpg",
    "gallery": [],
    "highlights": [
      "1 Open Jeep Safari in Dhikala / Bijrani Zone",
      "2N Riverside Jungle Resort with Pool",
      "Kosi River Walk & Garjiya Temple"
    ],
    "inclusions": [
      "2N Resort Stay",
      "1 Open Jeep Safari Permit",
      "All Meals"
    ],
    "exclusions": [
      "Elephant Safari"
    ],
    "theme": "Wildlife",
    "hotelCategory": "4 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Corbett River Creek Resort",
        "city": "Jim Corbett",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Resort Check-in & Kosi River",
        "description": "Arrive at resort, nature walk along Kosi river.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Kosi River Walk"
        ],
        "hotel": "Corbett River Creek",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Jeep safari included?",
        "answer": "Yes, 1 Open Jeep safari permit and guide included."
      }
    ]
  },
  {
    "id": "pkg-uk-12",
    "name": "Auli \u2013 Chopta \u2013 Tungnath \u2013 Joshimath Mini Switzerland Trek",
    "slug": "auli-chopta-tungnath-joshimath-mini-switzerland",
    "destination": "Auli",
    "destinationSlug": "auli",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 19500,
    "discountPrice": 23500,
    "rating": 4.9,
    "reviewsCount": 150,
    "heroImage": "/destinations/switzerland.jpg",
    "gallery": [],
    "highlights": [
      "2N Chopta Swiss Tent Camp + Tungnath Shiva Temple Trek",
      "2N Auli Ski Resort & Chair Lift Ride",
      "Joshimath Narsingh Temple"
    ],
    "inclusions": [
      "4N Stay",
      "Tungnath Trek Guide",
      "Meals",
      "Cab"
    ],
    "exclusions": [
      "Skiing gear hire"
    ],
    "theme": "Group",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Rishikesh",
    "hotels": [
      {
        "name": "Auli Himalayan Resort",
        "city": "Auli",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Rishikesh to Chopta",
        "description": "Drive past Devprayag to Chopta meadows.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Swiss Camp Stay"
        ],
        "hotel": "Chopta Camp",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Is Tungnath trek difficult?",
        "answer": "Moderate 3.5km trek suitable for beginners."
      }
    ]
  },
  {
    "id": "pkg-hp-13",
    "name": "Shimla \u2013 Manali \u2013 Solang \u2013 Atal Tunnel Volvo / Cab Combo",
    "slug": "shimla-manali-solang-atal-tunnel-combo",
    "destination": "Manali",
    "destinationSlug": "manali",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 16800,
    "discountPrice": 20500,
    "rating": 4.8,
    "reviewsCount": 490,
    "heroImage": "/destinations/himachal.jpg",
    "gallery": [],
    "highlights": [
      "2N Shimla Kufri & Mall Road",
      "3N Manali Solang Valley & Atal Tunnel Excursion",
      "Hadimba Temple & Jogini Waterfall"
    ],
    "inclusions": [
      "5N Hotel Stay",
      "Private Cab / Luxury Volvo",
      "Breakfast & Dinner"
    ],
    "exclusions": [
      "Rohtang Pass Permit"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "The Manali Inn",
        "city": "Manali",
        "rating": "4 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Delhi to Shimla",
        "description": "Drive to Shimla, Mall Road evening walk.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Mall Road Walk"
        ],
        "hotel": "Shimla Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Atal Tunnel covered?",
        "answer": "Yes, Atal Tunnel & Solang Valley full day excursion included."
      }
    ]
  },
  {
    "id": "pkg-hp-14",
    "name": "Dharamshala \u2013 McLeodGanj \u2013 Dalhousie Little Tibet",
    "slug": "dharamshala-mcleodganj-dalhousie-little-tibet",
    "destination": "Dharamshala",
    "destinationSlug": "dharamshala",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 17500,
    "discountPrice": 21000,
    "rating": 4.8,
    "reviewsCount": 160,
    "heroImage": "/destinations/himachal.jpg",
    "gallery": [],
    "highlights": [
      "2N Dharamshala Dalai Lama Temple & Bhagsu Waterfall",
      "2N Dalhousie Khajjiar Mini Switzerland",
      "Pine-view Boutique Resort"
    ],
    "inclusions": [
      "4N Stay",
      "Private Cab",
      "Breakfast & Dinner"
    ],
    "exclusions": [
      "Adventure sports"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Pathankot",
    "hotels": [
      {
        "name": "Indraprastha Resort Dalhousie",
        "city": "Dalhousie",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Dharamshala",
        "description": "Dalai Lama Temple & Tsuglagkhang Complex.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dalai Lama Temple"
        ],
        "hotel": "Dharamshala Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Khajjiar distance?",
        "answer": "1 hour scenic drive from Dalhousie."
      }
    ]
  },
  {
    "id": "pkg-hp-15",
    "name": "Kasol \u2013 Kheerganga \u2013 Jibhi \u2013 Tirthan Offbeat Escape",
    "slug": "kasol-kheerganga-jibhi-tirthan-offbeat-escape",
    "destination": "Kasol",
    "destinationSlug": "kasol",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 12900,
    "discountPrice": 15500,
    "rating": 4.9,
    "reviewsCount": 280,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "2N Jibhi Wooden Cottage Stay",
      "1N Kheerganga Hot Spring Top Camp Trek",
      "Manikaran Sahib Gurudwara"
    ],
    "inclusions": [
      "3N Stay",
      "Trek Guide & Camp Gear",
      "Meals"
    ],
    "exclusions": [
      "Personal porter"
    ],
    "theme": "Group",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Jibhi Wooden Chalet",
        "city": "Jibhi",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Delhi to Kasol & Manikaran",
        "description": "Manikaran hot spring & Parvati river walk.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Parvati River"
        ],
        "hotel": "Kasol Cottage",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Kheerganga trek length?",
        "answer": "12km scenic forest trek with hot spring top camp."
      }
    ]
  },
  {
    "id": "pkg-hp-16",
    "name": "Spiti Valley High Altitude Road Trip (Kaza - Chandratal)",
    "slug": "spiti-valley-high-altitude-road-trip",
    "destination": "Spiti",
    "destinationSlug": "spiti",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 24500,
    "discountPrice": 29500,
    "rating": 4.9,
    "reviewsCount": 210,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "Shimla-Spiti-Manali 4x4 Chauffeur Road Tour",
      "1N Chandratal Lake Swiss Tent Camp",
      "Key Monastery, Hikkim (World's Highest Post Office) & Chicham Bridge"
    ],
    "inclusions": [
      "6N Homestay & Swiss Camp",
      "4x4 Vehicle",
      "Oxygen Cylinder Backup",
      "Meals"
    ],
    "exclusions": [
      "Personal expenses"
    ],
    "theme": "Group",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Shimla",
    "hotels": [
      {
        "name": "Kaza Grand Hotel",
        "city": "Kaza",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Shimla to Kalpa",
        "description": "Drive through Kinnaur valley with Kinnaur Kailash view.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Kinnaur Drive"
        ],
        "hotel": "Kalpa Hotel",
        "transfers": "4x4 Cab"
      }
    ],
    "faqs": [
      {
        "question": "Is oxygen cylinder provided?",
        "answer": "Yes, emergency oxygen cylinders are carried in all Spiti 4x4 vehicles."
      }
    ]
  },
  {
    "id": "pkg-pb-17",
    "name": "Amritsar Golden Temple & Wagah Border Patriotic Trail",
    "slug": "amritsar-golden-temple-wagah-border-trail",
    "destination": "Amritsar",
    "destinationSlug": "amritsar",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 2,
    "durationNights": 1,
    "startingPrice": 7900,
    "discountPrice": 9900,
    "rating": 4.9,
    "reviewsCount": 320,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "Golden Temple VIP Darshan & Night Illumination",
      "Wagah Border Beating Retreat VIP Seats Assistance",
      "Jallianwala Bagh & Heritage Food Walk"
    ],
    "inclusions": [
      "1N 4-Star Hotel",
      "Private Cab",
      "Wagah Pass Assistance",
      "Breakfast"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Spiritual",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Amritsar",
    "hotels": [
      {
        "name": "Hyatt Regency Amritsar",
        "city": "Amritsar",
        "rating": "5 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Golden Temple & Wagah Border",
        "description": "Golden Temple darshan & afternoon Wagah border retreat ceremony.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Wagah Ceremony"
        ],
        "hotel": "Hyatt Regency",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Wagah seating assistance?",
        "answer": "Yes, we coordinate early arrival for prime viewing seats."
      }
    ]
  },
  {
    "id": "pkg-jk-18",
    "name": "Kashmir Crown Holiday 5N/6D (Srinagar - Gulmarg - Pahalgam)",
    "slug": "kashmir-crown-holiday-srinagar-gulmarg-pahalgam-master",
    "destination": "Kashmir",
    "destinationSlug": "kashmir",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 18100,
    "discountPrice": 22500,
    "rating": 4.9,
    "reviewsCount": 380,
    "heroImage": "/destinations/kashmir.jpg",
    "gallery": [],
    "highlights": [
      "1N Luxury Dal Lake Houseboat + Candlelight Dinner",
      "2N Pahalgam Betaab Valley",
      "Gulmarg Gondola Phase 1 & 2 Tickets Pre-Booked"
    ],
    "inclusions": [
      "5N Accommodation",
      "Shikara Ride",
      "Private Cab",
      "Meals"
    ],
    "exclusions": [
      "Flight Tickets"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Srinagar",
    "hotels": [
      {
        "name": "Heritage Luxury Houseboat",
        "city": "Srinagar",
        "rating": "5 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Srinagar Shikara Ride",
        "description": "Check in houseboat & sunset Shikara ride.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Shikara Ride"
        ],
        "hotel": "Houseboat",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Gondola tickets confirmed?",
        "answer": "Yes, pre-booked Phase 1 & 2 tickets included."
      }
    ]
  },
  {
    "id": "pkg-lk-19",
    "name": "Ladakh Complete Overland & Biking Adventure 6N/7D",
    "slug": "ladakh-complete-overland-biking-adventure",
    "destination": "Ladakh",
    "destinationSlug": "ladakh",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 26500,
    "discountPrice": 32000,
    "rating": 4.9,
    "reviewsCount": 310,
    "heroImage": "/destinations/ladakh.jpg",
    "gallery": [],
    "highlights": [
      "2N Leh + 1N Nubra Valley (Hunder Sand Dunes Camel Ride)",
      "1N Pangong Tso Lake Swiss Camp + Khardung La Pass (17,982 ft)",
      "Inner Line Permits & Royal Enfield / 4x4 Support"
    ],
    "inclusions": [
      "6N Stay",
      "Inner Line Permit",
      "Oxygen Cylinder",
      "4x4 / Bike Rental",
      "Meals"
    ],
    "exclusions": [
      "Leh Flight"
    ],
    "theme": "Group",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Leh",
    "hotels": [
      {
        "name": "The Grand Dragon Leh",
        "city": "Leh",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Leh Acclimatization Day",
        "description": "Arrival & rest for acclimatization. Evening Shanti Stupa.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Shanti Stupa"
        ],
        "hotel": "Grand Dragon",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Inner Line Permit included?",
        "answer": "Yes, complete Wildlife & Inner Line permits included."
      }
    ]
  },
  {
    "id": "pkg-jk-20",
    "name": "Katra Vaishno Devi + Shivkhori + Patnitop Hill Retreat",
    "slug": "katra-vaishno-devi-shivkhori-patnitop",
    "destination": "Vaishno Devi",
    "destinationSlug": "vaishno-devi",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 11500,
    "discountPrice": 14200,
    "rating": 4.8,
    "reviewsCount": 260,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "2N Katra (Bhawan Darshan Yatra Parcha & Battery Car Support)",
      "1N Patnitop Skyview Cable Car & Nathatop Snow Views",
      "Shivkhori Cave Temple Excursion"
    ],
    "inclusions": [
      "3N Hotel Stay",
      "Yatra Slip Assistance",
      "Private Cab",
      "Meals"
    ],
    "exclusions": [
      "Helicopter Fare"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jammu",
    "hotels": [
      {
        "name": "Fortune Park Katra",
        "city": "Katra",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jammu to Katra Check-in",
        "description": "Jammu pickup & Katra hotel check-in.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Yatra Slip"
        ],
        "hotel": "Fortune Park",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Helicopter ticket assistance?",
        "answer": "Yes, Katra-Sanjichhat heli ticket booking support provided."
      }
    ]
  },
  {
    "id": "pkg-rj-21",
    "name": "Royal Rajasthan Grandeur (Jaipur - Jodhpur - Udaipur)",
    "slug": "royal-rajasthan-grandeur-master-5n6d",
    "destination": "Rajasthan",
    "destinationSlug": "rajasthan",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 21500,
    "discountPrice": 26500,
    "rating": 4.8,
    "reviewsCount": 290,
    "heroImage": "/destinations/rajasthan.jpg",
    "gallery": [],
    "highlights": [
      "Amber Fort Elephant/Jeep Ride",
      "Mehrangarh Fort Jodhpur",
      "Lake Pichola Sunset Private Boat Ride"
    ],
    "inclusions": [
      "5N Haveli Stay",
      "Lake Pichola Boat Pass",
      "Private Cab"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jaipur",
    "hotels": [
      {
        "name": "Alsisar Haveli Jaipur",
        "city": "Jaipur",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jaipur Arrival & Chokhi Dhani",
        "description": "Cultural show & Rajasthani thali dinner.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Chokhi Dhani"
        ],
        "hotel": "Alsisar Haveli",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Boat ride included?",
        "answer": "Yes, private Lake Pichola boat ride included."
      }
    ]
  },
  {
    "id": "pkg-rj-22",
    "name": "Jaisalmer Sand Dunes Safari & Bikaner Golden Trail",
    "slug": "jaisalmer-sand-dunes-safari-bikaner",
    "destination": "Jaisalmer",
    "destinationSlug": "jaisalmer",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 15900,
    "discountPrice": 19500,
    "rating": 4.8,
    "reviewsCount": 210,
    "heroImage": "/destinations/south-africa.jpg",
    "gallery": [],
    "highlights": [
      "1N Sam Sand Dunes Swiss Tent Camp + Camel & Jeep Dune Bashing",
      "1N Jaisalmer Golden Fort Walking Tour",
      "1N Bikaner Junagarh Fort"
    ],
    "inclusions": [
      "3N Accommodation",
      "Jeep Safari & Cultural Folk Dance Dinner",
      "Private Cab"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jodhpur",
    "hotels": [
      {
        "name": "Sam Desert Swiss Camp",
        "city": "Jaisalmer",
        "rating": "4 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jaisalmer Fort & Sam Dunes",
        "description": "Desert safari & night bonfire dance.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Jeep Bashing"
        ],
        "hotel": "Sam Swiss Camp",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Dune bashing included?",
        "answer": "Yes, 4x4 Jeep dune bashing & camel safari included."
      }
    ]
  },
  {
    "id": "pkg-rj-23",
    "name": "Khatu Shyamji \u2013 Salasar Balaji \u2013 Jeen Mata Pilgrimage",
    "slug": "khatu-shyamji-salasar-balaji-jeen-mata",
    "destination": "Khatu Shyam",
    "destinationSlug": "khatu-shyam",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 2,
    "durationNights": 1,
    "startingPrice": 6800,
    "discountPrice": 8500,
    "rating": 4.9,
    "reviewsCount": 310,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "Khatu Shyam Ji VIP Darshan",
      "Salasar Balaji Hanuman Temple",
      "Jeen Mata Shaktipeeth"
    ],
    "inclusions": [
      "1N Hotel near Temple",
      "Private AC Cab Pickup from Delhi/Jaipur",
      "Meals"
    ],
    "exclusions": [
      "Special Puja Donations"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jaipur",
    "hotels": [
      {
        "name": "Hotel Shyam Palace",
        "city": "Khatu Shyam",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Khatu Shyam Ji Darshan",
        "description": "Jaipur pickup & Khatu Shyam Ji darshan.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Khatu Darshan"
        ],
        "hotel": "Shyam Palace",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "VIP darshan assistance?",
        "answer": "Yes, early morning VIP lines assistance provided."
      }
    ]
  },
  {
    "id": "pkg-rj-24",
    "name": "Ranthambore Royal Bengal Tiger Safari 2N/3D",
    "slug": "ranthambore-royal-bengal-tiger-safari",
    "destination": "Ranthambore",
    "destinationSlug": "ranthambore",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 14800,
    "discountPrice": 17900,
    "rating": 4.8,
    "reviewsCount": 165,
    "heroImage": "/destinations/south-africa.jpg",
    "gallery": [],
    "highlights": [
      "2 Open Gypsy / Canter Safaris in Core Zones 1-5",
      "2N Jungle Resort with Swimming Pool",
      "Ranthambore Fort Trek"
    ],
    "inclusions": [
      "2N Jungle Resort Stay",
      "2 Safari Permits",
      "All Meals"
    ],
    "exclusions": [
      "Camera fees"
    ],
    "theme": "Wildlife",
    "hotelCategory": "4 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jaipur",
    "hotels": [
      {
        "name": "Ranthambore Kothi Resort",
        "city": "Ranthambore",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival & Afternoon Safari",
        "description": "Check in resort & Zone 1-5 safari.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Tiger Safari"
        ],
        "hotel": "Ranthambore Kothi",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Are core zone permits guaranteed?",
        "answer": "Yes, core zones 1-5 permits pre-booked."
      }
    ]
  },
  {
    "id": "pkg-rj-25",
    "name": "Mount Abu \u2013 Pushkar \u2013 Ajmer Sharif Oasis Trail",
    "slug": "mount-abu-pushkar-ajmer-sharif-trail",
    "destination": "Mount Abu",
    "destinationSlug": "mount-abu",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 13500,
    "discountPrice": 16200,
    "rating": 4.7,
    "reviewsCount": 130,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "2N Mount Abu Dilwara Marble Temples & Nakki Lake",
      "1N Pushkar Brahma Temple & Ajmer Sharif Dargah VIP Ziyarat"
    ],
    "inclusions": [
      "3N Stay",
      "Private Cab",
      "Meals"
    ],
    "exclusions": [
      "Personal donations"
    ],
    "theme": "Family",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Udaipur",
    "hotels": [
      {
        "name": "Hotel Hillock Mount Abu",
        "city": "Mount Abu",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Mount Abu Dilwara Temple",
        "description": "Nakki Lake boat ride & Sunset Point.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dilwara Temple"
        ],
        "hotel": "Hotel Hillock",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Ajmer Dargah pass?",
        "answer": "Yes, VIP Ziyarat pass included for Ajmer Sharif."
      }
    ]
  },
  {
    "id": "pkg-gj-26",
    "name": "Rann of Kutch White Desert & Coastal Kutch Special",
    "slug": "rann-of-kutch-white-desert-coastal-special",
    "destination": "Kutch",
    "destinationSlug": "kutch",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 23500,
    "discountPrice": 28500,
    "rating": 4.9,
    "reviewsCount": 240,
    "heroImage": "/destinations/gujarat.jpg",
    "gallery": [],
    "highlights": [
      "2N White Rann Tent City AC Bhunga Stay + Full Moon Cultural Night",
      "1N Mandvi Beach Resort & Vijay Vilas Palace"
    ],
    "inclusions": [
      "3N Accommodation",
      "Tent City All Meals & Folk Show",
      "Permits",
      "Cab"
    ],
    "exclusions": [
      "Flight/Train to Bhuj"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bhuj",
    "hotels": [
      {
        "name": "Rann Utsav Tent City",
        "city": "Dhordo Kutch",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bhuj to Tent City White Rann",
        "description": "White Desert sunset & cultural show.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "White Desert Sunset"
        ],
        "hotel": "Tent City",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "White Rann permit included?",
        "answer": "Yes, mandatory Rann entry permit included."
      }
    ]
  },
  {
    "id": "pkg-gj-27",
    "name": "Dwarka \u2013 Somnath \u2013 Nageshwar Devbhoomi Gujarat Yatra",
    "slug": "dwarka-somnath-nageshwar-gujarat-yatra",
    "destination": "Dwarka",
    "destinationSlug": "dwarka",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 14900,
    "discountPrice": 17800,
    "rating": 4.9,
    "reviewsCount": 280,
    "heroImage": "/destinations/char-dham.jpg",
    "gallery": [],
    "highlights": [
      "2N Dwarkadhish Temple & Bet Dwarka Ferry Ride",
      "1N Somnath Temple Light & Sound Show & 2 Jyotirlinga Darshan"
    ],
    "inclusions": [
      "3N Hotel Stay",
      "Ferry Tickets",
      "Private Cab",
      "Breakfast & Dinner"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Rajkot",
    "hotels": [
      {
        "name": "Hawthorn Suites Dwarka",
        "city": "Dwarka",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Dwarkadhish Temple Darshan",
        "description": "Dwarkadhish evening Aarti & Gomti Ghat.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dwarkadhish Aarti"
        ],
        "hotel": "Hawthorn Suites",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Bet Dwarka boat included?",
        "answer": "Yes, round-trip boat ferry for Bet Dwarka included."
      }
    ]
  },
  {
    "id": "pkg-gj-28",
    "name": "Statue of Unity (Kevadia) & Ahmedabad Heritage 2N/3D",
    "slug": "statue-of-unity-kevadia-ahmedabad-heritage",
    "destination": "Statue of Unity",
    "destinationSlug": "statue-of-unity",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 12800,
    "discountPrice": 15500,
    "rating": 4.8,
    "reviewsCount": 200,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "1N Kevadia Viewing Gallery Express VIP Tickets & Laser Show",
      "1N Ahmedabad Sabarmati Ashram & Akshardham Temple"
    ],
    "inclusions": [
      "2N Hotel Stay",
      "Viewing Gallery Express VIP Ticket",
      "Cab"
    ],
    "exclusions": [
      "Flight/Train"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Ahmedabad",
    "hotels": [
      {
        "name": "Tent City Narmada Kevadia",
        "city": "Kevadia",
        "rating": "4 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ahmedabad to Statue of Unity",
        "description": "Viewing gallery, Valley of Flowers & Laser show.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Viewing Gallery VIP"
        ],
        "hotel": "Tent City Narmada",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Viewing Gallery ticket level?",
        "answer": "Express VIP 153m Viewing Gallery tickets included."
      }
    ]
  },
  {
    "id": "pkg-gj-29",
    "name": "Sasan Gir Asiatic Lion & Girnar Ropeway Adventure",
    "slug": "sasan-gir-asiatic-lion-girnar-ropeway",
    "destination": "Sasan Gir",
    "destinationSlug": "sasan-gir",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 15200,
    "discountPrice": 18500,
    "rating": 4.8,
    "reviewsCount": 140,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "1 Open Jeep Safari in Sasan Gir National Park",
      "1N Junagadh Girnar Asia's Longest Ropeway Ride",
      "Uparkot Fort"
    ],
    "inclusions": [
      "2N Resort Stay",
      "1 Gir Safari Permit",
      "Girnar Ropeway Pass",
      "Meals"
    ],
    "exclusions": [
      "Camera fees"
    ],
    "theme": "Wildlife",
    "hotelCategory": "4 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Rajkot",
    "hotels": [
      {
        "name": "The Fern Gir Forest Resort",
        "city": "Sasan Gir",
        "rating": "4 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Sasan Gir Lion Safari",
        "description": "Jeep safari in search of Asiatic Lions.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Lion Safari"
        ],
        "hotel": "Fern Gir Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Girnar ropeway included?",
        "answer": "Yes, round trip Girnar Asia's longest ropeway ticket included."
      }
    ]
  },
  {
    "id": "pkg-mp-30",
    "name": "Madhya Pradesh Twin Jyotirlinga (Ujjain - Omkareshwar - Indore)",
    "slug": "mp-twin-jyotirlinga-ujjain-omkareshwar-indore",
    "destination": "Ujjain",
    "destinationSlug": "ujjain",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 13900,
    "discountPrice": 16800,
    "rating": 4.9,
    "reviewsCount": 350,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "2N Ujjain Mahakal Corridor & Bhasma Aarti Protocol Guidance",
      "1N Indore Sarafa Night Food Market & Omkareshwar Island Temple"
    ],
    "inclusions": [
      "3N 4-Star Stay",
      "Private Cab",
      "Bhasma Aarti Form Assistance",
      "Meals"
    ],
    "exclusions": [
      "Flight/Train"
    ],
    "theme": "Spiritual",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Indore",
    "hotels": [
      {
        "name": "Anjushree Ujjain",
        "city": "Ujjain",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ujjain Mahakal Corridor",
        "description": "Mahakaleshwar Darshan & Mahakal Lok corridor.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Mahakal Corridor"
        ],
        "hotel": "Anjushree",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Bhasma Aarti assistance?",
        "answer": "Yes, online protocol application guidance provided."
      }
    ]
  },
  {
    "id": "pkg-mp-31",
    "name": "Khajuraho UNESCO Temples & Bandhavgarh Tiger Safari",
    "slug": "khajuraho-unesco-temples-bandhavgarh-safari",
    "destination": "Khajuraho",
    "destinationSlug": "khajuraho",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 21800,
    "discountPrice": 26500,
    "rating": 4.8,
    "reviewsCount": 130,
    "heroImage": "/destinations/south-africa.jpg",
    "gallery": [],
    "highlights": [
      "2N Khajuraho Western Group Temples & Light Show",
      "2N Bandhavgarh Tiger Reserve (2 Open Jeep Safaris)"
    ],
    "inclusions": [
      "4N Stay",
      "2 Safari Permits",
      "Guide Fees",
      "Meals"
    ],
    "exclusions": [
      "Airfare to Khajuraho"
    ],
    "theme": "Wildlife",
    "hotelCategory": "4 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Khajuraho",
    "hotels": [
      {
        "name": "Taj Chandela Khajuraho",
        "city": "Khajuraho",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Khajuraho Temple Complex",
        "description": "Guided tour of Kandariya Mahadev Temple.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "UNESCO Temples"
        ],
        "hotel": "Taj Chandela",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Safaris count?",
        "answer": "2 Open Gypsy core zone safaris included."
      }
    ]
  },
  {
    "id": "pkg-mp-32",
    "name": "Pachmarhi Hill Station & Jabalpur Marble Rocks",
    "slug": "pachmarhi-hill-station-jabalpur-marble-rocks",
    "destination": "Pachmarhi",
    "destinationSlug": "pachmarhi",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 18500,
    "discountPrice": 22000,
    "rating": 4.7,
    "reviewsCount": 145,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "2N Pachmarhi (Bee Falls, Dhoopgarh Sunset)",
      "1N Jabalpur Bhedaghat Narmada Boat Ride & Dhuandhar Falls",
      "1N Kanha Tiger Reserve"
    ],
    "inclusions": [
      "4N Stay",
      "Moonlight Boat Ride",
      "Private Cab",
      "Meals"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Family",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jabalpur",
    "hotels": [
      {
        "name": "MPT Champak Bungalow Pachmarhi",
        "city": "Pachmarhi",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Pachmarhi Bee Falls",
        "description": "Queen of Satpura waterfalls & caves.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bee Falls"
        ],
        "hotel": "Champak Bungalow",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Bhedaghat boat ride included?",
        "answer": "Yes, Narmada river marble rocks boat ride included."
      }
    ]
  },
  {
    "id": "pkg-mh-33",
    "name": "Maharashtra 5 Jyotirlinga + Shirdi Sai Baba Complete Yatra",
    "slug": "maharashtra-5-jyotirlinga-shirdi-sai-baba",
    "destination": "Shirdi",
    "destinationSlug": "shirdi",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 16900,
    "discountPrice": 20500,
    "rating": 4.9,
    "reviewsCount": 390,
    "heroImage": "/destinations/char-dham.jpg",
    "gallery": [],
    "highlights": [
      "Trimbakeshwar, Grishneshwar, Bhimashankar, Parli Vaijnath & Aundha Nagnath",
      "Shirdi Sai Baba VIP Darshan & Aarti",
      "Pune / Mumbai Pickup & Drop"
    ],
    "inclusions": [
      "4N Hotel Stay",
      "Tempo Traveller / Private Cab",
      "Shirdi VIP Passes",
      "Meals"
    ],
    "exclusions": [
      "Personal donations"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Pune",
    "hotels": [
      {
        "name": "Sun N Sand Shirdi",
        "city": "Shirdi",
        "rating": "4 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Pune to Bhimashankar & Shirdi",
        "description": "Bhimashankar Jyotirlinga darshan & Shirdi drive.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bhimashankar Darshan"
        ],
        "hotel": "Sun N Sand",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Shirdi VIP darshan included?",
        "answer": "Yes, pre-booked VIP entry passes included."
      }
    ]
  },
  {
    "id": "pkg-mh-34",
    "name": "Ajanta & Ellora Caves UNESCO World Heritage Trail",
    "slug": "ajanta-ellora-caves-world-heritage-trail",
    "destination": "Aurangabad",
    "destinationSlug": "aurangabad",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 11800,
    "discountPrice": 14500,
    "rating": 4.8,
    "reviewsCount": 160,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "Ajanta Caves Rock-cut Buddhist Murals Tour",
      "Ellora Kailash Temple Monolithic Marvel",
      "Grishneshwar Jyotirlinga Temple"
    ],
    "inclusions": [
      "2N 4-Star Stay",
      "ASI Licensed Guide",
      "Private Cab",
      "Breakfast"
    ],
    "exclusions": [
      "Monuments Fee"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Aurangabad",
    "hotels": [
      {
        "name": "Lemon Tree Hotel Aurangabad",
        "city": "Aurangabad",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ellora Caves & Kailash Temple",
        "description": "Explore UNESCO Ellora Cave 16 Kailash Temple.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Kailash Temple"
        ],
        "hotel": "Lemon Tree",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Are Ajanta caves closed on Monday?",
        "answer": "Yes, Ajanta is closed Mondays; Ellora is closed Tuesdays."
      }
    ]
  },
  {
    "id": "pkg-ga-35",
    "name": "Goa Beach & Water Sports Vacation 4N/5D",
    "slug": "goa-beach-water-sports-vacation",
    "destination": "Goa",
    "destinationSlug": "goa",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 12500,
    "discountPrice": 15900,
    "rating": 4.8,
    "reviewsCount": 510,
    "heroImage": "/destinations/goa.jpg",
    "gallery": [],
    "highlights": [
      "4N North/South Goa Beach Resort with Pool",
      "5 Water Sports Combo (Parasailing, Jet Ski, Banana, Bumper, Boat)",
      "Mandovi River Dinner Cruise Pass"
    ],
    "inclusions": [
      "4N Resort Stay",
      "Water Sports Combo",
      "Mandovi Cruise",
      "Airport Transfers"
    ],
    "exclusions": [
      "Flight Fare"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Goa",
    "hotels": [
      {
        "name": "Novotel Goa Resort & Spa",
        "city": "Goa",
        "rating": "4 Star",
        "nights": 4
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Goa Arrival & Calangute Beach",
        "description": "Airport pickup & evening Calangute sunset.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Beach Walk"
        ],
        "hotel": "Novotel Goa",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Water sports voucher included?",
        "answer": "Yes, 5 water sports combo at Baga Beach included."
      }
    ]
  },
  {
    "id": "pkg-mh-36",
    "name": "Lonavala \u2013 Khandala \u2013 Mahabaleshwar Western Ghats",
    "slug": "lonavala-khandala-mahabaleshwar-western-ghats",
    "destination": "Mahabaleshwar",
    "destinationSlug": "mahabaleshwar",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 14200,
    "discountPrice": 17500,
    "rating": 4.7,
    "reviewsCount": 180,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "1N Lonavala Tiger Point & Bhushi Dam",
      "2N Mahabaleshwar Mapro Garden & Venna Lake Boating",
      "Panchgani Table Land"
    ],
    "inclusions": [
      "3N Villa/Resort Stay",
      "Mumbai/Pune Private Cab",
      "Breakfast"
    ],
    "exclusions": [
      "Personal shopping"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Mumbai",
    "hotels": [
      {
        "name": "Le Meridien Mahabaleshwar Resort",
        "city": "Mahabaleshwar",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Mumbai to Lonavala Tiger Point",
        "description": "Drive past Khandala ghats & Tiger Point.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Tiger Point"
        ],
        "hotel": "Lonavala Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Venna lake boating included?",
        "answer": "Yes, Venna Lake paddle boat ticket included."
      }
    ]
  },
  {
    "id": "pkg-tn-37",
    "name": "Tamil Nadu Grand Temple Trail (Madurai - Rameshwaram)",
    "slug": "tamil-nadu-grand-temple-trail",
    "destination": "Rameshwaram",
    "destinationSlug": "rameshwaram",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 15800,
    "discountPrice": 19200,
    "rating": 4.9,
    "reviewsCount": 260,
    "heroImage": "/destinations/tamilnadu.jpg",
    "gallery": [],
    "highlights": [
      "1N Madurai Meenakshi Amman Temple",
      "2N Rameshwaram Ramanathaswamy 22 Wells Snan & Dhanushkodi 4x4 Jeep",
      "1N Kanyakumari Sunset & Vivekananda Rock"
    ],
    "inclusions": [
      "4N Hotel Stay",
      "Priest-guided 22 Kund Snan",
      "Dhanushkodi Jeep Pass",
      "Cab"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Spiritual",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Madurai",
    "hotels": [
      {
        "name": "Daiwik Hotels Rameshwaram",
        "city": "Rameshwaram",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Madurai Meenakshi Temple",
        "description": "Meenakshi Amman temple night procession.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Meenakshi Temple"
        ],
        "hotel": "Heritage Madurai",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "22 Kund Snan guide included?",
        "answer": "Yes, priest guidance for 22 well holy bath included."
      }
    ]
  },
  {
    "id": "pkg-kl-38",
    "name": "Kerala God's Own Country (Munnar - Houseboat - Kovalam)",
    "slug": "kerala-gods-own-country-master-5n6d",
    "destination": "Kerala",
    "destinationSlug": "kerala",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 24500,
    "discountPrice": 29900,
    "rating": 4.9,
    "reviewsCount": 420,
    "heroImage": "/destinations/kerala.jpg",
    "gallery": [],
    "highlights": [
      "2N Munnar Tea Hills",
      "1N Thekkady Spice Walk",
      "1N Private AC Houseboat Alleppey",
      "1N Kovalam Beach"
    ],
    "inclusions": [
      "5N Stay",
      "All Meals on Houseboat",
      "Private Cab"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Cochin",
    "hotels": [
      {
        "name": "Tea County Munnar",
        "city": "Munnar",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Cochin to Munnar",
        "description": "Waterfalls drive & tea garden resort check in.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Waterfalls"
        ],
        "hotel": "Tea County",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Houseboat private?",
        "answer": "100% private houseboat with dedicated chef."
      }
    ]
  },
  {
    "id": "pkg-ap-39",
    "name": "Tirupati Balaji VIP Darshan & Srikalahasti 1N/2D",
    "slug": "tirupati-balaji-vip-darshan-srikalahasti",
    "destination": "Tirupati",
    "destinationSlug": "tirupati",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 2,
    "durationNights": 1,
    "startingPrice": 7500,
    "discountPrice": 9500,
    "rating": 4.9,
    "reviewsCount": 480,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "Special Entry Darshan Ticket (SED Rs 300) Pre-Booked",
      "Srikalahasti Rahu-Ketu Temple",
      "Bangalore / Chennai Pickup & Drop"
    ],
    "inclusions": [
      "1N 4-Star Hotel",
      "Tirumala SED Pass",
      "Laddoo Prasadam",
      "Cab"
    ],
    "exclusions": [
      "Personal donations"
    ],
    "theme": "Spiritual",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Chennai",
    "hotels": [
      {
        "name": "Marasa Sarovar Premier Tirupati",
        "city": "Tirupati",
        "rating": "5 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Tirumala Balaji VIP Darshan",
        "description": "Tirumala hill climb & Lord Venkateswara darshan.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Balaji Darshan"
        ],
        "hotel": "Marasa Sarovar",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Special Darshan ticket included?",
        "answer": "Yes, Rs 300 Special Entry Darshan pass included."
      }
    ]
  },
  {
    "id": "pkg-ka-40",
    "name": "Coorg \u2013 Mysore \u2013 Wayanad \u2013 Ooty \u2013 Kodaikanal Plantation",
    "slug": "coorg-mysore-wayanad-ooty-kodaikanal",
    "destination": "Coorg",
    "destinationSlug": "coorg",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 18900,
    "discountPrice": 22900,
    "rating": 4.8,
    "reviewsCount": 270,
    "heroImage": "/destinations/coorg.jpg",
    "gallery": [],
    "highlights": [
      "2N Coorg Coffee Estate Homestay + Abbey Falls",
      "2N Ooty Toy Train & Kodaikanal Lake",
      "Mysore Palace Illumination"
    ],
    "inclusions": [
      "4N Stay",
      "Toy Train Vouchers",
      "Private Cab"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bangalore",
    "hotels": [
      {
        "name": "Evolve Back Coorg",
        "city": "Coorg",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bangalore to Coorg Coffee Hills",
        "description": "Drive past Mysore Palace to Coorg coffee estate.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Coffee Walk"
        ],
        "hotel": "Evolve Back",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Toy train tickets included?",
        "answer": "Yes, Nilgiri Mountain Toy Train joyride tickets included."
      }
    ]
  },
  {
    "id": "pkg-ka-41",
    "name": "Hampi \u2013 Badami \u2013 Pattadakal UNESCO Boulder Empire",
    "slug": "hampi-badami-pattadakal-unesco-boulder-empire",
    "destination": "Hampi",
    "destinationSlug": "hampi",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 13500,
    "discountPrice": 16500,
    "rating": 4.8,
    "reviewsCount": 140,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "2N Hampi Virupaksha Temple, Stone Chariot & Coracle Boat Ride",
      "1N Badami Cave Temples & Pattadakal UNESCO Complex"
    ],
    "inclusions": [
      "3N Heritage Resort",
      "Coracle Ride Vouchers",
      "Guide",
      "Cab"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Hospet",
    "hotels": [
      {
        "name": "Heritage Resort Hampi",
        "city": "Hampi",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Hampi Stone Chariot & Ruins",
        "description": "Guided tour of Vijayanagara empire ruins.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Stone Chariot"
        ],
        "hotel": "Heritage Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Coracle boat ride included?",
        "answer": "Yes, traditional round coracle boat ride on Tungabhadra river included."
      }
    ]
  },
  {
    "id": "pkg-ts-42",
    "name": "Hyderabad \u2013 Ramoji Film City \u2013 Srisailam Jyotirlinga",
    "slug": "hyderabad-ramoji-film-city-srisailam",
    "destination": "Hyderabad",
    "destinationSlug": "hyderabad",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 12900,
    "discountPrice": 15800,
    "rating": 4.8,
    "reviewsCount": 230,
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [],
    "highlights": [
      "2N Hyderabad Charminar, Golconda Fort & Full Day Ramoji VIP Star Experience",
      "1N Srisailam Mallikarjuna Jyotirlinga Darshan"
    ],
    "inclusions": [
      "3N 4-Star Stay",
      "Ramoji VIP Ticket",
      "Private Cab"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Hyderabad",
    "hotels": [
      {
        "name": "Taj Krishna Hyderabad",
        "city": "Hyderabad",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ramoji Film City VIP Tour",
        "description": "Full day Ramoji Star experience pass.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Ramoji VIP"
        ],
        "hotel": "Taj Krishna",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Ramoji VIP pass included?",
        "answer": "Yes, Ramoji VIP Star Experience ticket with buffet included."
      }
    ]
  },
  {
    "id": "pkg-ne-43",
    "name": "Guwahati \u2013 Shillong \u2013 Cherrapunji \u2013 Dawki Scotland of East",
    "slug": "guwahati-shillong-cherrapunji-dawki-scotland-east",
    "destination": "Meghalaya",
    "destinationSlug": "meghalaya",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 22800,
    "discountPrice": 27500,
    "rating": 4.9,
    "reviewsCount": 240,
    "heroImage": "/destinations/uk.jpg",
    "gallery": [],
    "highlights": [
      "1N Guwahati Kamakhya VIP Pass",
      "2N Shillong Elephant Falls",
      "2N Cherrapunji Double Decker Living Root Bridge & Crystal Clear Dawki River Boating"
    ],
    "inclusions": [
      "5N Eco-Resort Stay",
      "Dawki Boating Pass",
      "Private Cab"
    ],
    "exclusions": [
      "Flight to Guwahati"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Guwahati",
    "hotels": [
      {
        "name": "Polo Towers Shillong",
        "city": "Shillong",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Guwahati Kamakhya Temple to Shillong",
        "description": "Kamakhya VIP darshan & drive to Shillong.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Kamakhya Temple"
        ],
        "hotel": "Polo Towers",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Dawki river boating included?",
        "answer": "Yes, crystal clear Umngot river boating included."
      }
    ]
  },
  {
    "id": "pkg-as-44",
    "name": "Kaziranga National Park & Majuli River Island Safari",
    "slug": "kaziranga-national-park-majuli-island-safari",
    "destination": "Kaziranga",
    "destinationSlug": "kaziranga",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 16500,
    "discountPrice": 19800,
    "rating": 4.8,
    "reviewsCount": 130,
    "heroImage": "/destinations/south-africa.jpg",
    "gallery": [],
    "highlights": [
      "2N Kaziranga 1 Elephant + 1 Jeep Safari (One-Horned Rhino)",
      "1N Majuli World's Largest River Island Satra Culture"
    ],
    "inclusions": [
      "3N Resort Stay",
      "Elephant & Jeep Safari Permits",
      "Ferry Tickets"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Wildlife",
    "hotelCategory": "4 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jorhat",
    "hotels": [
      {
        "name": "IORA The Retreat Kaziranga",
        "city": "Kaziranga",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Kaziranga One-Horned Rhino Safari",
        "description": "Afternoon Jeep safari in Central Range.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Rhino Safari"
        ],
        "hotel": "IORA Retreat",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Elephant safari guaranteed?",
        "answer": "Yes, morning Elephant safari quota included."
      }
    ]
  },
  {
    "id": "pkg-ar-45",
    "name": "Tawang \u2013 Dirang \u2013 Bomdila Monasteries & High Passes 6N/7D",
    "slug": "tawang-dirang-bomdila-monasteries-high-passes",
    "destination": "Tawang",
    "destinationSlug": "tawang",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 27500,
    "discountPrice": 33000,
    "rating": 4.9,
    "reviewsCount": 140,
    "heroImage": "/destinations/north-east.jpg",
    "gallery": [],
    "highlights": [
      "2N Tawang Monastery & Bumla Pass (Indo-China Border)",
      "Sela Pass Snow & Sela Lake",
      "Inner Line Permits & 4x4 Transport"
    ],
    "inclusions": [
      "6N Stay",
      "Inner Line Permit & Bumla Permit",
      "4x4 Vehicle"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Group",
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Guwahati",
    "hotels": [
      {
        "name": "Hotel Dragon Tawang",
        "city": "Tawang",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Guwahati to Bomdila",
        "description": "Drive into Arunachal hills to Bomdila monastery.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bomdila Monastery"
        ],
        "hotel": "Bomdila Hotel",
        "transfers": "4x4 Cab"
      }
    ],
    "faqs": [
      {
        "question": "Bumla Pass Army permit included?",
        "answer": "Yes, official Army permit for Bumla Pass included."
      }
    ]
  },
  {
    "id": "pkg-sk-46",
    "name": "Sikkim & Darjeeling Himalayan Enchantment 6N/7D",
    "slug": "sikkim-darjeeling-himalayan-enchantment-master",
    "destination": "North East",
    "destinationSlug": "north-east",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 26800,
    "discountPrice": 32500,
    "rating": 4.9,
    "reviewsCount": 250,
    "heroImage": "/destinations/north-east.jpg",
    "gallery": [],
    "highlights": [
      "2N Gangtok Tsomgo Lake & Nathula Pass",
      "1N Lachung Yumthang Valley",
      "2N Darjeeling Tiger Hill Sunrise & Toy Train"
    ],
    "inclusions": [
      "6N Hotel Stay",
      "Nathula Permit",
      "Toy Train Vouchers"
    ],
    "exclusions": [
      "Airfare to IXB"
    ],
    "theme": "Family",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bagdogra",
    "hotels": [
      {
        "name": "Mayfair Spa Resort Gangtok",
        "city": "Gangtok",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bagdogra to Gangtok",
        "description": "Teesta river drive to Gangtok MG Marg.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "MG Marg Walk"
        ],
        "hotel": "Mayfair Gangtok",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Nathula Pass included?",
        "answer": "Yes, Nathula Pass permit included."
      }
    ]
  },
  {
    "id": "pkg-or-47",
    "name": "Puri \u2013 Konark \u2013 Bhubaneswar \u2013 Chilika Coastal Yatra",
    "slug": "puri-konark-bhubaneswar-chilika-coastal-yatra",
    "destination": "Puri",
    "destinationSlug": "puri",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 13200,
    "discountPrice": 16000,
    "rating": 4.8,
    "reviewsCount": 190,
    "heroImage": "/destinations/char-dham.jpg",
    "gallery": [],
    "highlights": [
      "2N Jagannath Puri VIP Panda Guidance & Golden Beach",
      "Konark Sun Temple UNESCO Architecture",
      "Chilika Lake Irrawaddy Dolphin Boat Charter"
    ],
    "inclusions": [
      "3N Resort Stay",
      "Chilika Boat Charter",
      "Panda Assistance"
    ],
    "exclusions": [
      "Train/Flight"
    ],
    "theme": "Spiritual",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bhubaneswar",
    "hotels": [
      {
        "name": "Mayfair Heritage Puri",
        "city": "Puri",
        "rating": "4 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jagannath Puri Darshan & Golden Beach",
        "description": "VIP Jagannath Temple darshan & sunset beach walk.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Jagannath Temple"
        ],
        "hotel": "Mayfair Puri",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Chilika Dolphin boat included?",
        "answer": "Yes, private motorboat charter for Dolphin watching included."
      }
    ]
  },
  {
    "id": "pkg-wb-48",
    "name": "Kolkata & Sundarbans Mangrove Cruise Safari 3N/4D",
    "slug": "kolkata-sundarbans-mangrove-cruise-safari",
    "destination": "Sundarbans",
    "destinationSlug": "sundarbans",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 14500,
    "discountPrice": 17800,
    "rating": 4.8,
    "reviewsCount": 160,
    "heroImage": "/destinations/south-africa.jpg",
    "gallery": [],
    "highlights": [
      "1N Kolkata Victoria Memorial & Dakshineswar Kali",
      "2N Sundarbans Royal Bengal Tiger Jungle Boat Cruise"
    ],
    "inclusions": [
      "3N Accommodation",
      "Sundarbans Boat Safari & Forest Permits",
      "All Meals on Boat"
    ],
    "exclusions": [
      "Flight/Train"
    ],
    "theme": "Wildlife",
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Kolkata",
    "hotels": [
      {
        "name": "Sundarban Jungle Camp",
        "city": "Sundarbans",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Kolkata City Tour to Sundarbans",
        "description": "Victoria Memorial visit & drive to Godkhali boat jetty.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Victoria Memorial"
        ],
        "hotel": "Jungle Camp",
        "transfers": "Cab & Boat"
      }
    ],
    "faqs": [
      {
        "question": "Sundarbans boat private?",
        "answer": "Yes, licensed jungle boat safari included."
      }
    ]
  },
  {
    "id": "pkg-an-49",
    "name": "Andaman Tropical Escape 5N/6D (Port Blair - Havelock - Neil)",
    "slug": "andaman-tropical-escape-master-5n6d",
    "destination": "Andaman",
    "destinationSlug": "andaman",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 32000,
    "discountPrice": 38900,
    "rating": 4.9,
    "reviewsCount": 350,
    "heroImage": "/destinations/north-east.jpg",
    "gallery": [],
    "highlights": [
      "2N Port Blair + 2N Havelock Radhanagar Beach + 1N Neil Island",
      "Makruzz / Nautika Premium Catamaran Cruise Tickets",
      "Scuba Diving & Elephant Beach Snorkeling"
    ],
    "inclusions": [
      "5N Beach Resort Stay",
      "Catamaran Cruise Tickets",
      "Breakfast"
    ],
    "exclusions": [
      "Airfare"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Port Blair",
    "hotels": [
      {
        "name": "Barefoot at Havelock",
        "city": "Havelock Island",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Port Blair Arrival & Cellular Jail",
        "description": "Cellular Jail Sound & Light show.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Cellular Jail"
        ],
        "hotel": "Port Blair Resort",
        "transfers": "Cab"
      }
    ],
    "faqs": [
      {
        "question": "Catamaran ferry included?",
        "answer": "Yes, Makruzz AC Premium class seats included."
      }
    ]
  },
  {
    "id": "pkg-ld-50",
    "name": "Lakshadweep Islands Exotic Coral Island Escape 4N/5D",
    "slug": "lakshadweep-islands-exotic-coral-escape",
    "destination": "Lakshadweep",
    "destinationSlug": "lakshadweep",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 38500,
    "discountPrice": 46000,
    "rating": 5.0,
    "reviewsCount": 180,
    "heroImage": "/destinations/north-east.jpg",
    "gallery": [],
    "highlights": [
      "Kochi Flight to Agatti Island",
      "2N Agatti Coral Lagoon Resort + 2N Bangaram Island Beach Cottage",
      "Mandatory Entry Permit Clearance & Scuba Diving"
    ],
    "inclusions": [
      "4N Cottage Stay",
      "Lakshadweep Mandatory Permit",
      "Boat Inter-Island Transfers",
      "All Meals"
    ],
    "exclusions": [
      "Kochi Flight"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "Luxury Resort",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Kochi",
    "hotels": [
      {
        "name": "Bangaram Island Resort",
        "city": "Bangaram Lakshadweep",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Flight to Agatti Island",
        "description": "Arrive at Agatti airstrip. Speedboat transfer to Bangaram Island.",
        "meals": [
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Agatti Lagoon Boat"
        ],
        "hotel": "Bangaram Resort",
        "transfers": "Speedboat"
      }
    ],
    "faqs": [
      {
        "question": "Mandatory permit handled?",
        "answer": "Yes, complete Lakshadweep Administration entry permit clearance handled by us."
      }
    ]
  },
  {
    "id": "pkg-intl-dubai",
    "name": "Dubai Luxury Desert & Skyline Extravaganza 5N/6D",
    "slug": "dubai-luxury-desert-skyline-extravaganza",
    "destination": "Dubai",
    "destinationSlug": "dubai",
    "country": "United Arab Emirates",
    "region": "Middle East",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 34500,
    "discountPrice": 42500,
    "rating": 4.9,
    "reviewsCount": 380,
    "heroImage": "/destinations/dubai.jpg",
    "gallery": ["/destinations/dubai.jpg"],
    "highlights": [
      "Burj Khalifa 124th Floor Observation Deck",
      "Desert Safari with BBQ Dinner & Belly Dance",
      "Dhow Cruise Dinner at Dubai Marina",
      "Miracle Garden & Global Village Tour"
    ],
    "inclusions": [
      "5N 4-Star Hotel Stay with Breakfast",
      "Airport Transfers & Sightseeing in AC Coach",
      "Burj Khalifa & Desert Safari Passes",
      "Dubai Tourist Visa Assistance"
    ],
    "exclusions": [
      "Personal Expenses & Tourism Dirham Fee"
    ],
    "theme": "Luxury",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Bengaluru",
    "hotels": [
      { "name": "Citymax Hotel Bur Dubai", "city": "Dubai", "rating": "4 Star", "nights": 5 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Dubai & Marina Dhow Cruise",
        "description": "Arrive at Dubai International Airport. Check-in to hotel. Evening Dhow Cruise with buffet dinner.",
        "meals": ["Dinner"],
        "activities": ["Dubai Marina Dhow Cruise"],
        "hotel": "Citymax Bur Dubai",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      { "question": "Is visa included?", "answer": "Yes, standard Dubai 30-day tourist visa assistance is included." }
    ]
  },
  {
    "id": "pkg-intl-bali",
    "name": "Bali Tropical Paradise & Private Pool Villa 5N/6D",
    "slug": "bali-tropical-paradise-private-pool-villa",
    "destination": "Bali",
    "destinationSlug": "bali",
    "country": "Indonesia",
    "region": "Asia",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 42500,
    "discountPrice": 51000,
    "rating": 4.9,
    "reviewsCount": 420,
    "heroImage": "/destinations/bali.jpg",
    "gallery": ["/destinations/bali.jpg"],
    "highlights": [
      "2N Private Pool Villa Stay in Seminyak",
      "Kintamani Volcano & Ubud Monkey Forest Tour",
      "Tanah Lot Temple Sunset View",
      "Nusa Penida Island Day Trip with Snorkeling"
    ],
    "inclusions": [
      "3N 4-Star Resort + 2N Private Pool Villa",
      "Daily Breakfast & Floating Breakfast Experience",
      "Private AC Car for All Sightseeing",
      "Speedboat Transfers to Nusa Penida"
    ],
    "exclusions": [
      "Personal Spa Expenses & Flights"
    ],
    "theme": "Honeymoon",
    "hotelCategory": "4 Star Villa",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Chennai",
    "hotels": [
      { "name": "Aksari Resort Ubud & Aksari Villa Seminyak", "city": "Bali", "rating": "5 Star", "nights": 5 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Bali & Transfer to Villa",
        "description": "Welcome to Bali. Transfer to your luxury villa in Seminyak with flower decoration.",
        "meals": ["Breakfast"],
        "activities": ["Relaxation & Beach Walk"],
        "hotel": "Seminyak Villa",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      { "question": "Is visa on arrival available?", "answer": "Yes, Bali provides instant Visa on Arrival for Indian citizens." }
    ]
  },
  {
    "id": "pkg-intl-thailand",
    "name": "Thailand Exotic Phuket & Krabi Island Hopping 6N/7D",
    "slug": "thailand-exotic-phuket-krabi-island-hopping",
    "destination": "Thailand",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "Asia",
    "isInternational": true,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 29800,
    "discountPrice": 36500,
    "rating": 4.8,
    "reviewsCount": 350,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": ["/destinations/thailand.jpg"],
    "highlights": [
      "Phi Phi Island Speedboat Tour with Lunch",
      "4 Islands Tour in Krabi with Snorkeling",
      "Phuket Fantasea Cultural Show",
      "James Bond Island & Phang Nga Bay"
    ],
    "inclusions": [
      "3N Phuket 4-Star Resort + 3N Krabi Beach Resort",
      "Island Speedboat Transfers & Lunch",
      "Airport Transfers in AC Coach"
    ],
    "exclusions": [
      "National Park Entry Fees"
    ],
    "theme": "Beach & Adventure",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Kolkata / Mumbai",
    "hotels": [
      { "name": "Deevana Patong Resort Phuket", "city": "Phuket", "rating": "4 Star", "nights": 3 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Phuket & Patong Beach",
        "description": "Land in Phuket. Check-in to hotel and enjoy Patong nightlife.",
        "meals": ["Breakfast"],
        "activities": ["Patong Beach Promenade"],
        "hotel": "Deevana Phuket",
        "transfers": "Shared Coach"
      }
    ],
    "faqs": [
      { "question": "Is Thailand visa free?", "answer": "Yes, Thailand offers visa-free entry for Indian passport holders." }
    ]
  },
  {
    "id": "pkg-intl-singapore",
    "name": "Singapore Marina Bay & Sentosa Universal Spectacular 4N/5D",
    "slug": "singapore-marina-bay-sentosa-universal-spectacular",
    "destination": "Singapore",
    "destinationSlug": "singapore",
    "country": "Singapore",
    "region": "Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 37800,
    "discountPrice": 46000,
    "rating": 4.9,
    "reviewsCount": 290,
    "heroImage": "/destinations/singapore.jpg",
    "gallery": ["/destinations/singapore.jpg"],
    "highlights": [
      "Universal Studios Full Day Pass",
      "Gardens by the Bay Supertree Grove & Cloud Forest",
      "Sentosa Cable Car & Wings of Time Night Show",
      "Night Safari Wildlife Experience"
    ],
    "inclusions": [
      "4N 4-Star Hotel Stay with Breakfast",
      "Universal Studios & Gardens by the Bay Tickets",
      "Airport & Attraction Transfers"
    ],
    "exclusions": [
      "Personal Expenses"
    ],
    "theme": "Family & Entertainment",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Chennai / Mumbai",
    "hotels": [
      { "name": "Hotel Boss Singapore", "city": "Singapore", "rating": "4 Star", "nights": 4 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Singapore & Night Safari",
        "description": "Land at Changi Airport. Transfer to hotel. Evening Night Safari tram ride.",
        "meals": ["Breakfast"],
        "activities": ["Night Safari Tram Ride"],
        "hotel": "Hotel Boss",
        "transfers": "AC Private Coach"
      }
    ],
    "faqs": [
      { "question": "How long is Singapore visa approval?", "answer": "E-visa process takes 3-4 working days." }
    ]
  },
  {
    "id": "pkg-intl-maldives",
    "name": "Maldives Luxury Overwater Water Villa Retreat 4N/5D",
    "slug": "maldives-luxury-overwater-water-villa-retreat",
    "destination": "Maldives",
    "destinationSlug": "maldives",
    "country": "Maldives",
    "region": "Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 75000,
    "discountPrice": 92000,
    "rating": 5.0,
    "reviewsCount": 210,
    "heroImage": "/destinations/maldives.jpg",
    "gallery": ["/destinations/maldives.jpg"],
    "highlights": [
      "2N Beach Villa + 2N Overwater Villa",
      "All-Inclusive Dining & Unlimited Beverages",
      "Speedboat / Seaplane Airport Transfers",
      "Snorkeling & Coral Reef Exploration"
    ],
    "inclusions": [
      "4N Luxury 5-Star Resort Stay",
      "All Meals (Breakfast, Lunch & Dinner)",
      "Speedboat Transfers to Resort",
      "Green Tax Included"
    ],
    "exclusions": [
      "Scuba Diving Certification"
    ],
    "theme": "Luxury Honeymoon",
    "hotelCategory": "5 Star Resort",
    "mealPlan": "All Inclusive",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Bengaluru / Mumbai",
    "hotels": [
      { "name": "Adaaran Select Hudhuranfushi", "city": "Maldives", "rating": "5 Star", "nights": 4 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Male & Speedboat to Resort",
        "description": "Arrive at Velana International Airport. Scenic speedboat transfer to luxury resort.",
        "meals": ["Dinner"],
        "activities": ["Sunset Beach Walk"],
        "hotel": "Adaaran Maldives",
        "transfers": "Speedboat"
      }
    ],
    "faqs": [
      { "question": "Is visa needed for Maldives?", "answer": "Free 30-day Visa on Arrival is granted for all Indian tourists." }
    ]
  },
  {
    "id": "pkg-intl-switzerland",
    "name": "Grand Europe & Swiss Alps Panorama Tour 7N/8D",
    "slug": "grand-europe-swiss-alps-panorama-tour",
    "destination": "Switzerland Europe",
    "destinationSlug": "switzerland",
    "country": "Switzerland",
    "region": "Europe",
    "isInternational": true,
    "durationDays": 8,
    "durationNights": 7,
    "startingPrice": 137200,
    "discountPrice": 158000,
    "rating": 4.9,
    "reviewsCount": 180,
    "heroImage": "/destinations/switzerland.jpg",
    "gallery": ["/destinations/switzerland.jpg"],
    "highlights": [
      "Mount Titlis Cable Car with Ice Flyer",
      "Jungfraujoch Top of Europe Train Excursion",
      "Lucerne Lake Cruise & Chapel Bridge",
      "Paris Eiffel Tower 2nd Level & Seine River Cruise"
    ],
    "inclusions": [
      "7N 4-Star Hotel Stay with Indian Dinners",
      "Swiss Travel Pass & Mountain Excursions",
      "Schengen Visa Assistance"
    ],
    "exclusions": [
      "City Tourist Tax (CHF 4/night)"
    ],
    "theme": "Scenic & Heritage",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast & Indian Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai",
    "hotels": [
      { "name": "Hotel Astoria Lucerne & Hotel Novotel Zurich", "city": "Lucerne", "rating": "4 Star", "nights": 7 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Zurich & Transfer to Lucerne",
        "description": "Welcome to Switzerland. Board scenic Swiss Rail to Lucerne.",
        "meals": ["Dinner"],
        "activities": ["Lucerne Old Town Walk"],
        "hotel": "Lucerne Hotel",
        "transfers": "Swiss Rail Pass"
      }
    ],
    "faqs": [
      { "question": "Do you provide Schengen visa processing?", "answer": "Yes, full Schengen visa documentation & appointment assistance is provided." }
    ]
  },
  {
    "id": "pkg-intl-vietnam",
    "name": "Vietnam Ha Long Bay Cruise & Hanoi Heritage 5N/6D",
    "slug": "vietnam-ha-long-bay-hanoi-heritage",
    "destination": "Vietnam",
    "destinationSlug": "vietnam",
    "country": "Vietnam",
    "region": "Asia",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 32000,
    "discountPrice": 39000,
    "rating": 4.8,
    "reviewsCount": 160,
    "heroImage": "/destinations/vietnam.jpg",
    "gallery": ["/destinations/vietnam.jpg"],
    "highlights": [
      "1N Overnight Luxury Cruise in Ha Long Bay",
      "Hanoi Old Quarter & Hoan Kiem Lake",
      "Da Nang Ba Na Hills & Golden Hands Bridge",
      "Hoi An Ancient Lantern Town Walk"
    ],
    "inclusions": [
      "4N 4-Star Hotels + 1N 5-Star Ha Long Cruise",
      "Full Board Meals on Cruise",
      "Ba Na Hills Cable Car Pass"
    ],
    "exclusions": [
      "E-Visa Stamping Fee"
    ],
    "theme": "Cultural & Cruise",
    "hotelCategory": "4 Star Cruise",
    "mealPlan": "Breakfast & Cruise Meals",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Kolkata",
    "hotels": [
      { "name": "Paradise Elegance Ha Long Cruise", "city": "Ha Long", "rating": "5 Star", "nights": 1 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Hanoi",
        "description": "Land in Hanoi. Check-in to hotel. Evening street food walk.",
        "meals": ["Dinner"],
        "activities": ["Hanoi Street Food Tour"],
        "hotel": "Hanoi Golden Hotel",
        "transfers": "Private Vehicle"
      }
    ],
    "faqs": [
      { "question": "Is Vietnam e-visa easy?", "answer": "Yes, Vietnam e-visa approval takes 3 working days online." }
    ]
  },
  {
    "id": "pkg-intl-japan",
    "name": "Japan Cherry Blossom & Tokyo Mt. Fuji Express 6N/7D",
    "slug": "japan-cherry-blossom-tokyo-express",
    "destination": "Japan",
    "destinationSlug": "japan",
    "country": "Japan",
    "region": "Asia",
    "isInternational": true,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 125000,
    "discountPrice": 145000,
    "rating": 5.0,
    "reviewsCount": 140,
    "heroImage": "/destinations/japan.jpg",
    "gallery": ["/destinations/japan.jpg"],
    "highlights": [
      "Shinkansen Bullet Train Experience",
      "Mount Fuji 5th Station & Lake Kawaguchiko",
      "Tokyo Skytree & Sensoji Temple",
      "Kyoto Arashiyama Bamboo Grove & Fushimi Inari"
    ],
    "inclusions": [
      "6N 4-Star Hotel Stay with Breakfast",
      "7-Day JR Rail Pass Included",
      "Japan Visa Assistance"
    ],
    "exclusions": [
      "Personal Expenses"
    ],
    "theme": "Heritage & Tech",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai",
    "hotels": [
      { "name": "Shinjuku Granbell Hotel Tokyo", "city": "Tokyo", "rating": "4 Star", "nights": 4 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Tokyo",
        "description": "Land at Tokyo Narita Airport. Transfer to Shinjuku hotel.",
        "meals": ["Dinner"],
        "activities": ["Shinjuku Evening Walk"],
        "hotel": "Tokyo Hotel",
        "transfers": "Airport Limousine Bus"
      }
    ],
    "faqs": [
      { "question": "Is Japan visa required?", "answer": "Yes, Japan e-visa assistance is provided." }
    ]
  },
  {
    "id": "pkg-intl-australia",
    "name": "Australia Sydney & Great Barrier Reef Wonders 7N/8D",
    "slug": "australia-sydney-great-barrier-reef-wonders",
    "destination": "Australia",
    "destinationSlug": "australia",
    "country": "Australia",
    "region": "Oceania",
    "isInternational": true,
    "durationDays": 8,
    "durationNights": 7,
    "startingPrice": 185000,
    "discountPrice": 210000,
    "rating": 4.9,
    "reviewsCount": 120,
    "heroImage": "/destinations/australia.jpg",
    "gallery": ["/destinations/australia.jpg"],
    "highlights": [
      "Sydney Opera House Guided Inside Tour",
      "Sydney Harbour Dinner Cruise",
      "Cairns Great Barrier Reef Catamaran Cruise",
      "Melbourne Great Ocean Road Scenic Drive"
    ],
    "inclusions": [
      "7N 4-Star Hotel Stay with Breakfast",
      "Great Barrier Reef Reef Magic Cruise with Buffet",
      "Australia Visa Assistance"
    ],
    "exclusions": [
      "Domestic Flights in Australia"
    ],
    "theme": "Wildlife & Nature",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Singapore",
    "hotels": [
      { "name": "Rydges World Square Sydney", "city": "Sydney", "rating": "4 Star", "nights": 4 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Sydney & Harbour Cruise",
        "description": "Arrive in Sydney. Transfer to hotel. Evening Harbour dinner cruise.",
        "meals": ["Dinner"],
        "activities": ["Sydney Harbour Cruise"],
        "hotel": "Rydges Sydney",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      { "question": "Is Australia visa process online?", "answer": "Yes, 100% online Subclass 600 tourist visa processed." }
    ]
  },
  {
    "id": "pkg-intl-malaysia",
    "name": "Kuala Lumpur & Genting Highlands Malaysia Explorer 4N/5D",
    "slug": "kuala-lumpur-genting-highlands-malaysia-explorer",
    "destination": "Malaysia",
    "destinationSlug": "malaysia",
    "country": "Malaysia",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 29800,
    "discountPrice": 36500,
    "rating": 4.8,
    "reviewsCount": 210,
    "heroImage": "/destinations/malaysia.jpg",
    "gallery": ["/destinations/malaysia.jpg"],
    "highlights": [
      "Petronas Twin Towers Skybridge & Observation Deck Ticket",
      "Genting Highlands Cable Car (Awana SkyWay)",
      "Batu Caves Lord Murugan Temple Tour",
      "Sunway Lagoon Theme Park Day Pass"
    ],
    "inclusions": [
      "4N 4-Star Hotel Stay with Daily Breakfast",
      "Kuala Lumpur City Tour & Batu Caves Transfer",
      "Genting Cable Car Return Tickets",
      "Malaysia eVISA / Entry Pass Assistance"
    ],
    "exclusions": [
      "Tourism Tax paid directly at hotel"
    ],
    "theme": "City Escapes & Theme Parks",
    "hotelCategory": "4 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": true,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Chennai",
    "hotels": [
      { "name": "Mercure Kuala Lumpur Shaw Parade", "city": "Kuala Lumpur", "rating": "4 Star", "nights": 4 }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Kuala Lumpur & Night View",
        "description": "Arrive at KLIA. Private transfer to hotel. Evening view of illuminated Petronas Twin Towers.",
        "meals": ["Welcome Drink"],
        "activities": ["Petronas Towers Photo Stop"],
        "hotel": "Mercure Kuala Lumpur",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      { "question": "Do Indian passport holders get Visa Free Entry to Malaysia?", "answer": "Yes, Malaysia offers Visa-Free entry for Indian citizens for up to 30 days." }
    ]
  },

  {
    "id": "pkg-thailand-phuket-krabi-5n",
    "name": "Amazing Thailand: Phuket (3N) & Krabi (2N) Island Getaway",
    "slug": "thailand-phuket-krabi-5n6d-tour-package",
    "destination": "Phuket, Krabi",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 24500,
    "discountPrice": 29999,
    "rating": 4.9,
    "reviewsCount": 340,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg",
      "/destinations/bali.jpg"
    ],
    "highlights": [
      "Phuket Island & Patong Beach Exploration",
      "Phi Phi Islands Speedboat Tour with Buffet Lunch",
      "Krabi 4 Islands Boat Tour (Chicken Island & Phra Nang Cave)",
      "Emerald Pool & Hot Springs Natural Spa",
      "Minimum 4 Pax Special Rate"
    ],
    "inclusions": [
      "3 Nights Accommodation in Phuket (3-Star Hotel)",
      "2 Nights Accommodation in Krabi (3-Star Hotel)",
      "Daily Breakfast at Hotels",
      "Airport & Inter-Hotel Transfers on Private/SIC Basis",
      "Phi Phi Island & Krabi 4 Islands Sightseeing Tours",
      "English Speaking Driver & Tour Guide Assistance"
    ],
    "exclusions": [
      "International Flights & Thailand Visa Fees",
      "National Park Entrance Fees",
      "Personal Expenses & Travel Insurance"
    ],
    "theme": "Beach & Island",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Phuket \u2013 Hotel Transfer & Leisure",
        "description": "Arrive at Phuket International Airport, meet our local representative, and transfer to your 3-star hotel. Evening free to explore Patong Beach and Bangla Road night markets.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach Walk",
          "Bangla Road Night Market"
        ],
        "hotel": "Patong Beach Hotel 3\u2605 / Similar",
        "transfers": "Private Airport Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phi Phi Islands Speedboat Tour with Lunch",
        "description": "Full day speedboat excursion to Maya Bay, Pileh Lagoon, Monkey Beach, and Viking Cave. Enjoy snorkeling and a delicious beachfront buffet lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Speedboat Cruise",
          "Snorkeling at Maya Bay",
          "Viking Cave Visit"
        ],
        "hotel": "Patong Beach Hotel 3\u2605 / Similar",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Phuket City Sightseeing Tour",
        "description": "Visit the iconic Big Buddha Phuket, Karon Viewpoint, Wat Chalong Temple, and Old Phuket Town historic Sino-Portuguese architecture.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Big Buddha Visit",
          "Wat Chalong Temple",
          "Old Phuket Town Walk"
        ],
        "hotel": "Patong Beach Hotel 3\u2605 / Similar",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Transfer to Krabi \u2013 Check-in & Evening Beach Stroll",
        "description": "Scenic road transfer from Phuket to Krabi. Check-in to your resort and enjoy free time at Ao Nang Beach and local night markets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Scenic Coastal Drive",
          "Ao Nang Beach Leisure"
        ],
        "hotel": "Ao Nang Resort 3\u2605 / Similar",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Krabi 4 Islands Speedboat Tour",
        "description": "Explore Phra Nang Cave Beach, Tup Island, Chicken Island, and Poda Island with crystal clear waters and limestone cliffs.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "4 Islands Boat Tour",
          "Snorkeling",
          "Phra Nang Cave"
        ],
        "hotel": "Ao Nang Resort 3\u2605 / Similar",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Departure from Phuket / Krabi Airport",
        "description": "Enjoy breakfast, check out from hotel, and private transfer to airport for your onward return flight home with sweet Thailand memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Check-out",
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private Airport Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Patong Beach Hotel 3\u2605",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Ao Nang Cliff Resort 3\u2605",
        "city": "Krabi",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price per person for this Thailand 5N/6D package?",
        "answer": "The official price is \u20b924,500 per person on double sharing basis for a minimum group of 4 pax (increased by \u20b95k over flyer rate \u20b919,500)."
      },
      {
        "question": "Are island boat tours included?",
        "answer": "Yes, full day Phi Phi Islands Speedboat tour and Krabi 4 Islands tour are included."
      }
    ]
  },
  {
    "id": "pkg-thailand-phuket-pattaya-bangkok-7n",
    "name": "Thailand Trio Explorer: Phuket (3N), Pattaya (2N) & Bangkok (2N)",
    "slug": "thailand-phuket-pattaya-bangkok-7n8d-package",
    "destination": "Phuket, Pattaya, Bangkok",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 8,
    "durationNights": 7,
    "startingPrice": 29200,
    "discountPrice": 34999,
    "rating": 4.9,
    "reviewsCount": 410,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg",
      "/destinations/singapore.jpg"
    ],
    "highlights": [
      "Phuket Patong Beach & Island Sightseeing",
      "Coral Island Speedboat Tour with Indian Lunch in Pattaya",
      "Alcazar Cabaret Show Ticket",
      "Bangkok Temple Tour (Wat Traimit Golden Buddha & Wat Pho)",
      "Minimum 4 Pax Special Rate"
    ],
    "inclusions": [
      "3N Phuket + 2N Pattaya + 2N Bangkok in 3-Star Hotels",
      "Daily Breakfast at All Hotels",
      "Coral Island Tour by Speedboat with Lunch",
      "Bangkok Golden Buddha & Marble Temple Tour",
      "Inter-city Transfers and Airport Drop"
    ],
    "exclusions": [
      "International Airfare & Visa",
      "Personal Expenses",
      "Tips & Porterage"
    ],
    "theme": "Multi-City Highlights",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Phuket \u2013 Leisure & Nightlife",
        "description": "Arrive in Phuket, private transfer to hotel. Explore Bangla Road and Patong nightlife.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach"
        ],
        "hotel": "Phuket 3\u2605 Hotel",
        "transfers": "Private Airport Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phuket Island & Viewpoint Tour",
        "description": "Visit Big Buddha, Karon Viewpoint, and Wat Chalong Temple.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Sightseeing"
        ],
        "hotel": "Phuket 3\u2605 Hotel",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Phuket Free Day / Optional James Bond Island",
        "description": "Day at leisure for shopping or optional James Bond Island tour.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shopping"
        ],
        "hotel": "Phuket 3\u2605 Hotel",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Flight to Bangkok \u2013 Transfer to Pattaya",
        "description": "Fly to Bangkok and private drive to beach city Pattaya. Evening Alcazar Cabaret Show.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Alcazar Show"
        ],
        "hotel": "Pattaya 3\u2605 Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Coral Island Speedboat Tour with Lunch",
        "description": "Speedboat ride to Coral Island. Enjoy water sports, white sand beaches, and lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Coral Island",
          "Water Sports"
        ],
        "hotel": "Pattaya 3\u2605 Hotel",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Transfer to Bangkok \u2013 Temple & City Tour",
        "description": "Drive to Bangkok. Visit Wat Traimit (Golden Buddha) and Wat Benchamabophit.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "City Temple Tour"
        ],
        "hotel": "Bangkok 3\u2605 Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 7,
        "title": "Bangkok Shopping & Chao Phraya River Cruise",
        "description": "Explore MBK Center, Platinum Mall, and evening Chao Phraya Dinner Cruise.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shopping",
          "Dinner Cruise"
        ],
        "hotel": "Bangkok 3\u2605 Hotel",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 8,
        "title": "Bangkok Departure",
        "description": "Check out and transfer to Suvarnabhumi Airport for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket City Hotel 3\u2605",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Pattaya Beach Resort 3\u2605",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bangkok Center Hotel 3\u2605",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the package price for 7N/8D Thailand Trio?",
        "answer": "The price is \u20b929,200 per person (increased by \u20b95k from flyer rate \u20b924,200) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-thailand-phuket-krabi-bangkok-7n",
    "name": "Thailand Paradise: Phuket (3N), Krabi (2N) & Bangkok (2N)",
    "slug": "thailand-phuket-krabi-bangkok-7n8d-package",
    "destination": "Phuket, Krabi, Bangkok",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 8,
    "durationNights": 7,
    "startingPrice": 32000,
    "discountPrice": 38999,
    "rating": 4.9,
    "reviewsCount": 285,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg",
      "/destinations/bali.jpg"
    ],
    "highlights": [
      "Phi Phi Islands Speedboat Excursion with Lunch",
      "Krabi 4 Islands Scenic Boat Tour",
      "Bangkok Golden Buddha & Gems Gallery Tour",
      "Chao Phraya River Princess Dinner Cruise",
      "Minimum 4 Pax Special Rate"
    ],
    "inclusions": [
      "3N Phuket + 2N Krabi + 2N Bangkok 3-Star Hotels",
      "Daily Breakfast at All Accommodations",
      "Phi Phi Island & Krabi 4 Islands Sightseeing Tours",
      "Bangkok City & Temple Tour",
      "Private Airport & Inter-city Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "National Park Fees",
      "Personal Expenses"
    ],
    "theme": "Island & Culture",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Phuket \u2013 Hotel Check-in",
        "description": "Airport arrival and transfer to Phuket resort. Evening Patong beach leisure.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach"
        ],
        "hotel": "Phuket Resort 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phi Phi Islands Speedboat Tour",
        "description": "Full day speedboat tour to Maya Bay, Pileh Lagoon, and Viking Cave.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Island Tour",
          "Snorkeling"
        ],
        "hotel": "Phuket Resort 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Phuket Cultural Sightseeing",
        "description": "Visit Big Buddha, Wat Chalong, and Karon Viewpoint.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Temple Tour"
        ],
        "hotel": "Phuket Resort 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Scenic Drive Phuket to Krabi",
        "description": "Road transfer to Krabi. Relax at Ao Nang Beach.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Ao Nang Beach"
        ],
        "hotel": "Krabi Resort 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Krabi 4 Islands Boat Tour",
        "description": "Explore Phra Nang Cave, Tup Island, Chicken Island, and Poda Island.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "4 Islands Tour"
        ],
        "hotel": "Krabi Resort 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Flight Krabi to Bangkok \u2013 City Tour",
        "description": "Fly to Bangkok, half day Golden Buddha and Marble Temple tour.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Bangkok City Tour"
        ],
        "hotel": "Bangkok Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 7,
        "title": "Bangkok Shopping & Dinner Cruise",
        "description": "Free day for shopping at Siam Paragon. Evening Chao Phraya Dinner Cruise.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dinner Cruise"
        ],
        "hotel": "Bangkok Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 8,
        "title": "Bangkok Departure",
        "description": "Breakfast, checkout, and airport transfer for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket Resort 3\u2605",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Krabi Cliff Resort 3\u2605",
        "city": "Krabi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bangkok City Hotel 3\u2605",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b932,000 per person (increased by \u20b95k from flyer rate \u20b927,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-thailand-grand-4city-8n",
    "name": "Grand Thailand 4-City Odyssey: Phuket, Krabi, Pattaya & Bangkok (8N/9D)",
    "slug": "thailand-grand-4city-8n9d-tour-package",
    "destination": "Phuket, Krabi, Pattaya, Bangkok",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 9,
    "durationNights": 8,
    "startingPrice": 34500,
    "discountPrice": 42999,
    "rating": 4.95,
    "reviewsCount": 520,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg",
      "/destinations/singapore.jpg"
    ],
    "highlights": [
      "Ultimate 4-City Thailand Experience across Islands & Metropolises",
      "Phuket Phi Phi Island Tour & Krabi 4 Islands Excursion",
      "Pattaya Coral Island Speedboat Tour & Alcazar Show",
      "Bangkok Temples, Shopping & Dinner Cruise",
      "Minimum 4 Pax Special Rate"
    ],
    "inclusions": [
      "2N Phuket + 2N Krabi + 2N Pattaya + 2N Bangkok in 3-Star Hotels",
      "Daily Breakfast at All Hotels",
      "3 Island Boat Tours (Phi Phi, Krabi 4 Islands & Coral Island)",
      "City Tours of Phuket, Pattaya & Bangkok",
      "All Inter-city Transfers by AC Coach/Car"
    ],
    "exclusions": [
      "Airfare & Visa",
      "National Park Entrance Fees",
      "Personal Expenses"
    ],
    "theme": "Grand Expedition",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Phuket \u2013 Patong Beach",
        "description": "Arrival in Phuket, transfer to hotel. Relax at Patong Beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach"
        ],
        "hotel": "Phuket Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phi Phi Islands Speedboat Tour",
        "description": "Full day Phi Phi Island tour with lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Phi Phi Tour"
        ],
        "hotel": "Phuket Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Phuket to Krabi Transfer \u2013 Ao Nang Beach",
        "description": "Transfer to Krabi. Sunset walk at Ao Nang Beach.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Ao Nang Beach"
        ],
        "hotel": "Krabi Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Krabi 4 Islands Boat Tour",
        "description": "Excursion to Phra Nang, Tup, Chicken & Poda islands.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "4 Islands Boat Tour"
        ],
        "hotel": "Krabi Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Flight to Bangkok \u2013 Drive to Pattaya",
        "description": "Flight to Bangkok, drive to Pattaya. Evening Alcazar Show.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Alcazar Show"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Coral Island Speedboat Tour with Lunch",
        "description": "Coral Island speedboat tour and water sports.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Coral Island"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 7,
        "title": "Pattaya to Bangkok Transfer \u2013 City & Temple Tour",
        "description": "Transfer to Bangkok. Visit Golden Buddha and Marble Temple.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Bangkok City Tour"
        ],
        "hotel": "Bangkok Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 8,
        "title": "Bangkok Shopping & Chao Phraya Dinner Cruise",
        "description": "Shopping at MBK Center and evening Chao Phraya Dinner Cruise.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dinner Cruise"
        ],
        "hotel": "Bangkok Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 9,
        "title": "Bangkok Departure",
        "description": "Check out and transfer to airport for departure flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket Hotel 3\u2605",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Krabi Hotel 3\u2605",
        "city": "Krabi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Pattaya Hotel 3\u2605",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bangkok Hotel 3\u2605",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b934,500 per person (increased by \u20b95k from flyer rate \u20b929,500) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-almaty-3n4d",
    "name": "Private Almaty Adventure: Ski Resorts & Hot Springs (3N/4D)",
    "slug": "almaty-kazakhstan-3n4d-private-tour",
    "destination": "Almaty",
    "destinationSlug": "almaty",
    "country": "Kazakhstan",
    "region": "Central Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 34000,
    "discountPrice": 41999,
    "rating": 4.95,
    "reviewsCount": 190,
    "heroImage": "/destinations/azerbaijan.jpg",
    "gallery": [
      "/destinations/azerbaijan.jpg",
      "/destinations/switzerland.jpg"
    ],
    "highlights": [
      "FREE VISA ON ARRIVAL FOR INDIAN PASSPORT HOLDERS",
      "100% Private Tour with Dedicated English-Speaking Guide",
      "Shymbulak Ski Resort & Medeo High Altitude Ice Rink Cable Car",
      "Almarasan Gorge & Thermal Mineral Hot Springs Excursion",
      "Live Falconry Show & Zenkov Cathedral City Sightseeing",
      "Minimum 4 Pax Special Rate"
    ],
    "inclusions": [
      "3 Nights 4-Star Hotel Accommodation in Almaty",
      "Daily Buffet Breakfast at Hotel",
      "Private Airport Transfers (Arrival & Departure)",
      "Tours & Transfers in Comfortable AC Vehicle",
      "Cable Car Tickets to Shymbulak Ski Resort",
      "English Speaking Driver & Expert Local Guide"
    ],
    "exclusions": [
      "International Airfare",
      "Lunch & Dinner (unless mentioned)",
      "Personal Expenses & Tips"
    ],
    "theme": "Nature & Snow Adventure",
    "hotelCategory": "4 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Almaty \u2013 Hotel Transfer & Evening Leisure",
        "description": "Arrive at Almaty International Airport (ALA). Free Visa on Arrival processing for Indians. Meet private driver and transfer to hotel. Evening at leisure.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport Welcome",
          "Almaty Evening Stroll"
        ],
        "hotel": "Almaty Grand Hotel 4\u2605 / Similar",
        "transfers": "Private Airport Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Shymbulak Ski Resort & Medeo High Altitude Complex",
        "description": "Ride world-class cable cars to Shymbulak Ski Resort located at 2,260m altitude. Visit Medeo, the world\u2019s highest outdoor speed skating rink amidst snow-capped peaks.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shymbulak Cable Car",
          "Medeo Ice Rink Visit",
          "Alpine Photography"
        ],
        "hotel": "Almaty Grand Hotel 4\u2605 / Similar",
        "transfers": "Private Tour Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Almarasan Gorge, Hot Springs & Falcon Show",
        "description": "Drive into scenic Almarasan Gorge, famous for pine forests and crystal clear mountain streams. Relax at natural hot springs and attend a traditional Kazakh Falconry show.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Almarasan Gorge Trek",
          "Thermal Hot Springs",
          "Falcon Hunting Show"
        ],
        "hotel": "Almaty Grand Hotel 4\u2605 / Similar",
        "transfers": "Private Tour Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Almaty City Tour & Departure",
        "description": "Explore Zenkov Wooden Cathedral, Panfilov Park, and Green Bazaar for local souvenirs before private airport drop for departure flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Zenkov Cathedral",
          "Green Bazaar Shopping",
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private Airport Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Almaty Grand Hotel 4\u2605",
        "city": "Almaty",
        "rating": "4 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "Is visa required for Indians traveling to Almaty?",
        "answer": "Indians get 14-day Free Visa on Arrival in Kazakhstan."
      },
      {
        "question": "What is the package price?",
        "answer": "Price is \u20b934,000 per person (increased by \u20b95k from flyer rate \u20b929,000) for min 4 pax private tour."
      }
    ]
  },
  {
    "id": "pkg-almaty-4n5d",
    "name": "Almaty & Issyk Alpine Lake Expedition (4N/5D)",
    "slug": "almaty-issyk-lake-4n5d-private-tour",
    "destination": "Almaty",
    "destinationSlug": "almaty",
    "country": "Kazakhstan",
    "region": "Central Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 46000,
    "discountPrice": 54999,
    "rating": 4.95,
    "reviewsCount": 220,
    "heroImage": "/destinations/azerbaijan.jpg",
    "gallery": [
      "/destinations/azerbaijan.jpg",
      "/destinations/switzerland.jpg"
    ],
    "highlights": [
      "FREE VISA ON ARRIVAL FOR INDIANS",
      "Full Day Excursion to Emerald Green Issyk Alpine Lake",
      "Shymbulak Ski Resort High Cable Car Excursion",
      "Almaty City Tour & Green Bazaar Shopping",
      "100% Private Basis (Min 4 Pax)"
    ],
    "inclusions": [
      "4 Nights 4-Star Hotel Accommodation in Almaty",
      "Daily Breakfast at Hotel",
      "Private Transfers & Sightseeing in AC Vehicle",
      "Issyk Lake & Shymbulak Cable Car Tickets",
      "English Speaking Driver & Guide"
    ],
    "exclusions": [
      "Airfare",
      "Lunch & Dinner",
      "Personal Expenses"
    ],
    "theme": "Lakes & Alpine Adventure",
    "hotelCategory": "4 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Almaty \u2013 Hotel Transfer",
        "description": "Arrival in Almaty, airport greeting and hotel check-in.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "Almaty Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Shymbulak Ski Resort & Medeo Complex",
        "description": "Cable car rides to Shymbulak Ski Resort and Medeo.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shymbulak Cable Car"
        ],
        "hotel": "Almaty Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Almaty City Tour & Green Bazaar",
        "description": "Visit Panfilov Park, Zenkov Cathedral, Kok Tobe, and Green Bazaar.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "City Sightseeing"
        ],
        "hotel": "Almaty Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Full Day Issyk Lake Excursion",
        "description": "Day trip to breathtaking Issyk Alpine Lake situated at 1,760m surrounded by Tien Shan mountains.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Issyk Lake Tour"
        ],
        "hotel": "Almaty Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Almarasan Gorge & Departure",
        "description": "Morning visit to Almarasan Gorge, afternoon airport transfer.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Almaty Plaza Hotel 4\u2605",
        "city": "Almaty",
        "rating": "4 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b946,000 per person (increased by \u20b95k from flyer rate \u20b941,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-almaty-5n6d",
    "name": "Grand Kazakhstan: Almaty, Kolsay Lake & Charyn Canyon Wonders (5N/6D)",
    "slug": "almaty-kolsay-charyn-canyon-5n6d-tour",
    "destination": "Almaty",
    "destinationSlug": "almaty",
    "country": "Kazakhstan",
    "region": "Central Asia",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 56000,
    "discountPrice": 67999,
    "rating": 4.98,
    "reviewsCount": 310,
    "heroImage": "/destinations/azerbaijan.jpg",
    "gallery": [
      "/destinations/azerbaijan.jpg",
      "/destinations/switzerland.jpg"
    ],
    "highlights": [
      "FREE VISA ON ARRIVAL FOR INDIANS",
      "Full Day Charyn Canyon & Black Canyon Excursion",
      "Kolsay Alpine Lakes Nature Reserve Expedition",
      "Shymbulak Ski Resort & Kok Tobe Hilltop Panoramic View",
      "Almarasan & Ausay Mountain Gorges Exploration",
      "Private VIP Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "5 Nights 4-Star Hotel Accommodation in Almaty",
      "Daily Breakfast at Hotel",
      "Charyn Canyon & Kolsay Lakes Full Day Tours",
      "Shymbulak Cable Car & Kok Tobe Entry Tickets",
      "Private AC Vehicle with English Driver"
    ],
    "exclusions": [
      "International Flights",
      "Meals Not Mentioned",
      "Personal Expenses"
    ],
    "theme": "Canyons & Lakes Expedition",
    "hotelCategory": "4 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Almaty \u2013 Transfer to Hotel",
        "description": "Arrival in Almaty, private greeting and transfer to 4-star hotel.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "Almaty Luxury Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Shymbulak Ski Resort & Medeo Rink",
        "description": "Cable car ascent to Shymbulak Ski Resort.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Ski Resort Cable Car"
        ],
        "hotel": "Almaty Luxury Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Charyn Canyon & Kolsay Lakes Full Day Tour",
        "description": "Spectacular excursion to Charyn Canyon, Black Canyon, and crystal clear Kolsay Lake.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Charyn Canyon Trek",
          "Kolsay Lake"
        ],
        "hotel": "Almaty Luxury Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Almaty City Tour & Kok Tobe Cable Car",
        "description": "Visit Panfilov Park, Zenkov Cathedral, and ride Kok Tobe cable car for sunset views.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Kok Tobe Cable Car"
        ],
        "hotel": "Almaty Luxury Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Almarasan & Ausay Gorges Exploration",
        "description": "Visit Almarasan Gorge, hot springs, and Ausay Gorge stream valleys.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Gorge Nature Walk"
        ],
        "hotel": "Almaty Luxury Hotel 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Almaty Departure",
        "description": "Breakfast, checkout, and private airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Almaty Palace Hotel 4\u2605",
        "city": "Almaty",
        "rating": "4 Star",
        "nights": 5
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b956,000 per person (increased by \u20b95k from flyer rate \u20b951,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-vietnam-danang-hoian-4n5d",
    "name": "Vietnam Marvels: Da Nang, Ba Na Hills & Hoi An Ancient Town (4N/5D)",
    "slug": "vietnam-danang-hoian-bana-hills-4n5d-package",
    "destination": "Da Nang, Hoi An",
    "destinationSlug": "vietnam",
    "country": "Vietnam",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 27000,
    "discountPrice": 34999,
    "rating": 4.9,
    "reviewsCount": 380,
    "heroImage": "/destinations/vietnam.jpg",
    "gallery": [
      "/destinations/vietnam.jpg",
      "/destinations/japan.jpg"
    ],
    "highlights": [
      "Ba Na Hills World Record Cable Car & Golden Giant Hands Bridge",
      "Buffet Lunch Included at Ba Na Hills Resort",
      "Lantern-lit UNESCO Heritage Hoi An Ancient Town with Dinner",
      "Son Tra Peninsula & Marble Mountains Exploration",
      "Minimum 4 Pax Special Group Rate"
    ],
    "inclusions": [
      "4 Nights 3-Star Hotel Stay in Da Nang",
      "Daily Breakfast + 1 Buffet Lunch + 1 Dinner",
      "Ba Na Hills Cable Car & Golden Bridge Entrance Ticket",
      "Sightseeing Tours & Transfers on SIC Basis",
      "English Speaking Local Tour Guide"
    ],
    "exclusions": [
      "International Flights & Visa Fees",
      "Personal Expenses",
      "Tips"
    ],
    "theme": "Heritage & Cable Car",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Selected Meals)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Da Nang Arrival \u2013 Free Leisure",
        "description": "Arrive at Da Nang International Airport, transfer to hotel. Free leisure evening at My Khe Beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "My Khe Beach"
        ],
        "hotel": "Da Nang Beach Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Ba Na Hills & Golden Bridge Cable Car (Buffet Lunch)",
        "description": "Full day tour to Ba Na Hills. Ride cable car, walk across Golden Bridge held by giant hands, visit French Village. Enjoy international buffet lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Golden Bridge",
          "Ba Na Hills Cable Car",
          "French Village"
        ],
        "hotel": "Da Nang Beach Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Son Tra Peninsula, Marble Mountain & Hoi An Ancient Town",
        "description": "Visit Linh Ung Pagoda on Son Tra Peninsula, explore Marble Mountain caves. Evening tour to magical Hoi An Ancient Town with Japanese Bridge and lantern night market. Dinner included.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Marble Mountain",
          "Hoi An Lantern Town"
        ],
        "hotel": "Da Nang Beach Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 4,
        "title": "Da Nang Free Leisure Day",
        "description": "Free day for shopping, beach relaxation, or optional Han River cruise.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Beach Leisure",
          "Shopping"
        ],
        "hotel": "Da Nang Beach Hotel 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 5,
        "title": "Da Nang Departure",
        "description": "Breakfast, hotel checkout, and transfer to airport for departure flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Da Nang Central Hotel 3\u2605",
        "city": "Da Nang",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b927,000 per person (increased by \u20b95k from flyer rate \u20b922,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-vietnam-saigon-mekong-4n5d",
    "name": "Vietnam Southern Highlights: Ho Chi Minh City, Cu Chi Tunnels & Mekong Delta (4N/5D)",
    "slug": "vietnam-ho-chi-minh-mekong-cuchi-4n5d-package",
    "destination": "Ho Chi Minh City, Mekong Delta",
    "destinationSlug": "vietnam",
    "country": "Vietnam",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 34000,
    "discountPrice": 42999,
    "rating": 4.9,
    "reviewsCount": 290,
    "heroImage": "/destinations/vietnam.jpg",
    "gallery": [
      "/destinations/vietnam.jpg",
      "/destinations/japan.jpg"
    ],
    "highlights": [
      "Full Day Mekong Delta River Cruise with Local Vietnamese Lunch",
      "Historic Cu Chi Underground Tunnels Excursion",
      "Ho Chi Minh City Tour (Notre Dame Cathedral & War Remnants Museum)",
      "Ben Thanh Market Shopping Experience",
      "Minimum 4 Pax Special Rate"
    ],
    "inclusions": [
      "4 Nights Accommodation in Ho Chi Minh City (3-Star Hotel)",
      "Daily Breakfast + 2 Local Lunches",
      "Cu Chi Tunnels Entry & Mekong Delta Sampan Boat Cruise",
      "Tours & Transfers on Join Group SIC Basis",
      "English Speaking Local Guide"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses",
      "Tips"
    ],
    "theme": "History & River Cruise",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Selected Lunches)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Ho Chi Minh City \u2013 Free Evening",
        "description": "Arrive Tan Son Nhat Airport, transfer to hotel. Free evening to explore Saigon night market.",
        "meals": [
          "None"
        ],
        "activities": [
          "Saigon Night Market"
        ],
        "hotel": "Ho Chi Minh Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Ho Chi Minh City Sightseeing Tour",
        "description": "Visit War Remnants Museum, Reunification Palace, Notre Dame Cathedral, and Central Post Office.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Saigon City Tour"
        ],
        "hotel": "Ho Chi Minh Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Cu Chi Underground Tunnels Tour",
        "description": "Excursion to legendary Cu Chi Tunnels. Walk through underground guerrilla network and see trapdoors.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Cu Chi Tunnels"
        ],
        "hotel": "Ho Chi Minh Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 4,
        "title": "Mekong Delta Full Day River Cruise",
        "description": "Boat trip down Mekong River to My Tho. Visit coconut candy workshop, ride sampan through canal, enjoy fresh fruits and local lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Mekong Boat Cruise",
          "Coconut Candy Workshop"
        ],
        "hotel": "Ho Chi Minh Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 5,
        "title": "Ho Chi Minh Departure",
        "description": "Breakfast, checkout, and airport transfer for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Saigon Boutique Hotel 3\u2605",
        "city": "Ho Chi Minh",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b934,000 per person (increased by \u20b95k from flyer rate \u20b929,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-vietnam-hanoi-sapa-halong-4n5d",
    "name": "Vietnam Wonders: Hanoi (2N), Sapa Mountain (1N) & Ha Long Bay Cruise (4N/5D)",
    "slug": "vietnam-hanoi-sapa-halong-bay-4n5d-package",
    "destination": "Hanoi, Sapa, Ha Long Bay",
    "destinationSlug": "vietnam",
    "country": "Vietnam",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 38000,
    "discountPrice": 46999,
    "rating": 4.95,
    "reviewsCount": 450,
    "heroImage": "/destinations/vietnam.jpg",
    "gallery": [
      "/destinations/vietnam.jpg",
      "/destinations/japan.jpg"
    ],
    "highlights": [
      "Overnight Mountain Homestay / Hotel Stay in Sapa",
      "Fansipan Peak Cable Car Ride (\"Roof of Indochina\" 3,143m)",
      "Cat Cat Ethnic Village Trekking & Cultural Show",
      "Ha Long Bay UNESCO World Heritage Day Cruise with Seafood Lunch",
      "Hanoi Old Quarter Street Food & Lake Walk",
      "Minimum 4 Pax Special Rate"
    ],
    "inclusions": [
      "3 Nights Hanoi (3\u2605) + 1 Night Sapa (3\u2605)",
      "Daily Breakfast + 3 Lunches + 1 Dinner",
      "Ha Long Bay Cruise Ticket & Kayaking",
      "Fansipan Cable Car Ticket",
      "Tours & Transfers on Join Group Basis"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses",
      "Tips"
    ],
    "theme": "Mountains & Cruise",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Selected Meals)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Hanoi Arrival \u2013 Free Leisure",
        "description": "Arrive in Hanoi, check in hotel. Walk around Hoan Kiem Lake and Old Quarter.",
        "meals": [
          "None"
        ],
        "activities": [
          "Hoan Kiem Lake Walk"
        ],
        "hotel": "Hanoi Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Hanoi to Sapa \u2013 Cat Cat Village Trekking",
        "description": "Scenic bus drive to Sapa. Trek through Cat Cat Village, learn Black Hmong culture. Overnight in Sapa. Dinner included.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Cat Cat Village Trek"
        ],
        "hotel": "Sapa Mountain Hotel 3\u2605",
        "transfers": "SIC Coach"
      },
      {
        "dayNumber": 3,
        "title": "Fansipan Peak Cable Car \u2013 Return to Hanoi",
        "description": "Ride cable car to Fansipan Peak summit. Return to Hanoi in the evening.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Fansipan Cable Car"
        ],
        "hotel": "Hanoi Hotel 3\u2605",
        "transfers": "SIC Coach"
      },
      {
        "dayNumber": 4,
        "title": "Ha Long Bay UNESCO World Heritage Day Cruise",
        "description": "Drive to Ha Long Bay. Board day cruise ship, sail past limestone karsts, visit Sung Sot Cave, kayaking, and seafood lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Ha Long Cruise",
          "Sung Sot Cave",
          "Kayaking"
        ],
        "hotel": "Hanoi Hotel 3\u2605",
        "transfers": "SIC Cruise Tour"
      },
      {
        "dayNumber": 5,
        "title": "Hanoi Departure",
        "description": "Breakfast, checkout, and airport transfer for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Hanoi Old Quarter Hotel 3\u2605",
        "city": "Hanoi",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Sapa Valley Hotel 3\u2605",
        "city": "Sapa",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b938,000 per person (increased by \u20b95k from flyer rate \u20b933,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-dubai-4n5d-winter",
    "name": "Dubai Winter Sale Special: City, Burj Khalifa & Desert Safari (4N/5D)",
    "slug": "dubai-winter-sale-4n5d-package",
    "destination": "Dubai",
    "destinationSlug": "dubai",
    "country": "United Arab Emirates",
    "region": "Middle East",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 54000,
    "discountPrice": 68999,
    "rating": 4.95,
    "reviewsCount": 620,
    "heroImage": "/destinations/dubai.jpg",
    "gallery": [
      "/destinations/dubai.jpg",
      "/destinations/switzerland.jpg"
    ],
    "highlights": [
      "DUBAI TOURIST VISA INCLUDED",
      "Private Airport Transfers (Arrival & Departure)",
      "Burj Khalifa 124-125 Floor Observation Deck Ticket (Non-Prime)",
      "Dubai Marina Luxury Dhow Dinner Cruise (SIC)",
      "4x4 Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
      "Miracle Garden & Global Village (Private Transfers)",
      "Rates Valid 1st Oct to 23rd Dec 2026 (Min 2 Pax)"
    ],
    "inclusions": [
      "4 Nights Hotel Stay (3-Star \u20b954,000 / 4-Star \u20b960,000)",
      "Daily Breakfast at Hotel",
      "Dubai Tourist Visa with Insurance",
      "Private Airport Transfers",
      "All Mentioned Sightseeing & Entrance Tickets"
    ],
    "exclusions": [
      "Airfare",
      "Tourism Dirham Fee",
      "Personal Expenses"
    ],
    "theme": "Winter Special",
    "hotelCategory": "3 Star / 4 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Dubai \u2013 Private Transfer & Dhow Cruise",
        "description": "Arrival in Dubai, private transfer to hotel. Evening Marina Dhow Dinner Cruise with live Tanoura dance show.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Marina Dhow Cruise",
          "Tanoura Dance"
        ],
        "hotel": "Dubai Hotel 3\u2605 / 4\u2605",
        "transfers": "Private Airport Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Half Day Dubai City Tour & Burj Khalifa 124th Floor",
        "description": "Half day city tour visiting Dubai Frame, Zabeel Palace, and Jumeirah Mosque. Afternoon visit to Dubai Mall and Burj Khalifa 124-125th floor observation deck.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Burj Khalifa 124th Floor",
          "Dubai Mall Fountain Show"
        ],
        "hotel": "Dubai Hotel 3\u2605 / 4\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Miracle Garden, Global Village & 4x4 Desert Safari",
        "description": "Morning visit to Miracle Garden and Global Village. Afternoon 4x4 Desert Safari with dune bashing, camel rides, belly dance, and BBQ buffet dinner.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Desert Safari",
          "Dune Bashing",
          "Miracle Garden",
          "Global Village"
        ],
        "hotel": "Dubai Hotel 3\u2605 / 4\u2605",
        "transfers": "Private & 4x4 Shared"
      },
      {
        "dayNumber": 4,
        "title": "Dubai Shopping & Leisure Day",
        "description": "Free day for shopping at Gold Souk, Mall of the Emirates, or optional Museum of the Future visit.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Gold Souk Shopping"
        ],
        "hotel": "Dubai Hotel 3\u2605 / 4\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 5,
        "title": "Dubai Departure",
        "description": "Breakfast, checkout, and private transfer to Dubai International Airport (DXB).",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Airport Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Citymax Hotel Bur Dubai 3\u2605 / Aloft Meaisam 4\u2605",
        "city": "Dubai",
        "rating": "3 Star / 4 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "3-Star Hotel option is \u20b954,000 per person and 4-Star Hotel option is \u20b960,000 per person (increased by \u20b95k from flyer rates \u20b949k/\u20b955k) for min 2 pax."
      }
    ]
  },
  {
    "id": "pkg-dubai-5n6d-winter",
    "name": "Dubai & Abu Dhabi Winter Deluxe Escape (5N/6D)",
    "slug": "dubai-abu-dhabi-winter-deluxe-5n6d-package",
    "destination": "Dubai, Abu Dhabi",
    "destinationSlug": "dubai",
    "country": "United Arab Emirates",
    "region": "Middle East",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 64000,
    "discountPrice": 79999,
    "rating": 4.96,
    "reviewsCount": 540,
    "heroImage": "/destinations/dubai.jpg",
    "gallery": [
      "/destinations/dubai.jpg",
      "/destinations/switzerland.jpg"
    ],
    "highlights": [
      "DUBAI VISA INCLUDED",
      "Full Day Abu Dhabi Tour with Sheikh Zayed Grand Mosque",
      "Burj Khalifa 124-125 Floor Observation Deck Entry",
      "Marina Dhow Dinner Cruise & 4x4 Desert Safari BBQ",
      "Miracle Garden & Global Village Private Tour",
      "Rates Valid 1st Oct to 23rd Dec 2026 (Min 2 Pax)"
    ],
    "inclusions": [
      "5 Nights Hotel Stay (3-Star \u20b964,000 / 4-Star \u20b970,000)",
      "Daily Breakfast",
      "Dubai Tourist Visa",
      "Private Airport Transfers",
      "Abu Dhabi & Dubai City Tours"
    ],
    "exclusions": [
      "Airfare",
      "Tourism Dirham Fee",
      "Personal Expenses"
    ],
    "theme": "Winter Special",
    "hotelCategory": "3 Star / 4 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Dubai \u2013 Dhow Dinner Cruise",
        "description": "Private airport transfer to hotel. Evening Marina Dhow Dinner Cruise.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dhow Cruise"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Dubai City Tour & Burj Khalifa 124th Floor",
        "description": "Half day Dubai city tour and Burj Khalifa 124-125 floor entry.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Burj Khalifa"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "4x4 Desert Safari with BBQ Dinner",
        "description": "Afternoon 4x4 dune bashing, camel ride, belly dance, and BBQ dinner.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Desert Safari"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "4x4 Shared"
      },
      {
        "dayNumber": 4,
        "title": "Full Day Abu Dhabi City Tour",
        "description": "Visit majestic Sheikh Zayed Grand Mosque, Corniche, and Heritage Village in Abu Dhabi.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Sheikh Zayed Mosque",
          "Abu Dhabi Tour"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Miracle Garden & Global Village Private Tour",
        "description": "Visit Miracle Garden and Global Village multicultural pavilions.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Miracle Garden",
          "Global Village"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Dubai Departure",
        "description": "Breakfast, checkout, and private airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Ibis Styles Bur Dubai 3\u2605 / Grand Excelsior 4\u2605",
        "city": "Dubai",
        "rating": "3 Star / 4 Star",
        "nights": 5
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "3-Star option is \u20b964,000 per person and 4-Star option is \u20b970,000 per person (increased by \u20b95k from flyer rates \u20b959k/\u20b965k) for min 2 pax."
      }
    ]
  },
  {
    "id": "pkg-dubai-6n7d-winter",
    "name": "Dubai & Abu Dhabi Grand Winter Celebration (6N/7D)",
    "slug": "dubai-abu-dhabi-grand-winter-6n7d-package",
    "destination": "Dubai, Abu Dhabi",
    "destinationSlug": "dubai",
    "country": "United Arab Emirates",
    "region": "Middle East",
    "isInternational": true,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 69000,
    "discountPrice": 86999,
    "rating": 4.98,
    "reviewsCount": 480,
    "heroImage": "/destinations/dubai.jpg",
    "gallery": [
      "/destinations/dubai.jpg",
      "/destinations/switzerland.jpg"
    ],
    "highlights": [
      "DUBAI VISA INCLUDED",
      "Full Day Abu Dhabi Tour & Sheikh Zayed Mosque",
      "Burj Khalifa 124-125 Floor Entry Ticket",
      "Marina Dhow Dinner Cruise & 4x4 Desert Safari",
      "Miracle Garden & Global Village Private Transfers",
      "Dedicated Full Day Leisure for Shopping & Atlantis Aquaventure",
      "Rates Valid 1st Oct to 23rd Dec 2026 (Min 2 Pax)"
    ],
    "inclusions": [
      "6 Nights Hotel Stay (3-Star \u20b969,000 / 4-Star \u20b975,000)",
      "Daily Breakfast",
      "Dubai Tourist Visa",
      "Private Airport Transfers",
      "All Sightseeing & Entry Tickets"
    ],
    "exclusions": [
      "Airfare",
      "Tourism Dirham Fee",
      "Personal Expenses"
    ],
    "theme": "Winter Special",
    "hotelCategory": "3 Star / 4 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Dubai \u2013 Marina Dhow Cruise",
        "description": "Arrival in Dubai, private transfer to hotel. Evening Marina Dhow Cruise.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dhow Cruise"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Dubai City Tour & Burj Khalifa 124th Floor",
        "description": "City tour and visit to Burj Khalifa 124-125th floor.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Burj Khalifa"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Miracle Garden & Global Village Private Tour",
        "description": "Private visit to Miracle Garden and Global Village.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Miracle Garden"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "4x4 Desert Safari with BBQ Dinner",
        "description": "Dune bashing, camel ride, live shows, and BBQ dinner in desert camp.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Desert Safari"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "4x4 Shared"
      },
      {
        "dayNumber": 5,
        "title": "Full Day Abu Dhabi City Tour",
        "description": "Tour of Abu Dhabi city and Sheikh Zayed Mosque.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Abu Dhabi Tour"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Full Leisure & Shopping Day",
        "description": "Free day for shopping at Dubai Mall, Gold Souk, or visiting Atlantis Aquaventure Waterpark.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shopping"
        ],
        "hotel": "Dubai Hotel 3\u2605/4\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 7,
        "title": "Dubai Departure",
        "description": "Breakfast, checkout, and private airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Howard Johnson Bur Dubai 3\u2605 / Millenium Place 4\u2605",
        "city": "Dubai",
        "rating": "3 Star / 4 Star",
        "nights": 6
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "3-Star option is \u20b969,000 per person and 4-Star option is \u20b975,000 per person (increased by \u20b95k from flyer rates \u20b964k/\u20b970k) for min 2 pax."
      }
    ]
  },
  {
    "id": "pkg-vietnam-phuquoc-paradise-4n5d",
    "name": "Vietnam Tropical Escape: Phu Quoc Island Paradise (4N/5D)",
    "slug": "vietnam-phu-quoc-island-paradise-4n5d-package",
    "destination": "Phu Quoc",
    "destinationSlug": "vietnam",
    "country": "Vietnam",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 35500,
    "discountPrice": 43999,
    "rating": 4.95,
    "reviewsCount": 260,
    "heroImage": "/destinations/vietnam.jpg",
    "gallery": [
      "/destinations/vietnam.jpg",
      "/destinations/bali.jpg"
    ],
    "highlights": [
      "2 Islands Boat Tour with Snorkeling & Seafood Lunch",
      "Hon Thom World Record Sea Cable Car Experience",
      "VinWonders Theme Park & Grand World Free Entrance",
      "Pristine Beach Resort Stay (Min 4 Pax)",
      "Best Time to Visit: October to April"
    ],
    "inclusions": [
      "4 Nights Beach Resort Stay in Phu Quoc (4\u2605)",
      "Daily Breakfast + 1 Seafood Lunch",
      "Hon Thom Cable Car & Island Boat Tickets",
      "Airport Transfers & Island Tours",
      "English Speaking Guide"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses",
      "Tips"
    ],
    "theme": "Island & Beach",
    "hotelCategory": "4 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Phu Quoc Arrival \u2013 Beach Relaxation",
        "description": "Arrive at Phu Quoc International Airport, transfer to resort. Free time on Sunset Sanato beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "Beach Relaxation"
        ],
        "hotel": "Phu Quoc Beach Resort 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "2 Islands Boat Tour & Hon Thom Cable Car",
        "description": "Board boat to explore 2 tropical islands. Ride Hon Thom Cable Car across the ocean, lunch included.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Hon Thom Cable Car",
          "Island Boat Tour"
        ],
        "hotel": "Phu Quoc Beach Resort 4\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Phu Quoc Free Day for Water Sports",
        "description": "Day at leisure to enjoy resort amenities, beach lounge, or optional scuba diving.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Water Sports"
        ],
        "hotel": "Phu Quoc Beach Resort 4\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "VinWonders & Grand World Phu Quoc",
        "description": "Visit VinWonders theme park, Venice Canal at Grand World, and evening water fountain show.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "VinWonders",
          "Grand World Venice Show"
        ],
        "hotel": "Phu Quoc Beach Resort 4\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 5,
        "title": "Phu Quoc Departure",
        "description": "Breakfast, checkout, and airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phu Quoc Ocean Resort 4\u2605",
        "city": "Phu Quoc",
        "rating": "4 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is \u20b935,500 per person (increased by \u20b95k from flyer rate \u20b930,500) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-vietnam-discovery-multicity-5n6d",
    "name": "Vietnam Discovery: Da Nang, Ba Na Hills, Hoi An, Hanoi & Ha Long Bay (5N/6D)",
    "slug": "vietnam-discovery-multicity-5n6d-package",
    "destination": "Da Nang, Hanoi, Ha Long Bay",
    "destinationSlug": "vietnam",
    "country": "Vietnam",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 39000,
    "discountPrice": 48999,
    "rating": 4.96,
    "reviewsCount": 390,
    "heroImage": "/destinations/vietnam.jpg",
    "gallery": [
      "/destinations/vietnam.jpg",
      "/destinations/japan.jpg"
    ],
    "highlights": [
      "Golden Bridge Ba Na Hills Cable Car with Lunch",
      "Hoi An Ancient Town Lantern Evening & Dinner",
      "Ha Long Bay UNESCO World Heritage Day Cruise",
      "Hanoi City Tour & Temple of Literature",
      "Airport Transfers Included (Min 4 Pax)"
    ],
    "inclusions": [
      "2N Da Nang (3\u2605) + 3N Hanoi (3\u2605)",
      "Daily Breakfast + 2 Lunches + 1 Dinner",
      "Ba Na Hills Cable Car & Ha Long Cruise Tickets",
      "All Transfers & Tours on Join Group Basis"
    ],
    "exclusions": [
      "Domestic/International Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Multi-City Highlights",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Selected Meals)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Da Nang Arrival \u2013 Hotel Transfer",
        "description": "Arrive in Da Nang, hotel transfer. Evening free leisure.",
        "meals": [
          "None"
        ],
        "activities": [
          "Beach Walk"
        ],
        "hotel": "Da Nang Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Ba Na Hills & Golden Bridge Tour",
        "description": "Full day Ba Na Hills tour, Golden Bridge cable car, and lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Golden Bridge"
        ],
        "hotel": "Da Nang Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Hoi An Tour \u2013 Flight to Hanoi",
        "description": "Morning Hoi An Ancient town tour, afternoon flight to Hanoi. Hotel check-in.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Hoi An Tour"
        ],
        "hotel": "Hanoi Hotel 3\u2605",
        "transfers": "SIC & Flight Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Ha Long Bay UNESCO Cruise",
        "description": "Day trip to Ha Long Bay, boat cruise, caves, and seafood lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Ha Long Bay Cruise"
        ],
        "hotel": "Hanoi Hotel 3\u2605",
        "transfers": "SIC Cruise Tour"
      },
      {
        "dayNumber": 5,
        "title": "Hanoi City Tour",
        "description": "Visit Ho Chi Minh Mausoleum, Tran Quoc Pagoda, and Temple of Literature.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Hanoi City Tour"
        ],
        "hotel": "Hanoi Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 6,
        "title": "Hanoi Departure",
        "description": "Breakfast, checkout, and airport transfer.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Da Nang Central 3\u2605",
        "city": "Da Nang",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hanoi Old Quarter 3\u2605",
        "city": "Hanoi",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is \u20b939,000 per person (increased by \u20b95k from flyer rate \u20b934,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-vietnam-essentials-saigon-vungtau-6n7d",
    "name": "Vietnam Essentials: Phu Quoc Island, Saigon & Vung Tau Beach Resort (6N/7D)",
    "slug": "vietnam-essentials-phuquoc-saigon-vungtau-6n7d-package",
    "destination": "Phu Quoc, Ho Chi Minh City, Vung Tau",
    "destinationSlug": "vietnam",
    "country": "Vietnam",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 51000,
    "discountPrice": 62999,
    "rating": 4.98,
    "reviewsCount": 310,
    "heroImage": "/destinations/vietnam.jpg",
    "gallery": [
      "/destinations/vietnam.jpg",
      "/destinations/bali.jpg"
    ],
    "highlights": [
      "Phu Quoc 2 Islands Boat & Hon Thom Cable Car Tour",
      "Flight to Ho Chi Minh City Included Transfers",
      "Mekong Delta River Cruise with Local Lunch",
      "Full Day Vung Tau Coastal Beach Tour with Lunch",
      "Best Season: October to April (Min 4 Pax)"
    ],
    "inclusions": [
      "3N Phu Quoc (4\u2605) + 3N Ho Chi Minh City (3\u2605)",
      "Daily Breakfast + 3 Lunches",
      "Hon Thom Cable Car & Mekong Delta Boat Tickets",
      "All Sightseeing Tours & Inter-city Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses",
      "Tips"
    ],
    "theme": "Island & City Panorama",
    "hotelCategory": "3 Star / 4 Star",
    "mealPlan": "MAP (Breakfast + Selected Lunches)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Phu Quoc Arrival \u2013 Resort Check-in",
        "description": "Arrive in Phu Quoc, resort check in. Evening beach walk.",
        "meals": [
          "None"
        ],
        "activities": [
          "Beach Walk"
        ],
        "hotel": "Phu Quoc Resort 4\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phu Quoc 2 Islands Boat & Cable Car Tour",
        "description": "Join group boat trip to 2 islands, Hon Thom cable car ride, lunch included.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Cable Car",
          "Island Boat"
        ],
        "hotel": "Phu Quoc Resort 4\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Phu Quoc Beach Free Leisure",
        "description": "Free day to relax at beach or optional VinWonders theme park.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Beach Leisure"
        ],
        "hotel": "Phu Quoc Resort 4\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Flight to Ho Chi Minh City \u2013 Saigon Free Evening",
        "description": "Flight to Ho Chi Minh City. Transfer to hotel, evening Saigon night market walk.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Saigon Night Market"
        ],
        "hotel": "Ho Chi Minh Hotel 3\u2605",
        "transfers": "Private & Flight Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Mekong Delta River Cruise Day Tour",
        "description": "Full day Mekong Delta boat trip, coconut sweets factory, and lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Mekong Delta Tour"
        ],
        "hotel": "Ho Chi Minh Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 6,
        "title": "Vung Tau Beach Coastal Day Tour",
        "description": "Full day tour to coastal Vung Tau beach resort city, Christ Statue, and seafood lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Vung Tau Beach Tour"
        ],
        "hotel": "Ho Chi Minh Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 7,
        "title": "Ho Chi Minh Departure",
        "description": "Breakfast, checkout, and airport transfer.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phu Quoc Resort 4\u2605",
        "city": "Phu Quoc",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "Saigon Hotel 3\u2605",
        "city": "Ho Chi Minh",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is \u20b951,000 per person (increased by \u20b95k from flyer rate \u20b946,000) for min 4 pax."
      }
    ]
  },

  {
    "id": "pkg-srilanka-4n5d-classic",
    "name": "Magic of Sri Lanka: Sigiriya, Kandy, Nuwara Eliya & Bentota (4N/5D)",
    "slug": "srilanka-magic-classic-4n5d-tour-package",
    "destination": "Sigiriya, Kandy, Nuwara Eliya, Bentota",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 38500,
    "discountPrice": 46999,
    "rating": 4.92,
    "reviewsCount": 240,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg",
      "/destinations/kerala.jpg"
    ],
    "highlights": [
      "Ancient Sigiriya Rock Fortress & Heritage Exploration",
      "Sacred Temple of the Tooth Relic in Kandy",
      "Nuwara Eliya Cool Hill Country & Tea Plantations",
      "Bentota Golden Beaches & Water Sports",
      "MAP Plan: Daily Breakfast & Dinner Included",
      "Private Tour with Expert Guide Support (Min 4 Pax)"
    ],
    "inclusions": [
      "4 Nights Accommodation in Comfortable 3\u2605/4\u2605 Hotels",
      "Daily Breakfast & Dinner (MAP Plan)",
      "Private Transfers in AC Vehicle for Whole Tour",
      "Sightseeing as per Itinerary with Expert Guide",
      "All Driver Allowances, Tolls & Parking Charges"
    ],
    "exclusions": [
      "International Flights & Sri Lanka ETA Visa Fees",
      "Entrance Fees to Monuments",
      "Personal Expenses"
    ],
    "theme": "Heritage & Hill Country",
    "hotelCategory": "3 Star / 4 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Sigiriya (150 Kms / 4 Hrs+)",
        "description": "Arrive at Bandaranaike International Airport (CMB), meet private guide and drive to Sigiriya. Check in hotel and relax.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport Welcome",
          "Scenic Countryside Drive"
        ],
        "hotel": "Sigiriya Hotel 3\u2605/4\u2605",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Sigiriya Rock Fortress to Kandy (100 Kms / 3 Hrs+)",
        "description": "Climb 5th-century Sigiriya Rock Fortress. Drive to Kandy visiting Spice Garden enroute. Visit Temple of the Sacred Tooth Relic.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sigiriya Fortress Climb",
          "Tooth Relic Temple"
        ],
        "hotel": "Kandy Hotel 3\u2605/4\u2605",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Kandy to Nuwara Eliya (85 Kms / 3 Hrs+)",
        "description": "Drive through tea plantations and waterfalls to Nuwara Eliya ('Little England'). Visit Ceylon Tea Factory and Gregory Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tea Plantation Visit",
          "Gregory Lake Walk"
        ],
        "hotel": "Nuwara Eliya Hotel 3\u2605/4\u2605",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Nuwara Eliya to Bentota Beach (240 Kms / 7 Hrs+)",
        "description": "Descend hill country towards Bentota golden beaches. Evening leisure at beach resort.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Beach Relaxation"
        ],
        "hotel": "Bentota Beach Resort 3\u2605/4\u2605",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 5,
        "title": "Bentota to Colombo City Tour & Airport (60 Kms / 2 Hrs+)",
        "description": "Morning Madu River boat safari or water sports. Short Colombo city tour and transfer to airport for departure flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Colombo City Tour",
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private AC Vehicle"
      }
    ],
    "hotels": [
      {
        "name": "Sigiriya Village Resort 3\u2605",
        "city": "Sigiriya",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Kandy Citadel 3\u2605",
        "city": "Kandy",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Nuwara Eliya Heritage 3\u2605",
        "city": "Nuwara Eliya",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Bentota Beach Resort 3\u2605",
        "city": "Bentota",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is \u20b938,500 per person MAP Plan (increased by \u20b95k from flyer rate \u20b933,500) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-5n6d-wildlife",
    "name": "Sri Lanka Grand Explorer: Sigiriya, Kandy, Nuwara Eliya, Yala & Bentota (5N/6D)",
    "slug": "srilanka-grand-wildlife-5n6d-tour-package",
    "destination": "Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 44000,
    "discountPrice": 53999,
    "rating": 4.95,
    "reviewsCount": 290,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg",
      "/destinations/kerala.jpg"
    ],
    "highlights": [
      "Sigiriya Lion Rock & Sacred Kandy Temple",
      "Nuwara Eliya Tea Gardens & Waterfalls",
      "Yala National Park Wildlife Jeep Safari (Leopards & Elephants)",
      "Bentota Beach Resort Stay & Water Sports",
      "MAP Plan: Daily Breakfast & Dinner Included (Min 4 Pax)"
    ],
    "inclusions": [
      "5 Nights Hotel Stay (MAP Plan Breakfast + Dinner)",
      "Private Transfers in Dedicated AC Vehicle",
      "Full Sightseeing as per Itinerary with Expert Guide",
      "All Taxes, Tolls & Parking Charges"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Yala Safari Jeep Ticket",
      "Personal Expenses"
    ],
    "theme": "Wildlife & Nature",
    "hotelCategory": "3 Star / 4 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Sigiriya",
        "description": "Arrival, private transfer to Sigiriya.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Scenic Drive"
        ],
        "hotel": "Sigiriya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Sigiriya Rock to Kandy",
        "description": "Visit Sigiriya Rock and Temple of the Tooth in Kandy.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sigiriya Fortress",
          "Tooth Temple"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Kandy to Nuwara Eliya",
        "description": "Drive through tea estates and Ramboda Waterfalls to Nuwara Eliya.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tea Factory Tour"
        ],
        "hotel": "Nuwara Eliya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Nuwara Eliya to Yala National Park",
        "description": "Drive to Yala. Afternoon 4x4 Jeep Safari to spot leopards and wild elephants.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Yala Safari"
        ],
        "hotel": "Yala Safari Resort 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Yala to Bentota Beach",
        "description": "Drive to Bentota. Enjoy beach sunset and water sports.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bentota Beach"
        ],
        "hotel": "Bentota Beach Resort 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Bentota to Colombo & Airport Departure",
        "description": "Short Colombo city shopping walk and transfer to airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Heritage Resorts 3\u2605",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 5
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b944,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b939,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-6n7d-panorama",
    "name": "Ultimate Sri Lanka Panorama: Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota & Colombo (6N/7D)",
    "slug": "srilanka-ultimate-panorama-6n7d-package",
    "destination": "Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota, Colombo",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 7,
    "durationNights": 6,
    "startingPrice": 51000,
    "discountPrice": 62999,
    "rating": 4.98,
    "reviewsCount": 380,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg",
      "/destinations/kerala.jpg"
    ],
    "highlights": [
      "Complete Sri Lanka Island Circuit covering All Top 6 Destinations",
      "Ancient Sigiriya Fortress, Kandy Temple & Nuwara Eliya Tea Country",
      "Yala Wildlife Safari & Bentota Beach Resort",
      "Overnight Stay & Shopping in Capital City Colombo",
      "MAP Plan: Daily Breakfast & Dinner Included (Min 4 Pax)"
    ],
    "inclusions": [
      "6 Nights Hotel Accommodations (MAP Plan Breakfast + Dinner)",
      "Private Dedicated AC Vehicle with Driver-Guide",
      "Complete Sightseeing & Inter-city Transfers",
      "All Local Taxes & Tolls"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Monument Entry Tickets",
      "Personal Expenses"
    ],
    "theme": "Grand Panorama",
    "hotelCategory": "3 Star / 4 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Sigiriya",
        "description": "Arrival and drive to Sigiriya.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Sigiriya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Sigiriya Rock Climb & Drive to Kandy",
        "description": "Explore Sigiriya Fortress, drive to Kandy, visit Tooth Relic Temple.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sigiriya & Tooth Temple"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Kandy to Nuwara Eliya Tea Country",
        "description": "Drive through tea gardens and waterfalls to Nuwara Eliya.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tea Country Tour"
        ],
        "hotel": "Nuwara Eliya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Nuwara Eliya to Yala National Park",
        "description": "Drive to Yala, afternoon wildlife safari.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Yala Safari"
        ],
        "hotel": "Yala Resort 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Yala to Bentota Beach Resort",
        "description": "Drive to Bentota. Relax on golden beaches.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bentota Beach"
        ],
        "hotel": "Bentota Resort 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Bentota to Colombo City Stay",
        "description": "Drive to Colombo. Visit Gangaramaya Temple, Independence Square, and Pettah Market shopping.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Colombo City Tour"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 7,
        "title": "Colombo Airport Departure",
        "description": "Breakfast and transfer to airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Grand Hotels 3\u2605",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 6
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is \u20b951,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b946,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-thailand-pattaya-budget-3n4d",
    "name": "Pattaya Beach & Nightlife Express (3N/4D)",
    "slug": "pattaya-beach-nightlife-budget-3n4d-package",
    "destination": "Pattaya",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 14000,
    "discountPrice": 18999,
    "rating": 4.85,
    "reviewsCount": 210,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg"
    ],
    "highlights": [
      "3 Nights Stay in Pattaya 3-Star Hotel",
      "Coral Island Speedboat Tour with Lunch",
      "Walking Street Nightlife Exploration",
      "Daily Breakfast & Airport Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "3 Nights 3\u2605 Hotel in Pattaya",
      "Daily Breakfast",
      "Coral Island Speedboat Tour",
      "Airport Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Budget & Nightlife",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bangkok Airport to Pattaya",
        "description": "Transfer to Pattaya, check in hotel. Walking street evening stroll.",
        "meals": [
          "None"
        ],
        "activities": [
          "Walking Street"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Coral Island Speedboat Tour",
        "description": "Speedboat tour to Coral Island with lunch and water sports.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Coral Island"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Pattaya Leisure & Shopping",
        "description": "Free day for shopping or optional Nong Nooch Tropical Garden.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shopping"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Pattaya to Bangkok Airport Departure",
        "description": "Transfer to airport for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Pattaya Central 3\u2605",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b914,000 per person (increased by \u20b95k from flyer rate \u20b99,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-thailand-pattaya-bangkok-4n5d",
    "name": "Thailand Express: Pattaya (3N) & Bangkok (1N) (4N/5D)",
    "slug": "pattaya-bangkok-express-4n5d-package",
    "destination": "Pattaya, Bangkok",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 17000,
    "discountPrice": 22999,
    "rating": 4.88,
    "reviewsCount": 270,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg"
    ],
    "highlights": [
      "3 Nights Pattaya Beach + 1 Night Bangkok Shopping Stay",
      "Coral Island Tour by Speedboat with Lunch",
      "Bangkok Golden Buddha Temple & City Tour",
      "Daily Breakfast & All Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "3N Pattaya (3\u2605) + 1N Bangkok (3\u2605)",
      "Daily Breakfast",
      "Coral Island Tour",
      "Bangkok Temple Tour",
      "Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Budget Multi-City",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bangkok Airport to Pattaya Transfer",
        "description": "Arrival, transfer to Pattaya hotel.",
        "meals": [
          "None"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Coral Island Speedboat Tour",
        "description": "Coral Island tour with lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Coral Island"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Pattaya Free Day",
        "description": "Free day for beach and shopping.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Leisure"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Pattaya to Bangkok Transfer & Temple Tour",
        "description": "Transfer to Bangkok. Visit Golden Buddha and Marble Temple.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Temple Tour"
        ],
        "hotel": "Bangkok Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Bangkok Departure",
        "description": "Checkout and transfer to airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Pattaya Beach 3\u2605",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Bangkok Central 3\u2605",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b917,000 per person (increased by \u20b95k from flyer rate \u20b912,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-thailand-phuket-budget-3n4d",
    "name": "Phuket Island & Patong Beach Getaway (3N/4D)",
    "slug": "phuket-island-patong-budget-3n4d-package",
    "destination": "Phuket",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 17500,
    "discountPrice": 23999,
    "rating": 4.88,
    "reviewsCount": 310,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg"
    ],
    "highlights": [
      "3 Nights Stay at Patong Beach Hotel in Phuket",
      "Phuket Half Day City & Viewpoint Tour",
      "Phi Phi Islands Speedboat Excursion",
      "Daily Breakfast & Airport Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "3 Nights 3\u2605 Hotel in Phuket",
      "Daily Breakfast",
      "Phuket City Tour",
      "Airport Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Beach & Island",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Phuket Airport Transfer \u2013 Patong Beach",
        "description": "Arrival, transfer to hotel.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach"
        ],
        "hotel": "Phuket Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phuket Half Day City Sightseeing",
        "description": "Big Buddha, Karon Viewpoint, Wat Chalong.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "City Tour"
        ],
        "hotel": "Phuket Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Optional Phi Phi Island Speedboat Tour",
        "description": "Free day or optional Phi Phi Island excursion.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Island Tour"
        ],
        "hotel": "Phuket Hotel 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Phuket Departure",
        "description": "Airport drop for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket Beach Hotel 3\u2605",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b917,500 per person (increased by \u20b95k from flyer rate \u20b912,500) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-thailand-pattaya-extended-4n5d",
    "name": "Pattaya Coastal Beach & Island Extended Stay (4N/5D)",
    "slug": "pattaya-coastal-extended-4n5d-package",
    "destination": "Pattaya",
    "destinationSlug": "thailand",
    "country": "Thailand",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 18000,
    "discountPrice": 24999,
    "rating": 4.89,
    "reviewsCount": 180,
    "heroImage": "/destinations/thailand.jpg",
    "gallery": [
      "/destinations/thailand.jpg"
    ],
    "highlights": [
      "4 Nights Beachfront Hotel Stay in Pattaya",
      "Coral Island Speedboat Tour with Lunch",
      "Alcazar Cabaret Show Ticket Included",
      "Daily Breakfast & Airport Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "4 Nights 3\u2605 Hotel in Pattaya",
      "Daily Breakfast",
      "Coral Island Tour",
      "Alcazar Show",
      "Airport Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Beach & Nightlife",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Transfer to Pattaya",
        "description": "Arrival, transfer to Pattaya hotel.",
        "meals": [
          "None"
        ],
        "activities": [
          "Beach Walk"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Coral Island Tour with Lunch",
        "description": "Speedboat tour to Coral Island with lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Coral Island"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Pattaya Sightseeing & Alcazar Show",
        "description": "City tour and evening Alcazar Show.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Alcazar Show"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 4,
        "title": "Pattaya Free Day",
        "description": "Leisure and shopping.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shopping"
        ],
        "hotel": "Pattaya Hotel 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 5,
        "title": "Pattaya Departure",
        "description": "Airport drop for flight home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Pattaya Beach Resort 3\u2605",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b918,000 per person (increased by \u20b95k from flyer rate \u20b913,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-philippines-siargao-3n4d",
    "name": "Discover Philippines: Siargao Surfing & Island Paradise (3N/4D)",
    "slug": "philippines-siargao-island-3n4d-package",
    "destination": "Siargao",
    "destinationSlug": "philippines",
    "country": "Philippines",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 43000,
    "discountPrice": 52999,
    "rating": 4.95,
    "reviewsCount": 140,
    "heroImage": "/destinations/bali.jpg",
    "gallery": [
      "/destinations/bali.jpg",
      "/destinations/thailand.jpg"
    ],
    "highlights": [
      "3 Nights Accommodation in Siargao 3-Star Resort",
      "Daily Hotel Breakfast Included",
      "Private Round-Trip Airport Transfers",
      "Minimum 2 Pax Private Booking",
      "World-Famous Surfing Capital & Palm Tree Lagoon Exploration"
    ],
    "inclusions": [
      "3 Nights 3\u2605 Accommodation in Siargao",
      "Daily Breakfast",
      "Round Trip Airport Transfers on PVT Basis"
    ],
    "exclusions": [
      "Internal/International Flights",
      "Environmental & Terminal Fees",
      "Tipping & Personal Expenses"
    ],
    "theme": "Islands & Surfing",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Siargao \u2013 Hotel Transfer & Leisure",
        "description": "Arrival at Sayak Airport (IAO), private transfer to resort. Free leisure day at Cloud 9 beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "Cloud 9 Beach"
        ],
        "hotel": "Siargao Resort 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Siargao Island Free Leisure Day",
        "description": "Free day to explore Guyam, Daku, and Naked islands or learn surfing.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Surfing / Beach"
        ],
        "hotel": "Siargao Resort 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 3,
        "title": "Siargao Lagoon & Beach Day",
        "description": "Free day to visit Sugba Lagoon or Maasin River palm tree swing.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Sugba Lagoon"
        ],
        "hotel": "Siargao Resort 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Siargao Departure",
        "description": "Breakfast, checkout, and private transfer to airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Siargao Island Resort 3\u2605",
        "city": "Siargao",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b943,000 per person ($515 USD, increased by $60 USD / \u20b95k INR from flyer rate $455 USD) for min 2 pax."
      }
    ]
  },
  {
    "id": "pkg-philippines-bohol-puertoprincesa-3n4d",
    "name": "Discover Philippines: Puerto Princesa & Bohol Countryside Tour (3N/4D)",
    "slug": "philippines-puerto-princesa-bohol-3n4d-package",
    "destination": "Puerto Princesa, Bohol",
    "destinationSlug": "philippines",
    "country": "Philippines",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 37500,
    "discountPrice": 46999,
    "rating": 4.96,
    "reviewsCount": 190,
    "heroImage": "/destinations/bali.jpg",
    "gallery": [
      "/destinations/bali.jpg"
    ],
    "highlights": [
      "Bohol Countryside Tour with Chocolate Hills & Tarsier Sanctuary",
      "Loboc River Cruise with Buffet Lunch Included",
      "Puerto Princesa City Tour & Applicable Entrance Fees",
      "3 Nights Accommodation with Daily Breakfast",
      "Private Airport & Tour Transfers (Min 2 Pax)"
    ],
    "inclusions": [
      "3 Nights 3\u2605 Accommodation in Puerto Princesa",
      "Daily Breakfast + 1 Buffet Lunch on Loboc River Cruise",
      "Bohol Countryside Tour & Puerto Princesa City Tour",
      "Private Airport Transfers & English Speaking Guide"
    ],
    "exclusions": [
      "Internal/International Airfare",
      "Terminal & Environmental Fees",
      "Personal Expenses"
    ],
    "theme": "Nature & Countryside",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Selected Lunch)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Puerto Princesa \u2013 Hotel Transfer",
        "description": "Arrival, private transfer to hotel. Free evening.",
        "meals": [
          "None"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Puerto Princesa Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Bohol Countryside Tour & Loboc River Cruise",
        "description": "Pick up 08:30 for Bohol Countryside Tour. Visit Chocolate Hills, Tarsier Sanctuary, and enjoy Loboc River Cruise with lunch.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Chocolate Hills",
          "Loboc River Cruise",
          "Tarsiers"
        ],
        "hotel": "Puerto Princesa Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Puerto Princesa Free Day",
        "description": "Free day for optional Underground River Tour or Honda Bay Island hopping.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Leisure"
        ],
        "hotel": "Puerto Princesa Hotel 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Puerto Princesa Departure",
        "description": "Breakfast, checkout, and private airport transfer.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Puerto Princesa Resort 3\u2605",
        "city": "Puerto Princesa",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b937,500 per person ($450 USD, increased by $60 USD / \u20b95k INR from flyer rate $390 USD) for min 2 pax."
      }
    ]
  },
  {
    "id": "pkg-philippines-manila-3n4d",
    "name": "Discover Philippines: Manila City Heritage & Cultural Experience (3N/4D)",
    "slug": "philippines-manila-city-3n4d-package",
    "destination": "Manila",
    "destinationSlug": "philippines",
    "country": "Philippines",
    "region": "South East Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 44000,
    "discountPrice": 53999,
    "rating": 4.9,
    "reviewsCount": 160,
    "heroImage": "/destinations/singapore.jpg",
    "gallery": [
      "/destinations/singapore.jpg"
    ],
    "highlights": [
      "Guided Manila City Tour (Intramuros, Fort Santiago & Rizal Park)",
      "3 Nights Hotel Stay in Central Manila",
      "Daily Breakfast & Applicable Entrance Fees",
      "Private Airport & Tour Transfers (Min 2 Pax)"
    ],
    "inclusions": [
      "3 Nights 3\u2605 Hotel Stay in Manila",
      "Daily Breakfast",
      "Manila City Tour with Guide",
      "Private Airport Transfers"
    ],
    "exclusions": [
      "Airfare",
      "Terminal & Porterage Fees",
      "Personal Expenses"
    ],
    "theme": "City & Heritage",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Manila \u2013 Transfer to Hotel",
        "description": "Arrival at Ninoy Aquino Airport (MNL), private transfer to hotel.",
        "meals": [
          "None"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Manila Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Manila City Tour",
        "description": "Pick up 09:00 for Manila City Tour. Visit historic Intramuros, Fort Santiago, San Agustin Church, and Rizal Park.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Intramuros Tour",
          "Fort Santiago"
        ],
        "hotel": "Manila Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Manila Free Leisure & Shopping Day",
        "description": "Free day for shopping at SM Mall of Asia.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Mall of Asia Shopping"
        ],
        "hotel": "Manila Hotel 3\u2605",
        "transfers": "N/A"
      },
      {
        "dayNumber": 4,
        "title": "Manila Departure",
        "description": "Breakfast, checkout, and airport transfer.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Manila Central Hotel 3\u2605",
        "city": "Manila",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b944,000 per person ($530 USD, increased by $60 USD / \u20b95k INR from flyer rate $470 USD) for min 2 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-kandy-bentota-4n5d",
    "name": "Sri Lanka Circuit 1: Kandy Hills (2N) & Bentota Beach (2N) (4N/5D)",
    "slug": "srilanka-kandy-bentota-4n5d-tour-package",
    "destination": "Kandy, Bentota, Galle",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 40000,
    "discountPrice": 48999,
    "rating": 4.93,
    "reviewsCount": 210,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "2 Nights Kandy Sacred Temple & Cultural Shows",
      "2 Nights Bentota Beach & Galle Dutch Fort Day Trip",
      "MAP Plan: Daily Breakfast & Dinner Included",
      "Private Transfers in AC Vehicle (Min 4 Pax)"
    ],
    "inclusions": [
      "2N Kandy (3\u2605) + 2N Bentota (3\u2605)",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers & Sightseeing",
      "Galle Day Excursion"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Monument Entry Tickets",
      "Personal Expenses"
    ],
    "theme": "Hills & Beach",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Kandy (110 Kms / 4 Hrs+)",
        "description": "Arrival, drive to Kandy visiting Pinnawala Elephant Orphanage enroute.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Elephant Orphanage"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Kandy City Tour",
        "description": "Visit Temple of the Tooth Relic, Royal Botanical Gardens, and Kandy Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tooth Temple Tour"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Kandy to Bentota (185 Kms / 5 Hrs+)",
        "description": "Scenic drive down to Bentota beach resort.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bentota Beach"
        ],
        "hotel": "Bentota Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Bentota to Galle Day Trip to Bentota",
        "description": "Excursion to UNESCO Galle Dutch Fort and Kosgoda Turtle Hatchery.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Galle Fort",
          "Turtle Hatchery"
        ],
        "hotel": "Bentota Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 5,
        "title": "Bentota to Airport Departure",
        "description": "Checkout and transfer to Colombo airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Kandy Hotel 3\u2605",
        "city": "Kandy",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bentota Resort 3\u2605",
        "city": "Bentota",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b940,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b935,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-kandy-nuwaraeliya-colombo-4n5d",
    "name": "Sri Lanka Circuit 2: Kandy (2N), Nuwara Eliya (1N) & Colombo (1N) (4N/5D)",
    "slug": "srilanka-kandy-nuwaraeliya-colombo-4n5d-package",
    "destination": "Kandy, Nuwara Eliya, Colombo",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 40000,
    "discountPrice": 48999,
    "rating": 4.92,
    "reviewsCount": 195,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "Kandy Temple of Tooth & Tea Factory Tour",
      "Nuwara Eliya Hill Station & Gregory Lake",
      "Colombo Capital City Shopping & Sightseeing",
      "MAP Plan: Daily Breakfast & Dinner Included (Min 4 Pax)"
    ],
    "inclusions": [
      "2N Kandy + 1N Nuwara Eliya + 1N Colombo",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Entrance Fees"
    ],
    "theme": "Hill Country & Capital",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Kandy",
        "description": "Transfer to Kandy.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Kandy City Tour",
        "description": "Tooth Relic Temple and Kandy cultural dance.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tooth Temple"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Kandy to Nuwara Eliya",
        "description": "Tea estates, waterfalls, and Gregory Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tea Country Tour"
        ],
        "hotel": "Nuwara Eliya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Nuwara Eliya to Colombo",
        "description": "Drive to Colombo. Evening shopping at Pettah Market.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Colombo Shopping"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Colombo Airport Departure",
        "description": "Transfer to airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Heritage 3\u2605",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b940,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b935,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-sigiriya-kandy-colombo-4n5d",
    "name": "Sri Lanka Circuit 3: Sigiriya Fortress (2N), Kandy (1N) & Colombo (1N) (4N/5D)",
    "slug": "srilanka-sigiriya-kandy-colombo-4n5d-package",
    "destination": "Sigiriya, Kandy, Colombo",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 40000,
    "discountPrice": 48999,
    "rating": 4.94,
    "reviewsCount": 230,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "2 Nights Sigiriya Rock Fortress & Dambulla Cave Temple",
      "1 Night Kandy Temple of Tooth Relic",
      "1 Night Colombo Capital City Shopping",
      "MAP Plan: Daily Breakfast & Dinner (Min 4 Pax)"
    ],
    "inclusions": [
      "2N Sigiriya + 1N Kandy + 1N Colombo",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Entrance Tickets"
    ],
    "theme": "Ancient Heritage",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Sigiriya",
        "description": "Drive to Sigiriya.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Sigiriya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Sigiriya City Tour & Dambulla Caves",
        "description": "Climb Sigiriya Fortress and visit Dambulla Cave Temple.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sigiriya & Dambulla"
        ],
        "hotel": "Sigiriya Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Sigiriya to Kandy",
        "description": "Drive to Kandy, visit Tooth Relic Temple.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tooth Temple"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Kandy to Colombo",
        "description": "Drive to Colombo, city tour and shopping.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Colombo City Tour"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Colombo Airport Departure",
        "description": "Airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Cultural Hotels 3\u2605",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b940,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b935,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-yala-mirissa-bentota-4n5d",
    "name": "Sri Lanka Circuit 4: Yala Safari (1N), Udawalawe (1N), Mirissa Beach (1N) & Bentota (1N)",
    "slug": "srilanka-wildlife-beach-safari-4n5d-package",
    "destination": "Yala, Udawalawe, Mirissa, Bentota",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 40000,
    "discountPrice": 48999,
    "rating": 4.96,
    "reviewsCount": 260,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "Yala National Park Leopard Safari",
      "Udawalawe Elephant Transit Home & National Park",
      "Mirissa Beach & Whale Watching Coast",
      "Bentota Golden Sands & Water Sports",
      "MAP Plan: Daily Breakfast & Dinner (Min 4 Pax)"
    ],
    "inclusions": [
      "1N Yala + 1N Udawalawe + 1N Mirissa + 1N Bentota",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Safari Tickets",
      "Whale Watching Ticket"
    ],
    "theme": "Safari & Whale Coast",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Yala National Park",
        "description": "Arrival, drive to Yala.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Drive to Yala"
        ],
        "hotel": "Yala Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Yala Safari to Udawalawe",
        "description": "Morning Yala safari, drive to Udawalawe elephant sanctuary.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Yala Safari",
          "Udawalawe"
        ],
        "hotel": "Udawalawe Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Udawalawe to Mirissa Beach",
        "description": "Drive to Mirissa coastal resort.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Mirissa Beach"
        ],
        "hotel": "Mirissa Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Mirissa to Bentota Beach",
        "description": "Drive to Bentota, water sports and sunset beach walk.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bentota Beach"
        ],
        "hotel": "Bentota Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Bentota Airport Departure",
        "description": "Airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Wildlife & Beach Resorts 3\u2605",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b940,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b935,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-bentota-galle-2n3d",
    "name": "Sri Lanka Beach Getaway: Bentota & Galle Day Excursion (2N/3D)",
    "slug": "srilanka-bentota-galle-2n3d-package",
    "destination": "Bentota, Galle",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 29000,
    "discountPrice": 35999,
    "rating": 4.88,
    "reviewsCount": 150,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "2 Nights Bentota Beachfront Resort Stay",
      "Galle Dutch Fort UNESCO Heritage Day Trip",
      "MAP Plan: Daily Breakfast & Dinner Included (Min 4 Pax)"
    ],
    "inclusions": [
      "2 Nights Bentota Hotel 3\u2605",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Short Beach Break",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Bentota",
        "description": "Transfer to Bentota resort.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Beach Walk"
        ],
        "hotel": "Bentota Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Galle Fort Day Excursion",
        "description": "Excursion to Galle Dutch Fort.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Galle Fort Tour"
        ],
        "hotel": "Bentota Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Bentota to Airport Departure",
        "description": "Transfer to airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Bentota Beach Hotel 3\u2605",
        "city": "Bentota",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b929,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b924,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-colombo-bentota-2n3d",
    "name": "Sri Lanka Express: Colombo City (2N) & Bentota Beach Day Trip (2N/3D)",
    "slug": "srilanka-colombo-bentota-2n3d-package",
    "destination": "Colombo, Bentota",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 3,
    "durationNights": 2,
    "startingPrice": 29000,
    "discountPrice": 35999,
    "rating": 4.86,
    "reviewsCount": 120,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "2 Nights Colombo Capital City Stay & Shopping",
      "Day Excursion to Bentota Beach & Turtle Hatchery",
      "MAP Plan: Daily Breakfast & Dinner (Min 4 Pax)"
    ],
    "inclusions": [
      "2 Nights Colombo Hotel 3\u2605",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Short City Break",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Colombo",
        "description": "Transfer to Colombo.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Bentota Beach Day Trip",
        "description": "Day trip to Bentota beach.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bentota Day Trip"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Colombo Shopping & Departure",
        "description": "Shopping and airport transfer.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Colombo Central Hotel 3\u2605",
        "city": "Colombo",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b929,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b924,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-colombo-3n4d",
    "name": "Sri Lanka Capital & Beach: Colombo (3N) with Bentota Excursion (3N/4D)",
    "slug": "srilanka-colombo-bentota-3n4d-package",
    "destination": "Colombo, Bentota",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 35000,
    "discountPrice": 42999,
    "rating": 4.9,
    "reviewsCount": 170,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "3 Nights Colombo Capital Hotel Stay",
      "Full Day Excursion to Bentota Beach",
      "MAP Plan: Daily Breakfast & Dinner Included (Min 4 Pax)"
    ],
    "inclusions": [
      "3 Nights Colombo Hotel 3\u2605",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "City & Beach",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Colombo",
        "description": "Transfer to Colombo hotel.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Bentota Beach Day Trip",
        "description": "Day trip to Bentota beach.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bentota Beach"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Colombo City Sightseeing & Shopping",
        "description": "Colombo city tour and shopping.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Colombo Shopping"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 4,
        "title": "Colombo Airport Departure",
        "description": "Transfer to airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Colombo City Hotel 3\u2605",
        "city": "Colombo",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b935,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b930,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-kandy-bentota-colombo-3n4d",
    "name": "Sri Lanka Highlights: Kandy (1N), Bentota (1N) & Colombo (1N) (3N/4D)",
    "slug": "srilanka-kandy-bentota-colombo-3n4d-package",
    "destination": "Kandy, Bentota, Colombo",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 35000,
    "discountPrice": 42999,
    "rating": 4.92,
    "reviewsCount": 210,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "Kandy Temple of Tooth Relic & Hills",
      "Bentota Beach Resort Stay",
      "Colombo Capital City Shopping",
      "MAP Plan: Daily Breakfast & Dinner (Min 4 Pax)"
    ],
    "inclusions": [
      "1N Kandy + 1N Bentota + 1N Colombo",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Tri-City Highlights",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Kandy",
        "description": "Transfer to Kandy, visit Tooth Relic Temple.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Tooth Temple"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Kandy to Bentota Beach",
        "description": "Drive to Bentota.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bentota Beach"
        ],
        "hotel": "Bentota Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Bentota to Colombo City",
        "description": "Drive to Colombo, city tour and shopping.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Colombo Tour"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Colombo Departure",
        "description": "Airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Express Hotels 3\u2605",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b935,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b930,000) for min 4 pax."
      }
    ]
  },
  {
    "id": "pkg-srilanka-kandy-nuwaraeliya-colombo-3n4d",
    "name": "Sri Lanka Hill Country Express: Kandy (1N), Nuwara Eliya (1N) & Colombo (1N) (3N/4D)",
    "slug": "srilanka-kandy-nuwaraeliya-colombo-3n4d-package",
    "destination": "Kandy, Nuwara Eliya, Colombo",
    "destinationSlug": "sri-lanka",
    "country": "Sri Lanka",
    "region": "South Asia",
    "isInternational": true,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 35000,
    "discountPrice": 42999,
    "rating": 4.91,
    "reviewsCount": 180,
    "heroImage": "/destinations/bhutan.jpg",
    "gallery": [
      "/destinations/bhutan.jpg"
    ],
    "highlights": [
      "Kandy Temple of Tooth & Tea Factory Visit",
      "Nuwara Eliya Hill Station & Gregory Lake",
      "Colombo Capital City Shopping",
      "MAP Plan: Daily Breakfast & Dinner (Min 4 Pax)"
    ],
    "inclusions": [
      "1N Kandy + 1N Nuwara Eliya + 1N Colombo",
      "MAP Plan (Breakfast + Dinner)",
      "Private AC Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Hill Country Express",
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Kandy",
        "description": "Transfer to Kandy.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Tooth Temple"
        ],
        "hotel": "Kandy Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Kandy to Nuwara Eliya",
        "description": "Tea gardens and Gregory Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tea Estate Tour"
        ],
        "hotel": "Nuwara Eliya Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Nuwara Eliya to Colombo",
        "description": "Drive to Colombo, city tour and shopping.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Colombo Shopping"
        ],
        "hotel": "Colombo Hotel 3\u2605",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Colombo Departure",
        "description": "Airport drop.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport Drop"
        ],
        "hotel": "N/A",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Hill Hotels 3\u2605",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is \u20b935,000 per person MAP Plan (increased by \u20b95k from flyer rate \u20b930,000) for min 4 pax."
      }
    ]
  },
  {
  "id": "pkg-georgia-tbilisi-gudauri-kazbegi-4n5d",
  "name": "Georgia Enchantment: Tbilisi, Ananuri, Gudauri & Kazbegi Express (4N/5D)",
  "slug": "georgia-tbilisi-gudauri-kazbegi-4n5d-package",
  "destination": "Tbilisi, Gudauri, Kazbegi",
  "destinationSlug": "georgia",
  "country": "Georgia",
  "region": "Caucasus / Europe",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 32500,
  "discountPrice": 39999,
  "rating": 4.92,
  "reviewsCount": 165,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "Tbilisi Old Town & Narikala Fortress Cable Car",
    "Jinvali Water Reservoir & Ananuri Fortress Complex",
    "Gudauri Ski Resort & Russia-Georgia Friendship Monument",
    "4WD Jeep Safari to Gergeti Trinity Church in Kazbegi",
    "Includes Daily Breakfast & Private AC Transfers"
  ],
  "inclusions": [
    "4 Nights Stay in 3\u2605 / 4\u2605 Tbilisi Hotel",
    "Daily Breakfast",
    "Private Airport Transfers",
    "Tbilisi & Kazbegi Full Day Sightseeing",
    "4WD 3Delica Jeep ride to Gergeti Monastery"
  ],
  "exclusions": [
    "International Airfare & Georgia Visa fee",
    "Lunch & Dinners",
    "Personal Expenses & Tips"
  ],
  "theme": "Caucasus Scenic & Cultural",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Tbilisi City Hotel 4\u2605",
      "city": "Tbilisi",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Arrival in Tbilisi & Evening Promenade",
      "description": "Arrive at Tbilisi International Airport (TBS). Private transfer to hotel. Evening walk around Shardeni Street and Peace Bridge.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer",
        "Shardeni Street Walk"
      ],
      "hotel": "Tbilisi City Hotel 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Tbilisi Historic City Tour & Cable Car",
      "description": "Explore Metekhi Church, Europe Square, Narikala Fortress via aerial cable car, Abanotubani Sulfur Baths, and Leghvtakhevi Waterfall.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Narikala Cable Car",
        "Sulfur Baths Walk",
        "Peace Bridge"
      ],
      "hotel": "Tbilisi City Hotel 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Ananuri Fortress, Gudauri & Kazbegi 4WD Safari",
      "description": "Drive scenic Georgian Military Highway. Stop at Jinvali Reservoir, Ananuri Fortress, Gudauri Viewpoint, and 4WD Jeep up to Gergeti Trinity Church.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Ananuri Fortress",
        "Gudauri Panorama",
        "4WD Gergeti Trinity Church"
      ],
      "hotel": "Tbilisi City Hotel 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Mtskheta Ancient Capital & Mtatsminda Park",
      "description": "Visit UNESCO-listed Mtskheta ancient capital, Jvari Monastery overlooking confluence of Aragvi and Mtkvari rivers, and Mtatsminda funicular park.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Jvari Monastery",
        "Mtskheta Tour",
        "Mtatsminda Park"
      ],
      "hotel": "Tbilisi City Hotel 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Tbilisi Shopping & Departure",
      "description": "Leisure time for shopping at East Point Mall or Dry Bridge Flea Market before airport drop.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Shopping",
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Starting price is $390 USD (~\u20b932,500) per person (increased by $60 / \u20b95,000 from base flyer rate $330)."
    },
    {
      "question": "Do Indian passport holders need a visa for Georgia?",
      "answer": "Indian nationals with valid US, UK, Schengen, or GCC visas/residence permits get visa-free entry; others require an e-Visa."
    }
  ]
},
  {
  "id": "pkg-georgia-tbilisi-kazbegi-mtskheta-5n6d",
  "name": "Georgia Grand Discovery: Tbilisi, Kazbegi, Mtskheta & Uplistsikhe (5N/6D)",
  "slug": "georgia-tbilisi-kazbegi-mtskheta-5n6d-package",
  "destination": "Tbilisi, Mtskheta, Kazbegi, Uplistsikhe",
  "destinationSlug": "georgia",
  "country": "Georgia",
  "region": "Caucasus / Europe",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 60000,
  "discountPrice": 72000,
  "rating": 4.95,
  "reviewsCount": 140,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "Tbilisi Old Town & Funicular Railway to Mtatsminda",
    "UNESCO Mtskheta, Jvari Monastery & Svetitskhoveli Cathedral",
    "Uplistsikhe Ancient Cave Town Exploration",
    "Full Day Kazbegi 4x4 Mountain Excursion",
    "Premium 4\u2605 Hotel Stay with Breakfast & Guided Tours"
  ],
  "inclusions": [
    "5 Nights Hotel Stay in 4\u2605 Tbilisi Hotel",
    "Daily Buffet Breakfast",
    "Private Sightseeing Tours & English Speaking Driver Guide",
    "4WD Delica Ride in Kazbegi",
    "Airport Pick up & Drop Transfers"
  ],
  "exclusions": [
    "Airfare & Georgia Visa",
    "Lunch, Dinner & Wine Tasting Fees",
    "Personal Expenses"
  ],
  "theme": "Caucasus Heritage & Mountains",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Tbilisi Grand Plaza 4\u2605",
      "city": "Tbilisi",
      "rating": "4 Star",
      "nights": 5
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Welcome to Tbilisi",
      "description": "Airport reception and private transfer to Tbilisi hotel. Free evening to sample Georgian khachapuri.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Tbilisi Grand Plaza 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Tbilisi Heritage Walk & Cable Car",
      "description": "Visit Sameba Cathedral, Metekhi, Narikala Fortress via cable car, sulfur bath district, and Botanical Garden waterfall.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Sameba Cathedral",
        "Narikala Cable Car",
        "Old Town Walk"
      ],
      "hotel": "Tbilisi Grand Plaza 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Kazbegi High Mountains & Gergeti Church",
      "description": "Scenic highway pass through Jinvali lake, Ananuri Castle, Gudauri Ski Resort, and 4WD mountain ascent to Gergeti Church.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Ananuri",
        "Gudauri Friendship Arch",
        "Gergeti 4x4"
      ],
      "hotel": "Tbilisi Grand Plaza 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Ancient Mtskheta & Uplistsikhe Cave City",
      "description": "Travel to Mtskheta ancient capital, Jvari Monastery, and explore 3,000-year-old Uplistsikhe rock-cut cave town.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Jvari Monastery",
        "Svetitskhoveli",
        "Uplistsikhe Caves"
      ],
      "hotel": "Tbilisi Grand Plaza 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Kakheti Wine Region Day Trip (Optional Signagi)",
      "description": "Day tour to Kakheti wine region, city of love Signagi, Bodbe Monastery, and traditional wine cellar tasting.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Signagi City Walk",
        "Bodbe Monastery",
        "Wine Cellar Visit"
      ],
      "hotel": "Tbilisi Grand Plaza 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Tbilisi Souvenir Shopping & Departure",
      "description": "Check out and visit Galleria Tbilisi for souvenirs before airport departure.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Shopping",
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $720 USD (~\u20b960,000) per person (increased by $60 / \u20b95,000 from flyer rate $660)."
    }
  ]
},
  {
  "id": "pkg-georgia-tbilisi-batumi-prometheus-6n7d",
  "name": "Georgia Complete Explorer: Tbilisi, Batumi Black Sea Coast & Prometheus Cave (6N/7D)",
  "slug": "georgia-tbilisi-batumi-prometheus-6n7d-package",
  "destination": "Tbilisi, Batumi, Kutaisi, Prometheus Cave",
  "destinationSlug": "georgia",
  "country": "Georgia",
  "region": "Caucasus / Europe",
  "isInternational": true,
  "durationDays": 7,
  "durationNights": 6,
  "startingPrice": 53500,
  "discountPrice": 64999,
  "rating": 4.94,
  "reviewsCount": 155,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "3N Tbilisi + 3N Batumi Black Sea Riviera Stay",
    "Prometheus Karst Caves & Martvili Canyon Boat Ride",
    "Batumi Boulevard, Ali & Nino Moving Statue",
    "Highland Kazbegi 4WD Excursion",
    "Comprehensive Georgia Coast & Mountain Highlights"
  ],
  "inclusions": [
    "3 Nights Tbilisi + 3 Nights Batumi 4\u2605 Hotel Stay",
    "Daily Breakfast",
    "Intercity Transfers Tbilisi \u2013 Batumi",
    "Excursions to Kazbegi & Prometheus Cave",
    "Private Airport Pick up & Drop"
  ],
  "exclusions": [
    "Airfare & Visa Fees",
    "Prometheus Cave Boat Ticket",
    "Personal Expenses"
  ],
  "theme": "Black Sea Coast & Mountains",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Tbilisi City Hotel 4\u2605",
      "city": "Tbilisi",
      "rating": "4 Star",
      "nights": 3
    },
    {
      "name": "Batumi Seaside Resort 4\u2605",
      "city": "Batumi",
      "rating": "4 Star",
      "nights": 3
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Tbilisi Arrival",
      "description": "Airport pick up and drop to Tbilisi hotel. Evening stroll in Rustaveli Avenue.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Tbilisi City Hotel 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Tbilisi Classic City Tour",
      "description": "Full day tour of Old Tbilisi, Narikala Fortress cable car, sulfur baths, and Mtatsminda Viewpoint.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Narikala Cable Car",
        "Old Town",
        "Mtatsminda"
      ],
      "hotel": "Tbilisi City Hotel 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Gudauri & Kazbegi 4WD Mountain Excursion",
      "description": "Day trip to Kazbegi via Ananuri and Gudauri. 4WD jeep up to Gergeti Trinity Church.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Ananuri Castle",
        "Gergeti Trinity 4WD"
      ],
      "hotel": "Tbilisi City Hotel 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Tbilisi to Batumi via Prometheus Cave & Martvili Canyon",
      "description": "Drive west to Imereti region. Explore subterranean Prometheus Cave and boat through Martvili Canyon. Arrive in Batumi.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Prometheus Cave",
        "Martvili Canyon Boat"
      ],
      "hotel": "Batumi Seaside Resort 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Batumi Riviera & Ali & Nino Promenade",
      "description": "Explore Batumi Boulevard, Alphabetic Tower, Europe Square, and kinetic statue of Ali & Nino.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Ali & Nino Statue",
        "Batumi Boulevard",
        "Cable Car"
      ],
      "hotel": "Batumi Seaside Resort 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Makhuntseti Waterfall & Queen Tamar Bridge",
      "description": "Drive to Adjara highlands, Makhuntseti Waterfall and arched stone Queen Tamar Bridge.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Makhuntseti Waterfall",
        "Stone Bridge"
      ],
      "hotel": "Batumi Seaside Resort 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 7,
      "title": "Batumi / Tbilisi Departure",
      "description": "Transfer to Batumi (BUS) or Tbilisi (TBS) airport for flight back home.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $643 USD (~\u20b953,500) per person (increased by $60 / \u20b95,000 from flyer rate $583)."
    }
  ]
},
  {
  "id": "pkg-japan-osaka-kyoto-nara-private-4n5d",
  "name": "Japan Luxury Private Escape: Osaka, Universal Studios, Kyoto & Nara (4N/5D - 2 Pax Private)",
  "slug": "japan-osaka-kyoto-nara-private-4n5d-package",
  "destination": "Osaka, Kyoto, Nara, Lake Biwa",
  "destinationSlug": "japan",
  "country": "Japan",
  "region": "East Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 145000,
  "discountPrice": 175000,
  "rating": 4.96,
  "reviewsCount": 95,
  "heroImage": "/destinations/japan.jpg",
  "gallery": [
    "/destinations/japan.jpg"
  ],
  "highlights": [
    "Private Tour for 2 Pax in Luxury Sedan / MPV",
    "Universal Studios Japan (USJ) Osaka Full Day",
    "Kyoto Fushimi Inari Shrine & Kinkaku-ji Golden Pavilion",
    "Nara Deer Park & Todai-ji Temple",
    "Lake Biwa Scenic Lakeside & Dotonbori Street Food"
  ],
  "inclusions": [
    "4 Nights in 4\u2605 Osaka Hotel",
    "Daily Breakfast",
    "Private Vehicle & English Speaking Driver Guide for 5 Days",
    "Universal Studios Japan Day Pass",
    "Kansai Airport (KIX) Transfers"
  ],
  "exclusions": [
    "International Airfare & Japan Visa",
    "Lunch & Dinners",
    "Personal Expenses"
  ],
  "theme": "Private Luxury & Pop Culture",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Swiss\u00f4tel Namba Osaka 4\u2605",
      "city": "Osaka",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Kansai Arrival & Dotonbori Evening",
      "description": "Arrival at Osaka Kansai Airport (KIX). Private airport pickup to hotel. Evening stroll in neon-lit Dotonbori and Shinsaibashi.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup",
        "Dotonbori Food Tour"
      ],
      "hotel": "Swiss\u00f4tel Namba Osaka 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 2,
      "title": "Universal Studios Japan (USJ) Thrills",
      "description": "Full day at Universal Studios Japan including Super Nintendo World and Wizarding World of Harry Potter.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "USJ Entry Pass",
        "Nintendo World"
      ],
      "hotel": "Swiss\u00f4tel Namba Osaka 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 3,
      "title": "Kyoto Cultural Heritage Private Tour",
      "description": "Private drive to Kyoto. Visit Fushimi Inari Taisha (10,000 torii gates), Kinkaku-ji Golden Pavilion, and Arashiyama Bamboo Grove.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Fushimi Inari",
        "Golden Pavilion",
        "Arashiyama Bamboo Grove"
      ],
      "hotel": "Swiss\u00f4tel Namba Osaka 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 4,
      "title": "Nara Deer Park & Lake Biwa Scenic Excursion",
      "description": "Visit Nara Deer Park, feed bow deer, see Giant Buddha at Todai-ji. Afternoon drive to Lake Biwa scenic lakeshore.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Nara Deer Park",
        "Todai-ji Temple",
        "Lake Biwa Drive"
      ],
      "hotel": "Swiss\u00f4tel Namba Osaka 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 5,
      "title": "Osaka Castle & Departure",
      "description": "Morning visit to Osaka Castle grounds. Transfer to Kansai Airport for departure.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Osaka Castle Park",
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Car"
    }
  ],
  "faqs": [
    {
      "question": "What is the total price for 2 people?",
      "answer": "Total price is \u20b92,90,000 for 2 adults (\u20b91,45,000 per person, increased by \u20b95,000 per person / \u20b910,000 total from flyer rate \u20b92,80,000)."
    }
  ]
},
  {
  "id": "pkg-japan-tokyo-disneyland-fuji-snow-private-4n5d",
  "name": "Japan Wonderland Private: Tokyo, Disneyland, Mt. Fuji & Snowman Ski Resort (4N/5D - 2 Pax Private)",
  "slug": "japan-tokyo-disneyland-fuji-snow-private-4n5d-package",
  "destination": "Tokyo, Mt. Fuji, Snowman Ski Resort",
  "destinationSlug": "japan",
  "country": "Japan",
  "region": "East Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 155000,
  "discountPrice": 185000,
  "rating": 4.98,
  "reviewsCount": 110,
  "heroImage": "/destinations/japan.jpg",
  "gallery": [
    "/destinations/japan.jpg"
  ],
  "highlights": [
    "Exclusive Private Tour for 2 Pax in Tokyo & Mt Fuji",
    "Tokyo Disneyland or DisneySea 1-Day Pass",
    "Mt. Fuji 5th Station & Lake Kawaguchiko Panorama",
    "Snowman / Fujiten Ski Resort Winter Snow Play",
    "Senso-ji Temple Asakusa & Shibuya Crossing"
  ],
  "inclusions": [
    "4 Nights in 4\u2605 Central Tokyo Hotel",
    "Daily Breakfast",
    "Private Vehicle & Dedicated Driver Guide",
    "Tokyo Disneyland Day Pass",
    "Haneda / Narita Airport Private Transfers"
  ],
  "exclusions": [
    "International Airfare & Visa",
    "Ski Gear Rental & Lift Passes",
    "Personal Expenses"
  ],
  "theme": "Private Family & Winter Romance",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Tokyo Dome Hotel / Daiwa Roynet 4\u2605",
      "city": "Tokyo",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Tokyo Arrival & Shibuya Crossing",
      "description": "Private airport pickup from Haneda (HND) / Narita (NRT). Hotel check-in and evening walk through Shibuya Crossing and Hachiko statue.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup",
        "Shibuya Crossing"
      ],
      "hotel": "Tokyo Central Hotel 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 2,
      "title": "Tokyo Disneyland Magic Day",
      "description": "Full day immersive fairytale experience at Tokyo Disneyland with fireworks and parades.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Tokyo Disneyland Ticket"
      ],
      "hotel": "Tokyo Central Hotel 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 3,
      "title": "Mt. Fuji & Snowman Ski Resort Adventure",
      "description": "Private drive to Lake Kawaguchiko, Mt. Fuji 5th Station, and winter snow sports play at Fujiten / Snowman Ski Resort.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Mt Fuji 5th Station",
        "Lake Kawaguchiko",
        "Snow Ski Resort"
      ],
      "hotel": "Tokyo Central Hotel 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 4,
      "title": "Asakusa Senso-ji, Skytree & Ginza Shopping",
      "description": "Visit historic Senso-ji Temple in Asakusa, Nakamise Shopping Street, photo stop at Tokyo Skytree, and luxury shopping in Ginza.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Sensoji Temple",
        "Nakamise Street",
        "Ginza Shopping"
      ],
      "hotel": "Tokyo Central Hotel 4\u2605",
      "transfers": "Private Car"
    },
    {
      "dayNumber": 5,
      "title": "Tokyo Departure",
      "description": "Check out and private transfer to Tokyo Narita / Haneda airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Car"
    }
  ],
  "faqs": [
    {
      "question": "What is the total price for 2 adults?",
      "answer": "Total price is \u20b93,10,000 for 2 adults (\u20b91,55,000 per person, increased by \u20b95,000 per person / \u20b910,000 total from flyer rate \u20b93,00,000)."
    }
  ]
},
  {
  "id": "pkg-japan-nagoya-takayama-kanazawa-group-4n5d",
  "name": "Japan Alpine Highlights: Nagoya, Takayama Folk Village & Kanazawa (4N/5D Group Tour)",
  "slug": "japan-nagoya-takayama-kanazawa-group-4n5d-package",
  "destination": "Nagoya, Takayama, Kanazawa",
  "destinationSlug": "japan",
  "country": "Japan",
  "region": "East Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 125000,
  "discountPrice": 149999,
  "rating": 4.89,
  "reviewsCount": 80,
  "heroImage": "/destinations/japan.jpg",
  "gallery": [
    "/destinations/japan.jpg"
  ],
  "highlights": [
    "Group Departure Special (Min 10 Pax)",
    "Takayama Sanmachi Suji Preservation District (2N)",
    "Shirakawa-go UNESCO Gassho-Zukuri Village",
    "Kanazawa Kenroku-en Garden & Higashi Chaya Tea District (1N)",
    "Nagoya Castle & Oasis 21 Shopping"
  ],
  "inclusions": [
    "2N Takayama + 1N Kanazawa + 1N Takayama 3\u2605/4\u2605 Hotels",
    "Daily Breakfast",
    "Group Coach Coach Transfers & Sightseeing",
    "English Speaking Tour Manager"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses & Tips"
  ],
  "theme": "Alpine Village & Traditions",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Takayama Green Hotel / Similar",
      "city": "Takayama",
      "rating": "4 Star",
      "nights": 3
    },
    {
      "name": "Kanazawa Hotel International",
      "city": "Kanazawa",
      "rating": "3 Star",
      "nights": 1
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Nagoya Arrival to Takayama",
      "description": "Meet group at Nagoya Airport (NGO). Transfer by AC coach to historic alpine town of Takayama.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Group Transfer",
        "Takayama Welcome"
      ],
      "hotel": "Takayama Green Hotel",
      "transfers": "AC Group Coach"
    },
    {
      "dayNumber": 2,
      "title": "Shirakawa-go UNESCO Village & Takayama Old Town",
      "description": "Visit iconic thatched roof houses of Shirakawa-go and stroll Takayama Sanmachi Suji merchant streets.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Shirakawa-go Village",
        "Sanmachi Suji Walk"
      ],
      "hotel": "Takayama Green Hotel",
      "transfers": "AC Group Coach"
    },
    {
      "dayNumber": 3,
      "title": "Takayama to Kanazawa Castle & Kenroku-en",
      "description": "Drive to Kanazawa. Visit Kenroku-en (one of Japan's top 3 gardens), Kanazawa Castle Park, and Geisha district.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Kenrokuen Garden",
        "Kanazawa Castle"
      ],
      "hotel": "Kanazawa Hotel",
      "transfers": "AC Group Coach"
    },
    {
      "dayNumber": 4,
      "title": "Kanazawa Omicho Market to Takayama",
      "description": "Explore Omicho seafood market before returning to Takayama for evening relaxing onsen soak.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Omicho Market",
        "Onsen Village Experience"
      ],
      "hotel": "Takayama Green Hotel",
      "transfers": "AC Group Coach"
    },
    {
      "dayNumber": 5,
      "title": "Nagoya City Tour & Departure",
      "description": "Visit Nagoya Castle grounds and transfer to Nagoya Airport for flight.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Nagoya Castle",
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "AC Group Coach"
    }
  ],
  "faqs": [
    {
      "question": "What is the group tour price?",
      "answer": "Price is \u20b91,25,000 per person for minimum 10 pax (increased by \u20b95,000 from flyer rate \u20b91,20,000)."
    }
  ]
},
  {
  "id": "pkg-japan-osaka-kyoto-nara-group-4n5d",
  "name": "Japan Kansai Express Group: Osaka (4N), Kyoto & Nara Heritage (4N/5D Group Tour)",
  "slug": "japan-osaka-kyoto-nara-group-4n5d-package",
  "destination": "Osaka, Kyoto, Nara",
  "destinationSlug": "japan",
  "country": "Japan",
  "region": "East Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 125000,
  "discountPrice": 149999,
  "rating": 4.91,
  "reviewsCount": 120,
  "heroImage": "/destinations/japan.jpg",
  "gallery": [
    "/destinations/japan.jpg"
  ],
  "highlights": [
    "Group Departure Special (Min 10 Pax)",
    "4 Nights Stay in Osaka Central Hotel",
    "Kyoto Golden Pavilion & Fushimi Inari Shrine Excursion",
    "Nara Deer Park & Todai-ji Temple Group Visit",
    "Dotonbori Street Shopping & Osaka Castle"
  ],
  "inclusions": [
    "4 Nights in 3\u2605 / 4\u2605 Osaka Hotel",
    "Daily Breakfast",
    "AC Group Coach Transfers",
    "Sightseeing Entry Passes as per Itinerary"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Kansai Cultural Group",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Osaka Plaza Hotel 3\u2605/4\u2605",
      "city": "Osaka",
      "rating": "3 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Osaka Kansai Arrival",
      "description": "Group arrival at Kansai International Airport (KIX). Transfer to Osaka hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Osaka Plaza Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 2,
      "title": "Kyoto Ancient Capital Tour",
      "description": "Full day Kyoto excursion: Fushimi Inari Taisha, Kinkaku-ji (Golden Pavilion), and Kiyomizu-dera Temple.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Fushimi Inari",
        "Golden Pavilion",
        "Kiyomizudera"
      ],
      "hotel": "Osaka Plaza Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 3,
      "title": "Nara Deer Park & Todai-ji Buddha",
      "description": "Excursion to Nara. Interact with friendly sika deer in Nara Park and visit Todai-ji Temple housing Great Buddha.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Nara Deer Park",
        "Todaiji Temple"
      ],
      "hotel": "Osaka Plaza Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 4,
      "title": "Osaka City Tour & Dotonbori Shopping",
      "description": "Visit Osaka Castle Park, Umeda Sky Building observatory view, and evening shopping at Dotonbori & Shinsaibashi.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Osaka Castle",
        "Dotonbori Shopping"
      ],
      "hotel": "Osaka Plaza Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 5,
      "title": "Osaka Departure",
      "description": "Check out and group coach transfer to Kansai Airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Group Coach"
    }
  ],
  "faqs": [
    {
      "question": "What is the price?",
      "answer": "Price is \u20b91,25,000 per person for minimum 10 pax (increased by \u20b95,000 from flyer rate \u20b91,20,000)."
    }
  ]
},
  {
  "id": "pkg-japan-sapporo-asahikawa-noboribetsu-group-4n5d",
  "name": "Japan Hokkaido Wonders: Sapporo (4N), Asahikawa Zoo, Noboribetsu & Lake Toya (4N/5D Group Tour)",
  "slug": "japan-sapporo-asahikawa-noboribetsu-group-4n5d-package",
  "destination": "Sapporo, Asahikawa, Noboribetsu, Lake Toya",
  "destinationSlug": "japan",
  "country": "Japan",
  "region": "East Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 125000,
  "discountPrice": 149999,
  "rating": 4.93,
  "reviewsCount": 75,
  "heroImage": "/destinations/japan.jpg",
  "gallery": [
    "/destinations/japan.jpg"
  ],
  "highlights": [
    "Group Departure Special (Min 10 Pax)",
    "4 Nights Hotel Stay in Sapporo Capital",
    "Asahikawa Zoo & Penguin Walk Excursion",
    "Noboribetsu Jigokudani (Hell Valley) Volcanic Geysers",
    "Lake Toya Volcanic Crater Lake & Mt. Usu Ropeway"
  ],
  "inclusions": [
    "4 Nights in 3\u2605/4\u2605 Sapporo Hotel",
    "Daily Breakfast",
    "Group Coach Sightseeing",
    "Entry Passes to Asahikawa Zoo & Lake Toya Ropeway"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Hokkaido Nature & Wildlife",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Sapporo Grand Hotel / Similar 4\u2605",
      "city": "Sapporo",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Sapporo New Chitose Arrival",
      "description": "Group arrival at Sapporo New Chitose Airport (CTS). Coach transfer to hotel. Evening at Odori Park and Tanukikoji Shopping Arcade.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup",
        "Odori Park"
      ],
      "hotel": "Sapporo Grand Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 2,
      "title": "Asahikawa Zoo & Shirogane Blue Pond",
      "description": "Day trip north to Asahikawa Zoo (famous penguin walk) and breathtaking cobalt-blue Shirogane Blue Pond in Biei.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Asahikawa Zoo",
        "Blue Pond Biei"
      ],
      "hotel": "Sapporo Grand Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 3,
      "title": "Noboribetsu Hell Valley & Lake Toya",
      "description": "Visit steaming geothermal volcanic vents of Jigokudani Hell Valley in Noboribetsu and scenic Lake Toya panorama.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Noboribetsu Hell Valley",
        "Lake Toya Viewpoint"
      ],
      "hotel": "Sapporo Grand Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 4,
      "title": "Otaru Canal Historic Town & Sapporo Beer Museum",
      "description": "Excursion to romantic Otaru Canal, Glassworks shops, and Sapporo Beer Museum for tasting.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Otaru Canal",
        "Sapporo Beer Museum"
      ],
      "hotel": "Sapporo Grand Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 5,
      "title": "Sapporo Departure",
      "description": "Hotel check out and airport coach drop to New Chitose Airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Group Coach"
    }
  ],
  "faqs": [
    {
      "question": "What is the price?",
      "answer": "Price is \u20b91,25,000 per person for minimum 10 pax (increased by \u20b95,000 from flyer rate \u20b91,20,000)."
    }
  ]
},
  {
  "id": "pkg-japan-tokyo-fuji-group-4n5d",
  "name": "Japan Capital & Mt. Fuji Group: Tokyo (4N), Mt. Fuji & Hakone Lake Ashi (4N/5D Group Tour)",
  "slug": "japan-tokyo-fuji-group-4n5d-package",
  "destination": "Tokyo, Mt. Fuji, Hakone",
  "destinationSlug": "japan",
  "country": "Japan",
  "region": "East Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 125000,
  "discountPrice": 149999,
  "rating": 4.94,
  "reviewsCount": 145,
  "heroImage": "/destinations/japan.jpg",
  "gallery": [
    "/destinations/japan.jpg"
  ],
  "highlights": [
    "Group Departure Special (Min 10 Pax)",
    "4 Nights Central Tokyo Hotel Stay",
    "Mt. Fuji 5th Station & Lake Ashi Pirate Cruise",
    "Komagatake Ropeway Mountain Cable Car Ride",
    "Shibuya Crossing, Senso-ji & Imperial Palace Gardens"
  ],
  "inclusions": [
    "4 Nights in 3\u2605 / 4\u2605 Tokyo Hotel",
    "Daily Breakfast",
    "Group AC Coach Transfers",
    "Lake Ashi Cruise & Mt Fuji Sightseeing"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Tokyo Metropolis & Mt Fuji",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Sunshine City Prince Hotel Tokyo 4\u2605",
      "city": "Tokyo",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Tokyo Narita / Haneda Arrival",
      "description": "Group arrival in Tokyo. Coach pickup to hotel. Free evening in Ikebukuro or Shinjuku.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Sunshine City Prince Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 2,
      "title": "Tokyo City Icons: Asakusa, Imperial Palace & Shibuya",
      "description": "Visit Senso-ji Temple, Nakamise street, Imperial Palace East Gardens, Odaiba Statue of Liberty, and Shibuya Crossing.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Sensoji Temple",
        "Imperial Palace",
        "Shibuya Crossing"
      ],
      "hotel": "Sunshine City Prince Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 3,
      "title": "Mt. Fuji 5th Station & Hakone Cruise",
      "description": "Full day tour to Mt. Fuji 5th Station, pirate boat cruise on Lake Ashi, and Komagatake Ropeway cable car.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Mt Fuji 5th Station",
        "Lake Ashi Cruise",
        "Ropeway Ride"
      ],
      "hotel": "Sunshine City Prince Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 4,
      "title": "Tokyo Free Shopping / Optional Disneyland",
      "description": "Day at leisure for shopping in Ginza, Akihabara electric town, or optional visit to Tokyo Disneyland.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Shopping",
        "Akihabara Walk"
      ],
      "hotel": "Sunshine City Prince Hotel",
      "transfers": "Group Coach"
    },
    {
      "dayNumber": 5,
      "title": "Tokyo Departure",
      "description": "Hotel check out and group coach transfer to Tokyo airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Group Coach"
    }
  ],
  "faqs": [
    {
      "question": "What is the price?",
      "answer": "Price is \u20b91,25,000 per person for minimum 10 pax (increased by \u20b95,000 from flyer rate \u20b91,20,000)."
    }
  ]
},
  {
  "id": "pkg-malaysia-kl-genting-batu-caves-cameron-4n5d",
  "name": "Best of Malaysia: Kuala Lumpur, Genting Highlands, Batu Caves & Cameron Highlands (4N/5D)",
  "slug": "malaysia-kl-genting-batu-caves-cameron-4n5d-package",
  "destination": "Kuala Lumpur, Genting Highlands, Batu Caves, Cameron Highlands",
  "destinationSlug": "malaysia",
  "country": "Malaysia",
  "region": "Southeast Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 46000,
  "discountPrice": 55000,
  "rating": 4.9,
  "reviewsCount": 185,
  "heroImage": "/destinations/malaysia.jpg",
  "gallery": [
    "/destinations/malaysia.jpg"
  ],
  "highlights": [
    "FREE Visa on Arrival / Entry for Indian Passport Holders",
    "Petronas Twin Towers Photo Stop & KL Tower Entrance",
    "Batu Caves Golden Murugan Statue Visit",
    "Genting Highlands Two-Way Cable Car Ride & Indoor Theme Park",
    "Cameron Highlands Tea Plantation & Strawberry Farm Excursion"
  ],
  "inclusions": [
    "3N Kuala Lumpur + 1N Cameron Highlands 3\u2605/4\u2605 Hotel Stay",
    "Daily Breakfast",
    "Two-Way Genting SkyWay Cable Car Tickets",
    "Private AC Transfers & Sightseeing Tours",
    "Airport Pick up & Drop Transfers"
  ],
  "exclusions": [
    "International Flights",
    "Tourism Tax (MYR 10/room/night payable at hotel)",
    "Personal Expenses"
  ],
  "theme": "Metropolitan & Highland Nature",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Ibis KLCC / Furama Bukit Bintang 4\u2605",
      "city": "Kuala Lumpur",
      "rating": "4 Star",
      "nights": 3
    },
    {
      "name": "Heritage Hotel Cameron Highlands 3\u2605",
      "city": "Cameron Highlands",
      "rating": "3 Star",
      "nights": 1
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Kuala Lumpur Arrival & Putrajaya Tour",
      "description": "Arrive at KLIA airport. En route tour of Putrajaya (Pink Mosque & Prime Minister Office) before KL hotel check-in.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pick up",
        "Putrajaya Tour"
      ],
      "hotel": "Ibis KLCC 4\u2605",
      "transfers": "Private AC Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Batu Caves & Genting Highlands Cable Car",
      "description": "Visit Batu Caves rainbow stairs and Murugan Temple. Proceed to Genting Cable Car station, ride skyway to Genting Highlands casino and theme park.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Batu Caves",
        "Genting Cable Car",
        "Skytropolis Park"
      ],
      "hotel": "Ibis KLCC 4\u2605",
      "transfers": "Private AC Transfer"
    },
    {
      "dayNumber": 3,
      "title": "KL City Tour & Melaka Day Excursion",
      "description": "Morning photo stop at Petronas Twin Towers, King Palace, Independence Square. Afternoon excursion to UNESCO historic Melaka city.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Petronas Twin Towers",
        "King Palace",
        "Melaka Tour"
      ],
      "hotel": "Ibis KLCC 4\u2605",
      "transfers": "Private AC Transfer"
    },
    {
      "dayNumber": 4,
      "title": "KL to Cameron Highlands Tea Estates",
      "description": "Drive up to cool Cameron Highlands. Visit BOH Tea Plantation, Strawberry Picking Farm, Lavender Garden, and Rose Valley.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "BOH Tea Estate",
        "Strawberry Farm"
      ],
      "hotel": "Heritage Hotel Cameron Highlands",
      "transfers": "Private AC Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Cameron Highlands Departure",
      "description": "Check out and drive back to KLIA airport for flight home.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private AC Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Starting price is \u20b946,000 per person (increased by \u20b95,000 from flyer rate \u20b941,000)."
    },
    {
      "question": "Is visa required for Indians in Malaysia?",
      "answer": "Malaysia provides Visa-Free Entry for Indian citizens (requires digital arrival card MDAC registration)."
    }
  ]
},
  {
  "id": "pkg-malaysia-kl-genting-batu-melaka-ipoh-cameron-5n6d",
  "name": "Malaysia Ultimate Grandeur: KL, Genting, Batu Caves, Melaka, Ipoh & Cameron (5N/6D)",
  "slug": "malaysia-kl-genting-batu-melaka-ipoh-cameron-5n6d-package",
  "destination": "Kuala Lumpur, Genting, Batu Caves, Melaka, Ipoh, Cameron Highlands",
  "destinationSlug": "malaysia",
  "country": "Malaysia",
  "region": "Southeast Asia",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 63500,
  "discountPrice": 75000,
  "rating": 4.94,
  "reviewsCount": 160,
  "heroImage": "/destinations/malaysia.jpg",
  "gallery": [
    "/destinations/malaysia.jpg"
  ],
  "highlights": [
    "FREE Visa-Free Entry for Indian Passport Holders",
    "Putrajaya Tour & KL Night Sightseeing with Petronas Towers",
    "Batu Caves Temple & Genting SkyWay Cable Car",
    "Historic UNESCO Melaka & Heritage Ipoh Cave Temples",
    "Cameron Highlands Tea Gardens & Strawberry Farms"
  ],
  "inclusions": [
    "3N Kuala Lumpur + 1N Ipoh + 1N Cameron Highlands Stay",
    "Daily Breakfast",
    "Genting SkyWay Cable Car Passes",
    "Private Sightseeing Cabs & Intercity Transfers",
    "Airport Pickup & Drop"
  ],
  "exclusions": [
    "International Flights",
    "Tourism Tax MYR 10/room/night",
    "Personal Expenses"
  ],
  "theme": "Grand Heritage & Highlands",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Novotel KLCC 4\u2605",
      "city": "Kuala Lumpur",
      "rating": "4 Star",
      "nights": 3
    },
    {
      "name": "WEIL Hotel Ipoh 4\u2605",
      "city": "Ipoh",
      "rating": "4 Star",
      "nights": 1
    },
    {
      "name": "Cameron Highlands Resort 4\u2605",
      "city": "Cameron Highlands",
      "rating": "4 Star",
      "nights": 1
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "KLIA Arrival & Putrajaya Tour",
      "description": "Airport pickup, Putrajaya administrative capital tour, hotel check-in in KL.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup",
        "Putrajaya City Tour"
      ],
      "hotel": "Novotel KLCC 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Batu Caves, Genting Highlands & KL Night Tour",
      "description": "Visit Batu Caves, cable car ride to Genting Highlands. Evening KL night tour including illumination at Petronas Towers.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Batu Caves",
        "Genting Cable Car",
        "KL Night Tour"
      ],
      "hotel": "Novotel KLCC 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "UNESCO Historic Melaka Day Excursion",
      "description": "Day trip to Melaka: A Famosa fortress, Stadthuys Red Square, St. Paul's Church, and Jonker Street walk.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Melaka Stadthuys",
        "A Famosa Fortress",
        "Jonker Street"
      ],
      "hotel": "Novotel KLCC 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "KL to Ipoh Heritage Town & Limestone Caves",
      "description": "Drive to Ipoh. Visit Kek Lok Tong limestone cave temple, Concubine Lane, and sample Ipoh white coffee.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Kek Lok Tong Cave",
        "Concubine Lane Walk"
      ],
      "hotel": "WEIL Hotel Ipoh 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Ipoh to Cameron Highlands Tea Estates",
      "description": "Drive up to Cameron Highlands. Tour BOH Tea Plantation, Mossy Forest viewpoint, and strawberry farm.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "BOH Tea Garden",
        "Mossy Forest"
      ],
      "hotel": "Cameron Highlands Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Cameron Highlands to KLIA Departure",
      "description": "Check out and private transfer to KLIA airport for flight home.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is \u20b963,500 per person (increased by \u20b95,000 from flyer rate \u20b958,500)."
    }
  ]
},
  {
  "id": "pkg-nepal-kathmandu-discovery-2n3d",
  "name": "Nepal Kathmandu Express Discovery: Pashupatinath & Swayambhunath (2N/3D)",
  "slug": "nepal-kathmandu-discovery-2n3d-package",
  "destination": "Kathmandu",
  "destinationSlug": "nepal",
  "country": "Nepal",
  "region": "South Asia",
  "isInternational": true,
  "durationDays": 3,
  "durationNights": 2,
  "startingPrice": 15000,
  "discountPrice": 19999,
  "rating": 4.85,
  "reviewsCount": 140,
  "heroImage": "/destinations/nepal.jpg",
  "gallery": [
    "/destinations/nepal.jpg"
  ],
  "highlights": [
    "Pashupatinath Temple Holy Darshan",
    "Boudhanath Stupa UNESCO World Heritage Site",
    "Swayambhunath Monkey Temple Panoramas",
    "Kathmandu Durbar Square Historic Palaces",
    "Private Airport Transfers & 3\u2605 Hotel Stay"
  ],
  "inclusions": [
    "2 Nights Stay in 3\u2605 Kathmandu Hotel",
    "Daily Breakfast",
    "Private Airport Pick up & Drop Transfers",
    "Half-Day Sightseeing Tour of Kathmandu Valley"
  ],
  "exclusions": [
    "Airfare",
    "Monument Entry Fees & Temple Donations",
    "Personal Expenses"
  ],
  "theme": "Spiritual Heritage",
  "hotelCategory": "3 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Hotel Arts Kathmandu / Royal Singi 3\u2605",
      "city": "Kathmandu",
      "rating": "3 Star",
      "nights": 2
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Kathmandu Tribhuvan Arrival",
      "description": "Meet representative at Tribhuvan International Airport (KTM). Transfer to Thamel area hotel. Evening walk in Thamel market.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup",
        "Thamel Stroll"
      ],
      "hotel": "Hotel Arts Kathmandu",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 2,
      "title": "Pashupatinath, Boudhanath & Swayambhunath Tour",
      "description": "Morning sacred darshan at Pashupatinath Temple on Bagmati river. Visit giant stupa at Boudhanath and hilltop Swayambhunath Monkey Temple.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Pashupatinath Temple",
        "Boudhanath Stupa",
        "Swayambhunath"
      ],
      "hotel": "Hotel Arts Kathmandu",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 3,
      "title": "Kathmandu Durbar Square & Airport Drop",
      "description": "Visit historic Kathmandu Durbar Square and Kumari Ghar before drop to Kathmandu airport for departure.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Durbar Square",
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Cab"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Starting price is \u20b915,000 per person (increased by \u20b95,000 from flyer rate \u20b910,000)."
    },
    {
      "question": "Do Indians need a passport/visa for Nepal?",
      "answer": "Indian nationals do NOT need a visa. Entry is granted with valid Voter ID card or Passport."
    }
  ]
},
  {
  "id": "pkg-nepal-kathmandu-patan-bhaktapur-3n4d",
  "name": "Nepal Heritage Triangle: Kathmandu, Patan & Bhaktapur Kingdom (3N/4D)",
  "slug": "nepal-kathmandu-patan-bhaktapur-3n4d-package",
  "destination": "Kathmandu, Patan, Bhaktapur",
  "destinationSlug": "nepal",
  "country": "Nepal",
  "region": "South Asia",
  "isInternational": true,
  "durationDays": 4,
  "durationNights": 3,
  "startingPrice": 20000,
  "discountPrice": 25999,
  "rating": 4.89,
  "reviewsCount": 165,
  "heroImage": "/destinations/nepal.jpg",
  "gallery": [
    "/destinations/nepal.jpg"
  ],
  "highlights": [
    "Pashupatinath Temple & Boudhanath Stupa",
    "Patan Durbar Square Golden Temple & Krishna Mandir",
    "Bhaktapur Ancient City 55-Window Palace & Nyatapola Temple",
    "Nagarkot Sunrise View of Mount Everest Range",
    "Private Transfers & 3\u2605 Hotel Stay with Breakfast"
  ],
  "inclusions": [
    "3 Nights Hotel Stay in Kathmandu 3\u2605",
    "Daily Breakfast",
    "Private Sightseeing Cabs",
    "Airport Pickup & Drop"
  ],
  "exclusions": [
    "Airfare",
    "Monument Entry Tickets",
    "Personal Expenses"
  ],
  "theme": "Ancient Kingdoms & Culture",
  "hotelCategory": "3 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Hotel Tibet / Lord Buddha 3\u2605",
      "city": "Kathmandu",
      "rating": "3 Star",
      "nights": 3
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Kathmandu Arrival",
      "description": "Airport pickup and drop to hotel. Evening at leisure.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Hotel Tibet",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 2,
      "title": "Pashupatinath, Boudhanath & Patan Durbar Square",
      "description": "Visit sacred Pashupatinath Temple, Boudhanath Stupa, and royal palace complex of Patan Durbar Square.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Pashupatinath",
        "Boudhanath",
        "Patan Durbar Square"
      ],
      "hotel": "Hotel Tibet",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 3,
      "title": "Bhaktapur Ancient City & Nagarkot Hill Viewpoint",
      "description": "Explore Bhaktapur Durbar Square (55 Window Palace, Nyatapola) and drive to Nagarkot hill station for Himalayan mountain views.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Bhaktapur City Tour",
        "Nagarkot Viewpoint"
      ],
      "hotel": "Hotel Tibet",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 4,
      "title": "Kathmandu Departure",
      "description": "Breakfast and drop to Kathmandu airport for departure flight.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Cab"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is \u20b920,000 per person (increased by \u20b95,000 from flyer rate \u20b915,000)."
    }
  ]
},
  {
  "id": "pkg-nepal-kathmandu-pokhara-4n5d",
  "name": "Nepal Golden Highlights: Kathmandu & Pokhara Annapurna Lake City (4N/5D)",
  "slug": "nepal-kathmandu-pokhara-4n5d-package",
  "destination": "Kathmandu, Pokhara",
  "destinationSlug": "nepal",
  "country": "Nepal",
  "region": "South Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 26000,
  "discountPrice": 32999,
  "rating": 4.93,
  "reviewsCount": 210,
  "heroImage": "/destinations/nepal.jpg",
  "gallery": [
    "/destinations/nepal.jpg"
  ],
  "highlights": [
    "2N Kathmandu + 2N Pokhara Scenic Lakeside",
    "Pashupatinath & Swayambhunath Temple Visits",
    "Sarangkot Himalayan Sunrise over Annapurna Range",
    "Fewa Lake Boating & Tal Barahi Island Temple",
    "Davis Falls, Gupteshwor Cave & Bindhyabasini Temple"
  ],
  "inclusions": [
    "2N Kathmandu + 2N Pokhara 3\u2605 Hotel Stay",
    "Daily Breakfast",
    "Private AC Cab for Kathmandu-Pokhara Transfers & Tours",
    "Airport Pickup & Drop"
  ],
  "exclusions": [
    "Airfare",
    "Fewa Lake Boat Charge & Entrance Fees",
    "Personal Expenses"
  ],
  "theme": "Lakes & Annapurna Mountains",
  "hotelCategory": "3 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Hotel Arts Kathmandu 3\u2605",
      "city": "Kathmandu",
      "rating": "3 Star",
      "nights": 2
    },
    {
      "name": "Hotel Barahi / Mount View Pokhara 3\u2605",
      "city": "Pokhara",
      "rating": "3 Star",
      "nights": 2
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Kathmandu Arrival",
      "description": "Airport pickup and drop to hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Hotel Arts Kathmandu",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 2,
      "title": "Kathmandu Sightseeing & Scenic Drive to Pokhara",
      "description": "Morning visits to Pashupatinath Temple and Swayambhunath. Drive to picturesque lake city Pokhara.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Pashupatinath",
        "Drive to Pokhara"
      ],
      "hotel": "Hotel Barahi Pokhara",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 3,
      "title": "Sarangkot Sunrise & Pokhara City Sightseeing",
      "description": "Early morning sunrise view from Sarangkot hill over Annapurna & Machhapuchhre. Visit Davis Falls, Gupteshwor Cave, and boat on Fewa Lake.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Sarangkot Sunrise",
        "Davis Falls",
        "Fewa Lake Boating"
      ],
      "hotel": "Hotel Barahi Pokhara",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 4,
      "title": "Pokhara to Kathmandu Scenic Drive",
      "description": "Drive back to Kathmandu (optional cable car at Manakamana en route). Check in to Kathmandu hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Drive to Kathmandu"
      ],
      "hotel": "Hotel Arts Kathmandu",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 5,
      "title": "Kathmandu Departure",
      "description": "Breakfast and transfer to airport for final departure.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Cab"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is \u20b926,000 per person (increased by \u20b95,000 from flyer rate \u20b921,000)."
    }
  ]
},
  {
  "id": "pkg-nepal-muktinath-pilgrimage-special-5n6d",
  "name": "Nepal Muktinath Holy Pilgrimage Special: Kathmandu, Pokhara & Muktinath Dham (5N/6D)",
  "slug": "nepal-muktinath-pilgrimage-special-5n6d-package",
  "destination": "Kathmandu, Pokhara, Muktinath, Jomsom",
  "destinationSlug": "nepal",
  "country": "Nepal",
  "region": "South Asia",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 37000,
  "discountPrice": 44999,
  "rating": 4.96,
  "reviewsCount": 240,
  "heroImage": "/destinations/nepal.jpg",
  "gallery": [
    "/destinations/nepal.jpg"
  ],
  "highlights": [
    "2N Kathmandu + 2N Pokhara + 1N Jomsom / Muktinath Stay",
    "Muktinath Temple 108 Bull-Headed Water Spouts Bathing",
    "Pashupatinath & Budhanilkantha Sleeping Vishnu Temple",
    "Jomsom Kali Gandaki River Valley & Shaligram Search",
    "Sarangkot Sunrise & Fewa Lake Boating"
  ],
  "inclusions": [
    "2N Kathmandu + 2N Pokhara + 1N Jomsom Hotel Stay",
    "Daily Breakfast & Dinner (MAP Plan)",
    "Pokhara \u2013 Jomsom \u2013 Muktinath 4WD Jeep / Vehicle Transfers",
    "TIMS Permit & ACAP Annapurna Conservation Area Permit",
    "Airport Transfers & Local Sightseeing Cabs"
  ],
  "exclusions": [
    "Airfare (Optional Pokhara-Jomsom Flight)",
    "Temple Donation & Horse / Pony Ride at Muktinath",
    "Personal Expenses"
  ],
  "theme": "Pilgrimage & Sacred Himalaya",
  "hotelCategory": "3 Star",
  "mealPlan": "MAP (Breakfast & Dinner)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Hotel Arts Kathmandu 3\u2605",
      "city": "Kathmandu",
      "rating": "3 Star",
      "nights": 2
    },
    {
      "name": "Hotel Barahi Pokhara 3\u2605",
      "city": "Pokhara",
      "rating": "3 Star",
      "nights": 2
    },
    {
      "name": "Hotel Majestic Jomsom 3\u2605",
      "city": "Jomsom",
      "rating": "3 Star",
      "nights": 1
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Kathmandu Arrival & Pashupatinath Evening Aarti",
      "description": "Airport pickup, transfer to hotel. Evening sacred Bagmati Ganga Aarti at Pashupatinath Temple.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "Airport Pickup",
        "Pashupatinath Aarti"
      ],
      "hotel": "Hotel Arts Kathmandu",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 2,
      "title": "Kathmandu to Pokhara Scenic Drive",
      "description": "Drive to Pokhara (en route visit Manakamana Temple via cable car). Check in to Pokhara hotel near Fewa Lake.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "Manakamana Temple",
        "Drive to Pokhara"
      ],
      "hotel": "Hotel Barahi Pokhara",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 3,
      "title": "Pokhara to Jomsom & Muktinath Darshan",
      "description": "Drive by 4WD Jeep along Kali Gandaki river canyon to Jomsom and up to Ranipuwa Muktinath. Holy bath at 108 spouts and divine darshan at Muktinath Dham.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "4WD Jeep Ride",
        "Muktinath Darshan",
        "108 Spouts Bath"
      ],
      "hotel": "Hotel Majestic Jomsom",
      "transfers": "4WD Jeep"
    },
    {
      "dayNumber": 4,
      "title": "Jomsom to Pokhara & Fewa Lake Evening",
      "description": "Search sacred Shaligram stones along Kali Gandaki river. Drive back to Pokhara for evening relaxation by Fewa Lake.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "Shaligram Search",
        "Drive to Pokhara",
        "Fewa Lake"
      ],
      "hotel": "Hotel Barahi Pokhara",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 5,
      "title": "Pokhara Sightseeing & Drive to Kathmandu",
      "description": "Visit Davis Falls, Gupteshwor Cave, and drive back to Kathmandu. Night stay in Kathmandu.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "Davis Falls",
        "Drive to Kathmandu"
      ],
      "hotel": "Hotel Arts Kathmandu",
      "transfers": "Private Cab"
    },
    {
      "dayNumber": 6,
      "title": "Budhanilkantha Sleeping Vishnu & Airport Drop",
      "description": "Visit Budhanilkantha Sleeping Vishnu Temple before drop to Kathmandu airport for departure.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Budhanilkantha Temple",
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Cab"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is \u20b937,000 per person MAP Plan (increased by \u20b95,000 from flyer rate \u20b932,000)."
    }
  ]
},
  {
  "id": "pkg-dubai-winter-sale-4n5d",
  "name": "Dubai Winter Special: City Tour, Burj Khalifa, Marina Cruise & Desert Safari (4N/5D)",
  "slug": "dubai-winter-sale-4n5d-package",
  "destination": "Dubai, Abu Dhabi",
  "destinationSlug": "dubai",
  "country": "United Arab Emirates",
  "region": "Middle East",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 54000,
  "discountPrice": 64999,
  "rating": 4.91,
  "reviewsCount": 210,
  "heroImage": "/destinations/dubai.jpg",
  "gallery": [
    "/destinations/dubai.jpg"
  ],
  "highlights": [
    "Includes UAE Tourist Visa & Private Airport Transfers",
    "Burj Khalifa 124th & 125th Floor Non-Prime Entry Pass",
    "Dubai Marina Dhow Dinner Cruise with Live Shows",
    "4x4 Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
    "Full Day Abu Dhabi City Tour with Sheikh Zayed Grand Mosque"
  ],
  "inclusions": [
    "4 Nights Accommodation in 3\u2605 / 4\u2605 Hotel",
    "Daily Breakfast",
    "UAE Tourist Visa",
    "Private Airport Pickup & Drop Transfers",
    "Half Day Dubai City Tour (SIC)",
    "Burj Khalifa 124/125th Floor Entry Ticket",
    "Marina Dhow Cruise with Dinner (SIC)",
    "Desert Safari 4x4 with BBQ Dinner & Belly Dance",
    "Full Day Abu Dhabi City Tour (SIC)"
  ],
  "exclusions": [
    "International Airfare",
    "Tourism Dirham Fee (Payable directly at hotel)",
    "Personal Expenses"
  ],
  "theme": "Winter Luxury & Desert Safari",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP + Special Dinners",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Citymax Bur Dubai / Howard Johnson 3\u2605",
      "city": "Dubai",
      "rating": "3 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Dubai Arrival & Marina Dhow Cruise Dinner",
      "description": "Arrival at Dubai International Airport (DXB). Private transfer to hotel. Evening Marina Dhow Cruise with buffet dinner, music, and light shows.",
      "meals": [
        "Dinner"
      ],
      "activities": [
        "Private Airport Transfer",
        "Marina Dhow Cruise Dinner"
      ],
      "hotel": "Citymax Bur Dubai 3\u2605",
      "transfers": "Private & SIC"
    },
    {
      "dayNumber": 2,
      "title": "Dubai City Tour & Burj Khalifa 124/125th Floor",
      "description": "Guided city tour covering Dubai Museum, Gold & Spice Souks, Jumeirah Mosque, and Burj Al Arab photo stop. Afternoon visit to Dubai Mall and Burj Khalifa observation deck.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Half Day City Tour",
        "Burj Khalifa 124/125th Floor Observation Deck",
        "Dubai Fountain Show"
      ],
      "hotel": "Citymax Bur Dubai 3\u2605",
      "transfers": "SIC Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Full Day Abu Dhabi Capital Tour",
      "description": "Full day tour to UAE capital Abu Dhabi. Visit magnificent Sheikh Zayed Grand Mosque, Corniche waterfront, Heritage Village, and view Emirates Palace.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Sheikh Zayed Mosque",
        "Abu Dhabi Corniche",
        "Heritage Village"
      ],
      "hotel": "Citymax Bur Dubai 3\u2605",
      "transfers": "SIC Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Morning Shopping & 4x4 Desert Safari",
      "description": "Morning free for shopping at Meena Bazaar. Afternoon pickup in 4x4 Land Cruiser for desert dune bashing, sandboarding, camel riding, henna painting, and BBQ buffet dinner with Tanoura dance.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "4x4 Dune Bashing",
        "Camel Ride",
        "BBQ Buffet Dinner",
        "Belly Dance"
      ],
      "hotel": "Citymax Bur Dubai 3\u2605",
      "transfers": "4x4 Shared Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Dubai Departure",
      "description": "Check out from hotel and private transfer to Dubai International Airport for departure.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Private Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Starting price for 3\u2605 hotel is \u20b954,000 per person (increased by \u20b95,000 from flyer rate \u20b949,000). 4\u2605 hotel option is \u20b960,000 per person."
    }
  ]
},
  {
  "id": "pkg-dubai-miracle-global-village-5n6d",
  "name": "Dubai Grand Winter Escape: City Tour, Burj Khalifa, Miracle Garden & Global Village (5N/6D)",
  "slug": "dubai-miracle-global-village-5n6d-package",
  "destination": "Dubai, Abu Dhabi",
  "destinationSlug": "dubai",
  "country": "United Arab Emirates",
  "region": "Middle East",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 64000,
  "discountPrice": 75999,
  "rating": 4.95,
  "reviewsCount": 195,
  "heroImage": "/destinations/dubai.jpg",
  "gallery": [
    "/destinations/dubai.jpg"
  ],
  "highlights": [
    "Includes UAE Visa & Private Airport Transfers",
    "Miracle Garden (World's Largest Flower Garden) & Global Village Private Tour",
    "Burj Khalifa 124/125th Floor Non-Prime Entry Pass",
    "Dubai Marina Dhow Cruise & 4x4 Desert Safari",
    "Full Day Abu Dhabi Grand Mosque & City Sightseeing"
  ],
  "inclusions": [
    "5 Nights Accommodation in 3\u2605 / 4\u2605 Hotel",
    "Daily Breakfast",
    "UAE Tourist Visa",
    "Private Airport Pick up & Drop Transfers",
    "Miracle Garden & Global Village Entry Tickets with Private Transfer",
    "Burj Khalifa 124/125th Floor Observation Deck Ticket",
    "Marina Dhow Cruise Dinner",
    "4x4 Desert Safari with BBQ Dinner",
    "Abu Dhabi Full Day City Tour"
  ],
  "exclusions": [
    "Airfare",
    "Tourism Dirham Fee",
    "Personal Expenses"
  ],
  "theme": "Winter Grandeur & Shopping",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP + Special Dinners",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Zabeel House / Aloft Dubai 4\u2605",
      "city": "Dubai",
      "rating": "4 Star",
      "nights": 5
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Dubai Arrival & Marina Dhow Cruise",
      "description": "Airport pickup and private transfer to hotel. Evening Marina Dhow Cruise with international buffet dinner.",
      "meals": [
        "Dinner"
      ],
      "activities": [
        "Airport Pickup",
        "Marina Dhow Cruise"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Dubai City Tour & Burj Khalifa",
      "description": "City tour covering Jumeirah Beach, Burj Al Arab, Atlantis Palm photo stop, and Burj Khalifa 124/125th floor.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "City Tour",
        "Burj Khalifa Entry"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "SIC Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Miracle Garden & Global Village Extravaganza",
      "description": "Visit iconic Miracle Garden with over 150 million blooming flowers followed by evening at Global Village cultural pavilions.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Miracle Garden",
        "Global Village"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Abu Dhabi Capital Tour",
      "description": "Full day tour to Abu Dhabi visiting Sheikh Zayed Mosque and Heritage Village.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Sheikh Zayed Mosque",
        "Abu Dhabi Tour"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "SIC Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Desert Safari with BBQ Dinner",
      "description": "Morning leisure. Afternoon 4x4 desert safari with dune bashing, camel rides, and live entertainment.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "Desert Safari",
        "BBQ Dinner"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "4x4 Shared"
    },
    {
      "dayNumber": 6,
      "title": "Dubai Departure",
      "description": "Check out and private transfer to airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Starting price for 3\u2605 is \u20b964,000 per person (increased by \u20b95,000 from flyer rate \u20b959,000). 4\u2605 hotel option is \u20b970,000 per person."
    }
  ]
},
  {
  "id": "pkg-dubai-ultimate-luxury-6n7d",
  "name": "Dubai Ultimate Explorer: City, Miracle Garden, Global Village, Abu Dhabi & Safari (6N/7D)",
  "slug": "dubai-ultimate-luxury-6n7d-package",
  "destination": "Dubai, Abu Dhabi",
  "destinationSlug": "dubai",
  "country": "United Arab Emirates",
  "region": "Middle East",
  "isInternational": true,
  "durationDays": 7,
  "durationNights": 6,
  "startingPrice": 69000,
  "discountPrice": 82000,
  "rating": 4.97,
  "reviewsCount": 230,
  "heroImage": "/destinations/dubai.jpg",
  "gallery": [
    "/destinations/dubai.jpg"
  ],
  "highlights": [
    "6 Nights Extended Leisure Stay in Dubai",
    "UAE Visa & Private Airport Pickup/Drop Included",
    "Burj Khalifa 124/125th Floor Non-Prime Ticket",
    "Miracle Garden & Global Village Private Tour",
    "Abu Dhabi Tour, Marina Dhow Cruise & 4x4 Desert Safari"
  ],
  "inclusions": [
    "6 Nights Accommodation in 3\u2605 / 4\u2605 Hotel",
    "Daily Breakfast",
    "UAE Visa",
    "Private Airport Transfers",
    "All Major Dubai & Abu Dhabi Excursions"
  ],
  "exclusions": [
    "Airfare",
    "Tourism Dirham",
    "Personal Expenses"
  ],
  "theme": "Comprehensive Arabia",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP + Special Dinners",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Millennium Plaza / Grand Excelsior 4\u2605",
      "city": "Dubai",
      "rating": "4 Star",
      "nights": 6
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Arrival & Hotel Check-in",
      "description": "Airport pickup and drop to Dubai hotel. Free evening.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Dubai City Tour & Marina Dhow Cruise",
      "description": "Morning city sightseeing tour and evening Marina Dhow Dinner Cruise.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "City Tour",
        "Marina Cruise Dinner"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "SIC Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Burj Khalifa 124/125th Floor & Dubai Mall",
      "description": "Visit Dubai Mall, Dubai Aquarium, and view Dubai from 124/125th floor of Burj Khalifa.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Burj Khalifa",
        "Dubai Mall"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "SIC Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Miracle Garden & Global Village",
      "description": "Explore colorful flower displays at Miracle Garden and global shopping pavilions at Global Village.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Miracle Garden",
        "Global Village"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Abu Dhabi Tour & Grand Mosque",
      "description": "Full day tour to Abu Dhabi visiting Sheikh Zayed Grand Mosque.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Abu Dhabi City Tour"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "SIC Transfer"
    },
    {
      "dayNumber": 6,
      "title": "4x4 Desert Safari & BBQ Dinner",
      "description": "Afternoon dune bashing in desert, camel ride, belly dance performance, and BBQ dinner.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "Desert Safari",
        "BBQ Dinner"
      ],
      "hotel": "Dubai 4\u2605 Hotel",
      "transfers": "4x4 Shared"
    },
    {
      "dayNumber": 7,
      "title": "Dubai Departure",
      "description": "Check out and private airport transfer.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Starting price for 3\u2605 is \u20b969,000 per person (increased by \u20b95,000 from flyer rate \u20b964,000). 4\u2605 hotel option is \u20b975,000 per person."
    }
  ]
},
  {
  "id": "pkg-egypt-cairo-pyramids-fayoum-3n4d",
  "name": "Egypt Pharaohs & Desert Express: Cairo, Pyramids of Giza & Fayoum Desert Safari (3N/4D)",
  "slug": "egypt-cairo-pyramids-fayoum-3n4d-package",
  "destination": "Cairo, Giza, Fayoum Oasis",
  "destinationSlug": "egypt",
  "country": "Egypt",
  "region": "North Africa / Middle East",
  "isInternational": true,
  "durationDays": 4,
  "durationNights": 3,
  "startingPrice": 49000,
  "discountPrice": 59999,
  "rating": 4.93,
  "reviewsCount": 160,
  "heroImage": "/destinations/egypt.jpg",
  "gallery": [
    "/destinations/egypt.jpg"
  ],
  "highlights": [
    "Great Pyramids of Giza, Sphinx & Grand Egyptian Museum",
    "Fayoum Desert Safari 4x4 Adventure",
    "Wadi El Hitan UNESCO Whale Valley Sand Dunes",
    "Private Guided Tour on Double Sharing Basis (Min 4 Pax)",
    "Private Airport Pickup & Drop Transfers"
  ],
  "inclusions": [
    "3 Nights Accommodation in 4\u2605 Cairo Hotel",
    "Daily Breakfast",
    "Private Guided Sightseeing with Expert Egyptologist",
    "Fayoum 4x4 Desert Safari Tour",
    "Airport Pick up & Drop Transfers"
  ],
  "exclusions": [
    "International Flights & Egypt Visa",
    "Lunch & Dinners",
    "Pyramid Interior Entry Tickets"
  ],
  "theme": "Ancient Pyramids & Desert Safari",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Steigenberger Pyramids / Concorde El Salam 4\u2605",
      "city": "Cairo",
      "rating": "4 Star",
      "nights": 3
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Cairo International Airport Arrival",
      "description": "Arrival in Cairo. Representative welcome and private hotel check-in.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Cairo 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Pyramids of Giza, Great Sphinx & Grand Egyptian Museum",
      "description": "Full day tour to iconic Pyramids of Khufu, Khafre, Menkaure, the enigma Great Sphinx, and Grand Egyptian Museum artifacts.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Pyramids of Giza",
        "Great Sphinx",
        "Grand Egyptian Museum"
      ],
      "hotel": "Cairo 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Fayoum Desert Safari & Wadi El Hitan Adventure",
      "description": "4x4 jeep adventure to Fayoum Oasis, Magic Lake, and UNESCO heritage Wadi El Hitan (Valley of Whales prehistoric fossils).",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Fayoum 4x4 Safari",
        "Wadi El Hitan",
        "Magic Lake Dunes"
      ],
      "hotel": "Cairo 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Cairo Departure",
      "description": "Hotel check out and private transfer to Cairo International Airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Starting price is \u20b949,000 per person on double sharing basis for min 4 pax (increased by \u20b95,000 from flyer rate \u20b944,000)."
    }
  ]
},
  {
  "id": "pkg-egypt-cairo-alexandria-pyramids-4n5d",
  "name": "Egypt Timeless Heritage: Cairo, Pyramids, Alexandria Mediterranean & Khan El Khalili (4N/5D)",
  "slug": "egypt-cairo-alexandria-pyramids-4n5d-package",
  "destination": "Cairo, Giza, Alexandria",
  "destinationSlug": "egypt",
  "country": "Egypt",
  "region": "North Africa / Middle East",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 54000,
  "discountPrice": 66000,
  "rating": 4.95,
  "reviewsCount": 175,
  "heroImage": "/destinations/egypt.jpg",
  "gallery": [
    "/destinations/egypt.jpg"
  ],
  "highlights": [
    "Pyramids of Giza, Sphinx & Grand Egyptian Museum",
    "Full-Day Alexandria Mediterranean Coast Excursion",
    "Citadel of Qaitbay & Catacombs of Kom El Shoqafa",
    "Old Cairo Coptic Church & Historic Khan El Khalili Bazaar",
    "Private Guided Tour on Double Sharing Basis (Min 4 Pax)"
  ],
  "inclusions": [
    "4 Nights Accommodation in 4\u2605 Cairo Hotel",
    "Daily Breakfast",
    "Full Day Alexandria Guided Tour",
    "Old Cairo & Khan El Khalili Tour",
    "Airport Pick up & Drop Transfers"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Mediterranean & Ancient Pharaohs",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Cairo Pyramids Hotel 4\u2605",
      "city": "Cairo",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Cairo Arrival",
      "description": "Airport pickup and private transfer to Cairo hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Cairo Pyramids Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Pyramids of Giza, Sphinx & Grand Museum",
      "description": "Full day tour of Pyramids complex, Sphinx statue, and Grand Egyptian Museum.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Giza Pyramids",
        "Sphinx",
        "Grand Museum"
      ],
      "hotel": "Cairo Pyramids Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Full Day Alexandria Mediterranean Coast Tour",
      "description": "Drive to Alexandria. Visit Qaitbay Citadel on sea coast, Montaza Palace Gardens, and Catacombs of Kom El Shoqafa.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Qaitbay Citadel",
        "Alexandria Library",
        "Montaza Gardens"
      ],
      "hotel": "Cairo Pyramids Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Old Cairo & Khan El Khalili Souk Shopping",
      "description": "Visit Coptic Hanging Church, Citadel of Saladin, and centuries-old Khan El Khalili market for spices and souvenirs.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Old Cairo Coptic Church",
        "Khan El Khalili Bazaar"
      ],
      "hotel": "Cairo Pyramids Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Cairo Departure",
      "description": "Hotel check out and airport drop.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Starting price is \u20b954,000 per person on double sharing for min 4 pax (increased by \u20b95,000 from flyer rate \u20b949,000)."
    }
  ]
},
  {
  "id": "pkg-egypt-nile-cruise-pharaohs-odyssey-5n6d",
  "name": "Egypt Nile Cruise & Pharaohs Odyssey: Cairo, Aswan, Kom Ombo, Edfu & Luxor (5N/6D)",
  "slug": "egypt-nile-cruise-pharaohs-odyssey-5n6d-package",
  "destination": "Cairo, Aswan, Kom Ombo, Edfu, Luxor",
  "destinationSlug": "egypt",
  "country": "Egypt",
  "region": "North Africa / Middle East",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 94000,
  "discountPrice": 112000,
  "rating": 4.98,
  "reviewsCount": 190,
  "heroImage": "/destinations/egypt.jpg",
  "gallery": [
    "/destinations/egypt.jpg"
  ],
  "highlights": [
    "Includes 3 NIGHTS Full Board Stay on Luxury Nile Cruise",
    "Pyramids of Giza, Sphinx & Grand Egyptian Museum",
    "Philae Temple of Isis in Aswan",
    "Kom Ombo Temple of Sobek & Horus Temple in Edfu",
    "Valley of the Kings, Hatshepsut Temple & Karnak Temple in Luxor"
  ],
  "inclusions": [
    "2 Nights 4\u2605 Cairo Hotel + 3 Nights 5\u2605 Luxury Nile Cruise",
    "Full Board Meals on Nile Cruise (Breakfast, Lunch & Dinner)",
    "Domestic Flight Cairo \u2013 Aswan (or Luxor)",
    "Private Guided Excursions with Egyptologist",
    "All Airport & Cruise Dock Transfers"
  ],
  "exclusions": [
    "International Flights & Egypt Visa",
    "Personal Expenses"
  ],
  "theme": "Nile River Cruise & Royal Tombs",
  "hotelCategory": "5 Star Cruise / 4 Star Hotel",
  "mealPlan": "Full Board on Cruise + CP in Cairo",
  "flightsIncluded": true,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Cairo Hotel 4\u2605",
      "city": "Cairo",
      "rating": "4 Star",
      "nights": 2
    },
    {
      "name": "Luxury 5\u2605 Nile Cruise Ship",
      "city": "Aswan to Luxor",
      "rating": "5 Star",
      "nights": 3
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Cairo Arrival & Hotel Check-in",
      "description": "Airport pickup and private transfer to Cairo hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Cairo 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Pyramids of Giza, Sphinx & Grand Egyptian Museum",
      "description": "Explore Great Pyramids, Sphinx, and Grand Egyptian Museum.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Giza Pyramids",
        "Sphinx",
        "Museum"
      ],
      "hotel": "Cairo 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Fly to Aswan, Philae Temple & Board Nile Cruise",
      "description": "Flight to Aswan. Visit Philae Temple of Goddess Isis, Aswan High Dam, and check in to 5\u2605 Nile Cruise for lunch and sailing.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Domestic Flight",
        "Philae Temple",
        "Board Cruise"
      ],
      "hotel": "5\u2605 Nile Cruise Ship",
      "transfers": "Private & Flight"
    },
    {
      "dayNumber": 4,
      "title": "Kom Ombo Temple & Sail to Edfu",
      "description": "Sail to Kom Ombo and visit dual temple dedicated to crocodile god Sobek and falcon god Haroeris. Continue sailing to Edfu.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Kom Ombo Temple",
        "Nile Sailing"
      ],
      "hotel": "5\u2605 Nile Cruise Ship",
      "transfers": "Cruise Sailing"
    },
    {
      "dayNumber": 5,
      "title": "Edfu Temple of Horus & Sail to Luxor",
      "description": "Visit well-preserved Edfu Temple of Horus by horse carriage. Sail through Esna Lock to Luxor.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Edfu Temple",
        "Esna Lock",
        "Luxor Arrival"
      ],
      "hotel": "5\u2605 Nile Cruise Ship",
      "transfers": "Cruise Sailing"
    },
    {
      "dayNumber": 6,
      "title": "Valley of the Kings, Karnak Temple & Departure",
      "description": "Disembark cruise. Explore Valley of the Kings pharaoh tombs, Queen Hatshepsut Temple, Colossi of Memnon, and Karnak Temple complex before airport drop.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Valley of Kings",
        "Karnak Temple",
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is \u20b994,000 per person on double sharing for min 4 pax (increased by \u20b95,000 from flyer rate \u20b989,000). Includes 3 nights 5\u2605 Nile Cruise with all meals and domestic Cairo-Aswan flight."
    }
  ]
},
  {
  "id": "pkg-bali-watersports-kintamani-nusa-penida-4n5d",
  "name": "Discover Magic of Bali: Watersports, Padang Padang, Kintamani & Nusa Penida (4N/5D)",
  "slug": "bali-watersports-kintamani-nusa-penida-4n5d-package",
  "destination": "Bali, Nusa Penida, Ubud, Kintamani",
  "destinationSlug": "bali",
  "country": "Indonesia",
  "region": "Southeast Asia",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 28500,
  "discountPrice": 35000,
  "rating": 4.92,
  "reviewsCount": 240,
  "heroImage": "/destinations/bali.jpg",
  "gallery": [
    "/destinations/bali.jpg"
  ],
  "highlights": [
    "Tanjung Benoa Watersports (Banana Boat, Jet Ski)",
    "Padang Padang Beach & Cliffside Uluwatu Temple",
    "Kintamani Batur Volcano Viewpoint & Tegenungan Waterfall",
    "Bali Aloha Swing Experience & Handicraft Villages",
    "Full Day Nusa Penida Island Tour with Private AC Car"
  ],
  "inclusions": [
    "4 Nights Accommodation in 4\u2605 Bali Resort",
    "Daily Breakfast",
    "Tanjung Benoa Watersports Package",
    "Full Day Nusa Penida Speedboat & Island Tour",
    "Private Airport Pickup & Drop Transfers"
  ],
  "exclusions": [
    "Airfare & Visa on Arrival (IDR 500,000 / ~Rs 2,700)",
    "Personal Expenses"
  ],
  "theme": "Tropical Beaches & Island Adventure",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Best Western Kuta / Fontana Hotel Ubud 4\u2605",
      "city": "Bali",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Bali Denpasar Arrival",
      "description": "Arrival at Ngurah Rai Airport (DPS). Warm welcome and private hotel check-in.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Bali Resort 4\u2605",
      "transfers": "Private AC Car"
    },
    {
      "dayNumber": 2,
      "title": "Watersports, Padang Padang & Uluwatu Sunset",
      "description": "Head to Tanjung Benoa beach for watersports thrills. Visit surfer haven Padang Padang Beach and Uluwatu cliff temple.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Tanjung Benoa Watersports",
        "Padang Padang Beach",
        "Uluwatu Temple Sunset"
      ],
      "hotel": "Bali Resort 4\u2605",
      "transfers": "Private AC Car"
    },
    {
      "dayNumber": 3,
      "title": "Celuk, Kintamani Volcano, Tegenungan & Bali Swing",
      "description": "Explore silver crafting at Celuk, woodcarving at Mas, Kintamani Mount Batur volcano view, Tegenungan Waterfall, and Bali Aloha Swing.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Kintamani Viewpoint",
        "Tegenungan Waterfall",
        "Bali Aloha Swing"
      ],
      "hotel": "Bali Resort 4\u2605",
      "transfers": "Private AC Car"
    },
    {
      "dayNumber": 4,
      "title": "Full Day Nusa Penida Island Day Tour",
      "description": "Fast boat ride to Nusa Penida island. Visit Kelingking T-Rex Beach, Angel's Billabong, Broken Beach, and Crystal Bay.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Nusa Penida Fast Boat",
        "Kelingking Beach",
        "Angel Billabong"
      ],
      "hotel": "Bali Resort 4\u2605",
      "transfers": "Boat & Private Island Car"
    },
    {
      "dayNumber": 5,
      "title": "Bali Departure",
      "description": "Check out and airport drop.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private AC Car"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Starting price is \u20b928,500 per person on double sharing (increased by \u20b95,000 from flyer rate \u20b923,500)."
    }
  ]
},
  {
  "id": "pkg-bali-gwk-sunset-cruise-ubud-massage-5n6d",
  "name": "Bali Luxury Panorama: GWK Park, Sunset Dinner Cruise, Rice Terraces & Balinese Massage (5N/6D)",
  "slug": "bali-gwk-sunset-cruise-ubud-massage-5n6d-package",
  "destination": "Bali, Ubud, Uluwatu",
  "destinationSlug": "bali",
  "country": "Indonesia",
  "region": "Southeast Asia",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 34500,
  "discountPrice": 42000,
  "rating": 4.96,
  "reviewsCount": 215,
  "heroImage": "/destinations/bali.jpg",
  "gallery": [
    "/destinations/bali.jpg"
  ],
  "highlights": [
    "Includes Bali Hai Sunset Dinner Cruise Experience",
    "GWK Cultural Park, Pandawa Beach & Kecak Dance",
    "Kintamani Viewpoint & Tegalalang Rice Terrace in Ubud",
    "Ulun Danu Beratan Temple & Handara Gate Photo Stop",
    "Complimentary 1-Hour Authentic Balinese Spa Massage"
  ],
  "inclusions": [
    "5 Nights Accommodation in 4\u2605 Bali Hotel / Resort",
    "Daily Breakfast",
    "Bali Hai Sunset Dinner Cruise Ticket",
    "1 Hour Balinese Massage Session",
    "Private Airport Pickup & Drop Transfers"
  ],
  "exclusions": [
    "Airfare & Visa on Arrival",
    "Personal Expenses"
  ],
  "theme": "Cultural Romance & Cruise",
  "hotelCategory": "4 Star",
  "mealPlan": "CP + Sunset Dinner",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Grand Inna Kuta / Aryaduta Bali 4\u2605",
      "city": "Bali",
      "rating": "4 Star",
      "nights": 5
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Bali Arrival",
      "description": "Airport pickup and drop to resort.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "GWK Park, Pandawa Beach, Uluwatu & Kecak Fire Dance",
      "description": "Visit giant GWK statue, turquoise Pandawa Beach, Uluwatu Temple, and witness cliffside Kecak & Fire Dance.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "GWK Statue",
        "Pandawa Beach",
        "Kecak Fire Dance"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Bali Hai Sunset Dinner Cruise",
      "description": "Day at leisure. Evening Bali Hai catamaran sunset cruise with international buffet dinner and cabaret show.",
      "meals": [
        "Breakfast",
        "Dinner"
      ],
      "activities": [
        "Sunset Dinner Cruise",
        "Cabaret Show"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Kintamani Viewpoint, Penglipuran & Tegalalang",
      "description": "Tour Kintamani Batur volcano, traditional Penglipuran Village, and Instagram-famous Tegalalang Rice Terraces.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Kintamani Volcano",
        "Penglipuran Village",
        "Tegalalang Rice Terrace"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Ulun Danu Water Temple, Handara Gate & Balinese Massage",
      "description": "Visit scenic Ulun Danu Beratan temple on Lake Beratan, Handara Iconic Gate, Ubud Market, and indulge in a 60-minute relaxing Balinese Massage.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Ulun Danu Temple",
        "Handara Gate",
        "Ubud Market",
        "Balinese Massage"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Bali Departure",
      "description": "Check out and airport drop.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is \u20b934,500 per person on double sharing (increased by \u20b95,000 from flyer rate \u20b929,500)."
    }
  ]
},
  {
  "id": "pkg-bali-ultimate-odyssey-nusa-atv-finns-6n7d",
  "name": "Bali Grand Odyssey: Suluban Beach, FINNS Beach Club, Nusa Penida Snorkeling & ATV Ride (6N/7D)",
  "slug": "bali-ultimate-odyssey-nusa-atv-finns-6n7d-package",
  "destination": "Bali, Nusa Penida, Seminyak, Ubud",
  "destinationSlug": "bali",
  "country": "Indonesia",
  "region": "Southeast Asia",
  "isInternational": true,
  "durationDays": 7,
  "durationNights": 6,
  "startingPrice": 39000,
  "discountPrice": 48000,
  "rating": 4.98,
  "reviewsCount": 260,
  "heroImage": "/destinations/bali.jpg",
  "gallery": [
    "/destinations/bali.jpg"
  ],
  "highlights": [
    "Nusa Penida Island Tour with Snorkeling at Crystal Bay",
    "FINNS Beach Club Seminyak Sunset Pass",
    "Exciting Jungle ATV Quad Bike Ride (or Bali Swing)",
    "Ulun Danu Temple, Handara Gate & Suluban Secret Beach",
    "Kintamani Volcano, Tegenungan Waterfall & Ubud Art Villages"
  ],
  "inclusions": [
    "6 Nights Accommodation in 4\u2605 Bali Resort",
    "Daily Breakfast",
    "Full Day Nusa Penida Tour + Snorkeling Gear",
    "ATV Quad Bike Adventure",
    "Private Airport & Sightseeing Transfers"
  ],
  "exclusions": [
    "Airfare & Visa on Arrival",
    "Personal Expenses"
  ],
  "theme": "Grand Adventure & Beach Club",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "The Anvaya Beach Resort / Aston Kuta 4\u2605",
      "city": "Bali",
      "rating": "4 Star",
      "nights": 6
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Bali Airport Arrival",
      "description": "Airport pickup and drop to resort.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Suluban Beach, Pandawa Beach & Uluwatu Temple",
      "description": "Explore cave-carved Suluban Beach, Ramah Barak, Pandawa Beach, and Uluwatu cliff temple.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Suluban Beach",
        "Pandawa Beach",
        "Uluwatu Temple"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Ulun Danu Temple, Handara Gate & FINNS Beach Club",
      "description": "Visit iconic lake temple Ulun Danu, Handara Gate, Seminyak stroll, and evening chill at world-famous FINNS Beach Club.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Ulun Danu Temple",
        "Handara Gate",
        "FINNS Beach Club"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Nusa Penida Tour & Coral Reef Snorkeling",
      "description": "Full day at Nusa Penida: Angel's Billabong, Broken Beach, Kelingking T-Rex Beach, and snorkeling among marine life in Crystal Bay.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Nusa Penida Fast Boat",
        "Kelingking Beach",
        "Crystal Bay Snorkeling"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Boat & Island Car"
    },
    {
      "dayNumber": 5,
      "title": "Jungle ATV Quad Bike Ride & Ubud Market",
      "description": "Thrill of 2-hour jungle & muddy trail ATV Quad Bike Ride (or optional Bali Swing). Afternoon at Ubud Art Market.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Jungle ATV Ride",
        "Ubud Market"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Celuk, Kintamani Volcano & Tegenungan Waterfall",
      "description": "Visit Celuk craft village, Kintamani Mount Batur volcano view, Tegenungan Waterfall, and Bali Aloha Swing.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Kintamani Volcano",
        "Tegenungan Waterfall",
        "Bali Swing"
      ],
      "hotel": "Bali 4\u2605 Resort",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 7,
      "title": "Bali Departure",
      "description": "Check out and airport drop.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is \u20b939,000 per person on double sharing (increased by \u20b95,000 from flyer rate \u20b934,000)."
    }
  ]
},
  {
  "id": "pkg-europe-grand-wonders-15n16d",
  "name": "Grand Wonders Of Europe: UK (London), France, Belgium, Netherlands, Germany, Switzerland, Austria, Liechtenstein, Italy & Vatican (15N/16D)",
  "slug": "europe-grand-wonders-15n16d-package",
  "destination": "London, Paris, Brussels, Amsterdam, Black Forest, Mt Titlis, Venice, Rome, Vatican",
  "destinationSlug": "europe",
  "country": "Europe Multi-Country",
  "region": "Europe",
  "isInternational": true,
  "durationDays": 16,
  "durationNights": 15,
  "startingPrice": 330000,
  "discountPrice": 380000,
  "rating": 4.98,
  "reviewsCount": 115,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "10 European Countries: UK (3N), France, Belgium, Netherlands, Germany, Switzerland, Austria, Liechtenstein, Italy & Vatican",
    "Guaranteed 4-Star Hotel Accommodations",
    "ALL MEALS INCLUDED (Daily Continental Breakfast, Indian Lunches & Dinners)",
    "All Major Sightseeing Entry Tickets & Excursions Included",
    "Driver Tips & Airport Transfers Included"
  ],
  "inclusions": [
    "15 Nights Stay in Guaranteed 4\u2605 Hotels across Europe",
    "All Meals (Daily Breakfast, Lunch & Dinner)",
    "Comprehensive Sightseeing Excursions in London, Paris, Venice, Rome & Swiss Alps",
    "Driver Tips Included",
    "London LHR Arrival & Rome FCO Departure Transfers"
  ],
  "exclusions": [
    "International Air Tickets & Schengen / UK Visas",
    "Travel Insurance",
    "Personal Expenses"
  ],
  "theme": "Grand European Panorama",
  "hotelCategory": "4 Star",
  "mealPlan": "All Meals Included (Breakfast, Lunch, Dinner)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Guaranteed 4\u2605 European Hotels",
      "city": "Multi-City Europe",
      "rating": "4 Star",
      "nights": 15
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "London Arrival",
      "description": "Arrival at London Heathrow Airport (LHR). Private/Coach transfer to guaranteed 4\u2605 hotel.",
      "meals": [
        "Dinner"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "London 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 2,
      "title": "London Guided City Tour & London Eye",
      "description": "Visit Big Ben, Tower Bridge, Buckingham Palace Changing of the Guard, and flight on London Eye.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "London City Tour",
        "London Eye"
      ],
      "hotel": "London 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Windsor Castle & Madame Tussauds",
      "description": "Excursion to royal Windsor Castle and Madame Tussauds Wax Museum.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Windsor Castle",
        "Madame Tussauds"
      ],
      "hotel": "London 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 4,
      "title": "London to Paris via Eurostar High Speed Train",
      "description": "Board Eurostar train under the English Channel to Paris. River Seine evening cruise.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Eurostar Train",
        "Seine River Cruise"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Train & Coach"
    },
    {
      "dayNumber": 5,
      "title": "Paris Eiffel Tower 3rd Level & Guided City Tour",
      "description": "Ascend to 3rd level of Eiffel Tower, Louvre Museum exterior, Arc de Triomphe, Champs-\u00c9lys\u00e9es.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Eiffel Tower 3rd Level",
        "Paris City Tour"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Disneyland Paris Magic Day",
      "description": "Full day at Disneyland Paris 1-Park pass.",
      "meals": [
        "Breakfast",
        "Packed Lunch",
        "Dinner"
      ],
      "activities": [
        "Disneyland Paris"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 7,
      "title": "Paris to Brussels & Amsterdam",
      "description": "Drive to Brussels (Grand Place, Atomium). Continue to Amsterdam.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Brussels Grand Place",
        "Atomium Photo Stop"
      ],
      "hotel": "Amsterdam 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 8,
      "title": "Amsterdam Canal Cruise & Dutch Windmills",
      "description": "Glass-topped canal boat cruise, Zaanse Schans windmills, and cheese clog factory.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Amsterdam Canal Cruise",
        "Windmill Village"
      ],
      "hotel": "Amsterdam 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 9,
      "title": "Cologne Cathedral & Rhine River Cruise (Germany)",
      "description": "Visit Gothic Cologne Cathedral in Germany and scenic Rhine river drive.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Cologne Cathedral",
        "Rhine Cruise"
      ],
      "hotel": "Germany 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 10,
      "title": "Black Forest Cuckoo Clocks to Rhine Falls & Zurich",
      "description": "Black Forest Titisee drive, witness cuckoo clock demonstration. Boat ride at Rhine Falls in Schaffhausen, Switzerland.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Titisee Black Forest",
        "Rhine Falls Boat Ride"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 11,
      "title": "Mt. Titlis Revolving Cable Car & Cliff Walk",
      "description": "Ascend Mt. Titlis on Rotair revolving cable car, Ice Flyer ride, Titlis Cliff Walk, and Lucerne Orientation.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Mt Titlis Cable Car",
        "Cliff Walk",
        "Lucerne Tour"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 12,
      "title": "Jungfraujoch Top of Europe Excursion",
      "description": "Cogwheel train ride up to Jungfraujoch Top of Europe (3,454m), Sphinx observatory, and Ice Palace.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Jungfraujoch Top of Europe",
        "Ice Palace"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach & Cogwheel Train"
    },
    {
      "dayNumber": 13,
      "title": "Vaduz (Liechtenstein) & Innsbruck (Austria)",
      "description": "Drive through Liechtenstein capital Vaduz. Visit Golden Roof in Innsbruck, Austria and Swarovski Crystal Museum.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Vaduz Orientation",
        "Innsbruck Golden Roof"
      ],
      "hotel": "Austria 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 14,
      "title": "Venice Gondola & St. Mark's Square (Italy)",
      "description": "Vaporetto boat ride to Venice island. St. Mark's Square, Bridge of Sighs, Doge's Palace, Murano Glass demo.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Venice Vaporetto Boat",
        "St Marks Square"
      ],
      "hotel": "Padova / Venice 4\u2605 Hotel",
      "transfers": "Coach & Boat"
    },
    {
      "dayNumber": 15,
      "title": "Florence Duomo & Leaning Tower of Pisa",
      "description": "Photo stop at Leaning Tower of Pisa. Guided tour of Florence renaissance treasures: Duomo, Ponte Vecchio.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Pisa Leaning Tower",
        "Florence Duomo"
      ],
      "hotel": "Rome 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 16,
      "title": "Rome Colosseum, Vatican City & Departure",
      "description": "Guided tour of Vatican City (St. Peter's Basilica) and Colosseum photo stop. Transfer to Rome FCO Airport.",
      "meals": [
        "Breakfast",
        "Lunch"
      ],
      "activities": [
        "Vatican City Tour",
        "Rome Colosseum",
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Coach Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is EUR 3600 (~\u20b93,30,000 INR) per adult on double sharing basis (increased by EUR 50 / ~\u20b95,000 from flyer rate EUR 3550). Includes guaranteed 4\u2605 hotels, all meals, and driver tips."
    }
  ]
},
  {
  "id": "pkg-europe-best-paris-rome-12n13d",
  "name": "Best of Europe: Paris to Rome via Belgium, Netherlands, Germany, Switzerland, Austria & Italy (12N/13D)",
  "slug": "europe-best-paris-rome-12n13d-package",
  "destination": "Paris, Brussels, Amsterdam, Black Forest, Mt Titlis, Venice, Florence, Rome",
  "destinationSlug": "europe",
  "country": "Europe Multi-Country",
  "region": "Europe",
  "isInternational": true,
  "durationDays": 13,
  "durationNights": 12,
  "startingPrice": 266000,
  "discountPrice": 310000,
  "rating": 4.96,
  "reviewsCount": 130,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "8 Countries: France, Belgium, Netherlands, Germany, Switzerland, Austria, Liechtenstein, Italy & Vatican",
    "Starts in Paris (CDG Airport) & Ends in Rome (FCO Airport)",
    "Guaranteed 4-Star Hotel Accommodations",
    "ALL MEALS INCLUDED (Daily Breakfast, Lunches & Dinners)",
    "Eiffel Tower 3rd Level, Mt Titlis, Venice Gondola & Vatican"
  ],
  "inclusions": [
    "12 Nights Stay in Guaranteed 4\u2605 Hotels",
    "All Meals (Breakfast, Lunches & Dinners)",
    "All Sightseeing Entry Tickets",
    "Driver Tips Included",
    "Paris CDG Arrival & Rome FCO Departure Transfers"
  ],
  "exclusions": [
    "Air Tickets & Schengen Visa",
    "Personal Expenses"
  ],
  "theme": "Classic European Tour",
  "hotelCategory": "4 Star",
  "mealPlan": "All Meals Included",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Guaranteed 4\u2605 European Hotels",
      "city": "Multi-City Europe",
      "rating": "4 Star",
      "nights": 12
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Paris CDG Arrival",
      "description": "Arrival at Paris Charles de Gaulle Airport (CDG). Transfer to hotel.",
      "meals": [
        "Dinner"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Paris Eiffel Tower 3rd Level & Seine Cruise",
      "description": "Ascend 3rd level Eiffel Tower, Paris city tour, and romantic River Seine cruise.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Eiffel Tower 3rd Level",
        "Seine River Cruise"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Disneyland Paris & Illumination Tour",
      "description": "Full day at Disneyland Paris followed by Paris by Night illumination drive.",
      "meals": [
        "Breakfast",
        "Packed Lunch",
        "Dinner"
      ],
      "activities": [
        "Disneyland Paris"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Brussels Atomium to Amsterdam",
      "description": "Drive to Brussels. Visit Mannekin Pis, Grand Place, and continue to Amsterdam.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Brussels City Tour"
      ],
      "hotel": "Amsterdam 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Amsterdam Canal Cruise & Windmills",
      "description": "Glass-topped boat cruise in Amsterdam and Zaanse Schans windmill tour.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Amsterdam Canal Cruise",
        "Windmills Tour"
      ],
      "hotel": "Amsterdam 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Cologne Cathedral & Germany Black Forest",
      "description": "Drive through Germany. Visit Gothic Cologne Cathedral and Titisee Cuckoo Clock workshop.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Cologne Cathedral",
        "Titisee Black Forest"
      ],
      "hotel": "Germany 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 7,
      "title": "Rhine Falls & Central Switzerland",
      "description": "Thrilling boat ride at Rhine Falls in Schaffhausen. Transfer to Central Switzerland hotel.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Rhine Falls Boat Ride"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 8,
      "title": "Mt. Titlis Cable Car & Lucerne",
      "description": "Rotair revolving cable car up Mt Titlis, Titlis Cliff Walk, and Lucerne city tour.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Mt Titlis Cable Car",
        "Lucerne Tour"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 9,
      "title": "Vaduz & Innsbruck (Austria)",
      "description": "Drive via Vaduz in Liechtenstein to Innsbruck, Austria. Visit Golden Roof.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Innsbruck Tour"
      ],
      "hotel": "Austria 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 10,
      "title": "Venice Canal Island Tour (Italy)",
      "description": "Vaporetto boat ride to St. Mark's Square in Venice.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Venice Canal Boat",
        "St Marks Square"
      ],
      "hotel": "Venice / Padova 4\u2605 Hotel",
      "transfers": "Coach & Boat"
    },
    {
      "dayNumber": 11,
      "title": "Pisa Leaning Tower & Florence",
      "description": "Pisa Square of Miracles photo stop and Florence historic center walk.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Leaning Tower of Pisa",
        "Florence Tour"
      ],
      "hotel": "Rome 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 12,
      "title": "Rome & Vatican City",
      "description": "Visit Vatican City (St. Peter's Basilica), Colosseum exterior, and Trevi Fountain.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Vatican Basilica",
        "Rome Colosseum"
      ],
      "hotel": "Rome 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 13,
      "title": "Rome FCO Airport Departure",
      "description": "Check out and coach drop to Rome FCO Airport by 11:00 AM.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Coach Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is EUR 2900 (~\u20b92,66,000 INR) per adult on double sharing (increased by EUR 50 / ~\u20b95,000 from flyer rate EUR 2850)."
    }
  ]
},
  {
  "id": "pkg-europe-grand-exclusive-london-rome-12n13d",
  "name": "Grand Exclusive Europe: London (2N), Paris, Switzerland, Austria & Italy (12N/13D)",
  "slug": "europe-grand-exclusive-london-rome-12n13d-package",
  "destination": "London, Paris, Engelberg, Venice, Rome",
  "destinationSlug": "europe",
  "country": "Europe Multi-Country",
  "region": "Europe",
  "isInternational": true,
  "durationDays": 13,
  "durationNights": 12,
  "startingPrice": 280000,
  "discountPrice": 325000,
  "rating": 4.97,
  "reviewsCount": 105,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "Starts in London (LHR) & Ends in Rome (FCO)",
    "5 Iconic Countries: UK (02 Nights), France, Switzerland, Austria & Italy",
    "Guaranteed 4-Star Hotel Stay with All Meals Included",
    "London Eye, Eiffel Tower, Mt. Titlis & Venice Gondola",
    "Driver Tips & Airport Transfers Included"
  ],
  "inclusions": [
    "12 Nights Stay in Guaranteed 4\u2605 Hotels",
    "All Meals (Daily Breakfast, Lunches & Dinners)",
    "All Tour Entries & Driver Tips",
    "London Airport Arrival & Rome Airport Departure Transfers"
  ],
  "exclusions": [
    "Air Tickets, UK & Schengen Visa Fees",
    "Personal Expenses"
  ],
  "theme": "Exclusive Multi-Country",
  "hotelCategory": "4 Star",
  "mealPlan": "All Meals Included",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Guaranteed 4\u2605 European Hotels",
      "city": "Multi-City Europe",
      "rating": "4 Star",
      "nights": 12
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "London Heathrow Arrival",
      "description": "Arrival at London Heathrow Airport (LHR). Transfer to 4\u2605 hotel.",
      "meals": [
        "Dinner"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "London 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 2,
      "title": "London City Tour & Flight on London Eye",
      "description": "Big Ben, Tower Bridge, Parliament, and ride on London Eye.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "London City Tour",
        "London Eye"
      ],
      "hotel": "London 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 3,
      "title": "London to Paris via Eurostar",
      "description": "High speed Eurostar train under English Channel to Paris. River Seine cruise.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Eurostar Train",
        "Seine Cruise"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Train & Coach"
    },
    {
      "dayNumber": 4,
      "title": "Paris Eiffel Tower 3rd Level & Louvre",
      "description": "3rd level of Eiffel Tower and Paris landmarks tour.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Eiffel Tower 3rd Level"
      ],
      "hotel": "Paris 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Paris to Central Switzerland",
      "description": "Drive through scenic French countryside into Switzerland.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Scenic Swiss Countryside Drive"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Mt. Titlis Cable Car & Lucerne",
      "description": "Mt Titlis Rotair revolving cable car, Titlis Cliff Walk, and Lake Lucerne orientation.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Mt Titlis Cable Car",
        "Lucerne City Tour"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 7,
      "title": "Rhine Falls & Zurich Lindt Chocolate",
      "description": "Boat ride at Rhine Falls in Schaffhausen and visit Lindt Home of Chocolate.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Rhine Falls Boat Ride",
        "Lindt Chocolate Museum"
      ],
      "hotel": "Central Switzerland 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 8,
      "title": "Innsbruck Golden Roof (Austria)",
      "description": "Drive into Austrian Alps, visit Innsbruck Old Town and Golden Roof.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Innsbruck Tour"
      ],
      "hotel": "Austria 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 9,
      "title": "Venice St. Mark's Square (Italy)",
      "description": "Boat ride to Venice island. St Mark's Basilica and Doge's Palace.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Venice Vaporetto Boat",
        "St Marks Square"
      ],
      "hotel": "Venice / Padova 4\u2605 Hotel",
      "transfers": "Coach & Boat"
    },
    {
      "dayNumber": 10,
      "title": "Pisa Leaning Tower & Florence",
      "description": "Photo stop at Leaning Tower of Pisa and Florence historic center.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Pisa Leaning Tower",
        "Florence Walk"
      ],
      "hotel": "Rome 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 11,
      "title": "Rome & Vatican City",
      "description": "Guided Vatican City St. Peter's Basilica tour and Rome Colosseum.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Vatican Basilica",
        "Rome Colosseum"
      ],
      "hotel": "Rome 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 12,
      "title": "Rome Historic Squares & Trevi Fountain",
      "description": "Stroll through Piazza Navona, Spanish Steps, and toss coin in Trevi Fountain.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Trevi Fountain",
        "Spanish Steps"
      ],
      "hotel": "Rome 4\u2605 Hotel",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 13,
      "title": "Rome FCO Departure",
      "description": "Coach drop to Rome FCO Airport by 11:00 AM for flight home.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Coach Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is EUR 3050 (~\u20b92,80,000 INR) per adult on double sharing (increased by EUR 50 / ~\u20b95,000 from flyer rate EUR 3000)."
    }
  ]
},
  {
  "id": "pkg-europe-fascinating-paris-geneva-jungfrau-7n8d",
  "name": "Fascinating Europe: Paris (3N), Geneva (1N), Jungfraujoch & Central Switzerland (3N/8D)",
  "slug": "europe-fascinating-paris-geneva-jungfrau-7n8d-package",
  "destination": "Paris, Geneva, Interlaken, Jungfraujoch, Engelberg, Zurich",
  "destinationSlug": "europe",
  "country": "France & Switzerland",
  "region": "Europe",
  "isInternational": true,
  "durationDays": 8,
  "durationNights": 7,
  "startingPrice": 211000,
  "discountPrice": 245000,
  "rating": 4.95,
  "reviewsCount": 140,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "3 Nights Paris + 1 Night Geneva + 3 Nights Central Switzerland",
    "Eiffel Tower 3rd Level, Disneyland Paris & Seine River Cruise",
    "Jungfraujoch - Top of Europe Cogwheel Train Excursion",
    "Mt. Titlis Revolving Cable Car & Cliff Walk",
    "Rhine Falls Boat Ride & Lindt Home of Chocolate Zurich"
  ],
  "inclusions": [
    "7 Nights Accommodation in 3\u2605/4\u2605 Hotels (B&B/Millennium Paris, Movenpick Geneva, Radisson Central Switzerland)",
    "Daily Buffet Breakfast",
    "6 Indian Jain/Veg/Non-Veg Lunches + 7 Indian Dinners",
    "Packed Lunch on Disneyland & Geneva Travel Days",
    "All Tour Entry Passes & Transfers"
  ],
  "exclusions": [
    "Airfare, Schengen Visa & Travel Insurance",
    "Personal Expenses"
  ],
  "theme": "France & Swiss Alpine Wonders",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "Breakfast, Lunch & Dinner Included",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "B&B / Millennium CDG 3\u2605/4\u2605",
      "city": "Paris",
      "rating": "4 Star",
      "nights": 3
    },
    {
      "name": "Everness / Movenpick Geneva 4\u2605",
      "city": "Geneva",
      "rating": "4 Star",
      "nights": 1
    },
    {
      "name": "La Maison Suisse Dottingen / Radisson 4\u2605",
      "city": "Central Switzerland",
      "rating": "4 Star",
      "nights": 3
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Paris CDG Airport Arrival",
      "description": "Arrival at Paris CDG Airport. Transfer to hotel.",
      "meals": [
        "Dinner"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Millennium CDG Paris",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Paris Eiffel Tower 3rd Level, Seine Cruise & Versailles Palace",
      "description": "Guided city tour of Paris, ascend 3rd level Eiffel Tower, Versailles Palace guided tour, and River Seine cruise.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Eiffel Tower 3rd Level",
        "Versailles Palace",
        "Seine Cruise"
      ],
      "hotel": "Millennium CDG Paris",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Full Day Disneyland Paris & Illumination Tour",
      "description": "Magic day at Disneyland Paris with packed lunch. Paris by Night illumination tour.",
      "meals": [
        "Breakfast",
        "Packed Lunch",
        "Dinner"
      ],
      "activities": [
        "Disneyland Paris",
        "Paris Illumination Tour"
      ],
      "hotel": "Millennium CDG Paris",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Paris to Geneva Orientation Tour",
      "description": "Drive south to Geneva, Switzerland. Orientation tour covering Jet d'Eau water fountain and UN headquarters.",
      "meals": [
        "Breakfast",
        "Packed Lunch",
        "Dinner"
      ],
      "activities": [
        "Geneva City Tour",
        "Jet d'Eau"
      ],
      "hotel": "Movenpick Geneva",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Geneva to Interlaken & Jungfraujoch Top of Europe",
      "description": "Drive to Interlaken. Cogwheel train ascension to Jungfraujoch Top of Europe glaciers.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Jungfraujoch Top of Europe",
        "Interlaken Tour"
      ],
      "hotel": "Radisson Central Switzerland",
      "transfers": "Coach & Train"
    },
    {
      "dayNumber": 6,
      "title": "Engelberg Mt. Titlis & Lucerne City Tour",
      "description": "World's first revolving cable car to Mt Titlis, Titlis Cliff Walk, and Lucerne city orientation.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Mt Titlis Cable Car",
        "Titlis Cliff Walk",
        "Lucerne Tour"
      ],
      "hotel": "Radisson Central Switzerland",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 7,
      "title": "Rhine Falls Boat Ride, Zurich & Lindt Chocolate",
      "description": "Rhine Falls boat ride in Schaffhausen, Zurich Lindt Home of Chocolate visit, and Bern city tour.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Rhine Falls Boat Ride",
        "Lindt Chocolate Museum",
        "Bern Tour"
      ],
      "hotel": "Radisson Central Switzerland",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 8,
      "title": "Zurich ZRH Airport Departure",
      "description": "Check out and coach drop to Zurich Airport (ZRH) by 09:00 AM.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Coach Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is EUR 2300 (~\u20b92,11,000 INR) per adult on double sharing (increased by EUR 50 / ~\u20b95,000 from flyer rate EUR 2250)."
    }
  ]
},
  {
  "id": "pkg-europe-beauty-paris-amsterdam-swiss-8n9d",
  "name": "Beauty Of Europe: Paris (3N), Brussels, Amsterdam (1N), Germany (1N) & Switzerland (3N) (8N/9D)",
  "slug": "europe-beauty-paris-amsterdam-swiss-8n9d-package",
  "destination": "Paris, Brussels, Amsterdam, Heidelberg, Interlaken, Mt Titlis, Zurich",
  "destinationSlug": "europe",
  "country": "France, Belgium, Netherlands, Germany, Switzerland",
  "region": "Europe",
  "isInternational": true,
  "durationDays": 9,
  "durationNights": 8,
  "startingPrice": 243000,
  "discountPrice": 280000,
  "rating": 4.97,
  "reviewsCount": 150,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "3N Paris + 1N Netherlands + 1N Germany + 3N Central Switzerland",
    "Eiffel Tower 3rd Level, Versailles Palace & Disneyland Paris",
    "Brussels Mini Europe, Amsterdam Canal Cruise & Windmills",
    "Heidelberg Altstadt & Titisee Black Forest Cuckoo Clocks",
    "Jungfraujoch Top of Europe, Mt. Titlis & Rhine Falls Boat Ride"
  ],
  "inclusions": [
    "8 Nights Hotel Stay in 3\u2605/4\u2605 European Hotels",
    "Daily Buffet Breakfast",
    "7 Indian Lunches + 8 Indian Dinners",
    "All Excursions & Entry Passes Included",
    "Paris CDG Arrival & Zurich ZRH Departure Transfers"
  ],
  "exclusions": [
    "Air Tickets & Schengen Visa",
    "Personal Expenses"
  ],
  "theme": "Western Europe Grand Highlights",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "Breakfast, Lunch & Dinner Included",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Millennium CDG Paris 4\u2605",
      "city": "Paris",
      "rating": "4 Star",
      "nights": 3
    },
    {
      "name": "Van der Valk Netherlands 4\u2605",
      "city": "Netherlands",
      "rating": "4 Star",
      "nights": 1
    },
    {
      "name": "Elaya Hotel Germany 4\u2605",
      "city": "Germany",
      "rating": "4 Star",
      "nights": 1
    },
    {
      "name": "Radisson Central Switzerland 4\u2605",
      "city": "Central Switzerland",
      "rating": "4 Star",
      "nights": 3
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Paris CDG Arrival",
      "description": "Arrival at Paris CDG Airport. Transfer to hotel.",
      "meals": [
        "Dinner"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Millennium CDG Paris",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Paris Eiffel Tower 3rd Level, Seine Cruise & Versailles",
      "description": "City tour, ascend 3rd level Eiffel Tower, Versailles Palace guided tour, and Seine river cruise.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Eiffel Tower 3rd Level",
        "Versailles Palace",
        "Seine Cruise"
      ],
      "hotel": "Millennium CDG Paris",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Disneyland Paris Day Tour",
      "description": "Full day at Disneyland Paris with packed lunch.",
      "meals": [
        "Breakfast",
        "Packed Lunch",
        "Dinner"
      ],
      "activities": [
        "Disneyland Paris"
      ],
      "hotel": "Millennium CDG Paris",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Brussels Mini Europe to Netherlands",
      "description": "Drive to Brussels. Entry to Mini Europe, Grand Place, Mannekin Pis. Continue to Netherlands hotel.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Mini Europe",
        "Grand Place"
      ],
      "hotel": "Van der Valk Netherlands",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Amsterdam Canal Cruise, Windmills to Germany",
      "description": "Keukenhof tulip gardens (or traditional fishing village & windmills) and Amsterdam canal cruise. Drive to Heidelberg Germany.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Amsterdam Canal Cruise",
        "Windmills Village"
      ],
      "hotel": "Elaya Hotel Germany",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Heidelberg, Titisee Black Forest to Switzerland",
      "description": "Heidelberg Altstadt tour, Church of Holy Spirit, drive to Titisee Black Forest for cuckoo clock demo. Drive to Switzerland.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Heidelberg Altstadt",
        "Titisee Black Forest"
      ],
      "hotel": "Radisson Central Switzerland",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 7,
      "title": "Rhine Falls Boat Ride & Jungfraujoch Top of Europe",
      "description": "Rhine Falls boat ride in Schaffhausen and excursion to Jungfraujoch Top of Europe.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Rhine Falls Boat Ride",
        "Jungfraujoch Top of Europe"
      ],
      "hotel": "Radisson Central Switzerland",
      "transfers": "Coach & Train"
    },
    {
      "dayNumber": 8,
      "title": "Mt. Titlis Cable Car, Lucerne & Lindt Chocolate",
      "description": "Mt Titlis revolving cable car, Titlis Cliff Walk, Lucerne orientation, and Zurich Lindt Home of Chocolate.",
      "meals": [
        "Breakfast",
        "Lunch",
        "Dinner"
      ],
      "activities": [
        "Mt Titlis Cable Car",
        "Lucerne Tour",
        "Lindt Chocolate"
      ],
      "hotel": "Radisson Central Switzerland",
      "transfers": "Coach Transfer"
    },
    {
      "dayNumber": 9,
      "title": "Zurich ZRH Airport Departure",
      "description": "Check out and coach drop to Zurich ZRH Airport by 09:00 AM.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Coach Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package price?",
      "answer": "Price is EUR 2650 (~\u20b92,43,000 INR) per adult on double sharing (increased by EUR 50 / ~\u20b95,000 from flyer rate EUR 2600)."
    }
  ]
},
  {
  "id": "pkg-armenia-yerevan-tsaghkadzor-sevan-3n4d",
  "name": "Armenia Cultural Express: Yerevan, Tsaghkadzor Ropeway & Lake Sevan (3N/4D)",
  "slug": "armenia-yerevan-tsaghkadzor-sevan-3n4d-package",
  "destination": "Yerevan, Tsaghkadzor, Lake Sevan",
  "destinationSlug": "armenia",
  "country": "Armenia",
  "region": "Caucasus",
  "isInternational": true,
  "durationDays": 4,
  "durationNights": 3,
  "startingPrice": 33000,
  "discountPrice": 39999,
  "rating": 4.9,
  "reviewsCount": 130,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "Ararat Brandy Factory Tour & Degustation Tasting",
    "Tsaghkadzor Alpine Ropeway Cable Car Ride",
    "High-Altitude Pearl Lake Sevan & Sevanavank Monastery",
    "Vernissage Open-Air Flea Market & Cascade Complex",
    "Private Transfers & 2 Bottles of Water Daily Per Pax"
  ],
  "inclusions": [
    "3 Nights Accommodation in 3\u2605 / 4\u2605 Yerevan Hotel",
    "Daily Breakfast",
    "Ararat Brandy Factory Tour & Degustation Ticket",
    "Tsaghkadzor Ropeway Ticket",
    "Private Sightseeing Tours with English Speaking Guide",
    "Private Airport Pickup & Drop Transfers (EVN)",
    "2 Water Bottles per person per day"
  ],
  "exclusions": [
    "International Flights & Armenia Visa",
    "Lunch & Dinners",
    "Personal Expenses"
  ],
  "theme": "Caucasus Heritage & Alpine Lakes",
  "hotelCategory": "3 Star / 4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Ani Grand Hotel / Opera Suite Yerevan 4\u2605",
      "city": "Yerevan",
      "rating": "4 Star",
      "nights": 3
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Yerevan Airport Arrival & Hotel Check-in",
      "description": "Arrival at Zvartnots International Airport (EVN). Private transfer to Yerevan hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Yerevan City Tour, Ararat Brandy & Vernissage",
      "description": "Guided city tour of Republic Square, Cascade Complex, Yerevan Brandy Factory ARARAT degustation tasting, and Vernissage craft market.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Republic Square",
        "ARARAT Brandy Degustation",
        "Vernissage Market"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Tsaghkadzor Ropeway & Lake Sevan Tour",
      "description": "Excursion to Tsaghkadzor ski resort, ropeway ride up Mount Teghenis, and azure Lake Sevan with Sevanavank Monastery.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Tsaghkadzor Ropeway",
        "Lake Sevan",
        "Sevanavank Monastery"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Yerevan Airport Departure",
      "description": "Check out and private transfer to EVN airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $395 USD (~\u20b933,000) per person on double sharing (increased by $60 / \u20b95,000 from flyer rate $335)."
    }
  ]
},
  {
  "id": "pkg-armenia-garni-geghard-symphony-stones-4n5d",
  "name": "Armenia Grand Wonders: Yerevan, Tsaghkadzor, Lake Sevan, Garni Temple & Geghard (4N/5D)",
  "slug": "armenia-garni-geghard-symphony-stones-4n5d-package",
  "destination": "Yerevan, Tsaghkadzor, Lake Sevan, Garni, Geghard",
  "destinationSlug": "armenia",
  "country": "Armenia",
  "region": "Caucasus",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 41000,
  "discountPrice": 49999,
  "rating": 4.94,
  "reviewsCount": 150,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "Garni Pagan Temple & UNESCO Geghard Cave Monastery",
    "Charents Arch Mount Ararat Panoramic View",
    "Symphony of Stones Basalt Canyon Wonder",
    "Ararat Brandy Factory & Tsaghkadzor Cable Car",
    "Lake Sevan & Private Guided Transfers"
  ],
  "inclusions": [
    "4 Nights Accommodation in Yerevan 4\u2605 Hotel",
    "Daily Breakfast",
    "Ararat Brandy Tour & Tasting Ticket",
    "Tsaghkadzor Ropeway Ticket",
    "Garni & Geghard Monument Entrance Fees",
    "Private Airport Pickup & Drop Transfers"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Pagan Temples & Rock Architecture",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Ani Plaza Hotel / DoubleTree Yerevan 4\u2605",
      "city": "Yerevan",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Yerevan Airport Arrival",
      "description": "Arrival at EVN Airport. Private transfer to hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Yerevan City Tour & Ararat Brandy Tasting",
      "description": "City tour, Republic Square, Ararat Brandy factory degustation, Vernissage.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Yerevan City Tour",
        "Ararat Brandy Factory"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Tsaghkadzor Ropeway & Lake Sevan",
      "description": "Tsaghkadzor ropeway cable car and Lake Sevan peninsula.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Tsaghkadzor Ropeway",
        "Lake Sevan"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Charents Arch, Garni Temple, Geghard & Symphony of Stones",
      "description": "Stop at Charents Arch, visit 1st century Garni Greco-Roman temple, UNESCO Geghard cave monastery, and Symphony of Stones canyon.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Garni Temple",
        "Geghard Monastery",
        "Symphony of Stones"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Yerevan Departure",
      "description": "Check out and private transfer to airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $490 USD (~\u20b941,000) per person on double sharing (increased by $60 / \u20b95,000 from flyer rate $430)."
    }
  ]
},
  {
  "id": "pkg-armenia-areni-wine-noravank-jermuk-5n6d",
  "name": "Armenia Complete Odyssey: Yerevan, Sevan, Garni, Areni Winery & Jermuk Resort (5N/6D)",
  "slug": "armenia-areni-wine-noravank-jermuk-5n6d-package",
  "destination": "Yerevan, Tsaghkadzor, Lake Sevan, Areni, Noravank, Jermuk",
  "destinationSlug": "armenia",
  "country": "Armenia",
  "region": "Caucasus",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 51500,
  "discountPrice": 62000,
  "rating": 4.97,
  "reviewsCount": 165,
  "heroImage": "/destinations/switzerland.jpg",
  "gallery": [
    "/destinations/switzerland.jpg"
  ],
  "highlights": [
    "6,000-Year-Old Areni-1 Cave & Areni Winery Tasting",
    "Noravank Monastery in Red Rock Canyon",
    "Jermuk Spa Resort Town & Mineral Water Waterfall",
    "Garni Temple, Geghard Monastery & Symphony of Stones",
    "Lake Sevan, Tsaghkadzor Ropeway & Ararat Brandy Factory"
  ],
  "inclusions": [
    "5 Nights Accommodation in Yerevan 4\u2605 Hotel",
    "Daily Breakfast",
    "Areni Winery Tasting Ticket",
    "Ararat Brandy Factory & Tsaghkadzor Ropeway Tickets",
    "Private Guided Sightseeing & Airport Transfers"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Wine Country & Mineral Waters",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Grand Hotel Yerevan / Radisson Blu 4\u2605/5\u2605",
      "city": "Yerevan",
      "rating": "4 Star",
      "nights": 5
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Yerevan Arrival",
      "description": "Airport pickup and drop to hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Yerevan City Tour & Ararat Brandy Factory",
      "description": "City tour, Republic Square, Ararat Brandy factory degustation.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Yerevan Tour",
        "Ararat Brandy"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Tsaghkadzor Cable Car & Lake Sevan",
      "description": "Ropeway up Tsaghkadzor and Lake Sevan peninsula.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Tsaghkadzor Ropeway",
        "Lake Sevan"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Charents Arch, Garni & Geghard Monastery",
      "description": "Garni temple, UNESCO Geghard cave monastery, Symphony of Stones.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Garni Temple",
        "Geghard Monastery"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Areni Cave, Noravank Monastery, Areni Winery & Jermuk",
      "description": "Visit Areni-1 cave, red gorge Noravank monastery, wine tasting at Areni Winery, and Jermuk mineral waterfall.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Areni Cave",
        "Noravank Monastery",
        "Areni Wine Tasting",
        "Jermuk Waterfall"
      ],
      "hotel": "Yerevan 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Yerevan Departure",
      "description": "Check out and transfer to airport.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $615 USD (~\u20b951,500) per person on double sharing (increased by $60 / \u20b95,000 from flyer rate $555)."
    }
  ]
},
  {
  "id": "pkg-baku-absheron-gabala-4n5d",
  "name": "Baku Fire & Mountains: Old City, Ateshgah Fire Temple, Yanardag & Gabala Cable Car (4N/5D)",
  "slug": "baku-absheron-gabala-4n5d-package",
  "destination": "Baku, Absheron Peninsula, Gabala",
  "destinationSlug": "baku",
  "country": "Azerbaijan",
  "region": "Caucasus",
  "isInternational": true,
  "durationDays": 5,
  "durationNights": 4,
  "startingPrice": 32500,
  "discountPrice": 39999,
  "rating": 4.92,
  "reviewsCount": 180,
  "heroImage": "/destinations/dubai.jpg",
  "gallery": [
    "/destinations/dubai.jpg"
  ],
  "highlights": [
    "Baku Old City UNESCO Icherisheher & Flame Towers Funicular Ride",
    "Ateshgah Zoroastrian Fire Temple & Yanardag Burning Mountain",
    "Tufandag Alpine Resort Gabala Cable Car Ride (2 Passes)",
    "Nohur Lake Scenic Mountain Reflection",
    "Private Transfers & English Speaking Guide"
  ],
  "inclusions": [
    "4 Nights Accommodation in 4\u2605 Baku Hotel",
    "Daily Breakfast",
    "Gabala Cable Car 2-Pass Ticket",
    "Ateshgah Fire Temple & Yanardag Entry Passes",
    "Funicular Railway Pass",
    "Private Airport Pickup & Drop Transfers (GYD)"
  ],
  "exclusions": [
    "Airfare & Azerbaijan e-Visa ($26)",
    "Lunch & Dinners",
    "Personal Expenses"
  ],
  "theme": "Land of Fire & Caucasian Alps",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Winter Park Hotel Baku / Sapphire Hotel 4\u2605",
      "city": "Baku",
      "rating": "4 Star",
      "nights": 4
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Baku Heydar Aliyev Arrival",
      "description": "Arrival at Heydar Aliyev International Airport (GYD). Private transfer to Baku hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "Winter Park Baku 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Baku Panoramic City Tour & Flame Towers",
      "description": "Explore Icherisheher Old City (Maiden Tower, Shirvanshahs Palace), Baku Boulevard, Highland Park view, and funicular railway ride.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Old City Tour",
        "Highland Park Funicular",
        "Flame Towers View"
      ],
      "hotel": "Winter Park Baku 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Full Day Gabala Mountain Resort Excursion",
      "description": "Drive to Caucasian alpine region of Gabala. Visit Nohur Lake and ride Tufandag Mountain Cable Car (2 passes).",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Gabala Cable Car",
        "Nohur Lake"
      ],
      "hotel": "Winter Park Baku 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Absheron Peninsula Fire Tour: Ateshgah & Yanardag",
      "description": "Visit Ateshgah Zoroastrian Fire Temple, natural eternal flame mountain Yanardag, and photo stop at futuristic Heydar Aliyev Center.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Fire Temple Ateshgah",
        "Yanardag Fire Mountain",
        "Heydar Aliyev Center"
      ],
      "hotel": "Winter Park Baku 4\u2605",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Baku Departure",
      "description": "Check out and private airport transfer.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Transfer"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $390 USD (~\u20b932,500) per person on double sharing (increased by $60 / \u20b95,000 from flyer rate $330)."
    }
  ]
},
  {
  "id": "pkg-baku-gabala-absheron-shopping-5n6d",
  "name": "Baku Grand Discovery: City, Gabala, Absheron Fire Tour & Shopping Experience (5N/6D)",
  "slug": "baku-gabala-absheron-shopping-5n6d-package",
  "destination": "Baku, Absheron Peninsula, Gabala",
  "destinationSlug": "baku",
  "country": "Azerbaijan",
  "region": "Caucasus",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 36000,
  "discountPrice": 44000,
  "rating": 4.95,
  "reviewsCount": 195,
  "heroImage": "/destinations/dubai.jpg",
  "gallery": [
    "/destinations/dubai.jpg"
  ],
  "highlights": [
    "5 Nights Hotel Stay in Baku Capital",
    "Nizami Street & Park Bulvar Shopping Tour",
    "Ateshgah Fire Temple & Yanardag Burning Mountain",
    "Tufandag Gabala Mountain Cable Car & Nohur Lake",
    "Old City Icherisheher & Heydar Aliyev Center"
  ],
  "inclusions": [
    "5 Nights Accommodation in 4\u2605 Baku Hotel",
    "Daily Breakfast",
    "Gabala Cable Car 2 Passes",
    "Fire Temple & Yanardag Entry Tickets",
    "Dedicated Shopping Tour Transfer",
    "Airport Pick up & Drop Transfers"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Shopping & Caucasian Heritage",
  "hotelCategory": "4 Star",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Courtyard by Marriott / Midtown Baku 4\u2605",
      "city": "Baku",
      "rating": "4 Star",
      "nights": 5
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Baku Arrival",
      "description": "Airport pickup and transfer to Baku hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Baku 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Baku Old City & Highland Park",
      "description": "Old town tour, Maiden Tower, funicular to Highland Park.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Old City Tour",
        "Highland Park"
      ],
      "hotel": "Baku 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Gabala Alpine Cable Car Tour",
      "description": "Full day tour to Gabala, Nohur Lake, and Tufandag cable car ride.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Gabala Cable Car",
        "Nohur Lake"
      ],
      "hotel": "Baku 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Absheron Fire Temple & Burning Mountain",
      "description": "Ateshgah Zoroastrian Fire Temple and Yanardag natural flame mountain.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Ateshgah Temple",
        "Yanardag Mountain"
      ],
      "hotel": "Baku 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Baku Shopping Tour & Nizami Street",
      "description": "Guided shopping tour of Ganjlik Mall, Daniz Mall, and pedestrian Nizami Street.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Nizami Street Shopping",
        "Ganjlik Mall"
      ],
      "hotel": "Baku 4\u2605 Hotel",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Baku Departure",
      "description": "Check out and airport drop.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $430 USD (~\u20b936,000) per person on double sharing (increased by $60 / \u20b95,000 from flyer rate $370)."
    }
  ]
},
  {
  "id": "pkg-baku-gabala-overnight-stay-5n6d",
  "name": "Baku & Gabala Alpine Resort Special: 3N Baku + 2N Gabala Mountain Stay (5N/6D)",
  "slug": "baku-gabala-overnight-stay-5n6d-package",
  "destination": "Baku, Gabala, Absheron",
  "destinationSlug": "baku",
  "country": "Azerbaijan",
  "region": "Caucasus",
  "isInternational": true,
  "durationDays": 6,
  "durationNights": 5,
  "startingPrice": 44000,
  "discountPrice": 52000,
  "rating": 4.98,
  "reviewsCount": 210,
  "heroImage": "/destinations/dubai.jpg",
  "gallery": [
    "/destinations/dubai.jpg"
  ],
  "highlights": [
    "Includes 2 NIGHTS OVERNIGHT STAY in Gabala Mountain Resort",
    "Baku Old City & Absheron Fire Tour Combined",
    "Tufandag Mountain Cable Car Pass & 7 Gozel Waterfalls",
    "Nohur Lake Boating & Gabaland Theme Park",
    "Complete Relaxation in Caucasian Alps"
  ],
  "inclusions": [
    "3 Nights Baku + 2 Nights Gabala 4\u2605 Resort Stay",
    "Daily Breakfast",
    "Gabala Cable Car Tickets",
    "Fire Temple & Yanardag Entry Tickets",
    "Private Intercity Transfers Baku \u2013 Gabala \u2013 Baku",
    "Airport Pick up & Drop Transfers"
  ],
  "exclusions": [
    "Airfare & Visa",
    "Personal Expenses"
  ],
  "theme": "Overnight Alpine Resort & Fire Wonders",
  "hotelCategory": "4 Star Resort",
  "mealPlan": "CP (Daily Breakfast)",
  "flightsIncluded": false,
  "transfersIncluded": true,
  "departureCity": "Flexible / Pan-India",
  "hotels": [
    {
      "name": "Winter Park Hotel 4\u2605",
      "city": "Baku",
      "rating": "4 Star",
      "nights": 3
    },
    {
      "name": "Qafqaz Riverside Resort 5\u2605 / Gabala Resort 4\u2605",
      "city": "Gabala",
      "rating": "5 Star",
      "nights": 2
    }
  ],
  "itinerary": [
    {
      "dayNumber": 1,
      "title": "Baku Arrival",
      "description": "Airport pickup and drop to Baku hotel.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Pickup"
      ],
      "hotel": "Winter Park Baku",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 2,
      "title": "Baku City Tour & Absheron Fire Peninsula",
      "description": "Full day tour combining Icherisheher Old City, Flame Towers view, Ateshgah Fire Temple, and Yanardag burning mountain.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Old City Tour",
        "Ateshgah Temple",
        "Yanardag"
      ],
      "hotel": "Winter Park Baku",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 3,
      "title": "Baku to Gabala Mountain Resort Transfer",
      "description": "Scenic drive through Shamakhi to Gabala. Check in to luxury Gabala resort.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Drive to Gabala",
        "Resort Check-in"
      ],
      "hotel": "Qafqaz Riverside Resort Gabala",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 4,
      "title": "Gabala Cable Car & 7 Gozel Waterfalls",
      "description": "Full day in Gabala: Tufandag cable car ride, 7 Gozel waterfalls, and Nohur Lake.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Tufandag Cable Car",
        "7 Gozel Waterfalls",
        "Nohur Lake"
      ],
      "hotel": "Qafqaz Riverside Resort Gabala",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 5,
      "title": "Gabala to Baku Return & Shopping",
      "description": "Drive back to Baku. Afternoon shopping at Nizami Street and souvenir markets.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Drive to Baku",
        "Nizami Street Shopping"
      ],
      "hotel": "Winter Park Baku",
      "transfers": "Private Transfer"
    },
    {
      "dayNumber": 6,
      "title": "Baku Departure",
      "description": "Check out and private airport transfer.",
      "meals": [
        "Breakfast"
      ],
      "activities": [
        "Airport Drop"
      ],
      "hotel": "N/A",
      "transfers": "Private Transfer"
    }
  ],
  "faqs": [
    {
      "question": "What is the package pricing?",
      "answer": "Price is $530 USD (~\u20b944,000) per person on double sharing (increased by $60 / \u20b95,000 from flyer rate $470). Includes 2 nights stay in luxury Gabala resort."
    }
  ]
}

];
