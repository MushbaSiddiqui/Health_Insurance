# Google Sheets Integration Setup

## 🚀 **Step-by-Step Setup Instructions**

### **1. Create Google Apps Script Project**

1. Go to [script.google.com](https://script.google.com)
2. Click **"New Project"**
3. Replace the default code with the content from `GoogleAppsScript.js`
4. Save the project with a name like "Customer Service Form Handler"

### **2. Deploy as Web App**

1. Click **"Deploy"** → **"New deployment"**
2. Choose **"Web app"** as the type
3. Set **"Execute as"** to your Google account
4. Set **"Who has access"** to **"Anyone"**
5. Click **"Deploy"**
6. **Copy the Web App URL** - you'll need this for the form

### **3. Update Your Form**

1. Open `src/CustomerService.jsx`
2. Find this line:
   ```javascript
   const response = await fetch('https://script.google.com/macros/s/AKfycbzNcQm_1234567890abcdef/exec', {
   ```
3. Replace the URL with your actual Web App URL from step 2

### **4. Test the Integration**

1. Submit a test form
2. Check your Google Sheet: [https://docs.google.com/spreadsheets/d/1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA/edit](https://docs.google.com/spreadsheets/d/1dLsTR_yflv6YGGY7uEnswBHhzQzIn43iFyvpk0_ePwA/edit)
3. You should see new rows appear automatically

## 📊 **What Happens Now**

- ✅ **No more Excel downloads** for clients
- ✅ **Form data automatically saves** to your Google Sheet
- ✅ **You get all submissions** in one place
- ✅ **Real-time updates** when forms are submitted
- ✅ **Easy to share** the sheet with your team

## 🔧 **Troubleshooting**

If you get errors:
1. Make sure the Google Apps Script is deployed as a web app
2. Check that the sheet ID in the script matches your sheet
3. Ensure the script has permission to access your sheet
4. Test the web app URL in a browser first

## 📱 **Your Google Sheet**

Your sheet will automatically receive:
- Timestamp
- Name
- Email  
- Subject
- Message
- Terms agreement
- Phone number

**The client experience is now clean and simple - they just submit the form and get a confirmation message!**
