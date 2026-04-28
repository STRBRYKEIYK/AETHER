"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone, BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen font-body">
      <Navbar6 />

      {/* 1. Hero Section */}
      <section className="bg-[#110D0A] pt-48 pb-32 px-[5%] text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-display font-bold text-xs mb-8 uppercase tracking-widest"
        >
          Reach
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-6 uppercase"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Connect securely with our verified real estate experts
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
            Inquire
          </button>
          <button className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
            Learn
          </button>
        </motion.div>
      </section>

      {/* 2. Direct Contact Section */}
      <section className="bg-[#332C28] py-24 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-white font-bold text-sm mb-4">Direct</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">
              Get in touch
            </h2>
            <p className="text-white/80 mb-16 text-lg">
              Reach our team by phone, email, or visit our office in Manila
            </p>

            <div className="space-y-10">
              <div>
                <BiEnvelope className="text-white mb-4" size={28} />
                <h4 className="text-xl font-display font-bold text-white mb-1">
                  Email
                </h4>
                <p className="text-white/80 mb-2">Send us a message</p>
                <a
                  href="mailto:hello@premiumphilippineproperties.com"
                  className="text-white hover:text-gray-300 transition-colors underline"
                >
                  hello@premiumphilippineproperties.com
                </a>
              </div>

              <div>
                <BiPhone className="text-white mb-4" size={28} />
                <h4 className="text-xl font-display font-bold text-white mb-1">
                  Phone
                </h4>
                <p className="text-white/80 mb-2">Call our support team</p>
                <a
                  href="tel:+63288880000"
                  className="text-white hover:text-gray-300 transition-colors underline"
                >
                  +63 (2) 8888-0000
                </a>
              </div>

              <div>
                <BiMap className="text-white mb-4" size={28} />
                <h4 className="text-xl font-display font-bold text-white mb-1">
                  Office
                </h4>
                <p className="text-white/80 mb-2">
                  BGC, Taguig City, Metro Manila
                </p>
                <button className="text-white hover:text-gray-300 transition-colors font-semibold flex items-center gap-1 mt-2">
                  View location <RxChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-full min-h-[500px]">
            <div className="w-full h-full bg-[#4E4844] rounded-xl flex items-center justify-center">
              <svg
                className="w-32 h-32 text-white/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Form Section */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-black font-bold text-sm mb-4">Inquiry</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black uppercase mb-6 leading-tight">
              Connect with a broker
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Tell us what you're looking for and we'll match you with a
              verified professional
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <BiEnvelope size={24} />
                <span>hello@premiumphilippineproperties.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <BiPhone size={24} />
                <span>+63 (2) 8888-0000</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <BiMap size={24} />
                <span>BGC, Taguig City, Metro Manila</span>
              </div>
            </div>
          </div>

          <div>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700">
                  First name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  className="bg-white border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black shadow-none h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700">
                  Last name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  className="bg-white border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black shadow-none h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  className="bg-white border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black shadow-none h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  Phone number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  className="bg-white border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black shadow-none h-12"
                />
              </div>

              <div className="md:col-span-2 space-y-2 mt-4">
                <Label className="text-gray-700">
                  What's your inquiry about?
                </Label>
                <Select>
                  <SelectTrigger className="border-b border-gray-300 rounded-none px-0 focus:ring-0 focus:border-black shadow-none bg-transparent">
                    <SelectValue placeholder="Select topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buying">Buying Property</SelectItem>
                    <SelectItem value="selling">Selling Property</SelectItem>
                    <SelectItem value="renting">Renting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-4 mt-4">
                <Label className="text-gray-700">
                  How would you describe yourself?
                </Label>
                <RadioGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="first-time" id="first-time" />
                    <Label htmlFor="first-time" className="font-normal">
                      First-time buyer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="investor" id="investor" />
                    <Label htmlFor="investor" className="font-normal">
                      Returning investor
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ofw" id="ofw" />
                    <Label htmlFor="ofw" className="font-normal">
                      OFW buyer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="corporate" id="corporate" />
                    <Label htmlFor="corporate" className="font-normal">
                      Corporate buyer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="agent" id="agent" />
                    <Label htmlFor="agent" className="font-normal">
                      Real estate agent
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="font-normal">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="md:col-span-2 space-y-2 mt-4">
                <Label htmlFor="message" className="text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  className="border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black shadow-none resize-none min-h-[100px] bg-transparent"
                />
              </div>

              <div className="md:col-span-2 flex items-center space-x-2 mt-4">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="font-normal cursor-pointer text-gray-700"
                >
                  I agree to the terms of service
                </Label>
              </div>

              <div className="md:col-span-2 mt-4">
                <Button className="bg-[#0B3A5A] text-white hover:bg-[#082a42] px-8 py-6 rounded-full font-semibold">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="bg-[#EAEAEA] py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4 uppercase">
              Real feedback
            </h2>
            <p className="text-gray-600 text-lg">What our clients say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-gray-300 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6 text-black">
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                </div>
                <p className="text-gray-800 text-lg mb-8 leading-relaxed font-body">
                  They answered my questions within hours and connected me with
                  a licensed broker I could trust.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-xs">IMG</span>
                </div>
                <div>
                  <p className="text-black font-bold">Maria Santos</p>
                  <p className="text-gray-600 text-sm">OFW, Dubai</p>
                </div>
              </div>
            </div>

            <div className="p-10 border border-gray-300 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6 text-black">
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                </div>
                <p className="text-gray-800 text-lg mb-8 leading-relaxed font-body">
                  The verification process gave me confidence that every listing
                  was legitimate and every agent was credentialed.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-xs">IMG</span>
                </div>
                <div>
                  <p className="text-black font-bold">James Reyes</p>
                  <p className="text-gray-600 text-sm">Buyer, Manila</p>
                </div>
              </div>
            </div>

            <div className="p-10 border border-gray-300 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6 text-black">
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                  <BiSolidStar size={24} />
                </div>
                <p className="text-gray-800 text-lg mb-8 leading-relaxed font-body">
                  I found my property in three weeks without the usual headaches
                  and false leads.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-xs">IMG</span>
                </div>
                <div>
                  <p className="text-black font-bold">Ana Cruz</p>
                  <p className="text-gray-600 text-sm">Investor, Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Logos Section */}
      <section className="bg-white py-24 px-[5%]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-black font-display font-bold text-sm tracking-widest uppercase mb-16">
            Trusted by serious buyers and verified brokers across the
            Philippines
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center opacity-80">
            {/* Using Relume & Webflow text style for accuracy to screenshot */}
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
      </section>

      {/* 6. FAQ Section */}
      <section className="bg-[#0B1521] py-24 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Questions
            </h2>
            <p className="text-white/80 text-lg">
              Everything you need to know about our platform and process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How do you verify agents?",
                a: "Every broker on our platform holds current PRC licensing and professional credentials. We conduct background verification and maintain ongoing compliance monitoring to ensure only licensed professionals can list properties.",
              },
              {
                q: "Are listings guaranteed authentic?",
                a: "Yes. Each property undergoes verification before listing. We confirm ownership, pricing accuracy, and property status to eliminate ghost listings and false advertisements that plague other platforms.",
              },
              {
                q: "How does the inquiry process work?",
                a: "Submit your inquiry through our secure form and we connect you directly with the verified broker representing that property. You receive transparent communication and can ask questions before committing to anything.",
              },
              {
                q: "Can OFWs buy property remotely?",
                a: "Absolutely. Our platform supports remote buyers with secure document handling, video property tours, and brokers experienced in working with overseas Filipinos. We handle the complexity so you don't have to.",
              },
              {
                q: "What if I have concerns about a listing?",
                a: "Report it immediately through our platform. Our trust team investigates every concern and removes listings that fail verification. Your security is our priority.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-transparent border border-white/20 rounded-lg px-6 py-2 transition-all"
              >
                <AccordionTrigger className="py-6 text-xl font-bold text-white hover:no-underline [&[data-state=open]]:text-white text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-white/70 leading-relaxed text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 pt-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Need more help?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our team is ready to answer anything
            </p>
            <button className="bg-transparent border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
              Email us
            </button>
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
