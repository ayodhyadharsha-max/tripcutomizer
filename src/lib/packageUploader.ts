import { HolidayPackage, ItineraryDay } from '@/data/packagesData';

// Slugify helper
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Sample CSV Template Data
export const SAMPLE_CSV_CONTENT = `name,destination,destinationSlug,durationDays,durationNights,startingPrice,discountPrice,theme,hotelCategory,mealPlan,heroImage,highlights,inclusions,exclusions,itinerary
"Kerala Backwaters & Hills MMT Special","Kerala","kerala",6,5,24999,29999,"Honeymoon Special","4-Star Deluxe","Breakfast & Dinner Included","/destinations/kerala.jpg","Private Alleppey Houseboat; Munnar Tea Gardens; Thekkady Spice Walk","4-Star Hotel & Houseboat stay; Daily Breakfast & Dinner; Private AC Sedan cab transfers; Alleppey backwater cruise","Airfare / Train tickets; Monument entry tickets; Personal expenses","Day 1: Arrival at Cochin & transfer to Munnar hills | Day 2: Munnar Eravikulam National Park & Mattupetty Dam | Day 3: Munnar to Thekkady spice plantation tour | Day 4: Thekkady to Alleppey Houseboat check-in & cruise | Day 5: Alleppey to Kovalam beach resort | Day 6: Trivandrum / Cochin airport departure"
"Kashmir Paradise Valley MMT Special","Kashmir","kashmir",5,4,22999,26999,"Family Package","4-Star Deluxe","Breakfast & Dinner Included","/destinations/kashmir.jpg","Dal Lake Luxury Houseboat; Gulmarg Gondola Cable Car; Pahalgam Valley","4-Star Hotel Stay; Dal Lake Houseboat with 1-hr Shikara ride; All transfers by private vehicle; Daily MAP meals","Gondola phase-2 tickets; Pony rides in Gulmarg; Flight tickets","Day 1: Arrival at Srinagar airport & Dal Lake Houseboat check-in | Day 2: Srinagar to Gulmarg day excursion & Gondola ride | Day 3: Srinagar to Pahalgam Valley of Shepherds | Day 4: Pahalgam to Srinagar Mughal Gardens sightseeing | Day 5: Srinagar departure transfer"
"Dubai Grand Explorer MMT Special","Dubai","dubai",5,4,28999,34999,"Luxury Escape","4-Star Deluxe","Daily Buffet Breakfast","/destinations/dubai.jpg","Burj Khalifa 124th Floor; 4x4 Desert Safari with BBQ; Marina Dhow Cruise","4-Star City Hotel Stay; Daily Breakfast; Desert Safari with BBQ Dinner; Marina Dhow Cruise with Dinner; Airport transfers","UAE Tourist Visa; Tourism Dirham fee; Flight tickets","Day 1: Arrival at Dubai International Airport & hotel check-in | Day 2: Dubai half-day city tour & Burj Khalifa 124th floor visit | Day 3: Morning at leisure & evening 4x4 Desert Safari with BBQ dinner | Day 4: Dubai Mall shopping & evening Marina Dhow Cruise with dinner | Day 5: Dubai airport departure transfer"`;

