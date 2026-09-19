'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { DEMO_PACKAGES, HolidayPackage } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CoTraveller } from '@/lib/cloudStore';
import { sendWeb3FormLead } from '@/lib/web3forms';
import {
  Star, Clock, MapPin, CheckCircle2, ChevronRight, ChevronDown, ChevronUp,
  Hotel, Plane, Utensils, ShieldCheck, MessageCircle, Share2, Download,
  PhoneCall, Sparkles, Tag, Check, X, Car, Info, Users, ArrowRight,
  CheckCircle, XCircle, FileText, Plus, Minus, Calendar, ArrowLeft, Baby, UserCheck, AlertTriangle, Loader2
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

export default function PackageDetailPage({ params }: { params: { destination: string; package: string } }) {
  const router = useRouter();
  const { user, login } = useAuth();

  // Resolve package data or fallback
  const pkg: HolidayPackage = DEMO_PACKAGES.find((p) => p.slug === params.package) || DEMO_PACKAGES[0];

  // Active Main Sub-Tab State
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'summary' | 'highlights'>('itinerary');

  // Itinerary Tab State
  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [activeDayFilter, setActiveDayFilter] = useState<number | 'all'>('all');

  // Inclusions Tab Filter
  const [inclusionCategory, setInclusionCategory] = useState<'all' | 'hotels' | 'sightseeing' | 'meals' | 'transfers' | 'exclusions'>('all');

  // Pricing & Tier State
  const [tourTier, setTourTier] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');

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

  // Coupon / Promo Code State & Interactive Coupons Registry
  const [promoInput, setPromoInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; percent?: number; amount?: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  const VALID_COUPONS: Record<string, { percent?: number; amount?: number; label: string }> = {
    FESTIVE15: { percent: 15, label: '15% Festive Special Discount' },
    EARLYBIRD: { amount: 2000, label: '₹2,000 Flat Early Bird Bonus' },
    HOLIDAY5000: { amount: 5000, label: '₹5,000 Flat Mega Holiday Saver' },
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
      setAppliedCoupon({
        code: cleanCode,
        percent: matched.percent,
        amount: matched.amount,
      });
      setCouponError('');
    } else {
      setCouponError(`Invalid code "${cleanCode}". Try FESTIVE15 or EARLYBIRD.`);
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

  // Pricing calculations based on tier & detailed child ages
  const tierMultiplier = tourTier === 'standard' ? 0.9 : tourTier === 'deluxe' ? 1.0 : 1.25;
  const basePricePerPerson = Math.round(pkg.startingPrice * tierMultiplier);
  const originalPricePerPerson = pkg.discountPrice ? Math.round(pkg.discountPrice * tierMultiplier) : Math.round(basePricePerPerson * 1.18);
  const discountPercent = Math.round(((originalPricePerPerson - basePricePerPerson) / originalPricePerPerson) * 100);

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
  if (appliedCoupon) {
    if (appliedCoupon.percent) {
      couponDiscountAmount = Math.round((calculatedTotalPriceWithGst * appliedCoupon.percent) / 100);
    } else if (appliedCoupon.amount) {
      couponDiscountAmount = Math.min(calculatedTotalPriceWithGst, appliedCoupon.amount);
    }
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
      `/booking/checkout?slug=${pkg.slug}&pax=${totalTravellersCount}&tier=${tourTier}&date=${travelDate}&city=${encodeURIComponent(joiningCity)}&lead=${encodeURIComponent(leadName)}&paxData=${encodedPassengers}&coupon=${appliedCoupon?.code || ''}&discount=${couponDiscountAmount}`
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
      price: pkg.startingPrice,
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
              {/* Hotel / City Night Breakdown Pill */}
              {pkg.hotels && pkg.hotels.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 mt-2">
                  {pkg.hotels.map((h, idx) => (
                    <span key={idx} className="flex items-center space-x-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3 h-3 text-brand-600" />
                      <span>{h.nights}N {h.city}</span>
                      {idx < pkg.hotels.length - 1 && <span className="text-slate-300 ml-1">|</span>}
                    </span>
                  ))}
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
                <span className="text-[10px] font-semibold text-slate-500">{pkg.hotelCategory} Category</span>
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
              </div>

              {/* Action Buttons: Share & Download */}
              <div className="hidden sm:flex items-center space-x-2 pl-2 border-l border-slate-200">
                <button
                  onClick={handleShare}
                  title="Share Package"
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => window.print()}
                  title="Download Itinerary"
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-brand-600 transition-colors cursor-pointer"
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
                                    {dayItem.title}
                                  </h3>
                                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500">
                                    <span className="flex items-center space-x-1">
                                      <Hotel className="w-3.5 h-3.5 text-brand-600" />
                                      <span>Stay: {dayItem.hotel || '3/4 Star Resort'}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                                      <span>Meals: {dayItem.meals?.join(', ') || 'Breakfast & Dinner'}</span>
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
                                <p className="leading-relaxed text-slate-700">{dayItem.description}</p>

                                {/* Activity / Highlights Bullets */}
                                {dayItem.activities && dayItem.activities.length > 0 && (
                                  <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200/80">
                                    <span className="font-bold text-slate-900 text-xs block">Key Activities & Sightseeing:</span>
                                    <ul className="space-y-1.5">
                                      {dayItem.activities.map((act, actIdx) => (
                                        <li key={actIdx} className="flex items-start space-x-2 text-slate-700">
                                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                          <span>{act}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Stay & Transfer Details Badge */}
                                <div className="flex flex-wrap items-center gap-4 text-slate-800 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                                  <div className="flex items-center space-x-1.5 font-bold">
                                    <Hotel className="w-4 h-4 text-emerald-700" />
                                    <span>Hotel Check-in: {dayItem.hotel || 'Premium Stay'}</span>
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
                      <Badge variant="blue">{pkg.hotelCategory} Category</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pkg.hotels && pkg.hotels.length > 0 ? (
                        pkg.hotels.map((h, i) => (
                          <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-black text-sm text-slate-900">{h.name}</span>
                              <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-md">
                                {h.rating}
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 flex items-center space-x-2">
                              <span>📍 {h.city}</span>
                              <span>•</span>
                              <span>🌙 {h.nights} Nights Stay</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                          <span className="font-bold text-slate-900 text-xs">Premium 3/4-Star Deluxe Resorts</span>
                          <p className="text-xs text-slate-500">Handpicked comfortable stays with modern amenities and daily breakfast.</p>
                        </div>
                      )}
                    </div>
                  </Card>
                )}

                {/* What your tour price includes (BLUE BOX WITH GREEN CHECKMARKS) */}
                {(inclusionCategory === 'all' || inclusionCategory === 'sightseeing' || inclusionCategory === 'meals') && (
                  <div className="p-6 bg-blue-50/70 border border-blue-200 rounded-3xl space-y-4">
                    <h3 className="font-black text-blue-950 text-base flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>What your tour price includes?</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-blue-100 text-slate-800 font-semibold shadow-2xs">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What your tour price does NOT include (ORANGE BOX WITH RED CROSSMARKS) */}
                {(inclusionCategory === 'all' || inclusionCategory === 'exclusions') && (
                  <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-3xl space-y-4">
                    <h3 className="font-black text-amber-950 text-base flex items-center space-x-2">
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span>What your tour price does not include?</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {pkg.exclusions.map((exc, i) => (
                        <div key={i} className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-amber-100 text-slate-700 font-semibold shadow-2xs">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 3: SUMMARY */}
            {activeTab === 'summary' && (
              <Card className="p-6 bg-white border-slate-200/80 rounded-3xl space-y-6 animate-in fade-in">
                <div className="space-y-2">
                  <h3 className="font-black text-lg text-slate-900">Tour Summary & Overview</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Experience an unforgettable journey across {pkg.destination}. Designed specifically for family travel, couples, and heritage enthusiasts with 100% verified hotels, private cabs, and dedicated tour manager support.
                  </p>
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
          </div>

          {/* RIGHT CONTAINER: STICKY SIDEBAR PRICING & ENQUIRY CARD (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-white rounded-3xl border-slate-200/80 shadow-xl sticky top-20 space-y-5">
              
              {/* Tour Tier Selector */}
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold text-slate-400 block uppercase tracking-wider">
                  Select Hotel & Package Tier
                </span>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => { setTourTier('standard'); setIsPriceCalculated(false); }}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      tourTier === 'standard' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    3★ Standard
                  </button>
                  <button
                    onClick={() => { setTourTier('deluxe'); setIsPriceCalculated(false); }}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      tourTier === 'deluxe' ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    4★ Deluxe
                  </button>
                  <button
                    onClick={() => { setTourTier('luxury'); setIsPriceCalculated(false); }}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      tourTier === 'luxury' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    5★ Luxury
                  </button>
                </div>
              </div>

              {/* Price Display Block */}
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
                <span className="text-[10px] text-slate-400 block font-medium">Starting price per adult</span>
              </div>

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
                      onClick={() => { setPromoInput('FESTIVE15'); setAppliedCoupon({ code: 'FESTIVE15', percent: 15 }); setCouponError(''); }}
                      className="text-[10px] bg-white border border-amber-300 text-amber-900 font-bold px-2 py-0.5 rounded-md hover:bg-amber-100 cursor-pointer"
                    >
                      FESTIVE15 (-15%)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPromoInput('EARLYBIRD'); setAppliedCoupon({ code: 'EARLYBIRD', amount: 2000 }); setCouponError(''); }}
                      className="text-[10px] bg-white border border-amber-300 text-amber-900 font-bold px-2 py-0.5 rounded-md hover:bg-amber-100 cursor-pointer"
                    >
                      EARLYBIRD (-₹2000)
                    </button>
                  </div>
                )}
              </div>

              {/* Reward Points Badge */}
              <div className="flex items-center space-x-2 text-[11px] text-indigo-700 bg-indigo-50/70 p-2.5 rounded-xl border border-indigo-100 font-bold">
                <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-400" />
                <span>Earn {rewardPoints} Trip Customizer Rewards Points</span>
              </div>

              {/* Primary Action Button: Calculate Price & Enter Travel Details */}
              <div className="space-y-2 pt-1">
                <Button
                  onClick={() => setIsCalculatePriceView(true)}
                  variant="accent"
                  size="lg"
                  className="w-full font-black py-3.5 text-slate-950 text-sm shadow-md cursor-pointer hover:scale-[1.01] transition-transform flex items-center justify-center space-x-2"
                >
                  <span>CALCULATE PRICE & BOOK TOUR →</span>
                </Button>

                <a
                  href="https://wa.me/918291901377"
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
                    <span className="text-xs text-slate-500 font-semibold block mt-0.5">Starting price per adult</span>
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

                  {/* Book Online Button */}
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
                </Card>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
