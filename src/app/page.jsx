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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#110D0A] pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            className="w-full h-full object-cover opacity-50"
            alt="Real estate meeting"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#110D0A]/80 via-[#110D0A]/40 to-[#110D0A]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-[5%] relative z-10 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tight leading-[1.2]"
          >
            Find your next
            <br />
            home with verified
            <br />
            brokers you can trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Search luxury properties across the Philippines. Every listing
            verified, every broker licensed, every transaction transparent. No
            scams. No ghost listings. Just real homes for serious buyers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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

      {/* 2. Why Trust Us Section */}
      <section className="bg-[#2C2724] py-32 px-[5%] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Why trust us
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-8 leading-tight">
              Three reasons to buy with
              <br />
              confidence
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We verify every broker and authenticate every listing before it
              appears on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
                  alt="Verified agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Verified agent
                <br />
                badges
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Each broker displays their license number and credential status
                in real time.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                  alt="Scam-free"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Scam-free listings
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                Our team inspects properties and confirms ownership before
                publication.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
                  alt="Transparent pricing"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 leading-snug">
                Transparent pricing
              </h3>
              <p className="text-white/70 text-sm leading-relaxed px-4">
                No hidden fees. All costs displayed upfront in clear, detailed
                breakdowns.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Link href="/properties" className="bg-transparent border border-white/30 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm">
              Explore properties
            </Link>
            <Link href="/properties" className="text-white font-semibold text-sm flex items-center gap-1 group">
              Arrow{" "}
              <RxChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Numbers Section */}
      <section className="bg-white py-32 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <div>
              <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">
                Numbers
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black uppercase tracking-tight leading-tight">
                Real properties, real
                <br />
                brokers, real results
              </h2>
            </div>
            <div className="flex flex-col justify-end lg:pt-12">
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Our platform connects serious buyers with licensed professionals
                across the Philippines. Every listing verified. Every broker
                authenticated. Every transaction transparent from start to
                finish.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/properties" className="bg-transparent border border-gray-300 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
                  Browse
                </Link>
                <Link href="/properties" className="text-black font-semibold text-sm flex items-center gap-1 group">
                  Arrow{" "}
                  <RxChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-gray-200 pl-8 py-2">
              <h3 className="text-6xl md:text-7xl font-bold text-black mb-6">
                12,400
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Verified listings live
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-8 py-2">
              <h3 className="text-6xl md:text-7xl font-bold text-black mb-6">
                3,850
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest">
                Licensed brokers active
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-8 py-2">
              <h3 className="text-6xl md:text-7xl font-bold text-black mb-6">
                28,600
              </h3>
              <p className="text-black font-bold text-xs uppercase tracking-widest leading-relaxed">
                Successful transactions
                <br />
                closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Properties Section */}
      <section className="bg-white py-32 px-[5%] text-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">
              Featured
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase tracking-tight mb-8">
              Luxury homes worth your
              <br />
              time
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hand-selected properties across Manila, Cebu, and Davao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/prop1.jpg"
                  alt="Makati Penthouse"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800")
                  }
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-black uppercase mb-3">
                  Makati penthouse suite
                </h3>
                <p className="text-gray-600 text-sm mb-6 font-body">
                  ₱45M | 4 bed | 3 bath
                </p>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Luxury
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Manila
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Verified
                  </span>
                </div>
                <div className="mt-auto">
                  <Link href="/property-details" className="text-black font-semibold text-sm flex items-center gap-1 group">
                    View details{" "}
                    <RxChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/prop2.jpg"
                  alt="Cebu Beachfront"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800")
                  }
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-black uppercase mb-3">
                  Cebu beachfront villa
                </h3>
                <p className="text-gray-600 text-sm mb-6 font-body">
                  ₱28M | 5 bed | 4 bath
                </p>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Beachfront
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Cebu
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Verified
                  </span>
                </div>
                <div className="mt-auto">
                  <Link href="/property-details" className="text-black font-semibold text-sm flex items-center gap-1 group">
                    View details{" "}
                    <RxChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col bg-white">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/prop3.jpg"
                  alt="Davao Executive"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800")
                  }
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-black uppercase mb-3">
                  Davao executive home
                </h3>
                <p className="text-gray-600 text-sm mb-6 font-body">
                  ₱18M | 3 bed | 3 bath
                </p>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Executive
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Davao
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black text-xs font-bold rounded-full border border-gray-200">
                    Verified
                  </span>
                </div>
                <div className="mt-auto">
                  <Link href="/property-details" className="text-black font-semibold text-sm flex items-center gap-1 group">
                    View details{" "}
                    <RxChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/properties" className="inline-block bg-transparent border border-gray-300 text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors text-sm">
            View all
          </Link>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="bg-[#EAEAEA] py-32 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase tracking-tight mb-6">
              What buyers say
            </h2>
            <p className="text-gray-600 text-lg">
              Trust built on real experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Santos",
                role: "OFW, Singapore",
                text: "'I found my dream home in Makati without the usual headaches. Every broker was legitimate, every listing was real, and the entire process felt secure.'",
              },
              {
                name: "James Reyes",
                role: "Entrepreneur, Manila",
                text: "'The verification system gave me peace of mind. No ghost listings, no surprises. This is how real estate should work.'",
              },
              {
                name: "Angela Cruz",
                role: "Executive, Cebu",
                text: "'Transparent pricing, verified agents, and professional service from start to finish. Worth every moment.'",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="p-10 flex flex-col justify-between border-t border-b border-l border-r border-gray-300 relative bg-transparent"
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-400"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-400"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-400"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-400"></div>

                <div>
                  <div className="flex gap-1 mb-8 text-black">
                    {[...Array(5)].map((_, idx) => (
                      <BiSolidStar key={idx} size={24} />
                    ))}
                  </div>
                  <p className="text-gray-800 text-lg mb-12 leading-relaxed font-body">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-bold text-sm">
                      {review.name}
                    </p>
                    <p className="text-gray-600 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mission & Trust Section */}
      <section className="bg-white py-32 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <div>
              <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">
                Mission
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase tracking-tight leading-[1.2] mb-8">
                Premium real estate
                <br />
                built on trust
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We built this platform because the Philippine real estate market
                deserved better. No scams. No ghost listings. No wasted time.
                Just serious buyers meeting licensed brokers in a space designed
                for transparency and security.
              </p>

              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-black shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-black text-sm font-semibold">
                    Every broker is licensed and verified in real time
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-black shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  <span className="text-black text-sm font-semibold">
                    Every listing is inspected and authenticated before
                    publication
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-black shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="text-black text-sm font-semibold">
                    Every transaction is transparent with clear pricing and no
                    hidden fees
                  </span>
                </li>
              </ul>

              <div className="flex items-center gap-6">
                <Link href="/about-us" className="bg-transparent border border-gray-300 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
                  Learn more
                </Link>
                <Link href="/about-us" className="text-black font-semibold text-sm flex items-center gap-1 group">
                  Arrow{" "}
                  <RxChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center pt-24 border-t border-gray-200">
            <h4 className="text-black font-display font-bold text-xs tracking-widest uppercase mb-16">
              Trusted by leading developers and financial institutions
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 items-center justify-items-center">
              <div className="flex items-center gap-2 font-bold text-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z" />
                </svg>{" "}
                Webflow
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>{" "}
                Relume
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z" />
                </svg>{" "}
                Webflow
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>{" "}
                Relume
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 10l-10 5 10 5 10-5-10-5z" />
                </svg>{" "}
                Webflow
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>{" "}
                Relume
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA 1 Section */}
      <section className="bg-[#0A1118] pt-32 text-center">
        <div className="max-w-4xl mx-auto px-[5%] mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-8">
            Start your search today
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Browse verified listings, connect with licensed brokers, and find
            your next home with confidence.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/properties" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
              Search
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
              Contact us
            </Link>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-[5%] pb-10">
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="Search"
            />
          </div>
        </div>
      </section>

      {/* 8. CTA 2 Section */}
      <section className="bg-[#110D0A] pt-32 text-center pb-[5%]">
        <div className="max-w-4xl mx-auto px-[5%] mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight mb-8 leading-[1.2]">
            Stay updated on new
            <br />
            listings
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Get market insights, exclusive properties, and platform updates
            delivered to your inbox.
          </p>

          <form
            className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4 mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-white/30 px-2 py-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/30 text-sm"
            />
            <button className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm shrink-0 mt-4 sm:mt-0">
              Subscribe
            </button>
          </form>
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            By subscribing you agree to our Terms and Privacy Policy.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-[5%]">
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="Stay updated"
            />
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
