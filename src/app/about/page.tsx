// app/about/page.tsx
import Image from 'next/image';
import TeamCard from '../components/TeamCard';
import { FaHeartbeat, FaBookMedical, FaUsers } from 'react-icons/fa';

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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission: Better Diabetes Care</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering individuals with diabetes through evidence-based education, compassionate support, 
            and innovative tools since 2015.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2015 by a group of diabetes patients and healthcare professionals, 
                Diabetes Guide began as a small blog sharing personal experiences.
              </p>
              <p>
                Today, we have grown into a comprehensive platform serving over 250,000 monthly visitors 
                with medically-reviewed content, interactive tools, and a thriving community.
              </p>
              <p>
                What makes us different? All our content is reviewed by certified endocrinologists 
                and diabetes educators before publication.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
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
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Medical Accuracy</h3>
              <p className="text-gray-600">
                All content is reviewed by certified healthcare professionals to ensure 
                it meets current medical standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Compassionate Support</h3>
              <p className="text-gray-600">
                We understand the challenges of diabetes and provide judgment-free resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Continuous Innovation</h3>
              <p className="text-gray-600">
                Regularly updating our tools and content with the latest research and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-xl mb-8">
            Whether you are newly diagnosed or a long-time diabetes warrior, we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg">
              Sign Up Free
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg">
              Browse Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}