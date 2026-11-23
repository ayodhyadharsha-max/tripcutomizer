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

// Predefined Popular Destinations for MMT Text Parser
export const POPULAR_DESTINATIONS = [
  'Himachal Pradesh',
  'Kerala',
  'Kashmir',
  'Uttar Pradesh',
  'Uttarakhand',
  'Rajasthan',
  'Goa',
  'Andaman & Nicobar',
  'Ladakh',
  'North East & Sikkim',
  'Gujarat',
  'Karnataka & Coorg',
  'Tamil Nadu & Ooty',
  'Dubai & UAE',
  'Bali, Indonesia',
  'Thailand',
  'Vietnam',
  'Singapore',
  'Maldives',
  'Europe & Switzerland',
  'Baku & Azerbaijan',
  'Nepal & Bhutan',
  'Sri Lanka',
];

// Sample MMT Raw Copied Text
export const SAMPLE_MMT_RAW_TEXT = `BEST SELLER
A Memorable Trip to Manali & Kasol
3N/4D
2N Manali • 1N Kasol
3 Star Hotels
Round Trip Cab Transfers Included
Highlights: Solang Valley Excursion • Hadimba Temple & Mall Road • Manikaran Sahib Gurudwara Hot Springs
₹ 14,999 /Person
Total Price ₹ 29,998

---------------------------------------

CUSTOMISABLE
Scenic Munnar Hills & Alleppey Houseboat
4N/5D
2N Munnar • 1N Thekkady • 1N Alleppey Houseboat
4 Star Deluxe Hotels
Daily Buffet Breakfast Included
Highlights: Eravikulam National Park • Tata Tea Gardens • Periyar Lake Boat Ride • Private Houseboat Cruise
₹ 19,499 /Person

---------------------------------------

POPULAR
Kashmir Paradise Valley with Gulmarg Gondola
5N/6D
3N Srinagar • 1N Gulmarg • 1N Pahalgam
4 Star Deluxe & Dal Lake Luxury Houseboat
Daily Breakfast & Dinner Included
Highlights: Dal Lake Shikara Ride • Gulmarg Gondola Cable Car • Betaab Valley Pahalgam • Mughal Gardens
₹ 24,990 /Person`;

