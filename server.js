// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/callback", (req, res) => {
  const { name, phone } = req.body;
  // Implement callback logic here (e.g., send email or store info)
  res.send("Callback request received");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
