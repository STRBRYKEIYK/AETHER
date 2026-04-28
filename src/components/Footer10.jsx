"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer10() {
  return (
    <footer className="bg-[#0A0908] py-12 px-[5%] text-white font-body">
      <div className="max-w-7xl mx-auto border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-2">
            <span className="font-display italic text-3xl font-bold tracking-tight">
              Logo
            </span>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold mb-2">Explore</h4>
            {[
              "Properties",
              "Neighborhoods",
              "Guides",
              "Brokers",
              "Company",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold mb-2">About</h4>
            {[
              "Team",
              "Careers",
              "Press",
              "Contact",
              "Support",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold mb-2">FAQ</h4>
            {[
              "Resources",
              "Blog",
              "Verification",
              "Security",
              "Trust",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-bold mb-2">Updates</h4>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Get the latest news and property listings delivered straight to
              your inbox each week.
            </p>
            <form className="flex items-end gap-4 mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 border-b border-white/30 pb-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-white/50"
                />
              </div>
              <button className="px-6 py-2 border border-white/30 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors">
                Join
              </button>
            </form>
            <p className="text-white/50 text-[10px] leading-tight max-w-xs">
              By subscribing you agree to our Privacy Policy and consent to
              receive updates.
            </p>
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
