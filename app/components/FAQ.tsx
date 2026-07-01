"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What does the name 'BetFlexx' stand for?",
      answer: "Our name is inspired by two core pillars: the founder whose first name is Bett, and the Flexibility of the business model. Enabling absolute scope adjustment for our clients is our main objective."
    },
    {
      question: "How do you handle software billing subscriptions and setup fees?",
      answer: "We collect online payments securely. Projects with large custom features require a one-time setup fee for environment setup and architecture planning, followed by modular monthly or yearly subscriptions matching the support bandwidth and cyber security shields you configured."
    },
    {
      question: "Can we adjust our standby developer/analyst count after launching?",
      answer: "Yes, absolutely! That is the core of our flexibility objective. You can scale down or pause standby hours during slower development cycles, and trigger scale-ups during big launches or compliance sweeps via your Client Portal Dashboard."
    },
    {
      question: "What kind of cyber services and audits do you provide?",
      answer: "Our cyber division performs vulnerability assessments, SSL integrations, penetrations simulations, database access key reviews, and SQL injection prevention. We provide full reports and actively patch issues."
    },
    {
      question: "How does remote, project-based delivery work?",
      answer: "We operate 100% digitally through modern channels. We keep you aligned via our custom Client Portal dashboard, where you can watch milestones live, track server health, and open technical tickets for our support team."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#030309] border-t border-zinc-900">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-[#00f0ff] uppercase tracking-wider font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-500 mt-2 text-sm sm:text-base">Everything you need to know about our flexible development and cyber operations.</p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="cyber-card rounded-xl overflow-hidden border border-zinc-900 bg-[#090915]/50"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#00f0ff] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#bd00ff] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-zinc-950/50" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm text-zinc-400 leading-relaxed bg-[#04040a]/40">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
