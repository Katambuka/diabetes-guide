
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProfileProvider } from './components/ProfileProvider'
import { Providers } from './providers'
import { Suspense } from 'react'
import { GlobalSkeleton } from './components/ui/GlobalSkeleton'


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Diabetes Guide',
  description: 'Manage your diabetes effectively',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <ProfileProvider>
            <Suspense fallback={<GlobalSkeleton />}>
              {children}
            </Suspense>
          </ProfileProvider>
        </Providers>
      </body>
    </html>
  )
}