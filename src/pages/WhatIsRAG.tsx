import PageLayout from '@/components/PageLayout';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Search, 
  Brain, 
  FileText, 
  Layers, 
  ArrowRight,
  CheckCircle,
  Workflow,
  Zap
} from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const howItWorks = [
  {
    step: '01',
    title: 'Document Ingestion',
    description: 'Your documents, PDFs, websites, and data are processed and stored in a vector database.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Query & Retrieval',
    description: 'When a user asks a question, the system searches for the most relevant chunks of information.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Contextual Generation',
    description: 'The LLM uses the retrieved context to generate accurate, grounded responses.',
    icon: Brain,
  },
];

const benefits = [
  'Eliminates AI hallucinations with grounded responses',
  'Uses your proprietary data and documents',
  'Always up-to-date without retraining',
  'Domain-specific expertise for your industry',
  'Handles complex, nuanced queries',
  'Provides source citations for transparency',
  'Scales with your knowledge base',
  'Reduces support tickets and manual work',
];

const useCases = [
  {
    title: 'Customer Support',
    description: 'AI that knows your products, policies, and FAQs inside out.',
    icon: Zap,
  },
  {
    title: 'Internal Knowledge Base',
    description: 'Help employees find information across company documents instantly.',
    icon: Layers,
  },
  {
    title: 'Legal & Compliance',
    description: 'Navigate complex regulations with AI that understands your legal documents.',
    icon: FileText,
  },
  {
    title: 'Sales Enablement',
    description: 'Give sales teams instant access to product specs, pricing, and competitive intel.',
    icon: Workflow,
  },
];

const WhatIsRAG = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-6">
              <Database className="w-4 h-4" />
              Advanced AI Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              What is <span className="font-serif italic text-muted-foreground">RAG?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Retrieval-Augmented Generation (RAG) is the secret behind AI that actually knows 
              your business. Learn how it works and why it's transforming enterprise AI.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is RAG */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Problem with <span className="font-serif italic text-muted-foreground">Generic AI</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Standard AI models like ChatGPT are trained on public internet data. They're great 
                for general questions, but they don't know anything about YOUR business, products, 
                or internal processes.
              </p>
              <p className="text-muted-foreground mb-6">
                Worse, when asked about specific topics they don't know, they often "hallucinate"—
                confidently making up information that sounds right but is completely wrong.
              </p>
              <p className="text-muted-foreground">
                RAG solves this by giving AI access to your actual data, ensuring every response 
                is grounded in real information.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <GlassCard>
                <h3 className="text-xl font-bold mb-4">RAG = Retrieval + Generation</h3>
                <p className="text-muted-foreground mb-4">
                  RAG combines two powerful capabilities:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Retrieval:</span>
                      <span className="text-muted-foreground"> Searching your knowledge base for relevant information</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Generation:</span>
                      <span className="text-muted-foreground"> Using that context to generate accurate, helpful responses</span>
                    </div>
                  </li>
                </ul>
              </GlassCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How RAG <span className="font-serif italic text-muted-foreground">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple three-step process that transforms generic AI into a domain expert.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <ScrollAnimation key={item.step} animation="fade-up" delay={index * 0.1}>
                <GlassCard className="h-full text-center">
                  <div className="text-4xl font-bold text-muted-foreground/30 mb-4">{item.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-up">
              <GlassCard>
                <h3 className="text-2xl font-bold mb-6">Why Businesses Love RAG</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The <span className="font-serif italic text-muted-foreground">Premium</span> AI Solution
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                RAG isn't just better technology—it's a completely different value proposition. 
                While simple chatbots are becoming commoditized, RAG solutions command premium 
                pricing because they solve real business problems.
              </p>
              <p className="text-muted-foreground mb-8">
                Companies pay $5,000–$50,000+ for well-built RAG systems because the ROI is clear: 
                faster customer support, reduced training costs, and employees who can find 
                information in seconds instead of hours.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Learn to Build RAG Systems
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              RAG <span className="font-serif italic text-muted-foreground">Use Cases</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industries and applications where RAG delivers massive value.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <ScrollAnimation key={useCase.title} animation="fade-up" delay={index * 0.1}>
                <GlassCard className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm">{useCase.description}</p>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <GlassCard className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Master <span className="font-serif italic text-muted-foreground">RAG?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our courses teach you to build production-ready RAG systems that businesses 
                will pay premium prices for. From vector databases to prompt engineering—we cover it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/rag-vs-chatbots">
                  <Button variant="outline" size="lg">
                    RAG vs Chatbots
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

export default WhatIsRAG;
