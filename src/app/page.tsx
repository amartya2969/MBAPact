"use client";

import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_SCHOOLS } from "@/lib/constants";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Invite badge */}
        <div className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-medium tracking-widest uppercase gap-2">
          <Shield className="w-3 h-3" />
          Invite Only &middot; Top 25 Schools
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight">
          <span className="gold-text">Date Drop</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-serif italic mb-6">
          High-Yield Returns on Human Capital.
        </p>

        <p className="text-slate-400 mb-4 max-w-lg mx-auto leading-relaxed">
          The only dating network strictly for the MBA ecosystem.
          Psychometrically matched. Algorithmically curated.
        </p>

        <p className="text-slate-500 text-sm mb-10">
          No swiping. Just one high-signal introduction per week.
        </p>

        {/* School badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FEATURED_SCHOOLS.map((school) => (
            <Badge key={school} text={school} variant="slate" />
          ))}
        </div>

        {/* CTA */}
        <Link href="/verify">
          <button className="group relative px-8 py-4 bg-slate-100 text-slate-900 font-semibold text-lg rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]">
            Apply for Access
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </main>
  );
}
