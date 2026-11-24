import { HolidayPackage } from '@/data/packagesData';

export interface PackageTierConfig {
  baselineTier: 'standard' | 'deluxe' | 'luxury';
  allowedTiers: ('standard' | 'deluxe' | 'luxury')[];
  cardBadgeLabel: string;
  cardTwinSharingLabel: string;
  cardOptionsLabel: string;
  cardBadgeClass: string;
  tierPrices?: {
    standard?: number;
    deluxe?: number;
    luxury?: number;
  };
  tierHotels?: {
    standard?: string;
    deluxe?: string;
    luxury?: string;
  };
}

// User-specified overrides for specific packages one by one
export const CUSTOM_PACKAGE_TIER_OVERRIDES: Record<string, Partial<PackageTierConfig>> = {
  'andhra-pradesh-araku-valley-bliss-1n2d-2d1n-mmt-2': {
    baselineTier: 'standard',
    allowedTiers: ['standard', 'deluxe'],
    cardBadgeLabel: '3★ Standard',
    cardTwinSharingLabel: '3★ Standard Twin Sharing',
    cardOptionsLabel: '4★ Deluxe Upgrade Available',
    cardBadgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
    tierPrices: {
      standard: 7999,
      deluxe: 10999,
    },
    tierHotels: {
      standard: 'Vana Resort Araku (Standard Room)',
      deluxe: 'Vana Resort Araku (Deluxe Room)',
    },
  },
};

export function getPackageAllowedTiers(
  pkgOrSlug?: any
): ('standard' | 'deluxe' | 'luxury')[] {
  if (!pkgOrSlug) return ['standard', 'deluxe', 'luxury'];
  const slug = typeof pkgOrSlug === 'string' ? pkgOrSlug : (pkgOrSlug.slug || pkgOrSlug.id || '');
  const cleanSlug = slug.toLowerCase().trim();
  if (CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]?.allowedTiers) {
    return CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]!.allowedTiers!;
  }
  return ['standard', 'deluxe', 'luxury'];
}

export function getPackageTierPrices(
  pkgOrSlug?: any
): { standard?: number; deluxe?: number; luxury?: number } | undefined {
  if (!pkgOrSlug) return undefined;
  const slug = typeof pkgOrSlug === 'string' ? pkgOrSlug : (pkgOrSlug.slug || pkgOrSlug.id || '');
  const cleanSlug = slug.toLowerCase().trim();
  return CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]?.tierPrices;
}

export function getPackageTierHotels(
  pkgOrSlug?: any
): { standard?: string; deluxe?: string; luxury?: string } | undefined {
  if (!pkgOrSlug) return undefined;
  const slug = typeof pkgOrSlug === 'string' ? pkgOrSlug : (pkgOrSlug.slug || pkgOrSlug.id || '');
  const cleanSlug = slug.toLowerCase().trim();
  return CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]?.tierHotels;
}

export function getPackageBaselineTier(
  hotelCategory?: string,
  pkgName?: string,
  pkgSlug?: string
): 'standard' | 'deluxe' | 'luxury' {
  const cleanSlug = (pkgSlug || '').toLowerCase().trim();
  if (cleanSlug && CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]?.baselineTier) {
    return CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]!.baselineTier!;
  }
  return 'standard';
}

export function isPremiumPackage(
  pkgOrCategory?: { id?: string; name?: string; slug?: string; hotelCategory?: string; theme?: string } | string
): boolean {
  if (!pkgOrCategory) return false;
  const slug = typeof pkgOrCategory === 'string' ? pkgOrCategory : (pkgOrCategory.slug || pkgOrCategory.id || '');
  const cleanSlug = slug.toLowerCase().trim();
  if (CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]) {
    const allowed = CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]?.allowedTiers;
    return Boolean(allowed && !allowed.includes('standard'));
  }
  return false;
}

// Get dynamic UI labels and badge styling for listing cards
// Defaults all cards across the catalog to 3★ Standard with upgrade options
export function getPackageHotelBadgeInfo(
  hotelCategory?: string,
  pkgName?: string,
  pkgSlug?: string
) {
  const cleanSlug = (pkgSlug || '').toLowerCase().trim();
  const override = cleanSlug ? CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug] : undefined;

  if (override) {
    return {
      tier: override.baselineTier || 'standard',
      badgeLabel: override.cardBadgeLabel || '3★ Standard',
      twinSharingLabel: override.cardTwinSharingLabel || '3★ Standard Twin Sharing',
      optionsLabel: override.cardOptionsLabel || 'Upgradable to 4★ / 5★',
      badgeClass: override.cardBadgeClass || 'bg-amber-50 text-amber-900 border-amber-200/60',
    };
  }

  // Default for all cards across catalog: 3★ Standard baseline
  return {
    tier: 'standard' as const,
    badgeLabel: '3★ Standard',
    twinSharingLabel: '3★ Standard Twin Sharing',
    optionsLabel: 'Upgradable to 4★ / 5★',
    badgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
  };
}



