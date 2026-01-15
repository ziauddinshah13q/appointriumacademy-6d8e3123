import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Why AI', path: '/why-ai' },
  ];

  const courseLinks = [
    { name: 'N8N Full Course', path: '/n8n-course' },
    { name: 'AI Agents Course', path: '/ai-agents' },
    { name: 'Voice Agents', path: '/voice-agents' },
    { name: 'WhatsApp Automation', path: '/whatsapp' },
    { name: 'Live Classes', path: '/live-classes' },
    { name: 'Solution-Based Agents', path: '/solution-agents' },
  ];

  const otherLinks = [
    { name: 'Get Your First Client', path: '/first-client' },
    { name: 'Appoint Funnels', path: '/appoint-funnels' },
    { name: 'Tools', path: '/tools' },
    { name: 'Results', path: '/results' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">
              Appointrium<span className="text-primary">Academy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                onBlur={() => setTimeout(() => setCoursesOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                Courses
                <ChevronDown className={`w-4 h-4 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass rounded-xl p-2 animate-fade-in">
                  {courseLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/pricing">
              <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Courses
              </div>
              {courseLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 pl-6 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                More
              </div>
              {otherLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 mt-4 px-4">
                <Link to="/pricing" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full border-primary/50 text-primary">
                    Pricing
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
