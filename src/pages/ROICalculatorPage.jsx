import { motion } from 'framer-motion';
import { ROICalculator } from '@/components/calculator/ROICalculator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function ROICalculatorPage() {
  return (
    <div className="pt-20">
      <SEOHead
        title="ROI Calculator for Orthodontists"
        description="Calculate your potential marketing ROI and discover how our proven strategies can help grow your orthodontic practice."
        url="https://www.startorthoboost.com/roi-calculator"
      />
      
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing ROI Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your practice's growth potential with our ROI calculator. See how our proven marketing strategies can impact your bottom line.
            </p>
          </motion.div>

          <ROICalculator />
        </div>
      </section>
    </div>
  );
}