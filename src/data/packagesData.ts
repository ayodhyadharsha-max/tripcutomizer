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
  state?: string;
  stateSlug?: string;
  coveredCities?: string[];
  citySlugs?: string[];
  entryCity?: string;
  exitCity?: string;
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
    "name": "Ayodhya – Varanasi – Prayagraj Classic Heritage (4N/5D)",
    "slug": "ayodhya-varanasi-prayagraj-classic-heritage",
    "destination": "Ayodhya Varanasi Prayagraj",
    "destinationSlug": "ayodhya-varanasi",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 19900,
    "discountPrice": 24900,
    "rating": 4.9,
    "reviewsCount": 230,
    "heroImage": "/destinations/verified/ayodhya-ram-mandir.jpg",
    "gallery": [
      "/destinations/verified/ayodhya-ram-mandir.jpg"
    ],
    "highlights": [
      "2N Ayodhya: Shri Ram Janmabhoomi VIP Darshan, Kanak Bhawan & Saryu Maha Aarti",
      "Prayagraj Day Excursion: Triveni Sangam Holy Snan Boat, Reclining Bade Hanuman Ji & Anand Bhawan",
      "2N Varanasi: Subah-e-Banaras Dawn Boat, Kashi Vishwanath Corridor & Dashashwamedh Ghat Aarti",
      "Sarnath Buddhist Stupa, Sankat Mochan Temple & Banarasi Silk Weaving Tour"
    ],
    "inclusions": [
      "4 Nights 3-Star Hotel Stay (2N Ayodhya + 2N Varanasi)",
      "Daily Buffet Breakfast & Dinner at All Hotels",
      "Dedicated Private AC Cab (Sedan / Ertiga) for Complete Circuit Transfers & Sightseeing",
      "Reserved Front-Row Boat Pass for Evening Dashashwamedh Ghat Ganga Aarti",
      "Private Boat for Holy Snan at Triveni Sangam in Prayagraj",
      "All Toll Taxes, State Tourist Permits, Fuel & Driver Night Allowances Included"
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
        "name": "Hotel Ramayana / Royal Heritage Ayodhya",
        "city": "Ayodhya",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Kashi Heritage Hotel / Treebo Prime Varanasi",
        "city": "Varanasi",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ayodhya Arrival, Kanak Bhawan & Ram Ki Paidi Saryu Leisure",
        "description": "Arrive at Ayodhya Dham Airport (AYJ) / Ayodhya Junction. Meet your dedicated private chauffeur upon arrival and transfer to your hotel in Ayodhya. Complete check-in formalities and relax. In the afternoon, visit sacred Kanak Bhawan, historic Hanuman Garhi hill fort, and Dashrath Mahal. In the evening, visit Ram Ki Paidi along the tranquil Saryu riverbanks for a serene sunset walk.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Ayodhya Airport / Station Meet & Greet",
          "Hotel Check-in & Refresh",
          "Kanak Bhawan & Hanuman Garhi Darshan",
          "Dashrath Mahal Heritage Visit",
          "Ram Ki Paidi Saryu River Stroll"
        ],
        "hotel": "Hotel Ramayana / Royal Heritage Ayodhya",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Shri Ram Janmabhoomi VIP Darshan, Surya Kund & Grand Saryu Maha Aarti",
        "description": "Full day divine pilgrimage in holy Ayodhya. Early morning proceed for blessed VIP Darshan of Shri Ram Lalla at the grand Shri Ram Janmabhoomi Mandir. Explore the majestic temple complex, Sita Ki Rasoi, beautifully restored Surya Kund, and sacred Guptar Ghat. In the evening, gather at Ram Ki Paidi to witness the mesmerizing grand Saryu River Maha Aarti with thousands of illuminated earthen lamps, sacred conch sounds, and Vedic chanting.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shri Ram Janmabhoomi Mandir VIP Darshan",
          "Surya Kund Heritage Complex",
          "Guptar Ghat Saryu Riverbank Visit",
          "Ram Ki Paidi Grand Saryu River Maha Aarti Pass"
        ],
        "hotel": "Hotel Ramayana / Royal Heritage Ayodhya",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Drive Ayodhya to Prayagraj, Triveni Sangam Holy Snan & Drive to Varanasi Stay",
        "description": "After breakfast, check out from Ayodhya and embark on a comfortable private AC drive to sacred Prayagraj (approx. 3.5 hours). Board a private boat to holy Triveni Sangam—the sacred confluence of rivers Ganga, Yamuna, and mystical Saraswati—for a purifying holy dip (Snan) and prayer rituals. Visit the subterranean Bade Hanuman Ji Temple (famous reclining posture), historic Anand Bhawan (ancestral home of the Nehru family), and sacred Alopi Devi Shaktipeeth. Post lunch/afternoon, proceed on the smooth NH19 expressway to world oldest living spiritual capital Varanasi (approx. 2.5 hours). Arrive in Varanasi, check in at your hotel and relax for the evening.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Highway Drive to Prayagraj",
          "Triveni Sangam Private Boat & Holy Dip (Snan)",
          "Bade Hanuman Ji Reclining Temple Darshan",
          "Anand Bhawan Heritage Museum Tour",
          "Alopi Devi Shaktipeeth Visit",
          "Expressway Drive to Varanasi & Hotel Check-in"
        ],
        "hotel": "Kashi Heritage Hotel / Treebo Prime Varanasi",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Subah-e-Banaras Dawn Boat, Kashi Vishwanath, Sarnath & Dashashwamedh Aarti",
        "description": "Experience the ethereal Subah-e-Banaras dawn boat ride along the Ganga ghats witnessing morning rituals, sunrise reflections, and classical Vedic chants. Visit the magnificent Shri Kashi Vishwanath Jyotirlinga Temple Corridor, Annapurna Mandir, and Kaal Bhairav Temple. In the afternoon, take an excursion to sacred Sarnath where Gautama Buddha delivered his first sermon. Explore Dhamek Stupa, Chaukhandi Stupa, and the Archaeological Museum. In the evening, witness the world-famous grand Ganga Aarti at Dashashwamedh Ghat from a reserved private boat on holy River Ganges.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Subah-e-Banaras Dawn Ganges Sunrise Boat Tour",
          "Shri Kashi Vishwanath Corridor VIP Darshan",
          "Annapurna & Kaal Bhairav Temple Darshan",
          "Sarnath Buddhist Stupa & Archaeological Museum",
          "Dashashwamedh Ghat Ganga Aarti Reserved Boat Pass"
        ],
        "hotel": "Kashi Heritage Hotel / Treebo Prime Varanasi",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 5,
        "title": "Sankat Mochan Temple, BHU Vishwanath & Varanasi Departure Drop",
        "description": "Enjoy breakfast at the hotel. Visit the famous Sankat Mochan Hanuman Temple, Durga Kund, and the grand New Vishwanath Temple (BHU). Complete check-out formalities. Stroll through Godowlia bazaar for authentic Banarasi silk sarees, brass lamps, and Kashi sweets. Depending on your flight or train schedule, your private chauffeur will drop you at Varanasi Lal Bahadur Shastri International Airport (VNS) or Varanasi Cantt / Pt. Deen Dayal Upadhyaya Junction for your onward journey with divine blessings.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Sankat Mochan Hanuman Temple Darshan",
          "BHU New Vishwanath Temple Visit",
          "Banarasi Silk Saree & Souvenir Shopping",
          "Varanasi Airport / Railway Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Is VIP Ganga Aarti included?",
        "answer": "Yes, private boat front view seats included."
      }
    ],
    "coveredCities": [
      "Ayodhya",
      "Varanasi",
      "Prayagraj"
    ],
    "citySlugs": [
      "ayodhya",
      "varanasi",
      "prayagraj"
    ],
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "entryCity": "Ayodhya",
    "exitCity": "Prayagraj"
  },
  {
    "id": "pkg-up-2",
    "name": "Mathura – Vrindavan – Gokul – Barsana Weekend Bliss",
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
        "name": "The Radha Ashok / Treebo Trend Mathura",
        "city": "Mathura",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Mathura, Shri Krishna Janmabhoomi & Vishram Ghat Yamuna Aarti",
        "description": "Arrive at Mathura Junction or Delhi Airport. Meet your private chauffeur and transfer to your hotel in Mathura. Check-in and refresh. Visit the revered Shri Krishna Janmabhoomi Temple complex where Lord Krishna was born, Keshavdeo Temple, and Dwarkadhish Temple. In the evening, witness the soul-stirring Yamuna Aarti at Vishram Ghat with floating earthen lamps and Vedic chanting.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Mathura / Delhi Pickup",
          "Shri Krishna Janmabhoomi Darshan",
          "Dwarkadhish Mandir",
          "Vishram Ghat Evening Yamuna Aarti"
        ],
        "hotel": "The Radha Ashok / Treebo Trend Mathura",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Vrindavan Banke Bihari, Nidhivan & Prem Mandir Laser Show",
        "description": "Full day pilgrimage to holy Vrindavan. Begin with early morning blessings at the famous Banke Bihari Temple and Radha Vallabh Temple. Visit Nidhivan, the sacred grove where Lord Krishna is believed to perform Raas Leela every night. Post lunch, visit ISKCON Krishna Balaram Temple and conclude the evening at the magnificent white Italian marble Prem Mandir watching the divine musical fountain and laser light show.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Banke Bihari Temple VIP Darshan",
          "Nidhivan Sacred Grove Tour",
          "ISKCON Temple Kirtan",
          "Prem Mandir Musical Fountain & Laser Show"
        ],
        "hotel": "The Radha Ashok / Treebo Trend Mathura",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Gokul Raman Reti, Barsana Radha Rani Temple & Departure",
        "description": "After breakfast, excursion to Gokul to visit Raman Reti (where infant Krishna played in sand) and Chaurasi Khamba Temple. Proceed to Barsana to climb the holy steps of Shri Radha Rani Temple (Shriji Temple) atop Bhanugarh Hill for panoramic views. Relish authentic Mathura Pedas before your private transfer to Mathura Station or Delhi Airport for your return trip.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Gokul Raman Reti & Chaurasi Khamba",
          "Barsana Radha Rani Mandir Darshan",
          "Mathura Peda Souvenir Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "E-Rickshaw included?",
        "answer": "Yes, battery rickshaw pass included for Parikrama."
      }
    ],
    "coveredCities": [
      "Mathura",
      "Vrindavan",
      "Gokul",
      "Barsana"
    ],
    "citySlugs": [
      "mathura",
      "vrindavan",
      "gokul",
      "barsana"
    ],
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "entryCity": "Mathura",
    "exitCity": "Barsana"
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
    "heroImage": "/destinations/up.jpg",
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
    "hotelCategory": "3 Star",
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
        "title": "Agra Arrival, Warm Welcome & Leisure Evening",
        "description": "Arrive in Agra. Meet and greet by our dedicated travel representative upon arrival. Enjoy a comfortable private AC transfer to your hotel. Complete check-in formalities and relax after your journey. In the evening, enjoy a leisure stroll around the local market or scenic promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Arrival Transfer in Agra",
          "Hotel Check-in & Welcome Drink",
          "Evening Leisure Stroll"
        ],
        "hotel": "Courtyard Marriott Agra",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Souvenir Shopping & Departure Transfer",
        "description": "Savor a lavish morning breakfast at your hotel. Check-out and proceed for last-minute souvenir shopping at local bazaars. Later, board your private AC transfer to the airport / railway station for your onward journey home with unforgettable memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Check-out",
          "Local Souvenir Shopping",
          "Departure Airport / Station Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Is Taj Mahal closed on Friday?",
        "answer": "Yes, Taj Mahal is closed on Fridays."
      }
    ],
    "coveredCities": [
      "Agra"
    ],
    "citySlugs": [
      "agra"
    ],
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "entryCity": "Agra",
    "exitCity": "Agra"
  },
  {
    "id": "pkg-up-4",
    "name": "Lucknow – Naimisharanya – Ayodhya Pilgrimage",
    "slug": "lucknow-naimisharanya-ayodhya-pilgrimage",
    "destination": "Lucknow",
    "destinationSlug": "lucknow",
    "country": "India",
    "region": "North India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 17200,
    "discountPrice": 21500,
    "rating": 4.8,
    "reviewsCount": 110,
    "heroImage": "/destinations/verified/ayodhya-hanuman-garhi.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Lucknow",
    "hotels": [
      {
        "name": "Fortune Park / Treebo Trend Lucknow",
        "city": "Lucknow",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Ramayana / Royal Heritage Ayodhya",
        "city": "Ayodhya",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Lucknow, Bara Imambara & Hazratganj Cultural Walk",
        "description": "Arrive at Lucknow Airport (LKO) / Charbagh Railway Station. Meet your private chauffeur and transfer to your hotel. Visit the grand architectural marvel Bara Imambara with its acoustic Bhool Bhulaiya labyrinth, Chhota Imambara, and the iconic Rumi Darwaza. Spend the evening strolling through Hazratganj enjoying authentic Chikankari embroidery shopping and royal Awadhi cuisine.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Lucknow Airport / Station Pickup",
          "Bara Imambara & Bhool Bhulaiya",
          "Rumi Darwaza Photo Stop",
          "Hazratganj Cultural Walk"
        ],
        "hotel": "Fortune Park / Treebo Trend Lucknow",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Sacred Naimisharanya Teerth Yatra & Drive to Ayodhya",
        "description": "Early morning drive to holy Naimisharanya (approx. 90 km), the sacred meditation forest of 88,000 rishis. Take a holy dip at Chakra Teerth, offer prayers at Maa Lalita Devi Shaktipeeth, Vyas Gaddi where Maharishi Ved Vyas composed the 18 Puranas, and Hanuman Garhi Naimish. In the afternoon, proceed via expressway to holy Ayodhya (approx. 3 hours). Check-in and relax.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Chakra Teerth Sacred Snan",
          "Maa Lalita Devi Shaktipeeth Darshan",
          "Vyas Gaddi Meditation Spot",
          "Expressway Drive to Ayodhya"
        ],
        "hotel": "Hotel Ramayana / Royal Heritage Ayodhya",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Ayodhya Ram Janmabhoomi VIP Darshan & Saryu Maha Aarti",
        "description": "Full day spiritual experience in Shri Ram Janmabhoomi. Experience VIP Darshan at the grand Ram Mandir, visit Kanak Bhawan gifted to Mata Sita, Hanuman Garhi hill fort, and Dashrath Mahal. Afternoon visit to beautiful Surya Kund and Guptar Ghat. In the evening, attend the grand Saryu River Maha Aarti at Ram Ki Paidi surrounded by thousands of lamps and devotional music.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Ram Janmabhoomi Mandir VIP Darshan",
          "Hanuman Garhi Temple Blessings",
          "Kanak Bhawan & Dashrath Mahal",
          "Evening Saryu River Maha Aarti Pass"
        ],
        "hotel": "Hotel Ramayana / Royal Heritage Ayodhya",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Morning Temple Walk & Ayodhya / Lucknow Departure Drop",
        "description": "Enjoy breakfast at the hotel. Visit local markets for authentic Ayodhya souvenirs and sacred prasad. Check-out and enjoy a private AC transfer to Ayodhya Maharishi Valmiki Airport (AYJ) or Lucknow Airport (LKO) for your onward flight with divine memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Morning Temple Walk",
          "Souvenir & Prasad Shopping",
          "Airport / Railway Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Naimisharanya distance?",
        "answer": "2 hours drive from Lucknow."
      }
    ],
    "coveredCities": [
      "Lucknow",
      "Ayodhya",
      "Naimisharanya"
    ],
    "citySlugs": [
      "lucknow",
      "ayodhya",
      "naimisharanya"
    ],
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "entryCity": "Lucknow",
    "exitCity": "Naimisharanya"
  },
  {
    "id": "pkg-up-5",
    "name": "Varanasi – Vindhyachal – Chitrakoot Shaktipeeth Trail",
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
    "heroImage": "/destinations/verified/varanasi-ganga-aarti.jpg",
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
        "name": "Kashi Heritage Hotel / Treebo Varanasi",
        "city": "Varanasi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Tourist Bungalow / Mandakini Resort Chitrakoot",
        "city": "Chitrakoot",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Varanasi, Kashi Vishwanath & Dashashwamedh Ganga Aarti",
        "description": "Arrive at Varanasi Airport / Railway Station. Private transfer to hotel. In the afternoon, visit Shri Kashi Vishwanath Jyotirlinga Temple Corridor and Annapurna Temple. In the evening, witness the world-famous Ganga Aarti from a reserved private boat at Dashashwamedh Ghat.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Varanasi Airport / Station Pickup",
          "Kashi Vishwanath Corridor VIP Darshan",
          "Dashashwamedh Ghat Ganga Aarti Boat Pass"
        ],
        "hotel": "Kashi Heritage Hotel / Treebo Varanasi",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Vindhyachal Maa Vindhyavasini Shaktipeeth & Drive to Chitrakoot",
        "description": "After early breakfast, drive to Vindhyachal (approx. 2 hours). Offer prayers at the sacred Maa Vindhyavasini Shaktipeeth, Kali Khoh, and Ashtabhuja Temple (Trikona Parikrama). Continue drive to holy Chitrakoot (approx. 3.5 hours) where Lord Rama spent 11.5 years of exile. In the evening, attend the soothing Mandakini River Aarti at Ramghat.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Maa Vindhyavasini Shaktipeeth Darshan",
          "Kali Khoh & Ashtabhuja Temple",
          "Drive to Chitrakoot",
          "Ramghat Mandakini River Aarti"
        ],
        "hotel": "Tourist Bungalow / Mandakini Resort Chitrakoot",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Chitrakoot Holy Darshan: Kamadgiri, Gupt Godavari & Sati Anusuya",
        "description": "Perform Kamadgiri Parikrama for divine blessings. Visit the underground caves of Gupt Godavari with crystal mountain streams, Sati Anusuya Ashram nestled in dense forests, and Bharat Milap Temple. In the afternoon, return drive to Varanasi. Relax at hotel in Varanasi.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Kamadgiri Hill Parikrama",
          "Gupt Godavari Stream Caves",
          "Sati Anusuya Ashram",
          "Return Drive to Varanasi"
        ],
        "hotel": "Kashi Heritage Hotel / Treebo Varanasi",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Sankat Mochan, Sarnath & Varanasi Departure Drop",
        "description": "Morning visit to Sankat Mochan Hanuman Temple and Durga Kund. Excursion to Sarnath Dhamek Stupa and Archaeological Museum. Check-out and private transfer to Varanasi Airport / Railway Station for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Sankat Mochan Temple Darshan",
          "Sarnath Buddhist Heritage Excursion",
          "Airport / Railway Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Ropeway included?",
        "answer": "Yes, VIP ropeway passes included."
      }
    ],
    "coveredCities": [
      "Varanasi",
      "Chitrakoot",
      "Vindhyachal"
    ],
    "citySlugs": [
      "varanasi",
      "chitrakoot",
      "vindhyachal"
    ],
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "entryCity": "Varanasi",
    "exitCity": "Vindhyachal"
  },
  {
    "id": "pkg-up-6",
    "name": "Bodh Gaya – Rajgir – Nalanda – Patna Glass Skywalk Trail",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Gaya",
    "hotels": [
      {
        "name": "Hotel Bodhgaya Gautam / Treebo Bodhgaya",
        "city": "Bodh Gaya",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Maurya / Treebo Trend Patna",
        "city": "Patna",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Gaya / Bodh Gaya, Mahabodhi Temple & Bodhi Tree",
        "description": "Arrive at Gaya Airport / Railway Station. Private transfer to Bodh Gaya hotel. Visit the UNESCO World Heritage Mahabodhi Temple, the sacred Bodhi Tree where Lord Buddha attained enlightenment, the Vajrasana stone throne, and the Giant 80-Foot Buddha Statue. Evening meditation and butter lamp ceremony.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Gaya Station / Airport Pickup",
          "Mahabodhi Temple UNESCO Darshan",
          "Bodhi Tree & Meditation",
          "80-Foot Giant Buddha Statue"
        ],
        "hotel": "Hotel Bodhgaya Gautam / Treebo Bodhgaya",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Rajgir Vishwa Shanti Stupa, Glass Skywalk & Ancient Nalanda University",
        "description": "Full day excursion to historic Rajgir and Nalanda. Take the aerial ropeway to Vishwa Shanti Stupa on Ratnagiri Hill and visit Griddhakuta (Vulture's Peak). Experience the thrilling Nature Safari Glass Skywalk suspended over deep canyons. Proceed to Nalanda (UNESCO) to explore the ruins of world's first residential university dating back to 5th century CE. Return to Bodh Gaya for night stay.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Rajgir Aerial Ropeway & Vishwa Shanti Stupa",
          "Rajgir Glass Skywalk Experience",
          "Nalanda University UNESCO Ruins Tour",
          "Nalanda Archaeological Museum"
        ],
        "hotel": "Hotel Bodhgaya Gautam / Treebo Bodhgaya",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Gaya Vishnupad Temple & Drive to Historic Patna",
        "description": "Morning visit to sacred Vishnupad Temple in Gaya on the banks of Falgu River (imprint of Lord Vishnu's feet) and Mangla Gauri Shaktipeeth. Post lunch, drive to capital city Patna (approx. 3 hours). Visit Takht Sri Patna Sahib (birthplace of Guru Gobind Singh Ji) and the historic Golghar granary overlooking the Ganges.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Vishnupad Temple Holy Darshan",
          "Mangla Gauri Shaktipeeth",
          "Scenic Drive to Patna",
          "Takht Sri Patna Sahib Gurudwara"
        ],
        "hotel": "Hotel Maurya / Treebo Trend Patna",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Patna Museum & Patna Jayprakash Narayan Airport Departure Drop",
        "description": "After breakfast, visit Bihar Museum showcasing ancient Mauryan and Gupta period sculptures. Complete check-out and private transfer to Patna Airport (PAT) / Patna Junction for your onward journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Bihar Museum Guided Walk",
          "Patna Airport / Railway Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Glass Skywalk pass included?",
        "answer": "Yes, VIP entry tickets included."
      }
    ],
    "coveredCities": [
      "Bodh Gaya",
      "Patna",
      "Gaya",
      "Rajgir",
      "Nalanda"
    ],
    "citySlugs": [
      "bodh-gaya",
      "patna",
      "gaya",
      "rajgir",
      "nalanda"
    ],
    "state": "Bihar",
    "stateSlug": "bihar",
    "entryCity": "Bodh Gaya",
    "exitCity": "Nalanda"
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
    "startingPrice": 35800,
    "discountPrice": 44800,
    "rating": 4.9,
    "reviewsCount": 310,
    "heroImage": "/destinations/char-dham.jpg",
    "gallery": [
      "/destinations/up.jpg",
      "/destinations/rajasthan.jpg"
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
        "name": "Barkot Char Dham Camp / Hotel Chauhan",
        "city": "Barkot",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Gangotri Heritage / Uttarkashi Inn",
        "city": "Uttarkashi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Mandakini / Shivalik Guptkashi",
        "city": "Guptkashi",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "GMVN Tourist Bunglow / Kedarnath Guesthouse",
        "city": "Kedarnath",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Joshimath Inn / Pipalkoti Resort",
        "city": "Pipalkoti",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Snow Crest / Badrinath Heritage",
        "city": "Badrinath",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Ganga Kinare / Tapovan Resort Rishikesh",
        "city": "Rishikesh",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Haridwar / Dehradun Arrival, Transfer to Barkot via Kempty Falls",
        "description": "Pickup from Haridwar / Dehradun Airport. Drive along the scenic Yamuna Valley via Mussoorie and Kempty Falls to Barkot (2,118m). Check in at your Himalayan river camp and prepare for Yamunotri trek.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Haridwar / Dehradun Pickup",
          "Kempty Falls Scenic Stop",
          "Barkot Alpine Camp Check-in"
        ],
        "hotel": "Barkot Char Dham Camp / Hotel Chauhan",
        "transfers": "Private AC Innova / Bolero"
      },
      {
        "dayNumber": 2,
        "title": "Yamunotri Dham Darshan: Janki Chatti Trek & Surya Kund Snan",
        "description": "Drive to Janki Chatti. Trek 6 km to sacred Yamunotri Dham. Cook rice in boiling water of natural thermal spring Surya Kund, take holy bath in Divya Shila, and offer prayers at Maa Yamuna Temple. Trek back to Janki Chatti and drive back to Barkot.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Yamunotri Dham Holy Trek",
          "Surya Kund Thermal Spring Puja",
          "Maa Yamuna Temple VIP Darshan"
        ],
        "hotel": "Barkot Char Dham Camp / Hotel Chauhan",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Barkot to Uttarkashi: Kashi Vishwanath Temple & Bhagirathi Valley",
        "description": "Drive to holy town Uttarkashi on the banks of Bhagirathi River. Visit the ancient Kashi Vishwanath Temple and the massive Shakti Temple with its divine copper Trishul. Check in at hotel.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Bhagirathi Valley Drive",
          "Kashi Vishwanath Temple Darshan",
          "Shakti Mandir Trishul Puja"
        ],
        "hotel": "Hotel Gangotri Heritage / Uttarkashi Inn",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Gangotri Dham Holy Darshan, Harsil Valley & Bhagirathi Shila",
        "description": "Drive through picturesque apple orchards of Harsil Valley to holy Gangotri Dham (3,100m). Take holy dip in icy Bhagirathi River, visit Maa Ganga Temple, Submerged Shivling, and Bhagirathi Shila. Return to Uttarkashi.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Harsil Valley Apple Orchard Stop",
          "Maa Ganga Mandir VIP Darshan",
          "Bhagirathi River Holy Snan"
        ],
        "hotel": "Hotel Gangotri Heritage / Uttarkashi Inn",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 5,
        "title": "Uttarkashi to Guptkashi via Mandakini Valley",
        "description": "Scenic cross-mountain drive along the confluence of Alaknanda and Mandakini rivers towards Guptkashi. Visit ancient Ardhanarishwar Temple and Kashi Vishwanath Temple in Guptkashi. Get medical slip / biometric clearance for Kedarnath.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Cross-Valley Himalayan Drive",
          "Ardhanarishwar Temple Darshan",
          "Kedarnath Biometric Verification"
        ],
        "hotel": "Hotel Mandakini / Shivalik Guptkashi",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 6,
        "title": "Guptkashi to Kedarnath Dham Trek / Helicopter & Evening Aarti",
        "description": "Transfer to Sonprayag / Gaurikund or Phata Helipad. Trek 16 km along Mandakini River or take approved helicopter to sacred Kedarnath Dham (3,583m). Arrive at holy shrine surrounded by snow-capped Kedarnath peaks. Attend divine evening Sandhya Aarti.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sonprayag to Gaurikund Shuttle",
          "Sacred Kedarnath Mountain Trek / Heli Flight",
          "Kedarnath Evening Temple Aarti"
        ],
        "hotel": "GMVN Tourist Bunglow / Kedarnath Guesthouse",
        "transfers": "Private Mountain Vehicle & Trek/Heli"
      },
      {
        "dayNumber": 7,
        "title": "Kedarnath Dawn Abhishek Darshan & Trek Down to Guptkashi / Pipalkoti",
        "description": "Early morning witness golden sunrise over Kedarnath Dome. Attend Holy Morning Abhishek Puja at Jyotirlinga. Trek / fly down to Gaurikund. Board vehicle and proceed to Pipalkoti along Alaknanda river gorge.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Kedarnath Morning Jyotirlinga Abhishek",
          "Scenic Descent Trek to Gaurikund",
          "Transfer to Pipalkoti"
        ],
        "hotel": "Hotel Joshimath Inn / Pipalkoti Resort",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 8,
        "title": "Pipalkoti to Badrinath Dham, Mana First Village & Tapt Kund Snan",
        "description": "Drive through Joshimath to holy Badrinath Dham (3,133m). Take holy dip in natural sulphur thermal spring Tapt Kund. Experience VIP Darshan of Lord Badri Vishal. In afternoon, visit Mana village (India's first village on Tibet border), Vyas Gufa, Ganesh Gufa, and Bhim Pul over Saraswati River. Attend evening Swarna Aarti.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tapt Kund Holy Thermal Snan",
          "Shri Badrinath Vishal VIP Darshan",
          "Mana First Village & Vyas Gufa",
          "Badrinath Evening Swarna Aarti"
        ],
        "hotel": "Hotel Snow Crest / Badrinath Heritage",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 9,
        "title": "Badrinath to Rishikesh via Vishnuprayag, Nandprayag & Devprayag",
        "description": "Drive down following the holy Panch Prayags. Witness the divine confluence of rivers Alaknanda and Bhagirathi at Devprayag forming the holy Ganga. Arrive in Rishikesh by evening. Attend Ganga Aarti at Triveni Ghat.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Panch Prayag Scenic River Confluences",
          "Devprayag Sangam Photo Stop",
          "Triveni Ghat Evening Ganga Aarti"
        ],
        "hotel": "Hotel Ganga Kinare / Tapovan Resort Rishikesh",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 10,
        "title": "Rishikesh Ram Jhula, Lakshman Jhula & Dehradun / Haridwar Departure",
        "description": "Enjoy breakfast overlooking the Ganges. Visit Ram Jhula, Swarg Ashram, and local Ayurvedic bazaars. Transfer to Dehradun Airport (DED) or Haridwar Junction for departure with life-transforming blessings.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Ram Jhula & Swarg Ashram Walk",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Heli ticket support?",
        "answer": "Yes, IRCTC heli slot assistance provided."
      }
    ],
    "coveredCities": [
      "Barkot",
      "Uttarkashi",
      "Guptkashi",
      "Kedarnath",
      "Pipalkoti",
      "Badrinath",
      "Rishikesh",
      "Haridwar",
      "Gangotri",
      "Yamunotri",
      "Dehradun"
    ],
    "citySlugs": [
      "barkot",
      "uttarkashi",
      "guptkashi",
      "kedarnath",
      "pipalkoti",
      "badrinath",
      "rishikesh",
      "haridwar",
      "gangotri",
      "yamunotri",
      "dehradun"
    ],
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "entryCity": "Barkot",
    "exitCity": "Dehradun"
  },
  {
    "id": "pkg-uk-8",
    "name": "Nainital – Bhimtal – Mukteshwar – Ranikhet Lake District",
    "slug": "nainital-bhimtal-mukteshwar-ranikhet-tour",
    "destination": "Nainital",
    "destinationSlug": "nainital",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 15600,
    "discountPrice": 19500,
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
        "name": "The Manu Maharani / Treebo Nainital",
        "city": "Nainital",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Ranikhet Club / Woodsvilla Resort",
        "city": "Ranikhet",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Kathgodam / Delhi Arrival, Drive to Nainital & Naini Lake Boating",
        "description": "Pickup from Kathgodam Railway Station or Delhi. Drive through pine-scented Kumaon foothills to Nainital. Check in at hotel. Enjoy a peaceful boating session on emerald Naini Lake, visit Naina Devi Temple, and stroll along Mall Road in the evening.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Kathgodam / Delhi Pickup",
          "Naini Lake Yacht / Paddle Boating",
          "Naina Devi Shaktipeeth Darshan",
          "Mall Road Evening Walk"
        ],
        "hotel": "The Manu Maharani / Treebo Nainital",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Lake District Excursion: Bhimtal, Sattal & Naukuchiatal",
        "description": "Explore the famous lakes around Nainital. Visit Bhimtal with its island aquarium, seven interconnected freshwater lakes of Sattal surrounded by dense oak forests, and 9-cornered Naukuchiatal famous for kayaking and paragliding.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bhimtal Island Aquarium Boat Ride",
          "Sattal Kayaking & Birdwatching",
          "Naukuchiatal Adventure Sports"
        ],
        "hotel": "The Manu Maharani / Treebo Nainital",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Mukteshwar Himalayan Panorama & Drive to Queen's Meadow Ranikhet",
        "description": "Drive to scenic Mukteshwar (2,286m). Visit 350-year-old Mukteshwar Shiva Temple and Chauli Ki Jali cliff rock overhang with jaw-dropping views of Trishul and Nanda Devi peaks. Proceed to Ranikhet. Visit Chaubatia Apple Orchards and Jhula Devi Temple adorned with thousands of copper bells.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Mukteshwar Temple & Chauli Ki Jali Viewpoint",
          "Ranikhet Chaubatia Apple Orchards",
          "Jhula Devi Temple & Golf Course"
        ],
        "hotel": "Ranikhet Club / Woodsvilla Resort",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Ranikhet Golf Course Walk & Kathgodam / Delhi Departure",
        "description": "Morning walk across the high-altitude Ranikhet 9-hole golf grounds with pine views. Check-out and private transfer to Kathgodam Railway Station or Delhi Airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Golf Course Pine Forest Walk",
          "Departure Transfer to Kathgodam / Delhi"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Boating passes included?",
        "answer": "Yes, complimentary Naini Lake boating included."
      }
    ],
    "coveredCities": [
      "Nainital",
      "Ranikhet",
      "Delhi"
    ],
    "citySlugs": [
      "nainital",
      "ranikhet",
      "delhi"
    ],
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "entryCity": "Nainital",
    "exitCity": "Delhi"
  },
  {
    "id": "pkg-uk-9",
    "name": "Dehradun – Mussoorie – Dhanaulti Queen of Hills",
    "slug": "dehradun-mussoorie-dhanaulti-queen-of-hills",
    "destination": "Mussoorie",
    "destinationSlug": "mussoorie",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 21400,
    "discountPrice": 26800,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Hotel Madhuban / Treebo Trend Dehradun",
        "city": "Dehradun",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Fortune Resort Grace / Treebo Mussoorie",
        "city": "Mussoorie",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Dehradun Arrival, Robber's Cave & Sahastradhara",
        "description": "Arrive at Dehradun Jolly Grant Airport / Dehradun Railway Station. Meet your private driver. Explore Guchhupani (Robber's Cave) walking in freezing ankle-deep canyon water streams, and visit sulfur springs at Sahastradhara. Evening free in Paltan Bazaar.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dehradun Airport / Station Pickup",
          "Robbers Cave Canyon Stream Walk",
          "Sahastradhara Sulphur Spring",
          "Paltan Bazaar Walk"
        ],
        "hotel": "Hotel Madhuban / Treebo Trend Dehradun",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Scenic Climb to Mussoorie, Kempty Falls & Mall Road",
        "description": "Drive up the serpentine winding road to Queen of Hills - Mussoorie (approx. 1.5 hours). Visit cascading Kempty Falls and enjoy a refreshing splash. Take the ropeway cable car to Gun Hill (second highest point in Mussoorie) for panoramic views of Doon Valley. Evening stroll along Camel's Back Road and Library Chowk Mall Road.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Kempty Falls Splash Tour",
          "Gun Hill Ropeway Cable Car",
          "Camel's Back Road Scenic Walk",
          "Mall Road Leisure"
        ],
        "hotel": "Fortune Resort Grace / Treebo Mussoorie",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Dhanaulti Alpine Eco Park & Surkanda Devi Temple Ropeway",
        "description": "Day excursion to misty Dhanaulti (2,286m). Walk among sky-scraping deodar trees at Amber and Dhara Eco Parks. Continue to Kaddukhal and take the thrilling ropeway to sacred Surkanda Devi Temple (3,030m) with 360-degree snow-capped Garhwal Himalayan vistas.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dhanaulti Deodar Eco Park Trail",
          "Surkanda Devi Temple Mountain Ropeway",
          "Garhwal Himalayan Snow Range View"
        ],
        "hotel": "Fortune Resort Grace / Treebo Mussoorie",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Company Garden, Lal Tibba & Dehradun Departure Drop",
        "description": "Visit colorful Company Garden flower nursery and telescope view at Lal Tibba (highest point in Mussoorie). Check-out and private transfer to Dehradun Airport or Railway Station for onward journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Company Garden & Lal Tibba View",
          "Dehradun Airport / Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Dhanaulti distance?",
        "answer": "1 hour scenic drive from Mussoorie."
      }
    ],
    "coveredCities": [
      "Dehradun",
      "Mussoorie"
    ],
    "citySlugs": [
      "dehradun",
      "mussoorie"
    ],
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "entryCity": "Dehradun",
    "exitCity": "Mussoorie"
  },
  {
    "id": "pkg-uk-10",
    "name": "Haridwar – Rishikesh Ganga Aarti & Rafting Combo",
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
        "name": "Hotel Ganga Lahari / Treebo Haridwar",
        "city": "Haridwar",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Aloha On The Ganges / Treebo Rishikesh",
        "city": "Rishikesh",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Haridwar Arrival, Mansa Devi Cable Car & Har Ki Pauri Ganga Aarti",
        "description": "Arrive at Haridwar Railway Station or Dehradun Airport. Meet chauffeur and transfer to hotel. Ride the Udankhatola ropeway cable car to hilltop Mansa Devi and Chandi Devi temples. In the evening, gather at Har Ki Pauri to witness the world-renowned grand Ganga Aarti with hundreds of floating floral diyas.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Haridwar Pickup",
          "Mansa Devi Ropeway Darshan",
          "Har Ki Pauri VIP Ganga Aarti Pass"
        ],
        "hotel": "Hotel Ganga Lahari / Treebo Haridwar",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Drive to Rishikesh, Shivpuri White Water Rafting & Beatle Ashram",
        "description": "Short morning drive to Yoga Capital of the World - Rishikesh. Gear up at Shivpuri for exhilarating 16 km Grade III White Water Rafting down the holy Ganges including body surfing and cliff jumping. Check-in at resort. Afternoon visit to historic Beatles Ashram (Chaurasi Kutia) and Ram Jhula.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shivpuri to Rishikesh 16km River Rafting",
          "Cliff Jumping & Body Surfing",
          "Beatles Ashram Heritage Tour",
          "Ram Jhula Walk"
        ],
        "hotel": "Aloha On The Ganges / Treebo Rishikesh",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Triveni Ghat Dawn Puja, Lakshman Jhula & Departure",
        "description": "Morning peaceful meditation and Maha Aarti at Triveni Ghat. Walk across iconic Lakshman Jhula and visit Parmarth Niketan. Complete check-out and private transfer to Haridwar Railway Station or Dehradun Airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Triveni Ghat Dawn Meditation",
          "Lakshman Jhula & Parmarth Niketan",
          "Airport / Railway Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Rafting age limit?",
        "answer": "14 years and above for 16km rafting."
      }
    ],
    "coveredCities": [
      "Haridwar",
      "Rishikesh"
    ],
    "citySlugs": [
      "haridwar",
      "rishikesh"
    ],
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "entryCity": "Haridwar",
    "exitCity": "Rishikesh"
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
    "startingPrice": 16500,
    "discountPrice": 20500,
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Corbett Machaan Resort / Treebo Corbett",
        "city": "Jim Corbett",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival at Jim Corbett, Garjiya Devi Temple & Kosi River Walk",
        "description": "Pickup from Ramnagar Railway Station or Delhi Airport. Drive to Corbett National Park. Check-in at your forest wildlife resort. In the afternoon, visit sacred Garjiya Devi Temple perched on a massive rock in middle of Kosi River, and Corbett Museum at Dhangarhi. Evening bonfire and wildlife documentary screening at resort.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Ramnagar / Delhi Pickup",
          "Garjiya Devi Temple Visit",
          "Corbett Museum Dhangarhi",
          "Evening Wildlife Film & Bonfire"
        ],
        "hotel": "Corbett Machaan Resort / Treebo Corbett",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Open 4x4 Jeep Safari in Core Tiger Zone (Bijrani / Jhirna)",
        "description": "Early morning 4x4 open Gypsy Jeep Safari inside the core safari zone (Bijrani / Jhirna / Dhela) with an expert naturalist tracker. Spot Royal Bengal Tigers, Asian elephants, spotted deer, barking deer, and over 600 species of birds. Return to resort for breakfast. Afternoon at leisure by pool or optional second sunset safari.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Early Morning 4x4 Jeep Jungle Safari",
          "Royal Bengal Tiger Tracking",
          "Forest Bird Watching Tour",
          "Resort Pool & Nature Leisure"
        ],
        "hotel": "Corbett Machaan Resort / Treebo Corbett",
        "transfers": "4x4 Open Safari Gypsy"
      },
      {
        "dayNumber": 3,
        "title": "Morning Birding Trail, Breakfast & Ramnagar / Delhi Departure",
        "description": "Wake up to bird songs and enjoy a guided morning nature walk along Kosi riverbed. Hearty buffet breakfast. Check out and private AC transfer to Ramnagar Railway Station or Delhi Airport for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Nature Birding Trail",
          "Ramnagar / Delhi Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Jeep safari included?",
        "answer": "Yes, 1 Open Jeep safari permit and guide included."
      }
    ],
    "coveredCities": [
      "Jim Corbett",
      "Corbett",
      "Delhi"
    ],
    "citySlugs": [
      "jim-corbett",
      "corbett",
      "delhi"
    ],
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "entryCity": "Jim Corbett",
    "exitCity": "Delhi"
  },
  {
    "id": "pkg-uk-12",
    "name": "Auli – Chopta – Tungnath – Joshimath Mini Switzerland Trek",
    "slug": "auli-chopta-tungnath-joshimath-mini-switzerland",
    "destination": "Auli",
    "destinationSlug": "auli",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 20100,
    "discountPrice": 25100,
    "rating": 4.9,
    "reviewsCount": 150,
    "heroImage": "/destinations/verified/india-auli.jpg",
    "gallery": [
      "/destinations/verified/india-auli.jpg"
    ],
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
        "name": "Hotel Mount View / Joshimath Inn",
        "city": "Joshimath",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Chopta Meadows Eco Camp / Resort",
        "city": "Chopta",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Ganga Kinare / Tapovan Resort Rishikesh",
        "city": "Rishikesh",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Rishikesh / Haridwar to Joshimath via Devprayag & Rudraprayag",
        "description": "Pickup from Rishikesh / Haridwar early morning. Drive through dramatic Alaknanda river canyons visiting divine river confluences at Devprayag (Bhagirathi + Alaknanda) and Rudraprayag (Mandakini + Alaknanda). Arrive at Joshimath gateway. Check in at hotel.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Rishikesh / Haridwar Pickup",
          "Devprayag Sangam Photo Stop",
          "Scenic High Mountain Drive to Joshimath"
        ],
        "hotel": "Hotel Mount View / Joshimath Inn",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Auli Ropeway Ride, Ski Slopes & Panoramic Nanda Devi Views",
        "description": "Board the 4 km long Auli Ropeway (Asia's highest & longest cable car) from Joshimath to Auli (3,050m). Walk along pristine alpine ski slopes, visit the shimmering artificial snow reservoir lake, and soak in awe-inspiring views of Nanda Devi peak (7,816m), Kamet, and Dunagiri.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Joshimath to Auli Aerial Ropeway",
          "Auli Alpine Artificial Lake Walk",
          "Nanda Devi Himalayan Peak Panorama"
        ],
        "hotel": "Hotel Mount View / Joshimath Inn",
        "transfers": "Cable Car Ropeway"
      },
      {
        "dayNumber": 3,
        "title": "Joshimath to Chopta & Sacred Tungnath – Chandrashila Summit Trek",
        "description": "Drive to Chopta ('Mini Switzerland of India', 2,680m). Embark on the famous paved 4 km trek to Tungnath Mandir (3,680m) - the highest of Panch Kedar and world's highest Shiva temple. Energetic trekkers can continue 1.5 km further to Chandrashila Peak (4,000m) for breathtaking 360-degree Himalayan views. Overnight stay in Chopta alpine meadow camp.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Drive to Chopta Valley",
          "Tungnath World's Highest Shiva Temple Trek",
          "Chandrashila 4,000m Summit Panorama",
          "Chopta Stargazing Camp Stay"
        ],
        "hotel": "Chopta Meadows Eco Camp / Resort",
        "transfers": "Private Mountain Vehicle & Trek"
      },
      {
        "dayNumber": 4,
        "title": "Chopta to Rishikesh via Ukhimath & Evening Ganga Aarti",
        "description": "Morning descent drive from Chopta via Ukhimath (winter seat of Kedarnath) and Srinagar Garhwal to Yoga Capital Rishikesh. Check in at riverside resort. In evening, attend peaceful Ganga Aarti at Triveni Ghat.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Mountain Descent Drive",
          "Ukhimath Omkareshwar Temple Visit",
          "Rishikesh Triveni Ghat Ganga Aarti"
        ],
        "hotel": "Hotel Ganga Kinare / Tapovan Resort Rishikesh",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 5,
        "title": "Rishikesh Ram Jhula Walk & Dehradun / Haridwar Departure",
        "description": "Morning walk across Ram Jhula suspension bridge. Visit local organic tea and Ayurvedic handicraft stores. Check out and private transfer to Dehradun Airport or Haridwar Railway Station for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Ram Jhula Heritage Walk",
          "Airport / Railway Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Is Tungnath trek difficult?",
        "answer": "Moderate 3.5km trek suitable for beginners."
      }
    ],
    "coveredCities": [
      "Joshimath",
      "Chopta",
      "Rishikesh",
      "Haridwar",
      "Auli",
      "Dehradun"
    ],
    "citySlugs": [
      "joshimath",
      "chopta",
      "rishikesh",
      "haridwar",
      "auli",
      "dehradun"
    ],
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "entryCity": "Joshimath",
    "exitCity": "Dehradun"
  },
  {
    "id": "pkg-hp-13",
    "name": "Shimla – Manali – Solang – Atal Tunnel Volvo / Cab Combo",
    "slug": "shimla-manali-solang-atal-tunnel-combo",
    "destination": "Manali",
    "destinationSlug": "manali",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 34200,
    "discountPrice": 42800,
    "rating": 4.8,
    "reviewsCount": 490,
    "heroImage": "/destinations/verified/india-manali.jpg",
    "gallery": [
      "/destinations/verified/india-manali.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi",
    "hotels": [
      {
        "name": "Hotel Willow Banks / Treebo Shimla",
        "city": "Shimla",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "The Manali Inn / Snow Valley Resorts",
        "city": "Manali",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Chandigarh / Delhi to Shimla, Mall Road & Ridge Stroll",
        "description": "Pickup from Chandigarh Airport / Station or Delhi. Scenic drive ascending through Shivalik ranges to Queen of Hill Stations - Shimla (2,205m). Check-in at hotel. Evening walk at iconic Mall Road, historic Ridge, Christ Church, and Scandal Point.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Chandigarh / Delhi Pickup",
          "Shimla Hill Climb",
          "Mall Road, Ridge & Christ Church Heritage Walk"
        ],
        "hotel": "Hotel Willow Banks / Treebo Shimla",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Kufri Adventure Park, Green Valley & Jakhoo Temple Ropeway",
        "description": "Excursion to alpine Kufri (2,622m). Pass through dense Green Valley pine forests. Enjoy horse ride / yak ride to Mahasu Peak and Himalayan nature park. Afternoon return to Shimla, ride the Jakhoo Ropeway to the 108-foot Lord Hanuman Statue at Jakhoo Hill.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Green Valley Pine Forest Stop",
          "Kufri Mahasu Peak Adventure",
          "Jakhoo Temple Hill Ropeway"
        ],
        "hotel": "Hotel Willow Banks / Treebo Shimla",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Scenic Drive from Shimla to Manali via Kullu Valley & Pandoh Dam",
        "description": "Check out and drive to Manali (approx. 7 hours) alongside the roaring Beas River. Stop at picturesque Pandoh Dam, Hanogi Mata Temple, and Kullu Shawl Weaving Factory. Enjoy optional river rafting in Kullu. Arrive in Manali, check in and relax.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Pandoh Dam Scenic Viewpoint",
          "Kullu Shawl Industry Guided Tour",
          "Kullu Beas White Water Rafting Stop",
          "Manali Check-in"
        ],
        "hotel": "The Manali Inn / Snow Valley Resorts",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Atal Tunnel Engineering Marvel, Sissu Lahaul Valley & Solang Adventure",
        "description": "Drive through the 9.02 km Atal Tunnel (world's longest highway tunnel above 10,000 ft) into snow-clad Lahaul Valley. Explore Sissu Waterfall and glaciers. In afternoon, visit Solang Valley for thrilling adventure activities: paragliding, zorbing, quad biking, and cable car ride.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Atal Tunnel Engineering Drive",
          "Sissu Lahaul Valley Snow Waterfall",
          "Solang Valley Paragliding & Adventure Sports"
        ],
        "hotel": "The Manali Inn / Snow Valley Resorts",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 5,
        "title": "Manali Local Heritage: Hadimba Temple, Vashisht Hot Springs & Old Manali",
        "description": "Visit the 450-year-old wooden pagoda Hadimba Devi Temple set in giant cedar forests, Manu Temple, Tibetan Monasteries, and natural sulfur hot springs at Vashisht. Evening explore bohemian cafes and live music of Old Manali and Mall Road.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Hadimba Devi Ancient Cedar Temple",
          "Vashisht Natural Sulphur Hot Springs",
          "Old Manali Cafe Trail & Mall Road Shopping"
        ],
        "hotel": "The Manali Inn / Snow Valley Resorts",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 6,
        "title": "Breakfast & Chandigarh / Delhi Departure Drop",
        "description": "Hearty breakfast with panoramic snow peak views. Check out and private transfer to Bhuntar / Chandigarh Airport or Delhi for return journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Check-out & Transfer to Chandigarh / Delhi Airport / Station"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Atal Tunnel covered?",
        "answer": "Yes, Atal Tunnel & Solang Valley full day excursion included."
      }
    ],
    "coveredCities": [
      "Shimla",
      "Manali",
      "Kullu",
      "Kufri",
      "Solang",
      "Delhi"
    ],
    "citySlugs": [
      "shimla",
      "manali",
      "kullu",
      "kufri",
      "solang",
      "delhi"
    ],
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "entryCity": "Shimla",
    "exitCity": "Delhi"
  },
  {
    "id": "pkg-hp-14",
    "name": "Dharamshala – McLeodGanj – Dalhousie Little Tibet",
    "slug": "dharamshala-mcleodganj-dalhousie-little-tibet",
    "destination": "Dharamshala",
    "destinationSlug": "dharamshala",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 27800,
    "discountPrice": 34800,
    "rating": 4.8,
    "reviewsCount": 160,
    "heroImage": "/destinations/himachal.jpg",
    "gallery": [
      "/destinations/himachal.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Pathankot",
    "hotels": [
      {
        "name": "Fortune Park Moksha / Treebo McLeodGanj",
        "city": "Dharamshala",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Grand View Hotel / Treebo Dalhousie",
        "city": "Dalhousie",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Gaggal / Pathankot Arrival, McLeodGanj Dalai Lama Temple & Bhagsunag",
        "description": "Pickup from Gaggal Dharamshala Airport (DHM) or Pathankot Station. Drive up to Little Lhasa - McLeodGanj. Visit the spiritual residence of His Holiness the Dalai Lama at Tsuglagkhang Complex, Kalachakra Temple, and picturesque Bhagsunag Waterfall.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Pickup",
          "Dalai Lama Tsuglagkhang Complex Darshan",
          "Bhagsunag Temple & Waterfall Walk"
        ],
        "hotel": "Fortune Park Moksha / Treebo McLeodGanj",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "St. John Church, HPCA Cricket Stadium & Norbulingka Institute",
        "description": "Visit St. John in the Wilderness neo-Gothic stone church built in 1852. Head down to Dharamshala to tour the world's most scenic international HPCA Cricket Stadium with Dhauladhar mountain backdrop. Afternoon visit to Norbulingka Tibetan Cultural Institute preserving traditional thangka painting and woodcraft.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "St. John in the Wilderness Church",
          "HPCA International Cricket Stadium Tour",
          "Norbulingka Tibetan Handicraft Center"
        ],
        "hotel": "Fortune Park Moksha / Treebo McLeodGanj",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Scenic Mountain Drive to Dalhousie & Subhash Baoli",
        "description": "Check out and drive through winding pine-covered Dhauladhar mountain passes to colonial hill station Dalhousie (approx. 4 hours). Check in at heritage hotel. Afternoon visit to Subhash Baoli, Panchpula waterfalls, and sunset walk along Garam Sadak.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Valley Cross-Mountain Drive",
          "Subhash Baoli Natural Spring",
          "Panchpula Waterfalls Memorial",
          "Garam Sadak Sunset Walk"
        ],
        "hotel": "Grand View Hotel / Treebo Dalhousie",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Khajjiar 'Mini Switzerland of India' & Kalatop Wildlife Sanctuary",
        "description": "Full day excursion to saucer-shaped emerald meadow Khajjiar (1,920m). Surrounded by towering deodar forests, Khajjiar Lake features a floating island. Enjoy zorbing, horse riding, and visit 12th-century Khajji Nag Temple. Stroll through Kalatop Wildlife Sanctuary.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Khajjiar Mini Switzerland Meadow Tour",
          "Zorbing & Alpine Horse Riding",
          "Kalatop Cedar Forest Nature Trail"
        ],
        "hotel": "Grand View Hotel / Treebo Dalhousie",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 5,
        "title": "Colonial Church Walk & Pathankot / Gaggal Departure Drop",
        "description": "Visit St. John's Church and St. Francis Church. Check out and private transfer to Pathankot Cantt Railway Station or Gaggal Airport for your onward flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Colonial Heritage Walk",
          "Transfer to Pathankot / Gaggal Airport / Station"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Khajjiar distance?",
        "answer": "1 hour scenic drive from Dalhousie."
      }
    ],
    "coveredCities": [
      "Dharamshala",
      "Dalhousie"
    ],
    "citySlugs": [
      "dharamshala",
      "dalhousie"
    ],
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "entryCity": "Dharamshala",
    "exitCity": "Dalhousie"
  },
  {
    "id": "pkg-hp-15",
    "name": "Kasol – Kheerganga – Jibhi – Tirthan Offbeat Escape",
    "slug": "kasol-kheerganga-jibhi-tirthan-offbeat-escape",
    "destination": "Kasol",
    "destinationSlug": "kasol",
    "country": "India",
    "region": "Himalayas",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 15600,
    "discountPrice": 19500,
    "rating": 4.9,
    "reviewsCount": 280,
    "heroImage": "/destinations/himachal.jpg",
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
        "name": "The Hosteller Kasol / Alpine River Camp",
        "city": "Kasol",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Kheerganga Alpine Meadow Camps",
        "city": "Kheerganga",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "The Hidden Burrow / Pinewood Resort Jibhi",
        "city": "Jibhi",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bhuntar / Chandigarh to Kasol, Manikaran Sahib & Chalal Trail",
        "description": "Pickup from Bhuntar Airport / Chandigarh. Drive along Parvati River into hippie haven Kasol. Check in at riverside camp. Visit holy Manikaran Sahib Gurudwara and dip in healing natural hot water springs. Evening walk across cable suspension bridge to Chalal village for Israeli cuisine.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bhuntar / Chandigarh Pickup",
          "Manikaran Sahib Gurudwara Hot Springs",
          "Chalal Pine Forest Cafe Trail"
        ],
        "hotel": "The Hosteller Kasol / Alpine River Camp",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Barshaini to Kheerganga Trek & Natural Sulphur Hot Spring Bath",
        "description": "Drive to Barshaini. Embark on the 12 km scenic trek to Kheerganga through Rudranag waterfall, pine forests, and apple orchards. Reach the mountaintop meadow (2,960m). Soak in the heavenly natural warm sulphur pool overlooking snow peaks. Overnight in alpine camp under a star-studded sky.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Barshaini to Kheerganga Alpine Trek",
          "Rudranag Waterfall Stop",
          "Parvati Kund Natural Hot Sulphur Bath",
          "Stargazing Bonfire Camp"
        ],
        "hotel": "Kheerganga Alpine Meadow Camps",
        "transfers": "Private Vehicle & Trek"
      },
      {
        "dayNumber": 3,
        "title": "Descend to Barshaini & Drive to Fairytale Jibhi / Tirthan Valley",
        "description": "Enjoy sunrise over Parvati Valley. Trek down to Barshaini. Board private vehicle and drive through Aut tunnel into tranquil Banjar and Jibhi / Tirthan Valley. Visit cascading Jibhi Waterfall and historic 1500-year-old multi-story wooden Chehni Kothi tower. Check in at wooden riverside lodge.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Trek Down to Barshaini",
          "Scenic Drive to Banjar & Jibhi",
          "Jibhi Waterfall Wooden Bridges",
          "Chehni Kothi Heritage Tower"
        ],
        "hotel": "The Hidden Burrow / Pinewood Resort Jibhi",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Tirthan River Trout Walk & Aut / Chandigarh Departure Drop",
        "description": "Morning stroll along crystal-clear Tirthan River (UNESCO Great Himalayan National Park eco-zone). Check out and private transfer to Aut junction / Bhuntar / Chandigarh for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Tirthan River Walk & Trout Spotting",
          "Transfer to Aut / Chandigarh / Delhi"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Kheerganga trek length?",
        "answer": "12km scenic forest trek with hot spring top camp."
      }
    ],
    "coveredCities": [
      "Kasol",
      "Kheerganga",
      "Jibhi"
    ],
    "citySlugs": [
      "kasol",
      "kheerganga",
      "jibhi"
    ],
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "entryCity": "Kasol",
    "exitCity": "Jibhi"
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
    "startingPrice": 44600,
    "discountPrice": 55800,
    "rating": 4.9,
    "reviewsCount": 210,
    "heroImage": "/destinations/adventure.jpg",
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
        "name": "The Grand Shambala / Echor Kalpa",
        "city": "Kalpa",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Spiti Heritage / Deyzor Kaza",
        "city": "Kaza",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Chandratal Lake Deluxe Alpine Camp",
        "city": "Chandratal",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "The Manali Inn / Snow Valley Resorts",
        "city": "Manali",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Shimla to Kalpa via Kinnaur Valley & Kinner Kailash View",
        "description": "Early morning pickup from Shimla. Drive along Hindustan-Tibet Highway through dramatic rock-cut cliffs of Kinnaur along Sutlej River. Reach picturesque apple hamlet Kalpa (2,960m). Golden sunset view of the sacred 79-foot Shiva lingam rock of Kinner Kailash peak.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Hindustan-Tibet Road Journey",
          "Rock-Cut Kinnaur Gorges",
          "Kalpa Apple Orchards & Kinner Kailash View"
        ],
        "hotel": "The Grand Shambala / Echor Kalpa",
        "transfers": "4x4 / Mountain SUV"
      },
      {
        "dayNumber": 2,
        "title": "Kalpa to Kaza via Nako Lake & 1000-Year-Old Tabo Monastery",
        "description": "Drive through Khab confluence of Sutlej and Spiti rivers. Visit sacred Nako Lake and ancient Padmasambhava footprints. Stop at UNESCO-listed Tabo Monastery ('Ajanta of the Himalayas') founded in 996 CE with preserved clay statues. Continue past Dhankar cliff-hanging monastery to Kaza (3,800m).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Khab River Confluence",
          "Nako Lake Walk",
          "1000-Year-Old Tabo Monastery UNESCO Tour",
          "Dhankar Monastery Cliff View"
        ],
        "hotel": "Hotel Spiti Heritage / Deyzor Kaza",
        "transfers": "4x4 / Mountain SUV"
      },
      {
        "dayNumber": 3,
        "title": "Key Monastery Fortress, Kibber Village & Asia's Highest Chicham Bridge",
        "description": "Visit iconic 11th-century Key Monastery perched fortress-like on a hillock overlooking Spiti River. Drive up to wildlife haven Kibber (4,270m) and cross the breathtaking Chicham Bridge suspended 150m above a terrifying gorge—Asia's highest suspension bridge.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Key Gompa Monastery & Herbal Tea Blessing",
          "Kibber Wildlife & Snow Leopard Sanctuary",
          "Chicham Bridge Engineering Marvel"
        ],
        "hotel": "Hotel Spiti Heritage / Deyzor Kaza",
        "transfers": "4x4 / Mountain SUV"
      },
      {
        "dayNumber": 4,
        "title": "Hikkim Highest Post Office, Komic Highest Village & Langza Buddha",
        "description": "Tour the famous high-altitude villages. Post a handwritten postcard from Hikkim (world's highest post office at 4,400m). Visit Komic (4,587m - world's highest village connected by motorable road) and ancient Lundup Tsemo Gompa. Stop at Langza to photograph the golden Buddha statue facing Chau Chau Kang Nilda peak.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Postcard from World's Highest Post Office Hikkim",
          "Komic World's Highest Motorable Village",
          "Langza Giant Buddha Statue & Fossil Trail"
        ],
        "hotel": "Hotel Spiti Heritage / Deyzor Kaza",
        "transfers": "4x4 / Mountain SUV"
      },
      {
        "dayNumber": 5,
        "title": "Kaza to Sacred Crescent Lake Chandratal via Kunzum Pass",
        "description": "Drive across high-altitude Kunzum Pass (4,551m) adorned with Buddhist prayer flags. Take blessings at Kunzum Mata Temple. Descend towards the heavenly blue crescent Chandratal Lake (4,300m). Trek to the lake perimeter and witness magical color shifts from turquoise to deep emerald. Camp under Milky Way.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Kunzum Pass 4,551m Stupa Parikrama",
          "Sacred Chandratal Lake Holy Trek",
          "High Altitude Milky Way Stargazing Camp"
        ],
        "hotel": "Chandratal Lake Deluxe Alpine Camp",
        "transfers": "4x4 / Mountain SUV"
      },
      {
        "dayNumber": 6,
        "title": "Chandratal to Manali via Batal, Chhatru & Atal Tunnel",
        "description": "Traverse the rugged off-road water crossings of Batal and Chhatru along the Chandra River gorge. Stop at legendary Chacha-Chachi Dhaba. Cross into Kullu Valley through the modern Atal Tunnel. Arrive in Manali, check-in and celebrate trip completion with a hot shower.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Chandra River Off-Road Water Crossings",
          "Chacha Chachi Dhaba Batal Stop",
          "Atal Tunnel Drive to Manali"
        ],
        "hotel": "The Manali Inn / Snow Valley Resorts",
        "transfers": "4x4 / Mountain SUV"
      },
      {
        "dayNumber": 7,
        "title": "Manali Leisure & Chandigarh / Delhi Departure Drop",
        "description": "Relaxed breakfast. Check-out and private transfer to Chandigarh Airport / Railway Station or Delhi for onward journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Check-out & Transfer to Chandigarh / Delhi Airport / Station"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Is oxygen cylinder provided?",
        "answer": "Yes, emergency oxygen cylinders are carried in all Spiti 4x4 vehicles."
      }
    ],
    "coveredCities": [
      "Kalpa",
      "Kaza",
      "Chandratal",
      "Manali",
      "Shimla",
      "Spiti",
      "Delhi"
    ],
    "citySlugs": [
      "kalpa",
      "kaza",
      "chandratal",
      "manali",
      "shimla",
      "spiti",
      "delhi"
    ],
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "entryCity": "Kalpa",
    "exitCity": "Delhi"
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
    "heroImage": "/destinations/spiritual.jpg",
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
    "hotelCategory": "3 Star",
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
        "title": "Amritsar Arrival, Warm Welcome & Leisure Evening",
        "description": "Arrive in Amritsar. Meet and greet by our dedicated travel representative upon arrival. Enjoy a comfortable private AC transfer to your hotel. Complete check-in formalities and relax after your journey. In the evening, enjoy a leisure stroll around the local market or scenic promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Arrival Transfer in Amritsar",
          "Hotel Check-in & Welcome Drink",
          "Evening Leisure Stroll"
        ],
        "hotel": "Hyatt Regency Amritsar",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Souvenir Shopping & Departure Transfer",
        "description": "Savor a lavish morning breakfast at your hotel. Check-out and proceed for last-minute souvenir shopping at local bazaars. Later, board your private AC transfer to the airport / railway station for your onward journey home with unforgettable memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Check-out",
          "Local Souvenir Shopping",
          "Departure Airport / Station Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Wagah seating assistance?",
        "answer": "Yes, we coordinate early arrival for prime viewing seats."
      }
    ],
    "coveredCities": [
      "Amritsar"
    ],
    "citySlugs": [
      "amritsar"
    ],
    "state": "Punjab",
    "stateSlug": "punjab",
    "entryCity": "Amritsar",
    "exitCity": "Amritsar"
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
    "startingPrice": 38700,
    "discountPrice": 48400,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Srinagar",
    "hotels": [
      {
        "name": "Heritage Luxury Houseboat on Dal Lake",
        "city": "Srinagar",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Pine Spring / Treebo Pahalgam",
        "city": "Pahalgam",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Royal Castle / Treebo Gulmarg",
        "city": "Gulmarg",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Grand Boulevard / Treebo Srinagar",
        "city": "Srinagar",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Srinagar Arrival, Dal Lake Luxury Houseboat & Shikara Sunset Ride",
        "description": "Arrive at Srinagar Sheikh-ul-Alam International Airport (SXR). Warm traditional Kashmiri welcome with Kahwa. Transfer and check-in to a handcrafted cedar wood luxury houseboat on Dal Lake / Nigeen Lake. In the evening, enjoy a romantic 1-hour Shikara boat ride visiting the floating flower & vegetable market and Char Chinar.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Srinagar Airport Pickup with Kashmiri Kahwa",
          "Luxury Houseboat Check-in",
          "Sunset Dal Lake Shikara Ride",
          "Floating Market & Char Chinar"
        ],
        "hotel": "Heritage Luxury Houseboat on Dal Lake",
        "transfers": "Private AC Vehicle & Shikara"
      },
      {
        "dayNumber": 2,
        "title": "Mughal Gardens Tour & Drive to Valley of Shepherds Pahalgam",
        "description": "Visit world-famous Mughal Gardens: Shalimar Bagh (Abode of Love) built by Jahangir for Nur Jahan, Nishat Bagh (Garden of Pleasure), and Chashme Shahi royal spring. Post lunch, drive to Pahalgam (2,130m) along Lidder River, passing through purple saffron fields of Pampore and 1100-year-old Avantipur temple ruins. Check-in at Pahalgam resort.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shalimar & Nishat Mughal Gardens",
          "Pampore Saffron Fields Stop",
          "Avantipur Ruins Visit",
          "Scenic Lidder Valley Drive"
        ],
        "hotel": "Hotel Pine Spring / Treebo Pahalgam",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Pahalgam Valley Excursion: Betaab Valley, Aru Valley & Chandanwari",
        "description": "Full day excursion by local union vehicle to the pristine valleys of Pahalgam: Betaab Valley (named after Bollywood film Betaab) with its lush emerald meadows and willow trees, Aru Valley wildlife hamlet, and Chandanwari (starting point of Amarnath Yatra) featuring snow bridges. Evening stroll along Lidder riverbank.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Betaab Valley Alpine Meadow Tour",
          "Aru Valley Scenic Eco Village",
          "Chandanwari Snow Bridge Point",
          "Lidder River Nature Walk"
        ],
        "hotel": "Hotel Pine Spring / Treebo Pahalgam",
        "transfers": "Local Union Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Pahalgam to Meadow of Flowers Gulmarg & Gondola Ride",
        "description": "Drive to Gulmarg (2,650m), India's premier ski paradise. Check-in at hotel. Board the famous Gulmarg Gondola (Asia's highest cable car): Phase 1 takes you to Kongdoori Valley (3,100m) and Phase 2 reaches Apharwat Peak (4,200m) near the Line of Control with powdery snow. Evening visit to St. Mary's colonial stone church and golf course.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Gulmarg Gondola Phase 1 & 2 Cable Car",
          "Apharwat Peak Snow Walk & Ski Slopes",
          "St. Mary's Colonial Church Heritage Stop"
        ],
        "hotel": "Hotel Royal Castle / Treebo Gulmarg",
        "transfers": "Private AC Vehicle & Gondola"
      },
      {
        "dayNumber": 5,
        "title": "Gulmarg to Srinagar, Shankaracharya Temple & Old City Artisan Walk",
        "description": "Morning descent drive back to Srinagar. Ascend the hill to the sacred 9th-century Shankaracharya Temple offering bird's-eye views of Srinagar city and Dal Lake. Visit the revered Hazratbal Dargah. In the afternoon, explore the old city craft quarters for authentic Kashmiri Pashmina shawls, walnut wood carving, and saffron.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shankaracharya Temple Panoramic Darshan",
          "Hazratbal White Marble Shrine",
          "Pashmina & Walnut Wood Artisan Market"
        ],
        "hotel": "Hotel Grand Boulevard / Treebo Srinagar",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 6,
        "title": "Traditional Kashmiri Breakfast & Srinagar Airport Departure Drop",
        "description": "Enjoy a hearty breakfast with authentic Kashmiri bread (Girda) and Kahwa. Complete check-out. Private transfer to Srinagar Airport for your return flight with unforgettable memories of Paradise on Earth.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Check-out & Srinagar Airport Departure Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Gondola tickets confirmed?",
        "answer": "Yes, pre-booked Phase 1 & 2 tickets included."
      }
    ],
    "coveredCities": [
      "Srinagar",
      "Pahalgam",
      "Gulmarg"
    ],
    "citySlugs": [
      "srinagar",
      "pahalgam",
      "gulmarg"
    ],
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "entryCity": "Srinagar",
    "exitCity": "Gulmarg"
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
    "startingPrice": 56200,
    "discountPrice": 70300,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Leh",
    "hotels": [
      {
        "name": "The Grand Dragon / Hotel Singge Palace Leh",
        "city": "Leh",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Nubra Organic Retreat / Echor Camp Nubra",
        "city": "Nubra Valley",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Pangong Deluxe Lakefront Camp",
        "city": "Pangong Tso",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Leh Arrival, Acclimatization Rest & Shanti Stupa Sunset",
        "description": "Fly into Kushok Bakula Rimpochee Airport Leh (3,524m). High-altitude acclimatization rest in hotel with garlic soup and fluids. In late afternoon, visit Leh Palace and climb to Japanese Peace Pagoda Shanti Stupa for sunset over Stok Kangri range. Stroll in Leh Main Bazaar.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Leh Airport Meet & Greet",
          "Acclimatization Rest",
          "Shanti Stupa Sunset Panorama",
          "Leh Main Market Walk"
        ],
        "hotel": "The Grand Dragon / Hotel Singge Palace Leh",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Sham Valley Tour: Magnetic Hill, Sangam & Pathar Sahib Gurudwara",
        "description": "Drive along Indus River on Srinagar-Leh Highway. Visit Hall of Fame War Memorial museum, optical illusion Magnetic Hill where vehicles defy gravity, sacred Gurudwara Pathar Sahib (built by Indian Army), and Sangam—the majestic confluence of muddy Zanskar and turquoise Indus rivers.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Hall of Fame War Memorial",
          "Magnetic Hill Defying Gravity Experience",
          "Gurudwara Pathar Sahib Darshan",
          "Indus & Zanskar River Sangam Viewpoint"
        ],
        "hotel": "The Grand Dragon / Hotel Singge Palace Leh",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Leh to Nubra Valley via World's Highest Khardung La Pass (17,582 ft)",
        "description": "Ascend the legendary Khardung La Pass (17,582 ft / 5,359m)—one of the world's highest motorable roads. Photo stop at the iconic pass summit. Descend into mystical Nubra Valley ('Valley of Flowers'). Visit Diskit Monastery with its colossal 106-foot Maitreya Buddha statue. In evening, enjoy double-humped Bactrian camel ride at white sand dunes of Hunder.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Khardung La Pass 17,582 ft Summit Photo",
          "Diskit Monastery & Giant Maitreya Buddha",
          "Hunder White Sand Dunes Bactrian Camel Safari"
        ],
        "hotel": "Nubra Organic Retreat / Echor Camp Nubra",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Excursion to Indo-Pak Border Village Turtuk & Balti Culture",
        "description": "Full day excursion along the Shyok River to scenic border village Turtuk (opened to tourists in 2010), part of Gilgit-Baltistan reclaimed in 1971. Walk through apricot and walnut orchards, visit traditional Balti wooden heritage house and natural cold storage caves. Return to Nubra.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Turtuk Indo-Pak Border Village Tour",
          "Balti Heritage House & Apricot Orchards",
          "Natural Mountain Rock Cold Storage Caves"
        ],
        "hotel": "Nubra Organic Retreat / Echor Camp Nubra",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 5,
        "title": "Nubra to Pangong Tso via Dramatic Shyok River Route",
        "description": "Drive along the wild and barren Shyok River gorge directly towards magical Pangong Tso (4,350m). First glimpse of the intense blue saltwater lake spanning across India and Tibet. Watch the lake water shift colors between turquoise, cyan, and violet. Check in at deluxe lakefront alpine camp.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Off-Road Shyok River Canyon Drive",
          "First Glimpse of Pangong Tso Lake",
          "3 Idiots Shooting Point Photo Stop",
          "Lakeside Sunset Walk & Milky Way Stargazing"
        ],
        "hotel": "Pangong Deluxe Lakefront Camp",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 6,
        "title": "Pangong Sunrise, Drive to Leh via Chang La Pass (17,590 ft) & Thiksey",
        "description": "Early morning witness magical golden sunrise reflections across Pangong Lake. Drive back to Leh crossing rugged Chang La Pass (17,590 ft). En route visit 12-story Thiksey Monastery (resembling Potala Palace) and Shey Palace. Evening free for souvenir shopping in Leh.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sunrise Over Pangong Tso",
          "Chang La Pass 17,590 ft Crossing",
          "Thiksey Monastery Maitreya Temple",
          "Shey Palace & Copper Buddha"
        ],
        "hotel": "The Grand Dragon / Hotel Singge Palace Leh",
        "transfers": "Private Mountain Vehicle"
      },
      {
        "dayNumber": 7,
        "title": "Breakfast & Leh Kushok Bakula Airport Departure Drop",
        "description": "Enjoy breakfast overlooking snow peaks. Private transfer to Leh Airport for your return flight with unforgettable memories of the Land of High Passes.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Check-out & Leh Kushok Bakula Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Inner Line Permit included?",
        "answer": "Yes, complete Wildlife & Inner Line permits included."
      }
    ],
    "coveredCities": [
      "Leh",
      "Nubra Valley",
      "Pangong Tso",
      "Nubra",
      "Pangong"
    ],
    "citySlugs": [
      "leh",
      "nubra-valley",
      "pangong-tso",
      "nubra",
      "pangong"
    ],
    "state": "Ladakh",
    "stateSlug": "ladakh",
    "entryCity": "Leh",
    "exitCity": "Pangong"
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
    "startingPrice": 13100,
    "discountPrice": 16400,
    "rating": 4.8,
    "reviewsCount": 260,
    "heroImage": "/destinations/spiritual.jpg",
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
        "name": "Hotel The White Katra / Treebo Katra",
        "city": "Katra",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Vardaan / Skyview Resort Patnitop",
        "city": "Patnitop",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jammu Arrival, Transfer to Katra & Yatra Registration",
        "description": "Arrive at Jammu Tawi Railway Station or Jammu Airport. Private transfer to Katra base camp (approx. 1.5 hours). Check-in at hotel. Obtain your RFID Yatra Access Card at Banganga. Evening free for rest and preparation for holy trek.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Jammu Airport / Station Pickup",
          "Scenic Highway Transfer to Katra",
          "RFID Yatra Registration Pass Collection"
        ],
        "hotel": "Hotel The White Katra / Treebo Katra",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Maa Vaishno Devi Holy Bhawan Darshan & Bhairon Ghati Ropeway",
        "description": "Early morning embark on 13 km holy pilgrimage trek to Maa Vaishno Devi Bhawan (option to use helicopter, battery car, or pony). Visit sacred Ardhkuwari Cave (Garbhjun), reach Holy Bhawan for divine darshan of Natural Pindies (Maha Kali, Maha Lakshmi, Maha Saraswati). Take cable car ropeway to Bhairon Baba Temple to conclude yatra. Return to Katra hotel.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Maa Vaishno Devi Holy Cave VIP Darshan",
          "Ardhkuwari Temple Holy Cave",
          "Bhairon Ghati Ropeway Cable Car",
          "Return Descent to Katra Base"
        ],
        "hotel": "Hotel The White Katra / Treebo Katra",
        "transfers": "Trek / Battery Car / Ropeway"
      },
      {
        "dayNumber": 3,
        "title": "Sacred Shivkhori Cave Darshan & Drive to Pine Hill Station Patnitop",
        "description": "Drive to holy Shivkhori (approx. 2.5 hours), a 200m natural limestone cave containing a 4 ft self-manifested Shiva Lingam with perpetual milky water dripping from cave roof. Post darshan, drive up to scenic pine-forested hill station Patnitop (2,024m). Check-in at resort and stroll through Circular Road pine trails.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shivkhori Natural Limestone Cave Darshan",
          "Scenic Mountain Drive to Patnitop",
          "Patnitop Pine Forest Circular Road Sunset Walk"
        ],
        "hotel": "Hotel Vardaan / Skyview Resort Patnitop",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Sanasar Meadow, Nag Temple & Jammu Departure Drop",
        "description": "Visit ancient Nag Temple (believed to be 600 years old) and nearby saucer-shaped alpine meadow Sanasar. Check out and private drive back to Jammu Tawi Railway Station or Jammu Airport for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Ancient Nag Temple Blessings",
          "Sanasar Alpine Meadow View",
          "Jammu Airport / Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Helicopter ticket assistance?",
        "answer": "Yes, Katra-Sanjichhat heli ticket booking support provided."
      }
    ],
    "coveredCities": [
      "Katra",
      "Patnitop",
      "Vaishno Devi",
      "Jammu"
    ],
    "citySlugs": [
      "katra",
      "patnitop",
      "vaishno-devi",
      "jammu"
    ],
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "entryCity": "Katra",
    "exitCity": "Jammu"
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
    "startingPrice": 27500,
    "discountPrice": 34400,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jaipur",
    "hotels": [
      {
        "name": "Shahpura House / Treebo Jaipur",
        "city": "Jaipur",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Ranbanka Palace / Treebo Jodhpur",
        "city": "Jodhpur",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Fateh Garh / Treebo Udaipur",
        "city": "Udaipur",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jaipur Pink City Arrival, City Palace & Chokhi Dhani Cultural Village",
        "description": "Arrive at Jaipur Sanganer Airport / Railway Station. Private transfer to heritage hotel. Visit City Palace royal museum, astronomical Jantar Mantar (UNESCO), and photo stop at iconic honeycomb Hawa Mahal. In evening, experience authentic Rajasthani village culture, puppet dance, camel rides, and traditional Dal Baati Churma feast at Chokhi Dhani.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Jaipur Airport / Station Pickup",
          "City Palace & Jantar Mantar UNESCO Tour",
          "Hawa Mahal Photo Stop",
          "Chokhi Dhani Cultural Village & Dinner"
        ],
        "hotel": "Shahpura House / Treebo Jaipur",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Amber Fort Elephant / Jeep Ride, Jal Mahal & Nahargarh Sunset",
        "description": "Morning ascend to majestic hilltop Amber Fort by open jeep or elephant. Explore Sheesh Mahal (Mirror Palace) and Maota Lake. Visit water-palace Jal Mahal and drive up to Nahargarh Fort for a breathtaking sunset over the entire Pink City. Evening shopping at Johari Bazaar for blue pottery and gems.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Amber Fort Jeep Ride & Sheesh Mahal Tour",
          "Jal Mahal Lake Stop",
          "Nahargarh Fort Panoramic Sunset",
          "Johari Bazaar Handicraft Shopping"
        ],
        "hotel": "Shahpura House / Treebo Jaipur",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Jaipur to Blue City Jodhpur, Mehrangarh Fort & Jaswant Thada",
        "description": "Scenic morning highway drive to Sun City Jodhpur (approx. 5.5 hours). Check-in at hotel. Ascend to imposing Mehrangarh Fort perched 400 ft above the blue-painted houses. Visit royal white marble memorial Jaswant Thada and museum at Umaid Bhawan Palace. Evening walk at Clock Tower (Ghanta Ghar) and Sardar Market.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Highway Drive to Jodhpur",
          "Mehrangarh Fort Guided Museum Tour",
          "Jaswant Thada White Marble Cenotaph",
          "Clock Tower & Sardar Market Walk"
        ],
        "hotel": "Ranbanka Palace / Treebo Jodhpur",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Jodhpur to Lake City Udaipur via Ranakpur 1444-Pillar Marble Temples",
        "description": "Drive through Aravalli hills to romantic Venice of the East - Udaipur. Stop at Ranakpur to marvel at the 15th-century Jain Temple featuring 1,444 intricately hand-carved non-identical marble pillars. Continue to Udaipur. In the evening, enjoy a private sunset boat ride on serene Lake Pichola admiring Jag Mandir Island Palace.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Ranakpur Jain Marble Temple Architecture Tour",
          "Scenic Aravalli Mountain Drive",
          "Lake Pichola Sunset Boat Cruise",
          "Jag Mandir Island View"
        ],
        "hotel": "Fateh Garh / Treebo Udaipur",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 5,
        "title": "Udaipur City Palace, Jagdish Temple, Saheliyon Ki Bari & Bagore Ki Haveli",
        "description": "Explore the colossal City Palace complex overlooking Lake Pichola. Visit 1651 CE Jagdish Temple and royal garden Saheliyon Ki Bari with marble fountains. Afternoon visit to Sajjangarh Monsoon Palace atop Bansdara peak. Conclude with Dharohar Rajasthani folk dance and puppet show at Bagore Ki Haveli at Gangaur Ghat.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Udaipur City Palace Guided Museum Tour",
          "Jagdish Temple Darshan",
          "Saheliyon Ki Bari Royal Fountains",
          "Bagore Ki Haveli Evening Folk Dance Show"
        ],
        "hotel": "Fateh Garh / Treebo Udaipur",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 6,
        "title": "Fateh Sagar Lake Stroll & Udaipur Airport Departure Drop",
        "description": "Relaxed breakfast overlooking Aravalli hills. Visit Fateh Sagar Lake and Nehru Garden. Check-out and private transfer to Udaipur Maharana Pratap Airport (UDR) or Railway Station for onward journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Fateh Sagar Lake Walk",
          "Udaipur Airport / Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Boat ride included?",
        "answer": "Yes, private Lake Pichola boat ride included."
      }
    ],
    "coveredCities": [
      "Jaipur",
      "Jodhpur",
      "Udaipur"
    ],
    "citySlugs": [
      "jaipur",
      "jodhpur",
      "udaipur"
    ],
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "entryCity": "Jaipur",
    "exitCity": "Udaipur"
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
    "startingPrice": 19900,
    "discountPrice": 24900,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jodhpur",
    "hotels": [
      {
        "name": "Lallgarh Palace / Treebo Bikaner",
        "city": "Bikaner",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Rang Mahal / Treebo Jaisalmer",
        "city": "Jaisalmer",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Royal Desert Camp Sam Sand Dunes",
        "city": "Sam Sand Dunes",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bikaner Arrival, Junagarh Fort & Karni Mata Rat Temple",
        "description": "Pickup from Bikaner Railway Station or Jodhpur Airport. Check in at Bikaner hotel. Tour the impregnable red sandstone Junagarh Fort and Anup Mahal palace. Excursion to sacred Deshnoke Karni Mata Temple famous for over 25,000 revered holy black rats (and auspicious white rats). Visit ICAR Camel Breeding Farm. Relish authentic Bikaneri Bhujia.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bikaner Station Pickup",
          "Junagarh Fort Royal Palace Tour",
          "Deshnoke Karni Mata Temple Blessings",
          "National Camel Research Centre"
        ],
        "hotel": "Lallgarh Palace / Treebo Bikaner",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Drive to Golden City Jaisalmer, Sonar Qila & Havelis",
        "description": "Morning drive through the Thar Desert to the living sandstone wonder - Jaisalmer (approx. 5 hours). Check-in at hotel. Tour the living Golden Fort (Sonar Qila) where one-fourth of the city's population still resides. Explore intricately carved Patwon Ki Haveli, Salim Singh Ki Haveli, and tranquil Gadisar Lake at sunset.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Thar Desert Highway Journey",
          "Jaisalmer Living Fort (Sonar Qila) Walk",
          "Patwon Ki Haveli Stone Carving Tour",
          "Gadisar Lake Sunset Stroll"
        ],
        "hotel": "Hotel Rang Mahal / Treebo Jaisalmer",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Kuldhara Abandoned Ghost Village & Sam Sand Dunes Desert Safari",
        "description": "Visit the eerie 13th-century abandoned ghost village of Kuldhara. Proceed to Sam Sand Dunes. Check into your luxury Swiss desert tent with traditional tikka welcome. Experience thrilling 4x4 open Gypsy Dune Bashing and a sunset Camel Safari over golden ripples of sand. In evening, enjoy Rajasthani Kalbelia folk dance, fire show, and royal buffet dinner under starry sky.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Kuldhara Ghost Village Heritage Tour",
          "Sam Sand Dunes 4x4 Dune Bashing",
          "Sunset Desert Camel Safari",
          "Kalbelia Folk Dance & Gala Camp Dinner"
        ],
        "hotel": "Royal Desert Camp Sam Sand Dunes",
        "transfers": "Private AC Sedan & 4x4 Gypsy"
      },
      {
        "dayNumber": 4,
        "title": "Sunrise Over Desert Dunes & Jaisalmer / Jodhpur Departure",
        "description": "Witness golden desert sunrise over sand dunes. Relish hearty breakfast with fresh piping hot Jalebis. Check out and private transfer to Jaisalmer Airport / Railway Station or Jodhpur Airport for return journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Dune Sunrise Photography",
          "Transfer to Jaisalmer / Jodhpur Airport / Station"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Dune bashing included?",
        "answer": "Yes, 4x4 Jeep dune bashing & camel safari included."
      }
    ],
    "coveredCities": [
      "Bikaner",
      "Jaisalmer",
      "Sam Sand Dunes",
      "Jodhpur"
    ],
    "citySlugs": [
      "bikaner",
      "jaisalmer",
      "sam-sand-dunes",
      "jodhpur"
    ],
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "entryCity": "Bikaner",
    "exitCity": "Jodhpur"
  },
  {
    "id": "pkg-rj-23",
    "name": "Khatu Shyamji – Salasar Balaji – Jeen Mata Pilgrimage",
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
    "heroImage": "/destinations/spiritual.jpg",
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
        "title": "Khatu Shyam Arrival, Warm Welcome & Leisure Evening",
        "description": "Arrive in Khatu Shyam. Meet and greet by our dedicated travel representative upon arrival. Enjoy a comfortable private AC transfer to your hotel. Complete check-in formalities and relax after your journey. In the evening, enjoy a leisure stroll around the local market or scenic promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Arrival Transfer in Khatu Shyam",
          "Hotel Check-in & Welcome Drink",
          "Evening Leisure Stroll"
        ],
        "hotel": "Hotel Shyam Palace",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Souvenir Shopping & Departure Transfer",
        "description": "Savor a lavish morning breakfast at your hotel. Check-out and proceed for last-minute souvenir shopping at local bazaars. Later, board your private AC transfer to the airport / railway station for your onward journey home with unforgettable memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Check-out",
          "Local Souvenir Shopping",
          "Departure Airport / Station Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "VIP darshan assistance?",
        "answer": "Yes, early morning VIP lines assistance provided."
      }
    ],
    "coveredCities": [
      "Khatu Shyam"
    ],
    "citySlugs": [
      "khatu-shyam"
    ],
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "entryCity": "Khatu Shyam",
    "exitCity": "Khatu Shyam"
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
    "startingPrice": 16500,
    "discountPrice": 20500,
    "rating": 4.8,
    "reviewsCount": 165,
    "heroImage": "/destinations/verified/india-ranthambore.jpg",
    "gallery": [
      "/destinations/rajasthan.jpg",
      "/destinations/up.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jaipur",
    "hotels": [
      {
        "name": "Ranthambore Heritage Haveli / Treebo Ranthambore",
        "city": "Ranthambore",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Sawai Madhopur / Jaipur Arrival, Check-in & Ancient Ranthambore Fort",
        "description": "Pickup from Sawai Madhopur Railway Station or Jaipur Airport. Transfer to your wildlife jungle resort in Ranthambore. Check in and refresh. In afternoon, drive up to the 10th-century UNESCO World Heritage Ranthambore Fort perched high on a cliff. Visit sacred Trinetra Ganesha Temple and enjoy panoramic views of Padam Talao and hunting lodges.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Sawai Madhopur / Jaipur Pickup",
          "Resort Check-in",
          "Ranthambore Fort UNESCO Heritage Tour",
          "Trinetra Ganesha Temple Darshan"
        ],
        "hotel": "Ranthambore Heritage Haveli / Treebo Ranthambore",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Morning & Afternoon 4x4 Gypsy Tiger Safaris in Core Jungle Zones",
        "description": "Full day wildlife adventure. Set out at dawn in an open-top 4x4 Gypsy with a government naturalist guide into core tiger territories (Zones 1-5). Track Royal Bengal Tigers, Indian leopards, sloth bears, marsh crocodiles, and sambar deer. Return to resort for breakfast and pool leisure. In the afternoon, embark on second safari exploring different terrain around Rajbagh Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dawn 4x4 Gypsy Tiger Tracking Safari",
          "Wildlife Birding & Photography",
          "Afternoon Core Zone Jungle Safari",
          "Evening Bonfire & Naturalist Talk"
        ],
        "hotel": "Ranthambore Heritage Haveli / Treebo Ranthambore",
        "transfers": "4x4 Open Safari Gypsy"
      },
      {
        "dayNumber": 3,
        "title": "Morning Village Safari, Handicraft Guild & Departure Drop",
        "description": "Morning visit to Dastkar Ranthambore women's craft initiative supporting village artisans with block printing and patchwork. Check-out and private transfer to Sawai Madhopur Station or Jaipur Airport.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Dastkar Village Handicraft Visit",
          "Sawai Madhopur / Jaipur Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Are core zone permits guaranteed?",
        "answer": "Yes, core zones 1-5 permits pre-booked."
      }
    ],
    "coveredCities": [
      "Ranthambore",
      "Jaipur"
    ],
    "citySlugs": [
      "ranthambore",
      "jaipur"
    ],
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "entryCity": "Ranthambore",
    "exitCity": "Jaipur"
  },
  {
    "id": "pkg-rj-25",
    "name": "Mount Abu – Pushkar – Ajmer Sharif Oasis Trail",
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
    "heroImage": "/destinations/rajasthan.jpg",
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
        "name": "Hotel Hilltone / Treebo Mount Abu",
        "city": "Mount Abu",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Pushkar Resort / Treebo Trend Pushkar",
        "city": "Pushkar",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Udaipur / Abu Road Arrival, Mount Abu Dilwara Temples & Nakki Lake",
        "description": "Pickup from Abu Road Railway Station or Udaipur Airport. Drive up to Rajasthan's only hill station - Mount Abu (1,220m). Visit the world-famous 11th-century Dilwara Jain Temples with peerless translucent white marble carvings. In evening, enjoy paddle boating on picturesque Nakki Lake and watch sunset at Sunset Point.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Abu Road / Udaipur Pickup",
          "Dilwara Marble Temples Guided Tour",
          "Nakki Lake Boating & Toad Rock",
          "Sunset Point Mountain Panorama"
        ],
        "hotel": "Hotel Hilltone / Treebo Mount Abu",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Drive to Ajmer Sharif Dargah & Holy Pushkar Sarovar",
        "description": "Descend from Mount Abu and drive through Rajasthan plains to Sufi pilgrimage center Ajmer (approx. 5 hours). Visit the revered Dargah of Khwaja Moinuddin Chishti offering floral chadar. Continue short drive to holy holy Pushkar. Check in at resort. In evening, witness the tranquil Maha Aarti at Varaha Ghat on Pushkar Sarovar.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Highway Drive to Ajmer",
          "Khwaja Gharib Nawaz Dargah Sharif Ziyarat",
          "Pushkar Sarovar Holy Ghats Walk",
          "Varaha Ghat Evening Maha Aarti"
        ],
        "hotel": "Pushkar Resort / Treebo Trend Pushkar",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Pushkar Brahma Temple, Savitri Hill Ropeway & Desert Camel Safari",
        "description": "Offer prayers at the rare Jagatpita Brahma Temple (one of the very few temples dedicated to Lord Brahma in the world). Take the modern ropeway to Savitri Devi Temple atop Ratnagiri Hill for panoramic views of Pushkar town and Thar desert dunes. In afternoon, enjoy desert camel cart safari through countryside rose fields and sand dunes.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Jagatpita Brahma Mandir VIP Darshan",
          "Savitri Devi Temple Aerial Ropeway",
          "Desert Sand Dunes Camel Cart Safari",
          "Pushkar Rose Farm Walk"
        ],
        "hotel": "Pushkar Resort / Treebo Trend Pushkar",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Pushkar Bazaar Handicraft Walk & Ajmer / Jaipur Departure Drop",
        "description": "Morning stroll in vibrant Pushkar bazaar famous for silver jewelry, leather bags, and rose water (gulkand). Check-out and private transfer to Ajmer Railway Station or Jaipur Airport for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Pushkar Artisan Bazaar Shopping",
          "Ajmer / Jaipur Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Ajmer Dargah pass?",
        "answer": "Yes, VIP Ziyarat pass included for Ajmer Sharif."
      }
    ],
    "coveredCities": [
      "Mount Abu",
      "Pushkar",
      "Jaipur",
      "Udaipur"
    ],
    "citySlugs": [
      "mount-abu",
      "pushkar",
      "jaipur",
      "udaipur"
    ],
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "entryCity": "Mount Abu",
    "exitCity": "Udaipur"
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bhuj",
    "hotels": [
      {
        "name": "Regenta Resort Bhuj / Treebo Bhuj",
        "city": "Bhuj",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "White Rann Luxury Tent Resort Dhordo",
        "city": "Dhordo",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bhuj Arrival, Aina Mahal, Prag Mahal & Bhujodi Artisan Village",
        "description": "Arrive at Bhuj Airport / Railway Station. Private transfer to hotel. Visit 18th-century mirror-palace Aina Mahal, Italian Gothic bell tower Prag Mahal, and Kutch Museum. In afternoon, visit Bhujodi weaving village and meet national award-winning artisans practicing Rogan art and Ajrakh block printing.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bhuj Airport / Station Pickup",
          "Aina Mahal & Prag Mahal Heritage Tour",
          "Bhujodi Village Handloom Weaving Walk"
        ],
        "hotel": "Regenta Resort Bhuj / Treebo Bhuj",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Drive to Dhordo, Kalo Dungar (Black Hill) & Sunset on White Salt Desert",
        "description": "Drive north into the Great Rann of Kutch. Check in at your luxury air-conditioned Bhunga / tent resort in Dhordo. Excursion to Kalo Dungar (Black Hill - highest point in Kutch at 462m) with panoramic views of the Indo-Pak border and Dattatreya Temple. In evening, step onto the surreal endless White Salt Desert to witness an unforgettable sunset with live Kuthi folk music.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Kalo Dungar High Peak Panorama",
          "Dattatreya Temple & Jackal Feeding Point",
          "Sunset on Endless White Salt Desert",
          "Kutchi Folk Music & Dance Performance"
        ],
        "hotel": "White Rann Luxury Tent Resort Dhordo",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "White Rann Sunrise & Coastal Mandvi Beach Excursion",
        "description": "Experience the ethereal sunrise across the glistening white salt desert. After breakfast, day excursion to coastal port town Mandvi. Tour the majestic Vijay Vilas Palace (built of red sandstone where royal family still resides), walk on Mandvi Beach, and visit 400-year-old traditional wooden shipbuilding yard along Rukmavati River.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sunrise Over White Rann Salt Flats",
          "Vijay Vilas Palace Royal Heritage Tour",
          "Mandvi Beach & Wind Farm View",
          "Traditional Wooden Shipbuilding Yard Walk"
        ],
        "hotel": "White Rann Luxury Tent Resort Dhordo",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Hodka Village Craft Shopping & Bhuj Departure Drop",
        "description": "Visit traditional Hodka artisan hamlet for authentic Kutchi embroidery, patchwork, and mirror-work souvenirs. Complete check-out and private transfer to Bhuj Airport / Railway Station for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hodka Artisan Village Shopping",
          "Bhuj Airport / Railway Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "White Rann permit included?",
        "answer": "Yes, mandatory Rann entry permit included."
      }
    ],
    "coveredCities": [
      "Bhuj",
      "Dhordo",
      "Rann of Kutch",
      "Kutch"
    ],
    "citySlugs": [
      "bhuj",
      "dhordo",
      "rann-of-kutch",
      "kutch"
    ],
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "entryCity": "Bhuj",
    "exitCity": "Kutch"
  },
  {
    "id": "pkg-gj-27",
    "name": "Dwarka – Somnath – Nageshwar Devbhoomi Gujarat Yatra",
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
        "name": "Goverdhan Greens / Treebo Dwarka",
        "city": "Dwarka",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "The Fern Residency / Treebo Somnath",
        "city": "Somnath",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jamnagar / Rajkot to Holy Dwarka, Gomti Ghat & Dwarkadhish Evening Aarti",
        "description": "Pickup from Jamnagar Airport / Railway Station or Rajkot. Drive to the sacred kingdom of Lord Krishna - Dwarka (approx. 2.5 hours). Check-in at hotel. Visit holy Gomti Ghat and take holy dip. In the evening, attend the divine Sandhya Aarti and Flag Changing Ceremony (Dhwajaji) atop the 78-meter high spire of Shri Dwarkadhish Mandir (Jagat Mandir).",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Jamnagar / Rajkot Pickup",
          "Gomti Ghat Holy Snan",
          "Shri Dwarkadhish Mandir VIP Darshan",
          "Dhwajaji Flag Changing Ceremony"
        ],
        "hotel": "Goverdhan Greens / Treebo Dwarka",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Bet Dwarka Island Boat Tour, Nageshwar Jyotirlinga & Rukmini Temple",
        "description": "Morning drive to Okha port and board passenger ferry to Bet Dwarka island where Lord Krishna resided and met his friend Sudama. Visit the sacred Bet Dwarkadhish temple. Return to mainland to visit Nageshwar Jyotirlinga (one of the 12 sacred Jyotirlingas with a 85-foot Shiva statue), Gopi Talav, and 2500-year-old Rukmini Devi Temple. Sunset at Dwarka Beach lighthouse.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bet Dwarka Island Ferry Boat Ride",
          "Nageshwar Jyotirlinga VIP Pooja",
          "Gopi Talav Holy Pond",
          "Rukmini Devi Temple Ancient Architecture"
        ],
        "hotel": "Goverdhan Greens / Treebo Dwarka",
        "transfers": "Private AC Sedan & Ferry"
      },
      {
        "dayNumber": 3,
        "title": "Dwarka to Somnath via Porbandar (Kirti Mandir) & Somnath Jyotirlinga Aarti",
        "description": "Scenic coastal highway drive to holy Somnath via Porbandar (approx. 4 hours). In Porbandar, visit Kirti Mandir (birthplace of Mahatma Gandhi) and Sudama Temple. Proceed to Somnath. Check in at hotel. In evening, experience divine VIP Darshan at First Jyotirlinga Somnath Temple on the shore of the Arabian Sea. Watch the grand Sound & Light Show on the temple walls.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Porbandar Kirti Mandir & Sudama Temple Stop",
          "Somnath Jyotirlinga Evening VIP Darshan",
          "Arabian Sea Shore Walk",
          "Somnath Sound & Light Projection Show"
        ],
        "hotel": "The Fern Residency / Treebo Somnath",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Bhalka Teerth, Triveni Sangam & Veraval / Diu Departure Drop",
        "description": "Visit Bhalka Teerth (sacred spot where Lord Krishna rested and departed for his heavenly abode) and Triveni Sangam (confluence of Hiran, Kapila, and Saraswati rivers). Check out and private transfer to Veraval Railway Station or Diu / Rajkot Airport for onward journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Bhalka Teerth Lord Krishna Spot",
          "Triveni Sangam River Confluence",
          "Veraval / Diu / Rajkot Airport Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Bet Dwarka boat included?",
        "answer": "Yes, round-trip boat ferry for Bet Dwarka included."
      }
    ],
    "coveredCities": [
      "Dwarka",
      "Somnath"
    ],
    "citySlugs": [
      "dwarka",
      "somnath"
    ],
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "entryCity": "Dwarka",
    "exitCity": "Somnath"
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
    "heroImage": "/destinations/gujarat.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Ahmedabad",
    "hotels": [
      {
        "name": "Hyatt Regency / Treebo Ahmedabad",
        "city": "Ahmedabad",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Tent City 1 / Fern Sardar Sarovar Kevadia",
        "city": "Kevadia",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Ahmedabad Arrival, Sabarmati Ashram & Adalaj Stepwell Heritage",
        "description": "Arrive at Ahmedabad Sardar Vallabhbhai Patel International Airport / Railway Station. Private transfer to hotel. Visit Sabarmati Ashram where Mahatma Gandhi led the independence movement, the 5-story subterranean architectural marvel Adalaj Stepwell (1498 CE), and intricate stone lattice work at Sidi Saiyyed Mosque. Evening stroll at Sabarmati Riverfront promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Ahmedabad Airport / Station Pickup",
          "Sabarmati Gandhi Ashram Guided Tour",
          "Adalaj Stepwell Subterranean Architecture",
          "Sabarmati Riverfront Promenade Walk"
        ],
        "hotel": "Hyatt Regency / Treebo Ahmedabad",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Drive to Kevadia, Statue of Unity Viewing Gallery & Laser Light Show",
        "description": "Morning expressway drive to Kevadia (approx. 3.5 hours). Check-in at hotel / luxury tent. Visit the colossal 182-meter Statue of Unity (world's tallest statue). Ride high-speed express elevators to Viewing Gallery at 153 meters (chest height of Sardar Patel) with breathtaking views of Sardar Sarovar Dam and Narmada River. Visit Valley of Flowers and Sardar Patel Museum. Evening watch spectacular 3D Projection Mapping Laser Light Show.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Expressway Drive to Kevadia",
          "Statue of Unity 153m Viewing Gallery Entry",
          "Sardar Sarovar Dam & Valley of Flowers",
          "Spectacular Evening Laser Projection Show"
        ],
        "hotel": "Tent City 1 / Fern Sardar Sarovar Kevadia",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Jungle Safari, Miyawaki Forest & Vadodara / Ahmedabad Departure Drop",
        "description": "Visit state-of-the-art Kevadia Jungle Safari Zoo, Cactus Garden, and dense Miyawaki Forest. Check-out and private transfer to Vadodara Airport (approx. 1.5 hours) or Ahmedabad Airport for onward flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Kevadia Jungle Safari & Zoo Tour",
          "Ekta Nursery & Miyawaki Forest",
          "Vadodara / Ahmedabad Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Viewing Gallery ticket level?",
        "answer": "Express VIP 153m Viewing Gallery tickets included."
      }
    ],
    "coveredCities": [
      "Ahmedabad",
      "Kevadia",
      "Statue of Unity"
    ],
    "citySlugs": [
      "ahmedabad",
      "kevadia",
      "statue-of-unity"
    ],
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "entryCity": "Ahmedabad",
    "exitCity": "Statue of Unity"
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
    "startingPrice": 16500,
    "discountPrice": 20500,
    "rating": 4.8,
    "reviewsCount": 140,
    "heroImage": "/destinations/wildlife.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Rajkot",
    "hotels": [
      {
        "name": "The Fern Gir Forest Resort / Treebo Gir",
        "city": "Sasan Gir",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Leo / Treebo Junagadh",
        "city": "Junagadh",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Rajkot / Diu Arrival, Drive to Sasan Gir & Afternoon Jeep Safari",
        "description": "Pickup from Rajkot Airport / Diu Airport. Scenic drive to Sasan Gir National Park—the sole remaining natural habitat of the endangered Asiatic Lion. Check-in at jungle resort. In afternoon, embark on an open 4x4 Gypsy Safari in Gir Jungle Trail with forest naturalist. Spot Asiatic Lions, leopards, chital, sambar, and nilgai. Evening cultural Siddi Dhamal African-origin folk dance at resort.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Rajkot / Diu Pickup",
          "Resort Check-in",
          "Open 4x4 Gypsy Asiatic Lion Safari",
          "Siddi Dhamal Cultural Dance Performance"
        ],
        "hotel": "The Fern Gir Forest Resort / Treebo Gir",
        "transfers": "Private AC Sedan & 4x4 Gypsy"
      },
      {
        "dayNumber": 2,
        "title": "Devalia Safari Park & Drive to Junagadh Girnar Ropeway Adventure",
        "description": "Morning safari at Devalia Interpretation Zone. Drive to historic city Junagadh (approx. 1.5 hours). Check in at hotel. Experience Asia's longest ropeway cable car (2.3 km) soaring up Mount Girnar (1,061m) to sacred Ambaji Temple with breathtaking aerial views of the Kathiawar peninsula. Visit ancient Uparkot Fort and fairy-tale Indo-Gothic Mahabat Maqbara palace.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Devalia Safari Park Lion Sighting",
          "Girnar Mountain Aerial Ropeway Ride",
          "Ambaji Temple Hill Darshan",
          "Mahabat Maqbara & Uparkot Fort Architecture"
        ],
        "hotel": "Hotel Leo / Treebo Junagadh",
        "transfers": "Private AC Sedan & Ropeway"
      },
      {
        "dayNumber": 3,
        "title": "Junagadh Heritage Walk & Rajkot / Diu Departure Drop",
        "description": "Explore Junagadh old bazaars for famous Kesar mangoes (seasonal) and bandhani sarees. Check-out and private transfer to Rajkot Airport or Junagadh Junction for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Junagadh Heritage Market Walk",
          "Transfer to Rajkot / Diu Airport / Station"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Girnar ropeway included?",
        "answer": "Yes, round trip Girnar Asia's longest ropeway ticket included."
      }
    ],
    "coveredCities": [
      "Sasan Gir",
      "Junagadh",
      "Gir"
    ],
    "citySlugs": [
      "sasan-gir",
      "junagadh",
      "gir"
    ],
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "entryCity": "Sasan Gir",
    "exitCity": "Gir"
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
    "startingPrice": 18200,
    "discountPrice": 22800,
    "rating": 4.9,
    "reviewsCount": 350,
    "heroImage": "/destinations/spiritual.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Indore",
    "hotels": [
      {
        "name": "Hotel Anushree / Treebo Ujjain",
        "city": "Ujjain",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Narmada Resort / Hotel Omkareshwar",
        "city": "Omkareshwar",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Effotel by Sayaji / Treebo Indore",
        "city": "Indore",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Indore Arrival, Drive to Ujjain, Shri Mahakaleshwar Jyotirlinga & Mahakal Lok",
        "description": "Pickup from Indore Devi Ahilyabai Holkar Airport (IDR). Drive to sacred city Ujjain on the banks of Shipra River (approx. 1.5 hours). Check-in at hotel. Visit holy Shri Mahakaleshwar Jyotirlinga (Dakshinmukhi swayambhu lingam). Stroll through the magnificent 900-meter long Shri Mahakal Lok Corridor adorned with 108 sculpted Shiva pillars. Visit sacred Harsiddhi Mata Shaktipeeth, Kal Bhairav Temple, and attend Shipra River Aarti at Ram Ghat.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Indore Airport Meet & Greet",
          "Shri Mahakaleshwar Jyotirlinga VIP Darshan",
          "Mahakal Lok Grand Corridor Walk",
          "Kal Bhairav Temple & Ram Ghat Aarti"
        ],
        "hotel": "Hotel Anushree / Treebo Ujjain",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Mahakal Bhasma Aarti & Drive to Sacred Island Omkareshwar Jyotirlinga",
        "description": "Early dawn (4:00 AM) witness the world-famous divine Bhasma Aarti at Mahakaleshwar Mandir. Post breakfast, drive south across Narmada Valley to island Omkareshwar (shaped like the sacred Om symbol - approx. 3.5 hours). Board a private boat across sacred Narmada River. Offer prayers at Omkareshwar Jyotirlinga and Mamleshwar Jyotirlinga (Amareshwar) across the river.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Mahakaleshwar Dawn Bhasma Aarti Pass",
          "Scenic Drive to Narmada Island Omkareshwar",
          "Sacred Narmada River Private Boat Ride",
          "Twin Jyotirlinga (Omkareshwar & Mamleshwar) Darshan"
        ],
        "hotel": "Narmada Resort / Hotel Omkareshwar",
        "transfers": "Private AC Sedan & Boat"
      },
      {
        "dayNumber": 3,
        "title": "Omkareshwar Parikrama & Drive to Food Capital Indore (Sarafa Night Bazaar)",
        "description": "Morning walk on the Omkareshwar suspension bridge and Sangam point. Drive to cleanest city of India - Indore (approx. 2.5 hours). Visit 7-story Holkar Rajwada Palace, Lal Bagh Palace, and Khajrana Ganesh Temple. In evening, experience India's premier street-food fiesta at famous Sarafa Night Bazaar (jewelry market turning into food street at 9 PM) and Chhappan Dukan (56 Shops) enjoying Garadu, Poha, and Jaleba.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Omkareshwar Suspension Bridge Walk",
          "Indore Rajwada & Lal Bagh Palace Tour",
          "Khajrana Ganesh Temple Blessings",
          "Sarafa Night Food Street Tour (56 Dukan)"
        ],
        "hotel": "Effotel by Sayaji / Treebo Indore",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Authentic Indori Poha Breakfast & Indore Airport Departure Drop",
        "description": "Relish authentic Indori Poha, Jalebi, and Shikanji breakfast. Check-out and private transfer to Indore Devi Ahilyabai Holkar International Airport for return journey with Jyotirlinga blessings.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Indori Culinary Breakfast Walk",
          "Indore Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Bhasma Aarti assistance?",
        "answer": "Yes, online protocol application guidance provided."
      }
    ],
    "coveredCities": [
      "Ujjain",
      "Omkareshwar",
      "Indore"
    ],
    "citySlugs": [
      "ujjain",
      "omkareshwar",
      "indore"
    ],
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "entryCity": "Ujjain",
    "exitCity": "Indore"
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
    "startingPrice": 22300,
    "discountPrice": 27900,
    "rating": 4.8,
    "reviewsCount": 130,
    "heroImage": "/destinations/verified/india-khajuraho.jpg",
    "gallery": [
      "/destinations/verified/varanasi-ganga-aarti.jpg",
      "/destinations/up.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Khajuraho",
    "hotels": [
      {
        "name": "Radisson Hotel / Treebo Khajuraho",
        "city": "Khajuraho",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Tiger Den Resort / Treebo Bandhavgarh",
        "city": "Bandhavgarh",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Khajuraho Arrival, Western Group of Temples & Evening Sound & Light Show",
        "description": "Arrive at Khajuraho Airport (HJR) / Railway Station. Private transfer to hotel. Explore the UNESCO World Heritage Western Group of Temples renowned for Nagara architectural brilliance and intricate stone sculptures: Kandariya Mahadeva Temple, Lakshmana Temple, and Chitragupta Temple. In evening, watch the Amitabh Bachchan-narrated Sound & Light Show on temple lawns.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Khajuraho Airport Pickup",
          "Western Group of Temples UNESCO Tour",
          "Kandariya Mahadeva Architectural Marvel",
          "Evening Sound & Light Show"
        ],
        "hotel": "Radisson Hotel / Treebo Khajuraho",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Eastern & Southern Temples & Raneh Falls Grand Canyon Excursion",
        "description": "Visit the Eastern Group (Parsvanath Jain Temple) and Southern Group (Dulhadev Temple). In afternoon, excursion to Raneh Falls (approx. 20 km) on Ken River, featuring a dramatic 30-meter deep pure granite canyon in shades of pink, green, and red, and the Ken Gharial Sanctuary.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Eastern Jain Temples Guided Tour",
          "Southern Group Temples Visit",
          "Raneh Falls Crystalline Granite Canyon",
          "Ken Gharial Crocodile Sanctuary"
        ],
        "hotel": "Radisson Hotel / Treebo Khajuraho",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Scenic Drive from Khajuraho to Bandhavgarh Tiger Reserve",
        "description": "Scenic highway drive across Vindhya hill forests to Bandhavgarh National Park (approx. 5 hours)—having the highest density of Royal Bengal Tigers in India and the historic land of white tigers. Check-in at your jungle lodge. Evening nature walk and tribal Baiga folk dance around the bonfire.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Vindhyan Forest Drive",
          "Bandhavgarh Lodge Check-in",
          "Guided Nature Walk & Birdwatching",
          "Baiga Tribal Folk Dance & Bonfire"
        ],
        "hotel": "Tiger Den Resort / Treebo Bandhavgarh",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Morning & Afternoon Open 4x4 Gypsy Safaris in Tala / Magdhi Core Zones",
        "description": "Full day tiger safari expedition. Early morning open 4x4 Gypsy Safari in prime Tala core zone passing ancient caves, Shesh Shaiya (35 ft reclining Vishnu statue under green canopy), and Bandhavgarh Fort hill. Spot tigers, leopards, Indian bison (gaur), and deer. Return to lodge for lunch. Afternoon second safari in Magdhi / Khitauli zone for wildlife action.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dawn 4x4 Gypsy Tiger Safari in Tala Zone",
          "Ancient Shesh Shaiya 10th-Century Reclining Vishnu",
          "Afternoon Magdhi Core Zone Safari",
          "Naturalist Wildlife Presentation"
        ],
        "hotel": "Tiger Den Resort / Treebo Bandhavgarh",
        "transfers": "4x4 Open Safari Gypsy"
      },
      {
        "dayNumber": 5,
        "title": "Breakfast & Jabalpur / Khajuraho Airport Departure Drop",
        "description": "Enjoy breakfast overlooking the forest. Check-out and private transfer to Jabalpur Airport (approx. 3.5 hours) or Katni / Umaria Railway Station for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Check-out & Transfer to Jabalpur / Khajuraho Airport / Station"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Safaris count?",
        "answer": "2 Open Gypsy core zone safaris included."
      }
    ],
    "coveredCities": [
      "Khajuraho",
      "Bandhavgarh"
    ],
    "citySlugs": [
      "khajuraho",
      "bandhavgarh"
    ],
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "entryCity": "Khajuraho",
    "exitCity": "Bandhavgarh"
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
    "heroImage": "/destinations/luxury.jpg",
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
        "name": "Vrindavan Gopala Resort / Treebo Jabalpur",
        "city": "Jabalpur",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Pachmarhi Foothills Resort / Treebo Pachmarhi",
        "city": "Pachmarhi",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Jabalpur Arrival, Bhedaghat Marble Rocks Boating & Dhuandhar Falls",
        "description": "Arrive at Jabalpur Dumna Airport / Railway Station. Meet chauffeur and transfer to hotel. Drive to Bhedaghat (approx. 25 km) on holy Narmada River. Enjoy boat ride between 100-foot towering pure white Marble Rocks illuminated by sunlight. Visit roaring Dhuandhar Waterfalls (where mist looks like smoke) and 10th-century Chausath Yogini Temple.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Jabalpur Airport Pickup",
          "Bhedaghat Narmada River Marble Rocks Boat Ride",
          "Dhuandhar Waterfalls Mist Cascade",
          "Chausath Yogini Temple 64 Deities"
        ],
        "hotel": "Vrindavan Gopala Resort / Treebo Jabalpur",
        "transfers": "Private AC Sedan & Boat"
      },
      {
        "dayNumber": 2,
        "title": "Scenic Satpura Drive to Queen of Satpura Pachmarhi & Sunset Point",
        "description": "Scenic cross-mountain drive through Satpura Tiger Reserve hill ranges to Pachmarhi (1,067m - approx. 4.5 hours). Check in at colonial cottage resort. Afternoon visit to Priyadarshini Point (where Captain Forsyth discovered Pachmarhi in 1857), Handi Khoh 300-foot deep horse-shoe ravine, and sunset at Dhoopgarh (highest point in MP at 1,352m).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Satpura Mountain Pass Drive",
          "Priyadarshini Forsyth Point View",
          "Handi Khoh Canyon Gorge",
          "Dhoopgarh Highest Peak Sunset Panorama"
        ],
        "hotel": "Pachmarhi Foothills Resort / Treebo Pachmarhi",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Bee Falls Water Cascade Bath, Jata Shankar Cave & Pandav Caves",
        "description": "Full day Pachmarhi exploration by 4x4 open Gypsy. Descend to the roaring Bee Falls and enjoy a refreshing splash in natural pools. Visit holy cave shrine Jata Shankar where stalactite and stalagmite formations resemble Shiva's matted hair, ancient Buddhist Pandav Caves, and peaceful Apsara Vihar fairy pool.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bee Falls Natural Cascade Bath",
          "Jata Shankar Stalactite Holy Cave",
          "Pandav Caves 5 Rock-Cut Chambers",
          "Apsara Vihar Natural Swimming Pool"
        ],
        "hotel": "Pachmarhi Foothills Resort / Treebo Pachmarhi",
        "transfers": "Local 4x4 Open Gypsy"
      },
      {
        "dayNumber": 4,
        "title": "Chauragarh Shiva Peak, Reechgarh Natural Amphitheatre & Duchess Falls",
        "description": "Visit sacred Chauragarh Temple perched atop a hill where devotees carry heavy iron tridents (trishuls). Walk through narrow limestone rock crevice of Reechgarh natural amphitheatre. Explore Duchess Falls scenic trail and enjoy sunset at Rajendragiri landscaped garden.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Chauragarh Hill Holy Trident Pilgrimage",
          "Reechgarh Natural Limestone Cave Walk",
          "Rajendragiri Landscaped Botanical Sunset"
        ],
        "hotel": "Pachmarhi Foothills Resort / Treebo Pachmarhi",
        "transfers": "Local 4x4 Open Gypsy"
      },
      {
        "dayNumber": 5,
        "title": "Pachmarhi to Pipariya / Jabalpur / Bhopal Departure Drop",
        "description": "Enjoy breakfast overlooking sal and teak forests. Check out and private transfer to Pipariya Railway Station (approx. 1 hour) or Jabalpur / Bhopal Airport for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Check-out & Transfer to Pipariya / Jabalpur / Bhopal Airport / Station"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Bhedaghat boat ride included?",
        "answer": "Yes, Narmada river marble rocks boat ride included."
      }
    ],
    "coveredCities": [
      "Jabalpur",
      "Pachmarhi",
      "Bhopal"
    ],
    "citySlugs": [
      "jabalpur",
      "pachmarhi",
      "bhopal"
    ],
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "entryCity": "Jabalpur",
    "exitCity": "Bhopal"
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
        "name": "Hotel Pride / Treebo Pune",
        "city": "Pune",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Sai Jhelum / Treebo Shirdi",
        "city": "Shirdi",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "The Fern Residency / Treebo Aurangabad",
        "city": "Aurangabad",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Express Inn / Treebo Nashik",
        "city": "Nashik",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Pune Arrival, Bhimashankar Jyotirlinga Darshan & Pune Return",
        "description": "Pickup from Pune International Airport / Pune Junction. Drive through Western Ghats to Bhimashankar Jyotirlinga situated in the Sahyadri hills in dense forest (source of Bhima River). Offer prayers at the 13th-century Nagara-style temple. Return to Pune for hotel check-in and dinner.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Pune Airport Pickup",
          "Bhimashankar Jyotirlinga VIP Darshan",
          "Sahyadri Western Ghats Scenic Drive"
        ],
        "hotel": "Hotel Pride / Treebo Pune",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Pune to Shirdi via Shani Shingnapur & Sai Baba Temple Evening Aarti",
        "description": "Drive to holy village Shani Shingnapur where houses have no doors and Lord Shani is worshipped as a black stone slab in open air. Continue drive to holy Shirdi (approx. 2 hours). Check in at hotel. Experience VIP Darshan at Shri Sai Baba Samadhi Mandir, Dwarkamai mosque, Chavadi, and Gurusthan. Attend soul-stirring Dhoop Aarti.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shani Shingnapur Open Shrine Darshan",
          "Shirdi Sai Baba Samadhi VIP Darshan",
          "Dwarkamai & Chavadi Sacred Walk",
          "Evening Sai Baba Dhoop Aarti"
        ],
        "hotel": "Hotel Sai Jhelum / Treebo Shirdi",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Grishneshwar Jyotirlinga, Ellora Caves & Drive to Aurangabad",
        "description": "Drive to holy Grishneshwar (approx. 2.5 hours) - the 12th and final Jyotirlinga of Lord Shiva rebuilt by Ahilyabai Holkar. Post darshan, visit adjacent UNESCO World Heritage Ellora Caves, especially the monolithic rock-cut Kailasa Temple (Cave 16) carved out of a single cliff from top to bottom. Drive to Aurangabad, visit Bibi Ka Maqbara.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Grishneshwar Jyotirlinga VIP Darshan",
          "Kailasa Temple Ellora Caves UNESCO Tour",
          "Bibi Ka Maqbara Taj of Deccan Visit"
        ],
        "hotel": "The Fern Residency / Treebo Aurangabad",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Drive to Holy Nashik, Trimbakeshwar Jyotirlinga & Panchavati",
        "description": "Morning drive across Maharashtra plateau to holy pilgrim city Nashik on Godavari River (approx. 3.5 hours). Check-in at hotel. Drive to Trimbakeshwar Jyotirlinga at the foothills of Brahmagiri Mountain (source of sacred Godavari River) housing the 3-faced lingam (Brahma, Vishnu, Mahesh). In afternoon, tour Panchavati: Sita Gufa, Kalaram Mandir, and Ramkund.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Trimbakeshwar Jyotirlinga Holy Darshan",
          "Kushavarta Holy Kund Snan",
          "Panchavati Sita Gufa & Kalaram Mandir",
          "Ramkund Godavari Evening Aarti"
        ],
        "hotel": "Hotel Express Inn / Treebo Nashik",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 5,
        "title": "Nashik Sula Vineyards Tour & Mumbai / Pune Departure Drop",
        "description": "Visit pioneer wine estate Sula Vineyards for a guided winery tour and grape tasting (optional). Check-out and private transfer to Mumbai Chhatrapati Shivaji Maharaj International Airport (approx. 3.5 hours) or Pune Airport for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Sula Vineyards Winery Walk",
          "Mumbai / Pune Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Shirdi VIP darshan included?",
        "answer": "Yes, pre-booked VIP entry passes included."
      }
    ],
    "coveredCities": [
      "Pune",
      "Shirdi",
      "Aurangabad",
      "Nashik",
      "Mumbai"
    ],
    "citySlugs": [
      "pune",
      "shirdi",
      "aurangabad",
      "nashik",
      "mumbai"
    ],
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "entryCity": "Pune",
    "exitCity": "Mumbai"
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
    "startingPrice": 12000,
    "discountPrice": 15000,
    "rating": 4.8,
    "reviewsCount": 160,
    "heroImage": "/destinations/spiritual.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Aurangabad",
    "hotels": [
      {
        "name": "The Fern Residency / Treebo Aurangabad",
        "city": "Aurangabad",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Aurangabad Arrival, Ellora Caves (Kailasa Temple) & Daulatabad Fort",
        "description": "Pickup from Aurangabad Airport (IXU) / Railway Station. Private transfer to hotel. Explore UNESCO World Heritage Ellora Caves (34 rock-cut monasteries & temples spanning Buddhist, Hindu, and Jain traditions). Marvel at Kailasa Temple (Cave 16) - largest monolithic rock-cut monument in human history. Visit 12th-century impregnable hilltop Daulatabad Fort and Chand Minar.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Aurangabad Airport Pickup",
          "Ellora Caves UNESCO World Heritage Tour",
          "Kailasa Monolithic Temple Marvel",
          "Daulatabad Hilltop Fort & Moat Walk"
        ],
        "hotel": "The Fern Residency / Treebo Aurangabad",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Full Day Excursion to Ancient Ajanta Caves (UNESCO)",
        "description": "Full day excursion to horseshoe-shaped Waghur river canyon housing the world-famous Ajanta Caves (approx. 2 hours each way). Explore 30 rock-cut Buddhist cave monuments dating from 2nd century BCE to 480 CE, adorned with masterclass ancient mural wall paintings and exquisite statues depicting Jataka tales and Buddha's life.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Ajanta Caves Horseshoe Gorge Excursion",
          "Ancient Buddhist Fresco Paintings Tour",
          "Cave 1 & 2 Bodhisattva Padmapani Viewing",
          "Waghur River Canyon Viewpoint"
        ],
        "hotel": "The Fern Residency / Treebo Aurangabad",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Bibi Ka Maqbara, Paithani Silk Weaving & Departure Drop",
        "description": "Visit Bibi Ka Maqbara (known as the 'Taj of the Deccan' built by Azam Shah) and historic Panchakki water mill powered by mountain springs. Visit a traditional Paithani silk handloom weaving center. Check out and private transfer to Aurangabad Airport / Railway Station.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Bibi Ka Maqbara Taj of the Deccan",
          "Panchakki Medieval Hydraulic Water Mill",
          "Paithani Saree Weaving Center",
          "Airport / Railway Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Are Ajanta caves closed on Monday?",
        "answer": "Yes, Ajanta is closed Mondays; Ellora is closed Tuesdays."
      }
    ],
    "coveredCities": [
      "Aurangabad"
    ],
    "citySlugs": [
      "aurangabad"
    ],
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "entryCity": "Aurangabad",
    "exitCity": "Aurangabad"
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
    "startingPrice": 22300,
    "discountPrice": 27900,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Goa",
    "hotels": [
      {
        "name": "Treebo Trend Calangute Beach Resort",
        "city": "North Goa",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Treebo Trend Colva White Sands Resort",
        "city": "South Goa",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Goa Airport Arrival, North Goa Beach Resort & Baga Nightlife",
        "description": "Arrive at Dabolim Airport (GOI) or Manohar International Airport Mopa (GOX). Private transfer to North Goa resort. Check-in and relax with a welcome drink. Evening stroll along lively Calangute Beach and Baga Beach. Experience bustling nightlife and beach shacks at Tito's Lane.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Goa Airport Pickup",
          "Resort Check-in",
          "Calangute & Baga Beach Sunset Walk",
          "Tito's Lane Night Market & Beach Shacks"
        ],
        "hotel": "Treebo Trend Calangute Beach Resort",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "North Goa Forts & Water Sports: Aguada, Parasailing & Chapora Sunset",
        "description": "Visit 17th-century Portuguese Fort Aguada and its historic 4-story lighthouse. Head to Sinquerim Beach for thrilling water sports combo: parasailing over Arabian Sea, jet ski ride, banana boat ride, and bumper tube ride. Afternoon visit to bohemian Anjuna Beach and iconic Chapora Fort (Dil Chahta Hai point) for panoramic sunset over Vagator Beach.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Fort Aguada & Portuguese Lighthouse Tour",
          "5-in-1 Water Sports Combo (Parasailing, Jet Ski)",
          "Anjuna Beach Rock Formations",
          "Chapora Fort Cliff Sunset Panorama"
        ],
        "hotel": "Treebo Trend Calangute Beach Resort",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Old Goa Heritage Churches, Fontainhas Latin Walk & Mandovi Cruise",
        "description": "Transfer to South Goa. Tour UNESCO World Heritage Old Goa churches: Basilica of Bom Jesus (relics of St. Francis Xavier) and Se Cathedral (largest church in Asia). Heritage walking tour in Fontainhas (Panjim Latin Quarter) with colorful Portuguese villas and bakeries. In evening, enjoy a 1-hour sunset cruise on River Mandovi with Goan folk music and DJ.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Basilica of Bom Jesus UNESCO World Heritage Tour",
          "Se Cathedral Golden Bell Viewing",
          "Fontainhas Latin Quarter Walking Tour",
          "Mandovi River Sunset Cruise & Cultural Dance"
        ],
        "hotel": "Treebo Trend Colva White Sands Resort",
        "transfers": "Private AC Sedan & Cruise"
      },
      {
        "dayNumber": 4,
        "title": "Dudhsagar Waterfalls Jeep Safari & Sahakari Spice Plantation Feast",
        "description": "Early morning drive to Mollem National Park. Board 4x4 open jungle jeep crossing streams to the foot of magnificent 4-tiered 310m high Dudhsagar Waterfalls. Enjoy swimming in natural forest pool with lifejackets. Proceed to Sahakari Spice Plantation for a guided spice tour, traditional welcome garland, and royal Goan buffet lunch served on banana leaf.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "4x4 Open Jungle Jeep Stream Crossing",
          "Dudhsagar Waterfalls Natural Pool Swim",
          "Sahakari Spice Farm Guided Walk",
          "Authentic Goan Buffet Lunch"
        ],
        "hotel": "Treebo Trend Colva White Sands Resort",
        "transfers": "Private AC Sedan & 4x4 Jeep"
      },
      {
        "dayNumber": 5,
        "title": "Colva Beach Morning Walk & Goa Airport Departure Drop",
        "description": "Morning peaceful walk along pristine white sands of Colva Beach. Enjoy breakfast overlooking swaying coconut palms. Check-out and private transfer to Goa Airport (GOI / GOX) or Madgaon Junction for return journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Colva Beach Morning Leisure",
          "Goa Airport / Madgaon Station Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Water sports voucher included?",
        "answer": "Yes, 5 water sports combo at Baga Beach included."
      }
    ],
    "coveredCities": [
      "North Goa",
      "South Goa",
      "Baga",
      "Dudhsagar"
    ],
    "citySlugs": [
      "north-goa",
      "south-goa",
      "baga",
      "dudhsagar"
    ],
    "state": "Goa",
    "stateSlug": "goa",
    "entryCity": "North Goa",
    "exitCity": "Dudhsagar"
  },
  {
    "id": "pkg-mh-36",
    "name": "Lonavala – Khandala – Mahabaleshwar Western Ghats",
    "slug": "lonavala-khandala-mahabaleshwar-western-ghats",
    "destination": "Mahabaleshwar",
    "destinationSlug": "mahabaleshwar",
    "country": "India",
    "region": "West & Central India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 17200,
    "discountPrice": 21500,
    "rating": 4.7,
    "reviewsCount": 180,
    "heroImage": "/destinations/himachal.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Mumbai",
    "hotels": [
      {
        "name": "Fariyas Resort / Treebo Lonavala",
        "city": "Lonavala",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Evershine Resort / Treebo Mahabaleshwar",
        "city": "Mahabaleshwar",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Mumbai / Pune Pickup, Lonavala Bhushi Dam & Tiger's Leap",
        "description": "Pickup from Mumbai / Pune Airport. Ascend the scenic Western Ghats expressway to twin hill stations Lonavala & Khandala. Check in at hotel. Visit Bhushi Dam water steps, Tiger's Leap cliff offering 650m vertical drop, 2nd-century BCE rock-cut Karla Caves, and sunset at Lion's Point. Taste authentic Lonavala chikki and chocolate fudge.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Mumbai / Pune Pickup",
          "Bhushi Dam Waterfall Steps",
          "Tiger's Leap & Lion's Point Cliff View",
          "Karla Caves Ancient Buddhist Chaitya"
        ],
        "hotel": "Fariyas Resort / Treebo Lonavala",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Scenic Drive to Mahabaleshwar via Panchgani (Table Land & Mapro Garden)",
        "description": "Scenic cross-mountain drive south to strawberry capital Mahabaleshwar (approx. 4 hours). Stop at Panchgani: Table Land (Asia's second longest volcanic plateau), Sydney Point, and Mapro Garden for strawberry cream and wood-fired pizza. Arrive in Mahabaleshwar, check in at resort. In evening, enjoy peaceful boat ride on Venna Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Western Ghats Mountain Drive",
          "Panchgani Table Land Plateau Horse Ride",
          "Mapro Garden Strawberry Tasting",
          "Venna Lake Evening Paddle Boating"
        ],
        "hotel": "Evershine Resort / Treebo Mahabaleshwar",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Arthur's Seat Panorama, Elephant's Head & Historic Pratapgad Fort",
        "description": "Explore the scenic viewpoints of Mahabaleshwar: Arthur's Seat (Queen of all points) overlooking deep Savitri river valley, Elephant's Head Point, and Old Mahabaleshwar 16th-century Panchganga Shiva Temple (source of 5 holy rivers). In afternoon, excursion to impregnable mountain fortress Pratapgad Fort where Shivaji Maharaj defeated Afzal Khan.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Arthur's Seat Deep Canyon Viewpoint",
          "Elephant's Head Rock Formation",
          "Old Mahabaleshwar Panchganga Temple",
          "Pratapgad Chhatrapati Shivaji Fortress Tour"
        ],
        "hotel": "Evershine Resort / Treebo Mahabaleshwar",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Strawberry Farm Tour & Pune / Mumbai Departure Drop",
        "description": "Morning visit to local strawberry farm to pick fresh berries. Check out and descend through picturesque Ghats to Pune Airport (approx. 3 hours) or Mumbai Airport (approx. 5 hours) for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Strawberry Farm Tour & Souvenir Shopping",
          "Pune / Mumbai Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Venna lake boating included?",
        "answer": "Yes, Venna Lake paddle boat ticket included."
      }
    ],
    "coveredCities": [
      "Lonavala",
      "Mahabaleshwar",
      "Mumbai",
      "Pune"
    ],
    "citySlugs": [
      "lonavala",
      "mahabaleshwar",
      "mumbai",
      "pune"
    ],
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "entryCity": "Lonavala",
    "exitCity": "Pune"
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
    "startingPrice": 19900,
    "discountPrice": 24900,
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
        "name": "Heritage Madurai / Treebo Madurai",
        "city": "Madurai",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Daiwik Hotel / Treebo Rameshwaram",
        "city": "Rameshwaram",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Sparsa Resort / Treebo Kanyakumari",
        "city": "Kanyakumari",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Madurai Arrival, Meenakshi Amman Temple & Night Chariot Ceremony",
        "description": "Arrive at Madurai International Airport (IXM) / Madurai Junction. Private transfer to hotel. Visit 17th-century Indo-Saracenic Thirumalai Nayakkar Palace. In the evening, visit the world-famous Meenakshi Sundareswarar Temple complex with 14 towering gopurams and Hall of Thousand Pillars. Witness the mesmerizing night ceremony (Palliarai Puja) where Lord Sundareswarar is carried to Goddess Meenakshi's shrine.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Madurai Airport Pickup",
          "Thirumalai Nayakkar Palace Light Show",
          "Meenakshi Amman Temple Architectural Tour",
          "Night Palliarai Silver Chariot Ceremony"
        ],
        "hotel": "Heritage Madurai / Treebo Madurai",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Pamban Sea Bridge Drive to Rameshwaram, 22 Teertham Snan & Jyotirlinga Darshan",
        "description": "Drive to holy island Rameshwaram across the iconic 2 km Pamban Sea Bridge over turquoise ocean waters (approx. 3.5 hours). Check-in at hotel. Perform sacred ritual bath in the sea at Agnitheertham and holy bath in all 22 Temple Teerthams (wells) inside Sri Ramanathaswamy Temple. Experience VIP Darshan at the Jyotirlinga and walk the world's longest pillared corridor (1,212 pillars).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Pamban Sea Bridge Scenic Drive",
          "Agnitheertham Seashore Holy Snan",
          "22 Sacred Temple Wells (Teertham) Bathing Ritual",
          "Ramanathaswamy Jyotirlinga Longest Corridor Darshan"
        ],
        "hotel": "Daiwik Hotel / Treebo Rameshwaram",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Dhanushkodi Ghost Town, Ram Setu Vantage Point & Kalam National Memorial",
        "description": "Morning drive to Dhanushkodi—the submerged ghost town destroyed in 1964 cyclone. Walk along Arichal Munai (tip of Indian landmass) where Bay of Bengal meets the rough Arabian Sea and see floating stones of Ram Setu (Adam's Bridge). On return, visit the inspiring Dr. APJ Abdul Kalam National Memorial and Lakshmana Teertham.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dhanushkodi Ghost Town Ruins Tour",
          "Arichal Munai Land's End & Ram Setu Point",
          "Floating Ram Setu Coral Stones Viewing",
          "Dr. APJ Abdul Kalam Memorial"
        ],
        "hotel": "Daiwik Hotel / Treebo Rameshwaram",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Drive to Kanyakumari, Vivekananda Rock Memorial & Three Oceans Sunset",
        "description": "Scenic coastal drive south to Kanyakumari (Land's End of India - approx. 5.5 hours) where Indian Ocean, Arabian Sea, and Bay of Bengal converge. Board government passenger ferry to Vivekananda Rock Memorial and 133-foot Thiruvalluvar Statue. In evening, watch dramatic sunset over three oceans from Sunset Point.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Coastal Highway Drive",
          "Vivekananda Rock Memorial Ferry Tour",
          "133-Foot Thiruvalluvar Statue Viewing",
          "Triveni Sangam Three Oceans Sunset"
        ],
        "hotel": "Sparsa Resort / Treebo Kanyakumari",
        "transfers": "Private AC Sedan & Ferry"
      },
      {
        "dayNumber": 5,
        "title": "Sunrise Over Ocean, Bhagavathi Amman Temple & Trivandrum / Madurai Drop",
        "description": "Witness spectacular sunrise over the ocean. Visit 3000-year-old Kanyakumari Bhagavathi Amman Temple and Gandhi Memorial Mandapam. Check-out and private transfer to Trivandrum International Airport (TRV - approx. 2.5 hours) or Madurai Airport for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Ocean Sunrise Photography",
          "Kanyakumari Bhagavathi Amman Darshan",
          "Trivandrum / Madurai Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "22 Kund Snan guide included?",
        "answer": "Yes, priest guidance for 22 well holy bath included."
      }
    ],
    "coveredCities": [
      "Madurai",
      "Rameshwaram",
      "Kanyakumari"
    ],
    "citySlugs": [
      "madurai",
      "rameshwaram",
      "kanyakumari"
    ],
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "entryCity": "Madurai",
    "exitCity": "Kanyakumari"
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
    "startingPrice": 34500,
    "discountPrice": 43000,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Cochin",
    "hotels": [
      {
        "name": "Fragrant Nature / Treebo Munnar",
        "city": "Munnar",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Elephant Court / Treebo Thekkady",
        "city": "Thekkady",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Luxury AC Deluxe Backwater Houseboat",
        "city": "Alleppey",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Uday Samudra Beach Resort / Treebo Kovalam",
        "city": "Kovalam",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Cochin Arrival, Cheeyappara Waterfalls & Misty Tea Hills Munnar",
        "description": "Arrive at Cochin International Airport (COK) / Ernakulam Junction. Meet private chauffeur. Scenic drive ascending Western Ghats through lush tea plantations. En route admire tumbling Cheeyappara and Valara waterfalls. Arrive in misty Munnar (1,600m). Check in at resort and enjoy evening mountain breeze.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Cochin Airport Pickup",
          "Cheeyappara & Valara Waterfalls Photo Stop",
          "Munnar Tea Plantation Valley Climb"
        ],
        "hotel": "Fragrant Nature / Treebo Munnar",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Eravikulam National Park (Nilgiri Tahr), Tea Museum & Mattupetty Dam",
        "description": "Visit Eravikulam National Park (home to endangered mountain goat Nilgiri Tahr) with views of Anamudi (highest peak in South India at 2,695m). Tour KDHP Tata Tea Museum and learn tea processing with tasting. In afternoon, visit Mattupetty Dam, Echo Point, and speed boating at Kundala Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Eravikulam National Park Nilgiri Tahr Safari",
          "Tata Tea Museum & Tea Tasting",
          "Mattupetty Dam & Echo Point",
          "Kundala Lake Speedboating"
        ],
        "hotel": "Fragrant Nature / Treebo Munnar",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Munnar to Thekkady (Periyar Wildlife), Spice Plantation & Kathakali Show",
        "description": "Scenic winding drive through Cardamom Hills to Thekkady / Periyar (approx. 3 hours). Check-in at jungle resort. Guided spice plantation walking tour smelling green cardamom, black pepper, cinnamon, and vanilla. In evening, watch classical Kathakali dance drama and ancient Kalaripayattu martial art performance.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Mountain Ridge Drive",
          "Guided Organic Spice Plantation Walk",
          "Kathakali Classical Dance Drama Pass",
          "Kalaripayattu Ancient Martial Arts Show"
        ],
        "hotel": "Elephant Court / Treebo Thekkady",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Periyar Lake Boat Safari & Private Luxury Alleppey Backwater Houseboat",
        "description": "Early morning boat cruise on Periyar Lake inside tiger reserve spotting wild elephants, bisons, and otters on water banks. Post breakfast, drive to Venice of the East - Alleppey (approx. 3.5 hours). Check-in at 12:30 PM to your private AC Deluxe Houseboat. Cruise through serene canals, paddy fields, and coconut lagoons. Relish authentic Kerala Sadhya on board.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Periyar Lake Wildlife Boat Safari",
          "Alleppey Houseboat Check-in & Welcome Coconut",
          "Serene Backwater Canal Cruising",
          "Traditional Karimeen Fish & Kerala Feast on Board"
        ],
        "hotel": "Luxury AC Deluxe Backwater Houseboat",
        "transfers": "Private AC Sedan & Houseboat"
      },
      {
        "dayNumber": 5,
        "title": "Houseboat Disembarkation, Drive to Kovalam Lighthouse Beach & Sunset",
        "description": "Enjoy peaceful sunrise over backwaters. Disembark houseboat at 9:00 AM. Drive south to world-famous crescent beach Kovalam (approx. 3.5 hours). Check-in at beach resort. In afternoon, climb the 30-meter high striped Lighthouse at Lighthouse Beach for 360-degree ocean views. Stroll along Hawah Beach and Samudra Beach at sunset.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Houseboat Morning Sunrise Cruise",
          "Scenic Coastal Drive to Kovalam",
          "Kovalam Lighthouse Spiral Climb & Ocean View",
          "Hawah Beach Sunset Stroll"
        ],
        "hotel": "Uday Samudra Beach Resort / Treebo Kovalam",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 6,
        "title": "Padmanabhaswamy Temple & Trivandrum Airport Departure Drop",
        "description": "Morning visit to sacred Sree Padmanabhaswamy Temple in Thiruvananthapuram (richest temple in the world with Dravidian architecture). Complete check-out and private transfer to Trivandrum International Airport (TRV - approx. 30 mins) for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Sree Padmanabhaswamy Temple Darshan",
          "Trivandrum Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Houseboat private?",
        "answer": "100% private houseboat with dedicated chef."
      }
    ],
    "coveredCities": [
      "Munnar",
      "Thekkady",
      "Alleppey",
      "Kovalam",
      "Cochin"
    ],
    "citySlugs": [
      "munnar",
      "thekkady",
      "alleppey",
      "kovalam",
      "cochin"
    ],
    "state": "Kerala",
    "stateSlug": "kerala",
    "entryCity": "Munnar",
    "exitCity": "Cochin"
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
    "heroImage": "/destinations/spiritual.jpg",
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
    "hotelCategory": "3 Star",
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
        "title": "Tirupati Arrival, Warm Welcome & Leisure Evening",
        "description": "Arrive in Tirupati. Meet and greet by our dedicated travel representative upon arrival. Enjoy a comfortable private AC transfer to your hotel. Complete check-in formalities and relax after your journey. In the evening, enjoy a leisure stroll around the local market or scenic promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Arrival Transfer in Tirupati",
          "Hotel Check-in & Welcome Drink",
          "Evening Leisure Stroll"
        ],
        "hotel": "Marasa Sarovar Premier Tirupati",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Souvenir Shopping & Departure Transfer",
        "description": "Savor a lavish morning breakfast at your hotel. Check-out and proceed for last-minute souvenir shopping at local bazaars. Later, board your private AC transfer to the airport / railway station for your onward journey home with unforgettable memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Check-out",
          "Local Souvenir Shopping",
          "Departure Airport / Station Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Special Darshan ticket included?",
        "answer": "Yes, Rs 300 Special Entry Darshan pass included."
      }
    ],
    "coveredCities": [
      "Tirupati"
    ],
    "citySlugs": [
      "tirupati"
    ],
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "entryCity": "Tirupati",
    "exitCity": "Tirupati"
  },
  {
    "id": "pkg-ka-40",
    "name": "Coorg – Mysore – Wayanad – Ooty – Kodaikanal Plantation",
    "slug": "coorg-mysore-wayanad-ooty-kodaikanal",
    "destination": "Coorg",
    "destinationSlug": "coorg",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 5,
    "durationNights": 4,
    "startingPrice": 22300,
    "discountPrice": 27900,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bangalore",
    "hotels": [
      {
        "name": "Royal Orchid Metropole / Treebo Mysore",
        "city": "Mysore",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Heritage Resort / Treebo Coorg",
        "city": "Coorg",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Fortune Resort Sullivan Court / Treebo Ooty",
        "city": "Ooty",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bangalore Pickup, Royal Mysore Palace & Brindavan Gardens",
        "description": "Pickup from Bangalore Airport / City. Drive to Royal Heritage City Mysore (approx. 3 hours). Visit the opulent Mysore Palace (Amba Vilas) with its stained glass ceilings and golden throne. Ascend Chamundi Hill to visit Chamundeshwari Temple and colossal Nandi Bull statue. In evening, visit illuminated musical fountains at Brindavan Gardens.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bangalore Airport Pickup",
          "Mysore Palace Royal Architecture Tour",
          "Chamundeshwari Hilltop Temple Darshan",
          "Brindavan Gardens Musical Fountain Show"
        ],
        "hotel": "Royal Orchid Metropole / Treebo Mysore",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Drive to Scotland of India Coorg, Bylakuppe Golden Temple & Dubare Elephants",
        "description": "Scenic drive ascending to coffee country Coorg (Madikeri - approx. 2.5 hours). Visit Bylakuppe Tibetan Settlement—largest in South India—and marvel at the 40-foot gilded statues inside Namdroling Monastery (Golden Temple). Visit Dubare Elephant Camp on Cauvery riverbank for elephant bathing. Check in at Coorg resort and watch sunset at Raja's Seat.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bylakuppe Golden Temple Tibetan Monastery",
          "Dubare Elephant Camp River Experience",
          "Raja's Seat Sunset Valley Viewpoint"
        ],
        "hotel": "Heritage Resort / Treebo Coorg",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Abbey Falls, Guided Coffee & Pepper Plantation Walk & Talacauvery",
        "description": "Walk down through dense spice greenery to roaring Abbey Falls. Take a guided walking tour inside an organic coffee estate learning bean cultivation, cardamoms, and black pepper. Drive up Brahmagiri Hill to Talacauvery (sacred origin of River Cauvery) and Bhagamandala Triveni Sangam.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Abbey Falls Rainforest Cascade",
          "Guided Arabica Coffee Plantation Trail",
          "Talacauvery Sacred River Origin Pilgrimage",
          "Bhagamandala Sangam Temple"
        ],
        "hotel": "Heritage Resort / Treebo Coorg",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Coorg to Queen of Hill Stations Ooty via Bandipur / Mudumalai Safari",
        "description": "Scenic drive through Bandipur and Mudumalai Tiger Reserves spotting wild elephants and spotted deer along the highway. Ascend the 36 hairpin bends of Kalhatty Ghat to Queen of Hill Stations - Ooty (2,240m). Check-in at hotel. Visit Government Botanical Garden, Ooty Lake boating, and Dodabetta Peak (highest in Nilgiris).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bandipur Wildlife Forest Corridor Drive",
          "36 Hairpin Kalhatty Ghat Mountain Climb",
          "Ooty Botanical Garden Exotic Flora",
          "Ooty Lake Boating & Dodabetta Peak"
        ],
        "hotel": "Fortune Resort Sullivan Court / Treebo Ooty",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 5,
        "title": "Nilgiri Mountain Toy Train & Coimbatore / Bangalore Departure Drop",
        "description": "Experience the UNESCO World Heritage Nilgiri Mountain Toy Train joyride from Ooty to Coonoor through tunnels, bridges, and tea terraces. Visit Sim's Park and Dolphin's Nose. Private transfer to Coimbatore Airport (CJB - approx. 2.5 hours) or Bangalore for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Nilgiri Mountain Toy Train Joyride (UNESCO)",
          "Coonoor Sim's Park Botanical Walk",
          "Coimbatore / Bangalore Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan & Toy Train"
      }
    ],
    "faqs": [
      {
        "question": "Toy train tickets included?",
        "answer": "Yes, Nilgiri Mountain Toy Train joyride tickets included."
      }
    ],
    "coveredCities": [
      "Mysore",
      "Coorg",
      "Ooty",
      "Wayanad",
      "Bangalore",
      "Kodaikanal"
    ],
    "citySlugs": [
      "mysore",
      "coorg",
      "ooty",
      "wayanad",
      "bangalore",
      "kodaikanal"
    ],
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "entryCity": "Mysore",
    "exitCity": "Kodaikanal"
  },
  {
    "id": "pkg-ka-41",
    "name": "Hampi – Badami – Pattadakal UNESCO Boulder Empire",
    "slug": "hampi-badami-pattadakal-unesco-boulder-empire",
    "destination": "Hampi",
    "destinationSlug": "hampi",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 17200,
    "discountPrice": 21500,
    "rating": 4.8,
    "reviewsCount": 140,
    "heroImage": "/destinations/verified/india-khajuraho.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Hospet",
    "hotels": [
      {
        "name": "Heritage Resort Hampi / Treebo Hospet",
        "city": "Hampi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "The Badami Court / Treebo Badami",
        "city": "Badami",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Hubli / Hospet Arrival, Check-in & Virupaksha Temple Sunset",
        "description": "Pickup from Hubli Airport / Hospet Junction. Drive into UNESCO World Heritage Hampi—the capital of the 14th-century Vijayanagara Empire surrounded by surreal granite boulder landscapes. Check in at hotel. Visit 7th-century operating Virupaksha Temple, Kadalekalu Ganesha, and climb Hemakuta Hill for a magical sunset over ancient ruins.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Hubli / Hospet Pickup",
          "Virupaksha Temple Sacred Architecture",
          "Hemakuta Hill Sunset Boulder Landscape",
          "Kadalekalu Ganesha Monolith"
        ],
        "hotel": "Heritage Resort Hampi / Treebo Hospet",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Vijaya Vittala Stone Chariot, Musical Pillars, Royal Enclosure & Coracle Ride",
        "description": "Explore the architectural pinnacle of Vijayanagara: Vijaya Vittala Temple complex featuring the iconic Stone Chariot and musical stone pillars. Cross the Tungabhadra River in a traditional round woven Coracle boat. In afternoon, visit Royal Enclosure: Queen's Bath, Lotus Mahal, Elephant Stables, and Hazara Rama Temple with Ramayana friezes.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Vijaya Vittala Temple & Stone Chariot (UNESCO)",
          "56 Musical Stone Pillars Demonstration",
          "Tungabhadra River Round Coracle Boat Ride",
          "Lotus Mahal & Royal Elephant Stables"
        ],
        "hotel": "Heritage Resort Hampi / Treebo Hospet",
        "transfers": "Private AC Sedan & Coracle"
      },
      {
        "dayNumber": 3,
        "title": "Drive to Aihole & Pattadakal UNESCO Temples & Badami Cave Temples",
        "description": "Drive north to Aihole ('Cradle of Indian Temple Architecture') visiting Durga Temple with apsidal sanctum. Proceed to Pattadakal (UNESCO World Heritage) where early Chalukya kings were crowned, showcasing harmonious Dravidian and Nagara stone shrines. Continue to Badami (Vatapi). Tour 4 spectacular 6th-century rock-cut Badami Cave Temples overlooking sacred Agastya Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Aihole 5th-Century Durga Temple Guided Tour",
          "Pattadakal UNESCO Group of Chalukyan Monuments",
          "Badami Rock-Cut Cave Temples (Shiva, Vishnu, Jain)",
          "Agastya Lake & Bhutanatha Temple Sunset"
        ],
        "hotel": "The Badami Court / Treebo Badami",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Badami Fort, Banashankari Temple & Hubli / Belgaum Departure Drop",
        "description": "Morning visit to Badami Fort and ancient Banashankari Temple. Check out and private transfer to Hubli Airport / Railway Station (approx. 2.5 hours) or Belgaum for return journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Badami Fort Archaeological Walk",
          "Hubli / Belgaum Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Coracle boat ride included?",
        "answer": "Yes, traditional round coracle boat ride on Tungabhadra river included."
      }
    ],
    "coveredCities": [
      "Hampi",
      "Badami"
    ],
    "citySlugs": [
      "hampi",
      "badami"
    ],
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "entryCity": "Hampi",
    "exitCity": "Badami"
  },
  {
    "id": "pkg-ts-42",
    "name": "Hyderabad – Ramoji Film City – Srisailam Jyotirlinga",
    "slug": "hyderabad-ramoji-film-city-srisailam",
    "destination": "Hyderabad",
    "destinationSlug": "hyderabad",
    "country": "India",
    "region": "South India",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 17200,
    "discountPrice": 21500,
    "rating": 4.8,
    "reviewsCount": 230,
    "heroImage": "/destinations/luxury.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Hyderabad",
    "hotels": [
      {
        "name": "The Park / Treebo Hyderabad",
        "city": "Hyderabad",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Grand Akka Mahadevi / Haritha Srisailam",
        "city": "Srisailam",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Hyderabad Arrival, Charminar, Golconda Fort & Hussain Sagar Laser Show",
        "description": "Arrive at Rajiv Gandhi International Airport (HYD) / Secunderabad Junction. Private transfer to hotel. Tour 1591 CE iconic Charminar, Mecca Masjid, and opulent Chowmahalla Palace. Ascend acoustic wonder Golconda Fort. In evening, boat ride on Hussain Sagar Lake to Buddha Statue and watch laser water show at Lumbini Park. Relish world-famous Hyderabadi Dum Biryani.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Hyderabad Airport Pickup",
          "Charminar & Laad Bazaar Pearl Shopping",
          "Golconda Fort Acoustic Tour",
          "Hussain Sagar Lake Boat Ride & Biryani Dinner"
        ],
        "hotel": "The Park / Treebo Hyderabad",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Full Day Extravaganza at Ramoji Film City (Guinness World Record)",
        "description": "Spend full day at Ramoji Film City—the world's largest integrated film studio complex spanning 2,000 acres. Tour grand sets of blockbuster films like Baahubali (Mahishmati Kingdom), Bollywood sets, London Street, Japanese gardens, live wild west stunt show, Spirit of Ramoji dance parade, and eco-zone bird park.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Ramoji Film City Guided Studio Tour",
          "Baahubali Film Set Walkthrough",
          "Live Stunt Show & Action Theatre",
          "Fundustan Kids World & Bird Park"
        ],
        "hotel": "The Park / Treebo Hyderabad",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Scenic Drive through Nallamala Forest to Holy Srisailam Jyotirlinga",
        "description": "Drive through tiger-inhabited Nallamala Forest along Krishna River gorge to holy town Srisailam (approx. 4.5 hours). Check-in at hotel. Experience divine VIP Darshan at Sri Mallikarjuna Swamy Jyotirlinga (one of only 3 places in India that is both a Jyotirlinga and a Shaktipeeth - Bhramaramba Devi). Ride ropeway to Patala Ganga riverbank.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Nallamala Forest Ghat Road Drive",
          "Sri Mallikarjuna Swamy Jyotirlinga VIP Darshan",
          "Bhramaramba Devi Shaktipeeth Puja",
          "Patala Ganga Ropeway & Krishna River Walk"
        ],
        "hotel": "Grand Akka Mahadevi / Haritha Srisailam",
        "transfers": "Private AC Sedan & Ropeway"
      },
      {
        "dayNumber": 4,
        "title": "Srisailam Dam Viewpoint & Hyderabad Airport Departure Drop",
        "description": "Visit colossal Srisailam Dam on Krishna River and Sakshi Ganapati Temple. Check out and private drive back to Hyderabad Rajiv Gandhi International Airport for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Srisailam Dam Engineering Viewpoint",
          "Sakshi Ganapati Temple Darshan",
          "Hyderabad Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Ramoji VIP pass included?",
        "answer": "Yes, Ramoji VIP Star Experience ticket with buffet included."
      }
    ],
    "coveredCities": [
      "Hyderabad",
      "Srisailam"
    ],
    "citySlugs": [
      "hyderabad",
      "srisailam"
    ],
    "state": "Telangana",
    "stateSlug": "telangana",
    "entryCity": "Hyderabad",
    "exitCity": "Srisailam"
  },
  {
    "id": "pkg-ne-43",
    "name": "Guwahati – Shillong – Cherrapunji – Dawki Scotland of East",
    "slug": "guwahati-shillong-cherrapunji-dawki-scotland-east",
    "destination": "Meghalaya",
    "destinationSlug": "meghalaya",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 6,
    "durationNights": 5,
    "startingPrice": 27500,
    "discountPrice": 34400,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Guwahati",
    "hotels": [
      {
        "name": "Hotel Vivanta / Treebo Guwahati",
        "city": "Guwahati",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Polo Towers / Treebo Shillong",
        "city": "Shillong",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Polo Orchid Resort Cherrapunji",
        "city": "Cherrapunji",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Guwahati Arrival, Kamakhya Temple Darshan & Drive to Shillong via Umiam Lake",
        "description": "Arrive at Lokpriya Gopinath Bordoloi International Airport Guwahati (GAU) / Guwahati Junction. Private transfer. Ascend Nilachal Hill for VIP Darshan at the sacred Kamakhya Devi Temple (one of the 51 Shaktipeeths). Post blessings, embark on a picturesque drive to Scotland of the East - Shillong (approx. 3.5 hours). Stop at vast Umiam Lake (Barapani) for water sports. Check in at hotel and walk along Police Bazar in evening.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Guwahati Airport Pickup",
          "Maa Kamakhya Devi Temple VIP Darshan",
          "Umiam Lake Water Sports Stop",
          "Shillong Police Bazar Evening Walk"
        ],
        "hotel": "Polo Towers / Treebo Shillong",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Shillong Heritage: Don Bosco Museum, Elephant Falls & Shillong Peak",
        "description": "Tour Shillong's premier highlights. Visit 7-story Don Bosco Museum of Indigenous Cultures showcasing Northeast tribal heritage. Drive to roaring 3-tiered Elephant Falls surrounded by fern gullies, and ascend Shillong Peak (highest point in Meghalaya at 1,965m) for panoramic views of the city. Visit Lady Hydari Park and Ward's Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Don Bosco Indigenous Culture Museum",
          "Elephant Falls 3-Tiered Cascade",
          "Shillong Peak Mountain Panorama",
          "Ward's Lake Wooden Bridge Walk"
        ],
        "hotel": "Polo Towers / Treebo Shillong",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Shillong to Cherrapunji (Sohra), Mawkdok Zipline & Nohkalikai Falls",
        "description": "Drive to Cherrapunji (Sohra - one of the wettest places on earth). Cross dramatic deep gorges at Mawkdok Dympep Valley and enjoy thrilling zipline experience across canyons. Visit towering Nohkalikai Falls (tallest plunge waterfall in India dropping 340m), Seven Sisters Falls (Nohsngithiang), and explore stalactites inside Mawsmai Limestone Cave. Check in at Cherrapunji resort.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Mawkdok Dympep Valley Zipline Adventure",
          "Nohkalikai Falls India's Tallest Plunge View",
          "Seven Sisters Falls Scenic Viewpoint",
          "Mawsmai Limestone Cave Exploration"
        ],
        "hotel": "Polo Orchid Resort Cherrapunji",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 4,
        "title": "Living Root Bridge Trek: Nongriat Double Decker & Rainbow Falls",
        "description": "Trek into the subtropical rainforest of Nongriat village. Descend stone steps through dense jungle, crossing iron cable suspension bridges to witness the world-famous Double Decker Living Root Bridge—a bio-engineering wonder woven from the aerial roots of Ficus elastica trees by Khasi tribes over centuries. Swim in crystal-clear turquoise natural rock pools at Rainbow Falls. Return to resort.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Double Decker Living Root Bridge Guided Trek",
          "Nongriat Tribal Village Walk",
          "Natural Turquoise Rock Pool Swim",
          "Living Root Bridge Bio-Engineering Photography"
        ],
        "hotel": "Polo Orchid Resort Cherrapunji",
        "transfers": "Private AC Sedan & Trek"
      },
      {
        "dayNumber": 5,
        "title": "Crystal Clear Umngot River Dawki Boating & Cleanest Village Mawlynnong",
        "description": "Excursion to Indo-Bangladesh border border town Dawki. Enjoy boat ride on the emerald Umngot River where water is so transparent that boats appear to float on air. Walk across border pillar at Tamabil. Proceed to Mawlynnong—awarded 'Cleanest Village in Asia'. Walk along bamboo-paved streets, climb Sky View bamboo watchtower, and visit Jingmaham Single Living Root Bridge at Riwai.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Umngot River Glass-Clear Boating",
          "Indo-Bangladesh Border Photo Point",
          "Mawlynnong Cleanest Village in Asia Walk",
          "Riwai Single Living Root Bridge"
        ],
        "hotel": "Hotel Vivanta / Treebo Guwahati",
        "transfers": "Private AC Sedan & Boat"
      },
      {
        "dayNumber": 6,
        "title": "Brahmaputra Sunrise & Guwahati Airport Departure Drop",
        "description": "Morning peaceful view of mighty Brahmaputra River. Check-out and private transfer to Guwahati Airport (GAU) for your onward flight with pristine memories of Meghalaya.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Brahmaputra River Morning Stroll",
          "Guwahati Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Dawki river boating included?",
        "answer": "Yes, crystal clear Umngot river boating included."
      }
    ],
    "coveredCities": [
      "Guwahati",
      "Shillong",
      "Cherrapunji"
    ],
    "citySlugs": [
      "guwahati",
      "shillong",
      "cherrapunji"
    ],
    "state": "Meghalaya",
    "stateSlug": "meghalaya",
    "entryCity": "Guwahati",
    "exitCity": "Cherrapunji"
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
    "startingPrice": 17200,
    "discountPrice": 21500,
    "rating": 4.8,
    "reviewsCount": 130,
    "heroImage": "/destinations/verified/india-kaziranga.jpg",
    "gallery": [
      "/destinations/spiritual.jpg",
      "/destinations/tamilnadu.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Jorhat",
    "hotels": [
      {
        "name": "Borgos Resort / Treebo Kaziranga",
        "city": "Kaziranga",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Prashanti Eco Tourism Resort Majuli",
        "city": "Majuli",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Guwahati / Jorhat to Kaziranga National Park & Orchid Park",
        "description": "Pickup from Guwahati Airport / Jorhat Airport. Scenic drive through lush green tea gardens of Assam to UNESCO World Heritage Kaziranga National Park (approx. 4.5 hours from Guwahati / 2 hours from Jorhat). Check-in at jungle resort. In afternoon, visit Kaziranga National Orchid and Biodiversity Park housing over 500 varieties of wild orchids, medicinal plants, and traditional Bihu cultural dance performance.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Guwahati / Jorhat Pickup",
          "Assam Tea Garden Drive",
          "Kaziranga Orchid Biodiversity Park Tour",
          "Bihu Cultural Dance & Folk Performance"
        ],
        "hotel": "Borgos Resort / Treebo Kaziranga",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Elephant Safari & Afternoon Open 4x4 Jeep Safari in Core Rhinoceros Zones",
        "description": "Early morning at 5:30 AM embark on an Elephant Safari in Western Range (Bagori) to observe the Great Indian One-Horned Rhinoceros grazing in tall elephant grass at arm's length. Return to resort for breakfast. In afternoon, 4x4 open Jeep Safari in Central Range (Kohora) tracking wild Asian elephants, wild water buffaloes, swamp deer (barasingha), Bengal tigers, and pelicans around Donga water body.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dawn Elephant Safari One-Horned Rhino Sighting",
          "Assam Tea Estate Walk",
          "Afternoon 4x4 Open Jeep Safari (Central Kohora Zone)",
          "Waterbird Photography at Donga Beel"
        ],
        "hotel": "Borgos Resort / Treebo Kaziranga",
        "transfers": "4x4 Open Jeep & Elephant"
      },
      {
        "dayNumber": 3,
        "title": "Drive to Neemati Ghat, Ferry across Brahmaputra to Majuli River Island",
        "description": "Drive to Neemati Ghat and board government ferry boat across the mighty Brahmaputra River to Majuli—the world's largest inhabited river island (approx. 1.5 hours ferry). Explore the 15th-century Neo-Vaishnavite Satras: Kamalabari Satra (classical music and dance), Auniati Satra (ancient artifacts & royal swords), and Natun Samaguri Satra where artisans create traditional mythological bamboo and clay masks. Overnight in traditional bamboo eco-cottage.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Mighty Brahmaputra River Ferry Cruise",
          "Majuli World's Largest River Island Tour",
          "Kamalabari & Auniati Vaishnavite Satras",
          "Traditional Bamboo Mask-Making Workshop"
        ],
        "hotel": "Prashanti Eco Tourism Resort Majuli",
        "transfers": "Private AC Sedan & Ferry"
      },
      {
        "dayNumber": 4,
        "title": "Majuli Bird Watching, Ferry to Mainland & Jorhat / Guwahati Drop",
        "description": "Early morning bird watching along wetlands of Majuli spotting migratory birds. Return ferry across Brahmaputra to Neemati Ghat. Private transfer to Jorhat Airport (approx. 45 mins) or Guwahati Airport for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Wetland Bird Watching",
          "Return Brahmaputra Ferry",
          "Jorhat / Guwahati Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan & Ferry"
      }
    ],
    "faqs": [
      {
        "question": "Elephant safari guaranteed?",
        "answer": "Yes, morning Elephant safari quota included."
      }
    ],
    "coveredCities": [
      "Kaziranga",
      "Majuli",
      "Guwahati"
    ],
    "citySlugs": [
      "kaziranga",
      "majuli",
      "guwahati"
    ],
    "state": "Assam",
    "stateSlug": "assam",
    "entryCity": "Kaziranga",
    "exitCity": "Guwahati"
  },
  {
    "id": "pkg-ar-45",
    "name": "Tawang – Dirang – Bomdila Monasteries & High Passes 6N/7D",
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
        "name": "Prashanti Cottage Bhalukpong",
        "city": "Bhalukpong",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Pemaling Lords Eco Inn Dirang",
        "city": "Dirang",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Hotel Tawang Heights / Treebo Tawang",
        "city": "Tawang",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Hotel Siphiyang Phong Bomdila",
        "city": "Bomdila",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Guwahati Arrival, Inner Line Permit & Drive to Bhalukpong",
        "description": "Pickup from Guwahati Airport (GAU). Process Inner Line Permits (ILP). Drive along the north bank of Brahmaputra into the Himalayan foothills of Arunachal Pradesh along Kameng River to Bhalukpong (approx. 4.5 hours). Check in at riverside eco-lodge.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Guwahati Airport Pickup",
          "Arunachal Inner Line Permit Check",
          "Scenic Kameng River Valley Drive"
        ],
        "hotel": "Prashanti Cottage Bhalukpong",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 2,
        "title": "Bhalukpong to Dirang via Tipi Orchidarium & Dirang Dzong",
        "description": "Drive deeper into West Kameng district to Dirang (1,497m - approx. 4 hours). En route visit Tipi Orchidarium housing over 7,500 species of rare orchids. Visit historic 500-year-old Dirang Dzong (Monpa stone fortress) and natural hot water sulphur springs along Dirang Chu River. Visit apple and kiwi orchards.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tipi Orchid Research Centre & Botanical Walk",
          "Dirang Dzong 17th-Century Monpa Fortress",
          "Dirang Chu Natural Hot Water Springs"
        ],
        "hotel": "Pemaling Lords Eco Inn Dirang",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 3,
        "title": "Dirang to Tawang crossing High Sela Pass (13,700 ft) & Jaswant Garh",
        "description": "Ascend the formidable snow-clad Sela Pass (13,700 ft / 4,175m) decorated with colourful Buddhist prayer flags. Admire the sacred glacial Sela Lake. Visit Jaswant Garh 1962 Indo-China War Memorial honoring Param Vir Chakra hero Rifleman Jaswant Singh Rawat. Stop at roaring Nuranang (Jung) Waterfalls dropping 100m. Arrive in holy Tawang (3,048m).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sela Pass 13,700 ft Summit Crossing",
          "Glacial Sela Lake Photography Stop",
          "Jaswant Garh 1962 War Memorial",
          "Nuranang (Jung) Waterfalls Cascade"
        ],
        "hotel": "Hotel Tawang Heights / Treebo Tawang",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 4,
        "title": "Tawang Monastery (Asia's 2nd Largest), Urgelling & War Memorial",
        "description": "Visit the 400-year-old Tawang Monastery (Galden Namgyal Lhatse) founded in 1681 CE—the largest monastery in India and second largest in the world after Lhasa's Potala Palace. Marvel at the 28-foot gilded Buddha statue and library of ancient gold-ink Buddhist scriptures. Visit Urgelling Monastery (birthplace of the 6th Dalai Lama) and evening emotional Sound & Light Show at Tawang War Memorial.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tawang Monastery (Galden Namgyal Lhatse) Tour",
          "28-Foot Gilded Buddha Statue & Museum",
          "Urgelling Monastery Dalai Lama Birthplace",
          "Tawang War Memorial Sound & Light Show"
        ],
        "hotel": "Hotel Tawang Heights / Treebo Tawang",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 5,
        "title": "Excursion to Indo-China Border Bum La Pass (15,200 ft) & Madhuri Lake",
        "description": "Excursion by special local 4x4 vehicles to Bum La Pass (15,200 ft / 4,633m) on the actual Line of Actual Control (LAC) between India and China. Interact with Indian Army soldiers and touch the border heap of stones. Visit sacred turquoise Sangetsar Lake (popularly known as Madhuri Lake after Koyla film shooting) surrounded by dead pine tree trunks standing in water, and high-altitude PTSO Lake.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Indo-China Border Bum La Pass 15,200 ft Experience",
          "Meeting Indian Army Soldiers at Border LAC",
          "Sangetsar (Madhuri) Glacial Lake Walk",
          "Panga Teng Tso (PTSO) Alpine Lake"
        ],
        "hotel": "Hotel Tawang Heights / Treebo Tawang",
        "transfers": "Local 4x4 Mountain SUV"
      },
      {
        "dayNumber": 6,
        "title": "Tawang to Bomdila via Bomdila Monastery & Apple Orchards",
        "description": "Drive back through mountain valleys to district headquarters Bomdila (2,217m - approx. 6 hours). Check in at hotel. Visit the majestic Upper Gompa (GRL Monastery) and Lower Gompa. Walk through apple orchards and craft center producing Monpa carpets and wood carvings. Enjoy panoramic views of Kangto and Gorichen snow peaks from Bomdila Viewpoint.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Mountain Ridge Highway Journey",
          "Bomdila Upper Monastery (GRL Gompa) Prayer Hall",
          "Monpa Traditional Carpet Craft Center",
          "Snow Range Peak Viewpoint Sunset"
        ],
        "hotel": "Hotel Siphiyang Phong Bomdila",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 7,
        "title": "Bomdila to Guwahati Airport Departure Drop",
        "description": "Descent drive from Bomdila via Kalaktang down into the plains of Assam to Guwahati Airport (GAU - approx. 6 hours) for your onward flight with epic memories of Arunachal.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Scenic Mountain Descent to Assam Plains",
          "Guwahati Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Mountain SUV"
      }
    ],
    "faqs": [
      {
        "question": "Bumla Pass Army permit included?",
        "answer": "Yes, official Army permit for Bumla Pass included."
      }
    ],
    "coveredCities": [
      "Bhalukpong",
      "Dirang",
      "Tawang",
      "Bomdila",
      "Guwahati"
    ],
    "citySlugs": [
      "bhalukpong",
      "dirang",
      "tawang",
      "bomdila",
      "guwahati"
    ],
    "state": "Arunachal Pradesh",
    "stateSlug": "arunachal-pradesh",
    "entryCity": "Bhalukpong",
    "exitCity": "Guwahati"
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
    "startingPrice": 32600,
    "discountPrice": 40800,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bagdogra",
    "hotels": [
      {
        "name": "The Elgin Nor-Khill / Treebo Gangtok",
        "city": "Gangtok",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "The Chumbi Mountain Retreat / Treebo Pelling",
        "city": "Pelling",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "The Elgin Darjeeling / Treebo Darjeeling",
        "city": "Darjeeling",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bagdogra / NJP Arrival, Scenic Teesta River Drive to Gangtok",
        "description": "Arrive at Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP). Private transfer winding along emerald green Teesta River into the Kingdom of Sikkim to capital Gangtok (1,650m - approx. 4.5 hours). Check-in at hotel. Evening stroll along pedestrianized MG Marg, taste authentic steamed Momos and Thukpa.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bagdogra / NJP Pickup",
          "Teesta River Canyon Drive",
          "MG Marg Pedestrian Promenade Walk"
        ],
        "hotel": "The Elgin Nor-Khill / Treebo Gangtok",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Excursion to Sacred Glacial Tsomgo (Changu) Lake (12,310 ft) & Baba Mandir",
        "description": "Drive on dramatic high-altitude military road towards Indo-China border to sacred Tsomgo Lake (12,310 ft / 3,753m)—a high-altitude glacial oval lake reflecting changing sky hues. Enjoy yak ride around lake. Continue to historic Baba Harbhajan Singh Mandir (13,123 ft) honoring an Indian soldier revered by troops. View of Nathu La Pass ridge. Return to Gangtok.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tsomgo (Changu) Glacial Lake Excursion",
          "Colourful Decorated Yak Ride on Snowbanks",
          "Baba Harbhajan Singh Mandir Darshan",
          "High Altitude Himalayan Pass Views"
        ],
        "hotel": "The Elgin Nor-Khill / Treebo Gangtok",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 3,
        "title": "Gangtok to Pelling via Rumtek Monastery & Namchi Char Dham",
        "description": "Visit ancient Rumtek Monastery (seat of the Karmapa Lama) with golden stupa. Drive across tea estates of Temi to Namchi to tour Siddheshwar Dham (re-creation of all 12 Jyotirlingas and Char Dhams under a colossal 108 ft Shiva statue) and Samdruptse 138 ft Guru Padmasambhava statue. Proceed to Pelling (2,150m) directly facing Mt. Kanchenjunga.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Rumtek Monastery Golden Stupa Tour",
          "Namchi Char Dham & 108-Foot Shiva Statue",
          "Samdruptse Giant Guru Rinpoche Monument",
          "Scenic Drive to Pelling"
        ],
        "hotel": "The Chumbi Mountain Retreat / Treebo Pelling",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 4,
        "title": "Pelling Skywalk, Pemayangtse Monastery & Drive to Darjeeling",
        "description": "Visit Pelling Glass Skywalk suspended over mist, 17th-century Pemayangtse Monastery ('Sublime Perfect Lotus'), and historic stone ruins of Rabdentse (2nd ancient capital of Sikkim) with breathtaking close-up views of Mount Kanchenjunga (8,586m). In afternoon, scenic cross-border drive to Queen of the Hills - Darjeeling (approx. 4 hours). Check in at heritage hotel.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Pelling Glass Skywalk Valley Experience",
          "Pemayangtse Monastery Wood Carving Tour",
          "Rabdentse Palace Ruins Kanchenjunga View",
          "Scenic Drive to Darjeeling"
        ],
        "hotel": "The Elgin Darjeeling / Treebo Darjeeling",
        "transfers": "Private Mountain SUV"
      },
      {
        "dayNumber": 5,
        "title": "Tiger Hill Sunrise Over Mt. Kanchenjunga, Batasia Loop & Himalayan Zoo",
        "description": "Early morning at 4:00 AM ascend Tiger Hill (2,590m) to witness the sunrise turning the snows of Mt. Kanchenjunga and Mt. Everest from pink to brilliant gold. Visit Ghoom Monastery and Batasia Loop where the Toy Train takes a 360-degree spiral. Return to hotel for breakfast. Later visit Padmaja Naidu Himalayan Zoological Park (breeding red pandas & snow leopards), Himalayan Mountaineering Institute (HMI), and Happy Valley Tea Estate.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Tiger Hill Dawn Sunrise Over Kanchenjunga & Everest",
          "Ghoom Monastery Ancient Maitreya Buddha",
          "Batasia Loop War Memorial",
          "Padmaja Naidu Zoo Red Panda & Snow Leopard Tour",
          "Happy Valley Tea Garden Walk"
        ],
        "hotel": "The Elgin Darjeeling / Treebo Darjeeling",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 6,
        "title": "Darjeeling Himalayan Railway Toy Train Joyride & Glenary's Bakery Walk",
        "description": "Experience the iconic steam-engine UNESCO World Heritage Darjeeling Himalayan Railway (DHR) Toy Train joyride from Darjeeling to Ghoom and back. Spend afternoon exploring Chowrasta Mall, Japanese Peace Pagoda, and enjoying tea and pastries at historic 130-year-old Glenary's Bakery.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "UNESCO Heritage Steam Toy Train Joyride",
          "Japanese Peace Pagoda Stupa",
          "Darjeeling Mall Road & Chowrasta Walk",
          "Glenary's Bakery Afternoon Tea"
        ],
        "hotel": "The Elgin Darjeeling / Treebo Darjeeling",
        "transfers": "Private AC Sedan & Toy Train"
      },
      {
        "dayNumber": 7,
        "title": "Mirik Lake Pine Walk & Bagdogra / NJP Departure Drop",
        "description": "Drive down via scenic tea valleys. Stop at tranquil Mirik Lake (Sumendu Lake) surrounded by cardamom plantations and cryptomeria pine groves. Continue drive down to Bagdogra Airport (IXB) / NJP Railway Station for your onward journey.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Mirik Lake Pine Forest Stop",
          "Bagdogra / NJP Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Nathula Pass included?",
        "answer": "Yes, Nathula Pass permit included."
      }
    ],
    "coveredCities": [
      "Gangtok",
      "Pelling",
      "Darjeeling"
    ],
    "citySlugs": [
      "gangtok",
      "pelling",
      "darjeeling"
    ],
    "state": "North East India",
    "stateSlug": "north-east",
    "entryCity": "Gangtok",
    "exitCity": "Darjeeling"
  },
  {
    "id": "pkg-or-47",
    "name": "Puri – Konark – Bhubaneswar – Chilika Coastal Yatra",
    "slug": "puri-konark-bhubaneswar-chilika-coastal-yatra",
    "destination": "Puri",
    "destinationSlug": "puri",
    "country": "India",
    "region": "East & North-East",
    "isInternational": false,
    "durationDays": 4,
    "durationNights": 3,
    "startingPrice": 18200,
    "discountPrice": 22800,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Bhubaneswar",
    "hotels": [
      {
        "name": "Fortune Park Sishmo / Treebo Bhubaneswar",
        "city": "Bhubaneswar",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Mayfair Waves / Treebo Puri",
        "city": "Puri",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bhubaneswar Arrival, Lingaraj Temple, Dhauli Shanti Stupa & Drive to Puri",
        "description": "Arrive at Biju Patnaik International Airport Bhubaneswar (BBI) / Bhubaneswar Junction. Private transfer. Tour City of Temples: 11th-century soaring spire of Lingaraj Temple, 10th-century gem Mukteswar Temple with torana arch, and rock-cut twin caves of Udayagiri & Khandagiri. Visit Dhauli Giri Shanti Stupa where Emperor Ashoka renounced war after Kalinga. Drive along marine highway to holy Puri (approx. 1.5 hours). Check in at beach resort.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Bhubaneswar Airport Pickup",
          "Lingaraj & Mukteswar Temple Architecture Tour",
          "Dhauli Giri Peace Pagoda & Ashokan Rock Edicts",
          "Scenic Highway Drive to Puri"
        ],
        "hotel": "Mayfair Waves / Treebo Puri",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Shri Jagannath Temple VIP Darshan, Blue Flag Beach & Konark Sun Temple",
        "description": "Early morning VIP Darshan at sacred Shri Jagannath Temple (one of the 4 holy Char Dham shrines) witnessing the divine deities Lord Jagannath, Balabhadra, and Subhadra, and visit Ananda Bazar (world's largest kitchen). Stroll on certified Golden Blue Flag Beach. In afternoon, drive along Marine Drive to UNESCO World Heritage Konark Sun Temple—the 13th-century stone chariot with 24 carved wheels pulled by 7 horses. Watch sunset at Chandrabhaga Beach.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shri Jagannath Temple VIP Darshan & Mahaprasad",
          "Puri Golden Blue Flag Beach Stroll",
          "Konark Sun Temple 13th-Century UNESCO Stone Chariot",
          "Chandrabhaga Beach Sunset Panorama"
        ],
        "hotel": "Mayfair Waves / Treebo Puri",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 3,
        "title": "Chilika Lake (Satapada) Lagoon Boat Safari & Irrawaddy Dolphin Spotting",
        "description": "Drive to Satapada on Asia's largest brackish water lagoon - Chilika Lake (approx. 1.5 hours). Board motorized boat across the vast lagoon to spot playful endangered Irrawaddy Dolphins leaping in the water. Visit the Sea Mouth where Chilika Lake meets the roaring Bay of Bengal, and Rajhans Island. Return to Puri in evening for temple bazaar shopping for Khaja sweets and Sambalpuri handlooms.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Chilika Lake Motorized Boat Lagoon Safari",
          "Irrawaddy Dolphin Spotting at Satapada",
          "Chilika Sea Mouth Island Visit",
          "Puri Grand Road Sweets & Handloom Market"
        ],
        "hotel": "Mayfair Waves / Treebo Puri",
        "transfers": "Private AC Sedan & Boat"
      },
      {
        "dayNumber": 4,
        "title": "Raghurajpur Artisan Village & Bhubaneswar Airport Departure Drop",
        "description": "Morning visit to heritage artisan village Raghurajpur where every household practices traditional Pattachitra scroll painting, palm-leaf engraving, and wooden toys. Continue to Bhubaneswar Airport (BBI) / Railway Station for departure with Mahaprabhu Jagannath's blessings.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Raghurajpur Heritage Craft Village Tour",
          "Bhubaneswar Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Chilika Dolphin boat included?",
        "answer": "Yes, private motorboat charter for Dolphin watching included."
      }
    ],
    "coveredCities": [
      "Bhubaneswar",
      "Puri",
      "Konark"
    ],
    "citySlugs": [
      "bhubaneswar",
      "puri",
      "konark"
    ],
    "state": "Odisha",
    "stateSlug": "odisha",
    "entryCity": "Bhubaneswar",
    "exitCity": "Konark"
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
    "heroImage": "/destinations/wildlife.jpg",
    "gallery": [
      "/destinations/wildlife.jpg"
    ],
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
        "name": "The Peerless Inn / Treebo Kolkata",
        "city": "Kolkata",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Sundarban Tiger Camp Eco Resort",
        "city": "Sundarbans",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Kolkata Arrival, Victoria Memorial, Howrah Bridge & Dakshineswar Kali",
        "description": "Arrive at Netaji Subhash Chandra Bose International Airport Kolkata (CCU) / Howrah Junction. Private transfer to hotel. Tour colonial City of Joy: magnificent white marble Victoria Memorial Hall, drive across cantilever engineering marvel Howrah Bridge over Hooghly River, visit Princep Ghat, and offer prayers at 1855 CE Dakshineswar Kali Temple associated with Ramakrishna Paramahamsa. Evening ride in iconic yellow Ambassador cab.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Kolkata Airport / Station Pickup",
          "Victoria Memorial White Marble Palace Tour",
          "Howrah Bridge & Princep Ghat Hooghly River Walk",
          "Dakshineswar Kali Temple Darshan"
        ],
        "hotel": "The Peerless Inn / Treebo Kolkata",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Drive to Godkhali, Motorized Boat Cruise into Sundarbans UNESCO Delta",
        "description": "Early morning drive through Bengal countryside to Godkhali (approx. 3 hours). Board motorized safari boat into the world's largest mangrove forest delta - UNESCO World Heritage Sundarbans. Cruise along rivers Gomor, Durga Duani, and Pitchkhali. Check into your island jungle eco-resort. In afternoon, boat cruise to Sajnekhali Watchtower, Mangrove Interpretation Museum, and Crocodile Breeding Pond.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Scenic Countryside Drive to Godkhali Port",
          "Sundarbans Delta Safari Boat Cruise",
          "Sajnekhali Watchtower Wildlife Spotting",
          "Mangrove Interpretation Centre & Crocodile Pond"
        ],
        "hotel": "Sundarban Tiger Camp Eco Resort",
        "transfers": "Private AC Sedan & Safari Boat"
      },
      {
        "dayNumber": 3,
        "title": "Full Day Deep Mangrove Creeks Cruise: Dobanki Canopy Walk & Sudhanyakhali",
        "description": "Full day boat expedition through narrow tidal creeks and dense sundari tree canopies with forest department guard. Cruise to Sudhanyakhali Watchtower overlooking sweet water pond where Royal Bengal Tigers, chital spotted deer, and wild boars come to drink. Visit Dobanki Watchtower featuring a 500-meter elevated canopy walk 20 feet above ground. Spot estuarine saltwater crocodiles, water monitor lizards, and kingfishers. Village Baul folk singer performance in evening.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Sudhanyakhali Watchtower Tiger Sighting Trail",
          "Dobanki 500m Canopy Skywalk",
          "Narrow Mangrove Creek Safari Navigation",
          "Traditional Bengali Baul Folk Music Evening"
        ],
        "hotel": "Sundarban Tiger Camp Eco Resort",
        "transfers": "Sundarbans Safari Boat"
      },
      {
        "dayNumber": 4,
        "title": "Village Island Walk, Return Cruise to Godkhali & Kolkata Airport Drop",
        "description": "Morning guided walk through local island village to witness honey collection methods and paddy farming. Board boat for return cruise to Godkhali jetty. Re-board your private AC vehicle and transfer to Kolkata Airport (CCU) or Howrah / Sealdah Railway Station for departure.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Island Village Honey Hunter Walk",
          "Return Delta Boat Cruise to Godkhali",
          "Kolkata Airport / Railway Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Safari Boat & Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Sundarbans boat private?",
        "answer": "Yes, licensed jungle boat safari included."
      }
    ],
    "coveredCities": [
      "Kolkata",
      "Sundarbans"
    ],
    "citySlugs": [
      "kolkata",
      "sundarbans"
    ],
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "entryCity": "Kolkata",
    "exitCity": "Sundarbans"
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
    "startingPrice": 33500,
    "discountPrice": 41800,
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Port Blair",
    "hotels": [
      {
        "name": "Hotel Megapode Resort / Treebo Port Blair",
        "city": "Port Blair",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Symphony Palms Beach Resort Havelock",
        "city": "Havelock Island",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Pearl Park Beach Resort Neil Island",
        "city": "Neil Island",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Port Blair Arrival, Cellular Jail National Memorial & Light and Sound Show",
        "description": "Arrive at Veer Savarkar International Airport Port Blair (IXZ). Meet and greet. Transfer to sea-facing hotel. In afternoon, tour the historic Cellular Jail (Kala Pani) national memorial, visit Veer Savarkar's cell and central tower. In evening, watch the moving Light and Sound Show narrating the saga of Indian freedom fighters.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Port Blair Airport Pickup",
          "Cellular Jail Kala Pani Historical Tour",
          "Cellular Jail Sound & Light Evening Show",
          "Corbyn's Cove Beach Coconut Drink Stop"
        ],
        "hotel": "Hotel Megapode Resort / Treebo Port Blair",
        "transfers": "Private AC Sedan"
      },
      {
        "dayNumber": 2,
        "title": "Premium Catamaran Cruise to Havelock Island & Radhanagar Beach Sunset",
        "description": "Board high-speed premium catamaran cruise (Makruzz / Nautika) across azure waters to Swaraj Dweep (Havelock Island - approx. 1.5 hours). Check in at your beachfront resort. In afternoon, visit world-famous Radhanagar Beach (Beach No. 7), rated among the best beaches in Asia by Time Magazine. Walk on powdered white sand and watch majestic sunset.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Premium Catamaran Ferry Cruise to Havelock",
          "Beachfront Resort Check-in",
          "Radhanagar Beach White Sand Walk & Sunset",
          "Tropical Beachfront Dining"
        ],
        "hotel": "Symphony Palms Beach Resort Havelock",
        "transfers": "Private AC Vehicle & Catamaran Ferry"
      },
      {
        "dayNumber": 3,
        "title": "Elephant Beach Speedboat Ride, Live Coral Reef Snorkeling & Water Sports",
        "description": "Board speedboat to Elephant Beach renowned for vibrant shallow coral reefs. Enjoy an included guided snorkeling session with expert PADI instructors spotting clownfish, sea anemones, and parrotfish. Optional sea karting, underwater sea walk, or jet ski. Afternoon leisure at resort private beach.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Elephant Beach Speedboat Adventure",
          "Guided Coral Reef Snorkeling Experience",
          "Underwater Sea Walk / Jet Ski Options",
          "Vijaynagar Beach Leisure"
        ],
        "hotel": "Symphony Palms Beach Resort Havelock",
        "transfers": "Private AC Vehicle & Speedboat"
      },
      {
        "dayNumber": 4,
        "title": "Catamaran to Neil Island, Natural Living Rock Bridge & Laxmanpur Sunset",
        "description": "Board inter-island catamaran to serene Shaheed Dweep (Neil Island - approx. 1 hour). Check in at beach resort. Visit Bharatpur Beach for coral viewing in glass-bottom boats, admire the geological marvel Natural Living Coral Rock Bridge (Howrah Bridge), and witness spectacular sunset from Laxmanpur Beach.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Catamaran Cruise to Neil Island",
          "Natural Living Coral Rock Bridge Photography",
          "Bharatpur Beach Glass Bottom Boat Ride",
          "Laxmanpur Beach White Sand Sunset"
        ],
        "hotel": "Pearl Park Beach Resort Neil Island",
        "transfers": "Private AC Vehicle & Catamaran Ferry"
      },
      {
        "dayNumber": 5,
        "title": "Neil to Port Blair Catamaran Return, Chidiya Tapu Sunset & Pearl Shopping",
        "description": "Morning return catamaran ferry back to Port Blair. Check in at hotel. In afternoon, excursion to Chidiya Tapu (Bird Island) through coastal mangrove forests for a panoramic sunset over the Andaman Sea. Visit Sagarika Government Emporium for authentic mother-of-pearl crafts, seashell jewelry, and wooden artifacts.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Return Catamaran Cruise to Port Blair",
          "Chidiya Tapu Mangrove Coastline Drive",
          "Chidiya Tapu Sunset Point Panorama",
          "Sagarika Handicraft & Pearl Shopping"
        ],
        "hotel": "Hotel Megapode Resort / Treebo Port Blair",
        "transfers": "Private AC Vehicle & Catamaran Ferry"
      },
      {
        "dayNumber": 6,
        "title": "Port Blair Veer Savarkar Airport Departure Drop",
        "description": "Enjoy breakfast overlooking the harbor. Check-out and private transfer to Port Blair Airport (IXZ) for onward flight with sun-kissed memories of Andaman emerald islands.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Port Blair Harbor Breakfast",
          "Veer Savarkar Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Sedan"
      }
    ],
    "faqs": [
      {
        "question": "Catamaran ferry included?",
        "answer": "Yes, Makruzz AC Premium class seats included."
      }
    ],
    "coveredCities": [
      "Port Blair",
      "Havelock Island",
      "Neil Island",
      "Havelock"
    ],
    "citySlugs": [
      "port-blair",
      "havelock-island",
      "neil-island",
      "havelock"
    ],
    "state": "Andaman and Nicobar",
    "stateSlug": "andaman",
    "entryCity": "Port Blair",
    "exitCity": "Havelock"
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
    "rating": 5,
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Kochi",
    "hotels": [
      {
        "name": "Agatti Island Beach Resort Deluxe AC Cottage",
        "city": "Agatti Island",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bangaram Island Beach Resort Lagoon Cottage",
        "city": "Bangaram Island",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Flight into Agatti Island, Turquoise Lagoon Welcome & Glass-Bottom Boating",
        "description": "Fly into Agatti Airport (AGX)—one of the world's most scenic runways on a narrow sliver of sand surrounded by an endless turquoise lagoon. Traditional coconut water welcome. Transfer to beach resort. In afternoon, enjoy glass-bottom boat ride observing living brain corals, sea turtles, and colorful reef fishes right beneath your feet. Sunset beach walk.",
        "meals": [
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Scenic Agatti Island Runway Landing",
          "Tender Boat Lagoon Transfer",
          "Glass-Bottom Boat Coral Reef Viewing",
          "Agatti Lagoon Sunset Walk"
        ],
        "hotel": "Agatti Island Beach Resort Deluxe AC Cottage",
        "transfers": "Boat & Electric Buggy"
      },
      {
        "dayNumber": 2,
        "title": "Agatti Coral Reef Snorkeling, Kayaking & Local Village Culture",
        "description": "Morning guided snorkeling session at Agatti house reef in waist-deep crystal clear water with certified instructors. Enjoy ocean kayaking and stand-up paddleboarding. In afternoon, guided village tour of Agatti island: visit the Eastern Jetty, tuna fish canning factory, coconut fiber processing unit, and local island museum.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Guided House Reef Snorkeling Tour",
          "Ocean Kayaking in Calm Lagoon Waters",
          "Agatti Island Village Cultural Walk",
          "Tuna Processing Center & Coconut Crafts"
        ],
        "hotel": "Agatti Island Beach Resort Deluxe AC Cottage",
        "transfers": "Local Island Transport"
      },
      {
        "dayNumber": 3,
        "title": "Speedboat across Emerald Sea to Uninhabited Paradise Bangaram Island",
        "description": "Board high-speed boat across the open sea to uninhabited tear-drop shaped tropical paradise - Bangaram Island (approx. 45 mins). Check in at your wooden beachfront lagoon cottage. Walk barefoot on talcum-powder white sands. In afternoon, excursion by boat to tiny neighboring sandbanks of Thinnakara and Parali islands surrounded by baby sharks and sea turtles.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "High-Speed Emerald Lagoon Boat Transfer",
          "Bangaram Island Beachfront Cottage Check-in",
          "Thinnakara & Parali Island Sandbank Excursion",
          "Sea Turtle & Baby Reef Shark Spotting"
        ],
        "hotel": "Bangaram Island Beach Resort Lagoon Cottage",
        "transfers": "High-Speed Boat"
      },
      {
        "dayNumber": 4,
        "title": "Bangaram Shipwreck Snorkeling, Scuba Diving & Beach Barbecue Under Stars",
        "description": "Full day marine adventure on Bangaram. Boat excursion to Princess Royal shipwreck site for world-class scuba diving / snorkeling with schools of barracudas, sting rays, and reef sharks. Relax on secluded white sand spit. In evening, romantic candlelight beach barbecue dinner under the canopy of unpolluted island stars.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Princess Royal Shipwreck Diving / Snorkeling",
          "Lagoon Sand Spit Walking",
          "Coral Reef Photography",
          "Candlelight Beach Barbecue Dinner"
        ],
        "hotel": "Bangaram Island Beach Resort Lagoon Cottage",
        "transfers": "Speedboat"
      },
      {
        "dayNumber": 5,
        "title": "Speedboat to Agatti & Agatti Airport Departure Drop to Kochi",
        "description": "Early morning boat transfer across emerald lagoon back to Agatti Island. Transfer to Agatti Airport (AGX) for your scheduled flight back to Kochi with memories of India's most pristine coral paradise.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Morning Lagoon Speedboat Transfer",
          "Agatti Airport Departure Drop to Kochi"
        ],
        "hotel": "Departure Day",
        "transfers": "Speedboat & Electric Buggy"
      }
    ],
    "faqs": [
      {
        "question": "Mandatory permit handled?",
        "answer": "Yes, complete Lakshadweep Administration entry permit clearance handled by us."
      }
    ],
    "coveredCities": [
      "Agatti Island",
      "Bangaram Island",
      "Kochi"
    ],
    "citySlugs": [
      "agatti-island",
      "bangaram-island",
      "kochi"
    ],
    "state": "Lakshadweep",
    "stateSlug": "lakshadweep",
    "entryCity": "Agatti Island",
    "exitCity": "Kochi"
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
    "heroImage": "/destinations/verified/dubai-desert-safari.jpg",
    "gallery": [
      "/destinations/verified/dubai-desert-safari.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Bengaluru",
    "hotels": [
      {
        "name": "Citymax Hotel Bur Dubai",
        "city": "Dubai",
        "rating": "4 Star",
        "nights": 5
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Dubai Arrival, Warm Welcome & Leisure Evening",
        "description": "Arrive in Dubai. Meet and greet by our dedicated travel representative upon arrival. Enjoy a comfortable private AC transfer to your hotel. Complete check-in formalities and relax after your journey. In the evening, enjoy a leisure stroll around the local market or scenic promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Arrival Transfer in Dubai",
          "Hotel Check-in & Welcome Drink",
          "Evening Leisure Stroll"
        ],
        "hotel": "Citymax Hotel Bur Dubai",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Dubai City Tour, Frame & Burj Khalifa 124th Floor",
        "description": "Half day Dubai city sightseeing tour covering Jumeirah Beach, Burj Al Arab photo stop, Dubai Frame entrance, and sunset view from 124th Floor of Burj Khalifa.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dubai City Guided Tour",
          "Dubai Frame Admission",
          "Burj Khalifa 124th Floor Observation Deck"
        ],
        "hotel": "Citymax Hotel Bur Dubai",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Morning Gold Souk & Afternoon Thar Desert Safari",
        "description": "Morning visit to Deira Gold Souk & Spice Souk. Afternoon thrilling 4x4 Land Cruiser Desert Safari with dune bashing, camel rides, belly dance & BBQ dinner.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "4x4 Dune Bashing Safari",
          "Camel Riding & Henna Tattoo",
          "Desert Camp BBQ Dinner & Show"
        ],
        "hotel": "Citymax Hotel Bur Dubai",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Abu Dhabi City Tour & Sheikh Zayed Grand Mosque",
        "description": "Full day excursion to Abu Dhabi capital city. Visit magnificent Sheikh Zayed Grand Mosque, BAPS Hindu Mandir, Emirates Palace, and Corniche.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sheikh Zayed Grand Mosque Visit",
          "BAPS Hindu Mandir Abu Dhabi",
          "Emirates Palace Photo Stop"
        ],
        "hotel": "Citymax Hotel Bur Dubai",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 5,
        "title": "Dubai Marina Dhow Cruise Dinner & Miracle Garden",
        "description": "Visit world's largest natural flower garden Dubai Miracle Garden / Global Village. In the evening, enjoy a 2-hour Dubai Marina Luxury Dhow Cruise Dinner.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dubai Miracle Garden Entry",
          "Global Village Cultural Pavilions",
          "Marina Dhow Cruise Dinner"
        ],
        "hotel": "Citymax Hotel Bur Dubai",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 6,
        "title": "Souvenir Shopping & Departure Transfer",
        "description": "Savor a lavish morning breakfast at your hotel. Check-out and proceed for last-minute souvenir shopping at local bazaars. Later, board your private AC transfer to the airport / railway station for your onward journey home with unforgettable memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Check-out",
          "Local Souvenir Shopping",
          "Departure Airport / Station Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Is visa included?",
        "answer": "Yes, standard Dubai 30-day tourist visa assistance is included."
      }
    ],
    "coveredCities": [
      "Dubai",
      "Abu Dhabi"
    ],
    "citySlugs": [
      "dubai",
      "abu-dhabi"
    ],
    "state": "United Arab Emirates",
    "stateSlug": "united-arab-emirates",
    "entryCity": "Dubai",
    "exitCity": "Abu Dhabi"
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
    "heroImage": "/destinations/verified/bali-kelingking.jpg",
    "gallery": [
      "/destinations/verified/bali-kelingking.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Chennai",
    "hotels": [
      {
        "name": "Aksari Resort Ubud & Aksari Villa Seminyak",
        "city": "Bali",
        "rating": "5 Star",
        "nights": 5
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bali Arrival, Warm Welcome & Leisure Evening",
        "description": "Arrive in Bali. Meet and greet by our dedicated travel representative upon arrival. Enjoy a comfortable private AC transfer to your hotel. Complete check-in formalities and relax after your journey. In the evening, enjoy a leisure stroll around the local market or scenic promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Arrival Transfer in Bali",
          "Hotel Check-in & Welcome Drink",
          "Evening Leisure Stroll"
        ],
        "hotel": "Aksari Resort Ubud & Aksari Villa Seminyak",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 2,
        "title": "Ubud Swing, Rice Terraces & Kintamani Volcano",
        "description": "Full day tour of cultural heart Ubud. Experience famous Bali Jungle Swing, Tegalalang Rice Terraces, Sacred Monkey Forest, and Kintamani Batur Volcano view.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Bali Jungle Swing Experience",
          "Tegalalang Rice Terrace Walk",
          "Kintamani Volcano Buffet Lunch"
        ],
        "hotel": "Aksari Resort Ubud & Aksari Villa Seminyak",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 3,
        "title": "Nusa Penida Island Speedboat Day Tour",
        "description": "Early morning speedboat transfer to Nusa Penida Island. Visit world-famous Kelingking T-Rex Beach, Broken Beach, Angel's Billabong, and Crystal Bay.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Nusa Penida Speedboat Cruise",
          "Kelingking T-Rex Cliff Viewpoint",
          "Broken Beach & Snorkeling"
        ],
        "hotel": "Aksari Resort Ubud & Aksari Villa Seminyak",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 4,
        "title": "Tanjung Benoa Watersports & Uluwatu Sunset Temple",
        "description": "Enjoy exciting watersports at Tanjung Benoa (Banana Boat, Parasailing, Jet Ski). Sunset visit to cliffside Uluwatu Temple with Kecak Fire Dance show.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Banana Boat & Parasailing Ride",
          "Uluwatu Cliffside Temple",
          "Kecak Fire Dance Performance"
        ],
        "hotel": "Aksari Resort Ubud & Aksari Villa Seminyak",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 5,
        "title": "Private Pool Villa Relaxation & Couple Balinese Spa",
        "description": "Enjoy floating breakfast in your private pool villa. Afternoon 2-hour luxury Balinese Couples Massage & Spa treatment followed by romantic candlelit dinner.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Private Villa Floating Breakfast",
          "2-Hour Balinese Massage Spa",
          "Romantic Beachfront Candlelit Dinner"
        ],
        "hotel": "Aksari Resort Ubud & Aksari Villa Seminyak",
        "transfers": "Private AC Vehicle"
      },
      {
        "dayNumber": 6,
        "title": "Souvenir Shopping & Departure Transfer",
        "description": "Savor a lavish morning breakfast at your hotel. Check-out and proceed for last-minute souvenir shopping at local bazaars. Later, board your private AC transfer to the airport / railway station for your onward journey home with unforgettable memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Check-out",
          "Local Souvenir Shopping",
          "Departure Airport / Station Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "faqs": [
      {
        "question": "Is visa on arrival available?",
        "answer": "Yes, Bali provides instant Visa on Arrival for Indian citizens."
      }
    ],
    "coveredCities": [
      "Bali",
      "Ubud",
      "Nusa Penida"
    ],
    "citySlugs": [
      "bali",
      "ubud",
      "nusa-penida"
    ],
    "state": "Indonesia",
    "stateSlug": "indonesia",
    "entryCity": "Bali",
    "exitCity": "Nusa Penida"
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
    "heroImage": "/destinations/verified/thailand-phi-phi.jpg",
    "gallery": [
      "/destinations/verified/thailand-phi-phi.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Kolkata / Mumbai",
    "hotels": [
      {
        "name": "Best Western Patong Beach / Ibis Phuket",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Centara Life Maris Resort / Aonang Villa Krabi",
        "city": "Krabi",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Phuket Arrival, Patong Beach Resort & Bangla Road Evening",
        "description": "Arrive at Phuket International Airport (HKT). Private AC transfer to your beach resort in Patong. Check-in and relax. Evening stroll along bustling Patong Beach. Explore neon-lit Bangla Road nightlife, street seafood stalls, and live music venues.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Phuket Airport Private Transfer",
          "Patong Beach Sunset Stroll",
          "Bangla Road Walking Street Exploration"
        ],
        "hotel": "Best Western Patong Beach / Ibis Phuket",
        "transfers": "Private AC Minivan"
      },
      {
        "dayNumber": 2,
        "title": "Phi Phi Islands Speedboat Tour: Maya Bay, Pileh Lagoon & Viking Cave",
        "description": "Full day speedboat tour across Andaman Sea. Visit world-famous Maya Bay (filming site of The Beach), swim in emerald waters of Pileh Lagoon enclosed by towering limestone cliffs, observe ancient swiftlet nests at Viking Cave, see wild crab-eating macaques at Monkey Beach, and enjoy snorkeling over coral reefs at Bamboo Island with Thai buffet lunch.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Speedboat Cruise to Phi Phi Don & Phi Phi Leh",
          "Maya Bay National Park Walk",
          "Pileh Lagoon Cliff Swimming",
          "Viking Cave & Monkey Beach Viewing",
          "Buffet Lunch & Coral Snorkeling"
        ],
        "hotel": "Best Western Patong Beach / Ibis Phuket",
        "transfers": "Speedboat & Minivan"
      },
      {
        "dayNumber": 3,
        "title": "Phuket City Tour: Big Buddha, Wat Chalong & Promthep Cape Sunset",
        "description": "Tour cultural and scenic landmarks of Phuket. Ascend Nakkerd Hill to the 45-meter tall white Burmese marble Big Buddha with 360-degree island views. Visit Wat Chalong (most revered Buddhist temple in Phuket). Explore Sino-Portuguese colonial shophouses in Phuket Old Town, and conclude with an iconic sunset at Promthep Cape (southernmost tip of Phuket).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Big Buddha 45m Marble Statue Viewpoint",
          "Wat Chalong Sacred Temple Blessings",
          "Phuket Old Town Sino-Portuguese Heritage Walk",
          "Promthep Cape Sunset Panorama"
        ],
        "hotel": "Best Western Patong Beach / Ibis Phuket",
        "transfers": "Private AC Minivan"
      },
      {
        "dayNumber": 4,
        "title": "Scenic Transfer to Krabi (Ao Nang) via Phang Nga Bay & Ao Nang Beach",
        "description": "Scenic private drive along Phang Nga coast to Krabi (Ao Nang - approx. 3 hours). Pass dramatic karst limestone pinnacles rising out of emerald rice paddies. Check-in at your Krabi resort. Evening free to stroll along Ao Nang beachside promenade and night bazaar.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Coastal Drive to Krabi",
          "Ao Nang Beachfront Resort Check-in",
          "Ao Nang Walking Street & Seafood Night Market"
        ],
        "hotel": "Centara Life Maris Resort / Aonang Villa Krabi",
        "transfers": "Private AC Minivan"
      },
      {
        "dayNumber": 5,
        "title": "Krabi 4 Islands Speedboat Tour: Phra Nang Cave, Chicken Island & Poda",
        "description": "Board speedboat to Krabi's famous 4 Islands: visit Phra Nang Cave Beach on Railay Peninsula (famous for sacred fertility shrine & rock climbers), witness the sandbar connecting Tup Island & Mor Island at low tide (Thale Waek), cruise past Chicken Island rock formation for guided coral snorkeling, and relax on powder-white sands of Poda Island with picnic lunch.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Speedboat Tour to Krabi 4 Islands",
          "Phra Nang Cave Beach Princess Shrine",
          "Tup Island Sandbar Natural Phenomenon",
          "Chicken Island Coral Reef Snorkeling",
          "Poda Island Beach Relaxation"
        ],
        "hotel": "Centara Life Maris Resort / Aonang Villa Krabi",
        "transfers": "Speedboat & Minivan"
      },
      {
        "dayNumber": 6,
        "title": "Emerald Pool (Sa Morakot), Hot Springs Waterfall & Tiger Cave Temple",
        "description": "Jungle eco-excursion into Khao Phra Bang Khram Nature Reserve. Walk through lowland rainforest trail to the natural crystal spring Emerald Pool (Sa Morakot) and soak in warm turquoise waters. Relax in cascading natural thermal mineral pools at Krabi Hot Springs. Visit Tiger Cave Temple (Wat Tham Suea) with its golden hilltop shrine reached by 1,237 steps.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Emerald Pool Natural Mineral Swim",
          "Krabi Hot Springs Waterfall Thermal Soak",
          "Tiger Cave Temple Mountain Shrine Guided Tour"
        ],
        "hotel": "Centara Life Maris Resort / Aonang Villa Krabi",
        "transfers": "Private AC Minivan"
      },
      {
        "dayNumber": 7,
        "title": "Krabi / Phuket Airport Departure Drop",
        "description": "Enjoy breakfast overlooking limestone karsts. Check-out and private transfer to Krabi International Airport (KBV) or Phuket Airport (HKT) for your onward flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Resort Check-out",
          "Krabi / Phuket Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Minivan"
      }
    ],
    "faqs": [
      {
        "question": "Is Thailand visa free?",
        "answer": "Yes, Thailand offers visa-free entry for Indian passport holders."
      }
    ],
    "coveredCities": [
      "Phuket",
      "Krabi"
    ],
    "citySlugs": [
      "phuket",
      "krabi"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Phuket",
    "exitCity": "Krabi"
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
    "gallery": [
      "/destinations/singapore.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Chennai / Mumbai",
    "hotels": [
      {
        "name": "Hotel Boss / V Hotel Lavender Singapore",
        "city": "Singapore",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Singapore Changi Arrival, Jewel Rain Vortex & Marina Bay Sands SkyPark",
        "description": "Arrive at world-best Singapore Changi Airport (SIN). Marvel at the 40-meter indoor HSBC Rain Vortex waterfall and Shiseido Forest Valley inside Jewel Changi. Private transfer to hotel. In late afternoon, ascend to Marina Bay Sands SkyPark Observation Deck on 57th floor for panoramic skyline views. In evening, stroll Gardens by the Bay to watch Garden Rhapsody light and sound show at Supertree Grove.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Changi Airport Meet & Greet",
          "Jewel Changi Rain Vortex Viewing",
          "Marina Bay Sands SkyPark 57th Floor Entry",
          "Gardens by the Bay Supertree Light Show"
        ],
        "hotel": "Hotel Boss / V Hotel Lavender Singapore",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 2,
        "title": "Full Day Universal Studios Singapore at Resorts World Sentosa",
        "description": "Full day of movie magic at Universal Studios Singapore on Sentosa Island. Experience 6 themed zones: ride the world's tallest dueling roller coasters Battlestar Galactica (Human vs Cylon), thrill in Transformers The Ride 3D, escape the curse in Revenge of the Mummy, explore Jurassic Park Rapids Adventure, and meet beloved Minions in New York zone.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Universal Studios Singapore Full Day Unlimited Access",
          "Battlestar Galactica Roller Coaster",
          "Transformers 3D Hyper-Realistic Dark Ride",
          "Revenge of the Mummy Indoor Coaster"
        ],
        "hotel": "Hotel Boss / V Hotel Lavender Singapore",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 3,
        "title": "Sentosa Cable Car, S.E.A. Aquarium, Madame Tussauds & Wings of Time",
        "description": "Take the scenic Singapore Cable Car soaring over Keppel Harbour into Sentosa. Explore S.E.A. Aquarium—one of the largest aquariums in the world housing over 100,000 marine animals including manta rays and hammerhead sharks behind giant viewing panels. Visit Madame Tussauds with Marvel 4D and Images of Singapore. In evening, watch Wings of Time award-winning multi-sensory water, laser, and firework show on Siloso Beach.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Singapore Mount Faber Cable Car Sky Pass",
          "S.E.A. Aquarium Giant Open Ocean Tank",
          "Madame Tussauds & Marvel 4D Experience",
          "Wings of Time Spectacular Fireworks Laser Show"
        ],
        "hotel": "Hotel Boss / V Hotel Lavender Singapore",
        "transfers": "Private AC Coach & Cable Car"
      },
      {
        "dayNumber": 4,
        "title": "Singapore City Tour, DUCKtours Amphibious Ride & Chinatown / Little India",
        "description": "Explore the lion city: photo stop at iconic Merlion Park, tour Thian Hock Keng Temple in Chinatown, vibrant Little India spice bazaar, and Kampong Glam Arab Street with Sultan Mosque. Embark on the award-winning Singapore DUCKtours—an amphibious WWII military craft splashing from city roads straight into Marina Bay waters. Evening shopping along Orchard Road.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Merlion Park Landmark Photo Stop",
          "Singapore DUCKtours Amphibious Land & Water Ride",
          "Chinatown & Little India Cultural Heritage Tour",
          "Orchard Road Shopping Promenade"
        ],
        "hotel": "Hotel Boss / V Hotel Lavender Singapore",
        "transfers": "Private AC Coach & DUCKboat"
      },
      {
        "dayNumber": 5,
        "title": "Singapore Changi Airport Departure Drop",
        "description": "Enjoy breakfast. Complete check-out. Depending on flight timings, explore Duty-Free at Changi Airport before boarding flight home with futuristic Singapore memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Check-out & Changi Airport Private Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Coach"
      }
    ],
    "faqs": [
      {
        "question": "How long is Singapore visa approval?",
        "answer": "E-visa process takes 3-4 working days."
      }
    ],
    "coveredCities": [
      "Singapore",
      "Sentosa"
    ],
    "citySlugs": [
      "singapore",
      "sentosa"
    ],
    "state": "Singapore",
    "stateSlug": "singapore",
    "entryCity": "Singapore",
    "exitCity": "Sentosa"
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
    "rating": 5,
    "reviewsCount": 210,
    "heroImage": "/destinations/maldives.jpg",
    "gallery": [
      "/destinations/maldives.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Inclusive",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Bengaluru / Mumbai",
    "hotels": [
      {
        "name": "Sun Siyam Olhuveli / Adaaran Club Rannalhi",
        "city": "Maldives",
        "rating": "4 Star Resort",
        "nights": 4
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Male Velana Airport Arrival, Speedboat / Seaplane Transfer to Overwater Villa",
        "description": "Arrive at Velana International Airport Male (MLE). Meet resort representative at airport counter. Embark on an exhilarating speedboat or scenic seaplane flight over pristine turquoise atolls to your private island luxury resort. Check in to your Deluxe Overwater Villa perched directly above the lagoon with private sun deck and stairs leading down to coral reefs.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Male Airport VIP Meet & Assist",
          "Speedboat / Seaplane Lagoon Transfer",
          "Overwater Villa Check-in & Welcome Cocktails",
          "Stargazing from Private Overwater Deck"
        ],
        "hotel": "Sun Siyam Olhuveli / Adaaran Club Rannalhi",
        "transfers": "Resort Speedboat / Seaplane"
      },
      {
        "dayNumber": 2,
        "title": "Guided House Reef Snorkeling, Ocean Kayaking & Sunset Dolphin Cruise",
        "description": "Wake up to panoramic Indian Ocean sunrise. Put on complimentary snorkel gear and explore vibrant house reef directly from your villa steps spotting sea turtles, blacktip reef sharks, and clownfish. Enjoy complimentary kayak and stand-up paddleboarding. In late afternoon, board traditional wooden Dhoni boat for Sunset Dolphin Cruise watching spinner dolphins leaping alongside the bow.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Direct-from-Villa House Reef Snorkeling",
          "Lagoon Ocean Kayaking & Paddleboarding",
          "Sunset Dolphin Safari on Traditional Dhoni",
          "Live International Dinner Buffet"
        ],
        "hotel": "Sun Siyam Olhuveli / Adaaran Club Rannalhi",
        "transfers": "Resort Dhoni Boat"
      },
      {
        "dayNumber": 3,
        "title": "Deserted Sandbank Picnic, Coral Gardening & Balinese Spa Treatment",
        "description": "Morning boat excursion to an uninhabited pristine white Sandbank in middle of the ocean. Walk barefoot surrounded by 360 degrees of cyan water. Participate in resort coral reef restoration planting. In afternoon, pamper your senses with a rejuvenating 60-minute couple's Balinese massage in an overwater spa pavilion with glass floor viewing marine life.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Deserted Sandbank Private Island Tour",
          "Coral Reef Planting Conservation Experience",
          "Overwater Spa Pavilion Balinese Massage",
          "Beachfront Cocktail Hour"
        ],
        "hotel": "Sun Siyam Olhuveli / Adaaran Club Rannalhi",
        "transfers": "Speedboat"
      },
      {
        "dayNumber": 4,
        "title": "Underwater Dining / Snorkel Safari & Romantic Candlelight Beach Dinner",
        "description": "Day at complete tropical leisure. Optional motorized water sports (jet ski, parasailing, seabob) or scuba diving certification dive. Indulge in an exquisite 4-course romantic candlelight beach dinner served on white sands beneath the tropical night sky with sound of gentle waves.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Tropical Atoll Leisure & Infinity Pool",
          "Optional Motorized Watersports & Jet Ski",
          "Private Candlelight 4-Course Beachfront Dinner"
        ],
        "hotel": "Sun Siyam Olhuveli / Adaaran Club Rannalhi",
        "transfers": "Resort Buggy"
      },
      {
        "dayNumber": 5,
        "title": "Floating Breakfast, Speedboat Transfer to Male Airport & Departure",
        "description": "Enjoy an iconic Floating Breakfast served in your private plunge pool or overwater sundeck. Check-out and speedboat transfer back to Velana International Airport Male for return flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Iconic Floating Breakfast Experience",
          "Return Speedboat Transfer to Male Airport"
        ],
        "hotel": "Departure Day",
        "transfers": "Resort Speedboat"
      }
    ],
    "faqs": [
      {
        "question": "Is visa needed for Maldives?",
        "answer": "Free 30-day Visa on Arrival is granted for all Indian tourists."
      }
    ],
    "coveredCities": [
      "Maldives",
      "Male"
    ],
    "citySlugs": [
      "maldives",
      "male"
    ],
    "state": "Maldives",
    "stateSlug": "maldives",
    "entryCity": "Maldives",
    "exitCity": "Male"
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
    "heroImage": "/destinations/verified/europe-jungfrau.jpg",
    "gallery": [
      "/destinations/verified/europe-jungfrau.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Indian Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai",
    "hotels": [
      {
        "name": "Hotel Novotel Zurich City West",
        "city": "Zurich",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Astoria / Ibis Styles Lucerne",
        "city": "Lucerne",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Metropole / Krebs Interlaken",
        "city": "Interlaken",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Zurich Arrival, Lake Zurich Promenade & Bahnhofstrasse Luxury Walk",
        "description": "Arrive at Zurich Airport (ZRH). Private transfer to hotel. Explore global financial capital Zurich: stroll along pedestrianized Bahnhofstrasse (one of the world's most exclusive shopping avenues), walk through medieval Old Town (Altstadt), visit Grossmunster and Fraumunster churches with Marc Chagall stained glass windows, and enjoy sunset walk along Lake Zurich promenade.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Zurich Airport Private Transfer",
          "Bahnhofstrasse Shopping Boulevard Walk",
          "Fraumunster & Grossmunster Medieval Old Town",
          "Lake Zurich Waterfront Sunset Promenade"
        ],
        "hotel": "Hotel Novotel Zurich City West",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 2,
        "title": "Rhine Falls (Europe's Largest Waterfall) & Stein am Rhein Medieval Town",
        "description": "Morning excursion north to Schaffhausen to witness thunderous roaring Rhine Falls—Europe's most powerful waterfall. Take boat ride right up to the central rock in the middle of churning spray. Proceed to fairytale village Stein am Rhein renowned for extraordinarily well-preserved medieval half-timbered houses with painted stone facades. Return to Zurich.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Rhine Falls Waterfall Panorama & Boat Ride",
          "Rock Climb in Middle of Rhine Falls",
          "Stein am Rhein Medieval Fresco Village Guided Tour"
        ],
        "hotel": "Hotel Novotel Zurich City West",
        "transfers": "Private AC Coach & Boat"
      },
      {
        "dayNumber": 3,
        "title": "Zurich to Lucerne, Chapel Bridge, Lion Monument & Lake Lucerne Paddle Cruise",
        "description": "Drive to picturesque storybook city Lucerne nestled beneath Mount Pilatus (approx. 1 hour). Check-in at hotel. Walk across 14th-century wooden covered Chapel Bridge (Kapellbrücke) and Water Tower, visit poignant Lion Monument (Löwendenkmal) carved into sandstone cliff, and enjoy a scenic 1-hour cruise on Lake Lucerne with mountain views.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Scenic Drive to Lake Lucerne",
          "14th-Century Wooden Chapel Bridge Walk",
          "Lion Monument Sandstone Carving",
          "Lake Lucerne Scenic Steamer Boat Cruise"
        ],
        "hotel": "Hotel Astoria / Ibis Styles Lucerne",
        "transfers": "Private AC Coach & Boat"
      },
      {
        "dayNumber": 4,
        "title": "Mount Titlis Rotair Cable Car, Ice Flyer & Titlis Cliff Walk (3,041m)",
        "description": "Ascend Engelberg valley to board the world's first revolving cable car - Titlis Rotair, rotating 360 degrees as it climbs to eternal snows of Mount Titlis (3,041m). Walk through 150m glacier cave with blue ice walls, brave the Titlis Cliff Walk (Europe's highest suspension bridge soaring over 500m abyss), ride the Ice Flyer chairlift over crevasses, and enjoy snow tubing.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Titlis Rotair 360-Degree Revolving Cable Car",
          "Glacier Cave Walk with Ice Sculptures",
          "Titlis Cliff Walk Highest Suspension Bridge",
          "Ice Flyer Glacial Chairlift Ride"
        ],
        "hotel": "Hotel Astoria / Ibis Styles Lucerne",
        "transfers": "Private AC Coach & Cable Car"
      },
      {
        "dayNumber": 5,
        "title": "GoldenPass Panoramic Train to Interlaken & Harder Kulm Sunset",
        "description": "Board the world-famous GoldenPass Express panoramic train through Brunig Pass alongside turquoise lakes Brienz and Thun to Interlaken nestled between lakes. Check in at hotel. In late afternoon, ride the historic funicular railway up to Harder Kulm (1,322m) 'Top of Interlaken' overlooking Eiger, Mönch, and Jungfrau peaks.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "GoldenPass Scenic Panoramic Train Journey",
          "Interlaken Alpine Resort Check-in",
          "Harder Kulm Funicular Climb & Two-Lakes Bridge Sunset"
        ],
        "hotel": "Hotel Metropole / Krebs Interlaken",
        "transfers": "Panoramic Train & Funicular"
      },
      {
        "dayNumber": 6,
        "title": "Jungfraujoch 'Top of Europe' (3,454m) via Eiger Express Gondola",
        "description": "Highlight of Swiss Alps: ride modern 3S tricable Eiger Express gondola from Grindelwald Terminal soaring past north face of Eiger to Eigergletscher station, board cogwheel train through mountain tunnel arriving at Jungfraujoch (3,454m)—highest railway station in Europe. Step onto Sphinx Observatory terrace overlooking Europe's longest glacier (Aletsch Glacier - 22 km), explore Ice Palace, and visit Alpine Sensation.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Eiger Express State-of-the-Art Tri-Cable Gondola",
          "Jungfraubahn Cogwheel Alpine Train",
          "Sphinx Observation Terrace Aletsch Glacier Panorama",
          "Ice Palace Glacial Sculptures Tour"
        ],
        "hotel": "Hotel Metropole / Krebs Interlaken",
        "transfers": "Eiger Express & Mountain Train"
      },
      {
        "dayNumber": 7,
        "title": "Fairytale Lauterbrunnen 72 Waterfalls Valley & Grindelwald First Walk",
        "description": "Explore magical Lauterbrunnen valley of 72 cascading waterfalls, including Staubbach Falls tumbling 300m off vertical cliffs. Proceed to alpine adventure hub Grindelwald First: walk the steel cantilevered First Cliff Walk by Tissot hugging sheer rock faces. Afternoon free in Interlaken for Swiss chocolate and Victorinox Swiss Army knife shopping.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Lauterbrunnen Valley of 72 Waterfalls Walk",
          "Staubbach Falls Cascade Viewing",
          "Grindelwald First Cliff Walk by Tissot",
          "Swiss Lindt Chocolate & Clock Shopping"
        ],
        "hotel": "Hotel Metropole / Krebs Interlaken",
        "transfers": "Private AC Coach & Gondola"
      },
      {
        "dayNumber": 8,
        "title": "Scenic Transfer to Zurich Airport & Departure",
        "description": "Enjoy breakfast overlooking alpine meadows. Private AC coach transfer to Zurich International Airport (ZRH - approx. 2 hours) for your onward flight with golden memories of Switzerland.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Swiss Alpine Breakfast",
          "Zurich Airport Departure Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Coach"
      }
    ],
    "faqs": [
      {
        "question": "Do you provide Schengen visa processing?",
        "answer": "Yes, full Schengen visa documentation & appointment assistance is provided."
      }
    ],
    "coveredCities": [
      "Zurich",
      "Lucerne",
      "Interlaken"
    ],
    "citySlugs": [
      "zurich",
      "lucerne",
      "interlaken"
    ],
    "state": "Switzerland",
    "stateSlug": "switzerland",
    "entryCity": "Zurich",
    "exitCity": "Interlaken"
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
    "heroImage": "/destinations/verified/vietnam-halong-bay.jpg",
    "gallery": [
      "/destinations/verified/vietnam-halong-bay.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast & Cruise Meals",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Kolkata",
    "hotels": [
      {
        "name": "The Light Hotel / Treebo Hanoi Old Quarter",
        "city": "Hanoi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Paradise Elegance / Athena Luxury Halong Cruise",
        "city": "Halong Bay",
        "rating": "4 Star Cruise",
        "nights": 1
      },
      {
        "name": "Belle Maison Hadana / Treebo Hoi An",
        "city": "Hoi An",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Hanoi Arrival, Old Quarter Cyclo Ride & Water Puppet Show",
        "description": "Arrive at Noi Bai International Airport Hanoi (HAN). Meet your private English-speaking guide. Transfer to hotel in Old Quarter. Experience traditional 1-hour Cyclo (three-wheeled rickshaw) tour through the 36 Guild Streets of Old Quarter. Walk around tranquil Hoan Kiem Lake and cross scarlet Huc Bridge to Ngoc Son Temple. In evening, attend famous traditional Thang Long Water Puppet Show.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Hanoi Airport Private Pickup",
          "Old Quarter 36 Guilds Cyclo Rickshaw Ride",
          "Hoan Kiem Lake & Ngoc Son Temple Walk",
          "Thang Long Traditional Water Puppet Theatre"
        ],
        "hotel": "The Light Hotel / Treebo Hanoi Old Quarter",
        "transfers": "Private AC Minivan & Cyclo"
      },
      {
        "dayNumber": 2,
        "title": "Hanoi Heritage: Ho Chi Minh Complex, Temple of Literature & Train Street",
        "description": "Tour Hanoi historical landmarks: visit Ho Chi Minh Mausoleum complex, Ba Dinh Square, President's Stilt House, and 11th-century One Pillar Pagoda. Tour 1070 CE Temple of Literature (Van Mieu)—Vietnam's first imperial university. Experience sipping authentic egg coffee at famous Hanoi Train Street as the train rushes inches past cafes.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Ho Chi Minh Mausoleum & Stilt House Tour",
          "One Pillar Pagoda Architectural Icon",
          "Temple of Literature Imperial University",
          "Hanoi Train Street Egg Coffee Experience"
        ],
        "hotel": "The Light Hotel / Treebo Hanoi Old Quarter",
        "transfers": "Private AC Minivan"
      },
      {
        "dayNumber": 3,
        "title": "Expressway to Halong Bay, Luxury Cruise, Sung Sot Cave & Kayaking",
        "description": "Drive via modern expressway through Red River Delta to UNESCO World Heritage Halong Bay (approx. 2.5 hours). Embark on luxury 5-star cruise. Enjoy welcome drink and seafood buffet lunch as cruise navigates through thousands of towering limestone karsts. Explore colossal Sung Sot (Surprise) Cave with illuminated stalactites, kayak through Luon Cave lagoon, watch sunset from sundeck, and try night squid fishing.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Red River Delta Highway Drive",
          "5-Star Luxury Halong Cruise Embarkation",
          "Sung Sot (Surprise Cave) Geological Exploration",
          "Luon Cave Kayaking / Bamboo Boat",
          "Sundeck Sunset Cocktail & Squid Fishing"
        ],
        "hotel": "Paradise Elegance / Athena Luxury Halong Cruise",
        "transfers": "Private AC Minivan & Cruise"
      },
      {
        "dayNumber": 4,
        "title": "Sunrise Tai Chi, Ti Top Island, Fly to Da Nang & Lantern Town Hoi An",
        "description": "Early morning Tai Chi session on sundeck as sun rises over limestone peaks. Hike up Ti Top Island for 360-degree panoramic view of Halong Bay and swim on crescent beach. Disembark cruise and transfer to Hanoi Airport for short flight to Da Nang. Drive to UNESCO World Heritage Hoi An Ancient Town (approx. 45 mins). Stroll along lantern-lit streets, Japanese Covered Bridge, and release glowing paper lanterns on Thu Bon River.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Dawn Sunrise Tai Chi on Sundeck",
          "Ti Top Island Mountain Panorama & Swim",
          "Flight to Da Nang & Hoi An Transfer",
          "Hoi An Ancient Lantern Town River Night Walk"
        ],
        "hotel": "Belle Maison Hadana / Treebo Hoi An",
        "transfers": "Cruise, Minivan & Domestic Flight"
      },
      {
        "dayNumber": 5,
        "title": "Sun World Ba Na Hills, World's Longest Cable Car & Iconic Golden Bridge",
        "description": "Excursion to Ba Na Hills mountain resort (1,487m). Ride Guinness World Record single-track cable car soaring above misty waterfalls. Walk across world-famous Golden Bridge (Cau Vang) held aloft by two colossal mossy stone giant hands appearing to sprout from the mountain cliff. Explore French Village with Gothic cathedral, Le Jardin D'Amour flower gardens, and Fantasy Park.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Ba Na Hills World-Record Cable Car Ascent",
          "Golden Bridge Giant Stone Hands Walk",
          "French Village Gothic Architecture Tour",
          "Le Jardin D'Amour Alpine Gardens"
        ],
        "hotel": "Belle Maison Hadana / Treebo Hoi An",
        "transfers": "Private AC Minivan & Cable Car"
      },
      {
        "dayNumber": 6,
        "title": "Marble Mountains, Dragon Bridge & Da Nang Airport Departure Drop",
        "description": "Visit sacred Marble Mountains (Ngu Hanh Son) exploring limestone caves and Buddhist sanctuaries. Photo stop at fire-breathing Dragon Bridge in Da Nang. Private transfer to Da Nang International Airport (DAD) for onward flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Marble Mountains Cave Sanctuaries Tour",
          "Da Nang Dragon Bridge Photo Stop",
          "Da Nang Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Minivan"
      }
    ],
    "faqs": [
      {
        "question": "Is Vietnam e-visa easy?",
        "answer": "Yes, Vietnam e-visa approval takes 3 working days online."
      }
    ],
    "coveredCities": [
      "Hanoi",
      "Halong Bay",
      "Hoi An",
      "Da Nang",
      "Ho Chi Minh"
    ],
    "citySlugs": [
      "hanoi",
      "halong-bay",
      "hoi-an",
      "da-nang",
      "ho-chi-minh"
    ],
    "state": "Vietnam",
    "stateSlug": "vietnam",
    "entryCity": "Hanoi",
    "exitCity": "Ho Chi Minh"
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
    "rating": 5,
    "reviewsCount": 140,
    "heroImage": "/destinations/verified/japan-mount-fuji.jpg",
    "gallery": [
      "/destinations/verified/japan-mount-fuji.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai",
    "hotels": [
      {
        "name": "Hotel Gracery Shinjuku / Sunshine City Prince Tokyo",
        "city": "Tokyo",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Miyako Hotel Kyoto Hachijo / Ibis Kyoto",
        "city": "Kyoto",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Granvia Osaka / Hearton Hotel Osaka",
        "city": "Osaka",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Tokyo Narita / Haneda Arrival, Shinjuku & Shibuya Crossing Walk",
        "description": "Arrive at Tokyo Narita (NRT) or Haneda Airport (HND). Meet assistant and transfer to hotel. Experience Tokyo's buzzing modern energy: walk across world-famous Shibuya Scramble Crossing (busiest pedestrian intersection in the world), take photo with loyal Hachiko Statue, and take high-speed elevator to Shibuya Sky open-air rooftop observation deck for sparkling night skyline views.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Tokyo Airport Meet & Greet Transfer",
          "Shibuya Scramble Crossing Walk",
          "Hachiko Memorial Statue Photo Stop",
          "Shibuya Sky 360-Degree Observation Deck"
        ],
        "hotel": "Hotel Gracery Shinjuku / Sunshine City Prince Tokyo",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 2,
        "title": "Asakusa Senso-ji Temple, Nakamise Street, Akihabara & Meiji Shrine",
        "description": "Visit Tokyo's oldest temple - 7th-century Senso-ji in Asakusa passing beneath giant red Kaminarimon (Thunder Gate) lantern. Stroll Nakamise shopping street for traditional senbei rice crackers. Explore anime and gaming wonderland Akihabara Electric Town. In afternoon, walk through towering forested cedar gate of tranquil Meiji Jingu Shinto Shrine and explore Harajuku Takeshita Street.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Asakusa Senso-ji Temple & Kaminarimon Gate",
          "Nakamise Traditional Edo Street Food Trail",
          "Akihabara Anime & Electronics Culture",
          "Meiji Jingu Shinto Shrine Sacred Forest Walk"
        ],
        "hotel": "Hotel Gracery Shinjuku / Sunshine City Prince Tokyo",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 3,
        "title": "Mount Fuji 5th Station, Lake Ashi Pirate Cruise & Hakone Ropeway",
        "description": "Full day excursion to sacred Mount Fuji (UNESCO). Drive up to Mt. Fuji 5th Station at 2,300 meters above sea level overlooking sea of clouds. Proceed to Hakone national park: embark on a cruise across volcanic crater Lake Ashi on a replica pirate ship with Mount Fuji reflections. Ride Hakone Ropeway over steaming volcanic sulfur vents of Owakudani valley and taste legendary black eggs (kuro-tamago).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Mount Fuji 5th Station High Altitude Viewpoint",
          "Lake Ashi Pirate Ship Scenic Cruise",
          "Hakone Ropeway Cable Car Ride",
          "Owakudani Active Volcanic Valley Black Egg Trail"
        ],
        "hotel": "Hotel Gracery Shinjuku / Sunshine City Prince Tokyo",
        "transfers": "Private AC Coach, Ship & Ropeway"
      },
      {
        "dayNumber": 4,
        "title": "Shinkansen Bullet Train to Kyoto, Fushimi Inari Torii Gates & Gion",
        "description": "Board the ultra-fast Shinkansen Bullet Train (traveling at 300 km/h) from Tokyo to cultural heart of Japan - Kyoto (approx. 2 hours 15 mins). Check-in at hotel. Visit Fushimi Inari Taisha Shrine walking through thousands of vermilion Torii gates snaking up sacred Inari mountain. In evening, walking tour of historic Gion geisha district along cobblestone Hanami-koji street.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Shinkansen Bullet Train 300 km/h Experience",
          "Fushimi Inari 10,000 Vermilion Torii Gates Path",
          "Gion Historic Wooden Tea House Geisha District Walk"
        ],
        "hotel": "Miyako Hotel Kyoto Hachijo / Ibis Kyoto",
        "transfers": "Shinkansen Bullet Train & Coach"
      },
      {
        "dayNumber": 5,
        "title": "Arashiyama Bamboo Grove, Golden Pavilion (Kinkaku-ji) & Transfer to Osaka",
        "description": "Walk through mystical soaring stalks of Arashiyama Bamboo Grove, cross historic wooden Togetsukyo Bridge, and visit UNESCO World Heritage Tenryu-ji Temple Zen garden. Visit iconic Kinkaku-ji (Golden Pavilion)—a Zen temple whose top two floors are completely covered in pure gold leaf reflecting in Kyoko-chi mirror pond. Short evening transfer to vibrant Osaka.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Arashiyama Soaring Bamboo Forest Walk",
          "Togetsukyo Moon Crossing Bridge",
          "Kinkaku-ji Golden Pavilion Pure Gold Leaf Marvel",
          "Scenic Transfer to Osaka"
        ],
        "hotel": "Hotel Granvia Osaka / Hearton Hotel Osaka",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 6,
        "title": "Osaka Castle, Dotonbori Street Food Fiesta & Umeda Sky Building",
        "description": "Tour 16th-century Osaka Castle surrounded by stone walls and moats. Ascend Umeda Sky Building Floating Garden Observatory suspended 173m between twin towers. In evening, plunge into neon food haven Dotonbori: photograph the iconic running Glico Man sign, giant moving mechanical crab, and feast on street food specialties like Takoyaki (octopus balls) and Okonomiyaki.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Osaka Castle Samurai Heritage Museum",
          "Umeda Sky Building Floating Observatory",
          "Dotonbori Glico Man Neon Sign Walk",
          "Authentic Takoyaki & Okonomiyaki Street Food Tour"
        ],
        "hotel": "Hotel Granvia Osaka / Hearton Hotel Osaka",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 7,
        "title": "Osaka Kansai International Airport Departure Drop",
        "description": "Enjoy breakfast. Complete check-out and private transfer to Kansai International Airport Osaka (KIX) for your flight home with timeless memories of Japan.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Japanese Breakfast Buffet",
          "Osaka Kansai Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Coach"
      }
    ],
    "faqs": [
      {
        "question": "Is Japan visa required?",
        "answer": "Yes, Japan e-visa assistance is provided."
      }
    ],
    "coveredCities": [
      "Tokyo",
      "Kyoto",
      "Osaka",
      "Mount Fuji"
    ],
    "citySlugs": [
      "tokyo",
      "kyoto",
      "osaka",
      "mount-fuji"
    ],
    "state": "Japan",
    "stateSlug": "japan",
    "entryCity": "Tokyo",
    "exitCity": "Mount Fuji"
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
    "gallery": [
      "/destinations/australia.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Singapore",
    "hotels": [
      {
        "name": "Rydges Sydney Harbour / Treebo Sydney",
        "city": "Sydney",
        "rating": "3 Star",
        "nights": 4
      },
      {
        "name": "Novotel Cairns Oasis Resort / Treebo Cairns",
        "city": "Cairns",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Sydney Arrival, Darling Harbour Stroll & Sydney Tower Eye 360",
        "description": "Arrive at Sydney Kingsford Smith Airport (SYD). Meet private guide and transfer to hotel. Explore Darling Harbour waterfront promenade. Ascend to observation deck of Sydney Tower Eye (highest point in Sydney at 250m) for breathtaking 360-degree views stretching from golden beaches to Blue Mountains. Evening dining at Cockle Bay Wharf.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Sydney Airport Meet & Greet Transfer",
          "Darling Harbour Waterfront Walk",
          "Sydney Tower Eye Observation Deck Entry"
        ],
        "hotel": "Rydges Sydney Harbour / Treebo Sydney",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 2,
        "title": "Sydney Opera House Guided Tour, Harbour Bridge & Bondi Beach Coastal Walk",
        "description": "Guided architectural tour inside world-heritage icon Sydney Opera House discovering famous sail roofs and performance halls. Walk along the historic Rocks district and across Sydney Harbour Bridge pedestrian pathway. Drive past affluent eastern suburbs to world-famous Bondi Beach: walk the scenic coastal cliff path to Tamarama Beach watching surfers in rolling Pacific waves.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sydney Opera House Official Guided Inside Tour",
          "Sydney Harbour Bridge Pylon Lookout Walk",
          "The Rocks Historic Cobblestone Quarter",
          "Bondi to Tamarama Coastal Cliffside Walk"
        ],
        "hotel": "Rydges Sydney Harbour / Treebo Sydney",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 3,
        "title": "Blue Mountains UNESCO World Heritage, Scenic World & Three Sisters",
        "description": "Full day tour to Blue Mountains National Park. Stop at Echo Point to admire legendary Three Sisters sandstone rock formation overlooking vast Jamison Valley blue haze created by eucalyptus oil vapors. At Scenic World, ride the Scenic Railway (world's steepest passenger railway descending 52-degree incline), ride Scenic Cableway, and glide on glass-floor Scenic Skyway 270m above canyon floor. Walk rainforest boardwalk.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Echo Point Three Sisters Rock Viewing",
          "Scenic World 3-in-1 Rides (Railway, Cableway, Skyway)",
          "Jamison Valley Ancient Rainforest Walk",
          "Katoomba Waterfalls Scenic Stop"
        ],
        "hotel": "Rydges Sydney Harbour / Treebo Sydney",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 4,
        "title": "Flight to Tropical Cairns & Esplanade Lagoon Sunset Stroll",
        "description": "Transfer to Sydney Airport for domestic flight to tropical Cairns in North Queensland—the gateway to Great Barrier Reef and Daintree Rainforest. Arrive in Cairns, check in at resort. Afternoon walk along palm-fringed Cairns Esplanade and swim in the oceanfront saltwater swimming lagoon.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Sydney Airport Transfer & Domestic Flight to Cairns",
          "Cairns Tropical Resort Check-in",
          "Cairns Esplanade Lagoon Oceanfront Stroll"
        ],
        "hotel": "Novotel Cairns Oasis Resort / Treebo Cairns",
        "transfers": "Private Coach & Domestic Flight"
      },
      {
        "dayNumber": 5,
        "title": "Full Day Outer Great Barrier Reef Luxury Catamaran Cruise & Snorkel",
        "description": "Board high-speed luxury catamaran cruise to an activity pontoon anchored at Outer Great Barrier Reef (UNESCO World Heritage)—the largest living organism on planet earth. Enjoy guided coral reef snorkeling with all gear provided, tour the reef in a semi-submersible glass-bottom submarine, visit the underwater observatory chamber, and relish a hot and cold buffet seafood lunch.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Outer Great Barrier Reef High-Speed Cruise",
          "All-Inclusive Guided Coral Reef Snorkeling",
          "Semi-Submersible Submarine Coral Tour",
          "Underwater Marine Observatory Window Viewing",
          "Tropical Buffet Lunch on Reef Pontoon"
        ],
        "hotel": "Novotel Cairns Oasis Resort / Treebo Cairns",
        "transfers": "Luxury Reef Catamaran Cruise"
      },
      {
        "dayNumber": 6,
        "title": "Kuranda Rainforest Scenic Railway & Skyrail Rainforest Cableway",
        "description": "Board historic Kuranda Scenic Railway vintage wooden carriages climbing through Barron Gorge National Park past tunnels, bridges, and roaring Barron Falls to mountain village Kuranda. Explore Kuranda Heritage Markets and Australian Butterfly Sanctuary. Return gliding just meters above World Heritage tropical canopy on the 7.5 km Skyrail Rainforest Cableway.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Kuranda Scenic Railway Heritage Mountain Train",
          "Barron Falls Waterfall Lookout Stop",
          "Kuranda Rainforest Heritage Village Markets",
          "Skyrail Rainforest Cableway Canopy Glide"
        ],
        "hotel": "Novotel Cairns Oasis Resort / Treebo Cairns",
        "transfers": "Historic Train, Skyrail & Coach"
      },
      {
        "dayNumber": 7,
        "title": "Cairns Tropical Leisure, Aboriginal Cultural Experience & Farewell Dinner",
        "description": "Day at leisure in tropical Cairns. Visit Tjapukai or Pamagirri Aboriginal Cultural Centre to experience traditional boomerang throwing, didgeridoo playing, and spear demonstrations. Enjoy a farewell Australian dinner at seaside marina.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Aboriginal Cultural Boomerang Experience",
          "Cairns Marina Souvenir Shopping",
          "Australian Seafood Farewell Dinner"
        ],
        "hotel": "Novotel Cairns Oasis Resort / Treebo Cairns",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 8,
        "title": "Cairns / Sydney Airport Departure Drop",
        "description": "Enjoy breakfast. Check-out and private transfer to Cairns International Airport (CNS) or connecting flight via Sydney for your onward flight home with magnificent Australian memories.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Resort Check-out",
          "Cairns Airport Departure Transfer"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Coach"
      }
    ],
    "faqs": [
      {
        "question": "Is Australia visa process online?",
        "answer": "Yes, 100% online Subclass 600 tourist visa processed."
      }
    ],
    "coveredCities": [
      "Sydney",
      "Cairns"
    ],
    "citySlugs": [
      "sydney",
      "cairns"
    ],
    "state": "Australia",
    "stateSlug": "australia",
    "entryCity": "Sydney",
    "exitCity": "Cairns"
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
    "heroImage": "/destinations/verified/malaysia-petronas-towers.jpg",
    "gallery": [
      "/destinations/verified/malaysia-petronas-towers.jpg"
    ],
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast Included",
    "flightsIncluded": true,
    "transfersIncluded": true,
    "departureCity": "Delhi / Mumbai / Chennai",
    "hotels": [
      {
        "name": "Ibis Kuala Lumpur City Centre / Treebo KL",
        "city": "Kuala Lumpur",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Resorts World Genting - First World Hotel",
        "city": "Genting Highlands",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Kuala Lumpur Arrival, Petronas Twin Towers SkyBridge & KLCC Lake Symphony",
        "description": "Arrive at Kuala Lumpur International Airport (KLIA/KLIA2). Meet driver and transfer to hotel in golden triangle. Ascend to the 41st floor double-decker SkyBridge and 86th floor observation deck of the world's tallest twin towers—Petronas Twin Towers (452m). In evening, watch illuminated Lake Symphony musical water fountain light show at KLCC Park and explore Bukit Bintang street food.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "KLIA Airport Private Transfer",
          "Petronas Twin Towers SkyBridge & 86th Floor Entry",
          "KLCC Park Lake Symphony Light & Sound Show",
          "Bukit Bintang Jalan Alor Street Food Walk"
        ],
        "hotel": "Ibis Kuala Lumpur City Centre / Treebo KL",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 2,
        "title": "Batu Caves Rainbow Steps, Lord Murugan Statue & KL City Tour",
        "description": "Drive to sacred Batu Caves—a 400-million-year-old limestone hill. Marvel at the 140-foot colossal golden Lord Murugan statue and climb 272 colorful rainbow steps into Cathedral Cave. Return to city: tour King's Palace (Istana Negara), National Monument, Merdeka Square (Independence Square), Sultan Abdul Samad Moorish building, and National Mosque (Masjid Negara).",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Batu Caves 140-Foot Golden Murugan Statue",
          "272 Rainbow Steps Cathedral Cave Climb",
          "King's Palace (Istana Negara) Guard Changing",
          "Merdeka Square & Sultan Abdul Samad Building"
        ],
        "hotel": "Ibis Kuala Lumpur City Centre / Treebo KL",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 3,
        "title": "Drive to Genting Highlands, Awana SkyWay Cable Car & Skytropolis Theme Park",
        "description": "Drive north ascending Titiwangsa mountains to Genting Highlands (approx. 1 hour). Board Awana SkyWay gondola cable car gliding over 130-million-year-old rainforest with a stop at Chin Swee Caves Temple featuring a 9-story pagoda. Check in at mountain resort. Spend afternoon at Skytropolis Indoor Theme Park and SkyAvenue retail and entertainment hub.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Awana SkyWay Gondola Cable Car Ride",
          "Chin Swee Caves Temple & 9-Story Pagoda",
          "Skytropolis Indoor Theme Park Unlimited Rides",
          "SkyAvenue Casino & Entertainment Walk"
        ],
        "hotel": "Resorts World Genting - First World Hotel",
        "transfers": "Private AC Coach & Cable Car"
      },
      {
        "dayNumber": 4,
        "title": "Genting SkyWorlds Outdoor Theme Park, Putrajaya Tour & KL Return",
        "description": "Morning thrills at world-class Genting SkyWorlds Outdoor Theme Park featuring 9 movie-inspired worlds including Ice Age, Night at the Museum, and Rio. In afternoon, descend mountain and visit administrative capital Putrajaya: admire pink granite Putra Mosque, Prime Minister's office Perdana Putra, and Putrajaya Lake cruise. Return to Kuala Lumpur for night stay.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Genting SkyWorlds Outdoor Theme Park Attractions",
          "Putrajaya Administrative Capital Guided Tour",
          "Pink Granite Putra Mosque Architectural Tour",
          "Perdana Putra Prime Minister Complex View"
        ],
        "hotel": "Ibis Kuala Lumpur City Centre / Treebo KL",
        "transfers": "Private AC Coach"
      },
      {
        "dayNumber": 5,
        "title": "Central Market Souvenir Shopping & KLIA Airport Departure Drop",
        "description": "Morning visit to historic Central Market (Pasar Seni) and Chinatown Petaling Street for Malaysian pewter, batik sarongs, and souvenirs. Check-out and private transfer to Kuala Lumpur International Airport (KLIA) for your onward flight.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Central Market Cultural Handicraft Shopping",
          "Chinatown Petaling Street Souvenir Walk",
          "KLIA Airport Departure Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Coach"
      }
    ],
    "faqs": [
      {
        "question": "Do Indian passport holders get Visa Free Entry to Malaysia?",
        "answer": "Yes, Malaysia offers Visa-Free entry for Indian citizens for up to 30 days."
      }
    ],
    "coveredCities": [
      "Kuala Lumpur",
      "Genting Highlands",
      "Genting"
    ],
    "citySlugs": [
      "kuala-lumpur",
      "genting-highlands",
      "genting"
    ],
    "state": "Malaysia",
    "stateSlug": "malaysia",
    "entryCity": "Kuala Lumpur",
    "exitCity": "Genting"
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
    "heroImage": "/destinations/verified/thailand-railay.jpg",
    "gallery": [
      "/destinations/verified/thailand-railay.jpg",
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
        "title": "Arrival in Phuket – Hotel Transfer & Leisure",
        "description": "Arrive at Phuket International Airport, meet our local representative, and transfer to your 3-star hotel. Evening free to explore Patong Beach and Bangla Road night markets.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach Walk",
          "Bangla Road Night Market"
        ],
        "hotel": "Patong Beach Hotel 3★ / Similar",
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
        "hotel": "Patong Beach Hotel 3★ / Similar",
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
        "hotel": "Patong Beach Hotel 3★ / Similar",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Transfer to Krabi – Check-in & Evening Beach Stroll",
        "description": "Scenic road transfer from Phuket to Krabi. Check-in to your resort and enjoy free time at Ao Nang Beach and local night markets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Scenic Coastal Drive",
          "Ao Nang Beach Leisure"
        ],
        "hotel": "Ao Nang Resort 3★ / Similar",
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
        "hotel": "Ao Nang Resort 3★ / Similar",
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
        "hotel": "Departure Day",
        "transfers": "Private Airport Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Patong Beach Hotel 3★",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Ao Nang Cliff Resort 3★",
        "city": "Krabi",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price per person for this Thailand 5N/6D package?",
        "answer": "The official price is ₹24,500 per person on double sharing basis for a minimum group of 4 pax (increased by ₹5k over flyer rate ₹19,500)."
      },
      {
        "question": "Are island boat tours included?",
        "answer": "Yes, full day Phi Phi Islands Speedboat tour and Krabi 4 Islands tour are included."
      }
    ],
    "coveredCities": [
      "Phuket",
      "Krabi"
    ],
    "citySlugs": [
      "phuket",
      "krabi"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Phuket",
    "exitCity": "Krabi"
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
    "heroImage": "/destinations/verified/thailand-wat-arun.jpg",
    "gallery": [
      "/destinations/verified/thailand-wat-arun.jpg",
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
        "title": "Arrival in Phuket – Leisure & Nightlife",
        "description": "Arrive in Phuket, private transfer to hotel. Explore Bangla Road and Patong nightlife.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach"
        ],
        "hotel": "Phuket 3★ Hotel",
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
        "hotel": "Phuket 3★ Hotel",
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
        "hotel": "Phuket 3★ Hotel",
        "transfers": "At Leisure / Local Exploration"
      },
      {
        "dayNumber": 4,
        "title": "Flight to Bangkok – Transfer to Pattaya",
        "description": "Fly to Bangkok and private drive to beach city Pattaya. Evening Alcazar Cabaret Show.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Alcazar Show"
        ],
        "hotel": "Pattaya 3★ Hotel",
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
        "hotel": "Pattaya 3★ Hotel",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Transfer to Bangkok – Temple & City Tour",
        "description": "Drive to Bangkok. Visit Wat Traimit (Golden Buddha) and Wat Benchamabophit.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "City Temple Tour"
        ],
        "hotel": "Bangkok 3★ Hotel",
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
        "hotel": "Bangkok 3★ Hotel",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket City Hotel 3★",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Pattaya Beach Resort 3★",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bangkok Center Hotel 3★",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the package price for 7N/8D Thailand Trio?",
        "answer": "The price is ₹29,200 per person (increased by ₹5k from flyer rate ₹24,200) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Phuket",
      "Pattaya",
      "Bangkok"
    ],
    "citySlugs": [
      "phuket",
      "pattaya",
      "bangkok"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Phuket",
    "exitCity": "Bangkok"
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
    "heroImage": "/destinations/verified/thailand-grand-palace.jpg",
    "gallery": [
      "/destinations/verified/thailand-grand-palace.jpg",
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
        "title": "Arrival Phuket – Hotel Check-in",
        "description": "Airport arrival and transfer to Phuket resort. Evening Patong beach leisure.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach"
        ],
        "hotel": "Phuket Resort 3★",
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
        "hotel": "Phuket Resort 3★",
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
        "hotel": "Phuket Resort 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Scenic Drive Phuket to Krabi",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Phuket, Krabi, Bangkok. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Krabi Resort 3★",
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
        "hotel": "Krabi Resort 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Flight Krabi to Bangkok – City Tour",
        "description": "Fly to Bangkok, half day Golden Buddha and Marble Temple tour.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Bangkok City Tour"
        ],
        "hotel": "Bangkok Hotel 3★",
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
        "hotel": "Bangkok Hotel 3★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket Resort 3★",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Krabi Cliff Resort 3★",
        "city": "Krabi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bangkok City Hotel 3★",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹32,000 per person (increased by ₹5k from flyer rate ₹27,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Phuket",
      "Krabi",
      "Bangkok"
    ],
    "citySlugs": [
      "phuket",
      "krabi",
      "bangkok"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Phuket",
    "exitCity": "Bangkok"
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
    "heroImage": "/destinations/verified/thailand-sanctuary-truth.jpg",
    "gallery": [
      "/destinations/verified/thailand-sanctuary-truth.jpg",
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
        "title": "Arrival Phuket – Patong Beach",
        "description": "Arrival in Phuket, transfer to hotel. Relax at Patong Beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "Patong Beach"
        ],
        "hotel": "Phuket Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phi Phi Islands Speedboat Tour",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Phuket, Krabi, Pattaya, Bangkok. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Phuket Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Phuket to Krabi Transfer – Ao Nang Beach",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Phuket, Krabi, Pattaya, Bangkok. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Krabi Hotel 3★",
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
        "hotel": "Krabi Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Flight to Bangkok – Drive to Pattaya",
        "description": "Flight to Bangkok, drive to Pattaya. Evening Alcazar Show.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Alcazar Show"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Coral Island Speedboat Tour with Lunch",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Phuket, Krabi, Pattaya, Bangkok. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 7,
        "title": "Pattaya to Bangkok Transfer – City & Temple Tour",
        "description": "Transfer to Bangkok. Visit Golden Buddha and Marble Temple.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Bangkok City Tour"
        ],
        "hotel": "Bangkok Hotel 3★",
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
        "hotel": "Bangkok Hotel 3★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket Hotel 3★",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Krabi Hotel 3★",
        "city": "Krabi",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Pattaya Hotel 3★",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bangkok Hotel 3★",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹34,500 per person (increased by ₹5k from flyer rate ₹29,500) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Phuket",
      "Krabi",
      "Pattaya",
      "Bangkok"
    ],
    "citySlugs": [
      "phuket",
      "krabi",
      "pattaya",
      "bangkok"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Phuket",
    "exitCity": "Bangkok"
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
    "heroImage": "/destinations/verified/almaty-city.jpg",
    "gallery": [
      "/destinations/verified/almaty-city.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival in Almaty – Hotel Transfer & Evening Leisure",
        "description": "Arrive at Almaty International Airport (ALA). Free Visa on Arrival processing for Indians. Meet private driver and transfer to hotel. Evening at leisure.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport Welcome",
          "Almaty Evening Stroll"
        ],
        "hotel": "Almaty Grand Hotel 4★ / Similar",
        "transfers": "Private Airport Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Shymbulak Ski Resort & Medeo High Altitude Complex",
        "description": "Ride world-class cable cars to Shymbulak Ski Resort located at 2,260m altitude. Visit Medeo, the world’s highest outdoor speed skating rink amidst snow-capped peaks.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Shymbulak Cable Car",
          "Medeo Ice Rink Visit",
          "Alpine Photography"
        ],
        "hotel": "Almaty Grand Hotel 4★ / Similar",
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
        "hotel": "Almaty Grand Hotel 4★ / Similar",
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
        "hotel": "Departure Day",
        "transfers": "Private Airport Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Almaty Grand Hotel 4★",
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
        "answer": "Price is ₹34,000 per person (increased by ₹5k from flyer rate ₹29,000) for min 4 pax private tour."
      }
    ],
    "coveredCities": [
      "Almaty"
    ],
    "citySlugs": [
      "almaty"
    ],
    "state": "Kazakhstan",
    "stateSlug": "kazakhstan",
    "entryCity": "Almaty",
    "exitCity": "Almaty"
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
    "heroImage": "/destinations/verified/almaty-city.jpg",
    "gallery": [
      "/destinations/verified/almaty-city.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Almaty – Hotel Transfer",
        "description": "Arrival in Almaty, airport greeting and hotel check-in.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "Almaty Hotel 4★",
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
        "hotel": "Almaty Hotel 4★",
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
        "hotel": "Almaty Hotel 4★",
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
        "hotel": "Almaty Hotel 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Almaty Plaza Hotel 4★",
        "city": "Almaty",
        "rating": "4 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹46,000 per person (increased by ₹5k from flyer rate ₹41,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Almaty"
    ],
    "citySlugs": [
      "almaty"
    ],
    "state": "Kazakhstan",
    "stateSlug": "kazakhstan",
    "entryCity": "Almaty",
    "exitCity": "Almaty"
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
    "heroImage": "/destinations/verified/almaty-charyn-canyon.jpg",
    "gallery": [
      "/destinations/verified/almaty-charyn-canyon.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Almaty – Transfer to Hotel",
        "description": "Arrival in Almaty, private greeting and transfer to 4-star hotel.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "Almaty Luxury Hotel 4★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Shymbulak Ski Resort & Medeo Rink",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Almaty. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Almaty Luxury Hotel 4★",
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
        "hotel": "Almaty Luxury Hotel 4★",
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
        "hotel": "Almaty Luxury Hotel 4★",
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
        "hotel": "Almaty Luxury Hotel 4★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Almaty Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Almaty Palace Hotel 4★",
        "city": "Almaty",
        "rating": "4 Star",
        "nights": 5
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹56,000 per person (increased by ₹5k from flyer rate ₹51,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Almaty"
    ],
    "citySlugs": [
      "almaty"
    ],
    "state": "Kazakhstan",
    "stateSlug": "kazakhstan",
    "entryCity": "Almaty",
    "exitCity": "Almaty"
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
    "heroImage": "/destinations/verified/vietnam-bana-hills.jpg",
    "gallery": [
      "/destinations/verified/vietnam-bana-hills.jpg",
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
        "title": "Da Nang Arrival – Free Leisure",
        "description": "Arrive at Da Nang International Airport, transfer to hotel. Free leisure evening at My Khe Beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "My Khe Beach"
        ],
        "hotel": "Da Nang Beach Hotel 3★",
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
        "hotel": "Da Nang Beach Hotel 3★",
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
        "hotel": "Da Nang Beach Hotel 3★",
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
        "hotel": "Da Nang Beach Hotel 3★",
        "transfers": "At Leisure / Local Exploration"
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
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Da Nang Central Hotel 3★",
        "city": "Da Nang",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹27,000 per person (increased by ₹5k from flyer rate ₹22,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Da Nang",
      "Hoi An"
    ],
    "citySlugs": [
      "da-nang",
      "hoi-an"
    ],
    "state": "Vietnam",
    "stateSlug": "vietnam",
    "entryCity": "Da Nang",
    "exitCity": "Hoi An"
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
    "heroImage": "/destinations/verified/vietnam-ho-chi-minh.jpg",
    "gallery": [
      "/destinations/verified/vietnam-ho-chi-minh.jpg",
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
        "title": "Arrival Ho Chi Minh City – Free Evening",
        "description": "Arrive Tan Son Nhat Airport, transfer to hotel. Free evening to explore Saigon night market.",
        "meals": [
          "None"
        ],
        "activities": [
          "Saigon Night Market"
        ],
        "hotel": "Ho Chi Minh Hotel 3★",
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
        "hotel": "Ho Chi Minh Hotel 3★",
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
        "hotel": "Ho Chi Minh Hotel 3★",
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
        "hotel": "Ho Chi Minh Hotel 3★",
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
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Saigon Boutique Hotel 3★",
        "city": "Ho Chi Minh",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹34,000 per person (increased by ₹5k from flyer rate ₹29,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Ho Chi Minh"
    ],
    "citySlugs": [
      "ho-chi-minh"
    ],
    "state": "Vietnam",
    "stateSlug": "vietnam",
    "entryCity": "Ho Chi Minh",
    "exitCity": "Ho Chi Minh"
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
    "heroImage": "/destinations/verified/vietnam-sapa.jpg",
    "gallery": [
      "/destinations/verified/vietnam-sapa.jpg",
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
      "3 Nights Hanoi (3★) + 1 Night Sapa (3★)",
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
        "title": "Hanoi Arrival – Free Leisure",
        "description": "Arrive in Hanoi, check in hotel. Walk around Hoan Kiem Lake and Old Quarter.",
        "meals": [
          "None"
        ],
        "activities": [
          "Hoan Kiem Lake Walk"
        ],
        "hotel": "Hanoi Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Hanoi to Sapa – Cat Cat Village Trekking",
        "description": "Scenic bus drive to Sapa. Trek through Cat Cat Village, learn Black Hmong culture. Overnight in Sapa. Dinner included.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Cat Cat Village Trek"
        ],
        "hotel": "Sapa Mountain Hotel 3★",
        "transfers": "SIC Coach"
      },
      {
        "dayNumber": 3,
        "title": "Fansipan Peak Cable Car – Return to Hanoi",
        "description": "Ride cable car to Fansipan Peak summit. Return to Hanoi in the evening.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Fansipan Cable Car"
        ],
        "hotel": "Hanoi Hotel 3★",
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
        "hotel": "Hanoi Hotel 3★",
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
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Hanoi Old Quarter Hotel 3★",
        "city": "Hanoi",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Sapa Valley Hotel 3★",
        "city": "Sapa",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹38,000 per person (increased by ₹5k from flyer rate ₹33,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Hanoi",
      "Sapa"
    ],
    "citySlugs": [
      "hanoi",
      "sapa"
    ],
    "state": "Vietnam",
    "stateSlug": "vietnam",
    "entryCity": "Hanoi",
    "exitCity": "Sapa"
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
    "heroImage": "/destinations/verified/dubai-burj-khalifa.jpg",
    "gallery": [
      "/destinations/verified/dubai-burj-khalifa.jpg",
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
      "4 Nights Hotel Stay (3-Star ₹54,000 / 4-Star ₹60,000)",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Dubai – Private Transfer & Dhow Cruise",
        "description": "Arrival in Dubai, private transfer to hotel. Evening Marina Dhow Dinner Cruise with live Tanoura dance show.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Marina Dhow Cruise",
          "Tanoura Dance"
        ],
        "hotel": "Dubai Hotel 3★ / 4★",
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
        "hotel": "Dubai Hotel 3★ / 4★",
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
        "hotel": "Dubai Hotel 3★ / 4★",
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
        "hotel": "Dubai Hotel 3★ / 4★",
        "transfers": "At Leisure / Local Exploration"
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
        "hotel": "Departure Day",
        "transfers": "Private Airport Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Citymax Hotel Bur Dubai 3★ / Aloft Meaisam 4★",
        "city": "Dubai",
        "rating": "3 Star / 4 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "3-Star Hotel option is ₹54,000 per person and 4-Star Hotel option is ₹60,000 per person (increased by ₹5k from flyer rates ₹49k/₹55k) for min 2 pax."
      }
    ],
    "coveredCities": [
      "Dubai"
    ],
    "citySlugs": [
      "dubai"
    ],
    "state": "United Arab Emirates",
    "stateSlug": "united-arab-emirates",
    "entryCity": "Dubai",
    "exitCity": "Dubai"
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
    "heroImage": "/destinations/verified/dubai-sheikh-zayed-mosque.jpg",
    "gallery": [
      "/destinations/verified/dubai-sheikh-zayed-mosque.jpg",
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
      "5 Nights Hotel Stay (3-Star ₹64,000 / 4-Star ₹70,000)",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Dubai – Dhow Dinner Cruise",
        "description": "Private airport transfer to hotel. Evening Marina Dhow Dinner Cruise.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dhow Cruise"
        ],
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Dubai Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Ibis Styles Bur Dubai 3★ / Grand Excelsior 4★",
        "city": "Dubai",
        "rating": "3 Star / 4 Star",
        "nights": 5
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "3-Star option is ₹64,000 per person and 4-Star option is ₹70,000 per person (increased by ₹5k from flyer rates ₹59k/₹65k) for min 2 pax."
      }
    ],
    "coveredCities": [
      "Dubai",
      "Abu Dhabi"
    ],
    "citySlugs": [
      "dubai",
      "abu-dhabi"
    ],
    "state": "United Arab Emirates",
    "stateSlug": "united-arab-emirates",
    "entryCity": "Dubai",
    "exitCity": "Abu Dhabi"
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
    "heroImage": "/destinations/verified/dubai-ferrari-world.jpg",
    "gallery": [
      "/destinations/verified/dubai-ferrari-world.jpg",
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
      "6 Nights Hotel Stay (3-Star ₹69,000 / 4-Star ₹75,000)",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Arrival Dubai – Marina Dhow Cruise",
        "description": "Arrival in Dubai, private transfer to hotel. Evening Marina Dhow Cruise.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Dhow Cruise"
        ],
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
        "transfers": "4x4 Shared"
      },
      {
        "dayNumber": 5,
        "title": "Full Day Abu Dhabi City Tour",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Dubai, Abu Dhabi. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Dubai Hotel 3★/4★",
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
        "hotel": "Dubai Hotel 3★/4★",
        "transfers": "At Leisure / Local Exploration"
      },
      {
        "dayNumber": 7,
        "title": "Dubai Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Howard Johnson Bur Dubai 3★ / Millenium Place 4★",
        "city": "Dubai",
        "rating": "3 Star / 4 Star",
        "nights": 6
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "3-Star option is ₹69,000 per person and 4-Star option is ₹75,000 per person (increased by ₹5k from flyer rates ₹64k/₹70k) for min 2 pax."
      }
    ],
    "coveredCities": [
      "Dubai",
      "Abu Dhabi"
    ],
    "citySlugs": [
      "dubai",
      "abu-dhabi"
    ],
    "state": "United Arab Emirates",
    "stateSlug": "united-arab-emirates",
    "entryCity": "Dubai",
    "exitCity": "Abu Dhabi"
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
    "heroImage": "/destinations/verified/vietnam-phu-quoc.jpg",
    "gallery": [
      "/destinations/verified/vietnam-phu-quoc.jpg",
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
      "4 Nights Beach Resort Stay in Phu Quoc (4★)",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Breakfast Only)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Phu Quoc Arrival – Beach Relaxation",
        "description": "Arrive at Phu Quoc International Airport, transfer to resort. Free time on Sunset Sanato beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "Beach Relaxation"
        ],
        "hotel": "Phu Quoc Beach Resort 4★",
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
        "hotel": "Phu Quoc Beach Resort 4★",
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
        "hotel": "Phu Quoc Beach Resort 4★",
        "transfers": "At Leisure / Local Exploration"
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
        "hotel": "Phu Quoc Beach Resort 4★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 5,
        "title": "Phu Quoc Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phu Quoc Ocean Resort 4★",
        "city": "Phu Quoc",
        "rating": "4 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹35,500 per person (increased by ₹5k from flyer rate ₹30,500) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Phu Quoc"
    ],
    "citySlugs": [
      "phu-quoc"
    ],
    "state": "Vietnam",
    "stateSlug": "vietnam",
    "entryCity": "Phu Quoc",
    "exitCity": "Phu Quoc"
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
    "heroImage": "/destinations/verified/vietnam-danang.jpg",
    "gallery": [
      "/destinations/verified/vietnam-danang.jpg",
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
      "2N Da Nang (3★) + 3N Hanoi (3★)",
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
        "title": "Da Nang Arrival – Hotel Transfer",
        "description": "Arrive in Da Nang, hotel transfer. Evening free leisure.",
        "meals": [
          "None"
        ],
        "activities": [
          "Beach Walk"
        ],
        "hotel": "Da Nang Hotel 3★",
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
        "hotel": "Da Nang Hotel 3★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Hoi An Tour – Flight to Hanoi",
        "description": "Morning Hoi An Ancient town tour, afternoon flight to Hanoi. Hotel check-in.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Hoi An Tour"
        ],
        "hotel": "Hanoi Hotel 3★",
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
        "hotel": "Hanoi Hotel 3★",
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
        "hotel": "Hanoi Hotel 3★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 6,
        "title": "Hanoi Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Da Nang Central 3★",
        "city": "Da Nang",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hanoi Old Quarter 3★",
        "city": "Hanoi",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹39,000 per person (increased by ₹5k from flyer rate ₹34,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Da Nang",
      "Hanoi",
      "Hoi An"
    ],
    "citySlugs": [
      "da-nang",
      "hanoi",
      "hoi-an"
    ],
    "state": "Vietnam",
    "stateSlug": "vietnam",
    "entryCity": "Da Nang",
    "exitCity": "Hoi An"
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
    "heroImage": "/destinations/verified/vietnam-halong-bay.jpg",
    "gallery": [
      "/destinations/verified/vietnam-halong-bay.jpg",
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
      "3N Phu Quoc (4★) + 3N Ho Chi Minh City (3★)",
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
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Selected Lunches)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Phu Quoc Arrival – Resort Check-in",
        "description": "Arrive in Phu Quoc, resort check in. Evening beach walk.",
        "meals": [
          "None"
        ],
        "activities": [
          "Beach Walk"
        ],
        "hotel": "Phu Quoc Resort 4★",
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
        "hotel": "Phu Quoc Resort 4★",
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
        "hotel": "Phu Quoc Resort 4★",
        "transfers": "At Leisure / Local Exploration"
      },
      {
        "dayNumber": 4,
        "title": "Flight to Ho Chi Minh City – Saigon Free Evening",
        "description": "Flight to Ho Chi Minh City. Transfer to hotel, evening Saigon night market walk.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Saigon Night Market"
        ],
        "hotel": "Ho Chi Minh Hotel 3★",
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
        "hotel": "Ho Chi Minh Hotel 3★",
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
        "hotel": "Ho Chi Minh Hotel 3★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 7,
        "title": "Ho Chi Minh Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phu Quoc Resort 4★",
        "city": "Phu Quoc",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "Saigon Hotel 3★",
        "city": "Ho Chi Minh",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹51,000 per person (increased by ₹5k from flyer rate ₹46,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Phu Quoc",
      "Ho Chi Minh",
      "Saigon"
    ],
    "citySlugs": [
      "phu-quoc",
      "ho-chi-minh",
      "saigon"
    ],
    "state": "Vietnam",
    "stateSlug": "vietnam",
    "entryCity": "Phu Quoc",
    "exitCity": "Saigon"
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
    "heroImage": "/destinations/verified/srilanka-sigiriya.jpg",
    "gallery": [
      "/destinations/verified/srilanka-sigiriya.jpg",
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
      "4 Nights Accommodation in Comfortable 3★/4★ Hotels",
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
    "hotelCategory": "3 Star",
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
        "hotel": "Sigiriya Hotel 3★/4★",
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
        "hotel": "Kandy Hotel 3★/4★",
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
        "hotel": "Nuwara Eliya Hotel 3★/4★",
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
        "hotel": "Bentota Beach Resort 3★/4★",
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
        "hotel": "Departure Day",
        "transfers": "Private AC Vehicle"
      }
    ],
    "hotels": [
      {
        "name": "Sigiriya Village Resort 3★",
        "city": "Sigiriya",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Kandy Citadel 3★",
        "city": "Kandy",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Nuwara Eliya Heritage 3★",
        "city": "Nuwara Eliya",
        "rating": "3 Star",
        "nights": 1
      },
      {
        "name": "Bentota Beach Resort 3★",
        "city": "Bentota",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹38,500 per person MAP Plan (increased by ₹5k from flyer rate ₹33,500) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Bentota",
      "Colombo"
    ],
    "citySlugs": [
      "sigiriya",
      "kandy",
      "nuwara-eliya",
      "bentota",
      "colombo"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Sigiriya",
    "exitCity": "Colombo"
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
    "heroImage": "/destinations/verified/srilanka-yala.jpg",
    "gallery": [
      "/destinations/verified/srilanka-yala.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Sigiriya",
        "description": "Arrive at Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Sigiriya Hotel 3★",
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
        "hotel": "Kandy Hotel 3★",
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
        "hotel": "Nuwara Eliya Hotel 3★",
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
        "hotel": "Yala Safari Resort 3★",
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
        "hotel": "Bentota Beach Resort 3★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Heritage Resorts 3★",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 5
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹44,000 per person MAP Plan (increased by ₹5k from flyer rate ₹39,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Multi-City",
      "Colombo",
      "Kandy",
      "Nuwara Eliya",
      "Bentota",
      "Sigiriya",
      "Yala"
    ],
    "citySlugs": [
      "multi-city",
      "colombo",
      "kandy",
      "nuwara-eliya",
      "bentota",
      "sigiriya",
      "yala"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Multi-City",
    "exitCity": "Yala"
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
    "heroImage": "/destinations/verified/srilanka-nine-arch.jpg",
    "gallery": [
      "/destinations/verified/srilanka-nine-arch.jpg",
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
    "hotelCategory": "3 Star",
    "mealPlan": "MAP (Breakfast + Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Airport to Sigiriya",
        "description": "Arrive at Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota, Colombo airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Sigiriya Hotel 3★",
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
        "hotel": "Kandy Hotel 3★",
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
        "hotel": "Nuwara Eliya Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Nuwara Eliya to Yala National Park",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Yala Resort 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Yala to Bentota Beach Resort",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Sigiriya, Kandy, Nuwara Eliya, Yala, Bentota, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Bentota Resort 3★",
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
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 7,
        "title": "Colombo Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Grand Hotels 3★",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 6
      }
    ],
    "faqs": [
      {
        "question": "What is the package cost?",
        "answer": "Price is ₹51,000 per person MAP Plan (increased by ₹5k from flyer rate ₹46,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Multi-City",
      "Colombo",
      "Kandy",
      "Nuwara Eliya",
      "Bentota",
      "Sigiriya",
      "Yala"
    ],
    "citySlugs": [
      "multi-city",
      "colombo",
      "kandy",
      "nuwara-eliya",
      "bentota",
      "sigiriya",
      "yala"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Multi-City",
    "exitCity": "Yala"
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
    "heroImage": "/destinations/verified/thailand-pattaya.jpg",
    "gallery": [
      "/destinations/verified/thailand-pattaya.jpg"
    ],
    "highlights": [
      "3 Nights Stay in Pattaya 3-Star Hotel",
      "Coral Island Speedboat Tour with Lunch",
      "Walking Street Nightlife Exploration",
      "Daily Breakfast & Airport Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "3 Nights 3★ Hotel in Pattaya",
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
        "hotel": "Pattaya Hotel 3★",
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
        "hotel": "Pattaya Hotel 3★",
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
        "hotel": "Pattaya Hotel 3★",
        "transfers": "At Leisure / Local Exploration"
      },
      {
        "dayNumber": 4,
        "title": "Pattaya to Bangkok Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Pattaya Central 3★",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹14,000 per person (increased by ₹5k from flyer rate ₹9,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Pattaya",
      "Bangkok"
    ],
    "citySlugs": [
      "pattaya",
      "bangkok"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Pattaya",
    "exitCity": "Bangkok"
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
    "heroImage": "/destinations/verified/thailand-wat-arun.jpg",
    "gallery": [
      "/destinations/verified/thailand-wat-arun.jpg"
    ],
    "highlights": [
      "3 Nights Pattaya Beach + 1 Night Bangkok Shopping Stay",
      "Coral Island Tour by Speedboat with Lunch",
      "Bangkok Golden Buddha Temple & City Tour",
      "Daily Breakfast & All Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "3N Pattaya (3★) + 1N Bangkok (3★)",
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
        "description": "Arrive at Pattaya, Bangkok airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Coral Island Speedboat Tour",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Pattaya, Bangkok. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Pattaya Free Day",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Pattaya, Bangkok. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "At Leisure / Local Exploration"
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
        "hotel": "Bangkok Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Bangkok Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Pattaya Beach 3★",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 3
      },
      {
        "name": "Bangkok Central 3★",
        "city": "Bangkok",
        "rating": "3 Star",
        "nights": 1
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹17,000 per person (increased by ₹5k from flyer rate ₹12,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Pattaya",
      "Bangkok"
    ],
    "citySlugs": [
      "pattaya",
      "bangkok"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Pattaya",
    "exitCity": "Bangkok"
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
    "heroImage": "/destinations/verified/thailand-james-bond.jpg",
    "gallery": [
      "/destinations/verified/thailand-james-bond.jpg"
    ],
    "highlights": [
      "3 Nights Stay at Patong Beach Hotel in Phuket",
      "Phuket Half Day City & Viewpoint Tour",
      "Phi Phi Islands Speedboat Excursion",
      "Daily Breakfast & Airport Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "3 Nights 3★ Hotel in Phuket",
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
        "title": "Phuket Airport Transfer – Patong Beach",
        "description": "Arrive at Phuket airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Phuket Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Phuket Half Day City Sightseeing",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Phuket. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Phuket Hotel 3★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Optional Phi Phi Island Speedboat Tour",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Phuket. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Phuket Hotel 3★",
        "transfers": "At Leisure / Local Exploration"
      },
      {
        "dayNumber": 4,
        "title": "Phuket Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Phuket Beach Hotel 3★",
        "city": "Phuket",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹17,500 per person (increased by ₹5k from flyer rate ₹12,500) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Phuket"
    ],
    "citySlugs": [
      "phuket"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Phuket",
    "exitCity": "Phuket"
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
    "heroImage": "/destinations/verified/thailand-phi-phi.jpg",
    "gallery": [
      "/destinations/verified/thailand-phi-phi.jpg"
    ],
    "highlights": [
      "4 Nights Beachfront Hotel Stay in Pattaya",
      "Coral Island Speedboat Tour with Lunch",
      "Alcazar Cabaret Show Ticket Included",
      "Daily Breakfast & Airport Transfers (Min 4 Pax)"
    ],
    "inclusions": [
      "4 Nights 3★ Hotel in Pattaya",
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
        "description": "Arrive at Pattaya airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "SIC Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Coral Island Tour with Lunch",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Pattaya. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Lunch"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 3,
        "title": "Pattaya Sightseeing & Alcazar Show",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Pattaya. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "SIC Tour"
      },
      {
        "dayNumber": 4,
        "title": "Pattaya Free Day",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Pattaya. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Pattaya Hotel 3★",
        "transfers": "At Leisure / Local Exploration"
      },
      {
        "dayNumber": 5,
        "title": "Pattaya Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "SIC Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Pattaya Beach Resort 3★",
        "city": "Pattaya",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹18,000 per person (increased by ₹5k from flyer rate ₹13,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Pattaya"
    ],
    "citySlugs": [
      "pattaya"
    ],
    "state": "Thailand",
    "stateSlug": "thailand",
    "entryCity": "Pattaya",
    "exitCity": "Pattaya"
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
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [
      "/destinations/hero-beach.jpg",
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
      "3 Nights 3★ Accommodation in Siargao",
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
        "title": "Arrival Siargao – Hotel Transfer & Leisure",
        "description": "Arrival at Sayak Airport (IAO), private transfer to resort. Free leisure day at Cloud 9 beach.",
        "meals": [
          "None"
        ],
        "activities": [
          "Cloud 9 Beach"
        ],
        "hotel": "Siargao Resort 3★",
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
        "hotel": "Siargao Resort 3★",
        "transfers": "At Leisure / Local Exploration"
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
        "hotel": "Siargao Resort 3★",
        "transfers": "At Leisure / Local Exploration"
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Siargao Island Resort 3★",
        "city": "Siargao",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹43,000 per person ($515 USD, increased by $60 USD / ₹5k INR from flyer rate $455 USD) for min 2 pax."
      }
    ],
    "coveredCities": [
      "Siargao"
    ],
    "citySlugs": [
      "siargao"
    ],
    "state": "Philippines",
    "stateSlug": "philippines",
    "entryCity": "Siargao",
    "exitCity": "Siargao"
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
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [
      "/destinations/hero-beach.jpg"
    ],
    "highlights": [
      "Bohol Countryside Tour with Chocolate Hills & Tarsier Sanctuary",
      "Loboc River Cruise with Buffet Lunch Included",
      "Puerto Princesa City Tour & Applicable Entrance Fees",
      "3 Nights Accommodation with Daily Breakfast",
      "Private Airport & Tour Transfers (Min 2 Pax)"
    ],
    "inclusions": [
      "3 Nights 3★ Accommodation in Puerto Princesa",
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
        "title": "Arrival Puerto Princesa – Hotel Transfer",
        "description": "Arrive at Puerto Princesa, Bohol airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "None"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Puerto Princesa Hotel 3★",
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
        "hotel": "Puerto Princesa Hotel 3★",
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
        "hotel": "Puerto Princesa Hotel 3★",
        "transfers": "At Leisure / Local Exploration"
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Puerto Princesa Resort 3★",
        "city": "Puerto Princesa",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹37,500 per person ($450 USD, increased by $60 USD / ₹5k INR from flyer rate $390 USD) for min 2 pax."
      }
    ],
    "coveredCities": [
      "Puerto Princesa"
    ],
    "citySlugs": [
      "puerto-princesa"
    ],
    "state": "Philippines",
    "stateSlug": "philippines",
    "entryCity": "Puerto Princesa",
    "exitCity": "Puerto Princesa"
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
    "heroImage": "/destinations/hero-beach.jpg",
    "gallery": [
      "/destinations/hero-beach.jpg"
    ],
    "highlights": [
      "Guided Manila City Tour (Intramuros, Fort Santiago & Rizal Park)",
      "3 Nights Hotel Stay in Central Manila",
      "Daily Breakfast & Applicable Entrance Fees",
      "Private Airport & Tour Transfers (Min 2 Pax)"
    ],
    "inclusions": [
      "3 Nights 3★ Hotel Stay in Manila",
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
        "title": "Arrival Manila – Transfer to Hotel",
        "description": "Arrival at Ninoy Aquino Airport (MNL), private transfer to hotel.",
        "meals": [
          "None"
        ],
        "activities": [
          "Transfer"
        ],
        "hotel": "Manila Hotel 3★",
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
        "hotel": "Manila Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Manila Free Leisure & Shopping Day",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Manila. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Manila Hotel 3★",
        "transfers": "At Leisure / Local Exploration"
      },
      {
        "dayNumber": 4,
        "title": "Manila Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Manila Central Hotel 3★",
        "city": "Manila",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹44,000 per person ($530 USD, increased by $60 USD / ₹5k INR from flyer rate $470 USD) for min 2 pax."
      }
    ],
    "coveredCities": [
      "Manila"
    ],
    "citySlugs": [
      "manila"
    ],
    "state": "Philippines",
    "stateSlug": "philippines",
    "entryCity": "Manila",
    "exitCity": "Manila"
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
    "heroImage": "/destinations/verified/srilanka-kandy.jpg",
    "gallery": [
      "/destinations/verified/srilanka-kandy.jpg"
    ],
    "highlights": [
      "2 Nights Kandy Sacred Temple & Cultural Shows",
      "2 Nights Bentota Beach & Galle Dutch Fort Day Trip",
      "MAP Plan: Daily Breakfast & Dinner Included",
      "Private Transfers in AC Vehicle (Min 4 Pax)"
    ],
    "inclusions": [
      "2N Kandy (3★) + 2N Bentota (3★)",
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
        "hotel": "Kandy Hotel 3★",
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
        "hotel": "Kandy Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Kandy to Bentota (185 Kms / 5 Hrs+)",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Kandy, Bentota, Galle. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Bentota Hotel 3★",
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
        "hotel": "Bentota Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 5,
        "title": "Bentota to Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Kandy Hotel 3★",
        "city": "Kandy",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Bentota Resort 3★",
        "city": "Bentota",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹40,000 per person MAP Plan (increased by ₹5k from flyer rate ₹35,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Kandy",
      "Bentota",
      "Galle"
    ],
    "citySlugs": [
      "kandy",
      "bentota",
      "galle"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Kandy",
    "exitCity": "Galle"
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
    "heroImage": "/destinations/verified/srilanka-nine-arch.jpg",
    "gallery": [
      "/destinations/verified/srilanka-nine-arch.jpg"
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
        "description": "Arrive at Kandy, Nuwara Eliya, Colombo airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Kandy Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Kandy City Tour",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Kandy, Nuwara Eliya, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Kandy Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Kandy to Nuwara Eliya",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Kandy, Nuwara Eliya, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Nuwara Eliya Hotel 3★",
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
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Colombo Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Heritage 3★",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹40,000 per person MAP Plan (increased by ₹5k from flyer rate ₹35,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Multi-City",
      "Colombo",
      "Kandy",
      "Nuwara Eliya"
    ],
    "citySlugs": [
      "multi-city",
      "colombo",
      "kandy",
      "nuwara-eliya"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Multi-City",
    "exitCity": "Nuwara Eliya"
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
    "heroImage": "/destinations/verified/srilanka-sigiriya.jpg",
    "gallery": [
      "/destinations/verified/srilanka-sigiriya.jpg"
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
        "description": "Arrive at Sigiriya, Kandy, Colombo airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Sigiriya Hotel 3★",
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
        "hotel": "Sigiriya Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Sigiriya to Kandy",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Sigiriya, Kandy, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Kandy Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Kandy to Colombo",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Sigiriya, Kandy, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Colombo Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Cultural Hotels 3★",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹40,000 per person MAP Plan (increased by ₹5k from flyer rate ₹35,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Multi-City",
      "Colombo",
      "Kandy",
      "Sigiriya"
    ],
    "citySlugs": [
      "multi-city",
      "colombo",
      "kandy",
      "sigiriya"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Multi-City",
    "exitCity": "Sigiriya"
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
    "heroImage": "/destinations/verified/srilanka-yala.jpg",
    "gallery": [
      "/destinations/verified/srilanka-yala.jpg"
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
        "description": "Arrive at Yala, Udawalawe, Mirissa, Bentota airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Yala Hotel 3★",
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
        "hotel": "Udawalawe Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Udawalawe to Mirissa Beach",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Yala, Udawalawe, Mirissa, Bentota. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Mirissa Hotel 3★",
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
        "hotel": "Bentota Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Bentota Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Wildlife & Beach Resorts 3★",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 4
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹40,000 per person MAP Plan (increased by ₹5k from flyer rate ₹35,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Multi-City",
      "Bentota",
      "Yala"
    ],
    "citySlugs": [
      "multi-city",
      "bentota",
      "yala"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Multi-City",
    "exitCity": "Yala"
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
    "heroImage": "/destinations/verified/srilanka-galle.jpg",
    "gallery": [
      "/destinations/verified/srilanka-galle.jpg"
    ],
    "highlights": [
      "2 Nights Bentota Beachfront Resort Stay",
      "Galle Dutch Fort UNESCO Heritage Day Trip",
      "MAP Plan: Daily Breakfast & Dinner Included (Min 4 Pax)"
    ],
    "inclusions": [
      "2 Nights Bentota Hotel 3★",
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
        "description": "Arrive at Bentota, Galle airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Bentota Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Galle Fort Day Excursion",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Bentota, Galle. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Bentota Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Bentota to Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Bentota Beach Hotel 3★",
        "city": "Bentota",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹29,000 per person MAP Plan (increased by ₹5k from flyer rate ₹24,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Bentota",
      "Galle"
    ],
    "citySlugs": [
      "bentota",
      "galle"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Bentota",
    "exitCity": "Galle"
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
    "heroImage": "/destinations/verified/srilanka-galle.jpg",
    "gallery": [
      "/destinations/verified/srilanka-galle.jpg"
    ],
    "highlights": [
      "2 Nights Colombo Capital City Stay & Shopping",
      "Day Excursion to Bentota Beach & Turtle Hatchery",
      "MAP Plan: Daily Breakfast & Dinner (Min 4 Pax)"
    ],
    "inclusions": [
      "2 Nights Colombo Hotel 3★",
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
        "description": "Arrive at Colombo, Bentota airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Bentota Beach Day Trip",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Colombo, Bentota. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Colombo Shopping & Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Colombo Central Hotel 3★",
        "city": "Colombo",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹29,000 per person MAP Plan (increased by ₹5k from flyer rate ₹24,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Colombo",
      "Bentota"
    ],
    "citySlugs": [
      "colombo",
      "bentota"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Colombo",
    "exitCity": "Bentota"
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
    "heroImage": "/destinations/verified/srilanka-nine-arch.jpg",
    "gallery": [
      "/destinations/verified/srilanka-nine-arch.jpg"
    ],
    "highlights": [
      "3 Nights Colombo Capital Hotel Stay",
      "Full Day Excursion to Bentota Beach",
      "MAP Plan: Daily Breakfast & Dinner Included (Min 4 Pax)"
    ],
    "inclusions": [
      "3 Nights Colombo Hotel 3★",
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
        "description": "Arrive at Colombo, Bentota airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Bentota Beach Day Trip",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Colombo, Bentota. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 3,
        "title": "Colombo City Sightseeing & Shopping",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Colombo, Bentota. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Tour"
      },
      {
        "dayNumber": 4,
        "title": "Colombo Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Colombo City Hotel 3★",
        "city": "Colombo",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹35,000 per person MAP Plan (increased by ₹5k from flyer rate ₹30,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Colombo",
      "Bentota"
    ],
    "citySlugs": [
      "colombo",
      "bentota"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Colombo",
    "exitCity": "Bentota"
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
    "heroImage": "/destinations/verified/srilanka-kandy.jpg",
    "gallery": [
      "/destinations/verified/srilanka-kandy.jpg"
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
        "description": "Arrive at Kandy, Bentota, Colombo airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Kandy Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Kandy to Bentota Beach",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Kandy, Bentota, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Bentota Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Bentota to Colombo City",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Kandy, Bentota, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Colombo Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Express Hotels 3★",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹35,000 per person MAP Plan (increased by ₹5k from flyer rate ₹30,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Multi-City",
      "Colombo",
      "Kandy",
      "Bentota"
    ],
    "citySlugs": [
      "multi-city",
      "colombo",
      "kandy",
      "bentota"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Multi-City",
    "exitCity": "Bentota"
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
    "heroImage": "/destinations/verified/srilanka-sigiriya.jpg",
    "gallery": [
      "/destinations/verified/srilanka-sigiriya.jpg"
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
        "description": "Arrive at Kandy, Nuwara Eliya, Colombo airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Kandy Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 2,
        "title": "Kandy to Nuwara Eliya",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Kandy, Nuwara Eliya, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Nuwara Eliya Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Nuwara Eliya to Colombo",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Kandy, Nuwara Eliya, Colombo. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Colombo Hotel 3★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Colombo Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "hotels": [
      {
        "name": "Sri Lanka Hill Hotels 3★",
        "city": "Multi-City",
        "rating": "3 Star",
        "nights": 3
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹35,000 per person MAP Plan (increased by ₹5k from flyer rate ₹30,000) for min 4 pax."
      }
    ],
    "coveredCities": [
      "Multi-City",
      "Colombo",
      "Kandy",
      "Nuwara Eliya"
    ],
    "citySlugs": [
      "multi-city",
      "colombo",
      "kandy",
      "nuwara-eliya"
    ],
    "state": "Sri Lanka",
    "stateSlug": "sri-lanka",
    "entryCity": "Multi-City",
    "exitCity": "Nuwara Eliya"
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
    "heroImage": "/destinations/verified/georgia-tbilisi.jpg",
    "gallery": [
      "/destinations/verified/georgia-tbilisi.jpg"
    ],
    "highlights": [
      "Tbilisi Old Town & Narikala Fortress Cable Car",
      "Jinvali Water Reservoir & Ananuri Fortress Complex",
      "Gudauri Ski Resort & Russia-Georgia Friendship Monument",
      "4WD Jeep Safari to Gergeti Trinity Church in Kazbegi",
      "Includes Daily Breakfast & Private AC Transfers"
    ],
    "inclusions": [
      "4 Nights Stay in 3★ / 4★ Tbilisi Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Tbilisi City Hotel 4★",
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
        "hotel": "Tbilisi City Hotel 4★",
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
        "hotel": "Tbilisi City Hotel 4★",
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
        "hotel": "Tbilisi City Hotel 4★",
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
        "hotel": "Tbilisi City Hotel 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Starting price is $390 USD (~₹32,500) per person (increased by $60 / ₹5,000 from base flyer rate $330)."
      },
      {
        "question": "Do Indian passport holders need a visa for Georgia?",
        "answer": "Indian nationals with valid US, UK, Schengen, or GCC visas/residence permits get visa-free entry; others require an e-Visa."
      }
    ],
    "coveredCities": [
      "Tbilisi",
      "Kazbegi",
      "Gudauri"
    ],
    "citySlugs": [
      "tbilisi",
      "kazbegi",
      "gudauri"
    ],
    "state": "Georgia",
    "stateSlug": "georgia",
    "entryCity": "Tbilisi",
    "exitCity": "Gudauri"
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
    "heroImage": "/destinations/verified/georgia-kazbegi.jpg",
    "gallery": [
      "/destinations/verified/georgia-kazbegi.jpg"
    ],
    "highlights": [
      "Tbilisi Old Town & Funicular Railway to Mtatsminda",
      "UNESCO Mtskheta, Jvari Monastery & Svetitskhoveli Cathedral",
      "Uplistsikhe Ancient Cave Town Exploration",
      "Full Day Kazbegi 4x4 Mountain Excursion",
      "Premium 4★ Hotel Stay with Breakfast & Guided Tours"
    ],
    "inclusions": [
      "5 Nights Hotel Stay in 4★ Tbilisi Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Tbilisi Grand Plaza 4★",
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
        "hotel": "Tbilisi Grand Plaza 4★",
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
        "hotel": "Tbilisi Grand Plaza 4★",
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
        "hotel": "Tbilisi Grand Plaza 4★",
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
        "hotel": "Tbilisi Grand Plaza 4★",
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
        "hotel": "Tbilisi Grand Plaza 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $720 USD (~₹60,000) per person (increased by $60 / ₹5,000 from flyer rate $660)."
      }
    ],
    "coveredCities": [
      "Tbilisi",
      "Kazbegi"
    ],
    "citySlugs": [
      "tbilisi",
      "kazbegi"
    ],
    "state": "Georgia",
    "stateSlug": "georgia",
    "entryCity": "Tbilisi",
    "exitCity": "Kazbegi"
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
    "heroImage": "/destinations/verified/georgia-batumi.jpg",
    "gallery": [
      "/destinations/verified/georgia-batumi.jpg"
    ],
    "highlights": [
      "3N Tbilisi + 3N Batumi Black Sea Riviera Stay",
      "Prometheus Karst Caves & Martvili Canyon Boat Ride",
      "Batumi Boulevard, Ali & Nino Moving Statue",
      "Highland Kazbegi 4WD Excursion",
      "Comprehensive Georgia Coast & Mountain Highlights"
    ],
    "inclusions": [
      "3 Nights Tbilisi + 3 Nights Batumi 4★ Hotel Stay",
      "Daily Breakfast",
      "Intercity Transfers Tbilisi – Batumi",
      "Excursions to Kazbegi & Prometheus Cave",
      "Private Airport Pick up & Drop"
    ],
    "exclusions": [
      "Airfare & Visa Fees",
      "Prometheus Cave Boat Ticket",
      "Personal Expenses"
    ],
    "theme": "Black Sea Coast & Mountains",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Tbilisi City Hotel 4★",
        "city": "Tbilisi",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "Batumi Seaside Resort 4★",
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
        "hotel": "Tbilisi City Hotel 4★",
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
        "hotel": "Tbilisi City Hotel 4★",
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
        "hotel": "Tbilisi City Hotel 4★",
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
        "hotel": "Batumi Seaside Resort 4★",
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
        "hotel": "Batumi Seaside Resort 4★",
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
        "hotel": "Batumi Seaside Resort 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $643 USD (~₹53,500) per person (increased by $60 / ₹5,000 from flyer rate $583)."
      }
    ],
    "coveredCities": [
      "Tbilisi",
      "Batumi",
      "Kazbegi",
      "Gudauri"
    ],
    "citySlugs": [
      "tbilisi",
      "batumi",
      "kazbegi",
      "gudauri"
    ],
    "state": "Georgia",
    "stateSlug": "georgia",
    "entryCity": "Tbilisi",
    "exitCity": "Gudauri"
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
    "heroImage": "/destinations/verified/japan-osaka-castle.jpg",
    "gallery": [
      "/destinations/verified/japan-osaka-castle.jpg"
    ],
    "highlights": [
      "Private Tour for 2 Pax in Luxury Sedan / MPV",
      "Universal Studios Japan (USJ) Osaka Full Day",
      "Kyoto Fushimi Inari Shrine & Kinkaku-ji Golden Pavilion",
      "Nara Deer Park & Todai-ji Temple",
      "Lake Biwa Scenic Lakeside & Dotonbori Street Food"
    ],
    "inclusions": [
      "4 Nights in 4★ Osaka Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Swissôtel Namba Osaka 4★",
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
        "hotel": "Swissôtel Namba Osaka 4★",
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
        "hotel": "Swissôtel Namba Osaka 4★",
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
        "hotel": "Swissôtel Namba Osaka 4★",
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
        "hotel": "Swissôtel Namba Osaka 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private Car"
      }
    ],
    "faqs": [
      {
        "question": "What is the total price for 2 people?",
        "answer": "Total price is ₹2,90,000 for 2 adults (₹1,45,000 per person, increased by ₹5,000 per person / ₹10,000 total from flyer rate ₹2,80,000)."
      }
    ],
    "coveredCities": [
      "Osaka",
      "Kyoto",
      "Nara"
    ],
    "citySlugs": [
      "osaka",
      "kyoto",
      "nara"
    ],
    "state": "Japan",
    "stateSlug": "japan",
    "entryCity": "Osaka",
    "exitCity": "Nara"
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
    "heroImage": "/destinations/verified/japan-tokyo-tower.jpg",
    "gallery": [
      "/destinations/verified/japan-tokyo-tower.jpg"
    ],
    "highlights": [
      "Exclusive Private Tour for 2 Pax in Tokyo & Mt Fuji",
      "Tokyo Disneyland or DisneySea 1-Day Pass",
      "Mt. Fuji 5th Station & Lake Kawaguchiko Panorama",
      "Snowman / Fujiten Ski Resort Winter Snow Play",
      "Senso-ji Temple Asakusa & Shibuya Crossing"
    ],
    "inclusions": [
      "4 Nights in 4★ Central Tokyo Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Tokyo Dome Hotel / Daiwa Roynet 4★",
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
        "hotel": "Tokyo Central Hotel 4★",
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
        "hotel": "Tokyo Central Hotel 4★",
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
        "hotel": "Tokyo Central Hotel 4★",
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
        "hotel": "Tokyo Central Hotel 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private Car"
      }
    ],
    "faqs": [
      {
        "question": "What is the total price for 2 adults?",
        "answer": "Total price is ₹3,10,000 for 2 adults (₹1,55,000 per person, increased by ₹5,000 per person / ₹10,000 total from flyer rate ₹3,00,000)."
      }
    ],
    "coveredCities": [
      "Tokyo"
    ],
    "citySlugs": [
      "tokyo"
    ],
    "state": "Japan",
    "stateSlug": "japan",
    "entryCity": "Tokyo",
    "exitCity": "Tokyo"
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
    "heroImage": "/destinations/verified/japan-fushimi-inari.jpg",
    "gallery": [
      "/destinations/verified/japan-fushimi-inari.jpg"
    ],
    "highlights": [
      "Group Departure Special (Min 10 Pax)",
      "Takayama Sanmachi Suji Preservation District (2N)",
      "Shirakawa-go UNESCO Gassho-Zukuri Village",
      "Kanazawa Kenroku-en Garden & Higashi Chaya Tea District (1N)",
      "Nagoya Castle & Oasis 21 Shopping"
    ],
    "inclusions": [
      "2N Takayama + 1N Kanazawa + 1N Takayama 3★/4★ Hotels",
      "Daily Breakfast",
      "Group Coach Coach Transfers & Sightseeing",
      "English Speaking Tour Manager"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses & Tips"
    ],
    "theme": "Alpine Village & Traditions",
    "hotelCategory": "3 Star",
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
        "hotel": "Departure Day",
        "transfers": "AC Group Coach"
      }
    ],
    "faqs": [
      {
        "question": "What is the group tour price?",
        "answer": "Price is ₹1,25,000 per person for minimum 10 pax (increased by ₹5,000 from flyer rate ₹1,20,000)."
      }
    ],
    "coveredCities": [
      "Takayama",
      "Kanazawa"
    ],
    "citySlugs": [
      "takayama",
      "kanazawa"
    ],
    "state": "Japan",
    "stateSlug": "japan",
    "entryCity": "Takayama",
    "exitCity": "Kanazawa"
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
    "heroImage": "/destinations/verified/japan-osaka-castle.jpg",
    "gallery": [
      "/destinations/verified/japan-osaka-castle.jpg"
    ],
    "highlights": [
      "Group Departure Special (Min 10 Pax)",
      "4 Nights Stay in Osaka Central Hotel",
      "Kyoto Golden Pavilion & Fushimi Inari Shrine Excursion",
      "Nara Deer Park & Todai-ji Temple Group Visit",
      "Dotonbori Street Shopping & Osaka Castle"
    ],
    "inclusions": [
      "4 Nights in 3★ / 4★ Osaka Hotel",
      "Daily Breakfast",
      "AC Group Coach Transfers",
      "Sightseeing Entry Passes as per Itinerary"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Kansai Cultural Group",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Osaka Plaza Hotel 3★/4★",
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
        "hotel": "Departure Day",
        "transfers": "Group Coach"
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹1,25,000 per person for minimum 10 pax (increased by ₹5,000 from flyer rate ₹1,20,000)."
      }
    ],
    "coveredCities": [
      "Osaka",
      "Kyoto",
      "Nara"
    ],
    "citySlugs": [
      "osaka",
      "kyoto",
      "nara"
    ],
    "state": "Japan",
    "stateSlug": "japan",
    "entryCity": "Osaka",
    "exitCity": "Nara"
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
    "heroImage": "/destinations/verified/japan-sapporo.jpg",
    "gallery": [
      "/destinations/verified/japan-sapporo.jpg"
    ],
    "highlights": [
      "Group Departure Special (Min 10 Pax)",
      "4 Nights Hotel Stay in Sapporo Capital",
      "Asahikawa Zoo & Penguin Walk Excursion",
      "Noboribetsu Jigokudani (Hell Valley) Volcanic Geysers",
      "Lake Toya Volcanic Crater Lake & Mt. Usu Ropeway"
    ],
    "inclusions": [
      "4 Nights in 3★/4★ Sapporo Hotel",
      "Daily Breakfast",
      "Group Coach Sightseeing",
      "Entry Passes to Asahikawa Zoo & Lake Toya Ropeway"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Hokkaido Nature & Wildlife",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Sapporo Grand Hotel / Similar 4★",
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
        "hotel": "Departure Day",
        "transfers": "Group Coach"
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹1,25,000 per person for minimum 10 pax (increased by ₹5,000 from flyer rate ₹1,20,000)."
      }
    ],
    "coveredCities": [
      "Sapporo"
    ],
    "citySlugs": [
      "sapporo"
    ],
    "state": "Japan",
    "stateSlug": "japan",
    "entryCity": "Sapporo",
    "exitCity": "Sapporo"
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
    "heroImage": "/destinations/verified/japan-mount-fuji.jpg",
    "gallery": [
      "/destinations/verified/japan-mount-fuji.jpg"
    ],
    "highlights": [
      "Group Departure Special (Min 10 Pax)",
      "4 Nights Central Tokyo Hotel Stay",
      "Mt. Fuji 5th Station & Lake Ashi Pirate Cruise",
      "Komagatake Ropeway Mountain Cable Car Ride",
      "Shibuya Crossing, Senso-ji & Imperial Palace Gardens"
    ],
    "inclusions": [
      "4 Nights in 3★ / 4★ Tokyo Hotel",
      "Daily Breakfast",
      "Group AC Coach Transfers",
      "Lake Ashi Cruise & Mt Fuji Sightseeing"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Tokyo Metropolis & Mt Fuji",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Sunshine City Prince Hotel Tokyo 4★",
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
        "hotel": "Departure Day",
        "transfers": "Group Coach"
      }
    ],
    "faqs": [
      {
        "question": "What is the price?",
        "answer": "Price is ₹1,25,000 per person for minimum 10 pax (increased by ₹5,000 from flyer rate ₹1,20,000)."
      }
    ],
    "coveredCities": [
      "Tokyo"
    ],
    "citySlugs": [
      "tokyo"
    ],
    "state": "Japan",
    "stateSlug": "japan",
    "entryCity": "Tokyo",
    "exitCity": "Tokyo"
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
    "heroImage": "/destinations/verified/malaysia-batu-caves.jpg",
    "gallery": [
      "/destinations/verified/malaysia-batu-caves.jpg"
    ],
    "highlights": [
      "FREE Visa on Arrival / Entry for Indian Passport Holders",
      "Petronas Twin Towers Photo Stop & KL Tower Entrance",
      "Batu Caves Golden Murugan Statue Visit",
      "Genting Highlands Two-Way Cable Car Ride & Indoor Theme Park",
      "Cameron Highlands Tea Plantation & Strawberry Farm Excursion"
    ],
    "inclusions": [
      "3N Kuala Lumpur + 1N Cameron Highlands 3★/4★ Hotel Stay",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Ibis KLCC / Furama Bukit Bintang 4★",
        "city": "Kuala Lumpur",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "Heritage Hotel Cameron Highlands 3★",
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
        "hotel": "Ibis KLCC 4★",
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
        "hotel": "Ibis KLCC 4★",
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
        "hotel": "Ibis KLCC 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private AC Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Starting price is ₹46,000 per person (increased by ₹5,000 from flyer rate ₹41,000)."
      },
      {
        "question": "Is visa required for Indians in Malaysia?",
        "answer": "Malaysia provides Visa-Free Entry for Indian citizens (requires digital arrival card MDAC registration)."
      }
    ],
    "coveredCities": [
      "Kuala Lumpur",
      "Cameron Highlands",
      "Genting"
    ],
    "citySlugs": [
      "kuala-lumpur",
      "cameron-highlands",
      "genting"
    ],
    "state": "Malaysia",
    "stateSlug": "malaysia",
    "entryCity": "Kuala Lumpur",
    "exitCity": "Genting"
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
    "heroImage": "/destinations/verified/malaysia-cameron-highlands.jpg",
    "gallery": [
      "/destinations/verified/malaysia-cameron-highlands.jpg"
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Novotel KLCC 4★",
        "city": "Kuala Lumpur",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "WEIL Hotel Ipoh 4★",
        "city": "Ipoh",
        "rating": "4 Star",
        "nights": 1
      },
      {
        "name": "Cameron Highlands Resort 4★",
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
        "hotel": "Novotel KLCC 4★",
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
        "hotel": "Novotel KLCC 4★",
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
        "hotel": "Novotel KLCC 4★",
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
        "hotel": "WEIL Hotel Ipoh 4★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹63,500 per person (increased by ₹5,000 from flyer rate ₹58,500)."
      }
    ],
    "coveredCities": [
      "Kuala Lumpur",
      "Ipoh",
      "Cameron Highlands",
      "Genting"
    ],
    "citySlugs": [
      "kuala-lumpur",
      "ipoh",
      "cameron-highlands",
      "genting"
    ],
    "state": "Malaysia",
    "stateSlug": "malaysia",
    "entryCity": "Kuala Lumpur",
    "exitCity": "Genting"
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
    "heroImage": "/destinations/verified/nepal-swayambhunath.jpg",
    "gallery": [
      "/destinations/verified/nepal-swayambhunath.jpg"
    ],
    "highlights": [
      "Pashupatinath Temple Holy Darshan",
      "Boudhanath Stupa UNESCO World Heritage Site",
      "Swayambhunath Monkey Temple Panoramas",
      "Kathmandu Durbar Square Historic Palaces",
      "Private Airport Transfers & 3★ Hotel Stay"
    ],
    "inclusions": [
      "2 Nights Stay in 3★ Kathmandu Hotel",
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
        "name": "Hotel Arts Kathmandu / Royal Singi 3★",
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
        "hotel": "Departure Day",
        "transfers": "Private Cab"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Starting price is ₹15,000 per person (increased by ₹5,000 from flyer rate ₹10,000)."
      },
      {
        "question": "Do Indians need a passport/visa for Nepal?",
        "answer": "Indian nationals do NOT need a visa. Entry is granted with valid Voter ID card or Passport."
      }
    ],
    "coveredCities": [
      "Kathmandu"
    ],
    "citySlugs": [
      "kathmandu"
    ],
    "state": "Nepal",
    "stateSlug": "nepal",
    "entryCity": "Kathmandu",
    "exitCity": "Kathmandu"
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
    "heroImage": "/destinations/verified/nepal-bhaktapur.jpg",
    "gallery": [
      "/destinations/verified/nepal-bhaktapur.jpg"
    ],
    "highlights": [
      "Pashupatinath Temple & Boudhanath Stupa",
      "Patan Durbar Square Golden Temple & Krishna Mandir",
      "Bhaktapur Ancient City 55-Window Palace & Nyatapola Temple",
      "Nagarkot Sunrise View of Mount Everest Range",
      "Private Transfers & 3★ Hotel Stay with Breakfast"
    ],
    "inclusions": [
      "3 Nights Hotel Stay in Kathmandu 3★",
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
        "name": "Hotel Tibet / Lord Buddha 3★",
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
        "hotel": "Departure Day",
        "transfers": "Private Cab"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹20,000 per person (increased by ₹5,000 from flyer rate ₹15,000)."
      }
    ],
    "coveredCities": [
      "Kathmandu"
    ],
    "citySlugs": [
      "kathmandu"
    ],
    "state": "Nepal",
    "stateSlug": "nepal",
    "entryCity": "Kathmandu",
    "exitCity": "Kathmandu"
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
    "heroImage": "/destinations/verified/nepal-pokhara.jpg",
    "gallery": [
      "/destinations/verified/nepal-pokhara.jpg"
    ],
    "highlights": [
      "2N Kathmandu + 2N Pokhara Scenic Lakeside",
      "Pashupatinath & Swayambhunath Temple Visits",
      "Sarangkot Himalayan Sunrise over Annapurna Range",
      "Fewa Lake Boating & Tal Barahi Island Temple",
      "Davis Falls, Gupteshwor Cave & Bindhyabasini Temple"
    ],
    "inclusions": [
      "2N Kathmandu + 2N Pokhara 3★ Hotel Stay",
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
        "name": "Hotel Arts Kathmandu 3★",
        "city": "Kathmandu",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Barahi / Mount View Pokhara 3★",
        "city": "Pokhara",
        "rating": "3 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Kathmandu Arrival",
        "description": "Arrive at Kathmandu, Pokhara airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
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
        "hotel": "Departure Day",
        "transfers": "Private Cab"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹26,000 per person (increased by ₹5,000 from flyer rate ₹21,000)."
      }
    ],
    "coveredCities": [
      "Kathmandu",
      "Pokhara"
    ],
    "citySlugs": [
      "kathmandu",
      "pokhara"
    ],
    "state": "Nepal",
    "stateSlug": "nepal",
    "entryCity": "Kathmandu",
    "exitCity": "Pokhara"
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
    "heroImage": "/destinations/verified/nepal-muktinath.jpg",
    "gallery": [
      "/destinations/verified/nepal-muktinath.jpg"
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
      "Pokhara – Jomsom – Muktinath 4WD Jeep / Vehicle Transfers",
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
        "name": "Hotel Arts Kathmandu 3★",
        "city": "Kathmandu",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Barahi Pokhara 3★",
        "city": "Pokhara",
        "rating": "3 Star",
        "nights": 2
      },
      {
        "name": "Hotel Majestic Jomsom 3★",
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
        "hotel": "Departure Day",
        "transfers": "Private Cab"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹37,000 per person MAP Plan (increased by ₹5,000 from flyer rate ₹32,000)."
      }
    ],
    "coveredCities": [
      "Kathmandu",
      "Pokhara",
      "Jomsom",
      "Muktinath"
    ],
    "citySlugs": [
      "kathmandu",
      "pokhara",
      "jomsom",
      "muktinath"
    ],
    "state": "Nepal",
    "stateSlug": "nepal",
    "entryCity": "Kathmandu",
    "exitCity": "Muktinath"
  },
  {
    "id": "pkg-dubai-winter-sale-4n5d",
    "name": "Dubai Winter Special: City Tour, Burj Khalifa, Marina Cruise & Desert Safari (4N/5D)",
    "slug": "dubai-winter-special-4n5d-package",
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
    "heroImage": "/destinations/verified/dubai-yas-island.jpg",
    "gallery": [
      "/destinations/verified/dubai-yas-island.jpg"
    ],
    "highlights": [
      "Includes UAE Tourist Visa & Private Airport Transfers",
      "Burj Khalifa 124th & 125th Floor Non-Prime Entry Pass",
      "Dubai Marina Dhow Dinner Cruise with Live Shows",
      "4x4 Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
      "Full Day Abu Dhabi City Tour with Sheikh Zayed Grand Mosque"
    ],
    "inclusions": [
      "4 Nights Accommodation in 3★ / 4★ Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP + Special Dinners",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Citymax Bur Dubai / Howard Johnson 3★",
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
        "hotel": "Citymax Bur Dubai 3★",
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
        "hotel": "Citymax Bur Dubai 3★",
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
        "hotel": "Citymax Bur Dubai 3★",
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
        "hotel": "Citymax Bur Dubai 3★",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Starting price for 3★ hotel is ₹54,000 per person (increased by ₹5,000 from flyer rate ₹49,000). 4★ hotel option is ₹60,000 per person."
      }
    ],
    "coveredCities": [
      "Dubai",
      "Abu Dhabi"
    ],
    "citySlugs": [
      "dubai",
      "abu-dhabi"
    ],
    "state": "United Arab Emirates",
    "stateSlug": "united-arab-emirates",
    "entryCity": "Dubai",
    "exitCity": "Abu Dhabi"
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
    "heroImage": "/destinations/verified/dubai-miracle-garden.jpg",
    "gallery": [
      "/destinations/verified/dubai-miracle-garden.jpg"
    ],
    "highlights": [
      "Includes UAE Visa & Private Airport Transfers",
      "Miracle Garden (World's Largest Flower Garden) & Global Village Private Tour",
      "Burj Khalifa 124/125th Floor Non-Prime Entry Pass",
      "Dubai Marina Dhow Cruise & 4x4 Desert Safari",
      "Full Day Abu Dhabi Grand Mosque & City Sightseeing"
    ],
    "inclusions": [
      "5 Nights Accommodation in 3★ / 4★ Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP + Special Dinners",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Zabeel House / Aloft Dubai 4★",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
        "transfers": "4x4 Shared"
      },
      {
        "dayNumber": 6,
        "title": "Dubai Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Starting price for 3★ is ₹64,000 per person (increased by ₹5,000 from flyer rate ₹59,000). 4★ hotel option is ₹70,000 per person."
      }
    ],
    "coveredCities": [
      "Dubai",
      "Abu Dhabi"
    ],
    "citySlugs": [
      "dubai",
      "abu-dhabi"
    ],
    "state": "United Arab Emirates",
    "stateSlug": "united-arab-emirates",
    "entryCity": "Dubai",
    "exitCity": "Abu Dhabi"
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
    "heroImage": "/destinations/verified/dubai-atlantis.jpg",
    "gallery": [
      "/destinations/verified/dubai-atlantis.jpg"
    ],
    "highlights": [
      "6 Nights Extended Leisure Stay in Dubai",
      "UAE Visa & Private Airport Pickup/Drop Included",
      "Burj Khalifa 124/125th Floor Non-Prime Ticket",
      "Miracle Garden & Global Village Private Tour",
      "Abu Dhabi Tour, Marina Dhow Cruise & 4x4 Desert Safari"
    ],
    "inclusions": [
      "6 Nights Accommodation in 3★ / 4★ Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP + Special Dinners",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Millennium Plaza / Grand Excelsior 4★",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
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
        "hotel": "Dubai 4★ Hotel",
        "transfers": "4x4 Shared"
      },
      {
        "dayNumber": 7,
        "title": "Dubai Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Starting price for 3★ is ₹69,000 per person (increased by ₹5,000 from flyer rate ₹64,000). 4★ hotel option is ₹75,000 per person."
      }
    ],
    "coveredCities": [
      "Dubai",
      "Abu Dhabi"
    ],
    "citySlugs": [
      "dubai",
      "abu-dhabi"
    ],
    "state": "United Arab Emirates",
    "stateSlug": "united-arab-emirates",
    "entryCity": "Dubai",
    "exitCity": "Abu Dhabi"
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
    "heroImage": "/destinations/verified/egypt-pyramids.jpg",
    "gallery": [
      "/destinations/verified/egypt-pyramids.jpg"
    ],
    "highlights": [
      "Great Pyramids of Giza, Sphinx & Grand Egyptian Museum",
      "Fayoum Desert Safari 4x4 Adventure",
      "Wadi El Hitan UNESCO Whale Valley Sand Dunes",
      "Private Guided Tour on Double Sharing Basis (Min 4 Pax)",
      "Private Airport Pickup & Drop Transfers"
    ],
    "inclusions": [
      "3 Nights Accommodation in 4★ Cairo Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Steigenberger Pyramids / Concorde El Salam 4★",
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
        "hotel": "Cairo 4★ Hotel",
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
        "hotel": "Cairo 4★ Hotel",
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
        "hotel": "Cairo 4★ Hotel",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Starting price is ₹49,000 per person on double sharing basis for min 4 pax (increased by ₹5,000 from flyer rate ₹44,000)."
      }
    ],
    "coveredCities": [
      "Cairo"
    ],
    "citySlugs": [
      "cairo"
    ],
    "state": "Egypt",
    "stateSlug": "egypt",
    "entryCity": "Cairo",
    "exitCity": "Cairo"
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
    "heroImage": "/destinations/verified/egypt-alexandria.jpg",
    "gallery": [
      "/destinations/verified/egypt-alexandria.jpg"
    ],
    "highlights": [
      "Pyramids of Giza, Sphinx & Grand Egyptian Museum",
      "Full-Day Alexandria Mediterranean Coast Excursion",
      "Citadel of Qaitbay & Catacombs of Kom El Shoqafa",
      "Old Cairo Coptic Church & Historic Khan El Khalili Bazaar",
      "Private Guided Tour on Double Sharing Basis (Min 4 Pax)"
    ],
    "inclusions": [
      "4 Nights Accommodation in 4★ Cairo Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Cairo Pyramids Hotel 4★",
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
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Starting price is ₹54,000 per person on double sharing for min 4 pax (increased by ₹5,000 from flyer rate ₹49,000)."
      }
    ],
    "coveredCities": [
      "Cairo",
      "Alexandria"
    ],
    "citySlugs": [
      "cairo",
      "alexandria"
    ],
    "state": "Egypt",
    "stateSlug": "egypt",
    "entryCity": "Cairo",
    "exitCity": "Alexandria"
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
    "heroImage": "/destinations/verified/egypt-luxor-nile.jpg",
    "gallery": [
      "/destinations/verified/egypt-luxor-nile.jpg"
    ],
    "highlights": [
      "Includes 3 NIGHTS Full Board Stay on Luxury Nile Cruise",
      "Pyramids of Giza, Sphinx & Grand Egyptian Museum",
      "Philae Temple of Isis in Aswan",
      "Kom Ombo Temple of Sobek & Horus Temple in Edfu",
      "Valley of the Kings, Hatshepsut Temple & Karnak Temple in Luxor"
    ],
    "inclusions": [
      "2 Nights 4★ Cairo Hotel + 3 Nights 5★ Luxury Nile Cruise",
      "Full Board Meals on Nile Cruise (Breakfast, Lunch & Dinner)",
      "Domestic Flight Cairo – Aswan (or Luxor)",
      "Private Guided Excursions with Egyptologist",
      "All Airport & Cruise Dock Transfers"
    ],
    "exclusions": [
      "International Flights & Egypt Visa",
      "Personal Expenses"
    ],
    "theme": "Nile River Cruise & Royal Tombs",
    "hotelCategory": "3 Star",
    "mealPlan": "Full Board on Cruise + CP in Cairo",
    "flightsIncluded": true,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Cairo Hotel 4★",
        "city": "Cairo",
        "rating": "4 Star",
        "nights": 2
      },
      {
        "name": "Luxury 5★ Nile Cruise Ship",
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
        "hotel": "Cairo 4★ Hotel",
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
        "hotel": "Cairo 4★ Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Fly to Aswan, Philae Temple & Board Nile Cruise",
        "description": "Flight to Aswan. Visit Philae Temple of Goddess Isis, Aswan High Dam, and check in to 5★ Nile Cruise for lunch and sailing.",
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
        "hotel": "5★ Nile Cruise Ship",
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
        "hotel": "5★ Nile Cruise Ship",
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
        "hotel": "5★ Nile Cruise Ship",
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
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is ₹94,000 per person on double sharing for min 4 pax (increased by ₹5,000 from flyer rate ₹89,000). Includes 3 nights 5★ Nile Cruise with all meals and domestic Cairo-Aswan flight."
      }
    ],
    "coveredCities": [
      "Cairo",
      "Aswan to Luxor",
      "Luxor",
      "Aswan"
    ],
    "citySlugs": [
      "cairo",
      "aswan-to-luxor",
      "luxor",
      "aswan"
    ],
    "state": "Egypt",
    "stateSlug": "egypt",
    "entryCity": "Cairo",
    "exitCity": "Aswan"
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
    "heroImage": "/destinations/verified/bali-tegallalang.jpg",
    "gallery": [
      "/destinations/verified/bali-tegallalang.jpg"
    ],
    "highlights": [
      "Tanjung Benoa Watersports (Banana Boat, Jet Ski)",
      "Padang Padang Beach & Cliffside Uluwatu Temple",
      "Kintamani Batur Volcano Viewpoint & Tegenungan Waterfall",
      "Bali Aloha Swing Experience & Handicraft Villages",
      "Full Day Nusa Penida Island Tour with Private AC Car"
    ],
    "inclusions": [
      "4 Nights Accommodation in 4★ Bali Resort",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Best Western Kuta / Fontana Hotel Ubud 4★",
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
        "hotel": "Bali Resort 4★",
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
        "hotel": "Bali Resort 4★",
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
        "hotel": "Bali Resort 4★",
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
        "hotel": "Bali Resort 4★",
        "transfers": "Boat & Private Island Car"
      },
      {
        "dayNumber": 5,
        "title": "Bali Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private AC Car"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Starting price is ₹28,500 per person on double sharing (increased by ₹5,000 from flyer rate ₹23,500)."
      }
    ],
    "coveredCities": [
      "Bali",
      "Ubud",
      "Nusa Penida"
    ],
    "citySlugs": [
      "bali",
      "ubud",
      "nusa-penida"
    ],
    "state": "Indonesia",
    "stateSlug": "indonesia",
    "entryCity": "Bali",
    "exitCity": "Nusa Penida"
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
    "heroImage": "/destinations/verified/bali-tanah-lot.jpg",
    "gallery": [
      "/destinations/verified/bali-tanah-lot.jpg"
    ],
    "highlights": [
      "Includes Bali Hai Sunset Dinner Cruise Experience",
      "GWK Cultural Park, Pandawa Beach & Kecak Dance",
      "Kintamani Viewpoint & Tegalalang Rice Terrace in Ubud",
      "Ulun Danu Beratan Temple & Handara Gate Photo Stop",
      "Complimentary 1-Hour Authentic Balinese Spa Massage"
    ],
    "inclusions": [
      "5 Nights Accommodation in 4★ Bali Hotel / Resort",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP + Sunset Dinner",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Grand Inna Kuta / Aryaduta Bali 4★",
        "city": "Bali",
        "rating": "4 Star",
        "nights": 5
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bali Arrival",
        "description": "Arrive at Bali, Ubud, Uluwatu airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Bali Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹34,500 per person on double sharing (increased by ₹5,000 from flyer rate ₹29,500)."
      }
    ],
    "coveredCities": [
      "Bali",
      "Ubud"
    ],
    "citySlugs": [
      "bali",
      "ubud"
    ],
    "state": "Indonesia",
    "stateSlug": "indonesia",
    "entryCity": "Bali",
    "exitCity": "Ubud"
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
    "heroImage": "/destinations/verified/bali-uluwatu.jpg",
    "gallery": [
      "/destinations/verified/bali-uluwatu.jpg"
    ],
    "highlights": [
      "Nusa Penida Island Tour with Snorkeling at Crystal Bay",
      "FINNS Beach Club Seminyak Sunset Pass",
      "Exciting Jungle ATV Quad Bike Ride (or Bali Swing)",
      "Ulun Danu Temple, Handara Gate & Suluban Secret Beach",
      "Kintamani Volcano, Tegenungan Waterfall & Ubud Art Villages"
    ],
    "inclusions": [
      "6 Nights Accommodation in 4★ Bali Resort",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "The Anvaya Beach Resort / Aston Kuta 4★",
        "city": "Bali",
        "rating": "4 Star",
        "nights": 6
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Bali Airport Arrival",
        "description": "Arrive at Bali, Nusa Penida, Seminyak, Ubud airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
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
        "hotel": "Bali 4★ Resort",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 7,
        "title": "Bali Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is ₹39,000 per person on double sharing (increased by ₹5,000 from flyer rate ₹34,000)."
      }
    ],
    "coveredCities": [
      "Bali",
      "Ubud",
      "Nusa Penida",
      "Seminyak"
    ],
    "citySlugs": [
      "bali",
      "ubud",
      "nusa-penida",
      "seminyak"
    ],
    "state": "Indonesia",
    "stateSlug": "indonesia",
    "entryCity": "Bali",
    "exitCity": "Seminyak"
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
    "heroImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    ],
    "highlights": [
      "10 European Countries: UK (3N), France, Belgium, Netherlands, Germany, Switzerland, Austria, Liechtenstein, Italy & Vatican",
      "Guaranteed 4-Star Hotel Accommodations",
      "ALL MEALS INCLUDED (Daily Continental Breakfast, Indian Lunches & Dinners)",
      "All Major Sightseeing Entry Tickets & Excursions Included",
      "Driver Tips & Airport Transfers Included"
    ],
    "inclusions": [
      "15 Nights Stay in Guaranteed 4★ Hotels across Europe",
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included (Breakfast, Lunch, Dinner)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Guaranteed 4★ European Hotels",
        "city": "Multi-City Europe",
        "rating": "4 Star",
        "nights": 15
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "London Arrival",
        "description": "Arrival at London Heathrow Airport (LHR). Private/Coach transfer to guaranteed 4★ hotel.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport Transfer"
        ],
        "hotel": "London 4★ Hotel",
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
        "hotel": "London 4★ Hotel",
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
        "hotel": "London 4★ Hotel",
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
        "hotel": "Paris 4★ Hotel",
        "transfers": "Train & Coach"
      },
      {
        "dayNumber": 5,
        "title": "Paris Eiffel Tower 3rd Level & Guided City Tour",
        "description": "Ascend to 3rd level of Eiffel Tower, Louvre Museum exterior, Arc de Triomphe, Champs-Élysées.",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ],
        "activities": [
          "Eiffel Tower 3rd Level",
          "Paris City Tour"
        ],
        "hotel": "Paris 4★ Hotel",
        "transfers": "Coach Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Disneyland Paris Magic Day",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of London, Paris, Brussels, Amsterdam, Black Forest, Mt Titlis, Venice, Rome, Vatican. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Packed Lunch",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
        ],
        "hotel": "Paris 4★ Hotel",
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
        "hotel": "Amsterdam 4★ Hotel",
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
        "hotel": "Amsterdam 4★ Hotel",
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
        "hotel": "Germany 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Austria 4★ Hotel",
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
        "hotel": "Padova / Venice 4★ Hotel",
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
        "hotel": "Rome 4★ Hotel",
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
        "hotel": "Departure Day",
        "transfers": "Coach Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is EUR 3600 (~₹3,30,000 INR) per adult on double sharing basis (increased by EUR 50 / ~₹5,000 from flyer rate EUR 3550). Includes guaranteed 4★ hotels, all meals, and driver tips."
      }
    ],
    "coveredCities": [
      "Multi-City Europe",
      "Paris",
      "Rome",
      "Venice",
      "Florence",
      "Zurich",
      "Amsterdam",
      "London"
    ],
    "citySlugs": [
      "multi-city-europe",
      "paris",
      "rome",
      "venice",
      "florence",
      "zurich",
      "amsterdam",
      "london"
    ],
    "state": "Europe Multi-Country",
    "stateSlug": "europe-multi-country",
    "entryCity": "Multi-City Europe",
    "exitCity": "London"
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
    "heroImage": "/destinations/verified/europe-colosseum.jpg",
    "gallery": [
      "/destinations/verified/europe-colosseum.jpg"
    ],
    "highlights": [
      "8 Countries: France, Belgium, Netherlands, Germany, Switzerland, Austria, Liechtenstein, Italy & Vatican",
      "Starts in Paris (CDG Airport) & Ends in Rome (FCO Airport)",
      "Guaranteed 4-Star Hotel Accommodations",
      "ALL MEALS INCLUDED (Daily Breakfast, Lunches & Dinners)",
      "Eiffel Tower 3rd Level, Mt Titlis, Venice Gondola & Vatican"
    ],
    "inclusions": [
      "12 Nights Stay in Guaranteed 4★ Hotels",
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
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Guaranteed 4★ European Hotels",
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
        "hotel": "Paris 4★ Hotel",
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
        "hotel": "Paris 4★ Hotel",
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
        "hotel": "Paris 4★ Hotel",
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
        "hotel": "Amsterdam 4★ Hotel",
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
        "hotel": "Amsterdam 4★ Hotel",
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
        "hotel": "Germany 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Austria 4★ Hotel",
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
        "hotel": "Venice / Padova 4★ Hotel",
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
        "hotel": "Rome 4★ Hotel",
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
        "hotel": "Rome 4★ Hotel",
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
        "hotel": "Departure Day",
        "transfers": "Coach Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is EUR 2900 (~₹2,66,000 INR) per adult on double sharing (increased by EUR 50 / ~₹5,000 from flyer rate EUR 2850)."
      }
    ],
    "coveredCities": [
      "Multi-City Europe",
      "Paris",
      "Rome",
      "Venice",
      "Florence",
      "Lucerne",
      "Amsterdam"
    ],
    "citySlugs": [
      "multi-city-europe",
      "paris",
      "rome",
      "venice",
      "florence",
      "lucerne",
      "amsterdam"
    ],
    "state": "Europe Multi-Country",
    "stateSlug": "europe-multi-country",
    "entryCity": "Multi-City Europe",
    "exitCity": "Amsterdam"
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
    "heroImage": "/destinations/verified/europe-tower-bridge.jpg",
    "gallery": [
      "/destinations/verified/europe-tower-bridge.jpg"
    ],
    "highlights": [
      "Starts in London (LHR) & Ends in Rome (FCO)",
      "5 Iconic Countries: UK (02 Nights), France, Switzerland, Austria & Italy",
      "Guaranteed 4-Star Hotel Stay with All Meals Included",
      "London Eye, Eiffel Tower, Mt. Titlis & Venice Gondola",
      "Driver Tips & Airport Transfers Included"
    ],
    "inclusions": [
      "12 Nights Stay in Guaranteed 4★ Hotels",
      "All Meals (Daily Breakfast, Lunches & Dinners)",
      "All Tour Entries & Driver Tips",
      "London Airport Arrival & Rome Airport Departure Transfers"
    ],
    "exclusions": [
      "Air Tickets, UK & Schengen Visa Fees",
      "Personal Expenses"
    ],
    "theme": "Exclusive Multi-Country",
    "hotelCategory": "3 Star",
    "mealPlan": "All Meals Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Guaranteed 4★ European Hotels",
        "city": "Multi-City Europe",
        "rating": "4 Star",
        "nights": 12
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "London Heathrow Arrival",
        "description": "Arrival at London Heathrow Airport (LHR). Transfer to 4★ hotel.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport Pickup"
        ],
        "hotel": "London 4★ Hotel",
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
        "hotel": "London 4★ Hotel",
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
        "hotel": "Paris 4★ Hotel",
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
        "hotel": "Paris 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Central Switzerland 4★ Hotel",
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
        "hotel": "Austria 4★ Hotel",
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
        "hotel": "Venice / Padova 4★ Hotel",
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
        "hotel": "Rome 4★ Hotel",
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
        "hotel": "Rome 4★ Hotel",
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
        "hotel": "Rome 4★ Hotel",
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
        "hotel": "Departure Day",
        "transfers": "Coach Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is EUR 3050 (~₹2,80,000 INR) per adult on double sharing (increased by EUR 50 / ~₹5,000 from flyer rate EUR 3000)."
      }
    ],
    "coveredCities": [
      "Multi-City Europe",
      "Paris",
      "Rome",
      "Venice",
      "Florence",
      "Lucerne",
      "Zurich",
      "London"
    ],
    "citySlugs": [
      "multi-city-europe",
      "paris",
      "rome",
      "venice",
      "florence",
      "lucerne",
      "zurich",
      "london"
    ],
    "state": "Europe Multi-Country",
    "stateSlug": "europe-multi-country",
    "entryCity": "Multi-City Europe",
    "exitCity": "London"
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
    "heroImage": "/destinations/verified/europe-jungfrau.jpg",
    "gallery": [
      "/destinations/verified/europe-jungfrau.jpg"
    ],
    "highlights": [
      "3 Nights Paris + 1 Night Geneva + 3 Nights Central Switzerland",
      "Eiffel Tower 3rd Level, Disneyland Paris & Seine River Cruise",
      "Jungfraujoch - Top of Europe Cogwheel Train Excursion",
      "Mt. Titlis Revolving Cable Car & Cliff Walk",
      "Rhine Falls Boat Ride & Lindt Home of Chocolate Zurich"
    ],
    "inclusions": [
      "7 Nights Accommodation in 3★/4★ Hotels (B&B/Millennium Paris, Movenpick Geneva, Radisson Central Switzerland)",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast, Lunch & Dinner Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "B&B / Millennium CDG 3★/4★",
        "city": "Paris",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "Everness / Movenpick Geneva 4★",
        "city": "Geneva",
        "rating": "4 Star",
        "nights": 1
      },
      {
        "name": "La Maison Suisse Dottingen / Radisson 4★",
        "city": "Central Switzerland",
        "rating": "4 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Paris CDG Airport Arrival",
        "description": "Arrive at Paris, Geneva, Interlaken, Jungfraujoch, Engelberg, Zurich airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
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
        "hotel": "Departure Day",
        "transfers": "Coach Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is EUR 2300 (~₹2,11,000 INR) per adult on double sharing (increased by EUR 50 / ~₹5,000 from flyer rate EUR 2250)."
      }
    ],
    "coveredCities": [
      "Paris",
      "Geneva",
      "Central Switzerland",
      "Lucerne",
      "Zurich",
      "Interlaken"
    ],
    "citySlugs": [
      "paris",
      "geneva",
      "central-switzerland",
      "lucerne",
      "zurich",
      "interlaken"
    ],
    "state": "France & Switzerland",
    "stateSlug": "france-switzerland",
    "entryCity": "Paris",
    "exitCity": "Interlaken"
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
    "heroImage": "/destinations/verified/europe-amsterdam-canals.jpg",
    "gallery": [
      "/destinations/verified/europe-amsterdam-canals.jpg"
    ],
    "highlights": [
      "3N Paris + 1N Netherlands + 1N Germany + 3N Central Switzerland",
      "Eiffel Tower 3rd Level, Versailles Palace & Disneyland Paris",
      "Brussels Mini Europe, Amsterdam Canal Cruise & Windmills",
      "Heidelberg Altstadt & Titisee Black Forest Cuckoo Clocks",
      "Jungfraujoch Top of Europe, Mt. Titlis & Rhine Falls Boat Ride"
    ],
    "inclusions": [
      "8 Nights Hotel Stay in 3★/4★ European Hotels",
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
    "hotelCategory": "3 Star",
    "mealPlan": "Breakfast, Lunch & Dinner Included",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Millennium CDG Paris 4★",
        "city": "Paris",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "Van der Valk Netherlands 4★",
        "city": "Netherlands",
        "rating": "4 Star",
        "nights": 1
      },
      {
        "name": "Elaya Hotel Germany 4★",
        "city": "Germany",
        "rating": "4 Star",
        "nights": 1
      },
      {
        "name": "Radisson Central Switzerland 4★",
        "city": "Central Switzerland",
        "rating": "4 Star",
        "nights": 3
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Paris CDG Arrival",
        "description": "Arrive at Paris, Brussels, Amsterdam, Heidelberg, Interlaken, Mt Titlis, Zurich airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Dinner"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
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
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Paris, Brussels, Amsterdam, Heidelberg, Interlaken, Mt Titlis, Zurich. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast",
          "Packed Lunch",
          "Dinner"
        ],
        "activities": [
          "Guided Heritage Sightseeing",
          "Scenic Photography Stops",
          "Local Artisan Market Tour"
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
        "hotel": "Departure Day",
        "transfers": "Coach Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package price?",
        "answer": "Price is EUR 2650 (~₹2,43,000 INR) per adult on double sharing (increased by EUR 50 / ~₹5,000 from flyer rate EUR 2600)."
      }
    ],
    "coveredCities": [
      "Paris",
      "Netherlands",
      "Germany",
      "Central Switzerland",
      "Lucerne",
      "Zurich",
      "Interlaken",
      "Amsterdam"
    ],
    "citySlugs": [
      "paris",
      "netherlands",
      "germany",
      "central-switzerland",
      "lucerne",
      "zurich",
      "interlaken",
      "amsterdam"
    ],
    "state": "France, Belgium, Netherlands, Germany, Switzerland",
    "stateSlug": "france-belgium-netherlands-germany-switzerland",
    "entryCity": "Paris",
    "exitCity": "Amsterdam"
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
    "heroImage": "/destinations/verified/armenia-yerevan.jpg",
    "gallery": [
      "/destinations/verified/armenia-yerevan.jpg"
    ],
    "highlights": [
      "Ararat Brandy Factory Tour & Degustation Tasting",
      "Tsaghkadzor Alpine Ropeway Cable Car Ride",
      "High-Altitude Pearl Lake Sevan & Sevanavank Monastery",
      "Vernissage Open-Air Flea Market & Cascade Complex",
      "Private Transfers & 2 Bottles of Water Daily Per Pax"
    ],
    "inclusions": [
      "3 Nights Accommodation in 3★ / 4★ Yerevan Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Ani Grand Hotel / Opera Suite Yerevan 4★",
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
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 4,
        "title": "Yerevan Airport Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $395 USD (~₹33,000) per person on double sharing (increased by $60 / ₹5,000 from flyer rate $335)."
      }
    ],
    "coveredCities": [
      "Yerevan",
      "Tsaghkadzor",
      "Sevan"
    ],
    "citySlugs": [
      "yerevan",
      "tsaghkadzor",
      "sevan"
    ],
    "state": "Armenia",
    "stateSlug": "armenia",
    "entryCity": "Yerevan",
    "exitCity": "Sevan"
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
    "heroImage": "/destinations/verified/armenia-garni.jpg",
    "gallery": [
      "/destinations/verified/armenia-garni.jpg"
    ],
    "highlights": [
      "Garni Pagan Temple & UNESCO Geghard Cave Monastery",
      "Charents Arch Mount Ararat Panoramic View",
      "Symphony of Stones Basalt Canyon Wonder",
      "Ararat Brandy Factory & Tsaghkadzor Cable Car",
      "Lake Sevan & Private Guided Transfers"
    ],
    "inclusions": [
      "4 Nights Accommodation in Yerevan 4★ Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Ani Plaza Hotel / DoubleTree Yerevan 4★",
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
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Yerevan Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $490 USD (~₹41,000) per person on double sharing (increased by $60 / ₹5,000 from flyer rate $430)."
      }
    ],
    "coveredCities": [
      "Yerevan",
      "Tsaghkadzor",
      "Sevan",
      "Garni"
    ],
    "citySlugs": [
      "yerevan",
      "tsaghkadzor",
      "sevan",
      "garni"
    ],
    "state": "Armenia",
    "stateSlug": "armenia",
    "entryCity": "Yerevan",
    "exitCity": "Garni"
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
    "heroImage": "/destinations/verified/armenia-lake-sevan.jpg",
    "gallery": [
      "/destinations/verified/armenia-lake-sevan.jpg"
    ],
    "highlights": [
      "6,000-Year-Old Areni-1 Cave & Areni Winery Tasting",
      "Noravank Monastery in Red Rock Canyon",
      "Jermuk Spa Resort Town & Mineral Water Waterfall",
      "Garni Temple, Geghard Monastery & Symphony of Stones",
      "Lake Sevan, Tsaghkadzor Ropeway & Ararat Brandy Factory"
    ],
    "inclusions": [
      "5 Nights Accommodation in Yerevan 4★ Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Grand Hotel Yerevan / Radisson Blu 4★/5★",
        "city": "Yerevan",
        "rating": "4 Star",
        "nights": 5
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Yerevan Arrival",
        "description": "Arrive at Yerevan, Tsaghkadzor, Lake Sevan, Areni, Noravank, Jermuk airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 3,
        "title": "Tsaghkadzor Cable Car & Lake Sevan",
        "description": "After an energizing breakfast, embark on an immersive guided tour exploring the iconic landmarks, scenic viewpoints, cultural heritage monuments, and bustling artisan craft markets of Yerevan, Tsaghkadzor, Lake Sevan, Areni, Noravank, Jermuk. Capture memorable photographs and enjoy authentic regional cuisine with your private chauffeur.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Tsaghkadzor Ropeway",
          "Lake Sevan"
        ],
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
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
        "hotel": "Yerevan 4★ Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Yerevan Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $615 USD (~₹51,500) per person on double sharing (increased by $60 / ₹5,000 from flyer rate $555)."
      }
    ],
    "coveredCities": [
      "Yerevan",
      "Tsaghkadzor",
      "Sevan",
      "Garni"
    ],
    "citySlugs": [
      "yerevan",
      "tsaghkadzor",
      "sevan",
      "garni"
    ],
    "state": "Armenia",
    "stateSlug": "armenia",
    "entryCity": "Yerevan",
    "exitCity": "Garni"
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
    "heroImage": "/destinations/verified/baku-flame-towers.jpg",
    "gallery": [
      "/destinations/verified/baku-flame-towers.jpg"
    ],
    "highlights": [
      "Baku Old City UNESCO Icherisheher & Flame Towers Funicular Ride",
      "Ateshgah Zoroastrian Fire Temple & Yanardag Burning Mountain",
      "Tufandag Alpine Resort Gabala Cable Car Ride (2 Passes)",
      "Nohur Lake Scenic Mountain Reflection",
      "Private Transfers & English Speaking Guide"
    ],
    "inclusions": [
      "4 Nights Accommodation in 4★ Baku Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Winter Park Hotel Baku / Sapphire Hotel 4★",
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
        "hotel": "Winter Park Baku 4★",
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
        "hotel": "Winter Park Baku 4★",
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
        "hotel": "Winter Park Baku 4★",
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
        "hotel": "Winter Park Baku 4★",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 5,
        "title": "Baku Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $390 USD (~₹32,500) per person on double sharing (increased by $60 / ₹5,000 from flyer rate $330)."
      }
    ],
    "coveredCities": [
      "Baku",
      "Gabala",
      "Absheron"
    ],
    "citySlugs": [
      "baku",
      "gabala",
      "absheron"
    ],
    "state": "Azerbaijan",
    "stateSlug": "azerbaijan",
    "entryCity": "Baku",
    "exitCity": "Absheron"
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
    "heroImage": "/destinations/azerbaijan.jpg",
    "gallery": [
      "/destinations/azerbaijan.jpg"
    ],
    "highlights": [
      "5 Nights Hotel Stay in Baku Capital",
      "Nizami Street & Park Bulvar Shopping Tour",
      "Ateshgah Fire Temple & Yanardag Burning Mountain",
      "Tufandag Gabala Mountain Cable Car & Nohur Lake",
      "Old City Icherisheher & Heydar Aliyev Center"
    ],
    "inclusions": [
      "5 Nights Accommodation in 4★ Baku Hotel",
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
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Courtyard by Marriott / Midtown Baku 4★",
        "city": "Baku",
        "rating": "4 Star",
        "nights": 5
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Baku Arrival",
        "description": "Arrive at Baku, Absheron Peninsula, Gabala airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
        ],
        "hotel": "Baku 4★ Hotel",
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
        "hotel": "Baku 4★ Hotel",
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
        "hotel": "Baku 4★ Hotel",
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
        "hotel": "Baku 4★ Hotel",
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
        "hotel": "Baku 4★ Hotel",
        "transfers": "Private Transfer"
      },
      {
        "dayNumber": 6,
        "title": "Baku Departure",
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $430 USD (~₹36,000) per person on double sharing (increased by $60 / ₹5,000 from flyer rate $370)."
      }
    ],
    "coveredCities": [
      "Baku",
      "Gabala",
      "Absheron"
    ],
    "citySlugs": [
      "baku",
      "gabala",
      "absheron"
    ],
    "state": "Azerbaijan",
    "stateSlug": "azerbaijan",
    "entryCity": "Baku",
    "exitCity": "Absheron"
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
    "heroImage": "/destinations/verified/baku-flame-towers.jpg",
    "gallery": [
      "/destinations/verified/baku-flame-towers.jpg"
    ],
    "highlights": [
      "Includes 2 NIGHTS OVERNIGHT STAY in Gabala Mountain Resort",
      "Baku Old City & Absheron Fire Tour Combined",
      "Tufandag Mountain Cable Car Pass & 7 Gozel Waterfalls",
      "Nohur Lake Boating & Gabaland Theme Park",
      "Complete Relaxation in Caucasian Alps"
    ],
    "inclusions": [
      "3 Nights Baku + 2 Nights Gabala 4★ Resort Stay",
      "Daily Breakfast",
      "Gabala Cable Car Tickets",
      "Fire Temple & Yanardag Entry Tickets",
      "Private Intercity Transfers Baku – Gabala – Baku",
      "Airport Pick up & Drop Transfers"
    ],
    "exclusions": [
      "Airfare & Visa",
      "Personal Expenses"
    ],
    "theme": "Overnight Alpine Resort & Fire Wonders",
    "hotelCategory": "3 Star",
    "mealPlan": "CP (Daily Breakfast)",
    "flightsIncluded": false,
    "transfersIncluded": true,
    "departureCity": "Flexible / Pan-India",
    "hotels": [
      {
        "name": "Winter Park Hotel 4★",
        "city": "Baku",
        "rating": "4 Star",
        "nights": 3
      },
      {
        "name": "Qafqaz Riverside Resort 5★ / Gabala Resort 4★",
        "city": "Gabala",
        "rating": "5 Star",
        "nights": 2
      }
    ],
    "itinerary": [
      {
        "dayNumber": 1,
        "title": "Baku Arrival",
        "description": "Arrive at Baku, Gabala, Absheron airport / railway station. Meet our dedicated professional chauffeur at the arrivals terminal. Enjoy a seamless private air-conditioned transfer to your pre-booked hotel. Complete check-in formalities, unwind after your journey, and spend the evening enjoying leisure walks or exploring nearby local bazaars and food streets.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Airport / Station Meet & Greet",
          "Private Hotel Check-in",
          "Evening Leisure Walk"
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
        "description": "Savor a lavish buffet breakfast at your hotel. Complete check-out formalities. Depending on your flight or train schedule, enjoy last-minute shopping for local handicrafts, authentic spices, and specialty souvenirs before your private chauffeur transfers you to the airport or railway station for your onward journey home.",
        "meals": [
          "Breakfast"
        ],
        "activities": [
          "Hotel Buffet Breakfast",
          "Souvenir & Handicraft Shopping",
          "Departure Airport / Station Drop"
        ],
        "hotel": "Departure Day",
        "transfers": "Private Transfer"
      }
    ],
    "faqs": [
      {
        "question": "What is the package pricing?",
        "answer": "Price is $530 USD (~₹44,000) per person on double sharing (increased by $60 / ₹5,000 from flyer rate $470). Includes 2 nights stay in luxury Gabala resort."
      }
    ],
    "coveredCities": [
      "Baku",
      "Gabala",
      "Absheron"
    ],
    "citySlugs": [
      "baku",
      "gabala",
      "absheron"
    ],
    "state": "Azerbaijan",
    "stateSlug": "azerbaijan",
    "entryCity": "Baku",
    "exitCity": "Absheron"
  }
];
