require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");

// Check if environment variables are loaded
if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
  console.error("❌ Missing required environment variables!");
  console.error("GOOGLE_CLIENT_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL ? "✅" : "❌");
  console.error("GOOGLE_PRIVATE_KEY:", process.env.GOOGLE_PRIVATE_KEY ? "✅" : "❌");
  console.error("Check your .env file in the backend folder");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

const auth = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });

// Customer Service Form Endpoint
app.post("/api/customer-service", async (req, res) => {
  try {
    const data = req.body;
    const row = [
      data.name || "",
      data.email || "",
      data.subject || "",
      data.message || "",
      data.consent ? "Yes" : "No",
      data.phone || "",
      new Date().toISOString()
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.CUSTOMER_SERVICE_SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    res.status(200).send({ message: "Customer service form saved successfully!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ error: "Failed to save customer service form" });
  }
});

// Scorecard Form Endpoint
app.post("/api/scorecard", async (req, res) => {
  try {
    const data = req.body;
    const row = [
      data.companyName || "",
      data.fullName || "",
      data.email || "",
      data.phone || "",
      new Date().toISOString(),
      data.businessPriority || "",
      data.turnoverConcern || "",
      data.motivation || "",
      data.employeeCount || "",
      data.businessStructure || "",
      data.offersHealthPlan || "",
      data.healthPlanChallenge || "",
      data.payrollProcessing || "",
      data.supplementalBenefits || "",
      data.averageSalary || "",
      data.decisionTimeline || ""
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SCORECARD_SHEET_ID,
      range: "Sheet1!A:P",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    res.status(200).send({ message: "Scorecard form saved successfully!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ error: "Failed to save scorecard form" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));