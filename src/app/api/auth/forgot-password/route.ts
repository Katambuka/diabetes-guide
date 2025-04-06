// app/api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from 'lib/prisma';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Don't reveal if user doesn't exist for security
      return NextResponse.json({ success: true });
    }

    // Create reset token (expires in 1 hour)
    const token = jwt.sign(
      { email, purpose: 'password-reset' },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    // In a real app, you would send an email here
    console.log('Password reset link:', `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}