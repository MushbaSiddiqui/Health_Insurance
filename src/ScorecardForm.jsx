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
  const [canNext, setCanNext] = useState(false);
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
      Object.entries(saved).forEach(([k, v]) =>
        v !== undefined && methods.setValue(k, v, { shouldDirty: false })
      );
    }
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
  }, [currentStep, watchedFields, trigger]);

  // ----- nav handlers -----
  const handleNext = async () => {
    const ok = await isCurrentStepValid();
    if (ok && currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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

      // Submit to Google Apps Script using form-encoded data
      const formDataEncoded = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          formDataEncoded.append(key, value);
        }
      });

      const response = await fetch("https://script.google.com/macros/s/AKfycbynJWgcMtxrXtrda73u9LJkVnUwYcsabOmzowbQlQ6bTaFeUSCjBaOBz9HfyndzIvrxVA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataEncoded.toString()
      });

      if (!response.ok) throw new Error("Submission failed");

      const result = await response.text();
      console.log("Submission result:", result);

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
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Header */}
          <div className="flex flex-col justify-center lg:sticky lg:top-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Employer Benefits 
                <span className="block text-blue-600">Scorecard</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Get a personalized assessment of how our health benefits can help your business save money and improve employee satisfaction.
              </p>
              
              {/* Progress Bar - shown on left side for desktop */}
              <div className="hidden lg:block">
                <Progress currentStep={currentStep} totalSteps={3} className="mb-8" />
              </div>
              
              {/* Optional decorative element */}
              <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-500">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  3-minute assessment
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Instant results
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full">
            {/* Progress Bar - shown on mobile/tablet */}
            <div className="lg:hidden mb-6">
              <Progress currentStep={currentStep} totalSteps={3} />
            </div>

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Form Container - More compact */}
                <div ref={formTopRef} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
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
      </div>
    </div>
  );
}