import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { LogoBar } from './components/sections/LogoBar';
import { PainPoints } from './components/sections/PainPoints';
import { Transition } from './components/sections/Transition';
import { AIFeatures } from './components/sections/AIFeatures';
import { Solutions } from './components/sections/Solutions';
import { SocialProof } from './components/sections/SocialProof';
import { Dashboard } from './components/sections/Dashboard';
import { HowItWorks } from './components/sections/HowItWorks';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <PainPoints />
        <Transition />
        <AIFeatures />
        <Solutions />
        <SocialProof />
        <Dashboard />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
