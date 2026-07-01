"use client";

import React, { useState, useEffect } from "react";
import { Shield, Menu, X, ArrowRight, LayoutDashboard } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showPortal: boolean;
  setShowPortal: (show: boolean) => void;
}

export default function Navbar({ activeTab, setActiveTab, showPortal, setShowPortal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "calculator", label: "Flex Configurator" },
    { id: "subscriptions", label: "Pricing" },
    { id: "about", label: "Our DNA" },
    { id: "faq", label: "FAQs" },
  ];

  const handleNavClick = (id: string) => {
    setShowPortal(false);
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#04040d]/80 backdrop-blur-md border-b border-[#bd00ff]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => {
              setShowPortal(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-[#bd00ff] via-[#00f0ff] to-[#ff007a] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#020205] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#00f0ff] transition-colors group-hover:text-[#bd00ff]" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Bet<span className="bg-gradient-to-r from-[#00f0ff] to-[#bd00ff] bg-clip-text text-transparent">Flexx</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {!showPortal &&
              navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#00f0ff] cursor-pointer ${
                    activeTab === link.id ? "text-[#00f0ff] relative" : "text-zinc-400"
                  }`}
                >
                  {link.label}
                  {activeTab === link.id && (
                    <span className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#bd00ff]" />
                  )}
                </button>
              ))}
            {showPortal && (
              <button
                onClick={() => {
                  setShowPortal(false);
                  setTimeout(() => {
                    handleNavClick("services");
                  }, 100);
                }}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                ← Back to Landing Page
              </button>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowPortal(!showPortal)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-pointer ${
                showPortal
                  ? "bg-[#bd00ff]/10 border-[#bd00ff] text-[#bd00ff] hover:bg-[#bd00ff]/20"
                  : "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              {showPortal ? "Exit Portal" : "Client Portal"}
            </button>
            <button
              onClick={() => {
                setShowPortal(false);
                setTimeout(() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#bd00ff] to-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1">
                Consultation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen border-b border-[#bd00ff]/20 bg-[#04040d]" : "max-h-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col items-stretch">
          {!showPortal &&
            navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block text-left px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-zinc-900 ${
                  activeTab === link.id ? "text-[#00f0ff] bg-zinc-900/50" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          {showPortal && (
            <button
              onClick={() => {
                setShowPortal(false);
                setIsOpen(false);
              }}
              className="block text-left px-3 py-3 rounded-md text-base font-medium text-zinc-400 hover:text-white"
            >
              ← Back to Landing Page
            </button>
          )}

          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3 px-3">
            <button
              onClick={() => {
                setShowPortal(!showPortal);
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-md text-base font-medium border border-zinc-800 text-zinc-300 bg-zinc-900/50 hover:bg-zinc-900"
            >
              <LayoutDashboard className="w-4 h-4" />
              {showPortal ? "Exit Client Portal" : "Client Portal Dashboard"}
            </button>
            <button
              onClick={() => {
                setShowPortal(false);
                setIsOpen(false);
                setTimeout(() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="w-full py-3 text-center rounded-md text-base font-semibold text-white bg-gradient-to-r from-[#bd00ff] to-[#00f0ff]"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
