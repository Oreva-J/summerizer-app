import express from "express";
import router from "./routes/summerizerRoute.js";

const app = express();
const port = 4000;

app.use(router);

app.get("/api", (req, res) => {
  res.json({ message: "it workedd" });
});

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
}

export default app;
