

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import { categories } from "@/data/categories";
import CategoryLink from "./components/CategoryLink";
import Link from "next/link";

//  articles
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
  {
    id: 4,
    title: "Monitoring Blood Sugar: Devices and Techniques",
    excerpt: "Everything you need to know about...",
    slug: "diabetes-technology",
    image: "/images/image8.jpg",
    category: "Management",
    readTime: "7 min read"
  },
];

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Compassionate Guide to Living Well with Diabetes
            </h1>
            <p className="text-xl mb-8">
              Trusted information, practical tips, and supportive community to help you manage diabetes with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/image1.jpg"
              alt="Happy person managing diabetes"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">463M</h3>
              <p className="text-gray-600">People live with diabetes worldwide</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="text-3xl font-bold text-green-600 mb-2">90%</h3>
              <p className="text-gray-600">Of cases are Type 2 diabetes</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl">
              <h3 className="text-3xl font-bold text-yellow-600 mb-2">50%</h3>
              <p className="text-gray-600">Reduction in risk with lifestyle changes</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">1M+</h3>
              <p className="text-gray-600">People helped by our resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Welcome Message */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Diabetes Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are here to support you with evidence-based information, practical tips, and a
              compassionate community to help you navigate life with diabetes.
            </p>
          </div>

          {/* Featured Articles Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Featured Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:underline font-medium">
                View All Articles
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Explore by Category</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryLink key={category.slug} category={category} />
              ))}
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="bg-blue-600 text-white rounded-xl p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start">
                <span className="text-5xl mr-4"> "</span>
                <div>
                  <blockquote className="text-xl mb-6">
                    The Diabetes Guide helped me understand my condition better than my doctor ever explained.
                    The meal plans and exercise tips have brought my A1C down to normal levels for the first time in years.
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src="/images/image1.jpg"
                      alt="Sarah J."
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">Sarah J.</p>
                      <p className="text-blue-100">Type 2 diabetic since 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-white rounded-xl p-8 shadow-md mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated with Our Newsletter</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest diabetes management tips, recipes, and research updates delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
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
    </>
  );
}
