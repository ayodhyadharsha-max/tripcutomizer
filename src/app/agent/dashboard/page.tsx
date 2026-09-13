'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { Users, FileText, Send, CheckCircle2, TrendingUp, DollarSign, Award, Plus, Search } from 'lucide-react';

export default function AgentDashboardPage() {
  const [activeTab, setActiveTab] = useState<'leads' | 'quotes' | 'onbehalf'>('leads');

  const [leads, setLeads] = useState([
    { id: 'LEAD-894102', name: 'Vikram Sethi', destination: 'Europe 9D Escorted', phone: '+91 9811223344', budget: '₹1.5L', status: 'NEW' },
    { id: 'LEAD-741209', name: 'Pooja Agarwal', destination: 'Dubai 5D Family Package', phone: '+91 9988776655', budget: '₹95K', status: 'QUOTE_SENT' },
    { id: 'LEAD-320941', name: 'Karan Sharma', destination: 'Bali Honeymoon Villa', phone: '+91 9711002233', budget: '₹85K', status: 'QUALIFIED' },
  ]);

  return (
    <div className="bg-slate-100 min-h-screen py-8">
      <Container>
        {/* Agent Header Card */}
        <Card className="p-6 bg-brand-900 text-white rounded-3xl mb-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="bg-accent-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                Agent Desk: Senior Travel Specialist
              </span>
              <span className="text-xs text-emerald-400 font-bold">ID: AGENT-102</span>
            </div>
            <h1 className="text-2xl font-black text-white">Rahul Sharma — Agent Workplace</h1>
          </div>

          <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl border border-white/15 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Monthly Targets</span>
              <span className="font-black text-white text-sm">₹14.2L / ₹20L</span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-accent-500 flex items-center justify-center font-bold text-[11px] text-white">
              71%
            </div>
          </div>
        </Card>

        {/* Dashboard Tabs & Action Buttons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2 bg-white p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === 'leads' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Assigned CRM Leads ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab('quotes')}
              className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === 'quotes' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Quotation Generator
            </button>
            <button
              onClick={() => setActiveTab('onbehalf')}
              className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === 'onbehalf' ? 'bg-brand-500 text-white shadow' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              On-Behalf Booking Desk
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'leads' && (
          <Card className="p-6 bg-white border-slate-200 space-y-4">
            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              Customer Lead Queue & Status Follow-up
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                    <th className="py-2">Lead ID</th>
                    <th className="py-2">Customer Name</th>
                    <th className="py-2">Destination</th>
                    <th className="py-2">Phone</th>
                    <th className="py-2">Budget</th>
                    <th className="py-2">Pipeline Status</th>
                    <th className="py-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50">
                      <td className="py-3 font-bold text-brand-600">{lead.id}</td>
                      <td className="py-3 font-bold text-slate-900">{lead.name}</td>
                      <td className="py-3">{lead.destination}</td>
                      <td className="py-3">{lead.phone}</td>
                      <td className="py-3 font-bold">{lead.budget}</td>
                      <td className="py-3">
                        <span className="bg-brand-50 text-brand-700 font-bold px-2 py-0.5 rounded text-[10px]">
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => alert(`Sending quote for ${lead.name}`)}
                          className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-3 py-1.5 rounded-lg text-[11px]"
                        >
                          Send Quote
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'quotes' && (
          <Card className="p-6 bg-white border-slate-200 space-y-4 max-w-2xl text-xs">
            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              Build Custom Quotation PDF
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Quotation PDF generated & emailed to customer.'); }} className="space-y-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Customer Name</label>
                <input required type="text" placeholder="Vikram Sethi" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Destination & Package</label>
                <input required type="text" placeholder="Dubai 5N/6D Package" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Quoted Price (INR)</label>
                <input required type="number" placeholder="48990" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <Button type="submit" variant="primary" size="md" className="w-full font-bold py-2.5">
                GENERATE & SEND QUOTATION
              </Button>
            </form>
          </Card>
        )}

        {activeTab === 'onbehalf' && (
          <Card className="p-6 bg-white border-slate-200 space-y-4 max-w-2xl text-xs">
            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              Book On-Behalf of Customer
            </h2>
            <p className="text-slate-500">Book holidays or forex cards on behalf of walk-in store customers using agent commission code.</p>
            <Link href="/holidays" className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold px-4 py-2.5 rounded-xl">
              Launch Agent Booking Engine →
            </Link>
          </Card>
        )}
      </Container>
    </div>
  );
}
