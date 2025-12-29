import React, { useState } from 'react';
// Adding more icons for the new UI
import { Target, UserCheck, Plus, Settings, FileText, Clock, BarChart2 } from 'lucide-react'; 

// --- NEW Timetable Component ---
// This component renders the weekly schedule and the side panels
const Timetable = () => {
    const timeSlots = Array.from({ length: 15 }, (_, i) => `${8 + i}:00`); // 8:00 to 22:00
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    // Example schedule data
    const schedule = {
        'Tue-10:00': { event: 'Study Session', color: 'bg-neon-blue/20' },
        'Wed-13:00': { event: 'Competition Prep', color: 'bg-neon-pink/20' },
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Weekly Schedule Grid */}
            <div className="lg:col-span-2 hologram p-6 rounded-xl border-neon-cyan/50">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Weekly Schedule</h3>
                <div className="grid grid-cols-8 text-center text-sm font-semibold text-white/70">
                    <div className="py-2">Time</div>
                    {days.map(day => <div key={day} className="py-2">{day}</div>)}
                </div>
                {timeSlots.map(time => (
                    <div key={time} className="grid grid-cols-8 items-center border-t border-white/10">
                        <div className="text-center text-xs text-white/60 p-2">{time}</div>
                        {days.map(day => (
                            <div key={`${day}-${time}`} className="h-16 border-l border-white/10 p-1">
                                {schedule[`${day}-${time}`] && (
                                    <div className={`h-full w-full rounded-md text-xs p-1.5 flex items-center justify-center text-center text-white ${schedule[`${day}-${time}`].color}`}>
                                        {schedule[`${day}-${time}`].event}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Side Panels */}
            <div className="space-y-8">
                {/* Quick Add Panel */}
                <div className="hologram p-6 rounded-xl border-neon-purple/50">
                    <h3 className="font-orbitron text-xl font-bold text-white mb-4 flex items-center gap-2"><Plus size={20} /> Quick Add</h3>
                    <div className="space-y-3">
                        {['Study Block', 'Practice Session', 'Competition Prep', 'Break Time'].map(item => (
                             <button key={item} className="w-full text-left p-3 rounded-lg font-semibold bg-black/40 hover:bg-neon-purple/20 text-white transition-colors duration-300 border border-white/20">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Daily Stats Panel */}
                <div className="hologram p-6 rounded-xl border-neon-green/50">
                    <h3 className="font-orbitron text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart2 size={20} /> Daily Stats</h3>
                    <div className="space-y-4 text-white">
                        {[{label: "Study Time", value: 4.5, max: 8}, {label: "Practice", value: 2, max: 4}, {label: "Break Time", value: 1.5, max: 2}].map(stat => (
                            <div key={stat.label}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-semibold">{stat.label}</span>
                                    <span>{stat.value}h</span>
                                </div>
                                <div className="w-full bg-black/50 rounded-full h-2 border border-white/20 p-0.5">
                                    <div className="bg-gradient-to-r from-neon-blue to-neon-green h-full rounded-full" style={{ width: `${(stat.value / stat.max) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// The main component for your new page
export function TrajectoryBuilder() {
  const [activeTab, setActiveTab] = useState('resume');
  const profileCompletion = 72; // Example percentage for the progress bar

  // --- This is the content for the "Resume Builder" tab ---
  const ResumeBuilderView = () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Dream Job Card */}
      <div className="hologram border-neon-blue/50 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Target size={28} className="text-neon-blue" />
          <h3 className="font-orbitron text-2xl font-bold text-white">Dream Job</h3>
        </div>
        <div className="bg-black/40 p-4 rounded-lg border border-white/20 mb-4">
          <p className="text-xl font-semibold text-white">Software Engineer</p>
          <p className="text-white/70">AI/ML focus at a top tech company</p>
        </div>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors duration-300">
          <Plus size={18} /> Update Goal
        </button>
      </div>
      {/* Personality Test Card */}
      <div className="hologram border-neon-cyan/50 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <UserCheck size={28} className="text-neon-cyan" />
          <h3 className="font-orbitron text-2xl font-bold text-white">Personality Test</h3>
        </div>
        <p className="text-white/80 mb-4">
          Discover your strengths and find career paths that align with your personality. Your results will help tailor our recommendations.
        </p>
        <button className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-black px-4 py-3 rounded-lg font-bold text-lg transform hover:scale-105 transition-transform duration-300">
          Take the Test
        </button>
      </div>
      {/* Preferences Card */}
      <div className="hologram border-neon-pink/50 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Settings size={28} className="text-neon-pink" />
          <h3 className="font-orbitron text-2xl font-bold text-white">Preferences</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1.5 text-sm rounded-full bg-white/10 text-white/80 border border-white/20">Remote</span>
          <span className="px-4 py-1.5 text-sm rounded-full bg-white/10 text-white/80 border border-white/20">Tech</span>
          <span className="px-4 py-1.5 text-sm rounded-full bg-white/10 text-white/80 border border-white/20">Startup</span>
        </div>
      </div>
      {/* Resume Preview Card */}
      <div className="hologram border-neon-purple/50 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <FileText size={28} className="text-neon-purple" />
          <h3 className="font-orbitron text-2xl font-bold text-white">Resume Preview</h3>
        </div>
        <div className="bg-black/40 p-6 rounded-lg border border-white/20 space-y-4">
          <div className="flex justify-between items-center">
              <div>
                  <p className="text-xl font-bold text-white">Alex Johnson</p>
                  <p className="text-white/70">aspiring-developer@email.com</p>
              </div>
              <button className="px-3 py-1 text-xs font-semibold rounded-md bg-white/10 hover:bg-white/20 text-white/80">Preview</button>
          </div>
          <div className="border-t border-white/10 pt-4">
              <h4 className="font-semibold text-white mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-neon-blue/20 text-neon-blue">Python</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neon-blue/20 text-neon-blue">React</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neon-blue/20 text-neon-blue">ML</span>
              </div>
          </div>
          <div className="border-t border-white/10 pt-4">
              <h4 className="font-semibold text-white mb-1">Experience</h4>
              <p className="text-white/70">2 internships, 5 projects</p>
          </div>
          <div className="border-t border-white/10 pt-4">
              <h4 className="font-semibold text-white mb-1">Competitions</h4>
              <p className="text-white/70">3 hackathons, 1 coding contest</p>
          </div>
        </div>
        <div className="mt-6">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-white">Profile Completion</span>
                <span className="text-sm font-bold text-neon-green">{profileCompletion}%</span>
            </div>
            <div className="w-full bg-black/50 rounded-full h-2.5 border border-white/20 p-0.5">
                <div className="bg-gradient-to-r from-neon-blue to-neon-green h-full rounded-full" style={{ width: `${profileCompletion}%` }}></div>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 px-4 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 neon-text">
          Trajectory Builder
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Build your future step by step. Create your ideal resume profile and organize your time to achieve your goals.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center bg-black/50 border border-neon-purple/30 rounded-lg p-1 hologram">
          <button
            onClick={() => setActiveTab('resume')}
            className={`px-6 py-2 rounded-md transition-all duration-300 font-semibold ${activeTab === 'resume' ? 'bg-neon-purple/80 text-white shadow-neon-purple' : 'text-white/70 hover:bg-white/10'}`}
          >
            Trajectory Path
          </button>
          <button
            onClick={() => setActiveTab('timetable')}
            className={`px-6 py-2 rounded-md transition-all duration-300 font-semibold ${activeTab === 'timetable' ? 'bg-neon-purple/80 text-white shadow-neon-purple' : 'text-white/70 hover:bg-white/10'}`}
          >
            Timetable Maker
          </button>
        </div>
      </div>

      {/* --- Conditionally render the correct view based on the active tab --- */}
      {activeTab === 'resume' ? <ResumeBuilderView /> : <Timetable />}
      
    </section>
  );
}

