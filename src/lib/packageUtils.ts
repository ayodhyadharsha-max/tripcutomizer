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
      standard: 'Araku Valley Nature Resort',
      deluxe: 'Araku Valley Luxury Hill Resort',
    },
  },
  'andhra-pradesh-exciting-hyderabad-with-ramoji-film-city-3n4d-4d3n-mmt-3': {
    baselineTier: 'standard',
    allowedTiers: ['standard', 'deluxe', 'luxury'],
    cardBadgeLabel: '3★ Standard',
    cardTwinSharingLabel: '3★ Standard Twin Sharing',
    cardOptionsLabel: '4★ Deluxe & 5★ Luxury Available',
    cardBadgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
    tierHotels: {
      standard: 'The Cent Hotel Hyderabad',
      deluxe: 'Grand Continent Premier Banjara Hills',
      luxury: 'Courtyard by Marriott Hyderabad',
    },
  },
  'andhra-pradesh-hyderabad-cityscape-escape-4n5d-5d4n-mmt-1': {
    baselineTier: 'standard',
    allowedTiers: ['standard', 'deluxe', 'luxury'],
    cardBadgeLabel: '3★ Standard',
    cardTwinSharingLabel: '3★ Standard Twin Sharing',
    cardOptionsLabel: '4★ Deluxe & 5★ Luxury Available',
    cardBadgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
    tierHotels: {
      standard: 'The Cent Hotel Hyderabad',
      deluxe: 'Grand Continent Premier Banjara Hills',
      luxury: 'Courtyard by Marriott Hyderabad',
    },
  },
  'andhra-pradesh-hyderabad-getaway-weekend-special-2n3d-3d2n-mmt-4': {
    baselineTier: 'standard',
    allowedTiers: ['standard', 'deluxe', 'luxury'],
    cardBadgeLabel: '3★ Standard',
    cardTwinSharingLabel: '3★ Standard Twin Sharing',
    cardOptionsLabel: '4★ Deluxe & 5★ Luxury Available',
    cardBadgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
    tierHotels: {
      standard: 'The Cent Hotel Hyderabad',
      deluxe: 'Grand Continent Premier Banjara Hills',
      luxury: 'Courtyard by Marriott Hyderabad',
    },
  },
  'andhra-pradesh-hyderabad-with-srisailam-temple-visit-3n4d-4d3n-mmt-1': {
    baselineTier: 'standard',
    allowedTiers: ['standard', 'deluxe', 'luxury'],
    cardBadgeLabel: '3★ Standard',
    cardTwinSharingLabel: '3★ Standard Twin Sharing',
    cardOptionsLabel: '4★ Deluxe & 5★ Luxury Available',
    cardBadgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
    tierHotels: {
      standard: 'The Cent Hotel Hyderabad',
      deluxe: 'Grand Continent Premier Banjara Hills',
      luxury: 'Courtyard by Marriott Hyderabad',
    },
  },
  'andhra-pradesh-premium-hyderabad-getaway-3n4d-4d3n-mmt-5': {
    baselineTier: 'luxury',
    allowedTiers: ['standard', 'deluxe', 'luxury'],
    cardBadgeLabel: '5★ Luxury',
    cardTwinSharingLabel: '5★ Luxury Twin Sharing',
    cardOptionsLabel: '3★ Standard & 4★ Deluxe Available',
    cardBadgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
    tierHotels: {
      standard: 'The Cent Hotel Hyderabad',
      deluxe: 'Grand Continent Premier Banjara Hills',
      luxury: 'Courtyard by Marriott Hyderabad',
    },
  },
  'andhra-pradesh-sacred-tirupati-mahabalipuram-chennai-trip-4n5d-5d4n-mmt-2': {
    baselineTier: 'standard',
    allowedTiers: ['standard', 'deluxe', 'luxury'],
    cardBadgeLabel: '3★ Standard',
    cardTwinSharingLabel: '3★ Standard Twin Sharing',
    cardOptionsLabel: '4★ Deluxe & 5★ Luxury Available on Request',
    cardBadgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
    tierPrices: {
      standard: 25000,
    },
    tierHotels: {
      standard: 'Kansone Hotel And Banquets (Chennai) / Hotel MountView Comforts (Tirupati) / Mamalla Beach Resort (Mahabalipuram)',
      deluxe: 'The Residency Towers (Chennai) / Fortune Select Grand Ridge (Tirupati) / Grande Bay Resort (Mahabalipuram)',
      luxury: 'The Leela Palace (Chennai) / Minerva Grand (Tirupati) / Radisson Blu Resort Temple Bay (Mahabalipuram)',
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
  if (typeof pkgOrSlug === 'object' && pkgOrSlug.user_edited) return undefined;
  const slug = typeof pkgOrSlug === 'string' ? pkgOrSlug : (pkgOrSlug.slug || pkgOrSlug.id || '');
  const cleanSlug = slug.toLowerCase().trim();
  return CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]?.tierPrices;
}

