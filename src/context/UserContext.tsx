"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { UserState, QuizResults, LogisticsAnswers, AppStep } from "@/lib/types";

interface UserContextType {
  state: UserState;
  setProfile: (profile: { email: string; school: string }) => void;
  setAnswer: (questionId: number, score: number) => void;
  setLogisticsAnswer: (key: keyof LogisticsAnswers, value: string) => void;
  setQuizResults: (results: QuizResults) => void;
  setStep: (step: AppStep) => void;
  resetState: () => void;
}

const initialState: UserState = {
  currentStep: "landing",
  profile: null,
  quizResults: null,
  answers: {},
  logisticsAnswers: {},
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<UserState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dateDrop_userState");
      if (saved) {
        try {
          setState(JSON.parse(saved));
        } catch {
          // ignore corrupt data
        }
      }
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("dateDrop_userState", JSON.stringify(state));
    }
  }, [state, hydrated]);

  const setProfile = useCallback((profile: { email: string; school: string }) => {
    setState((prev) => ({ ...prev, profile, currentStep: "questionnaire" }));
  }, []);

  const setAnswer = useCallback((questionId: number, score: number) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: score },
    }));
  }, []);

  const setLogisticsAnswer = useCallback((key: keyof LogisticsAnswers, value: string) => {
    setState((prev) => ({
      ...prev,
      logisticsAnswers: { ...prev.logisticsAnswers, [key]: value },
    }));
  }, []);

  const setQuizResults = useCallback((results: QuizResults) => {
    setState((prev) => ({ ...prev, quizResults: results, currentStep: "dashboard" }));
  }, []);

  const setStep = useCallback((step: AppStep) => {
    setState((prev) => ({ ...prev, currentStep: step }));
  }, []);

  const resetState = useCallback(() => {
    localStorage.removeItem("dateDrop_userState");
    setState(initialState);
  }, []);

  return (
    <UserContext.Provider
      value={{ state, setProfile, setAnswer, setLogisticsAnswer, setQuizResults, setStep, resetState }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}
