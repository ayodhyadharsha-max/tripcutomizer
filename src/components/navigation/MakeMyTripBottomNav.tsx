'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Search, Heart, Gift, Sparkles } from 'lucide-react';

export const MakeMyTripBottomNav: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1 flex items-center justify-around">
      {/* 1. Home Tab */}
      <Link
        href="/"
        className={`flex flex-col items-center justify-center py-1 px-3 text-[10px] font-bold transition-all ${
          isActive('/') ? 'text-amber-500' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Home className={`w-5 h-5 mb-0.5 ${isActive('/') ? 'text-amber-500 fill-amber-400/20' : 'text-slate-500'}`} />
        <span>Home</span>
      </Link>

      {/* 2. My Trips Tab */}
      <Link
        href="/account"
        className={`flex flex-col items-center justify-center py-1 px-3 text-[10px] font-bold transition-all ${
          isActive('/account') ? 'text-amber-500' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <ShoppingBag className={`w-5 h-5 mb-0.5 ${isActive('/account') ? 'text-amber-500 fill-amber-400/20' : 'text-slate-500'}`} />
        <span>My Trips</span>
      </Link>

      {/* 3. Center Elevated Floating Blue Sphere (MakeMyTrip Search Button) */}
      <Link
        href="/customize-trip"
        className="flex flex-col items-center justify-center -mt-6 group focus:outline-none"
      >
        <div className="w-13 h-13 rounded-full bg-gradient-to-r from-sky-400 via-brand-500 to-indigo-600 text-white flex items-center justify-center shadow-lg border-3 border-white transform group-hover:scale-105 active:scale-95 transition-all">
          <Search className="w-6 h-6 text-white stroke-[2.5]" />
        </div>
        <span className="text-[10px] font-black text-brand-600 mt-0.5">Customize</span>
      </Link>

      {/* 4. Wishlists Tab */}
      <Link
        href="/holidays"
        className={`flex flex-col items-center justify-center py-1 px-3 text-[10px] font-bold transition-all ${
          isActive('/holidays') ? 'text-amber-500' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Heart className={`w-5 h-5 mb-0.5 ${isActive('/holidays') ? 'text-amber-500 fill-amber-400/20' : 'text-slate-500'}`} />
        <span>Wishlists</span>
      </Link>

      {/* 5. Gift Cards Tab */}
      <Link
        href="/gift-cards"
        className={`flex flex-col items-center justify-center py-1 px-3 text-[10px] font-bold transition-all ${
          isActive('/gift-cards') ? 'text-amber-500' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Gift className={`w-5 h-5 mb-0.5 ${isActive('/gift-cards') ? 'text-amber-500 fill-amber-400/20' : 'text-slate-500'}`} />
        <span>Gift Cards</span>
      </Link>
    </div>
  );
};
