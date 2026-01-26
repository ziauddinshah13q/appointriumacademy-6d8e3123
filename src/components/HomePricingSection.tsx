import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { CheckCircle, ArrowRight, Zap, Crown, Rocket } from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '4,000 PKR',
    period: 'one-time',
    description: 'Perfect for beginners who want to learn the fundamentals.',
    features: [
      'AI Agents Basics',
      'n8n Masterclass',
      'GoHighLevel Tutorials',
      'Model Context Protocol Tutorials',
      '5 Live Agents Build',
      'Vipe Coding',
      'Client Hunting Program',
      'Full Chat Support',
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
      'n8n Self Host Free Method',
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
      'Full Business Launch',
      'Website Design for Your Agency',
      'Handle First 10 Sales Calls',
      'Trained Use of Appoint Funnels Testimonials',
      'One Auto Dialer for Dialing Calls',
      'Use Our Cold Calling & Cold Emailing Scripts',
      '1-on-1 Coaching Calls',
      'Done-For-You Templates',
      'White-Label Resources',
      'Agency Building Blueprint',
      'Lifetime Updates',
      '90-Day Guarantee',
    ],
    popular: false,
  },
];

const HomePricingSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Pricing & <span className="font-serif italic text-muted-foreground">Enrollment</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Invest in skills that pay for themselves. Choose the plan that fits your goals.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <ScrollAnimation 
              key={plan.name} 
              animation="fade-up" 
              delay={index * 0.1}
            >
              <div className={`relative h-full ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground rounded-full text-sm font-semibold text-background z-10">
                    Recommended
                  </div>
                )}
                <GlassCard 
                  className={`h-full flex flex-col ${plan.popular ? 'glow-border border-muted-foreground/30' : ''}`}
                  glow={plan.popular}
                >
                  <plan.icon className="w-10 h-10 text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
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
                      variant={plan.popular ? 'default' : 'outline'} 
                      size="lg" 
                      className={`w-full ${plan.popular ? 'bg-foreground text-background hover:bg-foreground/90' : ''}`}
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </GlassCard>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Guarantee */}
        <ScrollAnimation animation="fade-up" delay={0.3}>
          <div className="text-center glass-strong rounded-3xl p-12">
            <h3 className="text-2xl font-bold mb-4">
              Risk-Free <span className="font-serif italic text-muted-foreground">Guarantee</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Professional & Elite plans come with our 60-90 day guarantee. Get your first client or get a full refund. No questions asked.
            </p>
            <p className="text-muted-foreground text-sm">
              Questions? Email us at <a href="mailto:appointfunnels@gmail.com" className="text-primary hover:underline">appointfunnels@gmail.com</a>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HomePricingSection;
