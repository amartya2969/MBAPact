"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-400">{label}</span>
          <span className="text-amber-400 font-medium">
            {current} / {total}
          </span>
        </div>
      )}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full gold-gradient rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
