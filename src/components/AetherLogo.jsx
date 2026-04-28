"use client";

import React from "react";

export function AetherLogo({ className = "", showText = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        
        {/* Celestial Star Motif */}
        <path
          d="M50 10L55 45L90 50L55 55L50 90L45 55L10 50L45 45L50 10Z"
          fill="url(#logo-gradient)"
          className="drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
        />
        
        <defs>
          <linearGradient id="logo-gradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#AA8A2E" />
          </linearGradient>
        </defs>
      </svg>
      
      {showText && (
        <span className="font-display text-2xl font-bold tracking-[0.3em] text-white uppercase">
          Aether
        </span>
      )}
    </div>
  );
}
