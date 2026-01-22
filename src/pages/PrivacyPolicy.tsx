import PageLayout from '@/components/PageLayout';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Wrench, BadgeCheck } from 'lucide-react';

const toolStack = [
  'n8n (automation workflows)',
  'GHL / GoHighLevel (funnels + CRM basics)',
  'Google Sheets (ops + tracking)',
  'Zapier (integrations where needed)',
  'AI tools (examples: chat, voice, and agent tooling — not finalized)',
];

const promises = [
  'Practical, real-client skills (not theory)',
  'Templates and systems you can reuse for client delivery',
  'Clear guidance on outreach + offer + delivery so you can get clients',
];

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                We respect your privacy—and we also want to be crystal clear about what we promise and how we support you.
              </p>
              <p className="text-muted-foreground text-sm mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </header>

            <div className="grid gap-6">
              <GlassCard className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <h2 className="font-display text-2xl font-bold">What we collect</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We may collect basic contact information you share with us (like your name, email, phone/WhatsApp) when you
                    fill out forms or message us.
                  </p>
                  <p>
                    We also may collect standard website analytics (like pages visited and device/browser info) to improve the
                    experience.
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <BadgeCheck className="w-5 h-5 text-primary mt-0.5" />
                  <h2 className="font-display text-2xl font-bold">Our promises (and how we over-deliver)</h2>
                </div>
                <ul className="grid gap-3">
                  {promises.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-5">
                  We don’t just teach—you’ll get examples, frameworks, and practical workflows so you can deliver results faster
                  than the average freelancer.
                </p>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <BadgeCheck className="w-5 h-5 text-primary mt-0.5" />
                  <h2 className="font-display text-2xl font-bold">60-day client guarantee (action-based)</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Our guarantee is based on you doing the work. If you follow the steps we teach for getting clients—outreach,
                    offer, and delivery—and you don’t get your first client in 60 days, you don’t pay.
                  </p>
                  <p>
                    This policy exists to protect serious students and set clear expectations. If you’re actively implementing, we
                    stand behind you.
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link to="/pricing">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      Enroll now
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Ask a question
                    </Button>
                  </Link>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Wrench className="w-5 h-5 text-primary mt-0.5" />
                  <h2 className="font-display text-2xl font-bold">Tool stack (examples)</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  The tool stack shown across the site is for demonstration and learning purposes—this is not the finalized list
                  of AI tools.
                </p>
                <ul className="grid gap-3">
                  {toolStack.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-8">
                <h2 className="font-display text-2xl font-bold mb-3">Contact</h2>
                <p className="text-muted-foreground">
                  Questions about privacy or this policy? Reach us from the{' '}
                  <Link to="/contact" className="text-primary hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
