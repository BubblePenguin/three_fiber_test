"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { Mesh, MeshStandardMaterial, Vector3 } from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Stats } from "@react-three/drei";

const Slider = ({
  min,
  max,
  step,
  value,
  onChange,
  label,
}: {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <span className="text-sm text-nowrap">{`${label}: `}</span>
      <span className="text-sm text-nowrap">{value}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full"
      />
    </div>
  );
};

export default function Home() {
  const gltf = useLoader(GLTFLoader, "/models/monkey.glb");
  const [scale, setScale] = useState(0.5);
  const monkey = gltf.scene.children[0] as Mesh;

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionZ, setPositionZ] = useState(0);

  const [r, setR] = useState(224);
  const [g, setG] = useState(150);
  const [b, setB] = useState(208);
  // console.log(scale);

  return (
    <div className="w-full h-full flex flex-row">
      <div className="basis-3/12">
        <Slider
          label="Scale"
          min={0.1}
          max={5}
          step={0.1}
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
        />
        <Slider
          label="Pos X"
          min={-5}
          max={5}
          step={0.1}
          value={positionX}
          onChange={(e) => setPositionX(Number(e.target.value))}
        />
        <Slider
          label="Pos Y"
          min={-5}
          max={5}
          step={0.1}
          value={positionY}
          onChange={(e) => setPositionY(Number(e.target.value))}
        />
        <Slider
          label="Pos Z"
          min={-5}
          max={5}
          step={0.1}
          value={positionZ}
          onChange={(e) => setPositionZ(Number(e.target.value))}
        />
        <Slider
          label="R"
          min={0}
          max={255}
          step={1}
          value={r}
          onChange={(e) => setR(Number(e.target.value))}
        />
        <Slider
          label="G"
          min={0}
          max={255}
          step={1}
          value={g}
          onChange={(e) => setG(Number(e.target.value))}
        />
        <Slider
          label="B"
          min={0}
          max={255}
          step={1}
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
      </div>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <directionalLight position={[0, 0, 1]} />
        <mesh
          geometry={monkey.geometry}
          material={
            new MeshStandardMaterial({ color: `rgb(${r}, ${g}, ${b})` })
          }
          position={[positionX, positionY, positionZ]}
          // castShadow
          scale={new Vector3(scale, scale, scale)}
        />
        {/* <Stats /> */}
        <OrbitControls enablePan={false} />
        <Environment preset="forest" background />
      </Canvas>
    </div>
  );
}
