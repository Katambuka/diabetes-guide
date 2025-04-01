
import Image from 'next/image';
import TeamCard from '../components/TeamCard';
import { FaHeartbeat, FaBookMedical, FaUsers } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Endocrinologist',
      bio: 'Board-certified diabetes specialist with 15+ years of clinical experience.',
      image: '/images/image9.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Nutritionist',
      bio: 'Diabetes educator specializing in meal planning and lifestyle changes.',
      image: '/images/image2.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'Community Manager',
      bio: 'Creates supportive programs for diabetes patients and families.',
      image: '/images/image4.jpg'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Community Members', icon: <FaUsers className="text-3xl" /> },
    { value: '500+', label: 'Medical Articles', icon: <FaBookMedical className="text-3xl" /> },
    { value: '24/7', label: 'Support Available', icon: <FaHeartbeat className="text-3xl" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="block mb-3 text-indigo-200">Diabetes Care Redefined</span>
            Our Mission & Vision
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Empowering individuals with diabetes through evidence-based education and compassionate support since 2015.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">From Small Blog to Trusted Resource</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Founded in 2015 by diabetes patients and healthcare professionals, we began as a personal blog sharing experiences.
              </p>
              <p>
                Today, we serve over 250,000 monthly visitors with medically-reviewed content, interactive tools, and a thriving community.
              </p>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Every piece of content is reviewed by certified endocrinologists before publication.
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
            <Image 
              src="/images/image7.jpg" 
              alt="Our team discussing diabetes care"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">
            Meet The Experts
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Dedicated Team</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-3">
            Passionate professionals committed to improving diabetes care
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard 
              key={member.name} 
              member={member} 
            />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-3">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Medical Accuracy",
                content: "All content reviewed by certified healthcare professionals to meet current standards.",
                icon: "🔍"
              },
              {
                title: "Compassionate Support",
                content: "Judgment-free resources from people who truly understand diabetes challenges.",
                icon: "❤️"
              },
              {
                title: "Continuous Innovation",
                content: "Regular updates with the latest research and technology in diabetes care.",
                icon: "🚀"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Whether newly diagnosed or a long-time diabetes warrior, we're here to support your journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/signup" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Sign Up Free <FiArrowRight />
            </Link>
            <Link 
              href="https://diabetes.org/" 
              className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Browse Resources <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}