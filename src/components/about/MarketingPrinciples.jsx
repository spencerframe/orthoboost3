import { motion } from 'framer-motion';

const principles = [
  {
    number: "1",
    title: "Independence From Referrals",
    description: "Every Orthodontic Practice Can Generate Their Own New Patients, No Dentist Referrals Required."
  },
  {
    number: "2",
    title: "Investment, Not Expense",
    description: "Your Marketing Dollars Propel Practice Growth – Positive ROI From Your Marketing Spend Unlocks Unlimited Practice Growth Opportunities."
  },
  {
    number: "3",
    title: "Human Touch Amplifies Automation",
    description: "Social Media Ads Lay the Foundation, Real Humans Are Needed to Secure ROI through Prompt New Lead Follow-Up."
  }
];

export function MarketingPrinciples() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Ortho Boost's Key Marketing Principles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                {principle.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}