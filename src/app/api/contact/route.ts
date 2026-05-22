import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Mock: Store contact submission (in-memory or just acknowledge)
    console.log('Contact submission:', body);
    return NextResponse.json({ success: true, message: 'We will respond within 24 hours.' });
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 });
  }
}
