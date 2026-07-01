"use client";

import React, { useState } from "react";
import { ShieldCheck, HelpCircle, Activity, HeartHandshake, ArrowRight, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: "dev" | "sec" | "support";
  basePrice: number;
  setupPrice: number;
  description: string;
}

export default function FlexCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["dev_web"]);
  const [teamScale, setTeamScale] = useState(2); // sliders
  const [supportTier, setSupportTier] = useState<"standard" | "priority" | "mission_critical">("priority");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [showEstimateDetails, setShowEstimateDetails] = useState(false);

  const servicesList: ServiceItem[] = [
    { id: "dev_web", name: "Custom Web Application", category: "dev", basePrice: 400, setupPrice: 3500, description: "Bespoke React/Next.js/Node frontend & serverless infrastructure." },
    { id: "dev_mobile", name: "Mobile App Development", category: "dev", basePrice: 600, setupPrice: 5000, description: "iOS & Android Cross-platform Flutter / React Native build." },
    { id: "sec_audit", name: "Cyber Auditing & Patching", category: "sec", basePrice: 250, setupPrice: 1500, description: "Vulnerability analysis, threat model reports, and code protection." },
    { id: "sec_siem", name: "24/7 Security Threat Monitoring", category: "sec", basePrice: 500, setupPrice: 2000, description: "Continuous firewall scanning, DDoS shield, logging alerts." },
    { id: "support_ops", name: "DevOps & Server Maintenance", category: "support", basePrice: 150, setupPrice: 800, description: "Database backups, memory scaling, domain & server optimization." },
    { id: "support_help", name: "Help Desk Support Service", category: "support", basePrice: 200, setupPrice: 500, description: "Technical assistance for content changes, bug fixes, and setup support." }
  ];

  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Pricing Logic
  const calculateCosts = () => {
    let oneTimeSetup = 0;
    let baseMonthly = 0;

    servicesList.forEach((s) => {
      if (selectedServices.includes(s.id)) {
        oneTimeSetup += s.setupPrice;
        baseMonthly += s.basePrice;
      }
    });

    // Support Tier Multipliers
    let supportMultiplier = 1.0;
    if (supportTier === "priority") supportMultiplier = 1.3;
    if (supportTier === "mission_critical") supportMultiplier = 1.7;

    // Team Scale Multiplier (e.g. number of dedicated devs/analysts on standby)
    const scaleMultiplier = 1.0 + (teamScale - 1) * 0.35;

    let finalMonthly = baseMonthly * supportMultiplier * scaleMultiplier;

    // Yearly discount
    if (billingCycle === "yearly") {
      finalMonthly = finalMonthly * 0.85; // 15% discount
    }

    return {
      setup: Math.round(oneTimeSetup),
      monthly: Math.round(finalMonthly)
    };
  };

  const { setup, monthly } = calculateCosts();

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-[#020205] border-t border-zinc-900">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#bd00ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#bd00ff]" />
            <span>Core Value: High Flexibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Service Configurator
          </h2>
          <p className="text-zinc-500 mt-4 text-sm sm:text-base">
            No rigid, overpriced flat-rate contracts. Customize your BetFlexx solutions by selecting exactly the digital assets, cyber shield strength, and engineering capacity you require.
          </p>
        </div>

        {/* Configurator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Select services */}
            <div className="cyber-card rounded-xl p-5 sm:p-6">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-[#bd00ff]/20 text-[#bd00ff] text-xs font-mono">01</span>
                Select Core Services
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesList.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleToggleService(service.id)}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between ${
                        isChecked
                          ? "bg-[#bd00ff]/5 border-[#bd00ff]/50 shadow-[0_0_10px_rgba(189,0,255,0.05)]"
                          : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-sm text-white">{service.name}</span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}} // handled by div click
                            className="w-4 h-4 rounded accent-[#bd00ff]"
                          />
                        </div>
                        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{service.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-zinc-900/50 pt-3 mt-4 text-[11px]">
                        <span className="text-zinc-500">Setup: <strong className="text-zinc-300">${service.setupPrice}</strong></span>
                        <span className="text-zinc-500">Sub: <strong className="text-[#bd00ff]">${service.basePrice}/mo</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dedicated resources & SLA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Dedicated resource scale */}
              <div className="cyber-card rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded bg-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono">02</span>
                    Scale Standby Engineers
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6">
                    Adjust the number of allocated developers/security operators dedicated to your systems.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Team Size: <strong>{teamScale} Dedicated Support Crew</strong></span>
                    <span className="text-[#00f0ff] font-bold">x{((1.0 + (teamScale - 1) * 0.35)).toFixed(2)} Multiplier</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={teamScale}
                    onChange={(e) => setTeamScale(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                    <span>1 (Shared Support)</span>
                    <span>3 (Highly Responsive)</span>
                    <span>5 (Full Enterprise SLA)</span>
                  </div>
                </div>
              </div>

              {/* Service Level Agreement */}
              <div className="cyber-card rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded bg-[#39ff14]/20 text-[#39ff14] text-xs font-mono">03</span>
                    Support & SLA Tier
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6">
                    Select response window severity guarantees for technical support and system failures.
                  </p>
                </div>

                <div className="space-y-2">
                  {[
                    { id: "standard", name: "Standard (24h response)", desc: "Next business day support responses" },
                    { id: "priority", name: "Priority (4h response)", desc: "Priority support slot queue and monitoring" },
                    { id: "mission_critical", name: "Mission Critical (1h response)", desc: "Emergency hotline + direct phone routing to Bett & senior tech crew" }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSupportTier(tier.id as any)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs flex items-center justify-between cursor-pointer ${
                        supportTier === tier.id
                          ? "bg-[#39ff14]/5 border-[#39ff14]/40 text-white"
                          : "bg-zinc-950/30 border-zinc-900 text-zinc-400 hover:border-zinc-800"
                      }`}
                    >
                      <div>
                        <div className="font-bold">{tier.name}</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">{tier.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Pricing Calculation Display */}
          <div className="lg:col-span-4 flex">
            <div className="cyber-card rounded-xl p-6 flex flex-col justify-between w-full border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.05)] relative overflow-hidden bg-gradient-to-b from-[#090915] to-[#04040a]">
              
              {/* Radial gradient background */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Solution Estimate</h3>
                  <p className="text-xs text-zinc-500 mt-1">Calculated dynamically based on your custom flex-scope.</p>
                </div>

                {/* Billing Toggles */}
                <div className="bg-zinc-950 p-1.5 rounded-lg flex border border-zinc-900">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`flex-1 text-center py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                      billingCycle === "monthly" ? "bg-zinc-900 text-[#00f0ff] shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Monthly billing
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`flex-1 text-center py-1.5 rounded text-xs font-bold transition-all cursor-pointer relative ${
                      billingCycle === "yearly" ? "bg-zinc-900 text-[#00f0ff] shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Annual billing
                    <span className="absolute -top-2.5 -right-1.5 bg-[#bd00ff] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider scale-90">
                      -15%
                    </span>
                  </button>
                </div>

                {/* Setup Cost (One-time) */}
                <div className="border-b border-zinc-900 pb-4">
                  <span className="text-xs text-zinc-500 block uppercase tracking-wider font-semibold">One-time Setup & Integration</span>
                  <div className="flex items-baseline mt-1">
                    <span className="text-2xl font-bold text-white">${setup.toLocaleString()}</span>
                    <span className="text-xs text-zinc-500 ml-1.5">USD</span>
                  </div>
                </div>

                {/* Subscription Cost (Monthly / Yearly) */}
                <div className="border-b border-zinc-900 pb-4">
                  <span className="text-xs text-zinc-500 block uppercase tracking-wider font-semibold">
                    {billingCycle === "monthly" ? "Monthly Subscription" : "Annual Plan Subscription"}
                  </span>
                  <div className="flex items-baseline mt-1">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-white via-zinc-100 to-[#00f0ff] bg-clip-text text-transparent text-glow-cyan">
                      ${monthly.toLocaleString()}
                    </span>
                    <span className="text-xs text-zinc-500 ml-1.5">
                      USD / {billingCycle === "monthly" ? "mo" : "mo, billed yearly"}
                    </span>
                  </div>
                </div>

                {/* Estimate details toggle */}
                <div>
                  <button
                    onClick={() => setShowEstimateDetails(!showEstimateDetails)}
                    className="text-xs text-[#00f0ff] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    {showEstimateDetails ? "Hide configurations breakdown" : "Show configurations breakdown"}
                  </button>
                  {showEstimateDetails && (
                    <div className="mt-3 bg-black/60 border border-zinc-900 rounded p-3 text-[10px] text-zinc-400 space-y-1.5 max-h-40 overflow-y-auto">
                      <div className="flex justify-between">
                        <span>Selected items ({selectedServices.length}):</span>
                        <span className="text-white">
                          {selectedServices.map(id => servicesList.find(s => s.id === id)?.name).join(", ")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>SLA multiplier:</span>
                        <span className="text-white">{supportTier === "standard" ? "1.0x" : supportTier === "priority" ? "1.3x" : "1.7x"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Standby resources:</span>
                        <span className="text-white">{teamScale} crew members</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contract Cycle discount:</span>
                        <span className="text-white">{billingCycle === "yearly" ? "15%" : "0%"}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Consultation / Checkout mockup CTA */}
              <div className="pt-6 mt-6 border-t border-zinc-900 space-y-3">
                <button
                  onClick={() => {
                    const contactForm = document.getElementById("contact");
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: "smooth" });
                      // Pre-fill setup or custom text if needed
                    }
                  }}
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-center text-[#020205] bg-[#00f0ff] hover:bg-[#00d0dd] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Book My Custom Integration
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex justify-center items-center gap-1.5 text-[10px] text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#39ff14]" />
                  <span>Configured details will be pre-loaded into request</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
