const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    message: "MMD staging is running"
  });
});

app.listen(PORT, () => {
  console.log(`MMD running on port ${PORT}`);
});