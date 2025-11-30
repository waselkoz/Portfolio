import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "Three.js"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase", "Firebase"]
        },
        {
            title: "Tools",
            skills: ["Git", "Docker", "AWS", "Figma", "Vite", "VS Code"]
        },
        {
            title: "AI",
            skills: ["Prompt Engineering", "LongChat"]
        },
        {
            title: "Machine Learning",
            skills: ["TensorFlow", "PyTorch"]
        },
        {
            title: "softskills",
            skills: ["Teamwork", "Communication", "Problem Solving", "Time Management", "Adaptability", "Leadership"]
        },
        {
            title: "Languages",
            skills: ["Arabic", "English", "French"]
        },
    ];

    return (
        <section className="h-screen w-screen bg-primary relative overflow-hidden flex flex-col pt-24">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full overflow-y-auto px-6 pb-20 custom-scrollbar"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-12 text-center sticky top-0 bg-primary/80 backdrop-blur-sm py-4 z-20">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">Arsenal</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
                        {skillCategories.map((category, index) => (
                            <Tilt key={category.title} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-secondary/40 backdrop-blur-xl p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group h-fit cursor-pointer relative overflow-hidden"
                                >
                                    {/* Tech Chip Decor */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -mr-8 -mt-8 rotate-45" />
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-accent/20 rounded-bl-lg" />

                                    <h3 className="text-xl font-bold text-text mb-4 group-hover:text-accent transition-colors capitalize flex items-center gap-2 font-mono tracking-tighter">
                                        <span className="text-accent/50 mr-1">{`//`}</span>
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-primary/80 text-muted rounded border border-accent/10 text-xs font-mono group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all duration-300 relative overflow-hidden"
                                            >
                                                <span className="relative z-10">{skill}</span>
                                                <span className="absolute inset-0 bg-accent/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
