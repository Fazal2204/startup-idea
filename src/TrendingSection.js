import React from 'react';
import { ArrowRight } from "lucide-react";
import { ClockIcon } from "./Iconcomponents";

const trendingOpportunities = [
  { id: 1, type: "Competition", title: "AI Innovation Challenge 2024", company: "Google", neonColor: "neon-blue", deadline: "15 days left", prize: "$50,000", tags: ["AI/ML", "Innovation"] },
  { id: 2, type: "Internship", title: "Product Management Intern", company: "Meta", neonColor: "neon-purple", deadline: "7 days left", location: "Menlo Park, CA", tags: ["Product", "Strategy"] },
  { id: 3, type: "Course", title: "Full-Stack Web Development", company: "freeCodeCamp", neonColor: "neon-cyan", deadline: "Self-paced", duration: "300 hours", tags: ["Web Dev", "React"] }
];

export function TrendingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white neon-text">
            Trending Opportunities
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Don't miss out on the most popular opportunities in the cyber realm! Join thousands of others. 
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {trendingOpportunities.map((opportunity) => (
            <div key={opportunity.id} className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hologram hover:scale-105 hover:-translate-y-4 rounded-2xl overflow-hidden hover:shadow-${opportunity.neonColor}`}>
              <div className={`p-8 border-b-2 border-${opportunity.neonColor}/50`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-${opportunity.neonColor}/20 text-${opportunity.neonColor}`}>
                    {opportunity.type}
                  </span>
                  <span className="flex items-center text-sm text-white/70">
                    <ClockIcon className="h-5 w-5 mr-2" /> {opportunity.deadline}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold line-clamp-2 text-white group-hover:text-${opportunity.neonColor} transition-colors duration-300`}>
                  {opportunity.title}
                </h3>
                <p className="text-white/80 mt-2 font-semibold">by {opportunity.company}</p>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {opportunity.tags.map((tag) => (
                    <span key={tag} className={`px-3 py-1 text-xs rounded-full bg-white/10 text-white/80`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className={`w-full bg-gradient-to-r from-${opportunity.neonColor} to-${opportunity.neonColor}/80 hover:shadow-xl text-white border-0 rounded-xl py-3 font-semibold transform hover:scale-105 transition-all duration-300 neon-text`}>
                  View Details <ArrowRight className="inline ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

