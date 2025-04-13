import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import prisma from 'lib/prisma'
import { authOptions } from 'lib/authOptions'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    const glucoseReadings = await prisma.glucoseReading.findMany({
      where: { 
        patient: { email: session.user.email } 
      },
      orderBy: { timestamp: 'desc' },
      take: 10
    })

    return NextResponse.json(glucoseReadings)
  } catch (error) {
    console.error('Glucose API error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { value, date, notes } = await request.json()

    const newReading = await prisma.glucoseReading.create({
      data: {
        value,
        patient: { connect: { email: session.user.email } }
      }
    })

    return NextResponse.json(newReading)
  } catch (error) {
    console.error('Glucose POST error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}