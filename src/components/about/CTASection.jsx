import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Build the Practice of Your Dreams <span className="underline">On Your Own Terms!</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule Your Free Discovery Call Today and Unlock the Ortho Boost Advantage...
            Amplify New Patient Acquisition, Fuel Practice Growth, and Bid Farewell to Referral Dependency!
          </p>
          <Link
            to="/schedule"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-opacity duration-200"
          >
            Schedule a Free Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}