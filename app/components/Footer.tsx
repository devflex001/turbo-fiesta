"use client";

import React from "react";
import { Shield, Sparkles, Send, Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020205] border-t border-zinc-950/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#bd00ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#bd00ff] via-[#00f0ff] to-[#ff007a] p-[1.5px]">
                <div className="w-full h-full bg-[#020205] rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#00f0ff]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Bet<span className="bg-gradient-to-r from-[#00f0ff] to-[#bd00ff] bg-clip-text text-transparent">Flexx</span>
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              BetFlexx develops and operates web & mobile software solutions. Payments are collected online for software subscriptions, development services, digital products, and other technology solutions.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-zinc-600">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Inspired by founder Bett & Absolute Flexibility.</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">Solutions System</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#services" className="hover:text-[#00f0ff] transition-colors">Custom Development</a></li>
              <li><a href="#services" className="hover:text-[#bd00ff] transition-colors">Cyber Threat Audits</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Service Cost Configurator</a></li>
              <li><a href="#subscriptions" className="hover:text-white transition-colors">Support Subscriptions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">Secure Channels</h4>
            <ul className="space-y-2 text-xs text-zinc-500 font-mono">
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-[#ff007a]" />
                <span>support@betflexx.com</span>
              </li>
              <li><span>Remote Operations // remote@betflexx.com</span></li>
              <li className="text-[10px] text-zinc-600 mt-2">
                PCI Compliance Gate: AES-256 TLS Verified
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and trademark bottom info */}
        <div className="pt-8 border-t border-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} BetFlexx Technology Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Shield</a>
            <a href="#" className="hover:underline">Terms of Flex Contract</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
