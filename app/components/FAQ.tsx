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
    <section id="faq" className="py-24 bg-[#0c0c0e] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Support</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-400 mt-2 text-xs sm:text-sm">Everything you need to know about our flexible development and cyber operations.</p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-850 rounded overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-zinc-300 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-zinc-300 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-zinc-950/50" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="p-5 text-xs text-zinc-450 leading-relaxed bg-[#09090b]/50">
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
