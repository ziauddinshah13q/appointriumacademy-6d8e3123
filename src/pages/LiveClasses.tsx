import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Video, Users, MessageCircle, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Video,
    title: 'Weekly Live Sessions',
    description: 'Join live coding sessions where we build real projects together.',
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Q&A',
    description: 'Get your questions answered instantly by expert instructors.',
  },
  {
    icon: Users,
    title: 'Community Access',
    description: 'Connect with fellow students and share knowledge.',
  },
  {
    icon: Calendar,
    title: 'Office Hours',
    description: 'Book 1-on-1 sessions for personalized guidance.',
  },
];

const LiveClasses = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Video className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Interactive Learning</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Live Classes & <span className="gradient-text">Mentorship</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn faster with live instruction. Get feedback, ask questions, and build alongside experts in real-time.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit) => (
              <GlassCard key={benefit.title} glow>
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* What's Included */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              What's <span className="text-primary">Included</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Weekly group coaching calls',
                'Monthly masterclasses',
                'Private community access',
                'Recorded session library',
                'Code review sessions',
                'Guest expert sessions',
                'Accountability partners',
                'Direct instructor messaging',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
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
                Join Live Classes
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LiveClasses;
