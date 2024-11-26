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
  ArrowRight
} from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Target,
      title: "Strategic Campaign Creation",
      description: "We develop targeted social media campaigns across TikTok, Facebook, and Instagram to reach potential patients in your area.",
      details: [
        "Demographic targeting",
        "Custom audience creation",
        "Compelling ad creative",
        "A/B testing"
      ]
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Our proven landing pages and ad funnels capture interested prospects and begin the qualification process.",
      details: [
        "High-converting landing pages",
        "Mobile-optimized design",
        "Clear call-to-actions",
        "Trust indicators"
      ]
    },
    {
      icon: Bot,
      title: "24/7 AI Coverage",
      description: "Never miss a lead with our AI Voice Agent handling calls and chatbot qualifying leads around the clock.",
      details: [
        "After-hours coverage",
        "Holiday coverage",
        "Initial qualification",
        "Instant responses"
      ]
    },
    {
      icon: PhoneCall,
      title: "Rapid Follow-up",
      description: "Our team makes 6-10 calls within 72 hours to connect with every lead and schedule consultations.",
      details: [
        "Multiple contact attempts",
        "Professional call scripts",
        "Objection handling",
        "Value proposition delivery"
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
      icon: Bot,
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
              Our proven process combines strategic marketing with AI-powered lead conversion to deliver consistent results
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
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>{detail}</span>
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