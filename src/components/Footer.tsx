import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const courseLinks = [
    { name: 'N8N Full Course', path: '/n8n-course' },
    { name: 'AI Agents Course', path: '/ai-agents' },
    { name: 'Voice Agents', path: '/voice-agents' },
    { name: 'WhatsApp Automation', path: '/whatsapp' },
    { name: 'Live Classes', path: '/live-classes' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Why AI Automation', path: '/why-ai' },
    { name: 'Student Results', path: '/results' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Get Your First Client', path: '/first-client' },
    { name: 'Appoint Funnels', path: '/appoint-funnels' },
    { name: 'Tools You\'ll Master', path: '/tools' },
    { name: 'Solution-Based Agents', path: '/solution-agents' },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl">
                Appointrium<span className="text-primary">Academy</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Master AI automation and build profitable skills. Get your first client in 60 days or you don't pay.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="mailto:appointfunnels@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                appointfunnels@gmail.com
              </a>
              <a 
                href="https://wa.me/923205067483" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +92 320 506 7483
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Courses</h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Appointrium Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="glow-text text-primary font-medium">
              60-Day Client Guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
