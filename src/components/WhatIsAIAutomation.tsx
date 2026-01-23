import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { ArrowRight, Workflow, Zap, RefreshCw, Database, Mail, Calendar } from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const benefits = [
  {
    icon: Zap,
    title: 'Save Time',
    description: 'Automate repetitive tasks and free up hours every week.',
  },
  {
    icon: RefreshCw,
    title: 'Reduce Errors',
    description: 'Eliminate human mistakes with consistent automated workflows.',
  },
  {
    icon: Database,
    title: 'Scale Operations',
    description: 'Handle more work without hiring more people.',
  },
];

const examples = [
  'Lead capture & CRM updates',
  'Email sequences & follow-ups',
  'Invoice generation & payments',
  'Data sync between platforms',
  'Social media scheduling',
  'Customer onboarding flows',
];

const WhatIsAIAutomation = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="fade-up">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                What is
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-muted-foreground mb-6">
                AI Automation?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                AI Automation combines artificial intelligence with workflow automation to handle 
                tasks that normally require human effort. It uses tools like n8n to connect apps, 
                process data, and execute actions automatically.
              </p>
              <p className="text-muted-foreground mb-8">
                From simple tasks like sending emails to complex workflows involving multiple 
                platforms, AI automation helps businesses save time, reduce costs, and scale 
                without limits.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {examples.map((example) => (
                  <span 
                    key={example} 
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>

              <Link to="/why-ai">
                <Button variant="outline" size="lg">
                  Learn More About AI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>

          {/* Right Content - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.title} animation="fade-up" delay={index * 0.1}>
                <GlassCard className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAIAutomation;
