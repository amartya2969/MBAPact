"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { PSYCHOMETRIC_QUESTIONS, LOGISTICS_QUESTIONS } from "@/lib/questions";
import { calculateOceanScores } from "@/lib/matching";
import { LogisticsAnswers } from "@/lib/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QuestionCard } from "@/components/questionnaire/QuestionCard";
import { Badge } from "@/components/ui/Badge";

const TOTAL_STEPS = PSYCHOMETRIC_QUESTIONS.length + LOGISTICS_QUESTIONS.length;

export default function QuestionnairePage() {
  const router = useRouter();
  const { state, setAnswer, setLogisticsAnswer, setQuizResults } = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const isPsychometric = currentIndex < PSYCHOMETRIC_QUESTIONS.length;
  const logisticsIndex = currentIndex - PSYCHOMETRIC_QUESTIONS.length;

  const handlePsychometricAnswer = useCallback(
    (score: number) => {
      const question = PSYCHOMETRIC_QUESTIONS[currentIndex];
      setAnswer(question.id, score);
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 350);
    },
    [currentIndex, setAnswer]
  );

  const handleLogisticsAnswer = useCallback(
    (value: string) => {
      const question = LOGISTICS_QUESTIONS[logisticsIndex];
      const key = question.id as keyof LogisticsAnswers;
      setLogisticsAnswer(key, value);
      setDirection(1);

      if (currentIndex < TOTAL_STEPS - 1) {
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 350);
      } else {
        setTimeout(() => {
          const oceanScores = calculateOceanScores(state.answers);
          const logistics: LogisticsAnswers = {
            city:
              key === "city" ? value : state.logisticsAnswers.city || "",
            career:
              key === "career" ? value : state.logisticsAnswers.career || "",
            sunday:
              key === "sunday" ? value : state.logisticsAnswers.sunday || "",
          };
          setQuizResults({
            oceanScores,
            logistics,
            completedAt: new Date().toISOString(),
          });
          router.push("/dashboard");
        }, 500);
      }
    },
    [
      currentIndex,
      logisticsIndex,
      state.answers,
      state.logisticsAnswers,
      setLogisticsAnswer,
      setQuizResults,
      router,
    ]
  );

  const handleBack = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen flex flex-col px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1 text-sm transition-colors ${
              currentIndex === 0
                ? "text-slate-700 cursor-not-allowed"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">
            Due Diligence
          </span>
        </div>
        <ProgressBar
          current={currentIndex + 1}
          total={TOTAL_STEPS}
          label={`Question ${currentIndex + 1} of ${TOTAL_STEPS}`}
        />
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            {isPsychometric ? (
              <QuestionCard
                question={PSYCHOMETRIC_QUESTIONS[currentIndex]}
                selectedAnswer={
                  state.answers[PSYCHOMETRIC_QUESTIONS[currentIndex].id]
                }
                onSelect={handlePsychometricAnswer}
              />
            ) : (
              <div className="w-full max-w-2xl mx-auto">
                {logisticsIndex === 0 && (
                  <div className="text-center mb-8">
                    <p className="text-slate-500 text-sm font-mono tracking-wide">
                      Almost there. A few logistics questions to optimize your
                      match.
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <Badge
                    text={LOGISTICS_QUESTIONS[logisticsIndex].category}
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-slate-100 mb-8 leading-tight">
                  {LOGISTICS_QUESTIONS[logisticsIndex].text}
                </h2>

                <div className="space-y-3">
                  {LOGISTICS_QUESTIONS[logisticsIndex].options.map((opt) => {
                    const key = LOGISTICS_QUESTIONS[logisticsIndex]
                      .id as keyof LogisticsAnswers;
                    const isSelected =
                      state.logisticsAnswers[key] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleLogisticsAnswer(opt)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left w-full ${
                          isSelected
                            ? "border-amber-500/60 bg-amber-500/10"
                            : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/50"
                        }`}
                      >
                        <span
                          className={`text-sm transition-colors ${
                            isSelected
                              ? "text-amber-200"
                              : "text-slate-300"
                          }`}
                        >
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
