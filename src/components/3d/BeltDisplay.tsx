'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BeltDisplayProps {
  color: string;
  isGold?: boolean;
  rank?: string;
}

export function BeltDisplay({ color, isGold = false, rank }: BeltDisplayProps) {
  const beltRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const isBlack = color === '#1A1A1A';

  useFrame((state) => {
    if (beltRef.current) {
      beltRef.current.rotation.y += 0.008;
      beltRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (particlesRef.current && isGold) {
      particlesRef.current.rotation.y += 0.01;
      particlesRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group>
      {/* Main belt body */}
      <mesh ref={beltRef} position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.8, 0.15, 0.05]} />
        <meshStandardMaterial
          color={color}
          roughness={isBlack ? 0.1 : 0.5}
          metalness={isBlack ? 0.9 : isGold ? 0.7 : 0.1}
        />
      </mesh>

      {/* Belt knot */}
      <mesh position={[0.5, 0.05, 0.1]} rotation={[0, 0.3, 0]}>
        <torusGeometry args={[0.08, 0.04, 8, 8]} />
        <meshStandardMaterial
          color={color}
          roughness={isBlack ? 0.1 : 0.5}
          metalness={isBlack ? 0.9 : isGold ? 0.7 : 0.1}
        />
      </mesh>

      {/* Hanging end */}
      <mesh position={[0.4, -0.2, 0.05]} rotation={[0.1, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.04]} />
        <meshStandardMaterial
          color={color}
          roughness={isBlack ? 0.1 : 0.5}
          metalness={isBlack ? 0.9 : isGold ? 0.7 : 0.1}
        />
      </mesh>

      {/* Gold shimmer particles for highest belt */}
      {isGold && (
        <points ref={particlesRef}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <pointsMaterial
            size={0.03}
            color="#B8960C"
            transparent
            opacity={0.6}
            depthWrite={false}
          />
        </points>
      )}
    </group>
  );
}
