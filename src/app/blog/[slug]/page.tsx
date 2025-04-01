
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/data/blogPosts';
import Image from 'next/image';
import CommentSection from '../../components/CommentSection';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';

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
      {/* Post Header */}
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
              priority
            />
          </div>
        )}
      </div>

      {/* Post Content */}
      <div 
        className="prose max-w-none" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      {/* Tags and Reactions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <LikeDislikeButtons postSlug={params.slug} />
        </div>
      </div>

      {/* Author Bio */}
      {post.authorBio && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">About the Author</h3>
          <p className="text-gray-700">{post.authorBio}</p>
        </div>
      )}

      {/* Comment Section - Using original component without postSlug */}
      <div className="mt-16">
        <CommentSection  postSlug={params.slug}/>
      </div>
    </article>
  );
}