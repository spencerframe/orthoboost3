import { motion } from "framer-motion";
import { useScript } from "@/hooks/useScript";
import IframeResizer from "iframe-resizer-react";

export function WebinarRegistration() {
  useScript("https://link.msgsndr.com/js/embed.js");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Reserve Your Spot Now</h2>
          <p className="text-xl text-gray-600">
            Seats are limited—sign up today!
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <IframeResizer
            src="https://api.leadconnectorhq.com/widget/booking/bPDlxff02GMUs51bdeL0"
            className="w-full"
            id="msgsndr-webinar-registration"
          />
        </div>
      </div>
    </section>
  );
}