import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'TripCustomizer.apk');
    if (!fs.existsSync(filePath)) {
      return new NextResponse('APK file not found', { status: 404 });
    }

    const fileStream = fs.createReadStream(filePath);
    const stat = fs.statSync(filePath);

    // Convert ReadStream to ReadableStream for Next.js response
    const stream = new ReadableStream({
      start(controller) {
        fileStream.on('data', (chunk) => controller.enqueue(chunk));
        fileStream.on('end', () => controller.close());
        fileStream.on('error', (err) => controller.error(err));
      },
    });

    return new NextResponse(stream as any, {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="TripCustomizer.apk"',
        'Content-Length': stat.size.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('APK Download Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
