import React, { useState } from "react";
import BlueprintResults from "./Blueprintresults";

/* Upload Icon */
const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mx-auto mb-4 text-cyan-400/50"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

/* -------- Helper: Extract Name from File -------- */
const extractNameFromFile = (fileName) => {
  if (!fileName) return "";
  return fileName
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/\(\d+\)/g, "")  // remove (1), (2)
    .trim();
};

function ResumeBuilder() {
  const [userPreferences, setUserPreferences] = useState({
    dreamJob: "",
    experienceLevel: "Student / Entry-Level",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [candidateName, setCandidateName] = useState("");

  const [resumeText, setResumeText] = useState(
    "Responsible for making a website for a school project. Used JavaScript. Worked at a cafe. Skills: JavaScript, communication."
  );

  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setResumeFile(file);
    setCandidateName(extractNameFromFile(file.name));
  };

  /* -------- AI CALL -------- */
  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!resumeText || !userPreferences.dreamJob) {
      setError("Please select a dream job and upload your resume.");
      return;
    }

    setIsLoading(true);
    setError("");
    setAnalysisResult(null);

    try {
      const response = await fetch("http://localhost:3001/api/ai/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeText,
          userPreferences,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "AI analysis failed");
      }

      setAnalysisResult(data);
    } catch (err) {
      console.error("❌ Resume AI error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (analysisResult) {
    return (
      <BlueprintResults
        data={analysisResult}
        candidateName={candidateName}
        dreamJob={userPreferences.dreamJob}
        onBack={() => setAnalysisResult(null)}
      />
    );
  }

  return (
    <div className="p-4 md:p-8 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold neon-text">
            AI-POWERED BLUEPRINT
          </h2>
          <p className="text-lg text-white/70">
            Upload your resume and let AI optimize it for your dream job.
          </p>
        </div>

        <form
          onSubmit={handleGenerate}
          className="bg-black/40 border border-cyan-400/30 rounded-2xl p-8"
        >
          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-semibold">Dream Job</label>
              <select
                name="dreamJob"
                value={userPreferences.dreamJob}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border border-cyan-400/30 rounded-lg px-4 py-3"
              >
                <option value="">Select a role</option>
                <option>Software Engineer</option>
                <option>Data Scientist</option>
                <option>Product Manager</option>
                <option>UI/UX Designer</option>
                <option>Business Analyst</option>
                <option>Consultant</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Experience Level</label>
              <select
                name="experienceLevel"
                value={userPreferences.experienceLevel}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-cyan-400/30 rounded-lg px-4 py-3"
              >
                <option>Student / Entry-Level</option>
                <option>Mid-Level Professional (2–5 years)</option>
                <option>Senior Professional (5+ years)</option>
              </select>
            </div>
          </div>

          {/* Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Upload Resume</label>

            <div className="relative border-2 border-dashed border-cyan-400/50 rounded-xl p-8 text-center">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <UploadIcon />

              <p className="font-semibold text-cyan-300">
                {resumeFile ? resumeFile.name : "Click to upload resume"}
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg"
          >
            {isLoading ? "Analyzing..." : "Generate My Blueprint"}
          </button>

          {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ResumeBuilder;
