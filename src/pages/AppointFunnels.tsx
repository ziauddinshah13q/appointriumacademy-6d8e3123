import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Layers, ArrowRight, CheckCircle, Mail, MousePointer, BarChart } from 'lucide-react';

const components = [
  {
    icon: MousePointer,
    title: 'Landing Pages',
    description: 'High-converting templates designed for AI services.',
  },
  {
    icon: Mail,
    title: 'Email Sequences',
    description: 'Automated follow-ups that nurture leads to clients.',
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Track performance and optimize your funnel.',
  },
];

const AppointFunnels = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Marketing System</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Appoint Funnels <span className="gradient-text">System</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Done-for-you marketing funnels designed specifically for AI automation services. Attract, nurture, and convert clients on autopilot.
            </p>
          </div>

          {/* Components */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {components.map((component) => (
              <GlassCard key={component.title} glow>
                <component.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{component.title}</h3>
                <p className="text-muted-foreground">{component.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* What's Included */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              Everything You <span className="text-primary">Need</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Complete funnel templates',
                'Lead magnet designs',
                'Email swipe files',
                'Social media templates',
                'Video scripts',
                'Proposal templates',
                'Case study frameworks',
                'Testimonial templates',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 glass rounded-xl">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Get the Funnel System
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AppointFunnels;
