'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HolidayPackage } from '@/data/packagesData';
import { findCatalogPackage, getAllCatalogPackages } from '@/data/packageCatalog';
import { formatCurrency } from '@/lib/utils';
import {
  getPackageBaselineTier,
  getPackageHotelBadgeInfo,
  isPremiumPackage,
  getPackageAllowedTiers,
  getPackageTierPrices,
  getPackageTierHotels
} from '@/lib/packageUtils';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CoTraveller } from '@/lib/cloudStore';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { QuickPackageCreatorModal } from '@/components/admin/QuickPackageCreatorModal';
import {
  Star, Clock, MapPin, CheckCircle2, ChevronRight, ChevronDown, ChevronUp,
  Hotel, Plane, Utensils, ShieldCheck, MessageCircle, Share2, Download,
  PhoneCall, Sparkles, Tag, Check, X, Car, Info, Users, ArrowRight,
  CheckCircle, XCircle, FileText, Plus, Minus, Calendar, ArrowLeft, Baby, UserCheck, AlertTriangle, Loader2,
  Pencil
} from 'lucide-react';

export type ChildAgeCategory = 'under5' | 'age5to9' | 'age10to14' | 'age15to17' | 'age18plus';

export interface ChildConfig {
  ageCategory: ChildAgeCategory;
}

export interface RoomConfig {
  adults: number;
  hasChildren: boolean;
  children: ChildConfig[];
}

export interface PassengerData {
  title: string;
  fullName: string;
  gender: string;
  age: string;
}

const DESTINATION_HOTEL_TIERS: Record<string, { standard: string; deluxe: string; luxury: string }> = {
  ayodhya: {
    standard: 'Royal Palm Inn (3★ Standard)',
    deluxe: 'Park Inn by Radisson Ayodhya / Cygnett Collection KK (4★ Deluxe)',
    luxury: 'Praveg Tent City Royal Suites / The Fern Residency Ayodhya (5★ Luxury)'
  },
  varanasi: {
    standard: 'Hotel Kashi Heritage / Treebo Prime Varanasi (3★ Standard)',
    deluxe: 'Madin Hotel / The Amayaa Varanasi (4★ Deluxe)',
    luxury: 'Radisson Hotel Varanasi / Ramada Plaza by Wyndham JHV (5★ Luxury)'
  },
  prayagraj: {
    standard: 'Hotel Kanha Shyam / Hotel Milan Palace (3★ Standard)',
    deluxe: 'Grand Continental Hotel / Legend Hotel Prayagraj (4★ Deluxe)',
    luxury: 'Welcomhotel by ITC Hotels Prayagraj (5★ Luxury)'
  },
  srinagar: {
    standard: 'Hotel Solar Residency / Grand Boulevard Srinagar (3★ Standard)',
    deluxe: 'Grand Mumtaz Srinagar / The Fern Residency (4★ Deluxe)',
    luxury: 'Radisson Collection Srinagar / Vivanta Dal View (5★ Luxury)'
  },
  gulmarg: {
    standard: 'Hotel Hilltop / Pine Palace Resort Gulmarg (3★ Standard)',
    deluxe: 'The Vintage Gulmarg / Royal Park Resort (4★ Deluxe)',
    luxury: 'Royal Park Resort / The Vintage Luxury Suites Gulmarg (5★ Luxury)'
  },
  pahalgam: {
    standard: 'Hotel Mountview / Pine Spring Pahalgam (3★ Standard)',
    deluxe: 'Hotel Pine N Peak / Kolahoi Green Resort (4★ Deluxe)',
    luxury: 'Radisson Golf Resort Pahalgam / Kolahoi Green Luxury (5★ Luxury)'
  },
  sonamarg: {
    standard: 'Hotel Snowland / Villa Himalaya Sonamarg (3★ Standard)',
    deluxe: 'Rah Villas / Hotel Glacier Heights (4★ Deluxe)',
    luxury: 'The Khyber Himalayan Glamping Sonamarg (5★ Luxury)'
  },
  manali: {
    standard: 'Hotel Snow Park / Treebo Trend Manali (3★ Standard)',
    deluxe: 'The Manali Inn / Apple Country Resort (4★ Deluxe)',
    luxury: 'Solang Valley Resort / Manuallaya The Resort Spa (5★ Luxury)'
  },
  shimla: {
    standard: 'Hotel Willow Banks / Treebo Prime Shimla (3★ Standard)',
    deluxe: 'The Fern Surya Resort / Fortune Select Cedar Trail (4★ Deluxe)',
    luxury: 'Radisson Hotel Shimla / Welcomhotel by ITC Shimla (5★ Luxury)'
  },
  jaipur: {
    standard: 'Sarovar Portico / Treebo Trend Jaipur (3★ Standard)',
    deluxe: 'Royal Orchid Central / Lemon Tree Premier Jaipur (4★ Deluxe)',
    luxury: 'Radisson Blu Jaipur / Holiday Inn City Centre (5★ Luxury)'
  },
  udaipur: {
    standard: 'Hotel Lakend / Treebo Trend Udaipur (3★ Standard)',
    deluxe: 'Fateh Garh Heritage / Justa Rajputana Udaipur (4★ Deluxe)',
    luxury: 'Radisson Blu Udaipur Palace / Justa Sajjangarh Resort (5★ Luxury)'
  },
  jodhpur: {
    standard: 'Treebo Trend / The Fern Residency Jodhpur (3★ Standard)',
    deluxe: 'Ranbanka Palace / Zone by The Park Jodhpur (4★ Deluxe)',
    luxury: 'Radisson Jodhpur / Welcomhotel by ITC Jodhpur (5★ Luxury)'
  },
  jaisalmer: {
    standard: 'Hotel Rang Mahal / Royal Desert Camp (3★ Standard)',
    deluxe: 'Desert Springs Resort / Desert Tulip Hotel & Resort (4★ Deluxe)',
    luxury: 'Jaisalmer Marriott Resort / Fort Rajwada Luxury Wing (5★ Luxury)'
  },
  goa: {
    standard: 'Treebo Trend / Whispering Palms Candolim (3★ Standard)',
    deluxe: 'Fairfield by Marriott / Novotel Goa Candolim (4★ Deluxe)',
    luxury: 'Radisson Blu Resort Goa / Fairfield by Marriott Benaulim (5★ Luxury)'
  },
  munnar: {
    standard: 'Tea Valley Resort / Fort Munnar (3★ Standard)',
    deluxe: 'The Leaf Munnar / Blanket Luxury Resort (4★ Deluxe)',
    luxury: 'Fragrant Nature Munnar / Chandys Windy Woods (5★ Luxury)'
  },
  thekkady: {
    standard: 'Hotel Sandra Palace / Treebo Trend (3★ Standard)',
    deluxe: 'Greenwoods Resort / The Elephant Court Thekkady (4★ Deluxe)',
    luxury: 'Spice Village (CGH Earth) / Poetree Sarovar (5★ Luxury)'
  },
  alleppey: {
    standard: 'Standard Traditional AC Houseboat (3★ CP)',
    deluxe: 'Deluxe 1-Bedroom Private Houseboat with All Meals (4★ Deluxe)',
    luxury: 'Super Deluxe Glass-Roof Palace Houseboat / Lake Palace Resort (5★ Luxury)'
  },
  kovalam: {
    standard: 'Hotel Sea Face / Treebo Trend Kovalam (3★ Standard)',
    deluxe: 'Uday Samudra Leisure Beach Hotel (4★ Deluxe)',
    luxury: 'Uday Samudra Luxury Suites / Turtle on the Beach (5★ Luxury)'
  },
  haridwar: {
    standard: 'Hotel Alpana / Treebo Trend Haridwar (3★ Standard)',
    deluxe: 'Golden Tulip Haridwar / Regenta Central (4★ Deluxe)',
    luxury: 'Radisson Blu Haridwar / Godwin Hotel (5★ Luxury)'
  },
  rishikesh: {
    standard: 'Hotel Ganga Kinare / Treebo Prime Rishikesh (3★ Standard)',
    deluxe: 'The Grand Shiva / Regenta Inn On The Ganges (4★ Deluxe)',
    luxury: 'Aloha On The Ganges / Sterling Palm Bliss (5★ Luxury)'
  },
  mussoorie: {
    standard: 'Hotel SunGrace / Treebo Trend Mussoorie (3★ Standard)',
    deluxe: 'The Fern Brentwood Resort / Fortune Resort Grace (4★ Deluxe)',
    luxury: 'Jaypee Residency Manor / Welcomhotel The Savoy (5★ Luxury)'
  },
  nainital: {
    standard: 'Hotel Himalaya / Treebo Trend Nainital (3★ Standard)',
    deluxe: 'The Naini Retreat / Shervani Hilltop (4★ Deluxe)',
    luxury: 'The Manu Maharani / Shervani Hilltop Luxury Wing (5★ Luxury)'
  },
  kedarnath: {
    standard: 'GMVN Tourist Bungalow / Hotel Kedarpuram (3★ Standard)',
    deluxe: 'Kedar River Retreat / Shivalik Valley Resort (4★ Deluxe)',
    luxury: 'Kedar Valley Luxury Heli-Resort (5★ Luxury)'
  },
  badrinath: {
    standard: 'Hotel Snow Crest / GMVN Badrinath (3★ Standard)',
    deluxe: 'Sarovar Portico Badrinath (4★ Deluxe)',
    luxury: 'Lord Palace / Sarovar Portico Luxury Suites (5★ Luxury)'
  },
  portblair: {
    standard: 'Hotel Megapode Nest / Treebo Trend Port Blair (3★ Standard)',
    deluxe: 'Symphony Samudra / Peerless Sarovar Portico (4★ Deluxe)',
    luxury: 'Symphony Samudra Luxury Suites / Peerless Sarovar (5★ Luxury)'
  },
  havelock: {
    standard: 'Havelock Holiday Beach Resort (3★ Standard)',
    deluxe: 'Symphony Palms Beach Resort / Silver Sand Beach (4★ Deluxe)',
    luxury: 'Symphony Palms Beach Resort / Silver Sand Luxury (5★ Luxury)'
  },
  neil: {
    standard: 'Tango Beach Resort Neil Island (3★ Standard)',
    deluxe: 'Summer Sands Beach Resort Neil (4★ Deluxe)',
    luxury: 'Sea Shell Neil Island (5★ Luxury)'
  },
  leh: {
    standard: 'Hotel Singge Palace / Treebo Trend Leh (3★ Standard)',
    deluxe: 'The Grand Dragon Ladakh / Zen Ladakh (4★ Deluxe)',
    luxury: 'The Grand Dragon Luxury Suites / Zen Ladakh (5★ Luxury)'
  },
  agra: {
    standard: 'Hotel Howard Plaza The Fern / Treebo Trend Agra (3★ Standard)',
    deluxe: 'Crystal Sarovar Premiere / Four Points by Sheraton (4★ Deluxe)',
    luxury: 'DoubleTree by Hilton Agra / Crystal Sarovar (5★ Luxury)'
  },
  amritsar: {
    standard: 'Hotel City Park / Treebo Trend Amritsar (3★ Standard)',
    deluxe: 'Best Western Plus / Bloom Hotel Amritsar (4★ Deluxe)',
    luxury: 'Radisson Blu Amritsar / Hyatt Regency Amritsar (5★ Luxury)'
  },
  mathura: {
    standard: 'Hotel Brijwasi Royal / Treebo Trend Mathura (3★ Standard)',
    deluxe: 'The Grand Radhey / Nidhivan Sarovar Portico (4★ Deluxe)',
    luxury: 'The Radha Ashok / Krishna Valley Luxury Resort (5★ Luxury)'
  },
  ujjain: {
    standard: 'Hotel Imperial Grand / Treebo Trend Ujjain (3★ Standard)',
    deluxe: 'Anjushree Hotel / Solitaire Hotel Ujjain (4★ Deluxe)',
    luxury: 'Rudraksh Club & Resort / Shipra Heritage Resort (5★ Luxury)'
  },
  dwarka: {
    standard: 'Hotel Guruprerna / Treebo Trend Dwarka (3★ Standard)',
    deluxe: 'Hawthorn Suites by Wyndham Dwarka / Goverdhan Greens (4★ Deluxe)',
    luxury: 'Mercure Dwarka / Lemon Tree Resort Dwarka (5★ Luxury)'
  },
  somnath: {
    standard: 'Hotel Lords Inn / Treebo Trend Somnath (3★ Standard)',
    deluxe: 'The Fern Residency Somnath / Sarovar Portico (4★ Deluxe)',
    luxury: 'Pride Divine Resort Somnath (5★ Luxury)'
  },
  puri: {
    standard: 'Hotel Golden Dust / Treebo Trend Puri (3★ Standard)',
    deluxe: 'Toshali Sands Resort / Hans Coco Palms Puri (4★ Deluxe)',
    luxury: 'Mayfair Waves Puri / Sterling Puri (5★ Luxury)'
  },
  darjeeling: {
    standard: 'Hotel Sinclairs / Treebo Trend Darjeeling (3★ Standard)',
    deluxe: 'The Elgin Darjeeling / Summit Swiss Heritage (4★ Deluxe)',
    luxury: 'Mayfair Darjeeling / Windamere Heritage Hotel (5★ Luxury)'
  },
  gangtok: {
    standard: 'Hotel Sonam Delek / Treebo Trend Gangtok (3★ Standard)',
    deluxe: 'The Fern Denzong / Lemon Tree Hotel Gangtok (4★ Deluxe)',
    luxury: 'Mayfair Spa Resort & Casino Gangtok (5★ Luxury)'
  },
  ooty: {
    standard: 'Hotel Lakeview / Treebo Trend Ooty (3★ Standard)',
    deluxe: 'Gem Park Ooty / Fortune Resort Sullivan Court (4★ Deluxe)',
    luxury: 'Fortune Resort Sullivan Court / Sterling Ooty Elk Hill (5★ Luxury)'
  },
  coorg: {
    standard: 'Hotel Coorg International / Treebo Trend (3★ Standard)',
    deluxe: 'The Tamara Coorg / Heritage Resort Coorg (4★ Deluxe)',
    luxury: 'The Tamara Coorg / Heritage Luxury Resort Coorg (5★ Luxury)'
  },
  kodaikanal: {
    standard: 'Hotel Kodai International / Treebo Trend (3★ Standard)',
    deluxe: 'The Carlton Kodaikanal / Sterling Kodai Lake (4★ Deluxe)',
    luxury: 'Tamara Kodai / Heritage Luxury Kodai Resort (5★ Luxury)'
  },
  tirupati: {
    standard: 'Hotel MountView Comforts (3★ Standard)',
    deluxe: 'Fortune Select Grand Ridge / Marasa Sarovar Premiere (4★ Deluxe)',
    luxury: 'Minerva Grand Tirupati / Fortune Select Grand (5★ Luxury)'
  },
  chennai: {
    standard: 'Kansone Hotel And Banquets (3★ Standard)',
    deluxe: 'The Residency Towers / Pride Hotel Chennai (4★ Deluxe)',
    luxury: 'The Leela Palace / ITC Grand Chola Chennai (5★ Luxury)'
  },
  mahabalipuram: {
    standard: 'Mamalla Beach Resort (3★ Standard)',
    deluxe: 'Grande Bay Resort and Spa / Chariot Beach Resort (4★ Deluxe)',
    luxury: 'Radisson Blu Resort Temple Bay Mamallapuram (5★ Luxury)'
  },
  mamallapuram: {
    standard: 'Mamalla Beach Resort (3★ Standard)',
    deluxe: 'Grande Bay Resort and Spa / Chariot Beach Resort (4★ Deluxe)',
    luxury: 'Radisson Blu Resort Temple Bay Mamallapuram (5★ Luxury)'
  },
  shirdi: {
    standard: 'Hotel Sai Leela / Treebo Trend Shirdi (3★ Standard)',
    deluxe: 'St Laurn The Spiritual Resort / Sun-n-Sand Shirdi (4★ Deluxe)',
    luxury: 'Shraddha Sarovar Portico / The Temple View 5★ (5★ Luxury)'
  },
  delhi: {
    standard: 'Bloomrooms @ New Delhi Station / Treebo Trend (3★ Standard)',
    deluxe: 'Lemon Tree Premier / Fortune Park East Delhi (4★ Deluxe)',
    luxury: 'Radisson Blu Plaza Delhi Airport / The Grand New Delhi (5★ Luxury)'
  },
  mumbai: {
    standard: 'Suba International / Treebo Trend Mumbai (3★ Standard)',
    deluxe: 'Courtyard by Marriott Mumbai / Radisson Blu (4★ Deluxe)',
    luxury: 'Courtyard by Marriott Mumbai / Radisson Blu Mumbai (5★ Luxury)'
  },
  hyderabad: {
    standard: 'The Cent Hotel Hyderabad (3★ Standard)',
    deluxe: 'Grand Continent Premier Banjara Hills (4★ Deluxe)',
    luxury: 'Courtyard by Marriott Hyderabad (5★ Luxury)'
  },
  srisailam: {
    standard: 'Hotel Haritha Srisailam (3★ Standard)',
    deluxe: 'Grand Akkamahadevi / Pathaleswara Sadan Deluxe (4★ Deluxe)',
    luxury: 'Ganga Sadan Luxury Suites Srisailam (5★ Luxury)'
  },
  araku: {
    standard: 'Vana Resort Araku (Standard Room) (3★ Standard)',
    deluxe: 'Vana Resort Araku (Deluxe Room) (4★ Deluxe)',
    luxury: 'The Gateway Hotel Beach Road / Novotel Varun Beach Vizag (5★ Luxury)'
  },
  visakhapatnam: {
    standard: 'Hotel Keys Select / Treebo Trend Vizag (3★ Standard)',
    deluxe: 'Four Points by Sheraton / The Park Visakhapatnam (4★ Deluxe)',
    luxury: 'Novotel Visakhapatnam Varun Beach / Radisson Blu (5★ Luxury)'
  },
  andhra: {
    standard: 'The Cent Hotel Hyderabad (3★ Standard)',
    deluxe: 'Grand Continent Premier Banjara Hills (4★ Deluxe)',
    luxury: 'Courtyard by Marriott Hyderabad (5★ Luxury)'
  }
};

