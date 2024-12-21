import { motion } from "framer-motion";
import { Calendar, CheckCircle, Gift } from "lucide-react";
import { formatDateTime } from "@/utils/webinar-utils";
import IframeResizer from "iframe-resizer-react";

export const metadata = {
  title: "Mastering Google Ads PPC for Orthodontists in 2025",
  date: "2025-01-06",
  time: "19:30",
  description: "Join Dr. Tyler Coles and Tyler Loveall for an in-depth training on proven Google Ads strategies that consistently deliver high-quality orthodontic leads. Learn how to optimize your campaigns for maximum ROI and dominate your local market.",
  featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  published: true,
  tags: ["google ads", "ppc", "lead generation"],
  hosts: [
    {
      name: "Dr. Tyler Coles",
      title: "Primary Speaker",
      image: "/images/dr-coles-headshot.png",
      bio: "Dr. Tyler Coles has managed millions in Google Ads spend for orthodontic practices, consistently achieving 5-10x ROI through proven optimization strategies.",
    },
    {
      name: "Tyler Loveall",
      title: "Guest Speaker",
      image: "/images/tyler-loveall-headshot.png",
      bio: "Tyler Loveall is a digital marketing expert specializing in orthodontic practice growth, with over a decade of experience in PPC campaign optimization.",
    },
  ],
  benefits: ["Create high-converting Google Ads campaigns from scratch", "Advanced keyword research and targeting strategies", "Quality Score optimization techniques", "Local market domination tactics", "Budget optimization and ROI tracking"],
  registrationUrl: "https://api.leadconnectorhq.com/widget/booking/bPDlxff02GMUs51bdeL0",
};

export default function Webinar() {
  const { title, date, time, description, benefits, registrationUrl, hosts } = metadata;

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-blue-50 to-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <span className='inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4'>FREE LIVE WEBINAR</span>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>{title}</h1>
            <div className='flex items-center justify-center space-x-2 text-xl text-gray-600 mb-8'>
              <Calendar className='w-6 h-6' />
              <span>{formatDateTime(date, time)}</span>
            </div>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='prose prose-lg mx-auto'
          >
            <p className='text-xl text-gray-600 mb-6'>Are you tired of wasting money on Google Ads campaigns that don't deliver results? In this exclusive training, you'll learn the exact strategies we use to generate consistent, high-quality leads for orthodontic practices across the country.</p>
            <p className='text-xl text-gray-600'>From keyword research to campaign optimization, you'll get actionable insights that you can implement immediately to improve your PPC performance.</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-cyan-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-white'
          >
            <h2 className='text-3xl font-bold mb-8 text-center'>What You'll Learn</h2>
            <div className='max-w-3xl mx-auto'>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='flex items-start space-x-4 mb-6'
                >
                  <CheckCircle className='w-6 h-6 flex-shrink-0 mt-1' />
                  <span className='text-xl'>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hosts Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Meet Your Hosts</h2>
          <div className='grid md:grid-cols-2 gap-12'>
            {hosts.map((host, index) => (
              <motion.div
                key={host.name}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='flex flex-col items-center text-center'
              >
                <img
                  src={host.image}
                  alt={host.name}
                  className='w-48 h-48 rounded-full mb-6 shadow-lg'
                />
                <h3 className='text-2xl font-bold mb-2'>{host.name}</h3>
                <p className='text-blue-600 font-medium mb-4'>{host.title}</p>
                <p className='text-gray-600'>{host.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl p-8 shadow-lg'
          >
            <div className='flex items-center justify-center mb-6'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center'>
                <Gift className='w-8 h-8 text-blue-600' />
              </div>
            </div>
            <h2 className='text-3xl font-bold text-center mb-6'>Special Bonus</h2>
            <p className='text-xl text-center text-gray-600'>
              All attendees will receive our exclusive Google Ads Optimization Checklist and Campaign Setup Guide (<span className='font-bold text-blue-600'>$497 value</span>) for FREE!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold mb-6'>Reserve Your Spot Now</h2>
            <p className='text-xl text-gray-600'>Limited spots available—secure yours today!</p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <IframeResizer
              src={registrationUrl}
              className="w-full"
              id="msgsndr-webinar-registration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
