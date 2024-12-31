import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import { formatDateTime } from '@/utils/webinar-utils';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { BorderBeam } from "@/components/magicui/border-beam";

export const metadata = {
  title: "The Ultimate SEO Blueprint for Orthodontists",
  date: "2024-06-06",
  time: "19:30",
  description: "In this webinar Dr. Tyler Coles shares tips and strategies on how to rank #1 on Google organically using SEO and other resources. You will also learn how to optimize your Google My Business listing and other vital SEO rankings to help you attract new patients.",
  featuredImage: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80",
  published: true,
  tags: ["seo", "marketing", "growth"],
  host: {
    name: "Dr. Tyler Coles",
    title: "Orthodontic Marketing Expert",
    image: "/images/dr-coles-headshot.png"
  },
  replayUrl: "https://www.youtube.com/embed/EuHOQ9mx4iM",
  registrationUrl: "https://startorthoboost.com/schedule"
};

export default function Webinar() {
  const { title, date, time, description, host, replayUrl } = metadata;

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white pt-20">
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
                "How to rank #1 on Google organically",
                "Google My Business optimization strategies",
                "Local SEO best practices for orthodontists",
                "Content optimization techniques",
                "Key ranking factors for orthodontic websites"
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
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a FREE marketing call with our team to learn how we can help implement these SEO strategies in your practice.
            </p>
            <a
              href="https://startorthoboost.com/schedule"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
            >
              Schedule Your Free Call
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}