// Multi-city night split generator derived from itinerary stays
export interface CityNightStay {
  city: string;
  nights: number;
  hotelName?: string;
  rating?: string;
}

export function deriveMultiCityNightSplit(pkg: HolidayPackage): CityNightStay[] {
  // 1. Highest Priority: Explicit author-defined hotels list from pkg.hotels
  if (Array.isArray(pkg.hotels) && pkg.hotels.length > 0) {
    const validHotels = pkg.hotels.filter((h) => h && (h.name || h.city));
    if (validHotels.length > 0) {
      return validHotels.map((h) => ({
        city: h.city || pkg.destination?.split(',')[0]?.trim() || 'Destination',
        nights: Number(h.nights) || 1,
        hotelName: h.name,
        rating: h.rating || '4.8',
      }));
    }
  }

  // 2. Try parsing night split from package name or theme (e.g. "2N Manali 1N Kasol 2N Shimla")
  const titleSearchText = [pkg.name || '', pkg.theme || ''].join(' ');
  const regex = /(\d+)\s*(?:N|Nights?)\s+([A-Za-z\s]+?)(?=(?:\s+\d+\s*(?:N|Nights?))|$|[,\-•|(/])/gi;
  const parsedFromTitle: CityNightStay[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(titleSearchText)) !== null) {
    const nights = parseInt(match[1], 10);
    const rawCity = match[2].trim();
    const cleanCity = rawCity.replace(/\b(Special|Tour|Package|Holiday|Trip|Days|Nights|Assam|Arunachal|Meghalaya)\b/gi, '').trim();
    if (nights > 0 && cleanCity.length >= 3) {
      parsedFromTitle.push({
        city: cleanCity.charAt(0).toUpperCase() + cleanCity.slice(1),
        nights,
      });
    }
  }

  const titleTotalNights = parsedFromTitle.reduce((acc, curr) => acc + curr.nights, 0);
  if (parsedFromTitle.length > 1 && titleTotalNights > 0 && Math.abs(titleTotalNights - (pkg.durationNights || 0)) <= 2) {
    return parsedFromTitle;
  }

  // 3. Derive from itinerary stays
  if (Array.isArray(pkg.itinerary) && pkg.itinerary.length > 0) {
    const knownCities = [
      'Kaziranga', 'Guwahati', 'Shillong', 'Cherrapunjee', 'Cherrapunji', 'Tawang', 'Dirang',
      'Bomdila', 'Bhalukpong', 'Tezpur', 'Jorhat', 'Majuli', 'Kohima', 'Imphal', 'Gangtok',
      'Pelling', 'Darjeeling', 'Lachung', 'Lachen', 'Namchi', 'Ravangla',
      'Manali', 'Shimla', 'Dharamshala', 'Dalhousie', 'Kasol', 'Kullu', 'Amritsar', 'Srinagar',
      'Gulmarg', 'Pahalgam', 'Sonamarg', 'Leh', 'Nubra', 'Pangong', 'Kargil', 'Haridwar',
      'Rishikesh', 'Mussoorie', 'Nainital', 'Auli', 'Chopta', 'Kedarnath', 'Badrinath',
      'Ayodhya', 'Varanasi', 'Prayagraj', 'Lucknow', 'Mathura', 'Vrindavan', 'Agra', 'Ujjain',
      'Gwalior', 'Khajuraho', 'Bhopal', 'Orchha', 'Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer',
      'Pushkar', 'Bikaner', 'Mount Abu', 'Ranthambore', 'Ahmedabad', 'Kutch', 'Dwarka', 'Somnath',
      'Gir', 'Goa', 'Mumbai', 'Lonavala', 'Mahabaleshwar', 'Munnar', 'Thekkady', 'Alleppey',
      'Kovalam', 'Kochi', 'Cochin', 'Wayanad', 'Varkala', 'Ooty', 'Kodaikanal', 'Coorg', 'Mysore',
      'Kabini', 'Hampi', 'Bangalore', 'Madurai', 'Rameshwaram', 'Kanyakumari', 'Tirupati',
      'Chennai', 'Mahabalipuram', 'Mamallapuram',
      'Araku', 'Visakhapatnam', 'Vizag', 'Hyderabad',
      'Pondicherry', 'Andaman', 'Port Blair', 'Havelock', 'Neil', 'Dubai', 'Abu Dhabi', 'Bangkok',
      'Pattaya', 'Phuket', 'Krabi', 'Singapore', 'Bali', 'Kuala Lumpur', 'Hanoi', 'Da Nang',
      'Ho Chi Minh', 'Baku', 'Tbilisi', 'Almaty', 'Kathmandu', 'Pokhara', 'Male', 'Paris', 'Zurich',
      'Lucerne', 'Interlaken', 'Rome', 'Venice'
    ];

    const totalNights = pkg.durationNights || Math.max(1, pkg.itinerary.length - 1);
    const nightCities: string[] = [];

    for (let dayNum = 1; dayNum <= totalNights; dayNum++) {
      const dayItem = pkg.itinerary.find((d) => d.dayNumber === dayNum) || pkg.itinerary[dayNum - 1];
      if (!dayItem) break;

      const title = (dayItem.title || '').trim();
      const hotel = (dayItem.hotel || '').trim();
      const desc = (dayItem.description || '').trim();

      let stayCity: string | null = null;

      // Check hotel string for known city
      for (const city of knownCities) {
        if (hotel.toLowerCase().includes(city.toLowerCase())) {
          stayCity = city;
          break;
        }
      }

      // Check title pattern (e.g. "Drive to Dirang", "Transfer to Tawang", "Arrival in Kaziranga")
      if (!stayCity) {
        const toMatch = title.match(/(?:to|transfer to|drive to|reach|arrival in|arrive at)\s+([A-Za-z]+)/i);
        if (toMatch && toMatch[1]) {
          const candidate = toMatch[1].trim();
          const found = knownCities.find((c) => c.toLowerCase() === candidate.toLowerCase());
          if (found) stayCity = found;
        }
      }

      // Check title for known city
      if (!stayCity) {
        for (const city of knownCities) {
          if (title.toLowerCase().includes(city.toLowerCase())) {
            stayCity = city;
            break;
          }
        }
      }

      // Check description for known city
      if (!stayCity) {
        for (const city of knownCities) {
          if (desc.toLowerCase().includes(city.toLowerCase())) {
            stayCity = city;
            break;
          }
        }
      }

      // Fallback to previous night or primary destination
      if (!stayCity) {
        stayCity = nightCities[nightCities.length - 1] || pkg.destination?.split(',')[0]?.split(' ')[0] || 'City';
      }

      nightCities.push(stayCity);
    }

    if (nightCities.length > 0) {
      const grouped: { city: string; nights: number }[] = [];
      for (const c of nightCities) {
        const last = grouped[grouped.length - 1];
        if (last && last.city.toLowerCase() === c.toLowerCase()) {
          last.nights += 1;
        } else {
          grouped.push({ city: c, nights: 1 });
        }
      }
      if (grouped.length > 0) {
        return grouped;
      }
    }
  }

  // Fallback: single destination
  return [{
    city: pkg.destination || 'Destination',
    nights: pkg.durationNights || 5,
  }];
}

/**
 * Real-world Indian tourism standard meal scheduling (MAP / Half Board):
 * - Day 1 (Arrival / Check-in): Check-in is in afternoon. Dinner is served at hotel. NEVER breakfast on Day 1 morning before check-in.
 * - In-between Days (Day 2 to N-1): Full day hotel stay includes Breakfast & Dinner.
 * - Day N (Departure / Check-out): Morning Breakfast at hotel before 11:00 AM checkout. NEVER dinner after checkout.
 * - 1-Day Same Day Excursion: Explicit meal or Welcome Refreshments / Lunch.
 */
export function getSanitizedDayMeals(
  dayNumber: number,
  totalDays: number,
  explicitMeals?: string[] | string,
  mealPlan?: string
): string[] {
  const plan = (mealPlan || '').toLowerCase();
  const isBreakfastOnly = plan.includes('cp') || plan.includes('breakfast only') || plan.includes('ep');
  const isAllMeals = plan.includes('ap') || plan.includes('all meals') || plan.includes('american plan');

  if (totalDays <= 1) {
    if (explicitMeals) {
      const arr = Array.isArray(explicitMeals) ? explicitMeals : String(explicitMeals).split(',');
      const cleaned = arr.map((m) => m.trim()).filter(Boolean);
      if (cleaned.length > 0) return cleaned;
    }
    return ['Welcome Refreshments', 'Lunch / Snacks'];
  }

  // Day 1 (Arrival / Check-in Day)
  if (dayNumber === 1) {
    if (isBreakfastOnly) {
      return ['Welcome Drink on Arrival'];
    }
    if (explicitMeals) {
      const arr = Array.isArray(explicitMeals) ? explicitMeals : String(explicitMeals).split(',');
      const cleaned = arr.map((m) => m.trim()).filter(Boolean);
      // Remove any erroneous "Breakfast" from Day 1 check-in
      const nonBreakfast = cleaned.filter((m) => !/breakfast/i.test(m));
      if (nonBreakfast.length > 0) return nonBreakfast;
    }
    return ['Dinner Included'];
  }

  // Day N (Final Departure / Check-out Day)
  if (dayNumber === totalDays) {
    if (explicitMeals) {
      const arr = Array.isArray(explicitMeals) ? explicitMeals : String(explicitMeals).split(',');
      const cleaned = arr.map((m) => m.trim()).filter(Boolean);
      // Remove any erroneous "Dinner" from final checkout day
      const nonDinner = cleaned.filter((m) => !/dinner/i.test(m));
      if (nonDinner.length > 0) return nonDinner;
    }
    return ['Buffet Breakfast'];
  }

  // Intermediate Days (Day 2 to totalDays - 1)
  if (isBreakfastOnly) {
    return ['Buffet Breakfast'];
  }
  if (isAllMeals) {
    return ['Buffet Breakfast', 'Lunch', 'Dinner Included'];
  }
  return ['Buffet Breakfast', 'Dinner Included'];
}

/**
 * Cleans and extracts actual sightseeing landmarks, temples, and attractions.
 * Replaces generic placeholders like "Sightseeing & Transfers" with real places
 * extracted from dayTitle, dayDescription, and itinerary context.
 */
