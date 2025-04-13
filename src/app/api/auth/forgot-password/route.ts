//api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import prisma from 'lib/prisma'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Input validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({ 
      where: { email } 
    })

    // Security: return generic success response even if user doesn't exist
    if (!user) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      )
    }

    // Create reset token (expires in 1 hour)
    const token = jwt.sign(
      { userId: user.id, purpose: 'password-reset' },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    )

    // Update user with reset token
    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: token }
    })

    // Mailtrap configuration
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    })

    await transporter.sendMail({
      from: '"Your App" <no-reply@yourapp.com>',
      to: email,
      subject: 'Password Reset Request',
      html: `Reset link: <a href="${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}">Click here</a>`
    })

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}