// app/client-layout.tsx
'use client'

import { usePathname } from 'next/navigation'
import Header from './components/Header/page'
import Footer from './components/Footer/page'
import VisitCounter from './components/VisitCounter'
import { ProfileProvider } from './components/ProfileProvider'
import { SessionProvider } from 'next-auth/react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isWelcomePage = pathname === '/'

  return (
    <SessionProvider>
      {isWelcomePage ? (
        <>{children}</>
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <ProfileProvider>
              {children}
            </ProfileProvider>
            <VisitCounter />
          </main>
          <Footer />
        </div>
      )}
    </SessionProvider>
  )
}