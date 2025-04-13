
'use client';
import { useProfile } from './ProfileProvider';
import { useState, useEffect } from 'react';

export default function ProfileForm() {
  const { profile, refreshSession } = useProfile();  
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
function refresh() {
  throw new Error('Function not implemented.');
}

