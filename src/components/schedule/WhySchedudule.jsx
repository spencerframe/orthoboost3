import { motion } from 'framer-motion';
import { Target, Clock, Lightbulb, ArrowRight } from 'lucide-react';

export default function WhySchedule() {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Strategy",
      description: "Get tailored solutions that fit your unique practice needs"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Skip the back-and-forth emails with direct, real-time communication"
    },
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Tap into years of industry experience in just one call"
    },
    {
      icon: ArrowRight,
      title: "Clear Next Steps",
      description: "Leave the call with an actionable plan forward"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Why Schedule a Call?
      </h2>
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <benefit.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}