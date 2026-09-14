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
  }
];

export const packages = DEMO_PACKAGES;