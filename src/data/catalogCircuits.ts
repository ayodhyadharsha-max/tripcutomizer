import { ItineraryDay } from './packagesData';
import { SectorDefinition } from './packageCatalog';

export interface SectorCircuitResult {
  coveredCities: string[];
  citySlugs: string[];
  entryCity: string;
  exitCity: string;
  hotels: { name: string; city: string; rating: string; nights: number }[];
  itinerary: ItineraryDay[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  circuitTitle: string;
}

export function getBrandedHotelName(city: string, hotelTier: string): string {
  const c = city.trim();
  const lower = c.toLowerCase();

  // Special accommodations
  if (lower.includes('houseboat') || lower.includes('alleppey')) {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Alleppey Ultra-Luxury Glass Cruise Houseboat (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Alleppey Luxury AC Premium Houseboat (4★ Deluxe)';
    }
    return 'Alleppey Deluxe Private Houseboat (3★ Standard)';
  }

  if (lower.includes('houseboat') || (lower.includes('srinagar') && lower.includes('lake'))) {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Srinagar Sukoon Luxury Dal Lake Houseboat (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Srinagar Luxury Dal Lake Houseboat / Royal Dandoo (4★ Deluxe)';
    }
    return 'Srinagar Deluxe Dal Lake Houseboat / Wangnoo Heritage (3★ Standard)';
  }

  if (lower.includes('desert') || lower.includes('camp') || lower.includes('sam sand')) {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Jaisalmer The Serai / Suryagarh Desert Luxury Camp (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Jaisalmer Royal Desert Camp & Resort (4★ Deluxe)';
    }
    return 'Jaisalmer Sam Sand Dunes Swiss Desert Camp (3★ Standard)';
  }

  if (lower === 'ayodhya') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Ayodhya Praveg Tent City / Radisson Blu Ayodhya (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Ayodhya Park Inn by Radisson / Clarks Inn Express (4★ Deluxe)';
    }
    return 'Ayodhya Ramayana Heritage / Hotel Krinshna Palace (3★ Standard)';
  }

  if (lower === 'varanasi') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Varanasi Taj Ganges / BrijRama Palace Heritage (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Varanasi Madin Hotel / Radisson Hotel Varanasi (4★ Deluxe)';
    }
    return 'Varanasi Hotel Kashi Heritage / Treebo Trend (3★ Standard)';
  }

  if (lower === 'prayagraj') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Prayagraj Radisson Blu / Grand Continental (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Prayagraj Legend Hotel / Kanha Shyam (4★ Deluxe)';
    }
    return 'Prayagraj Hotel Kashi / Treebo Trend Harsh (3★ Standard)';
  }

  if (lower === 'munnar') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Munnar Blanket Hotel & Spa / Fragrant Nature (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Munnar Amber Dale Luxury Resort / The Leaf (4★ Deluxe)';
    }
    return 'Munnar Treebo Trend / Tea County Resort (3★ Standard)';
  }

  if (lower === 'thekkady') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Thekkady Spice Village / Elephant Court (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Thekkady Poetree Sarovar Portico / Cardamom County (4★ Deluxe)';
    }
    return 'Thekkady Treebo Trend / Forest Canopy (3★ Standard)';
  }

  if (lower === 'cochin') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Cochin Grand Hyatt Bolgatty / Le Meridien (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Cochin Radisson Blu / Holiday Inn (4★ Deluxe)';
    }
    return 'Cochin Treebo Trend / Ginger Hotel (3★ Standard)';
  }

  if (lower === 'srinagar') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Srinagar Vivanta Dal View / The Lalit Grand Palace (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Srinagar Radisson Srinagar / Four Points by Sheraton (4★ Deluxe)';
    }
    return 'Srinagar Treebo Trend / Hotel Solar Residency (3★ Standard)';
  }

  if (lower === 'gulmarg') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Gulmarg The Khyber Himalayan Resort & Spa (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Gulmarg Grand Mumtaz Resorts / Hotel Highlands Park (4★ Deluxe)';
    }
    return 'Gulmarg Pine View Resort / Hotel Heevan (3★ Standard)';
  }

  if (lower === 'pahalgam') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Pahalgam Welcomhotel Pine N Peak (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Pahalgam Hotel Heevan / Grand Mumtaz (4★ Deluxe)';
    }
    return 'Pahalgam Treebo Trend / Hotel Baisaran (3★ Standard)';
  }

  if (lower === 'port blair') {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Port Blair Welcomhotel Bay Island / Symphony Samudra (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Port Blair Peerless Resort / Sea Shell Port Blair (4★ Deluxe)';
    }
    return 'Port Blair Treebo Trend / Hotel Marina Manor (3★ Standard)';
  }

  if (lower.includes('havelock')) {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Havelock Taj Exotica Resort & Spa / Barefoot at Havelock (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Havelock Symphony Palms Beach Resort / Sea Shell Havelock (4★ Deluxe)';
    }
    return 'Havelock Treebo Trend / TSG Blue Resort (3★ Standard)';
  }

  if (lower.includes('neil')) {
    if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
      return 'Neil Island Symphony Summer Sands / Sea Shell Neil (5★ Luxury)';
    }
    if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
      return 'Neil Island Pearl Park Beach Resort / Silver Sand Neil (4★ Deluxe)';
    }
    return 'Neil Island Treebo Trend / TSG Aura Resort (3★ Standard)';
  }

  // Standard hotel fallback
  if (hotelTier === '5 Star' || hotelTier === '5-Star Luxury') {
    return `${c} Radisson Blu / Courtyard by Marriott (5★ Luxury)`;
  }
  if (hotelTier === '4 Star' || hotelTier === '4-Star Deluxe') {
    return `${c} Park Inn by Radisson / Lemon Tree Premier (4★ Deluxe)`;
  }
  return `${c} Treebo Trend / Ginger Hotel (3★ Standard)`;
}

