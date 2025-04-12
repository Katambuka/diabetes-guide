'use client'
import Link from 'next/link'
import { Button } from './ui/button'

export default function LoginPrompt() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">Access Required</h2>
      <p className="text-gray-600 max-w-md text-center">
        Please sign in to view your dashboard
      </p>
      <Button asChild variant="default">
        <Link href="/login">Sign In</Link>
      </Button>
    </div>
  )
}