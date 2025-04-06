// app/api/auth/forgot-password/route.ts
/*import { NextResponse } from 'next/server';
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
}*/

// app/api/auth/forgot-password/route.ts
/*
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from 'lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Input validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Security: return success even if user doesn't exist
      return NextResponse.json({ success: true });
    }

    // Create reset token (expires in 1 hour)
    const token = jwt.sign(
      { userId: user.id, purpose: 'password-reset' },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    // Store token in database
    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: token } as any 
    });

    // Create Mailtrap transporter
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });

    // Email options
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;
    
    const mailOptions = {
      from: '"Your App Name" <no-reply@yourapp.com>',
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>You requested a password reset. Click the link below to set a new password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}*/
// app/api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from 'lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const token = jwt.sign(
      { userId: user.id, purpose: 'password-reset' },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: token }
    });

    // Mailtrap configuration
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });

    await transporter.sendMail({
      from: '"Diabetes Guide" <no-reply@diabetesguide.com>',
      to: email,
      subject: 'Password Reset Request',
      html: `Reset link: <a href="${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}">Click here</a>`
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}