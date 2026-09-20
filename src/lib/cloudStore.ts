import { db } from '@/lib/firebase';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { supabase } from '@/lib/supabase';

export interface PassengerDetail {
  name: string;
  age?: number | string;
  gender?: string;
  type?: string;
}

export interface CustomerBooking {
  id: string;
  referenceNo: string;
  userId?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  packageName: string;
  destination: string;
  travelDates: string;
  travelersCount: number;
  hotelCategory?: string;
  basePrice?: number;
  gstAmount?: number;
  discountAmount?: number;
  couponApplied?: string;
  paymentMethod?: string;
  transactionId?: string;
  specialRequests?: string;
  totalAmount: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  paymentStatus: 'Paid' | 'Partial' | 'Pending';
  createdAt: string;
  notes?: string;
  passengersList?: PassengerDetail[];
}

export interface CustomerLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  destination: string;
  budget?: string;
  travelDates?: string;
  travelersCount?: number;
  status: 'New' | 'Contacted' | 'Converted' | 'Closed';
  createdAt: string;
  source?: string;
}

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  address?: string;
  savedTravelers?: { name: string; age: number; gender: string }[];
  updatedAt: string;
}

export interface CoTraveller {
  id: string;
  name: string;
  age: number;
  gender: string;
  relation: string;
}

const STORAGE_KEYS = {
  BOOKINGS: 'tc_cloud_bookings_v1',
  LEADS: 'tc_cloud_leads_v1',
  PROFILES: 'tc_cloud_profiles_v1',
  CURRENT_USER: 'tc_cloud_current_user_v1',
  CO_TRAVELLERS: 'tc_cloud_co_travellers_v1',
};

// Initial Seed Data
const DEFAULT_BOOKINGS: CustomerBooking[] = [];
const DEFAULT_LEADS: CustomerLead[] = [];

// Helper to safely access localStorage
const getStoredData = <T>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.error('Failed to read cloud storage key', key, e);
    return fallback;
  }
};

const setStoredData = <T>(key: string, data: T): void => {
  if (typeof window === 'undefined') return;
  try {
    const rawExisting = localStorage.getItem(key);
    const serializedNew = JSON.stringify(data);
    if (rawExisting === serializedNew) return;

    localStorage.setItem(key, serializedNew);
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('cloudstore_update', { detail: { key, data } }));
  } catch (e) {
    console.error('Failed to write cloud storage key', key, e);
  }
};

// --- SYNC HELPERS (SUPABASE + FIRESTORE + SERVER API) ---

// 1. Sync Booking to Supabase PostgreSQL & Firestore DB
const syncBookingToCloud = async (booking: CustomerBooking) => {
  if (typeof window === 'undefined') return;

  // A. Sync to Supabase PostgreSQL Table
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      await supabase.from('bookings').upsert({
        id: booking.id,
        reference_no: booking.referenceNo,
        user_id: booking.userId || null,
        customer_name: booking.customerName,
        customer_phone: booking.customerPhone,
        customer_email: booking.customerEmail || null,
        package_name: booking.packageName,
        destination: booking.destination,
        travel_dates: booking.travelDates,
        travelers_count: booking.travelersCount || 1,
        hotel_category: booking.hotelCategory || null,
        base_price: booking.basePrice || 0,
        gst_amount: booking.gstAmount || 0,
        discount_amount: booking.discountAmount || 0,
        coupon_applied: booking.couponApplied || null,
        payment_method: booking.paymentMethod || null,
        transaction_id: booking.transactionId || null,
        special_requests: booking.specialRequests || null,
        total_amount: booking.totalAmount || 0,
        status: booking.status || 'Pending',
        payment_status: booking.paymentStatus || 'Pending',
        passengers_list: booking.passengersList || [],
        notes: booking.notes || null,
        created_at: booking.createdAt,
      });
    }
  } catch (err) {
    console.warn('Supabase booking sync note:', err);
  }

  // B. Post to Next.js Server API
  try {
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    }).catch(() => {});
  } catch (e) {}

  // C. Sync to Cloud Firestore DB
  if (db && process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    try {
      await setDoc(doc(db, 'bookings', booking.id), booking, { merge: true });
    } catch (e) {
      console.warn('Firestore booking sync note:', e);
    }
  }
};

