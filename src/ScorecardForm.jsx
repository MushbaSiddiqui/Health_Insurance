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
import { getApiUrl, API_CONFIG } from "./config";

export default function ScorecardForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canNext, setCanNext] = useState(false);           // step-scoped validity
  const [showSuccess, setShowSuccess] = useState(false);
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

      const res = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.SCORECARD), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");
      
      // Show success popup
      setShowSuccess(true);
      
      // Clear the form
      methods.reset();
      setCurrentStep(1);
      
      // Clear stored data
      saveData({});
      
      // Hide success popup after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (e) {
      console.error("Submission error:", e);
      alert("❌ Sorry, there was an error submitting your form. Please try again.");
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
    <div id="scorecard-form" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your assessment has been submitted successfully and saved to our system.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Employer Benefits Scorecard
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Get a personalized assessment of how our health benefits can help your business save money and improve employee satisfaction.
          </p>
        </div>

        {/* Progress Bar */}
        <Progress currentStep={currentStep} totalSteps={3} className="mb-8 sm:mb-12" />

        {/* Form Container */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 sm:space-y-12">
            {/* Step Content */}
            <div ref={formTopRef} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Step1Goals />
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Step2Snapshot />
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Step3Report />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <NavButtons
              currentStep={currentStep}
              canNext={canNext}
              isSubmitting={isSubmitting}
              isValid={isValid}
              onNext={handleNext}
              onPrevious={handleBack}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
