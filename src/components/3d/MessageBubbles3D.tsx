import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const MessageBubble = ({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <RoundedBox
        ref={meshRef}
        args={[scale, scale * 0.6, 0.2]}
        position={position}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>
    </Float>
  );
};

const MessageBubbles3D = () => {
  return (
    <div className="absolute right-0 top-0 w-full md:w-1/2 h-[400px] pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <MessageBubble color="#00e5ff" position={[-2, 1.5, 0]} scale={1.2} />
        <MessageBubble color="#ec4899" position={[1.5, 0.8, 0]} scale={1} />
        <MessageBubble color="#8b5cf6" position={[-1, -0.5, 0]} scale={0.9} />
        <MessageBubble color="#f97316" position={[2, -1, 0]} scale={1.1} />
        <MessageBubble color="#00e5ff" position={[0, -2, 0]} scale={0.8} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
};

export default MessageBubbles3D;
