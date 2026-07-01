"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, Cpu, HeartHandshake, Sparkles, Send } from "lucide-react";

export default function Subscriptions() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Startup Flex",
      desc: "Perfect for pre-revenue apps, static websites, and basic monitoring needs.",
      monthlyPrice: 199,
      yearlyPrice: 169,
      icon: HeartHandshake,
      color: "from-zinc-900 to-zinc-950 border-zinc-800",
      glowColor: "rgba(255,255,255,0.02)",
      textColor: "text-zinc-400",
      features: [
        "Daily database & asset backups",
        "Community Slack & Email Support",
        "Next Business Day response time",
        "Monthly performance audits",
        "1-hour included code repairs/mo",
      ],
      cta: "Deploy Startup Plan",
      popular: false,
    },
    {
      name: "Growth Engine",
      desc: "For operational applications, high traffic ecommerce, and continuous scaling.",
      monthlyPrice: 499,
      yearlyPrice: 419,
      icon: Cpu,
      color: "from-[#bd00ff]/10 via-[#090915] to-[#020205] border-[#bd00ff]/30",
      glowColor: "rgba(189,0,255,0.1)",
      textColor: "text-[#bd00ff]",
      features: [
        "Real-time app error tracking alerts",
        "Dedicated Dev Standby (4h SLA)",
        "Automated dependency security patching",
        "5-hours included code features/mo",
        "API rate limit balancing controls",
        "SSL & custom DNS management",
      ],
      cta: "Launch Growth Engine",
      popular: true,
    },
    {
      name: "Cyber Sentinel",
      desc: "Maximum security protocols, instant compliance tooling, and full support access.",
      monthlyPrice: 999,
      yearlyPrice: 849,
      icon: ShieldAlert,
      color: "from-[#00f0ff]/10 via-[#090915] to-[#020205] border-[#00f0ff]/30",
      glowColor: "rgba(0,240,255,0.1)",
      textColor: "text-[#00f0ff]",
      features: [
        "24/7 SIEM firewall threat tracking",
        "1-hour critical emergency response SLA",
        "SOC2/GDPR vulnerability sweeps",
        "Unlimited automated threat blockades",
        "15-hours included custom dev tasks/mo",
        "Direct Hotline routing to founder (Bett)",
        "Dedicated staging server setup",
      ],
      cta: "Engage Cyber Sentinel",
      popular: false,
    },
  ];

  return (
    <section id="subscriptions" className="py-24 relative overflow-hidden bg-[#030309] border-t border-zinc-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bd00ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-[#bd00ff] uppercase mb-3">Flexible Billing Models</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Continuous Integration, Predictable Plans
          </p>
          <p className="text-zinc-500 mt-4 text-sm sm:text-base">
            Keep your software system optimized and safe. Toggle billing models or scale support up/down. Cancel or modify anytime.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="bg-zinc-950 p-1 rounded-full border border-zinc-900 inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === "monthly" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === "yearly" ? "bg-zinc-900 text-[#00f0ff]" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Annual Save 15%
                <span className="bg-[#bd00ff]/20 text-[#bd00ff] text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">
                  Best Value
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 bg-gradient-to-b transition-all duration-300 ${
                  plan.popular ? "shadow-[0_0_30px_rgba(189,0,255,0.05)] scale-102" : ""
                } ${plan.color}`}
                style={{
                  boxShadow: `0 10px 40px -10px ${plan.glowColor}`,
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#bd00ff] to-[#00f0ff] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" /> Highly Flexible
                  </div>
                )}

                {/* Plan Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 ${plan.textColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-zinc-500 min-h-[36px] leading-relaxed">
                    {plan.desc}
                  </p>

                  <div className="mt-6 mb-6 flex items-baseline">
                    <span className="text-4xl font-extrabold text-white">${price}</span>
                    <span className="text-xs text-zinc-500 ml-1.5">USD / month</span>
                  </div>

                  <hr className="border-zinc-900 mb-6" />

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 text-xs text-zinc-400">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#39ff14] shrink-0 mt-0.5" />
                        <span className="leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button */}
                <div className="mt-8 pt-4 border-t border-zinc-900/50">
                  <button
                    onClick={() => {
                      const contactForm = document.getElementById("contact");
                      if (contactForm) contactForm.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#bd00ff] to-[#00f0ff] text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                        : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    {plan.cta}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
