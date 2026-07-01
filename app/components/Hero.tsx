"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-16 bg-[#030303] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03)_0%,transparent_60%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Centered Premium Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#0d0d0e] border border-gold-border text-xs font-semibold tracking-wider text-gold-main uppercase">
            <span>Flexible Cyber & Tech Integrations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Flexible Software &{" "}
            <span className="text-gold-gradient">
              Tech Solutions
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-400 leading-relaxed">
            BetFlexx develops, operates, and integrates software solutions tailored to individuals and businesses. 
            Calibrated for scope agility, budget efficiency, and reliable deployment support.
          </p>

          {/* Action button */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => scrollToSection("calculator")}
              className="btn-gold-solid px-8 py-4 text-[10px] cursor-pointer flex items-center gap-2 group"
            >
              Configure Custom Solution
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
