const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hey Hatchbox, AppSignal here." });
});

app.post("/submit", async (req, res, next) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (Math.random() < 0.5) {
      throw new Error("Random failure in POST /submit");
    }

    res.json({ message: "submitted" });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
