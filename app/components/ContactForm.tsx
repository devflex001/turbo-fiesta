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
    <section id="contact" className="py-24 bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-bold text-gold-main uppercase tracking-widest">Inquiries</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Initiate Your Flex Contract</h2>
          <p className="text-zinc-400 text-xs sm:text-sm">Tell us about your pipeline. We'll map a flexible resource budget that adapts to you.</p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left instructions block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded p-5">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contract Guarantees</h3>
              
              <ul className="space-y-4 text-xs text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-main shrink-0 mt-0.5" />
                  <span>No locked permanent scopes—scale bandwidth as goals change.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-main shrink-0 mt-0.5" />
                  <span>Comprehensive security audits bundled with code milestones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-main shrink-0 mt-0.5" />
                  <span>100% remote workspace integration via our custom Slack/Portal.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded p-5 flex items-center gap-4">
              <Activity className="w-6 h-6 text-gold-main shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">Average Response Time</h4>
                <p className="text-[11px] text-zinc-500 mt-0.5">Bett's team reviews and responds in &lt; 4 hours.</p>
              </div>
            </div>
          </div>

          {/* Right Form panel */}
          <div className="lg:col-span-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded p-6 sm:p-8">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full border border-gold-border flex items-center justify-center mx-auto text-gold-main">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">Project Draft Received</h3>
                    <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
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
                        placeholder="Name"
                        className="w-full px-3.5 py-3 rounded bg-zinc-950 border border-zinc-850 text-xs text-white focus:outline-none focus:border-gold-main"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-3 rounded bg-zinc-950 border border-zinc-850 text-xs text-white focus:outline-none focus:border-gold-main"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Company / Project Name</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company"
                      className="w-full px-3.5 py-3 rounded bg-zinc-950 border border-zinc-850 text-xs text-white focus:outline-none focus:border-gold-main"
                    />
                  </div>

                  {/* Project scope selectors */}
                  <div>
                    <label className="text-[10px] text-zinc-555 uppercase font-semibold block mb-2.5">What needs integration? (Select all that apply)</label>
                    <div className="flex flex-wrap gap-2">
                      {servicesOption.map((option) => {
                        const isSelected = scope.includes(option.id);
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleScopeToggle(option.id)}
                            className={`px-3 py-1.5 rounded text-xs font-semibold border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#13110d] border-gold-border text-gold-main"
                                : "bg-zinc-950 border-transparent text-zinc-500 hover:border-zinc-800"
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
                    <label className="text-[10px] text-zinc-555 uppercase font-semibold block mb-2.5">Approximate Project Budget Range</label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: "flexible", label: "Flexible Contract" },
                        { id: "mid", label: "KSh 500K - 1.5M Setup" },
                        { id: "high", label: "KSh 1.5M+ Custom Build" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setBudget(item.id)}
                          className={`py-2 rounded text-[10px] font-bold border cursor-pointer ${
                            budget === item.id
                              ? "bg-[#13110d] border-gold-border text-gold-main"
                              : "bg-zinc-950 border-transparent text-zinc-500"
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
                      className="w-full px-3.5 py-3 rounded bg-zinc-950 border border-zinc-850 text-xs text-white focus:outline-none focus:border-gold-main resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded text-xs font-bold text-black bg-gold-main hover:bg-[#b08e4b] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  > >
                    {isSubmitting ? (
                      <>Processing proposal details...</>
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
