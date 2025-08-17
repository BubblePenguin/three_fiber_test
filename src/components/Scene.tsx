"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Roof from "@/components/house/Roof";
import Floor from "@/components/house/Floor";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 5] }} shadows>
      <directionalLight position={[25, 50, 25]} castShadow intensity={3} />
      <Roof />
      <Floor />
      <OrbitControls enablePan={false} />
      <Environment preset="forest" background />
    </Canvas>
  );
}
