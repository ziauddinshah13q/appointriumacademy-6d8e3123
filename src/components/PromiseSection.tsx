import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

const PromiseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 glow-border text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Bold Promise</span>
            </h2>
            
            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              "Get your first AI automation client in 60 days
              <br />
              <span className="text-primary">or you don't pay."</span>
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We're so confident in our system that we'll refund every penny if you don't land a paying client within 60 days of completing the program.
            </p>

            <Link to="/first-client">
              <Button variant="hero" size="xl">
                Claim Your Guarantee
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