// Smart Parser for Raw Text Copied from MakeMyTrip
export function parseRawMmtText(
  rawText: string,
  defaultDestination: string = 'Himachal Pradesh'
): { packages: HolidayPackage[]; errors: string[] } {
  const errors: string[] = [];
  const packages: HolidayPackage[] = [];

  const noiseKeywords = [
    'customisable', 'customizable', 'best seller', 'super saver', 'deal of the day',
    'top rated', 'mmt assured', 'recommended', 'trending', 'family special', 'honeymoon special',
    'flight included', 'without flights', 'exclusive deal', 'popular', 'limited period offer',
    'view details', 'book now', 'select departure', 't&c apply', 'per person on twin sharing',
    'total price', 'emi from', 'starts from', 'starting from'
  ];

  const isNoiseLine = (line: string): boolean => {
    const clean = line.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    if (!clean) return true;
    return noiseKeywords.some((k) => clean === k || clean.startsWith(k + ' ') || clean.endsWith(' ' + k));
  };

  const rawLines = rawText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (rawLines.length === 0) {
    return { packages: [], errors: ['No text provided to parse. Please paste package text from MakeMyTrip.'] };
  }

  // Segment raw lines into individual package blocks
  const blocks: string[][] = [];
  let currentBlock: string[] = [];

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];

    // Explicit markdown/divider lines
    if (/^[-=_\*~]{3,}$/.test(line)) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock);
        currentBlock = [];
      }
      continue;
    }

    const hasPrice = currentBlock.some((l) => /(?:₹|INR|Rs\.?)\s*[\d,]{4,7}/i.test(l));
    const hasDuration = currentBlock.some((l) => /\d+\s*N(?:ights?)?\s*[/•\-&,\s]+\s*\d+\s*D/i.test(l));
    const isDurationLine = /\d+\s*N(?:ights?)?\s*[/•\-&,\s]+\s*\d+\s*D/i.test(line);
    const isPriceLine = /(?:₹|INR|Rs\.?)\s*[\d,]{4,7}/i.test(line);

    // If current block already gathered a full package card (has price & duration), start next package
    if (
      hasPrice &&
      hasDuration &&
      !isDurationLine &&
      !isPriceLine &&
      !isNoiseLine(line) &&
      line.length > 4 &&
      !line.includes('•')
    ) {
      blocks.push(currentBlock);
      currentBlock = [];
    }

    currentBlock.push(line);
  }

  if (currentBlock.length > 0) {
    blocks.push(currentBlock);
  }

  blocks.forEach((bLines, bIdx) => {
    // 1. Extract Package Title / Name
    let name = '';
    for (const l of bLines) {
      if (
        !isNoiseLine(l) &&
        !/\d+\s*N(?:ights?)?\s*[/•\-&,\s]+\s*\d+\s*D/i.test(l) &&
        !/(?:₹|INR|Rs\.?)/i.test(l) &&
        !l.includes('•') &&
        l.length > 3
      ) {
        name = l.replace(/^[\d\.\)\-\s]+/, '').trim();
        break;
      }
    }
    if (!name) name = `${defaultDestination} MMT Explorer Tour ${bIdx + 1}`;

    // 2. Extract Duration (Nights & Days)
    let durationNights = 4;
    let durationDays = 5;
    for (const l of bLines) {
      const durMatch = l.match(/(\d+)\s*N(?:ights?)?\s*[/•\-&,\s]+\s*(\d+)\s*D/i);
      if (durMatch) {
        durationNights = parseInt(durMatch[1], 10);
        durationDays = parseInt(durMatch[2], 10);
        break;
      }
      const daysMatch = l.match(/(\d+)\s*D(?:ays?)?\s*[/•\-&,\s]+\s*(\d+)\s*N/i);
      if (daysMatch) {
        durationDays = parseInt(daysMatch[1], 10);
        durationNights = parseInt(daysMatch[2], 10);
        break;
      }
    }

    // 3. Extract Stays / Covered Cities
    const stayCities: { nights: number; city: string }[] = [];
    for (const l of bLines) {
      if (/\d+\s*N\s+[A-Za-z]/i.test(l)) {
        const parts = l.split(/[•,\|\-]/);
        for (const p of parts) {
          const m = p.trim().match(/(\d+)\s*N\s+([A-Za-z\s]+)/i);
          if (m) {
            stayCities.push({ nights: parseInt(m[1], 10), city: m[2].trim() });
          }
        }
      }
    }

    // 4. Extract Starting and Discount Prices
    const prices: number[] = [];
    for (const l of bLines) {
      const matches = l.matchAll(/(?:₹|INR|Rs\.?)\s*([\d,]{4,7})/gi);
      for (const m of matches) {
        const num = parseInt(m[1].replace(/,/g, ''), 10);
        if (num >= 3000 && num <= 500000) {
          prices.push(num);
        }
      }
    }
    const startingPrice = prices.length > 0 ? Math.min(...prices) : durationNights * 3800 + 4999;
    const discountPrice = prices.length > 1 ? Math.max(...prices) : Math.round(startingPrice * 1.18);

    // 5. Star Category
    let hotelCategory = '4-Star Deluxe';
    const allText = bLines.join(' ');
    if (/5\s*(?:Star|★)|Luxury/i.test(allText)) {
      hotelCategory = '5-Star Luxury';
    } else if (name.toLowerCase().includes('premium')) {
      hotelCategory = '4-Star Deluxe';
    } else if (/3\s*(?:Star|★)/i.test(allText) && !/premium|luxury/i.test(name)) {
      hotelCategory = '3-Star Standard';
    }

    // 6. Meal Plan
    let mealPlan = 'Daily Breakfast Included';
    if (/All Meals|AP Plan|Breakfast, Lunch & Dinner/i.test(allText)) {
      mealPlan = 'All Meals Included (Breakfast, Lunch & Dinner)';
    } else if (/Breakfast & Dinner|MAP Plan|Half Board/i.test(allText)) {
      mealPlan = 'Daily Breakfast & Dinner Included';
    }

    // 7. Extract Highlights / Activities
    const highlights: string[] = [];
    for (const l of bLines) {
      if (/highlights?:?/i.test(l) || /activities?:?/i.test(l)) {
        const cleaned = l.replace(/^.*?(?:highlights?:?|activities?:?)/i, '').trim();
        cleaned.split(/[•|;]/).forEach((h) => {
          const tr = h.trim();
          if (tr.length > 3) highlights.push(tr);
        });
      } else if (l.includes('•') && !/\d+N/i.test(l)) {
        l.split('•').forEach((h) => {
          const tr = h.trim();
          if (tr.length > 3 && !isNoiseLine(tr)) highlights.push(tr);
        });
      }
    }

    // Fallback highlights if none parsed
    if (highlights.length === 0) {
      if (stayCities.length > 0) {
        stayCities.forEach((sc) => {
          highlights.push(`${sc.city} Local Sightseeing & Top Attractions`);
        });
      } else {
        highlights.push(`${defaultDestination} Scenic Landscapes & Sights`);
        highlights.push('Private AC Cab Transfers');
        highlights.push('Handpicked Comfortable Stays');
      }
    }

    // Destination & Slugs
    const destination = defaultDestination || (stayCities[0] ? stayCities[0].city : 'India');
    const destinationSlug = slugify(destination);
    const baseNameSlug = slugify(name);
    const slug = `${destinationSlug}-${baseNameSlug}-${durationDays}d${durationNights}n-mmt-${bIdx + 1}`;
    const id = `pkg-mmt-${slug}`;

    const isInternational = [
      'dubai', 'uae', 'bali', 'indonesia', 'thailand', 'vietnam', 'singapore', 'maldives',
      'europe', 'switzerland', 'baku', 'azerbaijan', 'almaty', 'kazakhstan', 'sri-lanka', 'nepal', 'bhutan'
    ].some((s) => destinationSlug.includes(s));

    // 8. Synthesize Structured Day-by-Day Itinerary
    const itinerary: ItineraryDay[] = [];
    const primaryCity = stayCities[0]?.city || destination;

    // Day 1: Arrival & check-in
    itinerary.push({
      dayNumber: 1,
      title: `Arrival & Scenic Transfer to ${primaryCity}`,
      description: `Arrive at the nearest airport or railway station. Meet our tour representative and proceed via private cab to ${primaryCity}. Check in at your verified ${hotelCategory} accommodation and relax after your journey.`,
      meals: mealPlan.includes('Dinner') ? ['Dinner'] : ['Welcome Drink on Arrival'],
      activities: [`Arrival in ${primaryCity}`, 'Hotel Check-in & Leisure'],
      hotel: `${primaryCity} ${hotelCategory} Hotel / Resort`,
      transfers: 'Private AC Cab Transfers',
    });

    // Intermediate Days: Sightseeing based on stay split & highlights
    for (let d = 2; d < durationDays; d++) {
      const stayIndex = Math.min(Math.floor(((d - 2) / Math.max(durationDays - 2, 1)) * stayCities.length), stayCities.length - 1);
      const activeCity = stayCities[stayIndex]?.city || primaryCity;
      const highlightItem = highlights[(d - 2) % highlights.length] || `${activeCity} Exploration`;

      itinerary.push({
        dayNumber: d,
        title: `Day ${d}: ${activeCity} Exploration - ${highlightItem}`,
        description: `Enjoy delicious morning breakfast at hotel. Embark on a private sightseeing tour visiting key highlights including ${highlightItem} and local scenic view points. Return to hotel in the evening.`,
        meals: mealPlan.includes('Dinner') ? ['Breakfast', 'Dinner'] : ['Breakfast'],
        activities: [highlightItem, `${activeCity} Scenic Tour`],
        hotel: `${activeCity} ${hotelCategory} Hotel / Resort`,
        transfers: 'Private AC Vehicle for Sightseeing',
      });
    }

    // Final Day: Check-out & departure
    itinerary.push({
      dayNumber: durationDays,
      title: `Day ${durationDays}: Hotel Check-out & Departure Transfer`,
      description: `Enjoy buffet breakfast at hotel. Complete check-out formalities. Our private cab will transfer you to the airport or railway station for your onward return journey with pleasant memories.`,
      meals: ['Breakfast'],
      activities: ['Hotel Check-out', 'Departure Airport / Station Transfer'],
      hotel: `${primaryCity} ${hotelCategory} Hotel`,
      transfers: 'Private AC Cab Drop',
    });

    // 9. Standard Inclusions & Exclusions
    const inclusions = [
      `${durationNights} Nights stay in verified ${hotelCategory} hotels`,
      mealPlan,
      'Private AC Cab for all inter-city transfers and scheduled sightseeing',
      'All toll taxes, parking fees, fuel surcharges, and driver allowances included',
      '24x7 Trip Customizer on-trip dedicated concierge assistance',
    ];

    const exclusions = [
      'Airfare or train tickets (unless explicitly selected in itinerary)',
      'Monument entrance tickets, ropeway/cable car passes, and safari charges',
      'Personal expenses (laundry, room service, telephone calls, tips)',
      'Any meals or beverages not explicitly listed in package inclusions',
    ];

    // Hotels array
    const hotelsList = stayCities.length > 0
      ? stayCities.map((sc) => ({
          name: `${sc.city} ${hotelCategory} Hotel`,
          city: sc.city,
          rating: '4.8',
          nights: sc.nights,
        }))
      : [{ name: `${destination} ${hotelCategory} Resort`, city: destination, rating: '4.8', nights: durationNights }];

    packages.push({
      id,
      name,
      slug,
      destination,
      destinationSlug,
      state: destination,
      stateSlug: destinationSlug,
      country: isInternational ? destination : 'India',
      region: isInternational ? 'International' : 'India',
      isInternational,
      durationDays,
      durationNights,
      startingPrice,
      discountPrice,
      rating: 4.8,
      reviewsCount: 120 + ((bIdx * 11) % 60),
      heroImage: `/destinations/${destinationSlug}.jpg`,
      gallery: [`/destinations/${destinationSlug}.jpg`],
      highlights,
      inclusions,
      exclusions,
      theme: 'Holiday Explorer',
      hotelCategory,
      mealPlan,
      flightsIncluded: false,
      transfersIncluded: true,
      departureCity: 'Flexible Origin',
      batch_source: 'mmt_sync',
      itinerary,
      hotels: hotelsList,
      faqs: [
        {
          question: `Can this ${name} package be customized?`,
          answer: `Yes, all hotel categories, cab types, duration, and sightseeing spots are 100% customizable upon request.`,
        },
        {
          question: `What vehicle is provided for transfers?`,
          answer: `Dedicated private AC Sedan (Dzire/Etios) for 2-4 travelers or AC SUV (Innova/Ertiga) for 5-7 travelers.`,
        },
      ],
    });
  });

  return { packages, errors };
}

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

  // Strip UTF-8 BOM if present
  const cleanCsvText = csvText.replace(/^\uFEFF/, '').trim();
  const lines = cleanCsvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) {
    return { packages: [], errors: ['CSV file is empty or missing data rows.'] };
  }

  // Detect delimiter: semicolon if first line has ; and no commas
  const firstLine = lines[0];
  const delimiter = firstLine.includes(';') && !firstLine.includes(',') ? ';' : ',';

  // Parse CSV line taking into account quoted strings
  const parseCsvLine = (text: string, delim: string = ','): string[] => {
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
      } else if (c === delim && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += c;
      }
    }
    result.push(cur.trim());
    return result;
  };

  const headers = parseCsvLine(lines[0], delimiter).map((h) => h.toLowerCase().replace(/[^a-z0-9]/g, ''));

  const cleanNum = (val: any, fallback: number = 0): number => {
    if (typeof val === 'number') return isNaN(val) ? fallback : val;
    const str = String(val || '').replace(/[^0-9.]/g, '');
    const num = parseFloat(str);
    return isNaN(num) ? fallback : num;
  };

  for (let rowIdx = 1; rowIdx < lines.length; rowIdx++) {
    const rawLine = lines[rowIdx].trim();
    if (!rawLine) continue;

    const values = parseCsvLine(rawLine, delimiter);
    const rowMap: Record<string, string> = {};
    headers.forEach((h, idx) => {
      rowMap[h] = values[idx] || '';
    });

    const name =
      rowMap['name'] ||
      rowMap['packagename'] ||
      rowMap['title'] ||
      rowMap['tourname'] ||
      rowMap['package'] ||
      rowMap['tour'] ||
      rowMap['holidayname'] ||
      rowMap['holiday'];

    const destination =
      rowMap['destination'] ||
      rowMap['destinationslug'] ||
      rowMap['city'] ||
      rowMap['place'] ||
      rowMap['location'] ||
      rowMap['state'] ||
      'India';

    if (!name) {
      errors.push(`Row ${rowIdx + 1}: Package Name is required.`);
      continue;
    }

    // Smart duration parsing (e.g. "5 Days", "4N/5D", "5", etc.)
    const durRaw = String(rowMap['durationdays'] || rowMap['duration'] || rowMap['days'] || '').trim();
    const dMatch = durRaw.match(/(\d+)\s*(?:d|days?)/i);
    const nMatch = durRaw.match(/(\d+)\s*(?:n|nights?)/i);
    let durationDays = 5;
    if (dMatch) durationDays = parseInt(dMatch[1], 10);
    else if (parseInt(durRaw, 10)) durationDays = parseInt(durRaw, 10);

    const nightsRaw = String(rowMap['durationnights'] || rowMap['nights'] || '').trim();
    let durationNights = Math.max(durationDays - 1, 1);
    if (nMatch) durationNights = parseInt(nMatch[1], 10);
    else if (nightsRaw && parseInt(nightsRaw, 10)) durationNights = parseInt(nightsRaw, 10);

    const startingPrice = cleanNum(
      rowMap['startingprice'] || rowMap['price'] || rowMap['cost'] || rowMap['amount'],
      19999
    );
    const discountPrice = cleanNum(
      rowMap['discountprice'] || rowMap['mrpprice'] || rowMap['mrp'] || rowMap['originalprice'],
      Math.round(startingPrice * 1.18)
    );

    const theme = rowMap['theme'] || rowMap['category'] || rowMap['type'] || 'Holiday Explorer';
    const hotelCategory = rowMap['hotelcategory'] || rowMap['hotel'] || '4-Star Deluxe';
    const mealPlan = rowMap['mealplan'] || rowMap['meals'] || 'Breakfast Included';
    const destinationSlug = rowMap['destinationslug'] ? slugify(rowMap['destinationslug']) : slugify(destination);
    const heroImage = rowMap['heroimage'] || `/destinations/${destinationSlug}.jpg`;

    // Parse semicolon / pipe separated lists
    const parseList = (str: string): string[] => {
      if (!str) return [];
      return str
        .split(/[;|]/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
    };

    const highlights = parseList(rowMap['highlights'] || rowMap['activities']);
    const inclusions = parseList(rowMap['inclusions'] || rowMap['includes']);
    const exclusions = parseList(rowMap['exclusions'] || rowMap['excludes']);

    // Parse itinerary string (e.g. "Day 1: ... | Day 2: ...")
    const itineraryRaw = parseList(rowMap['itinerary'] || rowMap['days']);
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
        transfers: 'Private AC Cab',
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
          transfers: 'Private AC Cab',
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
      batch_source: 'mmt_sync',
      itinerary,
      hotels: [
        { name: `${destination} 4-Star Deluxe Resort`, city: destination, rating: '4.8', nights: durationNights },
      ],
      faqs: [
        {
          question: `Can this ${name} package be customized?`,
          answer: `Yes, you can customize the hotel tier, vehicle type, and daily sightseeing based on your personal travel preferences.`,
        },
      ],
    });
  }

  return { packages, errors };
}

