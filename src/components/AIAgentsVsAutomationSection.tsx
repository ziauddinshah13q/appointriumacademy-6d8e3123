import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { ArrowRight, Bot, Workflow, CheckCircle } from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const automationPoints = [
  'Follows predefined rules exactly',
  'Handles repetitive, predictable tasks',
  'Best for high-volume data processing',
  'Lower computational costs',
  'Easy to set up and maintain',
];

const agentPoints = [
  'Makes autonomous decisions',
  'Handles complex conversations',
  'Adapts to new situations',
  'Human-like reasoning',
  'Learns and improves over time',
];

const AIAgentsVsAutomationSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            AI Agents vs
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-muted-foreground mb-6">
            AI Automation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the difference is key to building the right solutions for your clients.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Automation Card */}
          <ScrollAnimation animation="fade-up" delay={0.1}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">AI Automation</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Rule-based workflows enhanced with AI capabilities. Perfect for predictable, 
                repetitive tasks that need to run consistently.
              </p>
              <ul className="space-y-3">
                {automationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollAnimation>

          {/* Agents Card */}
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Bot className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">AI Agents</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Autonomous systems that understand context, make decisions, and take actions 
                to achieve goals. Ideal for complex interactions.
              </p>
              <ul className="space-y-3">
                {agentPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollAnimation>
        </div>

        {/* Best Approach */}
        <ScrollAnimation animation="fade-up" delay={0.3}>
          <GlassCard className="text-center">
            <h3 className="text-xl font-bold mb-3">
              The Best Approach? <span className="font-serif italic text-muted-foreground">Use Both</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The most powerful solutions combine automation for efficiency with AI agents for intelligence. 
              We teach you to master both.
            </p>
            <Link to="/ai-agents-vs-automation">
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </GlassCard>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AIAgentsVsAutomationSection;
