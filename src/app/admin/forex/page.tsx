'use client';

import React, { useState } from 'react';
import { DollarSign, ShieldAlert, CheckCircle2, XCircle, FileText, Search, Filter, Eye } from 'lucide-react';

interface ForexOrderRecord {
  id: string;
  customerName: string;
  phone: string;
  orderType: 'BUY_CARD' | 'BUY_CASH' | 'SELL_CARD' | 'RELOAD' | 'REMITTANCE';
  currencies: string;
  inrAmount: number;
  kycStatus: 'PENDING_VERIFICATION' | 'APPROVED' | 'REJECTED';
  passportNumber: string;
  panNumber: string;
  date: string;
}

const mockForexOrders: ForexOrderRecord[] = [
  { id: 'FX-88201', customerName: 'Rohan Mehta', phone: '+91 98200 12345', orderType: 'BUY_CARD', currencies: 'USD $3,000 | EUR €1,500', inrAmount: 387500, kycStatus: 'PENDING_VERIFICATION', passportNumber: 'Z1234567', panNumber: 'ABCDE1234F', date: '2026-09-12' },
  { id: 'FX-88202', customerName: 'Kavita Nair', phone: '+91 99112 88776', orderType: 'REMITTANCE', currencies: 'CAD $12,500 (University Fee)', inrAmount: 765000, kycStatus: 'PENDING_VERIFICATION', passportNumber: 'P9876543', panNumber: 'XYZPB9876K', date: '2026-09-12' },
  { id: 'FX-88203', customerName: 'Sanjay Kumar', phone: '+91 98450 33441', orderType: 'BUY_CASH', currencies: 'THB ฿45,000', inrAmount: 110250, kycStatus: 'APPROVED', passportNumber: 'M4433221', panNumber: 'JKLMN5544P', date: '2026-09-11' },
  { id: 'FX-88204', customerName: 'Deepika Rao', phone: '+91 97221 66554', orderType: 'RELOAD', currencies: 'GBP £2,000', inrAmount: 215000, kycStatus: 'APPROVED', passportNumber: 'K7766554', panNumber: 'QWERT8877L', date: '2026-09-11' },
  { id: 'FX-88205', customerName: 'Alok Gupta', phone: '+91 98334 11229', orderType: 'SELL_CARD', currencies: 'USD $1,200 (Unused FX)', inrAmount: 98400, kycStatus: 'REJECTED', passportNumber: 'L1122334', panNumber: 'POIUY3322M', date: '2026-09-10' }
];

