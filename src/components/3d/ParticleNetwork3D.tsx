import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);

  const particleCount = 50;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#8b5cf6"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      <group ref={linesRef}>
        {Array.from({ length: 20 }).map((_, i) => {
          const start = i * 3;
          const end = ((i + 5) * 3) % (particleCount * 3);
          return (
            <Line
              key={i}
              points={[
                [particles[start], particles[start + 1], particles[start + 2]],
                [particles[end], particles[end + 1], particles[end + 2]]
              ]}
              color="#00e5ff"
              lineWidth={1}
              opacity={0.3}
              transparent
            />
          );
        })}
      </group>
    </>
  );
};

export const ParticleNetworkScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
      <Particles />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const ParticleNetwork3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <ParticleNetworkScene />
      </Canvas>
    </div>
  );
};

export default ParticleNetwork3D;
