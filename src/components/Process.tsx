import React from 'react';
import { motion } from 'framer-motion';
import { Target, PhoneCall, CalendarCheck, TrendingUp } from 'lucide-react';

export default function Process() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle everything from lead generation to appointment scheduling, letting you focus on what you do best
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Targeted Campaigns",
              description: "We create and manage social media campaigns targeting your ideal patients"
            },
            {
              icon: PhoneCall,
              title: "Rapid Follow-up",
              description: "Our team makes 6-10 calls within 72 hours of lead generation"
            },
            {
              icon: CalendarCheck,
              title: "Direct Scheduling",
              description: "We schedule qualified leads directly in your practice management software"
            },
            {
              icon: TrendingUp,
              title: "Growth & Analytics",
              description: "Regular reporting and optimization to continuously improve results"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}