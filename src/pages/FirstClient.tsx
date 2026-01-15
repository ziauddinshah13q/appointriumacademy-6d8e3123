import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Target, ArrowRight, CheckCircle, Shield, Rocket, Users, DollarSign } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Learn the Skills',
    description: 'Master N8N, AI agents, and automation fundamentals.',
  },
  {
    number: '02',
    title: 'Build Your Portfolio',
    description: 'Create demo projects that showcase your capabilities.',
  },
  {
    number: '03',
    title: 'Find Your Niche',
    description: 'Pick an industry and become the go-to expert.',
  },
  {
    number: '04',
    title: 'Land Your Client',
    description: 'Use our proven outreach system to close deals.',
  },
];

const FirstClient = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6 animate-glow-pulse">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Main Promise</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Get Your First Client in <span className="gradient-text">60 Days</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              This isn't just a course. It's a complete system designed with one goal: getting you paid.
            </p>
            <div className="glass-strong rounded-2xl p-6 inline-block">
              <p className="text-2xl font-display font-bold">
                <span className="text-primary">Or you don't pay.</span> Full refund guarantee.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              The <span className="text-primary">Roadmap</span>
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-display font-bold text-primary-foreground flex-shrink-0">
                    {step.number}
                  </div>
                  <GlassCard className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <GlassCard glow>
              <Rocket className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">Outreach System</h3>
              <ul className="space-y-3">
                {[
                  'Proven cold email templates',
                  'LinkedIn outreach scripts',
                  'Proposal templates that convert',
                  'Pricing strategies and negotiation',
                  'Client management systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard glow>
              <DollarSign className="w-12 h-12 text-secondary mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">Pricing Guide</h3>
              <ul className="space-y-3">
                {[
                  'Know your worth',
                  'Value-based pricing frameworks',
                  'Retainer vs. project pricing',
                  'Upselling and cross-selling',
                  'Building recurring revenue',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* Guarantee */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center glow-border">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold mb-4">
              The <span className="gradient-text">60-Day Guarantee</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete the program, follow the system, and if you don't land a paying client within 60 days, we'll refund every penny. No questions asked.
            </p>
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Claim Your Spot
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FirstClient;
