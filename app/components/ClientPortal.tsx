"use client";

import React, { useState } from "react";
import {
  Layers,
  Shield,
  Activity,
  Send,
  PlusCircle,
  CreditCard,
  CheckCircle2,
  Clock,
  MessageSquare,
  Search,
  Check,
  AlertCircle
} from "lucide-react";

export default function ClientPortal() {
  const [activeSubTab, setActiveSubTab] = useState<"projects" | "tickets" | "billing">("projects");
  
  // Simulated State for interactive payment demo
  const [showPayModal, setShowPayModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(499);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Simulated State for Ticket Demo
  const [tickets, setTickets] = useState([
    { id: "TKT-104", subject: "Inject custom meta tags dynamically", status: "In Progress", date: "2026-06-28", priority: "High" },
    { id: "TKT-102", subject: "Optimize SQL performance query logs", status: "Resolved", date: "2026-06-25", priority: "Medium" }
  ]);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("Medium");

  // Handle new ticket submission
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

  // Handle Mock Payment Submission
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !cardExpiry || !cardCvc) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setShowPayModal(false);
        setPaymentSuccess(false);
        setCardNumber("");
        setCardExpiry("");
        setCardCvc("");
      }, 2000);
    }, 2000);
  };

  const handleOpenPay = (amount: number) => {
    setPaymentAmount(amount);
    setShowPayModal(true);
  };

  return (
    <section id="portal" className="py-24 min-h-screen bg-[#020205] relative overflow-hidden cyber-grid">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#bd00ff]/5 via-[#00f0ff]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-zinc-900 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="text-xs font-mono text-[#39ff14] tracking-widest uppercase">Client Management Interface</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              BetFlexx Portal Dashboard
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">
              Simulated administrative view. Here you can track system health, scale resources, handle invoices, and configure security scopes.
            </p>
          </div>

          {/* Quick Active stats */}
          <div className="flex items-center gap-4 bg-zinc-900/40 border border-zinc-800 rounded-xl p-3">
            <div className="text-center px-4 border-r border-zinc-800">
              <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Plan status</span>
              <span className="text-xs font-bold text-[#00f0ff]">Growth Active</span>
            </div>
            <div className="text-center px-4">
              <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Unpaid Invoices</span>
              <span className="text-xs font-bold text-yellow-400">$499.00</span>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-zinc-900 mb-8 space-x-1">
          {[
            { id: "projects", label: "Milestones & Health", icon: Activity },
            { id: "tickets", label: "Developer Tickets", icon: MessageSquare },
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
                    ? "border-[#bd00ff] text-white bg-zinc-900/20"
                    : "border-transparent text-zinc-400 hover:text-white"
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
                <div className="cyber-card rounded-xl p-6">
                  <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Active System Integrations</h3>
                  
                  <div className="space-y-6">
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#39ff14]" />
                          <span className="font-bold text-zinc-300">Phase 1: React Admin Dashboard Boilerplate</span>
                        </div>
                        <span className="text-[#39ff14] font-semibold font-mono">100% Done</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-2 border border-zinc-900 rounded-full overflow-hidden">
                        <div className="bg-[#39ff14] h-full rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4.5 h-4.5 text-[#bd00ff]" />
                          <span className="font-bold text-zinc-300">Phase 2: Cybr penetration threat sweep</span>
                        </div>
                        <span className="text-[#bd00ff] font-semibold font-mono">70% In Progress</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-2 border border-zinc-900 rounded-full overflow-hidden">
                        <div className="bg-[#bd00ff] h-full rounded-full" style={{ width: "70%" }} />
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 font-mono text-zinc-500">
                          <div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center text-[10px]">3</div>
                          <span>Phase 3: Automated Docker/Kubernetes container deployment</span>
                        </div>
                        <span className="text-zinc-600 font-mono">Pending Setup</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-2 border border-zinc-900 rounded-full overflow-hidden">
                        <div className="bg-zinc-800 h-full rounded-full" style={{ width: "0%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Server Info log */}
                <div className="cyber-card rounded-xl p-6 relative bg-black/40">
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#00f0ff]" /> Server Resource Monitors (Virtual Container V4)
                    </h3>
                    <span className="text-[10px] text-zinc-500 font-mono">REGION: EU-WEST-1</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-zinc-950/80 rounded border border-zinc-900">
                      <span className="text-[10px] text-zinc-500 uppercase block">CPU usage</span>
                      <span className="text-sm font-bold text-white font-mono">18.4%</span>
                    </div>
                    <div className="p-3 bg-zinc-950/80 rounded border border-zinc-900">
                      <span className="text-[10px] text-zinc-500 uppercase block">Disk Reads</span>
                      <span className="text-sm font-bold text-white font-mono">4.2 MB/s</span>
                    </div>
                    <div className="p-3 bg-zinc-950/80 rounded border border-zinc-900">
                      <span className="text-[10px] text-zinc-500 uppercase block">Memory Util</span>
                      <span className="text-sm font-bold text-[#00f0ff] font-mono">1.2 GB / 4.0 GB</span>
                    </div>
                    <div className="p-3 bg-zinc-950/80 rounded border border-zinc-900">
                      <span className="text-[10px] text-zinc-500 uppercase block">Response Time</span>
                      <span className="text-sm font-bold text-[#39ff14] font-mono">14ms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="cyber-card rounded-xl p-5 border-[#00f0ff]/20">
                  <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Active Services Scope</h3>
                  <div className="space-y-3.5 text-xs">
                    <div className="flex justify-between items-center bg-zinc-950 p-2.5 rounded border border-zinc-900">
                      <span className="text-zinc-400 font-medium">Growth Plan Standby</span>
                      <span className="text-[#00f0ff] font-bold">Active</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-950 p-2.5 rounded border border-zinc-900">
                      <span className="text-zinc-400 font-medium">Cyber Shield Monitoring</span>
                      <span className="text-[#39ff14] font-bold">Active</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-950 p-2.5 rounded border border-zinc-900">
                      <span className="text-zinc-400 font-medium">2 Dedicated Tech Crew</span>
                      <span className="text-white font-bold">Assigned</span>
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
                <div className="cyber-card rounded-xl p-6">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                    <PlusCircle className="w-5 h-5 text-[#bd00ff]" /> Raise Support Ticket
                  </h3>
                  
                  <form onSubmit={handleCreateTicket} className="space-y-4">
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Issue Description</label>
                      <input
                        type="text"
                        required
                        value={newTicketSubject}
                        onChange={(e) => setNewTicketSubject(e.target.value)}
                        placeholder="e.g. Setup SSL cert renewal config"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">Severity / Priority</label>
                      <div className="flex gap-2">
                        {["Low", "Medium", "High"].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setNewTicketPriority(p)}
                            className={`flex-1 py-2 text-[10px] font-bold rounded-lg border cursor-pointer ${
                              newTicketPriority === p
                                ? "bg-[#bd00ff]/10 border-[#bd00ff] text-[#bd00ff]"
                                : "bg-zinc-950/40 border-zinc-900 text-zinc-500"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#bd00ff] to-[#00f0ff] hover:shadow-[0_0_15px_rgba(189,0,255,0.2)] transition-all cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Ticket
                    </button>
                  </form>
                </div>
              </div>

              {/* Tickets List */}
              <div className="lg:col-span-8">
                <div className="cyber-card rounded-xl p-6">
                  <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Open Tech Support Tickets</h3>
                  
                  <div className="space-y-3.5">
                    {tickets.map((t) => (
                      <div key={t.id} className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-zinc-500 font-bold bg-zinc-900 px-2 py-0.5 rounded">
                              {t.id}
                            </span>
                            <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase ${
                              t.priority === "High"
                                ? "bg-red-950 text-red-400 border border-red-900/30"
                                : t.priority === "Medium"
                                ? "bg-yellow-950 text-yellow-400 border border-yellow-900/30"
                                : "bg-zinc-900 text-zinc-400"
                            }`}>
                              {t.priority}
                            </span>
                          </div>
                          <p className="text-xs text-white font-medium">{t.subject}</p>
                          <span className="text-[10px] text-zinc-500 block">Submitted: {t.date}</span>
                        </div>

                        <div className="text-right">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                            t.status === "Resolved"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-900"
                              : t.status === "In Progress"
                              ? "bg-purple-950 text-purple-400 border border-purple-900"
                              : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              t.status === "Resolved" ? "bg-emerald-400" : t.status === "In Progress" ? "bg-purple-400" : "bg-white"
                            }`} />
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
                <div className="cyber-card rounded-xl p-6">
                  <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Unpaid System Invoices</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#ffb703]/5 border border-[#ffb703]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-yellow-400 font-bold bg-[#ffb703]/10 border border-[#ffb703]/20 px-2 py-0.5 rounded">
                            INV-8820
                          </span>
                          <span className="text-[9px] text-[#ffb703] font-bold bg-[#ffb703]/10 border border-[#ffb703]/20 px-2 py-0.5 rounded-full uppercase">
                            Due in 4 days
                          </span>
                        </div>
                        <p className="text-xs text-white font-medium">Growth Engine Support Subscription - Jul 2026</p>
                        <p className="text-[10px] text-zinc-500">Service Period: Jul 1, 2026 - Jul 31, 2026</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="text-xs text-zinc-400 block">Total Due:</span>
                          <span className="text-base font-bold text-white">$499.00 USD</span>
                        </div>
                        <button
                          onClick={() => handleOpenPay(499)}
                          className="px-4 py-2 bg-gradient-to-r from-[#bd00ff] to-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] text-white text-xs font-bold rounded-lg cursor-pointer transition-all"
                        >
                          Pay Invoice
                        </button>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mt-10 mb-6 uppercase tracking-wider">Past Paid Invoices</h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex justify-between items-center text-xs text-zinc-400">
                      <div>
                        <div className="font-bold text-white">INV-8791 (Custom API Development Setup)</div>
                        <div className="text-[10px] text-zinc-500 mt-1">Paid: Jun 14, 2026</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">$3,500.00 USD</div>
                        <span className="text-[10px] text-[#39ff14] font-semibold">✔ Paid successfully</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure online payments explanation banner */}
              <div className="lg:col-span-4">
                <div className="cyber-card rounded-xl p-5 space-y-4">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#39ff14]" /> Secure PCI Compliance
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    BetFlexx integrates secure online gateways for code subscriptions and setup fees. Your credentials are fully protected under AES-256 cloud container encryptions.
                  </p>
                  <hr className="border-zinc-900" />
                  <div className="flex gap-2 items-center text-[10px] text-zinc-500">
                    <AlertCircle className="w-4 h-4 text-[#bd00ff]" />
                    <span>Automatic notifications sent upon deployment triggers</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* MODAL MOCKUP PAYMENT */}
      {showPayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="cyber-card rounded-2xl p-6 sm:p-8 w-full max-w-[420px] bg-[#090915] border-[#bd00ff]/50 shadow-[0_0_40px_rgba(189,0,255,0.2)] relative">
            
            {/* Payment success alert */}
            {paymentSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-[#39ff14] flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#39ff14] animate-bounce" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Payment Authorized</h4>
                  <p className="text-xs text-zinc-500 mt-1">Invoice INV-8820 marked as PAID. Initializing scope triggers.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePayment} className="space-y-5">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
                  <h4 className="font-bold text-white">Secure Invoice Payment</h4>
                  <button
                    type="button"
                    onClick={() => setShowPayModal(false)}
                    className="text-zinc-500 hover:text-white font-bold cursor-pointer text-sm"
                  >
                    Cancel
                  </button>
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">Invoice Total Amount</label>
                  <div className="text-2xl font-extrabold text-[#00f0ff]">${paymentAmount}.00 USD</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase block mb-1">Cardholder Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="4111 2222 3333 4444"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff]"
                      />
                      <CreditCard className="w-4 h-4 text-zinc-600 absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase block mb-1">Expiration Date</label>
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase block mb-1">Security Code (CVC)</label>
                      <input
                        type="password"
                        required
                        placeholder="•••"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full px-3 py-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-white focus:outline-none focus:border-[#bd00ff]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#bd00ff] to-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isProcessing ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Decrypting Gateway Sync...
                    </>
                  ) : (
                    <>Authorize Payment Securely</>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
