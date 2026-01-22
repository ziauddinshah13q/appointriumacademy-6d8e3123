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
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left side heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-muted-foreground mb-6">
              Courses
            </h2>
            <p className="text-muted-foreground text-lg">
              From zero experience to landing paying clients. Our comprehensive curriculum covers it all.
            </p>
          </div>

          {/* Right side cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <GlassCard key={feature.title} className="group">
                <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
