-- =========================================================
-- ⚡ SUPABASE SQL SCHEMA FOR TRIP CUSTOMIZER
-- Run this script in your Supabase Dashboard > SQL Editor
-- =========================================================

-- 1. CUSTOMERS TABLE
CREATE TABLE IF NOT EXISTS public.customers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    city TEXT,
    address TEXT,
    saved_travelers JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes for lightning-fast customer lookup
CREATE INDEX IF NOT EXISTS idx_customers_phone ON public.customers(phone);
CREATE INDEX IF NOT EXISTS idx_customers_email ON public.customers(email);

-- 2. BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS public.bookings (
    id TEXT PRIMARY KEY,
    reference_no TEXT NOT NULL UNIQUE,
    user_id TEXT REFERENCES public.customers(id) ON DELETE SET NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT,
    package_name TEXT NOT NULL,
    destination TEXT NOT NULL,
    travel_dates TEXT NOT NULL,
    travelers_count INTEGER DEFAULT 1,
    hotel_category TEXT,
    base_price NUMERIC(10, 2) DEFAULT 0,
    gst_amount NUMERIC(10, 2) DEFAULT 0,
    discount_amount NUMERIC(10, 2) DEFAULT 0,
    coupon_applied TEXT,
    payment_method TEXT,
    transaction_id TEXT,
    special_requests TEXT,
    total_amount NUMERIC(10, 2) DEFAULT 0,
    status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Completed', 'Cancelled')),
    payment_status TEXT DEFAULT 'Pending' CHECK (payment_status IN ('Paid', 'Partial', 'Pending')),
    passengers_list JSONB DEFAULT '[]'::jsonb,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes for high-speed admin and customer queries
CREATE INDEX IF NOT EXISTS idx_bookings_ref ON public.bookings(reference_no);
CREATE INDEX IF NOT EXISTS idx_bookings_phone ON public.bookings(customer_phone);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON public.bookings(customer_email);
CREATE INDEX IF NOT EXISTS idx_bookings_created ON public.bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);

-- 3. LEADS (CUSTOM TRIP INQUIRIES) TABLE
CREATE TABLE IF NOT EXISTS public.leads (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    destination TEXT NOT NULL,
    budget TEXT,
    travel_dates TEXT,
    travelers_count INTEGER DEFAULT 1,
    status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Converted', 'Closed')),
    source TEXT DEFAULT 'Website',
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes for Leads
CREATE INDEX IF NOT EXISTS idx_leads_phone ON public.leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_created ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);

-- 4. PACKAGES TABLE (WITH BATCH_SOURCE TRACKING)
CREATE TABLE IF NOT EXISTS public.packages (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    destination TEXT NOT NULL,
    destination_slug TEXT NOT NULL,
    duration_days INTEGER NOT NULL,
    duration_nights INTEGER NOT NULL,
    starting_price NUMERIC(10, 2) NOT NULL,
    discount_price NUMERIC(10, 2),
    theme TEXT,
    hotel_category TEXT,
    meal_plan TEXT DEFAULT 'Breakfast Included',
    hero_image TEXT,
    highlights JSONB DEFAULT '[]'::jsonb,
    inclusions JSONB DEFAULT '[]'::jsonb,
    exclusions JSONB DEFAULT '[]'::jsonb,
    itinerary JSONB DEFAULT '[]'::jsonb,
    hotels JSONB DEFAULT '[]'::jsonb,
    faqs JSONB DEFAULT '[]'::jsonb,
    batch_source TEXT DEFAULT 'legacy' NOT NULL, -- 'legacy' | 'mmt_sync'
    is_international BOOLEAN DEFAULT FALSE,
    rating NUMERIC(3, 2) DEFAULT 4.8,
    reviews_count INTEGER DEFAULT 120,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_packages_slug ON public.packages(slug);
CREATE INDEX IF NOT EXISTS idx_packages_batch_source ON public.packages(batch_source);
CREATE INDEX IF NOT EXISTS idx_packages_dest_slug ON public.packages(destination_slug);

-- =========================================================
-- 🔒 ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

-- Allow public access for app operations
CREATE POLICY "Allow public insert and read for customers" ON public.customers
    FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow public insert and read for bookings" ON public.bookings
    FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow public insert and read for leads" ON public.leads
    FOR ALL USING (true) WITH CHECK (true);

-- Packages RLS policies: SELECT, INSERT, UPDATE, DELETE
DROP POLICY IF EXISTS "Allow public read on packages" ON public.packages;
CREATE POLICY "Allow public read on packages" ON public.packages
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public write on packages" ON public.packages;
CREATE POLICY "Allow public write on packages" ON public.packages
    FOR ALL USING (true) WITH CHECK (true);
