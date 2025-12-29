import React from 'react';
import { Crown, Flame } from "lucide-react";
// Corrected the import filename from "./Iconcomponents" to "./IconComponents"
import { TrophyIcon, StarIcon, TargetIcon, UsersIcon } from "./Iconcomponents";

// Data for the gamification elements, kept separate for clarity
const achievements = [
  { id: 1, title: "Cyber Champion 🏆", description: "Won 5 competitions", icon: TrophyIcon, neonColor: "neon-blue", earned: true },
  { id: 2, title: "Network Architect 🤝", description: "Connected with 100+ professionals", icon: UsersIcon, neonColor: "neon-purple", earned: true },
  { id: 3, title: "Skill Hacker 📚", description: "Completed 10 courses", icon: StarIcon, neonColor: "neon-cyan", earned: false },
  { id: 4, title: "Community Guardian ❤️", description: "Volunteered 50+ hours", icon: TargetIcon, neonColor: "neon-pink", earned: true }
];

const leaderboard = [
  { rank: 1, name: "Sarah Chen", avatar: "https://github.com/shadcn.png", points: 2840, badge: "🥇", streak: 45 },
  { rank: 2, name: "Alex Rodriguez", avatar: "https://github.com/shadcn.png", points: 2650, badge: "🥈", streak: 32 },
  { rank: 3, name: "Emma Johnson", avatar: "https://github.com/shadcn.png", points: 2420, badge: "🥉", streak: 28 },
  { rank: 4, name: "You", avatar: "https://github.com/shadcn.png", points: 1890, badge: "", streak: 12, isCurrentUser: true }
];

const streakData = {
  current: 12,
  best: 28,
  thisWeek: [true, true, false, true, true, true, false] // true = active day
};

// --- Helper Components for this section ---

// A reusable card component for a consistent look
const GamificationCard = ({ children, className }) => (
  <div className={`hologram p-6 rounded-2xl shadow-lg border-white/10 ${className}`}>
    {children}
  </div>
);

// The user's main profile card
const UserProfileCard = () => (
  <GamificationCard className="bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 border-0 shadow-2xl neon-glow">
    <div className="text-center">
      <img src="https://github.com/shadcn.png" alt="User" className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-black/20 shadow-xl" />
      <h3 className="font-orbitron text-3xl font-bold mb-2 text-white">John Doe ⚡</h3>
      <p className="text-white/80 text-lg">Level 8 • Cyber Student 🎓</p>
    </div>
    <div className="space-y-4 mt-6">
      <div className="flex justify-between items-center text-lg text-white">
        <span>Experience Points 🌟</span>
        <span className="font-bold">1,890 XP</span>
      </div>
      <div>
        <div className="w-full bg-black/20 rounded-full h-4 border border-white/20 p-0.5">
          <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-full rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="text-center text-white/80 mt-2 text-sm">210 XP to Level 9 🚀</div>
      </div>
    </div>
  </GamificationCard>
);

// The user's activity streak card
const StreakCard = () => (
  <GamificationCard>
    <h4 className="font-orbitron text-xl font-bold text-white mb-4 flex items-center gap-2">
      <Flame className="text-neon-pink" /> Activity Streak
    </h4>
    <div className="text-center bg-gradient-to-r from-neon-pink/80 to-neon-purple/80 text-white rounded-xl p-4 mb-4">
      <div className="text-5xl font-bold">{streakData.current}</div>
      <div className="font-medium">Days Active</div>
      <div className="text-white/80 text-sm">Best: {streakData.best} days 🏆</div>
    </div>
    <div className="flex justify-center space-x-2">
      {streakData.thisWeek.map((active, index) => (
        <div key={index} className={`w-8 h-8 rounded-full shadow-lg transform hover:scale-110 transition-transform ${active ? `bg-gradient-to-br from-neon-pink to-neon-purple neon-glow` : 'bg-gray-600/50'}`} />
      ))}
    </div>
  </GamificationCard>
);


// Main component function
export function GamificationSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white neon-text">
            Track Your Digital Progress
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Earn neon achievements, build cyber streaks, and compete with peers while advancing your digital career journey! ⚡
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1: User Profile & Streak */}
          <div className="space-y-8">
            <UserProfileCard />
            <StreakCard />
          </div>

          {/* Column 2: Achievements Section */}
          <GamificationCard>
            <h3 className="font-orbitron text-2xl font-bold text-white mb-6 text-center">Your Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div key={achievement.id} className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${achievement.earned ? `bg-black/30 border border-${achievement.neonColor}/30 shadow-${achievement.neonColor}` : 'bg-gray-800/50 opacity-60 grayscale'}`}>
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-${achievement.neonColor} to-${achievement.neonColor}/80 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-white">{achievement.title}</div>
                      <div className="text-sm text-white/80">{achievement.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </GamificationCard>

          {/* Column 3: Leaderboard Section */}
          <GamificationCard>
            <h3 className="font-orbitron text-2xl font-bold text-white mb-6 text-center">Weekly Leaderboard</h3>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div key={user.rank} className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${user.isCurrentUser ? 'bg-neon-blue/20 border border-neon-blue/30' : 'hover:bg-white/5'}`}>
                  <div className="text-lg font-bold text-neon-cyan w-8">{user.badge || `#${user.rank}`}</div>
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-neon-cyan/50" />
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${user.isCurrentUser ? 'text-neon-blue' : 'text-white'}`}>{user.name}</div>
                    <div className="text-xs text-white/70 flex items-center space-x-2">
                      <span>{user.points} XP</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Flame className="h-3 w-3 text-neon-pink" />
                        <span>{user.streak}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GamificationCard>
        </div>
      </div>
    </section>
  );
}

