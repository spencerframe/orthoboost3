import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getAllBlogs } from '@/utils/blog-utils';
import { BlogCard } from '@/components/blog/BlogCard';
import { TagFilter } from '@/components/blog/TagFilter';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const allBlogs = await getAllBlogs();
      setBlogs(allBlogs);
      
      // Extract unique tags
      const tags = Array.from(new Set(allBlogs.flatMap(blog => blog.tags)));
      setAllTags(tags);
    };
    
    loadBlogs();
  }, []);

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

  return (
    <div className="pt-20">
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

          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
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
        </div>
      </section>
    </div>
  );
}
