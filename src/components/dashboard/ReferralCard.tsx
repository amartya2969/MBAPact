"use client";

import { useState } from "react";
import { Briefcase, Check, Copy } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const code = "DD" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const link = `datedrop.com/ref/${code}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for non-HTTPS contexts
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="flex flex-col items-center text-center" glow>
      <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
        <Briefcase className="w-6 h-6 text-amber-500" />
      </div>

      <h4 className="text-slate-200 font-medium mb-1">Expand the Deal Flow</h4>
      <p className="text-xs text-slate-500 mb-4">
        Refer an MBA peer from a different school. Each referral improves your
        match pool by 3%.
      </p>

      <div className="flex items-center gap-2 w-full max-w-xs">
        <div className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-400 truncate">
          {link}
        </div>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-2 rounded-lg border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {copied && (
        <p className="text-xs text-emerald-400 mt-2">Copied to clipboard</p>
      )}
    </Card>
  );
}
