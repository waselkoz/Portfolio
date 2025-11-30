import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ClickSpark from './components/ClickSpark';
import HUDOverlay from './components/HUDOverlay';
import ScrollProgress from './components/ScrollProgress';
import TerminalFooter from './components/TerminalFooter';
import CyberpunkGrid from './components/CyberpunkGrid';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import CyberpunkLoader from './components/CyberpunkLoader';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [loading, setLoading] = useState(true);
  const totalSections = 5;

  useEffect(() => {
    // ... existing keydown logic ...
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Optional: Add wheel support to switch sections
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 50) { // Threshold to prevent accidental triggers
        if (e.deltaY > 0) {
          setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
        } else {
          setCurrentSection((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    // Debounce or throttle could be added here for smoother experience
    // For now, we'll leave it simple or disable it if it's too sensitive.
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="bg-primary text-text font-sans selection:bg-accent selection:text-primary h-screen w-screen overflow-hidden relative cursor-none">
      <AnimatePresence>
        {loading && <CyberpunkLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ClickSpark />
          <HUDOverlay />
          <ScrollProgress currentSection={currentSection} totalSections={totalSections} />
          <TerminalFooter />
          <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </>
      )}

      {/* Dynamic Background Elements - Persistent across sections */}
      <ParticleBackground />
      <CyberpunkGrid />

      {/* Main Content Slider */}
      <motion.div
        className="flex w-[500vw] h-screen will-change-transform"
        animate={{ x: `-${currentSection * 100}vw` }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }} // Smoother bezier curve
      >
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden relative z-10">
          <Hero />
        </div>
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden relative z-10">
          <About />
        </div>
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden relative z-10">
          <Skills />
        </div>
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden relative z-10">
          <Projects />
        </div>
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden relative z-10">
          <Contact />
        </div>
      </motion.div>


    </div>
  );
}

export default App;
