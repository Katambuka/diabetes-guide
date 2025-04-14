'use client'

import LoadingSpinner from "../LoadingSpinner"


export function GlobalSkeleton() {
  return (
    <div className="container mx-auto p-4 space-y-6 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-10 bg-gray-100 rounded w-40"></div>
        <div className="flex space-x-4">
          <div className="h-10 bg-gray-100 rounded w-24"></div>
          <div className="h-10 bg-gray-100 rounded w-24"></div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-100 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-full"></div>
        <div className="h-4 bg-gray-100 rounded w-5/6"></div>
      </div>

      {/* Loading indicator */}
      <div className="flex justify-center py-8">
        <LoadingSpinner size="lg" />
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-40 bg-gray-100 rounded-lg"></div>
        ))}
      </div>
    </div>
  )
}