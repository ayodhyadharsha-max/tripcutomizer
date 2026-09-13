'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp, ShoppingBag, Users, DollarSign, FileCheck, Shield, ArrowUpRight } from 'lucide-react';

export default function AdminDashboardPage() {
  const metrics = [
    { title: 'Total Revenue (MTD)', value: '₹1.84 Cr', change: '+14.2%', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Active Bookings', value: '342', change: '+8.4%', icon: ShoppingBag, color: 'text-brand-600 bg-brand-50' },
    { title: 'CRM Leads Queue', value: '88', change: '12 New', icon: Users, color: 'text-accent-600 bg-accent-50' },
    { title: 'Forex Orders Volume', value: '$450K USD', change: '5 Pending KYC', icon: DollarSign, color: 'text-purple-600 bg-purple-50' },
  ];

  const recentBookings = [
    { ref: 'TB-984210', customer: 'Rishabh Jaiswal', product: 'Dubai 5N Package', amount: 97980, status: 'CONFIRMED' },
    { ref: 'TB-412093', customer: 'Ananya Jaiswal', product: 'Forex Card USD 1,000', amount: 84450, status: 'PAID' },
    { ref: 'TB-102941', customer: 'Vikram Sethi', product: 'Europe Group Tour 9D', amount: 290000, status: 'PROCESSING' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Executive Dashboard & Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">Real-time overview of revenue, sales pipeline, forex orders & booking performance.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <Card key={i} className="p-5 bg-white border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-3 rounded-2xl ${m.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  {m.change}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 block">{m.title}</span>
              <span className="text-2xl font-black text-slate-900">{m.value}</span>
            </Card>
          );
        })}
      </div>

      {/* Recent Transactions & Leads Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Card className="p-6 bg-white border-slate-200 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 text-sm">Recent Booking Transactions</h2>
              <Link href="/admin/bookings" className="text-xs font-bold text-brand-500 hover:underline">
                View All →
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                    <th className="py-2">Ref ID</th>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                  {recentBookings.map((b) => (
                    <tr key={b.ref} className="hover:bg-slate-50">
                      <td className="py-3 font-bold text-brand-600">{b.ref}</td>
                      <td className="py-3 font-bold text-slate-900">{b.customer}</td>
                      <td className="py-3">{b.product}</td>
                      <td className="py-3 font-black text-slate-900">{formatCurrency(b.amount)}</td>
                      <td className="py-3 text-right">
                        <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Popular Category Performance */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="p-6 bg-white border-slate-200 space-y-3 text-xs">
            <h3 className="font-bold text-slate-900">Top Performing Verticals</h3>
            <div className="space-y-2 font-medium">
              <div className="flex justify-between">
                <span>International Holidays:</span>
                <span className="font-bold text-brand-700">₹92 Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span>Forex Cash & Cards:</span>
                <span className="font-bold text-emerald-700">₹48 Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span>Domestic India Tours:</span>
                <span className="font-bold text-accent-700">₹24 Lakhs</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
