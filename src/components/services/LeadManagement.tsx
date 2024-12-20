import { motion } from 'framer-motion';
import { PhoneCall, CheckCircle } from 'lucide-react';

export function LeadManagement() {
  const features = [
    "Responding to leads in minutes - even on holidays",
    "Never miss another lead opportunity",
    "Seamless practice software integration",
    "Automated appointment reminders",
    "Expert objection handling",
    "Value proposition communication"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-600 to-cyan-500 p-12 rounded-2xl text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <PhoneCall className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">New Lead Follow-up & Scheduling</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Our comprehensive lead management system combines 24/7 scheduling with expert follow-up to ensure no opportunity is ever missed.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">24/7 Scheduling Excellence</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}