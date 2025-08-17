// src/ScorecardForm.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

import Step1Goals from "./steps/Step1Goals";
import Step2Snapshot from "./steps/Step2Snapshot";
import Step3Report from "./steps/Step3Report";
import Progress from "./components/Progress";
import NavButtons from "./components/NavButtons";
import { useScorecardStore } from "./hooks/useScorecardStore";
import { scorecardSchema } from "./schema";

export default function ScorecardForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canNext, setCanNext] = useState(false);           // step-scoped validity
  const formTopRef = useRef(null);

  const { data, saveData, loadData } = useScorecardStore();

  const methods = useForm({
    resolver: zodResolver(scorecardSchema),
    defaultValues: data,
    mode: "onChange",
  });

  const {
    watch,
    trigger,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const watchedFields = watch();

  // ----- utilities -----
  const getStepFields = (step, snapshot) => {
    switch (step) {
      case 1:
        return ["businessPriority", "turnoverConcern", "motivation", "employeeCount", "businessStructure"];
      case 2: {
        const base = ["offersHealthPlan", "payrollProcessing", "supplementalBenefits", "averageSalary"];
        if (snapshot?.offersHealthPlan === "yes") base.push("healthPlanChallenge");
        return base;
      }
      case 3:
        return ["decisionTimeline", "companyName", "fullName", "email", "phone"];
      default:
        return [];
    }
  };

  const isCurrentStepValid = async () => {
    const fields = getStepFields(currentStep, watchedFields);
    return trigger(fields);
  };

  // ----- load & autosave -----
  useEffect(() => {
    const saved = loadData();
    if (saved) {
      Object.entries(saved).forEach(([k, v]) => v !== undefined && methods.setValue(k, v, { shouldDirty: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setTimeout(() => saveData(watchedFields), 400);
    return () => clearTimeout(t);
  }, [watchedFields, saveData]);

  // ----- conditional re-validation (health plan challenge) -----
  useEffect(() => {
    if (watchedFields.offersHealthPlan === "yes" && watchedFields.healthPlanChallenge) {
      trigger("healthPlanChallenge");
    }
  }, [watchedFields.offersHealthPlan, watchedFields.healthPlanChallenge, trigger]);

  // ----- step-scoped validity (debounced) -----
  useEffect(() => {
    let alive = true;
    const t = setTimeout(async () => {
      const ok = await isCurrentStepValid();
      if (alive) setCanNext(ok);
    }, 180);
    return () => {
      alive = false;
      clearTimeout(t);
    };
    // re-check when step changes or relevant fields update
  }, [currentStep, watchedFields, trigger]);

  // ----- nav handlers -----
  const handleNext = async () => {
    const ok = await isCurrentStepValid();
    if (ok && currentStep < 3) {
      setCurrentStep((s) => s + 1);
      // scroll to top of form for a clean step transition
      requestAnimationFrame(() => {
        formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      // focus next after animation
      setTimeout(() => document.querySelector('[data-qa="btn-next"]')?.focus(), 320);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
      requestAnimationFrame(() => {
        formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utm = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
        if (urlParams.get(k)) utm[k] = urlParams.get(k);
      });
      const payload = { ...formData, ...utm };

      const res = await fetch("/api/scorecard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");
      window.location.href = "/assessment/thank-you";
    } catch (e) {
      console.error("Submission error:", e);
      // optionally surface a toast here
    } finally {
      setIsSubmitting(false);
    }
  };

  // keyboard nav (only when not focused inside a textarea/input with modifier keys)
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || "";
      const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(tag);
      if (typing) return;
      if (e.key === "ArrowRight" && currentStep < 3) handleNext();
      if (e.key === "ArrowLeft" && currentStep > 1) handleBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentStep]);

  // ----- UI -----
  return (
    <section
      aria-labelledby="scorecard-title"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 sm:py-20"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-teal-100 to-blue-200 opacity-25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* header */}
        <div className="mx-auto mb-10 max-w-[900px] text-center md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Professional Assessment Tool
          </motion.div>

          <motion.h1
            id="scorecard-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-700 bg-clip-text text-transparent">
              2025 Business Health & Tax Savings
            </span>
            <br />
            <span className="text-slate-800">Scorecard</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-5 max-w-[880px] text-base leading-relaxed text-slate-700 sm:text-lg"
          >
            Is your business structured to maximize the hidden tax savings available for employee health benefits? Complete
            this 5-minute assessment to discover your potential and see if you qualify for a
            <span className="font-semibold text-blue-700"> no-cost virtual health program</span> that can boost employee
            retention and your bottom line.
          </motion.p>
        </div>

        {/* progress */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mx-auto mb-8 max-w-[900px]"
          aria-live="polite"
        >
          <Progress currentStep={currentStep} />
        </motion.div>

        {/* form card (wider container, constrained inner width) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mx-auto w-full max-w-[1040px]"
        >
          <div ref={formTopRef} className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white sm:px-8 sm:py-5">
              <div>
                <h2 className="text-base font-semibold sm:text-lg">Step {currentStep} of 3</h2>
                <p className="mt-0.5 text-xs text-blue-100 sm:text-sm">
                  {currentStep === 1 && "Business Goals & Structure"}
                  {currentStep === 2 && "Business Snapshot & Benefits"}
                  {currentStep === 3 && "Contact & Report"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${currentStep >= 1 ? "bg-white" : "bg-white/40"}`} />
                <span className={`h-2 w-2 rounded-full ${currentStep >= 2 ? "bg-white" : "bg-white/40"}`} />
                <span className={`h-2 w-2 rounded-full ${currentStep >= 3 ? "bg-white" : "bg-white/40"}`} />
              </div>
            </div>

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} role="group" aria-labelledby="scorecard-title">
                {/* slides */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ x: 280, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -280, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="mx-auto w-full max-w-[900px] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
                      style={{ minHeight: 480 }} // keeps consistent height for a steadier layout
                    >
                      {currentStep === 1 && <div data-qa="step-1"><Step1Goals /></div>}
                      {currentStep === 2 && <div data-qa="step-2"><Step2Snapshot /></div>}
                      {currentStep === 3 && <div data-qa="step-3"><Step3Report /></div>}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* nav (sticky on mobile for easier reach) */}
                <div className="border-t border-slate-200/70 bg-slate-50/80 px-6 py-4 backdrop-blur-sm sm:px-8 sm:py-5 lg:static lg:backdrop-blur-0 lg:bg-slate-50">
                  <div className="mx-auto w-full max-w-[900px]">
                    <NavButtons
                      currentStep={currentStep}
                      onNext={handleNext}
                      onBack={handleBack}
                      isNextDisabled={!canNext}   // <-- step-scoped validity
                      isSubmitting={isSubmitting}
                      isValid={isValid}           // full-form validity (if your NavButtons uses it)
                    />
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </motion.div>

        {/* footer trust row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mx-auto mt-12 max-w-[900px] text-center text-sm text-slate-500"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8">
            <span className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-green-500" /> HIPAA Compliant</span>
            <span className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-blue-500" /> No Spam Ever</span>
            <span className="flex items-center"><span className="mr-2 h-2 w-2 rounded-full bg-purple-500" /> Expert Analysis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
