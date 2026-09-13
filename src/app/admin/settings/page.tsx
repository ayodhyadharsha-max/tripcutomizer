'use client';

import React, { useState } from 'react';
import { Settings, Shield, Key, UserCheck, Activity, Lock, Plus } from 'lucide-react';

interface SystemUser {
  id: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'FOREX_COMPLIANCE_OFFICER' | 'HOLIDAY_PRODUCT_MANAGER' | 'CRM_LEAD_AGENT';
  lastActive: string;
  status: 'ACTIVE' | 'SUSPENDED';
}

interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  ipAddress: string;
  status: 'SUCCESS' | 'DENIED' | 'FLAGGED';
}

const mockUsers: SystemUser[] = [
  { id: 'USR-01', name: 'Super Admin HQ', email: 'admin@wanderlustindia.com', role: 'SUPER_ADMIN', lastActive: 'Just now', status: 'ACTIVE' },
  { id: 'USR-02', name: 'Rajesh Kumar (RBI Officer)', email: 'forex-rbi@wanderlustindia.com', role: 'FOREX_COMPLIANCE_OFFICER', lastActive: '10 mins ago', status: 'ACTIVE' },
  { id: 'USR-03', name: 'Neha Sharma (Product Lead)', email: 'holidays@wanderlustindia.com', role: 'HOLIDAY_PRODUCT_MANAGER', lastActive: '2 hours ago', status: 'ACTIVE' },
  { id: 'USR-04', name: 'Amit Singh (Travel Agent)', email: 'agent.amit@wanderlustindia.com', role: 'CRM_LEAD_AGENT', lastActive: '1 day ago', status: 'ACTIVE' }
];

const mockLogs: AuditLog[] = [
  { id: 'LOG-9910', timestamp: '2026-09-12 12:44:02', user: 'admin@wanderlustindia.com', action: 'Approved Forex Order FX-88201 KYC', ipAddress: '103.22.14.92', status: 'SUCCESS' },
  { id: 'LOG-9909', timestamp: '2026-09-12 11:20:15', user: 'forex-rbi@wanderlustindia.com', action: 'Updated Tax Invoice Ref BK-98421', ipAddress: '103.22.14.95', status: 'SUCCESS' },
  { id: 'LOG-9908', timestamp: '2026-09-12 09:15:30', user: 'agent.amit@wanderlustindia.com', action: 'Created Custom Tour Quote QT-4421', ipAddress: '49.207.12.11', status: 'SUCCESS' },
  { id: 'LOG-9907', timestamp: '2026-09-11 18:02:11', user: 'unknown@external-ip.net', action: 'Failed Auth Attempt on /admin/settings', ipAddress: '185.220.101.5', status: 'FLAGGED' }
];

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<'USERS' | 'LOGS' | 'SECURITY'>('USERS');
  const [users, setUsers] = useState<SystemUser[]>(mockUsers);

  const toggleUserStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE' } : u
      )
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Settings className="w-6 h-6 text-brand-600" />
            RBAC Access Control & Audit Security Logs
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Configure Role-Based Access Control, system operator permissions, and inspect immutable audit trail logs.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-6 text-xs font-bold">
        <button
          onClick={() => setActiveTab('USERS')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'USERS' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <UserCheck className="w-4 h-4" /> System Users & RBAC Roles ({users.length})
        </button>
        <button
          onClick={() => setActiveTab('LOGS')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'LOGS' ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Activity className="w-4 h-4" /> Real-time Audit Trail Logs
        </button>
      </div>

      {/* Tab 1: Users */}
      {activeTab === 'USERS' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Operator Name & Email</th>
                  <th className="py-3.5 px-4">Assigned RBAC Role</th>
                  <th className="py-3.5 px-4">Last Activity</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-extrabold text-slate-900 block">{u.name}</span>
                      <span className="text-[10px] text-slate-500">{u.email}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="bg-slate-100 border border-slate-200 rounded px-2.5 py-1 text-[10px] font-bold text-slate-800">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">{u.lastActive}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          u.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => toggleUserStatus(u.id)}
                        className="text-[11px] font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-lg"
                      >
                        {u.status === 'ACTIVE' ? 'Suspend Access' : 'Reactivate Access'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Logs */}
      {activeTab === 'LOGS' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Timestamp</th>
                  <th className="py-3.5 px-4">User Account</th>
                  <th className="py-3.5 px-4">Action Performed</th>
                  <th className="py-3.5 px-4">IP Address</th>
                  <th className="py-3.5 px-4">Security Flag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockLogs.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-slate-500 font-mono">{l.timestamp}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{l.user}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">{l.action}</td>
                    <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">{l.ipAddress}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                          l.status === 'SUCCESS'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                        }`}
                      >
                        {l.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