// Sample JSON Template Data
export const SAMPLE_JSON_CONTENT = [
  {
    name: "Kerala Backwaters & Hills MMT Special",
    destination: "Kerala",
    destinationSlug: "kerala",
    durationDays: 6,
    durationNights: 5,
    startingPrice: 24999,
    discountPrice: 29999,
    theme: "Honeymoon Special",
    hotelCategory: "4-Star Deluxe",
    mealPlan: "Breakfast & Dinner Included",
    heroImage: "/destinations/kerala.jpg",
    highlights: [
      "Private Alleppey Houseboat cruise with candlelight dinner",
      "Munnar Tea Gardens & Eravikulam National Park visit",
      "Thekkady spice plantation walk & Periyar Lake boat ride"
    ],
    inclusions: [
      "5 Nights accommodation in 4-Star hotels & luxury houseboat",
      "Daily buffet breakfast & dinner (MAP plan)",
      "Private AC Sedan vehicle for all transfers and sightseeing",
      "Toll taxes, parking, driver allowance, and GST included"
    ],
    exclusions: [
      "Flight or train tickets",
      "Monument entrance fees & camera tickets",
      "Personal expenses, laundry, and tips"
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "Cochin Arrival & Scenic Transfer to Munnar (130 km / 4 hrs)",
        description: "Arrive at Cochin Airport / Railway Station. Meet our representative and drive through rubber plantations and Cheeyappara waterfalls to Munnar. Check in at your 4-star resort.",
        meals: ["Dinner"],
        activities: ["Cheeyappara Waterfalls", "Valara Waterfalls", "Tea Garden views"],
        hotel: "Amber Dale Luxury Resort & Spa (4★)",
        transfers: "Private AC Sedan"
      },
      {
        dayNumber: 2,
        title: "Munnar Full-Day Sightseeing & Eravikulam National Park",
        description: "Visit Eravikulam National Park, home of the Nilgiri Tahr. Explore the Tata Tea Museum, Mattupetty Dam, Echo Point, and Kundala Lake with optional boating.",
        meals: ["Breakfast", "Dinner"],
        activities: ["Eravikulam National Park", "Tea Museum", "Mattupetty Dam", "Echo Point"],
        hotel: "Amber Dale Luxury Resort & Spa (4★)",
        transfers: "Private AC Sedan"
      },
      {
        dayNumber: 3,
        title: "Munnar to Thekkady Spice Country (90 km / 3 hrs)",
        description: "Drive to Thekkady. Check in to your resort and explore guided spice plantations with cardamom, pepper, and cinnamon. Enjoy evening Periyar Lake boating.",
        meals: ["Breakfast", "Dinner"],
        activities: ["Spice Plantation Tour", "Periyar Lake Boating", "Kathakali cultural show"],
        hotel: "The Elephant Court / Poetree Sarovar (4★)",
        transfers: "Private AC Sedan"
      },
      {
        dayNumber: 4,
        title: "Thekkady to Alleppey Houseboat Backwaters (140 km / 4 hrs)",
        description: "Drive to Alleppey jetty. Board your private luxury houseboat at 12:00 PM. Cruise through palm-fringed canals, paddy fields, and lagoons with traditional Kerala lunch and dinner.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: ["Vembanad Lake Cruise", "Paddy field canal views", "Sunset on backwaters"],
        hotel: "Private Premium AC Deluxe Houseboat",
        transfers: "Private AC Sedan"
      },
      {
        dayNumber: 5,
        title: "Alleppey to Kovalam Beach via Trivandrum (160 km / 4.5 hrs)",
        description: "After breakfast, disembark at 9:00 AM and drive to Kovalam. Check in at your beach resort. Spend the evening relaxing at Lighthouse Beach and Hawah Beach.",
        meals: ["Breakfast", "Dinner"],
        activities: ["Lighthouse Beach", "Hawah Beach", "Sunset seaside leisure"],
        hotel: "Uday Samudra Leisure Beach Hotel (4★)",
        transfers: "Private AC Sedan"
      },
      {
        dayNumber: 6,
        title: "Kovalam / Trivandrum Airport Departure",
        description: "Enjoy breakfast overlooking the Arabian Sea. Visit Padmanabhaswamy Temple in Trivandrum (optional) and transfer to Trivandrum / Cochin Airport for departure.",
        meals: ["Breakfast"],
        activities: ["Beachwalk", "Padmanabhaswamy Temple visit", "Airport departure"],
        hotel: "Departure",
        transfers: "Private AC Sedan"
      }
    ]
  }
];

