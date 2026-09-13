'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { flightService, FlightResult } from '@/services/flightAdapter';
import { formatCurrency } from '@/lib/utils';
import { Plane, Search, Filter, Clock, CheckCircle2, ShieldCheck, Briefcase, Calendar, ChevronRight } from 'lucide-react';

export default function FlightSearchPage() {
  const [tripType, setTripType] = useState<'ONE_WAY' | 'ROUND_TRIP' | 'MULTI_CITY'>('ONE_WAY');
  const [from, setFrom] = useState('New Delhi (DEL)');
  const [to, setTo] = useState('Dubai (DXB)');
  const [departureDate, setDepartureDate] = useState('2026-10-15');
  const [cabinClass, setCabinClass] = useState('ECONOMY');

  const [flights, setFlights] = useState<FlightResult[]>([]);
  const [selectedStops, setSelectedStops] = useState<number | 'ALL'>('ALL');
  const [selectedFlight, setSelectedFlight] = useState<FlightResult | null>(null);

  useEffect(() => {
    flightService.searchFlights({ from, to, departureDate, tripType, travellers: 1, cabinClass: cabinClass as any }).then(setFlights);
  }, [from, to, departureDate, tripType, cabinClass]);

  const filteredFlights = flights.filter((f) => selectedStops === 'ALL' || f.stops === selectedStops);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Flight Search</span>
        </div>

        {/* Coming Soon Notice Banner */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 p-4 rounded-2xl shadow-md mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-950/10 rounded-xl">
              <Plane className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-tight">
                Online Flight Booking – Coming Soon!
              </h3>
              <p className="text-xs text-slate-900 font-medium">
                We are currently integrating live airline GDS APIs. For offline flight bookings & group rates, please call 1800-2099-100.
              </p>
            </div>
          </div>
        </div>

        {/* Flight Search Engine Header */}
        <Card className="p-6 bg-brand-900 text-white rounded-3xl mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
            <Plane className="w-4 h-4" />
            <span>IATA Certified Flight Booking Desk</span>
          </div>

          {/* Trip Type Tabs */}
          <div className="flex space-x-2 bg-white/10 p-1 rounded-xl w-fit mb-4 text-xs font-bold">
            <button
              onClick={() => setTripType('ONE_WAY')}
              className={`px-4 py-1.5 rounded-lg cursor-pointer ${tripType === 'ONE_WAY' ? 'bg-white text-slate-900' : 'text-slate-300'}`}
            >
              One Way
            </button>
            <button
              onClick={() => setTripType('ROUND_TRIP')}
              className={`px-4 py-1.5 rounded-lg cursor-pointer ${tripType === 'ROUND_TRIP' ? 'bg-white text-slate-900' : 'text-slate-300'}`}
            >
              Round Trip
            </button>
            <button
              onClick={() => setTripType('MULTI_CITY')}
              className={`px-4 py-1.5 rounded-lg cursor-pointer ${tripType === 'MULTI_CITY' ? 'bg-white text-slate-900' : 'text-slate-300'}`}
            >
              Multi City
            </button>
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-900">
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">From</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-white border rounded-xl px-3 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">To</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-white border rounded-xl px-3 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Departure Date</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full bg-white border rounded-xl px-3 py-2 text-xs font-bold"
              />
            </div>
            <div className="pt-4 sm:pt-0 flex items-end">
              <Button variant="accent" size="md" className="w-full font-black py-2.5 text-xs text-slate-950">
                <Search className="w-4 h-4 mr-1.5" /> SEARCH FLIGHTS
              </Button>
            </div>
          </div>
        </Card>

        {/* Flight Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="p-4 bg-white border-slate-200 text-xs">
              <h3 className="font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100 flex items-center space-x-1">
                <Filter className="w-4 h-4 text-brand-500" />
                <span>Filter Flights</span>
              </h3>

              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Stops Filter</label>
                <div className="space-y-1 text-slate-600 font-medium">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stops"
                      checked={selectedStops === 'ALL'}
                      onChange={() => setSelectedStops('ALL')}
                    />
                    <span>All Flights ({flights.length})</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stops"
                      checked={selectedStops === 0}
                      onChange={() => setSelectedStops(0)}
                    />
                    <span>Non-Stop Flights Only</span>
                  </label>
                </div>
              </div>
            </Card>
          </div>

          {/* Results List */}
          <div className="lg:col-span-9 space-y-4">
            {filteredFlights.map((flight) => (
              <Card key={flight.id} hoverable className="p-6 bg-white border-slate-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Airline & Timing */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden relative shrink-0">
                      <Image src={flight.airlineLogo} alt={flight.airline} fill className="object-cover" />
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-black text-slate-900 text-sm">{flight.airline}</h4>
                        <span className="text-[10px] text-slate-400 font-bold">({flight.flightNumber})</span>
                      </div>
                      <span className="text-[10px] bg-brand-50 text-brand-700 font-bold px-2 py-0.5 rounded inline-block mt-0.5">
                        {flight.stops === 0 ? 'Non-Stop' : `${flight.stops} Stop`}
                      </span>
                    </div>
                  </div>

                  {/* Flight Schedule */}
                  <div className="flex items-center space-x-6 text-center text-xs">
                    <div>
                      <span className="text-lg font-black text-slate-900 block">{flight.departureTime}</span>
                      <span className="text-slate-500 font-bold">{flight.fromCode}</span>
                    </div>

                    <div className="text-center">
                      <span className="text-[10px] text-slate-400 font-bold block">{flight.duration}</span>
                      <div className="w-20 h-0.5 bg-slate-300 relative my-1">
                        <div className="w-2 h-2 bg-brand-500 rounded-full absolute -top-0.5 left-1/2 -translate-x-1/2" />
                      </div>
                      <span className="text-[9px] text-slate-400">{flight.fromCity} → {flight.toCity}</span>
                    </div>

                    <div>
                      <span className="text-lg font-black text-slate-900 block">{flight.arrivalTime}</span>
                      <span className="text-slate-500 font-bold">{flight.toCode}</span>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="text-right border-t md:border-t-0 pt-3 md:pt-0 w-full md:w-auto flex md:flex-col justify-between items-center md:items-end">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Fare / person</span>
                      <span className="text-xl font-black text-brand-700">{formatCurrency(flight.price)}</span>
                    </div>

                    <button
                      onClick={() => setSelectedFlight(flight)}
                      className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
                    >
                      BOOK FLIGHT →
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{flight.baggage}</span>
                    </span>
                    <span>• {flight.isRefundable ? 'Refundable Fare' : 'Non-Refundable'}</span>
                  </div>
                  <span className="text-rose-600 font-bold">{flight.seatsLeft} Seats Left at this Fare</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      {/* Flight Booking Modal */}
      {selectedFlight && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 bg-white rounded-3xl shadow-2xl relative">
            <button onClick={() => setSelectedFlight(null)} className="absolute top-4 right-4 text-slate-400 font-bold text-sm">✕</button>
            <span className="text-[10px] bg-brand-50 text-brand-700 font-bold px-2.5 py-0.5 rounded-full inline-block mb-2">Flight Reservation</span>
            <h3 className="font-black text-base text-slate-900 mb-1">{selectedFlight.airline} ({selectedFlight.flightNumber})</h3>
            <p className="text-xs text-slate-500 mb-4">{selectedFlight.fromCity} to {selectedFlight.toCity} • Total Fare: {formatCurrency(selectedFlight.price)}</p>

            <Link href="/booking/checkout" className="block">
              <Button variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-xs">
                PROCEED TO TRAVELLER DETAILS →
              </Button>
            </Link>
          </Card>
        </div>
      )}
    </div>
  );
}
