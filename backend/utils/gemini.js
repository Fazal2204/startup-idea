// utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI = null;

/* ---------------- EXISTING CLIENT ---------------- */
function getClient() {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("❌ GEMINI_API_KEY missing in .env");
  }

  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }

  return genAI;
}

/* ---------------- EXISTING FUNCTION (DO NOT TOUCH) ---------------- */
export async function getGeminiResponse(prompt) {
  const client = getClient();

  const model = client.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

/* ============================================================
   =============== ADDITION FOR RESUME BUILDER =================
   ============================================================ */

/**
 * Resume-safe Gemini call
 * - Forces deterministic output
 * - Used ONLY by resume builder
 * - Chat & test remain untouched
 */
export async function getGeminiJSONResponse(prompt) {
  const client = getClient();

  const model = client.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      temperature: 0.2,
      topP: 0.9,
      maxOutputTokens: 2048,
    },
  });

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  return text;
}
