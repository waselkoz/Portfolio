import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, ContactShadows } from '@react-three/drei';

const ComputerModel = () => {
    const group = useRef();

    // Auto-rotate the model slightly
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) * 0.2;
        group.current.rotation.z = Math.sin(t / 4) * 0.05;
    });

    return (
        <group ref={group} dispose={null}>
            {/* Monitor Stand */}
            <mesh position={[0, -1.5, 0]}>
                <boxGeometry args={[1, 0.2, 1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0, -0.5, -0.3]}>
                <boxGeometry args={[0.2, 2, 0.2]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Monitor Screen Frame */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[4, 2.5, 0.2]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.8} />
            </mesh>

            {/* Screen (Glowing) */}
            <mesh position={[0, 1, 0.11]}>
                <planeGeometry args={[3.8, 2.3]} />
                <meshBasicMaterial color="#06b6d4" toneMapped={false} />
            </mesh>

            {/* Screen Content (Fake Code Lines) */}
            <group position={[-1.5, 1.8, 0.12]} scale={0.1}>
                {[...Array(8)].map((_, i) => (
                    <mesh key={i} position={[0, -i * 2, 0]}>
                        <planeGeometry args={[Math.random() * 20 + 10, 0.5]} />
                        <meshBasicMaterial color="#a855f7" />
                    </mesh>
                ))}
            </group>

            {/* PC Tower */}
            <group position={[3, -0.5, 0.5]} rotation={[0, -0.2, 0]}>
                <mesh>
                    <boxGeometry args={[1.5, 3, 3]} />
                    <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
                </mesh>
                {/* RGB Strip */}
                <mesh position={[0.76, 0, 1]}>
                    <boxGeometry args={[0.05, 2.8, 0.1]} />
                    <meshBasicMaterial color="#06b6d4" toneMapped={false} />
                </mesh>
                <mesh position={[0.76, 0, -1]}>
                    <boxGeometry args={[0.05, 2.8, 0.1]} />
                    <meshBasicMaterial color="#a855f7" toneMapped={false} />
                </mesh>
            </group>

            {/* Keyboard */}
            <group position={[0, -1.9, 1.5]} rotation={[-0.2, 0, 0]}>
                <mesh>
                    <boxGeometry args={[3, 0.1, 1.2]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Keys (Simplified) */}
                <mesh position={[0, 0.06, 0]}>
                    <planeGeometry args={[2.8, 1]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
            </group>
        </group>
    );
};

const CyberpunkPC = () => {
    return (
        <div className="w-full h-[400px] md:h-[500px] relative">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <ComputerModel />
                </Float>

                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#06b6d4" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    );
};

export default CyberpunkPC;
