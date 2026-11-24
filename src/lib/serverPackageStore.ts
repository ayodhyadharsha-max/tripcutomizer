import fs from 'fs';
import path from 'path';
import { HolidayPackage } from '@/data/packagesData';
import { HYDERABAD_PREMIUM_PACKAGE, HYDERABAD_CITYSCAPE_PACKAGE, ARAKU_VALLEY_BLISS_PACKAGE } from '@/data/packageCatalog';
import getSupabaseServer, { withTimeout, markSupabaseOffline, isSupabaseOffline } from '@/lib/supabaseServer';

let memoryPackages: HolidayPackage[] | null = null;
let memoryLegacyDeleted: boolean | null = null;

export function mapSupabaseRowToPackage(row: any): HolidayPackage {
  const destinationSlug = row.destination_slug || row.destinationSlug || 'india';
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    destination: row.destination,
    destinationSlug: destinationSlug,
    state: row.state || row.destination,
    stateSlug: row.state_slug || destinationSlug,
    country: row.country || (row.is_international ? 'International' : 'India'),
    region: row.region || (row.is_international ? 'International' : 'India'),
    isInternational: Boolean(row.is_international ?? row.isInternational),
    durationDays: row.duration_days ?? row.durationDays ?? 5,
    durationNights: row.duration_nights ?? row.durationNights ?? 4,
    startingPrice: Number(row.starting_price ?? row.startingPrice ?? 19999),
    discountPrice: row.discount_price ? Number(row.discount_price) : undefined,
    rating: Number(row.rating || 4.8),
    reviewsCount: Number(row.reviews_count || 120),
    heroImage: row.hero_image || row.heroImage || `/destinations/${destinationSlug}.jpg`,
    gallery: Array.isArray(row.gallery)
      ? row.gallery
      : [row.hero_image || `/destinations/${destinationSlug}.jpg`],
    highlights: Array.isArray(row.highlights)
      ? row.highlights
      : typeof row.highlights === 'string'
      ? JSON.parse(row.highlights)
      : [],
    inclusions: Array.isArray(row.inclusions)
      ? row.inclusions
      : typeof row.inclusions === 'string'
      ? JSON.parse(row.inclusions)
      : [],
    exclusions: Array.isArray(row.exclusions)
      ? row.exclusions
      : typeof row.exclusions === 'string'
      ? JSON.parse(row.exclusions)
      : [],
    itinerary: Array.isArray(row.itinerary)
      ? row.itinerary
      : typeof row.itinerary === 'string'
      ? JSON.parse(row.itinerary)
      : [],
    hotels: Array.isArray(row.hotels)
      ? row.hotels
      : typeof row.hotels === 'string'
      ? JSON.parse(row.hotels)
      : [],
    faqs: Array.isArray(row.faqs)
      ? row.faqs
      : typeof row.faqs === 'string'
      ? JSON.parse(row.faqs)
      : [
          {
            question: `Can this ${row.destination || 'holiday'} package be customized?`,
            answer: `Yes, all hotel categories, cab transfers, dates, and sightseeing options are 100% customizable upon request.`,
          },
        ],
    theme: row.theme || 'Holiday Explorer',
    hotelCategory: row.hotel_category || row.hotelCategory || '4-Star Deluxe',
    mealPlan: row.meal_plan || row.mealPlan || 'Breakfast Included',
    flightsIncluded: Boolean(row.flights_included ?? row.flightsIncluded),
    transfersIncluded: row.transfers_included !== undefined ? Boolean(row.transfers_included) : true,
    departureCity: row.departure_city || 'Flexible Origin',
    batch_source: row.batch_source || 'mmt_sync',
  };
}

const getPrimaryFilePath = (): string => {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
    } catch {}
  }
  return path.join(dir, 'custom_packages.json');
};

const getTmpFilePath = (): string => {
  return path.join('/tmp', 'tc_custom_packages.json');
};

const getMetaFilePath = (): string => {
  const dir = path.join(process.cwd(), 'data');
  return path.join(dir, 'package_meta.json');
};

const getTmpMetaFilePath = (): string => {
  return path.join('/tmp', 'tc_package_meta.json');
};

export function loadPackagesFromFile(): HolidayPackage[] {
  const paths = [getTmpFilePath(), getPrimaryFilePath()];
  for (const p of paths) {
    try {
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf-8');
        if (content.trim()) {
          const parsed = JSON.parse(content);
          if (Array.isArray(parsed)) {
            return parsed;
          }
        }
      }
    } catch {}
  }
  return [];
}

export function writePackagesToFile(packages: HolidayPackage[]): void {
  const jsonStr = JSON.stringify(packages, null, 2);
  const paths = [getPrimaryFilePath(), getTmpFilePath()];
  for (const p of paths) {
    try {
      fs.writeFileSync(p, jsonStr, 'utf-8');
    } catch {}
  }
}

export function loadLegacyDeletedFromFile(): boolean {
  const paths = [getTmpMetaFilePath(), getMetaFilePath()];
  for (const p of paths) {
    try {
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf-8');
        if (content.trim()) {
          const parsed = JSON.parse(content);
          if (typeof parsed?.isLegacyDeleted === 'boolean') {
            return parsed.isLegacyDeleted;
          }
        }
      }
    } catch {}
  }
  return false;
}

export function writeLegacyDeletedToFile(isDeleted: boolean): void {
  const jsonStr = JSON.stringify({ isLegacyDeleted: isDeleted, updatedAt: new Date().toISOString() });
  const paths = [getMetaFilePath(), getTmpMetaFilePath()];
  for (const p of paths) {
    try {
      fs.writeFileSync(p, jsonStr, 'utf-8');
    } catch {}
  }
}

