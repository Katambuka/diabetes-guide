// src/components/InfoCard.tsx
'use client'

import { cn } from "lib/utils"

interface InfoCardProps {
  title: string
  value: string | null | undefined
  color: 'blue' | 'green' | 'purple' | 'amber' | 'red'
  icon: string
  className?: string
}

export function InfoCard({ 
  title, 
  value, 
  color, 
  icon,
  className
}: InfoCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-800 border-blue-200',
    green: 'bg-green-50 text-green-800 border-green-200',
    purple: 'bg-purple-50 text-purple-800 border-purple-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    red: 'bg-red-50 text-red-800 border-red-200'
  }

  return (
    <div className={cn(
      `${colorClasses[color]} p-4 rounded-lg border flex items-start gap-3`,
      className
    )}>
      <span className="text-xl mt-0.5">{icon}</span>
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-lg font-semibold">
          {value || 'Not specified'}
        </p>
      </div>
    </div>
  )
}