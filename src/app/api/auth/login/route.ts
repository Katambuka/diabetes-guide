// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import prisma from 'lib/prisma';

export async function POST(req: Request) {
  console.log('Login request received');
  
  try {
    const { email, password } = await req.json();
    console.log('Login attempt for:', email);

    // 1. Find user
    const user = await prisma.user.findUnique({ 
      where: { email },
      select: { id: true, email: true, name: true, password: true }
    });
    console.log('User found:', user ? 'Yes' : 'No');

    if (!user) {
      console.log('User not found');
      return invalidResponse();
    }

    // 2. Compare passwords
    console.log('Comparing passwords...');
    const validPassword = await bcrypt.compare(password, user.password);
    console.log('Password valid:', validPassword);

    if (!validPassword) {
      console.log('Invalid password');
      return invalidResponse();
    }

    // 3. Create token (temporarily simplified)
    const token = JSON.stringify({ userId: user.id });
    console.log('Generated token:', token);

    // 4. Set cookie
    cookies().set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: false, // Disable secure for local testing
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    console.log('Cookie set successfully');

    return NextResponse.json({ 
      success: true,
      user: { id: user.id, email: user.email, name: user.name } 
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

function invalidResponse() {
  return NextResponse.json(
    { error: 'Invalid email or password' },
    { status: 401 }
  );
}