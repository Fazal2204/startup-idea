import React from "react";

/* Check Icon */
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-green-400 mt-1 shrink-0"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

function BlueprintResults({
  data = {},
  candidateName = "Your Name",
  dreamJob = "",
  onBack,
}) {
  const {
    suggestions = [],
    improvedResume = {},
    recommendedOpportunities = [],
  } = data;

  const {
    summary = "",
    experience = [],
    skills = "",
  } = improvedResume;

  // Split summary into readable lines
  const summaryLines = summary
    ? summary.split(". ").filter(Boolean)
    : [];

  // Split skills into list
  const skillList = skills
    ? skills
        .split(/,|\n/)
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="p-4 md:p-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-300">
            Your AI Blueprint
          </h2>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition"
          >
            ← Start Over
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ================= RESUME ================= */}
          <div className="lg:col-span-3 bg-black/50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">
              ATS-Optimized Resume
            </h3>

            {/* Name Header */}
            <div className="border-b border-white/20 pb-4 mb-8">
              <p className="text-xl font-semibold">
                {candidateName}
              </p>
              <p className="text-sm opacity-75">
                Aspiring {dreamJob}
              </p>
            </div>

            <div className="space-y-10 text-sm leading-relaxed">
              {/* Summary */}
              {summaryLines.length > 0 && (
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">
                    Summary
                  </h4>
                  <ul className="space-y-2 list-disc ml-5 opacity-90">
                    {summaryLines.map((line, i) => (
                      <li key={i}>{line.trim()}.</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Experience */}
              {experience.length > 0 && (
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">
                    Experience
                  </h4>
                  <ul className="space-y-3 list-disc ml-5 opacity-90">
                    {experience.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {skillList.length > 0 && (
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= FEEDBACK ================= */}
          <div className="lg:col-span-2 space-y-8">
            {/* ATS Feedback */}
            <div className="bg-black/50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                ATS Feedback
              </h3>

              {suggestions.length ? (
                <ul className="space-y-4">
                  {suggestions.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 leading-relaxed"
                    >
                      <CheckIcon />
                      <span className="opacity-90">{s}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm opacity-70">
                  No feedback available.
                </p>
              )}
            </div>

            {/* Recommendations */}
            <div className="bg-black/50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-pink-300 mb-6">
                Recommended For You
              </h3>

              {recommendedOpportunities.length ? (
                <div className="space-y-5">
                  {recommendedOpportunities.map((o) => (
                    <div key={o.id}>
                      <h4 className="font-semibold">{o.title}</h4>
                      <p className="text-xs opacity-70 mb-1">
                        {o.type}
                      </p>
                      <a
                        href={o.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-pink-400 hover:underline"
                      >
                        Learn More →
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm opacity-70">
                  No recommendations found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueprintResults;
