import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground/20 rotate-45" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-foreground/20 rotate-45" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-foreground/15 rotate-45" />
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-foreground/15 rotate-45" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-12 animate-fade-in">
            <span className="text-sm text-muted-foreground">60-Day Client Guarantee</span>
            <span className="text-muted-foreground/50">|</span>
            <Zap className="w-4 h-4 text-primary" />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Learn AI Agents.</span>
            <br />
            <span className="font-serif italic text-muted-foreground font-normal">Automate Businesses.</span>
            <br />
            <span className="text-foreground">Get Paid.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A complete academy to master N8N, AI agents, voice agents & real client systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/courses">
              <Button variant="default" size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8">
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/first-client">
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-card font-medium px-8">
                Get Your First Client
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <p className="text-xs tracking-[0.2em] text-primary uppercase animate-fade-in" style={{ animationDelay: '0.4s' }}>
            60-DAY RESULTS GUARANTEE OR $0 COST
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
