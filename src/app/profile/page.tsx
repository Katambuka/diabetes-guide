// src/app/profile/page.tsx
'use client'

import { useSession } from 'next-auth/react'
import { useProfile } from "../components/ProfileProvider"
import ProfileForm from "../components/ProfileForm"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { InfoCard } from '../components/InfoCard'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const { profile, loading, error, refreshSession } = useProfile()
  const router = useRouter()

  // Handle token refresh on mount
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          await refreshSession()
        }
      } catch (error) {
        console.error('Session refresh failed:', error)
      }
    }
    
    checkToken()
  }, [refreshSession])

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login?callbackUrl=/profile')
    }
  }, [status, router])

  if (status === 'loading' || loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600">Loading your profile...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading profile: {error}</p>
      </div>
    )
  }

  if (!session || !profile) {
    return null
  }

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
          <p className="text-xl opacity-90">
            {profile.name || session.user?.name || 'Welcome back!'}
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            
            {/* Profile Header with Avatar */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-32 relative">
              <div className="absolute -bottom-16 left-6">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-blue-600 text-5xl font-bold shadow-lg">
                  {profile.name?.charAt(0) || 'U'}
                </div>
              </div>
            </div>

            {/* Profile Body */}
            <div className="pt-20 px-6 pb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {profile.name || 'My Profile'}
                  </h2>
                  <p className="text-blue-600">{profile.email || session.user?.email}</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Active
                </span>
              </div>

              {/* Medical Info */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard 
                  title="Diabetes Type" 
                  value={profile.diabetesType} 
                  color="blue" 
                  icon="🩸"
                />
                <InfoCard 
                  title="Last A1C" 
                  value={profile.lastA1C ? `${profile.lastA1C}%` : 'Not specified'} 
                  color="green" 
                  icon="📊"
                />
                <InfoCard 
                  title="Diagnosis Date" 
                  value={profile.diagnosisDate?.toLocaleDateString() || 'Not specified'} 
                  color="purple" 
                  icon="📅"
                />
                <InfoCard 
                  title="Doctor" 
                  value={profile.doctor || 'Not specified'} 
                  color="amber" 
                  icon="👨‍⚕️"
                />
              </div>

              {/* Edit Form */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Update Your Information
                </h3>
                <ProfileForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}