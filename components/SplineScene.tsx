"use client";

import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

interface SplineSceneProps {
  sceneUrl?: string;
  className?: string;
}

export default function SplineScene({ 
  sceneUrl = "https://prod.spline.design/your-scene-url/scene.splinecode",
  className = "w-full h-full"
}: SplineSceneProps) {
  const splineRef = useRef<Application | null>(null);

  const onLoad = (splineApp: Application) => {
    splineRef.current = splineApp;
  };

  return (
    <div className={className}>
      <Spline
        scene={sceneUrl}
        onLoad={onLoad}
      />
    </div>
  );
} 