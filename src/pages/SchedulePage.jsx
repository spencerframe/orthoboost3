import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle2 } from "lucide-react";
import ReviewsStatic from "@/components/custom/ReviewsStatic";
import { useScript } from "@/hooks/useScript";
import IframeResizer from "iframe-resizer-react";
import WhySchedudule from "@/components/schedule/WhySchedudule";
import { SEOHead } from '@/components/seo/SEOHead';
import { PAGE_METADATA } from '@/utils/page-metadata';

export default function SchedulePage() {
  useScript("https://link.msgsndr.com/js/embed.js");

  return (
    <div className='pt-20'>
      <SEOHead {...PAGE_METADATA.schedule} />
      <section className='bg-gradient-to-b from-blue-50 to-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>Schedule Your Strategy Call</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Join 300+ successful orthodontic practices across US and Canada</p>
          </motion.div>
          
          <div className='bg-white rounded-xl shadow-lg p-10'>
            <div className='flex flex-col-reverse sm:flex-row gap-10'>
              <div className='sm:w-1/2'>
                <div className="mb-8">
                  <img
                    src='/images/tyler-loveall-headshot.png'
                    alt='Tyler Loveall'
                    className='rounded-xl w-32 mx-auto sm:mx-0'
                  />
                </div>
                <WhySchedudule />
              </div>
              <div className='sm:w-1/2'>
                <IframeResizer
                  src='https://api.leadconnectorhq.com/widget/booking/bPDlxff02GMUs51bdeL0'
                  className='w-full -mb-48'
                  id='msgsndr-calendar'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 mb-16 text-white'
        >
          <div className='flex items-start space-x-6'>
            <div className='flex-shrink-0'>
              <Shield className='w-16 h-16' />
            </div>
            <div>
              <h2 className='text-3xl font-bold mb-4'>Our Action-Based Guarantee</h2>
              <p className='text-xl mb-6'>If we can't get you a positive ROI in 3 months, we'll work for free until you do. That's our commitment to your success.</p>
              <div className='flex items-center space-x-4'>
                <CheckCircle2 className='w-6 h-6' />
                <span className='text-lg'>No long-term contracts required</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <section className='py-16 pb-32 bg-blue-50'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <ReviewsStatic />
        </motion.div>
      </section>
    </div>
  );
}