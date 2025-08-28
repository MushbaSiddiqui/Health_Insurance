// src/config.js - Google Apps Script configuration
export const GOOGLE_APPS_SCRIPT_URLS = {
  SCORECARD: 'https://script.google.com/macros/s/AKfycbx730FSmyV4jhRK4En7xrXHC9nC8XAWWxmIFdEv1MFDDp0T0tSpqF_OssY2_ik8S54DDQ/exec',
  CUSTOMER_SERVICE: 'https://script.google.com/macros/s/AKfycbxjHgLAGnqYifo0tA7LHToZfC_Rk7u5qyzkKyyogvhskPFk3h0mjhfemRJVeBfkVTZd/exec'
};

export const API_CONFIG = {
  GOOGLE_SCRIPT_URLS: GOOGLE_APPS_SCRIPT_URLS,
  ENDPOINTS: {
    SCORECARD: GOOGLE_APPS_SCRIPT_URLS.SCORECARD,
    CUSTOMER_SERVICE: GOOGLE_APPS_SCRIPT_URLS.CUSTOMER_SERVICE
  }
};

export const getApiUrl = (endpoint) => {
  return endpoint;
};