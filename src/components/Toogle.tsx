"use client";

type Props = {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export default function Toogle({ value, onChange, label }: Props) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-2">
        <span className="text-sm text-nowrap">{`${label}: `}</span>
      </div>
      <input type="checkbox" checked={value} onChange={onChange} />
    </div>
  );
}
