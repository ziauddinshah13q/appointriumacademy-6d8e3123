import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Rocket, CheckCircle, ArrowRight, Target, DollarSign, Megaphone, Users, Sparkles } from 'lucide-react';

const curriculum = [
  { 
    title: 'Niche Selection', 
    description: 'Find the perfect AI niche with high demand and low competition',
    icon: Target
  },
  { 
    title: 'Solution Building', 
    description: 'Build AI-powered solutions that solve real problems for businesses',
    icon: Sparkles
  },
  { 
    title: 'How to Get Funds', 
    description: 'Learn funding strategies from bootstrapping to investor pitching',
    icon: DollarSign
  },
  { 
    title: 'How to Market It', 
    description: 'Master marketing strategies to reach your target customers',
    icon: Megaphone
  },
  { 
    title: 'Free Personal Branding to Scale', 
    description: 'Use personal branding and content to grow without paid ads',
    icon: Users
  },
];

const AIStartup = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Build Your Business</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              AI Startup <span className="gradient-text">Program</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to launch, fund, and scale your own AI automation startup from scratch using proven strategies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <GlassCard className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">5 Modules</div>
              <p className="text-muted-foreground">Complete Roadmap</p>
            </GlassCard>
            <GlassCard className="text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">$0</div>
              <p className="text-muted-foreground">Startup Cost Strategy</p>
            </GlassCard>
            <GlassCard className="text-center">
              <Megaphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">Free</div>
              <p className="text-muted-foreground">Marketing Methods</p>
            </GlassCard>
          </div>

          {/* Curriculum */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              What You'll <span className="text-primary">Learn</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculum.map((item) => (
                <GlassCard key={item.title} className="flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              Why Start an <span className="text-primary">AI Startup?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                'AI market growing exponentially',
                'Low barrier to entry with right knowledge',
                'High profit margins on AI services',
                'Remote-first business model',
                'Multiple revenue streams possible',
                'Build once, scale infinitely',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass-strong rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Launch Your AI <span className="text-primary">Startup</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get the complete roadmap to build, fund, and scale your AI automation business from zero.
            </p>
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIStartup;