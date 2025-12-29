import React from 'react';

// Import all the new section components you have created
import { HeroSection } from './Herosection';
import { TrendingSection } from './TrendingSection';
import { GamificationSection } from './Gamification';
import { Newsletter } from './newsletter';

// This component simply arranges all the imported sections in the correct order
// to build your new landing page.
export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <GamificationSection />
      <Newsletter />
    </>
  );
}



