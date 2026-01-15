import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Star, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed K.',
    role: 'Freelance Automation Expert',
    quote: 'Landed my first $5K client within 45 days. The outreach system is gold.',
    result: '$5,000 first client',
  },
  {
    name: 'Sarah M.',
    role: 'Agency Owner',
    quote: 'Built a 6-figure automation agency in 8 months using their systems.',
    result: '$120K+ revenue',
  },
  {
    name: 'Michael T.',
    role: 'Career Switcher',
    quote: 'Went from retail to tech in 3 months. Best investment I ever made.',
    result: 'Career transformation',
  },
  {
    name: 'Fatima A.',
    role: 'AI Consultant',
    quote: 'The voice agent course alone was worth 10x the price. Mind-blowing.',
    result: 'Premium pricing',
  },
  {
    name: 'David R.',
    role: 'Automation Specialist',
    quote: 'Closed 3 retainer clients in my first month. The training is incredibly practical.',
    result: '3 retainer clients',
  },
  {
    name: 'Priya S.',
    role: 'Freelancer',
    quote: 'The community and live support made all the difference. Never felt alone.',
    result: 'Community support',
  },
];

const Results = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Star className="w-4 h-4 text-primary" fill="currentColor" />
              <span className="text-sm font-medium">Real Results</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Student <span className="gradient-text">Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't take our word for it. See what our students have achieved.
            </p>
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

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {testimonials.map((testimonial) => (
              <GlassCard key={testimonial.name}>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-primary">{testimonial.result}</span>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                Join Them
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Results;
