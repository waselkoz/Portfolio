import React from 'react';

const HUDOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
            {/* Scanlines - Ultra low opacity */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] z-[51] bg-[length:100%_2px,3px_100%] pointer-events-none" />

            {/* Vignette - Ultra low opacity */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.1)_100%)] z-[50]" />

            {/* Corner Brackets */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/50 rounded-tl-lg" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent/50 rounded-tr-lg" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent/50 rounded-bl-lg" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/50 rounded-br-lg" />

            {/* Top Center Decor */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
                <div className="w-20 h-[1px] bg-accent" />
                <div className="text-[10px] font-mono text-accent tracking-[0.2em]">SYSTEM_READY</div>
                <div className="w-20 h-[1px] bg-accent" />
            </div>

            {/* Side Decor */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-2 opacity-30">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-8 bg-accent/50" />
                ))}
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 opacity-30">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-8 bg-accent/50" />
                ))}
            </div>
        </div>
    );
};

export default HUDOverlay;
