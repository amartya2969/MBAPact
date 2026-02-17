"use client";

interface OptionButtonProps {
  text: string;
  index: number;
  selected: boolean;
  onClick: () => void;
}

const LETTERS = ["A", "B", "C", "D"];

export function OptionButton({ text, index, selected, onClick }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-start gap-4 p-5 rounded-xl border transition-all duration-200 text-left w-full ${
        selected
          ? "border-amber-500/60 bg-amber-500/10 shadow-lg shadow-amber-500/5"
          : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/50"
      }`}
    >
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors ${
          selected
            ? "bg-amber-500 text-slate-950"
            : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
        }`}
      >
        {LETTERS[index]}
      </span>
      <span
        className={`text-sm leading-relaxed pt-1 transition-colors ${
          selected ? "text-amber-200" : "text-slate-300 group-hover:text-slate-200"
        }`}
      >
        {text}
      </span>
    </button>
  );
}
