import React from 'react';
import { motion } from 'framer-motion';

const Progress = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Business Goals & Structure' },
    { number: 2, label: 'Business Snapshot & Benefits' },
    { number: 3, label: 'Contact & Custom Report' }
  ];
  
  const progressPercentage = (currentStep / 3) * 100;
  
  return (
    <div className="mb-8">
      {/* Step Indicators */}
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-colors duration-200 ${
                  step.number <= currentStep
                    ? 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white border-transparent'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}
              >
                {step.number < currentStep ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-12 w-16 h-0.5 bg-gray-300">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 to-teal-600"
                    initial={{ width: 0 }}
                    animate={{ width: step.number < currentStep ? '100%' : '0%' }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
              )}
            </div>
            
            <span className={`mt-2 text-sm font-medium text-center max-w-24 ${
              step.number <= currentStep ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="h-2 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Progress Text */}
      <div className="text-center mt-3">
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep} of 3 • {Math.round(progressPercentage)}% Complete
        </span>
      </div>
    </div>
  );
};

export default Progress;
