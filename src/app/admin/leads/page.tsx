'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, Search, RefreshCw, Phone, Mail } from 'lucide-react';
import { cloudStore, CustomerLead } from '@/lib/cloudStore';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<CustomerLead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchDirectFromApi = async () => {
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.leads) && data.leads.length > 0) {
          setLeads(data.leads);
        }
      }
    } catch (e) {}
  };

  const loadLeads = () => {
    const fresh = cloudStore.getLeads();
    if (fresh.length > 0) setLeads(fresh);
    fetchDirectFromApi();
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchDirectFromApi();
    const fresh = cloudStore.getLeads();
    if (fresh.length > 0) setLeads(fresh);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  useEffect(() => {
    loadLeads();
    window.addEventListener('storage', loadLeads);
    window.addEventListener('cloudstore_update', loadLeads);
    const pollTimer = setInterval(loadLeads, 3000);
    return () => {
      window.removeEventListener('storage', loadLeads);
      window.removeEventListener('cloudstore_update', loadLeads);
      clearInterval(pollTimer);
    };
  }, []);

  const updateStatus = (id: string, newStatus: CustomerLead['status']) => {
    cloudStore.updateLeadStatus(id, newStatus);
    loadLeads();
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.phone.includes(searchTerm) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-600" />
              Cloud CRM Lead Management Pipeline
            </h1>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
              Live Cloud Enquiries
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Track incoming customer trip inquiries, preferred budgets, contact numbers & update pipeline statuses.
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 px-3.5 py-2 rounded-xl hover:bg-slate-50 cursor-pointer shadow-xs transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-brand-600 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>Refresh Leads</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search Customer Name, Phone, Email, Destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800 font-medium"
          />
        </div>
      </div>

      <Card className="p-6 bg-white border-slate-200 space-y-4 shadow-sm rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase text-[10px]">
                <th className="py-3 px-3">Date & Lead Ref</th>
                <th className="py-3 px-3">Customer Name</th>
                <th className="py-3 px-3">Destination & Budget</th>
                <th className="py-3 px-3">Contact Details</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Update Pipeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400 font-semibold">
                    No enquiry leads found.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold text-brand-600">
                      {l.id}
                      <span className="block text-[10px] text-slate-400 font-normal">
                        {new Date(l.createdAt).toLocaleDateString('en-IN')}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-black text-slate-900">{l.name}</td>
                    <td className="py-3 px-3">
                      <span className="font-bold text-slate-800 block">{l.destination}</span>
                      {l.budget && <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">{l.budget}</span>}
                    </td>
                    <td className="py-3 px-3 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1 font-semibold"><Phone className="w-3 h-3 text-slate-400" /> {l.phone}</div>
                      <div className="flex items-center gap-1"><Mail className="w-3 h-3 text-slate-400" /> {l.email}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`font-bold px-2.5 py-1 rounded-full text-[10px] ${
                          l.status === 'New'
                            ? 'bg-rose-100 text-rose-800'
                            : l.status === 'Contacted'
                            ? 'bg-amber-100 text-amber-800'
                            : l.status === 'Converted'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {l.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <select
                        value={l.status}
                        onChange={(e) => updateStatus(l.id, e.target.value as CustomerLead['status'])}
                        className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 cursor-pointer"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">In Contact</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
