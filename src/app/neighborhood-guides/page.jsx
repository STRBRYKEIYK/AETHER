"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen font-body bg-white">
      <Navbar6 />

      {/* 1. Hero Section */}
      <section className="bg-[#110D0A] pt-48 pb-32 px-[5%] text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-bold text-xs mb-8 uppercase tracking-widest"
        >
          Neighborhoods
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 uppercase tracking-tight leading-[1.2]"
        >
          Know before you
          <br />
          buy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg max-w-2xl mx-auto mb-12 font-normal"
        >
          Verified data and local insight guide your next move in Philippine real estate
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
          <Link href="/about-us" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
            Learn
          </Link>
        </motion.div>
      </section>

      {/* 2. Reasons Section */}
      <section className="bg-[#2C2724] py-32 px-[5%] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              What matters
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-8 leading-tight">
              Three reasons to trust our
              <br />
              neighborhood guides
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We pull real data on schools, transit, safety, and daily life. No marketing speak. Just facts that shape your decision.
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
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Hyper-local data<br />you can count on
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Crime rates, school rankings, commute times, and dining options all verified and current.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-6 text-white">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5"></path>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Lifestyle snapshots<br />from the ground
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Architecture, street life, and neighborhood character captured through professional photography and resident perspectives.
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-6 text-white">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Broker-verified<br />insider knowledge
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Licensed agents share recent sales, emerging trends, and what makes each area worth your attention.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Link href="/properties" className="bg-transparent border border-white/30 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm">
              Explore
            </Link>
            <Link href="/about-us" className="text-white font-semibold text-sm flex items-center gap-1 group">
              Learn <RxChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Visual Gallery Section */}
      <section className="bg-white py-32 px-[5%] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black uppercase tracking-tight mb-6">
              Visual neighborhoods
            </h2>
            <p className="text-gray-600 text-lg">
              Each district tells its own story through light and architecture
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stories/Blog Section */}
      <section className="bg-white py-24 px-[5%] text-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">
              Guides
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black uppercase tracking-tight mb-6 leading-tight">
              Neighborhood stories
              <br />
              worth reading
            </h2>
            <p className="text-gray-600 text-lg">
              Deep dives into the areas shaping your decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
            {/* Card 1 */}
            <Link href="/neighborhood-guides" className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                <svg className="w-16 h-16 text-gray-300 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gray-100 border border-gray-200 text-black text-xs font-bold rounded-full">
                  Manila
                </span>
                <span className="text-gray-500 text-xs font-bold">8 min read</span>
              </div>
              <h3 className="text-xl font-display font-bold text-black uppercase mb-4 leading-snug group-hover:underline">
                Makati's rise as the
                <br />
                financial heart
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                How corporate towers and urban living redefined the district
              </p>
              <div className="mt-auto">
                <span className="text-black font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read more <RxChevronRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/neighborhood-guides" className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                <svg className="w-16 h-16 text-gray-300 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gray-100 border border-gray-200 text-black text-xs font-bold rounded-full">
                  Cebu
                </span>
                <span className="text-gray-500 text-xs font-bold">6 min read</span>
              </div>
              <h3 className="text-xl font-display font-bold text-black uppercase mb-4 leading-snug group-hover:underline">
                Cebu City's
                <br />
                transformation into a
                <br />
                modern hub
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                From port city to thriving business and residential destination
              </p>
              <div className="mt-auto">
                <span className="text-black font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read more <RxChevronRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/neighborhood-guides" className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                <svg className="w-16 h-16 text-gray-300 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gray-100 border border-gray-200 text-black text-xs font-bold rounded-full">
                  Davao
                </span>
                <span className="text-gray-500 text-xs font-bold">7 min read</span>
              </div>
              <h3 className="text-xl font-display font-bold text-black uppercase mb-4 leading-snug group-hover:underline">
                Why Davao attracts
                <br />
                serious investors and
                <br />
                families
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Safety, growth, and a lifestyle that rewards long-term thinking
              </p>
              <div className="mt-auto">
                <span className="text-black font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read more <RxChevronRight size={16} />
                </span>
              </div>
            </Link>
          </div>

          <Link href="/neighborhood-guides" className="inline-block bg-transparent border border-gray-300 text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors text-sm">
            View all
          </Link>
        </div>
      </section>

      {/* 5. Real Voices & CTA Section */}
      <div className="flex flex-col">
        {/* Real Voices (Light Gray Half) */}
        <section className="bg-[#EAEAEA] py-24 px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase mb-4">
                Real voices
              </h2>
              <p className="text-gray-600 text-lg">
                Residents and buyers share what matters most
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Maria Santos", role: "Buyer, Manila", text: "'I found exactly what I was looking for without the usual hassle. The verified brokers made everything transparent and honest.'" },
                { name: "James Reyes", role: "OFW, Cebu", text: "'After years abroad, coming home to buy property felt risky. This platform gave me the confidence I needed.'" },
                { name: "Ana Mercado", role: "Investor, Davao", text: "'The neighborhood guides showed me things I would have missed. Real data, real insights, no guessing.'" },
              ].map((review, i) => (
                <div key={i} className="p-10 flex flex-col justify-between border-t border-b border-l border-r border-gray-300 relative">
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
              Ready to move forward
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
              Connect with a verified broker who knows your neighborhood inside and out
            </p>
            <div className="flex justify-center gap-4 mb-24">
              <Link href="/contact" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
                Contact
              </Link>
              <Link href="/properties" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                Browse
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
