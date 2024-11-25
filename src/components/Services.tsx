import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LayoutTemplate, 
  MessageSquare, 
  Video,
  PhoneCall
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: "Social Media Marketing",
      description: "Strategic campaigns on TikTok, Facebook, and Instagram to reach your ideal patients where they spend their time."
    },
    {
      icon: LayoutTemplate,
      title: "Landing Page Creation",
      description: "Conversion-optimized landing pages designed specifically to turn visitors into scheduled consultations."
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Support",
      description: "24/7 coverage with AI Voice Agent and chatbot to ensure no lead goes unattended, even after hours."
    },
    {
      icon: PhoneCall,
      title: "Lead Follow-Up",
      description: "Dedicated team making 6-10 calls within 72 hours to convert leads into scheduled appointments."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We don't just generate leads - we convert them into scheduled appointments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <service.icon className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            <span>Learn More About Our Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}