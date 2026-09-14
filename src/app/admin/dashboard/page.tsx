'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp, ShoppingBag, Users, DollarSign, ArrowUpRight, RefreshCw } from 'lucide-react';
import { cloudStore, CustomerBooking, CustomerLead } from '@/lib/cloudStore';

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<CustomerBooking[]>([]);
  const [leads, setLeads] = useState<CustomerLead[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = () => {
    setBookings(cloudStore.getBookings());
    setLeads(cloudStore.getLeads());
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    loadData();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  useEffect(() => {
    loadData();
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, []);

  const totalRevenue = bookings.reduce((sum, b) => (b.status !== 'Cancelled' ? sum + b.totalAmount : sum), 0);
  const activeBookingsCount = bookings.filter((b) => b.status === 'Confirmed' || b.status === 'Pending').length;
  const newLeadsCount = leads.filter((l) => l.status === 'New').length;

  const metrics = [
    { title: 'Total Revenue (Cloud Live)', value: formatCurrency(totalRevenue), change: 'Live DB', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Active Bookings', value: activeBookingsCount.toString(), change: `${bookings.length} Total`, icon: ShoppingBag, color: 'text-brand-600 bg-brand-50' },
    { title: 'CRM Leads Queue', value: leads.length.toString(), change: `${newLeadsCount} New`, icon: Users, color: 'text-amber-600 bg-amber-50' },
    { title: 'Registered Customers', value: (bookings.length + leads.length).toString(), change: 'Auto-saved', icon: DollarSign, color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Executive Cloud Dashboard & Realtime Analytics</h1>
          <p className="text-xs text-slate-500 mt-1">Real-time overview of customer bookings, sales CRM leads, and active revenue.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 px-3.5 py-2 rounded-xl hover:bg-slate-50 cursor-pointer shadow-xs transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-brand-600 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh Data</span>
          </button>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Cloud Data Active
          </span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <Card key={i} className="p-5 bg-white border-slate-200 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-3 rounded-2xl ${m.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
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
          <Card className="p-6 bg-white border-slate-200 space-y-4 shadow-sm rounded-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 text-sm">Recent Cloud Customer Bookings</h2>
              <Link href="/admin/bookings" className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
                <span>View Full Operations</span> <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                    <th className="py-2.5 px-2">Ref ID</th>
                    <th className="py-2.5 px-2">Customer</th>
                    <th className="py-2.5 px-2">Product</th>
                    <th className="py-2.5 px-2">Amount</th>
                    <th className="py-2.5 px-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                  {bookings.slice(0, 5).map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50">
                      <td className="py-3 px-2 font-bold text-brand-600">{b.referenceNo}</td>
                      <td className="py-3 px-2 text-slate-900 font-bold">{b.customerName}</td>
                      <td className="py-3 px-2 text-slate-700">{b.packageName}</td>
                      <td className="py-3 px-2 font-black text-slate-900">{formatCurrency(b.totalAmount)}</td>
                      <td className="py-3 px-2">
                        <span
                          className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                            b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}
                        >
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

        {/* Quick Actions / Status Column */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="p-6 bg-gradient-to-br from-brand-900 to-slate-900 text-white rounded-2xl space-y-4 shadow-xl">
            <h3 className="font-extrabold text-base text-amber-300">tripcustomizer Operations</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Customer details and booking vouchers are automatically stored in the cloud. Access customer phone numbers & emails directly in Admin Operations.
            </p>
            <div className="space-y-2 pt-2">
              <Link href="/admin/bookings">
                <button className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs py-2.5 rounded-xl cursor-pointer shadow-md">
                  MANAGE BOOKINGS →
                </button>
              </Link>
              <Link href="/admin/leads">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2.5 rounded-xl cursor-pointer">
                  MANAGE CRM LEADS →
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
