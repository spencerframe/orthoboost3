import { motion } from "framer-motion";

export function WebinarDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg mx-auto"
        >
          <p className="text-xl text-gray-600 mb-6">
            Can you believe 2024 is almost over? Now is the perfect time to reflect on your goals and marketing efforts throughout the year.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            I've been marketing my own orthodontic practice for over 15 years and have seen many different marketing strategies—some work well, and others not so much. But there are a few secret campaigns I've always relied on to drive the best growth, especially as we head into the new year.
          </p>
          <p className="text-xl text-gray-600">
            I love this time of year because setting up my campaigns in December guarantees a HUGE January and February. Every time. Without fail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}