// Smart Sanitizer and Truncation Recovery for JSON
export function smartSanitizeAndRecoverJson(raw: string): { data: any; recovered: boolean; note?: string } {
  if (!raw || typeof raw !== 'string') {
    throw new Error('Empty JSON input provided.');
  }

  // 1. Strip UTF-8 BOM and markdown code fences (```json ... ```)
  let text = raw.replace(/^\uFEFF/, '').trim();
  text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();

  // 2. Normalize smart / curly quotes to standard ASCII quotes
  text = text
    .replace(/[\u201C\u201D\u201E\u201F\u00AB\u00BB]/g, '"') // double curly quotes
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'");             // single curly quotes

  // 3. Strip trailing commas before closing brackets or braces
  text = text.replace(/,\s*([\]}])/g, '$1');

  // Attempt direct parse first
  try {
    const direct = JSON.parse(text);
    return { data: direct, recovered: false };
  } catch (errFirst: any) {
    // 4. Try sanitizing unescaped newlines and tabs inside double-quoted strings
    try {
      const sanitizedText = text.replace(/"([^"\\]*(?:\\[\s\S][^"\\]*)*)"/g, (match) => {
        return match.replace(/\r?\n/g, '\\n').replace(/\t/g, '\\t');
      });
      const parsedWithEscapes = JSON.parse(sanitizedText);
      return { data: parsedWithEscapes, recovered: false };
    } catch {}

    // 5. Truncation Recovery for Array:
    // If copied output was cut off mid-way (Safari clipboard / LLM token limit cutoff),
    // search backwards from the end for the last valid '}' that closes a package object.
    const openBracketIdx = text.indexOf('[');
    if (openBracketIdx !== -1) {
      let searchIdx = text.lastIndexOf('}');
      while (searchIdx > openBracketIdx) {
        const sub = text.slice(openBracketIdx, searchIdx + 1);
        const candidateJson = sub.replace(/,\s*$/, '') + ']';
        try {
          const salvaged = JSON.parse(candidateJson);
          if (Array.isArray(salvaged) && salvaged.length > 0) {
            return {
              data: salvaged,
              recovered: true,
              note: `Truncated JSON recovered: Successfully salvaged ${salvaged.length} complete packages up to the cutoff point.`
            };
          }
        } catch {
          try {
            const escapedCandidate = candidateJson.replace(/"([^"\\]*(?:\\[\s\S][^"\\]*)*)"/g, (match) => {
              return match.replace(/\r?\n/g, '\\n').replace(/\t/g, '\\t');
            });
            const salvaged = JSON.parse(escapedCandidate);
            if (Array.isArray(salvaged) && salvaged.length > 0) {
              return {
                data: salvaged,
                recovered: true,
                note: `Truncated JSON recovered: Successfully salvaged ${salvaged.length} complete packages up to the cutoff point.`
              };
            }
          } catch {}
        }
        searchIdx = text.lastIndexOf('}', searchIdx - 1);
      }
    }

    // 6. Truncation recovery for single object
    let lastClose = text.lastIndexOf('}');
    while (lastClose > 0) {
      const candidateObj = text.slice(0, lastClose + 1);
      try {
        const salvagedObj = JSON.parse(candidateObj);
        return {
          data: salvagedObj,
          recovered: true,
          note: `Truncated JSON recovered: Successfully salvaged package object up to the cutoff point.`
        };
      } catch {}
      lastClose = text.lastIndexOf('}', lastClose - 1);
    }

    // If all recovery attempts failed, throw the original syntax error
    throw errFirst;
  }
}

// Parse JSON content into HolidayPackage[] with Auto-Sanitization & Recovery
export function parsePackagesFromJson(jsonText: string): { packages: HolidayPackage[]; errors: string[]; recoveredNote?: string } {
  const errors: string[] = [];
  const packages: HolidayPackage[] = [];
  let recoveredNote: string | undefined;

  const cleanNum = (val: any, fallback: number = 0): number => {
    if (typeof val === 'number') return isNaN(val) ? fallback : val;
    const str = String(val || '').replace(/[^0-9.]/g, '');
    const num = parseFloat(str);
    return isNaN(num) ? fallback : num;
  };

  try {
    const { data: parsed, recovered, note } = smartSanitizeAndRecoverJson(jsonText);
    if (recovered && note) {
      recoveredNote = note;
    }

    const items: any[] = Array.isArray(parsed) ? parsed : parsed.packages && Array.isArray(parsed.packages) ? parsed.packages : [parsed];

    if (items.length === 0) {
      return { packages: [], errors: ['JSON does not contain any package items.'], recoveredNote };
    }

    items.forEach((item, idx) => {
      const name = item.name || item.title || item.packageName;
      if (!name) {
        errors.push(`Item ${idx + 1}: "name" is required.`);
        return;
      }
      const destination = item.destination || item.city || 'India';
      const destinationSlug = item.destinationSlug ? slugify(item.destinationSlug) : slugify(destination);
      const durationDays = cleanNum(item.durationDays, item.itinerary ? item.itinerary.length : 5) || 5;
      const durationNights = cleanNum(item.durationNights, durationDays - 1) || Math.max(durationDays - 1, 1);
      const startingPrice = cleanNum(item.startingPrice || item.price, 19999);
      const discountPrice = cleanNum(item.discountPrice || item.mrpPrice, Math.round(startingPrice * 1.18));

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
        rating: cleanNum(item.rating, 4.8),
        reviewsCount: cleanNum(item.reviewsCount, 120),
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

  return { packages, errors, recoveredNote };
}
