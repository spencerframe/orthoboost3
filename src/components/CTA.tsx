import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a strategy call to see how we can help you generate and convert more leads
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 hover:bg-opacity-90 transition">
            <span>Schedule Your Call Now</span>
            <ArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}