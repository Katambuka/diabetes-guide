 // src/types/blog.d.ts
export interface BlogPost {
   slug: string;
   title: string;
   excerpt: string;
   content: string;
   image?: string;
   category?: string;
   tags?: string[];
   date?: string;
   author?: string;
   authorBio?: string;
   readTime?: string;
 }