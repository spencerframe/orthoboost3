import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Transform Your Practice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process combines strategic marketing with expert lead conversion to deliver consistent results
          </p>
        </motion.div>
      </div>
    </section>
  );
}