// components/Profile.tsx
/*'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    diabetesType: '',
    diagnosisDate: '',
    doctor: '',
    lastA1C: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/auth/profile');
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  if (loading) {
    return <div className="text-center py-8">Loading profile...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <span className="text-4xl text-indigo-600">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Diabetes Type</h4>
              <p className="text-lg">{user.diabetesType || 'Not specified'}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Diagnosis Date</h4>
              <p className="text-lg">{user.diagnosisDate || 'Not specified'}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Doctor</h4>
              <p className="text-lg">{user.doctor || 'Not specified'}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Last A1C</h4>
              <p className="text-lg">{user.lastA1C || 'Not recorded'}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Settings</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                Notification Preferences
              </button>
              <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                Data Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/

'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface UserProfile {
  name?: string;
  email?: string;
  diabetesType?: string;
  diagnosisDate?: Date;
  doctor?: string;
  lastA1C?: number;
}

export default function Profile() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      fetch('/api/auth/profile')
        .then(res => res.json())
        .then(data => {
          setProfile(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to fetch profile:', err);
          setLoading(false);
        });
    }
  }, [session]);

  if (loading) return <div>Loading profile...</div>;
  if (!profile) return <div>No profile data found</div>;

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p>Name: {profile.name || 'Not provided'}</p>
      <p>Email: {profile.email}</p>
      <p>Diabetes Type: {profile.diabetesType || 'Not specified'}</p>
      {/* Add other fields */}
    </div>
  );
}