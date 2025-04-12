// app/client-layout-wrapper.tsx
'use client'

import { usePathname } from 'next/navigation'
import Header from './components/Header/page'
import Footer from './components/Footer/page'
import VisitCounter from './components/VisitCounter'
import { ProfileProvider } from './components/ProfileProvider'

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isWelcomePage = pathname === '/'

  if (isWelcomePage) {
    return <>{children}</>
  }

  return (
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
  )
}