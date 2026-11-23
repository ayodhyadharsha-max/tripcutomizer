import { HolidayPackage } from '@/data/packagesData';

// Resolve baseline hotel tier of a package ('standard' | 'deluxe' | 'luxury')
export function getPackageBaselineTier(hotelCategory?: string): 'standard' | 'deluxe' | 'luxury' {
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
export function getPackageHotelBadgeInfo(hotelCategory?: string) {
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
