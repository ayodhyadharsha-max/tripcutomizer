'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Search, Building2, Navigation, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface StoreBranch {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  landmarks: string;
  manager: string;
}

const STORES_LIST: StoreBranch[] = [
  {
    id: 'store-delhi-1',
    city: 'Delhi NCR',
    name: 'Gurugram Flagship Experience Centre',
    address: 'Plot 42, Commercial Hub, Sector 18, Gurugram, Delhi NCR – 122002',
    phone: '0124-4902100 / +91 98765 43210',
    email: 'gurugram.store@tripcustomizer.com',
    hours: '10:00 AM – 8:00 PM (Open 7 Days)',
    landmarks: 'Near IFFCO Chowk Metro Station',
    manager: 'Rajesh Malhotra',
  },
  {
    id: 'store-delhi-2',
    city: 'Delhi NCR',
    name: 'Connaught Place Branch',
    address: 'F-14, Inner Circle, Connaught Place, New Delhi – 110001',
    phone: '011-43592800',
    email: 'cp.delhi@tripcustomizer.com',
    hours: '10:30 AM – 7:30 PM (Mon-Sat)',
    landmarks: 'Opposite Rajiv Chowk Metro Gate No. 5',
    manager: 'Priya Sharma',
  },
  {
    id: 'store-mumbai-1',
    city: 'Mumbai',
    name: 'Bandra West Flagship Store',
    address: 'Shop No. 4, Linking Road, Near National College, Bandra West, Mumbai – 400050',
    phone: '022-67891200',
    email: 'bandra.mumbai@tripcustomizer.com',
    hours: '10:00 AM – 8:30 PM (Open 7 Days)',
    landmarks: 'Adjacent to Shoppers Stop',
    manager: 'Anand Verma',
  },
  {
    id: 'store-ayodhya-1',
    city: 'Ayodhya',
    name: 'Ram Path Experience Lounge',
    address: 'Building 12, Main Ram Path, Near Tedhi Bazar, Ayodhya, Uttar Pradesh – 224123',
    phone: '05278-294100',
    email: 'ayodhya.lounge@tripcustomizer.com',
    hours: '8:00 AM – 9:00 PM (Open 7 Days)',
    landmarks: '5 Mins Walk from Ram Janmabhoomi Complex',
    manager: 'Suresh Chandra Jaiswal',
  },
  {
    id: 'store-blr-1',
    city: 'Bengaluru',
    name: 'Indiranagar Lounge',
    address: '100 Feet Road, 12th Main Corner, Indiranagar, Bengaluru – 560038',
    phone: '080-41239800',
    email: 'blr.indiranagar@tripcustomizer.com',
    hours: '10:00 AM – 8:00 PM (Mon-Sat)',
    landmarks: 'Near Indiranagar Metro Station',
    manager: 'Kavitha Rao',
  },
  {
    id: 'store-kol-1',
    city: 'Kolkata',
    name: 'Park Street Retail Lounge',
    address: '77, Park Street, 1st Floor, Kolkata – 700016',
    phone: '033-22294100',
    email: 'kolkata@tripcustomizer.com',
    hours: '10:00 AM – 7:30 PM (Mon-Sat)',
    landmarks: 'Opposite Flurys Bakery',
    manager: 'Subhashish Roy',
  },
];

export default function StoreLocatorPage() {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cities = ['All', 'Delhi NCR', 'Mumbai', 'Ayodhya', 'Bengaluru', 'Kolkata'];

  const filteredStores = STORES_LIST.filter((store) => {
    const matchesCity = selectedCity === 'All' || store.city === selectedCity;
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-brand-950 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Retail Stores & Lounges
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Find a tripcustomizer Experience Store Near You
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed font-normal">
              Visit our retail lounges to meet expert travel consultants in person, design customized holiday packages, and get instant booking assistance.
            </p>
          </div>
        </Container>
      </div>

      {/* Filter Bar */}
      <Container className="mt-8">
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* City Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCity === city
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by city or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
            />
          </div>
        </div>
      </Container>

      {/* Store Cards Grid */}
      <Container className="mt-8">
        {filteredStores.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No Stores Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No store matches your filter. You can call our toll-free number 1800-2099-100 for instant phone assistance!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <div key={store.id} className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4 hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      {store.city}
                    </span>
                    <h3 className="font-black text-slate-900 text-base mt-2">{store.name}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 font-medium pt-1 border-t border-slate-100">
                  <p className="leading-relaxed">{store.address}</p>
                  <p className="text-slate-400 text-[11px]">📍 Landmark: {store.landmarks}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700 font-bold border-t border-slate-100 pt-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500 font-normal">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{store.hours}</span>
                  </div>
                </div>

                <a
                  href={`tel:${store.phone.split('/')[0].trim()}`}
                  className="w-full bg-slate-900 hover:bg-brand-600 text-white font-extrabold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Store Consultant</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
