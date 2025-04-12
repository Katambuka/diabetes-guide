// src/components/ProfileProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface Profile {
  id: number
  name: string
  email: string
  diabetesType?: string
  lastA1C?: number
  diagnosisDate?: Date
  doctor?: string
  // Add other profile fields you need
}

interface ProfileContextType {
  profile: Profile | null
  loading: boolean
  error: string | null
  refreshSession: () => Promise<void>
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProfile = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include'
      })
      
      if (!response.ok) {
        throw new Error(response.statusText || 'Failed to fetch profile')
      }

      const profileData = await response.json()
      setProfile(profileData)
    } catch (err) {
      console.error('Failed to fetch profile:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
      setProfile(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContext.Provider value={{ 
      profile, 
      loading,
      error,
      refreshSession: fetchProfile
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }
  return context
}