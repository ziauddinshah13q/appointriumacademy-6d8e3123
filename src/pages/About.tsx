import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { Target, Users, Rocket, Award, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'Everything we teach is designed to get you real clients and real income.',
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Learn alongside ambitious people who push each other to succeed.',
  },
  {
    icon: Rocket,
    title: 'Practical Skills',
    description: 'No theory dumps. Every lesson translates to deployable solutions.',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Our graduates are hired by top companies and agencies worldwide.',
  },
];

const About = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Appointrium Academy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to create the next generation of AI automation experts who build real solutions for real businesses.
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Built by Practitioners, <span className="text-primary">Not Theorists</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Appointrium Academy was founded by working professionals who saw a gap in the market: thousands of businesses desperate for automation, but very few people who could actually deliver.
              </p>
              <p className="text-muted-foreground mb-4">
                We've helped businesses save millions of hours through AI automation. Now, we're teaching our exact methods so you can do the same—and get paid handsomely for it.
              </p>
              <p className="text-muted-foreground">
                Our curriculum isn't based on what looks good in a syllabus. It's based on what actually works in the field.
              </p>
            </div>
            <div className="glass-strong rounded-3xl p-8 glow-border">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="font-display text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground text-sm">Students Trained</p>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-secondary mb-2">$2M+</div>
                  <p className="text-muted-foreground text-sm">Student Earnings</p>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary mb-2">60</div>
                  <p className="text-muted-foreground text-sm">Day Guarantee</p>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-muted-foreground text-sm">Practical Skills</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <GlassCard key={value.title}>
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              ))}
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

export default About;
