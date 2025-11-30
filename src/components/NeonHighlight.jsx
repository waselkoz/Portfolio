import React from 'react';

const NeonHighlight = ({ children, color = "accent" }) => {
    const colorClass = color === "purple" ? "text-purple shadow-purple/50" : "text-accent shadow-accent/50";
    const bgClass = color === "purple" ? "bg-purple/10" : "bg-accent/10";

    return (
        <span className={`relative inline-block px-1 rounded transition-all duration-300 hover:scale-105 cursor-default group`}>
            <span className={`relative z-10 font-bold ${color === "purple" ? "text-purple" : "text-accent"} transition-all duration-300 group-hover:text-white`}>
                {children}
            </span>
            <span className={`absolute inset-0 ${bgClass} rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <span className={`absolute inset-0 rounded blur-md ${bgClass} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
        </span>
    );
};

export default NeonHighlight;
