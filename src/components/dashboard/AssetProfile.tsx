"use client";

import { OceanScores, OceanDimension } from "@/lib/types";
import { OCEAN_DIMENSION_LABELS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

const MAX_SCORE = 16;

const dimensions: OceanDimension[] = [
  "conscientiousness",
  "openness",
  "extraversion",
  "agreeableness",
  "emotionalStability",
];

export function AssetProfile({ scores }: { scores: OceanScores }) {
  return (
    <Card glow>
      <h3 className="text-slate-500 font-mono text-xs mb-5 uppercase tracking-wider">
        Your Asset Profile
      </h3>
      <div className="space-y-4">
        {dimensions.map((dim) => {
          const score = scores[dim];
          const pct = Math.round((score / MAX_SCORE) * 100);
          return (
            <div key={dim}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-300">{OCEAN_DIMENSION_LABELS[dim]}</span>
                <span className="text-amber-400 font-mono text-xs">{pct}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out gold-gradient"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
