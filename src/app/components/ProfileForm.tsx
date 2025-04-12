/*'use client'
import { useProfile } from './ProfileProvider'
import { useState } from 'react'
import { UserWithProfile } from 'types/user';

export default function ProfileForm() {
  const { profile, refresh } = useProfile()

  const [formData, setFormData] = useState<{
    name: string;
    diabetesType: string;
    diagnosisDate: string;
    lastA1C: string;
    doctor: string;
  }>({
    name: profile?.name || '',
    diabetesType: profile?.diabetesType || '',
    diagnosisDate: profile?.diagnosisDate?.toISOString().split('T')[0] || '',
    lastA1C: profile?.lastA1C?.toString() || '',
    doctor: profile?.doctor || ''
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          lastA1C: parseFloat(formData.lastA1C) || null,
          diagnosisDate: formData.diagnosisDate || null
        })
      })
      await refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Add your form fields here /}
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Profile'}
      </button>
    </form>
  )
}
*/
'use client';
import { useProfile } from './ProfileProvider';
import { useState, useEffect } from 'react';

export default function ProfileForm() {
  const { profile, refresh } = useProfile();
  const [formData, setFormData] = useState({
    name: '',
    diabetesType: '',
    diagnosisDate: '',
    lastA1C: '',
    doctor: ''
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        diabetesType: profile.diabetesType || '',
        diagnosisDate: profile.diagnosisDate?.toISOString().split('T')[0] || '',
        lastA1C: profile.lastA1C?.toString() || '',
        doctor: profile.doctor || ''
      });
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      await refresh();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  if (!profile) return null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {/* Add your form fields here */}
      <div>
        <label>Name</label>
        <input
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      
      <button type="submit">Save Profile</button>
    </form>
  );
}