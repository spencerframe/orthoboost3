import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutTemplate, 
  Video, 
  Facebook, 
  Instagram, 
  MessageSquare, 
  Bot, 
  PhoneCall, 
  LineChart,
  Headphones,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function ServicePage() {
  const features = [
    {
      icon: Users,
      title: "Doctor-Driven Marketing",
      description: "Partner with an Orthodontist who grew from 1 to 7 locations in 5 years. Benefit from proven marketing strategies that actually work in orthodontic practices."
    },
    {
      icon: Clock,
      title: "24/7 Coverage",
      description: "Never miss a lead with our AI Voice Agent handling inbound calls and chatbot qualifying leads, even during after hours and holidays."
    },
    {
      icon: CheckCircle,
      title: "Action-Based Guarantee",
      description: "If we can't get you a positive ROI in 3 months, we work for free until you do. That's our commitment to your success."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Orthodontic Marketing Solution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ years of orthodontic marketing experience, serving 300+ practices across US and Canada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Landing Page Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <LayoutTemplate className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Custom Landing Page Design</h2>
                <p className="text-gray-600 mb-6">
                  We craft laser-focused landing pages with one clear objective: capturing new patient leads who are eager to schedule their free consultation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>Conversion-optimized design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>Mobile-first approach</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>Clear call-to-actions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                  alt="Landing Page Design"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Social Media Advertising */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-blue-50 rounded-xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
                  alt="Social Media Advertising"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex space-x-4 mb-6">
                  <Video className="text-blue-600" />
                  <Facebook className="text-blue-600" />
                  <Instagram className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Strategic Social Media Advertising</h2>
                <p className="text-gray-600 mb-6">
                  We launch targeted campaigns on TikTok, Facebook, and Instagram to reach potential patients where they spend their time.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>Proven ad templates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>Demographic targeting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>Performance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Lead Follow-up */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex space-x-4 mb-6">
                  <Bot className="text-blue-600" />
                  <PhoneCall className="text-blue-600" />
                  <Headphones className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Comprehensive Lead Management</h2>
                <p className="text-gray-600 mb-6">
                  Our dedicated team ensures every lead is contacted and converted, with AI-powered support for 24/7 coverage.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>6-10 follow-up calls within 72 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>AI Voice Agent for after-hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span>Direct scheduling integration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80"
                  alt="Lead Follow-up"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 300+ successful orthodontic practices and start growing your patient base today
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 hover:bg-opacity-90 transition">
              <span>Schedule Your Strategy Call</span>
              <PhoneCall className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}