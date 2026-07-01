"use client";

import React from "react";
import { Compass, Sparkles, Flame, Sliders } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020205] border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#bd00ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-[#00f0ff] uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Behind the Tech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Company Built on{" "}
              <span className="bg-gradient-to-r from-[#bd00ff] to-[#ff007a] bg-clip-text text-transparent">
                Absolute Flexibility
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              BetFlexx was founded by <strong>Bett</strong> with a singular, overriding mission: to break the mold of rigid, overpriced technology agency contracts. 
              Traditional tech solutions lock you into inflexible architectures and permanent retainers. 
              We operate under the philosophy that digital systems must be as fluid as the businesses running them.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              By combining custom agile software development, cloud platform operations, and cyber security auditing under one flexible roof, 
              we adapt our workflows to match your active sprint priorities. Whether you need a code overhaul, system audit, or emergency hot patches, our engineers are calibrated to align.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <div className="p-2.5 h-10 w-10 shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#bd00ff]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Client-Driven Scale</h4>
                  <p className="text-xs text-zinc-500 mt-1">SLA tiers and engineering bandwidth that stretch up or down based on your roadmap.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-10 w-10 shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#00f0ff]">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Bespoke Integration</h4>
                  <p className="text-xs text-zinc-500 mt-1">We don't force standard platforms. We build middleware that integrates your specific stack.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Glassmorphic DNA Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="cyber-card rounded-2xl p-6 sm:p-8 w-full max-w-[400px] border-[#bd00ff]/20 bg-[#090915] relative overflow-hidden">
              {/* Decorative vertical scanner grid */}
              <div className="absolute inset-y-0 right-4 w-[1px] bg-gradient-to-b from-[#bd00ff] via-[#00f0ff] to-transparent opacity-20" />
              
              <div className="flex items-center gap-3.5 mb-6 border-b border-zinc-900 pb-4">
                <div className="p-2 bg-[#bd00ff]/10 border border-[#bd00ff]/30 text-[#bd00ff] rounded-lg">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">FOUNDER METADATA</h3>
                  <span className="text-[10px] text-zinc-500 font-mono">Bett // CEO & Principal Architect</span>
                </div>
              </div>

              <div className="space-y-4 font-mono text-[11px] text-zinc-400">
                <div className="p-2.5 bg-black/40 border border-zinc-950 rounded">
                  <span className="text-zinc-500">// Business Objective</span>
                  <p className="text-white mt-1">Flexibility is not a buzzword. It is the architectural standard. Every system must scale without locking the client into vendor traps.</p>
                </div>

                <div className="grid grid-cols-2 gap-3.5 text-center">
                  <div className="p-2.5 bg-black/40 border border-zinc-950 rounded">
                    <span className="text-zinc-500 block">FOUNDED</span>
                    <span className="text-white font-bold text-xs">2023</span>
                  </div>
                  <div className="p-2.5 bg-black/40 border border-zinc-950 rounded">
                    <span className="text-zinc-500 block">CHANNELS</span>
                    <span className="text-white font-bold text-xs">100% Remote</span>
                  </div>
                </div>

                <div className="p-2.5 bg-black/40 border border-zinc-950 rounded">
                  <span className="text-zinc-500">// Tech Scope</span>
                  <p className="text-[#00f0ff] mt-0.5 font-bold">Web & Mobile Apps, Systems Integration, Cyber Auditing & Incident Support.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
