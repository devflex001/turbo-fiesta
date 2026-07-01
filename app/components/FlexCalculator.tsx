"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function FlexCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "consultation",
    "logo_creation",
  ]);
  const [teamScale, setTeamScale] = useState(1);
  const [supportTier, setSupportTier] = useState<"standard" | "priority" | "mission_critical">("standard");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [showEstimateDetails, setShowEstimateDetails] = useState(false);

  // Scaled down, prioritized pricing
  const servicesList = [
    {
      id: "consultation",
      name: "Consultation Fee",
      description: "One-time technical architecture, system design review and milestone drafting.",
      setupPrice: 500,
      basePrice: 0,
    },
    {
      id: "logo_creation",
      name: "Logo Creation",
      description: "Complete modern branding identity package, source SVGs, and responsive logo formats.",
      setupPrice: 1500,
      basePrice: 0,
    },
    {
      id: "web_app",
      name: "Custom Web Application",
      description: "Agile developer sprint delivering an optimized Next.js static or dynamic web platform.",
      setupPrice: 35000,
      basePrice: 8000,
    },
    {
      id: "mobile_app",
      name: "Mobile App Development",
      description: "Cross-platform iOS & Android setup built in React Native with standard digital push features.",
      setupPrice: 50000,
      basePrice: 12000,
    },
    {
      id: "cyber_audit",
      name: "Cyber Security Sweep",
      description: "Full network vulnerability testing, cloud IAM audit, database sanitization and threat mapping report.",
      setupPrice: 15000,
      basePrice: 4000,
    },
    {
      id: "threat_monitoring",
      name: "SIEM Threat Monitoring",
      description: "Active server security logging, real-time firewall threat tracking, and automated bot ban rules.",
      setupPrice: 20000,
      basePrice: 6000,
    },
    {
      id: "devops_support",
      name: "DevOps & Server Support",
      description: "CI/CD server optimization, Docker setups, backup runs, and domain DNS configurations.",
      setupPrice: 8000,
      basePrice: 2000,
    },
    {
      id: "helpdesk",
      name: "App Management & Support",
      description: "Site optimization updates, basic copy changes, and system error logs monitoring.",
      setupPrice: 5000,
      basePrice: 3000,
    },
  ];

  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateCosts = () => {
    let setup = 0;
    let monthlyBase = 0;

    selectedServices.forEach((serviceId) => {
      const service = servicesList.find((s) => s.id === serviceId);
      if (service) {
        setup += service.setupPrice;
        monthlyBase += service.basePrice;
      }
    });

    // Crew Multipliers
    const crewMultiplier = 1 + (teamScale - 1) * 0.25;

    // SLA Multipliers
    let slaMultiplier = 1.0;
    if (supportTier === "priority") slaMultiplier = 1.3;
    if (supportTier === "mission_critical") slaMultiplier = 1.7;

    let monthly = monthlyBase * crewMultiplier * slaMultiplier;

    // Billing cycle annual deduction
    if (billingCycle === "yearly") {
      monthly = monthly * 0.85; // 15% discount
    }

    return {
      setup,
      monthly: Math.round(monthly),
    };
  };

  const { setup, monthly } = calculateCosts();

  return (
    <section id="calculator" className="py-24 bg-[#000000] border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold text-gold-main uppercase tracking-widest">Self Service Setup</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Flexible Service Configurator
          </h2>
          <p className="text-zinc-400 text-sm">
            No rigid, fixed-rate contracts. Customize your BetFlexx solutions by selecting exactly the digital assets and engineering capacity you require.
          </p>
        </div>

        {/* Configurator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Side Controls */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Select services */}
            <div className="bg-[#000000] border border-gold-border rounded-none p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-none bg-[#121212] border border-gold-border text-gold-main text-xs font-mono">01</span>
                Select Core Services
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesList.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleToggleService(service.id)}
                      className={`p-4 rounded-none border transition-all cursor-pointer select-none flex flex-col justify-between ${
                        isChecked
                          ? "bg-[#121212] border-gold-main"
                          : "bg-[#000000] border-gold-border/20 hover:border-gold-border hover:bg-[#121212]/30"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-bold text-xs uppercase tracking-wider ${isChecked ? "text-gold-main" : "text-white"}`}>{service.name}</span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}} // handled by div click
                            className="w-4 h-4 rounded-none accent-gold-main"
                          />
                        </div>
                        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{service.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-gold-border/50 pt-3 mt-4 text-[10px]">
                        <span className="text-zinc-500">Setup: <strong className="text-zinc-300">KSh {service.setupPrice.toLocaleString()}</strong></span>
                        <span className="text-zinc-500">Sub: <strong className="text-white">KSh {service.basePrice.toLocaleString()}/mo</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dedicated resources & SLA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Dedicated resource scale */}
              <div className="bg-[#000000] border border-gold-border rounded-none p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-none bg-[#121212] border border-gold-border text-gold-main text-xs font-mono">02</span>
                    Scale Dedicated Crew
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6">
                    Adjust the number of developers/operators dedicated to your systems.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Team Size: <strong>{teamScale} Support Crew</strong></span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={teamScale}
                    onChange={(e) => setTeamScale(Number(e.target.value))}
                    className="w-full h-1 bg-[#121212] border border-gold-border rounded-none appearance-none cursor-pointer accent-gold-main"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-650 font-mono">
                    <span>1 (Shared)</span>
                    <span>3 (Standby)</span>
                    <span>5 (Dedicated SLA)</span>
                  </div>
                </div>
              </div>

              {/* Service Level Agreement */}
              <div className="bg-[#000000] border border-gold-border rounded-none p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-none bg-[#121212] border border-gold-border text-gold-main text-xs font-mono">03</span>
                    Support & SLA Tier
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6">
                    Select response window guarantees for system tasks.
                  </p>
                </div>

                <div className="space-y-2">
                  {[
                    { id: "standard", name: "Standard (24h response)", desc: "Next business day support responses" },
                    { id: "priority", name: "Priority (4h response)", desc: "Priority support slot queue and monitoring" },
                    { id: "mission_critical", name: "Mission Critical (1h response)", desc: "Emergency hotline + direct phone routing" }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSupportTier(tier.id as any)}
                      className={`w-full text-left p-2.5 rounded-none border transition-all text-xs flex items-center justify-between cursor-pointer ${
                        supportTier === tier.id
                          ? "bg-[#121212] border-gold-main text-white"
                          : "bg-[#000000] border-gold-border/20 text-zinc-450 hover:border-gold-border hover:bg-[#121212]/30"
                      }`}
                    >
                      <div>
                        <div className={`font-bold ${supportTier === tier.id ? "text-gold-main" : "text-white"}`}>{tier.name}</div>
                        <div className="text-[10px] text-zinc-550 mt-0.5">{tier.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Pricing Calculation Display */}
          <div className="lg:col-span-4 flex">
            <div className="bg-[#000000] border border-gold-border rounded-none p-6 flex flex-col justify-between w-full relative overflow-hidden">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest">Scope Estimate</h3>
                  <p className="text-[11px] text-zinc-555 mt-1">Calculated based on your selection.</p>
                </div>

                {/* Billing Toggles */}
                <div className="bg-zinc-950 p-1 rounded-none flex border border-gold-border">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`flex-grow text-center py-1.5 rounded-none text-xs font-bold transition-all cursor-pointer ${
                      billingCycle === "monthly" ? "bg-[#121212] text-gold-main shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`flex-grow text-center py-1.5 rounded-none text-xs font-bold transition-all cursor-pointer relative ${
                      billingCycle === "yearly" ? "bg-[#121212] text-gold-main shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Yearly
                    <span className="absolute -top-2 -right-1 bg-gold-dark text-black text-[7px] px-1 py-0.5 rounded-none font-bold scale-90">
                      -15%
                    </span>
                  </button>
                </div>

                {/* Setup Cost (One-time) */}
                <div className="border-b border-gold-border pb-4">
                  <span className="text-[10px] text-zinc-550 block uppercase tracking-wider font-semibold">One-time Setup Cost</span>
                  <div className="flex items-baseline mt-1">
                    <span className="text-xl font-bold text-white">KSh {setup.toLocaleString()}</span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-mono text-[10px]">KES</span>
                  </div>
                </div>

                {/* Subscription Cost (Monthly / Yearly) */}
                <div className="border-b border-gold-border pb-4">
                  <span className="text-[10px] text-zinc-555 block uppercase tracking-wider font-semibold">
                    {billingCycle === "monthly" ? "Monthly Subscription" : "Subscription (billed yearly)"}
                  </span>
                  <div className="flex items-baseline mt-1">
                    <span className="text-2xl font-extrabold text-gold-main">
                      KSh {monthly.toLocaleString()}
                    </span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-mono text-[10px]">
                      KES / mo
                    </span>
                  </div>
                </div>

                {/* Estimate details toggle */}
                <div>
                  <button
                    onClick={() => setShowEstimateDetails(!showEstimateDetails)}
                    className="text-[11px] text-zinc-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    {showEstimateDetails ? "Hide breakdown" : "Show breakdown"}
                  </button>
                  {showEstimateDetails && (
                    <div className="mt-3 bg-zinc-950 border border-gold-border rounded-none p-3 text-[10px] text-zinc-500 space-y-1.5 max-h-40 overflow-y-auto font-mono">
                      <div className="flex justify-between">
                        <span>Items:</span>
                        <span className="text-zinc-300 text-right truncate max-w-[150px]">
                          {selectedServices.map(id => servicesList.find(s => s.id === id)?.name).join(", ")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>SLA:</span>
                        <span className="text-zinc-300">{supportTier === "standard" ? "1.0x" : supportTier === "priority" ? "1.3x" : "1.7x"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Crew:</span>
                        <span className="text-zinc-300">{teamScale} members</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Consultation / Checkout mockup CTA */}
              <div className="pt-6 mt-6 border-t border-gold-border space-y-3">
                <button
                  onClick={() => {
                    const contactForm = document.getElementById("contact");
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="btn-gold-solid w-full py-3.5 text-[10px] cursor-pointer flex items-center gap-1.5"
                >
                  Book Configured Proposal
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex justify-center items-center gap-1.5 text-[10px] text-zinc-555">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-main" />
                  <span>Configuration specifications will be compiled</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
