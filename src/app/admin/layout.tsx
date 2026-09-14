'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, ShoppingBag, Users, Compass, MapPin, DollarSign,
  Tag, BookOpen, Settings, LogOut, Shield
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check Admin Session
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('tc_admin_session');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.authenticated) {
            setIsAdminAuthenticated(true);
            return;
          }
        } catch (e) {
          console.error('Invalid admin session', e);
        }
      }
      setIsAdminAuthenticated(false);
    }
  }, [pathname]);

  const handleAdminLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('tc_admin_session');
    }
    setIsAdminAuthenticated(false);
    router.push('/admin/login');
  };

  // If on login page, render child without sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Loading state while checking session
  if (isAdminAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-xs font-bold">
        Checking Admin Security Access...
      </div>
    );
  }

  // Access Denied / Redirect to Login
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 bg-slate-900 border-slate-800 rounded-3xl text-center space-y-4">
          <Shield className="w-12 h-12 text-rose-500 mx-auto" />
          <h2 className="text-xl font-black text-white">Admin Authentication Required</h2>
          <p className="text-xs text-slate-400">
            This area is restricted to tripcustomizer Admin Personnel. Please log in with admin credentials.
          </p>
          <Link href="/admin/login">
            <Button variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-xs">
              GO TO ADMIN LOGIN →
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'CRM Leads', href: '/admin/leads', icon: Users, badge: 'Live' },
    { name: 'Bookings Desk', href: '/admin/bookings', icon: ShoppingBag, badge: 'Cloud' },
    { name: 'Package CMS', href: '/admin/packages', icon: Compass },
    { name: 'Destination CMS', href: '/admin/destinations', icon: MapPin },
    { name: 'Offer Coupons', href: '/admin/offers', icon: Tag },
    { name: 'Blog CMS', href: '/admin/blogs', icon: BookOpen },
    { name: 'Settings & Audit', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800">
        {/* Brand Header */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="bg-brand-500 text-white font-black text-xs px-2 py-1 rounded-lg">
              ADMIN
            </div>
            <div>
              <span className="font-extrabold text-sm text-white block tracking-tight">tripcustomizer</span>
              <span className="text-[9px] text-accent-400 font-bold uppercase tracking-wider">Protected Admin SaaS</span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto text-xs font-semibold">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-brand-500 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] bg-accent-500 text-slate-950 font-black px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Admin User Footer with Logout */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-xs">
              SA
            </div>
            <div>
              <p className="font-bold text-white text-xs">Super Admin</p>
              <p className="text-[10px] text-emerald-400 font-semibold">Session Active</p>
            </div>
          </div>
          <button
            onClick={handleAdminLogout}
            title="Logout Admin"
            className="text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Admin Workplace Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <span className="font-bold text-slate-900 text-sm">Protected Admin Operations Desk</span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-semibold">
            <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
              ● Cloud DB Live
            </span>
            <Link href="/" target="_blank" className="text-brand-600 hover:underline">
              View Public Website ↗
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
