import React from "react";
import { Mic, Code, Palette, Music, Globe, PenTool, Star } from "lucide-react";

const categories = [
  { title: "Public Speaking", sessions: 45, icon: <Mic size={20} /> },
  { title: "Coding", sessions: 78, icon: <Code size={20} /> },
  { title: "Art & Design", sessions: 32, icon: <Palette size={20} /> },
  { title: "Music", sessions: 28, icon: <Music size={20} /> },
  { title: "Languages", sessions: 56, icon: <Globe size={20} /> },
  { title: "Design", sessions: 41, icon: <PenTool size={20} /> },
];

const sessions = [
  {
    title: "Advanced Python Debugging",
    host: "Sarah Chen",
    type: "Teacher-led",
    joined: 24,
    duration: "90 min",
    tags: ["Coding", "Advanced"],
    rating: 4.8,
  },
  {
    title: "UI/UX Design Critique",
    host: "Alex Rivera",
    type: "Peer-led",
    joined: 19,
    duration: "80 min",
    tags: ["Design", "Intermediate"],
    rating: 4.6,
  },
  {
    title: "Presentation Skills Workshop",
    host: "Dr. Emily Watson",
    type: "Teacher-led",
    joined: 18,
    duration: "75 min",
    tags: ["Speaking", "All Levels"],
    rating: 4.9,
  },
];

export default function PracticeSessions() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Practice & Guide Sessions</h1>
        <p className="text-gray-400 mt-2">
          Join live practice sessions with experts and peers. Build skills through hands-on learning and real-time feedback.
        </p>
      </div>

      {/* Categories */}
      <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#0a0f1c] p-6 rounded-xl flex flex-col items-center justify-center text-center hover:bg-[#141b2e] transition"
          >
            <div className="mb-3">{cat.icon}</div>
            <h3 className="font-semibold">{cat.title}</h3>
            <p className="text-sm text-gray-400">{cat.sessions} sessions</p>
          </div>
        ))}
      </div>

      {/* Sessions */}
      <div className="mb-6 flex space-x-6 border-b border-gray-700 pb-2">
        <button className="text-blue-400 font-medium">Live Now</button>
        <button className="text-gray-400 hover:text-white">Upcoming</button>
        <button className="text-gray-400 hover:text-white">Resources</button>
      </div>

      <div className="space-y-6">
        {sessions.map((s, idx) => (
          <div
            key={idx}
            className="bg-[#0a0f1c] p-6 rounded-xl shadow-lg relative"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-red-600 text-xs px-2 py-1 rounded-md mr-2">
                  LIVE
                </span>
                <h3 className="text-lg font-semibold mt-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">
                  {s.host} · {s.type}
                </p>
              </div>
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star size={16} />
                <span className="font-medium">{s.rating}</span>
              </div>
            </div>

            <div className="flex items-center text-gray-400 text-sm mt-4 space-x-6">
              <span>👥 {s.joined} joined</span>
              <span>⏱ {s.duration}</span>
            </div>

            <div className="mt-3 flex space-x-2">
              {s.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium">
              Join Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
