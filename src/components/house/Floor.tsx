"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial, PlaneGeometry, Vector3 } from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useControlsStore } from "@/state/controlsStore";

export default function Roof() {
  const { scale, position, color } = useControlsStore();
  const material = new MeshStandardMaterial({
    color: "white",
  });

  return (
    <mesh
      geometry={new PlaneGeometry(10, 10)}
      material={material}
      position={[0, -1, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={new Vector3(10, 10, 10)}
      castShadow
      receiveShadow
    />
  );
}
