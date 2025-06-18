import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) return NextResponse.json({ error: 'No username provided' }, { status: 400 });

  const res = await fetch(`https://github.com/users/${username}/contributions`);
  const svg = await res.text();

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}

