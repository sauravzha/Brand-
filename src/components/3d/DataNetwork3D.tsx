import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const NetworkNode = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[0.3, 16, 16]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
};

const DataNetwork3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        
        {/* Network nodes in a circular pattern */}
        <NetworkNode color="#8b5cf6" position={[0, 0, 0]} />
        <NetworkNode color="#ec4899" position={[2, 1, 0]} />
        <NetworkNode color="#00e5ff" position={[-2, 1, 0]} />
        <NetworkNode color="#f97316" position={[0, 2.5, 0]} />
        <NetworkNode color="#8b5cf6" position={[2, -1, 0]} />
        <NetworkNode color="#00e5ff" position={[-2, -1, 0]} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
};

export default DataNetwork3D;
