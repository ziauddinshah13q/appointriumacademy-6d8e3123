import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { TrendingUp, Clock, DollarSign, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: '$1.8 Trillion Market',
    description: 'AI automation market is exploding. Early movers are capturing massive opportunities.',
  },
  {
    icon: Clock,
    title: '40% Time Savings',
    description: 'Businesses save 40% of work hours with automation. They\'ll pay you to make it happen.',
  },
  {
    icon: DollarSign,
    title: '$5K-$50K Projects',
    description: 'Single automation projects command premium prices. Recurring revenue compounds.',
  },
  {
    icon: Globe,
    title: 'Remote-First Industry',
    description: 'Work from anywhere. Serve clients globally. Build your own schedule.',
  },
];

const opportunities = [
  'Every business needs automation',
  'Supply of experts is extremely low',
  'High barriers to entry protect you',
  'Recurring revenue from maintenance',
  'Skills transfer across industries',
  'AI tools get better every month',
];

const WhyAI = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Why <span className="gradient-text">AI Automation?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The biggest wealth transfer of our generation is happening right now. Those who master AI automation will capture it.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {reasons.map((reason) => (
              <GlassCard key={reason.title} glow>
                <reason.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Opportunity Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                The <span className="text-primary">Perfect Storm</span> of Opportunity
              </h2>
              <p className="text-muted-foreground mb-6">
                Right now, demand for AI automation experts far exceeds supply. Businesses are desperate for solutions, but most "experts" can't actually deliver. This is your window.
              </p>
              <ul className="space-y-3">
                {opportunities.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">The Reality</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Businesses needing AI</span>
                  <span className="font-display font-bold text-primary">85%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Qualified providers</span>
                  <span className="font-display font-bold text-secondary">3%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[3%] bg-gradient-to-r from-secondary to-primary rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  The gap between demand and supply creates massive opportunity for trained experts.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass-strong rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Don't Watch From the <span className="text-primary">Sidelines</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              In 5 years, you'll either be glad you started now, or wondering why you waited.
            </p>
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Start Learning Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhyAI;
