'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { hotelService, HotelResult } from '@/services/hotelAdapter';
import { formatCurrency } from '@/lib/utils';
import { Hotel, Search, Filter, Star, MapPin, CheckCircle2, ShieldCheck, ChevronRight, Clock } from 'lucide-react';

export default function HotelSearchPage() {
  const [location, setLocation] = useState('Dubai');
  const [checkIn, setCheckIn] = useState('2026-10-15');
  const [checkOut, setCheckOut] = useState('2026-10-20');
  const [hotels, setHotels] = useState<HotelResult[]>([]);
  const [selectedStar, setSelectedStar] = useState<number | 'ALL'>('ALL');
  const [selectedHotel, setSelectedHotel] = useState<HotelResult | null>(null);

  useEffect(() => {
    hotelService.searchHotels({ location, checkIn, checkOut, rooms: 1, adults: 2, children: 0 }).then(setHotels);
  }, [location, checkIn, checkOut]);

  const filteredHotels = hotels.filter((h) => selectedStar === 'ALL' || h.starRating === selectedStar);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Hotel Search</span>
        </div>



        {/* Hotel Search Engine Header */}
        <Card className="p-6 bg-brand-900 text-white rounded-3xl mb-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2 text-accent-400 font-bold text-xs uppercase tracking-wider">
              <Hotel className="w-4 h-4" />
              <span>Luxury Hotels & Beach Resorts Directory</span>
            </div>
            <span className="bg-amber-400 text-slate-950 font-black text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md animate-pulse">
              <Clock className="w-3.5 h-3.5 text-slate-950" />
              <span>COMING SOON • LIVE HOTEL TARIFF API INTEGRATION IN PROGRESS</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-900">
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Destination / City</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border rounded-xl px-3 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Check-in Date</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-white border rounded-xl px-3 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Check-out Date</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-white border rounded-xl px-3 py-2 text-xs font-bold"
              />
            </div>
            <div className="pt-4 sm:pt-0 flex items-end">
              <Button variant="accent" size="md" className="w-full font-black py-2.5 text-xs text-slate-950">
                <Search className="w-4 h-4 mr-1.5" /> SEARCH HOTELS
              </Button>
            </div>
          </div>
        </Card>

        {/* Hotel Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="p-4 bg-white border-slate-200 text-xs">
              <h3 className="font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100 flex items-center space-x-1">
                <Filter className="w-4 h-4 text-accent-500" />
                <span>Star Rating</span>
              </h3>

              <div className="space-y-1 text-slate-600 font-medium">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="stars" checked={selectedStar === 'ALL'} onChange={() => setSelectedStar('ALL')} />
                  <span>All Properties ({hotels.length})</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="stars" checked={selectedStar === 5} onChange={() => setSelectedStar(5)} />
                  <span>5-Star Luxury Resorts</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="stars" checked={selectedStar === 4} onChange={() => setSelectedStar(4)} />
                  <span>4-Star Deluxe Hotels</span>
                </label>
              </div>
            </Card>
          </div>

          {/* Results List */}
          <div className="lg:col-span-9 space-y-6">
            {filteredHotels.map((hotel) => (
              <Card key={hotel.id} hoverable className="border-slate-200 overflow-hidden group bg-white">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-5 relative h-56 md:h-auto bg-slate-100">
                    <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {hotel.propertyType}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-1 text-amber-400">
                          {[...Array(hotel.starRating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          ★ {hotel.userRating} ({hotel.reviewsCount} reviews)
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-500 transition-colors mb-1">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center space-x-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span>{hotel.location} • {hotel.distanceFromCenter}</span>
                      </p>

                      <div className="p-2.5 bg-slate-50 rounded-xl mb-3 text-xs">
                        <p className="font-bold text-slate-800">{hotel.roomType}</p>
                        <p className="text-emerald-700 font-semibold text-[11px]">{hotel.mealPlan}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {hotel.amenities.map((a, i) => (
                          <span key={i} className="text-[10px] bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Nightly Tariff From</span>
                        <span className="text-xl font-black text-brand-700">{formatCurrency(hotel.pricePerNight)}</span>
                        <span className="text-[10px] text-slate-500"> + {formatCurrency(hotel.taxesPerNight)} taxes</span>
                      </div>

                      <button
                        onClick={() => setSelectedHotel(hotel)}
                        className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
                      >
                        SELECT ROOM →
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      {/* Hotel Reservation Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 bg-white rounded-3xl shadow-2xl relative">
            <button onClick={() => setSelectedHotel(null)} className="absolute top-4 right-4 text-slate-400 font-bold text-sm">✕</button>
            <span className="text-[10px] bg-brand-50 text-brand-700 font-bold px-2.5 py-0.5 rounded-full inline-block mb-2">Hotel Reservation</span>
            <h3 className="font-black text-base text-slate-900 mb-1">{selectedHotel.name}</h3>
            <p className="text-xs text-slate-500 mb-4">{selectedHotel.roomType} • {formatCurrency(selectedHotel.totalPrice)} / night total</p>

            <Link href="/booking/checkout" className="block">
              <Button variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-xs">
                PROCEED TO GUEST DETAILS →
              </Button>
            </Link>
          </Card>
        </div>
      )}
    </div>
  );
}
