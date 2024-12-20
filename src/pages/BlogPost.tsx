import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatDate } from '@/utils/blog-utils';
import { BlogPost } from '@/types/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<{ 
    default: React.ComponentType;
    metadata: BlogPost;
  } | null>(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const module = await import(`../blogs/${slug}.tsx`);
        setBlog(module);
      } catch (error) {
        console.error('Failed to load blog post:', error);
      }
    };

    if (slug) {
      loadBlog();
    }
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const BlogContent = blog.default;
  const { metadata } = blog;

  return (
    <div className="pt-20">
      <article>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[2/1] w-full overflow-hidden">
            <img
              src={metadata.featuredImage}
              alt={metadata.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                {metadata.title}
              </h1>
              
              <time className="text-gray-600">
                {formatDate(metadata.date)}
              </time>

              <div className="mt-8">
                <BlogContent />
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}