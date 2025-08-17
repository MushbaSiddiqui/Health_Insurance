import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step2Snapshot = () => {
  const { register, formState: { errors }, watch } = useFormContext();
  const offersHealthPlan = watch('offersHealthPlan');
  
  return (
    <div className="space-y-8">
      {/* Section 2 continued: Business Snapshot */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 2: Business Snapshot (continued)</h2>
        
        {/* Question 6 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Do you currently offer a major medical health insurance plan to your employees?
          </label>
          <div className="space-y-3">
            {[
              { value: 'yes', label: 'Yes, we offer a traditional group health plan.' },
              { value: 'no', label: 'No, we do not currently offer a major medical plan.' }
            ].map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                                  <input
                    type="radio"
                    value={option.value}
                    {...register('offersHealthPlan', {
                      required: 'Please indicate if you offer a health plan'
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.offersHealthPlan && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.offersHealthPlan.message}
            </p>
          )}
        </div>

        {/* Question 7 - Conditional */}
        {offersHealthPlan === 'yes' && (
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              If you offer a plan, what is the biggest challenge you face with it?
            </label>
            <div className="space-y-3">
              {[
                { value: 'high-premiums', label: 'High annual premium increases' },
                { value: 'high-deductibles', label: 'High deductibles and out-of-pocket costs for employees' },
                { value: 'administrative-complexity', label: 'Administrative complexity' },
                { value: 'lack-flexibility', label: 'Lack of flexibility and plan choices' }
              ].map((option) => (
                <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    value={option.value}
                    {...register('healthPlanChallenge', {
                      validate: (value) => {
                        if (offersHealthPlan === 'yes' && !value) {
                          return 'Please select the biggest challenge you face with your health plan';
                        }
                        return true;
                      }
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.healthPlanChallenge && (
              <p className="mt-2 text-sm text-red-600" aria-live="polite">
                {errors.healthPlanChallenge.message}
              </p>
            )}
          </div>
        )}

        {/* Question 8 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            How do you currently process payroll?
          </label>
          <div className="space-y-3">
            {[
              { value: 'national-provider', label: 'We use a national provider (like ADP, Paychex, Gusto)' },
              { value: 'in-house-software', label: 'We use in-house software (like QuickBooks)' },
              { value: 'accountant-handles', label: 'Our accountant or a local firm handles it' }
            ].map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                                  <input
                    type="radio"
                    value={option.value}
                    {...register('payrollProcessing', {
                      required: 'Please select your payroll processing method'
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.payrollProcessing && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.payrollProcessing.message}
            </p>
          )}
        </div>
      </div>

      {/* Section 3: Supplemental Benefits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 3: Supplemental Benefits</h2>
        
        {/* Question 9 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Which of these supplemental benefits do you think your employees would value most? (Choose up to three)
          </label>
          <div className="space-y-3">
            {[
              { value: 'zero-copay-doctor', label: '$0 Copay Doctor & Urgent Care Visits' },
              { value: 'zero-copay-prescriptions', label: '$0 Copay for Common Prescriptions' },
              { value: 'virtual-doctor', label: '24/7 Virtual Access to a Doctor' },
              { value: 'mental-health', label: 'Virtual Mental Health Support' },
              { value: 'vet-services', label: 'Virtual Vet Services for their pets' }
            ].map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  value={option.value}
                  {...register('supplementalBenefits', {
                    validate: (value) => {
                      if (!value || value.length === 0) {
                        return 'Please select at least one benefit';
                      }
                      if (value.length > 3) {
                        return 'Please select no more than 3 benefits';
                      }
                      return true;
                    }
                  })}
                  className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.supplementalBenefits && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.supplementalBenefits.message}
            </p>
          )}
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What is the approximate average annual salary of your employees?
          </label>
          <div className="space-y-3">
            {[
              { value: 'under-40k', label: 'Under $40,000' },
              { value: '40k-60k', label: '$40,000 - $60,000' },
              { value: '60k-80k', label: '$60,000 - $80,000' },
              { value: 'over-80k', label: 'Over $80,000' }
            ].map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                                  <input
                    type="radio"
                    value={option.value}
                    {...register('averageSalary', {
                      required: 'Please select the average salary range'
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.averageSalary && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.averageSalary.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2Snapshot;
