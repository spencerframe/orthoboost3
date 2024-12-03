import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';
import CountUp from 'react-countup';

export default function Results() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proven Results for Orthodontists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach delivers consistent results that help orthodontic practices grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={85} suffix="%" duration={2} />
            </h3>
            <p className="text-gray-600">Higher conversion rate vs. industry average</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={250} suffix="+" duration={2} />
            </h3>
            <p className="text-gray-600">New patients scheduled monthly per practice</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={5} suffix="min" duration={2} />
            </h3>
            <p className="text-gray-600">Average response time for new leads</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <CountUp end={5} suffix="X" duration={2} />
            </h3>
            <p className="text-gray-600">Average ROI for our partner practices</p>
          </motion.div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h3 className="text-2xl font-bold mb-4">Case Study: Advanced Orthodontics</h3>
              <p className="text-gray-600 mb-6">
                "Their follow-up process is incredible. We went from converting 20% of leads to over 45% in just two months. The direct scheduling integration saves our front desk hours each week."
              </p>
              <p className="font-semibold">Dr. Sarah Chen</p>
              <p className="text-gray-500">Phoenix, AZ</p>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')] bg-cover bg-center min-h-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
}