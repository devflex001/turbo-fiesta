"use client";

import React from "react";
import { Compass, Sparkles, Flame, Sliders } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900 border border-gold-border rounded text-xs text-gold-main uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-main" />
              <span>Behind the Tech</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              A Company Built on Absolute Flexibility
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              BetFlexx was founded by <strong>Bett</strong> with a singular, overriding mission: to break the mold of rigid, overpriced technology agency contracts. 
              Traditional tech solutions lock you into inflexible architectures and permanent retainers. 
              We operate under the philosophy that digital systems must be as fluid as the businesses running them.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              By combining custom agile software development, cloud platform operations, and cyber security auditing under one flexible roof, 
              we adapt our workflows to match your active sprint priorities. Whether you need a code overhaul, system audit, or emergency hot patches, our engineers are calibrated to align.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <div className="p-2.5 h-10 w-10 shrink-0 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gold-main">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Client-Driven Scale</h4>
                  <p className="text-xs text-zinc-500 mt-1">SLA tiers and engineering bandwidth that stretch up or down based on your roadmap.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-10 w-10 shrink-0 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gold-main">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Bespoke Integration</h4>
                  <p className="text-xs text-zinc-500 mt-1">We don't force standard platforms. We build middleware that integrates your specific stack.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Glassmorphic DNA Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded p-6 sm:p-8 w-full max-w-[400px]">
              
              <div className="flex items-center gap-3.5 mb-6 border-b border-zinc-800 pb-4">
                <div className="p-2 bg-zinc-950 border border-zinc-850 text-gold-main rounded">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">FOUNDER INFO</h3>
                  <span className="text-[10px] text-zinc-500 font-mono">Bett // CEO</span>
                </div>
              </div>

              <div className="space-y-4 font-mono text-[11px] text-zinc-400">
                <div className="p-3 bg-zinc-950 rounded border border-zinc-850">
                  <span className="text-gold-main font-bold">// Philosophy</span>
                  <p className="text-zinc-350 mt-1">Flexibility is not a buzzword. It is the architectural standard. Every system must scale without locking the client into vendor traps.</p>
                </div>

                <div className="grid grid-cols-2 gap-3.5 text-center">
                  <div className="p-2.5 bg-zinc-950 rounded border border-zinc-850">
                    <span className="text-zinc-650 block text-[9px]">FOUNDED</span>
                    <span className="text-white font-bold text-xs">2023</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950 rounded border border-zinc-850">
                    <span className="text-zinc-650 block text-[9px]">CHANNELS</span>
                    <span className="text-white font-bold text-xs">Remote</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950 rounded border border-zinc-850">
                  <span className="text-gold-main block font-bold">// Tech Scope</span>
                  <p className="text-white mt-1">Web & Mobile Apps, Systems Integration, Cyber Auditing & Tech Support.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
