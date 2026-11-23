import { HolidayPackage } from '@/data/packagesData';

// Specific target package requested by user
export function isTargetHyderabadPackage(pkgOrSlug?: any): boolean {
  if (!pkgOrSlug) return false;
  const slug = typeof pkgOrSlug === 'string' ? pkgOrSlug : (pkgOrSlug.slug || pkgOrSlug.id || '');
  return slug.toLowerCase().includes('andhra-pradesh-premium-hyderabad-getaway');
}

// Check if a package is strictly a Premium / Luxury tier package (no 3-star allowed)
// Strictly scoped to the specified package
export function isPremiumPackage(
  pkgOrCategory?: { name?: string; slug?: string; hotelCategory?: string; theme?: string } | string
): boolean {
  if (!pkgOrCategory) return false;
  return isTargetHyderabadPackage(pkgOrCategory);
}

// Resolve baseline hotel tier of a package ('standard' | 'deluxe' | 'luxury')
export function getPackageBaselineTier(
  hotelCategory?: string,
  pkgName?: string,
  pkgSlug?: string
): 'standard' | 'deluxe' | 'luxury' {
  if (pkgSlug && isTargetHyderabadPackage(pkgSlug)) {
    return 'luxury';
  }
  const cat = (hotelCategory || '').toLowerCase();
  if (cat.includes('5') || cat.includes('luxury') || cat.includes('5-star') || cat.includes('5★')) {
    return 'luxury';
  }
  if (cat.includes('4') || cat.includes('deluxe') || cat.includes('4-star') || cat.includes('4★')) {
    return 'deluxe';
  }
  return 'standard';
}

// Get dynamic UI labels and badge styling for listing cards based on package hotel tier
export function getPackageHotelBadgeInfo(
  hotelCategory?: string,
  pkgName?: string,
  pkgSlug?: string
) {
  // ONLY for that specific Hyderabad package, show 5-star card badge
  if (pkgSlug && isTargetHyderabadPackage(pkgSlug)) {
    return {
      tier: 'luxury' as const,
      badgeLabel: '5★ Luxury',
      twinSharingLabel: '5★ Luxury Twin Sharing',
      optionsLabel: '4★ Deluxe & 5★ Luxury Available',
      badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
    };
  }

  const tier = getPackageBaselineTier(hotelCategory);

  if (tier === 'luxury') {
    return {
      tier: 'luxury' as const,
      badgeLabel: '5★ Luxury',
      twinSharingLabel: '5★ Luxury Twin Sharing',
      optionsLabel: 'Customizable • 3★ / 4★ Available',
      badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
    };
  }

  if (tier === 'deluxe') {
    return {
      tier: 'deluxe' as const,
      badgeLabel: '4★ Deluxe',
      twinSharingLabel: '4★ Deluxe Twin Sharing',
      optionsLabel: 'Customizable • 3★ / 5★ Available',
      badgeClass: 'bg-brand-50 text-brand-900 border-brand-200',
    };
  }

  return {
    tier: 'standard' as const,
    badgeLabel: '3★ Standard',
    twinSharingLabel: '3★ Standard Twin Sharing',
    optionsLabel: 'Upgradable to 4★ / 5★',
    badgeClass: 'bg-amber-50 text-amber-900 border-amber-200/60',
  };
}


