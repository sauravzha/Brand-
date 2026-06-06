import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

const FloatingIcon = ({ icon, position, color }: { icon: string; position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.3]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const FloatingIcons3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div ref={containerRef} className="absolute right-0 top-0 w-full md:w-1/2 h-[500px] pointer-events-none opacity-50">
      {isInView && (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 50 }} gl={{ powerPreference: "high-performance", antialias: false, alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

        <FloatingIcon icon="📱" position={[-2, 2, 0]} color="#8b5cf6" />
        <FloatingIcon icon="💡" position={[2, 2, 0]} color="#ec4899" />
        <FloatingIcon icon="🎯" position={[-2, -1, 0]} color="#00e5ff" />
        <FloatingIcon icon="📊" position={[2, -1, 0]} color="#f97316" />
        <FloatingIcon icon="🚀" position={[0, 0.5, 1]} color="#8b5cf6" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      )}
    </div>
  );
};

export default FloatingIcons3D;
