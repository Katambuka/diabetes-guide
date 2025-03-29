
// src/components/ArticleCard.tsx
/*import Link from "next/link";

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
}*/

import Link from "next/link";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    image: string;
    category: string;
    readTime: string;
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-gradient-to-r from-purple-900 to-purple-700 text-purple-100">
          {article.category}
        </span>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3">
          {article.title}
        </h2>
        
        {/* Excerpt */}
        <p className="text-gray-300 mb-4">{article.excerpt}</p>
        
        {/* Footer with Read Time and Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-400 text-sm">
            <FiClock className="mr-1" />
            <span>{article.readTime}</span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}