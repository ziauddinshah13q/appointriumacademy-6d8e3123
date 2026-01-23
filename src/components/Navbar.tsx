import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  const mainLinks = [
    { name: 'HOME', path: '/' },
    { name: 'COURSES', path: '/courses' },
    { name: 'COMPANY', path: '/company' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'PRIVACY POLICY', path: '/privacy-policy' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const courseLinks = [
    { name: 'n8n Full Course', path: '/n8n-course' },
    { name: 'AI Agents Course', path: '/ai-agents' },
    { name: 'Voice Agents', path: '/voice-agents' },
    { name: 'WhatsApp Automation', path: '/whatsapp' },
    { name: 'Live Classes', path: '/live-classes' },
    { name: 'Solution-Based Agents', path: '/solution-agents' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center">
              <span className="text-foreground font-semibold text-sm">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-[0.2em] leading-none">APPOINTRIUM</span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground leading-none mt-0.5">ACADEMY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              HOME
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                onBlur={() => setTimeout(() => setCoursesOpen(false), 200)}
                className="flex items-center gap-1 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                COURSES
                <ChevronDown className={`w-4 h-4 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg p-2 animate-fade-in">
                  {courseLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/company"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/company') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              COMPANY
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/pricing') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PRICING
            </Link>
            <Link
              to="/privacy-policy"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/privacy-policy') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PRIVACY POLICY
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/contact') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/pricing">
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-medium tracking-wide">
                ENROLL NOW
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
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                HOME
              </Link>
              <div className="border-t border-border my-2" />
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Courses
              </div>
              {courseLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 pl-6 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {mainLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                    isActive(link.path)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 mt-4">
                <Link to="/pricing" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background">
                    ENROLL NOW
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
