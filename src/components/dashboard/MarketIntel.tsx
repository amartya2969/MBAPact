"use client";

import { Globe, Users } from "lucide-react";
import { OceanScores, OceanDimension } from "@/lib/types";
import { OCEAN_DIMENSION_LABELS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

const dimensions: OceanDimension[] = [
  "conscientiousness",
  "openness",
  "extraversion",
  "agreeableness",
  "emotionalStability",
];

function getTopDimension(scores: OceanScores): string {
  let top: OceanDimension = "conscientiousness";
  for (const dim of dimensions) {
    if (scores[dim] > scores[top]) top = dim;
  }
  return OCEAN_DIMENSION_LABELS[top];
}

export function MarketIntel({
  scores,
  city,
}: {
  scores: OceanScores;
  city?: string;
}) {
  const topDim = getTopDimension(scores);
  const schools = [
    { name: "Wharton", pct: 24 },
    { name: "Darden", pct: 18 },
    { name: "Columbia", pct: 15 },
    { name: "HBS", pct: 12 },
    { name: "Booth", pct: 10 },
  ];

  return (
    <Card glow>
      <h3 className="text-slate-500 font-mono text-xs mb-5 uppercase tracking-wider border-b border-slate-800 pb-2">
        Market Intel
      </h3>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">Pipeline:</span>
            <span className="text-slate-200 font-mono">1,420</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400">Market:</span>
            <span className="text-slate-200 font-mono text-xs">
              {city || "NYC"}
            </span>
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-400 mb-2">Top Dimension</div>
          <div className="text-amber-400 font-medium text-sm">{topDim}</div>
        </div>

        <div>
          <div className="text-sm text-slate-400 mb-3">
            Top Participating Schools
          </div>
          <div className="space-y-2">
            {schools.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-slate-300">{s.name}</span>
                <span className="font-mono text-amber-500">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg">
          <p className="text-xs text-amber-200/80 leading-relaxed">
            <span className="font-bold text-amber-500">Insider Tip:</span>{" "}
            Users who complete the full profile get 2x higher quality matches.
          </p>
        </div>
      </div>
    </Card>
  );
}
