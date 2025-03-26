'use client';

import Link from 'next/link';

export default function CategoryLink({
  category,
}: {
  category: {
    name: string;
    icon: string;
    count: number;
    slug: string;
  };
}) {
  return (
    <Link
      href={`/blog/categories/${category.slug}`}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100 hover:border-blue-200 text-center"
    >
      <span className="text-2xl block mb-2">{category.icon}</span>
      <h3 className="font-semibold mb-1">{category.name}</h3>
      <p className="text-sm text-gray-500">{category.count} articles</p>
    </Link>
  );
}