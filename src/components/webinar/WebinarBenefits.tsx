import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function WebinarBenefits() {
  const benefits = [
    "Plug-and-play social media campaigns that drive results",
    "How to unlock new patient starts through dynamic Google Ads",
    "The power of our AI chatbot that pre-qualifies leads",
    "How to ONLY get high-quality leads"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 mb-6"
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-xl">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}