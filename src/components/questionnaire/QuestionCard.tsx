"use client";

import { Question } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { OptionButton } from "./OptionButton";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | undefined;
  onSelect: (score: number) => void;
}

export function QuestionCard({ question, selectedAnswer, onSelect }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <Badge text={question.category} />
      </div>

      <h2 className="text-2xl md:text-3xl font-serif text-slate-100 mb-8 leading-tight">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.options.map((opt, i) => (
          <OptionButton
            key={opt.score}
            text={opt.text}
            index={i}
            selected={selectedAnswer === opt.score}
            onClick={() => onSelect(opt.score)}
          />
        ))}
      </div>
    </div>
  );
}
