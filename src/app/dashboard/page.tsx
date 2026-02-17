"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Badge } from "@/components/ui/Badge";
import { NextDropCard } from "@/components/dashboard/NextDropCard";
import { AssetProfile } from "@/components/dashboard/AssetProfile";
import { MarketIntel } from "@/components/dashboard/MarketIntel";
import { ReferralCard } from "@/components/dashboard/ReferralCard";

export default function DashboardPage() {
  const { state, resetState } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!state.quizResults) {
      router.push("/");
    }
  }, [state.quizResults, router]);

  if (!state.quizResults) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  const { oceanScores, logistics } = state.quizResults;

  return (
    <main className="min-h-screen w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-10 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-slate-100 font-serif text-xl tracking-tight">
            DATE DROP
          </span>
        </div>
        <div className="flex items-center gap-4">
          {state.profile && (
            <div className="text-right hidden md:block">
              <div className="text-slate-200 text-sm font-medium">
                {state.profile.email.split("@")[0]}
              </div>
              <div className="text-slate-500 text-xs font-mono">
                {state.profile.school}
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Badge text="Verified" variant="green" />
            <button
              onClick={() => {
                resetState();
                router.push("/");
              }}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors ml-2"
            >
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif text-slate-100 mb-2">
          Welcome to the Deal Room
        </h1>
        <p className="text-slate-400">
          Your profile is active. Sit tight for your next curated match.
        </p>
      </div>

      {/* Dashboard grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <NextDropCard city={logistics.city} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AssetProfile scores={oceanScores} />
            <ReferralCard />
          </div>
        </div>
        <div>
          <MarketIntel scores={oceanScores} city={logistics.city} />
        </div>
      </div>
    </main>
  );
}
