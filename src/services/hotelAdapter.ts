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
  ];

  async searchHotels(params: HotelSearchParams): Promise<HotelResult[]> {
    if (!params.location) return this.hotels;
    return this.hotels.filter(
      (h) =>
        h.city.toLowerCase().includes(params.location.toLowerCase()) ||
        h.location.toLowerCase().includes(params.location.toLowerCase())
    );
  }
}

export const hotelService = new MockHotelProvider();
