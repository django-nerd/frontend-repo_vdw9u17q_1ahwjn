import React from 'react';
import Hero3D from './components/Hero3D';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CPDashboard from './components/CPDashboard';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#121820]">
      <Hero3D />
      <Skills />
      <Projects />
      <CPDashboard />
      <FooterCTA />
    </div>
  );
}

export default App;
