import PageLayout from '@/components/PageLayout';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Brain, 
  CheckCircle, 
  X,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Users
} from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const comparisonData = [
  {
    feature: 'Knowledge Source',
    chatbot: 'Pre-trained data only',
    rag: 'Your custom data + documents',
  },
  {
    feature: 'Accuracy',
    chatbot: 'Often hallucinates',
    rag: 'Grounded in real data',
  },
  {
    feature: 'Updates',
    chatbot: 'Requires retraining',
    rag: 'Instant with new documents',
  },
  {
    feature: 'Business Value',
    chatbot: 'Generic assistance',
    rag: 'Domain-specific expertise',
  },
  {
    feature: 'Pricing Power',
    chatbot: '$500-$2,000',
    rag: '$5,000-$50,000+',
  },
  {
    feature: 'Client Retention',
    chatbot: 'Easy to replace',
    rag: 'High switching costs',
  },
];

const chatbotLimitations = [
  'Cannot access company-specific information',
  'Makes up answers when uncertain',
  'Knowledge frozen at training cutoff',
  'Same generic responses as competitors',
  'Low perceived value to businesses',
  'Race to the bottom on pricing',
];

const ragAdvantages = [
  'Answers from your actual documents',
  'Cites sources for every response',
  'Updates instantly with new data',
  'Unique competitive advantage',
  'Solves real business problems',
  'Commands premium pricing',
];

const businessImpact = [
  {
    icon: DollarSign,
    title: '10x Higher Project Value',
    description: 'RAG solutions sell for $10K-$50K while simple chatbots struggle to command $2K.',
  },
  {
    icon: Users,
    title: 'Better Client Relationships',
    description: 'Clients depend on your solution because it uses their unique data.',
  },
  {
    icon: TrendingUp,
    title: 'Recurring Revenue',
    description: 'Maintenance, updates, and knowledge base expansion create ongoing income.',
  },
];

const RAGvsChatbots = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-6">
              <Brain className="w-4 h-4" />
              The Critical Difference
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              RAG Agents vs <span className="font-serif italic text-muted-foreground">Simple Chatbots</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding this difference is the key to building AI solutions that 
              businesses actually value—and will pay premium prices for.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Simple Chatbots */}
            <ScrollAnimation animation="fade-up">
              <GlassCard className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Simple Chatbots</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Wrapper around GPT or Claude that responds using only pre-trained knowledge. 
                  Easy to build, but limited in business value.
                </p>
                <ul className="space-y-3">
                  {chatbotLimitations.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollAnimation>

            {/* RAG Agents */}
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <GlassCard className="h-full border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Brain className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">RAG Agents</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Intelligent systems that retrieve from your data before generating responses. 
                  More complex to build, but delivers real business value.
                </p>
                <ul className="space-y-3">
                  {ragAdvantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Feature <span className="font-serif italic text-muted-foreground">Comparison</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.1}>
            <GlassCard className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-left p-4 font-semibold">Simple Chatbot</th>
                      <th className="text-left p-4 font-semibold">RAG Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={row.feature} className={index !== comparisonData.length - 1 ? 'border-b border-border/50' : ''}>
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-muted-foreground">{row.chatbot}</td>
                        <td className="p-4 text-primary">{row.rag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </ScrollAnimation>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Business <span className="font-serif italic text-muted-foreground">Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Why learning RAG is the best investment for your AI automation career.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {businessImpact.map((item, index) => (
              <ScrollAnimation key={item.title} animation="fade-up" delay={index * 0.1}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Real Example */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                A Real-World <span className="font-serif italic text-muted-foreground">Example</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                <strong className="text-foreground">Simple Chatbot:</strong> A law firm asks about their retainer agreement terms. 
                The chatbot gives generic legal information from the internet.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                <strong className="text-foreground">RAG Agent:</strong> The same question pulls directly from the firm's actual 
                retainer templates, billing policies, and past client agreements—giving accurate, 
                actionable answers specific to that firm.
              </p>
              <p className="text-muted-foreground">
                One is a toy. The other is a business tool worth $20,000+.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <GlassCard className="bg-card/50">
                <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
                <p className="text-muted-foreground mb-4">
                  Simple chatbots are becoming commoditized. Everyone can build one with a few API 
                  calls. But RAG systems require real expertise—understanding vector databases, 
                  chunking strategies, prompt engineering, and retrieval optimization.
                </p>
                <p className="text-muted-foreground">
                  That expertise is what separates $2K projects from $20K+ engagements.
                </p>
              </GlassCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <GlassCard className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Learn to Build <span className="font-serif italic text-muted-foreground">Premium AI Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our courses teach you everything from basic chatbots to production-ready RAG systems. 
                Build the skills that command premium pricing in the AI market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Start Learning
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/what-is-rag">
                  <Button variant="outline" size="lg">
                    What is RAG?
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </ScrollAnimation>
        </div>
      </section>
    </PageLayout>
  );
};

export default RAGvsChatbots;
