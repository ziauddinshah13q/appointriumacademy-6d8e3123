import PageLayout from '@/components/PageLayout';
import GlassCard from '@/components/GlassCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Workflow, Brain, Zap, Target, RefreshCw, CheckCircle } from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const comparisonPoints = [
  {
    aspect: 'Decision Making',
    automation: 'Follows predefined rules and workflows exactly as programmed',
    agents: 'Makes autonomous decisions based on context and learning',
  },
  {
    aspect: 'Flexibility',
    automation: 'Handles predictable, repetitive tasks consistently',
    agents: 'Adapts to new situations and handles edge cases intelligently',
  },
  {
    aspect: 'Learning',
    automation: 'Static - requires manual updates to change behavior',
    agents: 'Dynamic - can improve and learn from interactions over time',
  },
  {
    aspect: 'Complexity',
    automation: 'Best for linear, step-by-step processes',
    agents: 'Excels at complex, multi-step reasoning tasks',
  },
  {
    aspect: 'Human Interaction',
    automation: 'Limited - typically trigger-based responses',
    agents: 'Natural conversations and context-aware responses',
  },
  {
    aspect: 'Use Cases',
    automation: 'Data sync, email sequences, form processing',
    agents: 'Customer support, sales calls, research tasks',
  },
];

const automationBenefits = [
  'Reliable and predictable outcomes',
  'Easy to set up and maintain',
  'Lower computational costs',
  'Perfect for high-volume repetitive tasks',
  'Integrates with 500+ apps via n8n',
  'No AI hallucination risks',
];

const agentBenefits = [
  'Human-like reasoning and responses',
  'Handles complex conversations',
  '24/7 availability without fatigue',
  'Scales to unlimited interactions',
  'Continuous improvement over time',
  'Reduces need for human intervention',
];

const AIAgentsVsAutomation = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <ScrollAnimation animation="fade-up">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                AI Agents vs <span className="font-serif italic text-muted-foreground">AI Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding the difference is crucial for building the right solutions for your clients.
              </p>
            </div>
          </ScrollAnimation>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">AI Automation</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  AI Automation uses predefined workflows to execute tasks automatically. Think of it as a 
                  sophisticated "if this, then that" system enhanced with AI capabilities like text extraction, 
                  classification, or summarization.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <RefreshCw className="w-4 h-4" />
                  <span>Rule-based execution with AI enhancement</span>
                </div>
                <ul className="space-y-3">
                  {automationBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Bot className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">AI Agents</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  AI Agents are autonomous systems that can understand context, make decisions, and take 
                  actions to achieve goals. They can reason, plan, and adapt their behavior based on 
                  the situation.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Brain className="w-4 h-4" />
                  <span>Autonomous decision-making with reasoning</span>
                </div>
                <ul className="space-y-3">
                  {agentBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollAnimation>
          </div>

          {/* Detailed Comparison Table */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">
                Side-by-Side <span className="font-serif italic text-muted-foreground">Comparison</span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold">Aspect</th>
                      <th className="text-left py-4 px-4 font-semibold">
                        <div className="flex items-center gap-2">
                          <Workflow className="w-5 h-5" />
                          Automation
                        </div>
                      </th>
                      <th className="text-left py-4 px-4 font-semibold">
                        <div className="flex items-center gap-2">
                          <Bot className="w-5 h-5" />
                          AI Agents
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonPoints.map((point, index) => (
                      <tr key={point.aspect} className={index % 2 === 0 ? 'bg-card/50' : ''}>
                        <td className="py-4 px-4 font-medium">{point.aspect}</td>
                        <td className="py-4 px-4 text-sm text-muted-foreground">{point.automation}</td>
                        <td className="py-4 px-4 text-sm text-muted-foreground">{point.agents}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>

          {/* When to Use Each */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">
                When to Use <span className="font-serif italic text-muted-foreground">Each Approach</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Choose Automation When:</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Tasks follow a predictable pattern',
                      'Speed and reliability are critical',
                      'You need to process high volumes of data',
                      'Budget is limited (lower AI costs)',
                      'The process is well-defined with clear rules',
                      'Integration between apps is the main goal',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Choose AI Agents When:</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Tasks require understanding and reasoning',
                      'Conversations or interactions are involved',
                      'Edge cases and variations are common',
                      'You need human-like decision making',
                      'The task benefits from learning over time',
                      'Customer experience is the priority',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          </ScrollAnimation>

          {/* The Best Approach */}
          <ScrollAnimation animation="fade-up">
            <GlassCard className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4">
                The Best Approach? <span className="font-serif italic text-muted-foreground">Use Both</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
                The most powerful solutions combine automation for efficiency with AI agents for intelligence. 
                For example, use n8n automation to capture leads and sync data, while AI agents handle 
                conversations and complex decision-making.
              </p>
              <p className="text-muted-foreground mb-8">
                At Appoint Academy, we teach you to master both approaches so you can build 
                the perfect solution for any client need.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/courses">
                  <Button variant="default" size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                    Explore Our Courses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <p className="text-xs tracking-[0.2em] text-primary uppercase">
                LEARN BOTH APPROACHES IN OUR COMPREHENSIVE PROGRAMS
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIAgentsVsAutomation;
