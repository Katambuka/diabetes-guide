// app/api/auth/session/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from 'lib/prisma';
import { verifyToken } from 'lib/jwt';

export async function GET() {
  try {
    const token = (await cookies()).get('auth_token')?.value;
    if (!token) return noSessionResponse();

    const decoded = verifyToken(token); 
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true }
    });

    return user 
      ? NextResponse.json({ user })
      : noSessionResponse();
  } catch (error) {
    return noSessionResponse();
  }
}

function noSessionResponse() {
  return NextResponse.json({ user: null }, { status: 200 });
}

