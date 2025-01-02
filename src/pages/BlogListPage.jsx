import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getAllBlogs } from '@/utils/blog-utils';
import { BlogCard } from '@/components/blog/BlogCard';
import { TagFilter } from '@/components/blog/TagFilter';
import { Pagination } from '@/components/blog/Pagination';
import { Spinner } from '@/components/magicui/spinner';
import { SEOHead } from '@/components/seo/SEOHead';
import { PAGE_METADATA } from '@/utils/page-metadata';

const BLOGS_PER_PAGE = 6;

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const allBlogs = await getAllBlogs();
        setBlogs(allBlogs);
      
        // Extract unique tags
        const tags = Array.from(new Set(allBlogs.flatMap(blog => blog.tags)));
        setAllTags(tags);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlogs();
  }, []);

  useEffect(() => {
    // Reset to first page when tags change
    setCurrentPage(1);
  }, [selectedTags]);

  const handleTagSelect = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredBlogs = selectedTags.length > 0
    ? blogs.filter(blog => 
        selectedTags.some(tag => blog.tags.includes(tag))
      )
    : blogs;

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <SEOHead {...PAGE_METADATA.blog} />
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Orthodontic Marketing Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips and strategies to grow your orthodontic practice
            </p>
          </motion.div>

          {isLoading ? (
            <div className="min-h-[400px] flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <>
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBlogs.map((blog) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
          </>
          )}
        </div>
      </section>
    </div>
  );
}