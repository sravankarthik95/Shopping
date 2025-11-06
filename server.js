import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));

// Route to get mobiles.json
app.get("/api/mobiles", (req, res) => {
  fs.readFile("mobiles.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading mobiles.json" });
    } else {
      const mobiles = JSON.parse(data);
      res.json(mobiles);
    }
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("📱 Mobile API is running!");
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
