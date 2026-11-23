import { NextResponse } from 'next/server';
import { HolidayPackage } from '@/data/packagesData';
import {
  getServerCustomPackages,
  getServerIsLegacyDeleted,
  setServerLegacyDeleted,
  saveServerCustomPackages,
  deleteServerCustomPackage,
  findServerPackage,
} from '@/lib/serverPackageStore';
import { findCatalogPackage, getAllCatalogPackages } from '@/data/packageCatalog';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug')?.toLowerCase().trim();
    const id = searchParams.get('id')?.toLowerCase().trim();
    const destination = searchParams.get('destination')?.toLowerCase().trim();

    // Specific single package lookup (e.g. from client view or fallback)
    if (slug || id) {
      const queryParam = slug || id || '';
      
      // 1. Look in server custom packages first
      const serverMatch = findServerPackage(destination || undefined, queryParam);
      if (serverMatch) {
        return NextResponse.json({ success: true, package: serverMatch, source: 'mmt_sync' });
      }

      // 2. Look in static catalog
      const catalogMatch = findCatalogPackage(destination || undefined, queryParam);
      if (catalogMatch && (catalogMatch.slug.toLowerCase() === queryParam || catalogMatch.id.toLowerCase() === queryParam)) {
        return NextResponse.json({ success: true, package: catalogMatch, source: 'catalog' });
      }

      return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
    }

    // All custom packages
    const packages = getServerCustomPackages();
    const isLegacyDeleted = getServerIsLegacyDeleted();

    return NextResponse.json({
      success: true,
      packages,
      isLegacyDeleted,
      total: packages.length,
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
        { success: false, error: 'No package data provided.' },
        { status: 400 }
      );
    }

    // Ensure all packages are tagged as mmt_sync
    const packagesToSave: HolidayPackage[] = rawPackages.map((p: any) => ({
      ...p,
      batch_source: 'mmt_sync',
    }));

    await saveServerCustomPackages(packagesToSave);

    return NextResponse.json({
      success: true,
      count: packagesToSave.length,
      message: `Successfully stored ${packagesToSave.length} packages to server database and storage.`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to save packages' },
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

    if (action === 'delete_legacy') {
      await setServerLegacyDeleted(true);
      return NextResponse.json({ success: true, message: 'Legacy packages deleted successfully' });
    }

    if (action === 'restore_legacy') {
      await setServerLegacyDeleted(false);
      return NextResponse.json({ success: true, message: 'Legacy packages restored successfully' });
    }

    if (id) {
      await deleteServerCustomPackage(id);
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
