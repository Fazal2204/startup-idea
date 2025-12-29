import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { TrophyIcon } from './Iconcomponents';

export function Header({ setPage }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-blue/30 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Title */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink shadow-lg neon-text">
              <TrophyIcon className="h-6 w-6" />
            </div>
            <span className="font-orbitron text-2xl font-bold text-white neon-text">
              MetaDael
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setPage('home')}
              className="font-semibold text-white/80 hover:text-neon-blue transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => setPage('dashboard')}
              className="font-semibold text-white/80 hover:text-neon-green transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => setPage('opportunities')}
              className="font-semibold text-white/80 hover:text-neon-purple transition-colors"
            >
              Opportunities
            </button>
            <button
              onClick={() => setPage('resume')}
              className="font-semibold text-white/80 hover:text-neon-pink transition-colors"
            >
              AI Resume Builder
            </button>
            <button
              onClick={() => setPage('trajectory-builder')}
              className="font-semibold text-white/80 hover:text-neon-blue transition-colors"
            >
              Trajectory Builder
            </button>
            <button
              onClick={() => setPage('AIfriend')}
              className="font-semibold text-white/80 hover:text-neon-cyan transition-colors"
            >
              AI Mentor
            </button>
            <button
              onClick={() => setPage('practice')}
              className="font-semibold text-white/80 hover:text-neon-yellow transition-colors"
            >
              Practice Sessions
            </button>
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setPage('trajectory-builder')}
              className="hidden md:flex bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-semibold px-4 py-2 rounded-lg transform hover:scale-105 transition-transform"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="md:hidden p-2 rounded-md hover:bg-white/10">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
