import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function WebinarHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            FREE LIVE WEBINAR
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            2025 Marketing Gameplan
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xl text-gray-600 mb-8">
            <Calendar className="w-6 h-6" />
            <span>Thursday, December 12th, 7:30 PM EST</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join Dr. Tyler Coles for a special live training to kickstart your 2025 with proven marketing strategies that consistently generate 20+ new patients in January and February.
          </p>
        </motion.div>
      </div>
    </section>
  );
}