import React from 'react';
import { motion } from 'framer-motion';

const NavButtons = ({ 
  currentStep, 
  onNext, 
  onPrevious, 
  canNext, 
  isSubmitting, 
  isValid 
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-4 sm:px-8 py-4 sm:py-6 bg-gray-50 border-t border-gray-200">
      {/* Back Button */}
      {currentStep > 1 && (
        <motion.button
          type="button"
          onClick={onPrevious}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 w-full sm:w-auto justify-center"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back</span>
        </motion.button>
      )}
      
      {/* Spacer for single button */}
      {currentStep === 1 && <div className="w-full sm:w-auto" />}
      
      {/* Next/Submit Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full sm:w-auto"
      >
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={onNext}
            disabled={!canNext}
            data-qa="btn-next"
            className={`flex items-center justify-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto ${
              !canNext
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 focus:ring-indigo-500 transform hover:scale-105'
            }`}
          >
            <span>Next</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            data-qa="btn-submit"
            className={`flex items-center justify-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto ${
              !isValid || isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 focus:ring-indigo-500 transform hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Assessment</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default NavButtons;
