'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Briefcase, ShieldCheck, Key } from 'lucide-react';

export default function AgentLoginPage() {
  const router = useRouter();
  const [agentId, setAgentId] = useState('AGENT-102');
  const [ssoToken, setSsoToken] = useState('pass1234');

  const handleAgentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/agent/dashboard');
  };

  return (
    <div className="bg-brand-950 min-h-screen py-12 flex items-center justify-center text-white">
      <Container className="max-w-md w-full">
        <Card className="p-8 bg-brand-900 rounded-3xl shadow-2xl border border-brand-800 text-slate-100">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-brand-500 text-white font-black text-xl rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg border border-brand-400">
              B2B
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Travel Agent SSO Portal</h1>
            <p className="text-xs text-slate-400 mt-1">Staff & Franchisee Lead Management & Quotation Desk</p>
          </div>

          <form onSubmit={handleAgentLogin} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-300 block mb-1">Agent Code / Employee ID</label>
              <input
                type="text"
                required
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                className="w-full bg-brand-950 border border-brand-700 rounded-xl px-3.5 py-2.5 font-bold text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>

            <div>
              <label className="font-bold text-slate-300 block mb-1">SSO Auth Token / Password</label>
              <input
                type="password"
                required
                value={ssoToken}
                onChange={(e) => setSsoToken(e.target.value)}
                className="w-full bg-brand-950 border border-brand-700 rounded-xl px-3.5 py-2.5 font-bold text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>

            <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm shadow-lg">
              STAFF LOGIN WITH SSO →
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-brand-800 text-center text-[11px] text-slate-400">
            Internal Portal. Authorized Staff Only. Logged for security audit.
          </div>
        </Card>
      </Container>
    </div>
  );
}
