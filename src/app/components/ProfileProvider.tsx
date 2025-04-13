'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface ProfileType {
  name: string
  email: string
  diabetesType?: string
  lastA1C?: number
  diagnosisDate?: Date
  doctor?: string
}

export interface ProfileContextType {
  profile: ProfileType | null
  loading: boolean
  error: string | null
  refreshSession: () => Promise<void>
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const refreshSession = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("No token found")

      const res = await fetch("/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (!res.ok) throw new Error("Failed to fetch profile")

      const data = await res.json()

      // Convert diagnosisDate string to Date object if present
      if (data.diagnosisDate) {
        data.diagnosisDate = new Date(data.diagnosisDate)
      }

      setProfile(data)
      setError(null)
    } catch (err: any) {
      console.error("Error refreshing session:", err)
      setError(err.message || "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshSession()
  }, [])

  return (
    <ProfileContext.Provider value={{ profile, loading, error, refreshSession }}>
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
