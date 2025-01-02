import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, Frown } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="mb-8 relative"
          >
            <div className="flex items-center justify-center">
              <span className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                404
              </span>
              <Frown className="w-20 h-20 text-blue-600 ml-4" />
            </div>
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Oops! This Page is Playing Hide and Seek
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            And it's winning! Looks like you've stumbled upon a page that's gone MIA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Our Services
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto"
          >
            <p className="text-gray-600 italic">
              "In orthodontics, we straighten teeth. In web development, sometimes pages get a little crooked. 
              Let's get you back on track!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}