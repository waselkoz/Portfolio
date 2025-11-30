import React from 'react';

const CyberpunkGrid = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-[30vh] z-0 pointer-events-none overflow-hidden perspective-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
            <div
                className="w-[200%] h-[200%] -ml-[50%] bg-[linear-gradient(transparent_0%,_#a855f7_2px,_transparent_3px),linear-gradient(90deg,_transparent_0%,_#a855f7_2px,_transparent_3px)] bg-[length:40px_40px] animate-grid-flow origin-bottom transform-3d rotate-x-[60deg]"
                style={{
                    boxShadow: '0 0 100px #a855f7 inset',
                    opacity: 0.2
                }}
            />
        </div>
    );
};

export default CyberpunkGrid;
