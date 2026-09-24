import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const apkUrl = `${url.origin}/TripCustomizer.apk`;
  return NextResponse.redirect(apkUrl, 307);
}
