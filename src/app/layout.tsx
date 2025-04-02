import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/page'
import Footer from './components/Footer/page'
import VisitCounter from './components/VisitCounter'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diabetes Guide - Your Complete Resource',
  description: 'Comprehensive diabetes management resources, articles, and tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
            <VisitCounter /> 
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