export function getPackageTierHotels(
  pkgOrSlug?: any
): { standard?: string; deluxe?: string; luxury?: string } | undefined {
  if (!pkgOrSlug) return undefined;
  if (typeof pkgOrSlug === 'object' && pkgOrSlug.user_edited) return undefined;
  const slug = typeof pkgOrSlug === 'string' ? pkgOrSlug : (pkgOrSlug.slug || pkgOrSlug.id || '');
  const cleanSlug = slug.toLowerCase().trim();
  return CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug]?.tierHotels;
}

export function getPackageBaselineTier(
  hotelCategory?: string,
  pkgName?: string,
  pkgSlug?: string
): 'standard' | 'deluxe' | 'luxury' {
  const cat = (hotelCategory || '').toLowerCase();
  const name = (pkgName || '').toLowerCase();

  // 1. Direct hotelCategory check
  if (cat.includes('luxury') || cat.includes('5 star') || cat.includes('5★') || cat.includes('5-star')) {
    return 'luxury';
  }
  if (cat.includes('deluxe') || cat.includes('4 star') || cat.includes('4★') || cat.includes('4-star')) {
    return 'deluxe';
  }
  if (cat.includes('standard') || cat.includes('3 star') || cat.includes('3★') || cat.includes('3-star')) {
    return 'standard';
  }

  // 2. Package name check
  if (name.includes('luxury') || name.includes('5 star') || name.includes('5★')) {
    return 'luxury';
  }
  if (name.includes('deluxe') || name.includes('4 star') || name.includes('4★')) {
    return 'deluxe';
  }

  // 3. Fallback to slug override
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
// Derives labels dynamically from package baseline tier
export function getPackageHotelBadgeInfo(
  hotelCategory?: string,
  pkgName?: string,
  pkgSlug?: string
) {
  const tier = getPackageBaselineTier(hotelCategory, pkgName, pkgSlug);
  const cleanSlug = (pkgSlug || '').toLowerCase().trim();
  const override = cleanSlug ? CUSTOM_PACKAGE_TIER_OVERRIDES[cleanSlug] : undefined;

  if (override && override.cardBadgeLabel) {
    return {
      tier,
      badgeLabel: override.cardBadgeLabel,
      twinSharingLabel: override.cardTwinSharingLabel || (tier === 'luxury' ? '5★ Luxury Twin Sharing' : tier === 'deluxe' ? '4★ Deluxe Twin Sharing' : '3★ Standard Twin Sharing'),
      optionsLabel: override.cardOptionsLabel || 'Upgradable to 4★ / 5★',
      badgeClass: override.cardBadgeClass || 'bg-amber-50 text-amber-900 border-amber-200/60',
    };
  }

  if (tier === 'luxury') {
    return {
      tier: 'luxury' as const,
      badgeLabel: '5★ Luxury',
      twinSharingLabel: '5★ Luxury Twin Sharing',
      optionsLabel: '3★ Standard & 4★ Deluxe Available',
      badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
    };
  }

  if (tier === 'deluxe') {
    return {
      tier: 'deluxe' as const,
      badgeLabel: '4★ Deluxe',
      twinSharingLabel: '4★ Deluxe Twin Sharing',
      optionsLabel: '3★ Standard & 5★ Luxury Available',
      badgeClass: 'bg-blue-50 text-blue-900 border-blue-200/60',
    };
  }

  // Default for standard
  return {
    tier: 'standard' as const,
    badgeLabel: '3★ Standard',
    twinSharingLabel: '3★ Standard Twin Sharing',
    optionsLabel: 'Upgradable to 4★ / 5★',
    badgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
  };
}



