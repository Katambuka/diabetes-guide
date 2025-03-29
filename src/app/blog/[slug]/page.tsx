/*
import { notFound } from "next/navigation";
import { BlogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Debug: Log what we're looking for and what exists
  console.log("URL Slug:", params.slug);
  console.log("Available Slugs:", BlogPosts.map(p => p.slug));
  
  const post = BlogPosts.find((post) => 
    post.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!post) {
    console.error("Post not found for slug:", params.slug);
    notFound();
  }

  // Use image6.jpg for all posts as requested
  const postImage = "/images/image6.jpg";

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image /}
          <div className="relative h-64 md:h-96">
            <Image
              src={postImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Meta Information /}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <FiCalendar className="mr-1.5" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center">
                <FiClock className="mr-1.5" />
                {post.readTime}
              </span>
              <span className="flex items-center">
                <FiUser className="mr-1.5" />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            <p className="text-gray-700 text-lg mb-6">{post.excerpt}</p>

            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {Array.isArray(post.tags) && post.tags.length > 0 && (
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

            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">About the Author</h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug, // Must match exactly
  }));
}*/
import { notFound } from "next/navigation";
import { BlogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = BlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  // Determine which image to use (alternating between image6 and image8)
  const imageSrc = post.id % 2 === 0 ? "/images/image8.jpg" : "/images/image6.jpg";

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Post Content */}
          <div className="p-6 md:p-8">
            {/* Category Badge */}
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center">
                <FiCalendar className="mr-1.5" />
                {post.date}
              </span>
              <span className="flex items-center">
                <FiClock className="mr-1.5" />
                {post.readTime}
              </span>
              {post.author && (
                <span className="flex items-center">
                  <FiUser className="mr-1.5" />
                  {post.author}
                </span>
              )}
            </div>

            {/* Excerpt */}
            <p className="text-gray-700 text-lg mb-6">{post.excerpt}</p>

            {/* Main Content */}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Tags */}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
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

            {/* Author Bio */}
            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">About the Author</h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false; // Set to true if you want to allow non-predefined slugs