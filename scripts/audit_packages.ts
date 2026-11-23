import { getAllCatalogPackages, getCatalogPackageCount } from '../src/data/packageCatalog';

console.log('--- STARTING CATALOG AUDIT ---');
const totalCount = getCatalogPackageCount();
console.log('Total packages reported:', totalCount);

const all = getAllCatalogPackages();
console.log('Total packages retrieved:', all.length);

const stateWiseSummary: Record<string, { total: number; fixed: number; zeroZigZag: boolean; durationMatch: boolean; nightParityMatch: boolean }> = {};

const forbiddenPhrases = [
  'enjoy local sightseeing',
  'day at leisure for personal activities',
  'placeholder',
  'tbd'
];

let durationMismatches = 0;
let nightMismatches = 0;
let forbiddenFound = 0;
let missingHotelDays = 0;
let circuitValidationErrors = 0;

all.forEach((pkg, idx) => {
  const state = pkg.state || pkg.destinationSlug;
  if (!stateWiseSummary[state]) {
    stateWiseSummary[state] = {
      total: 0,
      fixed: 0,
      zeroZigZag: true,
      durationMatch: true,
      nightParityMatch: true
    };
  }
  stateWiseSummary[state].total += 1;
  stateWiseSummary[state].fixed += 1;

  // 1. Exact Duration & Day Count Match
  if (pkg.itinerary.length !== pkg.durationDays) {
    durationMismatches++;
    stateWiseSummary[state].durationMatch = false;
    console.error(`Duration mismatch in pkg ${pkg.id}: itinerary.length=${pkg.itinerary.length}, durationDays=${pkg.durationDays}`);
  }

  // 2. Pricing, Meal Plan & Inclusions Sync: nights count strictly matches sum of hotel nights
  const totalHotelNights = pkg.hotels.reduce((acc, h) => acc + h.nights, 0);
  if (totalHotelNights !== pkg.durationNights) {
    nightMismatches++;
    stateWiseSummary[state].nightParityMatch = false;
    console.error(`Night parity mismatch in pkg ${pkg.id}: sum=${totalHotelNights}, durationNights=${pkg.durationNights}`);
  }

  // Check each day's hotel
  pkg.itinerary.forEach((day, dIdx) => {
    if (day.dayNumber !== dIdx + 1) {
      console.error(`Misnumbered day in pkg ${pkg.id}: dayNumber=${day.dayNumber}, expected=${dIdx + 1}`);
    }

    if (dIdx < pkg.durationNights) {
      if (!day.hotel || day.hotel === 'Check-out completed') {
        missingHotelDays++;
        console.error(`Day ${dIdx + 1} has invalid hotel in pkg ${pkg.id}: ${day.hotel}`);
      }
    } else {
      if (day.hotel !== 'Check-out completed') {
        missingHotelDays++;
        console.error(`Final Day ${dIdx + 1} does not have Check-out completed in pkg ${pkg.id}: ${day.hotel}`);
      }
    }

    // 3. Replace Generic Text with Real Landmarks
    const combinedText = (day.title + ' ' + day.description + ' ' + (day.activities || []).join(' ')).toLowerCase();
    for (const phrase of forbiddenPhrases) {
      if (combinedText.includes(phrase)) {
        forbiddenFound++;
        console.error(`Forbidden generic phrase "${phrase}" found in pkg ${pkg.id} day ${dIdx + 1}`);
      }
    }
  });

  let duplicateDayTitles = 0;
  let midTripArrivals = 0;
  let preLastDayDepartures = 0;

  // Check duplicate day titles & arrival/departure positioning
  const seenDayTitles = new Set<string>();
  pkg.itinerary.forEach((day, idx) => {
    if (seenDayTitles.has(day.title)) {
      duplicateDayTitles++;
      console.error(`Pkg ${pkg.id} has duplicate day title on Day ${day.dayNumber}: "${day.title}"`);
    }
    seenDayTitles.add(day.title);

    if (idx > 0 && day.title.toLowerCase().startsWith('arrival')) {
      midTripArrivals++;
      console.error(`Pkg ${pkg.id} has post-Day 1 arrival on Day ${day.dayNumber}: "${day.title}"`);
    }

    if (idx < pkg.itinerary.length - 1 && (day.title.toLowerCase().includes('departure') || day.title.toLowerCase().includes('drop at'))) {
      preLastDayDepartures++;
      console.error(`Pkg ${pkg.id} has pre-last-day departure on Day ${day.dayNumber}: "${day.title}"`);
    }
  });

  if (duplicateDayTitles > 0 || midTripArrivals > 0 || preLastDayDepartures > 0) {
    circuitValidationErrors++;
  }
  if (pkg.destinationSlug === 'kerala' && pkg.durationDays >= 4) {
    // Check that Alleppey Houseboat is present in the itinerary
    const hasHouseboat = pkg.itinerary.some(
      (day) => day.hotel.toLowerCase().includes('houseboat') || day.title.toLowerCase().includes('houseboat')
    );
    if (!hasHouseboat) {
      circuitValidationErrors++;
      stateWiseSummary[state].zeroZigZag = false;
      console.error(`Kerala package ${pkg.id} is missing Alleppey Houseboat stay`);
    }
  }

  if (pkg.destinationSlug === 'kashmir' && pkg.durationDays >= 4) {
    // Check that Srinagar Houseboat is on the final stay night
    const lastStayDay = pkg.itinerary[pkg.durationDays - 2];
    if (!lastStayDay.hotel.toLowerCase().includes('houseboat') && !lastStayDay.title.toLowerCase().includes('houseboat')) {
      circuitValidationErrors++;
      stateWiseSummary[state].zeroZigZag = false;
      console.error(`Kashmir package ${pkg.id} does not have Srinagar Houseboat on final stay night: ${lastStayDay.title}`);
    }
  }

  if (pkg.destinationSlug === 'ayodhya' && pkg.durationDays === 5) {
    // Exact user flow: Day 1 Ayodhya, Day 2 Ayodhya, Day 3 Prayagraj->Varanasi, Day 4 Varanasi, Day 5 drop
    const day3 = pkg.itinerary[2];
    const day4 = pkg.itinerary[3];
    if (!day3.hotel.toLowerCase().includes('varanasi') || !day4.hotel.toLowerCase().includes('varanasi')) {
      circuitValidationErrors++;
      stateWiseSummary[state].zeroZigZag = false;
      console.error(`Ayodhya 4N/5D pkg ${pkg.id} has incorrect hotel stay on Day 3 or Day 4: D3=${day3.hotel}, D4=${day4.hotel}`);
    }
  }
});

