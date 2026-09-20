"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface ContactProps {
  customMessage: string;
}

export default function Contact({ customMessage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    budget: "$25,000 - $50,000",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (customMessage) {
      setFormData((prev) => ({
        ...prev,
        message: customMessage,
      }));
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [customMessage]);

  const budgets = [
    "< $15,000",
    "$15,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        brandName: "",
        budget: "$25,000 - $50,000",
        message: "",
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-white text-[#2d2d2d] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-[#522578] uppercase font-semibold mb-3">CONNECT WITH US</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-[#522578] tracking-wide leading-tight mb-6">
                Book A Free Discovery Meeting
              </h2>
              <p className="text-gray-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                We partner with perfume brands to develop custom glass bottles, Zamac caps, and full packaging design. Schedule a discovery consultation with our Dubai South team.
              </p>

              {/* Detail Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FAF2FA] border border-purple-900/10 flex items-center justify-center text-[#522578] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-[#522578] uppercase">DUBAI HEADQUARTERS</h4>
                    <p className="text-gray-600 font-light text-sm mt-1 leading-relaxed">
                      Dubai South HQ, Building A4<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FAF2FA] border border-purple-900/10 flex items-center justify-center text-[#522578] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-[#522578] uppercase">DIRECT EMAIL</h4>
                    <p className="text-gray-600 font-light text-sm mt-1">
                      inquiry@anisha.agency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FAF2FA] border border-purple-900/10 flex items-center justify-center text-[#522578] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-[#522578] uppercase">TELEPHONE</h4>
                    <p className="text-gray-600 font-light text-sm mt-1">
                      +971 4 800 ANISHA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 pt-6 border-t border-gray-100 text-[10px] tracking-widest text-gray-500 font-medium uppercase">
              CONSULTATIONS OFFERED IN: ENGLISH / ARABIC / FRENCH
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF2FA] rounded-2xl p-8 sm:p-10 border border-purple-900/10 shadow-xs relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#522578] text-white flex items-center justify-center mb-6 shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-sans font-normal text-[#522578] tracking-wide mb-3">Discovery Meeting Booked</h3>
                    <p className="text-gray-600 font-light text-sm max-w-sm leading-relaxed mb-6">
                      Your inquiry has been received. An Anisha design strategist will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 border border-[#522578] text-[#522578] text-xs font-semibold tracking-widest uppercase hover:bg-[#522578] hover:text-white transition-all cursor-pointer rounded-xs"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] tracking-widest text-[#522578] uppercase mb-2 font-semibold">FULL NAME *</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-white border border-gray-200 focus:border-[#522578] rounded-xl px-4 py-3.5 text-sm font-light text-gray-800 placeholder:text-gray-400 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[11px] tracking-widest text-[#522578] uppercase mb-2 font-semibold">BUSINESS EMAIL *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@brand.com"
                          className="w-full bg-white border border-gray-200 focus:border-[#522578] rounded-xl px-4 py-3.5 text-sm font-light text-gray-800 placeholder:text-gray-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] tracking-widest text-[#522578] uppercase mb-2 font-semibold">BRAND NAME</label>
                        <input
                          type="text"
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleChange}
                          placeholder="e.g. Maison de Parfum"
                          className="w-full bg-white border border-gray-200 focus:border-[#522578] rounded-xl px-4 py-3.5 text-sm font-light text-gray-800 placeholder:text-gray-400 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[11px] tracking-widest text-[#522578] uppercase mb-2 font-semibold">ESTIMATED BUDGET</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 focus:border-[#522578] rounded-xl px-4 py-3.5 text-sm font-light text-gray-800 focus:outline-none transition-colors cursor-pointer"
                        >
                          {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-widest text-[#522578] uppercase mb-2 font-semibold">PROJECT BRIEF / CUSTOM SPECS *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your perfume design requirements, target timeline, or custom cap selections..."
                        className="w-full bg-white border border-gray-200 focus:border-[#522578] rounded-xl px-4 py-3.5 text-sm font-light text-gray-800 placeholder:text-gray-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#522578] hover:bg-[#381656] text-white font-semibold text-xs tracking-widest uppercase rounded-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>SUBMITTING INQUIRY...</span>
                      ) : (
                        <>
                          <span>BOOK DISCOVERY MEETING</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

