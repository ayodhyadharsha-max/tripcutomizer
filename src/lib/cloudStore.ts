import { db } from '@/lib/firebase';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';

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

// Initial Seed Data - Empty by default for fresh production/demo state
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
    // Crucial anti-flicker guard: Only update & emit events if data actually changed
    if (rawExisting === serializedNew) return;

    localStorage.setItem(key, serializedNew);
    // Trigger window events for instant cross-tab & same-tab realtime sync
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('cloudstore_update', { detail: { key, data } }));
  } catch (e) {
    console.error('Failed to write cloud storage key', key, e);
  }
};

// Async helper to sync booking to Cloud Server API & Firestore DB
const syncBookingToFirestore = async (booking: CustomerBooking) => {
  if (typeof window === 'undefined') return;

  // 1. Post to Server-Side API endpoint (works across all devices & Incognito mode)
  try {
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    }).catch((e) => console.warn('Server API booking POST note:', e));
  } catch (e) {}

  // 2. Also sync to Cloud Firestore DB
  if (db) {
    try {
      await setDoc(doc(db, 'bookings', booking.id), booking, { merge: true });
    } catch (e) {
      console.warn('Firestore booking sync note:', e);
    }
  }
};

// Async helper to sync lead to Cloud Server API & Firestore DB
const syncLeadToFirestore = async (lead: CustomerLead) => {
  if (typeof window === 'undefined') return;

  // 1. Post to Server-Side API endpoint (works across all devices & Incognito mode)
  try {
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    }).catch((e) => console.warn('Server API lead POST note:', e));
  } catch (e) {}

  // 2. Also sync to Cloud Firestore DB
  if (db) {
    try {
      await setDoc(doc(db, 'leads', lead.id), lead, { merge: true });
    } catch (e) {
      console.warn('Firestore lead sync note:', e);
    }
  }
};

// Async helper to sync user profile to Cloud Firestore DB
const syncProfileToFirestore = async (profile: UserProfile) => {
  if (typeof window === 'undefined' || !db) return;
  try {
    await setDoc(doc(db, 'profiles', profile.uid), profile, { merge: true });
  } catch (e) {
    console.warn('Firestore profile sync note:', e);
  }
};

// Fetch latest global bookings & leads from Next.js Server API
const syncFromServerApi = async () => {
  if (typeof window === 'undefined') return;
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

// Initialize Realtime Cloud Firestore listeners & Server API Polling
let isFirestoreListenerInitialized = false;

const initCloudFirestoreListeners = () => {
  if (typeof window === 'undefined' || isFirestoreListenerInitialized) return;
  isFirestoreListenerInitialized = true;

  // Immediate sync from Server API
  syncFromServerApi();

  // Periodic background sync from Server API every 4s
  setInterval(() => {
    syncFromServerApi();
  }, 4000);

  if (db) {
    try {
      // Listen to live Bookings collection in Cloud Firestore
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
      }, (err) => console.warn('Firestore bookings snapshot info:', err));

      // Listen to live Leads collection in Cloud Firestore
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
      }, (err) => console.warn('Firestore leads snapshot info:', err));
    } catch (e) {
      console.warn('Firestore listener init info:', e);
    }
  }
};

// Helper to strip common honorific titles for smart deduplication
const stripTitle = (name: string): string => {
  return name.replace(/^(Mr|Mrs|Ms|Dr|Master|Miss)\.?\s+/i, '').trim().toLowerCase();
};

export const cloudStore = {
  // --- BOOKINGS ---
  getBookings: (): CustomerBooking[] => {
    initCloudFirestoreListeners();
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
    syncBookingToFirestore(newBooking);

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
    } catch (e) {
      console.warn('Lead sync skipped:', e);
    }

    return newBooking;
  },

  updateBookingStatus: (id: string, status: CustomerBooking['status']): void => {
    const existing = cloudStore.getBookings();
    const updated = existing.map((b) => (b.id === id ? { ...b, status } : b));
    setStoredData(STORAGE_KEYS.BOOKINGS, updated);
    const matched = updated.find((b) => b.id === id);
    if (matched) syncBookingToFirestore(matched);
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
    initCloudFirestoreListeners();
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
    syncLeadToFirestore(newLead);
    return newLead;
  },

  updateLeadStatus: (id: string, status: CustomerLead['status']): void => {
    const existing = cloudStore.getLeads();
    const updated = existing.map((l) => (l.id === id ? { ...l, status } : l));
    setStoredData(STORAGE_KEYS.LEADS, updated);
    const matched = updated.find((l) => l.id === id);
    if (matched) syncLeadToFirestore(matched);
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
    syncProfileToFirestore(profile);
  },

  getPersistedUser: (): UserProfile | null => {
    return getStoredData<UserProfile | null>(STORAGE_KEYS.CURRENT_USER, null);
  },

  setPersistedUser: (user: UserProfile | null): void => {
    setStoredData(STORAGE_KEYS.CURRENT_USER, user);
  },

  // --- CO-TRAVELLERS PERSISTENT STORAGE (STRICT USER ISOLATION & DEDUPLICATION) ---
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

// Purge legacy global key on module load in client environment
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem(STORAGE_KEYS.CO_TRAVELLERS);
  } catch (e) {}
}
