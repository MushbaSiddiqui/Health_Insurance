import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1Goals = () => {
  const { register, formState: { errors }, watch } = useFormContext();
  
  return (
    <div className="space-y-8">
      {/* Section 1: Your Business Goals */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 1: Your Business Goals</h2>
        
        {/* Question 1 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What is the #1 priority for your business in the next 12 months?
          </label>
          <div className="space-y-3">
            {[
              { value: 'attracting-talent', label: 'Attracting and retaining top talent' },
              { value: 'reducing-costs', label: 'Reducing operational costs and improving cash flow' },
              { value: 'enhancing-benefits', label: 'Enhancing our employee benefits package to be more competitive' },
              { value: 'improving-productivity', label: 'Improving employee productivity and reducing absenteeism' }
            ].map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                                  <input
                    type="radio"
                    value={option.value}
                    {...register('businessPriority', {
                      required: 'Please select your business priority'
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.businessPriority && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.businessPriority.message}
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            On a scale of 1 to 5, how concerned are you about employee turnover?
          </label>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-500">1 = Not at all concerned</span>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="flex flex-col items-center cursor-pointer group">
                  <input
                    type="radio"
                    value={value}
                    {...register('turnoverConcern', {
                      required: 'Please select your concern level about employee turnover'
                    })}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="mt-1 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {value}
                  </span>
                </label>
              ))}
            </div>
            <span className="text-sm text-gray-500">5 = Extremely concerned</span>
          </div>
          {errors.turnoverConcern && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.turnoverConcern.message}
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            What is your primary motivation for exploring new health benefit options today?
          </label>
          <div className="space-y-3">
            {[
              { value: 'current-plan-expensive', label: 'Our current plan is too expensive.' },
              { value: 'employees-asking', label: 'Our employees are asking for better benefits.' },
              { value: 'losing-candidates', label: 'We don\'t offer benefits and are losing good candidates.' },
              { value: 'tax-savings-interest', label: 'We heard about potential tax savings and want to learn more.' }
            ].map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                                  <input
                    type="radio"
                    value={option.value}
                    {...register('motivation', {
                      required: 'Please select your primary motivation'
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.motivation && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.motivation.message}
            </p>
          )}
        </div>
      </div>

      {/* Section 2: Business Structure */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 2: Business Structure</h2>
        
        {/* Question 4 */}
        <div className="mb-8">
          <label htmlFor="employeeCount" className="block text-lg font-semibold text-gray-900 mb-4">
            How many W-2 employees are on your team?
          </label>
          <input
            type="number"
            id="employeeCount"
            {...register('employeeCount', { 
              valueAsNumber: true,
              min: { value: 1, message: 'Must have at least 1 employee' },
              max: { value: 10000, message: 'Maximum 10,000 employees' }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            placeholder="Enter number of employees"
            min="1"
            max="10000"
          />
          {errors.employeeCount && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.employeeCount.message}
            </p>
          )}
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Which business structure best describes your company? (This helps us identify the most impactful tax strategies for you.)
          </label>
          <div className="space-y-3">
            {[
              'S-Corporation',
              'C-Corporation', 
              'LLC (Limited Liability Company)',
              'Partnership',
              'Sole Proprietorship'
            ].map((option) => (
              <label key={option} className="flex items-start space-x-3 cursor-pointer group">
                                  <input
                    type="radio"
                    value={option.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}
                    {...register('businessStructure', {
                      required: 'Please select your business structure'
                    })}
                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
          {errors.businessStructure && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {errors.businessStructure.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1Goals;
