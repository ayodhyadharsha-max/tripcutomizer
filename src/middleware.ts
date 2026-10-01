import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes via Server-Side Middleware
  if (pathname.startsWith('/admin')) {
    const authCookie =
      request.cookies.get('tc_admin_session') ||
      request.cookies.get('tc_auth_token') ||
      request.cookies.get('tc_user');

    if (!authCookie || !authCookie.value) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      loginUrl.searchParams.set('admin_required', 'true');
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
