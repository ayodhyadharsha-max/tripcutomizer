'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Users, Search, Plus, Filter, UserCheck } from 'lucide-react';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([
    { id: 'LEAD-894102', name: 'Vikram Sethi', destination: 'Europe 9D Escorted', phone: '+91 9811223344', email: 'vikram@example.com', budget: '₹1.5L', agent: 'Rahul Sharma', status: 'NEW' },
    { id: 'LEAD-741209', name: 'Pooja Agarwal', destination: 'Dubai 5D Family Package', phone: '+91 9988776655', email: 'pooja@example.com', budget: '₹95K', agent: 'Priya Mehta', status: 'QUOTE_SENT' },
    { id: 'LEAD-320941', name: 'Karan Sharma', destination: 'Bali Honeymoon Villa', phone: '+91 9711002233', email: 'karan@example.com', budget: '₹85K', agent: 'Rahul Sharma', status: 'QUALIFIED' },
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">CRM Lead Management Pipeline</h1>
          <p className="text-xs text-slate-500 mt-1">Track incoming trip inquiries, assign sales agents & update pipeline statuses.</p>
        </div>
        <Button variant="primary" size="sm" className="text-xs">
          + Add Manual Lead
        </Button>
      </div>

      <Card className="p-6 bg-white border-slate-200 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                <th className="py-2">Lead Ref</th>
                <th className="py-2">Customer Name</th>
                <th className="py-2">Destination</th>
                <th className="py-2">Contact Details</th>
                <th className="py-2">Assigned Agent</th>
                <th className="py-2">Status</th>
                <th className="py-2 text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
              {leads.map((l) => (
                <tr key={l.id} className="hover:bg-slate-50">
                  <td className="py-3 font-bold text-brand-600">{l.id}</td>
                  <td className="py-3 font-bold text-slate-900">{l.name}</td>
                  <td className="py-3">{l.destination}</td>
                  <td className="py-3 text-[11px] text-slate-500">{l.phone}<br />{l.email}</td>
                  <td className="py-3 text-brand-700 font-bold">{l.agent}</td>
                  <td className="py-3">
                    <span className="bg-brand-50 text-brand-700 font-bold px-2 py-0.5 rounded text-[10px]">
                      {l.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <select
                      value={l.status}
                      onChange={(e) => updateStatus(l.id, e.target.value)}
                      className="bg-slate-50 border rounded-lg px-2 py-1 font-bold text-[11px]"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="QUALIFIED">QUALIFIED</option>
                      <option value="QUOTE_SENT">QUOTE_SENT</option>
                      <option value="CONVERTED">CONVERTED</option>
                      <option value="LOST">LOST</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
