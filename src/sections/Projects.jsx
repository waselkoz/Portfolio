import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Terminal } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import HackerText from '../components/HackerText';

const Projects = () => {
    const projects = [
        {
            title: "Real Time Driver Location",
            description: "A real-time driver location tracking system using React and Node.js and socket.io with tailwindcss.",
            tech: ["React", "Node.js", "Socket.io", "Tailwind"],
            github: "#",
            external: "#"
        },
        {
            title: "AI Dashboard",
            description: "Analytics platform powered by machine learning to predict user behavior and trends.",
            tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
            github: "#",
            external: "#"
        },
        {
            title: "Crypto Portfolio",
            description: "Real-time cryptocurrency tracker with live charts and portfolio management tools.",
            tech: ["Vue.js", "WebSockets", "Chart.js", "Firebase"],
            github: "#",
            external: "#"
        }
    ];

    return (
        <section className="h-screen w-screen flex items-center justify-center bg-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary opacity-50"></div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 w-full z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-text mb-12 text-center flex justify-center items-center gap-4">
                    <Terminal className="text-accent" size={40} />
                    <HackerText text="Featured Projects" />
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            scale={1.02}
                            transitionSpeed={2500}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="project-card group relative bg-secondary/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden h-full flex flex-col hover:border-accent/50 transition-colors duration-500"
                            >
                                {/* Holographic Border Effect */}
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Data Stream Effect */}
                                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <div className="flex justify-around">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="text-[10px] font-mono text-accent writing-vertical-rl animate-matrix-rain" style={{ animationDelay: `${Math.random()}s`, animationDuration: `${2 + Math.random()}s` }}>
                                                010101010101
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative p-8 flex flex-col h-full z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-primary/50 rounded-lg border border-accent/20 group-hover:border-accent/50 transition-colors">
                                            <Folder size={24} className="text-accent" />
                                        </div>
                                        <div className="flex gap-4 text-muted">
                                            <a href={project.github} className="hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-full"><Github size={20} /></a>
                                            <a href={project.external} className="hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-full"><ExternalLink size={20} /></a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors font-mono">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted mb-6 text-sm leading-relaxed flex-grow border-l-2 border-white/10 pl-4">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-4" />
                                        <ul className="flex flex-wrap gap-2 text-xs font-mono text-accent/80">
                                            {project.tech.map((t) => (
                                                <li key={t} className="bg-accent/5 px-2 py-1 rounded border border-accent/10">
                                                    {`> ${t}`}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
