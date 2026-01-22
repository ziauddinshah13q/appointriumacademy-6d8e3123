import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Wrench, ArrowRight } from 'lucide-react';

const tools = [
  {
    name: 'n8n',
    category: 'Workflow Automation',
    description: 'The backbone of everything we build. Visual workflow automation.',
  },
  {
    name: 'OpenAI / GPT',
    category: 'AI Models',
    description: 'Power your agents with state-of-the-art language models.',
  },
  {
    name: 'ElevenLabs',
    category: 'Voice AI',
    description: 'Create natural-sounding voice agents.',
  },
  {
    name: 'Twilio',
    category: 'Communications',
    description: 'Phone, SMS, and WhatsApp integration.',
  },
  {
    name: 'Supabase',
    category: 'Database',
    description: 'Store and manage data for your automations.',
  },
  {
    name: 'Make.com',
    category: 'Alternative Platform',
    description: 'Additional automation platform for specific use cases.',
  },
  {
    name: 'Airtable',
    category: 'Database',
    description: 'Flexible database for client projects.',
  },
  {
    name: 'Zapier',
    category: 'Integration',
    description: 'Connect 5000+ apps quickly.',
  },
];

const Tools = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Tech Stack</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Tools You'll <span className="gradient-text">Master</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-standard tools that businesses use and trust. Learn them once, deploy them everywhere.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {tools.map((tool) => (
              <GlassCard key={tool.name}>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {tool.category}
                </span>
                <h3 className="font-display text-xl font-bold mt-2 mb-2">{tool.name}</h3>
                <p className="text-muted-foreground text-sm">{tool.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center glass-strong rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Start <span className="text-primary">Mastering</span> Today
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get hands-on experience with all these tools through practical projects.
            </p>
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Tools;
