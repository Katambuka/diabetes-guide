
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';


const postsDirectory = path.join(process.cwd(), 'src/content/posts');

function safeReadYamlFile(filePath: string) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
      },
      excerpt: true
    });
  } catch (error) {
    console.error(`Error parsing YAML file ${filePath}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));

  return fileNames.reduce((posts: BlogPost[], fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const result = safeReadYamlFile(filePath);

    if (!result) return posts;

    const { data: frontmatter, content } = result;

    // Validate required fields
    if (!frontmatter.id || !frontmatter.slug || !frontmatter.title) {
      console.warn(`Skipping invalid post ${fileName} - missing required fields`);
      return posts;
    }

    const post: BlogPost = {
      id: frontmatter.id,
      slug: frontmatter.slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt || '',
      content: content || '',
      image: frontmatter.image || `/images/image${frontmatter.id % 2 === 0 ? '8' : '6'}.jpg`,
      category: frontmatter.category || 'Uncategorized',
      date: frontmatter.date 
        ? new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : 'Unknown date',
      readTime: frontmatter.readTime || '5 min read',
      ...(frontmatter.author && { author: frontmatter.author }),
      ...(frontmatter.authorBio && { authorBio: frontmatter.authorBio }),
      ...(frontmatter.tags && { tags: frontmatter.tags })
    };

    return [...posts, post];
  }, []).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const possibleExtensions = ['.yaml', '.yml'];
  
  for (const ext of possibleExtensions) {
    const filePath = path.join(postsDirectory, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const result = safeReadYamlFile(filePath);
      if (!result) return undefined;

      const { data: frontmatter, content } = result;
      return {
        id: frontmatter.id,
        slug: frontmatter.slug,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt || '',
        content: content || '',
        image: frontmatter.image || `/images/image${frontmatter.id % 2 === 0 ? '8' : '6'}.jpg`,
        category: frontmatter.category || 'Uncategorized',
        date: frontmatter.date 
          ? new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          : 'Unknown date',
        readTime: frontmatter.readTime || '5 min read',
        ...(frontmatter.author && { author: frontmatter.author }),
        ...(frontmatter.authorBio && { authorBio: frontmatter.authorBio }),
        ...(frontmatter.tags && { tags: frontmatter.tags })
      };
    }
  }
  return undefined;
}

export const BlogPosts = getAllPosts();