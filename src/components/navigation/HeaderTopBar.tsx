'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, User, ChevronDown, MessageCircle, HelpCircle, LogOut, ShoppingBag, LogIn } from 'lucide-react';
import { Container } from '../ui/Container';
import { useAuth } from '@/context/AuthContext';
import { AuthModal } from '../modals/AuthModal';

export const HeaderTopBar: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isLoggedIn, logout } = useAuth();

  const handleAccountClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    } else {
      setIsAuthOpen(!isAuthOpen);
    }
  };

  return (
    <>
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

            {/* User Auth Button / Dropdown */}
            <div className="relative">
              <button
                onClick={handleAccountClick}
                className="flex items-center space-x-1.5 bg-brand-700/60 hover:bg-brand-700 px-3 py-1 rounded-full text-white font-medium transition-all cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-accent-400" />
                <span>{isLoggedIn ? user?.name || 'My Account' : 'Login / Sign Up'}</span>
                {isLoggedIn ? <ChevronDown className="w-3 h-3 text-slate-300" /> : <LogIn className="w-3 h-3 text-accent-400" />}
              </button>

              {isLoggedIn && isAuthOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">
                      Logged in as {user?.name}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {user?.email}
                    </p>
                  </div>

                  <div className="py-1 text-xs">
                    <Link
                      href="/account"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-slate-50 text-slate-700 font-semibold"
                    >
                      <User className="w-4 h-4 text-brand-600" />
                      <span>My Saved Account & Profile</span>
                    </Link>

                    <Link
                      href="/account"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-slate-50 text-slate-700 font-semibold"
                    >
                      <ShoppingBag className="w-4 h-4 text-brand-600" />
                      <span>My Bookings & E-Vouchers</span>
                    </Link>

                    <button
                      onClick={logout}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-rose-600 hover:bg-rose-50 font-bold border-t border-slate-100 text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Thomas Cook Style OTP Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
