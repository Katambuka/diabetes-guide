
/*
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiActivity, FiDroplet, FiPieChart, FiHeart, FiSettings, FiUser, FiLogOut } from 'react-icons/fi';
import Image from 'next/image';
import Header from '../components/Header/page';
import Footer from '../components/Footer/page';

interface ProfileData {
  name: string;
  email: string;
  diabetesType: string;
  diagnosisYear: number;
  medications: string[];
  doctor: string;
  phone: string;
}

interface HealthMetrics {
  glucose: {
    current: number;
    targetRange: string;
    lastCheck: string;
    trend: string;
  };
  a1c: {
    value: number;
    target: string;
    lastTest: string;
  };
  activity: {
    steps: number;
    target: number;
    minutes: number;
    calories: number;
  };
  nutrition: {
    carbs: number;
    protein: number;
    fats: number;
    water: number;
  };
}

interface Reading {
  time: string;
  value: number;
  timeSince: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    diabetesType: 'Type 2',
    diagnosisYear: 2019,
    medications: ['Metformin', 'Insulin Glargine'],
    doctor: 'Dr. Sarah Williams',
    phone: '(555) 123-4567'
  });

  const healthMetrics: HealthMetrics = {
    glucose: {
      current: 112,
      targetRange: '70-130',
      lastCheck: '2 hours ago',
      trend: 'stable'
    },
    a1c: {
      value: 6.2,
      target: '<7.0',
      lastTest: '3 months ago'
    },
    activity: {
      steps: 8452,
      target: 10000,
      minutes: 35,
      calories: 420
    },
    nutrition: {
      carbs: 145,
      protein: 78,
      fats: 42,
      water: 5
    }
  };

  const recentReadings: Reading[] = [
    { time: 'Morning', value: 98, timeSince: '8:30 AM' },
    { time: 'Pre-Lunch', value: 112, timeSince: '12:15 PM' },
    { time: 'Post-Lunch', value: 148, timeSince: '2:45 PM' },
    { time: 'Evening', value: 121, timeSince: '6:30 PM' }
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowProfileModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your Custom Header /}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar /}
          <aside className="lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/profile-placeholder.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold">{profileData.name}</h2>
                <p className="text-sm text-gray-500">{profileData.diabetesType}</p>
              </div>
            </div>
            
            <nav>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiActivity className="h-5 w-5" />
                    <span>Overview</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('glucose')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'glucose' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiDroplet className="h-5 w-5" />
                    <span>Glucose</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('nutrition')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'nutrition' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiPieChart className="h-5 w-5" />
                    <span>Nutrition</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('activity')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'activity' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiHeart className="h-5 w-5" />
                    <span>Activity</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiSettings className="h-5 w-5" />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Dashboard Content /}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Health Overview</h2>
                
                {/* Health Stats Cards /}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">Glucose</h3>
                      <FiDroplet className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.glucose.current} <span className="text-sm font-normal text-gray-500">mg/dL</span></p>
                    <p className="text-sm text-gray-500">Target: {healthMetrics.glucose.targetRange}</p>
                    <p className={`text-xs mt-1 ${healthMetrics.glucose.trend === 'rising' ? 'text-red-500' : healthMetrics.glucose.trend === 'falling' ? 'text-blue-500' : 'text-green-500'}`}>
                      {healthMetrics.glucose.trend} • {healthMetrics.glucose.lastCheck}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">A1C</h3>
                      <FiActivity className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.a1c.value}%</p>
                    <p className="text-sm text-gray-500">Target: {healthMetrics.a1c.target}</p>
                    <p className="text-xs text-gray-500 mt-1">Last test: {healthMetrics.a1c.lastTest}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">Activity</h3>
                      <FiHeart className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.activity.steps.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Target: 10,000 steps</p>
                    <p className="text-xs text-gray-500 mt-1">{healthMetrics.activity.minutes} active minutes</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">Nutrition</h3>
                      <FiPieChart className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.nutrition.carbs}g</p>
                    <p className="text-sm text-gray-500">Carbs today</p>
                    <p className="text-xs text-gray-500 mt-1">{healthMetrics.nutrition.water} glasses water</p>
                  </div>
                </div>

                {/* Recent Readings /}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Recent Glucose Readings</h3>
                    <button className="text-indigo-600 text-sm font-medium">View All</button>
                  </div>
                  <div className="space-y-4">
                    {recentReadings.map((reading, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{reading.time}</p>
                          <p className="text-sm text-gray-500">{reading.timeSince}</p>
                        </div>
                        <div className={`text-lg font-bold ${
                          reading.value < 70 ? 'text-blue-500' : 
                          reading.value > 180 ? 'text-red-500' : 
                          'text-green-500'
                        }`}>
                          {reading.value} mg/dL
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions /}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiDroplet className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>Log Glucose</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiPieChart className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>Add Meal</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiHeart className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>Log Exercise</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiActivity className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>View Trends</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'glucose' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Glucose Management</h2>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <p className="text-gray-500">Glucose Trend Chart Placeholder</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Add New Reading</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Value (mg/dL)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option>Fasting (Morning)</option>
                          <option>Before Breakfast</option>
                          <option>After Breakfast</option>
                          <option>Before Lunch</option>
                          <option>After Lunch</option>
                          <option>Before Dinner</option>
                          <option>After Dinner</option>
                          <option>Bedtime</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                          rows={3}
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                        Save Reading
                      </button>
                    </form>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Target Ranges</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Fasting</span>
                          <span className="font-medium">80-130 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-2" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Before Meals</span>
                          <span className="font-medium">80-130 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-2" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>After Meals</span>
                          <span className="font-medium">Below 180 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-yellow-500 h-2" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Bedtime</span>
                          <span className="font-medium">90-150 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-2" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Profile</h3>
                    <button
                      onClick={() => setShowProfileModal(true)}
                      className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
                    >
                      <FiUser className="h-5 w-5" />
                      <span>Edit Profile Information</span>
                    </button>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Account</h3>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-800"
                    >
                      <FiLogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

       {/* Your Custom Footer /}
       <Footer />
      {/* Profile Modal /}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Profile Settings</h3>
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="#"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                    <button type="button" className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1 rounded-full">
                      <FiUser className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Diabetes Type</label>
                    <select 
                      value={profileData.diabetesType}
                      onChange={(e) => setProfileData({...profileData, diabetesType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Prediabetes</option>
                      <option>Gestational</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis Year</label>
                    <input 
                      type="number" 
                      value={profileData.diagnosisYear}
                      onChange={(e) => setProfileData({
                        ...profileData, 
                        diagnosisYear: parseInt(e.target.value) || 0
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Medications</label>
                  <input 
                    type="text" 
                    value={profileData.medications.join(', ')}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      medications: e.target.value.split(', ').filter(Boolean)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Doctor's Name</label>
                    <input 
                      type="text" 
                      value={profileData.doctor}
                      onChange={(e) => setProfileData({...profileData, doctor: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end space-x-3">
                  <button 
                    type="button"
                    onClick={() => setShowProfileModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}*/

