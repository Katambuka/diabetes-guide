
// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import prisma from 'lib/prisma';
interface User {
  id: string;
  email: string;
  name: string | null;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    // 1. Validate request body
    const { email, password }: LoginRequest = await req.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // 2. Find user with proper error handling
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      select: { id: true, email: true, name: true, password: true }
    });

    if (!user) {
      return invalidCredentialsResponse();
    }

    // 3. Verify password with timing-safe comparison
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return invalidCredentialsResponse();
    }

    // 4. Generate JWT token with proper typing
    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email
      },
      process.env.JWT_SECRET!,
      { 
        expiresIn: '7d',
        issuer: 'your-app-name'
      }
    );

    // 5. Set secure, HTTP-only cookie
    (await
      cookies()).set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict', 
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    // 6. Return sanitized user data
    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Helper functions
function invalidCredentialsResponse() {
  return NextResponse.json(
    { error: 'Invalid email or password' },
    { status: 401 }
  );
}

function sanitizeUser(user: User) {
  return {
    id: user.id,
    email: user.email,
    name: user.name
  };
}