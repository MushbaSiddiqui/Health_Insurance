# Google Sheets API Integration Setup

## 🚀 **Complete Setup Guide**

### **Step 1: Install Backend Dependencies**
```bash
npm install express cors
```

### **Step 2: Get Google Cloud Credentials**

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project** or select existing one
3. **Enable Google Sheets API**
4. **Create Service Account**:
   - Go to "IAM & Admin" → "Service Accounts"
   - Click "Create Service Account"
   - Give it a name like "Customer Service Form"
   - Click "Create and Continue"
   - Skip role assignment, click "Continue"
   - Click "Done"
5. **Create and Download Key**:
   - Click on your service account
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose "JSON"
   - Download the file
6. **Rename the file** to `credentials.json` and place it in your project root

### **Step 3: Share Your Google Sheet**

1. **Open your sheet**: [https://docs.google.com/spreadsheets/d/1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA/edit](https://docs.google.com/spreadsheets/d/1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA/edit)
2. **Click "Share"** button
3. **Add the service account email** (from credentials.json) with **Editor** access
4. **Uncheck "Notify people"**

### **Step 4: Start the Backend Server**

**Terminal 1 (Backend):**
```bash
npm run server
```

**Terminal 2 (Frontend):**
```bash
npm start
```

### **Step 5: Test the Integration**

1. **Submit a test form** from your React app
2. **Check the backend console** for success messages
3. **Check your Google Sheet** for new rows

## 📊 **What Happens Now**

- ✅ **Form data sent** to your local backend server
- ✅ **Backend validates** and processes the data
- ✅ **Data automatically saved** to your Google Sheet
- ✅ **Real-time updates** in your sheet
- ✅ **Professional setup** with full control

## 🔧 **Troubleshooting**

### **Error: "credentials.json not found"**
- Make sure `credentials.json` is in your project root
- Check the file path in `server.js`

### **Error: "Permission denied"**
- Make sure you shared the sheet with the service account email
- Check that the service account has Editor access

### **Error: "API not enabled"**
- Make sure Google Sheets API is enabled in Google Cloud Console

### **Port conflicts**
- Change the port in `server.js` if 3001 is busy

## 📱 **Your Google Sheet Structure**

The backend will save data in this order:
1. **Timestamp** - When form was submitted
2. **Name** - Customer's full name
3. **Email** - Customer's email
4. **Subject** - Form subject
5. **Message** - Customer's message
6. **Consent** - Terms agreement (Yes/No)
7. **Phone** - Phone number (or "Not provided")

## 🎯 **Next Steps**

1. **Follow the setup guide above**
2. **Test with a form submission**
3. **Check your Google Sheet** for new data
4. **Enjoy automatic form data collection!**

**Your form will now automatically save all submissions to your Google Sheet!** 🎉
