import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { TrophyIcon } from './Iconcomponents';

// Data for the footer links, kept separate for clarity
const footerLinks = {
  opportunities: [
    { label: "Competitions", href: "#" },
    { label: "Internships", href: "#" },
    { label: "Courses", href: "#" },
  ],
  platform: [
    { label: "How it Works", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "About Us", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Community", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "neon-blue" },
  { icon: Twitter, href: "#", label: "Twitter", color: "neon-cyan" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "neon-purple" },
  { icon: Instagram, href: "#", label: "Instagram", color: "neon-pink" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-neon-blue/20 text-white relative overflow-hidden pt-12">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple shadow-lg neon-text">
                <TrophyIcon className="h-7 w-7" />
              </div>
              <span className="font-orbitron text-3xl font-bold text-white neon-text">
                MetaDael
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Empowering your journey in the digital realm. Your career starts here. ⚡
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg hologram hover:bg-${social.color}/20 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className={`h-5 w-5 text-${social.color}`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-lg text-neon-blue neon-text">Opportunities</h4>
            <ul className="space-y-3">
              {footerLinks.opportunities.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-neon-blue transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-lg text-neon-purple neon-text">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-neon-purple transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-lg text-neon-cyan neon-text">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-neon-cyan transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© 2025 MetaDael. All rights reserved. Your digital journey starts here. ⚡</p>
        </div>
      </div>
    </footer>
  );
}
