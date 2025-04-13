// app/auth/logout/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LogoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const logout = async () => {
      try {
        const res = await fetch('/api/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });

        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.message || 'Logout failed');
        }

        // Refresh to update auth state
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Logout failed');
      } finally {
        setLoading(false);
      }
    };

    logout();
  }, [router]);

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">
        {loading ? 'Logging out...' : error ? 'Logout Error' : 'Logged Out Successfully'}
      </h1>
      
      {loading ? (
        <p className="mb-6 text-gray-600">Please wait while we log you out...</p>
      ) : error ? (
        <>
          <p className="mb-6 text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </>
      ) : (
        <>
          <p className="mb-6 text-gray-600">
            You have been successfully logged out. Thank you for using our service.
          </p>
          <div className="space-y-4">
            <Link
              href="/auth/login"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center"
            >
              Login Again
            </Link>
            <Link
              href="/"
              className="block w-full border text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 text-center"
            >
              Return to Homepage
            </Link>
          </div>
        </>
      )}
    </div>
  );
}