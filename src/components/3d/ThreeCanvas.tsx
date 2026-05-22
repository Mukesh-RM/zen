'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';

export function ThreeCanvas({
  children,
  className = '',
  cameraPosition = [0, 0, 4],
  fov = 50,
  fallback = null,
}: {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
  fallback?: React.ReactNode;
}) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={fallback || <ThreeLoader />}>
        <Canvas
          camera={{ position: cameraPosition, fov }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          aria-label="3D visualization"
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}

function ThreeLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-dojo-black">
      <div className="w-8 h-8 border-2 border-crimson border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
