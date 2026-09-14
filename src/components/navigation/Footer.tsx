'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ShieldCheck, Lock, Award, Heart, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-brand-900 text-slate-300 text-xs">
      {/* Overlapping "Stay in the Loop!" Newsletter Card */}
      <Container className="relative z-20">
        <div className="bg-brand-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden -mb-16">
          {/* Subtle World Landmark Silhouettes Background */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Stay in the Loop!
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-medium">
              Be the first to know about exclusive travel deals, exciting destinations, and special offers!
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubscribe} className="pt-2">
              {isSubscribed ? (
                <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-bold px-4 py-2.5 rounded-full text-xs flex items-center gap-2 max-w-md animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you for subscribing! Check your inbox for exclusive deals.</span>
                </div>
              ) : (
                <div className="bg-brand-800/80 p-1.5 rounded-full border border-brand-700/80 flex items-center max-w-md shadow-inner">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent px-3 sm:px-4 text-xs font-semibold text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-4 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>

      {/* Main Footer Container */}
      <div className="pt-24 sm:pt-28 pb-20 sm:pb-12 border-t border-brand-800/60 relative z-10">
        <Container>
          {/* Top Category Tab Links & PCI DSS Badge Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-10 border-b border-brand-800/80 gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-300">
              <Link href="/about" className="text-white hover:text-amber-400 border-b-2 border-amber-400 pb-1 transition-colors">About Us</Link>
              <Link href="/holidays/international" className="hover:text-white transition-colors">International Holidays</Link>
              <Link href="/holidays/india" className="hover:text-white transition-colors">India Holidays</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Travel Blogs</Link>
              <Link href="/investors" className="hover:text-white transition-colors">Investor Relations</Link>
            </div>

            {/* PCI DSS Security Certification Badge */}
            <div className="bg-white text-slate-900 px-3.5 py-1.5 rounded-lg text-[10px] font-extrabold flex items-center space-x-2 shrink-0 border border-slate-200">
              <Lock className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="block text-slate-400 text-[9px]">Certified by PCI DSS</span>
                <span className="font-black text-slate-900 uppercase tracking-wider">PCI SECURITY CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* 6-Column Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 text-slate-400">
            {/* Column 1: About the Site */}
            <div>
              <h4 className="font-extrabold text-white text-xs mb-3.5 uppercase tracking-wider">About the Site</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/stores" className="hover:text-white transition-colors">Store / Branch Locator</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Column 2: Products & Services */}
            <div>
              <h4 className="font-extrabold text-white text-xs mb-3.5 uppercase tracking-wider">Products & Services</h4>
              <ul className="space-y-2">
                <li><Link href="/holidays" className="hover:text-white transition-colors">Holidays</Link></li>
                <li><Link href="/honeymoon" className="hover:text-white transition-colors">Honeymoon Packages</Link></li>
                <li><Link href="/mice" className="hover:text-white transition-colors">Meetings & MICE</Link></li>
                <li><Link href="/gift-cards" className="hover:text-white transition-colors">Gift Cards</Link></li>
                <li><Link href="/flights" className="hover:text-white transition-colors">Flights</Link></li>
                <li><Link href="/hotels" className="hover:text-white transition-colors">Hotels</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Travel Blog</Link></li>
                <li><Link href="/corporate-travel" className="hover:text-white transition-colors">Corporate Travel</Link></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="font-extrabold text-white text-xs mb-3.5 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/brochure" className="hover:text-white transition-colors">Travel e-brochure</Link></li>
                <li><Link href="/agent/login" className="hover:text-white transition-colors">Staff / Agent Login</Link></li>
                <li><Link href="/offers" className="hover:text-white transition-colors">Offers & Discounts</Link></li>
                <li><Link href="/mobile-app" className="hover:text-white transition-colors">Holiday App</Link></li>
                <li><Link href="/customize-trip" className="hover:text-white transition-colors">Customize Trip</Link></li>
              </ul>
            </div>

            {/* Column 4: Sitemaps */}
            <div>
              <h4 className="font-extrabold text-white text-xs mb-3.5 uppercase tracking-wider">Sitemaps</h4>
              <ul className="space-y-2">
                <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
                <li><Link href="/holidays/india" className="hover:text-white transition-colors">Domestic Packages from City</Link></li>
                <li><Link href="/holidays/international" className="hover:text-white transition-colors">International Packages from City</Link></li>
                <li><Link href="/flights" className="hover:text-white transition-colors">Domestic Flights Sitemap</Link></li>
                <li><Link href="/flights" className="hover:text-white transition-colors">International Flights Sitemap</Link></li>
              </ul>
            </div>

            {/* Column 5: Trending Holiday Theme */}
            <div>
              <h4 className="font-extrabold text-white text-xs mb-3.5 uppercase tracking-wider">Trending Holiday Theme</h4>
              <ul className="space-y-2">
                <li><Link href="/cruises" className="hover:text-white transition-colors">Cruise Packages</Link></li>
                <li><Link href="/experiential" className="hover:text-white transition-colors">Experiential Travel Packages</Link></li>
                <li><Link href="/youth-special" className="hover:text-white transition-colors">Youth Special Packages</Link></li>
              </ul>
            </div>

            {/* Column 6: Travel Guidelines */}
            <div>
              <h4 className="font-extrabold text-white text-xs mb-3.5 uppercase tracking-wider">Travel Guidelines</h4>
              <ul className="space-y-2">
                <li><Link href="/safe-travel" className="hover:text-white transition-colors">Assured Safe Travel Program</Link></li>
                <li><Link href="/guidelines" className="hover:text-white transition-colors">COVID 19 Certification</Link></li>
                <li><Link href="/guidelines/international" className="hover:text-white transition-colors">International Travel Guideline</Link></li>
                <li><Link href="/guidelines/india" className="hover:text-white transition-colors">India Travel Guidelines</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-brand-800/80 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 tripcustomizer. All rights reserved. Enterprise Travel Commerce Platform.</p>
            <div className="flex space-x-4 font-semibold text-slate-400">
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
