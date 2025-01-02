import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatDate } from '@/utils/blog-utils';
import { doesBlogExist } from '@/utils/navigation-utils';
import { SEOHead } from '@/components/seo/SEOHead';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { RelatedContent } from '@/components/blog/RelatedContent';
import { generateBlogSchema } from '@/utils/seo-utils';
import { getRelatedContent } from '@/utils/internal-linking';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [exists, setExists] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const blogExists = await doesBlogExist(slug);
        if (!blogExists) {
          setExists(false);
          return;
        }
        const module = await import(`../blogs/${slug}.jsx`);
        setBlog(module);
        
        // Load related content
        const related = await getRelatedContent(slug, module.metadata.tags);
        setRelatedBlogs(related);
      } catch (error) {
        console.error('Failed to load blog post:', error);
        setExists(false);
      }
    };

    if (slug) {
      loadBlog();
    }
  }, [slug]);

  if (!exists) {
    return <Navigate to="/blog" replace />;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  const BlogContent = blog.default;
  const { metadata } = blog;

  return (
    <div className="pt-20">
      <SEOHead
        title={metadata.title}
        description={metadata.snippet}
        image={metadata.featuredImage}
        url={`https://www.startorthoboost.com/blog/${slug}`}
        type="article"
        structuredData={generateBlogSchema({
          ...metadata,
          slug
        })}
      />
      <article className='mb-20'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs path={`/blog/${slug}`} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="h-[40vw] sm:h-[30vw] max-h-[400px] w-full overflow-hidden">
            <img
              src={metadata.featuredImage}
              alt={metadata.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
            <div className="blog-post bg-white rounded-xl shadow-xl p-8 md:p-12">
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

              <div className="mt-6">
                <BlogContent />
              </div>
            </div>
          </div>
        </motion.div>
      </article>
      <RelatedContent items={relatedBlogs} type="blog" />
    </div>
  );
}
