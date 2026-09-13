'use client';

import React, { useState } from 'react';
import { MapPin, Search, Plus, Edit2, Globe, Eye, CheckCircle2, Star } from 'lucide-react';

interface DestinationCMSItem {
  id: string;
  slug: string;
  name: string;
  category: 'INTERNATIONAL' | 'DOMESTIC';
  tagline: string;
  packagesCount: number;
  featured: boolean;
  seoStatus: 'OPTIMIZED' | 'NEEDS_REVIEW';
  lastUpdated: string;
}

const mockDestinations: DestinationCMSItem[] = [
  { id: 'DEST-01', slug: 'europe', name: 'Europe', category: 'INTERNATIONAL', tagline: 'Experience historic castles, scenic Alps, and romantic cobblestone cities.', packagesCount: 12, featured: true, seoStatus: 'OPTIMIZED', lastUpdated: '2026-09-10' },
  { id: 'DEST-02', slug: 'kerala', name: 'Kerala', category: 'DOMESTIC', tagline: 'Gods Own Country with serene backwaters and tea plantations.', packagesCount: 8, featured: true, seoStatus: 'OPTIMIZED', lastUpdated: '2026-09-09' },
  { id: 'DEST-03', slug: 'thailand', name: 'Thailand', category: 'INTERNATIONAL', tagline: 'Golden temples, idyllic islands, and vibrant night markets.', packagesCount: 15, featured: true, seoStatus: 'OPTIMIZED', lastUpdated: '2026-09-08' },
  { id: 'DEST-04', slug: 'dubai', name: 'Dubai', category: 'INTERNATIONAL', tagline: 'Ultra-modern architecture, luxury shopping, and desert safaris.', packagesCount: 10, featured: true, seoStatus: 'OPTIMIZED', lastUpdated: '2026-09-05' },
  { id: 'DEST-05', slug: 'kashmir', name: 'Kashmir', category: 'DOMESTIC', tagline: 'Paradise on Earth with shikara rides on Dal Lake and snow slopes.', packagesCount: 6, featured: false, seoStatus: 'NEEDS_REVIEW', lastUpdated: '2026-09-01' },
  { id: 'DEST-06', slug: 'bali', name: 'Bali', category: 'INTERNATIONAL', tagline: 'Island of Gods with cliffside temples and lush rice terraces.', packagesCount: 9, featured: false, seoStatus: 'OPTIMIZED', lastUpdated: '2026-08-28' }
];

export default function AdminDestinationsPage() {
  const [destinations, setDestinations] = useState<DestinationCMSItem[]>(mockDestinations);
  const [searchTerm, setSearchTerm] = useState('');
  const [editItem, setEditItem] = useState<DestinationCMSItem | null>(null);

  const toggleFeatured = (id: string) => {
    setDestinations((prev) =>
      prev.map((d) => (d.id === id ? { ...d, featured: !d.featured } : d))
    );
  };

  const filtered = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-600" />
            Destination SEO & Content Management Engine
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage master destination landing pages, schema metadata, canonical URLs, and featured hero badges.
          </p>
        </div>
        <button
          onClick={() => alert('Add Destination Wizard coming in Next Phase')}
          className="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-brand-700 shadow-md shadow-brand-500/20"
        >
          <Plus className="w-4 h-4" /> Add Destination Landing Page
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search Destination Name or Slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div className="text-xs text-slate-500 font-semibold">
          Active SEO Pages: <span className="font-black text-slate-900">{destinations.length}</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Destination Name & Slug</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Tagline Summary</th>
                <th className="py-3.5 px-4">Linked Packages</th>
                <th className="py-3.5 px-4">Featured Hero</th>
                <th className="py-3.5 px-4">SEO JSON-LD Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4">
                    <span className="font-extrabold text-slate-900 block text-sm">{d.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">/destinations/{d.slug}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="bg-slate-100 border border-slate-200 rounded px-2 py-0.5 text-[10px] font-bold text-slate-800">
                      {d.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 max-w-xs text-slate-600 font-medium line-clamp-1">
                    {d.tagline}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {d.packagesCount} Active Packages
                  </td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => toggleFeatured(d.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 transition-colors ${
                        d.featured
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      <Star className={`w-3 h-3 ${d.featured ? 'fill-amber-500 text-amber-500' : ''}`} />
                      {d.featured ? 'Featured' : 'Standard'}
                    </button>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        d.seoStatus === 'OPTIMIZED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" /> {d.seoStatus}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <a
                      href={`/destinations/${d.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-brand-600 hover:bg-slate-100 rounded-lg inline-block transition-colors"
                      title="Preview Page"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setEditItem(d)}
                      className="p-1.5 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Edit SEO Meta"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit SEO Modal */}
      {editItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">SEO & Metadata CMS Editor</h3>
                <p className="text-xs text-slate-500">Destination: {editItem.name}</p>
              </div>
              <button onClick={() => setEditItem(null)} className="text-slate-400 font-bold text-lg">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Meta Title Tag</label>
                <input
                  type="text"
                  defaultValue={`${editItem.name} Tour Packages 2026 - Book Deals on ${editItem.name} Holidays`}
                  className="w-full p-2 border border-slate-300 rounded-lg font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Meta Description</label>
                <textarea
                  rows={3}
                  defaultValue={editItem.tagline}
                  className="w-full p-2 border border-slate-300 rounded-lg font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Canonical URL</label>
                <input
                  type="text"
                  defaultValue={`https://www.wanderlustindia.com/destinations/${editItem.slug}`}
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono text-[11px]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t">
              <button onClick={() => setEditItem(null)} className="px-4 py-2 text-slate-600 font-bold text-xs hover:bg-slate-100 rounded-xl">
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`SEO Meta updated for ${editItem.name}`);
                  setEditItem(null);
                }}
                className="px-4 py-2 bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 rounded-xl"
              >
                Save SEO Metadata
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
