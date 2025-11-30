import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';
import HackerText from '../components/HackerText';

const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

const Contact = () => {
    return (
        <section className="h-screen w-screen flex items-center justify-center bg-secondary relative overflow-hidden">
            <MatrixRain />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary opacity-80"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 text-center z-10"
            >
                <div className="inline-block border border-accent/30 bg-accent/5 px-4 py-1 rounded-full mb-6 backdrop-blur-md">
                    <p className="text-accent font-mono text-sm tracking-widest">SYSTEM_STATUS: OPEN_FOR_WORK</p>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-text mb-8">
                    <HackerText text="Initialize Contact" />
                </h2>

                <p className="text-muted text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                    My neural link is always active. Whether you have a mission proposal or just want to exchange data packets, transmit a signal.
                </p>

                <div className="flex flex-col items-center gap-8">
                    <MagneticButton>
                        <a
                            href="mailto:wassim.selama@gmail.com"
                            className="group relative inline-flex items-center gap-3 bg-accent/10 border border-accent text-accent px-12 py-6 rounded-none clip-path-polygon hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] font-mono tracking-wider uppercase"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                        >
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Transmit Message
                        </a>
                    </MagneticButton>

                    <div className="flex gap-6 mt-8">
                        <MagneticButton>
                            <a
                                href="https://github.com/waselkoz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors transform hover:scale-110 duration-200 block p-4 bg-secondary/50 border border-white/5 rounded-lg hover:border-accent/50"
                            >
                                <Github size={28} />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="https://www.linkedin.com/in/wassim-selama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors transform hover:scale-110 duration-200 block p-4 bg-secondary/50 border border-white/5 rounded-lg hover:border-accent/50"
                            >
                                <Linkedin size={28} />
                            </a>
                        </MagneticButton>
                    </div>
                </div>
            </motion.div>

            <footer className="absolute bottom-6 w-full text-center text-muted/30 text-[10px] font-mono tracking-[0.2em]">
                <p>DESIGNED & BUILT BY WASSIM SELAMA // 2025</p>
            </footer>
        </section>
    );
};

export default Contact;
