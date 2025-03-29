/*import { notFound } from "next/navigation";
import { allBlogPosts } from "@/data/page";
import Image from "next/image";
import { FiTag } from "react-icons/fi";

// Define the expected props type explicitly
interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  console.log("Params:", params);
  console.log("All Blog Posts:", allBlogPosts);

  const post = allBlogPosts.find((p) => p.slug === params.slug);

  console.log("Found Post:", post);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src={post.image || "/default-image.jpg"}
              alt={post.title || "Blog Post"}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
            </div>

            {post.tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded flex items-center">
                    <FiTag className="mr-1" size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}

// Ensure `generateStaticParams` returns an array of objects with `slug`
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  console.log("Generating static params:", allBlogPosts);
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}*/


/*import { notFound } from "next/navigation";
import { allBlogPosts } from "@/data/page";
import Image from "next/image";
import { FiTag } from "react-icons/fi";

// Perfectly matches YOUR current data structure
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  tags?: string[];
}

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: PageProps) {
  const post = allBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Image with safe fallback /}
          <div className="relative h-64 md:h-96">
            <Image
              src={post.image || "/default-image.jpg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
            
            {/* Excerpt - using your existing field /}
            <div className="prose max-w-none">
              <p className="text-gray-700">{post.excerpt}</p>
            </div>

            {/* Tags - only renders if they exist /}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
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
        </article>
      </div>
    </main>
  );
}*/
// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiCalendar, FiUser, FiClock, FiTag } from "react-icons/fi";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <div className="mb-8">
          {post.category && (
            <Link 
              href={`/blog/categories/${post.category}`}
              className="text-blue-600 hover:text-blue-800 font-medium inline-block mb-2"
            >
              {post.category}
            </Link>
          )}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 mb-6">
            {post.date && (
              <span className="flex items-center gap-1">
                <FiCalendar className="h-4 w-4" />
                {post.date}
              </span>
            )}
            {post.readTime && (
              <span className="flex items-center gap-1">
                <FiClock className="h-4 w-4" />
                {post.readTime}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1">
                <FiUser className="h-4 w-4" />
                {post.author}
              </span>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content - This will display your full HTML content */}
        <article 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag.toLowerCase()}`}
                  className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  <FiTag className="h-3 w-3" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {post.author && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src="/images/default-avatar.jpg"
                  alt={post.author}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{post.author}</h4>
                {post.authorBio && (
                  <p className="text-gray-600 text-sm">{post.authorBio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}