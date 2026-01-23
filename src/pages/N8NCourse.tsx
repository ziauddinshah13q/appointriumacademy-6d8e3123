import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Workflow, CheckCircle, ArrowRight, Play, Code, Database, Zap } from 'lucide-react';

const modules = [
  'n8n interface\\login',
  'Triggers & Webhooks',
  'HTTP Requests & APIs',
  'Data Transformation',
  'Conditional Logic & Loops',
  'Database Operations',
  'Error Handling & Debugging',
  'Advanced Workflows',
  'Production Deployment',
  'Client-Ready Templates',
];

const features = [
  { icon: Play, title: '50+ Video Lessons', description: 'Comprehensive step-by-step tutorials' },
  { icon: Code, title: '20+ Templates', description: 'Ready-to-deploy workflow blueprints' },
  { icon: Database, title: 'Real Projects', description: 'Build actual client solutions' },
  { icon: Zap, title: 'Live Support', description: 'Get help when you\'re stuck' },
];

const N8NCourse = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Workflow className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Most Popular Course</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              n8n <span className="gradient-text">Full Course</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master n8n from absolute beginner to advanced automation architect. Build workflows that businesses pay $5K-$50K for.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature) => (
              <GlassCard key={feature.title}>
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Curriculum */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Complete <span className="text-primary">Curriculum</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our n8n course takes you from zero experience to building complex, production-ready automations that solve real business problems.
              </p>
              <div className="space-y-3">
                {modules.map((module, index) => (
                  <div key={module} className="flex items-center gap-3 p-3 glass rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-8 sticky top-24">
              <h3 className="font-display text-2xl font-bold mb-4">What You'll Build</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Lead capture & CRM automation',
                  'Email marketing workflows',
                  'Social media schedulers',
                  'Invoice & payment systems',
                  'Customer onboarding flows',
                  'Data sync between platforms',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pricing">
                <Button variant="hero" size="lg" className="w-full">
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default N8NCourse;
