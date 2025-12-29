/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all React files for class usage
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'], // For futuristic text
      },
      colors: {
        'neon-blue': '#00d4ff',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'neon-cyan': '#06b6d4',
        'neon-green': '#10b981',
      },
      boxShadow: {
        'neon-blue': '0 0 8px #00d4ff',
        'neon-purple': '0 0 8px #a855f7',
        'neon-pink': '0 0 8px #ec4899',
        'neon-cyan': '0 0 8px #06b6d4',
        'neon-green': '0 0 8px #10b981',
      },
      borderColor: theme => ({
        ...theme('colors'),
        'neon-blue': '#00d4ff',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'neon-cyan': '#06b6d4',
        'neon-green': '#10b981',
      }),
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Smooth glow pulse effect
        'glow-pulse': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 15px rgba(168, 85, 247, 0.8)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 30px rgba(56, 189, 248, 0.8)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Text colors
    "text-neon-blue",
    "text-neon-purple",
    "text-neon-pink",
    "text-neon-cyan",
    "text-neon-green",

    // Background colors (with opacity)
    "bg-neon-blue/20",
    "bg-neon-purple/20",
    "bg-neon-pink/20",
    "bg-neon-cyan/20",
    "bg-neon-green/20",

    // Gradient from- classes
    "from-neon-blue",
    "from-neon-purple",
    "from-neon-pink",
    "from-neon-cyan",
    "from-neon-green",

    // Gradient to- classes
    "to-neon-blue",
    "to-neon-purple",
    "to-neon-pink",
    "to-neon-cyan",
    "to-neon-green",
  ],
};
