import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/blog-utils';

export function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.slug}`} className="group">
      <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            {formatDate(blog.date)}
          </p>
          <p className="text-gray-700 line-clamp-2">
            {blog.snippet}
          </p>
        </div>
      </article>
    </Link>
  );
}
