'use client';

import React, { useState } from 'react';
import { Tag, Plus, CheckCircle2, Clock, Trash2, Edit, Copy } from 'lucide-react';

interface PromoCoupon {
  id: string;
  code: string;
  discountType: 'PERCENTAGE' | 'FLAT';
  discountValue: number;
  minBookingValue: number;
  productScope: string;
  validUntil: string;
  status: 'ACTIVE' | 'EXPIRED' | 'DISABLED';
  usageCount: number;
}

const mockCoupons: PromoCoupon[] = [
  { id: 'COP-101', code: 'EUROPE20000', discountType: 'FLAT', discountValue: 20000, minBookingValue: 150000, productScope: 'International Holidays', validUntil: '2026-10-31', status: 'ACTIVE', usageCount: 142 },
  { id: 'COP-102', code: 'FXFREE500', discountType: 'FLAT', discountValue: 500, minBookingValue: 50000, productScope: 'Forex Orders', validUntil: '2026-12-31', status: 'ACTIVE', usageCount: 890 },
  { id: 'COP-103', code: 'FLYGLOBAL10', discountType: 'PERCENTAGE', discountValue: 10, minBookingValue: 25000, productScope: 'Flights', validUntil: '2026-09-30', status: 'ACTIVE', usageCount: 412 },
  { id: 'COP-104', code: 'MONSOON15', discountType: 'PERCENTAGE', discountValue: 15, minBookingValue: 30000, productScope: 'Domestic Holidays', validUntil: '2026-08-31', status: 'EXPIRED', usageCount: 620 }
];

export default function AdminOffersPage() {
  const [coupons, setCoupons] = useState<PromoCoupon[]>(mockCoupons);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCode, setNewCode] = useState('');
  const [newDiscountType, setNewDiscountType] = useState<'PERCENTAGE' | 'FLAT'>('FLAT');
  const [newValue, setNewValue] = useState(1000);
  const [newMin, setNewMin] = useState(10000);
  const [newScope, setNewScope] = useState('All Products');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode) return;
    const created: PromoCoupon = {
      id: `COP-${Date.now().toString().slice(-3)}`,
      code: newCode.toUpperCase(),
      discountType: newDiscountType,
      discountValue: newValue,
      minBookingValue: newMin,
      productScope: newScope,
      validUntil: '2026-12-31',
      status: 'ACTIVE',
      usageCount: 0
    };
    setCoupons([created, ...coupons]);
    setShowCreateModal(false);
    setNewCode('');
  };

  const toggleCouponStatus = (id: string) => {
    setCoupons((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === 'ACTIVE' ? 'DISABLED' : 'ACTIVE' }
          : c
      )
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Tag className="w-6 h-6 text-brand-600" />
            Promotions & Coupon Management Engine
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Configure promotional voucher codes, minimum spend thresholds, instant discounts, and usage limits.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-brand-700 shadow-md shadow-brand-500/20"
        >
          <Plus className="w-4 h-4" /> Create New Promo Code
        </button>
      </div>

      {/* Grid of Coupons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map((c) => (
          <div key={c.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="font-mono font-black text-base text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-lg">
                {c.code}
              </span>
              <span
                className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                  c.status === 'ACTIVE'
                    ? 'bg-emerald-100 text-emerald-800'
                    : c.status === 'EXPIRED'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {c.status}
              </span>
            </div>

            <div className="space-y-1 text-xs text-slate-700">
              <p className="font-bold text-slate-900 text-sm">
                {c.discountType === 'FLAT' ? `Flat ₹${c.discountValue.toLocaleString('en-IN')} OFF` : `${c.discountValue}% Instant Discount`}
              </p>
              <p className="text-slate-500">Applicable on: <span className="font-semibold text-slate-800">{c.productScope}</span></p>
              <p className="text-slate-500">Min spend: <span className="font-semibold text-slate-800">₹{c.minBookingValue.toLocaleString('en-IN')}</span></p>
              <p className="text-slate-500">Valid until: <span className="font-semibold text-slate-800">{c.validUntil}</span></p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Redeemed: <span className="font-black text-slate-900">{c.usageCount} times</span></span>
              <button
                onClick={() => toggleCouponStatus(c.id)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors ${
                  c.status === 'ACTIVE'
                    ? 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                {c.status === 'ACTIVE' ? 'Disable Code' : 'Enable Code'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Coupon Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreate} className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-extrabold text-base text-slate-900">Create Promotional Coupon Code</h3>
              <button type="button" onClick={() => setShowCreateModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Coupon Code (Uppercase)</label>
                <input
                  type="text"
                  placeholder="e.g. DIWALI5000"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value)}
                  required
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono font-bold uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Discount Type</label>
                  <select
                    value={newDiscountType}
                    onChange={(e) => setNewDiscountType(e.target.value as any)}
                    className="w-full p-2 border border-slate-300 rounded-lg font-medium"
                  >
                    <option value="FLAT">Flat INR Amount</option>
                    <option value="PERCENTAGE">Percentage %</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Discount Value</label>
                  <input
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Min Booking Value (₹)</label>
                  <input
                    type="number"
                    value={newMin}
                    onChange={(e) => setNewMin(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Product Scope</label>
                  <select
                    value={newScope}
                    onChange={(e) => setNewScope(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg font-medium"
                  >
                    <option value="All Products">All Products</option>
                    <option value="International Holidays">International Holidays</option>
                    <option value="Domestic Holidays">Domestic Holidays</option>
                    <option value="Flights">Flights</option>
                    <option value="Forex Orders">Forex Orders</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t">
              <button type="button" onClick={() => setShowCreateModal(false)} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 rounded-xl">
                Publish Coupon Code
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
