import { NextResponse } from 'next/server';
import { verifyAdminRequest } from '@/lib/security/adminAuth';

export async function GET(req: Request) {
  const isAuth = verifyAdminRequest(req);
  if (!isAuth) {
    return NextResponse.json(
      { success: false, authenticated: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    authenticated: true,
    role: 'SUPER_ADMIN',
  });
}
