"use client";

import React, { useState } from "react";
import {
  Activity,
  Send,
  PlusCircle,
  CreditCard,
  CheckCircle2,
  Clock,
  MessageSquare,
  AlertCircle
} from "lucide-react";

export default function ClientPortal() {
  const [activeSubTab, setActiveSubTab] = useState<"projects" | "tickets" | "billing">("projects");
  const [showPayNotice, setShowPayNotice] = useState(false);
  const [tickets, setTickets] = useState([
    { id: "TKT-104", subject: "Inject custom meta tags dynamically", status: "In Progress", date: "2026-06-28", priority: "High" },
    { id: "TKT-102", subject: "Optimize SQL performance query logs", status: "Resolved", date: "2026-06-25", priority: "Medium" }
  ]);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("Medium");

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketSubject.trim()) return;

    const newTicket = {
      id: `TKT-${Math.floor(100 + Math.random() * 900)}`,
      subject: newTicketSubject,
      status: "Open",
      date: new Date().toISOString().split("T")[0],
      priority: newTicketPriority
    };

    setTickets([newTicket, ...tickets]);
    setNewTicketSubject("");
  };

  const handleOpenPay = () => {
    setShowPayNotice(true);
    setTimeout(() => {
      setShowPayNotice(false);
    }, 3000);
  };

  return (
    <section id="portal" className="py-16 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-505 tracking-widest uppercase">Client Management Interface</span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">
              Client Portal Dashboard
            </h2>
            <p className="text-zinc-500 text-xs mt-1">
              Administrative workspace. Monitor integrations progress, stand-by crew, invoices, and file tickets.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded p-3">
            <div className="text-center px-4 border-r border-zinc-850">
              <span className="text-[9px] text-zinc-500 block uppercase tracking-wider">Plan Scope</span>
              <span className="text-xs font-bold text-white">Growth Support</span>
            </div>
            <div className="text-center px-4">
              <span className="text-[9px] text-[#ffb703] block uppercase tracking-wider font-semibold">Action Required</span>
              <span className="text-xs font-bold text-white">1 Unpaid Invoice</span>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-zinc-800 mb-8 space-x-1">
          {[
            { id: "projects", label: "Milestones & Health", icon: Activity },
            { id: "tickets", label: "Support Tickets", icon: MessageSquare },
            { id: "billing", label: "Invoices & Payments", icon: CreditCard }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                  isActive
                    ? "border-white text-white bg-zinc-900"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* PROJECTS TAB */}
          {activeSubTab === "projects" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Project Milestones Progress */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded p-6">
                  <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-wider">Active Integrations Checklist</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4.5 h-4.5 text-zinc-400" />
                          <span className="font-semibold text-zinc-350">Phase 1: Admin Dashboard Setup</span>
                        </div>
                        <span className="text-zinc-450 font-mono text-xs">Complete</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1.5 rounded overflow-hidden">
                        <div className="bg-white h-full" style={{ width: "100%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4.5 h-4.5 text-zinc-550" />
                          <span className="font-semibold text-zinc-350">Phase 2: Vulnerability Security audit sweeps</span>
                        </div>
                        <span className="text-zinc-350 font-mono text-xs">70% In Progress</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1.5 rounded overflow-hidden">
                        <div className="bg-zinc-650 h-full" style={{ width: "70%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-zinc-550">
                          <Clock className="w-4.5 h-4.5" />
                          <span>Phase 3: Automated container deployments</span>
                        </div>
                        <span className="text-zinc-600 font-mono text-xs">Pending</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-1.5 rounded overflow-hidden">
                        <div className="bg-zinc-850 h-full" style={{ width: "0%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Server Info log */}
                <div className="bg-zinc-900 border border-zinc-800 rounded p-6">
                  <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-zinc-400" /> Server Monitors (Virtual Container V4)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-850">
                      <span className="text-[9px] text-zinc-550 uppercase block">CPU</span>
                      <span className="text-xs font-bold text-white font-mono">18.4%</span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-850">
                      <span className="text-[9px] text-zinc-555 uppercase block">I/O Load</span>
                      <span className="text-xs font-bold text-white font-mono">4.2 MB/s</span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-850">
                      <span className="text-[9px] text-zinc-555 uppercase block">Memory</span>
                      <span className="text-xs font-bold text-white font-mono">1.2 / 4.0 GB</span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-850">
                      <span className="text-[9px] text-zinc-555 uppercase block">Latency</span>
                      <span className="text-xs font-bold text-white font-mono">14ms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded p-5">
                  <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Active Services Scope</h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center bg-zinc-950 p-2.5 rounded border border-zinc-855">
                      <span className="text-zinc-400">Growth Support Standby</span>
                      <span className="text-white font-semibold">Active</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-950 p-2.5 rounded border border-zinc-855">
                      <span className="text-zinc-400">Shield threat monitoring</span>
                      <span className="text-white font-semibold">Active</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-950 p-2.5 rounded border border-zinc-855">
                      <span className="text-zinc-400">Assigned Tech Crew</span>
                      <span className="text-white font-semibold">2 Developers</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TICKETS TAB */}
          {activeSubTab === "tickets" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Tickets Creator Form */}
              <div className="lg:col-span-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded p-6">
                  <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                    <PlusCircle className="w-4 h-4 text-zinc-350" /> Raise Support Ticket
                  </h3>
                  
                  <form onSubmit={handleCreateTicket} className="space-y-4">
                    <div>
                      <label className="text-[9px] text-zinc-550 uppercase font-semibold block mb-1">Issue Description</label>
                      <input
                        type="text"
                        required
                        value={newTicketSubject}
                        onChange={(e) => setNewTicketSubject(e.target.value)}
                        placeholder="e.g. Setup SSL cert renewal config"
                        className="w-full px-3 py-2.5 rounded bg-zinc-950 border border-zinc-855 text-xs text-white focus:outline-none focus:border-zinc-700"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] text-zinc-555 uppercase font-semibold block mb-1">Severity / Priority</label>
                      <div className="flex gap-2">
                        {["Low", "Medium", "High"].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setNewTicketPriority(p)}
                            className={`flex-grow py-2 text-[10px] font-bold rounded border cursor-pointer ${
                              newTicketPriority === p
                                ? "bg-zinc-850 border-zinc-700 text-white"
                                : "bg-zinc-950 border-transparent text-zinc-500"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded text-xs font-bold text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Ticket
                    </button>
                  </form>
                </div>
              </div>

              {/* Tickets List */}
              <div className="lg:col-span-8">
                <div className="bg-zinc-900 border border-zinc-800 rounded p-6">
                  <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-wider">Open Support Tickets</h3>
                  
                  <div className="space-y-3">
                    {tickets.map((t) => (
                      <div key={t.id} className="p-4 rounded bg-zinc-950 border border-zinc-850 flex items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                              {t.id}
                            </span>
                            <span className="text-[9px] font-bold text-zinc-500 uppercase">
                              {t.priority} Priority
                            </span>
                          </div>
                          <p className="text-xs text-white font-medium">{t.subject}</p>
                          <span className="text-[9px] text-zinc-650 block">Submitted: {t.date}</span>
                        </div>

                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-350">
                            {t.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* BILLING TAB */}
          {activeSubTab === "billing" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Unpaid Invoices list */}
              <div className="lg:col-span-8">
                <div className="bg-zinc-900 border border-zinc-800 rounded p-6 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Invoice Settlement</h3>
                    <p className="text-xs text-zinc-400">All services, subscriptions, and custom development invoices can be processed online.</p>
                  </div>
                  
                  <div className="p-5 rounded bg-zinc-950 border border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-white font-bold bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                          INV-8820
                        </span>
                        <span className="text-[9px] text-zinc-400 font-bold bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full uppercase">
                          Due in 4 days
                        </span>
                      </div>
                      <p className="text-xs text-white font-medium">Growth Engine Support Subscription - Jul 2026</p>
                      <p className="text-[10px] text-zinc-500">Service period: Jul 1, 2026 - Jul 31, 2026</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-[10px] text-zinc-500 block">Total Due:</span>
                        <span className="text-sm font-bold text-white">KSh 49,900 KES</span>
                      </div>
                      <div className="relative">
                        <button
                          onClick={handleOpenPay}
                          className="px-4 py-2 bg-white hover:bg-zinc-200 text-black text-xs font-bold rounded cursor-pointer transition-colors"
                        >
                          We accept Paystack payments
                        </button>
                      </div>
                    </div>
                  </div>

                  {{/* Payment Info Card */}
                  showPayNotice && (
                    <div className="p-3 bg-zinc-950 border border-zinc-850 rounded text-white font-mono text-xs flex items-center gap-2 animate-bounce">
                      <AlertCircle className="w-4 h-4 text-zinc-400" />
                      <span>Coming soon</span>
                    </div>
                  )}

                  <div className="p-4 rounded border border-dashed border-zinc-800 bg-zinc-950/20 text-xs text-zinc-450 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <CreditCard className="w-4 h-4 text-zinc-400" /> Merchant Verification
                    </div>
                    <p>We accept Paystack payments for all development contracts and SaaS licenses.</p>
                  </div>
                </div>
              </div>

              {/* Secure payments explanation banner */}
              <div className="lg:col-span-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded p-5 space-y-4">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Shield className="w-4 h-4 text-zinc-400" /> Security Verifications
                  </h3>
                  <p className="text-xs text-zinc-505 leading-relaxed">
                    Online gateways protect transactions using secure encryption tunnels. BetFlexx stores no credential logs on internal server resources.
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}
