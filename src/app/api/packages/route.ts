import { NextResponse } from 'next/server';
import { HolidayPackage } from '@/data/packagesData';
import { findCatalogPackage } from '@/data/packageCatalog';
import getSupabaseServer, { withTimeout, markSupabaseOffline, isSupabaseOffline } from '@/lib/supabaseServer';
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

    // 1. Single package lookup by slug or id
    if (queryParam) {
      // Check local server store first (0ms)
      const localPackages = getServerCustomPackages();
      const strippedParam = queryParam.replace(/^pkg-/, '');
      const localMatch = localPackages.find(
        (p) =>
          p.slug.toLowerCase() === queryParam ||
          p.id.toLowerCase() === queryParam ||
          p.slug.toLowerCase().replace(/^pkg-/, '') === strippedParam ||
          p.id.toLowerCase().replace(/^pkg-/, '') === strippedParam ||
          (queryParam.includes('vizag') && (p.slug.toLowerCase().includes('vizag') || p.name.toLowerCase().includes('vizag'))) ||
          (queryParam.includes('tirupati') && (p.slug.toLowerCase().includes('tirupati') || p.name.toLowerCase().includes('tirupati')))
      );

      if (localMatch) {
        return NextResponse.json({ success: true, package: localMatch, source: 'local_store' });
      }

      // Check static catalog
      const catalogMatch = findCatalogPackage('', queryParam);
      if (catalogMatch) {
        return NextResponse.json({ success: true, package: catalogMatch, source: 'catalog' });
      }

      // Check Supabase only if circuit breaker is not tripped
      if (!isSupabaseOffline()) {
        const supabaseServer = getSupabaseServer();
        if (supabaseServer) {
          try {
            const { data, error }: any = await withTimeout(
              supabaseServer
                .from('packages')
                .select('*')
                .or(`slug.eq.${queryParam},id.eq.${queryParam}`)
                .maybeSingle(),
              800,
              'Supabase package query timed out'
            );

            if (!error && data) {
              const mapped = mapSupabaseRowToPackage(data);
              saveServerCustomPackages([mapped]).catch(() => {});
              return NextResponse.json({
                success: true,
                package: mapped,
                source: 'supabase',
              });
            }
          } catch (supaErr: any) {
            console.warn('[API GET /api/packages] Supabase query note:', supaErr?.message || supaErr);
            markSupabaseOffline(60000);
          }
        }
      }

      return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
    }

    // 2. Query all custom/MMT packages
    if (!isSupabaseOffline()) {
      const supabaseServer = getSupabaseServer();
      if (supabaseServer) {
        try {
          const { data, error }: any = await withTimeout(
            supabaseServer
              .from('packages')
              .select('*')
              .order('created_at', { ascending: false }),
            1000,
            'Supabase packages query timed out'
          );

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
        } catch (supaErr: any) {
          console.warn('[API GET /api/packages] Supabase query note:', supaErr?.message || supaErr);
          markSupabaseOffline(60000);
        }
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

    // 1. Always save to local server storage as persistent cache
    await saveServerCustomPackages(rawPackages).catch(() => {});

    if (isSupabaseOffline()) {
      return NextResponse.json({
        success: true,
        count: rows.length,
        message: `Successfully saved ${rows.length} packages to server catalog. (Supabase is currently cooling down)`,
        source: 'server_store',
      });
    }

    const supabaseServer = getSupabaseServer();

    if (!supabaseServer) {
      return NextResponse.json({
        success: true,
        count: rows.length,
        message: `Successfully saved ${rows.length} packages to server catalog.`,
        source: 'server_store',
      });
    }

    try {
      const { error: supaErr }: any = await withTimeout(
        supabaseServer.from('packages').upsert(rows, { onConflict: 'id' }),
        2000,
        'Supabase upsert timed out'
      );

      if (supaErr) {
        console.warn('[API POST /api/packages] Supabase upsert note:', supaErr);
        return NextResponse.json({
          success: true,
          count: rows.length,
          warning: `Saved to server catalog. Supabase note: ${supaErr.message}`,
          source: 'server_store',
        });
      }

      return NextResponse.json({
        success: true,
        count: rows.length,
        message: `Successfully saved ${rows.length} packages to live Supabase database.`,
        source: 'supabase',
      });
    } catch (supaEx: any) {
      console.warn('[API POST /api/packages] Supabase connection exception:', supaEx);
      markSupabaseOffline(60000);
      return NextResponse.json({
        success: true,
        count: rows.length,
        warning: `Saved to server catalog. Supabase is currently paused or unreachable (${supaEx?.message || 'ENOTFOUND'}).`,
        source: 'server_store',
      });
    }
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
    const queryId = searchParams.get('id')?.trim();
    const querySlug = searchParams.get('slug')?.trim();

    let body: any = {};
    try {
      body = await req.json();
    } catch {}

    const id = (body.id || queryId || '').trim();
    const slug = (body.slug || querySlug || '').trim();
    const action = body.action;

    if (action === 'delete_legacy') {
      if (!isSupabaseOffline()) {
        const supabaseServer = getSupabaseServer();
        if (supabaseServer) {
          try {
            await withTimeout(
              supabaseServer.from('packages').delete().eq('batch_source', 'legacy'),
              1500,
              'Supabase delete legacy timed out'
            );
          } catch (e: any) {
            markSupabaseOffline(60000);
          }
        }
      }
      await setServerLegacyDeleted(true);
      return NextResponse.json({ success: true, message: 'Legacy packages deleted successfully' });
    }

    if (action === 'restore_legacy') {
      await setServerLegacyDeleted(false);
      return NextResponse.json({ success: true, message: 'Legacy packages restored successfully' });
    }

    if (id || slug) {
      const target = id || slug;
      if (!isSupabaseOffline()) {
        const supabaseServer = getSupabaseServer();
        if (supabaseServer) {
          try {
            const { error }: any = await withTimeout(
              supabaseServer
                .from('packages')
                .delete()
                .or(`id.eq.${target},slug.eq.${target}${slug ? `,slug.eq.${slug},id.eq.${slug}` : ''}`),
              1500,
              'Supabase delete timed out'
            );
            if (error) {
              console.warn('[API DELETE /api/packages] Supabase delete error:', error);
            }
          } catch (e: any) {
            markSupabaseOffline(60000);
          }
        }
      }
      await deleteServerCustomPackage(target, slug || undefined).catch(() => {});
      return NextResponse.json({ success: true, message: `Package ${target} deleted successfully` });
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
