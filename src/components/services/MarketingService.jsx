import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function MarketingService({ icon: Icon, title, description, features, initialX = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 transform rotate-3">
        <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center transform -rotate-3">
          <Icon className="text-blue-600" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center space-x-3">
            <ArrowRight className="text-blue-600 w-5 h-5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
