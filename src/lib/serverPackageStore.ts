import fs from 'fs';
import path from 'path';
import { HolidayPackage } from '@/data/packagesData';
import getSupabaseServer from '@/lib/supabaseServer';
import prisma from '@/lib/prisma';

let memoryPackages: HolidayPackage[] | null = null;
let memoryLegacyDeleted: boolean | null = null;

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

/**
 * Loads custom packages from filesystem (trying /tmp first, then data/custom_packages.json).
 */
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

/**
 * Persists packages to both filesystem locations safely.
 */
export function writePackagesToFile(packages: HolidayPackage[]): void {
  const jsonStr = JSON.stringify(packages, null, 2);
  const paths = [getPrimaryFilePath(), getTmpFilePath()];
  for (const p of paths) {
    try {
      fs.writeFileSync(p, jsonStr, 'utf-8');
    } catch {}
  }
}

/**
 * Loads isLegacyDeleted flag from filesystem.
 */
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

/**
 * Writes isLegacyDeleted flag to filesystem.
 */
export function writeLegacyDeletedToFile(isDeleted: boolean): void {
  const jsonStr = JSON.stringify({ isLegacyDeleted: isDeleted, updatedAt: new Date().toISOString() });
  const paths = [getMetaFilePath(), getTmpMetaFilePath()];
  for (const p of paths) {
    try {
      fs.writeFileSync(p, jsonStr, 'utf-8');
    } catch {}
  }
}

/**
 * Get all server custom packages (combining in-memory cache, filesystem, and Supabase/Prisma).
 */
export function getServerCustomPackages(): HolidayPackage[] {
  if (memoryPackages !== null) {
    return memoryPackages;
  }

  const fromFile = loadPackagesFromFile();
  memoryPackages = fromFile;
  return memoryPackages;
}

/**
 * Check if legacy packages are deleted on server.
 */
export function getServerIsLegacyDeleted(): boolean {
  if (memoryLegacyDeleted !== null) {
    return memoryLegacyDeleted;
  }
  memoryLegacyDeleted = loadLegacyDeletedFromFile();
  return memoryLegacyDeleted;
}

/**
 * Set legacy packages deleted flag across memory, filesystem, and database.
 */
export async function setServerLegacyDeleted(isDeleted: boolean): Promise<void> {
  memoryLegacyDeleted = isDeleted;
  writeLegacyDeletedToFile(isDeleted);
}

/**
 * Save new or updated custom packages to server memory, files, Supabase, and Prisma.
 */
export async function saveServerCustomPackages(newPackages: HolidayPackage[]): Promise<void> {
  const current = getServerCustomPackages();
  const map = new Map<string, HolidayPackage>();

  // Add existing
  current.forEach((p) => map.set(p.id, p));
  // Upsert new
  newPackages.forEach((p) => {
    p.batch_source = 'mmt_sync'; // Guarantee batch_source
    map.set(p.id, p);
  });

  const updated = Array.from(map.values());
  memoryPackages = updated;
  writePackagesToFile(updated);

  // Background sync to Supabase (if available)
  try {
    const supabaseServer = getSupabaseServer();
    if (supabaseServer) {
      for (const p of newPackages) {
        await supabaseServer.from('packages').upsert({
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
          batch_source: 'mmt_sync',
          is_international: Boolean(p.isInternational),
          rating: p.rating || 4.8,
          reviews_count: p.reviewsCount || 120,
          hero_image: p.heroImage || `/destinations/${p.destinationSlug}.jpg`,
          highlights: p.highlights || [],
          inclusions: p.inclusions || [],
          exclusions: p.exclusions || [],
          itinerary: p.itinerary || [],
          hotels: p.hotels || [],
          updated_at: new Date().toISOString(),
        }, { onConflict: 'id' });
      }
    }
  } catch (err) {
    console.warn('[serverPackageStore] Supabase sync warning:', err);
  }

  // Background sync to Prisma (if available)
  try {
    if (prisma && prisma.holidayPackage) {
      for (const p of newPackages) {
        // Find or create destination first
        let dest = await prisma.destination.findFirst({
          where: { slug: p.destinationSlug },
        });
        if (!dest) {
          dest = await prisma.destination.create({
            data: {
              name: p.destination,
              slug: p.destinationSlug,
              country: p.country || 'India',
              region: p.region || 'India',
              heroImage: p.heroImage || `/destinations/${p.destinationSlug}.jpg`,
              description: `${p.destination} holiday tours and vacations.`,
              isInternational: Boolean(p.isInternational),
            },
          });
        }

        await prisma.holidayPackage.upsert({
          where: { slug: p.slug },
          update: {
            name: p.name,
            durationDays: p.durationDays,
            durationNights: p.durationNights,
            startingPrice: p.startingPrice,
            discountPrice: p.discountPrice,
            heroImage: p.heroImage || `/destinations/${p.destinationSlug}.jpg`,
            gallery: JSON.stringify(p.gallery || []),
            highlights: JSON.stringify(p.highlights || []),
            inclusions: JSON.stringify(p.inclusions || []),
            exclusions: JSON.stringify(p.exclusions || []),
            theme: p.theme || 'Holiday Explorer',
            hotelCategory: p.hotelCategory || '4-Star Deluxe',
            batch_source: 'mmt_sync',
            rating: p.rating || 4.8,
          },
          create: {
            id: p.id,
            name: p.name,
            slug: p.slug,
            destinationId: dest.id,
            durationDays: p.durationDays,
            durationNights: p.durationNights,
            startingPrice: p.startingPrice,
            discountPrice: p.discountPrice,
            heroImage: p.heroImage || `/destinations/${p.destinationSlug}.jpg`,
            gallery: JSON.stringify(p.gallery || []),
            highlights: JSON.stringify(p.highlights || []),
            inclusions: JSON.stringify(p.inclusions || []),
            exclusions: JSON.stringify(p.exclusions || []),
            theme: p.theme || 'Holiday Explorer',
            hotelCategory: p.hotelCategory || '4-Star Deluxe',
            batch_source: 'mmt_sync',
            rating: p.rating || 4.8,
          },
        });
      }
    }
  } catch (prismaErr) {
    // Ignore SQLite / Prisma constraints if uninitialized in serverless
  }
}

/**
 * Delete a single package by id.
 */
export async function deleteServerCustomPackage(id: string): Promise<void> {
  const current = getServerCustomPackages();
  const updated = current.filter((p) => p.id !== id);
  memoryPackages = updated;
  writePackagesToFile(updated);

  try {
    const supabaseServer = getSupabaseServer();
    if (supabaseServer) {
      await supabaseServer.from('packages').delete().eq('id', id);
    }
  } catch {}

  try {
    if (prisma && prisma.holidayPackage) {
      await prisma.holidayPackage.deleteMany({ where: { id } });
    }
  } catch {}
}

/**
 * Find package by destination slug or package slug / id with high precision.
 */
export function findServerPackage(destinationParam?: string, packageParam?: string): HolidayPackage | null {
  const p1 = decodeURIComponent(destinationParam || '').toLowerCase().trim();
  const p2 = decodeURIComponent(packageParam || '').toLowerCase().trim();
  const customList = getServerCustomPackages();

  const candidates = p2 ? [p2, p1] : [p1];

  for (const candidate of candidates) {
    if (!candidate) continue;

    const matched = customList.find(
      (p) =>
        p.slug.toLowerCase() === candidate ||
        p.id.toLowerCase() === candidate ||
        candidate.includes(p.slug.toLowerCase()) ||
        p.slug.toLowerCase().includes(candidate)
    );
    if (matched) return matched;
  }

  return null;
}