// 2. Sync Lead / Custom Inquiry to Supabase & Firestore
const syncLeadToCloud = async (lead: CustomerLead) => {
  if (typeof window === 'undefined') return;

  // A. Sync to Supabase PostgreSQL Table
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      await supabase.from('leads').upsert({
        id: lead.id,
        name: lead.name,
        phone: lead.phone,
        email: lead.email || null,
        destination: lead.destination,
        budget: lead.budget || null,
        travel_dates: lead.travelDates || null,
        travelers_count: lead.travelersCount || 1,
        status: lead.status || 'New',
        source: lead.source || 'Website',
        created_at: lead.createdAt,
      });
    }
  } catch (err) {
    console.warn('Supabase lead sync note:', err);
  }

  // B. Post to Server API
  try {
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    }).catch(() => {});
  } catch (e) {}

  // C. Sync to Cloud Firestore
  if (db && process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    try {
      await setDoc(doc(db, 'leads', lead.id), lead, { merge: true });
    } catch (e) {
      console.warn('Firestore lead sync note:', e);
    }
  }
};

// 3. Sync User Profile to Supabase & Firestore
const syncProfileToCloud = async (profile: UserProfile) => {
  if (typeof window === 'undefined') return;

  // A. Sync to Supabase PostgreSQL 'customers' table
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      await supabase.from('customers').upsert({
        id: profile.uid,
        name: profile.name,
        phone: profile.phone || null,
        email: profile.email || null,
        city: profile.city || null,
        address: profile.address || null,
        saved_travelers: profile.savedTravelers || [],
        updated_at: profile.updatedAt || new Date().toISOString(),
      });
    }
  } catch (err) {
    console.warn('Supabase profile sync note:', err);
  }

  // B. Sync to Cloud Firestore
  if (db && process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    try {
      await setDoc(doc(db, 'profiles', profile.uid), profile, { merge: true });
    } catch (e) {
      console.warn('Firestore profile sync note:', e);
    }
  }
};

