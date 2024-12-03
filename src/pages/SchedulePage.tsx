import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, CheckCircle2 } from "lucide-react";
import ReviewsStatic from "@/components/custom/ReviewsStatic";

export default function SchedulePage() {
  const reviews = [
    {
      name: "Dr. Sarah Chen",
      role: "Orthodontist",
      location: "Phoenix, AZ",
      content: "Their follow-up process is incredible. We went from converting 20% of leads to over 45% in just two months.",
      rating: 5,
    },
    {
      name: "Dr. Michael Roberts",
      role: "Practice Owner",
      location: "Denver, CO",
      content: "The AI voice agent has transformed our after-hours conversion rate. We're now capturing leads we used to miss completely.",
      rating: 5,
    },
    {
      name: "Dr. Emily Thompson",
      role: "Orthodontist",
      location: "Austin, TX",
      content: "The ROI guarantee gave us confidence to try their service, but their results made us stay. Best marketing decision we've made.",
      rating: 5,
    },
  ];

  return (
    <div className='pt-20'>
      {/* Hero Section */}
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
          <div className='bg-white rounded-xl shadow-lg p-4'>
            <iframe
              src='https://koalendar.com/e/spencer-orthoboost?embed=true'
              width='100%'
              height='800px'
              frameBorder='0'
              title='Schedule Appointment'
            />
          </div>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Guarantee Section */}
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
      {/* Reviews Section */}
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
