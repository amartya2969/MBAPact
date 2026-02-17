"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { VALID_SCHOOL_DOMAINS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const VERIFICATION_STEPS = [
  "Verifying institutional credentials...",
  "Cross-referencing enrollment database...",
  "Access granted. Welcome to the deal room.",
];

function resolveSchool(email: string): string {
  const domain = email.split("@")[1]?.toLowerCase() || "";
  if (VALID_SCHOOL_DOMAINS[domain]) return VALID_SCHOOL_DOMAINS[domain];
  for (const [schoolDomain, schoolName] of Object.entries(VALID_SCHOOL_DOMAINS)) {
    if (domain.endsWith(schoolDomain)) return schoolName;
  }
  return "MBA Program";
}

export default function VerifyPage() {
  const router = useRouter();
  const { setProfile } = useUser();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [verifyStep, setVerifyStep] = useState(-1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const domain = email.split("@")[1]?.toLowerCase() || "";
    if (!domain.endsWith(".edu") && !VALID_SCHOOL_DOMAINS[domain]) {
      setError(
        "Only .edu email addresses from accredited MBA programs are accepted."
      );
      return;
    }

    setVerifyStep(0);
    setTimeout(() => setVerifyStep(1), 1200);
    setTimeout(() => setVerifyStep(2), 2400);
    setTimeout(() => {
      const school = resolveSchool(email);
      setProfile({ email, school });
      router.push("/questionnaire");
    }, 3400);
  };

  if (verifyStep >= 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-16 h-16 mx-auto mb-4">
            {verifyStep < 2 ? (
              <div className="w-16 h-16 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-16 h-16 text-emerald-400" />
              </motion.div>
            )}
          </div>

          <div className="space-y-3">
            {VERIFICATION_STEPS.map((step, i) =>
              verifyStep >= i ? (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: verifyStep === i ? 1 : 0.4, y: 0 }}
                  className={`font-mono text-sm ${
                    verifyStep === i
                      ? i === 2
                        ? "text-emerald-400"
                        : "text-amber-500"
                      : "text-slate-600"
                  }`}
                >
                  {step}
                </motion.p>
              ) : null
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="card-dark p-8">
          <div className="mb-6 flex justify-center">
            <Shield className="w-10 h-10 text-slate-500" />
          </div>

          <h2 className="text-2xl font-serif text-slate-100 mb-2 text-center">
            Institutional Access
          </h2>
          <p className="text-slate-400 text-sm mb-6 text-center">
            Please enter your .edu email to verify eligibility.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1 uppercase tracking-wider">
                University Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="user@darden.virginia.edu"
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors font-mono placeholder:text-slate-700"
                autoFocus
                required
              />
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <Button type="submit" className="w-full">
              Verify Credentials
            </Button>
          </form>

          <p className="text-xs text-slate-600 mt-4 text-center">
            We currently support Top 25 US Programs, LBS, and INSEAD.
          </p>
        </div>
      </div>
    </main>
  );
}
