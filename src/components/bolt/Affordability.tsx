import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

export default function Affordability() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6">
            <DollarSign className="w-8 h-8 text-blue-400" />
          </div> */}
          <h2 className="text-4xl font-bold text-white mb-6">
            Maximize Your ROI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get better results while saving money
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-3xl font-bold mb-6">
              Save Up To <span className="text-blue-400">$4,000</span> Monthly
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Our streamlined approach and efficient systems allow us to provide premium services at a fraction of the cost compared to traditional agencies.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="src/lib/hp.png" alt="Agency A" />
                </div>
                <span className="pl-2 text-xl text-gray-300">Creative Agency - Break the bank 😵</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="src/lib/nc.png" alt="Agency A" />
                </div>
                <span className="pl-2 text-xl text-gray-300">Marketing Agency - Very pricey 😓</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="src/lib/om.png" alt="Agency A" />
                </div>
                <span className="pl-2 text-xl text-gray-300">Marketing Agency - Expensive 😲</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl transform rotate-3" />
            <div className="relative bg-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">What You Get:</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>24/7 Scheduling with 5-minute response time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Premium Google & Social Media Advertising</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Conversion-Optimized Landing Pages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Advanced Analytics & Reporting</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}