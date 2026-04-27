"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { properties } from "@/data/properties";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Star,
  Shield,
  Layout,
  User,
  MessageSquare,
  Share2,
} from "lucide-react";

export default function PropertyPage() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id) || properties[0];
  const [openAccordion, setOpenAccordion] = useState("specs");

  return (
    <div className="bg-celestial-dark min-h-screen">
      <Navbar6 />

      <main className="pt-32 pb-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section: Gallery + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
            {/* Left: Gallery Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-fit">
              <div className="col-span-2 aspect-[4/3] rounded-3xl overflow-hidden celestial-border">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {property.images.slice(1, 5).map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden celestial-border opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={img}
                    alt={`${property.title} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-5">
              <nav className="text-[10px] uppercase tracking-widest text-white/30 mb-6">
                {property.fullLocation}
              </nav>
              <div className="flex justify-between items-end mb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight">
                  {property.title}
                </h1>
                <span className="text-2xl font-display font-bold text-gradient">
                  {property.price}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-celestial-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                  Verified by PRC · Licensed broker
                </span>
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-10 font-body">
                {property.description}
              </p>

              <div className="space-y-6 mb-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-4">
                    Bedrooms
                  </label>
                  <div className="w-full bg-white/[0.02] border border-white/10 rounded-full px-8 py-4 text-white flex justify-between items-center cursor-pointer hover:border-white/20 transition-all">
                    <span>{property.bedrooms}</span>
                    <ChevronDown size={16} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-4">
                    Bathrooms
                  </label>
                  <div className="w-full bg-white/[0.02] border border-white/10 rounded-full px-8 py-4 text-white flex justify-between items-center cursor-pointer hover:border-white/20 transition-all">
                    <span>{property.bathrooms}</span>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-12">
                <button className="btn-gold w-full !py-5">
                  Submit Inquiry
                </button>
                <button className="btn-outline w-full !py-5">
                  Schedule Viewing
                </button>
                <p className="text-center text-[10px] text-white/20 uppercase tracking-widest mt-4">
                  Verified broker response within 24 hours
                </p>
              </div>

              {/* Accordions */}
              <div className="space-y-0 border-t border-white/10">
                {[
                  {
                    id: "specs",
                    title: "Specifications",
                    content: property.specs,
                  },
                  {
                    id: "viewing",
                    title: "Viewing",
                    content:
                      "Schedule directly with the verified broker. Viewings available weekdays and weekends. All appointments are confirmed via email and SMS for your convenience.",
                  },
                  {
                    id: "closing",
                    title: "Closing",
                    content:
                      "Standard closing timeline is 30 to 60 days pending documentation and financing approval. Your broker coordinates with legal counsel to ensure a smooth transaction.",
                  },
                ].map((item) => (
                  <div key={item.id} className="border-b border-white/10">
                    <button
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === item.id ? null : item.id,
                        )
                      }
                      className="w-full py-6 flex justify-between items-center text-left"
                    >
                      <span className="text-sm font-display font-bold text-white uppercase tracking-widest">
                        {item.title}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-white/30 transition-transform ${openAccordion === item.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openAccordion === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-white/50 text-sm leading-relaxed">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Breakdown Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
            <div className="celestial-border rounded-3xl overflow-hidden aspect-square">
              <img
                src={property.images[5]}
                alt="Detail View"
                className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </div>
            <div>
              <p className="text-celestial-gold text-[10px] uppercase tracking-widest font-bold mb-4">
                Breakdown
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                What You're Getting <br />
                <span className="text-gradient">With This Property</span>
              </h2>
              <p className="text-white/40 text-lg mb-10 leading-relaxed">
                Every detail matters. This property combines luxury finishes
                with practical living space designed for the modern executive.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield size={20} />,
                    text: "Four spacious bedrooms with ensuite bathrooms",
                  },
                  {
                    icon: <Layout size={20} />,
                    text: "Chef's kitchen with imported appliances and marble counters",
                  },
                  {
                    icon: <Star size={20} />,
                    text: "Smart home system controlling lighting, climate, and security",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-white/60"
                  >
                    <span className="text-celestial-gold p-2 bg-white/5 rounded-lg">
                      {feature.icon}
                    </span>
                    <span className="text-sm font-body tracking-wide">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex gap-6">
                <button className="btn-outline !py-3 !px-8 text-[10px]">
                  View Details
                </button>
                <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>
          </div>

          {/* Broker Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40 bg-white/[0.02] p-12 md:p-24 rounded-[3rem] border border-white/5">
            <div>
              <p className="text-celestial-gold text-[10px] uppercase tracking-widest font-bold mb-4">
                Verified
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Your Broker's <br />
                Credentials And <br />
                <span className="text-gradient">Direct Contact</span>
              </h2>
              <p className="text-white/40 text-lg mb-10 leading-relaxed italic">
                "{property.broker.desc}"
              </p>
              <div className="flex gap-6">
                <button className="btn-gold !px-10">Contact Broker</button>
                <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
                  Message <span>→</span>
                </button>
              </div>
            </div>
            <div className="celestial-border rounded-3xl overflow-hidden aspect-square">
              <img
                src="/images/prop1.jpg"
                alt="Broker Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Testimonials Section */}
          <section className="py-40 border-t border-white/5">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-widest mb-8">
                Customer Reviews
              </h2>
              <p className="text-white/40 max-w-lg mx-auto">
                Verified luxury buyers share their experience with the AETHER
                platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Santos",
                  role: "OFW, Singapore",
                  quote:
                    "I was skeptical about online property deals, but the verification process here gave me complete confidence. The broker was transparent at every step.",
                },
                {
                  name: "James Reyes",
                  role: "Executive, Makati",
                  quote:
                    "This platform removed all the uncertainty. Every detail checked out, every promise kept. I closed on my dream property in Manila without a single doubt.",
                },
                {
                  name: "Patricia Lim",
                  role: "Investor, Cebu",
                  quote:
                    "The licensed brokers here actually care about matching you with the right property, not just making a sale. That integrity is rare.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="glass-card p-10 border-white/5 hover:border-celestial-gold/30 transition-all group"
                >
                  <div className="flex text-celestial-gold mb-8">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/60 text-lg mb-10 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 celestial-border flex items-center justify-center text-white/20">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-white font-display font-bold text-sm uppercase tracking-widest">
                        {t.name}
                      </p>
                      <p className="text-white/30 text-[10px] uppercase tracking-widest">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Breakdown Grid */}
          <section className="py-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="celestial-border rounded-3xl overflow-hidden aspect-square">
              <img
                src={property.images[1]}
                alt="Interior View"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                {
                  icon: <Layout size={24} />,
                  title: "Smart Layout",
                  desc: "Optimized floor plans for maximum airflow and natural light.",
                },
                {
                  icon: <Shield size={24} />,
                  title: "Secure Entry",
                  desc: "Biometric access and 24/7 onsite security protocols.",
                },
                {
                  icon: <Star size={24} />,
                  title: "Premium Finishes",
                  desc: "Imported marble and sustainable hardwood throughout.",
                },
                {
                  icon: <MessageSquare size={24} />,
                  title: "Concierge",
                  desc: "Private property management and delivery handling.",
                },
                {
                  icon: <Layout size={24} />,
                  title: "Sky View",
                  desc: "Unobstructed views of the city skyline or coastline.",
                },
                {
                  icon: <Star size={24} />,
                  title: "Verification",
                  desc: "Title deeds and tax records fully audited by our team.",
                },
              ].map((f, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-celestial-gold mb-6 group-hover:text-glow transition-all">
                    {f.icon}
                  </div>
                  <h4 className="text-sm font-display font-bold text-white mb-4 uppercase tracking-widest">
                    {f.title}
                  </h4>
                  <p className="text-white/30 text-[13px] leading-relaxed mb-4">
                    {f.desc}
                  </p>
                  <div className="text-white/10 group-hover:text-white/40 transition-colors">
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Image Gallery */}
          <section className="py-40">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-widest mb-8">
                Image Gallery
              </h2>
              <p className="text-white/40">
                Explore every angle of this architectural masterpiece.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden celestial-border group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
              ))}
              {[...Array(Math.max(0, 8 - property.images.length))].map(
                (_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 animate-pulse"
                  />
                ),
              )}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-40 border-t border-white/5 text-center">
            <h2 className="text-4xl md:text-8xl font-display font-bold text-white uppercase tracking-tight mb-12 reveal">
              Secure Your <br />
              <span className="text-gradient">Celestial Legacy</span>
            </h2>
            <button className="btn-gold !px-16 !py-6 text-lg mb-24">
              Inquire Now
            </button>
            <div className="celestial-border rounded-[3rem] overflow-hidden aspect-video">
              <img
                src="/images/cta_bg.jpg"
                alt="Final View"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer10 />
    </div>
  );
}
