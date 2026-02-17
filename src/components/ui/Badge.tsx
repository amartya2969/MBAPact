interface BadgeProps {
  text: string;
  variant?: "gold" | "green" | "slate";
}

export function Badge({ text, variant = "gold" }: BadgeProps) {
  const colors = {
    gold: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    slate: "bg-slate-800 text-slate-400 border-slate-700",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full ${colors[variant]}`}
    >
      {text}
    </span>
  );
}
