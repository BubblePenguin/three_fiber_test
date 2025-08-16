"use client";

type Props = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export default function Slider({
  min,
  max,
  step,
  value,
  onChange,
  label,
}: Props) {
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
}
