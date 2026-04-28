"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { RxChevronRight, RxChevronLeft, RxPlus } from "react-icons/rx";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen font-body bg-white">
      <Navbar6 />

      {/* 1. Hero Section */}
      <section className="bg-[#110D0A] pt-48 pb-32 px-[5%] text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-bold text-xs mb-8 uppercase tracking-widest"
          >
            Verified
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tight leading-[1.2]"
          >
            Luxury properties
            <br />
            await
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-normal"
          >
            Licensed brokers. Transparent pricing. No ghost listings here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <Link href="/properties" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
              Search
            </Link>
            <Link href="/about-us" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
              Learn more
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Listings Section */}
      <section className="bg-[#2C2724] py-32 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-widest mb-6">
                Curated
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-6">
                Listings
              </h2>
              <p className="text-white/80 text-lg">
                Each property verified by licensed brokers across Metro Manila
                and beyond.
              </p>
            </div>
            <div>
              <Link href="/properties" className="inline-block bg-transparent border border-white/30 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm">
                View all
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Card 1 */}
            <div className="flex flex-col">
              <div className="w-full aspect-[4/5] bg-gray-600 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src="/images/prop1.jpg"
                  alt="Makati tower"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800")
                  }
                />
              </div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-white font-bold text-lg leading-tight">
                  Makati tower
                </h3>
                <span className="text-white font-bold text-lg">₱8.5M</span>
              </div>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-6">
                Verified
              </p>
              <Link href="/property-details" className="block text-center w-full bg-transparent border border-white/30 text-white font-semibold py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                View details
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col">
              <div className="w-full aspect-[4/5] bg-gray-600 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src="/images/prop2.jpg"
                  alt="BGC penthouse"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800")
                  }
                />
              </div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-white font-bold text-lg leading-tight">
                  BGC penthouse
                </h3>
                <span className="text-white font-bold text-lg">₱12.2M</span>
              </div>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-6">
                Verified
              </p>
              <Link href="/property-details" className="block text-center w-full bg-transparent border border-white/30 text-white font-semibold py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                View details
              </Link>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col">
              <div className="w-full aspect-[4/5] bg-gray-600 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src="/images/prop3.jpg"
                  alt="Quezon City estate"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800")
                  }
                />
              </div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-white font-bold text-lg leading-tight">
                  Quezon City estate
                </h3>
                <span className="text-white font-bold text-lg">₱6.8M</span>
              </div>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-6">
                Verified
              </p>
              <Link href="/property-details" className="block text-center w-full bg-transparent border border-white/30 text-white font-semibold py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                View details
              </Link>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col">
              <div className="w-full aspect-[4/5] bg-gray-600 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
                  alt="Cebu beachfront"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-white font-bold text-lg leading-tight">
                  Cebu beachfront
                </h3>
                <span className="text-white font-bold text-lg">₱25M</span>
              </div>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-6">
                Verified
              </p>
              <Link href="/property-details" className="block text-center w-full bg-transparent border border-white/30 text-white font-semibold py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                View details
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <RxChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <RxChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Numbers Section */}
      <section className="bg-white py-32 px-[5%] border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <div>
              <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">
                Proven
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black uppercase tracking-tight leading-tight">
                The numbers speak
                <br />
                for themselves
              </h2>
            </div>
            <div className="flex flex-col justify-start lg:pt-12">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We've built something real here. Thousands of serious buyers
                trust our platform because they know every listing is verified
                and every broker is licensed. The market moves fast, but we move
                faster.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/about-us" className="bg-transparent border border-gray-300 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
                  Learn
                </Link>
                <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center text-black hover:bg-gray-50 rounded-full transition-colors">
                    <RxChevronLeft size={20} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center text-black hover:bg-gray-50 rounded-full transition-colors">
                    <RxChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            <div className="md:border-r border-gray-200">
              <h3 className="text-6xl md:text-7xl font-bold text-black mb-6">
                2,847
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Verified listings live
              </p>
            </div>
            <div className="md:border-r border-gray-200 md:pl-10">
              <h3 className="text-6xl md:text-7xl font-bold text-black mb-6">
                156
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Licensed brokers active
              </p>
            </div>
            <div className="md:pl-10">
              <h3 className="text-6xl md:text-7xl font-bold text-black mb-6">
                ₱18.3B
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Properties sold this year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Questions / FAQ Section */}
      <section className="bg-white py-32 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase tracking-tight mb-6">
              Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about buying with confidence on our
              platform.
            </p>
          </div>

          <div className="border-t border-gray-200">
            {/* Accordion Item 1 */}
            <div className="py-8 border-b border-gray-200">
              <div className="flex justify-between items-center cursor-pointer mb-4">
                <h3 className="text-xl font-bold text-black">
                  How does verification work?
                </h3>
                <RxPlus size={24} className="text-black" />
              </div>
              <p className="text-gray-600 leading-relaxed pr-12">
                Every broker on our platform holds a valid PRC license and
                professional credentials. We verify each listing independently
                before it goes live. No shortcuts. No exceptions. You see what's
                real.
              </p>
            </div>
            {/* Accordion Item 2 */}
            <div className="py-8 border-b border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold text-black">
                Can I trust the pricing?
              </h3>
              <RxPlus size={24} className="text-black" />
            </div>
            {/* Accordion Item 3 */}
            <div className="py-8 border-b border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold text-black">
                How do I connect with brokers?
              </h3>
              <RxPlus size={24} className="text-black" />
            </div>
            {/* Accordion Item 4 */}
            <div className="py-8 border-b border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold text-black">
                What protects OFW buyers?
              </h3>
              <RxPlus size={24} className="text-black" />
            </div>
            {/* Accordion Item 5 */}
            <div className="py-8 border-b border-gray-200 flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold text-black">
                Is there a buyer's fee?
              </h3>
              <RxPlus size={24} className="text-black" />
            </div>
          </div>

          <div className="mt-32">
            <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight mb-4">
              Need more help?
            </h3>
            <p className="text-gray-600 mb-8">Reach out to our team anytime.</p>
            <Link href="/contact" className="inline-block bg-transparent border border-gray-300 text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-[#0A1118] py-32 px-[5%] text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase mb-6 tracking-wide leading-tight">
            Ready to find your
            <br />
            property
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Connect with a verified broker who knows the market and protects
            your interests completely.
          </p>
          <div className="flex justify-center gap-4 mb-24">
            <Link href="/contact" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
              Inquire
            </Link>
            <Link href="/properties" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
              Browse
            </Link>
          </div>

          <div className="w-full h-[600px] bg-[#2E3640] rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src="/images/cta_bg.jpg"
              alt="Property CTA"
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")
              }
            />
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
