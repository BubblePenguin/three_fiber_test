"use client";

import dynamic from "next/dynamic";
import ControlsPanel from "../components/ControlsPanel";
const Scene = dynamic(() => import("../components/Scene"), { ssr: false });

export default function Home() {
  return (
    <div className="w-full h-full flex flex-row">
      <ControlsPanel />
      <div className="flex-1">
        <Scene />
      </div>
    </div>
  );
}
