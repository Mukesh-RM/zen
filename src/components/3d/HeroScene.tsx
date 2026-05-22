'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function HeroScene() {
  return (
    <>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.15} />

      {/* Main dramatic spotlight from above */}
      <spotLight
        position={[0, 8, 2]}
        intensity={3}
        color="#F5F0E8"
        castShadow
        angle={0.3}
        penumbra={0.5}
      />

      {/* Crimson accent light */}
      <spotLight
        position={[-4, 3, 2]}
        intensity={2}
        color="#C41E3A"
        penumbra={1}
      />

      {/* Gold accent light */}
      <spotLight
        position={[4, 2, 2]}
        intensity={1.5}
        color="#B8960C"
        penumbra={1}
      />

      {/* Point light near ground for reflection */}
      <pointLight position={[0, -1.5, 0]} intensity={0.8} color="#C41E3A" />

      {/* Fog for atmosphere */}
      <fog attach="fog" args={['#0A0A0A', 5, 15]} />

      {/* Reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#111111"
          roughness={0.1}
          metalness={0.8}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Particle dust */}
      <DustParticles />

      {/* Karateka figure */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <KaratekaFigure />
      </Float>
    </>
  );
}

function KaratekaFigure() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, -0.5]}>
      {/* Body - torso */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <capsuleGeometry args={[0.25, 0.8, 8, 16]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.6} metalness={0.2} />
      </mesh>

      {/* Belt */}
      <mesh position={[0, 0.4, 0.18]}>
        <boxGeometry args={[0.6, 0.06, 0.04]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#D4A574" roughness={0.5} />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.52, 0]}>
        <sphereGeometry args={[0.18, 16, 16, 0, Math.PI * 2, 0, Math.PI / 3]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.8} />
      </mesh>

      {/* Left arm (chambered punch position) */}
      <group position={[-0.3, 1.0, 0]} rotation={[0, 0, -0.3]}>
        <mesh position={[0, -0.3, 0]} castShadow>
          <capsuleGeometry args={[0.07, 0.55, 4, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.5} />
        </mesh>
        {/* Fist */}
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.5} />
        </mesh>
      </group>

      {/* Right arm (extended punch) */}
      <group position={[0.3, 1.0, 0.35]} rotation={[0.5, 0, -0.2]}>
        <mesh position={[0, -0.3, 0]} castShadow>
          <capsuleGeometry args={[0.07, 0.55, 4, 8]} />
          <meshStandardMaterial color="#D4A574" roughness={0.5} />
        </mesh>
        {/* Fist — vertical Isshinryu punch */}
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[0.07, 0.1, 0.09]} />
          <meshStandardMaterial color="#D4A574" roughness={0.5} />
        </mesh>
      </group>

      {/* Left leg */}
      <mesh position={[-0.12, 0, 0]} rotation={[0, 0, 0.1]} castShadow>
        <capsuleGeometry args={[0.09, 0.7, 4, 8]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.6} />
      </mesh>

      {/* Right leg (forward stance) */}
      <mesh position={[0.15, 0, 0.2]} rotation={[0.2, 0, 0]} castShadow>
        <capsuleGeometry args={[0.09, 0.7, 4, 8]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.6} />
      </mesh>

      {/* Gi skirt */}
      <mesh position={[0, 0.2, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.35, 0.3, 8]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.7} />
      </mesh>
    </group>
  );
}

function DustParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = Math.random() * 4 - 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0003;
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#F5F0E8"
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </points>
  );
}
