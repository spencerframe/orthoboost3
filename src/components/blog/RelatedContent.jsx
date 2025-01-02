import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function RelatedContent({ items, type = 'blog' }) {
  if (!items?.length) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Related Content</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/${type}/${item.slug}`}
                className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative">
                  <img
                    src={item.featuredImage}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}