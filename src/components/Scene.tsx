"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial } from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useControlsStore } from "../state/controlsStore";

export default function Scene() {
  const { scale, position, color } = useControlsStore();
  const gltf = useLoader(GLTFLoader, "./models/monkey.glb");
  const monkey = gltf.scene.children[0] as Mesh;

  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <directionalLight position={[0, 0, 1]} />
      <mesh
        geometry={monkey.geometry}
        position={[position.x, position.y, position.z]}
        scale={scale}
        material={
          new MeshStandardMaterial({
            color: `rgb(${color.r}, ${color.g}, ${color.b})`,
          })
        }
      ></mesh>
      <OrbitControls enablePan={false} />
      <Environment preset="forest" background />
    </Canvas>
  );
}
