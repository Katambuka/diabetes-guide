// app/api/auth/register/route.ts
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from 'lib/prisma'

interface RegisterRequest {
  email: string
  name?: string
  password: string
}

interface UserResponse {
  id: string
  email: string
  name?: string | null
}

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json() as RegisterRequest

    // Input validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name,
        password: hashedPassword
      },
      select: {
        id: true,
        email: true,
        name: true
      }
    }) as unknown as UserResponse

    return NextResponse.json(
      { user },
      { status: 201 }
    )

  } catch (error: unknown) {
    console.error('Registration error:', error)
    
    let errorMessage = 'Internal server error'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}