// Fetch latest global bookings & leads from Supabase / Server API
const syncFromCloud = async () => {
  if (typeof window === 'undefined') return;

  // 1. Fetch from Supabase PostgreSQL first if configured
  try {
    const { data: supaBookings, error: supaErr } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (!supaErr && Array.isArray(supaBookings) && supaBookings.length > 0) {
      const mapped: CustomerBooking[] = supaBookings.map((b: any) => ({
        id: b.id || `bk-${Date.now()}`,
        referenceNo: b.reference_no || b.referenceNo || b.ref_no || `TC-BK-${(b.id || '').slice(0, 5)}`,
        userId: b.user_id || b.userId || '',
        customerName: b.customer_name || b.customerName || b.name || b.full_name || 'Valued Traveler',
        customerPhone: b.customer_phone || b.customerPhone || b.phone || b.mobile || '',
        customerEmail: b.customer_email || b.customerEmail || b.email || '',
        packageName: b.package_name || b.packageName || b.destination || b.tour_name || 'Holiday Tour',
        destination: b.destination || 'India',
        travelDates: b.travel_dates || b.travelDates || b.dates || 'Upcoming',
        travelersCount: Number(b.travelers_count || b.travelersCount || b.pax || 1),
        hotelCategory: b.hotel_category || b.hotelCategory || '4-Star Premium Deluxe Hotel & Resort',
        basePrice: Number(b.base_price || b.basePrice || 0),
        gstAmount: Number(b.gst_amount || b.gstAmount || 0),
        discountAmount: Number(b.discount_amount || b.discountAmount || 0),
        couponApplied: b.coupon_applied || b.couponApplied || '',
        paymentMethod: b.payment_method || b.paymentMethod || 'Online PG (Cashfree / UPI)',
        transactionId: b.transaction_id || b.transactionId || '',
        specialRequests: b.special_requests || b.specialRequests || '',
        totalAmount: Number(b.total_amount || b.totalAmount || b.amount || b.price || 0),
        status: b.status || 'Confirmed',
        paymentStatus: b.payment_status || b.paymentStatus || 'Paid',
        createdAt: b.created_at || b.createdAt || new Date().toISOString(),
        notes: b.notes || '',
        passengersList: b.passengers_list || b.passengersList || [],
      }));

      const existingLocal = getStoredData<CustomerBooking[]>(STORAGE_KEYS.BOOKINGS, []);
      const bMap = new Map<string, CustomerBooking>();
      existingLocal.forEach((b) => bMap.set(b.id, b));
      mapped.forEach((b) => bMap.set(b.id, b));
      const merged = Array.from(bMap.values()).sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setStoredData(STORAGE_KEYS.BOOKINGS, merged);
    }

    const { data: supaLeads, error: leadErr } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (!leadErr && Array.isArray(supaLeads) && supaLeads.length > 0) {
      const mappedLeads: CustomerLead[] = supaLeads.map((l: any) => ({
        id: l.id || `lead-${Date.now()}`,
        name: l.name || l.customer_name || l.customerName || 'Valued Client',
        phone: l.phone || l.customer_phone || l.customerPhone || l.mobile || '',
        email: l.email || l.customer_email || l.customerEmail || '',
        destination: l.destination || l.package_name || l.packageName || 'Holiday Package',
        budget: l.budget || '',
        travelDates: l.travel_dates || l.travelDates || '',
        travelersCount: Number(l.travelers_count || l.travelersCount || 1),
        status: l.status || 'New',
        source: l.source || 'Website',
        createdAt: l.created_at || l.createdAt || new Date().toISOString(),
      }));

      const existingLocalLeads = getStoredData<CustomerLead[]>(STORAGE_KEYS.LEADS, []);
      const lMap = new Map<string, CustomerLead>();
      existingLocalLeads.forEach((l) => lMap.set(l.id, l));
      mappedLeads.forEach((l) => lMap.set(l.id, l));
      const merged = Array.from(lMap.values()).sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setStoredData(STORAGE_KEYS.LEADS, merged);
    }
  } catch (e) {
    console.warn('Supabase fetch info:', e);
  }

  // 2. Fetch from Next.js Server API (which queries Supabase + JSON backup on server)
  try {
    const resBookings = await fetch('/api/bookings');
    if (resBookings.ok) {
      const data = await resBookings.json();
      if (data.success && Array.isArray(data.bookings) && data.bookings.length > 0) {
        const localBookings = getStoredData<CustomerBooking[]>(STORAGE_KEYS.BOOKINGS, []);
        const bookingMap = new Map<string, CustomerBooking>();
        localBookings.forEach((b) => bookingMap.set(b.id, b));
        (data.bookings as CustomerBooking[]).forEach((b) => bookingMap.set(b.id, b));

        const merged = Array.from(bookingMap.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setStoredData(STORAGE_KEYS.BOOKINGS, merged);
      }
    }
  } catch (e) {}

  try {
    const resLeads = await fetch('/api/leads');
    if (resLeads.ok) {
      const data = await resLeads.json();
      if (data.success && Array.isArray(data.leads) && data.leads.length > 0) {
        const localLeads = getStoredData<CustomerLead[]>(STORAGE_KEYS.LEADS, []);
        const leadMap = new Map<string, CustomerLead>();
        localLeads.forEach((l) => leadMap.set(l.id, l));
        (data.leads as CustomerLead[]).forEach((l) => leadMap.set(l.id, l));

        const merged = Array.from(leadMap.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setStoredData(STORAGE_KEYS.LEADS, merged);
      }
    }
  } catch (e) {}
};

// Initialize listeners
let isCloudListenerInitialized = false;

const initCloudListeners = () => {
  if (typeof window === 'undefined' || isCloudListenerInitialized) return;
  isCloudListenerInitialized = true;

  syncFromCloud();
  setInterval(() => {
    syncFromCloud();
  }, 4000);

  if (db && process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    try {
      onSnapshot(collection(db, 'bookings'), (snapshot) => {
        if (!snapshot.empty) {
          const cloudBookings: CustomerBooking[] = [];
          snapshot.forEach((docSnap) => {
            cloudBookings.push(docSnap.data() as CustomerBooking);
          });

          const localBookings = getStoredData<CustomerBooking[]>(STORAGE_KEYS.BOOKINGS, []);
          const bookingMap = new Map<string, CustomerBooking>();
          localBookings.forEach((b) => bookingMap.set(b.id, b));
          cloudBookings.forEach((b) => bookingMap.set(b.id, b));

          const merged = Array.from(bookingMap.values()).sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setStoredData(STORAGE_KEYS.BOOKINGS, merged);
        }
      }, () => {});

      onSnapshot(collection(db, 'leads'), (snapshot) => {
        if (!snapshot.empty) {
          const cloudLeads: CustomerLead[] = [];
          snapshot.forEach((docSnap) => {
            cloudLeads.push(docSnap.data() as CustomerLead);
          });

          const localLeads = getStoredData<CustomerLead[]>(STORAGE_KEYS.LEADS, []);
          const leadMap = new Map<string, CustomerLead>();
          localLeads.forEach((l) => leadMap.set(l.id, l));
          cloudLeads.forEach((l) => leadMap.set(l.id, l));

          const merged = Array.from(leadMap.values()).sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setStoredData(STORAGE_KEYS.LEADS, merged);
        }
      }, () => {});
    } catch (e) {}
  }
};

const stripTitle = (name: string): string => {
  return name.replace(/^(Mr|Mrs|Ms|Dr|Master|Miss)\.?\s+/i, '').trim().toLowerCase();
};

export const cloudStore = {
  // --- BOOKINGS ---
  getBookings: (): CustomerBooking[] => {
    initCloudListeners();
    return getStoredData<CustomerBooking[]>(STORAGE_KEYS.BOOKINGS, DEFAULT_BOOKINGS);
  },

  saveBooking: (booking: Omit<CustomerBooking, 'id' | 'referenceNo' | 'createdAt'>): CustomerBooking => {
    const existing = cloudStore.getBookings();

    const total = booking.totalAmount || 0;
    const computedBase = booking.basePrice || Math.round(total / 1.05);
    const computedGst = booking.gstAmount || Math.round(total - computedBase);
    const hotelCat = booking.hotelCategory || '4-Star Premium Deluxe Hotel & Resort';
    const payMethod = booking.paymentMethod || 'Online PG (Cashfree / UPI)';
    const txnId = booking.transactionId || `CF_TXN_${Date.now()}`;

    const refNum = `TC-BK-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking: CustomerBooking = {
      ...booking,
      id: `bk-${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      referenceNo: refNum,
      createdAt: new Date().toISOString(),
      hotelCategory: hotelCat,
      basePrice: computedBase,
      gstAmount: computedGst,
      paymentMethod: payMethod,
      transactionId: txnId,
    };

    const updated = [newBooking, ...existing];
    setStoredData(STORAGE_KEYS.BOOKINGS, updated);
    syncBookingToCloud(newBooking);

    // Also auto-sync as CRM Lead so admin sees it in both /admin/bookings and /admin/leads
    try {
      const existingLeads = cloudStore.getLeads();
      const hasRecentLead = existingLeads.some(
        (l) => l.email?.toLowerCase() === booking.customerEmail?.toLowerCase() || l.phone === booking.customerPhone
      );
      if (!hasRecentLead) {
        cloudStore.saveLead({
          name: booking.customerName,
          phone: booking.customerPhone,
          email: booking.customerEmail,
          destination: `${booking.packageName} (${booking.destination})`,
          budget: `₹${booking.totalAmount.toLocaleString('en-IN')}`,
          travelersCount: booking.travelersCount,
          status: 'Converted',
          source: 'Confirmed Online Booking',
        });
      }
    } catch (e) {}

    return newBooking;
  },

  updateBookingStatus: (id: string, status: CustomerBooking['status']): void => {
    const existing = cloudStore.getBookings();
    const updated = existing.map((b) => (b.id === id ? { ...b, status } : b));
    setStoredData(STORAGE_KEYS.BOOKINGS, updated);
    const matched = updated.find((b) => b.id === id);
    if (matched) syncBookingToCloud(matched);

    try {
      fetch('/api/bookings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      }).catch(() => {});
    } catch (e) {}
  },

  // --- LEADS / ENQUIRIES ---
  getLeads: (): CustomerLead[] => {
    initCloudListeners();
    return getStoredData<CustomerLead[]>(STORAGE_KEYS.LEADS, DEFAULT_LEADS);
  },

  saveLead: (lead: Omit<CustomerLead, 'id' | 'createdAt'>): CustomerLead => {
    const existing = cloudStore.getLeads();
    const newLead: CustomerLead = {
      ...lead,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    const updated = [newLead, ...existing];
    setStoredData(STORAGE_KEYS.LEADS, updated);
    syncLeadToCloud(newLead);
    return newLead;
  },

  updateLeadStatus: (id: string, status: CustomerLead['status']): void => {
    const existing = cloudStore.getLeads();
    const updated = existing.map((l) => (l.id === id ? { ...l, status } : l));
    setStoredData(STORAGE_KEYS.LEADS, updated);
    const matched = updated.find((l) => l.id === id);
    if (matched) syncLeadToCloud(matched);

    try {
      fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      }).catch(() => {});
    } catch (e) {}
  },

  // --- USER PROFILES & PERSISTENT SESSION ---
  getUserProfile: (uid: string): UserProfile | null => {
    const profiles = getStoredData<Record<string, UserProfile>>(STORAGE_KEYS.PROFILES, {});
    return profiles[uid] || null;
  },

  saveUserProfile: (profile: UserProfile): void => {
    const profiles = getStoredData<Record<string, UserProfile>>(STORAGE_KEYS.PROFILES, {});
    profiles[profile.uid] = { ...profile, updatedAt: new Date().toISOString() };
    setStoredData(STORAGE_KEYS.PROFILES, profiles);
    syncProfileToCloud(profile);
  },

  getPersistedUser: (): UserProfile | null => {
    return getStoredData<UserProfile | null>(STORAGE_KEYS.CURRENT_USER, null);
  },

  findUserProfileByPhoneOrEmail: (input: string): UserProfile | null => {
    if (!input || !input.trim()) return null;
    const cleanInput = input.trim().toLowerCase();
    const normalizeDigits = (str: string) => str.replace(/\D/g, '').slice(-10);
    const isEmail = cleanInput.includes('@');
    const inputDigits = normalizeDigits(cleanInput);

    const profiles = getStoredData<Record<string, UserProfile>>(STORAGE_KEYS.PROFILES, {});
    for (const uid in profiles) {
      const p = profiles[uid];
      if (isEmail && p.email && p.email.toLowerCase() === cleanInput) {
        return p;
      }
      if (!isEmail && p.phone) {
        const pDigits = normalizeDigits(p.phone);
        if (inputDigits && pDigits && pDigits === inputDigits) {
          return p;
        }
      }
    }

    const bookings = cloudStore.getBookings();
    const booking = bookings.find((b) => {
      const bEmail = (b.customerEmail || '').toLowerCase();
      const bDigits = normalizeDigits(b.customerPhone || '');
      return (isEmail && bEmail === cleanInput) || (!isEmail && inputDigits && bDigits === inputDigits);
    });

    if (booking) {
      return {
        uid: `usr_${(booking.customerEmail || cleanInput).replace(/[^a-zA-Z0-9]/g, '_')}`,
        name: booking.customerName || 'Valued Traveler',
        email: booking.customerEmail || '',
        phone: booking.customerPhone || cleanInput,
        updatedAt: booking.createdAt,
      };
    }

    return null;
  },

  setPersistedUser: (user: UserProfile | null): void => {
    setStoredData(STORAGE_KEYS.CURRENT_USER, user);
  },

  // --- CO-TRAVELLERS PERSISTENT STORAGE ---
  getCoTravellers: (uid?: string): CoTraveller[] => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEYS.CO_TRAVELLERS);
      } catch (e) {}
    }
    if (!uid) return [];
    const rawList = getStoredData<CoTraveller[]>(`tc_cotravellers_${uid}`, []);

    const cleanList: CoTraveller[] = [];
    const seenBaseNames = new Set<string>();

    rawList.forEach((item) => {
      if (!item.name || !item.name.trim()) return;
      const baseName = stripTitle(item.name);
      if (!baseName) return;

      if (!seenBaseNames.has(baseName)) {
        seenBaseNames.add(baseName);
        cleanList.push(item);
      } else {
        const existingIdx = cleanList.findIndex((c) => stripTitle(c.name) === baseName);
        if (existingIdx !== -1 && item.name.length > cleanList[existingIdx].name.length) {
          cleanList[existingIdx] = item;
        }
      }
    });

    return cleanList;
  },

  saveCoTravellers: (list: CoTraveller[], uid?: string): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEYS.CO_TRAVELLERS);
      } catch (e) {}
    }
    if (!uid) return;
    setStoredData(`tc_cotravellers_${uid}`, list);
  },

  syncPassengersToCoTravellers: (
    passengersList: Array<{ fullName: string; age?: string | number; gender?: string; relation?: string }>,
    uid?: string
  ): void => {
    if (!uid) return;
    const existing = cloudStore.getCoTravellers(uid);
    const updated = [...existing];

    passengersList.forEach((p) => {
      if (!p.fullName || !p.fullName.trim()) return;
      const rawName = p.fullName.trim();
      const baseName = stripTitle(rawName);

      const existingIdx = updated.findIndex((item) => stripTitle(item.name) === baseName);
      if (existingIdx !== -1) {
        if (rawName.length > updated[existingIdx].name.length) {
          updated[existingIdx].name = rawName;
        }
        if (p.age) {
          updated[existingIdx].age = typeof p.age === 'number' ? p.age : parseInt(String(p.age), 10) || 25;
        }
        if (p.gender) {
          updated[existingIdx].gender = p.gender;
        }
      } else {
        updated.push({
          id: `cot-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          name: rawName,
          age: typeof p.age === 'number' ? p.age : parseInt(String(p.age || '25'), 10) || 25,
          gender: p.gender || 'Male',
          relation: p.relation || 'Co-Traveller',
        });
      }
    });

    cloudStore.saveCoTravellers(updated, uid);
  },

  clearAllStoreData: (): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
        localStorage.removeItem(STORAGE_KEYS.LEADS);
        localStorage.removeItem(STORAGE_KEYS.PROFILES);
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        localStorage.removeItem(STORAGE_KEYS.CO_TRAVELLERS);
        window.dispatchEvent(new Event('storage'));
      } catch (e) {}
    }
  },
};

if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem(STORAGE_KEYS.CO_TRAVELLERS);
  } catch (e) {}
}
