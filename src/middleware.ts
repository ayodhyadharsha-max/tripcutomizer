import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get('tc_admin_token')?.value ||
    request.cookies.get('admin_token')?.value ||
    request.cookies.get('tc_admin_session')?.value ||
    request.cookies.get('tc_auth_token')?.value ||
    request.cookies.get('tc_user')?.value;

  // Protect /admin routes, but allow /admin/login without redirection loop
  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    request.nextUrl.pathname !== '/admin/login' &&
    !token
  ) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
