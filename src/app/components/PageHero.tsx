// components/PageHero.tsx
import React from 'react';

interface PageHeroProps {
  title: string;
  description: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
};
