import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function WebinarBonus() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-6">Special Bonus Offer</h2>
          <p className="text-xl text-center text-gray-600">
            Attend the live webinar and save <span className="font-bold text-blue-600">$1,000</span> off our most popular Done-For-You marketing plans!
          </p>
        </motion.div>
      </div>
    </section>
  );
}