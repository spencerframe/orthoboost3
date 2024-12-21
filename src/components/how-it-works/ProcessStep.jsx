import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  index: number;
}

export function ProcessStep({ icon: Icon, title, description, details, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 transform rotate-3">
        <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center transform -rotate-3">
          <Icon className="text-blue-600" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {details.map((detail, i) => (
          <li key={i} className="flex items-center space-x-3">
            <ArrowRight className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}