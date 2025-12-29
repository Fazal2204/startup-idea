import express from "express";
import { getGeminiResponse } from "../utils/gemini.js";

const router = express.Router();

/* ======================================================
   TEST ROUTE
   ====================================================== */
router.get("/test", async (req, res) => {
  try {
    const reply = await getGeminiResponse("Reply with exactly: Gemini is working.");
    return res.json({
      success: true,
      reply,
    });
  } catch (err) {
    console.error("❌ Gemini test error:", err.message);
    return res.status(500).json({
      success: false,
      error: "Gemini test failed",
      details: err.message,
    });
  }
});

/* ======================================================
   CHAT ROUTE
   ====================================================== */
router.post("/chat", async (req, res) => {
  try {
    const { mentorType, message } = req.body;

    if (typeof mentorType !== "string" || typeof message !== "string") {
      return res.status(400).json({
        error: "mentorType and message must be strings",
      });
    }

    if (!mentorType.trim() || !message.trim()) {
      return res.status(400).json({
        error: "mentorType and message are required",
      });
    }

    const prompt = `
You are a ${mentorType}.
Give clear, practical, real-world advice.
Avoid fluff.

User: ${message}
`;

    const reply = await getGeminiResponse(prompt);

    return res.json({
      messages: [
        {
          role: "assistant",
          content: reply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ],
    });
  } catch (err) {
    console.error("❌ Chat error:", err.message);
    return res.status(500).json({
      error: "AI chat failed",
      details: err.message,
    });
  }
});

/* ======================================================
   RESUME BUILDER ROUTE
   ====================================================== */
router.post("/resume", async (req, res) => {
  try {
    const { resumeText, userPreferences } = req.body;

    if (typeof resumeText !== "string" || resumeText.trim().length === 0) {
      return res.status(400).json({
        error: "resumeText must be a non-empty string",
      });
    }

    if (
      !userPreferences ||
      typeof userPreferences.dreamJob !== "string" ||
      !userPreferences.dreamJob.trim()
    ) {
      return res.status(400).json({
        error: "userPreferences.dreamJob is required",
      });
    }

    const experienceLevel =
      typeof userPreferences.experienceLevel === "string"
        ? userPreferences.experienceLevel
        : "Not specified";

    const prompt = `
You are an expert ATS resume evaluator.

Analyze the resume for:
Role: ${userPreferences.dreamJob}
Experience Level: ${experienceLevel}

IMPORTANT RULES:
- Return ONLY valid JSON
- No markdown
- No explanations
- No backticks
- No extra text

JSON FORMAT:
{
  "suggestions": ["string"],
  "improvedResume": {
    "header": "string",
    "summary": "string",
    "experience": ["string"],
    "skills": "string"
  },
  "recommendedOpportunities": [
    {
      "id": "string",
      "title": "string",
      "type": "string",
      "url": "string"
    }
  ]
}

RESUME:
${resumeText}
`;

    const rawResponse = await getGeminiResponse(prompt);

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(rawResponse);
    } catch (parseErr) {
      console.error("❌ Invalid JSON from Gemini:\n", rawResponse);
      return res.status(500).json({
        error: "AI returned invalid JSON",
      });
    }

    return res.json(parsedResponse);
  } catch (err) {
    console.error("❌ Resume AI error:", err.message);
    return res.status(500).json({
      error: "Resume AI failed",
      details: err.message,
    });
  }
});

export default router;
