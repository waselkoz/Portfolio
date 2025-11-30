import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CyberpunkLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('INITIALIZING...');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        const textInterval = setInterval(() => {
            const texts = ['LOADING ASSETS...', 'ESTABLISHING CONNECTION...', 'DECRYPTING DATA...', 'SYSTEM READY'];
            setText(texts[Math.floor(Math.random() * texts.length)]);
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-primary z-[99999] flex flex-col items-center justify-center font-mono text-accent"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-64 mb-4">
                <div className="flex justify-between text-xs mb-1">
                    <span>{text}</span>
                    <span>{Math.min(100, Math.floor(progress))}%</span>
                </div>
                <div className="h-1 bg-secondary w-full overflow-hidden">
                    <motion.div
                        className="h-full bg-accent shadow-[0_0_10px_#06b6d4]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            <div className="text-xs opacity-50 animate-pulse">
        // WAITING FOR SYSTEM RESPONSE...
            </div>
        </motion.div>
    );
};

export default CyberpunkLoader;
