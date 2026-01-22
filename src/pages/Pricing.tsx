import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { CheckCircle, ArrowRight, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '4,000 PKR',
    period: 'one-time',
    description: 'Perfect for beginners who want to learn the fundamentals.',
    features: [
      'N8N Full Course',
      'AI Agents Basics',
      'Community Access',
      'Email Support',
      '30-Day Guarantee',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    icon: Crown,
    price: '10,000 PKR',
    period: 'one-time',
    description: 'Everything you need to build a profitable automation business.',
    features: [
      'All Starter Features',
      'N8N Self Host Free Method',
      'Voice Agents Program',
      'WhatsApp Automation',
      'Solution-Based Agents',
      'Live Classes Access',
      'Appoint Funnels System',
      '60-Day Client Guarantee',
      'Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    icon: Rocket,
    price: '20,000 PKR',
    period: 'one-time',
    description: 'Premium mentorship for serious agency builders.',
    features: [
      'All Professional Features',
      '1-on-1 Coaching Calls',
      'Done-For-You Templates',
      'White-Label Resources',
      'Agency Building Blueprint',
      'Lifetime Updates',
      'VIP Community Access',
      '90-Day Guarantee',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Pricing & <span className="gradient-text">Enrollment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Invest in skills that pay for themselves. Choose the plan that fits your goals.
            </p>
          </div>

          {/* Plans */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground rounded-full text-sm font-semibold text-background">
                    Recommended
                  </div>
                )}
                <GlassCard 
                  className={`h-full flex flex-col ${plan.popular ? 'glow-border border-muted-foreground/30' : ''}`}
                  glow={plan.popular}
                >
                  <plan.icon className="w-10 h-10 text-muted-foreground mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      variant={plan.popular ? 'hero' : 'heroOutline'} 
                      size="lg" 
                      className="w-full"
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="text-center glass-strong rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Risk-Free <span className="text-primary">Guarantee</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Professional & Elite plans come with our 60-90 day guarantee. Get your first client or get a full refund. No questions asked.
            </p>
            <p className="text-muted-foreground">
              Questions? Email us at <a href="mailto:appointfunnels@gmail.com" className="text-primary hover:underline">appointfunnels@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
