import React from "react";
import { motion } from "framer-motion";

/* Professional inline icons with enhanced styling */
const IconMedicalCross = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`w-5 h-5 ${className}`}
    aria-hidden="true"
  >
    <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V14C20 15.1 19.1 16 18 16H14V20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20V16H6C4.9 16 4 15.1 4 14V10C4 8.9 4.9 8 6 8H10V4C10 2.9 10.9 2 12 2Z" />
  </svg>
);

const IconStethoscope = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={`w-5 h-5 ${className}`}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-5m-1 0V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v2m-1 0h4" />
  </svg>
);

const IconShield = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`w-5 h-5 ${className}`}
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.814 3.359 10.814 9.75 12.814 6.391-2 9.75-7 9.75-12.814 0-1.37-.222-2.693-.635-3.92a.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08z" />
  </svg>
);

const IconCheckCircle = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`w-4 h-4 ${className}`}
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a1.14-.094l3.75-5.25z" />
  </svg>
);

const IconClock = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={`w-5 h-5 ${className}`}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

export default function VirtualHealthCallout({
  className = "",
  variant = "default", // "default" | "compact" | "minimal"
  showAnimation = true,
}) {
  const baseClasses = "rounded-2xl shadow-xl overflow-hidden border border-gray-100";
  
  const variantStyles = {
    default: "p-6 sm:p-8 lg:p-10",
    compact: "p-4 sm:p-6 lg:p-8",
    minimal: "p-3 sm:p-4 lg:p-6"
  };

  const containerMotion = showAnimation ? {
    initial: { opacity: 0, y: 30, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Professional easing curve
    }
  } : {};

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
      <motion.section
        {...containerMotion}
        className={`
          ${baseClasses} 
          ${variantStyles[variant]} 
          ${className}
          bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
          relative backdrop-blur-sm
        `}
        role="complementary"
        aria-labelledby="health-plan-title"
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100/40 to-blue-100/40 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-xl transform -translate-x-12 -translate-y-12"></div>
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <IconMedicalCross className="text-white w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                    Virtual Health Coverage
                  </div>
                  
                  <h2 
                    id="health-plan-title"
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                  >
                    Complete Healthcare
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Without the Cost
                    </span>
                  </h2>
                  
                  <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                    Our comprehensive virtual health plan for <strong className="text-gray-900">individuals and families</strong> includes 
                    <strong className="text-gray-900"> telehealth consultations</strong>, <strong className="text-gray-900">in-person doctor visits</strong>, 
                    and urgent care access - all with <strong className="text-emerald-600"> zero deductibles and zero copays</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Cost Highlight Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl font-bold text-white">$0</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Individual/Family Cost
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Deductibles:</span>
                      <span className="font-semibold text-emerald-600">$0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Copays:</span>
                      <span className="font-semibold text-emerald-600">$0</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-2 mt-2">
                      <span className="font-medium text-gray-900">Total:</span>
                      <span className="text-xl font-bold text-emerald-600">$0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="group bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-5 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconStethoscope className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Virtual Consultations</h3>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">24/7 access to licensed physicians</p>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-5 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconMedicalCross className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">In-Person Doctors</h3>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">Local network physician access</p>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-5 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconClock className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Urgent Care</h3>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">Immediate care when needed</p>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-5 hover:bg-white/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconShield className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Full Protection</h3>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">Comprehensive coverage included</p>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <IconCheckCircle className="text-emerald-400 w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Ready to Get Started?
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Get personalized healthcare coverage for you and your family without the traditional financial burden.
                </p>
              </div>
              
              <div className="flex justify-center sm:justify-end">
              <a 
  href="/contact" 
  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 shadow-lg"
>
  <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
  Book a Free Call
  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</a>

              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Availability</div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">$0</div>
              <div className="text-xs sm:text-sm text-gray-600">Out-of-Pocket</div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">Coverage</div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">5min</div>
              <div className="text-xs sm:text-sm text-gray-600">Wait Time</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}