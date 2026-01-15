import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Ready to Build Your
          </h2>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-muted-foreground mb-6">
            AI Automation Career?
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of students who've already transformed their careers with AI automation skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pricing">
              <Button variant="hero" size="lg">
                View Pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Talk to Us
              </Button>
            </Link>
          </div>

          <p className="mt-12 text-xs tracking-[0.2em] text-primary uppercase">
            60-DAY RESULTS GUARANTEE OR $0 COST
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
