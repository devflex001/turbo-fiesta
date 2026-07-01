"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function RecentProjects() {
  const projects = [
    {
      title: "DukaFlow E-commerce",
      category: "Integration & Web Dev",
      description: "Custom storefront architecture with deep Paystack checkout configurations and automated M-PESA payment confirmations.",
      deliverables: ["Next.js frontend", "Paystack webhooks setup", "Automatic invoice mailing"],
      status: "Active Maintenance"
    },
    {
      title: "Salama Health Registry",
      category: "Database & Security",
      description: "Vulnerability audit and database encryption deployment for a private clinic platform in Nairobi, keeping patient data secure.",
      deliverables: ["SQL injection hardening", "SSL verification", "SMS alert system"],
      status: "Shipped & Audited"
    },
    {
      title: "SokoLink SMS Gateway",
      category: "Systems Integration",
      description: "Middleware service connecting legacy inventory management systems to remote SMS delivery providers for real-time stock notifications.",
      deliverables: ["Custom node client", "API gateway routing", "Daily backup script"],
      status: "Completed Sprint"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#000000] border-t border-gold-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-gold-main uppercase tracking-widest">Our Work</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Recent Integrations & Deliveries
          </h2>
          <p className="text-zinc-400 text-sm">
            We write clean code, setup robust middleware, and secure active production environments. Review a subset of systems designed and supported by Bett's team.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#000000] border border-gold-border p-6 rounded-none flex flex-col justify-between hover:shadow-[0_0_20px_rgba(213,169,60,0.08)] transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-gold-main uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-1 group-hover:text-gold-main transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-gold-border/40 text-[9px] font-mono text-zinc-400 uppercase">
                    <CheckCircle2 className="w-2.5 h-2.5 text-gold-main" />
                    {project.status}
                  </span>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                  {project.description}
                </p>

                <hr className="border-gold-border/30 mb-5" />

                <ul className="space-y-2 text-xs text-zinc-400">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold-main shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gold-border/20 flex justify-end">
                <button
                  onClick={() => {
                    const contactForm = document.getElementById("contact");
                    if (contactForm) contactForm.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[10px] font-bold text-gold-main uppercase tracking-widest flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  Request Similar Build
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
