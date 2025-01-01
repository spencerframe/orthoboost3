import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Gift } from 'lucide-react';
import { formatDateTime } from '@/utils/webinar-utils';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { BorderBeam } from "@/components/magicui/border-beam";

export const metadata = {
  title: "How to Survive the Holidays - Marketing Strategies for Q4",
  date: "2024-11-15",
  time: "19:30",
  description: "Join Dr. Tyler Coles to discover proven marketing strategies for the holiday season. Learn how to optimize your campaigns during November and December, leverage social media effectively in Q4, and implement AI chatbots for better lead qualification.",
  featuredImage: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80",
  published: true,
  tags: ["marketing", "strategy", "growth", "social ads"],
  host: {
    name: "Dr. Tyler Coles",
    title: "Orthodontic Marketing Expert",
    image: "/images/dr-coles-headshot.png"
  },
  replayUrl: "https://www.youtube.com/embed/aITd-RKxu4A",
  registrationUrl: "https://startorthoboost.com/"
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
              thumbnailSrc="/images/facebook-ads-vs-google-ads.png"
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
            <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
            <div className="max-w-3xl mx-auto">
              {[
                "Optimize Google Ads during November and December",
                "Best performing social media strategies for Q4",
                "How to implement AI chatbots in your ads",
                "Black Friday campaign strategies",
                "Holiday season marketing optimization"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 mb-6"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-xl">{point}</span>
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
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">Special Bonus</h2>
            <p className="text-xl text-center text-gray-600">
              Get our Black Friday text blast campaign template (<span className="font-bold text-blue-600">$997 value</span>) completely FREE!
            </p>
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
            <h2 className="text-3xl font-bold mb-6">Ready for Done-For-You Marketing?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Learn more about our comprehensive marketing services and how we can help your practice thrive during the holiday season.
            </p>
            <a
              href="https://startorthoboost.com/"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}