"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { FaLinkedinIn, FaXTwitter, FaGlobe } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen font-body">
      <Navbar6 />

      {/* 1. Hero Section */}
      <section className="bg-[#110D0A] pt-48 pb-32 px-[5%] text-center border-b border-white/5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-bold text-xs mb-8 uppercase tracking-widest"
        >
          Trust
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-8 uppercase tracking-tight leading-[1.1]"
        >
          Real estate,
          <br />
          reimagined
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-normal"
        >
          We built a marketplace where verified brokers and serious buyers meet without fear
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <Link href="/properties" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
            Explore
          </Link>
          <Link href="/neighborhood-guides" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
            Learn more
          </Link>
        </motion.div>
      </section>

      {/* 2. Mission Section */}
      <section className="bg-white py-32 px-[5%] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-black font-bold text-xs uppercase tracking-widest mb-8">
            Mission
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black uppercase leading-[1.3] mb-12">
            We exist to eliminate fear from Philippine real estate. Every listing is verified, every broker is licensed, and every transaction is transparent.
          </h2>
          <div className="flex justify-center items-center gap-6">
            <Link href="/neighborhood-guides" className="bg-transparent border border-gray-300 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
              Learn more
            </Link>
            <Link href="/properties" className="text-black font-semibold text-sm flex items-center gap-1 group">
              Explore <RxChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars Section */}
      <section className="bg-[#2C2724] py-32 px-[5%] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-20">
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Built on
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-8 leading-tight">
              Three pillars that define
              <br />
              our platform
            </h2>
            <p className="text-white/80 text-lg">
              We verify every broker's credentials and confirm every listing before it appears. No ghost properties. No shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="flex justify-center mb-6 text-white">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Verified listings and<br />licensed brokers
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Each property is photographed and documented with architectural precision to give you a complete view before you visit.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-6 text-white">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Hyper-realistic<br />property experience
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Transparent pricing, clear terms, and direct communication with verified sellers protect every transaction from start to finish.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-6 text-white">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Transparent buyer<br />protection
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Our commitment to security and clarity sets us apart in the market.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Link href="/neighborhood-guides" className="bg-transparent border border-white/30 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm">
              Learn more
            </Link>
            <Link href="/properties" className="text-white font-semibold text-sm flex items-center gap-1 group">
              Explore <RxChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Numbers Section */}
      <section className="bg-white py-32 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">
              Numbers
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black uppercase tracking-tight mb-8 leading-tight">
              The market speaks
              <br />
              for itself
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our platform has grown because buyers and brokers trust what we've built. These figures represent real transactions, real verification, and real peace of mind across the Philippine real estate market.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/neighborhood-guides" className="bg-transparent border border-gray-300 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
                Learn
              </Link>
              <Link href="/properties" className="text-black font-semibold text-sm flex items-center gap-1 group">
                Explore <RxChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16">
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-4">
                12,500+
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Properties verified
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-4">
                850+
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Licensed brokers
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-4">
                98%
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Client satisfaction
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-4">
                3,200+
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Successful transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="bg-white py-32 px-[5%] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">
              Leadership
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase tracking-tight mb-8">
              Our team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Built by people who understand Philippine real estate and the trust it demands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mb-32">
            {[
              { name: "Marcus Villanueva", role: "Founder, CEO", desc: "Former investment banker with fifteen years in Philippine property development and market strategy." },
              { name: "Elena Santos", role: "Chief Operations", desc: "Managed compliance and broker networks across Southeast Asia. Ensures every listing meets our verification standards." },
              { name: "David Reyes", role: "Head of Technology", desc: "Built secure platforms for financial services. Designed our verification and transaction systems from the ground up." },
              { name: "Patricia Lim", role: "Chief Broker Relations", desc: "Licensed broker with two decades connecting serious buyers to verified properties across Metro Manila and beyond." },
              { name: "Robert Cruz", role: "Director of Trust", desc: "Oversees verification protocols, broker credentials, and the systems that keep scams off our platform entirely." },
              { name: "Sofia Mercado", role: "Head of Design", desc: "Creates the clean, data-forward experience that makes finding verified properties feel simple and trustworthy." },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed px-4">
                  {member.desc}
                </p>
                <div className="flex gap-4 text-gray-400">
                  <a href="#" className="hover:text-black transition-colors"><FaLinkedinIn size={16} /></a>
                  <a href="#" className="hover:text-black transition-colors"><FaXTwitter size={14} /></a>
                  <a href="#" className="hover:text-black transition-colors"><FaGlobe size={16} /></a>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-32">
            <h3 className="text-3xl font-display font-bold text-black uppercase mb-6">
              We're hiring
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Join a team building trust in Philippine real estate. We're looking for brokers, engineers, and operations specialists.
            </p>
            <Link href="/contact" className="inline-block bg-transparent border border-gray-300 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
              View positions
            </Link>
          </div>

          <div className="text-center pt-24 border-t border-gray-200">
            <h4 className="text-black font-display font-bold text-xs tracking-widest uppercase mb-16">
              Trusted by Philippine real estate leaders
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
              <div className="flex items-center gap-2 font-bold text-xl"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg> Webflow</div>
              <div className="flex items-center gap-2 font-bold text-xl"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M12 2L2 22h20L12 2z"/></svg> Relume</div>
              <div className="flex items-center gap-2 font-bold text-xl"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg> Webflow</div>
              <div className="flex items-center gap-2 font-bold text-xl"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M12 2L2 22h20L12 2z"/></svg> Relume</div>
              <div className="flex items-center gap-2 font-bold text-xl"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z"/></svg> Webflow</div>
              <div className="flex items-center gap-2 font-bold text-xl"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M12 2L2 22h20L12 2z"/></svg> Relume</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real Stories & CTA Section */}
      <div className="flex flex-col">
        {/* Real Stories (Light Gray Half) */}
        <section className="bg-[#EAEAEA] py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase mb-4">
                Real stories
              </h2>
              <p className="text-gray-600 text-lg">
                From buyers who found their place
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Maria Santos", role: "OFW, Dubai", text: "'I found my dream condo in Makati without a single worry. The verification process was thorough and the broker was transparent about everything.'" },
                { name: "James Reyes", role: "Business owner, Singapore", text: "'After years abroad, I needed a property I could trust. This platform delivered exactly that with licensed brokers and real listings.'" },
                { name: "Angela Cruz", role: "Executive, Manila", text: "'The neighborhood guides and property details were so thorough, I felt like I'd already walked through the place before visiting.'" },
              ].map((review, i) => (
                <div key={i} className="p-10 flex flex-col justify-between border-t border-b border-l border-r border-gray-300 relative">
                  {/* Decorative corner markers typical of this design style */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-400"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-400"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-400"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-400"></div>
                  
                  <div>
                    <div className="flex gap-1 mb-6 text-black">
                      {[...Array(5)].map((_, idx) => (
                        <BiSolidStar key={idx} size={24} />
                      ))}
                    </div>
                    <p className="text-gray-800 text-lg mb-10 leading-relaxed font-body">
                      {review.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" /></svg>
                    </div>
                    <div>
                      <p className="text-black font-bold text-sm">{review.name}</p>
                      <p className="text-gray-600 text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA (Dark Blue Half) */}
        <section className="bg-[#0A1118] py-32 px-[5%] text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6 tracking-wide">
              Ready to find your<br />property
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Browse verified listings or connect with a licensed broker today
            </p>
            <div className="flex justify-center gap-4 mb-24">
              <Link href="/properties" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
                Explore
              </Link>
              <Link href="/contact" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                Contact
              </Link>
            </div>
            
            <div className="w-full h-[500px] bg-[#2E3640] rounded-xl flex items-center justify-center overflow-hidden">
              <svg className="w-40 h-40 text-black/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
              </svg>
            </div>
          </div>
        </section>
      </div>

      <Footer10 />
    </div>
  );
}
