
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
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

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        name: true,
        email: true,
        diabetesType: true,
        diagnosisDate: true,
        lastA1C: true,
        doctor: true
      }
    })

    return NextResponse.json(user || {})
  } catch (error) {
    console.error('Profile fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}