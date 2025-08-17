import { z } from 'zod';

// Step 1: Business Goals & Structure
export const step1Schema = z.object({
  businessPriority: z.enum([
    'attracting-talent',
    'reducing-costs',
    'enhancing-benefits',
    'improving-productivity'
  ], {
    required_error: 'Please select your business priority'
  }),
  
  turnoverConcern: z.coerce.number({
    required_error: 'Please rate your concern about employee turnover'
  }).min(1, 'Please select a rating').max(5, 'Please select a rating'),
  
  motivation: z.enum([
    'current-plan-expensive',
    'employees-asking',
    'losing-candidates',
    'tax-savings-interest'
  ], {
    required_error: 'Please select your primary motivation'
  }),
  
  employeeCount: z.coerce.number({
    required_error: 'Please enter the number of employees'
  }).int('Must be a whole number').min(1, 'Must have at least 1 employee').max(10000, 'Maximum 10,000 employees'),
  
  businessStructure: z.enum([
    's-corporation',
    'c-corporation',
    'llc',
    'partnership',
    'sole-proprietorship'
  ], {
    required_error: 'Please select your business structure'
  })
});

// Step 2: Business Snapshot & Benefits
export const step2Schema = z.object({
  offersHealthPlan: z.enum(['yes', 'no'], {
    required_error: 'Please indicate if you offer a health plan'
  }),
  
  healthPlanChallenge: z.enum([
    'high-premiums',
    'high-deductibles',
    'administrative-complexity',
    'lack-flexibility'
  ]).optional(),
  
  payrollProcessing: z.enum([
    'national-provider',
    'in-house-software',
    'accountant-handles'
  ], {
    required_error: 'Please select your payroll processing method'
  }),
  
  supplementalBenefits: z.array(z.string()).min(1, 'Please select at least one benefit').max(3, 'Please select no more than 3 benefits'),
  
  averageSalary: z.enum([
    'under-40k',
    '40k-60k',
    '60k-80k',
    'over-80k'
  ], {
    required_error: 'Please select the average salary range'
  })
});

// Step 3: Contact & Report
export const step3Schema = z.object({
  decisionTimeline: z.enum([
    'asap',
    'next-3-months',
    '3-6-months',
    'gathering-info'
  ], {
    required_error: 'Please select your decision timeline'
  }),
  
  companyName: z.string().min(1, 'Company name is required').max(100, 'Company name is too long'),
  
  fullName: z.string().min(1, 'Full name is required').max(100, 'Full name is too long'),
  
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  
  phone: z.string().min(10, 'Please enter a valid phone number').regex(
    /^[\+]?[1-9][\d]{0,15}$/,
    'Please enter a valid phone number'
  )
});

// Complete form schema
export const scorecardSchema = step1Schema.merge(step2Schema).merge(step3Schema);

// Conditional validation for step 2
export const validateStep2 = (data) => {
  const baseValidation = step2Schema.safeParse(data);
  
  if (!baseValidation.success) {
    return baseValidation;
  }
  
  return baseValidation;
};

// Step-by-step validation functions
export const validateStep1 = (data) => step1Schema.safeParse(data);
export const validateStep3 = (data) => step3Schema.safeParse(data);

// Helper function to get step fields
export const getStepFields = (step) => {
  switch (step) {
    case 1:
      return Object.keys(step1Schema.shape);
    case 2:
      return Object.keys(step2Schema.shape);
    case 3:
      return Object.keys(step3Schema.shape);
    default:
      return [];
  }
};

// Helper function to check if a step is complete
export const isStepComplete = (step, data) => {
  const stepFields = getStepFields(step);
  const stepData = {};
  
  stepFields.forEach(field => {
    if (data[field] !== undefined) {
      stepData[field] = data[field];
    }
  });
  
  let validation;
  switch (step) {
    case 1:
      validation = validateStep1(stepData);
      break;
    case 2:
      validation = validateStep2(stepData);
      break;
    case 3:
      validation = validateStep3(stepData);
      break;
    default:
      return false;
  }
  
  return validation.success;
};
