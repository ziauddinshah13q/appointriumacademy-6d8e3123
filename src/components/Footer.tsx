import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

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
    <footer className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center">
                <span className="text-foreground font-semibold text-sm">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-[0.2em] leading-none">APPOINTRIUM</span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground leading-none mt-0.5">ACADEMY</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Master AI automation and build profitable skills. Get your first client in 60 days or you don't pay.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="mailto:appointfunnels@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                appointfunnels@gmail.com
              </a>
              <a 
                href="https://wa.me/923205067483" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +92 320 506 7483
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide">COURSES</h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide">RESOURCES</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Appointrium Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="text-primary font-medium tracking-wide text-xs">
              60-DAY CLIENT GUARANTEE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
