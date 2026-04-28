"use client";

import React from "react";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import { AetherLogo } from "@/components/AetherLogo";

export function Footer10() {
  return (
    <footer className="px-[5%] py-12 md:py-16 lg:py-24 bg-celestial-dark border-t border-white/5 selection:bg-celestial-gold selection:text-celestial-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block group">
              <AetherLogo className="scale-110 origin-left" />
            </Link>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-2">Explore</h4>
            {[
              { label: "Properties", href: "/properties" },
              { label: "Neighborhoods", href: "/neighborhood-guides" },
              { label: "Guides", href: "/neighborhood-guides" },
              { label: "Brokers", href: "/about-us" },
              { label: "Company", href: "/about-us" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/50 hover:text-celestial-gold transition-colors text-xs uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-2">About</h4>
            {[
              { label: "Team", href: "/about-us" },
              { label: "Careers", href: "/about-us" },
              { label: "Press", href: "#" },
              { label: "Contact", href: "/contact" },
              { label: "Support", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/50 hover:text-celestial-gold transition-colors text-xs uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-2">Resources</h4>
            {[
              { label: "FAQ", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Verification", href: "/about-us" },
              { label: "Security", href: "/about-us" },
              { label: "Trust", href: "/about-us" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/50 hover:text-celestial-gold transition-colors text-xs uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-2">Updates</h4>
            <p className="text-white/40 text-xs mb-4 leading-relaxed">
              Get the latest news and property listings delivered straight to
              your inbox each week.
            </p>
            <form className="flex items-end gap-4 mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 border-b border-white/20 pb-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent text-xs text-white focus:outline-none placeholder:text-white/30"
                />
              </div>
              <button className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 pt-8 mt-4">
        <div className="text-white/50 text-xs">
          © 2025 Premium Philippine Real Estate Marketplace. All rights
          reserved.
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-xs">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
        </div>

        <div className="flex items-center gap-4 text-white">
          <a href="#" className="hover:text-white/70 transition-colors">
            <BiLogoFacebookCircle size={20} />
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            <BiLogoInstagram size={20} />
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            <FaXTwitter size={18} />
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            <BiLogoLinkedinSquare size={20} />
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            <BiLogoYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
