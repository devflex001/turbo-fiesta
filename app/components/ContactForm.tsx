"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Shield, Activity, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [scope, setScope] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("flexible");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesOption = [
    { id: "web_dev", label: "Web Development" },
    { id: "mobile_app", label: "Mobile Apps" },
    { id: "sec_audit", label: "Cyber Security Sweep" },
    { id: "integration", label: "System Integration" },
    { id: "support_ops", label: "App Management" }
  ];

  const handleScopeToggle = (id: string) => {
    if (scope.includes(id)) {
      setScope(scope.filter((item) => item !== id));
    } else {
      setScope([...scope, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !details) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020205] border-t border-zinc-900">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-[#bd00ff] uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation Planner</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Initiate Your Flex Contract</h2>
          <p className="text-zinc-500 mt-2 text-sm sm:text-base">Tell us about your pipeline. We'll map a flexible resource budget that adapts to you.</p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left instructions block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="cyber-card rounded-xl p-5 border-[#bd00ff]/20 bg-[#090915]/50">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contract Guarantees</h3>
              
              <ul className="space-y-4 text-xs text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#00f0ff] shrink-0" />
                  <span>No locked permanent scopes—scale bandwidth as goals change.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#bd00ff] shrink-0" />
                  <span>Comprehensive security audits bundled with code milestones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#39ff14] shrink-0" />
                  <span>100% remote workspace integration via our custom Slack/Portal.</span>
                </li>
              </ul>
            </div>

            <div className="cyber-card rounded-xl p-5 border-zinc-900 bg-[#090915]/30 flex items-center gap-4">
              <Activity className="w-8 h-8 text-[#00f0ff] shrink-0 animate-pulse" />
              <div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">Average Response Time</h4>
                <p className="text-xs text-zinc-500 mt-0.5">Bett's architecture committee reviews and responds in &lt; 4 hours.</p>
              </div>
            </div>
          </div>

          {/* Right Form panel */}
          <div className="lg:col-span-8">
            <div className="cyber-card rounded-xl p-6 sm:p-8">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#bd00ff]/10 border border-[#bd00ff] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#00f0ff]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Project Draft Received</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{name}</strong>. Bett and our technical integration committee have received your system specifications. We will trace back to <strong className="text-white">{email}</strong> shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Bett Founder"
                        className="w-full px-3.5 py-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="bett@betflexx.com"
                        className="w-full px-3.5 py-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Company / Project Name</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="BetFlexx Tech"
                      className="w-full px-3.5 py-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff]"
                    />
                  </div>

                  {/* Project scope selectors */}
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-2.5">What needs integration? (Select all that apply)</label>
                    <div className="flex flex-wrap gap-2">
                      {servicesOption.map((option) => {
                        const isSelected = scope.includes(option.id);
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleScopeToggle(option.id)}
                            className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#bd00ff]/10 border-[#bd00ff] text-[#bd00ff]"
                                : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:border-zinc-800"
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-2.5">Approximate Project Budget Range</label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: "flexible", label: "Flexible Retainer" },
                        { id: "mid", label: "$5K - $15K Setup" },
                        { id: "high", label: "$15K+ Custom Build" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setBudget(item.id)}
                          className={`py-2.5 rounded-lg text-[10px] font-bold border cursor-pointer ${
                            budget === item.id
                              ? "bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff]"
                              : "bg-zinc-950/40 border-zinc-900 text-zinc-500"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Integration Specifications *</label>
                    <textarea
                      required
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Outline your application endpoints, traffic projections, or cyber audit scope request here..."
                      className="w-full px-3.5 py-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#bd00ff] via-[#7b2cbf] to-[#00f0ff] hover:shadow-[0_0_20px_rgba(189,0,255,0.3)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Synchronizing pipeline data...
                      </>
                    ) : (
                      <>
                        Request Custom Proposal
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
