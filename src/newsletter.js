import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* The main holographic card */}
        <div className="hologram p-8 md:p-12 max-w-4xl mx-auto rounded-2xl shadow-2xl text-center border-neon-purple/50 hover:shadow-neon-purple transition-shadow duration-500">
          
          <h3 className="font-orbitron text-4xl md:text-5xl font-bold text-white neon-text mb-6">
            Stay Ahead of the Digital Revolution 
          </h3>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Get weekly updates on new opportunities, cyber career tips, and digital success stories delivered to your inbox 
          </p>
          
          {/* The email input form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-6 py-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg"
            />
            <button className="flex-shrink-0 bg-black text-neon-blue hover:bg-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 border border-neon-blue/30 flex items-center justify-center gap-2">
              Subscribe <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <p className="text-base text-white/70 mt-6">
            Join 50,000+ students and professionals who trust us with their digital career growth 
          </p>

        </div>
      </div>
    </section>
  );
}

