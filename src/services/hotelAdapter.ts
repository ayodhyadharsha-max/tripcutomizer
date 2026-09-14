export interface HotelSearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  children: number;
}

export interface HotelResult {
  id: string;
  name: string;
  location: string;
  city: string;
  country: string;
  starRating: number;
  userRating: number;
  reviewsCount: number;
  image: string;
  amenities: string[];
  roomType: string;
  mealPlan: string;
  pricePerNight: number;
  taxesPerNight: number;
  totalPrice: number;
  propertyType: 'Hotel' | 'Resort' | 'Villa' | 'Apartment';
  distanceFromCenter: string;
}

export interface IHotelProvider {
  searchHotels(params: HotelSearchParams): Promise<HotelResult[]>;
}

export class MockHotelProvider implements IHotelProvider {
  private hotels: HotelResult[] = [
    {
      id: 'ht-1',
      name: 'Atlantis The Palm Dubai',
      location: 'Dubai Healthcare City, Dubai',
      city: 'Dubai',
      country: 'UAE',
      starRating: 5,
      userRating: 4.8,
      reviewsCount: 420,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
      amenities: ['Free WiFi', 'Infinity Pool', 'Spa & Wellness', 'Airport Shuttle', '4 Restaurants'],
      roomType: 'Deluxe City View Room',
      mealPlan: 'Free Breakfast Included',
      pricePerNight: 8500,
      taxesPerNight: 1200,
      totalPrice: 9700,
      propertyType: 'Hotel',
      distanceFromCenter: '2.5 km from Downtown',
    },
    {
      id: 'ht-2',
      name: 'Taj Exotica Resort & Spa Goa',
      location: 'Benaulim Beach, South Goa',
      city: 'Goa',
      country: 'India',
      starRating: 5,
      userRating: 4.9,
      reviewsCount: 310,
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop',
      amenities: ['Private Beach', 'Outdoor Pool', 'Ayurvedic Spa', 'Golf Course', 'Kids Club'],
      roomType: 'Garden Villa with Balcony',
      mealPlan: 'Breakfast & Dinner Included',
      pricePerNight: 12500,
      taxesPerNight: 2250,
      totalPrice: 14750,
      propertyType: 'Resort',
      distanceFromCenter: 'Direct Beachfront',
    },
    {
      id: 'ht-3',
      name: 'Marina Bay Sands Hotel Singapore',
      location: '10 Bayfront Avenue, Singapore',
      city: 'Singapore',
      country: 'Singapore',
      starRating: 5,
      userRating: 4.9,
      reviewsCount: 890,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      amenities: ['Rooftop Infinity Pool', 'Casino', 'Observation Deck', 'Michelin Dining', 'Luxury Mall'],
      roomType: 'Premier Sands Sky Room',
      mealPlan: 'Breakfast Included',
      pricePerNight: 28000,
      taxesPerNight: 4200,
      totalPrice: 32200,
      propertyType: 'Hotel',
      distanceFromCenter: '0.5 km from City Center',
    },
    {
      id: 'ht-4',
      name: 'Grand Hyatt Bali Beach Resort',
      location: 'Nusa Dua, Bali',
      city: 'Bali',
      country: 'Indonesia',
      starRating: 5,
      userRating: 4.9,
      reviewsCount: 520,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
      amenities: ['Private Beach', 'Lagoon Pool', 'Water Sports', 'Spa & Wellness', 'Balinese Spa'],
      roomType: 'Ocean Front Suite',
      mealPlan: 'Free Breakfast Included',
      pricePerNight: 9800,
      taxesPerNight: 1400,
      totalPrice: 11200,
      propertyType: 'Resort',
      distanceFromCenter: 'Direct Beach Access',
    },
    {
      id: 'ht-5',
      name: 'Ramayana Heritage Hotel & Suites',
      location: 'Near Ram Janmabhoomi, Ayodhya',
      city: 'Ayodhya',
      country: 'India',
      starRating: 4,
      userRating: 4.8,
      reviewsCount: 290,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      amenities: ['Free WiFi', 'Vegetarian Restaurant', 'Temple Transfers', 'Travel Desk', 'AC Rooms'],
      roomType: 'Royal Heritage Deluxe Room',
      mealPlan: 'Breakfast & Dinner Included',
      pricePerNight: 4500,
      taxesPerNight: 550,
      totalPrice: 5050,
      propertyType: 'Hotel',
      distanceFromCenter: '1.0 km from Ram Mandir',
    },
  ];

  async searchHotels(params: HotelSearchParams): Promise<HotelResult[]> {
    if (!params.location) return this.hotels;
    const query = params.location.toLowerCase().trim();
    const matched = this.hotels.filter(
      (h) =>
        h.city.toLowerCase().includes(query) ||
        h.location.toLowerCase().includes(query) ||
        h.name.toLowerCase().includes(query) ||
        h.country.toLowerCase().includes(query)
    );
    return matched.length > 0 ? matched : this.hotels;
  }
}

export const hotelService = new MockHotelProvider();
