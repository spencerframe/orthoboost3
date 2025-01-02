import { getAllBlogs } from './blog-utils';
import { getAllWebinars } from './webinar-utils';

// Get related content based on tags
export async function getRelatedContent(currentSlug, tags, contentType = 'blog') {
  const getContent = contentType === 'blog' ? getAllBlogs : getAllWebinars;
  const allContent = await getContent();
  
  return allContent
    .filter(item => 
      item.slug !== currentSlug && 
      item.tags.some(tag => tags.includes(tag))
    )
    .sort((a, b) => {
      // Count matching tags
      const aMatches = a.tags.filter(tag => tags.includes(tag)).length;
      const bMatches = b.tags.filter(tag => tags.includes(tag)).length;
      return bMatches - aMatches;
    })
    .slice(0, 3); // Return top 3 related items
}

// Generate breadcrumb data
export function generateBreadcrumbs(path) {
  const parts = path.split('/').filter(Boolean);
  return parts.map((part, index) => ({
    label: part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
    path: '/' + parts.slice(0, index + 1).join('/'),
    isLast: index === parts.length - 1
  }));
}