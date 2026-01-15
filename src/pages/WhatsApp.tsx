import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { MessageSquare, CheckCircle, ArrowRight, Users, ShoppingCart, Bell } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Automated Responses',
    description: 'Instant replies to common questions, 24/7.',
  },
  {
    icon: Users,
    title: 'Lead Nurturing',
    description: 'Automated sequences that convert prospects.',
  },
  {
    icon: ShoppingCart,
    title: 'Sales Automation',
    description: 'Product catalogs and ordering via chat.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Order updates, reminders, and alerts.',
  },
];

const WhatsApp = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
              <MessageSquare className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">2B+ Users</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              WhatsApp <span className="gradient-text">Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automate customer conversations on the world's most popular messaging platform. Scale support and sales without scaling headcount.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature) => (
              <GlassCard key={feature.title}>
                <feature.icon className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* What You'll Learn */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              What You'll <span className="text-primary">Master</span>
            </h2>
            <div className="space-y-4">
              {[
                'WhatsApp Business API setup and configuration',
                'Building conversation flows with N8N',
                'Integrating with CRMs and databases',
                'Payment processing via WhatsApp',
                'Multi-language support and localization',
                'Analytics and optimization',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 glass rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Start WhatsApp Automation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhatsApp;
