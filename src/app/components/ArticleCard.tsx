
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiArrowRight } from "react-icons/fi";

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
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-md dark:hover:shadow-purple-500/10">
      {/* Compact Image Container */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container - More Compact */}
      <div className="p-4">
        {/* Category Badge - Smaller */}
        <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300">
          {article.category}
        </span>

        {/* Title - More Concise Typography */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
          {article.title}
        </h2>

        {/* Excerpt - Shorter with line clamp */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
          {article.excerpt}
        </p>

        {/* Footer - More Minimalist */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <FiClock className="mr-1 h-3 w-3" />
            <span>{article.readTime}</span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            aria-label={`Read ${article.title}`}
          >
            Read more
            <FiArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}