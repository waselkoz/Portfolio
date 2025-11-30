import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    // Since we are using a horizontal layout with specific sections, 
    // we can track the current section index or raw scroll position.
    // However, standard useScroll tracks the viewport scroll. 
    // Our app uses a transform on a container, not native scrolling.
    // We need to hook into the currentSection state from App.jsx or listen to the transform.

    // Actually, let's make this a visual indicator of the *current section* out of total.
    // But to make it "smooth", we can pass the currentSection prop.
    // For now, let's assume we receive props or use a context. 
    // To keep it simple and decoupled, let's just visualize the "progress" based on a prop.
    // Wait, I can't easily pass props without modifying App.jsx significantly.

    // Alternative: A "fake" progress bar that animates based on the window scroll? 
    // No, the window doesn't scroll.

    // Let's modify App.jsx to pass the progress to this component.
    // Or, this component can accept `currentSection` and `totalSections`.

    return null; // Placeholder, will implement logic in App.jsx integration or receive props.
};

// Re-thinking: I'll implement it as a component that takes props.
const ProgressBar = ({ currentSection, totalSections }) => {
    const progress = (currentSection / (totalSections - 1)) * 100;

    return (
        <div className="fixed bottom-0 left-0 w-full h-1 bg-primary/50 z-[60]">
            <motion.div
                className="h-full bg-accent shadow-[0_0_10px_#06b6d4]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
        </div>
    );
};

export default ProgressBar;
