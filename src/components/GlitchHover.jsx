import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlitchHover = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative z-10 ${isHovered ? 'animate-glitch-1' : ''}`}>
                {children}
            </div>

            {isHovered && (
                <>
                    <div className="absolute top-0 left-0 w-full h-full text-accent opacity-50 animate-glitch-2 z-0 pointer-events-none translate-x-[2px]">
                        {children}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full text-purple opacity-50 animate-glitch-3 z-0 pointer-events-none -translate-x-[2px]">
                        {children}
                    </div>
                </>
            )}
        </div>
    );
};

export default GlitchHover;
