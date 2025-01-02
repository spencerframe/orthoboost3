import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import { formatDateTime } from '@/utils/webinar-utils';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { BorderBeam } from "@/components/magicui/border-beam";

export const metadata = {
  title: "Marketing Myths, Mistakes and Misconceptions for Orthodontists",
  date: "2024-02-23",
  time: "19:30",
  description: "Discovery marketing truths that helped me grow my orthodontic practice as well as over 250 clients across the US and Canada. Learn marketing myths you should avoid and marketing strategies that are the most effective at growing orthodontic and dental office.",
  featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  published: true,
  tags: ["marketing", "strategy", "growth"],
  host: {
    name: "Dr. Tyler Coles",
    title: "Orthodontic Marketing Expert",
    image: "/images/dr-coles-headshot.png"
  },
  replayUrl: "https://www.youtube.com/embed/ka2pQCzEUr0",
  registrationUrl: "https://www.Ortho-Boost/start"
};

export default function Webinar() {
  const { title, date, time, description, host, replayUrl } = metadata;

  return (
    <div className="py-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              WEBINAR REPLAY
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <div className="flex items-center justify-center space-x-2 text-xl text-gray-600 mb-8">
              <Calendar className="w-6 h-6" />
              <span>Originally aired on {formatDateTime(date, time)}</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl max-w-4xl mx-auto">
            <HeroVideoDialog
              videoSrc={replayUrl}
              thumbnailSrc="/images/facebook-ads-vs-google-ads.webp"
              thumbnailAlt="Webinar Replay"
            />
            <BorderBeam
              size={250}
              duration={15}
              borderWidth={8}
              colorFrom='#2563eb'
              colorTo='#06b6d4'
              delay={10}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="max-w-3xl mx-auto">
              {[
                "Dr. Victoria Chen gained 18 new starts in 6 weeks!",
                "Dr. Jim Stork gained 8 plus new starts in 1 month!",
                "Dr. Savita Chaudhry gained 32 new starts in just 2 months!",
                "Dr. Lylia MacKenzie gained 89 new consults in 4 months!"
              ].map((success, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 mb-6"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-xl">{success}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a call with our team to learn how we can help you implement these strategies in your practice.
            </p>
            <a
              href="https://www.Ortho-Boost/start"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
            >
              Schedule Your Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}