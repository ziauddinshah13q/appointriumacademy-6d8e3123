import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HomePricingSection from '@/components/HomePricingSection';
import FAQsSection from '@/components/FAQsSection';
import PromiseSection from '@/components/PromiseSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
      <HomePricingSection />
      <FAQsSection />
      <PromiseSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
