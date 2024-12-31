import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getAllWebinars } from '@/utils/webinar-utils';
import { WebinarCard } from '@/components/webinar/WebinarCard';
import { TagFilter } from '@/components/blog/TagFilter';
import { Pagination } from '@/components/blog/Pagination';

const WEBINARS_PER_PAGE = 6;

export default function WebinarListPage() {
  const [webinars, setWebinars] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadWebinars = async () => {
      const allWebinars = await getAllWebinars();
      setWebinars(allWebinars);
      
      const tags = Array.from(new Set(allWebinars.flatMap(webinar => webinar.tags)));
      setAllTags(tags);
    };
    
    loadWebinars();
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

  const filteredWebinars = selectedTags.length > 0
    ? webinars.filter(webinar => 
        selectedTags.some(tag => webinar.tags.includes(tag))
      )
    : webinars;

  // Calculate pagination
  const totalPages = Math.ceil(filteredWebinars.length / WEBINARS_PER_PAGE);
  const startIndex = (currentPage - 1) * WEBINARS_PER_PAGE;
  const paginatedWebinars = filteredWebinars.slice(startIndex, startIndex + WEBINARS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              Free Orthodontic Marketing Webinars
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our expert-led webinars to learn proven strategies for growing your practice
            </p>
          </motion.div>

          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedWebinars.map((webinar) => (
              <motion.div
                key={webinar.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <WebinarCard webinar={webinar} />
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
        </div>
      </section>
    </div>
  );
}