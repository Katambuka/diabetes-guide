'use client';
import Link from 'next/link'
import Image from 'next/image'
import { FiClock, FiCalendar, FiTag } from 'react-icons/fi'
import { allBlogPosts } from '@/data/page' 


export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Diabetes Health Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based articles and practical tips for managing diabetes
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
            All Topics
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
            Nutrition
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
            Lifestyle
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
            Medications
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
            Monitoring
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allBlogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-1.5" />
                    <span className="mr-4">{post.date}</span>
                    <FiClock className="mr-1.5" />
                    <span>{post.readTime}</span>
                  </div>
                  {post.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded flex items-center"
                        >
                          <FiTag className="mr-1" size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-16">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium">
              1
            </button>
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 font-medium">
              2
            </button>
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 font-medium">
              3
            </button>
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 font-medium">
              Next &rarr;
            </button>
          </nav>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated on Diabetes Care</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest articles, recipes, and research delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}