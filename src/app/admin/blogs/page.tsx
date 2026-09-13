'use client';

import React, { useState } from 'react';
import { BookOpen, Plus, Search, Eye, Edit2, Globe, CheckCircle2, Clock } from 'lucide-react';

interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  publishDate: string;
  status: 'PUBLISHED' | 'DRAFT';
  views: number;
  readTime: string;
}

const mockBlogs: BlogPostItem[] = [
  { id: 'BLOG-01', slug: 'top-10-places-to-visit-in-europe-summer-2026', title: 'Top 10 Places to Visit in Europe for Summer 2026', category: 'Destination Guide', author: 'Ananya Sharma', publishDate: '2026-09-10', status: 'PUBLISHED', views: 4820, readTime: '5 min' },
  { id: 'BLOG-02', slug: 'ultimate-guide-to-buying-forex-cards-in-india', title: 'Ultimate Guide to Buying Forex Cards in India', category: 'Travel Tips & Forex', author: 'Vikram Sengupta', publishDate: '2026-09-08', status: 'PUBLISHED', views: 3120, readTime: '7 min' },
  { id: 'BLOG-03', slug: 'schengen-visa-application-checklist-for-indians', title: 'Schengen Visa Application Checklist for Indian Passport Holders', category: 'Visa Guide', author: 'Rahul Verma', publishDate: '2026-09-05', status: 'PUBLISHED', views: 8940, readTime: '8 min' },
  { id: 'BLOG-04', slug: 'budget-hacks-for-maldives-water-villas', title: 'Budget Hacks for Booking Maldives Overwater Villas', category: 'Honeymoon Deals', author: 'Priya Patel', publishDate: '2026-09-01', status: 'DRAFT', views: 0, readTime: '4 min' }
];

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPostItem[]>(mockBlogs);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleStatus = (id: string) => {
    setBlogs((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, status: b.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED' }
          : b
      )
    );
  };

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-brand-600" />
            Travel Blog & SEO Editorial CMS Pipeline
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Author SEO-optimized travel guides, destination itineraries, and advisory articles for organic organic traffic.
          </p>
        </div>
        <button
          onClick={() => alert('New Blog Post Editor coming in next version')}
          className="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-brand-700 shadow-md shadow-brand-500/20"
        >
          <Plus className="w-4 h-4" /> Create New Article Draft
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search Title or Category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div className="text-xs text-slate-500 font-semibold">
          Total Readers: <span className="font-black text-slate-900">16,880 Pageviews</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Article Title & Slug</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">Publish Date</th>
                <th className="py-3.5 px-4">Views</th>
                <th className="py-3.5 px-4">Publish State</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-900 block max-w-md line-clamp-1">{b.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">/blog/{b.slug}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="bg-slate-100 border border-slate-200 rounded px-2 py-0.5 text-[10px] font-bold text-slate-800">
                      {b.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">{b.author}</td>
                  <td className="py-3.5 px-4 text-slate-500">{b.publishDate}</td>
                  <td className="py-3.5 px-4 font-black text-slate-900">{b.views.toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => toggleStatus(b.id)}
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full transition-colors ${
                        b.status === 'PUBLISHED'
                          ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                          : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                      }`}
                    >
                      {b.status}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <a
                      href={`/blog/${b.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-brand-600 hover:bg-slate-100 rounded-lg inline-block transition-colors"
                      title="View Article Live"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
