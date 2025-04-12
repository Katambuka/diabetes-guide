
//app/api/auth/logout/route.ts
/*import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  (await cookies()).delete('auth_token');
  return NextResponse.json({ message: 'Logout successful' });
}*/

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = cookies();
    
    // Check if token exists before trying to delete
    const token = cookieStore.get('auth_token');
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'No active session' },
        { status: 400 }
      );
    }

    // Clear the cookie with proper attributes
    cookieStore.delete('auth_token');
    
    return NextResponse.json(
      { success: true, message: 'Logout successful' },
      {
        headers: {
          'Set-Cookie': `auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
        }
      }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Logout failed' },
      { status: 500 }
    );
  }
}