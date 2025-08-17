import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step3Report = () => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div className="space-y-8">
      {/* Section 3 continued: Decision Timeline */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 3: Decision Timeline (continued)</h2>
        
        {/* Question 11 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What is your general timeline for making a decision on new benefits?
          </label>
          <div className="space-y-3">
            {[
              { value: 'asap', label: 'ASAP - We need a solution now.' },
              { value: 'next-3-months', label: 'Within the next 3 months.' },
              { value: '3-6-months', label: '3-6 months from now.' },
              { value: 'gathering-info', label: 'Just gathering information for now.' }
            ].map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                                  <input
                    type="radio"
                    value={option.value}
                    {...register('decisionTimeline', {
                      required: 'Please select your decision timeline'
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.decisionTimeline && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.decisionTimeline.message}
            </p>
          )}
        </div>
      </div>

      {/* Section 4: Your Custom Report */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 4: Your Custom Report</h2>
        
        {/* Question 12 */}
        <div className="mb-8">
          <label htmlFor="companyName" className="block text-lg font-semibold text-gray-900 mb-4">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            {...register('companyName')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            placeholder="Enter your company name"
            aria-describedby={errors.companyName ? 'companyName-error' : undefined}
          />
          {errors.companyName && (
            <p id="companyName-error" className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Question 13 */}
        <div className="mb-8">
          <label htmlFor="fullName" className="block text-lg font-semibold text-gray-900 mb-4">
            Your Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            placeholder="Enter your full name"
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Question 14 */}
        <div className="mb-8">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-4">
            Your Work Email: (To receive your qualification status & savings analysis)
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            placeholder="Enter your work email address"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Question 15 */}
        <div className="mb-8">
          <label htmlFor="phone" className="block text-lg font-semibold text-gray-900 mb-4">
            Your Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              pattern: {
                value: /^[\+]?[1-9][\d]{0,15}$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            placeholder="Enter your phone number"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.phone.message}
            </p>
          )}
          <p className="mt-2 text-sm text-gray-600">
            International numbers are welcome. Format: +1-555-123-4567
          </p>
        </div>
      </div>

      {/* Final Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Almost Done!</h3>
            <p className="text-blue-800">
              Once you submit this assessment, you'll receive your qualification status and a detailed 
              breakdown of your potential tax savings. Our team will review your responses and prepare 
              a personalized report just for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Report;
