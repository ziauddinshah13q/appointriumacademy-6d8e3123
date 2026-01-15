import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Phone, CheckCircle, ArrowRight, Mic, Clock, Users } from 'lucide-react';

const useCases = [
  { title: 'Appointment Booking', description: 'AI handles scheduling calls 24/7' },
  { title: 'Lead Qualification', description: 'Screen prospects before human handoff' },
  { title: 'Customer Support', description: 'Resolve common issues automatically' },
  { title: 'Order Status', description: 'Provide real-time updates via phone' },
  { title: 'Surveys & Feedback', description: 'Collect data through natural calls' },
  { title: 'Reminders & Follow-ups', description: 'Automated outreach that converts' },
];

const VoiceAgents = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">High-Value Skill</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Voice Agents <span className="gradient-text">Program</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build AI phone agents that handle calls 24/7. One of the most in-demand automation skills in the market.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <GlassCard className="text-center">
              <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">24/7</div>
              <p className="text-muted-foreground">Always Available</p>
            </GlassCard>
            <GlassCard className="text-center">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">90%</div>
              <p className="text-muted-foreground">Cost Reduction</p>
            </GlassCard>
            <GlassCard className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl font-bold mb-2">∞</div>
              <p className="text-muted-foreground">Scalability</p>
            </GlassCard>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              What You'll <span className="text-primary">Build</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <GlassCard key={useCase.title}>
                  <h3 className="font-display text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass-strong rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Master Voice <span className="text-primary">AI</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Voice agents command premium prices. Learn to build them and unlock high-ticket opportunities.
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

export default VoiceAgents;
