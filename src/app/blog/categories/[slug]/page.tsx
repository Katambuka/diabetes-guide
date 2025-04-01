
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