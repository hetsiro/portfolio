"use client";

import SplineScene from './SplineScene';

export default function SplineExample() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-300">
          3D Experience
        </h2>
        <div className="bg-gray-900/85 rounded-2xl p-8">
          <div className="h-96 w-full">
            <SplineScene 
              sceneUrl="https://prod.spline.design/your-scene-url/scene.splinecode"
              className="w-full h-full rounded-lg"
            />
          </div>
          <p className="text-center text-gray-400 mt-4">
            Interactúa con la escena 3D usando tu mouse
          </p>
        </div>
      </div>
    </section>
  );
} 