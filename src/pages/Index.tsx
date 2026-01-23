import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HomePricingSection from '@/components/HomePricingSection';
import WhatIsAIAutomation from '@/components/WhatIsAIAutomation';
import AIAgentsVsAutomationSection from '@/components/AIAgentsVsAutomationSection';
import FAQsSection from '@/components/FAQsSection';
import PromiseSection from '@/components/PromiseSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
      <HomePricingSection />
      <WhatIsAIAutomation />
      <AIAgentsVsAutomationSection />
      <FAQsSection />
      <PromiseSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
