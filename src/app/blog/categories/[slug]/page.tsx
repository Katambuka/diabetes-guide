/*import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import Link from 'next/link';
import Image from 'next/image';
import { allBlogPosts } from '@/data/page';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // 1. Find the requested category
  const category = categories.find(c => c.slug === params.slug);
  if (!category) notFound();

  // 2. Filter posts for this category
  const posts = allBlogPosts.filter(post => 
    post.category.toLowerCase() === category.name.toLowerCase()
  );

  // 3. Render the category page
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.name} Articles</h1>
        <p className="text-gray-600">{posts.length} articles available</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <Link 
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
              <div className="mt-3 flex items-center text-xs text-gray-500">
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
*/


/*
import { allBlogPosts } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiClock, FiTag } from 'react-icons/fi';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header /}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Diabetes Health Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based articles and practical tips for managing diabetes
          </p>
        </div>

        {/* Blog Posts Grid /}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {allBlogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                {/* Featured Image /}
                <div className="relative h-60 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Post Content /}
                <div className="p-6">
                  {/* Category Badge /}
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>

                  {/* Title /}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt /}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Information /}
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-1.5" />
                    <span className="mr-4">{post.date}</span>
                    <FiClock className="mr-1.5" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Tags /}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center"
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
      </div>
    </main>
  );
}*/

import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import Link from 'next/link';
import Image from 'next/image';
import { allBlogPosts } from '@/data/page';
import { Metadata } from 'next';

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const category = categories.find(c => c.slug === params.slug);
  return {
    title: `${category?.name} Articles | Blog`,
    description: `Browse all articles in the ${category?.name} category`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // 1. Find the requested category
  const category = categories.find(c => c.slug === params.slug);
  if (!category) notFound();

  // 2. Filter posts for this category (case insensitive)
  const posts = allBlogPosts.filter(post => 
    post.category.toLowerCase() === category.name.toLowerCase()
  );

  // 3. Render the category page
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
          {category.name} Articles
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} available
        </p>
      </header>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No articles found in this category. Check back later!
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <article 
              key={post.id}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title} />
              
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  <time 
                    dateTime={new Date(post.date).toISOString()}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}