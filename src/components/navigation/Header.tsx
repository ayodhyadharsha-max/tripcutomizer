'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderTopBar } from './HeaderTopBar';
import { MegaMenuHolidays } from './MegaMenuHolidays';
import { MegaMenuMore } from './MegaMenuMore';
import { MobileNav } from './MobileNav';
import { Container } from '../ui/Container';
import { PWAInstallButton } from '../ui/PWAInstallButton';
import { Compass, Plane, Hotel, Sparkles, ChevronDown, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'holidays' | 'more' | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
      {/* Top Utility Bar with Account/Login dropdown */}
      <HeaderTopBar />

      {/* Main Navigation Bar */}
      <Container className="flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3.5 group py-1">
          <img
            src="/logo.png"
            alt="Trip Customizer Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-xs"
          />
          <div className="flex flex-col justify-center border-l-2 border-brand-500/20 pl-3 py-0.5">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900 block leading-none font-sans">
              Trip <span className="text-brand-600 font-black">Customizer</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-black text-brand-600 tracking-wider block mt-1 uppercase bg-brand-50/80 px-2 py-0.5 rounded-full border border-brand-200/60 shadow-2xs">
              Holidays • Flights • Hotels
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-3 font-semibold text-xs text-slate-700">
          {/* Holidays Link with Mega Menu */}
          <div
            className="relative py-5"
            onMouseEnter={() => setActiveMenu('holidays')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href="/holidays"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg hover:text-brand-500 hover:bg-slate-50 transition-colors"
            >
              <Compass className="w-4 h-4 text-brand-500" />
              <span>Holidays</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            {activeMenu === 'holidays' && (
              <div style={{ width: '780px' }} className="absolute top-full -left-48 lg:-left-64 pt-1 z-50">
                <MegaMenuHolidays />
              </div>
            )}
          </div>

          {/* Flights */}
          <Link
            href="/flights"
            className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg hover:text-brand-500 hover:bg-slate-50 transition-colors"
          >
            <span className="absolute -top-1.5 -right-1 bg-amber-400 text-slate-950 font-black text-[8px] px-1 py-0.2 rounded uppercase tracking-wider shadow-xs">
              SOON
            </span>
            <Plane className="w-4 h-4 text-brand-400" />
            <span>Flights</span>
          </Link>

          {/* Hotels */}
          <Link
            href="/hotels"
            className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg hover:text-accent-600 hover:bg-slate-50 transition-colors"
          >
            <span className="absolute -top-1.5 -right-1 bg-amber-400 text-slate-950 font-black text-[8px] px-1 py-0.2 rounded uppercase tracking-wider shadow-xs">
              SOON
            </span>
            <Hotel className="w-4 h-4 text-accent-500" />
            <span>Hotels</span>
          </Link>

          {/* Customize Trip with NEW Badge */}
          <Link
            href="/customize-trip"
            className="relative flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 font-bold hover:bg-amber-100 transition-all shadow-sm"
          >
            <span className="absolute -top-2 -right-1 bg-rose-500 text-white font-black text-[9px] px-1.5 py-0.2 rounded-md uppercase tracking-wider animate-pulse">
              NEW
            </span>
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Customize Trip</span>
          </Link>

          {/* More Menu */}
          <div
            className="relative py-5"
            onMouseEnter={() => setActiveMenu('more')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors">
              <span>More</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeMenu === 'more' && (
              <div className="absolute top-full right-0 pt-1">
                <MegaMenuMore />
              </div>
            )}
          </div>

          {/* App Install Button */}
          <PWAInstallButton variant="header" />
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  );
};