'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiActivity, FiDroplet, FiPieChart, FiHeart, FiSettings, FiUser, FiLogOut, FiArrowRight, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import { Chart, registerables } from 'chart.js';
import { 
  ProfileData, 
  HealthMetrics, 
  Reading, 
  GlucoseChartData 
} from 'types/dashboard';
import Header from '../components/Header/page';
import Footer from '../components/Footer/page';

Chart.register(...registerables);

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const [chartInstance, setChartInstance] = useState<Chart | null>(null);

  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    diabetesType: 'Type 2',
    diagnosisYear: 2019,
    medications: ['Metformin', 'Insulin Glargine'],
    doctor: 'Dr. Sarah Williams',
    phone: '(555) 123-4567'
  });

  const healthMetrics: HealthMetrics = {
    glucose: {
      current: 112,
      targetRange: '70-130',
      lastCheck: '2 hours ago',
      trend: 'stable'
    },
    a1c: {
      value: 6.2,
      target: '<7.0',
      lastTest: '3 months ago'
    },
    activity: {
      steps: 8452,
      target: 10000,
      minutes: 35,
      calories: 420
    },
    nutrition: {
      carbs: 145,
      protein: 78,
      fats: 42,
      water: 5
    }
  };

  const recentReadings: Reading[] = [
    { time: 'Morning', value: 98, timeSince: '8:30 AM' },
    { time: 'Pre-Lunch', value: 112, timeSince: '12:15 PM' },
    { time: 'Post-Lunch', value: 148, timeSince: '2:45 PM' },
    { time: 'Evening', value: 121, timeSince: '6:30 PM' }
  ];

  const glucoseChartData: GlucoseChartData = {
    labels: ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
    values: [95, 102, 112, 148, 134, 118, 105, 98],
  };

  useEffect(() => {
    if (activeTab === 'glucose' && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance) {
          chartInstance.destroy();
        }

        const newChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: glucoseChartData.labels,
            datasets: [{
              label: 'Glucose Level (mg/dL)',
              data: glucoseChartData.values,
              borderColor: 'rgb(79, 70, 229)',
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              tension: 0.3,
              fill: true,
              pointBackgroundColor: 'rgb(79, 70, 229)',
              pointRadius: 5,
              pointHoverRadius: 7,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: false,
                title: {
                  display: true,
                  text: 'mg/dL'
                },
                min: 70,
                max: 200,
                ticks: {
                  stepSize: 20
                }
              }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context: { parsed: { y: any; }; }) => `${context.parsed.y} mg/dL`
                }
              }
            }
          }
        });
        setChartInstance(newChartInstance);
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [activeTab]);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowProfileModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/image1.jpg"
                  alt="Profile"
                  fill
                  sizes="70px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold">{profileData.name}</h2>
                <p className="text-sm text-gray-500">{profileData.diabetesType}</p>
              </div>
            </div>
            
            <nav>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiActivity className="h-5 w-5" />
                    <span>Overview</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('glucose')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'glucose' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiDroplet className="h-5 w-5" />
                    <span>Glucose</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('nutrition')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'nutrition' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiPieChart className="h-5 w-5" />
                    <span>Nutrition</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('activity')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'activity' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiHeart className="h-5 w-5" />
                    <span>Activity</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiSettings className="h-5 w-5" />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Dashboard Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Health Overview</h2>
                
                {/* Health Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">Glucose</h3>
                      <FiDroplet className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.glucose.current} <span className="text-sm font-normal text-gray-500">mg/dL</span></p>
                    <p className="text-sm text-gray-500">Target: {healthMetrics.glucose.targetRange}</p>
                    <p className={`text-xs mt-1 ${healthMetrics.glucose.trend === 'rising' ? 'text-red-500' : healthMetrics.glucose.trend === 'falling' ? 'text-blue-500' : 'text-green-500'}`}>
                      {healthMetrics.glucose.trend} • {healthMetrics.glucose.lastCheck}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">A1C</h3>
                      <FiActivity className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.a1c.value}%</p>
                    <p className="text-sm text-gray-500">Target: {healthMetrics.a1c.target}</p>
                    <p className="text-xs text-gray-500 mt-1">Last test: {healthMetrics.a1c.lastTest}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">Activity</h3>
                      <FiHeart className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.activity.steps.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Target: 10,000 steps</p>
                    <p className="text-xs text-gray-500 mt-1">{healthMetrics.activity.minutes} active minutes</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500">Nutrition</h3>
                      <FiPieChart className="h-5 w-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{healthMetrics.nutrition.carbs}g</p>
                    <p className="text-sm text-gray-500">Carbs today</p>
                    <p className="text-xs text-gray-500 mt-1">{healthMetrics.nutrition.water} glasses water</p>
                  </div>
                </div>

                {/* Recent Readings */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Recent Glucose Readings</h3>
                    <button className="text-indigo-600 text-sm font-medium">View All</button>
                  </div>
                  <div className="space-y-4">
                    {recentReadings.map((reading, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{reading.time}</p>
                          <p className="text-sm text-gray-500">{reading.timeSince}</p>
                        </div>
                        <div className={`text-lg font-bold ${
                          reading.value < 70 ? 'text-blue-500' : 
                          reading.value > 180 ? 'text-red-500' : 
                          'text-green-500'
                        }`}>
                          {reading.value} mg/dL
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiDroplet className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>Log Glucose</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiPieChart className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>Add Meal</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiHeart className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>Log Exercise</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-100 transition">
                      <FiActivity className="h-6 w-6 text-indigo-600 mb-2" />
                      <span>View Trends</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'glucose' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Glucose Management</h2>
                <div className="h-64 mb-6">
                  <canvas ref={chartRef} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Add New Reading</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Value (mg/dL)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option>Fasting (Morning)</option>
                          <option>Before Breakfast</option>
                          <option>After Breakfast</option>
                          <option>Before Lunch</option>
                          <option>After Lunch</option>
                          <option>Before Dinner</option>
                          <option>After Dinner</option>
                          <option>Bedtime</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                          rows={3}
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                        Save Reading
                      </button>
                    </form>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Target Ranges</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Fasting</span>
                          <span className="font-medium">80-130 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-2" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Before Meals</span>
                          <span className="font-medium">80-130 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-2" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>After Meals</span>
                          <span className="font-medium">Below 180 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-yellow-500 h-2" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Bedtime</span>
                          <span className="font-medium">90-150 mg/dL</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-2" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Profile</h3>
                    <button
                      onClick={() => setShowProfileModal(true)}
                      className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
                    >
                      <FiUser className="h-5 w-5" />
                      <span>Edit Profile Information</span>
                    </button>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Account</h3>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-800"
                    >
                      <FiLogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Profile Settings</h3>
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/images/profile-placeholder.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                    <button type="button" className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1 rounded-full">
                      <FiUser className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Diabetes Type</label>
                    <select 
                      value={profileData.diabetesType}
                      onChange={(e) => setProfileData({...profileData, diabetesType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Prediabetes</option>
                      <option>Gestational</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis Year</label>
                    <input 
                      type="number" 
                      value={profileData.diagnosisYear}
                      onChange={(e) => setProfileData({
                        ...profileData, 
                        diagnosisYear: parseInt(e.target.value) || 0
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Medications</label>
                  <input 
                    type="text" 
                    value={profileData.medications.join(', ')}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      medications: e.target.value.split(', ').filter(Boolean)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Doctor's Name</label>
                    <input 
                      type="text" 
                      value={profileData.doctor}
                      onChange={(e) => setProfileData({...profileData, doctor: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end space-x-3">
                  <button 
                    type="button"
                    onClick={() => setShowProfileModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}