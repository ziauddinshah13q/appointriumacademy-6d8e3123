import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { ArrowRight, Bot, Brain, Cpu, Sparkles, CheckCircle, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligent Decision Making',
    description: 'Build agents that think and adapt based on context and data.',
  },
  {
    icon: Cpu,
    title: 'Autonomous Operations',
    description: 'Create systems that work 24/7 without human intervention.',
  },
  {
    icon: Sparkles,
    title: 'LLM Integration',
    description: 'Leverage OpenAI, Claude, and other models for smart responses.',
  },
  {
    icon: Zap,
    title: 'Real-Time Actions',
    description: 'Agents that respond instantly to triggers and events.',
  },
];

const curriculum = [
  'AI agent fundamentals & architecture',
  'Prompt engineering for agents',
  'Building with OpenAI & LangChain',
  'Memory and context management',
  'Tool calling and function execution',
  'Multi-agent orchestration',
  'Error handling and fallbacks',
  'Deploying production-ready agents',
];

const AIAgents = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI Agents Course</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Build Intelligent <span className="font-serif italic text-muted-foreground">AI Agents</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Create autonomous AI agents that work for your clients 24/7—handling tasks, making decisions, and delivering results.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature) => (
              <GlassCard key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Curriculum */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-3xl p-10 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Bot className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">What You'll Learn</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {curriculum.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-border">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Enroll Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIAgents;
