import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ParticleBackground from './ParticleBackground';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticleBackground />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20 relative z-10">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PageLayout;
