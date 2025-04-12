'use client'; 
import Link from 'next/link';
import { useEffect, useState } from 'react';
import "./globals.css";
export default function Page() {
  const [authState, setAuthState] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include' 
        });
        
        if (response.ok) {
          setAuthState('authenticated');
        } else {
          setAuthState('unauthenticated');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setAuthState('unauthenticated');
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        setAuthState('unauthenticated');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (authState === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          <span className="text-indigo-600 font-medium">Loading your experience...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Floating Auth Button */}
      <div className="fixed top-6 right-6 z-50">
        {authState === 'authenticated' ? (
          <button 
            onClick={handleLogout}
            className="bg-white hover:bg-gray-50 text-indigo-600 px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg border border-indigo-100 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        ) : (
          <Link
            href="/auth/login" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In
          </Link>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-60 right-20 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-44 h-44 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl w-full relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {authState === 'authenticated' ? 'Welcome Back!' : 'Welcome to Diabetes Guide'}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {authState === 'authenticated'
                ? "Your personalized diabetes management resources are ready."
                : "Your complete resource for diabetes management and care."}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
            {authState === 'authenticated' ? (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-indigo-700">Your Dashboard</h2>
                <p className="text-lg text-gray-600">
                  Access your personalized tools, track your progress, and discover new resources tailored for you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <Link href="/dashboard/tracker" className="bg-indigo-50 hover:bg-indigo-100 p-6 rounded-xl transition-all group">
                    <div className="bg-indigo-100 group-hover:bg-indigo-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Health Tracker</h3>
                    <p className="text-gray-600 text-sm">Monitor your glucose levels and medication</p>
                  </Link>
                  
                  <Link href="/dashboard/resources" className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl transition-all group">
                    <div className="bg-blue-100 group-hover:bg-blue-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Resources</h3>
                    <p className="text-gray-600 text-sm">Educational materials and guides</p>
                  </Link>
                  
                  <Link href="/dashboard/community" className="bg-purple-50 hover:bg-purple-100 p-6 rounded-xl transition-all group">
                    <div className="bg-purple-100 group-hover:bg-purple-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
                    <p className="text-gray-600 text-sm">Connect with others and share experiences</p>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-indigo-700">Begin Your Journey</h2>
                <p className="text-lg text-gray-600">
                  Take control of your diabetes management with our comprehensive tools and resources.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <Link
                    href="/auth/login"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In to Your Account
                  </Link>
                  <Link
                    href="/auth/register"
                    className="bg-white hover:bg-gray-50 text-indigo-600 px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg border border-indigo-200 flex items-center justify-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Create New Account
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Explore Our Resources</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm">About Diabetes</Link>
                    <Link href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm">Nutrition Guide</Link>
                    <Link href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm">Exercise Tips</Link>
                    <Link href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm">FAQ</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Simple Branding Footer */}
      <div className="py-8 text-center text-sm text-gray-500 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Diabetes Guide. All rights reserved.</p>
          <p className="mt-2">Comprehensive diabetes management resources and tools</p>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}