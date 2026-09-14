'use client';

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

// Initial Seed Data for Demo & Admin Testing
const DEFAULT_BOOKINGS: CustomerBooking[] = [
  {
    id: 'bk-101',
    referenceNo: 'TC-BK-89421',
    customerName: 'Aarav Sharma',
    customerPhone: '+91 98765 43210',
    customerEmail: 'aarav.sharma@example.com',
    packageName: 'Char Dham Yatra Divine Tour',
    destination: 'Uttarakhand',
    travelDates: '15 Oct 2026 - 24 Oct 2026',
    travelersCount: 4,
    totalAmount: 202000,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    passengersList: [
      { name: 'Aarav Sharma', age: 34, gender: 'Male', type: 'Adult (Lead)' },
      { name: 'Priya Sharma', age: 31, gender: 'Female', type: 'Adult' },
      { name: 'Aarav Sharma Jr.', age: 6, gender: 'Male', type: 'Child (5-9 yrs)' },
      { name: 'Ananya Sharma', age: 4, gender: 'Female', type: 'Child (Below 5 yrs)' },
    ],
  },
];

const DEFAULT_LEADS: CustomerLead[] = [
  {
    id: 'lead-201',
    name: 'Rohan Gupta',
    phone: '+91 99887 76655',
    email: 'rohan.g@example.com',
    destination: 'Switzerland & Paris',
    budget: '₹ 3,50,000',
    travelDates: 'December 2026',
    travelersCount: 2,
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    source: 'Custom Trip Wizard',
  },
];

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
    localStorage.setItem(key, JSON.stringify(data));
    // Trigger window event for cross-tab realtime sync
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Failed to write cloud storage key', key, e);
  }
};

export const cloudStore = {
  // --- BOOKINGS ---
  getBookings: (): CustomerBooking[] => {
    return getStoredData<CustomerBooking[]>(STORAGE_KEYS.BOOKINGS, DEFAULT_BOOKINGS);
  },

  saveBooking: (booking: Omit<CustomerBooking, 'id' | 'referenceNo' | 'createdAt'>): CustomerBooking => {
    const existing = cloudStore.getBookings();

    // Deduplicate: If an entry for the same package & email was added recently as Pending, upgrade it to Confirmed!
    const now = Date.now();
    const recentPendingIndex = existing.findIndex((b) => {
      const ageMs = now - new Date(b.createdAt).getTime();
      return (
        b.customerEmail.toLowerCase() === booking.customerEmail.toLowerCase() &&
        b.packageName === booking.packageName &&
        (b.status === 'Pending' || ageMs < 120000)
      );
    });

    if (recentPendingIndex !== -1) {
      const matched = existing[recentPendingIndex];
      const updatedBooking: CustomerBooking = {
        ...matched,
        ...booking,
        status: booking.status || 'Confirmed',
        paymentStatus: booking.paymentStatus || 'Paid',
      };
      existing[recentPendingIndex] = updatedBooking;
      setStoredData(STORAGE_KEYS.BOOKINGS, existing);
      return updatedBooking;
    }

    const refNum = `TC-BK-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking: CustomerBooking = {
      ...booking,
      id: `bk-${Date.now()}`,
      referenceNo: refNum,
      createdAt: new Date().toISOString(),
    };
    const updated = [newBooking, ...existing];
    setStoredData(STORAGE_KEYS.BOOKINGS, updated);
    return newBooking;
  },

  updateBookingStatus: (id: string, status: CustomerBooking['status']): void => {
    const existing = cloudStore.getBookings();
    const updated = existing.map((b) => (b.id === id ? { ...b, status } : b));
    setStoredData(STORAGE_KEYS.BOOKINGS, updated);
  },

  // --- LEADS / ENQUIRIES ---
  getLeads: (): CustomerLead[] => {
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
    return newLead;
  },

  updateLeadStatus: (id: string, status: CustomerLead['status']): void => {
    const existing = cloudStore.getLeads();
    const updated = existing.map((l) => (l.id === id ? { ...l, status } : l));
    setStoredData(STORAGE_KEYS.LEADS, updated);
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
  },

  getPersistedUser: (): UserProfile | null => {
    return getStoredData<UserProfile | null>(STORAGE_KEYS.CURRENT_USER, null);
  },

  setPersistedUser: (user: UserProfile | null): void => {
    setStoredData(STORAGE_KEYS.CURRENT_USER, user);
  },

  // --- CO-TRAVELLERS PERSISTENT STORAGE (STRICT USER ISOLATION) ---
  getCoTravellers: (uid?: string): CoTraveller[] => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEYS.CO_TRAVELLERS);
      } catch (e) {}
    }
    if (!uid) return [];
    return getStoredData<CoTraveller[]>(`tc_cotravellers_${uid}`, []);
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
      const cleanName = p.fullName.trim();
      const exists = updated.some((item) => item.name.toLowerCase() === cleanName.toLowerCase());
      if (!exists) {
        updated.push({
          id: `cot-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          name: cleanName,
          age: typeof p.age === 'number' ? p.age : parseInt(p.age || '25', 10) || 25,
          gender: p.gender || 'Male',
          relation: p.relation || 'Co-Traveller',
        });
      }
    });

    cloudStore.saveCoTravellers(updated, uid);
  },
};

// Purge legacy global key on module load in client environment
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem(STORAGE_KEYS.CO_TRAVELLERS);
  } catch (e) {}
}
