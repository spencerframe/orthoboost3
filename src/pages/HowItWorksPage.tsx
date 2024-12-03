import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  MessageSquare,
  PhoneCall,
  CalendarCheck,
  Bot,
  ArrowRight,
  Search,
  Video
} from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "Strategic Campaign Creation",
      description: "We develop targeted Google Ads campaigns to reach potential patients actively searching for orthodontic treatment.",
      details: [
        "Local market targeting",
        "Keyword optimization",
        "Compelling ad copy",
        "A/B testing"
      ]
    },
    {
      icon: Video,
      title: "Social Media Marketing",
      description: "Strategic campaigns across TikTok, Facebook, and Instagram to showcase your practice and attract ideal patients.",
      details: [
        "Platform-specific content",
        "Targeted demographics",
        "Engagement optimization",
        "Brand building"
      ]
    },
    {
      icon: PhoneCall,
      title: "24/7 Scheduling",
      description: "Never miss a lead with our round-the-clock scheduling team responding within 5 minutes - even on holidays.",
      details: [
        "5-minute response time",
        "Holiday coverage",
        "No missed opportunities",
        "Instant engagement"
      ]
    },
    {
      icon: Users,
      title: "Expert Follow-up",
      description: "Our dedicated team makes 6-10 calls within 72 hours to connect with every lead and schedule consultations.",
      details: [
        "Multiple contact attempts",
        "Professional scripts",
        "Objection handling",
        "Value communication"
      ]
    },
    {
      icon: CalendarCheck,
      title: "Direct Scheduling",
      description: "Qualified leads are scheduled directly into your practice management software.",
      details: [
        "Software integration",
        "Real-time availability",
        "Appointment reminders",
        "Follow-up confirmation"
      ]
    },
    {
      icon: Target,
      title: "Performance Tracking",
      description: "Monitor your ROI and campaign performance through our comprehensive analytics dashboard.",
      details: [
        "Real-time metrics",
        "Cost per lead tracking",
        "Conversion analytics",
        "ROI reporting"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Transform Your Practice
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process combines strategic marketing with expert lead conversion to deliver consistent results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 transform rotate-3">
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center transform -rotate-3">
                    <step.icon className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your strategy call today and see how we can help transform your practice
            </p>
            <Link
              to="/schedule"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 hover:bg-opacity-90 transition"
            >
              <span>Schedule Your Call Now</span>
              <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}