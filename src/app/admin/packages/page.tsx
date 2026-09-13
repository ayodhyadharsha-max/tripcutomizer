'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { Compass, Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState(DEMO_PACKAGES);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Package CMS Catalog Manager</h1>
          <p className="text-xs text-slate-500 mt-1">Create, edit & manage holiday packages, pricing, itineraries and inclusions.</p>
        </div>
        <Button variant="accent" size="sm" className="text-xs font-bold text-slate-950">
          + Create New Package
        </Button>
      </div>

      <Card className="p-6 bg-white border-slate-200 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                <th className="py-2">Package Name</th>
                <th className="py-2">Destination</th>
                <th className="py-2">Duration</th>
                <th className="py-2">Starting Price</th>
                <th className="py-2">Category</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
              {packages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-slate-50">
                  <td className="py-3 font-bold text-slate-900">{pkg.name}</td>
                  <td className="py-3">{pkg.destination}</td>
                  <td className="py-3">{pkg.durationDays}D / {pkg.durationNights}N</td>
                  <td className="py-3 font-black text-brand-700">{formatCurrency(pkg.startingPrice)}</td>
                  <td className="py-3">
                    <span className="bg-brand-50 text-brand-700 font-bold px-2 py-0.5 rounded text-[10px]">
                      {pkg.theme}
                    </span>
                  </td>
                  <td className="py-3 text-right space-x-2">
                    <button onClick={() => alert(`Edit package ${pkg.name}`)} className="p-1 text-slate-600 hover:text-brand-500">
                      <Edit className="w-4 h-4" />
                    </button>
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
