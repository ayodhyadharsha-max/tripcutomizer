'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HolidayPackage } from '@/data/packagesData';
import { getAllCatalogPackages } from '@/data/packageCatalog';
import { cloudStore } from '@/lib/cloudStore';
import { formatCurrency } from '@/lib/utils';
import {
  downloadSampleCsv,
  downloadSampleJson,
  parsePackagesFromCsv,
  parsePackagesFromJson,
} from '@/lib/packageUploader';
import {
  Compass,
  Upload,
  Download,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Search,
  Filter,
  RefreshCw,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Layers,
  FileText,
  FileSpreadsheet,
  FileCode,
  ArrowUpDown,
  ExternalLink,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<HolidayPackage[]>([]);
  const [isLegacyDeleted, setIsLegacyDeleted] = useState(false);
  const [activeBatchFilter, setActiveBatchFilter] = useState<'all' | 'legacy' | 'mmt_sync'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [sortField, setSortField] = useState<'name' | 'price' | 'duration'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  // Modal States
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Upload Processing State
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [parsedPreviewPackages, setParsedPreviewPackages] = useState<HolidayPackage[]>([]);
  const [parseErrors, setParseErrors] = useState<string[]>([]);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load packages and legacy status on mount
  const refreshCatalogData = () => {
    const legacyDeleted = cloudStore.isLegacyPackagesDeleted();
    setIsLegacyDeleted(legacyDeleted);

    const baseCatalog = getAllCatalogPackages();
    const customMmt = cloudStore.getCustomPackages();

    // Map through base packages to guarantee batch_source = 'legacy'
    const taggedLegacy = baseCatalog
      .filter((p) => (p.batch_source || 'legacy') === 'legacy')
      .map((p) => ({ ...p, batch_source: 'legacy' }));

    // Tagged custom MMT sync
    const taggedMmt = customMmt.map((p) => ({ ...p, batch_source: 'mmt_sync' }));

    const activeList = legacyDeleted ? taggedMmt : [...taggedMmt, ...taggedLegacy];
    setPackages(activeList);
  };

  useEffect(() => {
    refreshCatalogData();

    // Listen to storage events across tabs
    const handleStorageUpdate = () => refreshCatalogData();
    window.addEventListener('storage', handleStorageUpdate);
    window.addEventListener('cloudstore_update', handleStorageUpdate);
    return () => {
      window.removeEventListener('storage', handleStorageUpdate);
      window.removeEventListener('cloudstore_update', handleStorageUpdate);
    };
  }, []);

  // Show temporary toast notification
  const triggerNotification = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Counts summary
  const counts = useMemo(() => {
    const mmtSyncCount = packages.filter((p) => p.batch_source === 'mmt_sync').length;
    const legacyCount = packages.filter((p) => (p.batch_source || 'legacy') === 'legacy').length;
    return {
      total: packages.length,
      mmtSync: mmtSyncCount,
      legacy: legacyCount,
    };
  }, [packages]);

  // Unique destinations list for dropdown
  const destinationsList = useMemo(() => {
    const set = new Set<string>();
    packages.forEach((p) => {
      if (p.destination) set.add(p.destination);
    });
    return Array.from(set).sort();
  }, [packages]);

  // Filtered & Sorted packages
  const filteredPackages = useMemo(() => {
    return packages
      .filter((pkg) => {
        // 1. Batch source filter
        if (activeBatchFilter === 'legacy' && (pkg.batch_source || 'legacy') !== 'legacy') return false;
        if (activeBatchFilter === 'mmt_sync' && pkg.batch_source !== 'mmt_sync') return false;

        // 2. Destination filter
        if (selectedDestination !== 'all' && pkg.destination !== selectedDestination) return false;

        // 3. Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = pkg.name?.toLowerCase().includes(q);
          const matchDest = pkg.destination?.toLowerCase().includes(q);
          const matchSlug = pkg.slug?.toLowerCase().includes(q);
          const matchId = pkg.id?.toLowerCase().includes(q);
          const matchTheme = pkg.theme?.toLowerCase().includes(q);
          if (!matchName && !matchDest && !matchSlug && !matchId && !matchTheme) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortField === 'price') {
          return sortDirection === 'asc' ? a.startingPrice - b.startingPrice : b.startingPrice - a.startingPrice;
        }
        if (sortField === 'duration') {
          return sortDirection === 'asc' ? a.durationDays - b.durationDays : b.durationDays - a.durationDays;
        }
        return sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });
  }, [packages, activeBatchFilter, selectedDestination, searchQuery, sortField, sortDirection]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredPackages.length / pageSize));
  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredPackages.slice(start, start + pageSize);
  }, [filteredPackages, currentPage, pageSize]);

  // Handle File Selection for Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processSelectedFile(file);
  };

  const processSelectedFile = (file: File) => {
    setUploadedFile(file);
    setIsProcessingFile(true);
    setParseErrors([]);
    setParsedPreviewPackages([]);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) {
        setParseErrors(['Unable to read file contents.']);
        setIsProcessingFile(false);
        return;
      }

      const fileName = file.name.toLowerCase();
      let result: { packages: HolidayPackage[]; errors: string[] };

      if (fileName.endsWith('.json')) {
        result = parsePackagesFromJson(content);
      } else if (fileName.endsWith('.csv')) {
        result = parsePackagesFromCsv(content);
      } else {
        result = { packages: [], errors: ['Unsupported file format. Please upload a .json or .csv file.'] };
      }

      setParsedPreviewPackages(result.packages);
      setParseErrors(result.errors);
      setIsProcessingFile(false);
    };

    reader.onerror = () => {
      setParseErrors(['Failed to read file. Please try again.']);
      setIsProcessingFile(false);
    };

    reader.readAsText(file);
  };

  // Confirm Bulk Upload & Save to Database
  const handleConfirmImport = () => {
    if (parsedPreviewPackages.length === 0) return;

    // Enforce batch_source = 'mmt_sync' on all imported packages
    const sanitizedToImport = parsedPreviewPackages.map((p) => ({
      ...p,
      batch_source: 'mmt_sync',
    }));

    cloudStore.saveCustomPackages(sanitizedToImport);
    refreshCatalogData();
    setIsUploadModalOpen(false);
    setUploadedFile(null);
    setParsedPreviewPackages([]);
    setActiveBatchFilter('mmt_sync');
    setCurrentPage(1);

    triggerNotification(
      `Successfully imported ${sanitizedToImport.length} MMT Sync packages into the database.`,
      'success'
    );
  };

  // Handle Delete All Legacy Packages
  const handleConfirmDeleteLegacy = () => {
    cloudStore.deleteLegacyPackages();
    refreshCatalogData();
    setIsDeleteModalOpen(false);
    setActiveBatchFilter('mmt_sync');
    setCurrentPage(1);

    triggerNotification(
      'All legacy packages have been deleted. Platform is now operating on MMT Sync packages.',
      'info'
    );
  };

  // Handle Restore Legacy Packages
  const handleRestoreLegacy = () => {
    cloudStore.restoreLegacyPackages();
    refreshCatalogData();
    triggerNotification('All legacy packages have been restored successfully.', 'success');
  };

  // Delete Single Custom Package
  const handleDeleteSinglePackage = (pkg: HolidayPackage) => {
    if (pkg.batch_source !== 'mmt_sync') {
      alert('Legacy catalog packages cannot be deleted individually. Use "Delete Legacy Packages" button to remove all legacy packages.');
      return;
    }

    if (confirm(`Are you sure you want to delete "${pkg.name}"?`)) {
      cloudStore.deleteCustomPackage(pkg.id);
      refreshCatalogData();
      triggerNotification(`Deleted package ${pkg.name}.`, 'info');
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Toast Notification Banner */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-2xl shadow-xl flex items-center space-x-3 text-xs font-bold border transition-all animate-in slide-in-from-top-2 ${
            notification.type === 'success'
              ? 'bg-emerald-900 text-emerald-100 border-emerald-700'
              : notification.type === 'error'
              ? 'bg-rose-900 text-rose-100 border-rose-700'
              : 'bg-indigo-900 text-indigo-100 border-indigo-700'
          }`}
        >
          {notification.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          {notification.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />}
          {notification.type === 'info' && <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />}
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="ml-2 hover:opacity-75">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Package CMS Catalog Manager</h1>
            <Badge variant="blue" className="text-[10px] font-black uppercase">
              Database V2
            </Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Bulk upload MMT Sync packages (.json & .csv), filter by batch source, and manage catalog lifecycle.
          </p>
        </div>

        {/* Header Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Download Sample Template Dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsTemplateMenuOpen(!isTemplateMenuOpen)}
              className="text-xs font-bold text-slate-700 flex items-center space-x-1.5 border-slate-300 hover:bg-slate-50"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Download Sample Template</span>
            </Button>

            {isTemplateMenuOpen && (
              <div className="absolute right-0 mt-1.5 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl z-30 p-2 space-y-1 animate-in fade-in">
                <button
                  onClick={() => {
                    downloadSampleCsv();
                    setIsTemplateMenuOpen(false);
                    triggerNotification('Downloaded sample CSV template.');
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-center space-x-2.5 text-xs text-slate-700 font-bold transition-colors cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="block font-black text-slate-900">Download CSV Template</span>
                    <span className="text-[10px] text-slate-500 font-normal">Excel / CSV spreadsheet format</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    downloadSampleJson();
                    setIsTemplateMenuOpen(false);
                    triggerNotification('Downloaded sample JSON template.');
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-center space-x-2.5 text-xs text-slate-700 font-bold transition-colors cursor-pointer"
                >
                  <FileCode className="w-4 h-4 text-brand-600 shrink-0" />
                  <div>
                    <span className="block font-black text-slate-900">Download JSON Template</span>
                    <span className="text-[10px] text-slate-500 font-normal">Standard JSON API schema</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Bulk Package Uploader Button */}
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setIsUploadModalOpen(true);
              setUploadedFile(null);
              setParsedPreviewPackages([]);
              setParseErrors([]);
            }}
            className="text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white flex items-center space-x-1.5 shadow-sm"
          >
            <Upload className="w-3.5 h-3.5 text-white" />
            <span>Bulk Upload Packages</span>
          </Button>

          {/* Delete / Restore Legacy Packages Button */}
          {!isLegacyDeleted ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDeleteModalOpen(true)}
              className="text-xs font-bold text-rose-700 border-rose-300 hover:bg-rose-50 flex items-center space-x-1.5"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-600" />
              <span>Delete Legacy Packages</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleRestoreLegacy}
              className="text-xs font-bold text-indigo-700 border-indigo-300 hover:bg-indigo-50 flex items-center space-x-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5 text-indigo-600" />
              <span>Restore Legacy Packages</span>
            </Button>
          )}
        </div>
      </div>

      {/* Legacy Deleted Status Banner */}
      {isLegacyDeleted && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-center justify-between text-xs text-amber-950 font-medium">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Legacy Packages are currently Deleted / Deactivated.</strong> Only verified MMT Sync packages are active on the site.
            </span>
          </div>
          <button
            onClick={handleRestoreLegacy}
            className="text-xs font-bold text-indigo-700 hover:underline flex items-center space-x-1 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-indigo-600" />
            <span>Restore All Legacy Packages</span>
          </button>
        </div>
      )}

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 bg-white border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Catalog</span>
            <Layers className="w-4 h-4 text-brand-600" />
          </div>
          <div className="mt-2 text-2xl font-black text-slate-900">{counts.total.toLocaleString('en-IN')}</div>
          <span className="text-[10px] text-slate-400 font-semibold">Active packages in memory</span>
        </Card>

        <Card className="p-4 bg-white border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 uppercase">MMT Sync (New)</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="mt-2 text-2xl font-black text-emerald-700">{counts.mmtSync.toLocaleString('en-IN')}</div>
          <span className="text-[10px] text-emerald-600 font-semibold">Uploaded via bulk importer</span>
        </Card>

        <Card className="p-4 bg-white border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Legacy Packages</span>
            <Compass className="w-4 h-4 text-slate-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-slate-700">
            {isLegacyDeleted ? '0 (Deleted)' : counts.legacy.toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-slate-400 font-semibold">
            {isLegacyDeleted ? 'Deactivated by admin' : 'Standard pre-loaded circuits'}
          </span>
        </Card>

        <Card className="p-4 bg-white border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Active View</span>
            <Filter className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="mt-2 text-2xl font-black text-indigo-700">
            {filteredPackages.length.toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-slate-400 font-semibold">
            Showing {activeBatchFilter === 'all' ? 'All' : activeBatchFilter === 'mmt_sync' ? 'MMT Sync' : 'Legacy'} packages
          </span>
        </Card>
      </div>

      {/* Filter Toolbar Card */}
      <Card className="p-4 bg-white border-slate-200 space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Segmented Filter Toggle: All vs Legacy vs MMT Sync */}
          <div className="flex items-center p-1 bg-slate-100 rounded-2xl text-xs font-bold self-start lg:self-auto">
            <button
              onClick={() => {
                setActiveBatchFilter('all');
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeBatchFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Packages ({counts.total})
            </button>

            <button
              onClick={() => {
                setActiveBatchFilter('mmt_sync');
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeBatchFilter === 'mmt_sync'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>MMT Sync ({counts.mmtSync})</span>
            </button>

            <button
              onClick={() => {
                setActiveBatchFilter('legacy');
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeBatchFilter === 'legacy' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Legacy ({isLegacyDeleted ? 0 : counts.legacy})</span>
            </button>
          </div>

          {/* Search & Destination Filters */}
          <div className="flex flex-wrap items-center gap-2 flex-1 lg:justify-end">
            {/* Search Input */}
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search packages, city, ID..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-500 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Destination Dropdown */}
            <select
              value={selectedDestination}
              onChange={(e) => {
                setSelectedDestination(e.target.value);
                setCurrentPage(1);
              }}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-bold focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option value="all">All Destinations ({destinationsList.length})</option>
              {destinationsList.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>

            {/* Page Size Selector */}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-slate-700 font-bold focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option value={25}>25 / page</option>
              <option value={50}>50 / page</option>
              <option value={100}>100 / page</option>
            </select>
          </div>
        </div>

        {/* Packages Table View */}
        <div className="overflow-x-auto border border-slate-100 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 font-black uppercase text-[10px] tracking-wider">
                <th className="p-3">Package Details</th>
                <th className="p-3">Destination</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Starting Price</th>
                <th className="p-3">Category / Theme</th>
                <th className="p-3">Batch Source</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
              {paginatedPackages.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-xs">
                    No packages found matching your active filter.
                  </td>
                </tr>
              ) : (
                paginatedPackages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Package Name & ID */}
                    <td className="p-3 max-w-sm">
                      <div className="font-black text-slate-900 text-xs line-clamp-1">{pkg.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">ID: {pkg.id}</div>
                    </td>

                    {/* Destination */}
                    <td className="p-3 whitespace-nowrap">
                      <span className="font-bold text-slate-800">{pkg.destination}</span>
                      <span className="block text-[10px] text-slate-400">{pkg.country}</span>
                    </td>

                    {/* Duration */}
                    <td className="p-3 whitespace-nowrap">
                      <span className="font-bold text-slate-800">
                        {pkg.durationDays}D / {pkg.durationNights}N
                      </span>
                    </td>

                    {/* Pricing */}
                    <td className="p-3 whitespace-nowrap">
                      <div className="font-black text-brand-700">{formatCurrency(pkg.startingPrice)}</div>
                      {pkg.discountPrice && (
                        <div className="text-[10px] text-slate-400 line-through">
                          {formatCurrency(pkg.discountPrice)}
                        </div>
                      )}
                    </td>

                    {/* Category */}
                    <td className="p-3 whitespace-nowrap">
                      <span className="bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded text-[10px]">
                        {pkg.theme}
                      </span>
                    </td>

                    {/* Batch Source Tag */}
                    <td className="p-3 whitespace-nowrap">
                      {pkg.batch_source === 'mmt_sync' ? (
                        <span className="inline-flex items-center space-x-1 bg-emerald-100 text-emerald-800 font-black text-[10px] px-2 py-0.5 rounded-full border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>mmt_sync</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 bg-slate-100 text-slate-700 font-bold text-[10px] px-2 py-0.5 rounded-full border border-slate-300">
                          <Compass className="w-3 h-3 text-slate-400" />
                          <span>legacy</span>
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="p-3 text-right whitespace-nowrap space-x-1">
                      <a
                        href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex p-1.5 text-slate-500 hover:text-brand-600 rounded-lg hover:bg-slate-100 transition-colors"
                        title="View Live on Website"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {pkg.batch_source === 'mmt_sync' && (
                        <button
                          onClick={() => handleDeleteSinglePackage(pkg)}
                          className="inline-flex p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Delete MMT Sync Package"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500 font-medium">
          <div>
            Showing {(currentPage - 1) * pageSize + 1} to{' '}
            {Math.min(currentPage * pageSize, filteredPackages.length)} of {filteredPackages.length.toLocaleString('en-IN')}{' '}
            packages
          </div>

          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="text-xs font-bold px-2.5 py-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </Button>

            <span className="px-3 font-bold text-slate-700">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="text-xs font-bold px-2.5 py-1"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </Card>

      {/* ======================================================== */}
      {/* 1. BULK PACKAGE UPLOADER MODAL (.JSON & .CSV)             */}
      {/* ======================================================== */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-brand-600" />
                  <span>Bulk Package Uploader</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Import packages from MakeMyTrip or custom files (.json or .csv). All new items are automatically tagged as{' '}
                  <strong className="text-emerald-700 font-mono">batch_source = &apos;mmt_sync&apos;</strong>.
                </p>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drag & Drop File Upload Box */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) processSelectedFile(file);
              }}
              className="border-2 border-dashed border-slate-300 hover:border-brand-500 hover:bg-brand-50/30 rounded-2xl p-8 text-center cursor-pointer transition-all space-y-3"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.csv"
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto shadow-2xs">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-black text-slate-900 block">
                  {uploadedFile ? uploadedFile.name : 'Click to select or drag & drop .json / .csv file'}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Supports .json (Array of packages) and .csv (Excel / Spreadsheet)
                </span>
              </div>

              {uploadedFile && (
                <div className="text-[11px] font-bold text-brand-700 bg-brand-50 inline-block px-3 py-1 rounded-full">
                  Size: {(uploadedFile.size / 1024).toFixed(1)} KB • Status: Ready
                </div>
              )}
            </div>

            {/* Download Sample Quick Links */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-600">
              <span className="text-[11px]">Need the template format?</span>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={downloadSampleCsv}
                  className="text-[11px] text-emerald-700 hover:underline font-bold"
                >
                  Download Sample CSV
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={downloadSampleJson}
                  className="text-[11px] text-brand-700 hover:underline font-bold"
                >
                  Download Sample JSON
                </button>
              </div>
            </div>

            {/* Parsing Errors Banner */}
            {parseErrors.length > 0 && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-800 space-y-1">
                <div className="font-black flex items-center space-x-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Validation Notices ({parseErrors.length})</span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-[11px] font-medium">
                  {parseErrors.slice(0, 4).map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                  {parseErrors.length > 4 && <li>...and {parseErrors.length - 4} more warnings.</li>}
                </ul>
              </div>
            )}

            {/* Parse Preview Summary */}
            {parsedPreviewPackages.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-slate-900">
                    Validated Packages Ready to Import: ({parsedPreviewPackages.length})
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    batch_source: mmt_sync
                  </span>
                </div>

                <div className="max-h-40 overflow-y-auto border border-slate-200 rounded-xl divide-y divide-slate-100 text-xs">
                  {parsedPreviewPackages.slice(0, 4).map((p, i) => (
                    <div key={i} className="p-2.5 flex items-center justify-between hover:bg-slate-50">
                      <div>
                        <span className="font-bold text-slate-900 block line-clamp-1">{p.name}</span>
                        <span className="text-[10px] text-slate-500">
                          {p.destination} • {p.durationDays}D/{p.durationNights}N • {p.theme}
                        </span>
                      </div>
                      <span className="font-black text-brand-700">{formatCurrency(p.startingPrice)}</span>
                    </div>
                  ))}
                  {parsedPreviewPackages.length > 4 && (
                    <div className="p-2 text-center text-[10px] text-slate-400 font-bold bg-slate-50">
                      + {parsedPreviewPackages.length - 4} more packages in file
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsUploadModalOpen(false)}
                className="text-xs font-bold"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                disabled={parsedPreviewPackages.length === 0}
                onClick={handleConfirmImport}
                className="text-xs font-black bg-brand-600 hover:bg-brand-700 text-white"
              >
                Import {parsedPreviewPackages.length} MMT Sync Packages
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. CONFIRMATION POPUP MODAL: DELETE ALL LEGACY PACKAGES   */}
      {/* ======================================================== */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mx-auto shadow-2xs">
              <Trash2 className="w-6 h-6 text-rose-600" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-black text-slate-900">Delete All Legacy Packages?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                This action will delete all <strong className="text-slate-900 font-bold">{counts.legacy.toLocaleString('en-IN')} legacy packages</strong> from the active platform.
                <br />
                <span className="block mt-1.5 text-emerald-800 font-bold bg-emerald-50 p-2 rounded-xl border border-emerald-200 text-[11px]">
                  ✓ Your newly uploaded MMT Sync packages ({counts.mmtSync}) will remain 100% untouched and live.
                </span>
              </p>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl text-[11px] text-amber-900 font-medium">
              💡 <strong>Safety Note:</strong> You can restore these legacy packages at any time using the &quot;Restore Legacy Packages&quot; button.
            </div>

            <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDeleteModalOpen(false)}
                className="text-xs font-bold"
              >
                Cancel / Keep Legacy
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleConfirmDeleteLegacy}
                className="text-xs font-black bg-rose-600 hover:bg-rose-700 text-white border-transparent"
              >
                Yes, Delete {counts.legacy.toLocaleString('en-IN')} Legacy Packages
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
