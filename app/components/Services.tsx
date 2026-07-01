"use client";

import React, { useState } from "react";
import { Code, Globe, ShieldAlert, Cpu, Settings, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Software Development",
      shortDesc: "Bespoke SaaS architectures and high-performance applications designed specifically for your stack.",
      icon: Code,
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
    <section id="services" className="py-24 bg-[#0c0c0e] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold text-gold-main uppercase tracking-widest">Capabilities</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Flexible Engineering, Bulletproof Cyber Security
          </h2>
          <p className="text-zinc-400 text-sm">
            Whether you require a single code sprint, integration of multiple tools, or full-scale cyber auditing—our framework stretches to support your requirements.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-2.5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isSelected = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 border-gold-main text-white"
                      : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-gold-main" : "text-zinc-500"}`} />
                    <div>
                      <h3 className={`font-bold text-xs uppercase tracking-wider ${isSelected ? "text-gold-main" : "text-white"}`}>{service.title}</h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Content Screen */}
          <div className="lg:col-span-8">
            <div className="bg-[#0d0d0e] border border-zinc-800 rounded p-6 sm:p-8">
              
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-6">
                <ActiveIcon className="w-5 h-5 text-gold-main" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{services[activeTab].title}</h3>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {services[activeTab].detailedDesc}
                </p>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-zinc-400">
                        <Check className="w-4 h-4 text-gold-main shrink-0 mt-0.5" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-zinc-500">Need specific customisations? Use our calculator tool below.</span>
                  <button
                    onClick={() => {
                      const element = document.getElementById("calculator");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-gold-outline w-full sm:w-auto px-5 py-2.5 text-[10px] cursor-pointer flex items-center gap-1.5"
                  >
                    Configure Pricing Integration
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
