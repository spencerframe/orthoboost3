import { BlogMetadata, BlogPost } from '@/types/blog';

export async function getAllBlogs(): Promise<BlogMetadata[]> {
  const blogModules = import.meta.glob('/src/blogs/*.tsx');
  const blogs: BlogMetadata[] = [];

  for (const path in blogModules) {
    const module = await blogModules[path]();
    const slug = path.replace('/src/blogs/', '').replace('.tsx', '');
    
    if (module.metadata && module.metadata.published) {
      blogs.push({
        ...module.metadata,
        slug
      });
    }
  }

  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}