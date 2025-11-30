import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickSpark = () => {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const newSpark = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setSparks((prev) => [...prev, newSpark]);

            // Cleanup spark after animation
            setTimeout(() => {
                setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
            }, 1000);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <AnimatePresence>
            {sparks.map((spark) => (
                <SparkBurst key={spark.id} x={spark.x} y={spark.y} />
            ))}
        </AnimatePresence>
    );
};

const SparkBurst = ({ x, y }) => {
    const particleCount = 8;
    const particles = Array.from({ length: particleCount });

    return (
        <div
            style={{
                position: 'fixed',
                left: x,
                top: y,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        >
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: 0,
                        scale: 0,
                        x: Math.cos((i / particleCount) * Math.PI * 2) * 60,
                        y: Math.sin((i / particleCount) * Math.PI * 2) * 60,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: i % 2 === 0 ? '#06b6d4' : '#a855f7', // Cyan or Purple
                        boxShadow: `0 0 10px ${i % 2 === 0 ? '#06b6d4' : '#a855f7'}`,
                    }}
                />
            ))}
        </div>
    );
};

export default ClickSpark;
