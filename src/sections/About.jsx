import React from 'react';
import { motion } from 'framer-motion';
import HackerText from '../components/HackerText';
import CyberpunkPC from '../components/CyberpunkPC';
import NeonHighlight from '../components/NeonHighlight';

const About = () => {
  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

  return (
    <section className="h-screen w-screen flex items-center justify-center bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple/10 via-primary to-primary opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10"
      >
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 flex items-center gap-4">
            <span className="text-accent">02.</span>
            <HackerText text="About Me" />
          </h2>

          <div className="text-muted text-lg leading-relaxed space-y-4">
            <p>
              Hello! I'm Wassim, a passionate <NeonHighlight>Full Stack Developer</NeonHighlight> who loves creating interactive and dynamic web experiences. My journey began with a curiosity for how things work on the internet, which quickly turned into a career in building <NeonHighlight color="purple">robust applications</NeonHighlight>.
            </p>
            <p>
              I thrive on solving complex problems and turning creative ideas into reality. Whether it's a sleek landing page or a full-blown web application, I bring dedication and attention to detail to every project.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-text font-semibold mb-4">Tech Stack</h3>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-muted">
                  <span className="text-accent">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative group h-[400px] md:h-[500px] w-full flex items-center justify-center">
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-purple/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <CyberpunkPC />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
