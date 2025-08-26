const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Google Sheets configuration
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = '1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA'; // Your sheet ID
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');

// Initialize Google Sheets client
function getGoogleSheetsClient() {
  try {
    const credentials = JSON.parse(require('fs').readFileSync(CREDENTIALS_PATH));
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });
    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error loading Google credentials:', error);
    return null;
  }
}

// Save data to Google Sheet
async function saveToGoogleSheet(data) {
  const sheets = getGoogleSheetsClient();
  if (!sheets) return false;

  try {
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || '',
      data.consent ? 'Yes' : 'No',
      data.phone || 'Not provided'
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:G', // Adjust range based on your sheet
      valueInputOption: 'RAW',
      resource: { values: [rowData] }
    });

    console.log('✅ Data saved to Google Sheet:', data.name);
    return true;
  } catch (error) {
    console.error('❌ Error saving to Google Sheet:', error);
    return false;
  }
}

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
    const success = await saveToGoogleSheet(formData);
    
    if (success) {
      res.json({
        success: true,
        message: 'Form submitted successfully and saved to Google Sheets!',
        data: formData
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to save data to Google Sheets'
      });
    }
    
  } catch (error) {
    console.error('Error processing form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Backend server is running!', 
    timestamp: new Date().toISOString(),
    sheetId: SHEET_ID
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📊 Google Sheets integration ready for sheet: ${SHEET_ID}`);
  console.log(`🧪 Test URL: http://localhost:${PORT}/test`);
  console.log(`📝 Form endpoint: http://localhost:${PORT}/api/customer-service`);
});