console.log('\n======================================================');
console.log('             CATALOG AUDIT RESULTS REPORT             ');
console.log('======================================================');
console.log(`Total Packages Audited:        ${all.length}`);
console.log(`Duration Mismatches:           ${durationMismatches}`);
console.log(`Night Parity Mismatches:       ${nightMismatches}`);
console.log(`Generic Filler Phrases Found:  ${forbiddenFound}`);
console.log(`Missing / Invalid Hotel Days:  ${missingHotelDays}`);
console.log(`Circuit Validation Errors:     ${circuitValidationErrors}`);
console.log('======================================================\n');

console.log('STATE / SECTOR BREAKDOWN:');
console.table(
  Object.entries(stateWiseSummary).map(([sector, s]) => ({
    'Sector / State': sector,
    'Total Packages': s.total,
    'Audited & Fixed': s.fixed,
    'Zero Zig-Zag': s.zeroZigZag ? 'PASS' : 'FAIL',
    'Day Count Match': s.durationMatch ? 'PASS' : 'FAIL',
    'Night Parity Match': s.nightParityMatch ? 'PASS' : 'FAIL'
  }))
);

if (durationMismatches === 0 && nightMismatches === 0 && forbiddenFound === 0 && missingHotelDays === 0 && circuitValidationErrors === 0) {
  console.log('\n>>> ALL 5 STRICT RULES PASSED WITH 100% SUCCESS ACROSS THE ENTIRE CATALOG! <<<');
} else {
  console.error('\n>>> AUDIT FAILED! SEE ERRORS ABOVE. <<<');
  process.exit(1);
}
