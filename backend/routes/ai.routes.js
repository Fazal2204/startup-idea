import express from "express";
import { getGeminiResponse } from "../utils/gemini.js";

const router = express.Router();

/* ---------------- TEST ---------------- */
router.get("/test", async (req, res) => {
  try {
    const reply = await getGeminiResponse("Reply with: Gemini is working.");
    res.json({ success: true, reply });
  } catch (err) {
    console.error("❌ Gemini test error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

/* ---------------- CHAT ---------------- */
router.post("/chat", async (req, res) => {
  try {
    const { mentorType, message } = req.body;

    if (!mentorType || !message) {
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

    res.json({
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
    console.error("❌ Chat error:", err);
    res.status(500).json({
      error: "AI failed",
      details: err.message,
    });
  }
});

/* ---------------- RESUME BUILDER (ADDED) ---------------- */
router.post("/resume", async (req, res) => {
  try {
    const { resumeText, userPreferences } = req.body;

    if (!resumeText || !userPreferences?.dreamJob) {
      return res.status(400).json({
        error: "resumeText and dreamJob are required",
      });
    }

    const prompt = `
You are an expert ATS resume evaluator.

Analyze the resume for:
Role: ${userPreferences.dreamJob}
Experience Level: ${userPreferences.experienceLevel}

IMPORTANT:
- Return ONLY valid JSON
- No markdown
- No extra explanation

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

    let parsed;
    try {
      parsed = JSON.parse(rawResponse);
    } catch (parseErr) {
      console.error("❌ Invalid JSON from Gemini:\n", rawResponse);
      return res.status(500).json({
        error: "AI returned invalid JSON format",
      });
    }

    res.json(parsed);
  } catch (err) {
    console.error("❌ Resume AI error:", err);
    res.status(500).json({
      error: "Resume AI failed",
      details: err.message,
    });
  }
});

export default router;
