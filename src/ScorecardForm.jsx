import React, { useEffect, useRef, useState } from "react";
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

  // Step-specific fields
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

  // Load saved data
  useEffect(() => {
    const saved = loadData();
    if (saved) {
      Object.entries(saved).forEach(([k, v]) =>
        v !== undefined && methods.setValue(k, v, { shouldDirty: false })
      );
    }
  }, []);

  // Autosave
  useEffect(() => {
    const t = setTimeout(() => saveData(watchedFields), 300);
    return () => clearTimeout(t);
  }, [watchedFields, saveData]);

  // Step validation
  useEffect(() => {
    let alive = true;
    const t = setTimeout(async () => {
      const ok = await isCurrentStepValid();
      if (alive) setCanNext(ok);
    }, 150);
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [currentStep, watchedFields]);

  // Nav handlers
  const handleNext = async () => {
    const ok = await isCurrentStepValid();
    if (ok && currentStep < 3) setCurrentStep((s) => s + 1);
  };
  const handleBack = () => currentStep > 1 && setCurrentStep((s) => s - 1);

  // Submit
  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.SCORECARD), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      setShowSuccess(true);
      methods.reset();
      setCurrentStep(1);
      saveData({});
      setTimeout(() => setShowSuccess(false), 4000);
    } catch (e) {
      alert("❌ Error submitting form. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center shadow-lg">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Thank you!</h3>
            <p className="text-sm text-gray-600 mb-4">Your assessment was submitted successfully.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-white w-full max-w-lg rounded-xl shadow-md p-5 sm:p-6">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-xl font-bold text-slate-800">Employer Benefits Scorecard</h1>
          <p className="text-sm text-slate-500 mt-1">
            A quick assessment to understand your employee benefits needs.
          </p>
        </div>

        {/* Progress */}
        <Progress currentStep={currentStep} totalSteps={3} className="mb-4" />

        {/* Form */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div ref={formTopRef} className="bg-slate-50 rounded-lg p-4">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
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
                    transition={{ duration: 0.25 }}
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
                    transition={{ duration: 0.25 }}
                  >
                    <Step3Report />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Buttons */}
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
