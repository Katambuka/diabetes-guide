// src/app/providers.tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import { ProfileProvider } from './components/ProfileProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ProfileProvider>
        {children}
      </ProfileProvider>
    </SessionProvider>
  )
}