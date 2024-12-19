import React from "react";
import { motion } from "framer-motion";
import { Search, Video, ArrowRight, PhoneCall, CheckCircle } from "lucide-react";
import { LeadSources } from "@/components/custom/LeadSources";

export default function ServicePage() {
  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-blue-50 to-white pt-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>We Handle Everything So You Don't Have To</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Focus on providing exceptional patient care while we manage your entire marketing and lead conversion process</p>
          </motion.div>
        </div>
      </section>

      <div className='py-10'>
        <LeadSources />
      </div>

      {/* Main Services */}
      <section className='pb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Search and Social Grid */}
          <div className='grid md:grid-cols-2 gap-8 mb-10'>
            {/* Search Engine Ads */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl'
            >
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 transform rotate-3'>
                <div className='w-11 h-11 bg-white rounded-lg flex items-center justify-center transform -rotate-3'>
                  <Search className='text-blue-600' />
                </div>
              </div>
              <h2 className='text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>Search Engine Advertising</h2>
              <p className='text-gray-600 mb-6'>Dominate Google search results with targeted ads that convert searchers into scheduled appointments.</p>
              <ul className='space-y-4'>
                <li className='flex items-center space-x-3'>
                  <ArrowRight className='text-blue-600 w-5 h-5' />
                  <span>Strategic keyword targeting</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <ArrowRight className='text-blue-600 w-5 h-5' />
                  <span>Conversion-optimized campaigns</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <ArrowRight className='text-blue-600 w-5 h-5' />
                  <span>Local market dominance</span>
                </li>
              </ul>
            </motion.div>

            {/* Social Media Marketing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl'
            >
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 transform rotate-3'>
                <div className='w-11 h-11 bg-white rounded-lg flex items-center justify-center transform -rotate-3'>
                  <Video className='text-blue-600' />
                </div>
              </div>
              <h2 className='text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>Social Media Marketing</h2>
              <p className='text-gray-600 mb-6'>Strategic campaigns on TikTok, Facebook, and Instagram to reach potential patients where they spend their time.</p>
              <ul className='space-y-4'>
                <li className='flex items-center space-x-3'>
                  <ArrowRight className='text-blue-600 w-5 h-5' />
                  <span>Engaging content creation</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <ArrowRight className='text-blue-600 w-5 h-5' />
                  <span>Platform-specific strategies</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <ArrowRight className='text-blue-600 w-5 h-5' />
                  <span>Targeted audience reach</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Comprehensive Lead Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-blue-600 to-cyan-500 p-12 rounded-2xl text-white'
          >
            <div className='max-w-4xl mx-auto'>
              <div className='flex items-center justify-center mb-8'>
                <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
                  <PhoneCall className='w-8 h-8' />
                </div>
              </div>
              <h2 className='text-3xl font-bold text-center mb-8'>New Lead Follow-up & Scheduling</h2>
              <p className='text-lg text-center mb-12 max-w-3xl mx-auto'>Our comprehensive lead management system combines 24/7 scheduling with expert follow-up to ensure no opportunity is ever missed. We handle everything so you can focus on providing exceptional patient care.</p>
              <div className='grid md:grid-cols-2 gap-12'>
                <div>
                  <h3 className='text-xl font-semibold mb-4'>24/7 Scheduling Excellence</h3>
                  <ul className='space-y-4'>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Responding to leads in minutes - even on holidays</span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Never miss another lead opportunity</span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Seamless practice software integration</span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Automated appointment reminders</span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Expert objection handling</span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Value proposition communication</span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Value proposition communication</span>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h3 className='text-xl font-semibold mb-4'>Professional Follow-Up</h3>
                  <ul className='space-y-4'>
                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>6-10 strategic follow-up calls within 72 hours</span>
                    </li>

                    <li className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 mt-1 flex-shrink-0' />
                      <span>Conversion rate optimization</span>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className='mt-12 grid md:grid-cols-3 gap-8'>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                  <h4 className='text-lg font-semibold mb-3'>Proven Results</h4>
                  <p>Higher quality leads and scheduled appointments</p>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                  <h4 className='text-lg font-semibold mb-3'>Dedicated Support</h4>
                  <p>Expert team focused solely on orthodontic practices</p>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                  <h4 className='text-lg font-semibold mb-3'>Full Transparency</h4>
                  <p>Detailed reporting and performance tracking</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-gradient-to-r from-blue-600 to-cyan-500 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-white'
          >
            <h2 className='text-4xl font-bold mb-6'>Ready to Transform Your Practice?</h2>
            <p className='text-xl mb-8 opacity-90'>Join 300+ successful orthodontic practices and start growing your patient base today</p>
            <button className='bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 hover:bg-opacity-90 transition'>
              <span>Schedule Your Strategy Call</span>
              <PhoneCall className='ml-2' />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
