'use client';

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

const STORAGE_KEYS = {
  BOOKINGS: 'tc_cloud_bookings_v1',
  LEADS: 'tc_cloud_leads_v1',
  PROFILES: 'tc_cloud_profiles_v1',
  CURRENT_USER: 'tc_cloud_current_user_v1',
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
  },
  {
    id: 'bk-102',
    referenceNo: 'TC-BK-76129',
    customerName: 'Priya Verma',
    customerPhone: '+91 98112 34567',
    customerEmail: 'priya.v@example.com',
    packageName: 'Bali Luxury Pool Villa Honeymoon',
    destination: 'Bali',
    travelDates: '01 Nov 2026 - 07 Nov 2026',
    travelersCount: 2,
    totalAmount: 119600,
    status: 'Pending',
    paymentStatus: 'Pending',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
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
};
