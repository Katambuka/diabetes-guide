
// src/components/ArticleCard.tsx
import Link from "next/link";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        {article.title}
      </h2>
      <p className="text-gray-300 mb-6">{article.excerpt}</p>
      <Link
        href={`/blog/${article.slug}`}
        className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
      >
        Read More
      </Link>
    </div>
  );
}