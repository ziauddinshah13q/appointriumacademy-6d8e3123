import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Bot, CheckCircle, ArrowRight, Brain, MessageSquare, Cog } from 'lucide-react';

const topics = [
  'Understanding AI Agent Architecture',
  'LLM Selection & Optimization',
  'Prompt Engineering Mastery',
  'Memory & Context Management',
  'Tool & Function Calling',
  'Multi-Agent Systems',
  'Deployment & Scaling',
  'Cost Optimization',
];

const AIAgents = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/30 mb-6">
              <Bot className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Advanced Course</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              AI Agents <span className="gradient-text">Course</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build intelligent AI agents that work autonomously. Create systems that think, plan, and execute complex tasks.
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <GlassCard glow>
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Cognitive Architecture</h3>
              <p className="text-muted-foreground">
                Understand how to structure AI agents that reason, plan, and adapt to complex scenarios.
              </p>
            </GlassCard>
            <GlassCard glow>
              <MessageSquare className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Natural Conversations</h3>
              <p className="text-muted-foreground">
                Create agents that communicate naturally and handle nuanced customer interactions.
              </p>
            </GlassCard>
            <GlassCard glow>
              <Cog className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Real-World Integration</h3>
              <p className="text-muted-foreground">
                Connect agents to CRMs, databases, APIs, and external tools for maximum utility.
              </p>
            </GlassCard>
          </div>

          {/* Curriculum */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              Course <span className="text-primary">Modules</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={topic} className="flex items-center gap-3 p-4 glass rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <span className="font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Start Building AI Agents
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIAgents;