export function getServerCustomPackages(): HolidayPackage[] {
  if (memoryPackages !== null) {
    return memoryPackages;
  }
  const fromFile = loadPackagesFromFile();
  const map = new Map<string, HolidayPackage>();
  map.set(HYDERABAD_PREMIUM_PACKAGE.id, HYDERABAD_PREMIUM_PACKAGE);
  map.set(HYDERABAD_CITYSCAPE_PACKAGE.id, HYDERABAD_CITYSCAPE_PACKAGE);
  map.set(ARAKU_VALLEY_BLISS_PACKAGE.id, ARAKU_VALLEY_BLISS_PACKAGE);
  fromFile.forEach((p) => {
    // If it's the premium hyderabad package, ensure it uses the updated clean premium definition
    if (p.slug.includes('premium-hyderabad') || p.id.includes('premium-hyderabad')) {
      map.set(p.id, { ...HYDERABAD_PREMIUM_PACKAGE, ...p, hotelCategory: '5-Star Luxury' });
    } else if (p.slug.includes('hyderabad-cityscape-escape') || p.id.includes('hyderabad-cityscape-escape')) {
      map.set(p.id, { ...HYDERABAD_CITYSCAPE_PACKAGE, ...p, hotelCategory: '3-Star Standard' });
    } else if (p.slug.includes('araku-valley-bliss') || p.id.includes('araku-valley-bliss')) {
      map.set(p.id, { ...p, ...ARAKU_VALLEY_BLISS_PACKAGE });
    } else {
      map.set(p.id, p);
    }
  });
  memoryPackages = Array.from(map.values());
  return memoryPackages;
}

export function getServerIsLegacyDeleted(): boolean {
  if (memoryLegacyDeleted !== null) {
    return memoryLegacyDeleted;
  }
  memoryLegacyDeleted = loadLegacyDeletedFromFile();
  return memoryLegacyDeleted;
}

export async function setServerLegacyDeleted(isDeleted: boolean): Promise<void> {
  memoryLegacyDeleted = isDeleted;
  writeLegacyDeletedToFile(isDeleted);
}

export async function saveServerCustomPackages(newPackages: HolidayPackage[]): Promise<void> {
  const current = getServerCustomPackages();
  const map = new Map<string, HolidayPackage>();

  current.forEach((p) => map.set(p.id, p));
  newPackages.forEach((p) => {
    p.batch_source = 'mmt_sync';
    map.set(p.id, p);
  });

  const updated = Array.from(map.values());
  memoryPackages = updated;
  writePackagesToFile(updated);

  // Background sync to Supabase (only if circuit breaker not active)
  if (!isSupabaseOffline()) {
    try {
      const supabaseServer = getSupabaseServer();
      if (supabaseServer) {
        const rows = newPackages.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          destination: p.destination,
          destination_slug: p.destinationSlug,
          duration_days: p.durationDays,
          duration_nights: p.durationNights,
          starting_price: p.startingPrice,
          discount_price: p.discountPrice || null,
          theme: p.theme || 'Holiday Explorer',
          hotel_category: p.hotelCategory || '4-Star Deluxe',
          meal_plan: p.mealPlan || 'Breakfast Included',
          hero_image: p.heroImage || `/destinations/${p.destinationSlug}.jpg`,
          highlights: p.highlights || [],
          inclusions: p.inclusions || [],
          exclusions: p.exclusions || [],
          itinerary: p.itinerary || [],
          hotels: p.hotels || [],
          batch_source: 'mmt_sync',
          is_international: Boolean(p.isInternational),
          rating: p.rating || 4.8,
          reviews_count: p.reviewsCount || 120,
          updated_at: new Date().toISOString(),
        }));
        await withTimeout(
          supabaseServer.from('packages').upsert(rows, { onConflict: 'id' }),
          1500,
          'Supabase upsert timed out'
        );
      }
    } catch (err: any) {
      console.warn('[serverPackageStore] Supabase sync note:', err?.message || err);
      markSupabaseOffline(60000);
    }
  }
}

export async function deleteServerCustomPackage(id: string): Promise<void> {
  const current = getServerCustomPackages();
  const updated = current.filter((p) => p.id !== id);
  memoryPackages = updated;
  writePackagesToFile(updated);

  if (!isSupabaseOffline()) {
    try {
      const supabaseServer = getSupabaseServer();
      if (supabaseServer) {
        await withTimeout(
          supabaseServer.from('packages').delete().eq('id', id),
          1500,
          'Supabase delete timed out'
        );
      }
    } catch (err: any) {
      markSupabaseOffline(60000);
    }
  }
}

export function findServerPackage(destinationParam?: string, packageParam?: string): HolidayPackage | null {
  const p1 = decodeURIComponent(destinationParam || '').toLowerCase().trim();
  const p2 = decodeURIComponent(packageParam || '').toLowerCase().trim();
  const customList = getServerCustomPackages();

  // If specific package slug is requested, ONLY search for that package slug/id.
  // NEVER fall back to destination parameter p1!
  if (p2) {
    const stripped = p2.replace(/^pkg-/, '');
    const matched = customList.find(
      (p) =>
        p.slug.toLowerCase() === p2 ||
        p.id.toLowerCase() === p2 ||
        p.slug.toLowerCase().replace(/^pkg-/, '') === stripped ||
        p.id.toLowerCase().replace(/^pkg-/, '') === stripped
    );
    return matched || null;
  }

  // Only if NO specific package slug was requested, search by destination slug
  if (p1) {
    const matched = customList.find(
      (p) =>
        p.destinationSlug.toLowerCase() === p1 ||
        (p.stateSlug && p.stateSlug.toLowerCase() === p1)
    );
    return matched || null;
  }

  return null;
}