export function slugifyCity(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

interface CircuitStage {
  city: string;
  stayCity?: string;
  title: string;
  desc: string;
  acts: string[];
  meals?: string[];
  transfers?: string;
}

interface MasterCircuitSpec {
  entryCity: string;
  exitCity: string;
  routeCities: string[];
  highlights: string[];
  stages: CircuitStage[];
  departureStage: {
    title: string;
    desc: string;
    acts: string[];
  };
}

export const MASTER_SECTOR_CIRCUITS: Record<string, MasterCircuitSpec> = {
  kerala: {
    entryCity: "Cochin",
    exitCity: "Cochin",
    routeCities: ["Cochin","Munnar","Thekkady","Alleppey","Kovalam"],
    highlights: [
      "Scenic Western Ghats Waterfall Drive to Munnar",
      "Eravikulam National Park & Tata Tea Museum Tour",
      "Periyar Wildlife Sanctuary & Spice Plantation Walk",
      "1 Night in Deluxe Private Backwater Houseboat with All Meals",
      "Dedicated AC Sedan / SUV with Chauffeur"
],
    stages: [
      {
            "city": "Munnar",
            "stayCity": "Munnar",
            "title": "Arrival in Cochin & Scenic Hill Highway Drive to Munnar",
            "desc": "Arrive at Cochin International Airport (COK) / Ernakulam Station. Meet your private chauffeur for a picturesque highway drive past Cheeyappara and Valara waterfalls into the misty hills of Munnar (1,600m). Check in at your tea garden resort and enjoy cool mountain breezes.",
            "acts": [
                  "Airport / Station Meet & Greet",
                  "Cheeyappara Waterfall Photo Stop",
                  "Valara Waterfalls View",
                  "Tea Estate Resort Check-in"
            ]
      },
      {
            "city": "Munnar",
            "stayCity": "Munnar",
            "title": "Munnar Tea Estates, Eravikulam National Park & Mattupetty Dam",
            "desc": "Morning wildlife safari in Eravikulam National Park to spot the endangered Nilgiri Tahr mountain goat. Visit the Tata Tea Museum with tea-tasting session, Mattupetty Dam for speed-boating, Echo Point, and scenic Kundala Lake.",
            "acts": [
                  "Eravikulam National Park Safari",
                  "Tata Tea Museum & Tea Tasting",
                  "Mattupetty Dam Speedboating",
                  "Echo Point Photography"
            ]
      },
      {
            "city": "Thekkady",
            "stayCity": "Thekkady",
            "title": "Munnar to Thekkady Spice Plantations & Periyar Wildlife Sanctuary",
            "desc": "Scenic drive along the Western Ghats (100 km) to Thekkady. Take a guided walking tour through aromatic cardamom, pepper, and cinnamon plantations. In the evening, witness authentic Kathakali classical dance and Kalaripayattu martial arts shows.",
            "acts": [
                  "Western Ghats Mountain Drive",
                  "Guided Spice Plantation Tour",
                  "Periyar Wildlife Sanctuary Walk",
                  "Kathakali & Martial Arts Cultural Show"
            ]
      },
      {
            "city": "Alleppey",
            "stayCity": "Alleppey Houseboat",
            "title": "Thekkady to Alleppey Backwaters & Private Houseboat Cruise",
            "desc": "Drive to Alleppey (Alappuzha), the Venice of the East. Board your traditional Kerala luxury private houseboat. Cruise through narrow palm-fringed canals, lush paddy fields, and lagoons while savoring freshly prepared Kerala meals on board.",
            "acts": [
                  "Houseboat Check-in & Welcome Drink",
                  "Vembanad Lake Palm Canal Cruise",
                  "Authentic Kerala Traditional Lunch & Dinner",
                  "Sunset over Backwaters"
            ]
      },
      {
            "city": "Kovalam",
            "stayCity": "Kovalam",
            "title": "Alleppey to Kovalam Beach via Sree Padmanabhaswamy Temple",
            "desc": "Morning canal cruise witnessing village life. Check out and drive to crescent-shaped Kovalam Beach. En route, visit the historic Sree Padmanabhaswamy Temple in Trivandrum. Spend the sunset evening relaxing along Lighthouse Beach.",
            "acts": [
                  "Morning Houseboat Village Cruise",
                  "Sree Padmanabhaswamy Temple Darshan",
                  "Kovalam Beach Resort Check-in",
                  "Lighthouse Beach Sunset Walk"
            ]
      },
      {
            "city": "Kovalam",
            "stayCity": "Kovalam",
            "title": "Kovalam Beach Relaxation & Poovar Island Mangrove Cruise",
            "desc": "Full day exploring Poovar Island backwaters where beach, island, river, and sea meet. Cruise through dense mangrove forests to the Golden Sand Beach. Enjoy an evening Ayurvedic wellness massage at your resort.",
            "acts": [
                  "Poovar Island Mangrove Boat Safari",
                  "Golden Sand Beach Exploration",
                  "Traditional Ayurvedic Massage Option",
                  "Arabian Sea Sunset Views"
            ]
      },
      {
            "city": "Cochin",
            "stayCity": "Cochin",
            "title": "Cochin Heritage Tour: Fort Kochi Chinese Nets & Mattancherry Palace",
            "desc": "Explore colonial Fort Kochi, the iconic 14th-century Chinese Fishing Nets, St. Francis Church (Vasco da Gama original burial site), Jewish Synagogue, and the Dutch Palace at Mattancherry.",
            "acts": [
                  "Fort Kochi Chinese Fishing Nets",
                  "St. Francis Church Historical Visit",
                  "Jewish Synagogue & Jew Town",
                  "Mattancherry Dutch Palace Tour"
            ]
      }
],
    departureStage: {
      title: "Buffet Breakfast, Authentic Kerala Spices Shopping & Departure Drop",
      desc: "Relish a hearty South Indian buffet breakfast. Check out from your resort. Pick up freshly ground plantation spices, authentic banana chips, and cashew nuts before your chauffeur transfers you to Cochin Airport (COK) or Trivandrum Airport (TRV).",
      acts: [
        "Resort Buffet Breakfast & Check-out",
        "Kerala Banana Chips & Spices Shopping",
        "Private Airport / Railway Station Drop"
]
    }
  },

  kashmir: {
    entryCity: "Srinagar",
    exitCity: "Srinagar",
    routeCities: ["Srinagar","Gulmarg","Pahalgam","Sonamarg"],
    highlights: [
      "Romantic Dal Lake Shikara Ride past Floating Gardens",
      "Gulmarg Apharwat Peak World-Class Gondola Cable Car Ride",
      "Pahalgam Lidder River, Betaab Valley & Aru Valley Tour",
      "1 Night in Traditional Deluxe Dal Lake Houseboat with Kashmiri Kehwa",
      "Dedicated Chauffeur Vehicle throughout Tour"
],
    stages: [
      {
            "city": "Srinagar",
            "stayCity": "Srinagar",
            "title": "Arrival in Srinagar & Sunset Dal Lake Shikara Ride",
            "desc": "Arrive at Srinagar International Airport (SXR). Warm traditional Kashmiri welcome with private transfer to your hotel. In the evening, enjoy a tranquil Shikara ride across Dal Lake visiting the floating flower market, Char Chinar island, and Meena Bazaar.",
            "acts": [
                  "Srinagar Airport Meet & Greet",
                  "Hotel Check-in Formalities",
                  "Dal Lake Romantic Shikara Ride",
                  "Char Chinar & Floating Market Tour"
            ]
      },
      {
            "city": "Gulmarg",
            "stayCity": "Srinagar",
            "title": "Srinagar to Gulmarg Meadow of Flowers & Apharwat Gondola Ride",
            "desc": "Day excursion to Gulmarg (50 km). Board the world-famous Gulmarg Gondola Cable Car ascending to Kongdoori (Phase 1) and Apharwat Peak (Phase 2 at 13,780 ft). Enjoy pristine snow panoramic views, ski slopes, and visit St. Mary Church.",
            "acts": [
                  "Scenic Gulmarg Alpine Highway Drive",
                  "Gulmarg Gondola Phase 1 & 2 Cable Car",
                  "Snow Activities at Apharwat Peak",
                  "Historic St. Mary Church Stroll"
            ]
      },
      {
            "city": "Pahalgam",
            "stayCity": "Pahalgam",
            "title": "Srinagar to Pahalgam Valley of Shepherds via Saffron Fields",
            "desc": "Scenic drive along the Lidder River through Pampore saffron fields and historic Awantipora ruins to alpine Pahalgam (2,130m). Check in at your riverside hotel. Explore the picturesque landscapes of Betaab Valley and Chandanwari.",
            "acts": [
                  "Pampore Saffron Fields Visit",
                  "Awantipora Sun Temple Ruins",
                  "Pahalgam Riverside Resort Check-in",
                  "Betaab Valley & Chandanwari Tour"
            ]
      },
      {
            "city": "Pahalgam",
            "stayCity": "Pahalgam",
            "title": "Pahalgam Baisaran Pine Meadow (Mini Switzerland) & Aru Valley",
            "desc": "Pony ride or trek up to the picturesque Baisaran meadow surrounded by dense pine forests and snow peaks, earning it the title Mini Switzerland. In the afternoon, explore scenic Aru Valley village with sparkling mountain streams.",
            "acts": [
                  "Baisaran Valley Pine Forest Ride",
                  "Mini Switzerland Panoramic Views",
                  "Aru Valley Mountain Stream Walk",
                  "Lidder River Trout Spotting"
            ]
      },
      {
            "city": "Sonamarg",
            "stayCity": "Srinagar",
            "title": "Srinagar to Sonamarg Meadow of Gold & Thajiwas Glacier",
            "desc": "Full-day excursion to Sonamarg (80 km) in the dramatic Sindh Valley. Ride ponies to the foot of the glistening Thajiwas Glacier where snow remains year-round. Enjoy snowball games and photography before returning to Srinagar.",
            "acts": [
                  "Sindh Valley Mountain Highway Drive",
                  "Thajiwas Glacier Pony Excursion",
                  "Snow Sledging Fun & Photography",
                  "Return Highway Drive to Srinagar"
            ]
      },
      {
            "city": "Srinagar",
            "stayCity": "Srinagar Houseboat",
            "title": "Mughal Gardens Tour & Luxury Dal Lake Houseboat Check-in",
            "desc": "Visit the world-renowned Mughal Gardens: Nishat Bagh (Garden of Pleasure), Shalimar Bagh (Abode of Love), and Chashme Shahi natural spring. In the afternoon, check in to your luxury carved wooden Houseboat on Dal Lake for a magical evening.",
            "acts": [
                  "Nishat Bagh Terraced Fountains",
                  "Shalimar Bagh Mughal Architecture",
                  "Chashme Shahi Natural Spring",
                  "Dal Lake Luxury Houseboat Check-in"
            ]
      },
      {
            "city": "Yusmarg",
            "stayCity": "Srinagar",
            "title": "Excursion to Pristine Yusmarg & Doodhpathri Milk Valley",
            "desc": "Discover the untouched alpine meadows of Yusmarg and Doodhpathri, where the Shaliganga River cascades over pebbles. Walk among rolling green hills, pine woods, and grazing flocks in complete mountain tranquility.",
            "acts": [
                  "Doodhpathri Milk Valley Meadows",
                  "Shaliganga Cascading River Walk",
                  "Pine Forest Nature Trail",
                  "Return to Srinagar Hotel"
            ]
      }
],
    departureStage: {
      title: "Kashmiri Kehwa Breakfast, Pashmina Shopping & Srinagar Airport Drop",
      desc: "Enjoy authentic saffron Kehwa and buffet breakfast on your houseboat veranda. Complete check-out. Visit the Government Arts Emporium for certified Kashmiri saffron, walnut wood artifacts, and Pashmina shawls before your airport transfer.",
      acts: [
        "Traditional Kehwa Breakfast & Check-out",
        "Pashmina Shawl & Saffron Shopping",
        "Srinagar International Airport Drop"
]
    }
  },

  ayodhya: {
    entryCity: "Ayodhya",
    exitCity: "Varanasi",
    routeCities: ["Ayodhya","Prayagraj","Varanasi"],
    highlights: [
      "Shri Ram Janmabhoomi Mandir VIP Darshan & Hanumangarhi Temple",
      "Sacred Saryu River Evening Maha Aarti at Ram Ki Paidi",
      "Prayagraj Triveni Sangam Holy Boat Ride & Dip with Bade Hanuman Ji",
      "Shri Kashi Vishwanath Golden Temple Corridor VIP Darshan",
      "Dashashwamedh Ghat Evening Ganga Aarti from Reserved Private Boat"
],
    stages: [
      {
            "city": "Ayodhya",
            "stayCity": "Ayodhya",
            "title": "Arrival in Holy Ayodhya Dham, Saryu Ghat & Ram Ki Paidi Maha Aarti",
            "desc": "Arrive at Ayodhya Dham Airport (AYJ) / Railway Station. Warm welcome and private AC chauffeur transfer to your hotel. Complete check-in and relax. In the evening, visit Ram Ki Paidi and witness the divine Saryu Maha Aarti with hundreds of floating earthen diyas and sacred Vedic chanting.",
            "acts": [
                  "Ayodhya Airport / Station Meet & Greet",
                  "Hotel Check-in Formalities",
                  "Ram Ki Paidi Heritage Walk",
                  "Saryu River Evening Maha Aarti"
            ]
      },
      {
            "city": "Ayodhya",
            "stayCity": "Ayodhya",
            "title": "Shri Ram Janmabhoomi VIP Darshan, Hanumangarhi & Kanak Bhawan",
            "desc": "Early morning VIP Darshan of Ram Lalla at the grand Shri Ram Janmabhoomi Mandir. Climb the 76 steps to ancient Hanumangarhi temple for blessings, followed by visits to Kanak Bhawan, Dashrath Mahal, Sugriva Qila, and Sita Ki Rasoi.",
            "acts": [
                  "Ram Janmabhoomi VIP Darshan",
                  "Hanumangarhi Temple Pooja",
                  "Kanak Bhawan Darshan",
                  "Dashrath Mahal & Sugriva Qila Tour"
            ]
      },
      {
            "city": "Prayagraj",
            "stayCity": "Varanasi",
            "title": "Ayodhya to Prayagraj Triveni Sangam Holy Dip & Drive to Varanasi",
            "desc": "After breakfast, scenic highway drive to sacred Prayagraj (Allahabad). Take a holy boat ride to the sacred Triveni Sangam (confluence of Ganga, Yamuna & invisible Saraswati) for a purifying dip and pooja. Visit the subterranean Bade Hanuman Ji Mandir (reclining posture), historical Anand Bhawan, and Alopi Devi Shaktipeeth. In the late afternoon, drive to Varanasi (Kashi) and check in at your hotel.",
            "acts": [
                  "Scenic Highway Drive to Prayagraj",
                  "Triveni Sangam Holy Dip & Boat Ride",
                  "Bade Hanuman Ji Temple Darshan",
                  "Anand Bhawan & Alopi Devi Visit",
                  "Highway Drive to Holy Varanasi & Check-in"
            ]
      },
      {
            "city": "Varanasi",
            "stayCity": "Varanasi",
            "title": "Kashi Vishwanath Jyotirlinga VIP Darshan, Sarnath & Ganga Aarti",
            "desc": "Early morning VIP Darshan at the grand Shri Kashi Vishwanath Golden Temple Corridor. Visit Maa Annapurna Mandir, Vishalakshi Temple, Manikarnika Ghat, and Kaal Bhairav temple. Afternoon excursion to Sarnath where Lord Buddha preached his first sermon (Dhamek Stupa & Museum). In the evening, witness the world-famous Ganga Aarti at Dashashwamedh Ghat from a reserved private boat.",
            "acts": [
                  "Kashi Vishwanath Corridor VIP Darshan",
                  "Maa Annapurna & Kaal Bhairav Darshan",
                  "Sarnath Buddhist Stupa & Museum Excursion",
                  "Dashashwamedh Ghat Evening Ganga Aarti"
            ]
      },
      {
            "city": "Varanasi",
            "stayCity": "Varanasi",
            "title": "Subah-e-Banaras Sunrise Ganges Boat Ride & Banarasi Silk Heritage Trail",
            "desc": "Experience a sublime dawn boat cruise on the holy Ganges witnessing Subah-e-Banaras rituals, morning yoga, and Vedic chanting across all 84 ghats. Visit Banaras Hindu University (BHU), New Vishwanath Temple, and a master artisan silk-weaving workshop.",
            "acts": [
                  "Subah-e-Banaras Dawn Ganges Boat Cruise",
                  "BHU New Vishwanath Temple Visit",
                  "Master Artisan Banarasi Silk Weaving Trail",
                  "Ghats Cultural Heritage Walk"
            ]
      },
      {
            "city": "Ayodhya",
            "stayCity": "Ayodhya",
            "title": "Guptar Ghat, Surya Kund & Sacred Panchkosi Parikrama Trail",
            "desc": "Visit sacred Guptar Ghat on River Saryu where Lord Rama entered Jal Samadhi. Explore newly restored Surya Kund with musical laser fountain and ancient temples, followed by Mani Parbat and Sugriva Qila.",
            "acts": [
                  "Guptar Ghat Boating & Darshan",
                  "Surya Kund Heritage Complex",
                  "Mani Parbat Sightseeing",
                  "Sugriva Qila Visit"
            ]
      }
],
    departureStage: {
      title: "Banarasi Kachori Food Trail, Sacred Souvenirs & Airport Drop",
      desc: "Savor authentic Banarasi kachori-jalebi breakfast. Complete check-out. Pick up authentic Banarasi silk sarees, sacred Gangajal brass pots, and Kashi prasad before your private chauffeur transfers you to Varanasi (VNS) or Ayodhya (AYJ) Airport / Station.",
      acts: [
        "Traditional Kachori & Jalebi Breakfast",
        "Banarasi Silk Saree & Brassware Shopping",
        "Airport / Railway Station Departure Drop"
]
    }
  },

  varanasi: {
    entryCity: "Varanasi",
    exitCity: "Varanasi",
    routeCities: ["Varanasi","Prayagraj","Ayodhya"],
    highlights: [
      "Shri Kashi Vishwanath Jyotirlinga VIP Darshan Corridor",
      "Subah-e-Banaras Sunrise Ganges Boat Cruise across 84 Ghats",
      "Dashashwamedh Ghat Evening Ganga Aarti from Private Reserved Boat",
      "Prayagraj Triveni Sangam Holy Dip & Bade Hanuman Ji Darshan",
      "Ayodhya Shri Ram Janmabhoomi Mandir Darshan Excursion"
],
    stages: [
      {
            "city": "Varanasi",
            "stayCity": "Varanasi",
            "title": "Arrival in Kashi, Hotel Check-in & Dashashwamedh Ghat Ganga Aarti",
            "desc": "Arrive at Lal Bahadur Shastri Airport (VNS) / Varanasi Cantt Station. Private transfer to your hotel. In the evening, witness the world-famous Ganga Aarti at Dashashwamedh Ghat from a reserved private boat on holy River Ganges with illuminated brass lamps.",
            "acts": [
                  "Varanasi Airport / Station Pickup",
                  "Hotel Check-in Formalities",
                  "Dashashwamedh Ghat Private Boat Ride",
                  "Evening Ganga Aarti Darshan"
            ]
      },
      {
            "city": "Varanasi",
            "stayCity": "Varanasi",
            "title": "Kashi Vishwanath Jyotirlinga VIP Darshan, Annapurna & Kaal Bhairav",
            "desc": "Early morning VIP Darshan at the grand Shri Kashi Vishwanath Golden Temple Corridor. Visit Maa Annapurna Mandir, Vishalakshi Temple, Manikarnika Ghat, and the guardian deity Kaal Bhairav temple.",
            "acts": [
                  "Kashi Vishwanath Jyotirlinga VIP Darshan",
                  "Maa Annapurna & Kaal Bhairav Darshan",
                  "Ghat Heritage Walk",
                  "Manikarnika Ghat View"
            ]
      },
      {
            "city": "Varanasi",
            "stayCity": "Varanasi",
            "title": "Subah-e-Banaras Dawn Boat Ride, Sarnath Stupa & Silk Weaving",
            "desc": "Experience the sublime Subah-e-Banaras sunrise boat tour across 84 ghats. Afternoon excursion to Sarnath where Lord Buddha gave his first sermon. Explore Dhamek Stupa, Ashoka Pillar, and the Archaeological Museum.",
            "acts": [
                  "Dawn Ganges Sunrise Boat Cruise",
                  "Sarnath Buddhist Monasteries & Museum",
                  "Banarasi Silk Weaving Center Tour"
            ]
      },
      {
            "city": "Prayagraj",
            "stayCity": "Prayagraj",
            "title": "Drive to Prayagraj, Triveni Sangam Holy Dip & Bade Hanuman Ji",
            "desc": "Scenic highway drive to holy Prayagraj. Private boat ride to Triveni Sangam for holy snan and pooja. Visit the underground Bade Hanuman Ji Temple, Anand Bhawan (Nehru family ancestral home), and Alopi Devi temple.",
            "acts": [
                  "Highway Drive to Prayagraj",
                  "Triveni Sangam Boat Ride & Holy Dip",
                  "Bade Hanuman Ji Temple Darshan",
                  "Anand Bhawan Heritage Museum"
            ]
      },
      {
            "city": "Ayodhya",
            "stayCity": "Ayodhya",
            "title": "Prayagraj to Holy Ayodhya, Ram Janmabhoomi VIP Darshan & Saryu Aarti",
            "desc": "Drive to sacred Ayodhya Dham. VIP Darshan of Ram Lalla at Shri Ram Janmabhoomi Mandir. Climb Hanumangarhi, visit Kanak Bhawan, and attend divine Saryu Maha Aarti at Ram Ki Paidi.",
            "acts": [
                  "Highway Drive to Ayodhya",
                  "Ram Janmabhoomi VIP Darshan",
                  "Hanumangarhi Temple Blessings",
                  "Saryu River Maha Aarti"
            ]
      },
      {
            "city": "Varanasi",
            "stayCity": "Varanasi",
            "title": "Bodh Gaya Mahabodhi Temple UNESCO World Heritage Excursion",
            "desc": "Day trip to sacred Bodh Gaya where Lord Buddha attained enlightenment. Visit the magnificent Mahabodhi Temple, the sacred Bodhi Tree, Great Buddha 80-ft Statue, and international monasteries.",
            "acts": [
                  "Bodh Gaya Mahabodhi Temple VIP Darshan",
                  "Sacred Bodhi Tree Meditation",
                  "Great Buddha 80-ft Statue Visit",
                  "Return Drive to Varanasi"
            ]
      }
],
    departureStage: {
      title: "Banaras Kachori Food Trail, Silk Shopping & Airport Drop",
      desc: "Savor famous Banarasi kachori-jalebi and Malaiyo breakfast. Complete check-out. Pick up authentic Banarasi silk sarees, brass lamps, and Kashi prasad before your private chauffeur transfers you to the airport or station.",
      acts: [
        "Kachori & Malaiyo Food Trail",
        "Banarasi Silk Saree Shopping",
        "Varanasi Airport / Station Departure Drop"
]
    }
  },

  himachal: {
    entryCity: "Delhi / Chandigarh",
    exitCity: "Chandigarh / Delhi",
    routeCities: ["Shimla","Manali","Dharamshala","Dalhousie"],
    highlights: [
      "Shimla Mall Road, Ridge & Kufri Snow Viewpoint",
      "Manali Solang Valley Adventure Sports & Atal Tunnel to Sissu",
      "Historic Hadimba Devi Temple & Vashisht Natural Sulphur Hot Springs",
      "Dharamshala Dalai Lama Temple Complex & Bhagsu Waterfall",
      "Dedicated Chauffeur Driven Private AC Sedan / SUV"
],
    stages: [
      {
            "city": "Shimla",
            "stayCity": "Shimla",
            "title": "Arrival in Chandigarh / Delhi & Scenic Mountain Drive to Shimla",
            "desc": "Meet your chauffeur in Chandigarh or Delhi. Drive up through the Shivalik foothills to colonial summer capital Shimla (2,276m). Check in at your mountain hotel. Spend the evening strolling along the famous pedestrian Mall Road.",
            "acts": [
                  "Airport / Station Meet & Greet",
                  "Pinjore Garden Highway Stop",
                  "Timber Trail Viewpoint",
                  "Shimla Hotel Check-in",
                  "Mall Road Evening Walk"
            ]
      },
      {
            "city": "Shimla",
            "stayCity": "Shimla",
            "title": "Shimla Heritage Walk, Ridge, Christ Church & Kufri Snow View",
            "desc": "Excursion to Kufri (2,622m) for horse riding up Mahasu Peak and Himalayan wildlife zoo. Return to Shimla for a walking tour covering the Ridge, neo-gothic Christ Church, Gaiety Theatre, and Jakhoo Temple.",
            "acts": [
                  "Kufri Himalayan Nature Park",
                  "Mahasu Peak Horse Riding",
                  "Shimla Ridge & Christ Church",
                  "Jakhoo Hill Hanuman Temple"
            ]
      },
      {
            "city": "Manali",
            "stayCity": "Manali",
            "title": "Shimla to Manali via Pandoh Dam & Kullu Valley Shawl Factories",
            "desc": "Picturesque drive (250 km) along the Beas River to Manali (2,050m). En route visit Sundernagar Lake, Pandoh Dam, and an authentic Kullu Angora shawl weaving cooperative. Check in at your Manali resort.",
            "acts": [
                  "Sundernagar Lake Photo Stop",
                  "Pandoh Dam Scenic Overlook",
                  "Kullu Shawl Weaving Tour",
                  "Beas River Valley Drive",
                  "Manali Resort Check-in"
            ]
      },
      {
            "city": "Manali",
            "stayCity": "Manali",
            "title": "Manali Solang Valley, Atal Tunnel & Sissu Lahaul Valley Excursion",
            "desc": "Drive through the engineering marvel Atal Tunnel (9.02 km) to Sissu in Lahaul Valley. Marvel at the cascading Palden Lhamo waterfall. Head to Solang Valley for thrilling paragliding, zorbing, and ATV rides.",
            "acts": [
                  "Atal Tunnel Engineering Drive",
                  "Sissu Lahaul Valley Snow Views",
                  "Solang Valley Paragliding & Adventure",
                  "Anjani Mahadev Trek Option"
            ]
      },
      {
            "city": "Manali",
            "stayCity": "Manali",
            "title": "Manali Hadimba Temple, Vashisht Hot Springs & Old Manali Cafes",
            "desc": "Visit the 450-year-old wooden Hadimba Devi Temple set in dense cedar forests. Soak in the natural sulphur hot springs at Vashisht Temple. Explore the Tibetan Monastery, Van Vihar, and vibrant cafes of Old Manali.",
            "acts": [
                  "Hadimba Devi Ancient Temple",
                  "Vashisht Village Hot Sulphur Springs",
                  "Tibetan Monastery & Handloom Market",
                  "Old Manali Apple Orchard Stroll"
            ]
      },
      {
            "city": "Dharamshala",
            "stayCity": "Dharamshala",
            "title": "Manali to Dharamshala / McLeodganj via Palampur Tea Gardens",
            "desc": "Scenic drive to Dharamshala along Kangra Valley with a stop at Palampur tea gardens and Chamunda Devi Temple. Check in to your McLeodganj hotel overlooking the Dhauladhar snow range.",
            "acts": [
                  "Palampur Tea Gardens Tour",
                  "Chamunda Devi Temple Stop",
                  "McLeodganj Hill Check-in",
                  "Dhauladhar Sunset Views"
            ]
      },
      {
            "city": "Dalhousie",
            "stayCity": "Dalhousie",
            "title": "McLeodganj Dalai Lama Temple & Drive to Dalhousie Khajjiar",
            "desc": "Visit Tsuglagkhang (Dalai Lama Temple Complex), Namgyal Monastery, and Bhagsunag Waterfall. Drive to colonial Dalhousie and explore Khajjiar, famously called Mini Switzerland of India, with saucer-shaped meadows.",
            "acts": [
                  "Dalai Lama Temple Complex",
                  "Bhagsu Waterfall & Shiva Cafe",
                  "Drive to Dalhousie",
                  "Khajjiar Mini Switzerland Meadow Walk"
            ]
      }
],
    departureStage: {
      title: "Himachal Souvenir Shopping & Chandigarh / Delhi Airport Drop",
      desc: "Buffet breakfast with mountain views. Complete check-out. Pick up authentic Himachal apple jams, Kangra tea, and wooden souvenirs before your chauffeur transfers you to Chandigarh (IXC) or Delhi (DEL) Airport.",
      acts: [
        "Mountain Resort Breakfast & Check-out",
        "Kangra Tea & Wooden Craft Shopping",
        "Chandigarh / Delhi Airport Drop"
]
    }
  },

  rajasthan: {
    entryCity: "Jaipur",
    exitCity: "Udaipur / Jaipur",
    routeCities: ["Jaipur","Jodhpur","Jaisalmer","Udaipur"],
    highlights: [
      "Jaipur Amber Fort Hilltop Palace & Hawa Mahal Photo Stop",
      "Jodhpur Colossal Mehrangarh Fort & Jaswant Thada Royal Cenotaphs",
      "1 Night in Jaisalmer Sam Sand Dunes Swiss Desert Camp with Camel Safari & Folk Dance",
      "Jaisalmer Golden Living Fort (Sonar Qila) & Patwon Ki Haveli",
      "Udaipur Lake Pichola Boat Ride & Grand City Palace Complex"
],
    stages: [
      {
            "city": "Jaipur",
            "stayCity": "Jaipur",
            "title": "Arrival in Jaipur Pink City, Hotel Check-in & Chokhi Dhani Village",
            "desc": "Arrive at Jaipur Airport (JAI) or Railway Station. Warm Rajasthani welcome with private transfer to your heritage hotel. In the evening, visit Chokhi Dhani ethnic resort for folk dance, puppet shows, camel rides, and authentic Dal Baati Churma feast.",
            "acts": [
                  "Jaipur Airport Meet & Greet",
                  "Heritage Hotel Check-in",
                  "Chokhi Dhani Ethnic Village Tour",
                  "Rajasthani Folk Dance & Dinner"
            ]
      },
      {
            "city": "Jaipur",
            "stayCity": "Jaipur",
            "title": "Jaipur Amber Fort, Jal Mahal, City Palace & Jantar Mantar",
            "desc": "Full-day Pink City exploration. Ascend hilltop Amber Fort by jeep. Stop at Jal Mahal water palace. Tour the opulent City Palace museum complex and UNESCO-listed Jantar Mantar solar observatory.",
            "acts": [
                  "Amber Fort Royal Palace Tour",
                  "Jal Mahal Panoramic Photo Stop",
                  "City Palace Royal Residence Museum",
                  "Jantar Mantar Astronomical Instruments",
                  "Hawa Mahal Palace of Winds"
            ]
      },
      {
            "city": "Jodhpur",
            "stayCity": "Jodhpur",
            "title": "Jaipur to Jodhpur Blue City via Sacred Pushkar Brahma Temple",
            "desc": "Drive to Jodhpur via sacred Pushkar. Visit the world-unique Lord Brahma Temple and holy Pushkar Lake ghats. Continue to the Sun City Jodhpur and check in at your hotel. Stroll through the blue-painted old city lanes.",
            "acts": [
                  "Pushkar Brahma Temple Darshan",
                  "Pushkar Holy Lake Ghats",
                  "Drive to Jodhpur Blue City",
                  "Clock Tower & Sardar Market Walk"
            ]
      },
      {
            "city": "Jaisalmer",
            "stayCity": "Jaisalmer Desert Camp",
            "title": "Jodhpur Mehrangarh Fort & Drive to Thar Desert Sam Sand Dunes",
            "desc": "Tour colossal Mehrangarh Fort and marble royal cenotaph Jaswant Thada. Scenic highway drive into the Thar Desert to Sam Sand Dunes. Enjoy sunset camel safari, Rajasthani Kalbelia folk dance, campfire, and Swiss tent luxury stay.",
            "acts": [
                  "Mehrangarh Fort Palace Museums",
                  "Jaswant Thada Marble Cenotaphs",
                  "Drive to Thar Desert Dunes",
                  "Sunset Camel Safari on Golden Dunes",
                  "Kalbelia Folk Dance & Campfire Dinner"
            ]
      },
      {
            "city": "Jaisalmer",
            "stayCity": "Jaisalmer",
            "title": "Jaisalmer Golden Fort (Sonar Qila), Patwon Ki Haveli & Gadisar Lake",
            "desc": "Explore the UNESCO-listed living Jaisalmer Fort with intricately carved Jain temples. Walk through ornate sandstone Patwon Ki Haveli and Salim Singh Ki Haveli. Enjoy peaceful boating on ancient Gadisar Lake.",
            "acts": [
                  "Jaisalmer Golden Fort Living Tour",
                  "Patwon Ki Haveli Intricate Carvings",
                  "Gadisar Lake Historic Ghats",
                  "Kuldhara Haunted Village Excursion"
            ]
      },
      {
            "city": "Udaipur",
            "stayCity": "Udaipur",
            "title": "Jaisalmer / Jodhpur to Udaipur City of Lakes via Ranakpur Temple",
            "desc": "Drive through the Aravalli hills to romantic Udaipur. En route visit the 15th-century Ranakpur Jain Temple with 1,444 uniquely carved marble pillars. Check in at your lake-view hotel in Udaipur.",
            "acts": [
                  "Aravalli Mountain Scenic Drive",
                  "Ranakpur Jain Marble Temple",
                  "Udaipur Hotel Check-in",
                  "Lake Pichola Sunset View"
            ]
      },
      {
            "city": "Udaipur",
            "stayCity": "Udaipur",
            "title": "Udaipur City Palace, Lake Pichola Boat Cruise & Saheliyon Ki Bari",
            "desc": "Explore majestic City Palace overlooking Lake Pichola. Board a scenic boat ride around Jag Mandir island palace. Visit Jagdish Temple, Saheliyon Ki Bari royal gardens, and vintage car collection.",
            "acts": [
                  "City Palace Grand Museums",
                  "Lake Pichola Scenic Boat Cruise",
                  "Jag Mandir Island Palace Stop",
                  "Saheliyon Ki Bari Royal Fountains"
            ]
      }
],
    departureStage: {
      title: "Rajasthani Mojari & Handicrafts Shopping, Airport Departure Drop",
      desc: "Buffet breakfast at your heritage hotel. Complete check-out. Pick up authentic Rajasthani Bandhani fabrics, blue pottery, and leather mojaris before your chauffeur drops you at Udaipur (UDR) or Jaipur (JAI) Airport.",
      acts: [
        "Heritage Buffet Breakfast & Check-out",
        "Bandhani & Handicrafts Shopping",
        "Udaipur / Jaipur Airport Departure Drop"
]
    }
  },

  andaman: {
    entryCity: "Port Blair",
    exitCity: "Port Blair",
    routeCities: ["Port Blair","Havelock Island","Neil Island"],
    highlights: [
      "Historic Cellular Jail Light & Sound Show in Port Blair",
      "Luxury Catamaran Cruise (Makruzz/Nautika) between Islands",
      "Havelock Radhanagar Beach (Ranked Among Asia’s Top Beaches)",
      "Elephant Beach Speedboat Excursion with Coral Reef Snorkeling",
      "Neil Island Natural Coral Rock Bridge & Laxmanpur Sunset Beach"
],
    stages: [
      {
            "city": "Port Blair",
            "stayCity": "Port Blair",
            "title": "Arrival in Port Blair & Historic Cellular Jail Light and Sound Show",
            "desc": "Arrive at Veer Savarkar International Airport (IXZ) in Port Blair. Meet our representative for a private transfer to your hotel. In the evening, visit the historic Cellular Jail (Kala Pani) and attend the moving Light & Sound Show narrating freedom struggle.",
            "acts": [
                  "Port Blair Airport Meet & Greet",
                  "Hotel Check-in Formalities",
                  "Cellular Jail Museum Tour",
                  "Moving Light & Sound Show"
            ]
      },
      {
            "city": "Havelock Island",
            "stayCity": "Havelock Island",
            "title": "Catamaran Cruise to Havelock Island & Radhanagar Beach Sunset",
            "desc": "Board a high-speed luxury catamaran cruise (Makruzz / Nautika) to Havelock Island (Swaraj Dweep). Check in at your beachside resort. Spend the afternoon swimming and watching the sunset at world-famous Radhanagar Beach (Beach No. 7).",
            "acts": [
                  "High-Speed Catamaran Cruise",
                  "Havelock Island Arrival & Welcome",
                  "Beach Resort Check-in",
                  "Radhanagar White Sand Beach Sunset"
            ]
      },
      {
            "city": "Havelock Island",
            "stayCity": "Havelock Island",
            "title": "Havelock Elephant Beach Speedboat Ride & Coral Snorkeling",
            "desc": "Exciting speedboat ride to Elephant Beach. Put on snorkel gear to explore shallow coral reefs teeming with clownfish, parrotfish, and sea turtles. Optional activities include underwater sea-walking and parasailing.",
            "acts": [
                  "Speedboat Ride to Elephant Beach",
                  "Guided Coral Reef Snorkeling",
                  "Underwater Sea Walk Option",
                  "Kalapathar Beach Photo Tour"
            ]
      },
      {
            "city": "Neil Island",
            "stayCity": "Neil Island",
            "title": "Catamaran to Neil Island, Natural Rock Bridge & Laxmanpur Sunset",
            "desc": "Cruise to tranquil Neil Island (Shaheed Dweep). Visit the unique Natural Living Coral Bridge exposed at low tide. In the evening, head to Laxmanpur Beach for a breathtaking sunset across the turquoise Andaman Sea.",
            "acts": [
                  "Inter-Island Ferry to Neil Island",
                  "Natural Living Coral Bridge Walk",
                  "Laxmanpur Beach Sunset Photography",
                  "Neil Island Resort Check-in"
            ]
      },
      {
            "city": "Port Blair",
            "stayCity": "Port Blair",
            "title": "Neil Island Bharatpur Beach & Catamaran Return to Port Blair",
            "desc": "Visit Bharatpur Beach for coral viewing via glass-bottom boat rides. Afternoon luxury catamaran cruise back to Port Blair. Stroll along Corbyn’s Cove palm beach and visit Chidiya Tapu sunset point.",
            "acts": [
                  "Bharatpur Beach Glass Bottom Boat",
                  "Catamaran Cruise Return to Port Blair",
                  "Corbyn’s Cove Beach Stroll",
                  "Chidiya Tapu Sunset View"
            ]
      },
      {
            "city": "Port Blair",
            "stayCity": "Port Blair",
            "title": "Ross Island & North Bay Coral Island Speedboat Excursion",
            "desc": "Speedboat across to Ross Island (Netaji Subhash Chandra Bose Dweep) to see British penal ruins and friendly deer. Continue to North Bay Coral Island (depicted on the 20-rupee note) for snorkeling and submarine viewing.",
            "acts": [
                  "Ross Island Heritage Ruins Walk",
                  "Spotted Deer & Peacocks Sanctuary",
                  "North Bay Coral Island Watersports",
                  "Semi-Submarine Coral Tour"
            ]
      }
],
    departureStage: {
      title: "Sagarika Shell Handicrafts Shopping & Port Blair Airport Drop",
      desc: "Buffet breakfast at your resort. Complete check-out. Visit Sagarika Government Cottage Industries Emporium for genuine seashell handicrafts, mother-of-pearl jewelry, and Andaman t-shirts before your airport transfer.",
      acts: [
        "Resort Buffet Breakfast & Check-out",
        "Sagarika Shell Craft & Pearl Shopping",
        "Port Blair International Airport Drop"
]
    }
  },

  sikkim: {
    entryCity: "Bagdogra / NJP",
    exitCity: "Bagdogra / NJP",
    routeCities: ["Gangtok","Lachung","Pelling","Darjeeling"],
    highlights: [
      "Gangtok High-Altitude Tsomgo (Changu) Lake & Baba Mandir",
      "Scenic Himalayan Drive along Teesta River Valley",
      "Pelling Glass Skywalk facing 137-ft Chenrezig Statue & Kanchenjunga",
      "Early 4 AM Tiger Hill Kanchenjunga Sunrise & Batasia Loop Toy Train",
      "Dedicated Mountain Chauffeur AC Vehicle throughout Circuit"
],
    stages: [
      {
            "city": "Gangtok",
            "stayCity": "Gangtok",
            "title": "Arrival at Bagdogra Airport / NJP Station & Scenic Drive to Gangtok",
            "desc": "Arrive at Bagdogra Airport (IXB) or New Jalpaiguri (NJP). Meet our mountain chauffeur for a picturesque drive (125 km) along the roaring Teesta River to Gangtok (1,650m). Check in to your hotel and explore MG Marg promenade.",
            "acts": [
                  "Bagdogra / NJP Meet & Greet",
                  "Scenic Teesta River Highway Drive",
                  "Gangtok Mountain Hotel Check-in",
                  "MG Marg Pedestrian Boulevard Walk"
            ]
      },
      {
            "city": "Gangtok",
            "stayCity": "Gangtok",
            "title": "Excursion to High-Altitude Tsomgo (Changu) Lake & Baba Mandir",
            "desc": "Drive to sacred oval-shaped Tsomgo Lake (12,400 ft) fed by glacial melting. Ride decorated yaks along snow banks. Continue to the historic shrine of Baba Harbhajan Singh with panoramic views of the Indo-China border.",
            "acts": [
                  "Tsomgo Glacial Lake Mountain Excursion",
                  "Decorated Yak Ride along Lake Shore",
                  "Sacred Baba Harbhajan Mandir",
                  "Indo-China Border Range Views"
            ]
      },
      {
            "city": "Lachung",
            "stayCity": "Lachung",
            "title": "Gangtok to Lachung (North Sikkim) via Seven Sisters Waterfalls",
            "desc": "Drive to alpine Lachung (2,700m) in North Sikkim. En route marvel at cascading Seven Sisters Waterfalls, Naga Falls, and Singhik viewpoint. Check in at your traditional wooden lodge in Lachung village.",
            "acts": [
                  "Seven Sisters Waterfalls Photo Stop",
                  "Naga Waterfalls Overlook",
                  "Chungthang Confluence Drive",
                  "Lachung Alpine Village Check-in"
            ]
      },
      {
            "city": "Lachung",
            "stayCity": "Gangtok",
            "title": "Yumthang Valley of Flowers, Hot Springs & Return to Gangtok",
            "desc": "Morning drive to the breathtaking Yumthang Valley of Flowers (11,800 ft). Witness rolling meadows framed by snow peaks and natural sulphur hot springs. Optional visit to Zero Point (15,300 ft) before driving back to Gangtok.",
            "acts": [
                  "Yumthang Valley Alpine Meadows",
                  "Natural Sulphur Hot Spring Dip",
                  "Zero Point Snow Fields Option",
                  "Scenic Return Drive to Gangtok"
            ]
      },
      {
            "city": "Pelling",
            "stayCity": "Pelling",
            "title": "Gangtok to Pelling via Ravangla Buddha Park (130 ft Statue)",
            "desc": "Scenic drive to Pelling (130 km) via Ravangla. Visit the magnificent Tathagata Tsal (Buddha Park) featuring a 130-foot consecrated statue of Lord Buddha against Mount Kanchenjunga backdrop. Check in at Pelling resort.",
            "acts": [
                  "Ravangla 130-ft Buddha Park Visit",
                  "Panoramic Kanchenjunga Views",
                  "Pelling Mountain Resort Check-in",
                  "Evening Peaceful Ridge Walk"
            ]
      },
      {
            "city": "Darjeeling",
            "stayCity": "Darjeeling",
            "title": "Pelling Skywalk, Chenrezig Statue & Drive to Darjeeling",
            "desc": "Walk across India’s first glass skywalk facing the giant 137-foot Chenrezig statue. Visit sacred wish-fulfilling Khecheopalri Lake and roaring Rimbi Waterfall. Continue scenic tea-garden drive to colonial Darjeeling.",
            "acts": [
                  "Pelling Glass Skywalk Experience",
                  "Chenrezig Giant Statue View",
                  "Khecheopalri Holy Lake Visit",
                  "Scenic Drive to Darjeeling"
            ]
      },
      {
            "city": "Darjeeling",
            "stayCity": "Darjeeling",
            "title": "Tiger Hill Kanchenjunga Sunrise, Batasia Loop & Himalayan Zoo",
            "desc": "Early 4:00 AM excursion to Tiger Hill (2,590m) to witness golden sunrise over Kanchenjunga and Mount Everest. Visit Ghoom Monastery and Batasia Loop toy train spiral. Later, visit the Padmaja Naidu Himalayan Zoological Park and Mountaineering Institute.",
            "acts": [
                  "Tiger Hill Golden Sunrise Viewing",
                  "Batasia Loop War Memorial & Toy Train",
                  "Ghoom Monastery Giant Maitreya Buddha",
                  "Himalayan Zoo Red Panda Spotting"
            ]
      }
],
    departureStage: {
      title: "Darjeeling Tea Tasting, Souvenir Shopping & Bagdogra Drop",
      desc: "Savor organic Darjeeling morning tea with buffet breakfast. Check out from your colonial hotel. Pick up world-famous orthodox first-flush Darjeeling tea, Tibetan prayer wheels, and handicrafts before your private transfer to Bagdogra Airport (IXB).",
      acts: [
        "Darjeeling Tea Tasting Session",
        "Tibetan Handicraft & Tea Shopping",
        "Bagdogra Airport / NJP Railway Drop"
]
    }
  },

  goa: {
    entryCity: "Goa",
    exitCity: "Goa",
    routeCities: ["North Goa","South Goa","Panaji","Calangute"],
    highlights: [
      "North Goa Fort Aguada, Chapora Fort & Baga Beach",
      "South Goa Old Goa Churches & Basilica of Bom Jesus",
      "Mandovi River Sunset Luxury Cruise with Live Music",
      "Dudhsagar Waterfalls Jeep Safari & Spice Plantation Tour"
],
    stages: [
      {
            "city": "North Goa",
            "stayCity": "North Goa",
            "title": "Arrival in Goa Airport, Warm Welcome & Beach Resort Check-in",
            "desc": "Arrive at Goa International Airport (Dabolim / Mopa). Meet our private chauffeur for a transfer to your coastal resort. Complete check-in formalities and spend the evening relaxing by the beach or sipping feni at beachfront shacks.",
            "acts": [
                  "Airport Meet & Greet",
                  "Beach Resort Check-in",
                  "Evening Beach Sunset Walk",
                  "Beachfront Shack Dining"
            ]
      },
      {
            "city": "North Goa",
            "stayCity": "North Goa",
            "title": "North Goa Heritage: Aguada Fort, Calangute, Baga & Anjuna Beach Tour",
            "desc": "Full-day North Goa tour covering 17th-century Portuguese Fort Aguada and lighthouse with Arabian Sea views. Relax on world-famous Calangute Beach, explore water sports at Baga Beach, and enjoy sunset at rocky Anjuna Beach.",
            "acts": [
                  "Fort Aguada Portuguese Fortress",
                  "Calangute & Baga Beach Walk",
                  "Parasailing & Jet Ski at Baga",
                  "Anjuna Beach Sunset & Night Bazaar"
            ]
      },
      {
            "city": "South Goa",
            "stayCity": "South Goa",
            "title": "South Goa Culture: Basilica of Bom Jesus, Mangueshi Temple & Cruise",
            "desc": "Explore UNESCO World Heritage Old Goa churches: Basilica of Bom Jesus (holding relics of St. Francis Xavier) and Se Cathedral. Visit historic Mangueshi Temple, spice plantation with Goan buffet lunch, and Mandovi River sunset cruise.",
            "acts": [
                  "Basilica of Bom Jesus UNESCO Tour",
                  "Se Cathedral Heritage Visit",
                  "Goan Spice Farm Tour with Lunch",
                  "Mandovi River Sunset Cruise"
            ]
      },
      {
            "city": "Dudhsagar",
            "stayCity": "Dudhsagar",
            "title": "Dudhsagar Waterfalls Jungle Safari or Grand Island Snorkeling Tour",
            "desc": "Choice of thrilling 4x4 open-jeep jungle safari through Mollem National Park to the 4-tiered Dudhsagar Waterfalls with natural pool swimming, OR a catamaran cruise to Grand Island for dolphin watching and snorkeling.",
            "acts": [
                  "Dudhsagar Waterfalls 4x4 Jeep Safari",
                  "Natural Freshwater Pool Swim",
                  "Spice Plantation Goan Buffet",
                  "Dolphin Spotting along Coast"
            ]
      }
],
    departureStage: {
      title: "Breakfast, Cashew & Feni Shopping, Goa Airport Departure Drop",
      desc: "Enjoy your morning tropical breakfast by the pool. Complete check-out. Visit local Panaji markets for authentic Goan cashews, bebinca sweets, and spices before your private transfer to Goa Airport for flight home.",
      acts: [
        "Hotel Buffet Breakfast & Check-out",
        "Goan Cashews & Bebinca Shopping",
        "Private Airport Departure Drop"
]
    }
  },

  ladakh: {
    entryCity: "Leh",
    exitCity: "Leh",
    routeCities: ["Leh","Nubra Valley","Pangong Lake","Sham Valley"],
    highlights: [
      "Mandatory Acclimatization in Leh & Shanti Stupa Sunset",
      "Sham Valley Magnetic Hill, Gurudwara & Indus-Zanskar Sangam",
      "Khardung La Pass (18,380 ft) & Nubra Valley Hunder Sand Dunes Camel Safari",
      "Pangong Tso Lake (14,270 ft) Sunset & High-Altitude Glamping"
],
    stages: [
      {
            "city": "Leh",
            "stayCity": "Leh",
            "title": "Arrival in Leh Airport, Acclimatization & Shanti Stupa Sunset",
            "desc": "Fly into Leh Airport (3,500m). Transfer to your hotel. Complete rest for acclimatization. In the evening, visit Shanti Stupa for panoramic 360-degree views of Leh town and Leh Palace.",
            "acts": [
                  "Airport Meet & Greet",
                  "Complete Acclimatization Rest",
                  "Shanti Stupa Sunset"
            ]
      },
      {
            "city": "Leh",
            "stayCity": "Leh",
            "title": "Sham Valley Tour: Hall of Fame, Magnetic Hill & Indus-Zanskar Sangam",
            "desc": "Scenic drive along Indus Highway. Visit Kargil war memorial Hall of Fame, gravity-defying Magnetic Hill, sacred Gurudwara Pathar Sahib, and the dramatic confluence of Indus and Zanskar rivers.",
            "acts": [
                  "Hall of Fame Museum",
                  "Magnetic Hill Experience",
                  "Sangam Confluence View"
            ]
      },
      {
            "city": "Nubra Valley",
            "stayCity": "Nubra Valley",
            "title": "Leh to Nubra Valley via Khardung La Pass (Highest Motorroad)",
            "desc": "Cross legendary Khardung La Pass (18,380 ft). Descend into the picturesque Nubra Valley. Check in at deluxe Swiss camps in Hunder. Ride double-humped Bactrian camels across white sand dunes.",
            "acts": [
                  "Khardung La Pass Crossing",
                  "Hunder Sand Dunes Walk",
                  "Bactrian Camel Safari"
            ]
      },
      {
            "city": "Pangong Lake",
            "stayCity": "Pangong Lake",
            "title": "Nubra Valley Diskit Monastery to Pangong Tso Lake via Shyok River",
            "desc": "Visit the 106-foot Maitreya Buddha statue at Diskit Monastery. Scenic drive along Shyok River to world-famous Pangong Tso Lake (14,270 ft). Marvel at shifting turquoise and azure shades at sunset.",
            "acts": [
                  "Diskit Monastery Statue",
                  "Shyok River Route",
                  "Pangong Tso Sunset View"
            ]
      },
      {
            "city": "Leh",
            "stayCity": "Leh",
            "title": "Pangong Lake Sunrise & Return to Leh via Chang La Pass",
            "desc": "Capture unforgettable sunrise reflections over Pangong Lake. Journey back to Leh crossing Chang La Pass (17,590 ft). Enroute visit Hemis and Thiksey monasteries.",
            "acts": [
                  "Pangong Sunrise Photography",
                  "Chang La Pass Crossing",
                  "Thiksey Monastery Darshan"
            ]
      }
],
    departureStage: {
      title: "Breakfast, Leh Main Bazaar Pashmina Shopping & Airport Drop",
      desc: "Enjoy breakfast in the trans-Himalayan morning sun. Visit Leh Main Bazaar for authentic Ladakhi apricots and certified Pashmina shawls before your early morning airport departure drop.",
      acts: [
        "Leh Bazaar Shopping",
        "Pashmina & Apricot Buying",
        "Airport Transfer Drop"
]
    }
  },

  uttarakhand: {
    entryCity: "Dehradun / Delhi",
    exitCity: "Dehradun / Delhi",
    routeCities: ["Rishikesh","Mussoorie","Jim Corbett","Nainital"],
    highlights: [
      "Rishikesh Holy Triveni Ghat Evening Ganga Aarti & River Rafting",
      "Mussoorie Queen of Hills Kempty Falls & Gun Hill",
      "Jim Corbett Tiger Reserve 4x4 Jeep Safari Experience",
      "Dedicated Private Mountain Chauffeur Vehicle"
],
    stages: [
      {
            "city": "Rishikesh",
            "stayCity": "Rishikesh",
            "title": "Arrival in Dehradun / Haridwar & Scenic Mountain Drive to Mussoorie",
            "desc": "Arrive at Dehradun Airport (DED) or Haridwar Station. Scenic drive climbing to Mussoorie (2,005m), the Queen of Hills. Check in at your mountain resort and enjoy sunset stroll along the historic pedestrian Mall Road.",
            "acts": [
                  "Dehradun / Haridwar Meet & Greet",
                  "Mussoorie Mountain Scenic Drive",
                  "Resort Check-in Formalities",
                  "Mall Road & Camel Back Road Walk"
            ]
      },
      {
            "city": "Mussoorie",
            "stayCity": "Mussoorie",
            "title": "Kempty Falls, Gun Hill Cable Car & Company Garden Floral Walk",
            "desc": "Visit cascading Kempty Falls. Ride the Gun Hill Ropeway cable car to Mussoorie's second-highest peak for 360-degree views of the Great Himalayan range. Explore colorful Company Garden and municipal flower park.",
            "acts": [
                  "Kempty Falls Splash & Photography",
                  "Gun Hill Ropeway Cable Car Ride",
                  "Company Garden Floral Walk",
                  "Lal Tibba Telescope Viewpoint"
            ]
      },
      {
            "city": "Mussoorie",
            "stayCity": "Mussoorie",
            "title": "Mussoorie to Rishikesh Yoga Capital & Holy Har Ki Pauri Ganga Aarti",
            "desc": "Drive down to world yoga capital Rishikesh on the banks of holy River Ganga. Cross suspension bridges Ram Jhula and Lakshman Jhula. Visit Beatles Ashram. In the evening, witness divine Ganga Aarti at Triveni Ghat.",
            "acts": [
                  "Scenic Mountain Descent to Rishikesh",
                  "Ram Jhula & Lakshman Jhula Stroll",
                  "Beatles Ashram Graffiti Exploration",
                  "Triveni Ghat Evening Ganga Aarti"
            ]
      },
      {
            "city": "Jim Corbett",
            "stayCity": "Jim Corbett",
            "title": "Rishikesh White Water River Rafting & Cliff Jumping Adventure",
            "desc": "Exciting 16 km white water river rafting on holy Ganges navigating Class III & IV rapids like Roller Coaster and Golf Course. Try thrilling cliff jumping and body surfing with certified river rescue guides.",
            "acts": [
                  "16 km Ganges White Water Rafting",
                  "Thrilling Cliff Jumping into River",
                  "Body Surfing & Rapid Navigation",
                  "Riverside Cafe Evening Relaxation"
            ]
      }
],
    departureStage: {
      title: "Breakfast, Himalayan Herbal Tea Shopping, Dehradun Airport Drop",
      desc: "Enjoy a riverside breakfast. Complete check-out. Pick up authentic Himalayan honey, herbal teas, and wooden carvings before your private chauffeur transfers you to Dehradun Airport (DED) / Haridwar Station for flight home.",
      acts: [
        "Riverside Breakfast & Check-out",
        "Himalayan Herbal Tea Shopping",
        "Dehradun Airport Departure Drop"
]
    }
  },

  'char-dham': {
    entryCity: "Haridwar / Dehradun",
    exitCity: "Haridwar / Dehradun",
    routeCities: ["Haridwar","Barkot","Uttarkashi","Guptkashi","Kedarnath","Badrinath","Rishikesh"],
    highlights: [
      "Haridwar Har Ki Pauri Holy Dip & Evening Ganga Aarti",
      "Yamunotri Dham Holy Surya Kund Dip & Temple Darshan",
      "Gangotri Dham Temple Darshan via Harsil Valley",
      "Shri Kedarnath Jyotirlinga VIP Darshan amidst Snow Peaks",
      "Shri Badrinath Temple VIP Darshan & Mana First Indian Village"
],
    stages: [
      {
            "city": "Haridwar",
            "stayCity": "Haridwar",
            "title": "Arrival in Haridwar / Rishikesh & Holy Ganga Aarti at Har Ki Pauri",
            "desc": "Arrive in Haridwar / Dehradun. Meet our mountain chauffeur for a transfer to your hotel. In the evening, witness the breathtaking Ganga Aarti at world-renowned Har Ki Pauri with glowing diyas and temple bells.",
            "acts": [
                  "Haridwar Meet & Greet",
                  "Hotel Check-in",
                  "Har Ki Pauri Evening Ganga Aarti"
            ]
      },
      {
            "city": "Barkot",
            "stayCity": "Barkot",
            "title": "Haridwar to Barkot via Mussoorie & Kempty Falls",
            "desc": "Scenic mountain drive to Barkot (220 km) along the Yamuna valley via hill station Mussoorie. Stop at Kempty Falls. Enjoy panoramic views of the Bandarpoonch peak and acclimatize for the Yamunotri trek.",
            "acts": [
                  "Mussoorie & Kempty Falls Sightseeing",
                  "Yamuna Valley Drive",
                  "Bandarpoonch Peak Views",
                  "Barkot Camp Check-in"
            ]
      },
      {
            "city": "Barkot",
            "stayCity": "Barkot",
            "title": "Barkot to Yamunotri Dham Trek, Holy Surya Kund Dip & Temple Darshan",
            "desc": "Drive to Janki Chatti. Trek 6 km (by foot, pony, or doli) to sacred Yamunotri Dham. Cook rice in boiling water of Surya Kund, offer pooja at Divya Shila, and have divine darshan of Goddess Yamuna.",
            "acts": [
                  "6 km Yamunotri Mountain Trek",
                  "Surya Kund Holy Hot Spring Dip",
                  "Yamunotri Temple Darshan",
                  "Return to Barkot Resort"
            ]
      },
      {
            "city": "Uttarkashi",
            "stayCity": "Uttarkashi",
            "title": "Barkot to Uttarkashi & Kashi Vishwanath Temple Darshan",
            "desc": "Picturesque drive to Uttarkashi (100 km) on the banks of Bhagirathi River. Check in to your hotel. In the evening, visit the ancient Kashi Vishwanath Temple and the massive 6-meter Shakti Temple bronze trident.",
            "acts": [
                  "Scenic Bhagirathi River Highway Drive",
                  "Kashi Vishwanath Temple Darshan",
                  "Shakti Temple Bronze Trident Visit",
                  "Uttarkashi Stay"
            ]
      },
      {
            "city": "Uttarkashi",
            "stayCity": "Uttarkashi",
            "title": "Uttarkashi to Gangotri Dham Temple Darshan via Harsil Valley",
            "desc": "Drive through the breathtaking apple-orchard valley of Harsil to Gangotri Dham (3,048m). Take a holy dip in the icy Bhagirathi river, attend the sacred Gangotri temple darshan, and visit Bhagirath Shila.",
            "acts": [
                  "Harsil Valley Apple Orchard Stop",
                  "Gangotri Temple VIP Darshan",
                  "Bhagirath Shila Pooja",
                  "Scenic Return to Uttarkashi"
            ]
      },
      {
            "city": "Guptkashi",
            "stayCity": "Guptkashi",
            "title": "Uttarkashi to Guptkashi / Phata via Tilwara & Mandakini River",
            "desc": "Scenic trans-Garhwal drive to Guptkashi (220 km) along the turquoise Mandakini River. Pass through Tilwara and Agastyamuni. Check in at your luxury Himalayan Swiss camps in Guptkashi / Phata.",
            "acts": [
                  "Mandakini River Highway Drive",
                  "Tilwara Scenic Viewpoints",
                  "Guptkashi Vishwanath Temple Visit",
                  "Acclimatization for Kedarnath"
            ]
      },
      {
            "city": "Kedarnath",
            "stayCity": "Kedarnath",
            "title": "Guptkashi to Kedarnath Dham by Trek or Helicopter & Evening Aarti",
            "desc": "Transfer to Sonprayag / Helipad. Trek 16 km along the Mandakini valley or take a thrilling helicopter ride to sacred Kedarnath Dham (3,583m). Check in at GMVN / temple guesthouse. Witness evening Aarti amidst snow peaks.",
            "acts": [
                  "Kedarnath Trek / Helicopter Flight",
                  "Mandakini Valley Mountain Trail",
                  "Shri Kedarnath Jyotirlinga VIP Darshan",
                  "Evening Temple Aarti amidst Snow Peaks"
            ]
      },
      {
            "city": "Joshimath",
            "stayCity": "Joshimath",
            "title": "Kedarnath Morning Temple Pooja & Return to Guptkashi / Joshimath",
            "desc": "Early morning Abhishek pooja at Shri Kedarnath Jyotirlinga. Marvel at panoramic views of the towering Kedar Dome peak. Descend to Sonprayag / Helipad and drive to Pipalkoti / Joshimath for an overnight stay.",
            "acts": [
                  "Kedarnath Morning Abhishek Darshan",
                  "Kedar Dome Scenic Photography",
                  "Descent to Sonprayag / Helipad",
                  "Drive to Pipalkoti / Joshimath"
            ]
      },
      {
            "city": "Badrinath",
            "stayCity": "Badrinath",
            "title": "Joshimath to Badrinath Dham, Tapt Kund & Mana First Indian Village",
            "desc": "Scenic mountain drive to sacred Badrinath Dham (3,133m). Take a holy bath in the natural sulphur Tapt Kund hot spring before VIP darshan of Lord Badri Vishal. Visit Mana (first Indian village), Bhim Pul, and Vyas Gufa.",
            "acts": [
                  "Tapt Kund Natural Hot Spring Dip",
                  "Shri Badrinath Temple VIP Darshan",
                  "Mana First Village of India Walk",
                  "Bhim Pul & Vyas Gufa Exploration"
            ]
      }
],
    departureStage: {
      title: "Badrinath to Rishikesh / Dehradun Departure via Devprayag Sangam",
      desc: "Drive back along the Alaknanda highway. Stop at Devprayag to witness the spectacular sacred confluence of Alaknanda and Bhagirathi rivers forming holy River Ganga. Transfer to Dehradun Airport or Haridwar Station.",
      acts: [
        "Devprayag Alaknanda-Bhagirathi Sangam View",
        "Rishikesh Ram Jhula Walk",
        "Dehradun / Haridwar Departure Drop"
]
    }
  },

  'north-east': {
    entryCity: "Guwahati",
    exitCity: "Guwahati",
    routeCities: ["Guwahati","Shillong","Cherrapunji","Dawki","Kaziranga"],
    highlights: [
      "Guwahati Maa Kamakhya Devi Temple VIP Darshan",
      "Shillong Scotland of the East & Umiam Lake Viewpoint",
      "Cherrapunji Nohkalikai Falls & Mawsmai Limestone Cave",
      "Dawki Crystal Clear Umngot River Boat Ride",
      "Kaziranga National Park One-Horned Rhinoceros Safari"
],
    stages: [
      {
            "city": "Guwahati",
            "stayCity": "Guwahati",
            "title": "Arrival in Guwahati, Brahmaputra Sunset Cruise & Umananda Temple",
            "desc": "Arrive at Lokpriya Gopinath Bordoloi Airport (GAU) in Guwahati. Meet our representative for private transfer to hotel. In the evening, visit Umananda Peacock Island temple via ferry and enjoy a breathtaking sunset cruise on holy Brahmaputra River.",
            "acts": [
                  "Guwahati Airport Meet & Greet",
                  "Hotel Check-in & Refresh",
                  "Umananda Island Ferry",
                  "Brahmaputra Sunset Cruise"
            ]
      },
      {
            "city": "Shillong",
            "stayCity": "Shillong",
            "title": "Maa Kamakhya VIP Darshan & Scenic Drive to Shillong (Scotland of the East)",
            "desc": "Early morning VIP Darshan at the revered Maa Kamakhya Shaktipeeth on Nilachal Hill. After breakfast, scenic highway drive to Shillong (100 km). Enroute stop at tranquil Umiam Lake (Barapani) for watersports and photography. Check in at Shillong hotel and explore Police Bazar.",
            "acts": [
                  "Maa Kamakhya Temple Darshan",
                  "Scenic Highway Drive to Shillong",
                  "Umiam Lake Watersports & Photography",
                  "Police Bazar Cultural Leisure Walk"
            ]
      },
      {
            "city": "Cherrapunji",
            "stayCity": "Cherrapunji",
            "title": "Shillong Sightseeing: Elephant Falls, Shillong Peak & Laitlum Canyons",
            "desc": "Visit multi-tiered Elephant Falls, panoramic Shillong Peak, Don Bosco Indigenous Museum, and Lady Hydari Park. In the afternoon, head to the dramatic windswept gorges of Laitlum Grand Canyons with mist-covered valleys.",
            "acts": [
                  "Elephant Falls Walk",
                  "Shillong Peak Viewpoint",
                  "Don Bosco Museum Tour",
                  "Laitlum Canyons Photography"
            ]
      },
      {
            "city": "Dawki",
            "stayCity": "Dawki",
            "title": "Shillong to Cherrapunji (Sohra) via Nohkalikai Falls & Mawsmai Cave",
            "desc": "Drive to Cherrapunji (Sohra), the rainfall capital of the world. Witness India's tallest plunge waterfall Nohkalikai Falls, explore prehistoric limestone formations inside Mawsmai Cave, and view Seven Sisters Falls and Eco Park.",
            "acts": [
                  "Nohkalikai Waterfall Viewpoint",
                  "Mawsmai Cave Exploration",
                  "Seven Sisters Falls Photo Stop",
                  "Cherrapunji Eco-Resort Check-in"
            ]
      },
      {
            "city": "Kaziranga",
            "stayCity": "Kaziranga",
            "title": "Double Decker Living Root Bridge Trek & Crystal Clear Dawki River Boating",
            "desc": "Trek through lush subtropical rainforest to the UNESCO-famed Double Decker Living Root Bridges in Nongriat. Drive towards Indo-Bangladesh border at Dawki and experience boating on the transparent glass-like waters of Umngot River.",
            "acts": [
                  "Living Root Bridge Forest Trek",
                  "Natural Rock Pool Dip",
                  "Dawki Umngot River Boating",
                  "Shnongpdeng Riverside Camp / Resort"
            ]
      }
],
    departureStage: {
      title: "Mawlynnong Cleanest Village in Asia & Guwahati Departure Drop",
      desc: "Explore Mawlynnong, awarded the Cleanest Village in Asia. Walk along flower-lined paths, bamboo dustbins, and visit the single-tier Living Root Bridge in Riwai. Enjoy local Khasi organic lunch before private transfer to Guwahati Airport.",
      acts: [
        "Mawlynnong Village Heritage Walk",
        "Riwai Single Root Bridge Visit",
        "Sky Walk Bamboo Machan View",
        "Guwahati Airport Departure Drop"
]
    }
  },

  coorg: {
    entryCity: "Bangalore",
    exitCity: "Bangalore",
    routeCities: ["Bangalore","Mysore","Coorg"],
    highlights: [
      "Royal Mysore Palace Guided Tour & Brindavan Gardens",
      "Coorg Abbey Falls & Raja’s Seat Valley Sunset View",
      "Dubare Elephant Camp & Cauvery River Bamboo Rafting",
      "Namdroling Golden Temple Tibetan Monastery Bylakuppe"
],
    stages: [
      {
            "city": "Mysore",
            "stayCity": "Mysore",
            "title": "Arrival in Bangalore & Scenic Drive to Heritage City Mysore",
            "desc": "Arrive at Kempegowda International Airport (BLR) / Bangalore City Station. Board your private AC cab for a highway drive to royal Mysore. Check in to your hotel and visit the magnificent illuminated Mysore Palace and Chamundeshwari Temple atop Chamundi Hills.",
            "acts": [
                  "Airport / Station Pickup",
                  "Scenic Highway Drive to Mysore",
                  "Mysore Palace Royal Tour",
                  "Chamundi Hills Temple Darshan"
            ]
      },
      {
            "city": "Coorg",
            "stayCity": "Coorg",
            "title": "Mysore to Coorg (Kodagu) via Dubare Elephant Camp & Golden Temple",
            "desc": "Drive to Coorg, the Scotland of India (120 km). Enroute visit Namdroling Monastery (Tibetan Golden Temple) in Bylakuppe with 40-foot gilded Buddha statues. Visit Dubare Elephant Camp on Cauvery River for elephant bathing and feeding.",
            "acts": [
                  "Namdroling Golden Temple Monastery",
                  "Dubare Elephant Camp Experience",
                  "Cauvery River Coracle Ride",
                  "Coorg Coffee Plantation Resort Check-in"
            ]
      },
      {
            "city": "Coorg",
            "stayCity": "Coorg",
            "title": "Coorg Coffee Estate Tour, Abbey Falls, Raja's Seat & Madikeri Fort",
            "desc": "Wake up to aromatic aromas of fresh Arabica and Robusta beans. Take a guided walking tour through lush coffee and spice plantations. Visit roaring Abbey Falls, historical Madikeri Fort, and Omkareshwara Temple. Catch sunset from Raja's Seat.",
            "acts": [
                  "Guided Coffee & Pepper Estate Walk",
                  "Abbey Falls Hanging Bridge View",
                  "Madikeri Fort & Omkareshwara Temple",
                  "Raja's Seat Musical Sunset Garden"
            ]
      },
      {
            "city": "Coorg",
            "stayCity": "Coorg",
            "title": "Talacauvery Origin of River Cauvery & Bhagamandala Temple Excursion",
            "desc": "Drive to Brahmagiri Hills to visit sacred Talacauvery, the holy birthplace of River Cauvery. Climb Brahmagiri Peak steps for panoramic Western Ghats views. Visit Triveni Sangam and Bhagandeshwara Temple in Bhagamandala.",
            "acts": [
                  "Talacauvery Holy Kund & Temple",
                  "Brahmagiri Peak Steps Trek",
                  "Bhagamandala Triveni Sangam Dip",
                  "Coffee, Homemade Chocolates & Spices Shopping"
            ]
      }
],
    departureStage: {
      title: "Scenic Western Ghats Drive & Bangalore / Mangalore Departure Transfer",
      desc: "Savor a traditional Kodava breakfast. Check out from your resort. Pick up estate-fresh Coorg filter coffee powder, organic honey, and homemade spices before your private chauffeur transfers you to Mangalore (IXE) or Bangalore (BLR) Airport.",
      acts: [
        "Resort Breakfast & Check-out",
        "Coorg Spices & Chocolates Shopping",
        "Scenic Western Ghats Highway Drive",
        "Airport Departure Drop"
]
    }
  },

  tamilnadu: {
    entryCity: "Chennai / Coimbatore",
    exitCity: "Kanyakumari / Madurai",
    routeCities: ["Ooty","Kodaikanal","Madurai","Rameswaram","Kanyakumari"],
    highlights: [
      "Ooty Queen of Hill Stations & UNESCO Nilgiri Toy Train Ride",
      "Kodaikanal Princess of Hill Stations & Pillar Rocks",
      "Madurai World-Famous Meenakshi Amman Temple VIP Darshan",
      "Rameswaram Pamban Bridge & 22 Holy Theertham Wells Bath",
      "Kanyakumari Vivekananda Rock Memorial at Three Seas Confluence"
],
    stages: [
      {
            "city": "Ooty",
            "stayCity": "Ooty",
            "title": "Arrival in Chennai & Coastal Heritage Drive to Mahabalipuram",
            "desc": "Arrive at Chennai Airport (MAA). Private transfer to UNESCO World Heritage site Mahabalipuram (Mamallapuram). Visit the 8th-century Shore Temple overlooking Bay of Bengal, Arjuna Penance rock relief, and Krishna Butter Ball.",
            "acts": [
                  "Chennai Airport Meet & Greet",
                  "Shore Temple Oceanfront Architecture",
                  "Arjuna Penance Giant Bas-Relief",
                  "Krishna Butter Ball Photo Stop"
            ]
      },
      {
            "city": "Ooty",
            "stayCity": "Ooty",
            "title": "Mahabalipuram to Pondicherry French Colony & Promenade Walk",
            "desc": "Scenic East Coast Road (ECR) drive to French colonial town Pondicherry. Visit Sri Aurobindo Ashram and the utopian township of Auroville with golden Matrimandir dome. In the evening, stroll along the French Quarter Promenade.",
            "acts": [
                  "Scenic East Coast Road Drive",
                  "Sri Aurobindo Ashram Visit",
                  "Auroville Matrimandir Meditation Dome",
                  "French White Town Heritage Walk"
            ]
      },
      {
            "city": "Kodaikanal",
            "stayCity": "Kodaikanal",
            "title": "Pondicherry to Tanjore (Thanjavur) UNESCO Brihadeeswarar Temple",
            "desc": "Drive to Thanjavur (Tanjore) in Cauvery delta. Visit the colossal 11th-century Brihadeeswarar Temple (Big Temple) built by Raja Raja Chola I. Marvel at the 80-tonne granite monolithic dome and the Thanjavur Royal Palace.",
            "acts": [
                  "Scenic Cauvery Delta Drive",
                  "UNESCO Brihadeeswarar Big Temple Tour",
                  "80-Tonne Monolithic Granite Vimana",
                  "Thanjavur Royal Palace & Art Gallery"
            ]
      },
      {
            "city": "Kodaikanal",
            "stayCity": "Kodaikanal",
            "title": "Thanjavur to Madurai: Meenakshi Amman Temple Golden Towers",
            "desc": "Drive to ancient temple city Madurai. Check in to your hotel. In the evening, visit the world-renowned Madurai Meenakshi Amman Temple with 14 towering multi-tiered gopurams. Attend the sacred night ceremony putting deities to sleep.",
            "acts": [
                  "Madurai Hotel Check-in",
                  "Meenakshi Amman Temple VIP Darshan",
                  "1,000-Pillar Hall Sculptures",
                  "Sacred Night Temple Bed Chamber Ceremony"
            ]
      },
      {
            "city": "Madurai",
            "stayCity": "Madurai",
            "title": "Madurai to Rameswaram: Pamban Sea Bridge & Ramanathaswamy Temple",
            "desc": "Drive across the iconic Pamban Sea Bridge over the turquoise ocean to sacred island Rameswaram. Take holy bath at Agni Theertham sea and 22 sacred temple wells inside Shri Ramanathaswamy Temple featuring the longest pillared corridor in the world.",
            "acts": [
                  "Pamban Sea Bridge Ocean Drive",
                  "Agni Theertham Sacred Sea Bath",
                  "22 Sacred Kund Well Baths inside Temple",
                  "Ramanathaswamy Longest Pillared Corridor"
            ]
      },
      {
            "city": "Rameswaram",
            "stayCity": "Rameswaram",
            "title": "Rameswaram to Kanyakumari Sunset at Southernmost Tip of India",
            "desc": "Drive to Kanyakumari (300 km), the southernmost tip where Indian Ocean, Arabian Sea, and Bay of Bengal merge. Take a ferry to Vivekananda Rock Memorial and 133-ft Thiruvalluvar Statue. Witness unforgettable sunset over triple seas.",
            "acts": [
                  "Ferry to Vivekananda Rock Memorial",
                  "Thiruvalluvar Giant 133-ft Stone Statue",
                  "Triveni Sangam Three Seas Point",
                  "Panoramic Indian Ocean Sunset Watching"
            ]
      }
],
    departureStage: {
      title: "Kanyakumari Sunrise, Suchindram Temple & Trivandrum Airport Drop",
      desc: "Witness breathtaking sunrise over the ocean. Visit Suchindram Thanumalayan Temple dedicated to Trinity (Brahma-Vishnu-Shiva) with musical pillars. Private chauffeur transfer to Trivandrum Airport (TRV) for your onward flight.",
      acts: [
        "Kanyakumari Ocean Sunrise Photography",
        "Suchindram Musical Pillars Temple",
        "Scenic Drive to Trivandrum",
        "Trivandrum Airport Departure Drop"
]
    }
  },

  gujarat: {
    entryCity: "Ahmedabad",
    exitCity: "Ahmedabad / Rajkot",
    routeCities: ["Ahmedabad","Statue of Unity","Somnath","Dwarka","Gir"],
    highlights: [
      "Statue of Unity Kevadia (World’s Tallest at 182m)",
      "Somnath Sacred First Jyotirlinga on Arabian Sea Shore",
      "Shri Dwarkadhish Temple (Jagat Mandir) VIP Darshan & Bet Dwarka",
      "Sasan Gir Asiatic Lion Jungle Jeep Safari"
],
    stages: [
      {
            "city": "Ahmedabad",
            "stayCity": "Ahmedabad",
            "title": "Arrival in Ahmedabad, Sabarmati Ashram & Akshardham Laser Show",
            "desc": "Arrive at Ahmedabad Airport / Station. Visit Mahatma Gandhi's historic Sabarmati Ashram on the riverfront. Explore Adalaj Stepwell (intricate 5-story stepwell) and witness the grand Sat-Chit-Anand water laser show at Gandhinagar Akshardham.",
            "acts": [
                  "Ahmedabad Airport / Station Pickup",
                  "Sabarmati Gandhi Ashram Visit",
                  "Adalaj Stepwell Intricate Architecture",
                  "Gandhinagar Akshardham Water Show"
            ]
      },
      {
            "city": "Statue of Unity",
            "stayCity": "Statue of Unity",
            "title": "Ahmedabad to Kevadia: World's Tallest Statue of Unity (182m)",
            "desc": "Drive to Kevadia (200 km). Marvel at the 182-meter Statue of Unity dedicated to Sardar Vallabhbhai Patel. Visit the 153-meter Viewing Gallery inside the statue chest, Valley of Flowers, Sardar Patel Museum, and laser sound show.",
            "acts": [
                  "Statue of Unity High-Speed Elevator",
                  "Viewing Gallery Panoramic Narmada View",
                  "Valley of Flowers Walking Tour",
                  "Statue of Unity Evening Laser Light Show"
            ]
      },
      {
            "city": "Somnath",
            "stayCity": "Somnath",
            "title": "Kevadia to Sasan Gir Lion National Park & Wilderness Safari",
            "desc": "Scenic drive to Sasan Gir National Park, the last natural sanctuary of the Asiatic Lion. Check in to your jungle lodge. Embark on an exciting open-jeep jungle safari through dry deciduous forests tracking lions, leopards, and deer.",
            "acts": [
                  "Scenic Drive to Sasan Gir",
                  "Jungle Resort Check-in",
                  "Open-Jeep Asiatic Lion Safari",
                  "Tribal Siddi Folk Dance Experience"
            ]
      },
      {
            "city": "Sasan Gir",
            "stayCity": "Sasan Gir",
            "title": "Gir to Somnath Jyotirlinga Temple & Evening Sound & Light Show",
            "desc": "Morning drive to coastal sacred city Somnath. Visit the first of the twelve sacred Shiva Jyotirlingas, Shri Somnath Temple on the Arabian Sea shores. Witness the grand evening Aarti and the captivating Sound & Light Show.",
            "acts": [
                  "Shri Somnath Jyotirlinga VIP Darshan",
                  "Triveni Sangam Somnath Holy Dip",
                  "Bhalka Tirth Krishna Shrine",
                  "Evening Somnath Sound & Light Show"
            ]
      },
      {
            "city": "Dwarka",
            "stayCity": "Dwarka",
            "title": "Somnath to Dwarka: Shri Dwarkadhish Mandir & Gomti River Ghat",
            "desc": "Coastal drive to holy Dwarka (230 km), the ancient golden kingdom of Lord Krishna. Check in to your hotel. Attend divine evening Sandhya Aarti at the 2,500-year-old Shri Dwarkadhish Jagat Mandir and walk along Gomti Ghat.",
            "acts": [
                  "Scenic Saurashtra Coastal Drive",
                  "Shri Dwarkadhish Jagat Mandir Darshan",
                  "Gomti River Holy Ghat Walk",
                  "Sudama Setu Suspension Bridge"
            ]
      }
],
    departureStage: {
      title: "Bet Dwarka Island, Nageshwar Jyotirlinga & Jamnagar / Rajkot Departure",
      desc: "Take a scenic boat ride to Bet Dwarka island. Visit Nageshwar Jyotirlinga (giant Shiva statue), Rukmini Devi Temple, and Gopi Talav. Private chauffeur transfer to Jamnagar or Rajkot Airport / Station for your onward journey.",
      acts: [
        "Bet Dwarka Sacred Island Boat Ride",
        "Nageshwar Jyotirlinga Temple Darshan",
        "Rukmini Devi Temple Architecture",
        "Jamnagar / Rajkot Airport Departure Drop"
]
    }
  },

  wildlife: {
    entryCity: "Jabalpur / Delhi",
    exitCity: "Jabalpur / Khajuraho",
    routeCities: ["Jabalpur","Bandhavgarh","Kanha","Khajuraho"],
    highlights: [
      "Jabalpur Bhedaghat Marble Rocks Boat Ride & Dhuandhar Waterfall",
      "Bandhavgarh National Park 4x4 Tiger Safari",
      "Kanha Tiger Reserve Kipling Meadow Safari",
      "Khajuraho UNESCO World Heritage Temples Guided Tour"
],
    stages: [
      {
            "city": "Jabalpur",
            "stayCity": "Jabalpur",
            "title": "Arrival in Delhi & Scenic Private Transfer to Jim Corbett / Ranthambore",
            "desc": "Arrive in Delhi. Meet our chauffeur for a comfortable private AC highway transfer to your wilderness jungle resort. Arrive and check in amidst nature. Spend a relaxing evening by the campfire with naturalist briefings and wildlife documentaries.",
            "acts": [
                  "Airport / Station Pickup",
                  "Scenic Highway Transfer to Jungle Resort",
                  "Resort Welcome Drink & Check-in",
                  "Campfire & Naturalist Wildlife Talk"
            ]
      },
      {
            "city": "Bandhavgarh",
            "stayCity": "Bandhavgarh",
            "title": "Exclusive Morning Jungle Safari: Tiger Tracking, Wild Elephants & Birdwatching",
            "desc": "Early morning open 4x4 Gypsy safari into core tiger territory with expert forest trackers. Track Bengal tigers, wild Asian elephants, spotted deer, and rare avifauna. Return to resort for breakfast and spend the afternoon by the pool.",
            "acts": [
                  "Open 4x4 Gypsy Core Safari",
                  "Bengal Tiger Tracking Experience",
                  "Wild Elephant & Sambar Spotting",
                  "Resort Poolside Leisure & High Tea"
            ]
      },
      {
            "city": "Bandhavgarh",
            "stayCity": "Bandhavgarh",
            "title": "Afternoon Buffer Zone Jeep Safari & Scenic Forest River Trail",
            "desc": "Embark on an afternoon safari through picturesque sal forests and riverine grasslands. Spot marsh crocodiles, leopards, and over 500 migratory bird species along the riverbanks. Evening folk dance performances at resort.",
            "acts": [
                  "Afternoon 4x4 Wilderness Safari",
                  "Gharial & Mugger Crocodile Spotting",
                  "Birdwatching Trail with Naturalist",
                  "Tribal Folk Dance & Barbecue Dinner"
            ]
      }
],
    departureStage: {
      title: "Nature Walk, Souvenir Shopping & Private Departure Transfer",
      desc: "Enjoy a morning nature walk along the resort periphery listening to Himalayan bird calls. Savor a hearty buffet breakfast, complete check-out, and board your private AC transfer back to Delhi / nearest airport for your return journey.",
      acts: [
        "Guided Nature & Birding Walk",
        "Resort Buffet Breakfast & Check-out",
        "Handicrafts & Wildlife Souvenir Shopping",
        "Airport Departure Drop"
]
    }
  },

  maharashtra: {
    entryCity: "Mumbai / Pune",
    exitCity: "Mumbai / Pune",
    routeCities: ["Mumbai","Lonavala","Mahabaleshwar","Shirdi"],
    highlights: [
      "Mumbai Gateway of India & Marine Drive Drive",
      "Lonavala Hill Station Bhushi Dam & Tiger’s Leap",
      "Mahabaleshwar Arthur’s Seat, Venna Lake & Strawberry Farms",
      "Shirdi Sai Baba Divine Samadhi VIP Darshan"
],
    stages: [
      {
            "city": "Mumbai",
            "stayCity": "Mumbai",
            "title": "Arrival in Mumbai / Pune & Scenic Western Ghats Drive to Lonavala",
            "desc": "Arrive at Mumbai (BOM) / Pune (PNQ) Airport. Private AC transfer ascending through lush Sahyadri hills to Lonavala. Check in at your luxury resort. In the evening, visit Bhushi Dam, Tiger's Leap, and enjoy sunset at Lion's Point.",
            "acts": [
                  "Airport / Station Meet & Greet",
                  "Scenic Khandala Ghat Highway Drive",
                  "Resort Check-in & Leisure",
                  "Lion's Point Sunset & Tiger's Leap View"
            ]
      },
      {
            "city": "Lonavala",
            "stayCity": "Lonavala",
            "title": "Karla & Bhaja Buddhist Caves, Lonavala to Mahabaleshwar Strawberry Valley",
            "desc": "Explore ancient 2nd-century BC Karla and Bhaja rock-cut Buddhist caves. Drive towards strawberry capital Mahabaleshwar (180 km) via scenic Panchgani. Stop at Table Land plateau and Mapro Garden for strawberry treats.",
            "acts": [
                  "Karla Buddhist Rock Caves Tour",
                  "Scenic Western Ghats Highway Drive",
                  "Panchgani Table Land Viewpoint",
                  "Mapro Garden Strawberry Tasting"
            ]
      },
      {
            "city": "Mahabaleshwar",
            "stayCity": "Mahabaleshwar",
            "title": "Mahabaleshwar Sightseeing: Arthur's Seat, Elephant's Head & Venna Lake",
            "desc": "Visit Arthur's Seat (Queen of Points), needle-hole rock Elephant's Head Point, Kate's Point, and historical Pratapgad Fort of Chhatrapati Shivaji Maharaj. In the evening, enjoy peaceful pedal boating on tranquil Venna Lake.",
            "acts": [
                  "Arthur's Seat & Echo Point Sightseeing",
                  "Pratapgad Fort Historical Walk",
                  "Venna Lake Evening Boat Ride",
                  "Mahabaleshwar Bazaar Strawberry Shopping"
            ]
      }
],
    departureStage: {
      title: "Shirdi Sai Baba VIP Samadhi Darshan, Dwarkamai & Departure Transfer",
      desc: "Drive to sacred Shirdi (or return to Mumbai/Pune). Experience divine VIP Samadhi Darshan of Shri Sai Baba, visit sacred Dwarkamai mosque, Gurusthan, and Chavadi. Board your private chauffeur transfer to Mumbai / Pune Airport.",
      acts: [
        "Shirdi Sai Baba VIP Darshan",
        "Dwarkamai & Chavadi Sacred Visits",
        "Prasad & Religious Keepsakes Shopping",
        "Airport Departure Drop"
]
    }
  },

  thailand: {
    entryCity: "Bangkok",
    exitCity: "Bangkok",
    routeCities: ["Bangkok","Pattaya"],
    highlights: [
      "Speedboat Cruise to Coral Island (Koh Larn) with Indian Lunch",
      "Alcazar Cabaret Show with VIP Reserved Seating",
      "Chao Phraya Princess Luxury Dinner Cruise with Live Music",
      "Bangkok Golden Buddha, Wat Pho & Wat Arun Heritage Tour"
],
    stages: [
      {
            "city": "Pattaya",
            "stayCity": "Pattaya",
            "title": "Arrival in Bangkok & Scenic Private Chauffeur Transfer to Pattaya",
            "desc": "Arrive at Suvarnabhumi Airport (BKK). Meet our friendly local tour representative for a comfortable private highway transfer to coastal Pattaya. Check in at your beach resort and spend the evening enjoying Pattaya beach promenade.",
            "acts": [
                  "Bangkok Airport Meet & Greet",
                  "Private Highway Transfer to Pattaya",
                  "Resort Check-in & Welcome Drink",
                  "Pattaya Beach Promenade Leisure Walk"
            ]
      },
      {
            "city": "Pattaya",
            "stayCity": "Pattaya",
            "title": "Coral Island (Koh Larn) Speedboat Adventure with Watersports & Lunch",
            "desc": "Board a shared speedboat to Coral Island (Koh Larn). Enjoy turquoise waters, white sand beaches, and thrilling watersports like parasailing, sea walking, and banana boat rides. Savor a delicious Indian buffet lunch on the island.",
            "acts": [
                  "Speedboat Cruise to Coral Island",
                  "Parasailing & Watersports Experience",
                  "Beachside Indian Buffet Lunch",
                  "Evening Leisure at Pattaya Beach Road"
            ]
      },
      {
            "city": "Pattaya",
            "stayCity": "Pattaya",
            "title": "Nong Nooch Tropical Botanical Gardens & Alcazar Cabaret Show",
            "desc": "Visit world-renowned Nong Nooch Tropical Botanical Garden spanning 500 acres. Marvel at French gardens and cultural elephant shows. In the evening, enjoy VIP seats at the legendary Alcazar Cabaret theatrical show.",
            "acts": [
                  "Nong Nooch Botanical Gardens Tour",
                  "Cultural Elephant Talent Show",
                  "Alcazar Cabaret VIP Show",
                  "Night Market Exploration"
            ]
      },
      {
            "city": "Bangkok",
            "stayCity": "Bangkok",
            "title": "Pattaya to Bangkok, Gems Gallery & Chao Phraya Dinner Cruise",
            "desc": "Drive back to Bangkok with a stop at world-famous Gems Gallery. Check in at your city hotel. In the evening, board the luxurious Chao Phraya Princess river cruise for a live-music international buffet dinner.",
            "acts": [
                  "Scenic Highway Transfer to Bangkok",
                  "Gems Gallery World Tour",
                  "Chao Phraya Princess Luxury Cruise",
                  "Live Music International Buffet Dinner"
            ]
      },
      {
            "city": "Bangkok",
            "stayCity": "Bangkok",
            "title": "Bangkok Golden Buddha, Wat Pho, Wat Arun & Gems Heritage Tour",
            "desc": "Morning guided temple and city tour of Bangkok. Visit Wat Traimit (Golden Buddha of 5.5 tons of solid gold), Wat Pho (Reclining Buddha), and marvel at the majestic spires of Wat Arun along the Chao Phraya river.",
            "acts": [
                  "Wat Traimit Golden Buddha Temple",
                  "Wat Pho Giant Reclining Buddha",
                  "Wat Arun Temple Landmark Visit",
                  "Bangkok City Scenic Highlights"
            ]
      },
      {
            "city": "Bangkok",
            "stayCity": "Bangkok",
            "title": "Safari World & Marine Park Full Day Excursion with Buffet Lunch",
            "desc": "Full-day excursion to Safari World and Marine Park. Drive through the open safari wilderness observing lions, zebras, and giraffes. Enjoy world-class dolphin, sea lion, and Hollywood cowboy stunt shows with buffet lunch.",
            "acts": [
                  "Open Safari Wilderness Drive",
                  "Dolphin & Sea Lion Shows",
                  "Hollywood Cowboy Stunt Show",
                  "International Buffet Lunch"
            ]
      }
],
    departureStage: {
      title: "Pratunam Shopping, Souvenirs & Suvarnabhumi Airport Departure",
      desc: "Savor your final Thai buffet breakfast. Visit Platinum Fashion Mall or MBK Center for authentic Thai silk, dried fruits, and souvenir shopping. Private chauffeur transfer to Suvarnabhumi Airport (BKK) for flight home.",
      acts: [
        "Hotel Buffet Breakfast & Check-out",
        "Platinum & MBK Souvenir Shopping",
        "Private Airport Departure Drop"
]
    }
  },

  dubai: {
    entryCity: "Dubai",
    exitCity: "Dubai",
    routeCities: ["Dubai","Abu Dhabi"],
    highlights: [
      "Dubai Marina Luxury Dhow Cruise with International Buffet & Tanoura Dance",
      "Burj Khalifa 124th & 125th Floor Observation Deck Sunset Tickets",
      "Thrill 4x4 Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
      "Full-Day Abu Dhabi Tour with Sheikh Zayed Grand Mosque"
],
    stages: [
      {
            "city": "Dubai",
            "stayCity": "Dubai",
            "title": "Arrival at Dubai International Airport & Luxury Marina Dhow Cruise Dinner",
            "desc": "Arrive at Dubai International Airport (DXB). Private luxury transfer to your hotel. In the evening, board a traditional Arabian wooden Dhow Cruise along Dubai Marina with open-air upper deck dining, Tanoura dance, and skyline views.",
            "acts": [
                  "Airport Meet & Greet",
                  "Private Hotel Transfer",
                  "Dubai Marina Dhow Cruise",
                  "Tanoura Dance & 5-Star International Buffet"
            ]
      },
      {
            "city": "Dubai",
            "stayCity": "Dubai",
            "title": "Half-Day Guided Dubai City Tour & Burj Khalifa 124th Floor Sunset View",
            "desc": "Panoramic city tour covering Dubai Creek, Al Fahidi Historical Neighborhood, Jumeirah Mosque, and Burj Al Arab photo stop. In the evening, visit Dubai Mall and ascend Burj Khalifa 124th & 125th floors for breathtaking sunset views.",
            "acts": [
                  "Guided Dubai City Tour",
                  "Jumeirah Beach & Burj Al Arab Photo Stop",
                  "Dubai Mall & Aquarium View",
                  "Burj Khalifa 124th Floor Observation Deck",
                  "Dubai Fountain Musical Water Show"
            ]
      },
      {
            "city": "Dubai",
            "stayCity": "Dubai",
            "title": "Luxury Red Dunes Desert Safari with Dune Bashing, Camel Ride & BBQ Dinner",
            "desc": "Afternoon thrilling 4x4 Land Cruiser desert safari across Lehbab red dunes. Experience dune bashing, sandboarding, and camel riding at sunset. Enjoy an authentic Bedouin desert camp with belly dance, fire show, and BBQ dinner.",
            "acts": [
                  "4x4 Lehbab Red Dunes Bashing",
                  "Sandboarding & Camel Ride",
                  "Henna Painting & Arabian Costumes",
                  "Live Belly Dance & Fire Show",
                  "Barbecue Dinner Buffet"
            ]
      },
      {
            "city": "Dubai",
            "stayCity": "Dubai",
            "title": "Dubai Frame, Miracle Garden & Global Village Multicultural Carnival",
            "desc": "Visit the iconic 150-meter Dubai Frame with glass skywalk. Explore Dubai Miracle Garden featuring 150 million blooming flowers in full bloom. Evening visit to Global Village exploring 90+ country cultural pavilions.",
            "acts": [
                  "Dubai Frame Skywalk Experience",
                  "Miracle Garden Floral Sculptures",
                  "Global Village Cultural Pavilions",
                  "International Street Food Tasting"
            ]
      },
      {
            "city": "Dubai",
            "stayCity": "Dubai",
            "title": "Abu Dhabi Full Day Tour: Sheikh Zayed Grand Mosque & Ferrari World",
            "desc": "Full-day private excursion to UAE capital Abu Dhabi. Tour the breathtaking Sheikh Zayed Grand Mosque with pure white marble courtyards. Drive along Abu Dhabi Corniche and visit Ferrari World on Yas Island.",
            "acts": [
                  "Sheikh Zayed Grand Mosque Tour",
                  "Abu Dhabi Corniche Drive",
                  "Emirates Palace Photo Stop",
                  "Ferrari World Theme Park Entry"
            ]
      }
],
    departureStage: {
      title: "Gold & Spice Souks Shopping, Dubai Mall Souvenirs & Airport Drop",
      desc: "Enjoy breakfast. Take an Abra boat ride across Dubai Creek to explore the Gold Souk and Spice Souk for saffron and perfumes. Private chauffeur transfer to Dubai International Airport (DXB) for your onward flight.",
      acts: [
        "Dubai Creek Abra Ride",
        "Gold Souk & Spice Souk Shopping",
        "Hotel Check-out Formalities",
        "Private Airport Departure Drop"
]
    }
  },

  bali: {
    entryCity: "Bali (Denpasar)",
    exitCity: "Bali (Denpasar)",
    routeCities: ["Ubud","Kuta","Seminyak","Nusa Penida"],
    highlights: [
      "Ubud Art Villages, Tegallalang Rice Terraces & Jungle Swing",
      "Kintamani Volcano Mount Batur & Ulun Danu Beratan Lake Temple",
      "Tanah Lot Dramatic Ocean Sunset Temple",
      "Uluwatu Sunset Cliff Temple & Kecak Fire Dance",
      "Nusa Penida Island Speedboat Day Tour (Kelingking Beach)"
],
    stages: [
      {
            "city": "Kuta",
            "stayCity": "Kuta",
            "title": "Arrival at Denpasar International Airport & Kuta / Seminyak Beach Check-in",
            "desc": "Arrive at Ngurah Rai International Airport (DPS) in Denpasar. Traditional Balinese flower garland welcome by your private chauffeur. Transfer to your beachfront resort. Spend the evening relaxing by the pool or exploring Seminyak.",
            "acts": [
                  "Denpasar Airport Meet & Greet",
                  "Balinese Flower Garland Welcome",
                  "Resort Check-in & Welcome Drink",
                  "Seminyak Beach Sunset Walk"
            ]
      },
      {
            "city": "Ubud",
            "stayCity": "Ubud",
            "title": "Tanjung Benoa Watersports & Uluwatu Cliff Temple Sunset with Kecak Dance",
            "desc": "Morning watersports at Tanjung Benoa (Banana Boat, Parasailing & Jet Ski). In the evening, visit stunning Uluwatu Temple perched 70 meters high on sea cliffs. Witness dramatic sunset Kecak Fire Dance over the Indian Ocean.",
            "acts": [
                  "Tanjung Benoa Watersports",
                  "Padang Padang Beach Visit",
                  "Uluwatu Cliff Temple Tour",
                  "Sunset Kecak & Fire Dance Show"
            ]
      },
      {
            "city": "Ubud",
            "stayCity": "Ubud",
            "title": "Kintamani Batur Volcano, Tegalalang Rice Terraces & Bali Jungle Swing",
            "desc": "Scenic drive through art villages of Celuk and Mas. Marvel at panoramic views of Mount Batur active volcano and Lake Batur in Kintamani. Visit Tegalalang Rice Terraces, ride the famous Bali Jungle Swing, and taste Luwak coffee.",
            "acts": [
                  "Mount Batur Volcano Viewpoint",
                  "Tegalalang Rice Terraces Walk",
                  "Aloha Bali Jungle Swing Experience",
                  "Luwak Coffee Plantation Tour"
            ]
      },
      {
            "city": "Kuta",
            "stayCity": "Kuta",
            "title": "Full-Day Nusa Penida West Island Tour: Kelingking T-Rex & Broken Beach",
            "desc": "Board a fast boat to exotic Nusa Penida island. Visit iconic Kelingking Beach (T-Rex shaped cliff), Angel Billabong natural infinity pool, Broken Beach, and crystal-clear waters of Crystal Bay with private lunch.",
            "acts": [
                  "Fast Boat Ride to Nusa Penida",
                  "Kelingking T-Rex Cliff View",
                  "Angel Billabong Natural Pool",
                  "Broken Beach & Crystal Bay Swim"
            ]
      },
      {
            "city": "Kuta",
            "stayCity": "Kuta",
            "title": "Ubud Monkey Forest, Royal Palace & Traditional Balinese Spa Massage",
            "desc": "Explore Ubud Sacred Monkey Forest Sanctuary inhabited by 1,000+ playful long-tailed macaques. Visit Ubud Royal Palace and artisan markets. Indulge in an authentic 60-minute Balinese Aromatherapy massage at a luxury spa.",
            "acts": [
                  "Sacred Monkey Forest Sanctuary",
                  "Ubud Royal Palace & Art Market",
                  "60-Min Balinese Aromatherapy Spa",
                  "Café Organic Dining in Ubud"
            ]
      },
      {
            "city": "Kuta",
            "stayCity": "Kuta",
            "title": "FINNS Beach Club VIP Experience, Canggu Sunset & Beachfront Dining",
            "desc": "Spend a stylish day at world-famous FINNS Beach Club in Canggu or Potato Head Beach Club. Relax on oceanfront daybeds, swim in infinity pools, and enjoy DJ sunset sessions overlooking the surf breaks.",
            "acts": [
                  "FINNS Beach Club Entry",
                  "Oceanfront Daybed Relaxation",
                  "Canggu Surf Watching & Sunset",
                  "Seafood Dinner in Jimbaran Bay"
            ]
      }
],
    departureStage: {
      title: "Krisna Oleh-Oleh Souvenirs, Rattan Handicrafts & Airport Departure Drop",
      desc: "Enjoy your final tropical breakfast. Visit Krisna Oleh-Oleh for authentic Balinese rattan bags, aromatherapy oils, and coffee gifts. Complete check-out before your private chauffeur transfers you to DPS Airport for flight home.",
      acts: [
        "Hotel Buffet Breakfast & Check-out",
        "Krisna Oleh-Oleh Souvenir Shopping",
        "Denpasar Airport Departure Drop"
]
    }
  },

  singapore: {
    entryCity: "Singapore",
    exitCity: "Singapore",
    routeCities: ["Singapore","Sentosa"],
    highlights: [
      "Gardens by the Bay Flower Dome & Cloud Forest Floral Fantasy",
      "Sentosa Island Cable Car, Madame Tussauds & Wings of Time Show",
      "Universal Studios Singapore Full-Day Unlimited Rides Access",
      "Marina Bay Sands Skypark Observation Deck"
],
    stages: [
      {
            "city": "Singapore",
            "stayCity": "Singapore",
            "title": "Arrival at Changi Airport, Jewel Rain Vortex & Night Safari Tram Ride",
            "desc": "Arrive at world-renowned Changi Airport (SIN). Marvel at the 40-meter indoor waterfall at Jewel Rain Vortex. Transfer to your hotel. In the evening, visit the world's first nocturnal wildlife park, Singapore Night Safari.",
            "acts": [
                  "Changi Airport Meet & Greet",
                  "Jewel Changi Rain Vortex View",
                  "Hotel Check-in Formalities",
                  "Singapore Night Safari Tram Ride"
            ]
      },
      {
            "city": "Singapore",
            "stayCity": "Singapore",
            "title": "Gardens by the Bay, Marina Bay Sands SkyPark & Merlion Park Tour",
            "desc": "Explore Gardens by the Bay visiting the futuristic Flower Dome and Cloud Forest with indoor waterfall. In the evening, ascend to Marina Bay Sands SkyPark Observation Deck for 360-degree skyline views and visit Merlion Park.",
            "acts": [
                  "Gardens by the Bay Flower Dome",
                  "Cloud Forest Indoor Waterfall",
                  "Marina Bay Sands SkyPark Deck",
                  "Merlion Park & Marina Bay Stroll"
            ]
      },
      {
            "city": "Singapore",
            "stayCity": "Singapore",
            "title": "Sentosa Island Cable Car, Universal Studios Singapore & Wings of Time",
            "desc": "Ride the scenic Singapore Cable Car into Sentosa Island. Spend an exhilarating day at Universal Studios Singapore experiencing thrilling rollercoasters like Battlestar Galactica. Evening Wings of Time multi-sensory laser show.",
            "acts": [
                  "Singapore Cable Car Scenic Ride",
                  "Universal Studios Singapore All-Day Pass",
                  "S.E.A. Aquarium Visit",
                  "Wings of Time Laser & Firework Show"
            ]
      },
      {
            "city": "Singapore",
            "stayCity": "Singapore",
            "title": "Singapore Flyer, Chinatown Heritage & Little India Cultural Walk",
            "desc": "Ride the giant 165-meter Singapore Flyer observation wheel. Stroll through vibrant historic districts of Chinatown and Little India visiting Buddha Tooth Relic Temple and Sri Veeramakaliamman Temple.",
            "acts": [
                  "Singapore Flyer Giant Observation Wheel",
                  "Buddha Tooth Relic Temple Visit",
                  "Chinatown & Little India Heritage Walk",
                  "Clarke Quay Riverfront Evening"
            ]
      }
],
    departureStage: {
      title: "Orchard Road Shopping, Kaya Toast Breakfast & Changi Airport Departure",
      desc: "Savor traditional Kaya Toast and local kopi breakfast. Visit luxury shopping malls along Orchard Road for electronics and fashion. Complete check-out. Private transfer to Changi Airport for flight home.",
      acts: [
        "Traditional Kaya Toast Breakfast",
        "Orchard Road Mall Shopping",
        "Private Changi Airport Transfer Drop"
]
    }
  },

  vietnam: {
    entryCity: "Hanoi",
    exitCity: "Ho Chi Minh City / Da Nang",
    routeCities: ["Hanoi","Halong Bay","Da Nang","Hoi An"],
    highlights: [
      "Overnight Luxury Halong Bay Cruise with Kayaking among Karsts",
      "Ba Na Hills Golden Giant Hands Bridge & Cable Car Ride",
      "Hoi An UNESCO Ancient Lantern Town Walking Tour",
      "Mekong Delta River Boat Tour with Local Honey Farm"
],
    stages: [
      {
            "city": "Hanoi",
            "stayCity": "Hanoi",
            "title": "Arrival in Hanoi, French Quarter Cyclo Tour & Hoan Kiem Lake Sunset",
            "desc": "Arrive at Noi Bai International Airport (HAN) in Hanoi. Private transfer to your hotel in the Old Quarter. Enjoy a traditional cyclo rickshaw tour through 36 ancient artisan guild streets and walk around picturesque Hoan Kiem Lake.",
            "acts": [
                  "Hanoi Airport Meet & Greet",
                  "Old Quarter Hotel Check-in",
                  "Traditional Cyclo Rickshaw Tour",
                  "Hoan Kiem Lake & Ngoc Son Temple"
            ]
      },
      {
            "city": "Halong Bay Cruise",
            "stayCity": "Halong Bay Cruise",
            "title": "Hanoi to Halong Bay Luxury Overnight Cruise & Sung Sot Cave",
            "desc": "Scenic limousine drive through Red River Delta to UNESCO World Heritage Halong Bay. Board a luxury wooden junk cruise ship. Sail past limestone karst islands, kayak through emerald waters, and explore massive Sung Sot Cave.",
            "acts": [
                  "Halong Bay Luxury Cruise Boarding",
                  "Limestone Karst Islands Sailing",
                  "Sung Sot (Surprise) Cave Walking",
                  "Sunset Cocktail Party on Sundeck"
            ]
      },
      {
            "city": "Hoi An",
            "stayCity": "Hoi An",
            "title": "Halong Bay Sunrise Tai Chi, Flight to Da Nang & Hoi An Ancient Town",
            "desc": "Early morning Tai Chi session on sundeck as sun rises over Halong Bay. Cruise back to harbor, transfer to Hanoi airport and fly to Da Nang. Transfer to UNESCO-listed Hoi An Ancient Town glowing with silk lanterns at night.",
            "acts": [
                  "Sunrise Tai Chi Session on Sundeck",
                  "Flight to Da Nang Airport",
                  "Hoi An Silk Lantern Night Walk",
                  "Japanese Covered Bridge Visit"
            ]
      },
      {
            "city": "Hoi An",
            "stayCity": "Hoi An",
            "title": "Ba Na Hills Cable Car, Golden Giant Hand Bridge & Fantasy Park",
            "desc": "Take the world's longest single-rope cable car up to Ba Na Hills (1,487m). Walk across the world-famous Golden Bridge held by two giant stone hands. Explore French Village architecture and indoor Fantasy Park.",
            "acts": [
                  "World Record Ba Na Hills Cable Car",
                  "Golden Giant Hand Bridge Walk",
                  "French Village Architecture",
                  "Linh Ung Pagoda Darshan"
            ]
      },
      {
            "city": "Hoi An",
            "stayCity": "Hoi An",
            "title": "Da Nang to Ho Chi Minh City (Saigon) & Cu Chi Tunnels Historical Tour",
            "desc": "Fly to vibrant Ho Chi Minh City (Saigon). Private excursion to historical Cu Chi Tunnels. Crawl through underground secret tunnel networks used during the Vietnam War, followed by War Remnants Museum and Notre Dame Cathedral.",
            "acts": [
                  "Flight to Ho Chi Minh City",
                  "Cu Chi Tunnels Underground Exploration",
                  "War Remnants Museum Tour",
                  "Notre Dame Cathedral Photo Stop"
            ]
      }
],
    departureStage: {
      title: "Mekong Delta River Cruise, Ben Tre Coconut Candy & Departure Drop",
      desc: "Day excursion to fertile Mekong Delta. Cruise on traditional sampan boats through palm-shaded canals. Visit local coconut candy workshops and taste tropical fruits. Return to Ho Chi Minh City for airport departure drop.",
      acts: [
        "Mekong Delta Sampan Boat Cruise",
        "Coconut Candy Workshop Visit",
        "Ben Thanh Market Shopping",
        "Tan Son Nhat Airport Departure Drop"
]
    }
  },

  maldives: {
    entryCity: "Male",
    exitCity: "Male",
    routeCities: ["Male","Private Island Resort"],
    highlights: [
      "Speedboat / Seaplane Transfers to Private Island Resort",
      "House Reef Guided Snorkeling with Sea Turtles & Manta Rays",
      "Sunset Dolphin Cruise on Traditional Maldivian Dhoni",
      "Romantic Beachside Candlelight Dinner Experience"
],
    stages: [
      {
            "city": "Private Island Resort",
            "stayCity": "Private Island Resort",
            "title": "Arrival at Velana International Airport & Speedboat / Seaplane Transfer",
            "desc": "Arrive at Velana International Airport (MLE) in Male. Meet your luxury resort concierge for a scenic speedboat or seaplane transfer across turquoise lagoons. Check in to your luxury beachfront or overwater villa.",
            "acts": [
                  "Male Airport Luxury Meet & Greet",
                  "Scenic Lagoon Speedboat / Seaplane Ride",
                  "Overwater Villa Check-in",
                  "Sunset Welcome Cocktail on Private Deck"
            ]
      },
      {
            "city": "Private Island Resort",
            "stayCity": "Private Island Resort",
            "title": "House Reef Snorkeling with Sea Turtles, Manta Rays & Coral Garden",
            "desc": "Morning guided snorkeling expedition along the vibrant resort house reef. Encounter colorful reef fish, gentle sea turtles, and baby blacktip reef sharks. Afternoon relax with stand-up paddleboarding or ocean kayaking.",
            "acts": [
                  "Guided Coral House Reef Snorkeling",
                  "Sea Turtle & Marine Life Spotting",
                  "Paddleboarding & Ocean Kayaking",
                  "Beachfront Sunset Relaxation"
            ]
      },
      {
            "city": "Private Island Resort",
            "stayCity": "Private Island Resort",
            "title": "Sunset Dolphin Watching Cruise & Romantic 5-Star Beachfront Dinner",
            "desc": "Spend a leisurely morning on powder-soft white sand beaches. In the late afternoon, board a traditional wooden Dhoni boat for a sunset cruise watching pods of spinner dolphins jumping. Candlelight dinner under the stars.",
            "acts": [
                  "Dhoni Boat Dolphin Watching Cruise",
                  "Champagne Sunset Watching",
                  "5-Star Candlelight Beachfront Dinner",
                  "Stargazing over the Indian Ocean"
            ]
      },
      {
            "city": "Private Island Resort",
            "stayCity": "Private Island Resort",
            "title": "Rejuvenating Overwater Spa Treatment & Water Sports Adventures",
            "desc": "Indulge in a 60-minute relaxing aromatherapy massage in an overwater glass-floor spa pavilion. Try thrilling motorized water sports including jet ski safari, parasailing, or Seabob underwater scooter rides.",
            "acts": [
                  "Overwater Spa Glass-Floor Massage",
                  "Jet Ski Safari Lagoon Tour",
                  "Parasailing over Turquoise Atolls",
                  "Private Sunken Deck Relaxation"
            ]
      }
],
    departureStage: {
      title: "Floating Champagne Breakfast, Island Souvenirs & Speedboat Departure",
      desc: "Enjoy a world-famous floating breakfast in your private plunge pool. Take final memorable photos across white sandbanks. Complete check-out before your speedboat / seaplane transfer back to Male Airport for flight home.",
      acts: [
        "Floating Pool Champagne Breakfast",
        "Sandbank Photography Walk",
        "Speedboat Transfer to Male Airport",
        "International Flight Departure Drop"
]
    }
  },

  europe: {
    entryCity: "Paris",
    exitCity: "Zurich / Rome",
    routeCities: ["Paris","Lucerne","Interlaken","Rome"],
    highlights: [
      "Paris Eiffel Tower Summit Tickets & Romantic Seine River Cruise",
      "Louvre Museum Guided Tour & Champs-Elysees Walk",
      "Mount Titlis World’s First Revolving Rotair Cable Car & Glacier Cave",
      "Jungfraujoch Top of Europe High-Altitude Train Experience"
],
    stages: [
      {
            "city": "Paris",
            "stayCity": "Paris",
            "title": "Arrival in Paris, Hotel Check-in & Seine River Illuminated Sunset Cruise",
            "desc": "Arrive at Paris Charles de Gaulle Airport (CDG). Private transfer to your hotel. In the evening, embark on a glass-canopy Bateaux Mouches cruise along the River Seine admiring illuminated monuments including Notre Dame.",
            "acts": [
                  "Paris Airport Meet & Greet",
                  "Hotel Check-in",
                  "Bateaux Mouches Seine River Cruise",
                  "Illuminated Eiffel Tower Viewing"
            ]
      },
      {
            "city": "Paris",
            "stayCity": "Paris",
            "title": "Paris Guided City Highlights, Louvre Museum & Eiffel Tower Summit",
            "desc": "Guided city tour covering Arc de Triomphe, Champs-Élysées, Concorde, and Opera Garnier. Explore world-famous Louvre Museum to see the Mona Lisa. Ascend to the top deck of Eiffel Tower for 360-degree views of Paris.",
            "acts": [
                  "Paris Grand Monuments City Tour",
                  "Louvre Museum Mona Lisa Highlights",
                  "Eiffel Tower Summit Observation Deck",
                  "Montmartre & Sacré-Cœur Walk"
            ]
      },
      {
            "city": "Lucerne",
            "stayCity": "Lucerne",
            "title": "Paris to Central Switzerland via Scenic TGV High-Speed Train",
            "desc": "Board high-speed TGV train crossing French countryside into Switzerland. Arrive in lakeside Lucerne or Interlaken. Stroll across the 14th-century wooden Chapel Bridge and admire the dying Lion Monument.",
            "acts": [
                  "High-Speed TGV Train to Switzerland",
                  "Swiss Hotel Check-in",
                  "Lucerne Chapel Bridge & Water Tower",
                  "Lake Lucerne Promenade Walk"
            ]
      },
      {
            "city": "Lucerne",
            "stayCity": "Lucerne",
            "title": "Mount Titlis Rotair Cable Car, Ice Flyer & Cliff Walk Suspension Bridge",
            "desc": "Ascend Mount Titlis (3,020m) on the world's first revolving Titlis Rotair cable car. Walk through the natural Glacier Cave, ride the thrilling Ice Flyer chairlift over crevasses, and cross Europe's highest suspension bridge.",
            "acts": [
                  "Titlis Rotair Revolving Cable Car",
                  "Glacier Cave Ice Carvings",
                  "Titlis Cliff Walk Suspension Bridge",
                  "Ice Flyer Snow Sledging Experience"
            ]
      },
      {
            "city": "Interlaken",
            "stayCity": "Interlaken",
            "title": "Jungfraujoch Top of Europe High-Alpine Train Expedition",
            "desc": "Full-day expedition to Jungfraujoch (3,454m) aboard the modern Eiger Express tricable gondola and historic cogwheel railway. Marvel at Aletsch Glacier (longest in Europe), visit Ice Palace sculptures, and Alpine Sensation.",
            "acts": [
                  "Eiger Express Tricable Gondola",
                  "Cogwheel Mountain Railway Ride",
                  "Jungfraujoch Sphinx Observation Deck",
                  "Aletsch Glacier Ice Palace Walk"
            ]
      }
],
    departureStage: {
      title: "Black Forest Germany, Cuckoo Clocks, Rhine Falls & Swiss Departure",
      desc: "Cross into Germany's Black Forest. Witness traditional cuckoo clock craftsmanship and taste authentic Black Forest cherry cake. Marvel at Rhine Falls (largest waterfall in Europe) before transfer to Zurich Airport (ZRH).",
      acts: [
        "Black Forest Cuckoo Clock Workshop",
        "Rhine Falls Roaring Waterfalls Boat",
        "Zurich Airport Departure Transfer Drop"
]
    }
  },

  baku: {
    entryCity: "Baku",
    exitCity: "Baku",
    routeCities: ["Baku","Gobustan","Gabala"],
    highlights: [
      "Baku Old City (Icherisheher), Maiden Tower & Flame Towers Night View",
      "Gobustan Mud Volcanoes & UNESCO Rock Art Petroglyphs",
      "Ateshgah Eternal Fire Temple & Yanar Dag Burning Mountain",
      "Gabala Tufandag Mountain Cable Car & Nohur Alpine Lake"
],
    stages: [
      {
            "city": "Baku",
            "stayCity": "Baku",
            "title": "Arrival in Baku, Hotel Check-in & Flame Towers Sunset Panorama",
            "desc": "Arrive at Heydar Aliyev International Airport (GYD) in Baku. Private transfer to your hotel. In the evening, visit Highland Park (Dagustu Park) for breathtaking panoramic sunset views of Baku Bay and illuminated Flame Towers.",
            "acts": [
                  "Baku Airport Meet & Greet",
                  "Hotel Check-in Formalities",
                  "Highland Park Sunset Viewpoint",
                  "Flame Towers Illumination Photo Stop"
            ]
      },
      {
            "city": "Baku",
            "stayCity": "Baku",
            "title": "Old City (Icherisheher) Walking Tour, Maiden Tower & Shirvanshahs Palace",
            "desc": "Guided walking tour through UNESCO-listed Old City (Icherisheher). Explore 12th-century Maiden Tower, magnificent Palace of the Shirvanshahs, ancient Caravanserais, and the world's only Museum of Miniature Books.",
            "acts": [
                  "Icherisheher Old City Walk",
                  "Maiden Tower Exploration",
                  "Palace of the Shirvanshahs",
                  "Museum of Miniature Books",
                  "Nizami Street Evening Stroll"
            ]
      },
      {
            "city": "Baku",
            "stayCity": "Baku",
            "title": "Absheron Peninsula Fire Tour: Ateshgah Temple & Yanardag Burning Mountain",
            "desc": "Excursion to the legendary Absheron Peninsula. Visit Ateshgah Fire Temple, a sacred place of worship for ancient Zoroastrians and Hindu pilgrims. Marvel at Yanardag (Burning Mountain) where natural gas flames burn continuously.",
            "acts": [
                  "Ateshgah Zoroastrian Fire Temple",
                  "Yanardag Burning Mountain Phenomenon",
                  "Heydar Aliyev Center Architecture Photo",
                  "Baku Boulevard Caspian Promenade"
            ]
      },
      {
            "city": "Gabala",
            "stayCity": "Gabala",
            "title": "Full-Day Alpine Gabala Mountain Resort & Tufandag Cable Car",
            "desc": "Scenic mountain drive to alpine resort town Gabala (220 km) in the Greater Caucasus. Ride Tufandag Mountain Cable Car up to snow-capped peaks. Visit serene Nohur Lake and scenic 7 Gozal (Seven Beauties) Waterfall.",
            "acts": [
                  "Caucasus Mountain Highway Drive",
                  "Tufandag Ropeway Cable Car Ride",
                  "Nohur Lake Serene Walk",
                  "Seven Beauties Waterfall Stop"
            ]
      },
      {
            "city": "Baku",
            "stayCity": "Baku",
            "title": "Gobustan Mud Volcanoes, 3D Interactive Museum & Rock Art Petroglyphs",
            "desc": "Explore Gobustan National Park featuring 6,000+ ancient rock petroglyphs dating back 40,000 years. Visit interactive 3D museum and ride Soviet Lada taxis to bubbling mud volcanoes erupting natural mineral mud.",
            "acts": [
                  "Gobustan UNESCO Rock Petroglyphs",
                  "Interactive Gobustan Museum",
                  "Bubbling Mud Volcanoes Safari",
                  "Bibi-Heybat Mosque Visit"
            ]
      }
],
    departureStage: {
      title: "Baku Bazaar Caviar & Silk Shopping, Deniz Mall & Airport Drop",
      desc: "Enjoy breakfast. Visit Yashil Bazaar (Green Market) for authentic Caspian caviar, Azerbaijani dried fruits, nuts, and handwoven kelaghayi silk scarves. Private transfer to Heydar Aliyev Airport for departure flight.",
      acts: [
        "Yashil Bazaar Local Food Shopping",
        "Deniz Mall Caspian Seafront Visit",
        "Airport Departure Chauffeur Drop"
]
    }
  },

  'sri-lanka': {
    entryCity: "Colombo",
    exitCity: "Colombo",
    routeCities: ["Colombo","Kandy","Nuwara Eliya","Bentota"],
    highlights: [
      "Kandy Temple of the Sacred Tooth Relic & Royal Botanical Gardens",
      "Nuwara Eliya Little England Tea Plantations & Ramboda Falls",
      "Ella Nine Arches Bridge & Little Adam’s Peak",
      "Bentota Madu River Mangrove Boat Safari & Turtle Conservation"
],
    stages: [
      {
            "city": "Kandy",
            "stayCity": "Kandy",
            "title": "Arrival in Colombo & Scenic Drive to Cultural Capital Kandy",
            "desc": "Arrive at Bandaranaike International Airport (CMB) in Colombo. Meet your chauffeur guide and drive towards the UNESCO royal city of Kandy. Enroute visit Pinnawala Elephant Orphanage to watch herds bathing in the river. Check in at Kandy hotel.",
            "acts": [
                  "Airport Meet & Greet",
                  "Pinnawala Elephant Orphanage Visit",
                  "Kandy Hotel Check-in",
                  "Kandyan Cultural Dance Show"
            ]
      },
      {
            "city": "Nuwara Eliya",
            "stayCity": "Nuwara Eliya",
            "title": "Sacred Temple of the Tooth Relic, Peradeniya Botanical Gardens & Kandy Lake",
            "desc": "Visit the sacred Sri Dalada Maligawa (Temple of the Sacred Tooth Relic of Buddha). Stroll through royal Peradeniya Botanical Gardens featuring over 4,000 plant species. Enjoy an evening walk around picturesque Kandy Lake.",
            "acts": [
                  "Temple of the Sacred Tooth Relic Pooja",
                  "Royal Botanical Gardens Tour",
                  "Kandy Gem Lapidary & Silk Showroom",
                  "Kandy Lake Scenic Walk"
            ]
      },
      {
            "city": "Ella",
            "stayCity": "Ella",
            "title": "Kandy to Nuwara Eliya 'Little England' via Ramboda Falls & Tea Factory",
            "desc": "Breathtaking mountain drive past cascading waterfalls including Ramboda Falls. Tour a working Ceylon tea plantation and factory with tea tasting session. Explore colonial Nuwara Eliya, Gregory Lake, and Victoria Park.",
            "acts": [
                  "Ramboda Waterfalls Photo Stop",
                  "Ceylon Tea Plantation & Factory Tasting",
                  "Gregory Lake Boat Ride / Pony Ride",
                  "Nuwara Eliya Colonial Town Walk"
            ]
      },
      {
            "city": "Bentota",
            "stayCity": "Bentota",
            "title": "Nuwara Eliya to Coastal Bentota / Galle Fort & Turtle Hatchery",
            "desc": "Descend to southwestern golden beaches of Bentota. Visit Kosgoda Turtle Hatchery, take a thrilling mangrove boat safari on Madu River with fish therapy, and explore the 17th-century Dutch colonial Galle Fort.",
            "acts": [
                  "Madu River Mangrove Boat Safari",
                  "Kosgoda Sea Turtle Conservation Center",
                  "UNESCO Galle Dutch Fort Walking Tour",
                  "Bentota Beachfront Resort Check-in"
            ]
      }
],
    departureStage: {
      title: "Bentota Watersports, Colombo City Tour & Airport Departure Transfer",
      desc: "Enjoy beach relaxation and optional jet ski or banana rides. Drive to capital Colombo. Guided city tour visiting Gangaramaya Buddhist Temple, Independence Square, and Pettah bazaar before your transfer to Colombo Airport.",
      acts: [
        "Bentota Beach Leisure & Watersports",
        "Colombo City & Temple Tour",
        "Ceylon Tea & Cashew Shopping",
        "Bandaranaike Airport Departure Drop"
]
    }
  },

  mauritius: {
    entryCity: "Mauritius",
    exitCity: "Mauritius",
    routeCities: ["Port Louis","Chamarel","Ile Aux Cerfs"],
    highlights: [
      "North Island Tour: Port Louis, Caudan Waterfront & Pamplemousses Garden",
      "South Island Tour: Chamarel 7-Coloured Earth & Grand Bassin Lake",
      "Ile Aux Cerfs Catamaran Cruise with Parasailing & Tube Ride",
      "Pristine White Sand Beach Relaxation"
],
    stages: [
      {
            "city": "Mauritius",
            "stayCity": "Mauritius",
            "title": "Arrival in Tropical Mauritius, Beach Resort Check-in & Coastal Sunset",
            "desc": "Arrive at Sir Seewoosagur Ramgoolam Airport (MRU). Meet our island representative for private transfer to your luxury beachfront resort. Sip a tropical welcome cocktail, relax on powdery white sands, and marvel at the Indian Ocean sunset.",
            "acts": [
                  "Airport Meet & Greet",
                  "Luxury Resort Private Transfer",
                  "Resort Welcome Drink & Check-in",
                  "Sunset Beachfront Relaxation"
            ]
      },
      {
            "city": "Mauritius",
            "stayCity": "Mauritius",
            "title": "North Island Heritage: Port Louis Capital, Citadel & Caudan Waterfront",
            "desc": "Full-day guided tour of North Mauritius. Explore historical Port Louis, climb Fort Adelaide (Citadel) for panoramic harbour views, stroll through the vibrant Caudan Waterfront, and visit the giant water lilies at Pamplemousses Botanical Garden.",
            "acts": [
                  "Port Louis Capital Guided Tour",
                  "Fort Adelaide Panoramic Citadel",
                  "Pamplemousses Botanical Garden",
                  "Caudan Waterfront Shopping & Dining"
            ]
      },
      {
            "city": "Mauritius",
            "stayCity": "Mauritius",
            "title": "South Island Scenic Wonders: Chamarel 7-Colored Earth & Grand Bassin",
            "desc": "Discover South Mauritius geological wonders. Visit dormant volcanic crater Trou aux Cerfs, sacred crater lake Grand Bassin (Ganga Talao) with majestic Shiva statue, Black River Gorges, and the surreal Chamarel Seven Colored Earths and Waterfall.",
            "acts": [
                  "Trou aux Cerfs Volcanic Crater",
                  "Grand Bassin Sacred Lake & Shiva Statue",
                  "Black River Gorges Viewpoint",
                  "Chamarel Seven Colored Earth & Waterfall"
            ]
      },
      {
            "city": "Mauritius",
            "stayCity": "Mauritius",
            "title": "Full Day Catamaran Cruise to Ile Aux Cerfs with Barbecue Lunch & Parasailing",
            "desc": "Board a catamaran cruise across turquoise lagoons to the tropical paradise of Ile Aux Cerfs. Swim, snorkel among coral reefs, indulge in an onboard grilled seafood/chicken barbecue lunch with local rum, and enjoy parasailing.",
            "acts": [
                  "Lagoon Catamaran Cruise",
                  "Snorkeling at Coral Reefs",
                  "Onboard Barbecue Lunch with Tropical Drinks",
                  "Ile Aux Cerfs Watersports & Beach Leisure"
            ]
      }
],
    departureStage: {
      title: "Beachfront Spa, Duty-Free Souvenir Shopping & Airport Departure Transfer",
      desc: "Indulge in a relaxing morning beachfront breakfast or Ayurvedic spa session. Pick up authentic Mauritian sugar, rum, and handcrafted dodo souvenirs before your private transfer to the airport for your return flight.",
      acts: [
        "Resort Buffet Breakfast & Beach Leisure",
        "Mauritian Rum & Vanilla Tea Shopping",
        "Private Airport Transfer",
        "Flight Departure"
]
    }
  },

  turkey: {
    entryCity: "Istanbul",
    exitCity: "Istanbul",
    routeCities: ["Istanbul","Cappadocia","Pamukkale"],
    highlights: [
      "Istanbul Hagia Sophia, Blue Mosque & Grand Bazaar Guided Walk",
      "Bosphorus Sunset Dinner Cruise with Turkish Folk Dance",
      "Cappadocia Sunrise Hot Air Balloon Flight over Fairy Chimneys",
      "Goreme Open Air Museum & Derinkuyu Underground City"
],
    stages: [
      {
            "city": "Istanbul",
            "stayCity": "Istanbul",
            "title": "Arrival in Historic Istanbul, Bosphorus Strait & Hotel Check-in",
            "desc": "Arrive at Istanbul Airport (IST). Meet our tour chauffeur for private transfer to your hotel. Relax and enjoy an evening stroll along Istiklal Street in Taksim or take an optional sunset yacht cruise on the sparkling Bosphorus Strait separating Europe and Asia.",
            "acts": [
                  "Airport Meet & Greet",
                  "Private Hotel Transfer & Check-in",
                  "Taksim Square & Istiklal Street Walk",
                  "Bosphorus Evening Views"
            ]
      },
      {
            "city": "Istanbul",
            "stayCity": "Istanbul",
            "title": "Istanbul Old City Classical Highlights: Hagia Sophia, Blue Mosque & Grand Bazaar",
            "desc": "Guided walking tour through UNESCO-listed Sultanahmet. Marvel at 6th-century Hagia Sophia, the 6-minaret Blue Mosque, Roman Hippodrome, and opulent Topkapi Palace of Ottoman Sultans. Get lost in the bustling 4,000-shop Grand Bazaar.",
            "acts": [
                  "Hagia Sophia Architectural Masterpiece",
                  "Sultan Ahmed Blue Mosque Visit",
                  "Topkapi Palace Imperial Treasury",
                  "Grand Bazaar Turkish Delight Shopping"
            ]
      },
      {
            "city": "Cappadocia",
            "stayCity": "Cappadocia",
            "title": "Fly to Cappadocia, Fairy Chimneys, Underground City & Cave Hotel Stay",
            "desc": "Morning domestic flight to Cappadocia. Check into a traditional luxury cave hotel carved out of volcanic rock. Explore Kaymakli / Derinkuyu multi-level underground city, Pasabag Monk Valley fairy chimneys, and Devrent Imagination Valley.",
            "acts": [
                  "Domestic Flight to Cappadocia",
                  "Cave Hotel Check-in Experience",
                  "Underground City Subterranean Tour",
                  "Pasabag Fairy Chimneys & Devrent Valley"
            ]
      },
      {
            "city": "Cappadocia",
            "stayCity": "Cappadocia",
            "title": "Sunrise Hot Air Balloon Flight over Cappadocia & Goreme Open Air Museum",
            "desc": "Once-in-a-lifetime sunrise hot air balloon flight drifting gracefully over Cappadocia's surreal lunar landscape and volcanic canyons. Visit UNESCO Goreme Open Air Museum rock-cut churches and Uchisar Castle viewpoint.",
            "acts": [
                  "Sunrise Hot Air Balloon Flight Experience",
                  "Champagne Toast & Flight Certificate",
                  "Goreme Rock-cut Churches & Byzantine Frescoes",
                  "Uchisar Rock Castle Sunset Vista"
            ]
      },
      {
            "city": "Pamukkale",
            "stayCity": "Pamukkale",
            "title": "Fly to Izmir / Denizli, Pamukkale Cotton Castle Thermal Travertines & Hierapolis",
            "desc": "Short flight to Denizli. Visit world-famous Pamukkale (Cotton Castle) glistening with tiered white travertine thermal terraces. Bathe in Cleopatra Antique Thermal Pool and explore the sprawling Greco-Roman ruins of ancient Hierapolis.",
            "acts": [
                  "Pamukkale White Calcium Travertines Walk",
                  "Cleopatra Antique Thermal Pool Bath",
                  "Hierapolis Amphitheatre & Necropolis",
                  "Denizli / Kusadasi Resort Check-in"
            ]
      }
],
    departureStage: {
      title: "Ephesus Ancient City, Temple of Artemis & Istanbul Departure Transfer",
      desc: "Tour world-renowned classical metropolis Ephesus. Walk marble streets to Library of Celsus, Great Theatre, and ruins of Temple of Artemis (one of the Seven Ancient Wonders). Transfer to Izmir / Istanbul Airport for departure.",
      acts: [
        "Ephesus Classical Ruins Guided Tour",
        "Celsus Library & Grand Theatre Walk",
        "Turkish Pottery & Leather Artisan Workshop",
        "Airport Departure Drop"
]
    }
  },

  nepal: {
    entryCity: "Kathmandu",
    exitCity: "Kathmandu",
    routeCities: ["Kathmandu","Pokhara","Chitwan"],
    highlights: [
      "Kathmandu Sacred Pashupatinath Temple & Boudhanath Stupa",
      "Pokhara Phewa Lake Boating & Sarangkot Annapurna Sunrise",
      "Davis Falls & Gupteshwor Mahadev Cave Excursion",
      "Chitwan National Park Jungle Safari & Tharu Cultural Show"
],
    stages: [
      {
            "city": "Kathmandu",
            "stayCity": "Kathmandu",
            "title": "Arrival in Kathmandu Valley, Pashupatinath Temple & Boudhanath Stupa",
            "desc": "Arrive at Tribhuvan International Airport (KTM) in Kathmandu. Meet our Sherpa representative for a private transfer to your hotel. Visit the sacred Hindu shrine Shri Pashupatinath Temple on holy Bagmati River and circumambulate the colossal Boudhanath Stupa.",
            "acts": [
                  "Kathmandu Airport Meet & Greet",
                  "Hotel Check-in & Welcome Drink",
                  "Pashupatinath Temple Maha Aarti",
                  "Boudhanath Giant Stupa Prayer Wheels"
            ]
      },
      {
            "city": "Kathmandu",
            "stayCity": "Kathmandu",
            "title": "Kathmandu Valley Heritage: Swayambhunath (Monkey Temple) & Patan Durbar Square",
            "desc": "Climb to hilltop Swayambhunath Stupa with panoramic valley views. Explore the exquisite Newari stone and wood architecture of UNESCO Patan Durbar Square, Krishna Mandir, and the Golden Temple. Afternoon free for Thamel gear shopping.",
            "acts": [
                  "Swayambhunath Hilltop Stupa",
                  "Patan Durbar Square Royal Palaces",
                  "Krishna Mandir Stone Carvings",
                  "Thamel Bazaar Trekking Gear Shopping"
            ]
      },
      {
            "city": "Pokhara",
            "stayCity": "Pokhara",
            "title": "Scenic Highway Drive to Pokhara Valley along Trishuli River",
            "desc": "Scenic mountain drive to picturesque Pokhara (200 km) along the roaring Trishuli and Marsyangdi rivers with Himalayan foothills views. Arrive in Pokhara flanked by the snow-capped Annapurna and Machhapuchhre (Fishtail) peaks. Check in at Lakeside hotel.",
            "acts": [
                  "Trishuli River Valley Highway Drive",
                  "Riverside Lunch Stop",
                  "Pokhara Lakefront Hotel Check-in",
                  "Phewa Lake Evening Boating & Barahi Temple"
            ]
      },
      {
            "city": "Pokhara",
            "stayCity": "Pokhara",
            "title": "Sarangkot Sunrise over Annapurna Range, Davis Fall & Gupteshwor Mahadev Cave",
            "desc": "Early morning drive to Sarangkot ridge for sunrise illuminating Annapurna I, Dhaulagiri, and Fishtail peaks in golden hues. Visit Davis Falls where water disappears underground, Gupteshwor Mahadev cave temple, and Peace Pagoda.",
            "acts": [
                  "Sarangkot Himalayan Sunrise Spectacle",
                  "Davis Falls Rushing Water Chasm",
                  "Gupteshwor Mahadev Subterranean Cave",
                  "World Peace Pagoda Stupa Viewpoint"
            ]
      },
      {
            "city": "Chitwan",
            "stayCity": "Chitwan",
            "title": "Pokhara to Chitwan National Park Tiger & Rhino Wildlife Reserve",
            "desc": "Drive to subtropical Terai plains of Chitwan National Park. Check into your jungle safari lodge. In the evening, enjoy a sunset riverside stroll spotting wild rhinos and enjoy a traditional Tharu tribal stick dance performance.",
            "acts": [
                  "Scenic Drive to Terai Lowlands",
                  "Chitwan Jungle Lodge Check-in",
                  "Rapti River Sunset & Birdwatching",
                  "Tharu Cultural Stick Dance Show"
            ]
      }
],
    departureStage: {
      title: "Chitwan Elephant / Jeep Safari, Canoe Ride & Kathmandu Departure Drop",
      desc: "Thrilling early morning Jeep safari in Chitwan to track endangered One-horned Rhinoceros, Royal Bengal Tigers, and sloth bears. Take a tranquil dugout canoe ride along Rapti River spotting Gharials before driving to Kathmandu Airport.",
      acts: [
        "Chitwan 4x4 Core Jungle Safari",
        "One-Horned Rhino & Tiger Tracking",
        "Rapti River Dugout Canoe Safari",
        "Kathmandu Airport Departure Drop"
]
    }
  },

  australia: {
    entryCity: "Sydney",
    exitCity: "Melbourne / Cairns",
    routeCities: ["Sydney","Melbourne","Cairns"],
    highlights: [
      "Sydney Opera House & Sunset Harbour Dinner Cruise",
      "Bondi Beach Coastal Walk & Sydney Tower Eye 360 Views",
      "Great Ocean Road Scenic Drive & Twelve Apostles Sea Stacks",
      "Great Barrier Reef Luxury Catamaran Snorkeling Cruise"
],
    stages: [
      {
            "city": "Sydney",
            "stayCity": "Sydney",
            "title": "Arrival in Sydney, Harbour Bridge & Iconic Opera House Walk",
            "desc": "Arrive at Kingsford Smith Airport (SYD) in Sydney. Private AC transfer to your downtown hotel. Spend the afternoon exploring Circular Quay, walking around the world-famous Sydney Opera House, and walking across Sydney Harbour Bridge.",
            "acts": [
                  "Airport Meet & Greet",
                  "Hotel Check-in",
                  "Sydney Opera House Architectural Tour",
                  "Circular Quay & The Rocks Historical Walk"
            ]
      },
      {
            "city": "Sydney",
            "stayCity": "Sydney",
            "title": "Blue Mountains National Park, Three Sisters & Scenic World Cable Car",
            "desc": "Full-day excursion to UNESCO Blue Mountains. Marvel at ancient eucalyptus valleys from Echo Point viewing the Three Sisters rock formation. Ride the steepest passenger railway in the world and Scenic Skyway glass-floor cable car at Scenic World.",
            "acts": [
                  "Blue Mountains National Park Drive",
                  "Echo Point & Three Sisters Viewpoint",
                  "Scenic World Railway & Skyway Cableway",
                  "Leura Mountain Village Artisan Lunch"
            ]
      },
      {
            "city": "Melbourne",
            "stayCity": "Melbourne",
            "title": "Bondi Beach Coastal Walk, Sydney Tower Eye & Sunset Harbour Dinner Cruise",
            "desc": "Take the scenic cliffside coastal walk from Bondi to Bronte Beach. Ascend Sydney Tower Eye for 360-degree skyline views. In the evening, board a luxury 3-course dinner cruise on Sydney Harbour with stunning illumination of city landmarks.",
            "acts": [
                  "Bondi Beach Surfing & Coastal Walk",
                  "Sydney Tower Eye Observation Deck",
                  "Luxury Sydney Harbour Sunset Cruise",
                  "3-Course International Dinner on Board"
            ]
      },
      {
            "city": "Melbourne",
            "stayCity": "Melbourne",
            "title": "Fly to Melbourne, Laneways Street Art Tour & Yarra River Evening",
            "desc": "Morning flight to cultural capital Melbourne. Check in at your CBD hotel. Join a guided walking tour through Melbourne's iconic graffiti laneways (Hosier Lane) and vintage arcade cafes. Spend the evening strolling along the bustling Southbank promenade.",
            "acts": [
                  "Flight to Melbourne & Transfer",
                  "Hosier Lane & Street Art Walking Tour",
                  "Flinders Street Station & Federation Square",
                  "Yarra River Southbank Dining Promenade"
            ]
      },
      {
            "city": "Cairns",
            "stayCity": "Cairns",
            "title": "Great Ocean Road Spectacular Scenic Coastal Drive & Twelve Apostles",
            "desc": "Full-day road trip along one of the world's most spectacular coastal highways. Wind through surf beaches, ancient rainforests, and spot wild koalas in Kennett River. Arrive at Port Campbell to witness the colossal limestone Twelve Apostles sea stacks.",
            "acts": [
                  "Great Ocean Road Ocean Drive",
                  "Wild Koala Spotting at Kennett River",
                  "Twelve Apostles & Loch Ard Gorge Formations",
                  "Shipwreck Coast Sunset Photography"
            ]
      }
],
    departureStage: {
      title: "Fly to Gold Coast / Cairns, Great Barrier Reef Catamaran Cruise & Departure",
      desc: "Fly north to Cairns / Gold Coast. Board a luxury high-speed catamaran cruise to the Outer Great Barrier Reef. Snorkel among vibrant coral gardens, tropical fish, and marine turtles with marine biologists before your airport departure transfer.",
      acts: [
        "Outer Great Barrier Reef Catamaran Cruise",
        "Snorkeling at UNESCO Coral Formations",
        "Semi-Submersible Coral Viewing Tour",
        "Airport Departure Drop"
]
    }
  },

  usa: {
    entryCity: "New York City",
    exitCity: "San Francisco / Los Angeles",
    routeCities: ["New York","Washington D.C.","Las Vegas","San Francisco"],
    highlights: [
      "New York Times Square, Central Park & Summit One Vanderbilt Views",
      "Statue of Liberty Ferry, Ellis Island & 9/11 Memorial",
      "Washington D.C. Capitol Hill, White House & Lincoln Memorial",
      "Las Vegas The Strip Neon Lights & Bellagio Fountains Spectacle",
      "Grand Canyon West Rim Cantilever Glass Skywalk Experience"
],
    stages: [
      {
            "city": "New York",
            "stayCity": "New York",
            "title": "Arrival in New York City, Manhattan Skyline & Times Square",
            "desc": "Arrive at John F. Kennedy Airport (JFK) / Newark (EWR). Private luxury SUV transfer to your Midtown Manhattan hotel. In the evening, step out into the electric neon glow of Times Square and Broadway theatre district.",
            "acts": [
                  "Airport Meet & Greet",
                  "Private Manhattan Hotel Transfer",
                  "Times Square Neon Walking Tour",
                  "Rockefeller Center & Broadway Avenue"
            ]
      },
      {
            "city": "New York",
            "stayCity": "New York",
            "title": "Statue of Liberty Ferry, Wall Street, Central Park & Summit One Vanderbilt",
            "desc": "Board the ferry to Liberty Island to stand beneath the Statue of Liberty and visit Ellis Island National Museum. Walk past Wall Street Charging Bull and 9/11 Memorial. In the afternoon, explore Central Park and ascend Summit One Vanderbilt glass observatory.",
            "acts": [
                  "Statue of Liberty & Ellis Island Ferry",
                  "Wall Street & 9/11 Memorial Reflection Pools",
                  "Central Park Bethesda Fountain Stroll",
                  "Summit One Vanderbilt Immersive Skyline Views"
            ]
      },
      {
            "city": "Washington D.C.",
            "stayCity": "Washington D.C.",
            "title": "Fly to Washington D.C., Capitol Hill, Lincoln Memorial & Smithsonian Museums",
            "desc": "Short flight or Amtrak train to the nation's capital Washington D.C. Tour Capitol Hill, the White House exterior, Lincoln Memorial, Washington Monument, and explore the National Air and Space Smithsonian Museum with moon landing modules.",
            "acts": [
                  "Capitol Hill & Supreme Court Tour",
                  "The White House Exterior Photo Stop",
                  "Lincoln Memorial & Reflecting Pool",
                  "Smithsonian Air & Space Museum Exploration"
            ]
      },
      {
            "city": "Las Vegas",
            "stayCity": "Las Vegas",
            "title": "Fly to Las Vegas, The Strip Boulevard & Fountains of Bellagio Spectacle",
            "desc": "Morning flight across America to dazzling Las Vegas in Nevada. Check into your luxury casino resort on the Las Vegas Strip. In the evening, witness the choreographed musical Bellagio Fountains, Mirage volcano, and explore Venetian gondola canals.",
            "acts": [
                  "Flight to Las Vegas & Hotel Check-in",
                  "Las Vegas Strip World Landmark Walk",
                  "Fountains of Bellagio Water Show",
                  "The Venetian Indoor Gondola Ride"
            ]
      },
      {
            "city": "Las Vegas",
            "stayCity": "Las Vegas",
            "title": "Grand Canyon West Rim Skywalk & Hoover Dam Engineering Marvel",
            "desc": "Full-day excursion to the majestic Grand Canyon West Rim. Stop at Hoover Dam holding back Lake Mead. Walk on the cantilever glass Grand Canyon Skywalk projecting 4,000 feet above the Colorado River canyon floor with Hualapai tribal guides.",
            "acts": [
                  "Hoover Dam Engineering Landmark Stop",
                  "Joshua Tree Forest Scenic Drive",
                  "Grand Canyon Skywalk Glass Bridge Walk",
                  "Guano Point & Eagle Point Panoramic Views"
            ]
      }
],
    departureStage: {
      title: "Fly to San Francisco, Golden Gate Bridge, Fisherman's Wharf & Departure Drop",
      desc: "Fly to coastal San Francisco. Visit iconic orange towers of Golden Gate Bridge, historic cable car lines, Lombard Street crooked curves, and sea lions at Fisherman's Wharf Pier 39 before your private chauffeur transfer to San Francisco Airport (SFO).",
      acts: [
        "Golden Gate Bridge Vista Point",
        "Fisherman's Wharf Pier 39 Sea Lions",
        "Historic Cable Car Scenic Ride",
        "San Francisco Airport Departure Drop"
]
    }
  }

};

export function getSectorCircuit(
  sector: SectorDefinition,
  durationDays: number,
  durationNights: number,
  pkgIndex: number,
  hotelTier: string
): SectorCircuitResult {
  const master = MASTER_SECTOR_CIRCUITS[sector.destinationSlug];

  if (master) {
    const totalDays = durationDays;
    const totalNights = durationNights;
    const stages = master.stages;

    // Build the night stays array: exact length = totalNights
    const nightStays: { city: string; hotel: string }[] = [];
    for (let n = 0; n < totalNights; n++) {
      let stageIdx = 0;
      if (totalNights === 1) {
        stageIdx = 0;
      } else if (n === totalNights - 1) {
        // Last stay night
        if (sector.destinationSlug === 'kerala') {
          stageIdx = 3; // Alleppey Houseboat
        } else if (sector.destinationSlug === 'kashmir') {
          stageIdx = 5; // Srinagar Houseboat
        } else {
          stageIdx = Math.min(n, stages.length - 1);
        }
      } else {
        stageIdx = n % stages.length;
      }

      const stg = stages[stageIdx] || stages[0];
      const stayCity = stg.stayCity || stg.city;
      nightStays.push({
        city: stayCity,
        hotel: getBrandedHotelName(stayCity, hotelTier)
      });
    }

    // Special override for Kerala: ensure Alleppey Houseboat is on the 2nd-last night (last stay night)
    if (sector.destinationSlug === 'kerala' && totalNights >= 2) {
      nightStays[totalNights - 1] = {
        city: 'Alleppey Houseboat',
        hotel: getBrandedHotelName('Alleppey Houseboat', hotelTier)
      };
    }

    // Special override for Kashmir: ensure Srinagar Houseboat is on the final stay night
    if (sector.destinationSlug === 'kashmir' && totalNights >= 2) {
      nightStays[totalNights - 1] = {
        city: 'Srinagar Houseboat',
        hotel: getBrandedHotelName('Srinagar Houseboat', hotelTier)
      };
    }

    // Special override for Ayodhya 4N/5D (User explicitly specified flow):
    // Day 1: Ayodhya, Day 2: Ayodhya, Day 3: Prayagraj snan -> Varanasi, Day 4: Varanasi, Day 5: drop
    if (sector.destinationSlug === 'ayodhya' && totalNights === 4 && totalDays === 5) {
      nightStays[0] = { city: 'Ayodhya', hotel: getBrandedHotelName('Ayodhya', hotelTier) };
      nightStays[1] = { city: 'Ayodhya', hotel: getBrandedHotelName('Ayodhya', hotelTier) };
      nightStays[2] = { city: 'Varanasi', hotel: getBrandedHotelName('Varanasi', hotelTier) };
      nightStays[3] = { city: 'Varanasi', hotel: getBrandedHotelName('Varanasi', hotelTier) };
    }

    // Build the itinerary days: exact length = totalDays
    const itinerary: ItineraryDay[] = [];
    for (let d = 1; d <= totalDays; d++) {
      if (d === totalDays) {
        // Last Day (Departure Day)
        itinerary.push({
          dayNumber: totalDays,
          title: master.departureStage.title,
          description: master.departureStage.desc,
          meals: ['Breakfast'],
          activities: master.departureStage.acts,
          hotel: 'Check-out completed',
          transfers: 'Private AC Cab Departure Airport / Station Transfer'
        });
      } else {
        // Sightseeing / Transfer Day
        let stageIdx = 0;
        if (d === 1) {
          stageIdx = 0;
        } else if (d === totalDays - 1 && sector.destinationSlug === 'kerala') {
          stageIdx = 3; // Houseboat day
        } else if (d === totalDays - 1 && sector.destinationSlug === 'kashmir') {
          stageIdx = 5; // Houseboat day
        } else {
          stageIdx = (d - 1) % stages.length;
        }

        // Exact match for Ayodhya 4N/5D
        if (sector.destinationSlug === 'ayodhya' && totalDays === 5) {
          if (d === 1) stageIdx = 0;
          if (d === 2) stageIdx = 1;
          if (d === 3) stageIdx = 2; // Prayagraj Sangam & drive to Varanasi
          if (d === 4) stageIdx = 3; // Kashi Vishwanath & Ganga Aarti
        }

        const stg = stages[stageIdx] || stages[0];
        const assignedHotel = nightStays[d - 1].hotel;
        const meals = d === 1 ? ['Dinner'] : stg.stayCity?.includes('Houseboat') ? ['Breakfast', 'Lunch', 'Dinner'] : ['Breakfast'];

        itinerary.push({
          dayNumber: d,
          title: stg.title,
          description: stg.desc,
          meals: meals,
          activities: stg.acts,
          hotel: assignedHotel,
          transfers: stg.transfers || (d === 1 ? 'Private AC Cab Airport / Station Meet & Greet' : 'Dedicated Private AC Cab for Full Day Excursion & Transfers')
        });
      }
    }

    // Calculate covered cities in chronological order
    const coveredSet = new Set<string>();
    nightStays.forEach((ns) => {
      const cleanCity = ns.city.replace(' Houseboat', '').replace(' Desert Camp', '');
      coveredSet.add(cleanCity);
    });
    // Add all route cities actively visited in the itinerary days (e.g. Gulmarg, Sonamarg, Prayagraj, etc.)
    itinerary.forEach((day) => {
      master.routeCities.forEach((rc) => {
        if (
          day.title.toLowerCase().includes(rc.toLowerCase()) ||
          day.description.toLowerCase().includes(rc.toLowerCase())
        ) {
          coveredSet.add(rc);
        }
      });
    });
    if (sector.destinationSlug === 'ayodhya' && totalDays >= 4) {
      coveredSet.add('Prayagraj');
    }
    const coveredCities = Array.from(coveredSet);
    const citySlugs = coveredCities.map((c) => slugifyCity(c));
    const entryCity = coveredCities[0] || master.entryCity;
    const exitCity = coveredCities[coveredCities.length - 1] || master.exitCity;

    // Group consecutive night stays for hotels array
    const hotels: { name: string; city: string; rating: string; nights: number }[] = [];
    nightStays.forEach((ns) => {
      const lastHotel = hotels[hotels.length - 1];
      if (lastHotel && lastHotel.name === ns.hotel) {
        lastHotel.nights += 1;
      } else {
        hotels.push({
          name: ns.hotel,
          city: ns.city,
          rating: hotelTier,
          nights: 1
        });
      }
    });

    const circuitTitle = coveredCities.length > 1
      ? `${coveredCities.slice(0, 3).join(', ')} Circuit`
      : `${coveredCities[0]} Premier Holiday`;

    return {
      coveredCities,
      citySlugs,
      entryCity,
      exitCity,
      hotels,
      itinerary,
      highlights: master.highlights,
      inclusions: [
        `Accommodation in verified ${hotelTier} hotels / resorts on twin/double sharing`,
        'Daily complimentary buffet / fixed-menu breakfast (CP Plan) at all hotels',
        ...(sector.destinationSlug === 'kerala' ? ['1 Night private deluxe backwater houseboat with all meals (Lunch, Tea, Dinner, Breakfast)'] : []),
        ...(sector.destinationSlug === 'kashmir' ? ['1 Night stay in traditional carved Deluxe Dal Lake Houseboat with 1-hr Shikara ride'] : []),
        ...(sector.destinationSlug === 'andaman' ? ['Inter-island luxury high-speed catamaran ferry tickets (Makruzz / Nautika)'] : []),
        'Full tour in dedicated Private AC Cab with commercial permit and experienced chauffeur',
        'All toll taxes, inter-state permit charges, driver allowances and parking fees',
        'Applicable GST (5%) and state tourism service levies'
      ],
      exclusions: [
        'Airfare / Train tickets to arrival city and from departure destination',
        'Monument entry tickets, camera permits, and optional adventure sports (ropeway, rafting, scuba)',
        'Any special pooja passes, temple VIP protocol fees, or personal porterage',
        'Personal expenses such as laundry, phone calls, room service, alcoholic beverages and tips',
        'Any cost arising due to unforeseen weather disruptions, flight cancellations or roadblocks'
      ],
      circuitTitle
    };
  }

  // Fallback (if any unknown sector)
  const defaultCity = sector.cities[pkgIndex % sector.cities.length];
  const totalDays = durationDays;
  const totalNights = durationNights;
  const coveredCities = [defaultCity];
  const citySlugs = [slugifyCity(defaultCity)];

  return {
    coveredCities,
    citySlugs,
    entryCity: defaultCity,
    exitCity: defaultCity,
    hotels: [
      {
        name: getBrandedHotelName(defaultCity, hotelTier),
        city: defaultCity,
        rating: hotelTier,
        nights: totalNights
      }
    ],
    itinerary: Array.from({ length: totalDays }, (_, i) => ({
      dayNumber: i + 1,
      title: i === 0 ? `Arrival in ${defaultCity}` : i === totalDays - 1 ? `Departure from ${defaultCity}` : `Day ${i + 1}: ${defaultCity} Sightseeing`,
      description: `Tour experience in ${defaultCity}.`,
      meals: i === 0 ? ['Dinner'] : ['Breakfast'],
      activities: [`${defaultCity} Sightseeing`],
      hotel: i === totalDays - 1 ? 'Check-out completed' : getBrandedHotelName(defaultCity, hotelTier),
      transfers: 'Private AC Cab'
    })),
    highlights: [`Verified ${defaultCity} Tour`],
    inclusions: ['Accommodation', 'Breakfast', 'Private AC Cab'],
    exclusions: ['Airfare', 'Personal expenses'],
    circuitTitle: `${defaultCity} Tour`
  };
}
