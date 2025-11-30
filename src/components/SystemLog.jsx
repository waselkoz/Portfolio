import React, { useState, useEffect } from 'react';

const SystemLog = () => {
    const [logs, setLogs] = useState([]);

    const bootSequence = [
        "INITIALIZING_CORE_SYSTEMS...",
        "LOADING_NEURAL_INTERFACE...",
        "CONNECTING_TO_MAINFRAME...",
        "DECRYPTING_SECURE_DATA...",
        "OPTIMIZING_RENDER_PIPELINE...",
        "ESTABLISHING_SECURE_LINK...",
        "ACCESS_GRANTED.",
        "WELCOME_USER.",
        "SYSTEM_STATUS: OPTIMAL",
        "NETWORK: SECURE",
        "MEMORY: 64TB ALLOCATED",
        "CPU: QUANTUM CORE ACTIVE"
    ];

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < bootSequence.length) {
                setLogs(prev => [...prev.slice(-5), bootSequence[currentIndex]]);
                currentIndex++;
            } else {
                // Reset or loop occasionally
                if (Math.random() > 0.9) {
                    setLogs(prev => [...prev.slice(-5), `PING: ${Math.floor(Math.random() * 50)}ms`]);
                }
            }
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-[10px] md:text-xs text-accent/40 leading-relaxed overflow-hidden pointer-events-none select-none">
            {logs.map((log, index) => (
                <div key={index} className="animate-fade-in">
                    <span className="text-purple/40 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {`> ${log}`}
                </div>
            ))}
            <div className="animate-pulse">_</div>
        </div>
    );
};

export default SystemLog;
