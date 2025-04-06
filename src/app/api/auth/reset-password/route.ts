// app/api/auth/reset-password/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from 'lib/prisma';

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { 
      email: string; 
      purpose: string 
    };

    if (decoded.purpose !== 'password-reset') {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 400 }
      );
    }

    // Update the user's password
    const hashedPassword = await bcrypt.hash(password, 12);
    await prisma.user.update({
      where: { email: decoded.email },
      data: { password: hashedPassword }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 400 }
    );
  }
}