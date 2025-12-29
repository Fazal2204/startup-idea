import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TrophyIcon, UsersIcon, StarIcon, TargetIcon, SearchIcon } from './Iconcomponents';

export function HeroSection() {
  return (
    <section className="relative py-20 flex items-center overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-neon-purple/20 rounded-lg blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-40 w-20 h-20 bg-neon-pink/15 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-neon-cyan/10 rotate-6 blur-xl animate-spin"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-12">
          {/* Main Title Content */}
          <div className="space-y-8">
            <div className="p-2 px-6 inline-block hologram text-neon-cyan border-neon-cyan/30 text-base rounded-full shadow-lg">
              <span>⚡ Competitions, experiences, and skills—all in the cyber realm.</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white neon-text font-orbitron">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Discover competitions, internships, courses, and opportunities in the digital frontier. 
              Connect with cyber communities and build skills for the future.
            </p>
          </div>

          {/* --- ADDED SEARCH BAR --- */}
          <div className="p-6 shadow-2xl border-0 hologram rounded-2xl max-w-3xl mx-auto neon-text border-neon-blue/30">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="flex-1 w-full flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-xl px-6 py-3 border border-neon-blue/30">
                <SearchIcon className="h-6 w-6 text-neon-cyan" />
                <input 
                  type="text" 
                  placeholder="Search competitions, internships..." 
                  className="flex-1 bg-transparent border-none outline-none text-lg placeholder-white/60 text-white"
                />
              </div>
              <button className="bg-gradient-to-r from-neon-blue to-neon-cyan px-8 py-3 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 text-black font-semibold">
                Search ⚡
              </button>
            </div>
          </div>

          {/* Stats Section You Requested */}
          <div className="relative pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 hologram border-neon-blue/30 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-neon-blue">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                  <TrophyIcon className="h-12 w-12" />
                </div>
                <div className="text-4xl font-bold text-neon-blue mb-2 neon-text">50K+</div>
                <div className="text-white/70">Opportunities</div>
              </div>
              
              <div className="text-center p-8 hologram border-neon-purple/30 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-neon-purple">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                  <UsersIcon className="h-12 w-12" />
                </div>
                <div className="text-4xl font-bold text-neon-purple mb-2 neon-text">100K+</div>
                <div className="text-white/70">Active Users</div>
              </div>
              
              <div className="text-center p-8 hologram border-neon-pink/30 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-neon-pink">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                  <StarIcon className="h-12 w-12" />
                </div>
                <div className="text-4xl font-bold text-neon-pink mb-2 neon-text">95%</div>
                <div className="text-white/70">Success Rate</div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-10 right-0 lg:right-20 p-4 hologram border-neon-blue/30 shadow-xl rounded-xl transform rotate-6 hover:rotate-0 transition-all duration-300 hover:shadow-neon-blue">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neon-blue/20">
                  <TrophyIcon className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-sm text-neon-blue neon-text">New Achievement! 🎉</div>
                  <div className="text-xs text-white/70">Cyber Champion</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 left-0 lg:left-20 p-4 hologram border-neon-purple/30 shadow-xl rounded-xl transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:shadow-neon-purple">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neon-purple/20">
                  <TargetIcon className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-sm text-neon-purple neon-text">New Match! ⚡</div>
                  <div className="text-xs text-white/70">Tech Internship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

