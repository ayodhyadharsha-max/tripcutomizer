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
  }

];
