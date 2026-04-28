"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";
import Link from "next/link";

export function Navbar6() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 px-[5%] ${
        isScrolled 
        ? "py-4 bg-celestial-dark/60 backdrop-blur-2xl border-b border-white/5" 
        : "py-10 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-celestial-gold to-dodger animate-pulse blur-[2px]"></div>
            <div className="absolute inset-0 w-10 h-10 rounded-full border border-white/20"></div>
          </div>
          <span className="font-display text-2xl font-bold tracking-[0.3em] text-white group-hover:text-glow transition-all">
            AETHER
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {[
            { name: "Properties", href: "/properties" },
            { name: "Guides", href: "/neighborhood-guides" },
            { name: "About", href: "/about-us" },
            { name: "Contact", href: "/contact" }
          ].map((item, index) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`text-[11px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-white transition-all relative group reveal reveal-stagger-${index + 1}`}
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-celestial-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          <a href="#" className="btn-gold !py-2.5 !px-8 !text-[10px] uppercase tracking-[0.2em] inline-block">
            Portal Access
          </a>
        </div>


        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 left-0 right-0 bg-celestial-dark/95 backdrop-blur-3xl z-[-1] flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col gap-10 text-center">
              {[
                { name: "Properties", href: "/properties" },
                { name: "Guides", href: "/neighborhood-guides" },
                { name: "About", href: "/about-us" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-display font-bold text-white tracking-widest hover:text-celestial-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8">
                <a href="#" className="btn-gold w-64 inline-block" onClick={() => setIsMobileMenuOpen(false)}>Portal Access</a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

