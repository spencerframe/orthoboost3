import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Star, Building2, Users, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Orthodontist",
    location: "Phoenix, AZ",
    content: "Their follow-up process is incredible. We went from converting 20% of leads to over 45% in just two months.",
    rating: 5
  },
  {
    name: "Dr. Michael Roberts",
    role: "Practice Owner",
    location: "Denver, CO",
    content: "The scheduling system has transformed our practice. We're now capturing leads we used to miss completely.",
    rating: 5
  },
  {
    name: "Dr. Emily Thompson",
    role: "Orthodontist",
    location: "Austin, TX",
    content: "The ROI guarantee gave us confidence to try their service, but their results made us stay.",
    rating: 5
  },
  {
    name: "Dr. James Wilson",
    role: "Practice Owner",
    location: "Seattle, WA",
    content: "Best marketing investment we've made. The lead quality and conversion rates are exceptional.",
    rating: 5
  },
  {
    name: "Dr. Lisa Anderson",
    role: "Orthodontist",
    location: "Chicago, IL",
    content: "Their 5-minute response time is a game-changer. Our conversion rates have doubled.",
    rating: 5
  },
  {
    name: "Dr. David Martinez",
    role: "Practice Owner",
    location: "Miami, FL",
    content: "The comprehensive follow-up system ensures no lead ever falls through the cracks.",
    rating: 5
  },
  {
    name: "Dr. Rachel Kim",
    role: "Orthodontist",
    location: "San Francisco, CA",
    content: "Switching to OrthoBoost was the best decision for our practice. The ROI is incredible.",
    rating: 5
  },
  {
    name: "Dr. Thomas Brown",
    role: "Practice Owner",
    location: "Boston, MA",
    content: "Their team's expertise in orthodontic marketing is unmatched. Highly recommended!",
    rating: 5
  },
  {
    name: "Dr. Amanda Garcia",
    role: "Orthodontist",
    location: "Houston, TX",
    content: "We've seen a 300% increase in qualified leads since partnering with OrthoBoost.",
    rating: 5
  }
];

export default function PricingPage() {
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
              Transparent, Scalable Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our base plan and scale as your practice grows
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Save Up To <span className="text-4xl">$4,000</span> Monthly
                </h2>
                <p className="text-lg mb-8">
                  Our streamlined approach and efficient systems allow us to provide premium services at a fraction of the cost compared to traditional agencies.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="flex-shrink-0" />
                    <span>Premium agency quality service</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="flex-shrink-0" />
                    <span>24/7 Scheduling included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="flex-shrink-0" />
                    <span>Comprehensive lead follow-up</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="flex-shrink-0" />
                    <span>No long-term contracts</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl transform rotate-3" />
                <div className="relative bg-white p-8 rounded-xl text-gray-900">
                  <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span>24/7 Scheduling with 5-minute response time</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span>Premium Google & Social Media Advertising</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span>Conversion-Optimized Landing Pages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span>Advanced Analytics & Reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
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
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>Doctor-driven marketing campaigns</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>6-10 follow-up calls within 72h</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>24/7 Scheduling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
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
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>All features from 1-2 locations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>Advanced analytics dashboard</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
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
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>All features from 3-4 locations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>Custom reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" />
                  <span>Strategic growth planning</span>
                </li>
              </ul>
              <Link to="/schedule" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition text-center">
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}