export function getSanitizedSightseeingActivities(
  dayTitle: string,
  dayDescription: string,
  rawActivities?: string | string[],
  dayNumber: number = 1,
  totalDays: number = 1
): string[] {
  const genericPatterns = [
    /^sightseeing\s*(&|\+|and)?\s*transfers?$/i,
    /^sightseeing$/i,
    /^transfers?$/i,
    /^local\s*sightseeing(\s*(&|\+|and)?\s*experiences?)?$/i,
    /^day\s*\d+\s*(sightseeing|exploration|tour)?$/i,
    /^tour$/i,
    /^check-?out,\s*airport\s*\/\s*station\s*transfer$/i,
    /^airport\s*\/\s*station\s*drop$/i,
  ];

  let list: string[] = [];
  if (rawActivities) {
    const rawArr = Array.isArray(rawActivities) ? rawActivities : String(rawActivities).split(',');
    list = rawArr
      .map((a) => a.trim())
      .filter((a) => {
        if (!a || a.length < 3) return false;
        return !genericPatterns.some((pattern) => pattern.test(a));
      });
  }

  // If valid specific activities were provided, return them!
  if (list.length > 0) {
    return list;
  }

  // Otherwise, smartly extract real places and attractions from dayTitle and dayDescription
  const combinedText = `${dayTitle || ''}. ${dayDescription || ''}`.replace(/\s+/g, ' ');
  const extracted: string[] = [];

  // Match known landmark patterns: Mandir, Temple, Fort, Beach, Ghat, Palace, Ashram, Falls, Lake, etc.
  const landmarkMatches = combinedText.match(
    /(?:Shri\s+|Lord\s+)?([A-Z][A-Za-z0-9'&.\s]{2,40}?(?:Mandir|Temple|Fort|Palace|Beach|Ghat|Ghats|Aarti|Mahal|Falls|Lake|Sanctuary|Museum|Caves|Ashram|Dham|Memorial|Resort|Park|Bazaar|Valley|Pass|Viewpoint|Museum|Garden|Bridge))/g
  );
  if (landmarkMatches) {
    landmarkMatches.forEach((m) => {
      const clean = m.trim();
      if (clean.length > 4 && !extracted.some((e) => e.toLowerCase() === clean.toLowerCase())) {
        extracted.push(clean);
      }
    });
  }

  // Extract from title if title has segments separated by &, +, -, or |
  const titleParts = (dayTitle || '')
    .replace(/^Day\s*\d+\s*[:\-]\s*/i, '')
    .split(/[&+|•–—,-]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 4 && !genericPatterns.some((p) => p.test(s)));

  titleParts.forEach((part) => {
    if (!extracted.some((e) => e.toLowerCase() === part.toLowerCase())) {
      extracted.push(part);
    }
  });

  // If still empty or minimal, build context-aware meaningful steps:
  if (extracted.length === 0) {
    if (dayNumber === 1) {
      extracted.push('Airport / Station Pickup & Hotel Check-in');
      extracted.push('Evening Local Promenade & Sunset View');
    } else if (dayNumber === totalDays) {
      extracted.push('Morning Hotel Breakfast & Leisure');
      extracted.push('Local Souvenir Shopping & Market Stroll');
      extracted.push('Departure Drop to Airport / Railway Station');
    } else {
      extracted.push('Full Day Guided Sightseeing & Landmark Visits');
      extracted.push('Photo-Stops at Scenic Viewpoints & Heritage Sites');
    }
  }

  return extracted.slice(0, 6);
}

export function PackageDetailClientView({
  params,
  initialPackage,
}: {
  params: { destination: string; package: string };
  initialPackage?: HolidayPackage | null;
}) {
  const router = useRouter();
  const { user, login } = useAuth();

  const decodedPkgParam = decodeURIComponent(params.package || '').toLowerCase().trim();
  const decodedDestParam = decodeURIComponent(params.destination || '').toLowerCase().trim();

  const strippedTarget = decodedPkgParam.replace(/^pkg-/, '');
  const isStrictMatch = (p: HolidayPackage) =>
    p.slug.toLowerCase() === decodedPkgParam ||
    p.id.toLowerCase() === decodedPkgParam ||
    p.slug.toLowerCase().replace(/^pkg-/, '') === strippedTarget ||
    p.id.toLowerCase().replace(/^pkg-/, '') === strippedTarget;

  // Multi-tier package lookup:
  // 1. Direct check in cloudStore custom packages (browser) - guarantees user edits take immediate effect!
  // 2. initialPackage (from server SSR)
  // 3. Exact match in catalog
  const [activePkg, setActivePkg] = useState<HolidayPackage | null>(() => {
    if (typeof window !== 'undefined') {
      const customList = cloudStore.getCustomPackages();
      const customMatch = customList.find(isStrictMatch);
      if (customMatch) return customMatch;
    }

    if (initialPackage) return initialPackage;

    const found = findCatalogPackage(decodedDestParam, decodedPkgParam);
    if (found && isStrictMatch(found)) {
      return found;
    }

    return null;
  });

  // Realtime synchronization: listen for package edits & cloud updates
  useEffect(() => {
    const handlePackageUpdate = () => {
      const customList = cloudStore.getCustomPackages();
      const customMatch = customList.find(isStrictMatch);
      if (customMatch) {
        setActivePkg(customMatch);
      }
    };
    window.addEventListener('storage', handlePackageUpdate);
    window.addEventListener('cloudstore_update', handlePackageUpdate);
    return () => {
      window.removeEventListener('storage', handlePackageUpdate);
      window.removeEventListener('cloudstore_update', handlePackageUpdate);
    };
  }, [decodedPkgParam, decodedDestParam]);

  const [isLoadingApi, setIsLoadingApi] = useState<boolean>(!activePkg);

  useEffect(() => {
    if (!activePkg) {
      setIsLoadingApi(true);
      fetch(
        `/api/packages?slug=${encodeURIComponent(decodedPkgParam)}&destination=${encodeURIComponent(decodedDestParam)}`
      )
        .then((r) => r.json())
        .then((data) => {
          if (data.success && data.package) {
            setActivePkg(data.package);
            cloudStore.saveCustomPackages([data.package]);
          }
        })
        .catch(() => {})
        .finally(() => {
          setIsLoadingApi(false);
        });
    }
  }, [decodedPkgParam, decodedDestParam, activePkg]);

  // Dynamically update browser tab title to match package name
  useEffect(() => {
    if (activePkg?.name && activePkg.name !== 'Loading Package...') {
      document.title = `${activePkg.name} | Trip Customizer`;
    }
  }, [activePkg?.name]);

  // Safe reference for state hooks before render (strictly typed)
  const pkg: HolidayPackage = activePkg || getAllCatalogPackages()[0];
  const cityNightSplit = useMemo(() => deriveMultiCityNightSplit(pkg), [pkg]);

  // Active Main Sub-Tab State
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'summary' | 'highlights' | 'faqs'>('itinerary');
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (idx: number) => {
    if (openFaqs.includes(idx)) {
      setOpenFaqs(openFaqs.filter((f) => f !== idx));
    } else {
      setOpenFaqs([...openFaqs, idx]);
    }
  };

  // Itinerary Tab State
  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [activeDayFilter, setActiveDayFilter] = useState<number | 'all'>('all');

  // Inclusions Tab Filter
  const [inclusionCategory, setInclusionCategory] = useState<'all' | 'hotels' | 'sightseeing' | 'meals' | 'transfers' | 'exclusions'>('all');

  // Admin Quick Package Editor State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Pricing & Tier State: Defaults to the package's native baseline hotel category (3★ Standard, 4★ Deluxe, or 5★ Luxury)
  const isPremium = useMemo(() => isPremiumPackage(pkg), [pkg]);
  const allowedTiers = useMemo(() => getPackageAllowedTiers(pkg), [pkg]);
  const baselineTier = useMemo(
    () => getPackageBaselineTier(pkg.hotelCategory, pkg.name, pkg.slug),
    [pkg.hotelCategory, pkg.name, pkg.slug]
  );
  const [tourTier, setTourTier] = useState<'standard' | 'deluxe' | 'luxury'>(() => {
    const base = getPackageBaselineTier(pkg?.hotelCategory, pkg?.name, pkg?.slug);
    const tiers = getPackageAllowedTiers(pkg);
    if (!tiers.includes(base)) return tiers[0] || 'standard';
    return base;
  });

  useEffect(() => {
    const base = getPackageBaselineTier(pkg?.hotelCategory, pkg?.name, pkg?.slug);
    const tiers = getPackageAllowedTiers(pkg);
    if (!tiers.includes(tourTier)) {
      setTourTier(tiers.includes(base) ? base : tiers[0] || 'standard');
    }
  }, [pkg?.id, pkg?.hotelCategory, pkg?.name, pkg?.slug, allowedTiers, baselineTier, tourTier]);

  // Thomas Cook Style Travel Details & Calculate Price Wizard View State
  const [isCalculatePriceView, setIsCalculatePriceView] = useState(false);
  
  // Dynamic Joining Location State based on package destination
  const defaultJoiningOption = `Joining Direct in ${pkg.destination} (Bus/Train/Self-Reach)`;
  const [joiningCity, setJoiningCity] = useState(defaultJoiningOption);
  const [travelDate, setTravelDate] = useState('2026-09-25');
  
  useEffect(() => {
    if (pkg?.destination) {
      setJoiningCity(`Joining Direct in ${pkg.destination} (Bus/Train/Self-Reach)`);
    }
  }, [pkg?.destination]);

  // Clean & Intuitive Room Configuration State
  const [rooms, setRooms] = useState<RoomConfig[]>([
    { adults: 2, hasChildren: false, children: [] }
  ]);

  // Passenger Names & Details State
  const [passengers, setPassengers] = useState<Record<string, PassengerData>>({});

  // Contact Details Form State
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [isPriceCalculated, setIsPriceCalculated] = useState(false);

  // Callback Form State
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  // Toast / Share State
  const [shareToast, setShareToast] = useState(false);

  // Coupon / Promo Code State & Capped Travel Promo Vouchers
  const [promoInput, setPromoInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; percent?: number; amount?: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  const VALID_COUPONS: Record<string, { amount: number; minSpend: number; label: string }> = {
    WELCOME1000: { amount: 1000, minSpend: 20000, label: '₹1,000 Flat Welcome Voucher' },
    EARLYBIRD: { amount: 1500, minSpend: 35000, label: '₹1,500 Flat Early Bird Bonus' },
    HOLIDAY2500: { amount: 2500, minSpend: 50000, label: '₹2,500 Flat Festive Saver' },
  };

  const handleApplyCoupon = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanCode = promoInput.trim().toUpperCase();
    if (!cleanCode) {
      setCouponError('Please enter a valid coupon code.');
      return;
    }
    const matched = VALID_COUPONS[cleanCode];
    if (matched) {
      if (calculatedTotalPriceWithGst < matched.minSpend) {
        setCouponError(`Code "${cleanCode}" requires minimum booking of ₹${matched.minSpend.toLocaleString('en-IN')}.`);
        return;
      }
      setAppliedCoupon({
        code: cleanCode,
        amount: matched.amount,
      });
      setCouponError('');
    } else {
      setCouponError(`Invalid code "${cleanCode}". Try EARLYBIRD or HOLIDAY2500.`);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setPromoInput('');
    setCouponError('');
  };

  // Saved Co-Travellers List for 1-Click Passenger Selection
  const [savedCoTravellers, setSavedCoTravellers] = useState<CoTraveller[]>([]);

  useEffect(() => {
    const userCo = user ? cloudStore.getCoTravellers(user.uid) : [];
    setSavedCoTravellers(userCo);

    if (user) {
      setContactName(user.name || '');
      setContactEmail(user.email || '');
      setContactPhone(user.phone || '');
    }
  }, [user]);

  // Helper to select a saved co-traveller into a passenger field
  const selectCoTraveller = (pKey: string, coTravellerId: string) => {
    const found = savedCoTravellers.find((c) => c.id === coTravellerId);
    if (!found) return;
    setPassengers((prev) => {
      const updated = {
        ...prev,
        [pKey]: {
          title: found.gender === 'Female' ? (found.age < 18 ? 'Miss' : 'Mrs') : (found.age < 18 ? 'Master' : 'Mr'),
          fullName: found.name,
          gender: found.gender || 'Male',
          age: String(found.age || ''),
        },
      };
      if (pKey === 'r0_adult_0') {
        setContactName(found.name);
      }
      return updated;
    });
  };

  // 1-Click Auto-Fill All Passengers from Saved Co-Travellers & Logged-in User
  const autoFillAllPassengers = () => {
    const pool: { name: string; age: number; gender: string; title: string }[] = [];

    // Add logged-in user if available
    if (user?.name) {
      pool.push({
        name: user.name,
        age: 28,
        gender: 'Male',
        title: 'Mr',
      });
    }

    // Add saved co-travellers
    savedCoTravellers.forEach((c) => {
      if (!pool.some((p) => p.name.toLowerCase() === c.name.toLowerCase())) {
        pool.push({
          name: c.name,
          age: c.age || 25,
          gender: c.gender || 'Male',
          title: c.gender === 'Female' ? (c.age < 18 ? 'Miss' : 'Mrs') : (c.age < 18 ? 'Master' : 'Mr'),
        });
      }
    });

    let poolIdx = 0;
    const newPassengers: Record<string, PassengerData> = { ...passengers };

    rooms.forEach((room, roomIdx) => {
      for (let a = 0; a < room.adults; a++) {
        const pKey = `r${roomIdx}_adult_${a}`;
        if (!newPassengers[pKey]?.fullName && poolIdx < pool.length) {
          const item = pool[poolIdx++];
          newPassengers[pKey] = {
            title: item.title,
            fullName: item.name,
            gender: item.gender,
            age: String(item.age),
          };
          if (pKey === 'r0_adult_0') {
            setContactName(item.name);
          }
        }
      }

      if (room.hasChildren) {
        room.children.forEach((_, cIdx) => {
          const cKey = `r${roomIdx}_child_${cIdx}`;
          if (!newPassengers[cKey]?.fullName && poolIdx < pool.length) {
            const item = pool[poolIdx++];
            newPassengers[cKey] = {
              title: item.gender === 'Female' ? 'Miss' : 'Master',
              fullName: item.name,
              gender: item.gender,
              age: String(item.age),
            };
          }
        });
      }
    });

    setPassengers(newPassengers);
  };

  // Helper to update individual passenger field
  const updatePassengerField = (key: string, field: keyof PassengerData, val: string) => {
    setPassengers((prev) => {
      const updated = {
        ...prev,
        [key]: {
          title: prev[key]?.title || 'Mr',
          fullName: prev[key]?.fullName || '',
          gender: prev[key]?.gender || 'Male',
          age: prev[key]?.age || '',
          [field]: val,
        },
      };

      // Auto-sync Lead Passenger (r0_adult_0) name with contactName
      if (key === 'r0_adult_0' && field === 'fullName') {
        setContactName(val);
      }

      return updated;
    });
  };

  // Room & Children Helper Functions
  const updateAdults = (roomIdx: number, delta: number) => {
    const updated = [...rooms];
    const newAdults = Math.max(1, Math.min(6, updated[roomIdx].adults + delta));
    updated[roomIdx].adults = newAdults;
    setRooms(updated);
    setIsPriceCalculated(false);
  };

  const setHasChildren = (roomIdx: number, hasChild: boolean) => {
    const updated = [...rooms];
    updated[roomIdx].hasChildren = hasChild;
    if (!hasChild) {
      updated[roomIdx].children = [];
    } else if (updated[roomIdx].children.length === 0) {
      updated[roomIdx].children = [{ ageCategory: 'age5to9' }];
    }
    setRooms(updated);
    setIsPriceCalculated(false);
  };

  const setChildrenCount = (roomIdx: number, count: number) => {
    const updated = [...rooms];
    const currentList = updated[roomIdx].children;
    if (count > currentList.length) {
      const added = Array(count - currentList.length).fill(null).map(() => ({ ageCategory: 'age5to9' as ChildAgeCategory }));
      updated[roomIdx].children = [...currentList, ...added];
    } else {
      updated[roomIdx].children = currentList.slice(0, count);
    }
    setRooms(updated);
    setIsPriceCalculated(false);
  };

  const updateChildAgeCategory = (roomIdx: number, childIdx: number, ageCat: ChildAgeCategory) => {
    const updated = [...rooms];
    updated[roomIdx].children[childIdx].ageCategory = ageCat;
    setRooms(updated);
    setIsPriceCalculated(false);
  };

  const addRoom = () => {
    if (rooms.length < 4) {
      setRooms([...rooms, { adults: 2, hasChildren: false, children: [] }]);
      setIsPriceCalculated(false);
    }
  };

  const removeRoom = (idx: number) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== idx));
      setIsPriceCalculated(false);
    }
  };

  // Aggregated Travellers Breakdown
  const totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
  const allChildren = rooms.flatMap((r) => r.children);

  // Exact Age Categories Breakdown
  const totalUnder5 = allChildren.filter((c) => c.ageCategory === 'under5').length; // FREE (0%)
  const totalAge5to9 = allChildren.filter((c) => c.ageCategory === 'age5to9').length; // 50%
  const totalAge10to14 = allChildren.filter((c) => c.ageCategory === 'age10to14').length; // 80% (Child with bed)
  const totalAge15to17 = allChildren.filter((c) => c.ageCategory === 'age15to17').length; // 80%
  const totalAge18plus = allChildren.filter((c) => c.ageCategory === 'age18plus').length; // 100% (Full Adult)

  const effectiveAdultsCount = totalAdults + totalAge18plus;
  const totalChildrenCount = allChildren.length;
  const totalTravellersCount = totalAdults + totalChildrenCount;

  // Pricing calculations based on tier, PAX group sharing & detailed child ages
  // 1 Adult (Solo): Solo supplement for private room + dedicated private vehicle (+40%)
  // 2 Adults (Couple / Twin Sharing): Standard baseline OTA rate (1.00x)
  // 3 Adults: Triple sharing (1.00x)
  // 4+ Adults: Family / Group sharing (0.95x discount)
  const paxMultiplier =
    effectiveAdultsCount === 1 ? 1.40 :
    effectiveAdultsCount <= 3 ? 1.00 :
    0.95;

  // Comprehensive Dynamic Multi-Tier Pricing Engine:
  // Guaranteed exact match between catalog card (outside) and detail page (inside) on initial load,
  // respecting whether the package baseline is 3★ Standard, 4★ Deluxe, or 5★ Luxury.
  const calculateTierPrice = (targetTier: 'standard' | 'deluxe' | 'luxury'): number => {
    // 1. Explicit override check first
    const explicitPrices = getPackageTierPrices(pkg);
    if (explicitPrices && explicitPrices[targetTier]) {
      return explicitPrices[targetTier]!;
    }

    const baseStartingPrice = Math.min(pkg.startingPrice, pkg.discountPrice || pkg.startingPrice);
    const baseTier = baselineTier;

    const nights = Math.max(1, pkg.durationNights || 1);
    const days = Math.max(1, pkg.durationDays || (nights + 1));
    const dest = (pkg.destinationSlug || pkg.destination || '').toLowerCase();

    const isHill =
      dest.includes('kashmir') ||
      dest.includes('himachal') ||
      dest.includes('manali') ||
      dest.includes('shimla') ||
      dest.includes('ladakh') ||
      dest.includes('sikkim') ||
      dest.includes('darjeeling') ||
      dest.includes('uttarakhand');

    // Upgrade costs per person from 3★ to 4★ (Room difference / 2 + Ertiga Cab upgrade / 2)
    const diff4StarRoomPerNight = isHill ? 1800 : 1500;
    const diff4StarCabPerDay = 600;
    const upgradeCost3to4 = Math.round(((nights * diff4StarRoomPerNight) + (days * diff4StarCabPerDay) + 500) * 1.22 / 100) * 100;

    // Upgrade costs per person from 4★ to 5★ (Commercial 5★ Room diff / 2 + Innova Crysta Cab upgrade / 2)
    const diff5StarRoomPerNight = isHill ? 3600 : 3100;
    const diff5StarCabPerDay = 800;
    const upgradeCost4to5 = Math.round(((nights * diff5StarRoomPerNight) + (days * diff5StarCabPerDay) + 1000) * 1.22 / 100) * 100;

    const upgradeCost3to5 = upgradeCost3to4 + upgradeCost4to5;

    // International packages dynamic tier calculation
    if (pkg.isInternational) {
      if (baseTier === 'standard') {
        if (targetTier === 'standard') return baseStartingPrice;
        if (targetTier === 'deluxe') return Math.round(baseStartingPrice * 1.25);
        return Math.round(baseStartingPrice * 1.65);
      } else if (baseTier === 'deluxe') {
        if (targetTier === 'deluxe') return baseStartingPrice;
        if (targetTier === 'standard') return Math.max(9999, Math.round(baseStartingPrice / 1.25));
        return Math.round(baseStartingPrice * 1.32);
      } else {
        // baseTier === 'luxury'
        if (targetTier === 'luxury') return baseStartingPrice;
        if (targetTier === 'deluxe') return Math.max(9999, Math.round(baseStartingPrice / 1.32));
        return Math.max(9999, Math.round(baseStartingPrice / 1.65));
      }
    }

    // Domestic Package Pricing based on package baseline tier
    if (baseTier === 'standard') {
      if (targetTier === 'standard') return baseStartingPrice;
      if (targetTier === 'deluxe') return baseStartingPrice + upgradeCost3to4;
      return baseStartingPrice + upgradeCost3to5;
    } else if (baseTier === 'deluxe') {
      if (targetTier === 'deluxe') return baseStartingPrice;
      if (targetTier === 'standard') return Math.max(4999, baseStartingPrice - upgradeCost3to4);
      return baseStartingPrice + upgradeCost4to5;
    } else {
      // baseTier === 'luxury'
      if (targetTier === 'luxury') return baseStartingPrice;
      if (targetTier === 'deluxe') return Math.max(4999, baseStartingPrice - upgradeCost4to5);
      return Math.max(4999, baseStartingPrice - upgradeCost3to5);
    }
  };

  const calculatedBaseRate = calculateTierPrice(tourTier);
  const basePricePerPerson = Math.round(calculatedBaseRate * paxMultiplier);
  const explicitPrices = getPackageTierPrices(pkg);
  const isBaselineTier = tourTier === baselineTier;
  const isUpgradeQuoteTier = !isBaselineTier && (!explicitPrices || !explicitPrices[tourTier]);
  const originalPricePerPerson =
    isBaselineTier && pkg.discountPrice && pkg.discountPrice > pkg.startingPrice
      ? Math.round(pkg.discountPrice * paxMultiplier)
      : Math.round(basePricePerPerson * 1.20);
  const discountPercent =
    originalPricePerPerson > basePricePerPerson
      ? Math.round(((originalPricePerPerson - basePricePerPerson) / originalPricePerPerson) * 100)
      : 18;

  // Helper to strip any category suffix like "(3★ Standard)", "(4-Star Deluxe)", etc.
  const cleanHotelName = (name: string): string => {
    let cleaned = (name || '')
      .replace(/\s*\([^)]*(?:★|Star|Deluxe|Standard|Luxury|Category|MAP with Dinner|Cultural Show|CP)[^)]*\)/gi, '')
      .replace(/\s*\([345]-Star[^)]*\)/gi, '')
      .trim();

    if (isPremium) {
      cleaned = cleaned
        .replace(/\b3\s*(?:-| )?(?:Star|★)?\s*Standard\b/gi, '')
        .replace(/\b3\s*(?:-| )?(?:Star|★)\b/gi, '')
        .replace(/\bTreebo\s*Trend\b/gi, 'Novotel / Lemon Tree')
        .replace(/\bGinger\b/gi, 'Fortune Park')
        .replace(/\bStandard Hotel\b/gi, 'Deluxe Hotel')
        .replace(/\bStandard Accommodation\b/gi, 'Deluxe Accommodation')
        .trim();
    }

    return cleaned;
  };

  // Dynamic Tier-Based Hotel Resolution Helper (MakeMyTrip 3-Star, 4-Star & 5-Star Tiers)
  const getTierHotelName = (
    originalHotel: string | undefined,
    dayTitleOrCity: string | undefined,
    tier: 'standard' | 'deluxe' | 'luxury'
  ) => {
    const raw = (originalHotel || '').toLowerCase();
    const title = (dayTitleOrCity || '').toLowerCase();

    // Check for departure day
    if (
      raw.includes('departure') ||
      title.includes('departure') ||
      raw.includes('airport drop') ||
      raw.includes('check-out') ||
      title.includes('airport / station') ||
      title.includes('onward journey') ||
      title.includes('drop to airport') ||
      title.includes('checkout & fly')
    ) {
      return 'Check-out completed (Departure Day)';
    }

    // Explicit hotel override for package
    const explicitHotels = getPackageTierHotels(pkg);
    if (explicitHotels && explicitHotels[tier]) {
      return explicitHotels[tier]!;
    }

    // Look for author-defined hotel in pkg.hotels or pkg.itinerary
    let candidateHotel = originalHotel;
    if (!candidateHotel && dayTitleOrCity) {
      const cityClean = dayTitleOrCity.toLowerCase().trim();
      const inHotels = pkg.hotels?.find(
        (h) =>
          (h.city || '').toLowerCase().trim().includes(cityClean) ||
          cityClean.includes((h.city || '').toLowerCase().trim())
      )?.name;
      if (inHotels) {
        candidateHotel = inHotels;
      } else {
        const inItinerary = pkg.itinerary?.find(
          (d) =>
            d.hotel &&
            d.hotel.trim().length > 2 &&
            !d.hotel.toLowerCase().includes('check-out') &&
            !d.hotel.toLowerCase().includes('standard hotel') &&
            ((d.title || '').toLowerCase().includes(cityClean) ||
              (d.hotel || '').toLowerCase().includes(cityClean))
        )?.hotel;
        if (inItinerary) candidateHotel = inItinerary;
      }
    }

    if (!candidateHotel && pkg.hotels?.[0]?.name) {
      candidateHotel = pkg.hotels[0].name;
    }

    // If an author hotel exists and we are rendering standard baseline tier, ALWAYS honor it!
    if (candidateHotel && candidateHotel.trim().length > 2 && tier === 'standard') {
      const cleaned = cleanHotelName(candidateHotel);
      if (cleaned.length > 2) return cleaned;
    }

    // If originalHotel is already defined
    if (
      originalHotel &&
      originalHotel.trim().length > 3 &&
      (!isPremium || (!originalHotel.toLowerCase().includes('3-star') && !originalHotel.toLowerCase().includes('standard')))
    ) {
      const cleaned = cleanHotelName(originalHotel);
      if (cleaned.length > 2) return cleaned;
    }

    const effectiveTier = isPremium && tier === 'standard' ? 'deluxe' : tier;

    // Check for Houseboat
    if (raw.includes('houseboat') || title.includes('houseboat') || title.includes('shikara')) {
      if (tier === 'standard') return 'Dal Lake Standard Heritage Houseboat';
      if (tier === 'luxury') return 'Dal Lake Royal Palace Super Deluxe Houseboat';
      return 'Dal Lake Luxury Heritage Houseboat';
    }

    // Check for Desert Camp
    if (
      raw.includes('camp') ||
      raw.includes('tent') ||
      title.includes('dunes') ||
      title.includes('camp') ||
      title.includes('safari stay')
    ) {
      if (tier === 'standard') return 'Sam Sand Dunes Comfort Swiss Desert Camp';
      if (tier === 'luxury') return 'Suryagarh / Sam Luxury Glamping Desert Palace';
      return 'Sam Sand Dunes Royal Swiss Desert Resort';
    }

    // Target destination key matching - check raw (hotel name/city) FIRST to ensure accuracy
    let matchedKey: string | null = null;

    if (raw.includes('ayodhya') || raw.includes('ramayana')) {
      matchedKey = 'ayodhya';
    } else if (raw.includes('varanasi') || raw.includes('kashi') || raw.includes('banaras')) {
      matchedKey = 'varanasi';
    } else if (raw.includes('prayagraj') || raw.includes('kanha shyam')) {
      matchedKey = 'prayagraj';
    } else if (raw.includes('srinagar')) {
      matchedKey = 'srinagar';
    } else if (raw.includes('gulmarg')) {
      matchedKey = 'gulmarg';
    } else if (raw.includes('pahalgam')) {
      matchedKey = 'pahalgam';
    } else if (raw.includes('sonamarg')) {
      matchedKey = 'sonamarg';
    } else if (raw.includes('manali')) {
      matchedKey = 'manali';
    } else if (raw.includes('shimla') || raw.includes('kufri')) {
      matchedKey = 'shimla';
    } else if (raw.includes('havelock')) {
      matchedKey = 'havelock';
    } else if (raw.includes('neil')) {
      matchedKey = 'neil';
    } else if (raw.includes('port blair') || raw.includes('portblair')) {
      matchedKey = 'portblair';
    } else if (raw.includes('munnar')) {
      matchedKey = 'munnar';
    } else if (raw.includes('thekkady')) {
      matchedKey = 'thekkady';
    } else if (raw.includes('alleppey')) {
      matchedKey = 'alleppey';
    } else if (raw.includes('kovalam')) {
      matchedKey = 'kovalam';
    } else if (raw.includes('jaisalmer')) {
      matchedKey = 'jaisalmer';
    } else if (raw.includes('jodhpur')) {
      matchedKey = 'jodhpur';
    } else if (raw.includes('udaipur')) {
      matchedKey = 'udaipur';
    } else if (raw.includes('jaipur')) {
      matchedKey = 'jaipur';
    } else if (raw.includes('haridwar')) {
      matchedKey = 'haridwar';
    } else if (raw.includes('rishikesh')) {
      matchedKey = 'rishikesh';
    } else if (raw.includes('mussoorie')) {
      matchedKey = 'mussoorie';
    } else if (raw.includes('nainital')) {
      matchedKey = 'nainital';
    } else if (raw.includes('kedarnath')) {
      matchedKey = 'kedarnath';
    } else if (raw.includes('badrinath')) {
      matchedKey = 'badrinath';
    } else if (raw.includes('leh') || raw.includes('ladakh')) {
      matchedKey = 'leh';
    } else if (raw.includes('goa')) {
      matchedKey = 'goa';
    } else if (raw.includes('agra')) {
      matchedKey = 'agra';
    } else if (raw.includes('amritsar')) {
      matchedKey = 'amritsar';
    } else if (raw.includes('mathura') || raw.includes('vrindavan')) {
      matchedKey = 'mathura';
    } else if (raw.includes('ujjain')) {
      matchedKey = 'ujjain';
    } else if (raw.includes('dwarka')) {
      matchedKey = 'dwarka';
    } else if (raw.includes('somnath')) {
      matchedKey = 'somnath';
    } else if (raw.includes('puri')) {
      matchedKey = 'puri';
    } else if (raw.includes('darjeeling')) {
      matchedKey = 'darjeeling';
    } else if (raw.includes('gangtok')) {
      matchedKey = 'gangtok';
    } else if (raw.includes('ooty')) {
      matchedKey = 'ooty';
    } else if (raw.includes('coorg')) {
      matchedKey = 'coorg';
    } else if (raw.includes('kodaikanal')) {
      matchedKey = 'kodaikanal';
    } else if (raw.includes('tirupati')) {
      matchedKey = 'tirupati';
    } else if (raw.includes('chennai') || raw.includes('madras')) {
      matchedKey = 'chennai';
    } else if (raw.includes('mahabalipuram') || raw.includes('mamallapuram')) {
      matchedKey = 'mahabalipuram';
    } else if (raw.includes('shirdi')) {
      matchedKey = 'shirdi';
    } else if (raw.includes('delhi')) {
      matchedKey = 'delhi';
    } else if (raw.includes('mumbai')) {
      matchedKey = 'mumbai';
    } else if (raw.includes('hyderabad') || raw.includes('andhra') || raw.includes('secunderabad')) {
      matchedKey = 'hyderabad';
    }

    // Secondary fallback: if raw did not match, check day title or city
    if (!matchedKey) {
      if (title.includes('ayodhya') || title.includes('janmabhoomi') || title.includes('saryu')) {
        matchedKey = 'ayodhya';
      } else if (title.includes('varanasi') || title.includes('kashi') || title.includes('dashashwamedh') || title.includes('sarnath')) {
        matchedKey = 'varanasi';
      } else if (title.includes('prayagraj') || title.includes('sangam')) {
        matchedKey = 'prayagraj';
      } else if (title.includes('gulmarg')) {
        matchedKey = 'gulmarg';
      } else if (title.includes('pahalgam')) {
        matchedKey = 'pahalgam';
      } else if (title.includes('sonamarg')) {
        matchedKey = 'sonamarg';
      } else if (title.includes('srinagar')) {
        matchedKey = 'srinagar';
      } else if (title.includes('manali') || title.includes('solang')) {
        matchedKey = 'manali';
      } else if (title.includes('shimla') || title.includes('kufri')) {
        matchedKey = 'shimla';
      } else if (title.includes('havelock')) {
        matchedKey = 'havelock';
      } else if (title.includes('neil')) {
        matchedKey = 'neil';
      } else if (title.includes('port blair') || title.includes('portblair')) {
        matchedKey = 'portblair';
      } else if (title.includes('munnar')) {
        matchedKey = 'munnar';
      } else if (title.includes('thekkady')) {
        matchedKey = 'thekkady';
      } else if (title.includes('alleppey')) {
        matchedKey = 'alleppey';
      } else if (title.includes('kovalam')) {
        matchedKey = 'kovalam';
      } else if (title.includes('jaisalmer')) {
        matchedKey = 'jaisalmer';
      } else if (title.includes('jodhpur')) {
        matchedKey = 'jodhpur';
      } else if (title.includes('udaipur')) {
        matchedKey = 'udaipur';
      } else if (title.includes('jaipur')) {
        matchedKey = 'jaipur';
      } else if (title.includes('haridwar')) {
        matchedKey = 'haridwar';
      } else if (title.includes('rishikesh')) {
        matchedKey = 'rishikesh';
      } else if (title.includes('mussoorie')) {
        matchedKey = 'mussoorie';
      } else if (title.includes('nainital')) {
        matchedKey = 'nainital';
      } else if (title.includes('kedarnath')) {
        matchedKey = 'kedarnath';
      } else if (title.includes('badrinath')) {
        matchedKey = 'badrinath';
      } else if (title.includes('leh') || title.includes('ladakh')) {
        matchedKey = 'leh';
      } else if (title.includes('goa')) {
        matchedKey = 'goa';
      } else if (title.includes('agra')) {
        matchedKey = 'agra';
      } else if (title.includes('amritsar')) {
        matchedKey = 'amritsar';
      } else if (title.includes('mathura') || title.includes('vrindavan')) {
        matchedKey = 'mathura';
      } else if (title.includes('ujjain') || title.includes('mahakal')) {
        matchedKey = 'ujjain';
      } else if (title.includes('dwarka')) {
        matchedKey = 'dwarka';
      } else if (title.includes('somnath')) {
        matchedKey = 'somnath';
      } else if (title.includes('puri') || title.includes('jagannath')) {
        matchedKey = 'puri';
      } else if (title.includes('darjeeling')) {
        matchedKey = 'darjeeling';
      } else if (title.includes('gangtok')) {
        matchedKey = 'gangtok';
      } else if (title.includes('ooty')) {
        matchedKey = 'ooty';
      } else if (title.includes('coorg')) {
        matchedKey = 'coorg';
      } else if (title.includes('kodaikanal')) {
        matchedKey = 'kodaikanal';
      } else if (title.includes('tirupati')) {
        matchedKey = 'tirupati';
      } else if (title.includes('chennai') || title.includes('madras') || title.includes('marina beach')) {
        matchedKey = 'chennai';
      } else if (title.includes('mahabalipuram') || title.includes('mamallapuram') || title.includes('shore temple')) {
        matchedKey = 'mahabalipuram';
      } else if (title.includes('shirdi')) {
        matchedKey = 'shirdi';
      } else if (title.includes('delhi')) {
        matchedKey = 'delhi';
      } else if (title.includes('mumbai')) {
        matchedKey = 'mumbai';
      } else if (title.includes('araku') || raw.includes('araku')) {
        matchedKey = 'araku';
      } else if (title.includes('visakhapatnam') || title.includes('vizag') || raw.includes('visakhapatnam') || raw.includes('vizag')) {
        matchedKey = 'visakhapatnam';
      } else if (title.includes('hyderabad') || title.includes('charminar') || title.includes('ramoji') || title.includes('golconda')) {
        matchedKey = 'hyderabad';
      }
    }

    // Direct registry scan against title, hotel, or city
    if (!matchedKey) {
      for (const k of Object.keys(DESTINATION_HOTEL_TIERS)) {
        if (title.includes(k) || raw.includes(k)) {
          matchedKey = k;
          break;
        }
      }
    }

    // Destination slug fallback
    if (!matchedKey) {
      const destClean = (pkg.destinationSlug || pkg.destination || '').toLowerCase();
      for (const k of Object.keys(DESTINATION_HOTEL_TIERS)) {
        if (destClean.includes(k)) {
          matchedKey = k;
          break;
        }
      }
    }

    if (matchedKey && DESTINATION_HOTEL_TIERS[matchedKey]) {
      return cleanHotelName(DESTINATION_HOTEL_TIERS[matchedKey][effectiveTier]);
    }

    // Generic fallback for any other city without appended category
    const cityName = pkg.destination?.split(',')[0]?.split(' ')[0] || 'City';
    const cleanCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    if (effectiveTier === 'luxury') {
      return `Taj / Radisson Blu ${cleanCity} Luxury Palace`;
    }
    return `Novotel / Lemon Tree Premier ${cleanCity}`;
  };

  // Dynamic Total Calculation
  const subtotalBeforeGst = Math.round(
    (effectiveAdultsCount * basePricePerPerson) +
    (totalAge15to17 * basePricePerPerson * 0.8) +
    (totalAge10to14 * basePricePerPerson * 0.8) +
    (totalAge5to9 * basePricePerPerson * 0.5) +
    (totalUnder5 * 0)
  );

  const gstAmount = Math.round(subtotalBeforeGst * 0.05); // 5% Govt GST Tax
  const calculatedTotalPriceWithGst = subtotalBeforeGst + gstAmount;

  let couponDiscountAmount = 0;
  if (appliedCoupon && appliedCoupon.amount) {
    couponDiscountAmount = Math.min(calculatedTotalPriceWithGst, appliedCoupon.amount);
  }
  const finalPayablePrice = Math.max(0, calculatedTotalPriceWithGst - couponDiscountAmount);

  const rewardPoints = Math.round(basePricePerPerson * 0.01);

  // Fallback Gallery Images for 4-image grid
  const galleryImages = [
    pkg.heroImage,
    pkg.gallery?.[0] || '/destinations/kashmir.jpg',
    pkg.gallery?.[1] || '/destinations/ayodhya-varanasi.jpg',
    pkg.gallery?.[2] || '/destinations/rajasthan.jpg',
  ];

  // Day toggle handler
  const toggleDay = (dayNum: number) => {
    if (openDays.includes(dayNum)) {
      setOpenDays(openDays.filter((d) => d !== dayNum));
    } else {
      setOpenDays([...openDays, dayNum]);
    }
  };

  const expandAllDays = () => {
    setOpenDays(pkg.itinerary.map((item) => item.dayNumber));
  };

  const collapseAllDays = () => {
    setOpenDays([]);
  };

  // Handle Callback Request
  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone) return;
    cloudStore.saveLead({
      name: callbackName || 'Valued Client',
      phone: callbackPhone,
      email: '',
      destination: pkg.name,
      status: 'New',
      source: `Package Detail Page (${pkg.destination})`,
    });
    sendWeb3FormLead({
      subject: `[Trip Customizer] 📞 Quick Callback Request: ${callbackName || 'Valued Client'} (${pkg.name})`,
      name: callbackName || 'Valued Client',
      email: '',
      phone: callbackPhone,
      destination: pkg.name,
      source: `Package Detail Page (${pkg.destination})`,
    });
    setCallbackSuccess(true);
    setTimeout(() => {
      setCallbackSuccess(false);
      setCallbackName('');
      setCallbackPhone('');
    }, 5000);
  };

  // Hotel Upgrade Quote State & Handler
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [upgradeName, setUpgradeName] = useState('');
  const [upgradePhone, setUpgradePhone] = useState('');
  const [upgradeEmail, setUpgradeEmail] = useState('');
  const [upgradeNotes, setUpgradeNotes] = useState('');
  const [isUpgradeSubmitting, setIsUpgradeSubmitting] = useState(false);
  const [upgradeSuccess, setUpgradeSuccess] = useState(false);

  const handleUpgradeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneToUse = (upgradePhone || contactPhone || '').trim();
    if (!phoneToUse || phoneToUse.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid 10-digit mobile number so our travel specialist can contact you with the live upgrade quote.');
      return;
    }
    setIsUpgradeSubmitting(true);
    const nameToUse = (upgradeName || contactName || (user?.name || 'Valued Traveller')).trim();
    const emailToUse = (upgradeEmail || contactEmail || (user?.email || '')).trim();
    const tierLabel = tourTier === 'luxury' ? '5★ Luxury' : '4★ Deluxe';
    const hotelProperty = cleanHotelName(getTierHotelName(pkg.hotels?.[0]?.name, pkg.destination, tourTier));

    // 1. Save lead to local cloudStore
    cloudStore.saveLead({
      name: nameToUse,
      phone: phoneToUse,
      email: emailToUse,
      destination: `${pkg.name} [${tierLabel} Upgrade Request]`,
      status: 'New',
      source: `Hotel Upgrade Quote (${tierLabel})`,
    });

    // 2. Send instant email notification via Web3Forms
    await sendWeb3FormLead({
      subject: `[Trip Customizer] 🏨 Hotel Upgrade Request: ${nameToUse} (${tierLabel} - ${pkg.name})`,
      name: nameToUse,
      email: emailToUse,
      phone: phoneToUse,
      destination: pkg.name,
      travel_date: travelDate,
      travelers_count: `${effectiveAdultsCount} Adults${totalTravellersCount > effectiveAdultsCount ? `, ${totalTravellersCount - effectiveAdultsCount} Kids` : ''}`,
      budget: `${tierLabel} Upgrade on Request`,
      message: `Customer requested live hotel upgrade to ${tierLabel} (${hotelProperty}).\nPackage: ${pkg.name}\nBase Tier: ${baselineTier.toUpperCase()}\nTravel Date: ${travelDate}\nJoining City: ${joiningCity}\nCustomer Notes: ${upgradeNotes || 'Please share upgrade pricing and live room options.'}`,
    });

    setIsUpgradeSubmitting(false);
    setUpgradeSuccess(true);
  };

  // Calculate Price Submit
  const handleCalculatePrice = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPriceCalculated(true);
  };

  // Loading state for smooth UX
  const [isNavigatingToCheckout, setIsNavigatingToCheckout] = useState(false);

  // Proceed to Final Booking Checkout & Auto-Sync Passenger Names into User Profile / Co-Travellers
  const handleProceedToCheckout = () => {
    setIsNavigatingToCheckout(true);
    const leadName = passengers['r0_adult_0']?.fullName || contactName || 'Valued Traveller';
    let loggedUser = user;
    if (contactEmail && contactPhone) {
      loggedUser = login(contactEmail, contactPhone, leadName);
    }
    
    // Extract & sync all passenger names into user's persistent Co-Travellers list
    const passengerList = Object.values(passengers)
      .filter((p) => p.fullName && p.fullName.trim() !== '')
      .map((p) => ({
        fullName: p.fullName,
        age: p.age,
        gender: p.gender,
      }));

    if (passengerList.length > 0) {
      cloudStore.syncPassengersToCoTravellers(passengerList, loggedUser?.uid);
    }

    // Pass encoded passenger list & applied coupon discount to checkout
    const encodedPassengers = encodeURIComponent(JSON.stringify(passengers));
    router.push(
      `/booking/checkout?slug=${pkg.slug}&pax=${totalTravellersCount}&tier=${tourTier}&price=${basePricePerPerson}&date=${travelDate}&city=${encodeURIComponent(joiningCity)}&lead=${encodeURIComponent(leadName)}&paxData=${encodedPassengers}&coupon=${appliedCoupon?.code || ''}&discount=${couponDiscountAmount}`
    );
  };

  // Handle Share Click
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pkg.name,
        text: `Check out this holiday package: ${pkg.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 3000);
    }
  };

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.name,
    description: `${pkg.durationDays} Days / ${pkg.durationNights} Nights customized holiday package to ${pkg.destination} featuring 4-Star hotels, breakfasts, sightseeing, and AC transfers.`,
    touristType: [pkg.isInternational ? 'International Travel' : 'Domestic India Pilgrimage & Cultural Tour', pkg.theme],
    itinerary: pkg.itinerary.map((item) => ({
      '@type': 'City',
      name: item.title,
      description: item.description,
    })),
    offers: {
      '@type': 'Offer',
      price: basePricePerPerson,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: typeof window !== 'undefined' ? window.location.href : `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}/${pkg.slug}`,
      validFrom: '2026-01-01',
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Trip Customizer',
      url: 'https://www.tripcustomizer.com',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pkg.faqs
      ? pkg.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        }))
      : [
          {
            '@type': 'Question',
            name: `What is included in ${pkg.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${pkg.name} includes 4-star hotel stays, daily breakfast, AC transport transfers, sightseeing vouchers, and 24x7 trip support.`,
            },
          },
        ],
  };

  if (isLoadingApi && !activePkg) {
    return (
      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 animate-spin text-brand-600 mx-auto" />
          <p className="text-sm font-bold text-slate-700">Loading tour package details...</p>
        </div>
      </div>
    );
  }

  if (!activePkg) {
    return (
      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-black text-slate-900">Tour Package Not Found</h2>
          <p className="text-xs text-slate-500">
            The requested package ({params.package}) was not found or is currently being updated.
          </p>
          <div className="pt-2">
            <Link href="/holidays">
              <Button variant="accent" size="md" className="font-bold text-xs">
                Browse All Packages →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-6 pb-24 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        {/* Toast Notification */}
        {shareToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Link copied to clipboard!</span>
          </div>
        )}

        {/* 1. BREADCRUMB NAVIGATION */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center space-x-2 text-xs text-slate-500 mb-4 font-medium">
          <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/holidays" className="hover:text-brand-600 transition-colors">Holidays</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href={`/holidays?region=${encodeURIComponent(pkg.region || 'India')}`} className="hover:text-brand-600 transition-colors">
            {pkg.country} Tour Packages
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href={`/holidays/${pkg.destinationSlug}`} className="hover:text-brand-600 transition-colors">
            {pkg.destination} Packages
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-bold text-slate-800 line-clamp-1">{pkg.name}</span>
        </nav>

        {/* 2. HEADER TOP INFO & BADGES */}
        <div className="mb-6 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-slate-900 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {pkg.durationNights}N / {pkg.durationDays}D
            </span>
            <span className="bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs px-3 py-1 rounded-full flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-600 fill-amber-500" />
              <span>Customized Tour</span>
            </span>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs px-3 py-1 rounded-full flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Instant Confirmation Available</span>
            </span>
          </div>

          {/* Title and Reviews Card Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {pkg.name}
              </h1>
              {/* Multi-City Night Breakdown Pill (Derived from Itinerary Stays) */}
              {cityNightSplit && cityNightSplit.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 mt-2">
                  {cityNightSplit.map((h, idx) => (
                    <span key={idx} className="flex items-center space-x-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3 h-3 text-brand-600" />
                      <span>{h.nights}N {h.city}</span>
                      {idx < cityNightSplit.length - 1 && <span className="text-slate-300 ml-1">|</span>}
                    </span>
                  ))}
                  <span className={`text-[11px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider flex items-center space-x-1 ${
                    tourTier === 'standard' ? 'bg-slate-200 text-slate-800' : tourTier === 'deluxe' ? 'bg-brand-100 text-brand-800' : 'bg-amber-100 text-amber-900'
                  }`}>
                    <Hotel className="w-3 h-3" />
                    <span>{tourTier === 'standard' ? '3★ Standard Category' : tourTier === 'deluxe' ? '4★ Deluxe Category' : '5★ Luxury Category'}</span>
                  </span>
                </div>
              )}
            </div>

            {/* Review Badge Card */}
            <div className="shrink-0 bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black text-base flex items-center justify-center shadow-xs">
                {pkg.rating}
              </div>
              <div>
                <div className="flex items-center space-x-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">
                  Verified Ratings ({pkg.reviewsCount}+ Reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Key Inclusion Icons Bar */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Flights</span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {pkg.flightsIncluded ? '✓ Included' : 'Optional / Add-on'}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Hotel className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Hotels Stay</span>
                <span className="text-[10px] font-bold text-brand-600">{tourTier === 'standard' ? '3★ Standard' : tourTier === 'deluxe' ? '4★ Deluxe' : '5★ Luxury'} Category</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Meals Plan</span>
                <span className="text-[10px] font-semibold text-slate-500">{pkg.mealPlan}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Transfers</span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {pkg.transfersIncluded ? '✓ Private AC Cab' : 'Standard Cab'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 4-IMAGE GRID GALLERY */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-3xl overflow-hidden shadow-md">
          {/* Main Hero Image (Left 8 cols) */}
          <div className="lg:col-span-8 relative h-72 sm:h-96 lg:h-[400px] w-full bg-slate-200 group overflow-hidden">
            <Image
              src={galleryImages[0]}
              alt={pkg.name}
              fill
              unoptimized
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Destination Photography</span>
            </div>
          </div>

          {/* Right 3 Stacked Grid Images (Right 4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-3 h-36 lg:h-[400px]">
            {galleryImages.slice(1, 4).map((imgUrl, i) => (
              <div key={i} className="relative h-full w-full bg-slate-200 overflow-hidden group">
                <Image
                  src={imgUrl}
                  alt={`${pkg.name} view ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {i === 2 && (
                  <button
                    onClick={handleShare}
                    className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] hover:bg-slate-950/50 transition-colors flex flex-col items-center justify-center text-white p-2 text-center"
                  >
                    <Sparkles className="w-5 h-5 mb-1 text-amber-400" />
                    <span className="font-black text-xs">View Full Gallery</span>
                    <span className="text-[10px] text-slate-200">+{pkg.highlights.length * 3} Photos</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. MAIN CONTENT LAYOUT: TABS & DETAILS (LEFT) vs STICKY SIDEBAR (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTAINER (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* SUB-NAVIGATION TAB BAR */}
            <div className="sticky top-16 z-30 bg-white border border-slate-200/80 rounded-2xl shadow-sm p-1.5 flex items-center justify-between overflow-x-auto scrollbar-none">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'itinerary'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  🗺️ Detailed Itinerary
                </button>

                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'inclusions'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  ✅ Inclusions & Exclusions
                </button>

                <button
                  onClick={() => setActiveTab('summary')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'summary'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  📋 Tour Summary
                </button>

                <button
                  onClick={() => setActiveTab('highlights')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'highlights'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  ⭐ Key Highlights
                </button>

                <button
                  onClick={() => setActiveTab('faqs')}
                  className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'faqs'
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  ❓ FAQs & Policies
                </button>
              </div>

              {/* Action Buttons: Edit Package (Admin), Share & Download */}
              <div className="flex items-center space-x-2 pl-2 sm:border-l border-slate-200">
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  title="Edit Package Price, Hotels & Details"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-black text-xs transition-colors cursor-pointer shadow-2xs"
                >
                  <Pencil className="w-3.5 h-3.5 text-amber-700" />
                  <span>Edit Package</span>
                </button>

                <button
                  onClick={handleShare}
                  title="Share Package"
                  className="hidden sm:inline-flex p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => window.print()}
                  title="Download Itinerary"
                  className="hidden sm:inline-flex p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: ITINERARY */}
            {activeTab === 'itinerary' && (
              <div className="space-y-6 animate-in fade-in">
                {/* Header Controls for Itinerary */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <div>
                    <h2 className="text-lg font-black text-slate-900">Day by Day Itinerary</h2>
                    <p className="text-xs text-slate-500">Explore complete daily plan with stays, transfers & meals</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold">
                    <button
                      onClick={expandAllDays}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Expand All
                    </button>
                    <button
                      onClick={collapseAllDays}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* Itinerary Layout: Left Day Selector Sidebar + Accordion Cards */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Day Numbers Selector */}
                  <div className="md:col-span-3 space-y-2">
                    <div className="bg-white p-3 rounded-2xl border border-slate-200/80 sticky top-36 space-y-1">
                      <span className="text-[10px] font-extrabold text-slate-400 block uppercase tracking-wider mb-2 px-2">
                        Select Day
                      </span>

                      <button
                        onClick={() => setActiveDayFilter('all')}
                        className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                          activeDayFilter === 'all'
                            ? 'bg-slate-900 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>View All Days</span>
                        <span className="text-[10px] opacity-75">{pkg.itinerary.length} Days</span>
                      </button>

                      {pkg.itinerary.map((item) => (
                        <button
                          key={item.dayNumber}
                          onClick={() => {
                            setActiveDayFilter(item.dayNumber);
                            if (!openDays.includes(item.dayNumber)) {
                              setOpenDays([...openDays, item.dayNumber]);
                            }
                          }}
                          className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                            activeDayFilter === item.dayNumber
                              ? 'bg-brand-600 text-white shadow-xs'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <span className={`w-5 h-5 rounded-md text-[10px] font-black flex items-center justify-center shrink-0 ${
                              activeDayFilter === item.dayNumber ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                            }`}>
                              D{item.dayNumber}
                            </span>
                            <span className="truncate">{item.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Accordion Day Cards */}
                  <div className="md:col-span-9 space-y-4">
                    {pkg.itinerary
                      .filter((item) => activeDayFilter === 'all' || activeDayFilter === item.dayNumber)
                      .map((dayItem) => {
                        const isOpen = openDays.includes(dayItem.dayNumber);
                        const dayHotel = getTierHotelName(dayItem.hotel, dayItem.title, tourTier);
                        return (
                          <Card key={dayItem.dayNumber} className="bg-white border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all">
                            {/* Card Header Header */}
                            <button
                              onClick={() => toggleDay(dayItem.dayNumber)}
                              className="w-full p-4 sm:p-5 flex items-start justify-between text-left hover:bg-slate-50/80 transition-colors cursor-pointer"
                            >
                              <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 text-brand-700 font-black text-xs flex flex-col items-center justify-center shrink-0">
                                  <span>DAY</span>
                                  <span className="text-sm leading-none">{dayItem.dayNumber}</span>
                                </div>
                                <div className="space-y-1">
                                  <h3 className="font-black text-sm sm:text-base text-slate-900">
                                    {isPremium
                                      ? dayItem.title.replace(/3-Star Standard|3-Star|3 Star Standard|3★ Standard|3★/gi, '4-Star Deluxe')
                                      : dayItem.title}
                                  </h3>
                                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500">
                                    <span className="flex items-center space-x-1">
                                      <Hotel className="w-3.5 h-3.5 text-brand-600" />
                                      <span>Stay: {dayHotel}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                                      <span>Meals: {getSanitizedDayMeals(dayItem.dayNumber, pkg.itinerary.length, dayItem.meals, pkg.mealPlan).join(' & ')}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="pl-2 pt-1 text-slate-400">
                                {isOpen ? <ChevronUp className="w-5 h-5 text-brand-600" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </button>

                            {/* Card Content Body */}
                            {isOpen && (
                              <div className="px-5 pb-5 pt-3 border-t border-slate-100 bg-slate-50/40 text-xs text-slate-600 space-y-4">
                                <p className="leading-relaxed text-slate-700">
                                  {isPremium
                                    ? dayItem.description
                                        .replace(/3-Star Standard|3-Star|3 Star Standard|3★ Standard|3★/gi, '4-Star Deluxe')
                                        .replace(/Standard accommodation/gi, 'Deluxe accommodation')
                                    : dayItem.description}
                                </p>

                                {/* Activity / Highlights Bullets */}
                                {(() => {
                                  const acts = getSanitizedSightseeingActivities(
                                    dayItem.title,
                                    dayItem.description,
                                    dayItem.activities,
                                    dayItem.dayNumber,
                                    pkg.itinerary.length
                                  );
                                  if (acts.length === 0) return null;
                                  return (
                                    <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200/80">
                                      <span className="font-bold text-slate-900 text-xs block">Key Activities & Sightseeing:</span>
                                      <ul className="space-y-1.5">
                                        {acts.map((act, actIdx) => (
                                          <li key={actIdx} className="flex items-start space-x-2 text-slate-700">
                                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="font-medium">{act}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                })()}

                                {/* Stay & Transfer Details Badge */}
                                <div className="flex flex-wrap items-center gap-4 text-slate-800 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                                  <div className="flex items-center space-x-1.5 font-bold">
                                    <Hotel className="w-4 h-4 text-emerald-700" />
                                    <span>Hotel Check-in: {dayHotel}</span>
                                  </div>
                                  <div className="flex items-center space-x-1.5 font-bold">
                                    <Car className="w-4 h-4 text-emerald-700" />
                                    <span>Transfers: {dayItem.transfers || 'Private AC Vehicle'}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Card>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: INCLUSIONS & EXCLUSIONS */}
            {activeTab === 'inclusions' && (
              <div className="space-y-6 animate-in fade-in">
                {/* Inclusion Category Filter Tabs */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
                  {[
                    { id: 'all', label: 'All Inclusions' },
                    { id: 'hotels', label: '🏨 Hotel Details' },
                    { id: 'sightseeing', label: '🏛️ Sightseeing' },
                    { id: 'meals', label: '🍽️ Meals & Transfers' },
                    { id: 'exclusions', label: '❌ Exclusions' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setInclusionCategory(cat.id as any)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        inclusionCategory === cat.id
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Accommodations Card Details */}
                {(inclusionCategory === 'all' || inclusionCategory === 'hotels') && (
                  <Card className="p-5 bg-white border-slate-200/80 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h3 className="font-black text-slate-900 text-base flex items-center space-x-2">
                        <Hotel className="w-5 h-5 text-brand-600" />
                        <span>Included Hotels & Accommodations</span>
                      </h3>
                      <Badge variant="blue">
                        {tourTier === 'luxury'
                          ? '5★ Luxury'
                          : isPremium || tourTier === 'deluxe'
                          ? '4★ Deluxe'
                          : '3★ Standard'}{' '}
                        Category
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(cityNightSplit && cityNightSplit.length > 0
                        ? cityNightSplit
                        : [{ city: pkg.destination, nights: pkg.durationNights, hotelName: pkg.hotels?.[0]?.name }]
                      ).map((h, i) => {
                        const effectiveTierForAccom = isPremium && tourTier === 'standard' ? 'deluxe' : tourTier;
                        const customHotel =
                          h.hotelName ||
                          pkg.hotels?.find((x) => (x.city || '').toLowerCase().trim() === (h.city || '').toLowerCase().trim())?.name ||
                          pkg.hotels?.[i]?.name ||
                          pkg.itinerary?.find((d) => (d.hotel || '').toLowerCase().includes((h.city || '').toLowerCase()))?.hotel;

                        const tierHotelName =
                          effectiveTierForAccom === 'standard' && customHotel && customHotel.trim().length > 2
                            ? cleanHotelName(customHotel)
                            : getTierHotelName(customHotel, h.city, effectiveTierForAccom);
                        const tierRating =
                          effectiveTierForAccom === 'luxury'
                            ? '5★ Luxury'
                            : effectiveTierForAccom === 'deluxe'
                            ? '4★ Deluxe'
                            : '3★ Standard';
                        const amenities =
                          effectiveTierForAccom === 'luxury'
                            ? 'Luxury Spa • Fine-Dining Restaurant • Private Balcony • Concierge & Valet'
                            : effectiveTierForAccom === 'deluxe'
                            ? 'Swimming Pool / View • Daily Buffet Breakfast • Tea/Coffee Maker • Room Service'
                            : 'Free Wi-Fi • Buffet Breakfast • AC Room • 24x7 Hot Water';

                        return (
                          <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 hover:border-brand-300 transition-all">
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-black text-sm text-slate-900 leading-snug">{tierHotelName}</span>
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded-md shrink-0 ${
                                effectiveTierForAccom === 'standard'
                                  ? 'bg-slate-200 text-slate-800'
                                  : effectiveTierForAccom === 'deluxe'
                                  ? 'bg-brand-100 text-brand-800'
                                  : 'bg-amber-100 text-amber-900'
                              }`}>
                                {tierRating}
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 flex items-center space-x-2">
                              <span>📍 {h.city}</span>
                              <span>•</span>
                              <span>🌙 {h.nights} Nights Stay</span>
                            </div>
                            <p className="text-[11px] text-emerald-700 font-semibold pt-1 border-t border-slate-200/60">
                              ✓ {amenities}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                )}

                {/* 2. Sightseeing Section (Day-by-Day Activities & Landmark Visits) */}
                {(inclusionCategory === 'all' || inclusionCategory === 'sightseeing') && (
                  <Card className="p-5 bg-white border-slate-200/80 rounded-2xl space-y-4 shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h3 className="font-black text-slate-900 text-base flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-brand-600" />
                        <span>Included Sightseeing & Tour Experiences</span>
                      </h3>
                      <Badge variant="blue">
                        {pkg.itinerary?.length || pkg.durationDays} Days Route Covered
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {pkg.itinerary && pkg.itinerary.length > 0 ? (
                        pkg.itinerary.map((d, dIdx) => {
                          const activityList = getSanitizedSightseeingActivities(
                            d.title,
                            d.description,
                            d.activities,
                            d.dayNumber,
                            pkg.itinerary.length
                          );

                          return (
                            <div key={dIdx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-black bg-brand-600 text-white px-2 py-0.5 rounded-md">
                                  Day {d.dayNumber}
                                </span>
                                <span className="font-bold text-xs text-slate-900">
                                  {d.title}
                                </span>
                              </div>

                              {activityList.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {activityList.map((act, aIdx) => (
                                    <span key={aIdx} className="text-[11px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md shadow-2xs flex items-center gap-1">
                                      <Check className="w-3 h-3 text-emerald-600" />
                                      <span>{act}</span>
                                    </span>
                                  ))}
                                </div>
                              )}

                              {d.description && (
                                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                                  {d.description}
                                </p>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600">
                          Complete guided sightseeing in private AC vehicle as per package itinerary.
                        </div>
                      )}
                    </div>

                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dedicated Private AC Vehicle with chauffeur provided for all sightseeing points & transfers throughout the trip.</span>
                    </div>
                  </Card>
                )}

                {/* 3. Meals & Transfers Section */}
                {(inclusionCategory === 'all' || inclusionCategory === 'meals') && (
                  <Card className="p-5 bg-white border-slate-200/80 rounded-2xl space-y-4 shadow-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h3 className="font-black text-slate-900 text-base flex items-center space-x-2">
                        <Utensils className="w-5 h-5 text-brand-600" />
                        <span>Included Meals & Private Transfers</span>
                      </h3>
                      <Badge variant="green">
                        {pkg.mealPlan || 'Breakfast & Dinner (MAP)'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      {/* Meals breakdown */}
                      <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 space-y-2">
                        <span className="font-black text-xs text-amber-950 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          <span>Meal Plan Details</span>
                        </span>
                        <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                          Daily fresh, hygienic breakfast and dinner served at your hotel restaurant ({pkg.mealPlan || 'MAP Plan'}).
                        </p>
                        <div className="pt-2 space-y-1">
                          {pkg.itinerary?.map((d, idx) => {
                            const dayMeals = getSanitizedDayMeals(d.dayNumber, pkg.itinerary.length, d.meals, pkg.mealPlan);
                            return (
                              <div key={idx} className="flex items-center justify-between text-[11px] border-b border-amber-100 pb-1">
                                <span className="text-slate-600 font-bold">Day {d.dayNumber}:</span>
                                <span className="text-amber-900 font-extrabold">
                                  {dayMeals.join(' & ')}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Vehicle & Transfers breakdown */}
                      <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 space-y-2">
                        <span className="font-black text-xs text-blue-950 flex items-center gap-1.5">
                          <Car className="w-3.5 h-3.5 text-blue-700" />
                          <span>Private Vehicle & Chauffeur</span>
                        </span>
                        <div className="space-y-1.5 text-[11px] text-slate-700 font-semibold pt-1">
                          <div className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>Dedicated Private AC Sedan / SUV exclusively for your family / group throughout the tour.</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>Airport / Railway Station pickup on arrival and drop on departure included.</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>Fuel charges, interstate toll taxes, driver night allowance, and parking fees 100% included.</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>Verified, polite local driver with route expertise and 24x7 trip support.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}

                {/* 4. Exclusions Section */}
                {(inclusionCategory === 'all' || inclusionCategory === 'exclusions') && (
                  <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                      <h3 className="font-black text-amber-950 text-base flex items-center space-x-2">
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>What your tour price does NOT include?</span>
                      </h3>
                      <span className="text-[10px] font-black bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md uppercase">
                        Clear & Transparent
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {(pkg.exclusions && pkg.exclusions.length > 0 ? pkg.exclusions : [
                        'Airfare or train tickets (available upon request at live rates)',
                        'Monument entry tickets, camera passes, joyrides, and ropeway tickets',
                        'Special VIP pooja / darshan tickets, temple rituals, or local priest fees',
                        'Personal expenses like room service, laundry, extra beverages, and tips',
                        'Any meals or services not explicitly mentioned in the inclusions',
                        'Early check-in or late check-out charges at hotels',
                      ]).map((exc, i) => (
                        <div key={i} className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-amber-100 text-slate-700 font-semibold shadow-2xs">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. General Inclusions Overview (When viewing All) */}
                {inclusionCategory === 'all' && (
                  <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-3">
                    <h4 className="font-black text-blue-950 text-xs uppercase tracking-wider flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Additional Included Inclusions</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {pkg.inclusions.map((inc, i) => {
                        const cleanInc = isPremium
                          ? inc.replace(/3-Star Standard|3-Star|3 Star Standard|3★ Standard|3★/gi, '4-Star Deluxe & 5-Star Luxury')
                          : inc;
                        return (
                          <div key={i} className="flex items-start space-x-2 bg-white p-2.5 rounded-lg border border-blue-100 text-slate-800 font-semibold">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cleanInc}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 3: SUMMARY */}
            {activeTab === 'summary' && (
              <Card className="p-6 bg-white border-slate-200/80 rounded-3xl space-y-6 animate-in fade-in">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <h3 className="font-black text-lg text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span>Tour Summary & Overview</span>
                    </h3>
                    <Badge variant="blue">{pkg.durationDays}D / {pkg.durationNights}N</Badge>
                  </div>

                  {/* Highlights from package */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">Package Highlights:</span>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((hl, hIdx) => (
                          <span
                            key={hIdx}
                            className="bg-amber-50/70 border border-amber-200 text-amber-950 text-xs px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 shadow-2xs"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Day-by-Day Route & Activities Summary */}
                  {pkg.itinerary && pkg.itinerary.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">Itinerary Sightseeing Route:</span>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.itinerary.map((d, dIdx) => (
                          <div key={dIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 flex items-start gap-2.5 text-xs">
                            <span className="font-black text-brand-700 bg-white border border-brand-200 px-2 py-0.5 rounded-md shrink-0">
                              Day {d.dayNumber}
                            </span>
                            <div className="space-y-0.5">
                              <span className="font-bold text-slate-900 block">{d.title}</span>
                              {(() => {
                                const acts = getSanitizedSightseeingActivities(d.title, d.description, d.activities, d.dayNumber, pkg.itinerary.length);
                                if (acts.length === 0) return null;
                                return (
                                  <span className="text-slate-600 text-[11px] block">
                                    🏛️ {acts.join(' • ')}
                                  </span>
                                );
                              })()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Departure City</span>
                    <span className="font-bold text-sm text-slate-900">{pkg.departureCity || 'Multiple Departure Cities'}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Theme</span>
                    <span className="font-bold text-sm text-slate-900">{pkg.theme}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Meal Plan</span>
                    <span className="font-bold text-sm text-slate-900">{pkg.mealPlan}</span>
                  </div>
                </div>

                {/* Night Stay Breakdown (Multi-City Derived from Itinerary) */}
                {cityNightSplit && cityNightSplit.length > 0 && (
                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-xs text-amber-950 block">Night Stay City & Hotel Breakdown:</span>
                      <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md uppercase">
                        {tourTier === 'standard' ? '3★ Standard' : tourTier === 'deluxe' ? '4★ Deluxe' : '5★ Luxury'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-bold text-amber-900">
                      {cityNightSplit.map((h, idx) => {
                        const customHotel =
                          h.hotelName ||
                          pkg.hotels?.find((x) => (x.city || '').toLowerCase().trim() === (h.city || '').toLowerCase().trim())?.name ||
                          pkg.hotels?.[idx]?.name ||
                          pkg.itinerary?.find((d) => d.hotel && d.hotel.trim().length > 2 && !d.hotel.toLowerCase().includes('check-out') && (d.title?.toLowerCase().includes((h.city || '').toLowerCase()) || d.hotel?.toLowerCase().includes((h.city || '').toLowerCase())))?.hotel ||
                          pkg.itinerary?.[0]?.hotel;
                        const hotelDisplayName =
                          tourTier === 'standard' && customHotel && customHotel.trim().length > 2
                            ? cleanHotelName(customHotel)
                            : getTierHotelName(customHotel, h.city, tourTier);
                        return (
                          <span key={idx} className="bg-white border border-amber-300 px-3 py-1.5 rounded-xl shadow-2xs">
                            🌙 {h.nights} Nights in {h.city} ({hotelDisplayName})
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Important Notes */}
                <div className="p-4 bg-slate-100 rounded-2xl text-xs space-y-2">
                  <span className="font-bold text-slate-900 flex items-center space-x-1">
                    <Info className="w-4 h-4 text-brand-600" />
                    <span>Important Information & Guidelines:</span>
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li>Government approved photo ID proof is mandatory at check-in.</li>
                    <li>Flexible booking options with low initial token deposit available.</li>
                    <li>24/7 dedicated local assistance line provided upon booking confirmation.</li>
                  </ul>
                </div>
              </Card>
            )}

            {/* TAB CONTENT 4: HIGHLIGHTS */}
            {activeTab === 'highlights' && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="font-black text-lg text-slate-900">Key Highlights of this Tour</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.highlights.map((hl, i) => (
                    <Card key={i} className="p-5 bg-white border-slate-200/80 rounded-2xl flex items-start space-x-3 shadow-xs">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center shrink-0">
                        #{i + 1}
                      </div>
                      <div>
                        <span className="font-black text-sm text-slate-900 block mb-1">{hl}</span>
                        <p className="text-xs text-slate-500">Includes guided assistance and pre-arranged entry tickets.</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: FAQS & POLICIES */}
            {activeTab === 'faqs' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
                  <h3 className="font-black text-lg text-slate-900">Frequently Asked Questions & Policies</h3>
                  <p className="text-xs text-slate-500">Everything you need to know about booking, hotel stays & transfers</p>
                </div>

                <div className="space-y-3">
                  {(pkg.faqs && pkg.faqs.length > 0 ? pkg.faqs : [
                    {
                      question: `Is ${pkg.name} 100% customizable?`,
                      answer: `Yes! All our tour packages can be customized to your preferred travel dates, hotel choices, flight options, and sightseeing preferences.`
                    },
                    {
                      question: `What hotel category is provided in this package?`,
                      answer: isPremium
                        ? `This premium package is configured with handpicked 4-Star Deluxe (e.g. Novotel Hyderabad Convention Centre / Lemon Tree Premier) and 5-Star Luxury (e.g. Taj Krishna Banjara Hills / ITC Kakatiya) accommodations with daily buffet breakfast and 24x7 concierge assistance.`
                        : `This package is currently configured with ${
                            tourTier === 'standard'
                              ? '3-Star Standard accommodations (e.g. Royal Palm Inn / Treebo Trend / Kashi Heritage)'
                              : tourTier === 'deluxe'
                              ? '4-Star Deluxe accommodations (e.g. Park Inn by Radisson / Radisson Hotel / Lemon Tree Premier)'
                              : '5-Star Luxury accommodations (e.g. Praveg Tent City Royal Suites / Taj Ganges / BrijRama Palace)'
                          } with clean, hygienic rooms, private bath, and daily buffet breakfast. You can toggle between 3★, 4★, and 5★ anytime to customize your stay.`
                    },
                    {
                      question: `Are sightseeing transfers private or shared?`,
                      answer: `All sightseeing and airport/railway station transfers are provided via private AC vehicle reserved exclusively for your family/group.`
                    },
                    {
                      question: `What is the cancellation and refund policy?`,
                      answer: `Full refunds are processed for cancellations made 15+ days prior to travel date. Flexible token booking option allows date changes up to 7 days prior.`
                    }
                  ]).map((faqItem, fIdx) => {
                    const isOpen = openFaqs.includes(fIdx);
                    return (
                      <Card key={fIdx} className="bg-white border-slate-200/80 rounded-2xl overflow-hidden shadow-2xs">
                        <button
                          type="button"
                          onClick={() => toggleFaq(fIdx)}
                          className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <span className="font-bold text-sm text-slate-900 flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-lg bg-brand-50 text-brand-700 font-black text-xs flex items-center justify-center shrink-0">
                              Q{fIdx + 1}
                            </span>
                            <span>{faqItem.question}</span>
                          </span>
                          <span className="text-slate-400 pl-2 shrink-0">
                            {isOpen ? <ChevronUp className="w-5 h-5 text-brand-600" /> : <ChevronDown className="w-5 h-5" />}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-2 text-xs text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                            {faqItem.answer}
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT CONTAINER: STICKY SIDEBAR PRICING & ENQUIRY CARD (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-white rounded-3xl border-slate-200/80 shadow-xl sticky top-20 space-y-5">
              
              {/* Tour Tier Selector */}
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold text-slate-400 block uppercase tracking-wider">
                  Select Hotel & Package Tier
                </span>
                <div
                  className={`grid ${
                    allowedTiers.length === 1
                      ? 'grid-cols-1'
                      : allowedTiers.length === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-3'
                  } gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold`}
                >
                  {allowedTiers.map((tierKey) => {
                    const isSelected = tourTier === tierKey;
                    const isBase = baselineTier === tierKey;
                    const label =
                      tierKey === 'standard'
                        ? '3★ Standard'
                        : tierKey === 'deluxe'
                        ? '4★ Deluxe'
                        : '5★ Luxury';
                    const activeClass =
                      tierKey === 'standard'
                        ? 'bg-white text-slate-950 shadow-xs'
                        : tierKey === 'deluxe'
                        ? 'bg-brand-600 text-white shadow-xs'
                        : 'bg-amber-500 text-white shadow-xs';
                    const subColor = isSelected
                      ? tierKey === 'standard'
                        ? 'text-emerald-600'
                        : tierKey === 'deluxe'
                        ? 'text-amber-300'
                        : 'text-amber-200'
                      : tierKey === 'standard'
                      ? 'text-emerald-700'
                      : tierKey === 'deluxe'
                      ? 'text-brand-600'
                      : 'text-amber-600';

                    const isExplicit = Boolean(explicitPrices && explicitPrices[tierKey]);
                    const subLabel = isBase
                      ? 'Included'
                      : isExplicit
                      ? 'Fixed Rate'
                      : 'Quote on Request';

                    return (
                      <button
                        key={tierKey}
                        type="button"
                        onClick={() => {
                          setTourTier(tierKey);
                          setIsPriceCalculated(false);
                        }}
                        className={`py-2 rounded-lg transition-all cursor-pointer flex flex-col items-center justify-center ${
                          isSelected ? activeClass : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <span>{label}</span>
                        <span className={`text-[9px] font-extrabold uppercase tracking-wider ${subColor}`}>
                          {subLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Display Block */}
              {isUpgradeQuoteTier ? (
                <div className="bg-amber-50/90 p-4 rounded-2xl border border-amber-200/90 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full">
                      {tourTier === 'luxury' ? '5★ Luxury' : '4★ Deluxe'} • Custom Upgrade
                    </span>
                    <span className="text-xs font-bold text-amber-800">Live Hotel Upgrade</span>
                  </div>
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-2xl font-black text-amber-950">{formatCurrency(basePricePerPerson)}</span>
                    <span className="text-xs text-amber-800 font-semibold">/ adult base</span>
                  </div>
                  <p className="text-[11px] text-amber-900/90 font-medium leading-relaxed">
                    Base package includes {baselineTier === 'standard' ? '3★ Standard' : '4★ Deluxe'} hotels. 
                    Upgrade to <strong>{tourTier === 'luxury' ? '5★ Luxury' : '4★ Deluxe'} ({cleanHotelName(getTierHotelName(pkg.hotels?.[0]?.name, pkg.destination, tourTier))})</strong> is quoted based on live hotel rates for your travel dates. Request a quote below.
                  </p>
                </div>
              ) : (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400 line-through font-semibold">
                      {formatCurrency(originalPricePerPerson)}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                      {discountPercent}% OFF
                    </span>
                  </div>

                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-black text-brand-700">{formatCurrency(basePricePerPerson)}</span>
                    <span className="text-xs text-slate-500 font-semibold">/ adult</span>
                  </div>
                  <span className="text-[10px] text-slate-500 block font-medium">
                    {effectiveAdultsCount === 1 ? 'Solo Traveler Rate (Private Room & Cab Included)' : effectiveAdultsCount === 2 ? `Twin Sharing Couple Rate • Total ${formatCurrency(effectiveAdultsCount * basePricePerPerson)} for 2 Adults` : `Group Saver Rate • Total ${formatCurrency(effectiveAdultsCount * basePricePerPerson)} for ${effectiveAdultsCount} Adults`}
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(true)}
                    className="w-full mt-2 py-1.5 px-3 bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 rounded-xl font-bold text-[11px] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Pencil className="w-3 h-3 text-amber-700" />
                    <span>Edit Price & Package (Admin)</span>
                  </button>
                </div>
              )}

              {/* Interactive Coupon / Promo Code Input Card */}
              <div className="p-3.5 bg-amber-50/90 border border-amber-200 rounded-2xl text-xs space-y-2.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 font-black text-amber-950">
                    <Tag className="w-4 h-4 text-amber-600" />
                    <span>Apply Promo Code / Coupon</span>
                  </div>
                  {appliedCoupon && (
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="text-[10px] text-rose-600 font-bold hover:underline cursor-pointer"
                    >
                      Remove Code
                    </button>
                  )}
                </div>

                {appliedCoupon ? (
                  <div className="p-2.5 bg-emerald-100/90 border border-emerald-300 rounded-xl text-emerald-950 flex items-center justify-between text-xs font-bold animate-in fade-in">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="block font-extrabold text-emerald-900">Code "{appliedCoupon.code}" Applied!</span>
                        <span className="text-[10px] text-emerald-800 font-semibold">
                          {appliedCoupon.percent ? `${appliedCoupon.percent}% Instant Discount` : `₹${appliedCoupon.amount} Flat OFF`}
                        </span>
                      </div>
                    </div>
                    <Badge variant="gold">Active</Badge>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. FESTIVE15, EARLYBIRD"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 bg-white border border-amber-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider focus:outline-none focus:border-brand-600"
                    />
                    <button
                      type="submit"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-3 py-1.5 rounded-xl cursor-pointer shadow-2xs transition-all"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {couponError && (
                  <p className="text-[11px] text-rose-600 font-bold animate-in fade-in">{couponError}</p>
                )}

                {!appliedCoupon && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] text-slate-500 font-semibold block w-full">Available Codes:</span>
                    <button
                      type="button"
                      onClick={() => { setPromoInput('EARLYBIRD'); setAppliedCoupon({ code: 'EARLYBIRD', amount: 1500 }); setCouponError(''); }}
                      className="text-[10px] bg-white border border-amber-300 text-amber-900 font-bold px-2 py-0.5 rounded-md hover:bg-amber-100 cursor-pointer"
                    >
                      EARLYBIRD (-₹1,500)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPromoInput('HOLIDAY2500'); setAppliedCoupon({ code: 'HOLIDAY2500', amount: 2500 }); setCouponError(''); }}
                      className="text-[10px] bg-white border border-amber-300 text-amber-900 font-bold px-2 py-0.5 rounded-md hover:bg-amber-100 cursor-pointer"
                    >
                      HOLIDAY2500 (-₹2,500)
                    </button>
                  </div>
                )}
              </div>

              {/* Reward Points Badge */}
              <div className="flex items-center space-x-2 text-[11px] text-indigo-700 bg-indigo-50/70 p-2.5 rounded-xl border border-indigo-100 font-bold">
                <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-400" />
                <span>Earn {rewardPoints} Trip Customizer Rewards Points</span>
              </div>

              {/* Primary Action Button: Calculate Price & Enter Travel Details OR Request Upgrade Quote */}
              <div className="space-y-2 pt-1">
                {isUpgradeQuoteTier ? (
                  <Button
                    type="button"
                    onClick={() => setIsUpgradeModalOpen(true)}
                    variant="accent"
                    size="lg"
                    className="w-full font-black py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs sm:text-sm shadow-md cursor-pointer hover:scale-[1.01] transition-transform flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>REQUEST {tourTier === 'luxury' ? '5★ LUXURY' : '4★ DELUXE'} UPGRADE QUOTE →</span>
                  </Button>
                ) : (
                  <Button
                    onClick={() => setIsCalculatePriceView(true)}
                    variant="accent"
                    size="lg"
                    className="w-full font-black py-3.5 text-slate-950 text-sm shadow-md cursor-pointer hover:scale-[1.01] transition-transform flex items-center justify-center space-x-2"
                  >
                    <span>CALCULATE PRICE & BOOK TOUR →</span>
                  </Button>
                )}

                <a
                  href="https://wa.me/917408763401"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>

              {/* "Want us to call you?" Callback Form Widget */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-brand-600" />
                  <span className="font-black text-xs text-slate-900">Want us to call you back?</span>
                </div>

                {callbackSuccess ? (
                  <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl font-semibold border border-emerald-200">
                    ✓ Request received! Our travel expert will call you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-2 text-xs">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold focus:outline-none focus:border-brand-500"
                    />
                    <div className="flex space-x-2">
                      <input
                        required
                        type="tel"
                        placeholder="Mobile Number"
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold focus:outline-none focus:border-brand-500"
                      />
                      <button
                        type="submit"
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-3 py-2 rounded-xl transition-colors shrink-0 cursor-pointer"
                      >
                        Call Me
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* 5. THOMAS COOK STYLE "CALCULATE PRICE / TRAVEL DETAILS" FULL STEP OVERLAY WIZARD */}
      {isCalculatePriceView && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          
          {/* Top Wizard Navigation Header Bar */}
          <div className="bg-[#0b192c] text-white px-4 sm:px-8 py-3.5 sticky top-0 z-30 shadow-md flex items-center justify-between">
            <button
              onClick={() => setIsCalculatePriceView(false)}
              className="flex items-center space-x-2 text-xs font-black text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Calculate Price</span>
            </button>

            {/* Step Indicators */}
            <div className="flex items-center space-x-3 text-xs font-bold">
              <span className="flex items-center space-x-1.5 bg-brand-600 text-white px-3 py-1 rounded-full text-xs shadow-xs">
                <span className="w-4 h-4 rounded-full bg-white text-brand-700 text-[10px] font-black flex items-center justify-center">1</span>
                <span>Travel Details</span>
              </span>
              <span className="text-slate-500 font-normal">&gt;</span>
              <span className="flex items-center space-x-1 text-slate-400 text-xs">
                <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold flex items-center justify-center">2</span>
                <span>Change Flight</span>
              </span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Form: Travel Details, Room & Travellers, Passenger Details, Contact Info */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Section Title Bar */}
                <div className="bg-brand-600 text-white p-4 rounded-2xl flex items-center justify-between shadow-xs">
                  <h2 className="text-base font-black flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-amber-300" />
                    <span>Travel Details & Passenger Details</span>
                  </h2>
                  <ChevronUp className="w-5 h-5 text-white/80" />
                </div>

                <Card className="p-6 bg-white rounded-3xl border-slate-200 shadow-xl space-y-6">
                  
                  {/* Form Step 1: Joining Direct & Date of Travel */}
                  <form onSubmit={handleCalculatePrice} className="space-y-6">
                    <div className="grid grid-cols-1 space-y-3">
                      
                      {/* Departure City / Joining Location Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block">Joining Location / Departure City</label>
                        <div className="relative">
                          <select
                            value={joiningCity}
                            onChange={(e) => { setJoiningCity(e.target.value); setIsPriceCalculated(false); }}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:border-brand-600 appearance-none pr-8 cursor-pointer"
                          >
                            <option value={`Joining Direct in ${pkg.destination} (Bus/Train/Self-Reach)`}>
                              📍 Joining Direct in {pkg.destination} (Land Only - Bus / Train / Self Arrival)
                            </option>
                            <option value={`${pkg.destination} Railway Station Pickup`}>
                              🚆 {pkg.destination} Railway Station Pickup
                            </option>
                            <option value={`${pkg.destination} Bus Stand / Main City Pickup`}>
                              🚌 {pkg.destination} Bus Stand / City Center Pickup
                            </option>
                            <option value={`${pkg.destination} Airport Pickup`}>
                              ✈️ {pkg.destination} Airport Pickup
                            </option>
                            <option value="New Delhi (DEL)">✈️ New Delhi (DEL Flight / Volvo Pickup)</option>
                            <option value="Mumbai (BOM)">✈️ Mumbai (BOM Flight Pickup)</option>
                            <option value="Bengaluru (BLR)">✈️ Bengaluru (BLR Flight Pickup)</option>
                            <option value="Kolkata (CCU)">✈️ Kolkata (CCU Flight Pickup)</option>
                            <option value="Hyderabad (HYD)">✈️ Hyderabad (HYD Flight Pickup)</option>
                            <option value="Chennai (MAA)">✈️ Chennai (MAA Flight Pickup)</option>
                            <option value="Ahmedabad (AMD)">✈️ Ahmedabad (AMD Flight Pickup)</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3.5 pointer-events-none" />
                        </div>

                        {/* Direct Pickup Badge Note */}
                        <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-[11px] font-semibold text-emerald-900 flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Direct Destination Pickup Included:</strong> Private cab pickup provided directly at <strong>{pkg.destination}</strong> Railway Station, Bus Stand, or Airport upon your arrival by train, bus, or private vehicle.
                          </span>
                        </div>
                      </div>

                      {/* Travel Date Selection */}
                      <div className="space-y-1.5 pt-2">
                        <label className="text-xs font-bold text-slate-700 block">Date of Travel *</label>
                        <div className="relative max-w-sm">
                          <input
                            required
                            type="date"
                            value={travelDate}
                            onChange={(e) => { setTravelDate(e.target.value); setIsPriceCalculated(false); }}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-brand-600 cursor-pointer"
                          />
                          <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* STEP 2: ROOM & TRAVELLERS CONFIGURATION */}
                    <div className="space-y-4 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-black text-sm text-slate-900">Travellers & Room Selection</h3>
                          <span className="text-[11px] text-slate-500">(Configure adults & children per room)</span>
                        </div>
                        {rooms.length < 4 && (
                          <button
                            type="button"
                            onClick={addRoom}
                            className="text-xs font-bold text-brand-600 hover:text-brand-700 border border-brand-200 bg-brand-50 px-3 py-1.5 rounded-xl transition-colors flex items-center space-x-1 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Extra Room</span>
                          </button>
                        )}
                      </div>

                      {/* Room Configuration Cards */}
                      {rooms.map((room, roomIdx) => {
                        const olderTeensCount = room.children.filter((c) => c.ageCategory === 'age15to17' || c.ageCategory === 'age18plus').length;
                        const requiresSecondRoom = olderTeensCount >= 2;

                        return (
                          <div key={roomIdx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-5">
                            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                              <span className="font-black text-xs text-brand-700 uppercase tracking-wider flex items-center space-x-1.5">
                                <span>🏨 Room {roomIdx + 1}</span>
                                <span className="text-slate-400 font-normal">({room.adults} Adults{room.hasChildren ? `, ${room.children.length} Children` : ''})</span>
                              </span>
                              {rooms.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeRoom(roomIdx)}
                                  className="text-[11px] text-rose-600 font-bold hover:underline"
                                >
                                  Remove Room
                                </button>
                              )}
                            </div>

                            {/* 2nd Room Recommendation Notice for 2+ older kids (17+ yrs) */}
                            {requiresSecondRoom && (
                              <div className="p-3 bg-amber-100/90 border border-amber-300 rounded-xl text-xs font-semibold text-amber-950 flex items-start space-x-2 animate-in fade-in">
                                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                                <div>
                                  <strong>Hotel Occupancy Policy:</strong> You have selected 2 older children (15-17+ yrs) in Room {roomIdx + 1}. Hotel rules mandate adding a <strong>2nd Room</strong> for extra bed & occupancy limits.
                                  <button
                                    type="button"
                                    onClick={addRoom}
                                    className="block font-black underline text-brand-700 mt-1 cursor-pointer"
                                  >
                                    + Click here to add 2nd Room →
                                  </button>
                                </div>
                              </div>
                            )}

                            {/* 1. Adults Selector */}
                            <div className="space-y-2">
                              <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                                <span>Adults (12+ yrs)</span>
                                <span className="text-[11px] text-slate-500 font-normal">Min 1 adult per room</span>
                              </label>
                              <div className="flex items-center space-x-3 bg-white p-2 rounded-xl border border-slate-300 max-w-xs">
                                <button
                                  type="button"
                                  onClick={() => updateAdults(roomIdx, -1)}
                                  className="w-8 h-8 rounded-lg bg-slate-100 font-black text-slate-700 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="flex-1 text-center font-black text-sm text-slate-900">{room.adults} Adults</span>
                                <button
                                  type="button"
                                  onClick={() => updateAdults(roomIdx, 1)}
                                  className="w-8 h-8 rounded-lg bg-slate-100 font-black text-slate-700 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* 2. Are Any Children Travelling? (Yes / No Toggle) */}
                            <div className="space-y-2 pt-2 border-t border-slate-200/60">
                              <label className="text-xs font-bold text-slate-800 block">
                                Are any children travelling in Room {roomIdx + 1}?
                              </label>
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  onClick={() => setHasChildren(roomIdx, false)}
                                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    !room.hasChildren
                                      ? 'bg-slate-900 text-white shadow-xs'
                                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                                  }`}
                                >
                                  ❌ No Children
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setHasChildren(roomIdx, true)}
                                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    room.hasChildren
                                      ? 'bg-brand-600 text-white shadow-xs'
                                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                                  }`}
                                >
                                  👶 Yes, Children Travelling
                                </button>
                              </div>
                            </div>

                            {/* 3. CONDITIONAL CHILD CONFIGURATION (Only shown if hasChildren === true) */}
                            {room.hasChildren && (
                              <div className="p-4 bg-white rounded-xl border border-brand-200 space-y-4 animate-in fade-in duration-200">
                                
                                {/* Step 3a: Select Number of Children */}
                                <div className="space-y-2">
                                  <label className="text-xs font-bold text-slate-800 block">
                                    Select Number of Children in Room {roomIdx + 1}:
                                  </label>
                                  <div className="flex items-center space-x-2">
                                    {[1, 2, 3].map((num) => (
                                      <button
                                        key={num}
                                        type="button"
                                        onClick={() => setChildrenCount(roomIdx, num)}
                                        className={`w-10 h-10 rounded-xl text-xs font-black transition-all cursor-pointer ${
                                          room.children.length === num
                                            ? 'bg-brand-600 text-white shadow-xs'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                      >
                                        {num}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Step 3b: Select Age Category for Each Child */}
                                <div className="space-y-3 pt-2 border-t border-slate-100">
                                  <span className="text-xs font-extrabold text-slate-700 block">
                                    Select Age Category for Each Child:
                                  </span>

                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {room.children.map((child, childIdx) => (
                                      <div key={childIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                                        <label className="text-[11px] font-bold text-slate-800 flex items-center justify-between">
                                          <span>Child {childIdx + 1} Age:</span>
                                        </label>

                                        <select
                                          value={child.ageCategory}
                                          onChange={(e) => updateChildAgeCategory(roomIdx, childIdx, e.target.value as ChildAgeCategory)}
                                          className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-brand-600 cursor-pointer"
                                        >
                                          <option value="under5">🍼 Below 5 yrs (No Fare - FREE)</option>
                                          <option value="age5to9">🧒 5 - 9 yrs (50% Fare - Child No Bed)</option>
                                          <option value="age10to14">🛌 10 - 14 yrs (80% Fare - Extra Bed)</option>
                                          <option value="age15to17">🧑 15 - 17 yrs (80% Fare - Teenager)</option>
                                          <option value="age18plus">👤 18+ yrs (Full Adult Fare - 100%)</option>
                                        </select>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                              </div>
                            )}

                          </div>
                        );
                      })}
                    </div>

                    {/* STEP 3: PASSENGER NAMES & DETAILS FORM */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                        <div>
                          <h3 className="font-black text-sm text-slate-900 flex items-center space-x-2">
                            <UserCheck className="w-4.5 h-4.5 text-brand-600" />
                            <span>Passenger Names & Information</span>
                          </h3>
                          <p className="text-[11px] text-slate-500">Please enter passenger details as per official Govt. ID proof (Aadhar/Passport).</p>
                        </div>

                        {(savedCoTravellers.length > 0 || user?.name) && (
                          <button
                            type="button"
                            onClick={autoFillAllPassengers}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer shrink-0"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>⚡ Auto-Fill Saved Passengers</span>
                          </button>
                        )}
                      </div>

                      {/* Loop through each room */}
                      {rooms.map((room, roomIdx) => (
                        <div key={roomIdx} className="space-y-3 p-4 bg-slate-50/90 rounded-2xl border border-slate-200">
                          <span className="font-black text-xs text-slate-800 uppercase tracking-wider block border-b border-slate-200 pb-2">
                            🏨 Room {roomIdx + 1} Passenger List ({room.adults} Adult{room.adults > 1 ? 's' : ''}{room.hasChildren ? `, ${room.children.length} Child${room.children.length > 1 ? 'ren' : ''}` : ''})
                          </span>

                          {/* Adult Passengers */}
                          {Array.from({ length: room.adults }).map((_, adultIdx) => {
                            const pKey = `r${roomIdx}_adult_${adultIdx}`;
                            return (
                              <div key={pKey} className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-2xs">
                                <div className="flex items-center justify-between">
                                  <span className="font-bold text-xs text-brand-700 flex items-center space-x-1.5">
                                    <span>👤 Adult {adultIdx + 1} {adultIdx === 0 ? '(Lead Traveller)' : ''}</span>
                                  </span>

                                  {savedCoTravellers.length > 0 && (
                                    <select
                                      defaultValue=""
                                      onChange={(e) => {
                                        if (e.target.value) selectCoTraveller(pKey, e.target.value);
                                      }}
                                      className="bg-brand-50 border border-brand-200 text-brand-700 text-[11px] font-bold rounded-lg px-2 py-1 focus:outline-none cursor-pointer max-w-[200px]"
                                    >
                                      <option value="">📋 Select Saved Co-Traveller...</option>
                                      {user?.name && <option value="user_self">👤 {user.name} (Logged User)</option>}
                                      {savedCoTravellers.map((c) => (
                                        <option key={c.id} value={c.id}>
                                          {c.name} ({c.relation || 'Saved'}, {c.age}y {c.gender})
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                </div>

                                <div className="grid grid-cols-12 gap-2 text-xs">
                                  {/* Title Dropdown */}
                                  <div className="col-span-3 sm:col-span-2">
                                    <label className="text-[10px] font-bold text-slate-500 block mb-1">Title</label>
                                    <select
                                      value={passengers[pKey]?.title || 'Mr'}
                                      onChange={(e) => updatePassengerField(pKey, 'title', e.target.value)}
                                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2 py-2 font-bold text-slate-800 focus:outline-none"
                                    >
                                      <option value="Mr">Mr.</option>
                                      <option value="Mrs">Mrs.</option>
                                      <option value="Ms">Ms.</option>
                                    </select>
                                  </div>

                                  {/* Full Name */}
                                  <div className="col-span-9 sm:col-span-6">
                                    <label className="text-[10px] font-bold text-slate-500 block mb-1">Full Name (as on ID) *</label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="Enter full name"
                                      value={passengers[pKey]?.fullName || ''}
                                      onChange={(e) => updatePassengerField(pKey, 'fullName', e.target.value)}
                                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 font-bold text-slate-900 focus:outline-none focus:border-brand-600"
                                    />
                                  </div>

                                  {/* Gender */}
                                  <div className="col-span-6 sm:col-span-2">
                                    <label className="text-[10px] font-bold text-slate-500 block mb-1">Gender</label>
                                    <select
                                      value={passengers[pKey]?.gender || 'Male'}
                                      onChange={(e) => updatePassengerField(pKey, 'gender', e.target.value)}
                                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2 py-2 font-bold text-slate-800 focus:outline-none"
                                    >
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                  </div>

                                  {/* Age */}
                                  <div className="col-span-6 sm:col-span-2">
                                    <label className="text-[10px] font-bold text-slate-500 block mb-1">Age (yrs)</label>
                                    <input
                                      type="number"
                                      min="12"
                                      max="100"
                                      placeholder="Age"
                                      value={passengers[pKey]?.age || ''}
                                      onChange={(e) => updatePassengerField(pKey, 'age', e.target.value)}
                                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 font-bold text-slate-900 focus:outline-none"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          {/* Child Passengers */}
                          {room.hasChildren && room.children.map((child, childIdx) => {
                            const cKey = `r${roomIdx}_child_${childIdx}`;
                            return (
                              <div key={cKey} className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2 shadow-2xs">
                                <div className="flex items-center justify-between">
                                  <span className="font-bold text-xs text-amber-900 flex items-center space-x-1.5">
                                    <span>👶 Child {childIdx + 1} ({
                                      child.ageCategory === 'under5' ? 'Below 5 yrs (FREE)' :
                                      child.ageCategory === 'age5to9' ? '5-9 yrs (50% Fare)' :
                                      child.ageCategory === 'age10to14' ? '10-14 yrs (80% Fare)' :
                                      child.ageCategory === 'age15to17' ? '15-17 yrs (80% Fare)' :
                                      '18+ yrs (Full Adult)'
                                    })</span>
                                  </span>

                                  {savedCoTravellers.length > 0 && (
                                    <select
                                      defaultValue=""
                                      onChange={(e) => {
                                        if (e.target.value) selectCoTraveller(cKey, e.target.value);
                                      }}
                                      className="bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-bold rounded-lg px-2 py-1 focus:outline-none cursor-pointer max-w-[200px]"
                                    >
                                      <option value="">📋 Select Saved Child...</option>
                                      {savedCoTravellers.map((c) => (
                                        <option key={c.id} value={c.id}>
                                          {c.name} ({c.relation || 'Saved'}, {c.age}y {c.gender})
                                        </option>
                                      ))}
                                    </select>
                                  )}
                                </div>

                                <div className="grid grid-cols-12 gap-2 text-xs">
                                  {/* Title */}
                                  <div className="col-span-3 sm:col-span-2">
                                    <label className="text-[10px] font-bold text-slate-500 block mb-1">Title</label>
                                    <select
                                      value={passengers[cKey]?.title || 'Master'}
                                      onChange={(e) => updatePassengerField(cKey, 'title', e.target.value)}
                                      className="w-full bg-white border border-amber-300 rounded-lg px-2 py-2 font-bold text-slate-800 focus:outline-none"
                                    >
                                      <option value="Master">Master</option>
                                      <option value="Miss">Miss</option>
                                    </select>
                                  </div>

                                  {/* Full Name */}
                                  <div className="col-span-9 sm:col-span-7">
                                    <label className="text-[10px] font-bold text-slate-500 block mb-1">Child Full Name *</label>
                                    <input
                                      required
                                      type="text"
                                      placeholder="Enter child full name"
                                      value={passengers[cKey]?.fullName || ''}
                                      onChange={(e) => updatePassengerField(cKey, 'fullName', e.target.value)}
                                      className="w-full bg-white border border-amber-300 rounded-lg px-3 py-2 font-bold text-slate-900 focus:outline-none focus:border-brand-600"
                                    />
                                  </div>

                                  {/* Gender */}
                                  <div className="col-span-12 sm:col-span-3">
                                    <label className="text-[10px] font-bold text-slate-500 block mb-1">Gender</label>
                                    <select
                                      value={passengers[cKey]?.gender || 'Male'}
                                      onChange={(e) => updatePassengerField(cKey, 'gender', e.target.value)}
                                      className="w-full bg-white border border-amber-300 rounded-lg px-2 py-2 font-bold text-slate-800 focus:outline-none"
                                    >
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>

                    {/* STEP 4: CONTACT DETAILS INPUT BLOCK */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <div>
                        <h3 className="font-black text-sm text-slate-900">Contact Details</h3>
                        <p className="text-[11px] text-slate-500">Your official booking vouchers and itinerary details will be sent here.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Mobile No. *</label>
                          <div className="flex rounded-xl overflow-hidden border border-slate-300 bg-slate-50">
                            <span className="px-3 py-2.5 font-bold text-slate-500 border-r border-slate-300 bg-slate-100 text-xs flex items-center">
                              +91
                            </span>
                            <input
                              required
                              type="tel"
                              placeholder="Mobile No. *"
                              value={contactPhone}
                              onChange={(e) => setContactPhone(e.target.value)}
                              className="flex-1 bg-white px-3 py-2.5 font-semibold text-slate-900 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Email ID *</label>
                          <input
                            required
                            type="email"
                            placeholder="Enter Mail ID *"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 font-semibold text-slate-900 focus:outline-none focus:border-brand-600"
                          />
                        </div>
                      </div>

                      {/* Checkbox agreement */}
                      <label className="flex items-center space-x-2 text-xs text-slate-600 font-semibold cursor-pointer pt-1">
                        <input
                          type="checkbox"
                          checked={acceptedTerms}
                          onChange={(e) => setAcceptedTerms(e.target.checked)}
                          className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                        />
                        <span>I accept the <a href="#" className="text-brand-600 underline">Privacy Policy</a>, and <a href="#" className="text-brand-600 underline">Terms & Conditions</a> *</span>
                      </label>
                    </div>

                    {/* Calculate Price Button */}
                    <div className="pt-2 flex justify-end">
                      <Button
                        type="submit"
                        variant="secondary"
                        size="lg"
                        className="font-black px-8 py-3 bg-slate-200 hover:bg-brand-600 hover:text-white text-slate-800 text-xs rounded-xl transition-all cursor-pointer shadow-xs"
                      >
                        Calculate Price
                      </Button>
                    </div>
                  </form>
                </Card>
              </div>

              {/* Right Sidebar: Dynamic Calculated Price Card */}
              <div className="lg:col-span-4 space-y-4 sticky top-20">
                <Card className="p-6 bg-white rounded-3xl border-slate-200 shadow-xl space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs text-slate-400 line-through font-semibold">
                        {formatCurrency(originalPricePerPerson)}
                      </span>
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full">
                        {discountPercent}% OFF
                      </span>
                    </div>

                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-black text-slate-900">{formatCurrency(basePricePerPerson)}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                      {effectiveAdultsCount === 1 ? 'Solo Traveler Rate (Private Room & Cab Included)' : effectiveAdultsCount === 2 ? `Twin Sharing Couple Rate • Total ${formatCurrency(effectiveAdultsCount * basePricePerPerson)} for 2 Adults` : `Group Saver Rate • Total ${formatCurrency(effectiveAdultsCount * basePricePerPerson)} for ${effectiveAdultsCount} Adults`}
                    </span>
                  </div>

                  {/* Reward Points */}
                  <div className="p-2.5 bg-indigo-50/70 border border-indigo-100 rounded-xl text-xs text-indigo-800 font-bold flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-400" />
                    <span>Earn {rewardPoints} Points</span>
                  </div>

                  {/* Calculated Price Result Box */}
                  {isPriceCalculated && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2.5 animate-in zoom-in-95">
                      <div className="flex items-center justify-between border-b border-emerald-200/80 pb-2">
                        <span className="text-[10px] font-black text-emerald-900 uppercase tracking-wider">
                          ✓ Calculated Total ({totalTravellersCount} Travellers)
                        </span>
                        <span className="text-[10px] font-bold bg-emerald-200/80 text-emerald-950 px-2 py-0.5 rounded-full">
                          {tourTier.toUpperCase()} TIER
                        </span>
                      </div>

                      <div className="text-2xl font-black text-emerald-700">
                        {formatCurrency(finalPayablePrice)}
                        {couponDiscountAmount > 0 && (
                          <span className="text-xs font-bold text-slate-400 line-through ml-2">
                            {formatCurrency(calculatedTotalPriceWithGst)}
                          </span>
                        )}
                      </div>

                      {/* Itemized Price Breakdown Table */}
                      <div className="text-[11px] text-emerald-950 space-y-1 border-t border-emerald-200/80 pt-2 font-medium">
                        <div className="flex justify-between">
                          <span>• Adults ({effectiveAdultsCount} × {formatCurrency(basePricePerPerson)}):</span>
                          <span className="font-bold">{formatCurrency(effectiveAdultsCount * basePricePerPerson)}</span>
                        </div>
                        {totalAge15to17 > 0 && (
                          <div className="flex justify-between">
                            <span>• Teens 15-17y ({totalAge15to17} × 80%):</span>
                            <span className="font-bold">{formatCurrency(Math.round(totalAge15to17 * basePricePerPerson * 0.8))}</span>
                          </div>
                        )}
                        {totalAge10to14 > 0 && (
                          <div className="flex justify-between">
                            <span>• Children 10-14y ({totalAge10to14} × 80% Bed):</span>
                            <span className="font-bold">{formatCurrency(Math.round(totalAge10to14 * basePricePerPerson * 0.8))}</span>
                          </div>
                        )}
                        {totalAge5to9 > 0 && (
                          <div className="flex justify-between">
                            <span>• Children 5-9y ({totalAge5to9} × 50% No Bed):</span>
                            <span className="font-bold">{formatCurrency(Math.round(totalAge5to9 * basePricePerPerson * 0.5))}</span>
                          </div>
                        )}
                        {totalUnder5 > 0 && (
                          <div className="flex justify-between text-emerald-800 font-bold">
                            <span>• Children Below 5y ({totalUnder5} Infant):</span>
                            <span>FREE ₹0</span>
                          </div>
                        )}

                        {/* Subtotal Package Fare */}
                        <div className="flex justify-between border-t border-emerald-200/60 pt-1 font-bold text-slate-700">
                          <span>• Subtotal Package Fare:</span>
                          <span>{formatCurrency(subtotalBeforeGst)}</span>
                        </div>

                        {/* 5% GST Tax Line */}
                        <div className="flex justify-between text-amber-900 font-bold bg-amber-100/70 px-2 py-0.5 rounded-md">
                          <span>• GST (5% Govt. Tour Service Tax):</span>
                          <span>+{formatCurrency(gstAmount)}</span>
                        </div>

                        {couponDiscountAmount > 0 && (
                          <div className="flex justify-between text-emerald-800 font-extrabold bg-emerald-100/90 px-2 py-1 rounded-md">
                            <span>• Coupon Savings ({appliedCoupon?.code}):</span>
                            <span>-{formatCurrency(couponDiscountAmount)}</span>
                          </div>
                        )}
                        <div className="pt-1.5 border-t border-emerald-200/80 flex justify-between font-black text-emerald-900 text-xs">
                          <span>Final Total Payable (Incl. 5% GST):</span>
                          <span className="text-emerald-700 font-black">{formatCurrency(finalPayablePrice)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Book Online OR Request Upgrade Quote */}
                  {isUpgradeQuoteTier ? (
                    <Button
                      onClick={() => setIsUpgradeModalOpen(true)}
                      variant="accent"
                      size="lg"
                      className="w-full font-black py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>SUBMIT {tourTier.toUpperCase()} UPGRADE REQUEST →</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={handleProceedToCheckout}
                      disabled={isNavigatingToCheckout || (!isPriceCalculated && (!contactPhone || !contactEmail))}
                      variant="accent"
                      size="lg"
                      className="w-full font-black py-4 text-slate-950 text-sm shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isNavigatingToCheckout ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                          <span>Preparing Secure Checkout...</span>
                        </>
                      ) : isPriceCalculated ? (
                        'BOOK ONLINE NOW →'
                      ) : (
                        'Book Online'
                      )}
                    </Button>
                  )}
                </Card>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 6. HOTEL UPGRADE REQUEST MODAL */}
      {isUpgradeModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => {
                setIsUpgradeModalOpen(false);
                setUpgradeSuccess(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {upgradeSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Upgrade Request Submitted!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  We have received your request for <strong>{tourTier === 'luxury' ? '5★ Luxury' : '4★ Deluxe'}</strong> hotel upgrade ({cleanHotelName(getTierHotelName(pkg.hotels?.[0]?.name, pkg.destination, tourTier))}).
                  Our holiday specialist will check live room availability for your travel dates and call/WhatsApp you within 15 minutes.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href={`https://wa.me/917408763401?text=${encodeURIComponent(`Hi Trip Customizer, I requested a ${tourTier.toUpperCase()} hotel upgrade for ${pkg.name}. Please share live rates.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                  <Button
                    onClick={() => {
                      setIsUpgradeModalOpen(false);
                      setUpgradeSuccess(false);
                    }}
                    variant="outline"
                    className="text-xs font-bold py-3"
                  >
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-amber-700 bg-amber-50 px-3 py-1 rounded-full text-xs font-black inline-flex mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Live Hotel Upgrade Request</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900">
                    Upgrade to {tourTier === 'luxury' ? '5★ Luxury' : '4★ Deluxe'} Tier
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Package: <strong>{pkg.name}</strong>
                  </p>
                  <p className="text-xs text-slate-700 font-bold mt-1 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    🏨 Hotel Property: <span className="text-brand-700">{cleanHotelName(getTierHotelName(pkg.hotels?.[0]?.name, pkg.destination, tourTier))}</span>
                  </p>
                </div>

                <form onSubmit={handleUpgradeSubmit} className="space-y-3 pt-1 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={upgradeName || contactName}
                      onChange={(e) => setUpgradeName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-semibold focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                    <div className="flex space-x-2">
                      <span className="bg-slate-100 border border-slate-200 px-3 py-2.5 rounded-xl text-slate-600 font-bold shrink-0">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={upgradePhone || contactPhone}
                        onChange={(e) => setUpgradePhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-semibold focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Travel Date</label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-brand-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Travellers</label>
                      <input
                        type="text"
                        disabled
                        value={`${effectiveAdultsCount} Adults${totalTravellersCount > effectiveAdultsCount ? `, ${totalTravellersCount - effectiveAdultsCount} Kids` : ''}`}
                        className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-slate-600 font-medium text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Special Preferences / Notes (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need sea-facing room, extra bed for child, etc."
                      value={upgradeNotes}
                      onChange={(e) => setUpgradeNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 text-xs focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isUpgradeSubmitting}
                    variant="accent"
                    size="lg"
                    className="w-full font-black py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs sm:text-sm shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    {isUpgradeSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending Upgrade Request...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-slate-950" />
                        <span>GET LIVE UPGRADE QUOTE ON CALL / WHATSAPP →</span>
                      </>
                    )}
                  </Button>
                  <p className="text-[10px] text-center text-slate-400 font-medium">
                    🔒 No spam guarantee. Our holiday consultant will provide honest, transparent live hotel pricing.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Package Editor Modal for Instant Price/Details Updates */}
      <QuickPackageCreatorModal
        isOpen={isEditModalOpen}
        packageToEdit={pkg}
        onClose={() => setIsEditModalOpen(false)}
        onPackageCreated={(updated) => {
          setActivePkg(updated);
          setIsEditModalOpen(false);
        }}
      />
    </div>
  );
}
