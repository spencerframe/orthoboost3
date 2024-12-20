import { WebinarPost } from '@/types/webinar';

export const metadata: WebinarPost = {
  title: "2024 Marketing Gameplan",
  date: "2024-03-20",
  time: "19:30",
  description: "Join Dr. Tyler Coles for a special live training to kickstart your 2024 with proven marketing strategies that consistently generate 20+ new patients in January and February.",
  featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  published: true,
  tags: ["marketing", "strategy", "growth"],
  host: {
    name: "Dr. Tyler Coles",
    title: "Orthodontic Marketing Expert",
    image: "/images/tyler-loveall-headshot.png"
  },
  benefits: [
    "Plug-and-play social media campaigns that drive results",
    "How to unlock new patient starts through dynamic Google Ads",
    "The power of our AI chatbot that pre-qualifies leads",
    "How to ONLY get high-quality leads"
  ],
  registrationUrl: "https://api.leadconnectorhq.com/widget/booking/bPDlxff02GMUs51bdeL0"
};

export default function Webinar() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            FREE LIVE WEBINAR
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xl text-gray-600 mb-8">
            <Calendar className="w-6 h-6" />
            <span>{formatDateTime(date, time)}</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {description}
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
          className="prose prose-lg mx-auto"
        >
          <p className="text-xl text-gray-600 mb-6">
            Can you believe 2024 is almost over? Now is the perfect time to reflect on your goals and marketing efforts throughout the year.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            I've been marketing my own orthodontic practice for over 15 years and have seen many different marketing strategies—some work well, and others not so much. But there are a few secret campaigns I've always relied on to drive the best growth, especially as we head into the new year.
          </p>
          <p className="text-xl text-gray-600">
            I love this time of year because setting up my campaigns in December guarantees a HUGE January and February. Every time. Without fail.
          </p>
        </motion.div>
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
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img
              src={image}
              alt={name}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">Meet Your Host</h2>
            <p className="text-xl text-gray-600 mb-6">
              {name} is an experienced orthodontic marketing expert who has helped hundreds of practices achieve remarkable growth through proven marketing strategies.
            </p>
            <p className="text-xl text-gray-600">
              If you're ready to transform your practice's marketing strategy, you don't want to miss this special live training!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
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