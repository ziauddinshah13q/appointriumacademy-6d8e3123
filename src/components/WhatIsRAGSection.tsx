import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { ArrowRight, Database, Search, Brain, FileText, BookOpen, Layers } from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const benefits = [
  {
    icon: Database,
    title: 'Grounded Responses',
    description: 'Answers based on your actual data, not AI hallucinations.',
  },
  {
    icon: Search,
    title: 'Always Up-to-Date',
    description: 'Retrieve the latest information from your knowledge base.',
  },
  {
    icon: Layers,
    title: 'Domain Expertise',
    description: 'Build AI that truly understands your specific industry.',
  },
];

const useCases = [
  'Customer support bots',
  'Internal knowledge assistants',
  'Document Q&A systems',
  'Legal & compliance helpers',
  'Product recommendation engines',
  'Research & analysis tools',
];

const WhatIsRAGSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="fade-up">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                What is
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-muted-foreground mb-6">
                RAG Agent?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                RAG (Retrieval-Augmented Generation) combines the power of large language models 
                with your own data. Instead of relying solely on training data, RAG agents 
                retrieve relevant information from your knowledge base before generating responses.
              </p>
              <p className="text-muted-foreground mb-8">
                This means AI that actually knows your business, products, and documents—giving 
                accurate, contextual answers that generic chatbots simply can't provide.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {useCases.map((useCase) => (
                  <span 
                    key={useCase} 
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
                  >
                    {useCase}
                  </span>
                ))}
              </div>

              <Link to="/what-is-rag">
                <Button variant="outline" size="lg">
                  Learn More About RAG
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>

          {/* Right Content - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.title} animation="fade-up" delay={index * 0.1}>
                <GlassCard className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRAGSection;
