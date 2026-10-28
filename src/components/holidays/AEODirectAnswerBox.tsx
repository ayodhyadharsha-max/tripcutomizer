import React from 'react';
import {
  Calendar,
  Clock,
  Compass,
  CreditCard,
  CheckCircle2,
  HelpCircle,
  Plane,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface AEODirectAnswerBoxProps {
  destName: string;
  destinationSlug: string;
  isInternational: boolean;
  minPrice: number;
  maxPrice: number;
  recommendedDays?: number;
  cities?: string[];
}

// Destination-specific curated seasons & insights for high-accuracy AEO
const DESTINATION_INSIGHTS: Record<
  string,
  {
    bestSeason: string;
    weatherDesc: string;
    highlights: string[];
    idealDuration: string;
    visaInfo: string;
  }
> = {
  dubai: {
    bestSeason: 'November to March',
    weatherDesc: 'cool, pleasant winter weather ideal for desert safari, Marina yachting, and Burj Khalifa sightseeing',
    highlights: ['Burj Khalifa 124th Floor', 'Desert Safari with BBQ Dinner', 'Dubai Mall & Fountain Show', 'Dhow Marina Cruise'],
    idealDuration: '5 Days / 4 Nights',
    visaInfo: 'Instant 30-day UAE tourist visa processing within 48 to 72 hours with valid Indian passport.',
  },
  thailand: {
    bestSeason: 'November to early April',
    weatherDesc: 'dry and sunny tropical conditions perfect for island hopping, water sports, and beach exploration',
    highlights: ['Phi Phi Islands by Speedboat', 'Coral Island Pattaya', 'Bangkok Temple & City Tour', 'Safari World & Marine Park'],
    idealDuration: '6 Days / 5 Nights',
    visaInfo: 'Visa-free entry or instant Visa-on-Arrival available for Indian passport holders.',
  },
  bali: {
    bestSeason: 'April to October',
    weatherDesc: 'warm, dry sunny weather offering optimal conditions for private pool villas, beach sunsets, and temple visits',
    highlights: ['Ubud Rice Terraces & Bali Swing', 'Uluwatu Sunset Temple & Kecak Dance', 'Nusa Penida West Island Tour', 'Kuta Beach Water Sports'],
    idealDuration: '7 Days / 6 Nights',
    visaInfo: 'Instant e-VOA (Electronic Visa on Arrival) available for Indian travelers upon arrival in Denpasar.',
  },
  kashmir: {
    bestSeason: 'March to August (Spring/Summer) and December to February (Snow Season)',
    weatherDesc: 'blooming tulips in spring, pleasant valley breezes in summer, and powdery snow in Gulmarg during winter',
    highlights: ['Dal Lake Houseboat & Shikara Ride', 'Gulmarg Gondola Phase 1 & 2', 'Pahalgam Betaab & Aru Valleys', 'Sonamarg Thajiwas Glacier'],
    idealDuration: '6 Days / 5 Nights',
    visaInfo: 'Domestic Indian destination; valid government Photo ID (Aadhaar or Voter ID) required.',
  },
  ayodhya: {
    bestSeason: 'October to March',
    weatherDesc: 'crisp, cool, and comfortable climate ideal for temple darshan, Saryu holy dip, and heritage walking tours',
    highlights: ['Ram Janmabhoomi Mandir Darshan', 'Hanuman Garhi Temple', 'Kanak Bhawan', 'Evening Saryu River Maha Aarti'],
    idealDuration: '3 Days / 2 Nights',
    visaInfo: 'Domestic pilgrimage destination; direct flights from Delhi, Mumbai, Ahmedabad to Maharishi Valmiki Airport.',
  },
  kerala: {
    bestSeason: 'September to March',
    weatherDesc: 'mild, comfortable temperatures ideal for backwater cruises, Munnar tea plantation walks, and beach relaxation',
    highlights: ['Alleppey Private Houseboat Cruise', 'Munnar Tea Gardens & Eravikulam', 'Thekkady Periyar Wildlife Sanctuary', 'Kovalam Lighthouse Beach'],
    idealDuration: '6 Days / 5 Nights',
    visaInfo: 'Domestic Indian destination; direct flight connectivity to Cochin and Trivandrum international airports.',
  },
  goa: {
    bestSeason: 'October to April',
    weatherDesc: 'warm sunny beach days and lively cool evenings perfect for water sports, beach parties, and heritage churches',
    highlights: ['Baga & Calangute Beach Sports', 'Dudhsagar Waterfalls Tour', 'South Goa Heritage Churches', 'Mandovi River Sunset Cruise'],
    idealDuration: '4 Days / 3 Nights',
    visaInfo: 'Domestic Indian destination; connected via Mopa (GOX) and Dabolim (GOI) airports.',
  },
  singapore: {
    bestSeason: 'Year-round, with peak visiting months from November to January and June to August',
    weatherDesc: 'tropical maritime climate with air-conditioned attractions, festive events, and world-class shopping',
    highlights: ['Universal Studios Sentosa', 'Gardens by the Bay Supertree Grove', 'Marina Bay Sands SkyPark', 'Night Safari Wildlife Tour'],
    idealDuration: '5 Days / 4 Nights',
    visaInfo: 'Singapore e-Visa processing assistance provided with 3-5 working days turnaround for Indian citizens.',
  },
  malaysia: {
    bestSeason: 'December to April and June to August',
    weatherDesc: 'balmy tropical temperatures ideal for exploring Kuala Lumpur skyscrapers and Langkawi island beaches',
    highlights: ['Petronas Twin Towers & Skybridge', 'Batu Caves Lord Murugan Shrine', 'Genting Highlands Cable Car', 'Langkawi Island Hopping'],
    idealDuration: '5 Days / 4 Nights',
    visaInfo: 'Visa-free entry for Indian citizens traveling to Malaysia for tourism stays up to 30 days.',
  },
  maldives: {
    bestSeason: 'November to April',
    weatherDesc: 'endless clear skies, turquoise calm waters, and exceptional visibility for snorkeling and marine life encounters',
    highlights: ['Overwater Ocean Villa with Pool', 'Snorkeling & Dolphin Cruise', 'All-Inclusive Dine-Around Buffets', 'Speedboat or Seaplane Transfers'],
    idealDuration: '5 Days / 4 Nights',
    visaInfo: 'Free 30-day Tourist Visa on Arrival granted to all Indian passport holders.',
  },
  nepal: {
    bestSeason: 'September to November and March to May',
    weatherDesc: 'crystal-clear skies and majestic Himalayan mountain vistas with comfortable trekking temperatures',
    highlights: ['Pashupatinath Temple Darshan', 'Pokhara Phewa Lake Boating', 'Sarangkot Sunrise Himalayan View', 'Muktinath Pilgrimage Tour'],
    idealDuration: '6 Days / 5 Nights',
    visaInfo: 'Visa-free entry for Indian citizens with valid Voter ID card or original Indian Passport.',
  },
  baku: {
    bestSeason: 'April to June and September to October',
    weatherDesc: 'temperate Caspian Sea breezes, mild autumn temperatures, and comfortable sightseeing conditions',
    highlights: ['Baku Flame Towers & Boulevard', 'Old City Icherisheher & Maiden Tower', 'Ateshgah Fire Temple & Yanar Dag', 'Gabala Mountain Cable Car'],
    idealDuration: '5 Days / 4 Nights',
    visaInfo: 'Hassle-free Azerbaijan ASAN e-Visa issued within 3 working days with 30-day single entry validity.',
  },
  kaziranga: {
    bestSeason: 'November to April',
    weatherDesc: 'dry winter season when national park safari zones are fully open for wildlife and elephant spotting',
    highlights: ['Early Morning Elephant Safari', 'Central & Western Range Jeep Safaris', 'One-Horned Rhinoceros Spotting', 'Brahmaputra River Dolphin Watching'],
    idealDuration: '4 Days / 3 Nights',
    visaInfo: 'Domestic Indian destination; accessible via Guwahati International Airport (GAU) and Jorhat.',
  },
  sundarbans: {
    bestSeason: 'October to March',
    weatherDesc: 'pleasant cool weather with high chances of spotting Royal Bengal Tigers basking along mangrove riverbanks',
    highlights: ['Guided Mangrove Boat Safari', 'Sajnekhali Watch Tower & Museum', 'Sudhanyakhali Tiger Spotting Camp', 'Do-Banki Canopy Walk'],
    idealDuration: '3 Days / 2 Nights',
    visaInfo: 'Domestic Indian destination; accessible via Kolkata (CCU) with dedicated river jetty transfers.',
  },
};

export const AEODirectAnswerBox: React.FC<AEODirectAnswerBoxProps> = ({
  destName,
  destinationSlug,
  isInternational,
  minPrice,
  maxPrice,
  recommendedDays = 5,
  cities = [],
}) => {
  const slugKey = destinationSlug.toLowerCase().trim();
  const insight = DESTINATION_INSIGHTS[slugKey] || {
    bestSeason: 'October to March',
    weatherDesc: 'pleasant weather conditions and clear skies suitable for outdoor sightseeing and travel activities',
    highlights: cities.length > 0 ? cities.slice(0, 4) : ['Iconic Landmarks', 'Cultural Monuments', 'Local Food & Markets', 'Scenic Day Tours'],
    idealDuration: `${recommendedDays} Days / ${recommendedDays - 1} Nights`,
    visaInfo: isInternational
      ? 'Complete visa filing and documentation assistance provided by our dedicated visa desk.'
      : 'Domestic Indian destination; government-issued Photo ID required for hotel check-ins and travel.',
  };

  const startingFormatted = `₹${minPrice.toLocaleString('en-IN')}`;
  const maxFormatted = `₹${maxPrice.toLocaleString('en-IN')}`;

  return (
    <section
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-10 text-slate-800"
      aria-labelledby="aeo-summary-title"
    >
      {/* AEO Top Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200/60 text-brand-700 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Quick Travel Facts &amp; Direct Answer Guide</span>
        </div>
        <div className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Updated for 2026 Season • 100% Verified</span>
        </div>
      </div>

      {/* Snapshot Cards (Google AI & Answer Engine Citation Box) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Package Cost Range
          </span>
          <span className="text-base sm:text-lg font-black text-slate-950 block">
            {startingFormatted} - {maxFormatted}
          </span>
          <span className="text-[11px] text-emerald-600 font-semibold">Per Person • Twin Share</span>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Ideal Duration
          </span>
          <span className="text-base sm:text-lg font-black text-slate-950 block">
            {insight.idealDuration}
          </span>
          <span className="text-[11px] text-slate-500 font-medium">Customizable Itinerary</span>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Best Time to Visit
          </span>
          <span className="text-base sm:text-lg font-black text-slate-950 block line-clamp-1">
            {insight.bestSeason.split('(')[0].trim()}
          </span>
          <span className="text-[11px] text-amber-600 font-semibold">Peak Travel Season</span>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Flight Connectivity
          </span>
          <span className="text-base sm:text-lg font-black text-slate-950 block">
            Direct / 1-Stop
          </span>
          <span className="text-[11px] text-blue-600 font-semibold">Delhi, Mumbai, Ahmedabad</span>
        </div>
      </div>

      {/* AEO Direct Answer Q&A Cards (Featured Snippets Position 0 Targets) */}
      <div className="space-y-6">
        {/* Q1: Cost & Starting Price */}
        <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
          <h2 className="aeo-question text-base sm:text-lg font-extrabold text-slate-950 mb-2 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-brand-600 shrink-0" />
            <span>How much does a {destName} tour package cost from India?</span>
          </h2>
          <p className="speakable-content aeo-answer text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            A customized {destName} tour package from India typically costs between <strong>{startingFormatted}</strong> to <strong>{maxFormatted}</strong> per person for a {insight.idealDuration} vacation. This price includes verified 4-star deluxe hotel accommodations, daily breakfast and dinner, private AC airport transfers, guided sightseeing excursions, and 24x7 dedicated travel desk support.
          </p>
        </div>

        {/* Q2: Best Time to Visit */}
        <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
          <h2 className="aeo-question text-base sm:text-lg font-extrabold text-slate-950 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>What is the best time to visit {destName}?</span>
          </h2>
          <p className="speakable-content aeo-answer text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            The best time to visit {destName} is from <strong>{insight.bestSeason}</strong>, when travelers experience {insight.weatherDesc}. Booking your holiday package 30 to 45 days in advance guarantees early-bird airfare discounts, preferred flight timings, and guaranteed room availability at top-rated 4-star and 5-star properties.
          </p>
        </div>

        {/* Q3: Inclusions & Visa */}
        <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
          <h2 className="aeo-question text-base sm:text-lg font-extrabold text-slate-950 mb-2 flex items-center gap-2">
            <Plane className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Are flights, hotel transfers, and visa assistance included?</span>
          </h2>
          <p className="speakable-content aeo-answer text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            Yes. Every {destName} tour package booked on Trip Customizer can be bundled with confirmed round-trip flights departing from major Indian airports (Delhi, Mumbai, Ahmedabad, Kolkata, Bangalore, and Pune). {insight.visaInfo} All packages feature transparent pricing with official 5% GST tax invoices and zero hidden surcharges.
          </p>
        </div>

        {/* Q4: Step-by-Step Customization (HowTo Snippet) */}
        <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
          <h2 className="aeo-question text-base sm:text-lg font-extrabold text-slate-950 mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 text-purple-600 shrink-0" />
            <span>How to plan and customize a {destName} itinerary on Trip Customizer?</span>
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
            <li>
              <strong>Choose your travel dates and departure city:</strong> Select round-trip flights from your preferred origin airport (DEL, BOM, AMD, BLR, CCU).
            </li>
            <li>
              <strong>Select your accommodation standard:</strong> Choose between verified 3-Star comfort, 4-Star deluxe, or 5-Star luxury resort stays.
            </li>
            <li>
              <strong>Personalize sightseeing activities:</strong> Add curated day tours such as {insight.highlights.slice(0, 3).join(', ')}.
            </li>
            <li>
              <strong>Receive an instant quotation:</strong> Get a tailored day-by-day itinerary via WhatsApp (+91 7408763401) with guaranteed best price and 24x7 trip support.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
