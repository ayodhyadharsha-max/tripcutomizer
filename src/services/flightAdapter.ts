export interface FlightSearchParams {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  tripType: 'ONE_WAY' | 'ROUND_TRIP' | 'MULTI_CITY';
  travellers: number;
  cabinClass: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';
}

export interface FlightResult {
  id: string;
  airline: string;
  airlineCode: string;
  airlineLogo: string;
  flightNumber: string;
  fromCode: string;
  fromCity: string;
  toCode: string;
  toCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopoverCity?: string;
  price: number;
  baggage: string;
  isRefundable: boolean;
  cabinClass: string;
  seatsLeft: number;
}

export interface IFlightProvider {
  searchFlights(params: FlightSearchParams): Promise<FlightResult[]>;
}

export class MockFlightProvider implements IFlightProvider {
  private flights: FlightResult[] = [
    {
      id: 'fl-1',
      airline: 'Emirates',
      airlineCode: 'EK',
      airlineLogo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=200&auto=format&fit=crop',
      flightNumber: 'EK-511',
      fromCode: 'DEL',
      fromCity: 'New Delhi',
      toCode: 'DXB',
      toCity: 'Dubai',
      departureTime: '04:15 AM',
      arrivalTime: '06:30 AM',
      duration: '3h 45m',
      stops: 0,
      price: 14500,
      baggage: '30 kg Check-in + 7 kg Cabin',
      isRefundable: true,
      cabinClass: 'Economy',
      seatsLeft: 4,
    },
    {
      id: 'fl-2',
      airline: 'Air India',
      airlineCode: 'AI',
      airlineLogo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=200&auto=format&fit=crop',
      flightNumber: 'AI-995',
      fromCode: 'DEL',
      fromCity: 'New Delhi',
      toCode: 'DXB',
      toCity: 'Dubai',
      departureTime: '08:20 PM',
      arrivalTime: '10:45 PM',
      duration: '3h 55m',
      stops: 0,
      price: 12800,
      baggage: '25 kg Check-in + 7 kg Cabin',
      isRefundable: true,
      cabinClass: 'Economy',
      seatsLeft: 9,
    },
    {
      id: 'fl-3',
      airline: 'Singapore Airlines',
      airlineCode: 'SQ',
      airlineLogo: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=200&auto=format&fit=crop',
      flightNumber: 'SQ-423',
      fromCode: 'BOM',
      fromCity: 'Mumbai',
      toCode: 'SIN',
      toCity: 'Singapore',
      departureTime: '11:55 PM',
      arrivalTime: '07:45 AM (+1)',
      duration: '5h 20m',
      stops: 0,
      price: 18900,
      baggage: '30 kg Check-in + 7 kg Cabin',
      isRefundable: true,
      cabinClass: 'Economy',
      seatsLeft: 2,
    },
    {
      id: 'fl-4',
      airline: 'British Airways',
      airlineCode: 'BA',
      airlineLogo: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=200&auto=format&fit=crop',
      flightNumber: 'BA-138',
      fromCode: 'BLR',
      fromCity: 'Bengaluru',
      toCode: 'LHR',
      toCity: 'London',
      departureTime: '07:00 AM',
      arrivalTime: '01:15 PM',
      duration: '10h 45m',
      stops: 0,
      price: 52000,
      baggage: '23 kg Check-in + 7 kg Cabin',
      isRefundable: true,
      cabinClass: 'Economy',
      seatsLeft: 6,
    },
  ];

  async searchFlights(params: FlightSearchParams): Promise<FlightResult[]> {
    if (!params.to) return this.flights;
    return this.flights.filter(
      (f) =>
        f.toCity.toLowerCase().includes(params.to.toLowerCase()) ||
        f.toCode.toLowerCase().includes(params.to.toLowerCase()) ||
        f.fromCity.toLowerCase().includes(params.from.toLowerCase())
    );
  }
}

export const flightService = new MockFlightProvider();
