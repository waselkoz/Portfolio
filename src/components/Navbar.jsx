import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GlitchHover from './GlitchHover';

const Navbar = ({ currentSection, setCurrentSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', index: 1 },
        { name: 'Skills', index: 2 },
        { name: 'Projects', index: 3 },
        { name: 'Contact', index: 4 },
    ];

    const handleNavClick = (index) => {
        setCurrentSection(index);
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 py-6 bg-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div
                    className="text-2xl font-bold font-outfit cursor-pointer group"
                    onClick={() => handleNavClick(0)}
                >
                    <span className="text-accent group-hover:text-white transition-colors">W</span>
                    <span className="text-white group-hover:text-accent transition-colors">S</span>
                    <span className="text-accent">.</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <GlitchHover key={link.name}>
                            <button
                                onClick={() => handleNavClick(link.index)}
                                className={`text-sm font-medium transition-colors relative group ${currentSection === link.index ? 'text-accent' : 'text-muted hover:text-accent'
                                    }`}
                            >
                                <span className="text-accent mr-1">0{i + 1}.</span>
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all ${currentSection === link.index ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </button>
                        </GlitchHover>
                    ))}
                    <GlitchHover>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors text-sm font-medium block"
                        >
                            Resume
                        </a>
                    </GlitchHover>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text hover:text-accent transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden">
                        {navLinks.map((link, i) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.index)}
                                className={`text-lg font-medium transition-colors text-left ${currentSection === link.index ? 'text-accent' : 'text-muted hover:text-accent'
                                    }`}
                            >
                                <span className="text-accent mr-2">0{i + 1}.</span>
                                {link.name}
                            </button>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 border border-accent text-accent rounded text-center hover:bg-accent/10 transition-colors font-medium mt-2"
                        >
                            Resume
                        </a>
                    </div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
