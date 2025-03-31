/*
import { notFound } from "next/navigation";
import BlogPosts from "@/data/blogPosts";
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
          {/* Featured Image /}
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

          {/* Post Content /}
          <div className="p-6 md:p-8">
            {/* Category Badge /}
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            {/* Title /}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

            {/* Meta Information /}
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

            {/* Excerpt /}
            <p className="text-gray-700 text-lg mb-6">{post.excerpt}</p>

            {/* Main Content /}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Tags /}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {Array.isArray(post.tags) && post.tags.map((tag) => (
                  <span
                    key={typeof tag === 'string' || typeof tag === 'number' ? tag : undefined}
                    className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded flex items-center"
                  >
                    <FiTag className="mr-1" size={12} />
                    {typeof tag === 'string' || typeof tag === 'number' ? tag.toString() : null}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio /}
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

export const dynamicParams = false; // Set to true if you want to allow non-predefined <slugs></slugs>*/

/*
import { notFound } from "next/navigation";
import { PageProps } from "next";
import BlogPosts from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}
export default function BlogPostPage({ params }: PageProps<{ slug: string }>) {
  const post = BlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image /}
          <div className="relative h-64 md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Category /}
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            {/* Title /}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            {/* Meta /}
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

            {/* Content /}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Tags /}
            {post.tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {Array.isArray(post.tags) && post.tags.map((tag) => (
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

            {/* Author Bio /}
            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}*/

/*
import { notFound } from "next/navigation";
import { BlogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";

// Define PageProps correctly

// Generate Static Params
export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Blog Post Page Component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  // Ensure there's a fallback image if `post.image` is undefined
  const imageSrc = post.image || (post.id % 2 === 0 ? "/images/image8.jpg" : "/images/image6.jpg");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image /}
          <div className="relative h-64 md:h-96">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Category /}
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            {/* Title /}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

            {/* Meta /}
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

            {/* Content /}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Tags /}
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

            {/* Author Bio /}
            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}*/


/*
import { notFound } from "next/navigation";
import { BlogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";

// Define PageProps correctly
interface PageProps {
  params: { slug: string };
}

// Generate Static Params
export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Blog Post Page Component
export default function blogPosts({ params }: PageProps) {
  const post = BlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  // Ensure there's a fallback image if `post.image` is undefined
  const imageSrc = post.image || (post.id % 2 === 0 ? "/images/image8.jpg" : "/images/image6.jpg");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image /}
          <div className="relative h-64 md:h-96">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Category /}
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            {/* Title /}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

            {/* Meta /}
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

            {/* Content /}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Tags /}
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

            {/* Author Bio /}
            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
*/

/*
import { notFound } from "next/navigation";
import { BlogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = BlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  // Image handling with fallback
  const imageSrc = post.image || (post.id % 2 === 0 ? "/images/image8.jpg" : "/images/image6.jpg");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image /}
          <div className="relative h-64 md:h-96">
            <Image
              src={imageSrc}
              alt={post.title || "Blog post"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Category /}
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            {/* Title /}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            {/* Meta Information /}
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

            {/* Content /}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Tags /}
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

            {/* Author Bio /}
            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}*/

/*
import { notFound } from "next/navigation";
import { BlogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import type { Metadata } from "next";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: BlogPostParams): Promise<Metadata> {
  const post = BlogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.content.substring(0, 160),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const post = BlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Image handling with fallback
  const imageSrc = post.image || (post.id % 2 === 0 ? "/images/image8.jpg" : "/images/image6.jpg");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image /}
          <div className="relative h-64 md:h-96">
            <Image
              src={imageSrc}
              alt={post.title || "Blog post"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Category /}
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            {/* Title /}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            {/* Meta Information /}
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

            {/* Content /}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Tags /}
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

            {/* Author Bio /}
            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}*/
/*
import { notFound } from "next/navigation";
import { BlogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { FiTag, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import type { Metadata } from "next";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const dynamicParams = false; // Only generate pages for returned slugs

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const post = BlogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt || `${post.content.substring(0, 160)}...`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || `${post.content.substring(0, 160)}...`,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image || "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = BlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const imageSrc = post.image || (post.id % 2 === 0 ? "/images/image8.jpg" : "/images/image6.jpg");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
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

          <div className="p-6 md:p-8">
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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
              {post.author && (
                <span className="flex items-center">
                  <FiUser className="mr-1.5" />
                  {post.author}
                </span>
              )}
            </div>

            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
                  <span
                  key={typeof tag === 'string' || typeof tag === 'number' ? tag : undefined}
                    className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded flex items-center"
                  >
                    <FiTag className="mr-1" size={12} />
                    {typeof tag === 'string' || typeof tag === 'number' ? tag.toString() : null}
                  </span>
                ))}
              </div>
            )}

            {post.authorBio && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}*/

import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/data/blogPosts';
import Image from 'next/image';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Diabetes Guide`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          {post.author && (
            <>
              <span>•</span>
              <span>By {post.author}</span>
            </>
          )}
        </div>
        {post.image && (
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {post.authorBio && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">About the Author</h3>
          <p className="text-gray-700">{post.authorBio}</p>
        </div>
      )}
    </article>
  );
}