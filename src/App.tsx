import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WhyAI from "./pages/WhyAI";
import Courses from "./pages/Courses";
import N8NCourse from "./pages/N8NCourse";

import VoiceAgents from "./pages/VoiceAgents";
import WhatsApp from "./pages/WhatsApp";
import LiveClasses from "./pages/LiveClasses";
import SolutionAgents from "./pages/SolutionAgents";
import FirstClient from "./pages/FirstClient";
import AppointFunnels from "./pages/AppointFunnels";
import Tools from "./pages/Tools";
import Company from "./pages/Company";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-ai" element={<WhyAI />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/n8n-course" element={<N8NCourse />} />
          
          <Route path="/voice-agents" element={<VoiceAgents />} />
          <Route path="/whatsapp" element={<WhatsApp />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/solution-agents" element={<SolutionAgents />} />
          <Route path="/first-client" element={<FirstClient />} />
          <Route path="/appoint-funnels" element={<AppointFunnels />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
