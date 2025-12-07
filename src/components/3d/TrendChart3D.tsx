import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Line } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

const TrendLine = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRefs = useRef<THREE.Mesh[]>([]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  // Base points for the line chart
  const basePoints: [number, number, number][] = [
    [-4, 1, 0],
    [-3, 1.8, 0],
    [-2, 2.8, 0],
    [-1, 3.5, 0],
    [0, 4, 0],
    [1, 3.2, 0],
    [2, 2.5, 0],
    [3, 1.8, 0],
    [4, 1.2, 0],
  ];

  // Adjust points based on scroll - move up when scrolling up, down when scrolling down
  const scrollDirection = scrollProgress > 0.5 ? -1 : 1; // Inverted logic for proper direction
  const adjustedPoints: [number, number, number][] = basePoints.map(([x, y, z]) => {
    const yOffset = (0.5 - scrollProgress) * 2 * scrollDirection; // Movement based on scroll
    return [x, Math.max(0.2, y + yOffset), z];
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Line connecting all points */}
        <Line
          points={adjustedPoints}
          color="#00e5ff"
          lineWidth={3}
          transparent
          opacity={0.8}
        />

        {/* Glowing spheres at each data point */}
        {adjustedPoints.map((point, i) => {
          const color = point[1] > 2.5 ? '#00e5ff' : '#ec4899';
          return (
            <mesh
              key={i}
              position={point}
              ref={(el) => {
                if (el) sphereRefs.current[i] = el;
              }}
            >
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.6}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          );
        })}

        {/* Grid lines */}
        <Line
          points={[[-4.5, 0, 0], [4.5, 0, 0]]}
          color="#8b5cf6"
          lineWidth={2}
          opacity={0.3}
          transparent
        />
        <Line
          points={[[-4.5, 2, 0], [4.5, 2, 0]]}
          color="#8b5cf6"
          lineWidth={1}
          opacity={0.2}
          transparent
        />
        <Line
          points={[[-4.5, 4, 0], [4.5, 4, 0]]}
          color="#8b5cf6"
          lineWidth={1}
          opacity={0.2}
          transparent
        />
      </group>
    </Float>
  );
};

export const TrendChartScene = ({ triggerScroll = 0 }: { triggerScroll?: number }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY - triggerScroll;
      const maxScroll = window.innerHeight;
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerScroll]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      <TrendLine scrollProgress={scrollProgress} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const TrendChart3D = (props: { triggerScroll?: number }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <TrendChartScene {...props} />
      </Canvas>
    </div>
  );
};

export default TrendChart3D;
