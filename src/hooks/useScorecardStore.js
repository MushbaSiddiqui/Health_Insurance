import { useState, useCallback, useRef } from 'react';

const STORAGE_KEY = 'scorecard_form_data';

export const useScorecardStore = () => {
  const [data, setData] = useState({});
  const saveTimeoutRef = useRef(null);

  // Load data from localStorage
  const loadData = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setData(parsed);
        return parsed;
      }
    } catch (error) {
      console.warn('Failed to load scorecard data from localStorage:', error);
    }
    return {};
  }, []);

  // Save data to localStorage with debouncing
  const saveData = useCallback((newData) => {
    // Clear existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set new timeout for debounced save
    saveTimeoutRef.current = setTimeout(() => {
      try {
        // Filter out undefined values
        const cleanData = Object.fromEntries(
          Object.entries(newData).filter(([_, value]) => value !== undefined)
        );
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanData));
        setData(cleanData);
      } catch (error) {
        console.warn('Failed to save scorecard data to localStorage:', error);
      }
    }, 500); // 500ms debounce
  }, []);

  // Clear stored data
  const clearData = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setData({});
    } catch (error) {
      console.warn('Failed to clear scorecard data from localStorage:', error);
    }
  }, []);

  // Get specific field value
  const getFieldValue = useCallback((fieldName) => {
    return data[fieldName];
  }, [data]);

  // Set specific field value
  const setFieldValue = useCallback((fieldName, value) => {
    const newData = { ...data, [fieldName]: value };
    saveData(newData);
  }, [data, saveData]);

  return {
    data,
    saveData,
    loadData,
    clearData,
    getFieldValue,
    setFieldValue
  };
};
