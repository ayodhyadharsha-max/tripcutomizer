'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminLoginPage() {
  const router = useRouter();
  const [adminEmail, setAdminEmail] = useState('admin@tripcustomizer.com');
  const [adminPassword, setAdminPassword] = useState('admin123');
  const [errorMsg, setErrorMsg] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: adminEmail,
          password: adminPassword,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setErrorMsg(data.error || 'Invalid Admin Email or Password. Access Denied.');
        setIsLoading(false);
        return;
      }

      router.push('/admin/dashboard');
    } catch {
      setErrorMsg('Network error. Unable to reach authentication server.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-200">
      <Card className="max-w-md w-full p-8 bg-slate-900 border-slate-800 rounded-3xl shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Trip Customizer Admin Portal</h1>
          <p className="text-xs text-slate-400">
            Protected Enterprise Operations Desk. Authorized Admin personnel only.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3.5 bg-rose-950/80 border border-rose-800 rounded-2xl text-rose-300 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleAdminLogin} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300 block mb-1">Admin Email / Username</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                required
                type="text"
                placeholder="admin@tripcustomizer.com or admin"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 font-semibold text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-300 block mb-1">Admin Passcode</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                required
                type="password"
                placeholder="admin123"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 font-semibold text-white focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            variant="accent"
            size="lg"
            className="w-full font-black py-3 text-slate-950 text-xs shadow-xl mt-2 cursor-pointer"
          >
            {isLoading ? 'VERIFYING CREDENTIALS...' : 'LOG IN TO ADMIN DESK →'}
          </Button>
        </form>

        <div className="p-3 bg-slate-950/80 rounded-2xl text-[11px] text-slate-400 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-slate-300">Default: <strong>admin@tripcustomizer.com</strong> / <strong>admin123</strong></span>
          </div>
          <button
            type="button"
            onClick={() => {
              setAdminEmail('admin@tripcustomizer.com');
              setAdminPassword('admin123');
              setErrorMsg('');
            }}
            className="w-full py-2 bg-brand-600/20 hover:bg-brand-600/40 border border-brand-500/40 text-brand-300 rounded-xl font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>✨ 1-Click Auto-Fill Admin Credentials</span>
          </button>
        </div>
      </Card>
    </div>
  );
}
