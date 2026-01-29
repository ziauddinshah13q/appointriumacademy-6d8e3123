import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { ArrowRight, MessageSquare, Brain, CheckCircle } from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const chatbotPoints = [
  'Relies only on training data',
  'Generic, one-size-fits-all responses',
  'Can hallucinate or make up facts',
  'Limited to pre-trained knowledge',
  'Quick to deploy but limited value',
];

const ragPoints = [
  'Retrieves from your actual data',
  'Contextual, business-specific answers',
  'Grounded in real documents',
  'Always current with your knowledge base',
  'Higher value for complex use cases',
];

const RAGvsChatbotsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            RAG Agents vs
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-muted-foreground mb-6">
            Simple Chatbots
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not all AI chatbots are created equal. Learn why RAG-powered solutions 
            deliver 10x more value for businesses.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Simple Chatbots Card */}
          <ScrollAnimation animation="fade-up" delay={0.1}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Simple Chatbots</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Basic AI assistants that respond using only their pre-trained knowledge. 
                Good for general questions but limited for business applications.
              </p>
              <ul className="space-y-3">
                {chatbotPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollAnimation>

          {/* RAG Agents Card */}
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <GlassCard className="h-full border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Brain className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">RAG Agents</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Intelligent systems that retrieve information from your data before responding. 
                Perfect for accurate, business-specific AI solutions.
              </p>
              <ul className="space-y-3">
                {ragPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollAnimation>
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation animation="fade-up" delay={0.3}>
          <GlassCard className="text-center">
            <h3 className="text-xl font-bold mb-3">
              Why Choose RAG? <span className="font-serif italic text-muted-foreground">Better Results, Higher Value</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              RAG agents command premium pricing because they solve real business problems. 
              Learn to build them and offer solutions clients will actually pay for.
            </p>
            <Link to="/rag-vs-chatbots">
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

export default RAGvsChatbotsSection;
