import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ortho Boost - Your Partners in New Patient Acquisition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Rise Above Referral Reliance and Unleash Your Practice Growth Potential By Acquiring Your Own New Patients - No Dental Referrals Required.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
              Every Orthodontist Should Command Their Own Destiny...
            </p>
            <p className="text-xl text-gray-700">
              The Ortho Boost Digital Marketing Success Blueprint, Proven to Profitably Attracting Thousands of New Patients...
            </p>
            <p className="text-xl text-gray-700 underline mt-2">
              ...is Now Ready to Deploy in Your Practice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}