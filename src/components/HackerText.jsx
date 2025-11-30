import React, { useState, useEffect, useRef } from 'react';

const HackerText = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef(null);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    const animate = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        animate(); // Run on mount
        return () => clearInterval(intervalRef.current);
    }, [text]);

    const handleMouseEnter = () => {
        animate();
    };

    return (
        <span
            className={className}
            onMouseEnter={handleMouseEnter}
            style={{ fontFamily: 'monospace' }} // Ensure monospaced font for better effect
        >
            {displayText}
        </span>
    );
};

export default HackerText;
