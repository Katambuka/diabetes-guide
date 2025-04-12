'use client'

interface DashboardHeaderProps {
  name?: string | null
}

export default function DashboardHeader({ name }: DashboardHeaderProps) {
  return (
    <header className="text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome {name || 'Back'}!
      </h1>
      <p className="mt-2 text-gray-600">
        Manage your account settings and preferences
      </p>
    </header>
  )
}