export default function AdminForexPage() {
  const [orders, setOrders] = useState<ForexOrderRecord[]>(mockForexOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [kycFilter, setKycFilter] = useState<string>('ALL');
  const [inspectModal, setInspectModal] = useState<ForexOrderRecord | null>(null);

  const handleUpdateStatus = (id: string, newStatus: 'APPROVED' | 'REJECTED') => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, kycStatus: newStatus } : o))
    );
    if (inspectModal && inspectModal.id === id) {
      setInspectModal((prev) => (prev ? { ...prev, kycStatus: newStatus } : null));
    }
  };

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.passportNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.panNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesKyc = kycFilter === 'ALL' || o.kycStatus === kycFilter;
    return matchesSearch && matchesKyc;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-brand-600" />
            Forex Operations & RBI Compliance KYC Desk
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Audit Reserve Bank of India LRS documentation, verify passport & PAN uploads, approve currency dispatch.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-600" /> 2 Pending Compliance Audits
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search Order ID, Customer, Passport or PAN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
            <Filter className="w-3.5 h-3.5" /> KYC Status:
          </div>
          <select
            value={kycFilter}
            onChange={(e) => setKycFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 font-medium"
          >
            <option value="ALL">All KYC States</option>
            <option value="PENDING_VERIFICATION">Pending Audit</option>
            <option value="APPROVED">Approved & Dispatched</option>
            <option value="REJECTED">Rejected / Flagged</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Order ID & Date</th>
                <th className="py-3.5 px-4">Customer & Phone</th>
                <th className="py-3.5 px-4">Order Type</th>
                <th className="py-3.5 px-4">Currency Breakdown</th>
                <th className="py-3.5 px-4">Total (INR)</th>
                <th className="py-3.5 px-4">RBI Verification</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4">
                    <span className="font-extrabold text-slate-900 block">{o.id}</span>
                    <span className="text-[10px] text-slate-400">{o.date}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-900 block">{o.customerName}</span>
                    <span className="text-[10px] text-slate-500">{o.phone}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="bg-slate-100 border border-slate-200 rounded px-2 py-0.5 text-[10px] font-bold text-slate-800">
                      {o.orderType.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800 max-w-xs line-clamp-1">
                    {o.currencies}
                  </td>
                  <td className="py-3.5 px-4 font-black text-slate-900">
                    ₹{o.inrAmount.toLocaleString('en-IN')}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        o.kycStatus === 'APPROVED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : o.kycStatus === 'PENDING_VERIFICATION'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300 animate-pulse'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {o.kycStatus.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <button
                      onClick={() => setInspectModal(o)}
                      className="px-2.5 py-1 bg-slate-900 text-white rounded-lg hover:bg-slate-800 text-[11px] font-bold inline-flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> Audit KYC
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* KYC Inspection Modal */}
      {inspectModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">RBI Regulatory Compliance Inspector</h3>
                <p className="text-xs text-slate-500">Order ID: {inspectModal.id} | Customer: {inspectModal.customerName}</p>
              </div>
              <button onClick={() => setInspectModal(null)} className="text-slate-400 hover:text-slate-700 font-bold text-lg">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-200">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Submitted Identifiers</h4>
                <div className="space-y-1 text-slate-700">
                  <p><span className="font-semibold text-slate-500">Passport Number:</span> <span className="font-mono font-bold text-slate-900">{inspectModal.passportNumber}</span> (Verified against Immigration API)</p>
                  <p><span className="font-semibold text-slate-500">PAN Card:</span> <span className="font-mono font-bold text-slate-900">{inspectModal.panNumber}</span> (LRS Limit Active)</p>
                  <p><span className="font-semibold text-slate-500">Order Type:</span> {inspectModal.orderType}</p>
                  <p><span className="font-semibold text-slate-500">Currencies Requested:</span> {inspectModal.currencies}</p>
                  <p><span className="font-semibold text-slate-500">INR Equivalent:</span> <span className="font-black text-slate-900">₹{inspectModal.inrAmount.toLocaleString('en-IN')}</span></p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">Document Attachments</h4>
                  <div className="space-y-1.5">
                    <div className="bg-white p-2 rounded border border-slate-300 flex items-center justify-between">
                      <span className="font-medium flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-blue-600" /> Passport_Front_Scan.pdf</span>
                      <span className="text-[10px] text-emerald-600 font-bold">VALID</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-300 flex items-center justify-between">
                      <span className="font-medium flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-blue-600" /> Confirmed_AirTicket.pdf</span>
                      <span className="text-[10px] text-emerald-600 font-bold">VALID</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-300 flex items-center justify-between">
                      <span className="font-medium flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-blue-600" /> PAN_Card_Scan.jpg</span>
                      <span className="text-[10px] text-emerald-600 font-bold">VALID</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-xs text-slate-500 font-medium">
                Current Status: <span className="font-extrabold text-slate-900">{inspectModal.kycStatus}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdateStatus(inspectModal.id, 'REJECTED')}
                  className="px-4 py-2 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 rounded-xl text-xs font-bold flex items-center gap-1"
                >
                  <XCircle className="w-4 h-4" /> Reject KYC
                </button>
                <button
                  onClick={() => handleUpdateStatus(inspectModal.id, 'APPROVED')}
                  className="px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md shadow-emerald-500/20"
                >
                  <CheckCircle2 className="w-4 h-4" /> Approve & Dispatch Currency
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
