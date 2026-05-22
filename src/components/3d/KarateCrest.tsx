'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function KarateCrest() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer ring */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[0.6, 0.06, 16, 32]} />
        <meshStandardMaterial color="#B8960C" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Main coin body */}
      <mesh>
        <cylinderGeometry args={[0.54, 0.54, 0.06, 32]} />
        <meshStandardMaterial color="#8C7209" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Inner decorative ring */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[0.4, 0.03, 8, 24]} />
        <meshStandardMaterial color="#B8960C" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Cross lines */}
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.02, 0.01]} />
        <meshStandardMaterial color="#B8960C" roughness={0.1} metalness={0.9} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.8, 0.02, 0.01]} />
        <meshStandardMaterial color="#B8960C" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Center circle */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.07, 16]} />
        <meshStandardMaterial color="#B8960C" roughness={0.05} metalness={1} />
      </mesh>

      {/* Center dot */}
      <mesh position={[0, 0, 0.04]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#F5D75C" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
}
