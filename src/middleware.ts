import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get('admin_token')?.value ||
    request.cookies.get('tc_admin_session')?.value ||
    request.cookies.get('tc_auth_token')?.value ||
    request.cookies.get('tc_user')?.value;

  if (request.nextUrl.pathname.startsWith('/admin') && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
