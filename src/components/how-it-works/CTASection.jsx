import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your strategy call today and see how we can help transform your practice
          </p>
          <Link
            to="/schedule"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <span>Schedule Your Call Now</span>
            <ArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}