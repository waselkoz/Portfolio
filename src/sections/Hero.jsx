import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import SystemLog from '../components/SystemLog';

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-primary relative overflow-hidden py-20 md:py-0">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute top-24 right-10 w-64 h-96 hidden lg:block opacity-50">
          <SystemLog />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-mono mb-4 text-lg">01. Hi, my name is</p>
          <h1 className="text-6xl md:text-8xl font-bold text-text mb-4 tracking-tight glitch-text" data-text="Wassim Selama">
            Wassim Selama
          </h1>
          <h2
            className="text-3xl md:text-5xl font-bold text-muted mb-8 h-[60px]" // Fixed height to prevent layout shift
          >
            <TypeAnimation
              sequence={[
                'Software Developer.',
                1000,
                'Innovator.',
                1000,
                'AI Enthusiast.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-muted text-lg mb-10 leading-relaxed"
          >
            Crafting immersive digital experiences with modern technologies.
            Specializing in dynamic, high-performance applications.
          </motion.p>


        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
