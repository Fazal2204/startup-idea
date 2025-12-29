// src/components/FeatureCard.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

/* ---------- COLOR MAPS ---------- */
const accent = {
  "neon-blue": {
    text: "text-neon-blue",
    bg: "bg-neon-blue/20 border-neon-blue/30",
    pill: "bg-neon-blue text-black",
    button: "from-neon-blue to-cyan-400",
  },
  "neon-purple": {
    text: "text-neon-purple",
    bg: "bg-neon-purple/20 border-neon-purple/30",
    pill: "bg-neon-purple text-black",
    button: "from-neon-purple to-fuchsia-500",
  },
  "neon-green": {
    text: "text-neon-green",
    bg: "bg-neon-green/20 border-neon-green/30",
    pill: "bg-neon-green text-black",
    button: "from-neon-green to-emerald-400",
  },
  "neon-pink": {
    text: "text-neon-pink",
    bg: "bg-neon-pink/20 border-neon-pink/30",
    pill: "bg-neon-pink text-black",
    button: "from-neon-pink to-rose-400",
  },
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  neonColor,
  count,
  trending,
  items,
}) {
  const c = accent[neonColor];

  return (
    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col shadow-xl hover:scale-[1.03] transition-all duration-500">

      {/* TOP ROW */}
      <div className="flex items-start justify-between mb-6">
        <div className={`p-4 rounded-2xl ${c.bg}`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <div className="text-right">
          <div className={`text-xl font-bold ${c.text}`}>{count}</div>
          <span className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-semibold ${c.pill}`}>
            {trending}
          </span>
        </div>
      </div>

      {/* TITLE + DESC */}
      <h3 className="font-orbitron text-2xl text-white mb-3">
        {title}
      </h3>
      <p className="text-white/70 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="border-t border-white/10 mb-6" />

      {/* ITEMS */}
      <div className="space-y-3 mb-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-black/30 rounded-xl px-4 py-3 border border-white/10"
          >
            <div>
              <div className="text-sm font-semibold text-white">
                {item.title}
              </div>
              {item.subtitle && (
                <div className="text-xs text-white/50">
                  {item.subtitle}
                </div>
              )}
            </div>
            <div className={`text-sm font-bold ${c.text}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button
        className={`mt-auto w-full bg-gradient-to-r ${c.button} text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2`}
      >
        Explore Feature <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
