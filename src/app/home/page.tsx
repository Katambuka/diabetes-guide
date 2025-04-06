
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { categories } from "@/data/categories";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import CategoryLink from "../components/CategoryLink";


const articles = [
  {
    id: 1,
    title: "Understanding Diabetes: Types and Symptoms",
    excerpt: "Learn about the different types of diabetes...",
    slug: "understanding-type-2-diabetes",
    image: "/images/image6.jpg",
    category: "Diabetes Basics",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Healthy Eating for Diabetics: A Complete Guide",
    excerpt: "Discover the best foods to eat...",
    slug: "foods-for-blood-sugar-control",
    image: "/images/image8.jpg",
    category: "Nutrition",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Exercise and Diabetes: Creating Your Fitness Plan",
    excerpt: "Learn how physical activity affects...",
    slug: "exercise-for-diabetics",
    image: "/images/image6.jpg",
    category: "Lifestyle",
    readTime: "6 min read"
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="block mb-2 text-indigo-200">Diabetes Care</span>
              Your Personalized Path to Better Health
            </h1>
            <p className="text-xl text-indigo-100 max-w-lg">
              Evidence-based guidance and compassionate support to help you thrive with diabetes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/blog" 
                className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Explore Articles
              </Link>
              <Link 
                href="#" 
                className="border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                Support Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-4xl overflow-hidden shadow-4xl border-4 border-white/20">
            <Image
  src="/images/image1.jpg"
  alt="Description"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Stats Section with Modern Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "463M", label: "People with diabetes worldwide", color: "bg-indigo-100 text-indigo-700" },
              { value: "90%", label: "Of cases are Type 2 diabetes", color: "bg-purple-100 text-purple-700" },
              { value: "50%", label: "Risk reduction with lifestyle changes", color: "bg-teal-100 text-teal-700" },
              { value: "1M+", label: "People helped by our resources", color: "bg-amber-100 text-amber-700" },
            ].map((stat, index) => (
              <div key={index} className={`p-6 rounded-2xl ${stat.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Modern Touches */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
              Trusted Diabetes Resource
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Your Diabetes Journey
            </h2>
            <p className="text-xl text-gray-600">
              We combine medical expertise with practical lifestyle advice to help you manage diabetes effectively.
            </p>
          </div>

          {/* Featured Articles */}
<section className="mb-20">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Articles</h2>
      <p className="text-gray-500 dark:text-gray-400">Handpicked resources to get you started</p>
    </div>
    <Link 
      href="/blog" 
      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium group"
      aria-label="View all articles about diabetes management"
    >
      View all articles
      <svg 
        className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" 
        fill="currentColor" 
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </Link>
  </div>
  
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {articles.map((article) => (
      <article key={article.id} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
        <Link 
          href={`/blog/${article.slug}`} 
          className="block h-full"
          aria-label={`Read more about ${article.title}`}
        >
          {/* Image Container */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={article.image}
              alt={`Featured image for ${article.title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content Container */}
          <div className="p-6">
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full text-xs mb-3">
              {article.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">{article.readTime}</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center">
                Read article
                <FiArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </article>
    ))}
  </div>
</section>

          {/* Categories Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-500 mb-8">Find content tailored to your specific needs</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryLink 
                  key={category.slug} 
                  category={category}
                />
              ))}
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="mb-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="relative max-w-4xl mx-auto">
              <div className="flex items-start">
                <span className="text-5xl mr-4 text-indigo-200">"</span>
                <div>
                  <blockquote className="text-xl md:text-2xl mb-6 font-medium">
                    The meal plans and exercise tips helped me lose 25 pounds and brought my A1C down to normal levels for the first time in years.
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative w-14 h-14 mr-4">
                    <Image
  src="/images/image1.jpg"
  alt="Description"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Sarah J.</p>
                      <p className="text-indigo-200">Type 2 diabetic since 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-indigo-100 text-indigo-700">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our newsletter for weekly diabetes management tips, recipes, and research updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-sm hover:shadow-md">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
