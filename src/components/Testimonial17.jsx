"use client";

import { motion } from "framer-motion";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

const testimonials = [
  {
    name: "Maria Santos",
    role: "OFW, Singapore",
    text: "I was skeptical about online property deals, but the verification process here gave me complete confidence. The broker was transparent at every step.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "James Reyes",
    role: "Executive, Makati",
    text: "This platform removed all the uncertainty. Every detail checked out, every promise kept. I closed on my dream property in Manila without a single doubt.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Patricia Lim",
    role: "Investor, Cebu",
    text: "The licensed brokers here actually care about matching you with the right property, not just making a sale. That integrity is rare.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  }
];

export function Testimonial17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-celestial-deep/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
              Voices of <span className="text-celestial-gold">Trust.</span>
            </h2>
            <p className="text-white/40 text-lg">
              Authentic journeys from those who found their celestial sanctuary.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <BiSolidStar key={i} className="size-5 text-celestial-gold drop-shadow-[0_0_8px_#d4af37]" />
                  ))}
                </div>
                <blockquote className="text-white/80 text-lg italic leading-relaxed mb-10">
                  "{t.text}"
                </blockquote>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <img
                  src={t.avatar}
                  className="size-12 rounded-full object-cover border-2 border-celestial-gold/30"
                  alt={t.name}
                />
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-white/40 text-sm uppercase tracking-tighter font-body">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
