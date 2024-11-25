import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Users, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Orthodontic Practice with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              OrthoBoost Lead Generation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We don't just generate leads - we convert them. Our in-house team makes 6-10 follow-up calls within 72 hours and directly schedules consultations in your practice management software.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
              Schedule a Strategy Call
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
              View Case Studies
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Media Leads</h3>
              <p className="text-gray-600">Targeted campaigns on Facebook & Instagram to reach potential patients</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <PhoneCall className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aggressive Follow-up</h3>
              <p className="text-gray-600">6-10 calls within 72 hours by our dedicated team</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calendar className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Scheduling</h3>
              <p className="text-gray-600">We schedule directly in your practice management software</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}