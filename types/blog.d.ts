// src/types/blog.d.ts
declare module '@/types/blog' {
  export interface BlogPost {
    likes: number;
    dislikes: number;
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    author?: string;
    authorBio?: string;
    tags?: string[];
  }
}