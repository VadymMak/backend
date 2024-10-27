const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Sample endpoint
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Replace with your callback endpoint
app.post("/callback", (req, res) => {
  // Handle the callback request
  res.send("Callback received!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
