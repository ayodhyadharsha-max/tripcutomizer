'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, User, ChevronDown, MessageCircle, HelpCircle, ShieldCheck, LogIn, UserPlus, Briefcase, FileText } from 'lucide-react';
import { Container } from '../ui/Container';

export const HeaderTopBar: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="bg-brand-800 text-slate-200 text-xs py-2 border-b border-brand-700/50">
      <Container className="flex justify-between items-center">
        {/* Left Links */}
        <div className="flex items-center space-x-6">
          <a href="tel:18002099100" className="flex items-center space-x-1.5 hover:text-accent-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-accent-400" />
            <span className="font-semibold tracking-wide">1800-2099-100</span>
            <span className="hidden md:inline text-slate-400 font-normal">(Toll Free 9 AM - 9 PM)</span>
          </a>
          <a
            href="https://wa.me/918291901377"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center space-x-1 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
          <Link href="/store-locator" className="hidden lg:flex items-center space-x-1 hover:text-accent-400 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-accent-400" />
            <span>Find Stores</span>
          </Link>
        </div>

        {/* Right Links & Auth */}
        <div className="flex items-center space-x-5">
          <Link href="/contact" className="hidden md:flex items-center space-x-1 hover:text-white transition-colors">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Customer Support</span>
          </Link>

          {/* User Auth Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              onBlur={() => setTimeout(() => setIsAuthOpen(false), 200)}
              className="flex items-center space-x-1.5 bg-brand-700/60 hover:bg-brand-700 px-3 py-1 rounded-full text-white font-medium transition-all"
            >
              <User className="w-3.5 h-3.5 text-accent-400" />
              <span>Account / Login</span>
              <ChevronDown className="w-3 h-3 text-slate-300" />
            </button>

            {isAuthOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-xs font-semibold text-slate-900">Welcome to tripcustomizer</p>
                  <p className="text-[11px] text-slate-500">Access bookings, wishlist & rewards</p>
                </div>

                <Link
                  href="/login"
                  className="flex items-center space-x-2.5 px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                >
                  <LogIn className="w-4 h-4 text-brand-500" />
                  <span>Customer Login</span>
                </Link>

                <Link
                  href="/register"
                  className="flex items-center space-x-2.5 px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                >
                  <UserPlus className="w-4 h-4 text-accent-500" />
                  <span>Register Account</span>
                </Link>

                <Link
                  href="/manage-booking"
                  className="flex items-center space-x-2.5 px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Manage Bookings</span>
                </Link>

                <div className="border-t border-slate-100 my-1"></div>

                <Link
                  href="/agent/login"
                  className="flex items-center space-x-2.5 px-4 py-2 hover:bg-slate-50 text-brand-700 font-semibold transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-brand-700" />
                  <span>Travel Agent SSO Portal</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
