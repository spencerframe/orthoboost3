export async function getAllBlogs() {
  const blogModules = import.meta.glob("/src/blogs/*.jsx");
  const blogs = [];

  for (const path in blogModules) {
    const module = await blogModules[path]();
    const slug = path.replace("/src/blogs/", "").replace(".jsx", "");

    if (module.metadata && module.metadata.published) {
      blogs.push({
        ...module.metadata,
        slug,
      });
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
