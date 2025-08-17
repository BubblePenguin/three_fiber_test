"use client";

import Slider from "./Slider";
import { useControlsStore } from "../state/controlsStore";
import Toogle from "./Toogle";

export default function ControlsPanel() {
  const {
    scale,
    position,
    color,
    setScale,
    setPosition,
    setColor,
    roof,
    setRoof,
  } = useControlsStore();

  return (
    <div className="basis-3/12 p-2 flex flex-col gap-2">
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
        value={position.x}
        onChange={(e) => setPosition("x", Number(e.target.value))}
      />
      <Slider
        label="Pos Y"
        min={-5}
        max={5}
        step={0.1}
        value={position.y}
        onChange={(e) => setPosition("y", Number(e.target.value))}
      />
      <Slider
        label="Pos Z"
        min={-5}
        max={5}
        step={0.1}
        value={position.z}
        onChange={(e) => setPosition("z", Number(e.target.value))}
      />
      <Slider
        label="R"
        min={0}
        max={255}
        step={1}
        value={color.r}
        onChange={(e) => setColor("r", Number(e.target.value))}
      />
      <Slider
        label="G"
        min={0}
        max={255}
        step={1}
        value={color.g}
        onChange={(e) => setColor("g", Number(e.target.value))}
      />
      <Slider
        label="B"
        min={0}
        max={255}
        step={1}
        value={color.b}
        onChange={(e) => setColor("b", Number(e.target.value))}
      />
      <Toogle
        label="Roof"
        value={roof === "house"}
        onChange={(e) => setRoof(e.target.checked ? "house" : "monkey")}
      />
    </div>
  );
}
