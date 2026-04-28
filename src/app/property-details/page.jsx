"use client";

import React, { useState } from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { RxChevronRight, RxPlus, RxMinus } from "react-icons/rx";
import { BiSolidStar } from "react-icons/bi";
import Link from "next/link";

export default function Page() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen font-body bg-white">
      <Navbar6 />

      {/* 1. Product Header / Overview */}
      <section className="bg-[#110D0A] pt-40 pb-24 px-[5%] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Images */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square md:aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
              <img src="/images/prop1.jpg" alt="Main property view" className="w-full h-full object-cover" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src="/images/prop2.jpg" alt="Property detail 1" className="w-full h-full object-cover" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"} />
              </div>
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src="/images/prop3.jpg" alt="Property detail 2" className="w-full h-full object-cover" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"} />
              </div>
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800" alt="Property detail 3" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800" alt="Property detail 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col pt-4">
            <p className="text-white/50 text-xs mb-6 uppercase tracking-wider">
              Properties &gt; Makati &gt; Luxury penthouse
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
              Luxury penthouse
            </h1>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              ₱45,000,000
            </h2>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="flex text-white gap-1">
                <BiSolidStar size={16} />
                <BiSolidStar size={16} />
                <BiSolidStar size={16} />
                <BiSolidStar size={16} />
                <BiSolidStar size={16} />
              </div>
              <span className="text-white/70 text-sm">Verified by PRC licensed broker</span>
            </div>

            <p className="text-white/80 text-base leading-relaxed mb-10">
              This property represents the pinnacle of Manila's residential market. Floor-to-ceiling windows frame the city skyline while premium finishes define every room.
            </p>

            <form className="mb-12" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Bedrooms</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/30 text-white py-3 appearance-none focus:outline-none focus:border-white">
                    <option className="bg-[#110D0A]">Select v</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Bathrooms</label>
                <div className="flex gap-4">
                  <input type="text" value="4 bedrooms" readOnly className="flex-1 bg-white text-black py-3 px-4 font-semibold text-center border-none" />
                  <div className="flex-1 bg-[#2C2724]"></div>
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-white text-sm mb-2">Quantity</label>
                <input type="number" defaultValue={1} className="w-full bg-transparent border-b border-white/30 text-white py-3 focus:outline-none focus:border-white" />
              </div>

              <Link href="/contact" className="block text-center w-full bg-white text-black font-semibold py-4 rounded-full mb-4 hover:bg-gray-100 transition-colors">
                Submit Inquiry
              </Link>
              <Link href="/contact" className="block text-center w-full bg-transparent border border-white/30 text-white font-semibold py-4 rounded-full mb-4 hover:bg-white/10 transition-colors">
                Schedule Viewing
              </Link>
              <p className="text-center text-white/50 text-[10px] uppercase tracking-widest">
                Verified broker responds within hours
              </p>
            </form>

            <div className="border-t border-white/10 pt-4">
              {/* Accordion 1 */}
              <div className="py-4 border-b border-white/10">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
                  <h3 className="text-lg font-bold text-white">Specifications</h3>
                  {openAccordion === 0 ? <RxMinus className="text-white" size={20} /> : <RxPlus className="text-white" size={20} />}
                </div>
                {openAccordion === 0 && (
                  <p className="text-white/70 text-sm mt-4 leading-relaxed pr-8">
                    Full 520 square meter. Features smart home integration, private elevator access, and a wraparound balcony with unobstructed views of Manila Bay.
                  </p>
                )}
              </div>
              {/* Accordion 2 */}
              <div className="py-4 border-b border-white/10">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
                  <h3 className="text-lg font-bold text-white">Viewing</h3>
                  {openAccordion === 1 ? <RxMinus className="text-white" size={20} /> : <RxPlus className="text-white" size={20} />}
                </div>
                {openAccordion === 1 && (
                  <p className="text-white/70 text-sm mt-4 leading-relaxed pr-8">
                    Schedule directly with the verified broker. Viewings available weekdays and weekends. All appointments are confirmed via email and SMS for your convenience.
                  </p>
                )}
              </div>
              {/* Accordion 3 */}
              <div className="py-4 border-b border-white/10">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}>
                  <h3 className="text-lg font-bold text-white">Closing</h3>
                  {openAccordion === 2 ? <RxMinus className="text-white" size={20} /> : <RxPlus className="text-white" size={20} />}
                </div>
                {openAccordion === 2 && (
                  <p className="text-white/70 text-sm mt-4 leading-relaxed pr-8">
                    Standard closing timeline is 45 to 60 days pending documentation and financing approval. Your broker coordinates with legal counsel to ensure a smooth transaction from inquiry to keys.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What You're Getting */}
      <section className="bg-[#2C2724] py-32 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="aspect-[4/5] lg:aspect-square bg-gray-700 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" alt="Interior" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-widest mb-6">Breakdown</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-8 leading-tight">
              What you're getting
              <br />
              with this property
            </h2>
            <p className="text-white/80 text-lg mb-12 leading-relaxed pr-8">
              Every detail matters. This penthouse combines luxury finishes with practical living space designed for the modern executive or growing family.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-white shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                <span className="text-white/90 text-sm">Four spacious bedrooms with en-suite bathrooms</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-white shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                <span className="text-white/90 text-sm">Chef's kitchen with imported appliances and marble counters</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-white shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span className="text-white/90 text-sm">Smart home system controlling lighting, climate, and security</span>
              </li>
            </ul>
            <div className="flex gap-8">
              <button className="text-white font-semibold text-sm flex items-center gap-1 group">
                View details <RxChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white font-semibold text-sm flex items-center gap-1 group">
                Share <RxChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Broker Credentials */}
      <section className="bg-white py-32 px-[5%] border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-black font-bold text-xs uppercase tracking-widest mb-6">Verified</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black uppercase tracking-tight mb-8 leading-tight">
              Your broker's
              <br />
              credentials and
              <br />
              direct contact
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Robert Santos holds an active PRC license and has closed over 120 transactions in the past five years. His track record speaks to integrity and expertise in luxury properties across Metro Manila.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="bg-transparent border border-gray-300 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
                Contact broker
              </Link>
              <Link href="/contact" className="text-black font-semibold text-sm flex items-center gap-1 group">
                Message <RxChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="aspect-[4/5] lg:aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" alt="Broker" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4. Verified Buyers (Testimonials) */}
      <section className="bg-[#EAEAEA] py-32 px-[5%]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black uppercase tracking-tight mb-4">
            Verified buyers
          </h2>
          <p className="text-gray-600 mb-20">
            Real stories from those who found their home
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                text: "I was skeptical about online property deals, but the verification process here gave me complete confidence. The broker was transparent at every step.",
                name: "Maria Santos",
                role: "OFW, Singapore"
              },
              {
                text: "This platform removed all the uncertainty. Every detail checked out, every promise kept. I closed on my dream property in Manila without a single doubt.",
                name: "James Reyes",
                role: "Executive, Makati"
              },
              {
                text: "The licensed brokers here actually care about matching you with the right property, not just making a sale. That integrity is rare.",
                name: "Patricia Lim",
                role: "Investor, Cebu"
              }
            ].map((review, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-8 text-black">
                    {[...Array(5)].map((_, i) => <BiSolidStar key={i} size={16} />)}
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-12">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-xs">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-sm">{review.name}</h4>
                    <p className="text-gray-600 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Amenities Section */}
      <section className="bg-white py-32 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200" alt="Amenities" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </div>
              <h3 className="text-lg font-display font-bold text-black uppercase mb-4">Manila Bay Views</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Unobstructed vistas from your private wraparound balcony overlooking the city.</p>
              <button className="text-black font-bold text-xs uppercase flex items-center gap-1 group">
                Explore <RxChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div>
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-lg font-display font-bold text-black uppercase mb-4">Smart home ready</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Control lighting, climate, and security from your phone or tablet.</p>
              <button className="text-black font-bold text-xs uppercase flex items-center gap-1 group">
                Learn <RxChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div>
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
              </div>
              <h3 className="text-lg font-display font-bold text-black uppercase mb-4">Private elevator</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Direct access from the lobby ensures privacy and convenience for residents.</p>
              <button className="text-black font-bold text-xs uppercase flex items-center gap-1 group">
                Details <RxChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div>
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              </div>
              <h3 className="text-lg font-display font-bold text-black uppercase mb-4">Makati location</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Central to business, fine dining, and entertainment in Metro Manila.</p>
              <button className="text-black font-bold text-xs uppercase flex items-center gap-1 group">
                Discover <RxChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Property Gallery */}
      <section className="bg-white py-32 px-[5%] border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black uppercase tracking-tight mb-4">
            Property gallery
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            High-resolution images of the penthouse, amenities, and surrounding neighborhood.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&sig=${i}`} alt={`Gallery ${i}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Questions / FAQ */}
      <section className="bg-[#110D0A] py-32 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Questions
            </h2>
            <p className="text-white/70 text-lg">
              Everything you need to know before making your move
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does verification work?",
                a: "Every broker on this platform holds active credentials from the Philippine Real Estate Board. We verify licenses, background history, and transaction records. No shortcuts. No exceptions."
              },
              {
                q: "What's the viewing process?",
                a: "You schedule directly with the verified broker. They confirm availability, arrange the time, and meet you at the property. All details are documented in your inquiry history for complete transparency."
              },
              {
                q: "How long does closing take?",
                a: "Timeline depends on financing and documentation. Most transactions close within 30 to 60 days. Your broker guides you through each step and coordinates with legal counsel to keep things moving."
              },
              {
                q: "What documents do I need?",
                a: "Standard requirements include proof of funds, valid ID, and tax documents. Your broker provides a complete checklist upfront. We also connect you with trusted legal partners who handle the paperwork."
              },
              {
                q: "Is this platform secure?",
                a: "All transactions use encrypted connections and secure payment processing. Your personal data is protected under Philippine data privacy laws. We never share your information without explicit consent."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-white/20 rounded-lg overflow-hidden">
                <div 
                  className="px-6 py-5 flex justify-between items-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                  {openFaq === idx ? <RxMinus className="text-white" size={24} /> : <RxPlus className="text-white" size={24} />}
                </div>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 bg-white/5">
                    <p className="text-white/70 leading-relaxed pr-12">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-4">
              Need more help?
            </h3>
            <p className="text-white/70 mb-8">
              Reach out to our team
            </p>
            <Link href="/contact" className="inline-block bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="bg-[#0A1118] py-32 px-[5%] text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase mb-6 tracking-wide leading-tight">
            Ready to move forward?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Submit your inquiry to the verified broker handling this property
          </p>
          <div className="flex justify-center gap-4 mb-24">
            <Link href="/contact" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
              Inquire
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
              Schedule
            </Link>
          </div>
          
          <div className="w-full h-[600px] bg-[#2E3640] rounded-xl flex items-center justify-center overflow-hidden shadow-2xl">
            <img src="/images/cta_bg.jpg" alt="Move forward CTA" className="w-full h-full object-cover" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"} />
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
