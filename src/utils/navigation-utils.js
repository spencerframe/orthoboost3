import { getAllBlogs } from './blog-utils';
import { getAllWebinars } from './webinar-utils';

export async function doesBlogExist(slug) {
  const blogs = await getAllBlogs();
  return blogs.some(blog => blog.slug === slug);
}

export async function doesWebinarExist(slug) {
  const webinars = await getAllWebinars();
  return webinars.some(webinar => webinar.slug === slug);
}