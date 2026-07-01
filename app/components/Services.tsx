"use client";

import React, { useState } from "react";
import { Code, Globe, Server, Settings, ShieldAlert, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Software Development",
      shortDesc: "Bespoke SaaS architectures and high-performance applications designed specifically for your stack.",
      icon: Code,
      color: "from-[#bd00ff] to-[#7b2cbf]",
      glowColor: "rgba(189,0,255,0.15)",
      textColor: "text-[#bd00ff]",
      features: [
        "React, Next.js, and Node.js custom engineering",
        "Robust REST & GraphQL API creation",
        "Cloud-native, scalable serverless patterns",
        "Modern databases (PostgreSQL, MongoDB, Redis)",
      ],
      detailedDesc: "We craft tailor-made code solutions designed to solve specific bottlenecks. Our development process follows agile methodology, allowing seamless scale adjustments as your budget or operations shift.",
    },
    {
      title: "Digital Platforms & Products",
      shortDesc: "E-Commerce suites, content delivery engines, and dashboard analytics platforms to monetize your assets.",
      icon: Globe,
      color: "from-[#00f0ff] to-[#00b4d8]",
      glowColor: "rgba(0,240,255,0.15)",
      textColor: "text-[#00f0ff]",
      features: [
        "Headless commerce configurations (Shopify, Stripe)",
        "Rich UI/UX styling tailored for conversions",
        "Real-time analytics & multi-tenant architectures",
        "High-performance SEO optimization out of the box",
      ],
      detailedDesc: "Convert site visitors into repeat buyers. We build custom-integrated dashboards, billing gates, and scalable merchant platforms with automated subscription collection mechanisms.",
    },
    {
      title: "Cyber Security & Auditing",
      shortDesc: "Comprehensive vulnerability scanning, penetration testing, and code audits to safeguard your operations.",
      icon: ShieldAlert,
      color: "from-[#ff007a] to-[#c2005f]",
      glowColor: "rgba(255,0,122,0.15)",
      textColor: "text-[#ff007a]",
      features: [
        "Full application security audits and report compilation",
        "Penetration testing & system stress simulations",
        "Automated continuous patching pipelines",
        "Compliance preparedness (GDPR, SOC2, HIPAA)",
      ],
      detailedDesc: "Protect your intellectual property and customer databases. Our cybr intelligence division conducts deep-dive security sweeps, identifies threat vectors, and installs automated threat blocking systems.",
    },
    {
      title: "System Integration",
      shortDesc: "Connect fragmented pipelines. Sync CRMs, payment gateways, and databases into one source of truth.",
      icon: Cpu,
      color: "from-[#39ff14] to-[#1eb300]",
      glowColor: "rgba(57,255,20,0.15)",
      textColor: "text-[#39ff14]",
      features: [
        "Legacy system migrations with zero downtime",
        "Multi-platform data synching (Salesforce, HubSpot, Stripe)",
        "Custom webhook layers and event brokers",
        "Automated ETL data warehouse processing",
      ],
      detailedDesc: "Eliminate repetitive manual data entries. BetFlexx designs and deploys custom middleware solutions that translate, format, and push data instantly across your enterprise's toolchain.",
    },
    {
      title: "Support & App Management",
      shortDesc: "Ongoing maintenance, site optimization, emergency response, and continuous deployment management.",
      icon: Settings,
      color: "from-[#ffb703] to-[#fb8500]",
      glowColor: "rgba(255,183,3,0.15)",
      textColor: "text-[#ffb703]",
      features: [
        "24/7/365 system health & uptime monitoring",
        "Regular software patches & dependency updates",
        "Immediate response service level agreements (SLAs)",
        "DevOps cloud management (AWS, GCP, Vercel)",
      ],
      detailedDesc: "Rest easy knowing certified experts are managing your systems. We monitor, load-balance, and patch your active production setups so you can focus entirely on scaling your core services.",
    },
  ];

  const ActiveIcon = services[activeTab].icon;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030309] border-t border-zinc-900">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-[#00f0ff] uppercase mb-3">Enterprise Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Engineering, Bulletproof Cyber Security
          </p>
          <p className="text-zinc-500 mt-4 text-base sm:text-lg">
            Whether you require a single code sprint, integration of multiple tools, or full-scale cyber auditing—our framework stretches to support your requirements.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isSelected = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/80 border-[#bd00ff]/40 shadow-[0_0_15px_rgba(189,0,255,0.1)] text-white"
                      : "bg-transparent border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-zinc-950/60 border ${isSelected ? "border-[#00f0ff]/40 text-[#00f0ff]" : "border-zinc-850 text-zinc-500"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm tracking-wide">{service.title}</h3>
                    <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">{service.shortDesc}</p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "translate-x-1 text-[#00f0ff]" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Details Content Screen */}
          <div className="lg:col-span-8">
            <div
              className="cyber-card rounded-2xl p-6 sm:p-10 relative overflow-hidden transition-all duration-500"
              style={{
                boxShadow: `0 10px 40px -10px ${services[activeTab].glowColor}`,
              }}
            >
              {/* Subtle design element */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${services[activeTab].color} opacity-10 blur-xl pointer-events-none`} />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 ${services[activeTab].textColor}`}>
                    <ActiveIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{services[activeTab].title}</h3>
                    <p className="text-xs text-[#00f0ff] uppercase tracking-wider font-semibold mt-0.5">Flexible Scope Tier</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {services[activeTab].detailedDesc}
                </p>

                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Key Features & Subservices</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {services[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${services[activeTab].textColor}`} />
                        <span className="text-xs sm:text-sm text-zinc-400 leading-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500">Need specific customisations? Use our calculator tool below.</span>
                  <button
                    onClick={() => {
                      const element = document.getElementById("calculator");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Calculate System Integration Costs
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
