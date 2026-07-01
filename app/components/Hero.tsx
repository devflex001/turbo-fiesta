"use client";

import React from "react";
import { Terminal, Shield, Activity, ArrowRight, Cpu } from "lucide-react";

interface HeroProps {
  setShowPortal: (show: boolean) => void;
}

export default function Hero({ setShowPortal }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#bd00ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text panel */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
          <div className="inline-flex self-center lg:self-start items-center space-x-2 px-3 py-1.5 rounded-full bg-[#bd00ff]/10 border border-[#bd00ff]/30 text-xs font-semibold tracking-wider text-[#bd00ff] uppercase">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
            </span>
            <span>Flexible Cyber & Tech Integrations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building Highly{" "}
            <span className="bg-gradient-to-r from-[#00f0ff] via-[#9d4edd] to-[#bd00ff] bg-clip-text text-transparent text-glow-cyan">
              Flexible
            </span>{" "}
            Digital Infrastructure
          </h1>

          <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-zinc-400 leading-relaxed">
            BetFlexx constructs, manages, and secures cutting-edge web & mobile systems. 
            Tailored to your budget, scaled for your future, and engineered for absolute operational agility.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => scrollToSection("calculator")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#bd00ff] via-[#7b2cbf] to-[#00f0ff] hover:shadow-[0_0_30px_rgba(189,0,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
            >
              Configure Solution
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setShowPortal(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              Demo Client Portal
            </button>
          </div>

          {/* Stats widgets */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900 max-w-lg mx-auto lg:mx-0">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">99.9%</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Uptime SLA</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Flexible Scope</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#00f0ff]">Zero</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Security Breaches</p>
            </div>
          </div>
        </div>

        {/* Right side: Mock Cyber Dashboard/Visual */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center">
          <div className="relative w-full max-w-[450px] aspect-square rounded-2xl bg-gradient-to-br from-[#bd00ff]/20 to-[#00f0ff]/20 p-[1px] shadow-[0_0_50px_rgba(0,240,255,0.05)] overflow-hidden">
            <div className="w-full h-full bg-[#04040d]/90 rounded-2xl p-6 flex flex-col justify-between scanner relative">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-zinc-950 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-zinc-500 font-mono">betflexx_sec_daemon.sh</span>
              </div>

              {/* Terminal content */}
              <div className="flex-1 font-mono text-xs text-zinc-400 space-y-4 pt-4 overflow-y-auto">
                <div className="text-zinc-500 font-semibold">// INITIALIZING CYBER SHIELD FOR CLIENT_ID: BTX-8809</div>
                
                <div className="flex items-start space-x-2">
                  <Terminal className="w-4 h-4 text-[#bd00ff] shrink-0 mt-0.5" />
                  <span className="text-zinc-300">
                    $ betflexx --audit --verbose
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-[#00f0ff]">✔ SSL/TLS Integrity Check: PASSED</p>
                  <p className="text-[#00f0ff]">✔ SQL Injection Shield: ACTIVE</p>
                  <p className="text-yellow-400">⚠ Outdated packages detected in secondary API (Auto-patching...)</p>
                  <p className="text-white bg-[#bd00ff]/20 inline-block px-1">▶ DEPLOYING SECURE CONTAINER INSTANCE v4.2.1</p>
                </div>

                <div className="border border-zinc-900 rounded p-2.5 bg-black/45">
                  <div className="flex items-center justify-between text-[10px] text-zinc-500">
                    <span>CONTAINER MEMORY</span>
                    <span>42% UTILIZED</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-[#bd00ff] h-full rounded-full" style={{ width: "42%" }} />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-zinc-300">
                  <Activity className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
                  <span>Network Traffic: Balanced (4,120 req/m)</span>
                </div>
              </div>

              {/* Floating micro items */}
              <div className="absolute -top-3 -right-3 bg-zinc-950/80 border border-zinc-800 rounded-lg p-2 flex items-center gap-2 animate-float">
                <Shield className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-[10px] font-bold text-white">SHIELD ACTIVE</span>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-zinc-950/80 border border-zinc-800 rounded-lg p-2 flex items-center gap-2 animate-float" style={{ animationDelay: "2s" }}>
                <Cpu className="w-4 h-4 text-[#bd00ff]" />
                <span className="text-[10px] font-bold text-white">LATENCY: 12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
