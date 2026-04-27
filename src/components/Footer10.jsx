"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer10() {
  const [email, setEmail] = useState("");

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-24 bg-celestial-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
              <a href="/" className="flex items-center gap-2 group">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-celestial-gold to-celestial-star"></div>
                <span className="font-display text-2xl font-bold tracking-[0.2em] text-white">
                  AETHER
                </span>
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                The pinnacle of luxury real estate in the Philippines. Verified, celestial, and beyond.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest text-xs mb-2">Explore</h4>
              {[
                { name: "Properties", href: "/properties" },
                { name: "Guides", href: "/neighborhood-guides" },
                { name: "Neighborhoods", href: "/neighborhood-guides" },
                { name: "Brokers", href: "/contact" }
              ].map(item => (
                <a key={item.name} href={item.href} className="text-white/50 hover:text-celestial-gold transition-colors text-sm">{item.name}</a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-display font-bold text-lg uppercase tracking-widest text-xs mb-2">Company</h4>
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Careers", href: "#" },
                { name: "Press", href: "#" },
                { name: "Contact", href: "/contact" }
              ].map(item => (
                <a key={item.name} href={item.href} className="text-white/50 hover:text-celestial-gold transition-colors text-sm">{item.name}</a>
              ))}
            </div>

          </div>

          <div className="glass-card p-8 md:p-10 border-celestial-gold/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-celestial-gold/5 blur-3xl rounded-full"></div>
             <h4 className="text-xl font-display font-bold text-white mb-4">Celestial Updates</h4>
             <p className="text-white/40 text-sm mb-6">Join our exclusive circle for off-market listings and architectural insights.</p>
             <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your cosmic email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-celestial-gold/50 transition-all"
                />
                <button className="btn-gold !py-3">Subscribe</button>
             </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <p className="text-white/30 text-xs tracking-widest uppercase font-body">
            © 2024 AETHER LUXURY REAL ESTATE. BEYOND THE HORIZON.
          </p>
          
          <div className="flex items-center gap-6">
            {[BiLogoFacebookCircle, BiLogoInstagram, FaXTwitter, BiLogoLinkedinSquare].map((Icon, i) => (
              <a key={i} href="#" className="text-white/40 hover:text-celestial-gold transition-all hover:scale-110">
                <Icon className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
