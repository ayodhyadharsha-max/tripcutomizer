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

export const DEMO_PACKAGES: HolidayPackage[] = [];
