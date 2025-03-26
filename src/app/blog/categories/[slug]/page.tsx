import { notFound } from 'next/navigation';
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