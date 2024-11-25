import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Dedicated account manager",
    "Social media campaign management",
    "6-10 follow-up calls per lead",
    "Direct scheduling integration",
    "Monthly performance reports",
    "A/B testing optimization",
  ];

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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with our comprehensive lead generation and conversion service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
            <p className="text-gray-600 mb-6">Perfect for growing practices</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$1,997</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">Up to 100 leads per month</p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Scale Plan</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <p className="text-gray-600 mb-6">For high-growth practices</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$2,997</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">100+ leads per month</p>
            <ul className="space-y-4 mb-8">
              {[...features, "Priority support", "Custom reporting dashboard", "Competitor analysis"].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Contact Sales
            </button>
          </motion.div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Custom Enterprise Solutions</h4>
              <p className="text-gray-600">
                Need more than 200 leads per month? We offer custom enterprise solutions with dedicated support and custom integrations. Contact our sales team to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}