import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/* -------------------- MENTORS -------------------- */
const mentors = [
  {
    type: "Tech Mentor",
    name: "Fazal",
    color: "#4ade80",
    description:
      "Expert in software development, AI, and cloud technologies.",
  },
  {
    type: "Design Mentor",
    name: "Alaana",
    color: "#f472b6",
    description:
      "Creative designer specializing in UX/UI and digital art.",
  },
  {
    type: "Career Coach",
    name: "Khaliq and Shafiq",
    color: "#60a5fa",
    description:
      "Helping professionals identify strengths and plan their careers.",
  },
  {
    type: "Entrepreneur Guide",
    name: "Omar",
    color: "#facc15",
    description:
      "Experienced startup founder and business strategist.",
  },
];

const API_BASE = "http://localhost:3001";

const AIFriend = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  /* -------------------- AUTO SCROLL -------------------- */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* -------------------- SEND MESSAGE -------------------- */
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !selectedMentor || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${API_BASE}/api/ai/chat`,
        {
          mentorType: selectedMentor.type,
          message: userMessage.content,
        },
        { timeout: 30000 }
      );

      if (!res.data || !Array.isArray(res.data.messages)) {
        throw new Error("Invalid AI response format");
      }

      setMessages((prev) => [...prev, ...res.data.messages]);
    } catch (err) {
      console.error("AI CHAT ERROR:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again in a moment.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const headerMentor = selectedMentor || {
    name: "Fazal",
    type: "Career Coach",
    color: "#60a5fa",
  };

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row text-white p-8 md:space-x-8 font-sans">

      {/* ================= LEFT PANEL ================= */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full md:w-1/3 bg-black/50 border border-gray-800 rounded-2xl p-6 text-center"
      >
        <div
          className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-black"
          style={{ background: headerMentor.color }}
        >
          {headerMentor.name.charAt(0)}
        </div>

        <h2 className="mt-4 text-2xl font-semibold">
          {headerMentor.name}
        </h2>
        <p className="text-gray-400 text-sm">{headerMentor.type}</p>

        {selectedMentor ? (
          <>
            <p className="text-gray-300 text-sm mt-4 mb-6">
              {selectedMentor.description}
            </p>

            <button
              onClick={() => setMessages([])}
              className="w-full border border-gray-700 rounded-xl py-2 mb-3 hover:bg-gray-800 transition"
            >
              💬 New Chat
            </button>

            <button
              onClick={() => {
                setSelectedMentor(null);
                setMessages([]);
              }}
              className="w-full border border-gray-700 rounded-xl py-2 hover:bg-gray-800 transition"
            >
              🔄 Change Mentor
            </button>
          </>
        ) : (
          <div className="mt-6 space-y-3">
            {mentors.map((m) => (
              <button
                key={m.name}
                onClick={() => setSelectedMentor(m)}
                className="w-full border border-gray-700 rounded-xl py-3 hover:bg-gray-800 transition"
              >
                {m.name} — {m.type}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* ================= RIGHT PANEL ================= */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full md:w-2/3 flex flex-col bg-[#0d0d0f] border border-gray-800 rounded-2xl"
      >
        {/* -------- CHAT AREA -------- */}
        <div className="flex-grow overflow-y-auto px-6 py-6 space-y-6">
          {selectedMentor ? (
            messages.length ? (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-[#1e1e22] border border-gray-800 prose prose-invert prose-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      msg.content
                    )}

                    <div className="text-[10px] text-gray-400 mt-2 text-right">
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 mt-20">
                <MessageCircle className="mx-auto mb-2" />
                Say hi to {selectedMentor.name} 👋
              </div>
            )
          ) : (
            <div className="text-center text-gray-500 mt-20">
              <MessageCircle className="mx-auto mb-2" />
              Select a mentor to start chatting
            </div>
          )}

          {loading && (
            <div className="text-gray-500 text-sm italic">
              {headerMentor.name} is typing…
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* -------- INPUT -------- */}
        {selectedMentor && (
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-3 border-t border-gray-800 px-4 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask ${selectedMentor.name} anything...`}
              className="flex-grow bg-[#1a1a1d] border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="p-3 rounded-xl text-white transition-opacity"
              style={{ background: headerMentor.color }}
            >
              <Send size={18} />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default AIFriend;
