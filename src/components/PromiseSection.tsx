import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/hooks/use-scroll-animation';

const PromiseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="zoom-in">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-foreground" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Bold Promise
              </h2>
              
              <p className="text-xl md:text-2xl font-medium text-foreground mb-2">
                "Get your first AI automation client in 60 days
              </p>
              <p className="text-xl md:text-2xl font-serif italic text-muted-foreground mb-6">
                or you don't pay."
              </p>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're so confident in our system that we'll refund every penny if you don't land a paying client within 60 days of completing the program.
              </p>

              <Link to="/first-client">
                <Button variant="hero" size="lg">
                  Claim Your Guarantee
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
