import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PromiseSection from '@/components/PromiseSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
      <PromiseSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
