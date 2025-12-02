import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { useEffect, useState } from 'react';

const Phone = ({ scrollProgress }: { scrollProgress: number }) => {
  const scale = Math.max(0, 1 - scrollProgress * 2);
  const rotation = scrollProgress * Math.PI;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group scale={scale} rotation={[rotation, rotation * 0.5, 0]}>
        {/* Phone Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 3, 0.2]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Phone Screen */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[1.3, 2.6]} />
          <MeshDistortMaterial
            color="#1a1a2e"
            speed={2}
            distort={0.2}
            radius={1}
          />
        </mesh>

        {/* Screen Content - Top Bar */}
        <mesh position={[0, 1.15, 0.12]}>
          <planeGeometry args={[1.2, 0.15]} />
          <meshStandardMaterial color="#4c1d95" />
        </mesh>

        {/* Instagram Icon */}
        <mesh position={[-0.35, 0.7, 0.13]}>
          <boxGeometry args={[0.25, 0.25, 0.05]} />
          <meshStandardMaterial color="#E4405F" emissive="#E4405F" emissiveIntensity={0.5} />
        </mesh>

        {/* Facebook Icon */}
        <mesh position={[0, 0.7, 0.13]}>
          <boxGeometry args={[0.25, 0.25, 0.05]} />
          <meshStandardMaterial color="#1877F2" emissive="#1877F2" emissiveIntensity={0.5} />
        </mesh>

        {/* YouTube Icon */}
        <mesh position={[0.35, 0.7, 0.13]}>
          <boxGeometry args={[0.25, 0.25, 0.05]} />
          <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={0.5} />
        </mesh>

        {/* Growth Chart Bars */}
        <mesh position={[-0.35, 0.1, 0.13]}>
          <boxGeometry args={[0.15, 0.4, 0.05]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[-0.1, 0.15, 0.13]}>
          <boxGeometry args={[0.15, 0.5, 0.05]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0.15, 0.25, 0.13]}>
          <boxGeometry args={[0.15, 0.7, 0.05]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.4} />
        </mesh>

        {/* Engagement Indicators */}
        <mesh position={[-0.25, -0.4, 0.13]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, -0.4, 0.13]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.25, -0.4, 0.13]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.6} />
        </mesh>

        {/* Bottom Navigation Bar */}
        <mesh position={[0, -1.15, 0.12]}>
          <planeGeometry args={[1.2, 0.2]} />
          <meshStandardMaterial color="#4c1d95" />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingPhone3D = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <Phone scrollProgress={scrollProgress} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default FloatingPhone3D;
