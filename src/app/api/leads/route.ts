import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import getSupabaseServer from '@/lib/supabaseServer';

export interface ServerLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  destination: string;
  budget?: string;
  travelDates?: string;
  travelersCount?: number;
  status: 'New' | 'Contacted' | 'Converted' | 'Closed';
  createdAt: string;
  source?: string;
}

// In-memory cache fallback for leads
let memoryLeads: ServerLead[] = [
  {
    id: 'lead-sample-1',
    name: 'Mr rishabh jais',
    phone: '8881299358',
    email: 'rj906906@gmail.com',
    destination: 'Ayodhya – Varanasi – Prayagraj Classic Heritage',
    budget: '₹27,405',
    travelDates: '15 Oct 2026 - 20 Oct 2026',
    travelersCount: 2,
    status: 'Converted',
    createdAt: '2026-09-13T10:00:00.000Z',
    source: 'Confirmed Online Booking'
  }
];

const getDataFilePath = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch (e) {}
  }
  return path.join(dataDir, 'leads.json');
};

const loadLeadsFromFile = (): ServerLead[] => {
  try {
    const filePath = getDataFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.trim()) {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryLeads = parsed;
          return parsed;
        }
      }
    }
  } catch (e) {
    console.warn('[API Leads] File read info:', e);
  }
  return memoryLeads;
};

const saveLeadsToFile = (leads: ServerLead[]) => {
  memoryLeads = leads;
  try {
    const filePath = getDataFilePath();
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (e) {
    console.warn('[API Leads] File write info:', e);
  }
};

export async function GET() {
  let fileLeads = loadLeadsFromFile();
  let supabaseLeads: ServerLead[] = [];

  try {
    const supabaseServer = getSupabaseServer();
    if (supabaseServer) {
      const { data, error } = await supabaseServer
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data) && data.length > 0) {
        supabaseLeads = data.map((l: any) => ({
          id: l.id || `lead-${Date.now()}`,
          name: l.name || l.customer_name || l.customerName || 'Valued Client',
          phone: l.phone || l.customer_phone || l.customerPhone || l.mobile || '',
          email: l.email || l.customer_email || l.customerEmail || '',
          destination: l.destination || l.package_name || l.packageName || 'Holiday Package',
          budget: l.budget || '',
          travelDates: l.travel_dates || l.travelDates || '',
          travelersCount: Number(l.travelers_count || l.travelersCount || 1),
          status: l.status || 'New',
          createdAt: l.created_at || l.createdAt || new Date().toISOString(),
          source: l.source || 'Website Lead Form'
        }));
      }
    }
  } catch (err) {
    console.warn('[API Leads] Supabase GET info:', err);
  }

  const leadMap = new Map<string, ServerLead>();
  fileLeads.forEach((l) => leadMap.set(l.id, l));
  supabaseLeads.forEach((l) => leadMap.set(l.id, l));

  const merged = Array.from(leadMap.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json({ success: true, leads: merged });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const existing = loadLeadsFromFile();

    const newLead: ServerLead = {
      id: body.id || `lead-${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: body.name || 'Valued Client',
      phone: body.phone || '',
      email: body.email || '',
      destination: body.destination || 'Selected Destination',
      budget: body.budget || '',
      travelDates: body.travelDates || '',
      travelersCount: Number(body.travelersCount) || 1,
      status: body.status || 'New',
      createdAt: body.createdAt || new Date().toISOString(),
      source: body.source || 'Website Lead Form'
    };

    const updated = [newLead, ...existing.filter(l => l.id !== newLead.id)];
    saveLeadsToFile(updated);

    return NextResponse.json({ success: true, lead: newLead, leads: updated });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;
    const existing = loadLeadsFromFile();
    const updated = existing.map(l => (l.id === id ? { ...l, status } : l));
    saveLeadsToFile(updated);
    return NextResponse.json({ success: true, leads: updated });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
