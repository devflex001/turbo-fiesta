"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, Cpu, HeartHandshake, Send } from "lucide-react";

export default function Subscriptions() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [paymentNotice, setPaymentNotice] = useState(false);

  const plans = [
    {
      name: "Startup Flex",
      desc: "Perfect for pre-revenue apps, static websites, and basic monitoring needs.",
      monthlyPrice: 19900,
      yearlyPrice: 16900,
      icon: HeartHandshake,
      features: [
        "Daily database & asset backups",
        "Community Slack & Email Support",
        "Next Business Day response time",
        "Monthly performance audits",
        "1-hour included code repairs/mo",
      ],
      cta: "Configure Startup Plan",
    },
    {
      name: "Growth Engine",
      desc: "For operational applications, high traffic ecommerce, and continuous scaling.",
      monthlyPrice: 49900,
      yearlyPrice: 41900,
      icon: Cpu,
      features: [
        "Real-time app error tracking alerts",
        "Dedicated Dev Standby (4h SLA)",
        "Automated dependency security patching",
        "5-hours included code features/mo",
        "API rate limit balancing controls",
        "SSL & custom DNS management",
      ],
      cta: "Configure Growth Engine",
    },
    {
      name: "Cyber Sentinel",
      desc: "Maximum security protocols, instant compliance tooling, and full support access.",
      monthlyPrice: 99900,
      yearlyPrice: 84900,
      icon: ShieldAlert,
      features: [
        "24/7 SIEM firewall threat tracking",
        "1-hour critical emergency response SLA",
        "SOC2/GDPR vulnerability sweeps",
        "Unlimited automated threat blockades",
        "15-hours included custom dev tasks/mo",
        "Dedicated staging server setup",
      ],
      cta: "Configure Cyber Sentinel",
    },
  ];

  const handlePaystackPress = () => {
    setPaymentNotice(true);
    setTimeout(() => {
      setPaymentNotice(false);
    }, 3000);
  };

  return (
    <section id="subscriptions" className="py-24 bg-[#0c0c0e] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Continuous Integration, Predictable Plans
          </h2>
          <p className="text-zinc-400 text-sm">
            Keep your software systems optimized and safe. Toggle billing models or scale support up/down. Cancel or modify anytime.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-6 flex justify-start">
            <div className="bg-zinc-950 p-1 rounded border border-zinc-850 inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === "monthly" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === "yearly" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Yearly (-15%)
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Alert Banner for Paystack */}
        <div className="p-6 rounded bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Payment Channels</h4>
            <p className="text-xs text-zinc-400">All fees are collected remotely using modern digital transaction networks.</p>
          </div>
          <div className="relative">
            <button
              onClick={handlePaystackPress}
              className="px-6 py-3 bg-white hover:bg-zinc-200 text-black rounded text-xs font-bold transition-colors cursor-pointer"
            >
              We accept Paystack payments
            </button>
            {paymentNotice && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] font-mono font-bold px-3 py-1 rounded shadow border border-zinc-700 whitespace-nowrap animate-bounce">
                Coming soon
              </span>
            )}
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
                className="relative flex flex-col justify-between rounded border border-zinc-850 p-6 sm:p-8 bg-zinc-900"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-white" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-zinc-500 min-h-[36px] leading-relaxed">
                    {plan.desc}
                  </p>

                  <div className="mt-6 mb-6 flex items-baseline">
                    <span className="text-2xl font-extrabold text-white">KSh {price.toLocaleString()}</span>
                    <span className="text-xs text-zinc-500 ml-1.5">KES / month</span>
                  </div>

                  <hr className="border-zinc-800 mb-6" />

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 text-xs text-zinc-400">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        <span className="leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button */}
                <div className="mt-8 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => {
                      const contactForm = document.getElementById("contact");
                      if (contactForm) contactForm.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-2.5 rounded text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
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
