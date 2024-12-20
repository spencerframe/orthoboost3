import { Search, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { LeadSources } from '@/components/custom/LeadSources';
import { MarketingService } from '@/components/services/MarketingService';
import { LeadManagement } from '@/components/services/LeadManagement';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export default function ServicePage() {
  const marketingServices = [
    {
      icon: Search,
      title: "Search Engine Advertising",
      description: "Dominate Google search results with targeted ads that convert searchers into scheduled appointments.",
      features: [
        "Strategic keyword targeting",
        "Conversion-optimized campaigns",
        "Local market dominance"
      ],
      initialX: -20
    },
    {
      icon: Video,
      title: "Social Media Marketing",
      description: "Strategic campaigns on TikTok, Facebook, and Instagram to reach potential patients where they spend their time.",
      features: [
        "Engaging content creation",
        "Platform-specific strategies",
        "Targeted audience reach"
      ],
      initialX: 20
    }
  ];

  return (
    <div className="pt-20">
      <ServiceHero />
      
      <div className="py-10">
        <LeadSources />
      </div>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {marketingServices.map((service, index) => (
              <MarketingService key={index} {...service} />
            ))}
          </div>
          <LeadManagement />
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
}