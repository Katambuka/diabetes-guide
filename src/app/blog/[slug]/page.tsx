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
}*/import { notFound } from "next/navigation";
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
          {/* Image with safe fallback */}
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
            
            {/* Excerpt - using your existing field */}
            <div className="prose max-w-none">
              <p className="text-gray-700">{post.excerpt}</p>
            </div>

            {/* Tags - only renders if they exist */}
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
}