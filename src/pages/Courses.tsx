import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import { Bot, Workflow, Phone, MessageSquare, Users, Zap, ArrowRight } from 'lucide-react';

const courses = [
  {
    icon: Workflow,
    title: 'N8N Mastery',
    description: 'From beginner to advanced automation expert. Build complex workflows that scale.',
    link: '/n8n-course',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Create intelligent agents that work autonomously for your clients.',
    link: '/ai-agents',
  },
  {
    icon: Phone,
    title: 'Voice Agents',
    description: 'Build AI-powered phone systems that handle calls 24/7.',
    link: '/voice-agents',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    description: 'Automate customer conversations and sales on WhatsApp.',
    link: '/whatsapp',
  },
  {
    icon: Users,
    title: 'Live Mentorship',
    description: 'Weekly live classes with real-time feedback and guidance.',
    link: '/live-classes',
  },
  {
    icon: Zap,
    title: 'Client Systems',
    description: 'Ready-to-deploy templates that solve real business problems.',
    link: '/solution-agents',
  },
];

const Courses = () => {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-muted-foreground mb-6">
              Master AI Automation
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From zero experience to landing paying clients. Our comprehensive curriculum covers it all.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link key={course.title} to={course.link}>
                <GlassCard className="group h-full cursor-pointer hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <course.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Courses;
