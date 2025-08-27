const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets configuration
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Sheet IDs for different forms
const SCORECARD_SHEET_ID = process.env.SCORECARD_SHEET_ID || '1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA';
const CUSTOMER_SERVICE_SHEET_ID = process.env.CUSTOMER_SERVICE_SHEET_ID || '1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA';

// Initialize Google Sheets client
function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      SCOPES
    );
    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('❌ Error initializing Google Sheets client:', error);
    return null;
  }
}

// Save scorecard data to Google Sheet
async function saveScorecardToSheet(data) {
  const sheets = getGoogleSheetsClient();
  if (!sheets) return false;

  try {
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.companyName || '',
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.businessPriority || '',
      data.turnoverConcern || '',
      data.motivation || '',
      data.employeeCount || '',
      data.businessStructure || '',
      data.hasHealthPlan || '',
      data.healthPlanChallenges || '',
      data.payrollProcessing || '',
      data.supplementalBenefits ? data.supplementalBenefits.join(', ') : '',
      data.averageSalary || '',
      data.decisionTimeline || ''
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SCORECARD_SHEET_ID,
      range: 'Scorecard!A:P', // Separate sheet for scorecard data
      valueInputOption: 'RAW',
      resource: { values: [rowData] }
    });

    console.log('✅ Scorecard data saved to Google Sheet:', data.companyName);
    return true;
  } catch (error) {
    console.error('❌ Error saving scorecard to Google Sheet:', error);
    return false;
  }
}

// Save customer service data to Google Sheet
async function saveCustomerServiceToSheet(data) {
  const sheets = getGoogleSheetsClient();
  if (!sheets) return false;

  try {
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.name || '',
      data.email || '',
      data.phone || 'Not provided',
      data.subject || '',
      data.message || '',
      data.consent ? 'Yes' : 'No'
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: CUSTOMER_SERVICE_SHEET_ID,
      range: 'CustomerService!A:G', // Separate sheet for customer service data
      valueInputOption: 'RAW',
      resource: { values: [rowData] }
    });

    console.log('✅ Customer service data saved to Google Sheet:', data.name);
    return true;
  } catch (error) {
    console.error('❌ Error saving customer service to Google Sheet:', error);
    return false;
  }
}

// API endpoint for scorecard form
app.post('/api/scorecard', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate required fields
    const requiredFields = ['companyName', 'fullName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!formData[field] || !formData[field].toString().trim()) {
        return res.status(400).json({
          success: false,
          message: `${field} is required`
        });
      }
    }
    
    // Save to Google Sheet
    const success = await saveScorecardToSheet(formData);
    
    if (success) {
      res.json({
        success: true,
        message: 'Scorecard form submitted successfully and saved to Google Sheets!',
        data: formData
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to save scorecard data to Google Sheets'
      });
    }
    
  } catch (error) {
    console.error('Error processing scorecard form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// API endpoint for customer service form
app.post('/api/customer-service', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!formData[field] || !formData[field].trim()) {
        return res.status(400).json({
          success: false,
          message: `${field} is required`
        });
      }
    }
    
    // Save to Google Sheet
    const success = await saveCustomerServiceToSheet(formData);
    
    if (success) {
      res.json({
        success: true,
        message: 'Customer service form submitted successfully and saved to Google Sheets!',
        data: formData
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to save customer service data to Google Sheets'
      });
    }
    
  } catch (error) {
    console.error('Error processing customer service form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    message: 'Backend server is running!', 
    timestamp: new Date().toISOString(),
    scorecardSheetId: SCORECARD_SHEET_ID,
    customerServiceSheetId: CUSTOMER_SERVICE_SHEET_ID
  });
});

// Test Google Sheets connection
app.get('/test-sheets', async (req, res) => {
  const sheets = getGoogleSheetsClient();
  if (!sheets) {
    return res.status(500).json({
      success: false,
      message: 'Failed to initialize Google Sheets client'
    });
  }
  
  try {
    // Test access to both sheets
    const scorecardTest = await sheets.spreadsheets.get({ spreadsheetId: SCORECARD_SHEET_ID });
    const customerServiceTest = await sheets.spreadsheets.get({ spreadsheetId: CUSTOMER_SERVICE_SHEET_ID });
    
    res.json({
      success: true,
      message: 'Google Sheets connection successful',
      sheets: {
        scorecard: {
          title: scorecardTest.data.properties.title,
          sheetId: SCORECARD_SHEET_ID
        },
        customerService: {
          title: customerServiceTest.data.properties.title,
          sheetId: CUSTOMER_SERVICE_SHEET_ID
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Google Sheets connection failed',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📊 Scorecard Sheet ID: ${SCORECARD_SHEET_ID}`);
  console.log(`📊 Customer Service Sheet ID: ${CUSTOMER_SERVICE_SHEET_ID}`);
  console.log(`🧪 Health Check: http://localhost:${PORT}/health`);
  console.log(`🧪 Test Sheets: http://localhost:${PORT}/test-sheets`);
  console.log(`📝 Scorecard API: http://localhost:${PORT}/api/scorecard`);
  console.log(`📝 Customer Service API: http://localhost:${PORT}/api/customer-service`);
});

module.exports = app;