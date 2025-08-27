// server.js - Main backend server file
const express = require('express');
const cors = require('cors');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Add your frontend URLs
  credentials: true
}));
app.use(express.json());

// Google Sheets Configuration
const SPREADSHEET_ID = '1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA';
const SHEET_ID = 0; // Usually 0 for the first sheet

// Initialize Google Auth
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

// Initialize Google Sheets Document
const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

// Function to initialize the sheet with headers
async function initializeSheet() {
  try {
    await doc.loadInfo();
    console.log('📊 Connected to Google Sheet:', doc.title);
    
    const sheet = doc.sheetsByIndex[0]; // Get first sheet
    
    // Check if headers exist, if not add them
    const rows = await sheet.getRows();
    if (rows.length === 0) {
      // Add headers if sheet is empty
      await sheet.setHeaderRow([
        'Timestamp',
        'Company Name',
        'Full Name', 
        'Email', 
        'Phone', 
        'Business Priority',
        'Turnover Concern',
        'Motivation',
        'Employee Count',
        'Business Structure',
        'Offers Health Plan',
        'Health Plan Challenge',
        'Payroll Processing',
        'Supplemental Benefits',
        'Average Salary',
        'Decision Timeline',
        'UTM Source',
        'UTM Medium',
        'UTM Campaign',
        'UTM Term',
        'UTM Content',
        'Status'
      ]);
      console.log('✅ Headers added to sheet');
    }
  } catch (error) {
    console.error('❌ Error initializing sheet:', error.message);
  }
}

// Customer service form submission endpoint
app.post('/api/customer-service', async (req, res) => {
  try {
    const { name, email, phone, category, subject, message, consent } = req.body;

    // Validation
    if (!name || !email || !subject || !message || !consent) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'subject', 'message', 'consent']
      });
    }

    // Load the document
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Add the data to the sheet
    const newRow = await sheet.addRow({
      'Timestamp': new Date().toISOString(),
      'Name': name,
      'Email': email,
      'Phone': phone || 'Not provided',
      'Category': category,
      'Subject': subject,
      'Message': message,
      'Consent': consent ? 'Yes' : 'No',
      'Status': 'New'
    });

    console.log('✅ Data saved to sheet:', { name, email, subject });

    res.json({ 
      success: true, 
      message: 'Data successfully saved to Google Sheet',
      rowId: newRow.rowNumber 
    });

  } catch (error) {
    console.error('❌ Error saving to sheet:', error);
    res.status(500).json({ 
      error: 'Failed to save data to Google Sheet',
      details: error.message 
    });
  }
});

// Scorecard form submission endpoint
app.post('/api/scorecard', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate required fields for scorecard
    const requiredFields = ['companyName', 'fullName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!formData[field] || !formData[field].trim()) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          required: requiredFields
        });
      }
    }

    // Load the document
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Add the scorecard data to the sheet
    const newRow = await sheet.addRow({
      'Timestamp': new Date().toISOString(),
      'Company Name': formData.companyName || '',
      'Full Name': formData.fullName || '',
      'Email': formData.email || '',
      'Phone': formData.phone || '',
      'Business Priority': formData.businessPriority || '',
      'Turnover Concern': formData.turnoverConcern || '',
      'Motivation': formData.motivation || '',
      'Employee Count': formData.employeeCount || '',
      'Business Structure': formData.businessStructure || '',
      'Offers Health Plan': formData.offersHealthPlan || '',
      'Health Plan Challenge': formData.healthPlanChallenge || '',
      'Payroll Processing': formData.payrollProcessing || '',
      'Supplemental Benefits': formData.supplementalBenefits || '',
      'Average Salary': formData.averageSalary || '',
      'Decision Timeline': formData.decisionTimeline || '',
      'UTM Source': formData.utm_source || '',
      'UTM Medium': formData.utm_medium || '',
      'UTM Campaign': formData.utm_campaign || '',
      'UTM Term': formData.utm_term || '',
      'UTM Content': formData.utm_content || '',
      'Status': 'New Scorecard'
    });

    console.log('✅ Scorecard data saved to sheet:', { 
      companyName: formData.companyName, 
      fullName: formData.fullName, 
      email: formData.email 
    });

    res.json({ 
      success: true, 
      message: 'Scorecard data successfully saved to Google Sheet',
      rowId: newRow.rowNumber 
    });

  } catch (error) {
    console.error('❌ Error saving scorecard data to sheet:', error);
    res.status(500).json({ 
      error: 'Failed to save scorecard data to Google Sheet',
      details: error.message 
    });
  }
});

// Test endpoint to check if API is working
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend server is running!',
    timestamp: new Date().toISOString(),
    spreadsheetId: SPREADSHEET_ID
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Google Sheet ID: ${SPREADSHEET_ID}`);
  
  // Initialize sheet on startup
  await initializeSheet();
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down server...');
  process.exit(0);
});
