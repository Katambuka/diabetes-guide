import 'next';
 export interface BlogPost {
   id: number;
   slug: string;
   title: string;
   excerpt: string;
   content: string;
   image: string;
   category: string;
   tags?: string[] | string | number | null | undefined;
   date: string;
   author: string;
   authorBio?: string;
   readTime?: string;
 }
 