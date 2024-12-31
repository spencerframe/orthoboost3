import { ALL_BLOG_TAGS } from '@/constants/blog-tags';

export async function getAllBlogs() {
  const blogModules = import.meta.glob("/src/blogs/*.jsx");
  const blogs = [];

  for (const path in blogModules) {
    const module = await blogModules[path]();
    const slug = path.replace("/src/blogs/", "").replace(".jsx", "");

    // Validate that blog only uses allowed tags
    const hasValidTags = module.metadata?.tags?.every(tag => ALL_BLOG_TAGS.includes(tag));
    
    if (module.metadata && module.metadata.published && hasValidTags) {
      blogs.push({
        ...module.metadata,
        slug,
      });
    } else if (module.metadata && module.metadata.published && !hasValidTags) {
      console.warn(`Blog "${module.metadata.title}" uses invalid tags. Only use tags from BLOG_TAGS constant.`);
    }
  }

  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
