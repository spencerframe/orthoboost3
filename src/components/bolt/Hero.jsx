import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import BlurIn from "../magicui/blur-in";
import { BorderBeam } from "../magicui/border-beam";

export default function Hero() {
  return (
    <div>
      <div
        className='relative bg-cover bg-center bg-no-repeat md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[800px]'
        style={{
          backgroundImage: "url(/images/digital-marketing-for-orthodontists-hero.png)",
          backgroundPositionX: "60%",
        }}
      >
        <div className="bg-black bg-opacity-60 sm:bg-opacity-0 h-full">
          <div className='pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:items-start justify-center h-full'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center sm:text-start'
            >
              <h1 className='w-full sm:w-2/3 text-5xl xl:text-6xl font-bold text-white mb-6'>
                More Orthodontic Patients
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-3 mt-2'> 100% Guaranteed</span>
              </h1>
              <p className='w-full sm:w-2/3 text-xl text-white mb-12 max-w-3xl'>Join 300+ successful orthodontic practices across the US and Canada. Our comprehensive solution combines expert marketing with 24/7 scheduling to ensure no lead ever slips through the cracks.</p>
              
              <div className='flex flex-col sm:flex-row justify-center sm:justify-start gap-6 mb-16'>
                <Link
                  to='/schedule'
                  className='bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200'
                >
                  Schedule a Strategy Call
                </Link>
                <button className='bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition'>
                  View Success Stories
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='pt-20 bg-gradient-to-b from-blue-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <div className='grid md:grid-cols-3 gap-8 mx-auto'>
              <div className='relative bg-white p-6 rounded-xl shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)]'>
                <BorderBeam
                  size={250}
                  duration={12}
                  colorFrom='#2563eb'
                  colorTo='#06b6d4'
                  delay={20}
                />
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
                  <Award className='text-blue-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>15+ Years Experience</h3>
                <p className='text-gray-600'>Orthodontic marketing experts with proven results</p>
              </div>
              <div className='relative bg-white p-6 rounded-xl shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)]'>
                <BorderBeam
                  size={250}
                  duration={12}
                  colorFrom='#2563eb'
                  colorTo='#06b6d4'
                  delay={10}
                />
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
                  <Clock className='text-blue-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>24/7 Scheduling</h3>
                <p className='text-gray-600'>Never chase leads again - 5-minute response time guaranteed</p>
              </div>
              <div className='relative bg-white p-6 rounded-xl shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)]'>
                <BorderBeam
                  size={250}
                  duration={12}
                  colorFrom='#2563eb'
                  colorTo='#06b6d4'
                />
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
                  <Bot className='text-blue-600' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Smart Qualification</h3>
                <p className='text-gray-600'>Pre-qualified leads for higher conversion rates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}