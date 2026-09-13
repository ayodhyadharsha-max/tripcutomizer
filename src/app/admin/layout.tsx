'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, ShoppingBag, Users, Compass, MapPin, DollarSign, FileCheck,
  Shield, Tag, BookOpen, Settings, LogOut, ChevronRight, Bell, ShieldAlert, Award
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'CRM Leads', href: '/admin/leads', icon: Users, badge: '12 New' },
    { name: 'Bookings Desk', href: '/admin/bookings', icon: ShoppingBag },
    { name: 'Package CMS', href: '/admin/packages', icon: Compass },
    { name: 'Destination CMS', href: '/admin/destinations', icon: MapPin },
    { name: 'Forex Orders', href: '/admin/forex', icon: DollarSign, badge: '5 KYC' },
    { name: 'Offer Coupons', href: '/admin/offers', icon: Tag },
    { name: 'Blog CMS', href: '/admin/blogs', icon: BookOpen },
    { name: 'RBAC & Audit Logs', href: '/admin/settings', icon: Settings },
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
              <span className="text-[9px] text-accent-400 font-bold uppercase tracking-wider">Enterprise Admin SaaS</span>
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

        {/* Admin User Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-xs">
              SA
            </div>
            <div>
              <p className="font-bold text-white text-xs">Super Admin Desk</p>
              <p className="text-[10px] text-emerald-400 font-semibold">RBAC Active</p>
            </div>
          </div>
          <Link href="/login" className="text-slate-400 hover:text-white">
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </aside>

      {/* Main Admin Workplace Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <span className="font-bold text-slate-900 text-sm">SaaS Backoffice Workplace</span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-semibold">
            <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
              ● System Online
            </span>
            <Link href="/" className="text-brand-600 hover:underline">
              View Live Website ↗
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
