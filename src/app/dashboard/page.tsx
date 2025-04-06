/*

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  FiHome, FiDroplet, FiPackage, FiActivity, 
  FiPieChart, FiBookOpen, FiLogOut,
  FiPlus, FiTrendingUp, FiBell, FiCalendar,
  FiBarChart2
} from 'react-icons/fi';

export default function Dashboard() {
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const [recentReadings, setRecentReadings] = useState<{value: number, time: string, type: string}[]>([]);
  const [medications, setMedications] = useState<{name: string, dosage: string, time: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch user profile
        const userRes = await fetch('/api/auth/me');
        const userData = await userRes.json();
        if (userRes.ok) {
          setUser(userData.user);
        }

        // Fetch recent glucose readings
        const readingsRes = await fetch('/api/readings/recent');
        const readingsData = await readingsRes.json();
        setRecentReadings(readingsData);

        // Fetch current medications
        const medsRes = await fetch('/api/medications/current');
        const medsData = await medsRes.json();
        setMedications(medsData);

      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation /}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <FiDroplet className="h-6 w-6 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">GlucoCare</span>
          </div>
          
          <div className="flex-1 flex flex-col pt-4 pb-4 overflow-y-auto">
            <nav className="flex-1 px-4 space-y-1">
              <Link href="/dashboard" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-indigo-50 text-indigo-700">
                <FiHome className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/dashboard/glucose" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiDroplet className="mr-3 h-5 w-5" />
                Glucose Tracker
              </Link>
              <Link href="/dashboard/medications" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiPackage className="mr-3 h-5 w-5" />
                Medications
              </Link>
              <Link href="/dashboard/nutrition" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiPieChart className="mr-3 h-5 w-5" />
                Nutrition
              </Link>
              <Link href="/dashboard/activity" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiActivity className="mr-3 h-5 w-5" />
                Activity
              </Link>
              <Link href="/dashboard/reports" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiBarChart2 className="mr-3 h-5 w-5" />
                Reports
              </Link>
              <Link href="/dashboard/education" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiBookOpen className="mr-3 h-5 w-5" />
                Education
              </Link>
            </nav>
          </div>

          {/* User Profile Section /}
          <div className="p-4 border-t border-gray-200">
            {user ? (
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {user.name?.charAt(0) || 'U'}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="ml-auto text-gray-400 hover:text-gray-500"
                  title="Sign out"
                >
                  <FiLogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link 
                  href="/auth/login" 
                  className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 text-center"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/register" 
                  className="w-full px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area /}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header /}
        <header className="md:hidden bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
          </div>
            <div className="flex items-center">
              <FiDroplet className="h-6 w-6 text-red-500" />
              <span className="ml-2 font-bold">GlucoCare</span>
            </div>
            
        </header>

        {/* Dashboard Content /}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {user ? (
            <>
              {/* Welcome Section /}
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-gray-600 mt-2">
                  Here's your diabetes management overview for {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}.
                </p>
              </div>
            </>
          ) : (
            <p className="text-gray-600">No user data available.</p>
          )}
        </main>
      </div>
    </div>
  );
}*/

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FiHome, FiDroplet, FiPackage, FiActivity, 
  FiPieChart, FiBookOpen, FiLogOut, FiUser,
  FiPlus, FiTrendingUp, FiBell, FiCalendar,
  FiBarChart2, FiSettings, FiHeart, FiEdit
} from 'react-icons/fi';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{
    name: string;
    email: string;
    profileComplete: boolean;
    lastLogin: string;
    memberSince: string;
  } | null>(null);
  
  const [healthData, setHealthData] = useState<{
    latestGlucose: { value: number; trend: string; time: string };
    a1c: number;
    targetRange: { min: number; max: number };
    timeInRange: number;
    medications: { name: string; dosage: string; frequency: string }[]
  }>({
    latestGlucose: { value: 0, trend: 'stable', time: '' },
    a1c: 0,
    targetRange: { min: 70, max: 180 },
    timeInRange: 0,
    medications: []
  });
  
  const [recentActivities, setRecentActivities] = useState<{ type: string; value?: number; name?: string; carbs?: number; duration?: string; time: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Simulate API calls with mock data
        const userResponse = await fetch('/api/auth/me');
        const userData = await userResponse.json();
        
        if (!userResponse.ok) {
          router.push('/auth/login');
          return;
        }
        
        setUser({
          name: userData.name || 'User',
          email: userData.email,
          profileComplete: userData.profileComplete || false,
          lastLogin: new Date().toLocaleString(),
          memberSince: new Date('2023-01-15').toLocaleDateString()
        });

        // Mock health data
        setHealthData({
          latestGlucose: {
            value: 132,
            trend: 'down',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          },
          a1c: 6.2,
          targetRange: { min: 70, max: 180 },
          timeInRange: 78,
          medications: [
            { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' },
            { name: 'Insulin Glargine', dosage: '20 units', frequency: 'Nightly' }
          ]
        });

        setRecentActivities([
          { type: 'glucose', value: 145, time: '2 hours ago' },
          { type: 'medication', name: 'Metformin', time: '4 hours ago' },
          { type: 'meal', carbs: 45, time: '5 hours ago' },
          { type: 'activity', duration: '30 min', time: 'Yesterday' }
        ]);

      } catch (error) {
        console.error('Dashboard error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/auth/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <FiDroplet className="h-6 w-6 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">GlucoCare</span>
          </div>
          
          <div className="flex-1 flex flex-col pt-4 pb-4 overflow-y-auto">
            <nav className="flex-1 px-4 space-y-1">
              <Link href="/dashboard" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-indigo-50 text-indigo-700">
                <FiHome className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/dashboard/glucose" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiDroplet className="mr-3 h-5 w-5" />
                Glucose Tracker
              </Link>
              <Link href="/dashboard/medications" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiPackage className="mr-3 h-5 w-5" />
                Medications
              </Link>
              <Link href="/dashboard/nutrition" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiPieChart className="mr-3 h-5 w-5" />
                Nutrition
              </Link>
              <Link href="/dashboard/activity" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiActivity className="mr-3 h-5 w-5" />
                Activity
              </Link>
              <Link href="/dashboard/reports" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiBarChart2 className="mr-3 h-5 w-5" />
                Reports
              </Link>
              <Link href="/dashboard/education" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiBookOpen className="mr-3 h-5 w-5" />
                Education
              </Link>
              <Link href="/dashboard/settings" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <FiSettings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>

          {/* User Profile Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FiUser className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="ml-auto text-gray-400 hover:text-gray-500"
                title="Sign out"
              >
                <FiLogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <FiDroplet className="h-6 w-6 text-red-500" />
              <span className="ml-2 font-bold">GlucoCare</span>
            </div>
            <button className="p-1 rounded-md text-gray-500 hover:text-gray-600">
              <FiBell className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {user ? (
            <>
              {/* Welcome Section */}
              <div className="mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Welcome back, {user.name}!
                    </h1>
                    <p className="text-gray-600 mt-2">
                      Here's your diabetes management overview for {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}.
                    </p>
                  </div>
                  {!user.profileComplete && (
                    <button className="flex items-center px-3 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium">
                      <FiEdit className="mr-1" /> Complete Profile
                    </button>
                  )}
                </div>
              </div>

              {/* Health Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Current Glucose</p>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold text-gray-900">
                          {healthData.latestGlucose.value}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">mg/dL</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {healthData.latestGlucose.time} • {healthData.latestGlucose.trend === 'down' ? '↓ Decreasing' : '→ Stable'}
                      </p>
                    </div>
                    <FiDroplet className={`h-6 w-6 ${
                      healthData.latestGlucose.value < healthData.targetRange.min ? 'text-blue-500' :
                      healthData.latestGlucose.value > healthData.targetRange.max ? 'text-red-500' :
                      'text-green-500'
                    }`} />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Estimated A1C</p>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold text-gray-900">
                          {healthData.a1c}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">%</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Last updated: 2 weeks ago
                      </p>
                    </div>
                    <FiTrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Time in Range</p>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold text-gray-900">
                          {healthData.timeInRange}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">%</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Target: 70-180 mg/dL
                      </p>
                    </div>
                    <FiBarChart2 className="h-6 w-6 text-green-500" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Active Medications</p>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold text-gray-900">
                          {healthData.medications.length}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Next dose: Tonight
                      </p>
                    </div>
                    <FiPackage className="h-6 w-6 text-indigo-500" />
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Glucose Chart Placeholder */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-gray-900">Glucose Trends</h2>
                      <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
                        <option>Last 24 hours</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                      </select>
                    </div>
                    <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center text-gray-400">
                      [Glucose Chart Visualization]
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`flex-shrink-0 mt-1 ${
                            activity.type === 'glucose' ? 'text-red-500' :
                            activity.type === 'medication' ? 'text-indigo-500' :
                            activity.type === 'meal' ? 'text-yellow-500' :
                            'text-green-500'
                          }`}>
                            {activity.type === 'glucose' && <FiDroplet className="h-5 w-5" />}
                            {activity.type === 'medication' && <FiPackage className="h-5 w-5" />}
                            {activity.type === 'meal' && <FiPieChart className="h-5 w-5" />}
                            {activity.type === 'activity' && <FiActivity className="h-5 w-5" />}
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {activity.type === 'glucose' && `Glucose recorded: ${activity.value} mg/dL`}
                              {activity.type === 'medication' && `Took medication: ${activity.name}`}
                              {activity.type === 'meal' && `Logged meal: ${activity.carbs}g carbs`}
                              {activity.type === 'activity' && `Completed activity: ${activity.duration}`}
                            </p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                      View all activity →
                    </button>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Account Summary */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Summary</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="text-gray-900">{user.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-900">{user.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="text-gray-900">{user.memberSince}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Last Login</p>
                        <p className="text-gray-900">{user.lastLogin}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Profile Completion</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                          <div 
                            className={`h-2.5 rounded-full ${
                              user.profileComplete ? 'bg-green-500' : 'bg-yellow-500'
                            }`} 
                            style={{ width: user.profileComplete ? '100%' : '65%' }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {user.profileComplete ? 'Complete' : '65% Complete'}
                        </p>
                      </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <FiSettings className="mr-2 h-4 w-4" />
                      Account Settings
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex flex-col items-center p-3 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                        <FiPlus className="h-5 w-5 mb-1" />
                        <span className="text-sm">Add Glucose</span>
                      </button>
                      <button className="flex flex-col items-center p-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100">
                        <FiActivity className="h-5 w-5 mb-1" />
                        <span className="text-sm">Log Activity</span>
                      </button>
                      <button className="flex flex-col items-center p-3 rounded-lg bg-yellow-50 text-yellow-700 hover:bg-yellow-100">
                        <FiPieChart className="h-5 w-5 mb-1" />
                        <span className="text-sm">Record Meal</span>
                      </button>
                      <button className="flex flex-col items-center p-3 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100">
                        <FiPackage className="h-5 w-5 mb-1" />
                        <span className="text-sm">Add Medication</span>
                      </button>
                    </div>
                  </div>

                  {/* Health Tips */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Tip</h2>
                    <div className="flex items-start">
                      <FiHeart className="flex-shrink-0 h-5 w-5 text-red-500 mt-1" />
                      <div className="ml-3">
                        <p className="text-gray-900">
                          Staying hydrated can help manage blood sugar levels. Aim for 8-10 glasses of water daily.
                        </p>
                        <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                          Read more →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-gray-600 mb-4">No user data available</p>
                <Link 
                  href="/auth/login" 
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}