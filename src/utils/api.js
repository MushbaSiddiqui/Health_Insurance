import { API_CONFIG, getApiUrl } from '../config';

// Submit scorecard form data
export const submitScorecardForm = async (formData) => {
  try {
    const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.SCORECARD), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit scorecard form');
    }

    return result;
  } catch (error) {
    console.error('Error submitting scorecard form:', error);
    throw error;
  }
};

// Submit customer service form data
export const submitCustomerServiceForm = async (formData) => {
  try {
    const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.CUSTOMER_SERVICE), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit customer service form');
    }

    return result;
  } catch (error) {
    console.error('Error submitting customer service form:', error);
    throw error;
  }
};

// Test backend connection
export const testBackendConnection = async () => {
  try {
    const response = await fetch(getApiUrl('/health'));
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error testing backend connection:', error);
    throw error;
  }
};

// Test Google Sheets connection
export const testSheetsConnection = async () => {
  try {
    const response = await fetch(getApiUrl('/test-sheets'));
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error testing sheets connection:', error);
    throw error;
  }
};
