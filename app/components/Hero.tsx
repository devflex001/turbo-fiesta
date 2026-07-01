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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Simple Centered Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-semibold tracking-wider text-zinc-300">
            <span>Flexible Cyber & Tech Integrations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Flexible Software & Advanced Technology Solutions
          </h1>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 leading-relaxed">
            BetFlexx develops, operates, and integrates software solutions tailored to individuals and businesses. 
            Calibrated for scope agility, budget efficiency, and reliable deployment support.
          </p>

          {/* Action buttons */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => scrollToSection("calculator")}
              className="w-full sm:w-auto px-6 py-3 rounded text-xs font-bold text-black bg-white hover:bg-zinc-200 transition-all cursor-pointer flex items-center justify-center gap-1.5 group"
            >
              Configure Solution
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Simple Metrics list */}
          <div className="pt-12 mt-12 border-t border-zinc-900 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white">99.9%</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Uptime SLA</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white">100%</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Flexible Scope</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white">24/7</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Remote Support</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
