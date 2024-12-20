import { motion } from "framer-motion";

export function WebinarHost() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img
              src="/images/tyler-loveall-headshot.png"
              alt="Dr. Tyler Coles"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">Meet Your Host</h2>
            <p className="text-xl text-gray-600 mb-6">
              Dr. Tyler Coles has been successfully marketing his orthodontic practice for over 15 years. He's helped hundreds of practices across the US and Canada achieve remarkable growth through proven marketing strategies.
            </p>
            <p className="text-xl text-gray-600">
              If you're tired of dealing with unqualified leads and want to start 2025 off strong, you don't want to miss this special live training!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}