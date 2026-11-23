import { HolidayPackage } from '@/data/packagesData';

// Check if a package is strictly a Premium / Luxury tier package (no 3-star allowed)
export function isPremiumPackage(
  pkgOrCategory?: { name?: string; slug?: string; hotelCategory?: string; theme?: string } | string
): boolean {
  if (!pkgOrCategory) return false;
  const str =
    typeof pkgOrCategory === 'string'
      ? pkgOrCategory
      : `${pkgOrCategory.name || ''} ${pkgOrCategory.slug || ''} ${pkgOrCategory.hotelCategory || ''} ${pkgOrCategory.theme || ''}`;
  const lower = str.toLowerCase();
  return (
    lower.includes('premium') ||
    lower.includes('luxury') ||
    lower.includes('5-star') ||
    lower.includes('5★') ||
    lower.includes('premium-hyderabad')
  );
}

// Resolve baseline hotel tier of a package ('standard' | 'deluxe' | 'luxury')
export function getPackageBaselineTier(
  hotelCategory?: string,
  pkgName?: string,
  pkgSlug?: string
): 'standard' | 'deluxe' | 'luxury' {
  const cat = (hotelCategory || '').toLowerCase();
  const name = (pkgName || '').toLowerCase();
  const slug = (pkgSlug || '').toLowerCase();

  if (
    cat.includes('5') ||
    cat.includes('luxury') ||
    cat.includes('5-star') ||
    cat.includes('5★') ||
    name.includes('luxury') ||
    slug.includes('premium-hyderabad')
  ) {
    return 'luxury';
  }
  if (
    cat.includes('4') ||
    cat.includes('deluxe') ||
    cat.includes('4-star') ||
    cat.includes('4★') ||
    name.includes('premium') ||
    slug.includes('premium')
  ) {
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
  const isHydOrPremium =
    (pkgSlug && (pkgSlug.includes('premium-hyderabad') || pkgSlug.includes('hyderabad'))) ||
    (pkgName && (pkgName.toLowerCase().includes('premium hyderabad') || pkgName.toLowerCase().includes('premium')));

  const tier = getPackageBaselineTier(hotelCategory, pkgName, pkgSlug);

  // If it's the Premium Hyderabad package or 5-Star Luxury
  if (isHydOrPremium || tier === 'luxury') {
    return {
      tier: 'luxury' as const,
      badgeLabel: '5★ Luxury',
      twinSharingLabel: '5★ Luxury Twin Sharing',
      optionsLabel: '4★ Deluxe & 5★ Luxury Available',
      badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
    };
  }

  if (tier === 'deluxe') {
    return {
      tier: 'deluxe' as const,
      badgeLabel: '4★ Deluxe',
      twinSharingLabel: '4★ Deluxe Twin Sharing',
      optionsLabel: 'Upgradable to 5★ Luxury',
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

