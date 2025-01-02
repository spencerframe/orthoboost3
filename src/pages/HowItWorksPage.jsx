import { Search, Video, PhoneCall, Target } from 'lucide-react';
import { HeroSection } from '@/components/how-it-works/HeroSection';
import { ProcessStep } from '@/components/how-it-works/ProcessStep';
import { CTASection } from '@/components/how-it-works/CTASection';
import { SEOHead } from '@/components/seo/SEOHead';
import { PAGE_METADATA } from '@/utils/page-metadata';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "Strategic Campaign Creation",
      description: "We develop targeted Google Ads campaigns to reach potential patients actively searching for orthodontic treatment.",
      details: [
        "Local market targeting",
        "Keyword optimization",
        "Compelling ad copy",
        "A/B testing"
      ]
    },
    {
      icon: Video,
      title: "Social Media Marketing",
      description: "Strategic campaigns across highest performing platforms such as TikTok, Facebook, and Instagram to showcase your practice and attract ideal patients.",
      details: [
        "Scroll-stopping content",
        "Targeted demographics",
        "Engagement optimization",
        "Chatbot qualifying"
      ]
    },
    {
      icon: PhoneCall,
      title: "24/7 Scheduling",
      description: "Never miss a lead with our round-the-clock scheduling team responding within 5 minutes - even on holidays.",
      details: [
        "5-minute response time",
        "Holiday coverage",
        "No missed opportunities",
        "Instant engagement"
      ]
    },
    {
      icon: Target,
      title: "Performance Tracking",
      description: "Monitor your ROI and campaign performance through our comprehensive analytics dashboard.",
      details: [
        "Real-time metrics",
        "Cost per lead tracking",
        "Conversion analytics",
        "ROI reporting"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <SEOHead {...PAGE_METADATA.howItWorks} />
      <HeroSection />
      
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}