const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "MMD",
    status: "running"
  });
});
app.post('/api/payment', (req, res) => {
  res.status(503).json({
    ok: false,
    message: 'بوابة الدفع قيد التجهيز'
  });
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`MMD server running on port ${PORT}`);
});
