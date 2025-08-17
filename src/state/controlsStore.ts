"use client";

import { create } from "zustand";

export type Roof = "monkey" | "house";

export type ControlsState = {
  scale: number;
  position: { x: number; y: number; z: number };
  color: { r: number; g: number; b: number };
  setScale: (scale: number) => void;
  setPosition: (axis: "x" | "y" | "z", value: number) => void;
  setColor: (channel: "r" | "g" | "b", value: number) => void;
  roof: Roof;
  setRoof: (roof: Roof) => void;
};

export const useControlsStore = create<ControlsState>((set) => ({
  scale: 0.5,
  position: { x: 0, y: 0, z: 0 },
  color: { r: 224, g: 150, b: 208 },
  roof: "monkey",
  setScale: (scale: number) => set({ scale }),
  setPosition: (axis, value) =>
    set((state) => ({ position: { ...state.position, [axis]: value } })),
  setColor: (channel, value) =>
    set((state) => ({ color: { ...state.color, [channel]: value } })),
  setRoof: (roof: Roof) => set({ roof }),
}));
