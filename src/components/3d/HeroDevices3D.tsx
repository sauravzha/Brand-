import { Canvas } from '@react-three/fiber';
import { Float, Html, ContactShadows, Environment, PresentationControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

const Laptop = () => {
  return (
    <group position={[1.5, 0, -1]} rotation={[0.1, -0.4, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Keyboard Area */}
      <mesh position={[0, 0.01, 0]}>
        <boxGeometry args={[2.8, 0.01, 1.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.8} />
      </mesh>
      
      {/* Trackpad */}
      <mesh position={[0, 0.01, 0.8]}>
        <boxGeometry args={[0.8, 0.01, 0.4]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Laptop Screen Lid */}
      <group position={[0, 0, -1.1]} rotation={[-0.2, 0, 0]}>
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[3.2, 2, 0.1]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen Bezel and Inner Display */}
        <mesh position={[0, 1, 0.051]}>
          <planeGeometry args={[3.1, 1.9]} />
          <meshBasicMaterial color="#0f172a" />
        </mesh>

        {/* The iframe showing the website */}
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.05}
          position={[0, 1, 0.06]}
          style={{
            width: '1024px',
            height: '600px',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#fff'
          }}
        >
          <img 
            src="/dashboard_ui.png" 
            alt="Dashboard UI Mockup"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Html>
      </group>
    </group>
  );
};

const Phone = () => {
  return (
    <group position={[-1.5, 0.5, 1]} rotation={[0, 0.3, 0.1]}>
      {/* Phone Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 2.4, 0.15]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Screen Bezel */}
      <mesh position={[0, 0, 0.076]}>
        <planeGeometry args={[1.15, 2.35]} />
        <meshBasicMaterial color="#000" />
      </mesh>

      {/* The iframe showing the website mobile view */}
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={0.8}
        position={[0, 0, 0.08]}
        style={{
          width: '375px',
          height: '812px',
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#fff'
        }}
      >
        <img 
          src="/mobile_ui.png" 
          alt="Mobile UI Mockup"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Html>
    </group>
  );
};

export const HeroDevicesScene = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {/* Environment lighting for reflections */}
      <Environment preset="city" />

      {/* Interactive Controls wrapper so user can spin the devices slightly */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4} floatIntensity={1.5} speed={1.5}>
          <Laptop />
          <Phone />
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
    </>
  );
};

const HeroDevices3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing">
      {isInView && (
        <Canvas 
          dpr={[1, 1.5]} 
          camera={{ position: [0, 0, 6], fov: 45 }} 
          gl={{ powerPreference: "high-performance", antialias: false, alpha: true }} 
          style={{ background: 'transparent' }}
          shadows
        >
          <HeroDevicesScene />
        </Canvas>
      )}
    </div>
  );
};

export default HeroDevices3D;
