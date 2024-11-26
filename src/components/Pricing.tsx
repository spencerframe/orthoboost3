import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transparent, Scalable Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our base plan and scale as your practice grows
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Base Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-blue-600" />
              <h3 className="text-2xl font-bold">1-2 Locations</h3>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold">$1,997</span>
              <span className="text-gray-600">/month</span>
              <p className="text-sm text-gray-600 mt-2">Up to 50 free leads/month</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Doctor-driven marketing campaigns</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>6-10 follow-up calls within 72h</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>24/7 AI Voice Agent coverage</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Self-qualifying chatbot</span>
              </li>
            </ul>
            <Link to="/schedule" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition text-center">
              Get Started
            </Link>
          </motion.div>

          {/* Growth Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 lg:-mt-4 lg:mb-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Building2 className="text-blue-600" />
                <h3 className="text-2xl font-bold">3-4 Locations</h3>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold">$2,497</span>
              <span className="text-gray-600">/month</span>
              <p className="text-sm text-gray-600 mt-2">Up to 75 free leads/month</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>All features from 1-2 locations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Advanced analytics dashboard</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Multi-location management</span>
              </li>
            </ul>
            <Link to="/schedule" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition text-center">
              Get Started
            </Link>
          </motion.div>

          {/* Scale Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-blue-600" />
              <h3 className="text-2xl font-bold">5-6 Locations</h3>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold">$2,997</span>
              <span className="text-gray-600">/month</span>
              <p className="text-sm text-gray-600 mt-2">Up to 100 free leads/month</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>All features from 3-4 locations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Custom reporting</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="text-green-500 flex-shrink-0" />
                <span>Strategic growth planning</span>
              </li>
            </ul>
            <Link to="/schedule" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition text-center">
              Get Started
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Users className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Additional Leads Pricing</h4>
                <p className="text-gray-600">
                  For every 25 leads over your plan's monthly allocation, there's an additional charge of $200. This ensures you only pay for the extra growth you achieve.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Action-Based Guarantee</h4>
                <p className="text-green-800">
                  If we can't get you a positive ROI in 3 months, we'll work for free until you do. That's our commitment to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}