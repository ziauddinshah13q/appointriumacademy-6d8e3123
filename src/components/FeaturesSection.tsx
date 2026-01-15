import { Bot, Workflow, Phone, MessageSquare, Users, Zap } from 'lucide-react';
import GlassCard from './GlassCard';

const features = [
  {
    icon: Workflow,
    title: 'N8N Mastery',
    description: 'From beginner to advanced automation expert. Build complex workflows that scale.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Create intelligent agents that work autonomously for your clients.',
  },
  {
    icon: Phone,
    title: 'Voice Agents',
    description: 'Build AI-powered phone systems that handle calls 24/7.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    description: 'Automate customer conversations and sales on WhatsApp.',
  },
  {
    icon: Users,
    title: 'Live Mentorship',
    description: 'Weekly live classes with real-time feedback and guidance.',
  },
  {
    icon: Zap,
    title: 'Client Systems',
    description: 'Ready-to-deploy templates that solve real business problems.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Master AI Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From zero experience to landing paying clients. Our comprehensive curriculum covers it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={feature.title} className="group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
