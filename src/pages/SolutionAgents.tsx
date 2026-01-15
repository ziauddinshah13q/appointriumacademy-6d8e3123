import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Lightbulb, ArrowRight, Building, ShoppingBag, Stethoscope, Home, Briefcase, GraduationCap } from 'lucide-react';

const industries = [
  {
    icon: Building,
    title: 'Real Estate',
    description: 'Lead qualification, property matching, appointment scheduling agents.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description: 'Order tracking, customer support, product recommendation agents.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Appointment booking, patient intake, follow-up agents.',
  },
  {
    icon: Home,
    title: 'Home Services',
    description: 'Quote requests, scheduling, customer communication agents.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Client onboarding, billing, project update agents.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Enrollment, student support, course delivery agents.',
  },
];

const SolutionAgents = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/30 mb-6">
              <Lightbulb className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Industry-Specific</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Solution-Based <span className="gradient-text">AI Agents</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pre-built agent blueprints for specific industries. Deploy faster, charge more, deliver proven results.
            </p>
          </div>

          {/* Industries */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {industries.map((industry) => (
              <GlassCard key={industry.title}>
                <industry.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Benefits */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center mb-20">
            <h2 className="font-display text-3xl font-bold mb-6">
              Why <span className="text-primary">Solution-Based?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">Faster deployment with proven templates</p>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-secondary mb-2">3x</div>
                <p className="text-muted-foreground">Higher prices for industry expertise</p>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Industries covered with blueprints</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Access All Blueprints
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionAgents;
