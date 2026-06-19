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

  // Sync custom message from bottle configurator trigger
  useEffect(() => {
    if (customMessage) {
      setFormData((prev) => ({
        ...prev,
        message: customMessage,
      }));
      // Scroll to contact form smoothly
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

    // Simulate luxury API submission delay
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
      // Clear success banner after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-dark-bg border-t border-dark-border">
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gold-dark/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column: Office & Agency Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-gold-light uppercase mb-4">CONNECT WITH US</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight mb-6">
                Let&apos;s Design <br />
                Your <span className="font-serif italic font-normal gold-gradient-text">Signature Bottle</span>
              </h2>
              <p className="text-foreground/70 font-light text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                We partner with niche start-ups and established luxury houses to manufacture bespoke fragrance creations. Schedule a private consultation at our Dubai South studio.
              </p>

              {/* Detail Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg glass-panel border border-gold-dark/15 flex items-center justify-center text-gold-light shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-light tracking-wider text-foreground/50 uppercase">STUDIO HEADQUARTERS</h4>
                    <p className="text-foreground/90 font-light text-sm mt-1 leading-relaxed">
                      Dubai South HQ, Building A4<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg glass-panel border border-gold-dark/15 flex items-center justify-center text-gold-light shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-light tracking-wider text-foreground/50 uppercase">GENERAL INQUIRIES</h4>
                    <p className="text-foreground/90 font-light text-sm mt-1">
                      inquiry@anisha.agency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg glass-panel border border-gold-dark/15 flex items-center justify-center text-gold-light shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-light tracking-wider text-foreground/50 uppercase">TELEPHONE</h4>
                    <p className="text-foreground/90 font-light text-sm mt-1">
                      +971 4 800 ANISHA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Language availability indicator */}
            <div className="mt-12 lg:mt-0 pt-6 border-t border-dark-border text-xxs tracking-widest text-foreground/40 font-light">
              CONSULTATIONS OFFERED IN: ENGLISH / العربية / FRANÇAIS
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-gold-light/10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold-dark/10 border border-gold-light/30 flex items-center justify-center text-gold-light mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-serif font-light tracking-wide mb-3">Inquiry Sent Elegantly</h3>
                    <p className="text-foreground/75 font-light text-sm max-w-sm leading-relaxed mb-6">
                      Your custom design configuration has been logged. An Anisha creative director will contact you via email within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-gold-dark/30 hover:border-gold-light text-xxs tracking-widest text-gold-light hover:bg-gold-light/5 transition-all cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
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
                      {/* Name */}
                      <div>
                        <label className="block text-xxs tracking-widest text-gold-light uppercase mb-2 font-light">FULL NAME *</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-dark-bg/60 border border-dark-border focus:border-gold-light focus:ring-1 focus:ring-gold-light rounded-xl px-4 py-3.5 text-sm font-light text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label className="block text-xxs tracking-widest text-gold-light uppercase mb-2 font-light">BUSINESS EMAIL *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@brand.com"
                          className="w-full bg-dark-bg/60 border border-dark-border focus:border-gold-light focus:ring-1 focus:ring-gold-light rounded-xl px-4 py-3.5 text-sm font-light text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Brand Name */}
                      <div>
                        <label className="block text-xxs tracking-widest text-gold-light uppercase mb-2 font-light">BRAND OR COMPANY NAME</label>
                        <input
                          type="text"
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleChange}
                          placeholder="e.g. Maison de Parfum"
                          className="w-full bg-dark-bg/60 border border-dark-border focus:border-gold-light focus:ring-1 focus:ring-gold-light rounded-xl px-4 py-3.5 text-sm font-light text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Estimated Budget */}
                      <div>
                        <label className="block text-xxs tracking-widest text-gold-light uppercase mb-2 font-light">ESTIMATED BUDGET RANGE</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-dark-bg/60 border border-dark-border focus:border-gold-light focus:ring-1 focus:ring-gold-light rounded-xl px-4 py-3.5 text-sm font-light text-foreground focus:outline-none transition-colors cursor-pointer appearance-none"
                        >
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-dark-surface text-foreground">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message / Details */}
                    <div>
                      <label className="block text-xxs tracking-widest text-gold-light uppercase mb-2 font-light">PROJECT BRIEF / CUSTOM SPECS *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your design vision, material specifications, or custom cap selections..."
                        className="w-full bg-dark-bg/60 border border-dark-border focus:border-gold-light focus:ring-1 focus:ring-gold-light rounded-xl px-4 py-3.5 text-sm font-light text-foreground placeholder:text-foreground/20 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl gold-gradient-bg text-dark-bg font-medium text-xs tracking-widest hover:brightness-110 shadow-lg shadow-gold-dark/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SUBMIT PROJECT BRIEF</span>
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
