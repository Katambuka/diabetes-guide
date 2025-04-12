//app/api/auth/me/route.ts
/*import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import prisma from 'lib/prisma'; 

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { user: null, message: 'No authentication token found' },
        { status: 200 }
      );
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    
    // Fetch user
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { 
        id: true, 
        name: true, 
        email: true,
        // Add other fields you need
      }
    });

    if (!user) {
      return NextResponse.json(
        { user: null, message: 'User not found' },
        { status: 200 }
      );
    }

    return NextResponse.json({ user });

  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { user: null, message: 'Authentication failed' },
      { status: 401 }
    );
  }
}*/

// app/api/me/route.ts
import { getServerSession } from 'next-auth'
import { authOptions } from 'lib/auth'
import { NextResponse } from 'next/server'
import prisma from 'lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return new NextResponse(null, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(session.user.id) }
  })

  return NextResponse.json(user)
}
