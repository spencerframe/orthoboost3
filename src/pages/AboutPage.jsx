import { motion } from 'framer-motion';
import { Hero } from '@/components/about/Hero';
import { TeamMember } from '@/components/about/TeamMember';
import { MarketingPrinciples } from '@/components/about/MarketingPrinciples';
import { CTASection } from '@/components/about/CTASection';
import { SEOHead } from '@/components/seo/SEOHead';
import { PAGE_METADATA } from '@/utils/page-metadata';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SEOHead {...PAGE_METADATA.about} />
      <Hero />
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent underline">Meet the Architects</span> of Ortho Boost
            </h2>
          </motion.div>

          <TeamMember
            name="Dr. Tyler Coles"
            title="Orthodontist & Marketer"
            image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80"
            description={[
              "Dr. Tyler Coles has created a system of harnessing the power of social media ads to attract new orthodontic patients.",
              "Within his own practice, Dr. Ty consistently generates a staggering $3 million in production annually from social media ads, all while maintaining a 9:1 return on investment. Through this strategy, he was able to propel his own practice from a modest two-location operation to the Phoenix area's largest private practice.",
              "Currently over 80% of all new patients in his practice are generated from digital marketing.",
              "It's safe to say there might not be an orthodontist out there who's run more ads on social media than Dr. Ty."
            ]}
          />

          <div className="mt-20">
            <TeamMember
              name="Tyler Loveall"
              title="A Proven Guide to Patient Acquisition"
              image="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
              description={[
                "Tyler Loveall is a seasoned veteran in the realm of orthodontic marketing, boasting an impressive 7-year journey. His career has seen him collaborate with four distinct agencies and engage with countless orthodontic practices in both the United States and Canada.",
                "Throughout his tenure in the industry, Tyler has amassed a treasure trove of best practices and battle-tested strategies for the art of new patient acquisition in orthodontics. He's a walking encyclopedia of what works.",
                "Tyler's most significant achievement lies in spearheading the revolutionary new lead follow-up system, a game-changing innovation that has transformed Ortho-Boost's ability to profitably generate new patients.",
                "No other agency comes close to our commitment to ensuring campaign success. Gone are the days when you had to rely solely on your front desk's follow-up abilities. Our dedicated follow-up team has one clear mission – to ensure that every lead we attract not only arrives at your practice but also commences their treatment journey."
              ]}
              reverse
            />
          </div>
        </div>
      </section>

      <MarketingPrinciples />
      <CTASection />
    </div>
  );
}