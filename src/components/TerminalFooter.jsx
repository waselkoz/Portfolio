import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Activity } from 'lucide-react';

const TerminalFooter = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-8 z-[60] hidden md:flex flex-col items-end font-mono text-[10px] text-accent/70 gap-1 pointer-events-none select-none">
            <div className="flex items-center gap-4 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5">
                <div className="flex items-center gap-2">
                    <Wifi size={12} className="animate-pulse" />
                    <span>NET: ONLINE</span>
                </div>
                <div className="w-[1px] h-3 bg-white/10" />
                <div className="flex items-center gap-2">
                    <Activity size={12} />
                    <span>CPU: OPTIMAL</span>
                </div>
                <div className="w-[1px] h-3 bg-white/10" />
                <div className="flex items-center gap-2">
                    <Battery size={12} />
                    <span>PWR: 100%</span>
                </div>
                <div className="w-[1px] h-3 bg-white/10" />
                <span>{time}</span>
            </div>
            <div className="text-[8px] opacity-50 tracking-widest">
                SECURE CONNECTION ESTABLISHED // V.4.0.0
            </div>
        </div>
    );
};

export default TerminalFooter;
