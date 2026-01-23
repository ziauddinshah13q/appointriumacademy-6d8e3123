import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Building2, Users, Zap, ArrowRight } from 'lucide-react';

const Company = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero with Logo */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Our Company</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">Appointrium Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A proud branch of Appoint Funnels, dedicated to empowering individuals with cutting-edge AI automation skills.
              </p>
            </div>
            
            {/* Logo on the right */}
            <div className="shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-foreground/20 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full border-4 border-foreground flex items-center justify-center mb-2">
                    <span className="text-foreground font-bold text-3xl md:text-5xl">A</span>
                  </div>
                  <span className="font-semibold text-sm md:text-base tracking-[0.15em]">APPOINTRIUM</span>
                  <br />
                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground">ACADEMY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Structure */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <GlassCard className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Appoint Funnels</h2>
              <p className="text-muted-foreground mb-4">
                Our parent company, Appoint Funnels, is a full-service AI automation agency. We build custom AI solutions, automation workflows, and intelligent systems for businesses worldwide.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Custom AI Automation Solutions
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Enterprise Workflow Automation
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  AI Agent Development
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Voice AI Implementation
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Appointrium Academy</h2>
              <p className="text-muted-foreground mb-4">
                Appointrium Academy is a dedicated educational branch of Appoint Funnels. We take our real-world agency experience and teach aspiring automation experts how to build their own successful careers.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Comprehensive AI Training
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  n8n & Automation Mastery
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Client Acquisition Systems
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  60-Day Client Guarantee
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Our Story */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Appoint Funnels started as an AI automation agency, helping businesses streamline their operations with cutting-edge technology. After years of building successful automation systems for clients, we realized there was a massive demand for quality AI education.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                That's when Appointrium Academy was born. We took everything we learned from running a successful agency and packaged it into comprehensive courses that teach real, practical skills—not just theory.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to run both the agency and the academy, ensuring our students learn from practitioners who are actively working in the field. Our promise: <span className="text-foreground font-semibold">Get your first AI automation client in 60 days or you don't pay.</span>
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="glass-strong rounded-3xl p-8 text-center">
              <div className="font-display text-5xl font-bold gradient-text mb-2">500+</div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="glass-strong rounded-3xl p-8 text-center">
              <div className="font-display text-5xl font-bold gradient-text mb-2">$2M+</div>
              <p className="text-muted-foreground">Student Earnings</p>
            </div>
            <div className="glass-strong rounded-3xl p-8 text-center">
              <div className="font-display text-5xl font-bold gradient-text mb-2">92%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Join the Academy
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Company;
