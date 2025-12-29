// server.js
import dotenv from "dotenv";
dotenv.config();

console.log("🔑 GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

/*
  NOTE:
  ai.routes.js now contains:
  - /test
  - /chat
  - /resume (Resume Builder AI)
  No additional route mounting is required here.
*/
import aiRoutes from "./routes/ai.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors());
app.use(express.json());

/* ---------------- DATABASE ---------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(console.error);

/* ---------------- ROUTES ---------------- */
app.use("/api/ai", aiRoutes);

/*
  Future-safe:
  You can add more feature routes later like:
  app.use("/api/jobs", jobRoutes);
  app.use("/api/users", userRoutes);
*/

/* ---------------- START SERVER ---------------- */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
