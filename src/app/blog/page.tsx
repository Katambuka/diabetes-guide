
import { getAllPosts } from '@/data/blogPosts';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export default function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;
  const postsPerPage = 6;
  const allPosts = getAllPosts();
  
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Welcome To Your Diabetes Health Hub
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map(post => (
          <article 
            key={post.id} 
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-purple-500/10"
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              {/* Compact Image with Gradient Overlay */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={currentPage === 1 && paginatedPosts.indexOf(post) < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Compact Content */}
              <div className="p-4 flex flex-col h-[calc(100%-10rem)]">
                <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 self-start">
                  {post.category}
                </span>
                
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
                  {post.title}
                </h2>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <FiClock className="mr-1 h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-300 transition-colors">
                    Read more
                    <FiArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Modern Pagination */}
      <div className="flex justify-center mt-12 gap-2">
        {currentPage > 1 && (
          <Link 
            href={`?page=${currentPage - 1}`}
            className="flex items-center px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
          >
            Previous
          </Link>
        )}

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <Link
              key={page}
              href={`?page=${page}`}
              className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                currentPage === page 
                  ? 'bg-purple-600 text-white' 
                  : 'border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50'
              } transition-colors`}
            >
              {page}
            </Link>
          ))}
        </div>

        {currentPage < totalPages && (
          <Link 
            href={`?page=${currentPage + 1}`}
            className="flex items-center px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}