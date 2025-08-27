require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");

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

app.post("/api/scorecard", async (req, res) => {
  try {
    const data = req.body;
    const row = [
      data.companyName || "",
      data.fullName || "",
      data.email || "",
      data.phone || "",
      new Date().toISOString(),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    res.status(200).send({ message: "Saved successfully!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ error: "Failed to save" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