// Trigger Download of Sample CSV
export function downloadSampleCsv(): void {
  const blob = new Blob([SAMPLE_CSV_CONTENT], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'tripcustomizer_mmt_packages_template.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Trigger Download of Sample JSON
export function downloadSampleJson(): void {
  const jsonStr = JSON.stringify(SAMPLE_JSON_CONTENT, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'tripcustomizer_mmt_packages_template.json');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Parse CSV content into HolidayPackage[]
export function parsePackagesFromCsv(csvText: string): { packages: HolidayPackage[]; errors: string[] } {
  const errors: string[] = [];
  const packages: HolidayPackage[] = [];

  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) {
    return { packages: [], errors: ['CSV file is empty or missing data rows.'] };
  }

  // Parse CSV line taking into account quoted strings
  const parseCsvLine = (text: string): string[] => {
    const result: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        if (inQuotes && text[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (c === ',' && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += c;
      }
    }
    result.push(cur.trim());
    return result;
  };

  const headers = parseCsvLine(lines[0]).map((h) => h.toLowerCase().replace(/[^a-z0-9_]/g, ''));

  for (let rowIdx = 1; rowIdx < lines.length; rowIdx++) {
    const rawLine = lines[rowIdx].trim();
    if (!rawLine) continue;

    const values = parseCsvLine(rawLine);
    const rowMap: Record<string, string> = {};
    headers.forEach((h, idx) => {
      rowMap[h] = values[idx] || '';
    });

    const name = rowMap['name'] || rowMap['packagename'] || rowMap['title'];
    const destination = rowMap['destination'] || rowMap['city'] || 'India';
    if (!name) {
      errors.push(`Row ${rowIdx + 1}: Package Name is required.`);
      continue;
    }

    const durationDays = parseInt(rowMap['durationdays'] || rowMap['days'] || '5', 10) || 5;
    const durationNights = parseInt(rowMap['durationnights'] || rowMap['nights'] || String(durationDays - 1), 10) || (durationDays - 1);
    const startingPrice = parseFloat(rowMap['startingprice'] || rowMap['price'] || '19999') || 19999;
    const discountPrice = parseFloat(rowMap['discountprice'] || rowMap['mrpprice'] || '0') || Math.round(startingPrice * 1.18);
    const theme = rowMap['theme'] || rowMap['category'] || 'Holiday Explorer';
    const hotelCategory = rowMap['hotelcategory'] || '4-Star Deluxe';
    const mealPlan = rowMap['mealplan'] || 'Breakfast Included';
    const destinationSlug = rowMap['destinationslug'] || slugify(destination);
    const heroImage = rowMap['heroimage'] || `/destinations/${destinationSlug}.jpg`;

    // Parse semicolon / pipe separated lists
    const parseList = (str: string): string[] => {
      if (!str) return [];
      return str
        .split(/[;|]/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
    };

    const highlights = parseList(rowMap['highlights']);
    const inclusions = parseList(rowMap['inclusions']);
    const exclusions = parseList(rowMap['exclusions']);

    // Parse itinerary string (e.g. "Day 1: ... | Day 2: ...")
    const itineraryRaw = parseList(rowMap['itinerary']);
    const itinerary: ItineraryDay[] = itineraryRaw.map((dayText, dIdx) => {
      const parts = dayText.split(/[:-]/);
      const title = parts.length > 1 ? parts.slice(1).join(' - ').trim() : dayText;
      return {
        dayNumber: dIdx + 1,
        title: title || `Day ${dIdx + 1} Sightseeing`,
        description: `Explore top attractions, transfers, and activities in ${destination}.`,
        meals: ['Breakfast'],
        activities: [title || 'Local Sightseeing'],
        hotel: `${destination} 4-Star Hotel / Resort`,
        transfers: 'Private AC Cab'
      };
    });

    // Fallback if itinerary was empty in CSV
    if (itinerary.length === 0) {
      for (let d = 1; d <= durationDays; d++) {
        itinerary.push({
          dayNumber: d,
          title: d === 1 ? `Arrival in ${destination}` : d === durationDays ? `${destination} Departure` : `${destination} Exploration & Sightseeing`,
          description: `Planned sightseeing, transfers, and activities across ${destination}.`,
          meals: d === durationDays ? ['Breakfast'] : ['Breakfast', 'Dinner'],
          activities: [`Day ${d} Sightseeing in ${destination}`],
          hotel: `${destination} 4-Star Hotel`,
          transfers: 'Private AC Cab'
        });
      }
    }

    const baseNameSlug = slugify(name);
    const customSlug = rowMap['slug'] ? slugify(rowMap['slug']) : null;
    const slug = customSlug || `${destinationSlug}-${baseNameSlug}-${durationDays}d${durationNights}n-mmt-${rowIdx}`;
    const customId = rowMap['id'] ? rowMap['id'].trim() : null;
    const uniqueId = customId || `pkg-mmt-${slug}`;

    packages.push({
      id: uniqueId,
      name,
      slug,
      destination,
      destinationSlug,
      state: destination,
      stateSlug: destinationSlug,
      country: rowMap['country'] || 'India',
      region: rowMap['region'] || 'India',
      isInternational: rowMap['isinternational'] === 'true' || rowMap['international'] === 'true',
      durationDays,
      durationNights,
      startingPrice,
      discountPrice,
      rating: 4.8,
      reviewsCount: 140 + (rowIdx * 7) % 100,
      heroImage,
      gallery: [heroImage],
      highlights: highlights.length > 0 ? highlights : [`Top sights in ${destination}`, '4-Star Stays', 'Private Transfers'],
      inclusions: inclusions.length > 0 ? inclusions : ['Accommodation', 'Breakfast', 'Private Cab Transfers', 'Toll & Taxes'],
      exclusions: exclusions.length > 0 ? exclusions : ['Airfare', 'Personal Expenses', 'Entry Tickets'],
      theme,
      hotelCategory,
      mealPlan,
      flightsIncluded: false,
      transfersIncluded: true,
      departureCity: rowMap['departurecity'] || 'Flexible Origin',
      batch_source: 'mmt_sync', // CRITICAL: Tag as MMT Sync
      itinerary,
      hotels: [
        { name: `${destination} 4-Star Deluxe Resort`, city: destination, rating: '4.8', nights: durationNights }
      ],
      faqs: [
        {
          question: `Can this ${name} package be customized?`,
          answer: `Yes, you can customize the hotel tier, vehicle type, and daily sightseeing based on your personal travel preferences.`
        }
      ]
    });
  }

  return { packages, errors };
}

// Parse JSON content into HolidayPackage[]
export function parsePackagesFromJson(jsonText: string): { packages: HolidayPackage[]; errors: string[] } {
  const errors: string[] = [];
  const packages: HolidayPackage[] = [];

  try {
    const parsed = JSON.parse(jsonText);
    const items: any[] = Array.isArray(parsed) ? parsed : parsed.packages && Array.isArray(parsed.packages) ? parsed.packages : [parsed];

    if (items.length === 0) {
      return { packages: [], errors: ['JSON does not contain any package items.'] };
    }

    items.forEach((item, idx) => {
      if (!item.name) {
        errors.push(`Item ${idx + 1}: "name" is required.`);
        return;
      }
      const destination = item.destination || 'India';
      const destinationSlug = item.destinationSlug || slugify(destination);
      const durationDays = Number(item.durationDays) || (item.itinerary ? item.itinerary.length : 5);
      const durationNights = Number(item.durationNights) || (durationDays - 1);
      const startingPrice = Number(item.startingPrice) || 19999;
      const discountPrice = Number(item.discountPrice) || Math.round(startingPrice * 1.18);

      const baseNameSlug = slugify(item.name);
      const customSlug = item.slug ? slugify(String(item.slug)) : null;
      const slug = customSlug || `${destinationSlug}-${baseNameSlug}-${durationDays}d${durationNights}n-mmt-${idx + 1}`;
      const uniqueId = item.id ? String(item.id).trim() : `pkg-mmt-${slug}`;

      const itinerary: ItineraryDay[] = Array.isArray(item.itinerary) && item.itinerary.length > 0
        ? item.itinerary.map((d: any, dIdx: number) => ({
            dayNumber: d.dayNumber || dIdx + 1,
            title: d.title || `Day ${dIdx + 1} Sightseeing`,
            description: d.description || `Explore ${destination} highlights and transfers.`,
            meals: Array.isArray(d.meals) ? d.meals : ['Breakfast'],
            activities: Array.isArray(d.activities) ? d.activities : [d.title || 'Sightseeing'],
            hotel: d.hotel || `${destination} 4-Star Hotel`,
            transfers: d.transfers || 'Private AC Cab'
          }))
        : [];

      if (itinerary.length === 0) {
        for (let d = 1; d <= durationDays; d++) {
          itinerary.push({
            dayNumber: d,
            title: d === 1 ? `Arrival in ${destination}` : d === durationDays ? `${destination} Departure` : `${destination} Sightseeing & Excursion`,
            description: `Planned transfers, meals, and visits across ${destination}.`,
            meals: d === durationDays ? ['Breakfast'] : ['Breakfast', 'Dinner'],
            activities: [`Day ${d} Sightseeing in ${destination}`],
            hotel: `${destination} 4-Star Hotel`,
            transfers: 'Private AC Cab'
          });
        }
      }

      packages.push({
        id: uniqueId,
        name: item.name,
        slug,
        destination,
        destinationSlug,
        state: item.state || destination,
        stateSlug: item.stateSlug || destinationSlug,
        country: item.country || 'India',
        region: item.region || 'India',
        isInternational: Boolean(item.isInternational),
        durationDays,
        durationNights,
        startingPrice,
        discountPrice,
        rating: Number(item.rating) || 4.8,
        reviewsCount: Number(item.reviewsCount) || 120,
        heroImage: item.heroImage || `/destinations/${destinationSlug}.jpg`,
        gallery: Array.isArray(item.gallery) && item.gallery.length > 0 ? item.gallery : [item.heroImage || `/destinations/${destinationSlug}.jpg`],
        highlights: Array.isArray(item.highlights) && item.highlights.length > 0 ? item.highlights : [`Top ${destination} sights`, 'Private Cabs', '4-Star Stays'],
        inclusions: Array.isArray(item.inclusions) && item.inclusions.length > 0 ? item.inclusions : ['4-Star Accommodation', 'Daily Breakfast', 'Private Cab Transfers'],
        exclusions: Array.isArray(item.exclusions) && item.exclusions.length > 0 ? item.exclusions : ['Airfare', 'Personal Expenses'],
        theme: item.theme || 'Holiday Explorer',
        hotelCategory: item.hotelCategory || '4-Star Deluxe',
        mealPlan: item.mealPlan || 'Breakfast Included',
        flightsIncluded: Boolean(item.flightsIncluded),
        transfersIncluded: item.transfersIncluded !== undefined ? Boolean(item.transfersIncluded) : true,
        departureCity: item.departureCity || 'Flexible Origin',
        batch_source: 'mmt_sync', // CRITICAL: Tag as MMT Sync
        itinerary,
        hotels: Array.isArray(item.hotels) && item.hotels.length > 0
          ? item.hotels
          : [{ name: `${destination} 4-Star Deluxe Resort`, city: destination, rating: '4.8', nights: durationNights }],
        faqs: Array.isArray(item.faqs) && item.faqs.length > 0
          ? item.faqs
          : [{ question: `Can this package be customized?`, answer: `Yes, all hotel categories, cabs, and sightseeing are 100% customizable.` }]
      });
    });
  } catch (err: any) {
    errors.push(`JSON Parse Error: ${err?.message || 'Invalid JSON format'}`);
  }

  return { packages, errors };
}
