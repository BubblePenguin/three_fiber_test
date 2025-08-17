"use client";

import { useLoader } from "@react-three/fiber";
import { BoxGeometry, Mesh, MeshStandardMaterial, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useControlsStore } from "@/state/controlsStore";

export default function Roof() {
  const { scale, position, color, roof } = useControlsStore();
  const gltf = useLoader(GLTFLoader, "/models/monkey.glb");
  const monkey = (gltf.scene.children[0] as Mesh).geometry;
  const house = new BoxGeometry(10, 1, 10);
  const material = new MeshStandardMaterial({
    color: `rgb(${color.r}, ${color.g}, ${color.b})`,
  });

  return (
    <>
      {roof === "monkey" && (
        <mesh
          geometry={monkey}
          material={material}
          position={[position.x, position.y, position.z]}
          scale={new Vector3(scale, scale, scale)}
          castShadow
        />
      )}
      {roof === "house" && (
        <mesh
          geometry={house}
          material={material}
          position={[position.x, position.y + 1, position.z]}
          scale={new Vector3(scale, 1, scale)}
          castShadow
        />
      )}
    </>
  );
}
