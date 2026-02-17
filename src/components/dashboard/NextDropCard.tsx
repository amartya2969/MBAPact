"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";

function getNextFriday7pm(): Date {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 5=Fri
  let daysUntilFriday = (5 - day + 7) % 7;
  if (daysUntilFriday === 0) {
    // It's Friday — check if 7pm has passed
    const friday7pm = new Date(now);
    friday7pm.setHours(19, 0, 0, 0);
    if (now >= friday7pm) {
      daysUntilFriday = 7;
    }
  }
  if (daysUntilFriday === 0) daysUntilFriday = 7; // if somehow still 0 (shouldn't happen)
  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilFriday);
  target.setHours(19, 0, 0, 0);
  return target;
}

export function NextDropCard({ city }: { city?: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const target = getNextFriday7pm();
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="relative overflow-hidden" glow>
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Clock className="w-32 h-32 text-slate-400" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">
            Next Drop
          </span>
        </div>

        <div className="flex gap-4 mb-6">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Sec" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-slate-100 tabular-nums">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-slate-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-sm mb-4">
          Your profile is in the pool. We are processing matches
          {city && city !== "Other / Flexible" && (
            <> for the <span className="text-slate-200 font-medium">{city}</span> cluster</>
          )}
          .
        </p>

        <p className="text-slate-500 text-xs">
          One curated match per week. Quality over quantity.
        </p>
      </div>
    </Card>
  );
}
