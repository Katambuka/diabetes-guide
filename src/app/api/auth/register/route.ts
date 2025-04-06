import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from 'lib/prisma';

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();
    
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    });

    return NextResponse.json({ 
      user: { id: user.id, email: user.email, name: user.name } 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
