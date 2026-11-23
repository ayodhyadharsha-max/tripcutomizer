import { NextResponse } from 'next/server';
import { HolidayPackage } from '@/data/packagesData';
import getSupabaseServer from '@/lib/supabaseServer';
import {
  mapSupabaseRowToPackage,
  saveServerCustomPackages,
  getServerCustomPackages,
  deleteServerCustomPackage,
  setServerLegacyDeleted,
  getServerIsLegacyDeleted,
} from '@/lib/serverPackageStore';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug')?.toLowerCase().trim();
    const id = searchParams.get('id')?.toLowerCase().trim();
    const queryParam = slug || id || '';

    const supabaseServer = getSupabaseServer();

    // 1. Single package lookup by slug or id
    if (queryParam) {
      if (supabaseServer) {
        const { data, error } = await supabaseServer
          .from('packages')
          .select('*')
          .or(`slug.eq.${queryParam},id.eq.${queryParam}`)
          .maybeSingle();

        if (error) {
          console.warn('[API GET /api/packages] Supabase query error:', error);
        } else if (data) {
          return NextResponse.json({
            success: true,
            package: mapSupabaseRowToPackage(data),
            source: 'supabase',
          });
        }
      }

      // Fallback to local server store
      const localPackages = getServerCustomPackages();
      const localMatch = localPackages.find(
        (p) =>
          p.slug.toLowerCase() === queryParam ||
          p.id.toLowerCase() === queryParam ||
          queryParam.includes(p.slug.toLowerCase()) ||
          p.slug.toLowerCase().includes(queryParam)
      );

      if (localMatch) {
        return NextResponse.json({ success: true, package: localMatch, source: 'local_store' });
      }

      return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
    }

    // 2. Query all custom/MMT packages
    if (supabaseServer) {
      const { data, error } = await supabaseServer
        .from('packages')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data) && data.length > 0) {
        const mapped = data.map(mapSupabaseRowToPackage);
        return NextResponse.json({
          success: true,
          packages: mapped,
          isLegacyDeleted: getServerIsLegacyDeleted(),
          total: mapped.length,
          source: 'supabase',
        });
      }
    }

    // Fallback to server local store
    const fallbackList = getServerCustomPackages();
    return NextResponse.json({
      success: true,
      packages: fallbackList,
      isLegacyDeleted: getServerIsLegacyDeleted(),
      total: fallbackList.length,
      source: 'local_store',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to fetch packages' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawPackages = body.packages || (body.name ? [body] : []);

    if (!Array.isArray(rawPackages) || rawPackages.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No package data provided in request body.' },
        { status: 400 }
      );
    }

    // Prepare rows for Supabase database table
    const rows = rawPackages.map((p: any) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      destination: p.destination,
      destination_slug: p.destinationSlug || p.destination_slug,
      duration_days: Number(p.durationDays ?? p.duration_days ?? 5),
      duration_nights: Number(p.durationNights ?? p.duration_nights ?? 4),
      starting_price: Number(p.startingPrice ?? p.starting_price ?? 19999),
      discount_price: p.discountPrice ? Number(p.discountPrice) : null,
      theme: p.theme || 'Holiday Explorer',
      hotel_category: p.hotelCategory || p.hotel_category || '4-Star Deluxe',
      meal_plan: p.mealPlan || p.meal_plan || 'Breakfast Included',
      hero_image: p.heroImage || p.hero_image || `/destinations/${p.destinationSlug || 'kerala'}.jpg`,
      highlights: Array.isArray(p.highlights) ? p.highlights : [],
      inclusions: Array.isArray(p.inclusions) ? p.inclusions : [],
      exclusions: Array.isArray(p.exclusions) ? p.exclusions : [],
      itinerary: Array.isArray(p.itinerary) ? p.itinerary : [],
      hotels: Array.isArray(p.hotels) ? p.hotels : [],
      faqs: Array.isArray(p.faqs) ? p.faqs : [],
      batch_source: 'mmt_sync',
      is_international: Boolean(p.isInternational ?? p.is_international),
      rating: Number(p.rating || 4.8),
      reviews_count: Number(p.reviewsCount || 120),
      updated_at: new Date().toISOString(),
    }));

    const supabaseServer = getSupabaseServer();

    if (!supabaseServer) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Supabase server client not initialized. Missing NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY.',
        },
        { status: 500 }
      );
    }

    const { error: supaErr } = await supabaseServer
      .from('packages')
      .upsert(rows, { onConflict: 'id' });

    if (supaErr) {
      console.error('[API POST /api/packages] Supabase upsert error:', supaErr);
      return NextResponse.json(
        {
          success: false,
          error: `Supabase Error: ${supaErr.message}`,
          details: supaErr.details || supaErr.hint || supaErr.code || null,
        },
        { status: 400 }
      );
    }

    // Also sync to local server storage as secondary cache
    await saveServerCustomPackages(rawPackages).catch(() => {});

    return NextResponse.json({
      success: true,
      count: rows.length,
      message: `Successfully saved ${rows.length} packages to live Supabase database.`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error while saving packages' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const queryId = searchParams.get('id');

    let body: any = {};
    try {
      body = await req.json();
    } catch {}

    const id = body.id || queryId;
    const action = body.action;

    const supabaseServer = getSupabaseServer();

    if (action === 'delete_legacy') {
      if (supabaseServer) {
        await supabaseServer.from('packages').delete().eq('batch_source', 'legacy');
      }
      await setServerLegacyDeleted(true);
      return NextResponse.json({ success: true, message: 'Legacy packages deleted successfully' });
    }

    if (action === 'restore_legacy') {
      await setServerLegacyDeleted(false);
      return NextResponse.json({ success: true, message: 'Legacy packages restored successfully' });
    }

    if (id) {
      if (supabaseServer) {
        const { error } = await supabaseServer.from('packages').delete().eq('id', id);
        if (error) {
          return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }
      }
      await deleteServerCustomPackage(id).catch(() => {});
      return NextResponse.json({ success: true, message: `Package ${id} deleted successfully` });
    }

    return NextResponse.json(
      { success: false, error: 'Package ID or valid action required.' },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to perform delete operation' },
      { status: 500 }
    );
  }
}
