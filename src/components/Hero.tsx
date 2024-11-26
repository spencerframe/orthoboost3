import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-36 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Orthodontic Practice with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-3">
              Doctor-Driven Marketing
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto -mt-3">
            Join 300+ successful orthodontic practices across the US and Canada. Our comprehensive solution combines expert marketing with 24/7 AI-powered lead conversion.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
              Schedule a Strategy Call
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
              View Success Stories
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Orthodontic marketing experts with proven results</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Coverage</h3>
              <p className="text-gray-600">Never miss a lead with our AI-powered response system</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Bot className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Qualification</h3>
              <p className="text-gray-600">AI chatbot pre-qualifies leads for higher conversion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}